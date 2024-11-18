import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <Loader loaderSize="loading-lg" />
    </div>
  );
}
