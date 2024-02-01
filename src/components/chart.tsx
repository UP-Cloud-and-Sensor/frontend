import ChartJS from "chart.js/auto";
import { useEffect, useRef } from "react";

export type PlotData = [(string | number)[], (string | number)[]];

export default function Chart({
  label,
  data,
}: {
  label: string;
  data: PlotData;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);

  const config = {
    labels: data[0],
    datasets: [
      {
        label,
        data: data[1],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    const chart = new ChartJS(canvas.current!, {
      type: "line",
      data: config,
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <>
      <div style={{ width: "100%" }}>
        <canvas ref={canvas}></canvas>
      </div>
    </>
  );
}
