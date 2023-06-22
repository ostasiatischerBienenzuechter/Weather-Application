export default function Temperature({ data, units }) {
  return (
    <div className="flex justify-center items-center pb-8">
      <p className="text-9xl leading-none font-light">
        {Math.floor(data.main.temp)}
      </p>
      <p className="text-6xl">{units === "metric" ? "°C" : "°F"}</p>
    </div>
  );
}
