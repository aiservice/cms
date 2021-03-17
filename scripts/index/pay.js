if(typeof payParams != "undefined" && payParams){
    var total_fee = "0.5";if(typeof book_total_fee != "undefined"){total_fee = book_total_fee}
    document.writeln('<div class="erphpdown" id="erphpdown" style=" margin: 10px 0; overflow: hidden; border: 6px dashed #c91a1a; padding: 20px; font-size: 15px; position: relative; line-height: 1.5; text-align: center; border-radius: 12px; "> <h3 style=" font-size: 1.7rem; line-height: 190%; margin: 2px -25px 10px; padding: 0 20px; ">购买电子版</h3><span class="erphpdown-price" style=" padding: 0 5px; color: #e14d43; font-weight: 700; font-size: 120%; ">'+total_fee+'</span>小力币 <div class="input-group" style="margin-bottom: 10px;"><input type="text" class="form-control" placeholder="填写接收下载地址的邮箱" name="email" id="email"> <span class="input-group-addon" style="color: #fff; background-color: #dc3545; border-color: #dc3545;cursor: pointer;" onclick="pay()" id="btn_pay" data-loading-text="Loading...">购买</span></div> <div class="erphpdown-tips" style=" margin-top: 6px; opacity: .7; font-size: 13px; "><span class="text-danger">分享地址反复失效，收费只为增加举报门槛</span><br> <span>包含格式：epub+mobi+azw3+pdf</span><br>如果链接失效，请联系<a href="mailto:jianxi123532@gmail.com" target="_blank">站长邮箱</a>修复！ </div> </div>');
}

var url_pay_tmp = "/pay.html";
function pay(){
    var id = payParams.id;
    var email = $("#email").val();
    if($.trim(email)==""){
        alert("请填写email");
        return false;
    }
    var $btn_pay = $("#btn_pay");
    $btn_pay.attr("disabled","true").text("Loading...");
    setTimeout(function() {
        location.href = url_pay_tmp + "?id=" + id+"&email="+encodeURIComponent(email)
    }, 500);

}