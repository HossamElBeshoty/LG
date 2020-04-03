/*************************
 Jarallax
 *************************/
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.8.0
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function (e) {
  "use strict";

  function t(e) {
    var t = ["O", "Moz", "ms", "Ms", "Webkit"], n = t.length;
    if (void 0 !== l.style[e]) return !0;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === l.style[t[n] + e];) ;
    return n >= 0
  }

  function n() {
    a = e.innerWidth || document.documentElement.clientWidth, r = e.innerHeight || document.documentElement.clientHeight
  }

  function i(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function () {
      n.call(e)
    })
  }

  function o(t) {
    e.requestAnimationFrame(function () {
      "scroll" !== t.type && n();
      for (var e = 0, i = h.length; e < i; e++) "scroll" !== t.type && (h[e].coverImage(), h[e].clipContainer()), h[e].onScroll()
    })
  }

  Date.now || (Date.now = function () {
    return (new Date).getTime()
  }), e.requestAnimationFrame || !function () {
    for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) {
      var i = t[n];
      e.requestAnimationFrame = e[i + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i + "CancelAnimationFrame"] || e[i + "CancelRequestAnimationFrame"]
    }
    if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
      var o = 0;
      e.requestAnimationFrame = function (e) {
        var t = Date.now(), n = Math.max(o + 16, t);
        return setTimeout(function () {
          e(o = n)
        }, n - t)
      }, e.cancelAnimationFrame = clearTimeout
    }
  }();
  var a, r, l = document.createElement("div"), s = t("transform"), c = t("perspective"), m = navigator.userAgent,
    p = m.toLowerCase().indexOf("android") > -1, u = /iPad|iPhone|iPod/.test(m) && !e.MSStream,
    d = m.toLowerCase().indexOf("firefox") > -1,
    g = m.indexOf("MSIE ") > -1 || m.indexOf("Trident/") > -1 || m.indexOf("Edge/") > -1, f = document.all && !e.atob;
  n();
  var h = [], y = function () {
    function e(e, n) {
      var i, o = this;
      if (o.$item = e, o.defaults = {
        type: "scroll",
        speed: .5,
        imgSrc: null,
        imgWidth: null,
        imgHeight: null,
        elementInViewport: null,
        zIndex: -100,
        noAndroid: !1,
        noIos: !0,
        onScroll: null,
        onInit: null,
        onDestroy: null,
        onCoverImage: null
      }, i = JSON.parse(o.$item.getAttribute("data-jarallax") || "{}"), o.options = o.extend({}, o.defaults, i, n), !(!s || p && o.options.noAndroid || u && o.options.noIos)) {
        o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
        var a = o.options.elementInViewport;
        a && "object" == typeof a && "undefined" != typeof a.length && (a = a[0]), !a instanceof Element && (a = null), o.options.elementInViewport = a, o.instanceID = t++, o.image = {
          src: o.options.imgSrc || null,
          $container: null,
          $item: null,
          width: o.options.imgWidth || null,
          height: o.options.imgHeight || null,
          useImgTag: u || p || g,
          position: !c || d ? "absolute" : "fixed"
        }, o.initImg() && o.init()
      }
    }

    var t = 0;
    return e
  }();
  y.prototype.css = function (t, n) {
    if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n];
    n.transform && (c && (n.transform += " translateZ(0)"), n.WebkitTransform = n.MozTransform = n.msTransform = n.OTransform = n.transform);
    for (var i in n) t.style[i] = n[i];
    return t
  }, y.prototype.extend = function (e) {
    e = e || {};
    for (var t = 1; t < arguments.length; t++) if (arguments[t]) for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
    return e
  }, y.prototype.initImg = function () {
    var e = this;
    return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
  }, y.prototype.init = function () {
    function e() {
      t.coverImage(), t.clipContainer(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), setTimeout(function () {
        t.$item && t.css(t.$item, {
          "background-image": "none",
          "background-attachment": "scroll",
          "background-size": "auto"
        })
      }, 0)
    }

    var t = this, n = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none"
    }, i = {};
    t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), "static" === t.css(t.$item, "position") && t.css(t.$item, {position: "relative"}), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {zIndex: 0}), t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
      visibility: "hidden",
      "z-index": t.options.zIndex
    }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), i = t.extend({"max-width": "none"}, n, i)) : (t.image.$item = document.createElement("div"), i = t.extend({
      "background-position": "50% 50%",
      "background-size": "100% auto",
      "background-repeat": "no-repeat no-repeat",
      "background-image": 'url("' + t.image.src + '")'
    }, n, i));
    for (var o = 0, a = t.$item; null !== a && a !== document && 0 === o;) {
      var r = t.css(a, "-webkit-transform") || t.css(a, "-moz-transform") || t.css(a, "transform");
      r && "none" !== r && (o = 1, t.css(t.image.$container, {transform: "translateX(0) translateY(0)"})), a = a.parentNode
    }
    (o || "opacity" === t.options.type || "scale" === t.options.type || "scale-opacity" === t.options.type) && (t.image.position = "absolute"), i.position = t.image.position, t.css(t.image.$item, i), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function (n, i) {
      t.image.width = n, t.image.height = i, e()
    }), h.push(t)
  }, y.prototype.destroy = function () {
    for (var e = this, t = 0, n = h.length; t < n; t++) if (h[t].instanceID === e.instanceID) {
      h.splice(t, 1);
      break
    }
    var i = e.$item.getAttribute("data-jarallax-original-styles");
    e.$item.removeAttribute("data-jarallax-original-styles"), "null" === i ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", i), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
    for (var o in e) delete e[o]
  }, y.prototype.getImageSize = function (e, t) {
    if (e && t) {
      var n = new Image;
      n.onload = function () {
        t(n.width, n.height)
      }, n.src = e
    }
  }, y.prototype.clipContainer = function () {
    if (!f) {
      var e = this, t = e.image.$container.getBoundingClientRect(), n = t.width, i = t.height;
      if (!e.$clipStyles) {
        e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID);
        var o = document.head || document.getElementsByTagName("head")[0];
        o.appendChild(e.$clipStyles)
      }
      var a = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + i + "px 0);", "   clip: rect(0, " + n + "px, " + i + "px, 0);", "}"].join("\n");
      e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
    }
  }, y.prototype.coverImage = function () {
    var e = this;
    if (e.image.width && e.image.height) {
      var t = e.image.$container.getBoundingClientRect(), n = t.width, i = t.height, o = t.left, a = e.image.width,
        l = e.image.height, s = e.options.speed, c = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
        m = 0, p = 0, u = i, d = 0, g = 0;
      c && (m = s < 0 ? s * Math.max(i, r) : s * (i + r), s > 1 ? u = Math.abs(m - r) : s < 0 ? u = m / s + Math.abs(m) : u += Math.abs(r - i) * (1 - s), m /= 2), p = u * a / l, p < n && (p = n, u = p * l / a), c ? (d = o + (n - p) / 2, g = (r - u) / 2) : (d = (n - p) / 2, g = (i - u) / 2), "absolute" === e.image.position && (d -= o), e.parallaxScrollDistance = m, e.css(e.image.$item, {
        width: p + "px",
        height: u + "px",
        marginLeft: d + "px",
        marginTop: g + "px"
      }), e.options.onCoverImage && e.options.onCoverImage.call(e)
    }
  }, y.prototype.isVisible = function () {
    return this.isElementInViewport || !1
  }, y.prototype.onScroll = function (e) {
    var t = this;
    if (t.image.width && t.image.height) {
      var n = t.$item.getBoundingClientRect(), i = n.top, o = n.height,
        l = {visibility: "visible", backgroundPosition: "50% 50%"}, s = n;
      if (t.options.elementInViewport && (s = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = s.bottom >= 0 && s.right >= 0 && s.top <= r && s.left <= a, e || t.isElementInViewport) {
        var c = Math.max(0, i), m = Math.max(0, o + i), p = Math.max(0, -i), u = Math.max(0, i + o - r),
          d = Math.max(0, o - (i + o - r)), g = Math.max(0, -i + r - o), f = 1 - 2 * (r - i) / (r + o), h = 1;
        if (o < r ? h = 1 - (p || u) / o : m <= r ? h = m / r : d <= r && (h = d / r), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (l.transform = "", l.opacity = h), "scale" === t.options.type || "scale-opacity" === t.options.type) {
          var y = 1;
          t.options.speed < 0 ? y -= t.options.speed * h : y += t.options.speed * (1 - h), l.transform = "scale(" + y + ")"
        }
        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
          var v = t.parallaxScrollDistance * f;
          "absolute" === t.image.position && (v -= i), l.transform = "translateY(" + v + "px)"
        }
        t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, {
          section: n,
          beforeTop: c,
          beforeTopEnd: m,
          afterTop: p,
          beforeBottom: u,
          beforeBottomEnd: d,
          afterBottom: g,
          visiblePercent: h,
          fromViewportCenter: f
        })
      }
    }
  }, i(e, "scroll", o), i(e, "resize", o), i(e, "orientationchange", o), i(e, "load", o);
  var v = function (e) {
    ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
    var t, n = arguments[1], i = Array.prototype.slice.call(arguments, 2), o = e.length, a = 0;
    for (a; a < o; a++) if ("object" == typeof n || "undefined" == typeof n ? e[a].jarallax || (e[a].jarallax = new y(e[a], n)) : e[a].jarallax && (t = e[a].jarallax[n].apply(e[a].jarallax, i)), "undefined" != typeof t) return t;
    return e
  };
  v.constructor = y;
  var x = e.jarallax;
  if (e.jarallax = v, e.jarallax.noConflict = function () {
    return e.jarallax = x, this
  }, "undefined" != typeof jQuery) {
    var $ = function () {
      var t = arguments || [];
      Array.prototype.unshift.call(t, this);
      var n = v.apply(e, t);
      return "object" != typeof n ? n : this
    };
    $.constructor = y;
    var b = jQuery.fn.jarallax;
    jQuery.fn.jarallax = $, jQuery.fn.jarallax.noConflict = function () {
      return jQuery.fn.jarallax = b, this
    }
  }
  i(e, "DOMContentLoaded", function () {
    v(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
  })
}(window);

/*************************
 Jarallax video
 *************************/
/*!
 * Name    : Video Worker (wrapper for Youtube, Vimeo and Local videos)
 * Version : 1.2.1
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function (e) {
  "use strict";

  function t(e) {
    e = e || {};
    for (var t = 1; t < arguments.length; t++) if (arguments[t]) for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
    return e
  }

  function i() {
    this._done = [], this._fail = []
  }

  function o(e, t, i) {
    e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function () {
      i.call(e)
    })
  }

  i.prototype = {
    execute: function (e, t) {
      var i = e.length;
      for (t = Array.prototype.slice.call(t); i--;) e[i].apply(null, t)
    }, resolve: function () {
      this.execute(this._done, arguments)
    }, reject: function () {
      this.execute(this._fail, arguments)
    }, done: function (e) {
      this._done.push(e)
    }, fail: function (e) {
      this._fail.push(e)
    }
  };
  var a = function () {
    function e(e, o) {
      var a = this;
      a.url = e, a.options_default = {
        autoplay: 1,
        loop: 1,
        mute: 1,
        controls: 0,
        startTime: 0,
        endTime: 0
      }, a.options = t({}, a.options_default, o), a.videoID = a.parseURL(e), a.videoID && (a.ID = i++, a.loadAPI(), a.init())
    }

    var i = 0;
    return e
  }();
  a.prototype.parseURL = function (e) {
    function t(e) {
      var t = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/, i = e.match(t);
      return !(!i || 11 !== i[1].length) && i[1]
    }

    function i(e) {
      var t = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
        i = e.match(t);
      return !(!i || !i[3]) && i[3]
    }

    function o(e) {
      for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, o = 0, a = 0; a < t.length; a++) {
        var n = t[a].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
        n && n[1] && n[2] && (i["ogv" === n[1] ? "ogg" : n[1]] = n[2], o = 1)
      }
      return !!o && i
    }

    var a = t(e), n = i(e), r = o(e);
    return a ? (this.type = "youtube", a) : n ? (this.type = "vimeo", n) : !!r && (this.type = "local", r)
  }, a.prototype.isValid = function () {
    return !!this.videoID
  }, a.prototype.on = function (e, t) {
    this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
  }, a.prototype.off = function (e, t) {
    if (this.userEventsList && this.userEventsList[e]) if (t) for (var i = 0; i < this.userEventsList[e].length; i++) this.userEventsList[e][i] === t && (this.userEventsList[e][i] = !1); else delete this.userEventsList[e]
  }, a.prototype.fire = function (e) {
    var t = [].slice.call(arguments, 1);
    if (this.userEventsList && "undefined" != typeof this.userEventsList[e]) for (var i in this.userEventsList[e]) this.userEventsList[e][i] && this.userEventsList[e][i].apply(this, t)
  }, a.prototype.play = function (e) {
    var t = this;
    t.player && ("youtube" === t.type && t.player.playVideo && ("undefined" != typeof e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" === t.type && ("undefined" != typeof e && t.player.setCurrentTime(e), t.player.getPaused().then(function (e) {
      e && t.player.play()
    })), "local" === t.type && ("undefined" != typeof e && (t.player.currentTime = e), t.player.play()))
  }, a.prototype.pause = function () {
    this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
  }, a.prototype.getImageURL = function (e) {
    var t = this;
    if (t.videoImage) return void e(t.videoImage);
    if ("youtube" === t.type) {
      var i = ["maxresdefault", "sddefault", "hqdefault", "0"], o = 0, a = new Image;
      a.onload = function () {
        120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg", e(t.videoImage)) : (o++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg")
      }, a.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg"
    }
    if ("vimeo" === t.type) {
      var n = new XMLHttpRequest;
      n.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), n.onreadystatechange = function () {
        if (4 === this.readyState && this.status >= 200 && this.status < 400) {
          var i = JSON.parse(this.responseText);
          t.videoImage = i[0].thumbnail_large, e(t.videoImage)
        }
      }, n.send(), n = null
    }
  }, a.prototype.getIframe = function (t) {
    var i = this;
    return i.$iframe ? void t(i.$iframe) : void i.onAPIready(function () {
      function a(e, t, i) {
        var o = document.createElement("source");
        o.src = t, o.type = i, e.appendChild(o)
      }

      var n;
      if (i.$iframe || (n = document.createElement("div"), n.style.display = "none"), "youtube" === i.type) {
        i.playerOptions = {}, i.playerOptions.videoId = i.videoID, i.playerOptions.playerVars = {
          autohide: 1,
          rel: 0,
          autoplay: 0
        }, i.options.controls || (i.playerOptions.playerVars.iv_load_policy = 3, i.playerOptions.playerVars.modestbranding = 1, i.playerOptions.playerVars.controls = 0, i.playerOptions.playerVars.showinfo = 0, i.playerOptions.playerVars.disablekb = 1);
        var r, p;
        i.playerOptions.events = {
          onReady: function (e) {
            i.options.mute && e.target.mute(), i.options.autoplay && i.play(i.options.startTime), i.fire("ready", e)
          }, onStateChange: function (e) {
            i.options.loop && e.data === YT.PlayerState.ENDED && i.play(i.options.startTime), r || e.data !== YT.PlayerState.PLAYING || (r = 1, i.fire("started", e)), e.data === YT.PlayerState.PLAYING && i.fire("play", e), e.data === YT.PlayerState.PAUSED && i.fire("pause", e), e.data === YT.PlayerState.ENDED && i.fire("end", e), i.options.endTime && (e.data === YT.PlayerState.PLAYING ? p = setInterval(function () {
              i.options.endTime && i.player.getCurrentTime() >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
            }, 150) : clearInterval(p))
          }
        };
        var s = !i.$iframe;
        if (s) {
          var l = document.createElement("div");
          l.setAttribute("id", i.playerID), n.appendChild(l), document.body.appendChild(n)
        }
        i.player = i.player || new e.YT.Player(i.playerID, i.playerOptions), s && (i.$iframe = document.getElementById(i.playerID), i.videoWidth = parseInt(i.$iframe.getAttribute("width"), 10) || 1280, i.videoHeight = parseInt(i.$iframe.getAttribute("height"), 10) || 720)
      }
      if ("vimeo" === i.type) {
        i.playerOptions = "", i.playerOptions += "player_id=" + i.playerID, i.playerOptions += "&autopause=0", i.options.controls || (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), i.playerOptions += "&autoplay=" + (i.options.autoplay ? "1" : "0"), i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0), i.$iframe || (i.$iframe = document.createElement("iframe"), i.$iframe.setAttribute("id", i.playerID), i.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + i.videoID + "?" + i.playerOptions), i.$iframe.setAttribute("frameborder", "0"), n.appendChild(i.$iframe), document.body.appendChild(n)), i.player = i.player || new Vimeo.Player(i.$iframe), i.player.getVideoWidth().then(function (e) {
          i.videoWidth = e || 1280
        }), i.player.getVideoHeight().then(function (e) {
          i.videoHeight = e || 720
        }), i.player.setVolume(i.options.mute ? 0 : 100);
        var d;
        i.player.on("timeupdate", function (e) {
          d || i.fire("started", e), d = 1, i.options.endTime && i.options.endTime && e.seconds >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
        }), i.player.on("play", function (e) {
          i.fire("play", e), i.options.startTime && 0 === e.seconds && i.play(i.options.startTime)
        }), i.player.on("pause", function (e) {
          i.fire("pause", e)
        }), i.player.on("ended", function (e) {
          i.fire("end", e)
        }), i.player.on("loaded", function (e) {
          i.fire("ready", e)
        })
      }
      if ("local" === i.type) {
        if (!i.$iframe) {
          i.$iframe = document.createElement("video"), i.options.mute && (i.$iframe.muted = !0), i.options.loop && (i.$iframe.loop = !0), i.$iframe.setAttribute("id", i.playerID), n.appendChild(i.$iframe), document.body.appendChild(n);
          for (var u in i.videoID) a(i.$iframe, i.videoID[u], "video/" + u)
        }
        i.player = i.player || i.$iframe;
        var y;
        o(i.player, "playing", function (e) {
          y || i.fire("started", e), y = 1
        }), o(i.player, "timeupdate", function () {
          i.options.endTime && i.options.endTime && this.currentTime >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
        }), o(i.player, "play", function (e) {
          i.fire("play", e)
        }), o(i.player, "pause", function (e) {
          i.fire("pause", e)
        }), o(i.player, "ended", function (e) {
          i.fire("end", e)
        }), o(i.player, "loadedmetadata", function () {
          i.videoWidth = this.videoWidth || 1280, i.videoHeight = this.videoHeight || 720, i.fire("ready"), i.options.autoplay && i.play(i.options.startTime)
        })
      }
      t(i.$iframe)
    })
  }, a.prototype.init = function () {
    var e = this;
    e.playerID = "VideoWorker-" + e.ID
  };
  var n = 0, r = 0;
  a.prototype.loadAPI = function () {
    var t = this;
    if (!n || !r) {
      var i = "";
      if ("youtube" !== t.type || n || (n = 1, i = "//www.youtube.com/iframe_api"), "vimeo" !== t.type || r || (r = 1, i = "//player.vimeo.com/api/player.js"), i) {
        "file://" === e.location.origin && (i = "http:" + i);
        var o = document.createElement("script"), a = document.getElementsByTagName("head")[0];
        o.src = i, a.appendChild(o), a = null, o = null
      }
    }
  };
  var p = 0, s = 0, l = new i, d = new i;
  a.prototype.onAPIready = function (t) {
    var i = this;
    if ("youtube" === i.type && ("undefined" != typeof YT && 0 !== YT.loaded || p ? "object" == typeof YT && 1 === YT.loaded ? t() : l.done(function () {
      t()
    }) : (p = 1, e.onYouTubeIframeAPIReady = function () {
      e.onYouTubeIframeAPIReady = null, l.resolve("done"), t()
    })), "vimeo" === i.type) if ("undefined" != typeof Vimeo || s) "undefined" != typeof Vimeo ? t() : d.done(function () {
      t()
    }); else {
      s = 1;
      var o = setInterval(function () {
        "undefined" != typeof Vimeo && (clearInterval(o), d.resolve("done"), t())
      }, 20)
    }
    "local" === i.type && t()
  }, e.VideoWorker = a
}(window),/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.0
 * Author  : _nK http://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
  function () {
    "use strict";
    if ("undefined" != typeof jarallax) {
      var e = jarallax.constructor, t = e.prototype.init;
      e.prototype.init = function () {
        var e = this;
        t.apply(e), e.video && e.video.getIframe(function (t) {
          var i = t.parentNode;
          e.css(t, {
            position: e.image.position,
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            visibility: "hidden",
            margin: 0,
            zIndex: -1
          }), e.$video = t, e.image.$container.appendChild(t), i.parentNode.removeChild(i)
        })
      };
      var i = e.prototype.coverImage;
      e.prototype.coverImage = function () {
        var e = this;
        i.apply(e), e.video && "IFRAME" === e.image.$item.nodeName && e.css(e.image.$item, {
          height: e.image.$item.getBoundingClientRect().height + 400 + "px",
          marginTop: -200 + parseFloat(e.css(e.image.$item, "margin-top")) + "px"
        })
      };
      var o = e.prototype.initImg;
      e.prototype.initImg = function () {
        var e = this, t = o.apply(e);
        if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
          var i = new VideoWorker(e.options.videoSrc, {
            startTime: e.options.videoStartTime || 0,
            endTime: e.options.videoEndTime || 0
          });
          if (i.isValid() && (e.image.useImgTag = !0, i.on("ready", function () {
            var t = e.onScroll;
            e.onScroll = function () {
              t.apply(e), e.isVisible() ? i.play() : i.pause()
            }
          }), i.on("started", function () {
            e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.video.videoWidth || 1280, e.image.height = e.options.imgHeight = e.video.videoHeight || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
          }), e.video = i, "local" !== i.type && i.getImageURL(function (t) {
            e.image.src = t, e.init()
          })), "local" !== i.type) return !1;
          if (!t) return e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
        }
        return t
      };
      var a = e.prototype.destroy;
      e.prototype.destroy = function () {
        var e = this;
        a.apply(e)
      }
    }
  }();
