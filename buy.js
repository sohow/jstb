// ==UserScript==
// @name         立即购买
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://buy.tmall.com/order/confirm_order.htm*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelector('.go-btn').click();
})();