var ctx = document.getElementById("temperature-chart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
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
    // scales: {
    //   yAxes: [
    //     {
    //       gridLines: {
    //         display: this.state.showTemperatureGridLinesMarkers,
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: this.state.degreesC ? "\xB0C" : "\xB0F",
    //       },
    //       ticks: {
    //         beginAtZero: true,
    //         fontColor: "black",
    //         max: this.state.maxTempChart,
    //         min: this.state.minTempChart,
    //       },
    //     },
    //   ],
    //   xAxes: [
    //     {
    //       // type: 'time',
    //       // distribution: 'series',
    //       gridLines: {
    //         display: this.state.showTimeGridLinesMarkers,
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: "time",
    //       },
    //       ticks: {
    //         fontColor: "black",
    //       },
    //     },
    //   ],
    // },
    // annotation: {
    //   events: ["click", "mousedown"],
    //   dblClickSpeed: 3,
    //   annotations: this.generateAnnotations(),
    //   drawTime: "beforeDatasetsDraw",
    // },

    // zoom: {
    //   // Zomm resets when  component renders because of hover  update state
    //   // Boolean to enable zooming
    //   enabled: true,
    //   drag: {
    //     borderColor: "rgba(225,225,225,0.3)",
    //     borderWidth: 5,
    //     backgroundColor: "rgb(225,225,225)",
    //     animationDuration: 0,
    //   },
    //   mode: "xy",
    //   rangeMin: {
    //     // Format of min zoom range depends on scale type
    //     x: null,
    //     y: null,
    //   },
    //   rangeMax: {
    //     // Format of max zoom range depends on scale type
    //     x: null,
    //     y: null,
    //   },
    //   speed: 0.1,
    //   // Minimal zoom distance required before actually applying zoom
    //   threshold: 100,
    //   // On category scale, minimal zoom level before actually applying zoom
    //   sensitivity: 1,
    //   // Function called while the user is zooming
    //   onZoom: function ({ chart }) {
    //     console.log(`I'm zooming!!!`);
    //   },
    //   // Function called once zooming is completed
    //   onZoomComplete: function ({ chart }) {
    //     console.log(`I was zoomed!!!`);
    //   },
    // },
  },
});
