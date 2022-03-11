(function(n, t) {
    function pu(n) {
        var t = pt[n] = {};
        return i.each(n.split(h), function(n, i) {
            t[i] = !0
        }),
        t
    }
    function ri(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(hr, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
            typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : sr.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function at(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function v() {
        return !1
    }
    function d() {
        return !0
    }
    function b(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function ui(n, t) {
        do
            n = n[t];
        while (n && n.nodeType !== 1);return n
    }
    function fi(n, t, r) {
        if (t = t || 0,
        i.isFunction(t))
            return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t === r
            });
        if (typeof t == "string") {
            var u = i.grep(n, function(n) {
                return n.nodeType === 1
            });
            if (fe.test(t))
                return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function ei(n) {
        var i = dr.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function wu(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }
    function oi(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; f < o; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function si(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(n),
        r = t.nodeName.toLowerCase(),
        r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML),
        i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && tu.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
        t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text),
        t.removeAttribute(i.expando))
    }
    function g(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }
    function hi(n) {
        tu.test(n.type) && (n.defaultChecked = n.checked)
    }
    function ci(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = eu.length; i--; )
            if (t = eu[i] + r,
            t in n)
                return t;
        return u
    }
    function nt(n, t) {
        return n = t || n,
        i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }
    function li(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)
            (r = n[f],
            r.style) && (e[f] = i._data(r, "olddisplay"),
            t ? (!e[f] && r.style.display === "none" && (r.style.display = ""),
            r.style.display === "" && nt(r) && (e[f] = i._data(r, "olddisplay", pi(r.nodeName)))) : (o = u(r, "display"),
            !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)
            (r = n[f],
            r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
        return n
    }
    function ai(n, t, i) {
        var r = we.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function vi(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
            r === "margin" && (o += i.css(n, r + c[e], !0)),
            f ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0),
            r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + c[e])) || 0,
            r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
        return o
    }
    function yi(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight
          , e = !0
          , o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0) {
            if (f = u(n, t),
            (f < 0 || f == null) && (f = n.style[t]),
            et.test(f))
                return f;
            e = o && (i.support.boxSizingReliable || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + vi(n, t, r || (o ? "border" : "content"), e) + "px"
    }
    function pi(n) {
        if (ni[n])
            return ni[n];
        var f = i("<" + n + ">").appendTo(r.body)
          , t = f.css("display");
        return f.remove(),
        (t === "none" || t === "") && (y = r.body.appendChild(y || i.extend(r.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        p && y.createElement || (p = (y.contentWindow || y.contentDocument).document,
        p.write("<!doctype html><html><body>"),
        p.close()),
        f = p.body.appendChild(p.createElement(n)),
        t = u(f, "display"),
        r.body.removeChild(y)),
        ni[n] = t,
        t
    }
    function vt(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || no.test(n) ? u(n, i) : vt(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
            });
        else if (r || i.type(t) !== "object")
            u(n, t);
        else
            for (f in t)
                vt(n + "[" + f + "]", t[f], r, u)
    }
    function wi(n) {
        return function(t, r) {
            typeof t != "string" && (r = t,
            t = "*");
            var u, o, f, s = t.toLowerCase().split(h), e = 0, c = s.length;
            if (i.isFunction(r))
                for (; e < c; e++)
                    u = s[e],
                    f = /^\+/.test(u),
                    f && (u = u.substr(1) || "*"),
                    o = n[u] = n[u] || [],
                    o[f ? "unshift" : "push"](r)
        }
    }
    function tt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === ti; h < l && (c || !o); h++)
            o = s[h](i, r, u),
            typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o),
            o = tt(n, i, r, u, o, e)));
        return (c || !o) && !e["*"] && (o = tt(n, i, r, u, "*", e)),
        o
    }
    function bi(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function bu(n, i, r) {
        var o, u, e, s, h = n.contents, f = n.dataTypes, c = n.responseFields;
        for (u in c)
            u in r && (i[c[u]] = r[u]);
        while (f[0] === "*")
            f.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in h)
                if (h[u] && h[u].test(o)) {
                    f.unshift(u);
                    break
                }
        if (f[0]in r)
            e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e)
            return e !== f[0] && f.unshift(e),
            r[e]
    }
    function ku(n, t) {
        var i, o, r, e, s = n.dataTypes.slice(), f = s[0], u = {}, h = 0;
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)),
        s[1])
            for (i in n.converters)
                u[i.toLowerCase()] = n.converters[i];
        for (; r = s[++h]; )
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (i = u[f + " " + r] || u["* " + r],
                    !i)
                        for (o in u)
                            if (e = o.split(" "),
                            e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]],
                            i)) {
                                i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0],
                                s.splice(h--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && n.throws)
                            t = i(t);
                        else
                            try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + f + " to " + r
                                }
                            }
                }
                f = r
            }
        return {
            state: "success",
            data: t
        }
    }
    function ki() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function du() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function di() {
        return setTimeout(function() {
            ht = t
        }, 0),
        ht = i.now()
    }
    function gu(n, t) {
        i.each(t, function(t, i) {
            for (var u = (k[t] || []).concat(k["*"]), r = 0, f = u.length; r < f; r++)
                if (u[r].call(n, t, i))
                    return
        })
    }
    function gi(n, t, r) {
        var e, o = 0, c = lt.length, f = i.Deferred().always(function() {
            delete h.elem
        }), h = function() {
            for (var o = ht || di(), t = Math.max(0, u.startTime + u.duration - o), i = 1 - (t / u.duration || 0), r = 0, e = u.tweens.length; r < e; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            i < 1 && e ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ht || di(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), s = u.props;
        for (nf(s, u.opts.specialEasing); o < c; o++)
            if (e = lt[o].call(u, n, s, u.opts),
            e)
                return e;
        return gu(u, s),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(h, {
            anim: u,
            queue: u.opts.queue,
            elem: n
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function nf(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function tf(n, t, r) {
        var o, u, a, v, h, c, f, w, s = this, e = n.style, y = {}, p = [], l = n.nodeType && nt(n);
        r.queue || (f = i._queueHooks(n, "fx"),
        f.unqueued == null && (f.unqueued = 0,
        w = f.empty.fire,
        f.empty.fire = function() {
            f.unqueued || w()
        }
        ),
        f.unqueued++,
        s.always(function() {
            s.always(function() {
                f.unqueued--;
                i.queue(n, "fx").length || f.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height"in t || "width"in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY],
        i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (!i.support.inlineBlockNeedsLayout || pi(n.nodeName) === "inline" ? e.display = "inline-block" : e.zoom = 1));
        r.overflow && (e.overflow = "hidden",
        i.support.shrinkWrapBlocks || s.done(function() {
            e.overflow = r.overflow[0];
            e.overflowX = r.overflow[1];
            e.overflowY = r.overflow[2]
        }));
        for (o in t)
            if (a = t[o],
            lo.exec(a)) {
                if (delete t[o],
                a === (l ? "hide" : "show"))
                    continue;
                p.push(o)
            }
        if (v = p.length,
        v)
            for (h = i._data(n, "fxshow") || i._data(n, "fxshow", {}),
            l ? i(n).show() : s.done(function() {
                i(n).hide()
            }),
            s.done(function() {
                var t;
                i.removeData(n, "fxshow", !0);
                for (t in y)
                    i.style(n, t, y[t])
            }),
            o = 0; o < v; o++)
                u = p[o],
                c = s.createTween(u, l ? h[u] : 0),
                y[u] = h[u] || i.style(n, u),
                u in h || (h[u] = c.start,
                l && (c.end = c.start,
                c.start = u === "width" || u === "height" ? 1 : 0))
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n,t,i,r,u)
    }
    function it(n, t) {
        for (var r, i = {
            height: n
        }, u = 0; u < 4; u += 2 - t)
            r = c[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function nr(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var tr, rt, r = n.document, rf = n.location, uf = n.navigator, ff = n.jQuery, ef = n.$, ir = Array.prototype.push, o = Array.prototype.slice, rr = Array.prototype.indexOf, of = Object.prototype.toString, yt = Object.prototype.hasOwnProperty, ur = String.prototype.trim, i = function(n, t) {
        return new i.fn.init(n,t,tr)
    }, ut = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, fr = /\S/, h = /\s+/, sf = fr.test("聽") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g, hf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, cf = /^[\],:{}\s]*$/, lf = /(?:^|:|,)(?:\s*\[)+/g, af = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, vf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, yf = /^-ms-/, pf = /-([\da-z])/gi, wf = function(n, t) {
        return (t + "").toUpperCase()
    }, ft = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", ft, !1),
        i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", ft),
        i.ready())
    }, or = {}, pt, sr, hr, w, st, yu, ii;
    i.fn = i.prototype = {
        constructor: i,
        init: function(n, u, f) {
            var e, o, s;
            if (!n)
                return this;
            if (n.nodeType)
                return this.context = this[0] = n,
                this.length = 1,
                this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : hf.exec(n),
                e && (e[1] || !u)) {
                    if (e[1])
                        return u = u instanceof i ? u[0] : u,
                        s = u && u.nodeType ? u.ownerDocument || u : r,
                        n = i.parseHTML(e[1], s, !0),
                        er.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0),
                        i.merge(this, n);
                    if (o = r.getElementById(e[2]),
                    o && o.parentNode) {
                        if (o.id !== e[2])
                            return f.find(n);
                        this.length = 1;
                        this[0] = o
                    }
                    return this.context = r,
                    this.selector = n,
                    this
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
            this.context = n.context),
            i.makeArray(n, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return o.call(this)
        },
        get: function(n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function(n, t, r) {
            var u = i.merge(this.constructor(), n);
            return u.prevObject = this,
            u.context = this.context,
            t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"),
            u
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n),
            this
        },
        eq: function(n) {
            return n = +n,
            n === -1 ? this.slice(n) : this.slice(n, n + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ir,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var o, e, u, r, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
        for (typeof n == "boolean" && (c = n,
        n = arguments[1] || {},
        f = 2),
        typeof n != "object" && !i.isFunction(n) && (n = {}),
        l === f && (n = this,
        --f); f < l; f++)
            if ((o = arguments[f]) != null)
                for (e in o)
                    (u = n[e],
                    r = o[e],
                    n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1,
                    h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {},
                    n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    }
    ;
    i.extend({
        noConflict: function(t) {
            return n.$ === i && (n.$ = ef),
            t && n.jQuery === i && (n.jQuery = ff),
            i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body)
                    return setTimeout(i.ready, 1);
                (i.isReady = !0,
                n !== !0 && --i.readyWait > 0) || (rt.resolveWith(r, [i]),
                i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function(n) {
            return i.type(n) === "array"
        }
        ,
        isWindow: function(n) {
            return n != null && n == n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return n == null ? String(n) : or[of.call(n)] || "object"
        },
        isPlainObject: function(n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !yt.call(n, "constructor") && !yt.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            for (var r in n)
                ;
            return r === t || yt.call(n, r)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        error: function(n) {
            throw new Error(n);
        },
        parseHTML: function(n, t, u) {
            var f;
            return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t,
            t = 0),
            t = t || r,
            (f = er.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []),
            i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string")
                return null;
            if (t = i.trim(t),
            n.JSON && n.JSON.parse)
                return n.JSON.parse(t);
            if (cf.test(t.replace(af, "@").replace(vf, "]").replace(lf, "")))
                return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || typeof r != "string")
                return null;
            try {
                n.DOMParser ? (f = new DOMParser,
                u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                u.async = "false",
                u.loadXML(r))
            } catch (e) {
                u = t
            }
            return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r),
            u
        },
        noop: function() {},
        globalEval: function(t) {
            t && fr.test(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(yf, "ms-").replace(pf, wf)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function(n, r, u) {
            var f, e = 0, o = n.length, s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (f in n)
                        if (r.apply(n[f], u) === !1)
                            break
                } else
                    for (; e < o; )
                        if (r.apply(n[e++], u) === !1)
                            break
            } else if (s) {
                for (f in n)
                    if (r.call(n[f], f, n[f]) === !1)
                        break
            } else
                for (; e < o; )
                    if (r.call(n[e], e, n[e++]) === !1)
                        break;
            return n
        },
        trim: ur ? function(n) {
            return n == null ? "" : ur.call(n)
        }
        : function(n) {
            return n == null ? "" : n.toString().replace(sf, "")
        }
        ,
        makeArray: function(n, t) {
            var r, u = t || [];
            return n != null && (r = i.type(n),
            n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? ir.call(u, n) : i.merge(u, n)),
            u
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr)
                    return rr.call(t, n, i);
                for (r = t.length,
                i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, i) {
            var f = i.length
              , u = n.length
              , r = 0;
            if (typeof f == "number")
                for (; r < f; r++)
                    n[u++] = i[r];
            else
                while (i[r] !== t)
                    n[u++] = i[r++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            var u, f = [], r = 0, e = n.length;
            for (i = !!i; r < e; r++)
                u = !!t(n[r], r),
                i !== u && f.push(n[r]);
            return f
        },
        map: function(n, r, u) {
            var f, h, e = [], s = 0, o = n.length, c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
            if (c)
                for (; s < o; s++)
                    f = r(n[s], s, u),
                    f != null && (e[e.length] = f);
            else
                for (h in n)
                    f = r(n[h], h, u),
                    f != null && (e[e.length] = f);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, e, u;
            return typeof r == "string" && (f = n[r],
            r = n,
            n = f),
            i.isFunction(n) ? (e = o.call(arguments, 2),
            u = function() {
                return n.apply(r, e.concat(o.call(arguments)))
            }
            ,
            u.guid = n.guid = n.guid || u.guid || i.guid++,
            u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var c, l = u == null, h = 0, a = n.length;
            if (u && typeof u == "object") {
                for (h in u)
                    i.access(n, r, h, u[h], 1, o, f);
                e = 1
            } else if (f !== t) {
                if (c = s === t && i.isFunction(f),
                l && (c ? (c = r,
                r = function(n, t, r) {
                    return c.call(i(n), r)
                }
                ) : (r.call(n, f),
                r = null)),
                r)
                    for (; h < a; h++)
                        r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1
            }
            return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    i.ready.promise = function(t) {
        if (!rt)
            if (rt = i.Deferred(),
            r.readyState === "complete" || r.readyState !== "loading" && r.addEventListener)
                setTimeout(i.ready, 1);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", ft, !1),
                n.addEventListener("load", i.ready, !1);
            else {
                r.attachEvent("onreadystatechange", ft);
                n.attachEvent("onload", i.ready);
                var u = !1;
                try {
                    u = n.frameElement == null && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        i.ready()
                    }
                }()
            }
        return rt.promise(t)
    }
    ;
    i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) {
        or["[object " + t + "]"] = t.toLowerCase()
    });
    tr = i(r);
    pt = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? pt[n] || pu(n) : i.extend({}, n);
        var f, c, o, l, s, e, r = [], u = !n.once && [], a = function(t) {
            for (f = n.memory && t,
            c = !0,
            e = l || 0,
            l = 0,
            s = r.length,
            o = !0; r && e < s; e++)
                if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                    f = !1;
                    break
                }
            o = !1;
            r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
        }, h = {
            add: function() {
                if (r) {
                    var t = r.length;
                    (function u(t) {
                        i.each(t, function(t, f) {
                            i.isFunction(f) && (!n.unique || !h.has(f)) ? r.push(f) : f && f.length && u(f)
                        })
                    }
                    )(arguments);
                    o ? s = r.length : f && (l = t,
                    a(f))
                }
                return this
            },
            remove: function() {
                return r && i.each(arguments, function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1; )
                        r.splice(u, 1),
                        o && (u <= s && s--,
                        u <= e && e--)
                }),
                this
            },
            has: function(n) {
                return i.inArray(n, r) > -1
            },
            empty: function() {
                return r = [],
                this
            },
            disable: function() {
                return r = u = f = t,
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return u = t,
                f || h.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(n, t) {
                return t = t || [],
                t = [n, t.slice ? t.slice() : t],
                r && (!c || u) && (o ? u.push(t) : a(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(r) {
                        i.each(u, function(u, f) {
                            var e = f[0]
                              , o = n[u];
                            t[f[1]](i.isFunction(o) ? function() {
                                var n = o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e + "With"](this === t ? r : this, [n])
                            }
                            : r[e])
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return typeof n == "object" ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = e.fire;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = o.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0, f = e === 1 ? n : i.Deferred(), c = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? o.call(arguments) : r;
                    i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, s, l, h;
            if (r > 1)
                for (s = new Array(r),
                l = new Array(r),
                h = new Array(r); t < r; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(c(t, h, u)).fail(f.reject).progress(c(t, l, s)) : --e;
            return e || f.resolveWith(h, u),
            f.promise()
        }
    });
    i.support = function() {
        var u, h, e, c, l, f, o, a, v, s, y, t = r.createElement("div");
        if (t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table><\/table><a href='http://www.gra-assiociation.com/a'>a<\/a><input type='checkbox'/>",
        h = t.getElementsByTagName("*"),
        e = t.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px;float:left;opacity:.5",
        !h || !h.length || !e)
            return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function() {
            u.noCloneEvent = !1
        }
        ),
        t.cloneNode(!0).fireEvent("onclick"),
        t.detachEvent("onclick", y)),
        f = r.createElement("input"),
        f.value = "t",
        f.setAttribute("type", "radio"),
        u.radioValue = f.value === "t",
        f.setAttribute("checked", "checked"),
        f.setAttribute("name", "t"),
        t.appendChild(f),
        o = r.createDocumentFragment(),
        o.appendChild(t.lastChild),
        u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
        u.appendChecked = f.checked,
        o.removeChild(f),
        o.appendChild(t),
        t.attachEvent)
            for (v in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                a = "on" + v,
                s = a in t,
                s || (t.setAttribute(a, "return;"),
                s = typeof t[a] == "function"),
                u[v + "Bubbles"] = s;
        return i(function() {
            var i, t, f, e, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;", o = r.getElementsByTagName("body")[0];
            o && (i = r.createElement("div"),
            i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            o.insertBefore(i, o.firstChild),
            t = r.createElement("div"),
            i.appendChild(t),
            t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
            f = t.getElementsByTagName("td"),
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            s = f[0].offsetHeight === 0,
            f[0].style.display = "",
            f[1].style.display = "none",
            u.reliableHiddenOffsets = s && f[0].offsetHeight === 0,
            t.innerHTML = "",
            t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            u.boxSizing = t.offsetWidth === 4,
            u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1,
            n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%",
            u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px",
            e = r.createElement("div"),
            e.style.cssText = t.style.cssText = h,
            e.style.marginRight = e.style.width = "0",
            t.style.width = "1px",
            t.appendChild(e),
            u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)),
            typeof t.style.zoom != "undefined" && (t.innerHTML = "",
            t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1",
            u.inlineBlockNeedsLayout = t.offsetWidth === 3,
            t.style.display = "block",
            t.style.overflow = "visible",
            t.innerHTML = "<div><\/div>",
            t.firstChild.style.width = "5px",
            u.shrinkWrapBlocks = t.offsetWidth !== 3,
            i.style.zoom = 1),
            o.removeChild(i),
            i = t = f = e = null)
        }),
        o.removeChild(t),
        h = e = c = l = f = o = t = null,
        u
    }();
    sr = /^(?:\{.*\}|\[.*\])$/;
    hr = /([A-Z])/g;
    i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !at(n)
        },
        data: function(n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando, a = typeof r == "string", l = n.nodeType, o = l ? i.cache : n, e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t)
                    return e || (l ? n[c] = e = i.deletedIds.pop() || ++i.uuid : e = c),
                    o[e] || (o[e] = {},
                    l || (o[e].toJSON = i.noop)),
                    (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)),
                    s = o[e],
                    f || (s.data || (s.data = {}),
                    s = s.data),
                    u !== t && (s[i.camelCase(r)] = u),
                    a ? (h = s[r],
                    h == null && (h = s[i.camelCase(r)])) : h = s,
                    h
            }
        },
        removeData: function(n, t, r) {
            if (i.acceptData(n)) {
                var e, o, h, s = n.nodeType, u = s ? i.cache : n, f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data,
                    e)) {
                        for (i.isArray(t) || ((t in e) ? t = [t] : (t = i.camelCase(t),
                        t = (t in e) ? [t] : t.split(" "))),
                        o = 0,
                        h = t.length; o < h; o++)
                            delete e[t[o]];
                        if (!(r ? at : i.isEmptyObject)(e))
                            return
                    }
                    (r || (delete u[f].data,
                    at(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        },
        _data: function(n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function(n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var u, s, h, o, l, e = this[0], c = 0, f = null;
            if (n === t) {
                if (this.length && (f = i.data(e),
                e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes,
                    l = h.length; c < l; c++)
                        o = h[c].name,
                        o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)),
                        ri(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : (u = n.split(".", 2),
            u[1] = u[1] ? "." + u[1] : "",
            s = u[1] + "!",
            i.access(this, function(r) {
                if (r === t)
                    return f = this.triggerHandler("getData" + s, [u[0]]),
                    f === t && e && (f = i.data(e, n),
                    f = ri(e, n, f)),
                    f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r;
                this.each(function() {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u);
                    i.data(this, n, r);
                    t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n)
                return t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , e = function() {
                i.dequeue(n, t)
            };
            u === "inprogress" && (u = r.shift());
            u && (t === "fx" && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, e, f));
            !r.length && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i.removeData(n, t + "queue", !0);
                    i.removeData(n, r, !0)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return typeof n != "string" && (r = n,
            n = "fx",
            u--),
            arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for (typeof n != "string" && (r = n,
            n = t),
            n = n || "fx"; s--; )
                (u = i._data(f[s], n + "queueHooks")) && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(r)
        }
    });
    var s, cr, lr, ar = /[\t\r\n]/g, bf = /\r/g, kf = /^(?:button|input)$/i, df = /^(?:button|input|object|select|textarea)$/i, gf = /^a(?:rea|)$/i, vr = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, yr = i.support.getSetAttribute;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) {}
            })
        },
        addClass: function(n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string")
                for (r = n.split(h),
                f = 0,
                o = this.length; f < o; f++)
                    if (t = this[f],
                    t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ",
                            u = 0,
                            s = r.length; u < s; u++)
                                ~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else
                            t.className = n;
            return this
        },
        removeClass: function(n) {
            var e, r, u, f, s, o, c;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string" || n === t)
                for (e = (n || "").split(h),
                o = 0,
                c = this.length; o < c; o++)
                    if (u = this[o],
                    u.nodeType === 1 && u.className) {
                        for (r = (" " + u.className + " ").replace(ar, " "),
                        f = 0,
                        s = e.length; f < s; f++)
                            while (r.indexOf(" " + e[f] + " ") > -1)
                                r = r.replace(" " + e[f] + " ", " ");
                        u.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n
              , u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, c = n.split(h); f = c[s++]; )
                        e = u ? e : !o.hasClass(f),
                        o[e ? "addClass" : "removeClass"](f);
                else
                    (r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(ar, " ").indexOf(i) > -1)
                    return !0;
            return !1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n),
            this.each(function(u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n,
                f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return n == null ? "" : n + ""
                })),
                r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
            r && "get"in r && (u = r.get(f, "value")) !== t ? u : (u = f.value,
            typeof u == "string" ? u.replace(bf, "") : u == null ? "" : u)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    var o, r, h, t, u = n.selectedIndex, s = [], f = n.options, e = n.type === "select-one";
                    if (u < 0)
                        return null;
                    for (r = e ? u : 0,
                    h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r],
                        t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            e)
                                return o;
                            s.push(o)
                        }
                    return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }),
                    r.length || (n.selectedIndex = -1),
                    r
                }
            }
        },
        attrFn: {},
        attr: function(n, r, u, f) {
            var e, o, h, c = n.nodeType;
            if (n && c !== 3 && c !== 8 && c !== 2) {
                if (f && i.isFunction(i.fn[r]))
                    return i(n)[r](u);
                if (typeof n.getAttribute == "undefined")
                    return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n),
                h && (r = r.toLowerCase(),
                o = i.attrHooks[r] || (vr.test(r) ? cr : s)),
                u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return o && "set"in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, "" + u),
                    u)
                }
                return o && "get"in o && h && (e = o.get(n, r)) !== null ? e : (e = n.getAttribute(r),
                e === null ? t : e)
            }
        },
        removeAttr: function(n, t) {
            var u, f, r, e, o = 0;
            if (t && n.nodeType === 1)
                for (f = t.split(h); o < f.length; o++)
                    r = f[o],
                    r && (u = i.propFix[r] || r,
                    e = vr.test(r),
                    e || i.attr(n, r, ""),
                    n.removeAttribute(yr ? r : u),
                    e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (kf.test(n.nodeName) && n.parentNode)
                        i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            },
            value: {
                get: function(n, t) {
                    return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
                },
                set: function(n, t, r) {
                    if (s && i.nodeName(n, "button"))
                        return s.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2)
                return s = o !== 1 || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                f = i.propHooks[r]),
                u !== t ? f && "set"in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get"in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : df.test(n.nodeName) || gf.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    });
    cr = {
        get: function(n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function(n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r,
            u in n && (n[u] = !0),
            n.setAttribute(r, r.toLowerCase())),
            r
        }
    };
    yr || (lr = {
        name: !0,
        id: !0,
        coords: !0
    },
    s = i.valHooks.button = {
        get: function(n, i) {
            var r;
            return r = n.getAttributeNode(i),
            r && (lr[i] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i),
            n.setAttributeNode(u)),
            u.value = t + ""
        }
    },
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function(n, i) {
                if (i === "")
                    return n.setAttribute(t, "auto"),
                    i
            }
        })
    }),
    i.attrHooks.contenteditable = {
        get: s.get,
        set: function(n, t, i) {
            t === "" && (t = "false");
            s.set(n, t, i)
        }
    });
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    });
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function(n, t) {
            return n.style.cssText = "" + t
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            get: function(n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var wt = /^(?:textarea|input|select)$/i
      , pr = /^([^\.]*|)(?:\.(.+)|)$/
      , ne = /(?:^|\s)hover(\.\S+|)\b/
      , te = /^key/
      , ie = /^(?:mouse|contextmenu)|click/
      , wr = /^(?:focusinfocus|focusoutblur)$/
      , br = function(n) {
        return i.event.special.hover ? n : n.replace(ne, "mouseenter$1 mouseleave$1")
    };
    i.event = {
        add: function(n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
                for (u.handler && (w = u,
                u = w.handler,
                e = w.selector),
                u.guid || (u.guid = i.guid++),
                v = a.events,
                v || (a.events = v = {}),
                s = a.handle,
                s || (a.handle = s = function(n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                }
                ,
                s.elem = n),
                r = i.trim(br(r)).split(" "),
                y = 0; y < r.length; y++)
                    p = pr.exec(r[y]) || [],
                    o = p[1],
                    b = (p[2] || "").split(".").sort(),
                    h = i.event.special[o] || {},
                    o = (e ? h.delegateType : h.bindType) || o,
                    h = i.event.special[o] || {},
                    l = i.extend({
                        type: o,
                        origType: p[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        namespace: b.join(".")
                    }, w),
                    c = v[o],
                    c || (c = v[o] = [],
                    c.delegateCount = 0,
                    h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))),
                    h.add && (h.add.call(n, l),
                    l.handler.guid || (l.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, l) : c.push(l),
                    i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function(n, t, r, u, f) {
            var l, p, e, w, h, b, a, v, c, o, s, y = i.hasData(n) && i._data(n);
            if (y && (v = y.events)) {
                for (t = i.trim(br(t || "")).split(" "),
                l = 0; l < t.length; l++) {
                    if (p = pr.exec(t[l]) || [],
                    e = w = p[1],
                    h = p[2],
                    !e) {
                        for (e in v)
                            i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType : c.bindType) || e,
                    o = v[e] || [],
                    b = o.length,
                    h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    a = 0; a < o.length; a++)
                        s = o[a],
                        (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1),
                        s.selector && o.delegateCount--,
                        c.remove && c.remove.call(n, s));
                    o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h, y.handle) === !1) && i.removeEvent(n, e, y.handle),
                    delete v[e])
                }
                i.isEmptyObject(v) && (delete y.handle,
                i.removeData(n, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(u, f, e, o) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var w, d, c, h, l, v, a, y, p, k, s = u.type || u, b = [];
                if (wr.test(s + i.event.triggered))
                    return;
                if (s.indexOf("!") >= 0 && (s = s.slice(0, -1),
                d = !0),
                s.indexOf(".") >= 0 && (b = s.split("."),
                s = b.shift(),
                b.sort()),
                (!e || i.event.customEvent[s]) && !i.event.global[s])
                    return;
                if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s,u) : new i.Event(s),
                u.type = s,
                u.isTrigger = !0,
                u.exclusive = d,
                u.namespace = b.join("."),
                u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                v = s.indexOf(":") < 0 ? "on" + s : "",
                !e) {
                    w = i.cache;
                    for (c in w)
                        w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
                    return
                }
                if (u.result = t,
                u.target || (u.target = e),
                f = f != null ? i.makeArray(f) : [],
                f.unshift(u),
                a = i.event.special[s] || {},
                a.trigger && a.trigger.apply(e, f) === !1)
                    return;
                if (p = [[e, a.bindType || s]],
                !o && !a.noBubble && !i.isWindow(e)) {
                    for (k = a.delegateType || s,
                    h = wr.test(k + s) ? e : e.parentNode,
                    l = e; h; h = h.parentNode)
                        p.push([h, k]),
                        l = h;
                    l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k])
                }
                for (c = 0; c < p.length && !u.isPropagationStopped(); c++)
                    h = p[c][0],
                    u.type = p[c][1],
                    y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"),
                    y && y.apply(h, f),
                    y = v && h[v],
                    y && i.acceptData(h) && y.apply(h, f) === !1 && u.preventDefault();
                return u.type = s,
                !o && !u.isDefaultPrevented() && (!a._default || a._default.apply(e.ownerDocument, f) === !1) && (s !== "click" || !i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (l = e[v],
                l && (e[v] = null),
                i.event.triggered = s,
                e[s](),
                i.event.triggered = t,
                l && (e[v] = l)),
                u.result
            }
            return
        },
        dispatch: function(r) {
            r = i.event.fix(r || n.event);
            var f, h, e, c, l, a, o, v, u, s, y = (i._data(this, "events") || {})[r.type] || [], p = y.delegateCount, k = [].slice.call(arguments), d = !r.exclusive && !r.namespace, w = i.event.special[r.type] || {}, b = [];
            if (k[0] = r,
            r.delegateTarget = this,
            !w.preDispatch || w.preDispatch.call(this, r) !== !1) {
                if (p && (!r.button || r.type !== "click"))
                    for (c = i(this),
                    c.context = this,
                    e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0 || r.type !== "click") {
                            for (a = {},
                            v = [],
                            c[0] = e,
                            f = 0; f < p; f++)
                                u = y[f],
                                s = u.selector,
                                a[s] === t && (a[s] = c.is(s)),
                                a[s] && v.push(u);
                            v.length && b.push({
                                elem: e,
                                matches: v
                            })
                        }
                for (y.length > p && b.push({
                    elem: this,
                    matches: y.slice(p)
                }),
                f = 0; f < b.length && !r.isPropagationStopped(); f++)
                    for (o = b[f],
                    r.currentTarget = o.elem,
                    h = 0; h < o.matches.length && !r.isImmediatePropagationStopped(); h++)
                        u = o.matches[h],
                        (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data,
                        r.handleObj = u,
                        l = ((i.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, k),
                        l !== t && (r.result = l,
                        l === !1 && (r.preventDefault(),
                        r.stopPropagation())));
                return w.postDispatch && w.postDispatch.call(this, r),
                r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var o, u, f, e = i.button, s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r,
                u = o.documentElement,
                f = o.body,
                n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0),
                n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                n
            }
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var f, e, t = n, u = i.event.fixHooks[n.type] || {}, o = u.props ? this.props.concat(u.props) : this.props;
            for (n = i.Event(t),
            f = o.length; f; )
                e = o[--f],
                n[e] = t[e];
            return n.target || (n.target = t.srcElement || r),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            u.filter ? u.filter(n, t) : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function(n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, t) {
        if (this instanceof i.Event)
            n && n.type ? (this.originalEvent = n,
            this.type = n.type,
            this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? d : v) : this.type = n,
            t && i.extend(this, t),
            this.timeStamp = n && n.timeStamp || i.now(),
            this[i.expando] = !0;
        else
            return new i.Event(n,t)
    }
    ;
    i.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = d;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = d;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = d;
            this.stopPropagation()
        },
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var f, e = this, r = n.relatedTarget, u = n.handleObj, o = u.selector;
                return r && (r === e || i.contains(e, r)) || (n.type = u.origType,
                f = u.handler.apply(this, arguments),
                n.type = t),
                f
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                  , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                i._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.remove(this, "._submit")
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (wt.test(this.nodeName))
                return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1);
                    i.event.simulate("change", this, n, !0)
                })),
                !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                wt.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                i._data(t, "_change_attached", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            wt.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0
          , f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function() {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r,
                r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r,
            u = r = t) : f == null && (typeof r == "string" ? (f = u,
            u = t) : (f = u,
            u = r,
            r = t)),
            f === !1)
                f = v;
            else if (!f)
                return this;
            return e === 1 && (o = f,
            f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            }
            ,
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                this;
            if (typeof n == "object") {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r,
            r = t),
            u === !1 && (u = v),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        live: function(n, t, r) {
            return i(this.context).on(n, this.selector, t, r),
            this
        },
        die: function(n, t) {
            return i(this.context).off(n, this.selector || "**", t),
            this
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            if (this[0])
                return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function(n) {
            var t = arguments
              , u = n.guid || i.guid++
              , r = 0
              , f = function(u) {
                var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                return i._data(this, "lastToggle" + n.guid, f + 1),
                u.preventDefault(),
                t[f].apply(this, arguments) || !1
            };
            for (f.guid = u; r < t.length; )
                t[r++].guid = u;
            return this.click(f)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return i == null && (i = n,
            n = null),
            arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
        ;
        te.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
        ie.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
    function(n, t) {
        function yt(n, t, i, u) {
            for (var f = 0, e = t.length; f < e; f++)
                r(n, t[f], i, u)
        }
        function fi(n, t, i, f, e, o) {
            var s, h = u.setFilters[t.toLowerCase()];
            return h || r.error(t),
            (n || !(s = e)) && yt(n || "*", f, s = [], e),
            s.length > 0 ? h(s, i, o) : []
        }
        function ei(n, i, u, e, o) {
            for (var c, d, a, v, h, w, s, b, k = 0, nt = o.length, p = l.POS, tt = new RegExp("^" + p.source + "(?!" + f + ")","i"), it = function() {
                for (var n = 1, i = arguments.length - 2; n < i; n++)
                    arguments[n] === t && (c[n] = t)
            }; k < nt; k++) {
                for (p.exec(""),
                n = o[k],
                v = [],
                a = 0,
                h = e; c = p.exec(n); )
                    b = p.lastIndex = c.index + c[0].length,
                    b > a && (s = n.slice(a, c.index),
                    a = b,
                    w = [i],
                    g.test(s) && (h && (w = h),
                    h = e),
                    (d = pi.test(s)) && (s = s.slice(0, -5).replace(g, "$&*")),
                    c.length > 1 && c[0].replace(tt, it),
                    h = fi(s, c[1], c[2], w, h, d));
                h ? (v = v.concat(h),
                (s = n.slice(a)) && s !== ")" ? g.test(s) ? yt(s, v, u, e) : r(s, i, u, e ? e.concat(h) : h) : y.apply(u, v)) : r(n, i, u, e)
            }
            return nt === 1 ? u : r.uniqueSort(u)
        }
        function oi(n, t, i) {
            for (var c, e, h, a = [], v = 0, f = ii.exec(n), o = !f.pop() && !f.pop(), p = o && n.match(ft) || [""], y = u.preFilter, w = u.filter, b = !i && t !== s; (e = p[v]) != null && o; v++)
                for (a.push(c = []),
                b && (e = " " + e); e; ) {
                    o = !1;
                    (f = g.exec(e)) && (e = e.slice(f[0].length),
                    o = c.push({
                        part: f.pop().replace(ut, " "),
                        captures: f
                    }));
                    for (h in w)
                        (f = l[h].exec(e)) && (!y[h] || (f = y[h](f, t, i))) && (e = e.slice(f.shift().length),
                        o = c.push({
                            part: h,
                            captures: f
                        }));
                    if (!o)
                        break
                }
            return o || r.error(n),
            a
        }
        function si(n, t, i) {
            var r = t.dir
              , u = kt++;
            return n || (n = function(n) {
                return n === i
            }
            ),
            t.first ? function(t, i) {
                while (t = t[r])
                    if (t.nodeType === 1)
                        return n(t, i) && t
            }
            : function(t, i) {
                for (var f, e = u + "." + wt, s = e + "." + pt; t = t[r]; )
                    if (t.nodeType === 1) {
                        if ((f = t[o]) === s)
                            return t.sizset;
                        if (typeof f == "string" && f.indexOf(e) === 0) {
                            if (t.sizset)
                                return t
                        } else {
                            if (t[o] = s,
                            n(t, i))
                                return t.sizset = !0,
                                t;
                            t.sizset = !1
                        }
                    }
            }
        }
        function hi(n, t) {
            return n ? function(i, r) {
                var u = t(i, r);
                return u && n(u === !0 ? i : u, r)
            }
            : t
        }
        function ci(n, t, i) {
            for (var r, f, e = 0; r = n[e]; e++)
                u.relative[r.part] ? f = si(f, u.relative[r.part], t) : (r.captures.push(t, i),
                f = hi(f, u.filter[r.part].apply(null, r.captures)));
            return f
        }
        function li(n) {
            return function(t, i) {
                for (var r, u = 0; r = n[u]; u++)
                    if (r(t, i))
                        return !0;
                return !1
            }
        }
        var pt, wt, k, w, it, s = n.document, e = s.documentElement, h = "undefined", d = !1, bt = !0, kt = 0, c = [].slice, y = [].push, o = ("sizcache" + Math.random()).replace(".", ""), f = "[\\x20\\t\\r\\n\\f]", v = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", ai = v.replace("w", "w#"), dt = "\\[" + f + "*(" + v + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + f + "*\\]", gt = ":(" + v + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)", ni = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)", ti = f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*", rt = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + dt + "|" + gt.replace(2, 7) + "|[^\\\\(),])+", ut = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$","g"), g = new RegExp("^" + ti), ft = new RegExp(rt + "?(?=" + f + "*,|$)","g"), ii = new RegExp("^(?:(?!,)(?:(?:^|,)" + f + "*" + rt + ")*?|" + f + "*(.*?))(\\)|$)"), vi = new RegExp(rt.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + ti,"g"), yi = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, et = /[\x20\t\r\n\f]*[+~]/, pi = /:not\($/, wi = /h\d/i, bi = /input|select|textarea|button/i, p = /\\(?!\\)/g, l = {
            ID: new RegExp("^#(" + v + ")"),
            CLASS: new RegExp("^\\.(" + v + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + v + ")['\"]?\\]"),
            TAG: new RegExp("^(" + v.replace("[-", "[-\\*") + ")"),
            ATTR: new RegExp("^" + dt),
            PSEUDO: new RegExp("^" + gt),
            CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)","i"),
            POS: new RegExp(ni,"ig"),
            needsContext: new RegExp("^" + f + "*[>+~]|" + ni,"i")
        }, ot = {}, st = [], ht = {}, ct = [], nt = function(n) {
            return n.sizzleFilter = !0,
            n
        }, b = function(n) {
            return function(t) {
                return t.nodeName.toLowerCase() === "input" && t.type === n
            }
        }, ri = function(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }, a = function(n) {
            var t = !1
              , i = s.createElement("div");
            try {
                t = n(i)
            } catch (r) {}
            return i = null,
            t
        }, ki = a(function(n) {
            n.innerHTML = "<select><\/select>";
            var t = typeof n.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), di = a(function(n) {
            n.id = o + 0;
            n.innerHTML = "<a name='" + o + "'><\/a><div name='" + o + "'><\/div>";
            e.insertBefore(n, e.firstChild);
            var t = s.getElementsByName && s.getElementsByName(o).length === 2 + s.getElementsByName(o + 0).length;
            return it = !s.getElementById(o),
            e.removeChild(n),
            t
        }), gi = a(function(n) {
            return n.appendChild(s.createComment("")),
            n.getElementsByTagName("*").length === 0
        }), nr = a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            n.firstChild && typeof n.firstChild.getAttribute !== h && n.firstChild.getAttribute("href") === "#"
        }), ui = a(function(n) {
            return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>",
            !n.getElementsByClassName || n.getElementsByClassName("e").length === 0 ? !1 : (n.lastChild.className = "e",
            n.getElementsByClassName("e").length !== 1)
        }), r = function(n, t, i, r) {
            i = i || [];
            t = t || s;
            var e, u, o, f, h = t.nodeType;
            if (h !== 1 && h !== 9)
                return [];
            if (!n || typeof n != "string")
                return i;
            if (o = lt(t),
            !o && !r && (e = yi.exec(n)))
                if (f = e[1]) {
                    if (h === 9) {
                        if (u = t.getElementById(f),
                        !u || !u.parentNode)
                            return i;
                        if (u.id === f)
                            return i.push(u),
                            i
                    } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && tr(t, u) && u.id === f)
                        return i.push(u),
                        i
                } else {
                    if (e[2])
                        return y.apply(i, c.call(t.getElementsByTagName(n), 0)),
                        i;
                    if ((f = e[3]) && ui && t.getElementsByClassName)
                        return y.apply(i, c.call(t.getElementsByClassName(f), 0)),
                        i
                }
            return tt(n, t, i, r, o)
        }, u = r.selectors = {
            cacheLength: 50,
            match: l,
            order: ["ID", "TAG"],
            attrHandle: {},
            createPseudo: nt,
            find: {
                ID: it ? function(n, t, i) {
                    if (typeof t.getElementById !== h && !i) {
                        var r = t.getElementById(n);
                        return r && r.parentNode ? [r] : []
                    }
                }
                : function(n, i, r) {
                    if (typeof i.getElementById !== h && !r) {
                        var u = i.getElementById(n);
                        return u ? u.id === n || typeof u.getAttributeNode !== h && u.getAttributeNode("id").value === n ? [u] : t : []
                    }
                }
                ,
                TAG: gi ? function(n, t) {
                    if (typeof t.getElementsByTagName !== h)
                        return t.getElementsByTagName(n)
                }
                : function(n, t) {
                    var f = t.getElementsByTagName(n), i, r, u;
                    if (n === "*") {
                        for (r = [],
                        u = 0; i = f[u]; u++)
                            i.nodeType === 1 && r.push(i);
                        return r
                    }
                    return f
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(p, ""),
                    n[3] = (n[4] || n[5] || "").replace(p, ""),
                    n[2] === "~=" && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    n[1] === "nth" ? (n[2] || r.error(n[0]),
                    n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")),
                    n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = n[4];
                    return l.CHILD.test(n[0]) ? null : (t && (i = ii.exec(t)) && i.pop() && (n[0] = n[0].slice(0, i[0].length - t.length - 1),
                    t = i[0].slice(0, -1)),
                    n.splice(2, 3, t || n[3]),
                    n)
                }
            },
            filter: {
                ID: it ? function(n) {
                    return n = n.replace(p, ""),
                    function(t) {
                        return t.getAttribute("id") === n
                    }
                }
                : function(n) {
                    return n = n.replace(p, ""),
                    function(t) {
                        var i = typeof t.getAttributeNode !== h && t.getAttributeNode("id");
                        return i && i.value === n
                    }
                }
                ,
                TAG: function(n) {
                    return n === "*" ? function() {
                        return !0
                    }
                    : (n = n.replace(p, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === n
                    }
                    )
                },
                CLASS: function(n) {
                    var t = ot[n];
                    return t || (t = ot[n] = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)"),
                    st.push(n),
                    st.length > u.cacheLength && delete ot[st.shift()]),
                    function(n) {
                        return t.test(n.className || typeof n.getAttribute !== h && n.getAttribute("class") || "")
                    }
                },
                ATTR: function(n, t, i) {
                    return t ? function(u) {
                        var e = r.attr(u, n)
                          , f = e + "";
                        if (e == null)
                            return t === "!=";
                        switch (t) {
                        case "=":
                            return f === i;
                        case "!=":
                            return f !== i;
                        case "^=":
                            return i && f.indexOf(i) === 0;
                        case "*=":
                            return i && f.indexOf(i) > -1;
                        case "$=":
                            return i && f.substr(f.length - i.length) === i;
                        case "~=":
                            return (" " + f + " ").indexOf(i) > -1;
                        case "|=":
                            return f === i || f.substr(0, i.length + 1) === i + "-"
                        }
                    }
                    : function(t) {
                        return r.attr(t, n) != null
                    }
                },
                CHILD: function(n, t, i, r) {
                    if (n === "nth") {
                        var u = kt++;
                        return function(n) {
                            var f, e, s = 0, t = n;
                            if (i === 1 && r === 0)
                                return !0;
                            if (f = n.parentNode,
                            f && (f[o] !== u || !n.sizset)) {
                                for (t = f.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1 && (t.sizset = ++s,
                                    t === n))
                                        break;
                                f[o] = u
                            }
                            return e = n.sizset - r,
                            i === 0 ? e === 0 : e % i == 0 && e / i >= 0
                        }
                    }
                    return function(t) {
                        var i = t;
                        switch (n) {
                        case "only":
                        case "first":
                            while (i = i.previousSibling)
                                if (i.nodeType === 1)
                                    return !1;
                            if (n === "first")
                                return !0;
                            i = t;
                        case "last":
                            while (i = i.nextSibling)
                                if (i.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(n, t, i, f) {
                    var e = u.pseudos[n] || u.pseudos[n.toLowerCase()];
                    return e || r.error("unsupported pseudo: " + n),
                    e.sizzleFilter ? e(t, i, f) : e
                }
            },
            pseudos: {
                not: nt(function(n, t, i) {
                    var r = vt(n.replace(ut, "$1"), t, i);
                    return function(n) {
                        return !r(n)
                    }
                }),
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                parent: function(n) {
                    return !u.pseudos.empty(n)
                },
                empty: function(n) {
                    var t;
                    for (n = n.firstChild; n; ) {
                        if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4)
                            return !1;
                        n = n.nextSibling
                    }
                    return !0
                },
                contains: nt(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || at(t)).indexOf(n) > -1
                    }
                }),
                has: nt(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                header: function(n) {
                    return wi.test(n.nodeName)
                },
                text: function(n) {
                    var t, i;
                    return n.nodeName.toLowerCase() === "input" && (t = n.type) === "text" && ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
                },
                radio: b("radio"),
                checkbox: b("checkbox"),
                file: b("file"),
                password: b("password"),
                image: b("image"),
                submit: ri("submit"),
                reset: ri("reset"),
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                input: function(n) {
                    return bi.test(n.nodeName)
                },
                focus: function(n) {
                    var t = n.ownerDocument;
                    return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!n.type || !!n.href)
                },
                active: function(n) {
                    return n === n.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(n, t, i) {
                    return i ? n.slice(1) : [n[0]]
                },
                last: function(n, t, i) {
                    var r = n.pop();
                    return i ? n : [r]
                },
                even: function(n, t, i) {
                    for (var u = [], r = i ? 1 : 0, f = n.length; r < f; r = r + 2)
                        u.push(n[r]);
                    return u
                },
                odd: function(n, t, i) {
                    for (var u = [], r = i ? 0 : 1, f = n.length; r < f; r = r + 2)
                        u.push(n[r]);
                    return u
                },
                lt: function(n, t, i) {
                    return i ? n.slice(+t) : n.slice(0, +t)
                },
                gt: function(n, t, i) {
                    return i ? n.slice(0, +t + 1) : n.slice(+t + 1)
                },
                eq: function(n, t, i) {
                    var r = n.splice(+t, 1);
                    return i ? n : r
                }
            }
        }, vt, tt;
        u.setFilters.nth = u.setFilters.eq;
        u.filters = u.pseudos;
        nr || (u.attrHandle = {
            href: function(n) {
                return n.getAttribute("href", 2)
            },
            type: function(n) {
                return n.getAttribute("type")
            }
        });
        di && (u.order.push("NAME"),
        u.find.NAME = function(n, t) {
            if (typeof t.getElementsByName !== h)
                return t.getElementsByName(n)
        }
        );
        ui && (u.order.splice(1, 0, "CLASS"),
        u.find.CLASS = function(n, t, i) {
            if (typeof t.getElementsByClassName !== h && !i)
                return t.getElementsByClassName(n)
        }
        );
        try {
            c.call(e.childNodes, 0)[0].nodeType
        } catch (ir) {
            c = function(n) {
                for (var t, i = []; t = this[n]; n++)
                    i.push(t);
                return i
            }
        }
        var lt = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
          , tr = r.contains = e.compareDocumentPosition ? function(n, t) {
            return !!(n.compareDocumentPosition(t) & 16)
        }
        : e.contains ? function(n, t) {
            var r = n.nodeType === 9 ? n.documentElement : n
              , i = t.parentNode;
            return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
        }
        : function(n, t) {
            while (t = t.parentNode)
                if (t === n)
                    return !0;
            return !1
        }
          , at = r.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string")
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += at(n)
                } else if (t === 3 || t === 4)
                    return n.nodeValue
            } else
                for (; r = n[u]; u++)
                    i += at(r);
            return i
        }
        ;
        r.attr = function(n, t) {
            var i, r = lt(n);
            return r || (t = t.toLowerCase()),
            u.attrHandle[t] ? u.attrHandle[t](n) : ki || r ? n.getAttribute(t) : (i = n.getAttributeNode(t),
            i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
        }
        ;
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        [0, 0].sort(function() {
            return bt = 0
        });
        e.compareDocumentPosition ? k = function(n, t) {
            return n === t ? (d = !0,
            0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
        }
        : (k = function(n, t) {
            var i;
            if (n === t)
                return d = !0,
                0;
            if (n.sourceIndex && t.sourceIndex)
                return n.sourceIndex - t.sourceIndex;
            var e, h, u = [], f = [], o = n.parentNode, s = t.parentNode, r = o;
            if (o === s)
                return w(n, t);
            if (!o)
                return -1;
            if (!s)
                return 1;
            while (r)
                u.unshift(r),
                r = r.parentNode;
            for (r = s; r; )
                f.unshift(r),
                r = r.parentNode;
            for (e = u.length,
            h = f.length,
            i = 0; i < e && i < h; i++)
                if (u[i] !== f[i])
                    return w(u[i], f[i]);
            return i === e ? w(n, f[i], -1) : w(u[i], t, 1)
        }
        ,
        w = function(n, t, i) {
            if (n === t)
                return i;
            for (var r = n.nextSibling; r; ) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        );
        r.uniqueSort = function(n) {
            var i, t = 1;
            if (k && (d = bt,
            n.sort(k),
            d))
                for (; i = n[t]; t++)
                    i === n[t - 1] && n.splice(t--, 1);
            return n
        }
        ;
        vt = r.compile = function(n, t, i) {
            var o, f, e, r = ht[n];
            if (r && r.context === t)
                return r;
            for (f = oi(n, t, i),
            e = 0; o = f[e]; e++)
                f[e] = ci(o, t, i);
            return r = ht[n] = li(f),
            r.context = t,
            r.runs = r.dirruns = 0,
            ct.push(n),
            ct.length > u.cacheLength && delete ht[ct.shift()],
            r
        }
        ;
        r.matches = function(n, t) {
            return r(n, null, null, t)
        }
        ;
        r.matchesSelector = function(n, t) {
            return r(t, null, null, [n]).length > 0
        }
        ;
        tt = function(n, t, i, r, f) {
            n = n.replace(ut, "$1");
            var o, a, s, d, k, v, w, g, b, e = n.match(ft), h = n.match(vi), nt = t.nodeType;
            if (l.POS.test(n))
                return ei(n, t, i, r, e);
            if (r)
                o = c.call(r, 0);
            else if (e && e.length === 1) {
                if (h.length > 1 && nt === 9 && !f && (e = l.ID.exec(h[0]))) {
                    if (t = u.find.ID(e[1], t, f)[0],
                    !t)
                        return i;
                    n = n.slice(h.shift().length)
                }
                for (g = (e = et.exec(h[0])) && !e.index && t.parentNode || t,
                b = h.pop(),
                v = b.split(":not")[0],
                s = 0,
                d = u.order.length; s < d; s++)
                    if (w = u.order[s],
                    e = l[w].exec(v)) {
                        if (o = u.find[w]((e[1] || "").replace(p, ""), g, f),
                        o == null)
                            continue;
                        v === b && (n = n.slice(0, n.length - b.length) + v.replace(l[w], ""),
                        n || y.apply(i, c.call(o, 0)));
                        break
                    }
            }
            if (n)
                for (a = vt(n, t, f),
                wt = a.dirruns++,
                o == null && (o = u.find.TAG("*", et.test(n) && t.parentNode || t)),
                s = 0; k = o[s]; s++)
                    pt = a.runs++,
                    a(k, t) && i.push(k);
            return i
        }
        ;
        s.querySelectorAll && function() {
            var s, h = tt, l = /'|\\/g, v = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, n = [], t = [":active"], i = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || e.msMatchesSelector;
            a(function(t) {
                t.innerHTML = "<select><option selected><\/option><\/select>";
                t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                t.querySelectorAll(":checked").length || n.push(":checked")
            });
            a(function(t) {
                t.innerHTML = "<p test=''><\/p>";
                t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')");
                t.innerHTML = "<input type='hidden'>";
                t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
            });
            n = n.length && new RegExp(n.join("|"));
            tt = function(t, i, r, u, f) {
                if (!u && !f && (!n || !n.test(t)))
                    if (i.nodeType === 9)
                        try {
                            return y.apply(r, c.call(i.querySelectorAll(t), 0)),
                            r
                        } catch (v) {}
                    else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                        var s = i.getAttribute("id")
                          , e = s || o
                          , a = et.test(t) && i.parentNode || i;
                        s ? e = e.replace(l, "\\$&") : i.setAttribute("id", e);
                        try {
                            return y.apply(r, c.call(a.querySelectorAll(t.replace(ft, "[id='" + e + "'] $&")), 0)),
                            r
                        } catch (v) {} finally {
                            s || i.removeAttribute("id")
                        }
                    }
                return h(t, i, r, u, f)
            }
            ;
            i && (a(function(n) {
                s = i.call(n, "div");
                try {
                    i.call(n, "[test!='']:sizzle");
                    t.push(u.match.PSEUDO)
                } catch (r) {}
            }),
            t = new RegExp(t.join("|")),
            r.matchesSelector = function(u, f) {
                if (f = f.replace(v, "='$1']"),
                !lt(u) && !t.test(f) && (!n || !n.test(f)))
                    try {
                        var e = i.call(u, f);
                        if (e || s || u.document && u.document.nodeType !== 11)
                            return e
                    } catch (o) {}
                return r(f, null, null, [u]).length > 0
            }
            )
        }();
        r.attr = i.attr;
        i.find = r;
        i.expr = r.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = r.uniqueSort;
        i.text = r.getText;
        i.isXMLDoc = r.isXML;
        i.contains = r.contains
    }(n);
    var re = /Until$/
      , ue = /^(?:parents|prev(?:Until|All))/
      , fe = /^.[^:#\[\.,]*$/
      , kr = i.expr.match.needsContext
      , ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, f, o, u, e, r, s = this;
            if (typeof n != "string")
                return i(n).filter(function() {
                    for (t = 0,
                    f = s.length; t < f; t++)
                        if (i.contains(s[t], this))
                            return !0
                });
            for (r = this.pushStack("", "find", n),
            t = 0,
            f = this.length; t < f; t++)
                if (o = r.length,
                i.find(n, this[t], r),
                t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            }
            return r
        },
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        not: function(n) {
            return this.pushStack(fi(this, n, !1), "not", n)
        },
        filter: function(n) {
            return this.pushStack(fi(this, n, !0), "filter", n)
        },
        is: function(n) {
            return !!n && (typeof n == "string" ? kr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = kr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11; ) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return u = u.length > 1 ? i.unique(u) : u,
            this.pushStack(u, "closest", n)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
              , r = i.merge(this.get(), u);
            return this.pushStack(b(u[0]) || b(r[0]) ? r : i.unique(r))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.fn.andSelf = i.fn.addBack;
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return ui(n, "nextSibling")
        },
        prev: function(n) {
            return ui(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return re.test(n) || (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            f = this.length > 1 && !ee[n] ? i.unique(f) : f,
            this.length > 1 && ue.test(n) && (f = f.reverse()),
            this.pushStack(f, n, o.call(arguments).join(","))
        }
    });
    i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"),
            t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); )
                f.nodeType === 1 && e.push(f),
                f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var dr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , oe = / jQuery\d+="(?:null|\d+)"/g
      , bt = /^\s+/
      , gr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , nu = /<([\w:]+)/
      , se = /<tbody/i
      , he = /<|&#?\w+;/
      , ce = /<(?:script|style|link)/i
      , le = /<(?:script|object|embed|option|style)/i
      , kt = new RegExp("<(?:" + dr + ")[\\s/>]","i")
      , tu = /^(?:checkbox|radio)$/
      , iu = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ae = /\/(java|ecma)script/i
      , ve = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , e = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        area: [1, "<map>", "<\/map>"],
        _default: [0, "", ""]
    }
      , ru = ei(r)
      , dt = ru.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.support.htmlSerialize || (e._default = [1, "X<div>", "<\/div>"]);
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
            })
        },
        before: function() {
            if (!b(this[0]))
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this)
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(n, this), "before", this.selector)
            }
        },
        after: function() {
            if (!b(this[0]))
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(this, n), "after", this.selector)
            }
        },
        remove: function(n, t) {
            for (var r, u = 0; (r = this[u]) != null; u++)
                (!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")),
                i.cleanData([r])),
                r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild; )
                    n.removeChild(n.firstChild);
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}
                  , u = 0
                  , f = this.length;
                if (n === t)
                    return r.nodeType === 1 ? r.innerHTML.replace(oe, "") : t;
                if (typeof n == "string" && !ce.test(n) && (i.support.htmlSerialize || !kt.test(n)) && (i.support.leadingWhitespace || !bt.test(n)) && !e[(nu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(gr, "<$1><\/$2>");
                    try {
                        for (; u < f; u++)
                            r = this[u] || {},
                            r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")),
                            r.innerHTML = n);
                        r = 0
                    } catch (o) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function(n) {
            return b(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function(t) {
                var r = i(this)
                  , u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , r = this.parentNode;
                i(this).remove();
                t ? i(t).before(n) : i(r).append(n)
            }))
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, r, u) {
            n = [].concat.apply([], n);
            var h, o, f, a, e = 0, s = n[0], c = [], l = this.length;
            if (!i.support.checkClone && l > 1 && typeof s == "string" && iu.test(s))
                return this.each(function() {
                    i(this).domManip(n, r, u)
                });
            if (i.isFunction(s))
                return this.each(function(f) {
                    var e = i(this);
                    n[0] = s.call(this, f, r ? e.html() : t);
                    e.domManip(n, r, u)
                });
            if (this[0]) {
                if (h = i.buildFragment(n, this, c),
                f = h.fragment,
                o = f.firstChild,
                f.childNodes.length === 1 && (f = o),
                o)
                    for (r = r && i.nodeName(o, "tr"),
                    a = h.cacheable || l - 1; e < l; e++)
                        u.call(r && i.nodeName(this[e], "table") ? wu(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
                f = o = null;
                c.length && i.each(c, function(n, t) {
                    t.src ? i.ajax ? i.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ve, ""));
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    });
    i.buildFragment = function(n, u, f) {
        var o, s, h, e = n[0];
        return u = u || r,
        u = (u[0] || u).ownerDocument || u[0] || u,
        typeof u.createDocumentFragment == "undefined" && (u = r),
        n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !le.test(e) && (i.support.checkClone || !iu.test(e)) && (i.support.html5Clone || !kt.test(e)) && (s = !0,
        o = i.fragments[e],
        h = o !== t),
        o || (o = u.createDocumentFragment(),
        i.clean(n, u, o, f),
        s && (i.fragments[e] = h && o)),
        {
            fragment: o,
            cacheable: s
        }
    }
    ;
    i.fragments = {};
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(r) {
            var o, u = 0, s = [], f = i(r), h = f.length, e = this.length === 1 && this[0].parentNode;
            if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && h === 1)
                return f[t](this[0]),
                this;
            for (; u < h; u++)
                o = (u > 0 ? this.clone(!0) : this).get(),
                i(f[u])[t](o),
                s = s.concat(o);
            return this.pushStack(s, n, f.selector)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var f, o, u, e;
            if (i.support.html5Clone || i.isXMLDoc(n) || !kt.test("<" + n.nodeName + ">") ? e = n.cloneNode(!0) : (dt.innerHTML = n.outerHTML,
            dt.removeChild(e = dt.firstChild)),
            (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (si(n, e),
                f = g(n),
                o = g(e),
                u = 0; f[u]; ++u)
                    o[u] && si(f[u], o[u]);
            if (t && (oi(n, e),
            r))
                for (f = g(n),
                o = g(e),
                u = 0; f[u]; ++u)
                    oi(f[u], o[u]);
            return f = o = null,
            e
        },
        clean: function(n, t, u, f) {
            var l, a, o, p, y, d, s, w, v, b, k, h = 0, c = [];
            for (t && typeof t.createDocumentFragment != "undefined" || (t = r),
            a = t === r && ru; (o = n[h]) != null; h++)
                if (typeof o == "number" && (o += ""),
                o) {
                    if (typeof o == "string")
                        if (he.test(o)) {
                            for (a = a || ei(t),
                            s = s || a.appendChild(t.createElement("div")),
                            o = o.replace(gr, "<$1><\/$2>"),
                            p = (nu.exec(o) || ["", ""])[1].toLowerCase(),
                            y = e[p] || e._default,
                            d = y[0],
                            s.innerHTML = y[1] + o + y[2]; d--; )
                                s = s.lastChild;
                            if (!i.support.tbody)
                                for (w = se.test(o),
                                v = p === "table" && !w ? s.firstChild && s.firstChild.childNodes : y[1] === "<table>" && !w ? s.childNodes : [],
                                l = v.length - 1; l >= 0; --l)
                                    i.nodeName(v[l], "tbody") && !v[l].childNodes.length && v[l].parentNode.removeChild(v[l]);
                            !i.support.leadingWhitespace && bt.test(o) && s.insertBefore(t.createTextNode(bt.exec(o)[0]), s.firstChild);
                            o = s.childNodes;
                            s = a.lastChild
                        } else
                            o = t.createTextNode(o);
                    o.nodeType ? c.push(o) : c = i.merge(c, o)
                }
            if (s && (a.removeChild(s),
            o = s = a = null),
            !i.support.appendChecked)
                for (h = 0; (o = c[h]) != null; h++)
                    i.nodeName(o, "input") ? hi(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), hi);
            if (u)
                for (b = function(n) {
                    if (!n.type || ae.test(n.type))
                        return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                }
                ,
                h = 0; (o = c[h]) != null; h++)
                    i.nodeName(o, "script") && b(o) || (u.appendChild(o),
                    typeof o.getElementsByTagName != "undefined" && (k = i.grep(i.merge([], o.getElementsByTagName("script")), b),
                    c.splice.apply(c, [h + 1, 0].concat(k)),
                    h += k.length));
            return c
        },
        cleanData: function(n, t) {
            for (var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special; (r = n[h]) != null; h++)
                if ((t || i.acceptData(r)) && (u = r[o],
                f = u && s[u],
                f)) {
                    if (f.events)
                        for (e in f.events)
                            l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                    s[u] && (delete s[u],
                    c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null,
                    i.deletedIds.push(u))
                }
        }
    }),
    function() {
        var t, n;
        i.uaMatch = function(n) {
            n = n.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ;
        t = i.uaMatch(uf.userAgent);
        n = {};
        t.browser && (n[t.browser] = !0,
        n.version = t.version);
        n.webkit && (n.safari = !0);
        i.browser = n;
        i.sub = function() {
            function n(t, i) {
                return new n.fn.init(t,i)
            }
            i.extend(!0, n, this);
            n.superclass = this;
            n.fn = n.prototype = this();
            n.fn.constructor = n;
            n.sub = this.sub;
            n.fn.init = function(r, u) {
                return u && u instanceof i && !(u instanceof n) && (u = n(u)),
                i.fn.init.call(this, r, u, t)
            }
            ;
            n.fn.init.prototype = n.fn;
            var t = n(r);
            return n
        }
    }();
    var u, y, p, gt = /alpha\([^)]*\)/i, ye = /opacity=([^)]*)/, pe = /^(top|right|bottom|left)$/, uu = /^margin/, we = new RegExp("^(" + ut + ")(.*)$","i"), et = new RegExp("^(" + ut + ")(?!px)[a-z%]+$","i"), be = new RegExp("^([-+])=(" + ut + ")","i"), ni = {}, ke = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, fu = {
        letterSpacing: 0,
        fontWeight: 400,
        lineHeight: 1
    }, c = ["Top", "Right", "Bottom", "Left"], eu = ["Webkit", "O", "Moz", "ms"], de = i.fn.toggle;
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return li(this, !0)
        },
        hide: function() {
            return li(this)
        },
        toggle: function(n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? de.apply(this, arguments) : this.each(function() {
                (r ? n : nt(this)) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r), c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = ci(c, h)),
                e = i.cssHooks[r] || i.cssHooks[h],
                u === t)
                    return e && "get"in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if ((s = typeof u,
                s === "string" && (o = be.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)),
                s = "number"),
                u != null && (s !== "number" || !isNaN(u))) && (s !== "number" || i.cssNumber[h] || (u += "px"),
                !e || !("set"in e) || (u = e.set(n, u, f)) !== t))
                    try {
                        c[r] = u
                    } catch (l) {}
            }
        },
        css: function(n, r, f, e) {
            var o, c, s, h = i.camelCase(r);
            return r = i.cssProps[h] || (i.cssProps[h] = ci(n.style, h)),
            s = i.cssHooks[r] || i.cssHooks[h],
            s && "get"in s && (o = s.get(n, !0, e)),
            o === t && (o = u(n, r)),
            o === "normal" && r in fu && (o = fu[r]),
            f || e !== t ? (c = parseFloat(o),
            f || i.isNumeric(c) ? c || 0 : o) : o
        },
        swap: function(n, t, i) {
            var u, r, f = {};
            for (r in t)
                f[r] = n.style[r],
                n.style[r] = t[r];
            u = i.call(n);
            for (r in t)
                n.style[r] = f[r];
            return u
        }
    });
    n.getComputedStyle ? u = function(n, t) {
        var u, e, o, s, f = getComputedStyle(n, null), r = n.style;
        return f && (u = f[t],
        u === "" && !i.contains(n.ownerDocument.documentElement, n) && (u = i.style(n, t)),
        et.test(u) && uu.test(t) && (e = r.width,
        o = r.minWidth,
        s = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = u,
        u = f.width,
        r.width = e,
        r.minWidth = o,
        r.maxWidth = s)),
        u
    }
    : r.documentElement.currentStyle && (u = function(n, t) {
        var f, u, i = n.currentStyle && n.currentStyle[t], r = n.style;
        return i == null && r && r[t] && (i = r[t]),
        et.test(i) && !pe.test(t) && (f = r.left,
        u = n.runtimeStyle && n.runtimeStyle.left,
        u && (n.runtimeStyle.left = n.currentStyle.left),
        r.left = t === "fontSize" ? "1em" : i,
        i = r.pixelLeft + "px",
        r.left = f,
        u && (n.runtimeStyle.left = u)),
        i === "" ? "auto" : i
    }
    );
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, f) {
                if (r)
                    return n.offsetWidth !== 0 || u(n, "display") !== "none" ? yi(n, t, f) : i.swap(n, ke, function() {
                        return yi(n, t, f)
                    })
            },
            set: function(n, r, u) {
                return ai(n, r, u ? vi(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ye.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , f = u && u.filter || r.filter || "";
            (r.zoom = 1,
            t >= 1 && i.trim(f.replace(gt, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"),
            u && !u.filter)) || (r.filter = gt.test(f) ? f.replace(gt, e) : f + " " + e)
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function() {
                    if (t)
                        return u(n, "marginRight")
                })
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r) {
                    if (r) {
                        var f = u(n, t);
                        return et.test(f) ? i(n).position()[t] + "px" : f
                    }
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
    }
    ,
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    );
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++)
                    f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        uu.test(n) || (i.cssHooks[n + t].set = ai)
    });
    var ge = /%20/g
      , no = /\[\]$/
      , ou = /\r?\n/g
      , to = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , io = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || io.test(this.nodeName) || to.test(this.type))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(ou, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(ou, "\r\n")
                }
            }).get()
        }
    });
    i.param = function(n, r) {
        var u, f = [], e = function(n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (u in n)
                vt(u, n[u], r, e);
        return f.join("&").replace(ge, "+")
    }
    ;
    var l, a, ro = /#.*$/, uo = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, fo = /^(?:GET|HEAD)$/, eo = /^\/\//, su = /\?/, oo = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, so = /([?&])_=[^&]*/, hu = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, cu = i.fn.load, ti = {}, lu = {}, au = ["*/"] + ["*"];
    try {
        l = rf.href
    } catch (yo) {
        l = r.createElement("a");
        l.href = "";
        l = l.href
    }
    a = hu.exec(l.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if (typeof n != "string" && cu)
            return cu.apply(this, arguments);
        if (!this.length)
            return this;
        var f, o, s, h = this, e = n.indexOf(" ");
        return e >= 0 && (f = n.slice(e, n.length),
        n = n.slice(0, e)),
        i.isFunction(r) ? (u = r,
        r = t) : typeof r == "object" && (o = "POST"),
        i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: r,
            complete: function(n, t) {
                u && h.each(u, s || [n.responseText, t, n])
            }
        }).done(function(n) {
            s = arguments;
            h.html(f ? i("<div>").append(n.replace(oo, "")).find(f) : n)
        }),
        this
    }
    ;
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f,
            f = u,
            u = t),
            i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    });
    i.extend({
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function(n, t) {
            return t ? bi(n, i.ajaxSettings) : (t = n,
            n = i.ajaxSettings),
            bi(n, t),
            n
        },
        ajaxSettings: {
            url: l,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(a[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": au
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: wi(ti),
        ajaxTransport: wi(lu),
        ajax: function(n, r) {
            function p(n, r, h, l) {
                var a, tt, w, it, p, v = r;
                e !== 2 && (e = 2,
                d && clearTimeout(d),
                c = t,
                k = l || "",
                f.readyState = n > 0 ? 4 : 0,
                h && (it = bu(u, f, h)),
                n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"),
                p && (i.lastModified[o] = p),
                p = f.getResponseHeader("Etag"),
                p && (i.etag[o] = p)),
                n === 304 ? (v = "notmodified",
                a = !0) : (a = ku(u, it),
                v = a.state,
                tt = a.data,
                w = a.error,
                a = !w)) : (w = v,
                (!v || n) && (v = "error",
                n < 0 && (n = 0))),
                f.status = n,
                f.statusText = "" + (r || v),
                a ? nt.resolveWith(s, [tt, v, f]) : nt.rejectWith(s, [f, v, w]),
                f.statusCode(b),
                b = t,
                y && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? tt : w]),
                ut.fireWith(s, [f, v]),
                y && (g.trigger("ajaxComplete", [f, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            var it, rt;
            typeof n == "object" && (r = n,
            n = t);
            r = r || {};
            var o, k, w, c, d, l, y, v, u = i.ajaxSetup({}, r), s = u.context || u, g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event, nt = i.Deferred(), ut = i.Callbacks("once memory"), b = u.statusCode || {}, ft = {}, et = {}, e = 0, ot = "canceled", f = {
                readyState: 0,
                setRequestHeader: function(n, t) {
                    if (!e) {
                        var i = n.toLowerCase();
                        n = et[i] = et[i] || n;
                        ft[n] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return e === 2 ? k : null
                },
                getResponseHeader: function(n) {
                    var i;
                    if (e === 2) {
                        if (!w)
                            for (w = {}; i = uo.exec(k); )
                                w[i[1].toLowerCase()] = i[2];
                        i = w[n.toLowerCase()]
                    }
                    return i === t ? null : i
                },
                overrideMimeType: function(n) {
                    return e || (u.mimeType = n),
                    this
                },
                abort: function(n) {
                    return n = n || ot,
                    c && c.abort(n),
                    p(0, n),
                    this
                }
            };
            if (nt.promise(f),
            f.success = f.done,
            f.error = f.fail,
            f.complete = ut.add,
            f.statusCode = function(n) {
                if (n) {
                    var t;
                    if (e < 2)
                        for (t in n)
                            b[t] = [b[t], n[t]];
                    else
                        t = n[f.status],
                        f.always(t)
                }
                return this
            }
            ,
            u.url = ((n || u.url) + "").replace(ro, "").replace(eo, a[1] + "//"),
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h),
            u.crossDomain == null && (l = hu.exec(u.url.toLowerCase()),
            u.crossDomain = !(!l || l[1] == a[1] && l[2] == a[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (a[3] || (a[1] === "http:" ? 80 : 443)))),
            u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
            tt(ti, u, r, f),
            e === 2)
                return f;
            y = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !fo.test(u.type);
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent || (u.data && (u.url += (su.test(u.url) ? "&" : "?") + u.data,
            delete u.data),
            o = u.url,
            u.cache === !1 && (it = i.now(),
            rt = u.url.replace(so, "$1_=" + it),
            u.url = rt + (rt === u.url ? (su.test(u.url) ? "&" : "?") + "_=" + it : "")));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (o = o || u.url,
            i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + au + "; q=0.01" : "") : u.accepts["*"]);
            for (v in u.headers)
                f.setRequestHeader(v, u.headers[v]);
            if (!u.beforeSend || u.beforeSend.call(s, f, u) !== !1 && e !== 2) {
                ot = "abort";
                for (v in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    f[v](u[v]);
                if (c = tt(lu, u, r, f),
                c) {
                    f.readyState = 1;
                    y && g.trigger("ajaxSend", [f, u]);
                    u.async && u.timeout > 0 && (d = setTimeout(function() {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        e = 1;
                        c.send(ft, p)
                    } catch (st) {
                        if (e < 2)
                            p(-1, st);
                        else
                            throw st;
                    }
                } else
                    p(-1, "No Transport");
                return f
            }
            return f.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var vu = []
      , ho = /\?/
      , ot = /(=)\?(?=&|$)|\?\?/
      , co = i.now();
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = vu.pop() || i.expando + "_" + co++;
            return this[n] = !0,
            n
        }
    });
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.data, c = r.url, l = r.jsonp !== !1, a = l && ot.test(c), v = l && !a && typeof h == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ot.test(h);
        if (r.dataTypes[0] === "jsonp" || a || v)
            return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback,
            s = n[e],
            a ? r.url = c.replace(ot, "$1" + e) : v ? r.data = h.replace(ot, "$1" + e) : l && (r.url += (ho.test(c) ? "&" : "?") + r.jsonp + "=" + e),
            r.converters["script json"] = function() {
                return o || i.error(e + " was not called"),
                o[0]
            }
            ,
            r.dataTypes[0] = "json",
            n[e] = function() {
                o = arguments
            }
            ,
            f.always(function() {
                n[e] = s;
                r[e] && (r.jsonpCallback = u.jsonpCallback,
                vu.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t
            }),
            "script"
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function(f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function(n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                        u && i.parentNode && u.removeChild(i),
                        i = t,
                        r || e(200, "success"))
                    }
                    ;
                    u.insertBefore(i, u.firstChild)
                },
                abort: function() {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    st = n.ActiveXObject ? function() {
        for (var n in w)
            w[n](0, 1)
    }
    : !1;
    yu = 0;
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && ki() || du()
    }
    : ki,
    function(n) {
        i.extend(i.support, {
            ajax: !!n,
            cors: !!n && "withCredentials"in n
        })
    }(i.ajaxSettings.xhr());
    i.support.ajax && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async),
                    r.xhrFields)
                        for (s in r.xhrFields)
                            o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f)
                            o.setRequestHeader(s, f[s])
                    } catch (c) {}
                    o.send(r.hasContent && r.data || null);
                    u = function(n, f) {
                        var s, a, v, c, l;
                        try {
                            if (u && (f || o.readyState === 4))
                                if (u = t,
                                h && (o.onreadystatechange = i.noop,
                                st && delete w[h]),
                                f)
                                    o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status;
                                    v = o.getAllResponseHeaders();
                                    c = {};
                                    l = o.responseXML;
                                    l && l.documentElement && (c.xml = l);
                                    try {
                                        c.text = o.responseText
                                    } catch (n) {}
                                    try {
                                        a = o.statusText
                                    } catch (p) {
                                        a = ""
                                    }
                                    !s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
                                }
                        } catch (y) {
                            f || e(-1, y)
                        }
                        c && e(s, a, c, v)
                    }
                    ;
                    r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++yu,
                    st && (w || (w = {},
                    i(n).unload(st)),
                    w[h] = u),
                    o.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(0, 1)
                }
            }
        }
    });
    var ht, ct, lo = /^(?:toggle|show|hide)$/, ao = new RegExp("^(?:([-+])=|)(" + ut + ")([a-z%]*)$","i"), vo = /queueHooks$/, lt = [tf], k = {
        "*": [function(n, t) {
            var o, s, h, r = this.createTween(n, t), e = ao.exec(t), c = r.cur(), u = +c || 0, f = 1;
            if (e) {
                if (o = +e[2],
                s = e[3] || (i.cssNumber[n] ? "" : "px"),
                s !== "px" && u) {
                    u = i.css(r.elem, n, !0) || o || 1;
                    do
                        h = f = f || ".5",
                        u = u / f,
                        i.style(r.elem, n, u + s),
                        f = r.cur() / c;
                    while (f !== 1 && f !== h)
                }
                r.unit = s;
                r.start = u;
                r.end = e[1] ? u + (e[1] + 1) * o : o
            }
            return r
        }
        ]
    };
    i.Animation = i.extend(gi, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++)
                r = n[u],
                k[r] = k[r] || [],
                k[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? lt.unshift(n) : lt.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration),
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : f.propHooks._default.set(this),
            this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] == null || !!n.elem.style && n.elem.style[n.prop] != null ? (t = i.css(n.elem, n.prop, !1, ""),
                !t || t === "auto" ? 0 : t) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(u, f, e) {
            return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(it(t, !0), u, f, e)
        }
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(nt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var e = i.isEmptyObject(n)
              , f = i.speed(t, r, u)
              , o = function() {
                var t = gi(this, i.extend({}, n), f);
                e && t.stop(!0)
            };
            return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = r,
            r = n,
            n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = n != null && n + "queueHooks"
                  , e = i.timers
                  , r = i._data(this);
                if (t)
                    r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && vo.test(t) && f(r[t]);
                for (t = e.length; t--; )
                    e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u),
                    o = !1,
                    e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        }
    });
    i.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (u.queue == null || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() {
        for (var r, n = i.timers, t = 0; t < n.length; t++)
            r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop()
    }
    ;
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && !ct && (ct = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.interval = 13;
    i.fx.stop = function() {
        clearInterval(ct);
        ct = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    );
    ii = /^(?:body|html)$/i;
    i.fn.offset = function(n) {
        if (arguments.length)
            return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
        var e, r, o, s, h, c, l, a, v, y, u = this[0], f = u && u.ownerDocument;
        if (f)
            return (o = f.body) === u ? i.offset.bodyOffset(u) : (r = f.documentElement,
            i.contains(r, u) ? (e = u.getBoundingClientRect(),
            s = nr(f),
            h = r.clientTop || o.clientTop || 0,
            c = r.clientLeft || o.clientLeft || 0,
            l = s.pageYOffset || r.scrollTop,
            a = s.pageXOffset || r.scrollLeft,
            v = e.top + l - h,
            y = e.left + a - c,
            {
                top: v,
                left: y
            }) : {
                top: 0,
                left: 0
            })
    }
    ;
    i.offset = {
        bodyOffset: function(n) {
            var t = n.offsetTop
              , r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0,
            r += parseFloat(i.css(n, "marginLeft")) || 0),
            {
                top: t,
                left: r
            }
        },
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(),
            h = s.top,
            c = s.left) : (h = parseFloat(l) || 0,
            c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using"in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var u = this[0]
                  , n = this.offsetParent()
                  , t = this.offset()
                  , r = ii.test(n[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : n.offset();
                return t.top -= parseFloat(i.css(u, "marginTop")) || 0,
                t.left -= parseFloat(i.css(u, "marginLeft")) || 0,
                r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0,
                r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0,
                {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.body; n && !ii.test(n.nodeName) && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n || r.body
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = nr(n);
                if (e === t)
                    return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || typeof f != "boolean")
                  , s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement,
                    Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o)
            }
        })
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i
    })
}
)(window)
