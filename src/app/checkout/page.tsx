"use client";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation } from "@tanstack/react-query";
import { createVirtualAccount } from "@/actions/createVitrualAccount";
import {
  formatAmount,
  generateCustomerReference,
  generateExpireAt,
  getCurrentDate,
  getTomorrowDate,
  showToast,
} from "@/utils";
import { verifyTransaction } from "@/actions/verifyTransaction";
import CustomButton from "@/components/CustomButton";
import Loader from "@/components/Loader";
import { useCart } from "@/context/CartContextProvider";

const paymentMethods = [
  {
    id: "card",
    title: "Card Payment",
    icon: "material-symbols:credit-card",
    description: "Pay with Debit/Credit Card",
  },
  {
    id: "ussd",
    title: "USSD",
    icon: "heroicons:device-phone-mobile",
    description: "Pay using USSD code",
  },
  {
    id: "transfer",
    title: "Bank Transfer",
    icon: "mingcute:transfer-fill",
    description: "Pay via Bank Transfer",
  },
];

export default function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const { persistCartItem } = useCart();

  const { mutate: CreateAccountMutation, data } = useMutation({
    mutationFn: createVirtualAccount,
    onSuccess: (data) => {
      showToast("success", data.message);
      console.log(data);
    },
    onError: (error: Error) => {
      showToast("error", error.message);
    },
  });

  const { mutate: VerifyStatusMutation, isPending } = useMutation({
    mutationFn: verifyTransaction,
    onSuccess: (data) => {
      showToast("success", data.message);
      setStep(3);
      persistCartItem(false);

      console.log(data);
    },
    onError: (error: Error) => {
      showToast("error", error.message);
    },
  });

  const accountData = data?.data?.provider_response;

  const mockRequestData = {
    bvn: "09871545171",
    firstName: "James",
    lastName: "May",
    middleName: "Joseph",
    accountName: "KicksVille",
    email: "james@gmail.com",
    phone: "08101827000",
    productType: "TTO",
    customerReference: generateCustomerReference(),
    expireAt: generateExpireAt(),
    singleDepositLimit: "151890",
    merchant: {
      code: "A33E0",
    },
  };

  const mockResponse = {
    vNUBAN: accountData?.virtualAccount?.vNUBAN,
    startDate: getCurrentDate(),
    endDate: getTomorrowDate(),
  };

  const handleVerifyPayment = () => {
    VerifyStatusMutation(mockResponse);
  };

  const handleMethodSelect = (methodId: string) => {
    if (methodId === "transfer" && selectedMethod !== "transfer") {
      CreateAccountMutation(mockRequestData);
    }
    setSelectedMethod(methodId);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>
      <main className="px-4 lg:px-8 max-w-4xl mx-auto">
        {step === 1 && (
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Customer Information</h1>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="relative">
                <Icon
                  icon="mdi:account-outline"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={customerInfo.fullName}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      fullName: e.target.value,
                    })
                  }
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 font-semibold"
                />
              </div>

              <div className="relative">
                <Icon
                  icon="mdi:email-outline"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, email: e.target.value })
                  }
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 font-semibold"
                />
              </div>

              <div className="relative">
                <Icon
                  icon="mdi:phone-outline"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customerInfo.phoneNumber}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      phoneNumber: e.target.value,
                    })
                  }
                  required
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 font-semibold"
                />
              </div>
              <CustomButton
                buttonText="Proceed to Payment Options"
                buttonTypeOne
                style="uppercase text-md font-thin w-full"
              />
            </form>
          </div>
        )}

        {step === 2 && (
          <>
            <div className="mb-2">
              <h1 className="text-2xl font-bold mb-2">Checkout</h1>
              <p className="text-gray-600">
                Choose your preferred payment method
              </p>
            </div>

            <div className="space-y-2">
              <div className="grid gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => handleMethodSelect(method.id)}
                    className={`
                  flex items-center p-4 rounded-lg border transition-all ease-in-out duration-200
                  ${
                    selectedMethod === method.id
                      ? "border-black bg-black text-white"
                      : "border-gray-300 dark:border-zinc-500 hover:border-gray-400"
                  }
                `}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-2 bg-gray-100 rounded-full">
                        <Icon
                          icon={method.icon}
                          className={`h-6 w-6 ${
                            selectedMethod === method.id
                              ? "text-black"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold">{method.title}</h3>
                        <p
                          className={`text-sm ${
                            selectedMethod === method.id
                              ? "text-gray-200"
                              : "text-gray-500"
                          }`}
                        >
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div
                        className={`
                    w-5 h-5 rounded-full border-2
                    ${
                      selectedMethod === method.id
                        ? "border-white"
                        : "border-gray-300 dark:border-zinc-500"
                    }
                    flex items-center justify-center
                  `}
                      >
                        {selectedMethod === method.id && (
                          <div className="w-3 h-3 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {selectedMethod && (
                <div className="mt-8 space-y-4">
                  {selectedMethod === "card" && (
                    <div className="p-6 border border-gray-300 dark:border-zinc-500 rounded-lg space-y-4">
                      <h3 className="font-semibold mb-4">Card Details</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full p-3 border rounded-lg"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full p-3 border rounded-lg"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full p-3 border rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedMethod === "transfer" && (
                    <div className="p-6 border border-gray-300 dark:border-zinc-500 rounded-lg space-y-4">
                      <h3 className="font-semibold mb-2">
                        Bank Transfer Details
                      </h3>

                      {accountData === undefined ? (
                        <Loader loaderSize="loading-lg" />
                      ) : (
                        <div className="space-y-2 text-sm">
                          <p>Bank Name: United Bank for Africa</p>
                          <p>
                            Account Number:{" "}
                            {accountData?.virtualAccount?.vNUBAN}
                          </p>
                          <p>
                            Account Name:{" "}
                            {accountData?.virtualAccount?.accountName}--
                            {customerInfo.fullName}
                          </p>
                          <p>
                            Amount:{" "}
                            {accountData?.virtualAccount?.singleDepositLimit !==
                            undefined
                              ? `₦${formatAmount(
                                  accountData.virtualAccount.singleDepositLimit
                                )}`
                              : "N/A"}
                          </p>
                        </div>
                      )}

                      <p className="text-sm text-red-600 mt-4 font-bold uppercase">
                        Please transfer the exact amount
                      </p>
                    </div>
                  )}
                  {selectedMethod === "ussd" && (
                    <div className="p-6 border border-gray-300 dark:border-zinc-500 rounded-lg space-y-4">
                      <h3 className="font-semibold mb-4">USSD Payment</h3>
                      <div className="bg-gray-200 p-4 rounded-lg text-center">
                        <p className="text-lg font-mono">*919#</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        Dial the USSD code above on your phone to complete
                        payment
                      </p>
                    </div>
                  )}
                  <CustomButton
                    buttonText={
                      isPending ? (
                        <Loader bodyStyle="bg-transparent" />
                      ) : (
                        "Complete Payment"
                      )
                    }
                    buttonTypeOne
                    style="uppercase text-md font-thin w-full"
                    onClick={handleVerifyPayment}
                    disabled={isPending || selectedMethod !== "transfer"}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <div className="flex flex-col justify-center items-center h-[70vh] gap-8">
            <Icon
              icon="icon-park-twotone:success"
              className="h-40 w-40 text-green-400"
            />
            <div className="text-center">
              <p className="text-4xl font-bold uppercase my-2">
                Order Confirmed
              </p>
              <p className="text-xl font-thin text-gray-500 uppercase mb-2">
                Thanks for your patronage
              </p>
              <p className="text-xl font-bold capitalize">
                {customerInfo.fullName}
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
