import DataGrid from "./DataGrid";

export default function CardBottom({ data, units }) {
  return (
    <div className="w-full max-w-lg mx-auto flex items-center justify-center">
      <DataGrid data={data} units={units} />
    </div>
  );
}
