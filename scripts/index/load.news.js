var load_more = "点击加载更多";
var load_finished = "全部加载完成";
var views = "浏览";
if(typeof is_english != "undefined" && is_english){
     load_more = "Load More";
     load_finished = "All loaded";
     views = "Views";
}
function loadNewsMore() {
    var urlAjax = "/newslist.html?method=listAjax"
    var $loadMore = $('#loadMore');
    var mod_id = $loadMore.data('mod-id');
    var cls_id = $loadMore.data('cls-id');
    var keyword = $loadMore.data('keyword');
    var page = $loadMore.data('page');
    if (mod_id) {
        $("#data-empty").hide();
        $loadMore.html("<p class=\"text-center\">Loading...</p>");
        page = Number(page);
        page += 1;
        $.post(urlAjax, {"mod_id":mod_id, "page":page, "cls_id":cls_id, "keyword":keyword}, function(ret){
            if(ret.code == "0"){
                alertModal(ret.msg)
                $loadMore.html("<p class=\"text-center\"><span class=\"btn btn-success\">"+load_more+"</span></p>");
                return false;
            }
            var divId = "ad"+new Date().getTime();
            var html = '';
            var time = new Date().getTime();
            var data = ret.datas;
            for (var i = 0; i < data.length; i++) {
                var news = data[i];
                var url = "/p/" + news.id + ".html";
                var imgUrl = news.img;
                var title = news.title;
                var seo_desc = news.seo_desc;
                var author = news.author;
                var view_count = news.view_count;
                var add_time = news.add_time;
                html += '<article class="article"> <h3 class="article-title"> <a href="'+url+'" target="_blank">'+title+'</a> </h3> <div class="article-meta"> <a class="avatar avatar-30" href="javascript:;"> <span class="avatar-face"><img src="/images/40-default.png" class="img-circle"></span> </a> <span class="published"> '+add_time+'</span> | <a class="category-name" href="#">'+cls_id+'</a>&nbsp;| '+views+'('+view_count+') </div> <div class="article-summary article-markdown wechat-list-left"><div class="media"> <a href="'+url+'" class="pull-left"> <img data-original="'+imgUrl+'" class="lazy'+time+' img-rounded"  height="120" class="img-rounded"> </a> <div class="media-body" contenteditable="false"> <div class="ov120">'+seo_desc+' </div> </div> </div> </div> </article>';
            }
            $loadMore.before(html);
            $(".lazy"+time).lazyload({
                threshold : 200,
                effect : "fadeIn"
            });
            if(data.length < 10) {
                if(page===0&&data.length===0){
                    $("#data-empty").show();
                }
                $loadMore.after('<article class="article"><p class="text-center" style="color: #ccc">'+load_finished+'</p></article>');
                $loadMore.remove();
                return false;
            }
            $loadMore.html("<p class=\"text-center\"><span class=\"btn btn-success\">"+load_more+"</span></p>").data('page', page);
        });
    }
}

function alertModal(msg) {
    var myModal = $("#myModal");
    if (myModal.length <= 0) {
        var html = "<div id=\"myModal\" class=\"modal fade\" role=\"dialog\"> <div class=\"modal-dialog modal-sm\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\" id=\"mySmallModalLabel\">Tips</h4> </div> <div class=\"modal-body\"> "+msg+"</div> </div> </div> </div>";
        $("body").append(html);
        myModal = $("#myModal");
    }
    myModal.modal('show')

}