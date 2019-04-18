STEP = 35;

$(window).keydown(function (e) {
    console.log(e.keyCode);
    $ball = $('#ball');
    // 左
    if(e.keyCode===37) {
        $ball.offset({'left': $ball.offset()['left']-STEP});
    }
    // 上
    else if(e.keyCode===38) {
        $ball.offset({'top': $ball.offset()['top']-STEP});
    }
    // 右
    else if(e.keyCode===39) {
        $ball.offset({'left': $ball.offset()['left']+STEP});
    }
    // 下
    else if(e.keyCode===40) {
        $ball.offset({'top': $ball.offset()['top']+STEP});
    }
})