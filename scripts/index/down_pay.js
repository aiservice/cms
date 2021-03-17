var link_email_tmp = "";
if (typeof link_email != "undefined" && link_email) {
    link_email_tmp = link_email;
}
if (typeof downPayParams != "undefined" && downPayParams.enabledDownload) {
    if (downPayParams.isPay) {
        document.writeln(paySourceHtml());
    } else {
        if (downPayParams.download_url != "") {
            var sb = [];
            for (var i in downPayParams) {
                sb.push(i + '=' + encodeURIComponent(downPayParams[i] || ''));
            }
            var download_url = "/download.html?" + sb.join('&');
            document.writeln('<div class="alert alert-success" role="alert"> 点击下载：<a href="' + download_url + '" target="_blank" class="alert-link">' + downPayParams.title + '</a> </div>');
        } else {
            noSource();
        }
    }
} else {
    noSource();
}

function paySourceHtml() {
    var total_fee = "0.5";
    if (typeof book_total_fee != "undefined") {
        total_fee = book_total_fee;
    }
    return ('<div id="pay_source" style=" margin: 10px 0; overflow: hidden; border: 6px dashed #c91a1a; padding: 20px; font-size: 15px; position: relative; line-height: 1.5; text-align: center; border-radius: 12px; "> <h3 style=" font-size: 1.7rem; line-height: 190%; margin: 2px -25px 10px; padding: 0 20px; ">购买电子版</h3><span class="erphpdown-price" style=" padding: 0 5px; color: #e14d43; font-weight: 700; font-size: 120%; ">' + total_fee + '</span>￥<span class="label label-danger">限时5折,最后一天！</span><div class="input-group" style="margin-bottom: 10px;"><input type="text" class="form-control" placeholder="填写接收下载地址的邮箱" name="email" id="email"> <span class="input-group-addon" style="color: #fff; background-color: #dc3545; border-color: #dc3545;cursor: pointer;" onclick="pay()" id="btn_pay" data-loading-text="Loading...">购买</span></div> <div class="erphpdown-tips" style=" margin-top: 6px; opacity: .7; font-size: 13px; "><span class="text-danger">分享地址反复失效，收费只为增加举报门槛</span><br> <span>包含格式：epub+mobi+azw3+pdf</span><br>如果链接失效，请联系<a href="mailto:' + link_email_tmp + '" target="_blank">站长邮箱</a>修复！ </div> </div>');
}

function noSourceHtml() {
    var durl = "https://72k.us/file/1210232-448745322";
    var sid = 1772;
    if (typeof site_id != "undefined") {
        sid = site_id;
        if (site_id === 1937) {
            durl = "https://72k.us/file/1210232-461016633";
        }
    }
    var downPayParams = {
        id: "1",
        sid: sid,
        title: "快速求资源指南",
        download_url: durl,
        // img_url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-imgbed/28f215db-5781-4078-9cfe-ef72d75119f8.jpg"
        img_url: "https://img.imgdb.cn/item/5fffa50f3ffa7d37b35c5d93.jpg"
    };
    var sb = [];
    for (var i in downPayParams) {
        sb.push(i + '=' + encodeURIComponent(downPayParams[i] || ''));
    }
    var download_url = "/download.html?" + sb.join('&');
    return ('<div id="no_source" class="alert alert-danger" role="alert"> 暂无资源：<a href="' + download_url + '" target="_blank" class="alert-link">《点击下载快速求资源指南》</a> </div>');
}

function noSource() {
    if (typeof cur_location_url != "undefined" && cur_location_url.indexOf("download.html") === -1) {
        document.writeln(noSourceHtml());
    }
}

function pay() {
    var id = downPayParams.id;
    var email = $("#email").val();
    if ($.trim(email) == "") {
        alert("请填写email");
        return false;
    }
    var $btn_pay = $("#btn_pay");
    $btn_pay.attr("disabled", "true").text("Loading...");
    setTimeout(function () {
        location.href = "/pay.html" + "?id=" + id + "&email=" + encodeURIComponent(email)
    }, 500);

}

document.writeln('<div class="panel panel-info"> <div class="panel-heading"> <h3 class="panel-title">声明：</h3> </div> <div class="panel-body"> 本站大部分下载资源收集于网络，只做学习和交流使用，版权归原作者所有，与本站无关。本站发布的内容若侵犯到您的权益，请联系:<code>' + link_email_tmp + '</code>，我们将及时处理！ </div> </div>');