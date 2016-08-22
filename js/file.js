/**
 * Created by sml on 2016/8/11.
 */
//图片上传预览功能插件
function setImagePreview(docObj,imgObjPreview) {
    docObj=document.getElementById(docObj);

    imgObjPreview=document.getElementById(imgObjPreview);
    if(docObj.files &&docObj.files[0]){
        //火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '100px';
        imgObjPreview.style.height = '100px';
        //imgObjPreview.src = docObj.files[0].getAsDataURL();

        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "100px";
        localImagId.style.height = "100px";
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

////jQuery的调用方法
//$(".onloadPic").on("change",function(){
//    setImagePreview("onloadPic","preview");
//});


//调用
//    setImage  Preview方法参数为(上传的input-id,预览窗口的id)    切记为id
document.getElementById("onloadPic").addEventListener("change",function(){
    setImagePreview("onloadPic","preview");
});

document.getElementById("onloadPic1").addEventListener("change",function(){
    setImagePreview("onloadPic1","preview1");
});
document.getElementById("onloadPic2").addEventListener("change",function(){
    setImagePreview("onloadPic2","preview2");
});
document.getElementById("onloadPic3").addEventListener("change",function(){
    setImagePreview("onloadPic3","preview3");
});
