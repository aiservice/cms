var vform;
var fromId = "validation-form";
var jFrom = $("#" + fromId);
var id = $("#id").val();
$(function () {
    vform = $('#' + fromId).validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        debug: true,
        rules: {
            userName: {required: true},
            phone: {required: false, number: true},
            email: {required: true, email: true},
            priceType: {required: true},
            caseInfo: {required: true},
        },
        messages: {
            userName: {required: "请输入姓名"},
            email: {required: "请填写email", email: "请输入一个正确的邮箱"},
            phone: {required: "请填写手机", email: "请输入正确手机号"},
            priceType: {required: "请选择费用类型"},
            caseInfo: {required: "请选择是否参加课程"},
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },
        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error');//.addClass('has-info');
            $(e).remove();
        }
    });
    var cv = $.cookie('cookie_payitem' + id);
    if (cv) {
        jFrom.setForm(JSON.parse(cv));
    }
    var pu = $.cookie('cookie_payurl' + id);
    if (pu) {
        $("#add_modal").modal('show');
    }
    loadWeChatTip();
});

function submitForm() {
    if (vform.form()) {
        $("#pdName").val($("#priceType").find("option:selected").text());
        ajax("/pay-item.html?method=submit", fromId, "POST", successHandle, true, true)
    }
}

function submitInvitationCodeForm() {
    if (vform.form()) {
        $("#pdName").val($("#priceType").find("option:selected").text());
        ajax("/pay-item.html?method=submitInvitationCode", fromId, "POST", successHandle, true, true)
    }
}

function successHandle(data) {
    if (data.code == "1") {
        var last = JSON.stringify(jFrom.serializeFormJson());
        $.cookie('cookie_payitem' + id, last, {expires: 7, path: '/'});
        $.cookie('cookie_payurl' + id, data.datas, {expires: 7, path: '/'});
        location.href = data.datas;
    }
}

function cPay() {
    var pu = $.cookie('cookie_payurl' + id);
    if (pu) {
        location.href = pu;
    }
    $("#add_modal").modal('hide');
}

function loadWeChatTip() {
    var cur_location_url = window.location.href;
    if (cur_location_url.indexOf("alipay") !== -1) {
        if (isWechat()) {
            var cdnTemp = "";
            if (typeof cdn != "undefined") {
                cdnTemp = cdn;
            }
            var img = cdnTemp + "/styles/mall/img/wechat_android.png";
            var tip = "使用浏览器打开";
            if (isIOS()) {
                img = cdnTemp + "/styles/mall/img/wechat_iphone.png";
                tip = "在 Safari 中打开";
            }
            var html = "<div id=\"wechat\" style=\"margin: 0 auto; display: table; width: 85%; text-align: center; font-family: 'ciscosansthin', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px;\"> <div> <p class=\"step1\" style=\"margin: 32px 0;\"><span>1. 点击右上角的<strong>更多</strong>菜单。</span></p> </div> <div> <p class=\"step2\" style=\"margin-bottom: 32px;\"><span>2. 点击<strong>" + tip + "</strong>以完成支付。</span></p> <img src=\"" + img + "\"/> </div> </div>";
            $("body").append(html);
            $("#main-container").hide();
        } else {
            $("#main-container").show();
            getOrder()
        }
    }
}

function getOrder() {
    ajax("/pay-item.html?method=alipayGateway", {"tradeIndex": $("#tradeIndex").val()}, "POST", orderHandle, false, true)
}

function orderHandle(data) {
    if (data.code == 1) {
        var payData = data.datas;
        $("#img").attr("src", payData.img);
        $("#oid").val(payData.oid);
        $("#fee").text(payData.fee);
        startCheck();
        if (isMobile()) {
            openAlipay(payData.qrCode)
        }
    }
}

function openAlipay(code_url) {
    var scheme = 'alipays://platformapi/startapp?saId=10000007&qrcode=';
    scheme += encodeURIComponent(code_url);
    if (navigator.userAgent.indexOf("Safari") > -1) {
        window.location.href = scheme;
    } else {
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = scheme;
        document.body.appendChild(iframe);
    }
}

var Timer = document.getElementById("time");
var m = 5, s = 0;

function startCheck() {
    erphpOrder = setInterval(function () {
        $.ajax({
            type: "GET",
            data: "orderId=" + $("#oid").val(),
            dataType: "json",
            url: "/pay-item.html?method=check",
            success: function (a) {
                if (a.code == 1) {
                    clearInterval(erphpOrder);
                    clearInterval(erphpTimer);
                    popTip(a.msg);
                    $("#container_data").hide();
                    $("#success_tip").show();


                } else if (a.code == -1) {
                    clearInterval(erphpOrder);
                    popTip(a.msg);
                }
            },
            error: function () {
            }
        });
    }, 5000);
    erphpTimer = setInterval(function () {
        wppayCountdown()
    }, 1000);
}

function wppayCountdown() {
    Timer.innerHTML = "支付倒计时：<span>0" + m + "分" + s + "秒</span>";
    if (m == 0 && s == 0) {
        clearInterval(erphpOrder);
        clearInterval(erphpTimer);
        $(".qr-code").append('<div class="expired"></div>');
        m = 4;
        s = 59;
    } else if (m >= 0) {
        if (s > 0) {
            s--;
        } else if (s == 0) {
            m--;
            s = 59;
        }
    }
}
