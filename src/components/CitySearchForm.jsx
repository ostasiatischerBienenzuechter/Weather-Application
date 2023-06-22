import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function CitySearchForm({
  setLocation,
  animate,
  setAnimate,
  errorMsg,
}) {
  const [city, setCity] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (city !== "") {
      setLocation(city);
    }
    const input = document.querySelector("input");
    if (input.value === "") {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
    input.value = "";
    setCity("");
  };

  return (
    <div className="w-full max-w-lg sm:max-w-3xl">
      {errorMsg && (
        <div className="w-full text-center text-black font-semibold text-xl p-1">
          {`${errorMsg.response.data.message}`}
        </div>
      )}

      <div
        className={`${
          animate ? "animate-shake" : "animate-none"
        } bg-black bg-opacity-50 rounded-full mb-8`}
      >
        <div className="h-full relative flex items-center justify-between p-2">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search..."
            className="text-xl w-full bg-transparent focus:outline-none placeholder:text-white text-white text-md font-light pl-6 h-full border-r border-r-white	"
          />
          <button
            onClick={handleSearchClick}
            className="w-20 h-12 rounded-full flex justify-center items-center transition"
          >
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
