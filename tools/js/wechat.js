var vform;
$(function () {
    vform = $('#validation-form').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            wechat_url: {required: true, url: true},
        },
        messages: {
            wechat_url: {required: "请填写微信视频链接", url: "请正确填写微信视频链接,需包含http或者https"},
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },
        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error');//.addClass('has-info');
            $(e).remove();
        }
    });

});

function toJieXi() {
    if (vform.form()) {
        $("#wechat_video_url_a").addClass("disabled");
        ajax("?method=wechat", "validation-form", "POST", handle, true, true)
    }
    return false;
}

function handle(data) {
    if (data.code == 1) {
        $("#wechat_video_url").val(data.datas);
        $("#wechat_video_url_a").attr("href", data.datas).removeClass("disabled")
    }
}
