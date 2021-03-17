/*!
 * Powered by uglifiyJS v2.6.1, Build by http://jsmin.6tie.net
 * build time: Thu Aug 06 2020 13:45:50 GMT+0800 (China Standard Time)
*/
function resetScroll(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}$(window).scroll(function(){resetScroll()}),$(function(){resetScroll()}),$(".toggle").click(function(){$("#overlay.open")&&($(this).toggleClass("active"),$("#overlay").toggleClass("open"))});