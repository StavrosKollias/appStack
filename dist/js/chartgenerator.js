const backgroundColor = [
  "#39a2a9",
  "#8b62d1",
  "#5fc27e",
  "#f22034",
  "#e9db1d",
  "#355fff",
  "#97d4d8",
  "#c5adee",
  "#98e6b1",
  "#f87683",
  "#f1ea7b",
  "#99adff",
];

var lineChart = document.getElementById("temperature-chart");
if (lineChart) {
  var ctx = document.getElementById("temperature-chart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: ["0", "1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          fill: false,
          lineTention: 1,
          label: "Channel 1",
          backgroundColor: backgroundColor[0],
          borderColor: backgroundColor[0],
          data: [0, 10, 5, 2, 20, 30, 25],
        },
        {
          fill: false,
          lineTention: 1,
          borderDash: [20, 30],
          label: "Channel 2",
          backgroundColor: backgroundColor[1],
          borderColor: backgroundColor[1],
          data: [0, 5, 10, 15, 10, 30, 45],
        },
      ],
    },

    // Configuration options go here
    options: {
      bezierCurve: false,
      maintainAspectRatio: false,
      responsive: true,
      onHover: function (event, elements) {
        hoverOverChart(this, event);
      },
      elements: {
        line: {
          // tension: 0.1,
          borderWidth: 2,
        },
        point: {
          borderWidth: 1,
          hoverBorderWidth: 1,
          hitRadius: 1,
          pointStyle: "dash",
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: true,
        labels: {
          fontColor: "gray",
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString: "\xB0C",
            },
            ticks: {
              beginAtZero: true,
              fontColor: "black",
              // max: this.state.maxTempChart,
              // min: this.state.minTempChart,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString: "mm:s:ms",
            },
            ticks: {
              fontColor: "black",
            },
          },
        ],
      },
    },
  });
}
var pieChart = document.getElementById("pie-chart");
if (pieChart) {
  var ctxPie = pieChart.getContext("2d");
  var chartPie = new Chart(ctxPie, {
    // The type of chart we want to create
    type: "doughnut",

    // The data for our dataset
    data: {
      labels: [
        "Zone 1",
        "Zone 2",
        "Zone 3",
        "Zone 4",
        "Zone 4",
        "Zone 6",
        "Zone 7",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: backgroundColor,
          borderColor: backgroundColor,
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    },

    // Configuration options go here
    options: {
      bezierCurve: true,
      maintainAspectRatio: false,
      responsive: true,
      elements: {
        line: {
          tension: 0,
          borderWidth: 1,
        },
        point: {
          borderWidth: 1,
          hoverBorderWidth: 1,
          hitRadius: 1,
          pointStyle: "dash",
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: true,
        labels: {
          fontColor: "gray",
        },
      },
    },
  });
}

function hoverOverChart(chart, event) {
  var chartTop = chart.chartArea.top;
  var chartBottom = chart.chartArea.bottom;
  var ymin = chart.scales["y-axis-0"].min;
  var ymax = chart.scales["y-axis-0"].max;
  var newy = null;
  var showstuff = 0;
  if (event.offsetY <= chartBottom && event.offsetY >= chartTop) {
    newy = Math.abs((event.offsetY - chartTop) / (chartBottom - chartTop));
    newy = (newy - 1) * -1;
    newy = newy * Math.abs(ymax - ymin) + ymin;
    showstuff = 1;
  }
  var xtop = chart.chartArea.left;
  var xbottom = chart.chartArea.right;
  var xmin = chart.scales["x-axis-0"].min;
  var xmax = chart.scales["x-axis-0"].max;
  var newx = null;
  if (event.offsetX <= xbottom && event.offsetX >= xtop && showstuff == 1) {
    newx = Math.abs((event.offsetX - xtop) / (xbottom - xtop));
    newx = newx * Math.abs(xmax - xmin) + xmin;
  }
  if (newy != null && newx != null) {
    const hoverData = {
      temp: parseInt(Number(newy).toFixed(2)),
      time: parseInt(Number(newx).toFixed(0)),
    };

    // document.getElementById("temp-input").value = hoverData.temp;
    // document.getElementById("time-input").value = hoverData.time;
  }
}
