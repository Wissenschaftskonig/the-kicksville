import React from "react";

interface LoaderProps {
  bodyStyle?: string;
  loaderSize?: "loading-sm" | "loading-md" | "loading-lg";
}
const Loader = ({ bodyStyle, loaderSize }: LoaderProps) => {
  return (
    <main className={`flex w-full items-center justify-center ${bodyStyle}`}>
      <span className={`loading loading-bars ${loaderSize}`}></span>
    </main>
  );
};

export default Loader;
