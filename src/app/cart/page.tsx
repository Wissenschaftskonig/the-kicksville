"use client";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();

  const proceedToCheckout = () => {
    router.push("/checkout");
  };
  return (
    <>
      <h1>cart</h1>
      <button className="btn btn-ghost" onClick={proceedToCheckout}>
        proceed
      </button>
    </>
  );
}
