export const createVirtualAccount = async (values: {
  bvn: string;
  firstName: string;
  lastName: string;
  middleName: string;
  accountName: string;
  email: string;
  phone: string;
  productType: string;
  customerReference: string;
  expireAt: string;
  singleDepositLimit: string;
  merchant: {
    code: string;
  };
}) => {
  const createAccountData = {
    ...values,
  };

  const BASE_URL = process.env.NEXT_PUBLIC_CREATE_VIRTUAL_ACCOUNT_BASE_URL;

  const endpoint = `${BASE_URL}/createVirtualAccount`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createAccountData),
  });

  const contentType = response.headers.get("content-type");
  if (!response.ok) {
    if (contentType && contentType.includes("application/json")) {
      const text = await response.text();
      if (text) {
        const errorData = JSON.parse(text);
        throw new Error(errorData.message || "Something went wrong");
      }
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (contentType && contentType.includes("application/json")) {
    const text = await response.text();
    if (text) {
      return JSON.parse(text);
    }
  }

  return null;
};
