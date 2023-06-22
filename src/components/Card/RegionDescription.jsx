export default function RegionDescription({ data }) {
  return (
    <div className="text-2xl font-semibold">
      {data.name}, {data.sys.country}
    </div>
  );
}
