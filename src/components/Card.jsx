import CardTop from "./Card/CardTop";
import CardBody from "./Card/CardBody";
import CardBottom from "./Card/CardBottom";
import CardLoader from "./Utils/CardLoader";

export default function Card({ loading, data, icon, units, setUnits }) {
  return (
    <div className="w-full max-w-lg sm:max-w-3xl bg-black rounded-3xl py-12 px-6 bg-opacity-50">
      {loading ? (
        <CardLoader />
      ) : (
        <>
          <CardTop data={data} icon={icon} units={units} setUnits={setUnits} />
          <CardBody data={data} units={units} />
          <CardBottom data={data} units={units} />
        </>
      )}
    </div>
  );
}
