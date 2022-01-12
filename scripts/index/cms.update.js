$(document).ready(function () {
    setTimeout(updateViewCount, 2000)
});

function updateViewCount() {
    if (isBot()) {
        return;
    }
    var $content = $("#mycontent");
    $.post("/api/cms/updateViewCount", {"id": $content.data("id"), "title": $(".article-title").text(), "mid": $content.data("mid")}, function (result) {
        console.log(result)
        if (result.code === 0) {
            var datas = result.data;
            if (datas) {
                if (datas.enable_pay && typeof site_id != "undefined" && site_id === 1772 && typeof downPayParams != "undefined") {
                    if (datas.enable_pay === "true" && downPayParams.isPay) {
                        var $no_source = $("#no_source");
                        if ($no_source.length > 0) {
                            $no_source.after(paySourceHtml());
                            $no_source.remove();
                        }
                    } else {
                        var $pay_source = $("#pay_source");
                        if ($pay_source.length > 0) {
                            $pay_source.after(noSourceHtml());
                            $pay_source.remove();
                        }
                    }
                }
            }
        }

    });
}