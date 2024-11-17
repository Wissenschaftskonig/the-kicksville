export const verifyTransaction = async (values: {
  vNUBAN: string;
  startDate: string;
  endDate: string;
}) => {
  const verifyStatusData = {
    ...values,
  };

  const BASE_URL = process.env.NEXT_PUBLIC_VERIFY_TRANSACTION_BASE_URL;

  const endpoint = `${BASE_URL}/status`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verifyStatusData),
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
