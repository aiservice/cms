

// var pageHeight = Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.documentElement.clientHeight
// );

function isMobile() {
    return ua().match(/iphone|ipad|ipod|android|blackberry|iemobile|wpdesktop/i)
}
function ua() {
    return navigator.userAgent.toLowerCase()
}

function loadHtml(){
    var pageWidth = Math.max(document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
    if(!isMobile()){
        if(pageWidth > 1170){
            pageWidth = 1170
        }
    }
    var arr = ["2","3", "4","5","6","7","8","9","10","11","12","13","14","15" ];
    var site = (arr[Math.floor((Math.random()*arr.length))]);
    var pageHeight = 420
    var ads_url = "https://www.6tie.net/ads.html?method=promotion&site="+ site;
    document.write('<div style="background: #fbfbfb;max-width: '+pageWidth+'px; margin: 0 auto;" > <iframe style="border: 0px; width: '+pageWidth+'px; height: '+pageHeight+'px; overflow: visible;" src="'+ads_url+'"></iframe> </div>')
}

loadHtml();
