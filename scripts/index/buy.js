try {
  var $data = $(".article-title")
  var title = $data.text();
  if(title){
    title = $.trim(title);
    var subStr = title.match("《(.*)》");
    if(subStr){
      title = subStr[1];
    }
    var buy_url = "https://ai.taobao.com/search/index.htm?key="+encodeURIComponent(title)+"&pid=mm_16234744_1806700429_110511900427";
    document.writeln('<div class="alert alert-info" role="alert"> 购买纸版：<a href="'+buy_url+'" target="_blank" class="alert-link">'+$data.text()+'</a> </div>');
  }
}catch (e) {
  console.log(e);
}
