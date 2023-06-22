import DataDescription from "./DataDescription";
import {
  BsWater,
  BsWind,
  BsThermometerHigh,
  BsThermometerLow,
  BsClouds,
} from "react-icons/bs";

import { GiThermometerScale } from "react-icons/gi";

export default function DataGrid({ data, units }) {
  let tempUnit = units === "metric" ? "°c" : "°F";

  return (
    <div className="grid grid-col-1 sm:grid-cols-2 overflow-none">
      <DataDescription
        Icon={BsClouds}
        description="Bewölkung"
        value={data.clouds.all}
        unit="%"
      />
      <DataDescription
        Icon={GiThermometerScale}
        description="Gefühlt"
        value={Math.floor(data.main.feels_like)}
        unit={tempUnit}
      />
      <DataDescription
        Icon={BsThermometerLow}
        description="Min"
        value={Math.floor(data.main.temp_min)}
        unit={tempUnit}
      />
      <DataDescription
        Icon={BsThermometerHigh}
        description="Max"
        value={Math.floor(data.main.temp_max)}
        unit={tempUnit}
      />
      <DataDescription
        Icon={BsWater}
        description="Luftfeuchtigkeit"
        value={data.main.humidity}
        unit="%"
      />
      <DataDescription
        Icon={BsWind}
        description="Windstärke"
        value={
          tempUnit === "metric"
            ? Math.floor((data.wind.speed * 3600) / 1000)
            : Math.floor(data.wind.speed * 2.237)
        }
        unit={units === "metric" ? "km/h" : "mph"}
      />
    </div>
  );
}
