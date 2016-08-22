/**
 * Created by Administrator on 2016/8/8.
 */

$(function () {
    /*
    * 点击左边菜单list显示右边适配的内容开始
    *
    * */
    getData("果品");
    $(" .list").on("click","li",function (e) {
        $(this).addClass("bg").siblings().removeClass("bg");
        $(".category_right").html("");
        getData(e.target.innerHTML);
    });
    /*
     * 点击左边菜单list显示右边适配的内容结束
     *
     * */

    $(".list li").on({
        mouseover:function(){
            $(".category_right").show();
        },
        mouseleave:function(){

               $(".category_right").hide();


        }
    });

    $(".list").on({
        mouseover:function(){
            $(".list").show();

        },
        mouseleave:function(){
            $(".list").hide();

        }
    });

    $(".category_right").on({
        mouseover:function(){
            $(".category_right").show();
            $(".list").show();
        },
        mouseleave:function(){
            $(".category_right").hide();
            $(".list").hide();
        }
    });








    /*
    * 点击全部产品分类显示或隐藏菜单开始
    * */
    $(".category_title").on("mouseover", function () {
        $(".list").slideToggle(500, function () {
            $(this).clearQueue();
        });
    });
/*
* 点击全部产品分类显示或隐藏菜单结束
* */


    function getData(pt) {
        $.ajax({
            type: "get",
            url: "http://localhost/yinongyun/php/cateay.php",
            data:{
                fenlei:pt
            },
            dataType: "json",
            success: function (data) {
                fenleiView(data);
                console.log(JSON.stringify(data))
            },
            error: function (dataerror) {
                console.log(dataerror);
            }
        })
    }

   function fenleiView(data){
       $(data).each(function (index) {
           $(data[index].fruitname).each(function(mysonindex) {
               $(".category_right").eq(index).append("<li class='shopli '><a href='#' class='show'>" + data[index].fruitname[mysonindex] +"</a></li>");

           });
       })
   }



    /*
    * 适配头部img
    * */

    $.ajax({
        type: "get",
        url: "http://localhost/yinongyun/php/head.php",
        dataType: "json",
        success: function (data) {
            headView(data);
            console.log(data)
        },
        error: function (dataerror) {
            console.log(dataerror);
        }
    });

    function headView(data){
        $(".content_list_1 ul li img").each(function (index, ele) {
            $(ele).attr("src", data.headimg[index]);
        });
    }


    /*
     * 替换轮播图top
     * */

    $.ajax({
        type:"get" ,
        url:"http://localhost/yinongyun/php/bannerimg.php",
        dataType:"json",
        success: function (data) {
            bannerAdapterView(data);
        },
        error: function (errdata) {
            console.log(errdata);
        }
    });
    function bannerAdapterView(data){
        $("#swiper-container1 .swiper-slide>img").each(function (index, ele) {
            $(ele).attr("src", data.bannerimg[index]);
        });
    }


    /*
    * 适配数据
    *
    * */
    listData();
    function listData() {
        $.ajax({
            type: "get",
            url: "http://localhost/yinongyun/php/dianshang.php",
            dataType: "json",
            success: function (data) {
                listView(data);
                console.log(data)
            },
            error: function (dataerror) {
                console.log(dataerror);
            }
        })
    }


    function listView(data) {
        $(data).each(function (index) {
            $(".dianshang_list .content_list_3").eq(index).append("<div class='guopin clearFix'><div class='guopin_left'>" + data[index].pro_title + "</div><div class='guopin_right'><a href='#'>" + data[index].more + "</a></div></div>");
                $(data[index].imgs).each(function (sonindex) {
                    $(".content_list_1 .ul1").eq(index).append("<li class='ct3'><a href='#'><img src=" + data[index].imgs[sonindex] + " alt=''/></a><p class='product_name'>" + data[index].name[sonindex]+ "</p><p class='product_price'>¥"+data[index].price[sonindex]+"</p></li>");
            });


        });
    }



});






