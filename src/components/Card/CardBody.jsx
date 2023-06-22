import Temperature from "./Temperature";

export default function CardBody({ data, units }) {
  return (
    <div className="mt-14 mb-20">
      <Temperature data={data} units={units} />
      <div className="capitalize text-center pt-5">
        {data.weather[0].description}
      </div>
    </div>
  );
}
