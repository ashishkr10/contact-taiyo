import React, { useEffect, useState } from "react";

//packages import
import Chart from "react-apexcharts";
import axios from "axios";

export default function Graph() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const lineGraph = async () => {
      try {
        const res = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=al"
        );
        if (res?.status === 200) {
          setItem(res.data);
        } else {
          console.log("An Error Occured");
        }
      } catch (error) {
        console.error(error.res);
      }
    };
    lineGraph();
  }, []);

  if (item === null) return <h1>Loading...</h1>;

  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: Object.keys(item.cases)?.map((item) => {
          return item;
        }),
      },
      yaxis: [
        {
          min: 672000000,
          max: 677000000,
        },
      ],
    },
    series: [
      {
        name: "Total Cases",
        data: Object.values(item.cases)?.map((item) => {
          return item;
        }),
      },
    ],
  };

  return data === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <h2 className="text-2xl mb-4">
          Line graph showing the cases fluctuations
        </h2>
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height="600"
      />
    </div>
  );
}
