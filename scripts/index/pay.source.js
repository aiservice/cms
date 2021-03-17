if(typeof payParams != "undefined" && payParams){
    var total_fee = "0.5元";if(typeof book_total_fee != "undefined"){total_fee = book_total_fee+"元"}document.writeln('<div class="panel panel-success"> <div class="panel-heading"> <h3 class="panel-title">购买电子版：分享地址反复失效（使用付费方式）</h3> </div> <div class="panel-body"><div style=" margin-bottom: 0; "> 购买价格<code>'+total_fee+'</code>：<span class="text-danger">收费只为增加举报门槛（包含格式：epub+mobi+azw3+pdf）</span><div class="input-group" style="margin-bottom: 10px;"> <input type="text" class="form-control" placeholder="填写接收下载地址的邮箱" name="email" id="email"> <span class="input-group-addon" style="color: #fff; background-color: #dc3545; border-color: #dc3545;cursor: pointer;" onclick="pay()" id="btn_pay" data-loading-text="Loading...">购买</span> </div> </div></div> </div>');
}

var url_pay_tmp = "/pay.html";
// url_pay_tmp = "/pay.html";
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