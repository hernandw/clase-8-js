jQuery.fn.valoresmoneda = function () {

    let element = $(this);
  $.ajax({
    url: "https://mindicador.cl/api",
    type: "GET",
    dataType: "json",
    success: function (data) {
        element.append(`<p>${data.uf.valor}</p>`)
        element.append(`<p>${data.dolar.valor}</p>`);
        element.append(`<p>${data.euro.valor}</p>`);
    },
  });

  return this;
};
