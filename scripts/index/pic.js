$(document).ready(function(){
    $(".swipebox").each(function(){
        var t = $(this);
        var href = t.attr("href");
        if(href.indexOf("tiebapic.baidu.com") !== -1){
            href = href.replace("tiebapic.baidu.com", "cdn.tieba.moujishu.com");
        }
        if(href.indexOf("imgsrc.baidu.com") !== -1){
            href = href.replace("imgsrc.baidu.com", "cdn.baidu.moujishu.com");
        }
        if (href.indexOf("sinaimg.cn") !== -1) {
            href = "//images.weserv.nl/?url="+href
        }
        t.attr("href",href);
    });
    $(".swipebox").swipebox({"useSVG":false});
});