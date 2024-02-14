$(document).ready(function () {
  //configuracion de la grafica
  let dataPoint = [];

  let options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Cotización Dólar",
    },
    axisX: {
      valueFormatString: "DD MMM YYYY",
    },
    axisY: {
      title: "USD",
      titleFontSize: 24,
    },
    data: [
      {
        type: "spline",
        dataPoints: dataPoint,
      },
    ],
  };

  //LLamada a la Api
  $.ajax({
    url: "https://mindicador.cl/api/dolar",
    type: "GET",
    dataType: "json",
    success: function (data) {
      let datosApi = data.serie;

      for (let i = 0; i < datosApi.length; i++) {
        let fecha = new Date(datosApi[i].fecha);
        dataPoint.push({
          x: fecha,
          y: datosApi[i].valor,
        });
      }
      $("#chartContainer").CanvasJSChart(options);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
