import CitySearchForm from "./CitySearchForm";
import Card from "./Card";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import axios from "axios";
import PageLoader from "./Utils/PageLoader";
import { assignIcon } from "./Utils/icons";

export default function Main() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Cologne");
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    (async function () {
      setLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${
            import.meta.env.VITE_API_KEY
          }&lang=de`
        )
        .then((res) => {
          setTimeout(() => {
            setData(res.data);
            setLoading(false);
          }, 500);
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err);
        });
    })();
  }, [location, units]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg(``);
    }, 1000);
    return () => clearTimeout(timer);
  }, [errorMsg]);

  if (!data) {
    return <PageLoader />;
  }

  let icon = assignIcon(data);

  return (
    <main className="bg-weatherBackground bg-cover bg-center bg-no-repeat mx-auto w-full min-h-screen flex flex-col items-center justify-center text-white px-4">
      <CitySearchForm
        setLocation={setLocation}
        animate={animate}
        setAnimate={setAnimate}
        errorMsg={errorMsg}
      />
      <Card
        loading={loading}
        data={data}
        icon={icon}
        units={units}
        setUnits={setUnits}
      />
      <Footer />
    </main>
  );
}
