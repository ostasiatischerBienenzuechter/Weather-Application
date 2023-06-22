import DateDisplay from "../Utils/DateDisplay";
import RegionDescription from "./RegionDescription";

export default function CardTop({ data, icon, units, setUnits }) {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <div className="text-8xl">{icon}</div>
        <div className="flex flex-col items-start justify-center mx-3">
          <RegionDescription data={data} />
          <DateDisplay data={data} />
        </div>
      </div>
      <div className="sm:space-x-3 max-[639px]:divide-none divide-x max-[639px]:px-2">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-xl text-white hover:text-orange-200 transition ease-in-out sm:pr-2 md:pr-0"
        >
          °C
        </button>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-xl text-white sm:pl-2 hover:text-orange-200 transition ease-in-out max-[489px]:px-1 max-[550px]:py-2 max-[639px]:pl-4"
        >
          °F
        </button>
      </div>
    </div>
  );
}
