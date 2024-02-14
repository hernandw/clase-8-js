jQuery.fn.parpadea = function () {
    this.each(function () {
        element = $(this)
        element.fadeOut(250, function () {
            $(this).fadeIn(250)
        })
    })


    return this
};