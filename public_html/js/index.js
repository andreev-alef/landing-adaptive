function vcenter(thisClassName) {
    $(thisClassName).css({
        'top': '50%',
        'margin-top': -$(thisClassName).height() / 2
    });
}

function hcenter(thisClassName) {
    $(thisClassName).css({
        'left': '50%',
        'margin-left': -$(thisClassName).width() / 2
    });
    alert(thisClassName+'   '+$(thisClassName).css('width'));
}

$(document).ready(function () {

});