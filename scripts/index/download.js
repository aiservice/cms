if(typeof downParams != "undefined" && downParams){
    var sb = [];
    for (var i in downParams) {
        sb.push(i + '=' + encodeURIComponent(downParams[i] || ''));
    }
    var download_url =  "/download.html?" + sb.join('&');
    document.writeln('<div class="alert alert-success" role="alert"> 点击下载：<a href="'+download_url+'" target="_blank" class="alert-link">'+downParams.title+'</a> </div>');
}else{
    if (typeof cur_location_url != "undefined"&&cur_location_url.indexOf("download.html") === -1) {
        var download_url =  "https://72k.us/file/1210232-448745322" ;
        document.writeln('<div class="alert alert-success" role="alert"> 暂无资源：<a href="'+download_url+'" target="_blank" class="alert-link">《点击下载快速求书指南》</a> </div>');
    }
}

document.writeln('<div class="panel panel-info"> <div class="panel-heading"> <h3 class="panel-title">声明：</h3> </div> <div class="panel-body"> 本站大部分下载资源收集于网络，只做学习和交流使用，版权归原作者所有，与本站无关。本站发布的内容若侵犯到您的权益，请联系:<code>jianxi123532@gmail.com</code>，我们将及时处理！ </div> </div>');
// document.writeln('<div class="panel panel-danger"> <div class="panel-heading"> <h3 class="panel-title">感谢您的支持: </h3> </div> <div class="panel-body">感谢所有打赏的朋友。感谢你们的支持。你们打赏的每一分钱后续都会被用在更换更好的服务器及资源购买上。你们的支持和鼓励将会让我们更好的发展下去！ </div> </div><div class="panel panel-info"> <div class="panel-heading"> <h3 class="panel-title">声明：</h3> </div> <div class="panel-body"> 本站大部分下载资源收集于网络，只做学习和交流使用，版权归原作者所有，与本站无关。本站发布的内容若侵犯到您的权益，请联系:<code>jianxi123532@gmail.com</code>，我们将及时处理！ </div> </div>');