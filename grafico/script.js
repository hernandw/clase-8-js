window.onload = function () {
  var options = {
    title: {
      text: "Gráfico de columnas con jQuery CanvasJS",
    },
    axisX: {
      title: "Frutas Tropicales",
      titleFontSize: 12,
    },
    axisY: {
      title: "Consumo Kg/persona/año",
      titleFontSize: 12,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "papaya", y: 23 },
          { label: "naranja", y: 15 },
          { label: "platano", y: 25 },
          { label: "mango", y: 30 },
          { label: "guayaba", y: 20 },
        ],
      },
    ],
  };
  $("#chartContainer").CanvasJSChart(options);
};
