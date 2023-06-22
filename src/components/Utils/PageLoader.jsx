import { ImSpinner9 } from "react-icons/im";

export default function PageLoader() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <div>
        <ImSpinner9 className="text-4xl animate-spin text-white" />
      </div>
    </div>
  );
}
