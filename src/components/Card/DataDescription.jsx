export default function DataDescription({ Icon, description, value, unit }) {
  return (
    <div className="flex items-center gap-x-2 py-2">
      <div className="flex items-center">
        <Icon className="ml-3 mr-1" />
        {`${description}:`}
      </div>
      <div>
        <span className="mr-4">{`${value} ${unit}`}</span>
      </div>
    </div>
  );
}
