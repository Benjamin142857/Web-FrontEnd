// Main Menu - 店铺菜单-------------------------------------------------------------------------------
// Menu-Body
var $menu_body = $('#menu-body');



// Menu-Body 监听添加按钮事件
$menu_body.on('click', '.main-menu-onebox-btn-add', function () {
    var $this_goods = $(this).parent();
    var goods_id = $this_goods.attr('id');
    if($('.main-cart-onebox[myname='+goods_id+']').length===0){
        $goods = $(document.createElement('div'));
        $goods.addClass('main-cart-onebox');
        $goods.attr('myname', goods_id);
        $goods.html(
    '                    <img class="main-cart-onebox-img" src="'+ $this_goods.find('img').attr('src') +'">\n' +
    '                    <div class="main-cart-onebox-title">'+ $this_goods.find('.main-menu-onebox-title').text() +'</div>\n' +
    '                    <div class="main-cart-onebox-price" title="￥125.76">'+ $this_goods.find('.main-menu-onebox-price').text() +'</div>\n' +
    '                    <button type="button" class="main-cart-onebox-btn main-cart-onebox-btn-minus" title="-1">-</button>\n' +
    '                    <div class="main-cart-onebox-num" contenteditable="true">1</div>\n' +
    '                    <button type="button" class="main-cart-onebox-btn main-cart-onebox-btn-add" title="+1">+</button>\n'
        );
        $('#cart-body').append($goods);
        $goods.animate({
            width:'100%',
            opacity:'1'
        }, 100);
        $('.main-cart-tail-price').renew_total_price();
    }
    else {
        $('.main-cart-onebox[myname='+goods_id+']').find('.main-cart-onebox-btn-add').click();
    }

});

// Main Cart - 购物篮-------------------------------------------------------------------------------
// Cart-Body
var $cart_body = $('#cart-body');
// Cart-Body 监听加减按钮改变数量
$cart_body.on('click', '.main-cart-onebox-btn-minus', function(){
    var num = parseInt($(this).next().text());
    if(num <= 1){
        $(this).parent().remove();
    }
    else {
        $(this).next().text(num-1+'');
    }
    $('.main-cart-tail-price').renew_total_price();
});
$cart_body.on('click', '.main-cart-onebox-btn-add', function(){
	var num = parseInt($(this).prev().text());
    if(num >= 99){
        alert('购买数量不能大于99噢！');
    }
    else {
        $(this).prev().text(num+1+'');
	    $('.main-cart-tail-price').renew_total_price();
    }
});
// Cart-Body 监听数量输入直接改变
$cart_body.on('blur', '.main-cart-onebox-num', function () {
    var num_str = $(this).text();
    if(!/^[0-9]+$/.test(num_str)){
        $(this).text('1');
    }
    else if(parseInt(num_str)>99){
        $(this).text('99');
    }
    else if(parseInt(num_str)<1){
        $(this).text('1');
    }
    $('.main-cart-tail-price').renew_total_price();
});


// Cart-Tail
// Cart-Tail 拓展自动总价计费函数
$.fn.extend({
    cal_total_price: function() {
        var res = 0;
        $('#cart-body').children().each(function () {
            var price = parseFloat($(this).find('.main-cart-onebox-price').text().slice(1));
            var num = parseInt($(this).find('.main-cart-onebox-num').text());
            res += price*num;
        });
        return res;
    },
    renew_total_price: function () {
        $(this).text('￥' + this.cal_total_price().toFixed(2));
    }
});
// Cart-Tail 监听结算事件
$('.main-cart-tail-btn-pay').click(function () {
    if($('#cart-body').children().length===0){
        alert('当前购物篮是空的噢！');
    }
    else {
        var total_price_str = $('.main-cart-tail-price').text();
        var $is_pay = $('#is_pay');
        $is_pay.find('.cover-content-1').text('现购物篮总计 '+ total_price_str +' ，是否结算？');
        $('#cover-box').css('display', 'block');
        $is_pay.css('display', 'block');
    }
});
// Cart-Tail 监听清空事件
$('.main-cart-tail-btn-clear').click(function () {
    if($('#cart-body').children().length===0){
        alert('当前购物篮是空的噢！');
    }
    else {
        $('#cover-box').css('display', 'block');
        $('#is_clear').css('display', 'block');
    }
});



// Cover - 遮罩-------------------------------------------------------------------------------
// Cover 监听关闭、取消按钮事件
var close_cover = function () {
   var $cover = $('#cover-box');
   $cover.css('display', 'none');
   $cover.children().css('display', 'none');
};
$('.cover-btn-close').click(close_cover);
$('.cover-btn-no').click(close_cover);
// Cover 监听确定清空事件
$('#is_clear .cover-btn-yes').click(function () {
    $('#cart-body').empty();
    close_cover();
    $('.main-cart-tail-price').renew_total_price();
});
// Cover 监听确定付款事件
$('#is_pay .cover-btn-yes').click(function () {
    var total_price_str = $('.main-cart-tail-price').text();
    $('.cover-content-2-detail').text('谢谢惠顾，总计 '+ total_price_str +' ，您可以选择：');
    $('#pay').css('display', 'block');
});



// Init 初始化
$('.main-cart-tail-price').renew_total_price();
$menu_body.children().animate({
    width:'100%',
    opacity:'1'
}, 500);