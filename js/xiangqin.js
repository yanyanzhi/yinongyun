/**
 * Created by ASUS on 2016/8/10.
 */
$(function(){
    $(".small_douzi img").on("click",function(){
        $(this).css({border:"1px solid #00a671",boxSizing:"border-box"}).siblings().css("border","none");
        var index=$(this).index();
        $(".big_douzi img").eq(index).css("display","block").siblings().css("display","none");
    });
    //��
    $(".shuzi_r .add").click(function(){
        var n=$(".shuzi_l").html();
        var num=parseInt(n)+1;
        $(".shuzi_l").html(num);
        //console.log(num);

        //$(".shuzi_l").html(parseInt($(".shuzi_l").html())+1);
        //if(num==0){return;}
        //console.log($(".shuzi_l").html())

        //var n=$(this).parent().prev().html();
        //var num=parseInt(n)+1;
        //$(this).parent().prev().html(num);
        //console.log(num)
    });
    //��
    $(".shuzi_r .reduce").click(function(){
        var n=$(this).parent().prev().html();
        var num=parseInt(n)-1;
        if(num<=0){
            return false;
        }
        $(this).parent().prev().html(num);
        //console.log(num);
    });

    $.ajax({
        type:"get",
        url:"http://localhost/yinongyun/php/xiangqin.php",
        dataType:"json",
        success:function(data){
            shipei1(data);
            //shipei2(data);
        },
        error:function(errordata){
            console.log(errordata);
        }
    })
    function shipei1(data){
        $(".big_douzi img").each(function(index,ele){
            $(ele).attr("src",data.big_img[index]);
        });
        $(".small_douzi img").each(function(index,ele){
            $(ele).attr("src",data.small_img[index]);
        });
        //$(".xq_in_cont p").each(function(index,ele){
        //    console.log(index);
        //    console.log(data.plist[index]);
        //    $(".xq_in_cont .p1").html(data.p1);
        //    $(".xq_in_cont .p2").html(data.p2);
        //})
        $(".xq_in_cont .p1").html(data.p1);
        $(".xq_in_cont .p2").html(data.p2);
        $(".xq_in_cont .p3 span").html(data.p3);
        $(".xq_in_cont .p4 span").html(data.p4);
        $(".xq_in_cont .p5 span").html(data.p5);
        $(".xq_in_cont .p6 span").html(data.p6);
        $(".xq_in_cont .p7 span").html(data.p7);

        $(".xq_in_r .nc_img img").attr("src",data.nc_img);
        $(".xq_in_r .nc_title .p1").html(data.p8);
        $(".xq_in_r .nc_title .p2 span").html(data.p9);
        $(".xq_in_r .nc_title .p3 .p3_r div").html(data.p10);
        $(".xq_in_r .nc_title .p4 span").html(data.p11);
        $(".xq_in_r .nc_title .p5 span").html(data.p12);
        $(".xq_in_r .nc_title .p6 span").html(data.p13);
        $(".xq_in_r .nc_title .p7 span").html(data.p14);
        $(".content_b img").attr("src",data.product_detail);

    }
    //function shipei2(data){
    //    $(data).each(function(index){
    //       $(".box_r").eq(index).append(" <ul class='clearFix'><li><a href=''>"+data[index].+"</a></li></ul>")
    //    }
    //}

    getdata("��Ʒ");
    $(".box_b ul").on("mouseover","li",function(e){
        $(this).addClass("bj").siblings().removeClass("bj");
        $(".box_r ul").html("");
        getdata(e.target.innerHTML);
    });
    //$(".box_t").on({mouseover:function(){
    //    $(".box_b").show();
    //});
    //$(".box_t").on("mouseout",function(){
    //    $(".box_b").hide();
    //});
    //$(".box_b").on("mouseover",function(){
    //    $(".box_b").show();
    //    $(".box_r").show();
    //});
    //$(".box_b").on("mouseout",function(){
    //    $(".box_b").hide();
    //    $(".box_r").hide();
    //});
    //$(".box_r").on("mouseover",function(){
    //    $(".box_r").show();
    //    $("")
    //});
    //$(".box_r").on("mouseout",function(){
    //    $(".box_b").show();
    //})
    $(".box_t").on({
        mouseover:function(){
            $(".box_b").show();
        },
        mouseleave:function(){
            $(".box_b").hide();
        }
    })
    $(".box_b").on({
        mouseover:function(){
            $(".box_b").show();
            $(".box_r").show();
        }
    });
    $(".box_r").on({
        mouseover:function(){
            $(".box_r").show();
        },
        mouseleave:function(){
            $(".box_r").hide();
            $(".box_b").hide();
        }
    })

   function getdata(cat){
       $.ajax({
           type:"get",
           url:"http://localhost/yinongyun/php/cateay.php",
           data:{
               fenlei:cat
           },
           dataType:"json",
           success:function(data){
               shipei2(data);
               console.log(JSON.stringify(data))
           },
           error:function(errordata){
               console.log(errordata);
           }
       })
   }
    function shipei2(data){
        $(data).each(function(index){
            $(data[index].fruitname).each(function(sonindex){
                $(".box_r ul").eq(index).append("<li><a href=''>"+data[index].fruitname[sonindex]+"</a></li>")
            })
        })
    }
})