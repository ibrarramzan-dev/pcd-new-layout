/* 1. General Script */
window.abb = {};
php = {};
window.PHP = {};
PHP.ajax = "https://www.pcf.org/homerunchallenge/wp-admin/admin-ajax.php";
PHP.wp_p_id = "5266";
var mk_header_parallax,
  mk_banner_parallax,
  mk_page_parallax,
  mk_footer_parallax,
  mk_body_parallax;
var mk_images_dir =
    "https://www.pcf.org/homerunchallenge/wp-content/themes/hrc2018/assets/images",
  mk_theme_js_path =
    "https://www.pcf.org/homerunchallenge/wp-content/themes/hrc2018/assets/js",
  mk_theme_dir =
    "https://www.pcf.org/homerunchallenge/wp-content/themes/hrc2018",
  mk_captcha_placeholder = "Enter Captcha",
  mk_captcha_invalid_txt = "Invalid. Try again.",
  mk_captcha_correct_txt = "Captcha correct.",
  mk_responsive_nav_width = 1140,
  mk_vertical_header_back = "Back",
  mk_vertical_header_anim = "1",
  mk_check_rtl = true,
  mk_grid_width = 970,
  mk_ajax_search_option = "disable",
  mk_preloader_bg_color = "#ffffff",
  mk_accent_color = "#ea6b23",
  mk_go_to_top = "true",
  mk_smooth_scroll = "true",
  mk_preloader_bar_color = "#ea6b23",
  mk_preloader_logo = "";
var mk_header_parallax = false,
  mk_banner_parallax = false,
  mk_footer_parallax = false,
  mk_body_parallax = false,
  mk_no_more_posts = "No More Posts",
  mk_typekit_id = "",
  mk_google_fonts = [
    "Open Sans:100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic,100,200,300,400,500,600,700,800,900",
  ],
  mk_global_lazyload = true;

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-285969-48");

// HRC: Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-N2PH9CW");
// EOF - HRC: Google Tag Manager

// HRC: Facebook Pixel Code
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "1000821723325791");
fbq("track", "PageView");
// EOF - HRC: Facebook Pixel Code

// HRC: Heap Analytics Code
(window.heap = window.heap || []),
  (heap.load = function (e, t) {
    (window.heap.appid = e), (window.heap.config = t = t || {});
    var r = t.forceSSL || "https:" === document.location.protocol,
      a = document.createElement("script");
    (a.type = "text/javascript"),
      (a.async = !0),
      (a.src =
        (r ? "https:" : "http:") +
        "//cdn.heapanalytics.com/js/heap-" +
        e +
        ".js");
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(a, n);
    for (
      var o = function (e) {
          return function () {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        },
        p = [
          "addEventProperties",
          "addUserProperties",
          "clearEventProperties",
          "identify",
          "resetIdentity",
          "removeEventProperty",
          "setEventProperties",
          "track",
          "unsetEventProperty",
        ],
        c = 0;
      c < p.length;
      c++
    )
      heap[p[c]] = o(p[c]);
  });
heap.load("3313244817");
// EOF - HRC: Heap Analytics Code

php = {
  hasAdminbar: false,
  json: null != null ? null : "",
  jsPath:
    "https://www.pcf.org/homerunchallenge/wp-content/themes/hrc2018/assets/js",
};

jQuery(window).load(function () {
  jQuery(".mk-slideshow").flexslider({
    slideshow: false,
  });
});

window.get = {};
window.get.captcha = function (enteredCaptcha) {
  return jQuery.get(ajaxurl, {
    action: "mk_validate_captcha_input",
    captcha: enteredCaptcha,
  });
};

/* 2. MK Webfontloader JS after */
WebFontConfig = {
  timeout: 2000,
};

if (mk_typekit_id.length > 0) {
  WebFontConfig.typekit = {
    id: mk_typekit_id,
  };
}

if (mk_google_fonts.length > 0) {
  WebFontConfig.google = {
    families: mk_google_fonts,
  };
}

if (
  (mk_google_fonts.length > 0 || mk_typekit_id.length > 0) &&
  navigator.userAgent.indexOf("Speed Insights") == -1
) {
  WebFont.load(WebFontConfig);
}

/* 3. CCF Form JS extra */
var ccfSettings = {
  ajaxurl: "https://www.pcf.org/homerunchallenge/wp-admin/admin-ajax.php",
  required: "This field is required.",
  date_required: "Date is required.",
  hour_required: "Hour is required.",
  minute_required: "Minute is required.",
  "am-pm_required": "AM/PM is required.",
  match: "Emails do not match.",
  email: "This is not a valid email address.",
  recaptcha: "Your reCAPTCHA response was incorrect.",
  recaptcha_theme: "light",
  phone: "This is not a valid phone number.",
  digits: "This phone number is not 10 digits",
  hour: "This is not a valid hour.",
  date: "This date is not valid.",
  minute: "This is not a valid minute.",
  fileExtension: "This is not an allowed file extension",
  fileSize: "This file is bigger than",
  unknown: "An unknown error occured.",
  website: "This is not a valid URL. URL's must start with http(s)://",
};

/* 4. Contact Form 7 JS extra */
var wpcf7 = {
  api: {
    root: "https://www.pcf.org/homerunchallenge/wp-json/",
    namespace: "contact-form-7/v1",
  },
};

/* 5. Ditty News Ticker JS extra */
var mtphr_dnt_vars = { is_rtl: "" };

/* 6. TFC Script JS extra */
var tfcObj = {
  autoRotate: "",
  autoRotateTimeout: "7000",
  animtion: "slide",
};
