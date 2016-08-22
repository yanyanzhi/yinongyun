/**
 * Created by Administrator on 2016/7/12.
 */
$(function () {
    var winHeight=$(window).height();
    $(window).scroll(function () {
        var mytop=$(window).scrollTop();
        if(mytop>winHeight){
            $(".zy").fadeIn(500, function () {
                $(this).clearQueue();
            })
        }else {
            $(".zy").fadeOut(500, function () {
                $(this).clearQueue();
            })
        }
    });
    $(".zy").on("click", function () {
        $("body,html").animate({
            scrollTop:0
        },600)
    })
})