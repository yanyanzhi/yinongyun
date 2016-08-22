/**
 * Created by Administrator on 2016/8/10.
 */
$(function () {

    proData("大豆");
    $(".category_right").on("click","a",function (e) {

        $(".category_right a:eq(0)").addClass("bj").siblings().removeClass("");
        //console.log( $(".category_right a:nth-child(1)"));
        //console.log( $(".category_right a:eq()"));
        $(".ul2").html("");
        proData(e.target.innerHTML);
    });

    function proData(pt) {
        $.ajax({
            type: "get",
            url: "http://localhost/yinongyun/php/product.php",
            data:{
                product:pt
            },
            dataType: "json",
            success: function (data) {
                proView(data);
                console.log(data)
            },
            error: function (dataerror) {
                console.log(dataerror);
            }
        })
    }


    function  proView(data){
        $(data).each(function (index) {
            $(data[index].proimg).each(function (sonindex) {
                $(".content_list_1 .ul2").eq(index).append("<li class='ct3'><a href='/yinongyun/xiangqin.html'><img src=" + data[index].proimg[sonindex] + " alt=''/></a><p class='product_name'>" + data[index].proname[sonindex]+ "</p><p class='product_price'>¥"+data[index].proprice[sonindex]+"</p></li>");
            });
        })
    }



});


