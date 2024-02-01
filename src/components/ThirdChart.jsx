//T Chart
import React, { useEffect } from "react";
import * as d3 from "d3";

const margin = { top: 20, right: 30, bottom: 30, left: 40 };
var default_width = 600 - margin.left - margin.right;
var default_height = 400 - margin.top - margin.bottom;
var default_ratio = default_width / default_height;

var current_width = window.innerWidth;
var current_height = window.innerHeight;
var current_ratio = current_width / current_height;

var width;
var height;

// console.log(current_width)
if (current_width < 700) {
  width = 350 - margin.left - margin.right;
  height = 150 - margin.top - margin.bottom;
} else {
  width = 600 - margin.left - margin.right;
  height = 400 - margin.top - margin.bottom;
}

const ThirdChart = () => {
  useEffect(() => {
    const data = [
      { tag: "UP_1", boot_times: 1, time: 10, pH: 6.8, TDS: 150.0, T: 25.4 },
      { tag: "UP_1", boot_times: 1, time: 14, pH: 3.2, TDS: 320.0, T: 24.8 },
      { tag: "UP_1", boot_times: 1, time: 20, pH: 7.5, TDS: 200.0, T: 25.2 },
      { tag: "UP_1", boot_times: 1, time: 24, pH: 4.9, TDS: 180.0, T: 25.6 },
      { tag: "UP_1", boot_times: 1, time: 30, pH: 8.3, TDS: 280.0, T: 24.9 },
      { tag: "UP_1", boot_times: 2, time: 12, pH: 5.7, TDS: 250.0, T: 25.1 },
      { tag: "UP_1", boot_times: 2, time: 16, pH: 6.4, TDS: 190.0, T: 25.3 },
      { tag: "UP_1", boot_times: 2, time: 20, pH: 7.9, TDS: 300.0, T: 25.0 },
      { tag: "UP_1", boot_times: 2, time: 24, pH: 4.5, TDS: 220.0, T: 24.7 },
      { tag: "UP_1", boot_times: 2, time: 28, pH: 8.1, TDS: 270.0, T: 25.5 },
      { tag: "UP_1", boot_times: 2, time: 34, pH: 6.2, TDS: 230.0, T: 25.2 },
      { tag: "UP_1", boot_times: 3, time: 9, pH: 5.1, TDS: 260.0, T: 24.8 },
      { tag: "UP_1", boot_times: 3, time: 14, pH: 7.0, TDS: 170.0, T: 25.3 },
      { tag: "UP_1", boot_times: 3, time: 18, pH: 4.3, TDS: 210.0, T: 24.9 },
      { tag: "UP_1", boot_times: 3, time: 25, pH: 8.6, TDS: 240.0, T: 25.1 },
      // Add more data points as needed
    ];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    // const width = 600 - margin.left - margin.right;
    // const height = 400 - margin.top - margin.bottom;

    // Clear existing content of #chartContainer
    d3.select("#chartContainer3").html("");

    // Create the main SVG container
    const mainSvg = d3
      .select("#chartContainer3")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // Create the chart for T
    createChart(data, mainSvg, "chart", margin, width, height, "T");
  }, []);

  const createChart = (
    data,
    mainSvg,
    chartId,
    margin,
    width,
    height,
    variable,
  ) => {
    const svg = mainSvg
      .append("g")
      .attr("id", chartId)
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    let tooltip = d3
      .select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("class", "tooltip")
      .style("opacity", 0);

    x.domain(data.map((d) => d.time));
    y.domain([
      d3.min(data, (d) => d[variable]) - 1,
      d3.max(data, (d) => d[variable]) + 0.5,
    ]);

    svg
      .append("text")
      .attr("id", "title")
      .attr("x", width / 2)
      // .attr("y", 0)
      .attr("text-anchor", "middle")
      .style("font-size", 25)
      .style("font-weight", "bold")
      .style("text-decoration", "underline")
      .text("Temperature");

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.time))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d[variable]))
      .attr("height", (d) => height - y(d[variable]))
      .attr("fill", "#000000")
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html("Date: " + d.time + "<br>Temperature: " + d[variable])
          .style("left", event.pageX + 20 + "px")
          .style("top", event.pageY - 40 + "px");
        tooltip.attr("data-date", d[variable]);
      })
      .on("mouseout", function (event, d) {
        tooltip.transition().duration(400).style("opacity", 0);
      });

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y).ticks(5));
  };

  return <div id="chartContainer3"></div>;
};

export default ThirdChart;
