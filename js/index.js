/**
 * Created by sml on 2016/8/8.
 */
$(function(){
    /**
     *
     *公共方法
     */
    var log = console.log.bind(console);
    /**
     * nav导航
     */
    $(".nn").on("click","li", function () {
        $(this).addClass("vb").siblings().removeClass("vb");
    });
    /**
     * swiper-container图片动态获取
     */
    $.ajax({
        type:"get",
        url:"http://localhost/yinongyun/php/lbt.php",
        dataType:"json",
        success:function(data){
            lbt(data);
        },
        error:function(dataerror){
            log(dataerror);
        }
    });
    function lbt(data){
        $("#swiper-container .swiper-slide>img").each(function (index, ele) {
            $(ele).attr("src", data.lbt[index]);
        });
    }
    /**
     * icons事件
     */
    $(".gz").bind({
        mouseover:function(){
            $(this).css("opacity","0");
            $(".icte").css("opacity","1");
        },
        mouseout:function(){
            $(this).css("opacity","1");
            $(".icvb").css("opacity","1");
        }
    });
    $(".none").bind({
        mouseover:function(){
            $(this).css("opacity","1");
            $(".icte").css("opacity","1");
        },
        mouseout:function(){
            $(this).css("opacity","0");
            $(".icte").css("opacity","1");
        }
    });
    /**
     * hd区域导航事件
     */

    getYz("优质农场");
    $(".pn").on("click","li", function (e) {
        $(this).addClass("pnv").siblings().removeClass("pnv");
        $(".cont-in").html("");
        getYz(e.target.innerHTML);
        console.log(e.target.innerHTML);
    });



function getYz(i){

    $.ajax({
        type:"get",
        url:"http://localhost/yinongyun/php/hd.php",
        data:{
            yznc:i
        },
        dataType:"json",
        success:function(data){
            viewAdapter(data);
            console.log(JSON.stringify(data))
        },
        error:function(dataerror){
            log(dataerror);
        }
    });
}

    function viewAdapter(data){
        console.log(data);
        $(data).each(function (index){
            $(".cont-in").append("<i class='ctn'>"+data[index].name+"</i><em class='ic'><img src="+data[index].start.first+"/><img src="+data[index].start.first+"/><img src="+data[index].start.second+"/><img src="+data[index].start.third+"/><img src="+data[index].start.third+"/></em>");
        });
    }


    /**
     * hd区域动态获取
     */
    $.ajax({
        type:"get",
        url:"http://localhost/yinongyun/php/news.php",
        dataType:"json",
        success:function(data){
            news(data);
        },
        error:function(dataerror){
            log(dataerror);
        }
    });

    function news(data){
        console.log(data);
        $(data).each(function (index) {
            $(data[index].new1).each(function(index1){
                $(".tt").eq(index).append("<li><a class='n' href='javascript:;'>" + data[index].new1[index1] + "</a><span>"+ data[index].date[index1] +"</span></li>");
            })
        });
    }

    $(".tt").on("click",".n",function(){
        $(this).eq(0).addClass("scl").siblings().removeClass("scl");
    })












});