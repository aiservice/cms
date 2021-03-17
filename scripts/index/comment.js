// var url = window.location.href;
// if (url.indexOf("good") !== -1) {
// document.write('<div style="background: #fbfbfb;padding: 20px;" > <div style="color: #37474f; font-family: Roboto,arial,sans-serif; font-size: 2em; font-weight: 400; line-height: 38px; max-width: 294px; padding: 10px 0 10px 0; white-space: nowrap;"><a href="http://www.aishen360.com" target="_blank" style="color: #37474f;">爱神阅读 - 基督教书库</a></div> <div style="color: #888888; font-family: Roboto,arial,sans-serif; font-size: 17px; font-weight: 400; line-height: 22px; max-width: 294px; padding: 0; white-space: nowrap;">了解更多基督教灵修书籍 </div> <div style="background-color: #eeeeee;padding:20px;position: relative;margin-top: 10px;"> <span style="color: #747474; display: inline-block; font-family: Roboto,arial,sans-serif; font-size: 13px; font-weight: 400; line-height: 17px; overflow: hidden; padding: 0 10px 0 0; white-space: nowrap; "><a href="http://www.aishen360.com" target="_blank" style="color: #747474;">www.aishen360.com</a></span> <span style="position: absolute;right:10px;top:10px;text-align: center;width: 148px;background-color: #0053f9; border-radius: 2px; box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24); font-family: Roboto,arial,sans-serif; font-weight: 500; text-transform: uppercase;"><a href="http://www.aishen360.com" style="color: #fff; font-size: 14px; padding: 8px; display: inline-block;" target="_blank">打开</a></span></div> </div>')
// } else {
//     document.write('<div style="background: #fbfbfb;padding: 20px;" > <div style="color: #37474f; font-family: Roboto,arial,sans-serif; font-size: 1.8em; font-weight: 400; line-height: 38px; max-width: 294px; padding: 10px 0 10px 0; white-space: nowrap;"><a href="http://www.feiku6.com" target="_blank" style="color: #37474f;">飞库网 - 热门精品书排行榜</a></div> <div style="color: #888888; font-family: Roboto,arial,sans-serif; font-size: 16px; font-weight: 400; line-height: 22px; max-width: 294px; padding: 0; white-space: nowrap;">了解更多热门金典，精品，名著书.</div> <div style="background-color: #eeeeee;padding:20px;position: relative;margin-top: 10px;"> <span style="color: #747474; display: inline-block; font-family: Roboto,arial,sans-serif; font-size: 13px; font-weight: 400; line-height: 17px; overflow: hidden; padding: 0 10px 0 0; white-space: nowrap; "><a href="http://www.feiku6.com" target="_blank" style="color: #747474;">www.feiku6.com</a></span> <span style="position: absolute;right:10px;top:8px;text-align: center;width: 148px;background-color: #0053f9; border-radius: 2px; box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24); font-family: Roboto,arial,sans-serif; font-weight: 500; text-transform: uppercase;"><a href="http://www.feiku6.com" style="color: #fff; font-size: 14px; padding: 6px; display: inline-block;" target="_blank">打开</a></span></div> </div>')
// }

// loadJs("MTAyMC80Mzg2Ny8yMDQwMg==");

function loadJs(uid) {
    document.write('<div id="lv-container" data-id="city" data-uid="' + uid + '"></div>');
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