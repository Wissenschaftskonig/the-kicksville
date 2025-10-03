"use client";

import { useFormik } from "formik";
import { useState } from "react";

export default function Checkout() {
	const [step, setStep] = useState(1);
	// ✅ Merchant type
	interface Merchant {
		merchantId: number;
		email: string;
		currency: "NGN" | "USD";
		invoiceAmount: string;
		description: string;
	}

	const [merchant, setMerchant] = useState<Merchant | null>(null);

	interface FormValues {
		email: string;
		currency: string;
		invoice: string;
		description: string;
	}

	type FormErrors = Partial<Record<keyof FormValues, string>>;

	const validate = (values: FormValues): FormErrors => {
		const errors: FormErrors = {};

		if (!values.email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = "Invalid email address";
		}

		if (!values.currency) {
			errors.currency = "Required";
		}

		if (!values.invoice) {
			errors.invoice = "Required";
		} else if (isNaN(Number(values.invoice))) {
			errors.invoice = "Invoice must be a number";
		} else if (values.invoice.length > 20) {
			errors.invoice = "Must be 20 characters or less";
		}

		if (!values.description) {
			errors.description = "Required";
		} else if (values.description.length > 100) {
			errors.description = "Must be 100 characters or less";
		}

		return errors;
	};

	const formik = useFormik<FormValues>({
		initialValues: {
			email: "",
			currency: "",
			invoice: "",
			description: "",
		},
		validate,
		onSubmit: (values) => {
			// Generate merchant object
			const merchantData: Merchant = {
				merchantId: 1,
				email: values.email,
				currency: values.currency as "NGN" | "USD",
				invoiceAmount: values.invoice,
				description: values.description,
			};

			setMerchant(merchantData);
			console.log("Merchant Created ✅", merchantData);

			setStep(2); // move to step 2
		},
	});

	return (
		<div className="flex items-center justify-center w-full h-[calc(100vh-78px)]">
			{step === 1 && (
				<div className="bg-white shadow-md drop-shadow-md rounded-lg border w-[27%] p-5">
					<h1 className="font-semibold">Request Payment</h1>
					<p className="mt-2 md:w-[80%] text-sm text-gray-600 font-medium">
						Enter amount, description and request payment from client.
					</p>

					<form
						onSubmit={formik.handleSubmit}
						className="flex flex-col gap-5 mt-4"
					>
						<div className="space-y-2">
							<label htmlFor="email" className="text-[#81909D] text-xs">
								Customer Email
							</label>
							<input
								type="text"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={`rounded-lg border py-2.5 px-3 w-full h-11 ${
									formik.touched.email && formik.errors.email
										? "border-red-500"
										: "border-[#81909D]"
								}`}
							/>
							{formik.errors.email && (
								<p className="text-red-500 text-xs">{formik.errors.email}</p>
							)}
						</div>

						<div className="space-y-2">
							<label htmlFor="currency" className="text-[#81909D] text-xs">
								Currency
							</label>
							<select
								id="currency"
								name="currency"
								value={formik.values.currency}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={`rounded-lg border py-2.5 px-3 w-full h-11 bg-white ${
									formik.touched.currency && formik.errors.currency
										? "border-red-500"
										: "border-[#81909D]"
								}`}
							>
								<option value="">Select currency</option>
								<option value="NGN">Naira (₦)</option>
								<option value="USD">USD ($)</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="invoice" className="text-[#81909D] text-xs">
								Invoice Amount
							</label>
							<input
								type="text"
								name="invoice"
								placeholder="₦"
								value={formik.values.invoice}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={`rounded-lg border py-2.5 px-3 w-full h-11 ${
									formik.touched.invoice && formik.errors.invoice
										? "border-red-500"
										: "border-[#81909D]"
								}`}
							/>
							{formik.errors.invoice && (
								<p className="text-red-500 text-xs">{formik.errors.invoice}</p>
							)}
						</div>

						<div className="space-y-2">
							<label htmlFor="description" className="text-[#81909D] text-xs">
								Description
							</label>
							<input
								type="text"
								name="description"
								value={formik.values.description}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={`rounded-lg border py-2.5 px-3 w-full h-11 ${
									formik.touched.description && formik.errors.description
										? "border-red-500"
										: "border-[#81909D]"
								}`}
							/>
							{formik.errors.description && (
								<p className="text-red-500 text-xs">
									{formik.errors.description}
								</p>
							)}
						</div>

						<button
							type="submit"
							className="text-white bg-[#C80000] rounded-lg py-2.5 px-3 w-full h-11"
						>
							Submit
						</button>
					</form>
				</div>
			)}

			{step === 2 && merchant && (
				<div className="bg-white shadow-md drop-shadow-md rounded-lg border w-[27%] p-5">
					{/* <h1 className="font-semibold mb-4">Merchant Created ✅</h1>
					<p className="text-sm text-gray-600">
						<strong>ID:</strong> {merchant.merchantId}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Email:</strong> {merchant.email}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Currency:</strong> {merchant.currency}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Invoice:</strong> {merchant.invoiceAmount}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Description:</strong> {merchant.description}
					</p> */}
					<h1 className="text-lg font-semibold">Review</h1>
					<div className="text-gray-400 font-medium">
						You are about to request the sum of{" "}
						<span className="font-black text-gray-600">
							₦{merchant.invoiceAmount}
						</span>{" "}
						from{" "}
						<span className="font-black text-gray-600">{merchant.email}</span>
					</div>

					<button
						onClick={() => setStep(1)}
						className="mt-6 bg-red-500 text-white rounded-lg py-2.5 px-3 w-full h-11"
					>
						Send Request
					</button>

					<button
						onClick={() => setStep(1)}
						className="mt-4 text-[#C80000] border border-[#C80000] rounded-lg py-2.5 px-3 w-full h-11"
					>
						Edit Request
					</button>
				</div>
			)}
		</div>
	);
}
