import moment from "moment";

export default function DateDisplay({ data }) {
  const currTime = moment()
    .utcOffset(data.timezone / 60)
    .format("LLLL");
  return <div>{currTime}</div>;
}
