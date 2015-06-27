var navigatorItem = {
    'index': '',
    'works': 'ПРИМЕРЫ РАБОТ',
    'technologies': 'ИНСТРУМЕНТАРИЙ',
    'contacts': 'КОНТАКТЫ',
    'about': 'О СЕБЕ'
};
//------------------------------------------------------------------------------
var active = new Object();
active.class_name = '';
active.content = '';

var a = 2;
var b = 33;
var c = 'Проба';

var timeout = 700;

function getData(id, timeout_ms) {
    var class_name = 'data-' + id;
    if (active.class_name !== class_name) {
        active.class_name = class_name;
        active.content = $('.' + active.class_name).html();
        $('.content').fadeOut(timeout_ms, function () {
            $('.content').html(active.content);
            $('.content').fadeIn(timeout_ms);
        });
    } else {
        return;
    }
}

function test() {
    c = a * b;
}

$(document).ready(function () {
//    $('#test').css({'display': 'block'});

//    getData('index', 100);

    $('.navigator-item').click(function () {
        getData($(this).attr('id'), 500);
    });
});