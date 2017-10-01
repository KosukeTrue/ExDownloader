// ==UserScript==
// @name         ExDownloader Jump Tool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  跳转到ExDownloader自动下载
// @author       WGzeyu
// @match        https://*.org/g/*/*/
// @match        https://*.org/g/*/*/?p=*
// @require      https://code.jquery.com/jquery-latest.js
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';
    addurl();

    function addurl() {
        var $download = $('<p class="g2 gsp"></p>');
        var $download_img = $('<img src="/img/mr.gif">');
        var $urla = '<a href="http://127.0.0.1:15651/addurl/?url=';
        var $url = encodeURIComponent(window.location.href);
        var $urlb = '" target="_blank"> ExDownloader下载</a>';
        var $download_url = $($urla+$url+$urlb);
        $download.append($download_img).append($download_url);
        document.getElementById('gd5').classList.add('gd5');
        $('div.gd5').append($download);
    }
})();