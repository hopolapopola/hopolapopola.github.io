function display() {
// determine if the browser is IE
var isIE = (navigator.appName == "Microsoft Internet Explorer");
//if the browser is Microsoft Internet Explorer, show massive warning
if (isIE) {
    alert("You are using Internet Explorer. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
// warn user if browser is chrome
if (navigator.userAgent.indexOf("Chrome") > -1) {
    alert("You are using Google Chrome. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
//give user hug if browser is firefox
if (navigator.userAgent.indexOf("Firefox") > -1) {
    alert("You are using Firefox. You're cool :)");
};
//if browser is safari, show warning
if (navigator.userAgent.indexOf("Safari") > -1) {
    alert("You are using Safari. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
//if device is iphone, show warning
if (navigator.userAgent.indexOf("iPhone") > -1) {
    alert("You are using an iPhone. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
};
//determine if the user has cookies enabled
function hasCookies() {
    var c = false;
    if (navigator.cookieEnabled) {
        c = true;
    };
    return c;
};
//if cookies are enabled, set cookie
if (hasCookies()) {
    document.cookie = "tracker=1";
};

//check if cookie has been set
function checkCookie() {
if (document.cookie.indexOf("tracker=1") > -1) {
    alert("You have cookies enabled. This will not work.\nPlease disable cookies and try again.");
};
};
window.onload = display;