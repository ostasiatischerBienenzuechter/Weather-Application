import { ImSpinner9 } from "react-icons/im";

export default function CardLoader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ImSpinner9 className="text-5xl animate-spin" />
    </div>
  );
}
