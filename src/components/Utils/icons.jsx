import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoIosThunderstorm,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsFillCloudFogFill,
} from "react-icons/bs";

import { TiWeatherCloudy } from "react-icons/ti";

const weather = new Map();
weather.set("Thunderstorm", <IoIosThunderstorm />);
weather.set("Drizzle", <BsCloudDrizzleFill />);
weather.set("Rain", <IoMdRainy />);
weather.set("Snow", <IoMdSnow />);
weather.set("Clouds", <IoMdCloudy />);
weather.set("Clear", <IoMdSunny />);
weather.set("Haze", <BsCloudHaze2Fill />);
weather.set("Fog", <BsFillCloudFogFill />);

export function assignIcon(data) {
  return weather.get(data.weather[0].main) !== undefined ? (
    weather.get(data.weather[0].main)
  ) : (
    <TiWeatherCloudy />
  );
}
