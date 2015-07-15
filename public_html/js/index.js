

function vcenter(thisClassName) {
    var elementParentClass = $('.' + thisClassName).parent().attr('class');
    var elementCount = document.getElementsByClassName(elementParentClass).length;
    var elementClassName = '';
    for (i = 1; i < elementCount + 1; i++) {
        elementClassName = '.' + elementParentClass + ':nth-child(' + i + ') > .' + thisClassName;
        $(elementClassName).css({
            'top': '50%',
            'margin-top': -$(elementClassName).height() / 2
        });
    }
}

function hcenter(thisClassName) {
    var elementParentClass = $('.' + thisClassName).parent().attr('class');
    var elementCount = document.getElementsByClassName(elementParentClass).length;
    var elementClassName = '';
    for (i = 1; i < elementCount + 1; i++) {
        elementClassName = '.' + elementParentClass + ':nth-child(' + i + ') > .' + thisClassName;
        $(elementClassName).css({
            'left': '50%',
            'margin-left': -$(elementClassName).width() / 2
        });
    }
}

$(document).ready(function () {
    vcenter('content-item');
    $(window).resize(function () {
        vcenter('content-item');
    });
});