/*!
 * Powered by uglifiyJS v2.6.1, Build by http://www.aizhan.club
 * build time: Thu Feb 18 2021 09:30:45 GMT+0800 (China Standard Time)
*/
function updateViewCount(){$.post("/CsAjax.do?method=updateNewsViewCount",{news_id:$("#news_id").val()},function(e){if(e.enable_pay&&"undefined"!=typeof site_id&&1772===site_id&&"undefined"!=typeof downPayParams)if("true"===e.enable_pay&&downPayParams.isPay){var t=$("#no_source");t.length>0&&(t.after(paySourceHtml()),t.remove())}else{var n=$("#pay_source");n.length>0&&(n.after(noSourceHtml()),n.remove())}})}$(document).ready(function(){setTimeout(updateViewCount,2e3)});