
// Main Cart - 购物篮-------------------------------------------------------------------------------
// Cart-Body
var $cart_body = $('#cart-body');
// Cart-Body 监听加减按钮改变数量
$cart_body.on('click', '.main-cart-onebox-btn-minus', function(){
    var num = parseInt($(this).next().text());
    if(num <= 1){
        alert('购买数量不能低于1噢！');
    }
    else {
        $(this).next().text(num-1+'');
	    $('.main-cart-tail-price').renew_total_price();
    }
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


// Init 初始化
$('.main-cart-tail-price').renew_total_price();
