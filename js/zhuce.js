/**
 * Created by sml on 2016/8/10.
 */
$(function () {
    /**
     * 农场名称的事件
     */
    //$("#btn").css("backgroundColor","#999");
    $("#btn").disabled = "disabled";
    $("#nc").bind({
        focus: function () {
            $(this).attr("placeholder", "");
            //$(".ncmc").html("设置后不可更改");
        },
        blur: function () {
            $(this).attr("placeholder", "请输入农场全称");
             var nc = $("#nc").val();
                if(nc.length > 8){
                    $(".ncmc").html("长度不能大于8！");
                }else{
                    $(".ncmc").html("设置后不可更改");
                    $("#phone").focus();
                }
        },
        keydown:function(){
            $(this).css("color","#fff");

        }
    });


    /**
     * 手机号验证
     */
    $("#phone").bind({
        focus:function(){
            //$(".ncmc").html("内容不能为空！");
            //if($("#nc").val().length !== null){
            //    $(".ncmc").html("设置后不可更改");
            //}//else if($("#nc").val() == null){
            //    $(".ncmc").html("内容不能为空！");
            //}

        },
        blur:function(){
            var re = /^(13|14|15|18)[0-9]{9}/;
            var phone = $("#phone").val();
            console.log(phone);
             if(!re.test(phone) || phone.length > 11){
                    $(".phone-text").html("输入手机号格式有误！");
               }else{
                    $(".phone-text").html("");
                    $("#yzm").focus();
                }
        },
        keydown:function(){
            $(this).css("color","#fff");
        }
    });

    /**
     * 验证码验证
     */
    $("#yzm").bind({
        focus:function(){
            //$(".phone-text").html("内容不能为空！");
            //if($("#yzm").val() !== null){
            //
            //    $(".phone-text").html("");
            //}else{
            //    $(".phone-text").html("内容不能为空！");
            //}
        },
        blur:function(){
            var yzm = $("#yzm").val();
            console.log(yzm);
            if(yzm.length > 4){
                $(".yzm-text").html("长度不能大于4！");
            }else{
                $(".yzm-text").html("");
                $("#password").focus();
            }
        },
        keydown:function(){
            $(this).css("color","#fff");
        }
    });

    /**
     * 密码验证
     */

    $("#password").bind({
        focus:function(){
            //$(".yzm-text").html("内容不能为空!");
        },
        blur:function(){
            var passWord = /^[A-Za-z0-9_-]{6,}$/;
            var mypass = $("#password").val();
            console.log(mypass);
            if(!passWord.test(mypass)){
                $(".pass-text").html("输入密码有误！");
            }else{
                $(".pass-text").html("");
                $("#qrpassword").focus();
            }
        },
        keydown:function(){
            $(this).css("color","#fff");
        }

    });

    $("#qrpassword").bind({
        blur:function(){
            var qrpassWord = /^[A-Za-z0-9_-]{6,}$/;
            var myqrpass = $("#qrpassword").val();
            console.log(myqrpass);

            if(!qrpassWord.test(myqrpass) ||$("#password").val() !== myqrpass){
                $(".qrpass-text").html("两次输入密码不一样！");
            }else{
                $(".qrpass-text").html("");
                yxlogin();
            }
        },
        keydown:function(){
            $(this).css("color","#fff");
        }
    });



    function yxlogin(){
        if($("#nc").html("设置后不能更改") &&  $("#phone").html("") && $("#yzm").html("") && $("#password").html("") && $("#qrpassword").html("")){
            //$("#btn").css("backgroundColor","#00a672");
            $("#btn").disabled = "";
        }
    }
    /**
     * 上传照片的事件
     */
    $(".file").bind({
        mouseenter: function () {
            $(this).css("opacity", "1");
        },
        mouseleave: function () {
            $(this).css("opacity", "1");
        }
    });
    //var lh = $(document.documentElement.clientHeight) || $(document.body.clientHeight);
    //var lw = $(document.documentElement.clientWidth) || $(document.body.clientWidth);
    //console.log(lh);
    //var ele = $(".container");
    //var dh = ele.height();
    //console.log(dh);
    //var dw = ele.width();
    //console.log(dw);
    //
    //if(lh > dh){
    //    var t = parseInt((lh-dh)/2);
    //
    //}

    /**
     * 提交成功 的事件
     */
    $(".zh").on("click", function () {
        $(".tjcg").fadeIn();
        setTimeout(function () {
            $(".tjcg").fadeOut();
        }, 2000)
    });

    /**
     * 单选框事件
     */
    $(".xs").on("click",function(){
        $(".hide").toggle();
        $(".show").css("opacity","1");
    });
    $(".xg").on("click",function(){
        $(".sc").css("opacity","1").toggle();
    });
    /**
     * 复选框事件
     */
    $(".sg").on("click",function(){
        $(".mr").toggle();
        $(".yc").css("opacity","1");
    });

    $(".vegetable").on("click",function(){
        $(".wmr").toggle();
        var display =$(".wmr").css('display');
        if(display == 'none'){
            $(".xz").css("opacity","1");
        }else{
            $(".xz").css("opacity","0");
        }
    });

    $(".cq").on("click",function(){
        $(".wmrn").toggle();
        var display =$(".wmrn").css('display');
        if(display == 'none'){
            $(".cqn").css("opacity","1");
        }else{
            $(".cqn").css("opacity","0");
        }
    });
    $(".ly").on("click",function(){
        $(".wmrnl").toggle();
        var display =$(".wmrnl").css('display');
        if(display == 'none'){
            $(".lyn").css("opacity","1");
        }else{
            $(".lyn").css("opacity","0");
        }
    })







});

