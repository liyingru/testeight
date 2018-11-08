require(['jquery', 'bscroll', 'flexible'], function($, BScroll, flexible) {
    var Bscroll = new BScroll('.head', {
        scrollX: true,
        click: true
    })

    var Bscroll = new BScroll('.con1', {
        scrollX: true,
        click: true,
    })


    $('.hou').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('footer').on('click', 'dl', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
})