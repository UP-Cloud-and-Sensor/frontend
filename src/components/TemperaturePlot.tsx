import { useEffect, useState } from "react";
import Chart, { PlotData } from "./chart";

export default function TemperaturePlot() {
  const [data, setData] = useState<PlotData>();

  useEffect(() => {
    fetch("https://cip-up.ew.r.appspot.com/get_T")
      .then((response) => response.json())
      .then((data: { data: { T: number; timestamp: string }[] }) => {
        console.log(data);

        setData([
          data.data.map(({ timestamp }) => timestamp),
          data.data.map(({ T }) => T),
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Chart label="Temperature" data={data ?? [[], []]} />
    </>
  );
}
