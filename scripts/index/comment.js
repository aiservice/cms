
//loadJs("MTAyMC80Mzg2Ny8yMDQwMg==");

function loadJs(uid) {
    document.write('<div class="content-wrapper"><div class="article-summary article-markdown"><div id="lv-container" data-id="city" data-uid="' + uid + '"></div></div></div>');
    if (link_id) {
        window.livereOptions = {refer: link_id}
    }
    setTimeout(function () {
        (function (d, s) {
            var j, e = d.getElementsByTagName(s)[0];

            if (typeof LivereTower === 'function') {
                return;
            }

            j = d.createElement(s);
            j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
            j.async = true;

            e.parentNode.insertBefore(j, e);
        })(document, 'script');
    }, 5000);
}