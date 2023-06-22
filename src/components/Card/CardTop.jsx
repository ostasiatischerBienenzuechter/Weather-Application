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
      <div className="md:space-x-3 divide-x sm:">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-xl text-white hover:text-orange-200 transition ease-in-out"
        >
          °C
        </button>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-xl text-white pl-2 hover:text-orange-200 transition ease-in-out"
        >
          °F
        </button>
      </div>
    </div>
  );
}
