$(document).ready(function () {
    setTimeout(updateViewCount, 2000)
});

function updateViewCount() {
    if(isBot()){
        return;
    }
    $.post("/CsAjax.do?method=updateNewsViewCount", {"news_id": $("#news_id").val()}, function (datas) {
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
    });
}