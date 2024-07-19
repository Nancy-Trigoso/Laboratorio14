"use strict";

let canvasElem = document.getElementById("chart");

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {
  const state = new AppState();

  state.loadItems();

  const productsName = [];
  const productTimesClicked = [];
  const productTimesShown = [];

  for (let i = 0; i < state.allProducts.length; i++) {
    productsName.push(state.allProducts[i].name);
    productTimesClicked.push(state.allProducts[i].timesClicked);
    productTimesShown.push(state.allProducts[i].timesShown);
  }

  let chartObj = {
    type: "bar",
    data: {
      labels: productsName,
      datasets: [
        {
          label: "#of votes",
          data: productTimesClicked,
          borderwidth: 1,
          backgroundcolor: ["#ff006e"],
        },
        {
          label: "#of views",
          data: productTimesShown,
          borderwidth: 1,
          backgroundcolor: ["#ff006e"],
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: "black" },
        },
        x: {
          ticks: { color: "black" },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "black",
            padding: 30,
            font: {
              size: 16,
            },
          },
        },
      },
    },
  };
  new Chart(canvasElem, chartObj);
}

renderChart();
