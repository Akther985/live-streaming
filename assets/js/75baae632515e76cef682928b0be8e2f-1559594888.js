! function(t) {
    var n = "String",
        e = "indexOf",
        r = "length",
        a = "join",
        i = "document",
        o = "encode",
        c = "Component",
        u = "decode",
        f = "RegExp",
        s = "Date",
        g = "Error",
        v = "Cookie",
        l = "Item",
        p = "cookie",
        h = "replace",
        m = "test",
        d = "expires",
        $ = "domain",
        w = "path",
        y = "split",
        b = "push",
        x = "remove",
        j = "location",
        I = "Query",
        T = "href",
        k = "exec",
        _ = "Items",
        C = "create",
        R = "Element",
        U = "search",
        E = "pathname",
        D = "substring",
        H = "Keys",
        M = "build",
        O = "Storage",
        S = "clear",
        q = "Parameters",
        z = "slice",
        B = "apply",
        L = "meta",
        N = "name",
        F = "each",
        G = "attr",
        J = "content",
        P = "first",
        A = "text",
        K = "_enc}",
        Q = "title",
        V = "data",
        W = "click",
        X = "before",
        Y = "unload",
        Z = "submit",
        tt = "action",
        nt = "find",
        et = "body",
        rt = "email",
        at = "https",
        it = "ajax",
        ot = "tags",
        ct = "%5B%5D",
        ut = "head",
        ft = "Elements",
        st = "Name",
        gt = "_Hasync",
        vt = "Histats",
        lt = "dataLayer",
        pt = "google",
        ht = "manager";
    ! function(t) {
        var i, o = t[n],
            c = "char",
            u = "Char",
            f = "Code",
            s = "At",
            g = e,
            v = c + f + s,
            l = "from" + u + f,
            p = c + s,
            h = o[l],
            m = "";
        for (i = 0; i < 64; i++) m += h(i > 61 ? 4 * (1 & i) | 43 : i + [65, 71, -4][i / 26 & 3]);
        t.b2a = function(t, n) {
            n = n || 0;
            var e, a, i, o = "";
            t = function(t) {
                var n, e, a = "",
                    i = -1,
                    o = t[r];
                if (o)
                    for (;
                        (i += 1) < o;) n = t[v](i), e = i + 1 < o ? t[v](i + 1) : 0, 55296 <= n && n <= 56319 && 56320 <= e && e <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & e), i += 1), n <= 127 ? a += h(n) : n <= 2047 ? a += h(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? a += h(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (a += h(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
                return a
            }(t);
            var c = t[r];
            for (e = 0; e < c; e += 3)
                for (i = t[v](e) << 16 | (e + 1 < c ? t[v](e + 1) << 8 : 0) | (e + 2 < c ? t[v](e + 2) : 0), a = 0; a < 4; a += 1) 8 * e + 6 * a <= 8 * c && (o += m[p](((i >>> 6 * (3 - a) & 63) + n) % 64));
            return o
        }, t.a2b = function(t, n) {
            n = n || 0;
            var e, i, o, c, u, f, s, l, d, $, w = t[r],
                y = "",
                b = [];
            if (e = $ = 0, !t) return "";
            do {
                u = (m[g](t[p](e++)) + 4096 - n) % 64, f = (m[g](t[p](e++)) + 4096 - n) % 64, s = (m[g](t[p](e++)) + 4096 - n) % 64, l = (m[g](t[p](e++)) + 4096 - n) % 64, d = u << 18 | f << 12 | s << 6 | l, i = d >> 16 & 255, o = d >> 8 & 255, c = 255 & d, $ += 1, b[$] = e - w == 2 ? h(i) : e - w == 1 ? h(i, o) : h(i, o, c)
            } while (e < w);
            return y = b[a](""),
                function(t) {
                    var n, e, i, o, c, u = [],
                        f = t[r];
                    if (n = e = i = o = c = 0, f)
                        for (t += ""; n < f;) i = t[v](n), e += 1, i < 128 ? (u[e] = h(i), n += 1) : i > 191 && i < 224 ? (o = t[v](n + 1), u[e] = h((31 & i) << 6 | 63 & o), n += 2) : (o = t[v](n + 1), c = t[v](n + 2), u[e] = h((15 & i) << 12 | (63 & o) << 6 | 63 & c), n += 3);
                    return u[a]("")
                }(y)
        }
    }(t),
    function(t) {
        var e = t[i],
            a = t[o + "URI" + c],
            j = t[u + "URI" + c],
            I = t.Number,
            T = t[f],
            k = t[n],
            _ = t[s],
            C = t["Type" + g] || t[g];
        t[v] = function(t) {
            return t["get" + l] = function(t) {
                return t ? j(e[p][h](new T("(?:(?:^|.*;)\\s*" + a(t)[h](/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
            }, t["set" + l] = function(n, r, i, o, c, u) {
                if (!n || /^(?:expires|max\-age|path|domain|secure)$/i [m](n)) throw new C("Invalid argument");
                var f = "";
                if (i) switch (i.constructor) {
                    case I:
                        f = i === 1 / 0 ? "; " + d + "=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + i;
                        break;
                    case k:
                        f = "; " + d + "=" + i;
                        break;
                    case _:
                        f = "; " + d + "=" + i.toUTCString()
                }
                return e[p] = a(n) + "=" + a(r) + f + (c ? "; " + $ + "=" + c : "") + (o ? "; " + w + "=" + o : "") + (u ? "; secure" : ""), t
            }, t["has" + l] = function(t) {
                return !(!t || /^(?:expires|max\-age|path|domain|secure)$/i [m](t)) && new T("(?:^|;\\s*)" + a(t)[h](/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")[m](e[p])
            }, t.keys = function() {
                for (var t = e[p][h](/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")[y](/\s*(?:\=[^;]*)?;\s*/), n = [], a = t[r], i = 0; i < a; i++) t[i] && "" != t[i] && n[b](j(t[i]));
                return n
            }, t[x + l] = function(n, r, i) {
                return t["has" + l](n) && (e[p] = a(n) + "=; " + d + "=Thu, 01 Jan 1970 00:00:00 GMT" + (i ? "; " + $ + "=" + i : "") + (r ? "; " + w + "=" + r : "")), t
            }, t
        }({})
    }(t),
    function(t) {
        var n = t[i],
            e = t[o + "URI" + c],
            s = t[u + "URI" + c],
            g = t[f],
            v = t[j];
        t[I] = function(t) {
            return t["get" + l] = function(t, n) {
                n = n || v[T], t = t[h](/[\[\]]/g, "\\$&");
                var e = new g("[?&]" + t + "(=([^&#]*)|&|#|$)"),
                    r = e[k](n);
                return r ? r[2] ? s(r[2][h](/\+/g, " ")) : "" : void 0
            }, t["get" + _] = function(t, e) {
                var a;
                if (void 0 === t) a = v;
                else {
                    if ("" === t) return {};
                    a = n[C + R]("a"), a[T] = t
                }
                var i = {},
                    o = (a[U] || a[E])[D](1);
                if (o)
                    for (var c = o[y](e || "&"), u = 0; u < c[r]; u++) {
                        var f = c[u][y]("=");
                        f[0] && (i[s(f[0])] = s((f[1] || "")[h](/\+/g, " ")))
                    }
                return i
            }, t["get" + H] = function(t, e) {
                var a;
                if (void 0 === t) a = v;
                else {
                    if ("" === t) return [];
                    a = n[C + R]("a"), a[T] = t
                }
                var i = [],
                    o = (a[U] || a[E])[D](1);
                if (o)
                    for (var c = o[y](e || "&"), u = 0; u < c[r]; u++) {
                        var f = c[u][y]("=");
                        f[0] && i[b](s(f[0]))
                    }
                return i
            }, t[M] = function(t, n) {
                var r = [];
                for (var i in t) t.hasOwnProperty(i) && r[b](e(i) + "=" + e(t[i]));
                return r[a](n || "&")
            }, t
        }({})
    }(t),
    function(t) {
        var n = t["local" + O],
            e = t[v],
            r = {};
        r["set" + l] = function(t, a) {
            return void 0 === a ? r[x + l](t) : (n ? n["set" + l](t, a) : e["set" + l](t, a, 1 / 0, "/"), r)
        }, r["get" + l] = function(t) {
            return e["get" + l](t) || n && n["get" + l](t) || void 0
        }, r["has" + l] = function(t) {
            return void 0 !== r["get" + l](t)
        }, r[x + l] = function(t) {
            return n && n[x + l](t), e[x + l](t, "/"), r
        }, r[S] = function() {
            n[S]()
        }, t[O] = r
    }(t),
    function(t) {
        var a = t[I],
            i = t.Object,
            o = t[n],
            c = t[j],
            u = t.$;
        t[q] = function(t) {
            return t["get" + l] = function(n, e) {
                return t["get" + _](e)[n]
            }, t["get" + _] = function(t) {
                var n = u.map(o(t || c || "")[y](/\?|#/)[z](1), function(t) {
                    return t ? a["get" + _]("?" + t, t[e]("&") > 0 ? "&" : "/") : {}
                });
                return n[r] > 0 ? i.assign[B](i, n) : {}
            }, t["get" + H] = function(t) {
                return [].concat[B]([], u.map(o(t || c || "")[y](/\?|#/)[z](1), function(t) {
                    return t ? a["get" + H]("?" + t, t[e]("&") > 0 ? "&" : "/") : []
                }))
            }, t
        }({})
    }(t),
    function(t) {
        function n() {
            d["set" + l]("v", 1 + $(d["get" + l]("v") || 0))
        }
        var e = t[i],
            u = t[j],
            f = t[o + "URI" + c],
            g = t[I],
            v = t[s],
            p = t.JSON,
            m = t[q],
            d = t[O],
            $ = t.parseInt,
            w = t.setTimeout,
            C = t["HTMLForm" + R],
            E = t.$,
            D = E(e),
            H = m["get" + _](),
            mt = function() {
                E(L + "[" + N + '="lpl:$"]')[F](function() {
                    E[F](E(this)[G](J)[y](","), function(t, n) {
                        var e = /^([^=]+)(?:=(.*))?$/ [k](n)[z](1),
                            r = e[0];
                        if (r) {
                            var a = E(e[1])[P](),
                                i = a.val() || a[A]();
                            (i = i[h](/[\r\n]+/g, " ")[h](/\s\s+/g, " ")[h](/(^\s+|\s+$)/g, "")) && d["set" + l](r, i)
                        }
                    })
                })
            };
        E(function() {
            var t = d["get" + l]("@"),
                n = 600;
            E(L + "[" + N + '="lpl:@"]')[F](function() {
                var t = $(E(this)[G](J));
                t > 0 && (n = t)
            }), t && t < v.now() - 1e3 * n && d[S](), E(L + "[" + N + '="lpl:c"]')[F](function() {
                E[F](E(this)[G](J)[y](","), function(t, n) {
                    var e = /^([^=]+)(?:=(.*))?$/ [k](n)[z](1),
                        r = e[0],
                        a = e[1] || e[0];
                    if (a && r) {
                        var i = d["get" + l](r),
                            o = H[a];
                        o && i && o != i && d[S]()
                    }
                })
            }), E(L + "[" + N + '="lpl:r"]')[F](function() {
                E[F](E(this)[G](J)[y](","), function(t, n) {
                    d.removeItem(n)
                })
            }), E(L + "[" + N + '="lpl:d"]')[F](function() {
                E[F](E(this)[G](J)[y](","), function(t, n) {
                    var e = /^([^=]+)=(.*)$/ [k](n)[z](1),
                        r = e[0];
                    r && !d["get" + l](r) && d["set" + l](r, e[1])
                })
            }), E(L + "[" + N + '="lpl:q"]')[F](function() {
                E[F](E(this)[G](J)[y](","), function(t, n) {
                    var e = /^([^=]+)(?:=(.*))?$/ [k](n)[z](1),
                        r = e[0];
                    if (r) {
                        var a = e[1] || e[0];
                        H[a] && H[a] != "{" + a + "}" && H[a] != "{" + a + K && d["set" + l](r, H[a])
                    }
                })
            }), E(L + "[" + N + '="lpl:t"]')[F](function() {
                var t = /^([^=]+)(?:=(.*))?$/ [k](E(this)[G](J))[z](1),
                    n = t[0],
                    e = t[1];
                if (n) {
                    var r = m["get" + l](n);
                    r && r != "{" + n + "}" && r != "{" + n + K && (D[G](Q, r), e && E(e)[A](D[G](Q)))
                }
            }), E(L + "[" + N + '="lpl:$"]')[F](function() {
                E[F](E(this)[G](J)[y](","), function(t, n) {
                    var e = /^([^=]+)(?:=(.*))?$/ [k](n)[z](1),
                        r = e[0];
                    if (r) {
                        var a = E(e[1])[P](),
                            i = a.val() || a[A]();
                        (i = i[h](/[\r\n]+/g, " ")[h](/\s\s+/g, " ")[h](/(^\s+|\s+$)/g, "")) && d["set" + l](r, i)
                    }
                })
            }), mt();
            var e = function() {
                d["set" + l]("@", v.now()), w(e, 1e4)
            };
            e()
        });
        var dt = function(n, e) {
            return e = e || {}, mt(), n[V]("lpx") && E[F](n[V]("lpx")[y](","), function(n, e) {
                var r = /^([^=]+)(?:=(.*))?$/ [k](e)[z](1),
                    a = r[0];
                if (a) {
                    var i = r[1];
                    if (i) {
                        var r = /^([^:]+)(?::(.*))?$/ [k](i)[z](1);
                        i = r[1];
                        var o = r[0];
                        switch (o) {
                            case "b2a":
                            case "a2b":
                                var c = d["get" + l](i);
                                c && d["set" + l](a, t[o](c));
                                break;
                            case "json":
                                var u = {},
                                    f = !0;
                                E[F](i[y](";"), function(t, n) {
                                    var e = d["get" + l](n);
                                    e && (u[n] = e, f = !1)
                                }), f || d["set" + l](a, p.stringify(u))
                        }
                    }
                }
            }), E[F](n[V]("lpl")[y](","), function(t, n) {
                var r = /^([^=]+)(?:=(.*))?$/ [k](n)[z](1),
                    a = r[0];
                if (a) {
                    var i = r[1] || r[0],
                        o = d["get" + l](i);
                    o && (e[a] = o)
                }
            }), e
        };
        E(e).on(W, "a[" + V + "-lpl]", function() {
                var e = E(this);
                e[V]("url") && e[G](T, e[V]("url")), n(), this[U] = g[M](dt(e, g["get" + _](e[G](T)))), t["on" + X + Y] = function() {}
            }), E(e).on(Z, "form[" + V + "-lpl]", function(e) {
                var i = this,
                    o = E(i),
                    c = (i.method || "").toLowerCase();
                o[V]("url") && o[G](tt, o[V]("url")), n();
                var s = dt(o, g["get" + _](o[G](tt)));
                i[tt] = i[tt][y]("?")[0] + "?" + g[M](s), o[nt]('*[name="-"]')[x](), t["on" + X + Y] = function() {}, "get" == c && E[F](s, function(t, n) {
                    var e = o[nt]('*[name="' + t + '"]');
                    e[r] > 0 ? e.val(n) : o.append(E("<input>", {
                        type: "hidden",
                        name: t,
                        value: n
                    }))
                });
                var p = "get" == c ? function() {
                        t[j] = i[tt][y]("?")[0] + "?" + o.serialize()
                    } : function() {
                        "function" == typeof i[Z] ? i[Z]() : C.prototype[Z][B](i)
                    },
                    h = [],
                    m = d["get" + l]("dp"),
                    $ = d["get" + l]("z"),
                    I = d["get" + l]("lang"),
                    T = d["get" + l]("lcat"),
                    k = E(et)[V]("site"),
                    R = d["get" + l]("q"),
                    U = E("#" + rt).val() || d["get" + l](rt);
                if (m) {
                    var D = {},
                        H = 257 * v.now();
                    D.url = at + "://fb." + u.host[y](".")[z](-2)[a](".") + "/lead.php?hash=" + f(t.b2a(m, 63 & H)) + "&crc32=" + H % 65536, h[b](E[it](D))
                }
                if (U) {
                    var D = {};
                    D.url = at + "://" + rt + ".perfectvalidation.com/" + b + "/?trafficsource=MH&" + rt + "=" + f(U) + ($ ? "&zoneid=" + f($) : "") + (m ? "&" + W + "id=" + f(m) : "") + (I ? "&preferred_locale=" + f(I) : "") + (k ? "&" + ot + ct + "=" + f(k) : "") + (T ? "&" + ot + ct + "=" + f(T) : "") + (R ? "&query=" + f(R) : ""), h[b](E[it](D))
                }
                return h[r] > 0 ? (E.when[B](E, h).always(p), w(p, 2e3)) : p(), e.preventDefault(), !1
            }), E(t).on("hashchange", function() {
                t["on" + X + Y] = function() {}, u.reload()
            }),
            function(n, r, a) {
                function i(t) {
                    var n = e.createElement("script");
                    n.type = A + "/javascript", n.async = !0, n.src = t, c.appendChild(n)
                }

                function o() {
                    t[lt][b](arguments)
                }
                var c = e[ut] || e["get" + ft + "ByTag" + st](ut)[0] || e[et] || e["get" + ft + "ByTag" + st](et)[0];
                if (n) {
                    t[gt] = t[gt] || [];
                    var u = t[gt];
                    u[b]([vt + ".start", "1," + n + ",4,0,0,0,00010000"]), u[b]([vt + ".fasi", "1"]), u[b]([vt + ".track_hits", ""]), i(at + "://s10.histats.com/js15_as.js")
                }
                t[lt] = t[lt] || [], r && (o("js", new v), o("config", r), i(at + "://www." + pt + "tag" + ht + ".com/gtag/js?id=" + r)), a && (t[lt] = t[lt] || [], t[lt][b]({
                    "gtm.start": (new v).getTime(),
                    event: "gtm.js"
                }), i(at + "://www." + pt + "tag" + ht + ".com/gtm.js?id=" + a))
            }(m["get" + l]("c_hs") || E(L + "[" + N + '="c:hs"]')[G](J), m["get" + l]("c_ga") || E(L + "[" + N + '="c:ga"]')[G](J), m["get" + l]("c_gtm") || E(L + "[" + N + '="c:gtm"]')[G](J))
    }(t)
}(window);
! function(a, b) {
    "undefined" == typeof a.HTMLVideoElement && (b.createElement("video"), b.createElement("audio"), b.createElement("track")),
        function(a, b) {
            "use strict";
            "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.returnExports = b()
        }(this, function() {
            var b, c = Array,
                d = c.prototype,
                e = Object,
                f = e.prototype,
                g = Function.prototype,
                h = String,
                i = h.prototype,
                j = Number,
                k = j.prototype,
                l = d.slice,
                m = d.splice,
                n = d.push,
                o = d.unshift,
                p = d.concat,
                q = g.call,
                r = g.apply,
                s = Math.max,
                t = Math.min,
                u = f.toString,
                v = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                w = Function.prototype.toString,
                x = function(a) {
                    try {
                        return w.call(a), !0
                    } catch (b) {
                        return !1
                    }
                },
                y = "[object Function]",
                z = "[object GeneratorFunction]";
            b = function(a) {
                if ("function" != typeof a) return !1;
                if (v) return x(a);
                var b = u.call(a);
                return b === y || b === z
            };
            var A, B = RegExp.prototype.exec,
                C = function(a) {
                    try {
                        return B.call(a), !0
                    } catch (b) {
                        return !1
                    }
                },
                D = "[object RegExp]";
            A = function(a) {
                return "object" != typeof a ? !1 : v ? C(a) : u.call(a) === D
            };
            var E, F = String.prototype.valueOf,
                G = function(a) {
                    try {
                        return F.call(a), !0
                    } catch (b) {
                        return !1
                    }
                },
                H = "[object String]";
            E = function(a) {
                return "string" == typeof a ? !0 : "object" != typeof a ? !1 : v ? G(a) : u.call(a) === H
            };
            var I = e.defineProperty && function() {
                    try {
                        var a = {};
                        e.defineProperty(a, "x", {
                            enumerable: !1,
                            value: a
                        });
                        for (var b in a) return !1;
                        return a.x === a
                    } catch (c) {
                        return !1
                    }
                }(),
                J = function(a) {
                    var b;
                    return b = I ? function(a, b, c, d) {
                            !d && b in a || e.defineProperty(a, b, {
                                configurable: !0,
                                enumerable: !1,
                                writable: !0,
                                value: c
                            })
                        } : function(a, b, c, d) {
                            !d && b in a || (a[b] = c)
                        },
                        function(c, d, e) {
                            for (var f in d) a.call(d, f) && b(c, f, d[f], e)
                        }
                }(f.hasOwnProperty),
                K = function(a) {
                    var b = typeof a;
                    return null === a || "object" !== b && "function" !== b
                },
                L = j.isNaN || function(a) {
                    return a !== a
                },
                M = {
                    ToInteger: function(a) {
                        var b = +a;
                        return L(b) ? b = 0 : 0 !== b && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))), b
                    },
                    ToPrimitive: function(a) {
                        var c, d, e;
                        if (K(a)) return a;
                        if (d = a.valueOf, b(d) && (c = d.call(a), K(c))) return c;
                        if (e = a.toString, b(e) && (c = e.call(a), K(c))) return c;
                        throw new TypeError
                    },
                    ToObject: function(a) {
                        if (null == a) throw new TypeError("can't convert " + a + " to object");
                        return e(a)
                    },
                    ToUint32: function(a) {
                        return a >>> 0
                    }
                },
                N = function() {};
            J(g, {
                bind: function(a) {
                    var c = this;
                    if (!b(c)) throw new TypeError("Function.prototype.bind called on incompatible " + c);
                    for (var d, f = l.call(arguments, 1), g = function() {
                            if (this instanceof d) {
                                var b = c.apply(this, p.call(f, l.call(arguments)));
                                return e(b) === b ? b : this
                            }
                            return c.apply(a, p.call(f, l.call(arguments)))
                        }, h = s(0, c.length - f.length), i = [], j = 0; h > j; j++) n.call(i, "$" + j);
                    return d = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this, arguments); }")(g), c.prototype && (N.prototype = c.prototype, d.prototype = new N, N.prototype = null), d
                }
            });
            var O = q.bind(f.hasOwnProperty),
                P = q.bind(f.toString),
                Q = q.bind(l),
                R = r.bind(l),
                S = q.bind(i.slice),
                T = q.bind(i.split),
                U = q.bind(i.indexOf),
                V = q.bind(n),
                W = q.bind(f.propertyIsEnumerable),
                X = q.bind(d.sort),
                Y = c.isArray || function(a) {
                    return "[object Array]" === P(a)
                },
                Z = 1 !== [].unshift(0);
            J(d, {
                unshift: function() {
                    return o.apply(this, arguments), this.length
                }
            }, Z), J(c, {
                isArray: Y
            });
            var $ = e("a"),
                _ = "a" !== $[0] || !(0 in $),
                aa = function(a) {
                    var b = !0,
                        c = !0,
                        d = !1;
                    if (a) try {
                        a.call("foo", function(a, c, d) {
                            "object" != typeof d && (b = !1)
                        }), a.call([1], function() {
                            "use strict";
                            c = "string" == typeof this
                        }, "x")
                    } catch (e) {
                        d = !0
                    }
                    return !!a && !d && b && c
                };
            J(d, {
                forEach: function(a) {
                    var c, d = M.ToObject(this),
                        e = _ && E(this) ? T(this, "") : d,
                        f = -1,
                        g = M.ToUint32(e.length);
                    if (arguments.length > 1 && (c = arguments[1]), !b(a)) throw new TypeError("Array.prototype.forEach callback must be a function");
                    for (; ++f < g;) f in e && ("undefined" == typeof c ? a(e[f], f, d) : a.call(c, e[f], f, d))
                }
            }, !aa(d.forEach)), J(d, {
                map: function(a) {
                    var d, e = M.ToObject(this),
                        f = _ && E(this) ? T(this, "") : e,
                        g = M.ToUint32(f.length),
                        h = c(g);
                    if (arguments.length > 1 && (d = arguments[1]), !b(a)) throw new TypeError("Array.prototype.map callback must be a function");
                    for (var i = 0; g > i; i++) i in f && ("undefined" == typeof d ? h[i] = a(f[i], i, e) : h[i] = a.call(d, f[i], i, e));
                    return h
                }
            }, !aa(d.map)), J(d, {
                filter: function(a) {
                    var c, d, e = M.ToObject(this),
                        f = _ && E(this) ? T(this, "") : e,
                        g = M.ToUint32(f.length),
                        h = [];
                    if (arguments.length > 1 && (d = arguments[1]), !b(a)) throw new TypeError("Array.prototype.filter callback must be a function");
                    for (var i = 0; g > i; i++) i in f && (c = f[i], ("undefined" == typeof d ? a(c, i, e) : a.call(d, c, i, e)) && V(h, c));
                    return h
                }
            }, !aa(d.filter)), J(d, {
                every: function(a) {
                    var c, d = M.ToObject(this),
                        e = _ && E(this) ? T(this, "") : d,
                        f = M.ToUint32(e.length);
                    if (arguments.length > 1 && (c = arguments[1]), !b(a)) throw new TypeError("Array.prototype.every callback must be a function");
                    for (var g = 0; f > g; g++)
                        if (g in e && !("undefined" == typeof c ? a(e[g], g, d) : a.call(c, e[g], g, d))) return !1;
                    return !0
                }
            }, !aa(d.every)), J(d, {
                some: function(a) {
                    var c, d = M.ToObject(this),
                        e = _ && E(this) ? T(this, "") : d,
                        f = M.ToUint32(e.length);
                    if (arguments.length > 1 && (c = arguments[1]), !b(a)) throw new TypeError("Array.prototype.some callback must be a function");
                    for (var g = 0; f > g; g++)
                        if (g in e && ("undefined" == typeof c ? a(e[g], g, d) : a.call(c, e[g], g, d))) return !0;
                    return !1
                }
            }, !aa(d.some));
            var ba = !1;
            d.reduce && (ba = "object" == typeof d.reduce.call("es5", function(a, b, c, d) {
                return d
            })), J(d, {
                reduce: function(a) {
                    var c = M.ToObject(this),
                        d = _ && E(this) ? T(this, "") : c,
                        e = M.ToUint32(d.length);
                    if (!b(a)) throw new TypeError("Array.prototype.reduce callback must be a function");
                    if (0 === e && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var f, g = 0;
                    if (arguments.length >= 2) f = arguments[1];
                    else
                        for (;;) {
                            if (g in d) {
                                f = d[g++];
                                break
                            }
                            if (++g >= e) throw new TypeError("reduce of empty array with no initial value")
                        }
                    for (; e > g; g++) g in d && (f = a(f, d[g], g, c));
                    return f
                }
            }, !ba);
            var ca = !1;
            d.reduceRight && (ca = "object" == typeof d.reduceRight.call("es5", function(a, b, c, d) {
                return d
            })), J(d, {
                reduceRight: function(a) {
                    var c = M.ToObject(this),
                        d = _ && E(this) ? T(this, "") : c,
                        e = M.ToUint32(d.length);
                    if (!b(a)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                    if (0 === e && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                    var f, g = e - 1;
                    if (arguments.length >= 2) f = arguments[1];
                    else
                        for (;;) {
                            if (g in d) {
                                f = d[g--];
                                break
                            }
                            if (--g < 0) throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    if (0 > g) return f;
                    do g in d && (f = a(f, d[g], g, c)); while (g--);
                    return f
                }
            }, !ca);
            var da = d.indexOf && -1 !== [0, 1].indexOf(1, 2);
            J(d, {
                indexOf: function(a) {
                    var b = _ && E(this) ? T(this, "") : M.ToObject(this),
                        c = M.ToUint32(b.length);
                    if (0 === c) return -1;
                    var d = 0;
                    for (arguments.length > 1 && (d = M.ToInteger(arguments[1])), d = d >= 0 ? d : s(0, c + d); c > d; d++)
                        if (d in b && b[d] === a) return d;
                    return -1
                }
            }, da);
            var ea = d.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
            J(d, {
                lastIndexOf: function(a) {
                    var b = _ && E(this) ? T(this, "") : M.ToObject(this),
                        c = M.ToUint32(b.length);
                    if (0 === c) return -1;
                    var d = c - 1;
                    for (arguments.length > 1 && (d = t(d, M.ToInteger(arguments[1]))), d = d >= 0 ? d : c - Math.abs(d); d >= 0; d--)
                        if (d in b && a === b[d]) return d;
                    return -1
                }
            }, ea);
            var fa = function() {
                var a = [1, 2],
                    b = a.splice();
                return 2 === a.length && Y(b) && 0 === b.length
            }();
            J(d, {
                splice: function(a, b) {
                    return 0 === arguments.length ? [] : m.apply(this, arguments)
                }
            }, !fa);
            var ga = function() {
                var a = {};
                return d.splice.call(a, 0, 0, 1), 1 === a.length
            }();
            J(d, {
                splice: function(a, b) {
                    if (0 === arguments.length) return [];
                    var c = arguments;
                    return this.length = s(M.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof b && (c = Q(arguments), c.length < 2 ? V(c, this.length - a) : c[1] = M.ToInteger(b)), m.apply(this, c)
                }
            }, !ga);
            var ha = function() {
                    var a = new c(1e5);
                    return a[8] = "x", a.splice(1, 1), 7 === a.indexOf("x")
                }(),
                ia = function() {
                    var a = 256,
                        b = [];
                    return b[a] = "a", b.splice(a + 1, 0, "b"), "a" === b[a]
                }();
            J(d, {
                splice: function(a, b) {
                    for (var c, d = M.ToObject(this), e = [], f = M.ToUint32(d.length), g = M.ToInteger(a), i = 0 > g ? s(f + g, 0) : t(g, f), j = t(s(M.ToInteger(b), 0), f - i), k = 0; j > k;) c = h(i + k), O(d, c) && (e[k] = d[c]), k += 1;
                    var l, m = Q(arguments, 2),
                        n = m.length;
                    if (j > n) {
                        for (k = i; f - j > k;) c = h(k + j), l = h(k + n), O(d, c) ? d[l] = d[c] : delete d[l], k += 1;
                        for (k = f; k > f - j + n;) delete d[k - 1], k -= 1
                    } else if (n > j)
                        for (k = f - j; k > i;) c = h(k + j - 1), l = h(k + n - 1), O(d, c) ? d[l] = d[c] : delete d[l], k -= 1;
                    k = i;
                    for (var o = 0; o < m.length; ++o) d[k] = m[o], k += 1;
                    return d.length = f - j + n, e
                }
            }, !ha || !ia);
            var ja, ka = d.join;
            try {
                ja = "1,2,3" !== Array.prototype.join.call("123", ",")
            } catch (la) {
                ja = !0
            }
            ja && J(d, {
                join: function(a) {
                    var b = "undefined" == typeof a ? "," : a;
                    return ka.call(E(this) ? T(this, "") : this, b)
                }
            }, ja);
            var ma = "1,2" !== [1, 2].join(void 0);
            ma && J(d, {
                join: function(a) {
                    var b = "undefined" == typeof a ? "," : a;
                    return ka.call(this, b)
                }
            }, ma);
            var na = function(a) {
                    for (var b = M.ToObject(this), c = M.ToUint32(b.length), d = 0; d < arguments.length;) b[c + d] = arguments[d], d += 1;
                    return b.length = c + d, c + d
                },
                oa = function() {
                    var a = {},
                        b = Array.prototype.push.call(a, void 0);
                    return 1 !== b || 1 !== a.length || "undefined" != typeof a[0] || !O(a, 0)
                }();
            J(d, {
                push: function(a) {
                    return Y(this) ? n.apply(this, arguments) : na.apply(this, arguments)
                }
            }, oa);
            var pa = function() {
                var a = [],
                    b = a.push(void 0);
                return 1 !== b || 1 !== a.length || "undefined" != typeof a[0] || !O(a, 0)
            }();
            J(d, {
                push: na
            }, pa), J(d, {
                slice: function(a, b) {
                    var c = E(this) ? T(this, "") : this;
                    return R(c, arguments)
                }
            }, _);
            var qa = function() {
                    try {
                        return [1, 2].sort(null), [1, 2].sort({}), !0
                    } catch (a) {}
                    return !1
                }(),
                ra = function() {
                    try {
                        return [1, 2].sort(/a/), !1
                    } catch (a) {}
                    return !0
                }(),
                sa = function() {
                    try {
                        return [1, 2].sort(void 0), !0
                    } catch (a) {}
                    return !1
                }();
            J(d, {
                sort: function(a) {
                    if ("undefined" == typeof a) return X(this);
                    if (!b(a)) throw new TypeError("Array.prototype.sort callback must be a function");
                    return X(this, a)
                }
            }, qa || !sa || !ra);
            var ta = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                ua = function() {}.propertyIsEnumerable("prototype"),
                va = !O("x", "0"),
                wa = function(a) {
                    var b = a.constructor;
                    return b && b.prototype === a
                },
                xa = {
                    $window: !0,
                    $console: !0,
                    $parent: !0,
                    $self: !0,
                    $frame: !0,
                    $frames: !0,
                    $frameElement: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $external: !0
                },
                ya = function() {
                    if ("undefined" == typeof a) return !1;
                    for (var b in a) try {
                        !xa["$" + b] && O(a, b) && null !== a[b] && "object" == typeof a[b] && wa(a[b])
                    } catch (c) {
                        return !0
                    }
                    return !1
                }(),
                za = function(b) {
                    if ("undefined" == typeof a || !ya) return wa(b);
                    try {
                        return wa(b)
                    } catch (c) {
                        return !1
                    }
                },
                Aa = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                Ba = Aa.length,
                Ca = function(a) {
                    return "[object Arguments]" === P(a)
                },
                Da = function(a) {
                    return null !== a && "object" == typeof a && "number" == typeof a.length && a.length >= 0 && !Y(a) && b(a.callee)
                },
                Ea = Ca(arguments) ? Ca : Da;
            J(e, {
                keys: function(a) {
                    var c = b(a),
                        d = Ea(a),
                        e = null !== a && "object" == typeof a,
                        f = e && E(a);
                    if (!e && !c && !d) throw new TypeError("Object.keys called on a non-object");
                    var g = [],
                        i = ua && c;
                    if (f && va || d)
                        for (var j = 0; j < a.length; ++j) V(g, h(j));
                    if (!d)
                        for (var k in a) i && "prototype" === k || !O(a, k) || V(g, h(k));
                    if (ta)
                        for (var l = za(a), m = 0; Ba > m; m++) {
                            var n = Aa[m];
                            l && "constructor" === n || !O(a, n) || V(g, n)
                        }
                    return g
                }
            });
            var Fa = e.keys && function() {
                    return 2 === e.keys(arguments).length
                }(1, 2),
                Ga = e.keys && function() {
                    var a = e.keys(arguments);
                    return 1 !== arguments.length || 1 !== a.length || 1 !== a[0]
                }(1),
                Ha = e.keys;
            J(e, {
                keys: function(a) {
                    return Ha(Ea(a) ? Q(a) : a)
                }
            }, !Fa || Ga);
            var Ia, Ja, Ka = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
                La = new Date(-0x55d318d56a724),
                Ma = new Date(14496624e5),
                Na = "Mon, 01 Jan -45875 11:59:59 GMT" !== La.toUTCString(),
                Oa = La.getTimezoneOffset(); - 720 > Oa ? (Ia = "Tue Jan 02 -45875" !== La.toDateString(), Ja = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ma.toString())) : (Ia = "Mon Jan 01 -45875" !== La.toDateString(), Ja = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ma.toString()));
            var Pa = q.bind(Date.prototype.getFullYear),
                Qa = q.bind(Date.prototype.getMonth),
                Ra = q.bind(Date.prototype.getDate),
                Sa = q.bind(Date.prototype.getUTCFullYear),
                Ta = q.bind(Date.prototype.getUTCMonth),
                Ua = q.bind(Date.prototype.getUTCDate),
                Va = q.bind(Date.prototype.getUTCDay),
                Wa = q.bind(Date.prototype.getUTCHours),
                Xa = q.bind(Date.prototype.getUTCMinutes),
                Ya = q.bind(Date.prototype.getUTCSeconds),
                Za = q.bind(Date.prototype.getUTCMilliseconds),
                $a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                _a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                ab = function(a, b) {
                    return Ra(new Date(b, a, 0))
                };
            J(Date.prototype, {
                getFullYear: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Pa(this);
                    return 0 > a && Qa(this) > 11 ? a + 1 : a
                },
                getMonth: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Pa(this),
                        b = Qa(this);
                    return 0 > a && b > 11 ? 0 : b
                },
                getDate: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Pa(this),
                        b = Qa(this),
                        c = Ra(this);
                    if (0 > a && b > 11) {
                        if (12 === b) return c;
                        var d = ab(0, a + 1);
                        return d - c + 1
                    }
                    return c
                },
                getUTCFullYear: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Sa(this);
                    return 0 > a && Ta(this) > 11 ? a + 1 : a
                },
                getUTCMonth: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Sa(this),
                        b = Ta(this);
                    return 0 > a && b > 11 ? 0 : b
                },
                getUTCDate: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Sa(this),
                        b = Ta(this),
                        c = Ua(this);
                    if (0 > a && b > 11) {
                        if (12 === b) return c;
                        var d = ab(0, a + 1);
                        return d - c + 1
                    }
                    return c
                }
            }, Ka), J(Date.prototype, {
                toUTCString: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = Va(this),
                        b = Ua(this),
                        c = Ta(this),
                        d = Sa(this),
                        e = Wa(this),
                        f = Xa(this),
                        g = Ya(this);
                    return $a[a] + ", " + (10 > b ? "0" + b : b) + " " + _a[c] + " " + d + " " + (10 > e ? "0" + e : e) + ":" + (10 > f ? "0" + f : f) + ":" + (10 > g ? "0" + g : g) + " GMT"
                }
            }, Ka || Na), J(Date.prototype, {
                toDateString: function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var a = this.getDay(),
                        b = this.getDate(),
                        c = this.getMonth(),
                        d = this.getFullYear();
                    return $a[a] + " " + _a[c] + " " + (10 > b ? "0" + b : b) + " " + d
                }
            }, Ka || Ia), (Ka || Ja) && (Date.prototype.toString = function() {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var a = this.getDay(),
                    b = this.getDate(),
                    c = this.getMonth(),
                    d = this.getFullYear(),
                    e = this.getHours(),
                    f = this.getMinutes(),
                    g = this.getSeconds(),
                    h = this.getTimezoneOffset(),
                    i = Math.floor(Math.abs(h) / 60),
                    j = Math.floor(Math.abs(h) % 60);
                return $a[a] + " " + _a[c] + " " + (10 > b ? "0" + b : b) + " " + d + " " + (10 > e ? "0" + e : e) + ":" + (10 > f ? "0" + f : f) + ":" + (10 > g ? "0" + g : g) + " GMT" + (h > 0 ? "-" : "+") + (10 > i ? "0" + i : i) + (10 > j ? "0" + j : j)
            }, I && e.defineProperty(Date.prototype, "toString", {
                configurable: !0,
                enumerable: !1,
                writable: !0
            }));
            var bb = -621987552e5,
                cb = "-000001",
                db = Date.prototype.toISOString && -1 === new Date(bb).toISOString().indexOf(cb),
                eb = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString();
            J(Date.prototype, {
                toISOString: function() {
                    if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                    var a = Sa(this),
                        b = Ta(this);
                    a += Math.floor(b / 12), b = (b % 12 + 12) % 12;
                    var c = [b + 1, Ua(this), Wa(this), Xa(this), Ya(this)];
                    a = (0 > a ? "-" : a > 9999 ? "+" : "") + S("00000" + Math.abs(a), a >= 0 && 9999 >= a ? -4 : -6);
                    for (var d = 0; d < c.length; ++d) c[d] = S("00" + c[d], -2);
                    return a + "-" + Q(c, 0, 2).join("-") + "T" + Q(c, 2).join(":") + "." + S("000" + Za(this), -3) + "Z"
                }
            }, db || eb);
            var fb = function() {
                try {
                    return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(bb).toJSON().indexOf(cb) && Date.prototype.toJSON.call({
                        toISOString: function() {
                            return !0
                        }
                    })
                } catch (a) {
                    return !1
                }
            }();
            fb || (Date.prototype.toJSON = function(a) {
                var c = e(this),
                    d = M.ToPrimitive(c);
                if ("number" == typeof d && !isFinite(d)) return null;
                var f = c.toISOString;
                if (!b(f)) throw new TypeError("toISOString property is not callable");
                return f.call(c)
            });
            var gb = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                hb = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                ib = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
            if (ib || hb || !gb) {
                var jb = Math.pow(2, 31) - 1,
                    kb = L(new Date(1970, 0, 1, 0, 0, 0, jb + 1).getTime());
                Date = function(a) {
                    var b = function(c, d, e, f, g, i, j) {
                            var k, l = arguments.length;
                            if (this instanceof a) {
                                var m = i,
                                    n = j;
                                if (kb && l >= 7 && j > jb) {
                                    var o = Math.floor(j / jb) * jb,
                                        p = Math.floor(o / 1e3);
                                    m += p, n -= 1e3 * p
                                }
                                k = 1 === l && h(c) === c ? new a(b.parse(c)) : l >= 7 ? new a(c, d, e, f, g, m, n) : l >= 6 ? new a(c, d, e, f, g, m) : l >= 5 ? new a(c, d, e, f, g) : l >= 4 ? new a(c, d, e, f) : l >= 3 ? new a(c, d, e) : l >= 2 ? new a(c, d) : l >= 1 ? new a(c) : new a
                            } else k = a.apply(this, arguments);
                            return K(k) || J(k, {
                                constructor: b
                            }, !0), k
                        },
                        c = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                        d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                        e = function(a, b) {
                            var c = b > 1 ? 1 : 0;
                            return d[b] + Math.floor((a - 1969 + c) / 4) - Math.floor((a - 1901 + c) / 100) + Math.floor((a - 1601 + c) / 400) + 365 * (a - 1970)
                        },
                        f = function(b) {
                            var c = 0,
                                d = b;
                            if (kb && d > jb) {
                                var e = Math.floor(d / jb) * jb,
                                    f = Math.floor(e / 1e3);
                                c += f, d -= 1e3 * f
                            }
                            return j(new a(1970, 0, 1, 0, 0, c, d))
                        };
                    for (var g in a) O(a, g) && (b[g] = a[g]);
                    J(b, {
                        now: a.now,
                        UTC: a.UTC
                    }, !0), b.prototype = a.prototype, J(b.prototype, {
                        constructor: b
                    }, !0);
                    var i = function(b) {
                        var d = c.exec(b);
                        if (d) {
                            var g, h = j(d[1]),
                                i = j(d[2] || 1) - 1,
                                k = j(d[3] || 1) - 1,
                                l = j(d[4] || 0),
                                m = j(d[5] || 0),
                                n = j(d[6] || 0),
                                o = Math.floor(1e3 * j(d[7] || 0)),
                                p = Boolean(d[4] && !d[8]),
                                q = "-" === d[9] ? 1 : -1,
                                r = j(d[10] || 0),
                                s = j(d[11] || 0),
                                t = m > 0 || n > 0 || o > 0;
                            return (t ? 24 : 25) > l && 60 > m && 60 > n && 1e3 > o && i > -1 && 12 > i && 24 > r && 60 > s && k > -1 && k < e(h, i + 1) - e(h, i) && (g = 60 * (24 * (e(h, i) + k) + l + r * q), g = 1e3 * (60 * (g + m + s * q) + n) + o, p && (g = f(g)), g >= -864e13 && 864e13 >= g) ? g : NaN
                        }
                        return a.parse.apply(this, arguments)
                    };
                    return J(b, {
                        parse: i
                    }), b
                }(Date)
            }
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            });
            var lb = k.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)),
                mb = {
                    base: 1e7,
                    size: 6,
                    data: [0, 0, 0, 0, 0, 0],
                    multiply: function(a, b) {
                        for (var c = -1, d = b; ++c < mb.size;) d += a * mb.data[c], mb.data[c] = d % mb.base, d = Math.floor(d / mb.base)
                    },
                    divide: function(a) {
                        for (var b = mb.size, c = 0; --b >= 0;) c += mb.data[b], mb.data[b] = Math.floor(c / a), c = c % a * mb.base
                    },
                    numToString: function() {
                        for (var a = mb.size, b = ""; --a >= 0;)
                            if ("" !== b || 0 === a || 0 !== mb.data[a]) {
                                var c = h(mb.data[a]);
                                "" === b ? b = c : b += S("0000000", 0, 7 - c.length) + c
                            } return b
                    },
                    pow: function Gb(a, b, c) {
                        return 0 === b ? c : b % 2 === 1 ? Gb(a, b - 1, c * a) : Gb(a * a, b / 2, c)
                    },
                    log: function(a) {
                        for (var b = 0, c = a; c >= 4096;) b += 12, c /= 4096;
                        for (; c >= 2;) b += 1, c /= 2;
                        return b
                    }
                },
                nb = function(a) {
                    var b, c, d, e, f, g, i, k;
                    if (b = j(a), b = L(b) ? 0 : Math.floor(b), 0 > b || b > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                    if (c = j(this), L(c)) return "NaN";
                    if (-1e21 >= c || c >= 1e21) return h(c);
                    if (d = "", 0 > c && (d = "-", c = -c), e = "0", c > 1e-21)
                        if (f = mb.log(c * mb.pow(2, 69, 1)) - 69, g = 0 > f ? c * mb.pow(2, -f, 1) : c / mb.pow(2, f, 1), g *= 4503599627370496, f = 52 - f, f > 0) {
                            for (mb.multiply(0, g), i = b; i >= 7;) mb.multiply(1e7, 0), i -= 7;
                            for (mb.multiply(mb.pow(10, i, 1), 0), i = f - 1; i >= 23;) mb.divide(1 << 23), i -= 23;
                            mb.divide(1 << i), mb.multiply(1, 1), mb.divide(2), e = mb.numToString()
                        } else mb.multiply(0, g), mb.multiply(1 << -f, 0), e = mb.numToString() + S("0.00000000000000000000", 2, 2 + b);
                    return b > 0 ? (k = e.length, e = b >= k ? d + S("0.0000000000000000000", 0, b - k + 2) + e : d + S(e, 0, k - b) + "." + S(e, k - b)) : e = d + e, e
                };
            J(k, {
                toFixed: nb
            }, lb);
            var ob = function() {
                    try {
                        return "1" === 1..toPrecision(void 0)
                    } catch (a) {
                        return !0
                    }
                }(),
                pb = k.toPrecision;
            J(k, {
                toPrecision: function(a) {
                    return "undefined" == typeof a ? pb.call(this) : pb.call(this, a)
                }
            }, ob), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function() {
                var a = "undefined" == typeof /()??/.exec("")[1],
                    b = Math.pow(2, 32) - 1;
                i.split = function(c, d) {
                    var e = String(this);
                    if ("undefined" == typeof c && 0 === d) return [];
                    if (!A(c)) return T(this, c, d);
                    var f, g, h, i, j = [],
                        k = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (c.sticky ? "y" : ""),
                        l = 0,
                        m = new RegExp(c.source, k + "g");
                    a || (f = new RegExp("^" + m.source + "$(?!\\s)", k));
                    var o = "undefined" == typeof d ? b : M.ToUint32(d);
                    for (g = m.exec(e); g && (h = g.index + g[0].length, !(h > l && (V(j, S(e, l, g.index)), !a && g.length > 1 && g[0].replace(f, function() {
                            for (var a = 1; a < arguments.length - 2; a++) "undefined" == typeof arguments[a] && (g[a] = void 0)
                        }), g.length > 1 && g.index < e.length && n.apply(j, Q(g, 1)), i = g[0].length, l = h, j.length >= o)));) m.lastIndex === g.index && m.lastIndex++, g = m.exec(e);
                    return l === e.length ? (i || !m.test("")) && V(j, "") : V(j, S(e, l)), j.length > o ? S(j, 0, o) : j
                }
            }() : "0".split(void 0, 0).length && (i.split = function(a, b) {
                return "undefined" == typeof a && 0 === b ? [] : T(this, a, b)
            });
            var qb = i.replace,
                rb = function() {
                    var a = [];
                    return "x".replace(/x(.)?/g, function(b, c) {
                        V(a, c)
                    }), 1 === a.length && "undefined" == typeof a[0]
                }();
            rb || (i.replace = function(a, c) {
                var d = b(c),
                    e = A(a) && /\)[*?]/.test(a.source);
                if (d && e) {
                    var f = function(b) {
                        var d = arguments.length,
                            e = a.lastIndex;
                        a.lastIndex = 0;
                        var f = a.exec(b) || [];
                        return a.lastIndex = e, V(f, arguments[d - 2], arguments[d - 1]), c.apply(this, f)
                    };
                    return qb.call(this, a, f)
                }
                return qb.call(this, a, c)
            });
            var sb = i.substr,
                tb = "".substr && "b" !== "0b".substr(-1);
            J(i, {
                substr: function(a, b) {
                    var c = a;
                    return 0 > a && (c = s(this.length + a, 0)), sb.call(this, c, b)
                }
            }, tb);
            var ub = " \n \f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
                vb = "â€‹",
                wb = "[" + ub + "]",
                xb = new RegExp("^" + wb + wb + "*"),
                yb = new RegExp(wb + wb + "*$"),
                zb = i.trim && (ub.trim() || !vb.trim());
            J(i, {
                trim: function() {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    return h(this).replace(xb, "").replace(yb, "")
                }
            }, zb);
            var Ab = q.bind(String.prototype.trim),
                Bb = i.lastIndexOf && -1 !== "abcã‚ã„".lastIndexOf("ã‚ã„", 2);
            J(i, {
                lastIndexOf: function(a) {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    for (var b = h(this), c = h(a), d = arguments.length > 1 ? j(arguments[1]) : NaN, e = L(d) ? 1 / 0 : M.ToInteger(d), f = t(s(e, 0), b.length), g = c.length, i = f + g; i > 0;) {
                        i = s(0, i - g);
                        var k = U(S(b, i, f + g), c);
                        if (-1 !== k) return i + k
                    }
                    return -1
                }
            }, Bb);
            var Cb = i.lastIndexOf;
            if (J(i, {
                    lastIndexOf: function(a) {
                        return Cb.apply(this, arguments)
                    }
                }, 1 !== i.lastIndexOf.length), (8 !== parseInt(ub + "08") || 22 !== parseInt(ub + "0x16")) && (parseInt = function(a) {
                    var b = /^[\-+]?0[xX]/;
                    return function(c, d) {
                        var e = Ab(c),
                            f = j(d) || (b.test(e) ? 16 : 10);
                        return a(e, f)
                    }
                }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function(a) {
                    return function(b) {
                        var c = Ab(b),
                            d = a(c);
                        return 0 === d && "-" === S(c, 0, 1) ? -0 : d
                    }
                }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
                var Db = function() {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    var a = this.name;
                    "undefined" == typeof a ? a = "Error" : "string" != typeof a && (a = h(a));
                    var b = this.message;
                    return "undefined" == typeof b ? b = "" : "string" != typeof b && (b = h(b)), a ? b ? a + ": " + b : a : b
                };
                Error.prototype.toString = Db
            }
            if (I) {
                var Eb = function(a, b) {
                    if (W(a, b)) {
                        var c = Object.getOwnPropertyDescriptor(a, b);
                        c.enumerable = !1, Object.defineProperty(a, b, c)
                    }
                };
                Eb(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Eb(Error.prototype, "name")
            }
            if ("/a/gim" !== String(/a/gim)) {
                var Fb = function() {
                    var a = "/" + this.source + "/";
                    return this.global && (a += "g"), this.ignoreCase && (a += "i"), this.multiline && (a += "m"), a
                };
                RegExp.prototype.toString = Fb
            }
        }),
        function(a, b) {
            "use strict";
            "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.returnExports = b()
        }(this, function() {
            var a, c, d, e, f = Function.call,
                g = Object.prototype,
                h = f.bind(g.hasOwnProperty),
                i = f.bind(g.propertyIsEnumerable),
                j = f.bind(g.toString),
                k = h(g, "__defineGetter__");
            k && (a = f.bind(g.__defineGetter__), c = f.bind(g.__defineSetter__), d = f.bind(g.__lookupGetter__), e = f.bind(g.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function(a) {
                var b = a.__proto__;
                return b || null === b ? b : "[object Function]" === j(a.constructor) ? a.constructor.prototype : a instanceof Object ? g : null
            });
            var l = function(a) {
                try {
                    return a.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(a, "sentinel").value
                } catch (b) {
                    return !1
                }
            };
            if (Object.defineProperty) {
                var m = l({}),
                    n = "undefined" == typeof b || l(b.createElement("div"));
                if (!n || !m) var o = Object.getOwnPropertyDescriptor
            }
            if (!Object.getOwnPropertyDescriptor || o) {
                var p = "Object.getOwnPropertyDescriptor called on a non-object: ";
                Object.getOwnPropertyDescriptor = function(a, b) {
                    if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError(p + a);
                    if (o) try {
                        return o.call(Object, a, b)
                    } catch (c) {}
                    var f;
                    if (!h(a, b)) return f;
                    if (f = {
                            enumerable: i(a, b),
                            configurable: !0
                        }, k) {
                        var j = a.__proto__,
                            l = a !== g;
                        l && (a.__proto__ = g);
                        var m = d(a, b),
                            n = e(a, b);
                        if (l && (a.__proto__ = j), m || n) return m && (f.get = m), n && (f.set = n), f
                    }
                    return f.value = a[b], f.writable = !0, f
                }
            }
            if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(a) {
                    return Object.keys(a)
                }), !Object.create) {
                var q, r = !({
                            __proto__: null
                        }
                        instanceof Object),
                    s = function() {
                        if (!b.domain) return !1;
                        try {
                            return !!new ActiveXObject("htmlfile")
                        } catch (a) {
                            return !1
                        }
                    },
                    t = function() {
                        var a, b;
                        return b = new ActiveXObject("htmlfile"), b.write("<script></script>"), b.close(), a = b.parentWindow.Object.prototype, b = null, a
                    },
                    u = function() {
                        var a, c = b.createElement("iframe"),
                            d = b.body || b.documentElement;
                        return c.style.display = "none", d.appendChild(c), c.src = "javascript:", a = c.contentWindow.Object.prototype, d.removeChild(c), c = null, a
                    };
                q = r || "undefined" == typeof b ? function() {
                    return {
                        __proto__: null
                    }
                } : function() {
                    var a = s() ? t() : u();
                    delete a.constructor, delete a.hasOwnProperty, delete a.propertyIsEnumerable, delete a.isPrototypeOf, delete a.toLocaleString, delete a.toString, delete a.valueOf;
                    var b = function() {};
                    return b.prototype = a, q = function() {
                        return new b
                    }, new b
                }, Object.create = function(a, b) {
                    var c, d = function() {};
                    if (null === a) c = q();
                    else {
                        if ("object" != typeof a && "function" != typeof a) throw new TypeError("Object prototype may only be an Object or null");
                        d.prototype = a, c = new d, c.__proto__ = a
                    }
                    return void 0 !== b && Object.defineProperties(c, b), c
                }
            }
            var v = function(a) {
                try {
                    return Object.defineProperty(a, "sentinel", {}), "sentinel" in a
                } catch (b) {
                    return !1
                }
            };
            if (Object.defineProperty) {
                var w = v({}),
                    x = "undefined" == typeof b || v(b.createElement("div"));
                if (!w || !x) var y = Object.defineProperty,
                    z = Object.defineProperties
            }
            if (!Object.defineProperty || y) {
                var A = "Property description must be an object: ",
                    B = "Object.defineProperty called on non-object: ",
                    C = "getters & setters can not be defined on this javascript engine";
                Object.defineProperty = function(b, f, h) {
                    if ("object" != typeof b && "function" != typeof b || null === b) throw new TypeError(B + b);
                    if ("object" != typeof h && "function" != typeof h || null === h) throw new TypeError(A + h);
                    if (y) try {
                        return y.call(Object, b, f, h)
                    } catch (i) {}
                    if ("value" in h)
                        if (k && (d(b, f) || e(b, f))) {
                            var j = b.__proto__;
                            b.__proto__ = g, delete b[f], b[f] = h.value, b.__proto__ = j
                        } else b[f] = h.value;
                    else {
                        if (!k && ("get" in h || "set" in h)) throw new TypeError(C);
                        "get" in h && a(b, f, h.get), "set" in h && c(b, f, h.set)
                    }
                    return b
                }
            }(!Object.defineProperties || z) && (Object.defineProperties = function(a, b) {
                if (z) try {
                    return z.call(Object, a, b)
                } catch (c) {}
                return Object.keys(b).forEach(function(c) {
                    "__proto__" !== c && Object.defineProperty(a, c, b[c])
                }), a
            }), Object.seal || (Object.seal = function(a) {
                if (Object(a) !== a) throw new TypeError("Object.seal can only be called on Objects.");
                return a
            }), Object.freeze || (Object.freeze = function(a) {
                if (Object(a) !== a) throw new TypeError("Object.freeze can only be called on Objects.");
                return a
            });
            try {
                Object.freeze(function() {})
            } catch (D) {
                Object.freeze = function(a) {
                    return function(b) {
                        return "function" == typeof b ? b : a(b)
                    }
                }(Object.freeze)
            }
            Object.preventExtensions || (Object.preventExtensions = function(a) {
                if (Object(a) !== a) throw new TypeError("Object.preventExtensions can only be called on Objects.");
                return a
            }), Object.isSealed || (Object.isSealed = function(a) {
                if (Object(a) !== a) throw new TypeError("Object.isSealed can only be called on Objects.");
                return !1
            }), Object.isFrozen || (Object.isFrozen = function(a) {
                if (Object(a) !== a) throw new TypeError("Object.isFrozen can only be called on Objects.");
                return !1
            }), Object.isExtensible || (Object.isExtensible = function(a) {
                if (Object(a) !== a) throw new TypeError("Object.isExtensible can only be called on Objects.");
                for (var b = ""; h(a, b);) b += "?";
                a[b] = !0;
                var c = h(a, b);
                return delete a[b], c
            })
        })
}(window, document);
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.videojs = f()
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function(_dereq_, module, exports) {
            (function(global) {
                var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {}
                var minDoc = _dereq_('min-document');
                if (typeof document !== 'undefined') {
                    module.exports = document;
                } else {
                    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
                    if (!doccy) {
                        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
                    }
                    module.exports = doccy;
                }
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {
            "min-document": 3
        }],
        2: [function(_dereq_, module, exports) {
            (function(global) {
                if (typeof window !== "undefined") {
                    module.exports = window;
                } else if (typeof global !== "undefined") {
                    module.exports = global;
                } else if (typeof self !== "undefined") {
                    module.exports = self;
                } else {
                    module.exports = {};
                }
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        3: [function(_dereq_, module, exports) {}, {}],
        4: [function(_dereq_, module, exports) {
            var getNative = _dereq_('../internal/getNative');
            var nativeNow = getNative(Date, 'now');
            var now = nativeNow || function() {
                return new Date().getTime();
            };
            module.exports = now;
        }, {
            "../internal/getNative": 20
        }],
        5: [function(_dereq_, module, exports) {
            var isObject = _dereq_('../lang/isObject'),
                now = _dereq_('../date/now');
            var FUNC_ERROR_TEXT = 'Expected a function';
            var nativeMax = Math.max;

            function debounce(func, wait, options) {
                var args, maxTimeoutId, result, stamp, thisArg, timeoutId, trailingCall, lastCalled = 0,
                    maxWait = false,
                    trailing = true;
                if (typeof func != 'function') {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
                wait = wait < 0 ? 0 : (+wait || 0);
                if (options === true) {
                    var leading = true;
                    trailing = false;
                } else if (isObject(options)) {
                    leading = !!options.leading;
                    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
                    trailing = 'trailing' in options ? !!options.trailing : trailing;
                }

                function cancel() {
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    if (maxTimeoutId) {
                        clearTimeout(maxTimeoutId);
                    }
                    lastCalled = 0;
                    maxTimeoutId = timeoutId = trailingCall = undefined;
                }

                function complete(isCalled, id) {
                    if (id) {
                        clearTimeout(id);
                    }
                    maxTimeoutId = timeoutId = trailingCall = undefined;
                    if (isCalled) {
                        lastCalled = now();
                        result = func.apply(thisArg, args);
                        if (!timeoutId && !maxTimeoutId) {
                            args = thisArg = undefined;
                        }
                    }
                }

                function delayed() {
                    var remaining = wait - (now() - stamp);
                    if (remaining <= 0 || remaining > wait) {
                        complete(trailingCall, maxTimeoutId);
                    } else {
                        timeoutId = setTimeout(delayed, remaining);
                    }
                }

                function maxDelayed() {
                    complete(trailing, timeoutId);
                }

                function debounced() {
                    args = arguments;
                    stamp = now();
                    thisArg = this;
                    trailingCall = trailing && (timeoutId || !leading);
                    if (maxWait === false) {
                        var leadingCall = leading && !timeoutId;
                    } else {
                        if (!maxTimeoutId && !leading) {
                            lastCalled = stamp;
                        }
                        var remaining = maxWait - (stamp - lastCalled),
                            isCalled = remaining <= 0 || remaining > maxWait;
                        if (isCalled) {
                            if (maxTimeoutId) {
                                maxTimeoutId = clearTimeout(maxTimeoutId);
                            }
                            lastCalled = stamp;
                            result = func.apply(thisArg, args);
                        } else if (!maxTimeoutId) {
                            maxTimeoutId = setTimeout(maxDelayed, remaining);
                        }
                    }
                    if (isCalled && timeoutId) {
                        timeoutId = clearTimeout(timeoutId);
                    } else if (!timeoutId && wait !== maxWait) {
                        timeoutId = setTimeout(delayed, wait);
                    }
                    if (leadingCall) {
                        isCalled = true;
                        result = func.apply(thisArg, args);
                    }
                    if (isCalled && !timeoutId && !maxTimeoutId) {
                        args = thisArg = undefined;
                    }
                    return result;
                }
                debounced.cancel = cancel;
                return debounced;
            }
            module.exports = debounce;
        }, {
            "../date/now": 4,
            "../lang/isObject": 33
        }],
        6: [function(_dereq_, module, exports) {
            var FUNC_ERROR_TEXT = 'Expected a function';
            var nativeMax = Math.max;

            function restParam(func, start) {
                if (typeof func != 'function') {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
                start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
                return function() {
                    var args = arguments,
                        index = -1,
                        length = nativeMax(args.length - start, 0),
                        rest = Array(length);
                    while (++index < length) {
                        rest[index] = args[start + index];
                    }
                    switch (start) {
                        case 0:
                            return func.call(this, rest);
                        case 1:
                            return func.call(this, args[0], rest);
                        case 2:
                            return func.call(this, args[0], args[1], rest);
                    }
                    var otherArgs = Array(start + 1);
                    index = -1;
                    while (++index < start) {
                        otherArgs[index] = args[index];
                    }
                    otherArgs[start] = rest;
                    return func.apply(this, otherArgs);
                };
            }
            module.exports = restParam;
        }, {}],
        7: [function(_dereq_, module, exports) {
            var debounce = _dereq_('./debounce'),
                isObject = _dereq_('../lang/isObject');
            var FUNC_ERROR_TEXT = 'Expected a function';

            function throttle(func, wait, options) {
                var leading = true,
                    trailing = true;
                if (typeof func != 'function') {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
                if (options === false) {
                    leading = false;
                } else if (isObject(options)) {
                    leading = 'leading' in options ? !!options.leading : leading;
                    trailing = 'trailing' in options ? !!options.trailing : trailing;
                }
                return debounce(func, wait, {
                    'leading': leading,
                    'maxWait': +wait,
                    'trailing': trailing
                });
            }
            module.exports = throttle;
        }, {
            "../lang/isObject": 33,
            "./debounce": 5
        }],
        8: [function(_dereq_, module, exports) {
            function arrayCopy(source, array) {
                var index = -1,
                    length = source.length;
                array || (array = Array(length));
                while (++index < length) {
                    array[index] = source[index];
                }
                return array;
            }
            module.exports = arrayCopy;
        }, {}],
        9: [function(_dereq_, module, exports) {
            function arrayEach(array, iteratee) {
                var index = -1,
                    length = array.length;
                while (++index < length) {
                    if (iteratee(array[index], index, array) === false) {
                        break;
                    }
                }
                return array;
            }
            module.exports = arrayEach;
        }, {}],
        10: [function(_dereq_, module, exports) {
            function baseCopy(source, props, object) {
                object || (object = {});
                var index = -1,
                    length = props.length;
                while (++index < length) {
                    var key = props[index];
                    object[key] = source[key];
                }
                return object;
            }
            module.exports = baseCopy;
        }, {}],
        11: [function(_dereq_, module, exports) {
            var createBaseFor = _dereq_('./createBaseFor');
            var baseFor = createBaseFor();
            module.exports = baseFor;
        }, {
            "./createBaseFor": 18
        }],
        12: [function(_dereq_, module, exports) {
            var baseFor = _dereq_('./baseFor'),
                keysIn = _dereq_('../object/keysIn');

            function baseForIn(object, iteratee) {
                return baseFor(object, iteratee, keysIn);
            }
            module.exports = baseForIn;
        }, {
            "../object/keysIn": 39,
            "./baseFor": 11
        }],
        13: [function(_dereq_, module, exports) {
            var arrayEach = _dereq_('./arrayEach'),
                baseMergeDeep = _dereq_('./baseMergeDeep'),
                isArray = _dereq_('../lang/isArray'),
                isArrayLike = _dereq_('./isArrayLike'),
                isObject = _dereq_('../lang/isObject'),
                isObjectLike = _dereq_('./isObjectLike'),
                isTypedArray = _dereq_('../lang/isTypedArray'),
                keys = _dereq_('../object/keys');

            function baseMerge(object, source, customizer, stackA, stackB) {
                if (!isObject(object)) {
                    return object;
                }
                var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
                    props = isSrcArr ? undefined : keys(source);
                arrayEach(props || source, function(srcValue, key) {
                    if (props) {
                        key = srcValue;
                        srcValue = source[key];
                    }
                    if (isObjectLike(srcValue)) {
                        stackA || (stackA = []);
                        stackB || (stackB = []);
                        baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
                    } else {
                        var value = object[key],
                            result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                            isCommon = result === undefined;
                        if (isCommon) {
                            result = srcValue;
                        }
                        if ((result !== undefined || (isSrcArr && !(key in object))) && (isCommon || (result === result ? (result !== value) : (value === value)))) {
                            object[key] = result;
                        }
                    }
                });
                return object;
            }
            module.exports = baseMerge;
        }, {
            "../lang/isArray": 30,
            "../lang/isObject": 33,
            "../lang/isTypedArray": 36,
            "../object/keys": 38,
            "./arrayEach": 9,
            "./baseMergeDeep": 14,
            "./isArrayLike": 21,
            "./isObjectLike": 26
        }],
        14: [function(_dereq_, module, exports) {
            var arrayCopy = _dereq_('./arrayCopy'),
                isArguments = _dereq_('../lang/isArguments'),
                isArray = _dereq_('../lang/isArray'),
                isArrayLike = _dereq_('./isArrayLike'),
                isPlainObject = _dereq_('../lang/isPlainObject'),
                isTypedArray = _dereq_('../lang/isTypedArray'),
                toPlainObject = _dereq_('../lang/toPlainObject');

            function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
                var length = stackA.length,
                    srcValue = source[key];
                while (length--) {
                    if (stackA[length] == srcValue) {
                        object[key] = stackB[length];
                        return;
                    }
                }
                var value = object[key],
                    result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                    isCommon = result === undefined;
                if (isCommon) {
                    result = srcValue;
                    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
                        result = isArray(value) ? value : (isArrayLike(value) ? arrayCopy(value) : []);
                    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                        result = isArguments(value) ? toPlainObject(value) : (isPlainObject(value) ? value : {});
                    } else {
                        isCommon = false;
                    }
                }
                stackA.push(srcValue);
                stackB.push(result);
                if (isCommon) {
                    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
                } else if (result === result ? (result !== value) : (value === value)) {
                    object[key] = result;
                }
            }
            module.exports = baseMergeDeep;
        }, {
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isPlainObject": 34,
            "../lang/isTypedArray": 36,
            "../lang/toPlainObject": 37,
            "./arrayCopy": 8,
            "./isArrayLike": 21
        }],
        15: [function(_dereq_, module, exports) {
            var toObject = _dereq_('./toObject');

            function baseProperty(key) {
                return function(object) {
                    return object == null ? undefined : toObject(object)[key];
                };
            }
            module.exports = baseProperty;
        }, {
            "./toObject": 28
        }],
        16: [function(_dereq_, module, exports) {
            var identity = _dereq_('../utility/identity');

            function bindCallback(func, thisArg, argCount) {
                if (typeof func != 'function') {
                    return identity;
                }
                if (thisArg === undefined) {
                    return func;
                }
                switch (argCount) {
                    case 1:
                        return function(value) {
                            return func.call(thisArg, value);
                        };
                    case 3:
                        return function(value, index, collection) {
                            return func.call(thisArg, value, index, collection);
                        };
                    case 4:
                        return function(accumulator, value, index, collection) {
                            return func.call(thisArg, accumulator, value, index, collection);
                        };
                    case 5:
                        return function(value, other, key, object, source) {
                            return func.call(thisArg, value, other, key, object, source);
                        };
                }
                return function() {
                    return func.apply(thisArg, arguments);
                };
            }
            module.exports = bindCallback;
        }, {
            "../utility/identity": 42
        }],
        17: [function(_dereq_, module, exports) {
            var bindCallback = _dereq_('./bindCallback'),
                isIterateeCall = _dereq_('./isIterateeCall'),
                restParam = _dereq_('../function/restParam');

            function createAssigner(assigner) {
                return restParam(function(object, sources) {
                    var index = -1,
                        length = object == null ? 0 : sources.length,
                        customizer = length > 2 ? sources[length - 2] : undefined,
                        guard = length > 2 ? sources[2] : undefined,
                        thisArg = length > 1 ? sources[length - 1] : undefined;
                    if (typeof customizer == 'function') {
                        customizer = bindCallback(customizer, thisArg, 5);
                        length -= 2;
                    } else {
                        customizer = typeof thisArg == 'function' ? thisArg : undefined;
                        length -= (customizer ? 1 : 0);
                    }
                    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                        customizer = length < 3 ? undefined : customizer;
                        length = 1;
                    }
                    while (++index < length) {
                        var source = sources[index];
                        if (source) {
                            assigner(object, source, customizer);
                        }
                    }
                    return object;
                });
            }
            module.exports = createAssigner;
        }, {
            "../function/restParam": 6,
            "./bindCallback": 16,
            "./isIterateeCall": 24
        }],
        18: [function(_dereq_, module, exports) {
            var toObject = _dereq_('./toObject');

            function createBaseFor(fromRight) {
                return function(object, iteratee, keysFunc) {
                    var iterable = toObject(object),
                        props = keysFunc(object),
                        length = props.length,
                        index = fromRight ? length : -1;
                    while ((fromRight ? index-- : ++index < length)) {
                        var key = props[index];
                        if (iteratee(iterable[key], key, iterable) === false) {
                            break;
                        }
                    }
                    return object;
                };
            }
            module.exports = createBaseFor;
        }, {
            "./toObject": 28
        }],
        19: [function(_dereq_, module, exports) {
            var baseProperty = _dereq_('./baseProperty');
            var getLength = baseProperty('length');
            module.exports = getLength;
        }, {
            "./baseProperty": 15
        }],
        20: [function(_dereq_, module, exports) {
            var isNative = _dereq_('../lang/isNative');

            function getNative(object, key) {
                var value = object == null ? undefined : object[key];
                return isNative(value) ? value : undefined;
            }
            module.exports = getNative;
        }, {
            "../lang/isNative": 32
        }],
        21: [function(_dereq_, module, exports) {
            var getLength = _dereq_('./getLength'),
                isLength = _dereq_('./isLength');

            function isArrayLike(value) {
                return value != null && isLength(getLength(value));
            }
            module.exports = isArrayLike;
        }, {
            "./getLength": 19,
            "./isLength": 25
        }],
        22: [function(_dereq_, module, exports) {
            var isHostObject = (function() {
                try {
                    Object({
                        'toString': 0
                    } + '');
                } catch (e) {
                    return function() {
                        return false;
                    };
                }
                return function(value) {
                    return typeof value.toString != 'function' && typeof(value + '') == 'string';
                };
            }());
            module.exports = isHostObject;
        }, {}],
        23: [function(_dereq_, module, exports) {
            var reIsUint = /^\d+$/;
            var MAX_SAFE_INTEGER = 9007199254740991;

            function isIndex(value, length) {
                value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
                length = length == null ? MAX_SAFE_INTEGER : length;
                return value > -1 && value % 1 == 0 && value < length;
            }
            module.exports = isIndex;
        }, {}],
        24: [function(_dereq_, module, exports) {
            var isArrayLike = _dereq_('./isArrayLike'),
                isIndex = _dereq_('./isIndex'),
                isObject = _dereq_('../lang/isObject');

            function isIterateeCall(value, index, object) {
                if (!isObject(object)) {
                    return false;
                }
                var type = typeof index;
                if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
                    var other = object[index];
                    return value === value ? (value === other) : (other !== other);
                }
                return false;
            }
            module.exports = isIterateeCall;
        }, {
            "../lang/isObject": 33,
            "./isArrayLike": 21,
            "./isIndex": 23
        }],
        25: [function(_dereq_, module, exports) {
            var MAX_SAFE_INTEGER = 9007199254740991;

            function isLength(value) {
                return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
            }
            module.exports = isLength;
        }, {}],
        26: [function(_dereq_, module, exports) {
            function isObjectLike(value) {
                return !!value && typeof value == 'object';
            }
            module.exports = isObjectLike;
        }, {}],
        27: [function(_dereq_, module, exports) {
            var isArguments = _dereq_('../lang/isArguments'),
                isArray = _dereq_('../lang/isArray'),
                isIndex = _dereq_('./isIndex'),
                isLength = _dereq_('./isLength'),
                isString = _dereq_('../lang/isString'),
                keysIn = _dereq_('../object/keysIn');
            var objectProto = Object.prototype;
            var hasOwnProperty = objectProto.hasOwnProperty;

            function shimKeys(object) {
                var props = keysIn(object),
                    propsLength = props.length,
                    length = propsLength && object.length;
                var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object) || isString(object));
                var index = -1,
                    result = [];
                while (++index < propsLength) {
                    var key = props[index];
                    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
                        result.push(key);
                    }
                }
                return result;
            }
            module.exports = shimKeys;
        }, {
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isString": 35,
            "../object/keysIn": 39,
            "./isIndex": 23,
            "./isLength": 25
        }],
        28: [function(_dereq_, module, exports) {
            var isObject = _dereq_('../lang/isObject'),
                isString = _dereq_('../lang/isString'),
                support = _dereq_('../support');

            function toObject(value) {
                if (support.unindexedChars && isString(value)) {
                    var index = -1,
                        length = value.length,
                        result = Object(value);
                    while (++index < length) {
                        result[index] = value.charAt(index);
                    }
                    return result;
                }
                return isObject(value) ? value : Object(value);
            }
            module.exports = toObject;
        }, {
            "../lang/isObject": 33,
            "../lang/isString": 35,
            "../support": 41
        }],
        29: [function(_dereq_, module, exports) {
            var isArrayLike = _dereq_('../internal/isArrayLike'),
                isObjectLike = _dereq_('../internal/isObjectLike');
            var objectProto = Object.prototype;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var propertyIsEnumerable = objectProto.propertyIsEnumerable;

            function isArguments(value) {
                return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
            }
            module.exports = isArguments;
        }, {
            "../internal/isArrayLike": 21,
            "../internal/isObjectLike": 26
        }],
        30: [function(_dereq_, module, exports) {
            var getNative = _dereq_('../internal/getNative'),
                isLength = _dereq_('../internal/isLength'),
                isObjectLike = _dereq_('../internal/isObjectLike');
            var arrayTag = '[object Array]';
            var objectProto = Object.prototype;
            var objToString = objectProto.toString;
            var nativeIsArray = getNative(Array, 'isArray');
            var isArray = nativeIsArray || function(value) {
                return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
            };
            module.exports = isArray;
        }, {
            "../internal/getNative": 20,
            "../internal/isLength": 25,
            "../internal/isObjectLike": 26
        }],
        31: [function(_dereq_, module, exports) {
            var isObject = _dereq_('./isObject');
            var funcTag = '[object Function]';
            var objectProto = Object.prototype;
            var objToString = objectProto.toString;

            function isFunction(value) {
                return isObject(value) && objToString.call(value) == funcTag;
            }
            module.exports = isFunction;
        }, {
            "./isObject": 33
        }],
        32: [function(_dereq_, module, exports) {
            var isFunction = _dereq_('./isFunction'),
                isHostObject = _dereq_('../internal/isHostObject'),
                isObjectLike = _dereq_('../internal/isObjectLike');
            var reIsHostCtor = /^\[object .+?Constructor\]$/;
            var objectProto = Object.prototype;
            var fnToString = Function.prototype.toString;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

            function isNative(value) {
                if (value == null) {
                    return false;
                }
                if (isFunction(value)) {
                    return reIsNative.test(fnToString.call(value));
                }
                return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
            }
            module.exports = isNative;
        }, {
            "../internal/isHostObject": 22,
            "../internal/isObjectLike": 26,
            "./isFunction": 31
        }],
        33: [function(_dereq_, module, exports) {
            function isObject(value) {
                var type = typeof value;
                return !!value && (type == 'object' || type == 'function');
            }
            module.exports = isObject;
        }, {}],
        34: [function(_dereq_, module, exports) {
            var baseForIn = _dereq_('../internal/baseForIn'),
                isArguments = _dereq_('./isArguments'),
                isHostObject = _dereq_('../internal/isHostObject'),
                isObjectLike = _dereq_('../internal/isObjectLike'),
                support = _dereq_('../support');
            var objectTag = '[object Object]';
            var objectProto = Object.prototype;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var objToString = objectProto.toString;

            function isPlainObject(value) {
                var Ctor;
                if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) || (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
                    return false;
                }
                var result;
                if (support.ownLast) {
                    baseForIn(value, function(subValue, key, object) {
                        result = hasOwnProperty.call(object, key);
                        return false;
                    });
                    return result !== false;
                }
                baseForIn(value, function(subValue, key) {
                    result = key;
                });
                return result === undefined || hasOwnProperty.call(value, result);
            }
            module.exports = isPlainObject;
        }, {
            "../internal/baseForIn": 12,
            "../internal/isHostObject": 22,
            "../internal/isObjectLike": 26,
            "../support": 41,
            "./isArguments": 29
        }],
        35: [function(_dereq_, module, exports) {
            var isObjectLike = _dereq_('../internal/isObjectLike');
            var stringTag = '[object String]';
            var objectProto = Object.prototype;
            var objToString = objectProto.toString;

            function isString(value) {
                return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
            }
            module.exports = isString;
        }, {
            "../internal/isObjectLike": 26
        }],
        36: [function(_dereq_, module, exports) {
            var isLength = _dereq_('../internal/isLength'),
                isObjectLike = _dereq_('../internal/isObjectLike');
            var argsTag = '[object Arguments]',
                arrayTag = '[object Array]',
                boolTag = '[object Boolean]',
                dateTag = '[object Date]',
                errorTag = '[object Error]',
                funcTag = '[object Function]',
                mapTag = '[object Map]',
                numberTag = '[object Number]',
                objectTag = '[object Object]',
                regexpTag = '[object RegExp]',
                setTag = '[object Set]',
                stringTag = '[object String]',
                weakMapTag = '[object WeakMap]';
            var arrayBufferTag = '[object ArrayBuffer]',
                float32Tag = '[object Float32Array]',
                float64Tag = '[object Float64Array]',
                int8Tag = '[object Int8Array]',
                int16Tag = '[object Int16Array]',
                int32Tag = '[object Int32Array]',
                uint8Tag = '[object Uint8Array]',
                uint8ClampedTag = '[object Uint8ClampedArray]',
                uint16Tag = '[object Uint16Array]',
                uint32Tag = '[object Uint32Array]';
            var typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
            var objectProto = Object.prototype;
            var objToString = objectProto.toString;

            function isTypedArray(value) {
                return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
            }
            module.exports = isTypedArray;
        }, {
            "../internal/isLength": 25,
            "../internal/isObjectLike": 26
        }],
        37: [function(_dereq_, module, exports) {
            var baseCopy = _dereq_('../internal/baseCopy'),
                keysIn = _dereq_('../object/keysIn');

            function toPlainObject(value) {
                return baseCopy(value, keysIn(value));
            }
            module.exports = toPlainObject;
        }, {
            "../internal/baseCopy": 10,
            "../object/keysIn": 39
        }],
        38: [function(_dereq_, module, exports) {
            var getNative = _dereq_('../internal/getNative'),
                isArrayLike = _dereq_('../internal/isArrayLike'),
                isObject = _dereq_('../lang/isObject'),
                shimKeys = _dereq_('../internal/shimKeys'),
                support = _dereq_('../support');
            var nativeKeys = getNative(Object, 'keys');
            var keys = !nativeKeys ? shimKeys : function(object) {
                var Ctor = object == null ? undefined : object.constructor;
                if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
                    return shimKeys(object);
                }
                return isObject(object) ? nativeKeys(object) : [];
            };
            module.exports = keys;
        }, {
            "../internal/getNative": 20,
            "../internal/isArrayLike": 21,
            "../internal/shimKeys": 27,
            "../lang/isObject": 33,
            "../support": 41
        }],
        39: [function(_dereq_, module, exports) {
            var arrayEach = _dereq_('../internal/arrayEach'),
                isArguments = _dereq_('../lang/isArguments'),
                isArray = _dereq_('../lang/isArray'),
                isFunction = _dereq_('../lang/isFunction'),
                isIndex = _dereq_('../internal/isIndex'),
                isLength = _dereq_('../internal/isLength'),
                isObject = _dereq_('../lang/isObject'),
                isString = _dereq_('../lang/isString'),
                support = _dereq_('../support');
            var arrayTag = '[object Array]',
                boolTag = '[object Boolean]',
                dateTag = '[object Date]',
                errorTag = '[object Error]',
                funcTag = '[object Function]',
                numberTag = '[object Number]',
                objectTag = '[object Object]',
                regexpTag = '[object RegExp]',
                stringTag = '[object String]';
            var shadowProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
            var errorProto = Error.prototype,
                objectProto = Object.prototype,
                stringProto = String.prototype;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var objToString = objectProto.toString;
            var nonEnumProps = {};
            nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = {
                'constructor': true,
                'toLocaleString': true,
                'toString': true,
                'valueOf': true
            };
            nonEnumProps[boolTag] = nonEnumProps[stringTag] = {
                'constructor': true,
                'toString': true,
                'valueOf': true
            };
            nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = {
                'constructor': true,
                'toString': true
            };
            nonEnumProps[objectTag] = {
                'constructor': true
            };
            arrayEach(shadowProps, function(key) {
                for (var tag in nonEnumProps) {
                    if (hasOwnProperty.call(nonEnumProps, tag)) {
                        var props = nonEnumProps[tag];
                        props[key] = hasOwnProperty.call(props, key);
                    }
                }
            });

            function keysIn(object) {
                if (object == null) {
                    return [];
                }
                if (!isObject(object)) {
                    object = Object(object);
                }
                var length = object.length;
                length = (length && isLength(length) && (isArray(object) || isArguments(object) || isString(object)) && length) || 0;
                var Ctor = object.constructor,
                    index = -1,
                    proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
                    isProto = proto === object,
                    result = Array(length),
                    skipIndexes = length > 0,
                    skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
                    skipProto = support.enumPrototypes && isFunction(object);
                while (++index < length) {
                    result[index] = (index + '');
                }
                for (var key in object) {
                    if (!(skipProto && key == 'prototype') && !(skipErrorProps && (key == 'message' || key == 'name')) && !(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                        result.push(key);
                    }
                }
                if (support.nonEnumShadows && object !== objectProto) {
                    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
                        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];
                    if (tag == objectTag) {
                        proto = objectProto;
                    }
                    length = shadowProps.length;
                    while (length--) {
                        key = shadowProps[length];
                        var nonEnum = nonEnums[key];
                        if (!(isProto && nonEnum) && (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
                            result.push(key);
                        }
                    }
                }
                return result;
            }
            module.exports = keysIn;
        }, {
            "../internal/arrayEach": 9,
            "../internal/isIndex": 23,
            "../internal/isLength": 25,
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isFunction": 31,
            "../lang/isObject": 33,
            "../lang/isString": 35,
            "../support": 41
        }],
        40: [function(_dereq_, module, exports) {
            var baseMerge = _dereq_('../internal/baseMerge'),
                createAssigner = _dereq_('../internal/createAssigner');
            var merge = createAssigner(baseMerge);
            module.exports = merge;
        }, {
            "../internal/baseMerge": 13,
            "../internal/createAssigner": 17
        }],
        41: [function(_dereq_, module, exports) {
            var arrayProto = Array.prototype,
                errorProto = Error.prototype,
                objectProto = Object.prototype;
            var propertyIsEnumerable = objectProto.propertyIsEnumerable,
                splice = arrayProto.splice;
            var support = {};
            (function(x) {
                var Ctor = function() {
                        this.x = x;
                    },
                    object = {
                        '0': x,
                        'length': x
                    },
                    props = [];
                Ctor.prototype = {
                    'valueOf': x,
                    'y': x
                };
                for (var key in new Ctor) {
                    props.push(key);
                }
                support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
                support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');
                support.nonEnumShadows = !/valueOf/.test(props);
                support.ownLast = props[0] != 'x';
                support.spliceObjects = (splice.call(object, 0, 1), !object[0]);
                support.unindexedChars = ('x' [0] + Object('x')[0]) != 'xx';
            }(1, 0));
            module.exports = support;
        }, {}],
        42: [function(_dereq_, module, exports) {
            function identity(value) {
                return value;
            }
            module.exports = identity;
        }, {}],
        43: [function(_dereq_, module, exports) {
            'use strict';
            var keys = _dereq_('object-keys');
            module.exports = function hasSymbols() {
                if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
                    return false;
                }
                if (typeof Symbol.iterator === 'symbol') {
                    return true;
                }
                var obj = {};
                var sym = Symbol('test');
                if (typeof sym === 'string') {
                    return false;
                }
                var symVal = 42;
                obj[sym] = symVal;
                for (sym in obj) {
                    return false;
                }
                if (keys(obj).length !== 0) {
                    return false;
                }
                if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
                    return false;
                }
                var syms = Object.getOwnPropertySymbols(obj);
                if (syms.length !== 1 || syms[0] !== sym) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === 'function') {
                    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
                    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        }, {
            "object-keys": 49
        }],
        44: [function(_dereq_, module, exports) {
            'use strict';
            var keys = _dereq_('object-keys');
            var bind = _dereq_('function-bind');
            var canBeObject = function(obj) {
                return typeof obj !== 'undefined' && obj !== null;
            };
            var hasSymbols = _dereq_('./hasSymbols')();
            var toObject = Object;
            var push = bind.call(Function.call, Array.prototype.push);
            var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
            module.exports = function assign(target, source1) {
                if (!canBeObject(target)) {
                    throw new TypeError('target must be an object');
                }
                var objTarget = toObject(target);
                var s, source, i, props, syms, value, key;
                for (s = 1; s < arguments.length; ++s) {
                    source = toObject(arguments[s]);
                    props = keys(source);
                    if (hasSymbols && Object.getOwnPropertySymbols) {
                        syms = Object.getOwnPropertySymbols(source);
                        for (i = 0; i < syms.length; ++i) {
                            key = syms[i];
                            if (propIsEnumerable(source, key)) {
                                push(props, key);
                            }
                        }
                    }
                    for (i = 0; i < props.length; ++i) {
                        key = props[i];
                        value = source[key];
                        if (propIsEnumerable(source, key)) {
                            objTarget[key] = value;
                        }
                    }
                }
                return objTarget;
            };
        }, {
            "./hasSymbols": 43,
            "function-bind": 48,
            "object-keys": 49
        }],
        45: [function(_dereq_, module, exports) {
            'use strict';
            var defineProperties = _dereq_('define-properties');
            var implementation = _dereq_('./implementation');
            var getPolyfill = _dereq_('./polyfill');
            var shim = _dereq_('./shim');
            defineProperties(implementation, {
                implementation: implementation,
                getPolyfill: getPolyfill,
                shim: shim
            });
            module.exports = implementation;
        }, {
            "./implementation": 44,
            "./polyfill": 51,
            "./shim": 52,
            "define-properties": 46
        }],
        46: [function(_dereq_, module, exports) {
            'use strict';
            var keys = _dereq_('object-keys');
            var foreach = _dereq_('foreach');
            var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
            var toStr = Object.prototype.toString;
            var isFunction = function(fn) {
                return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
            };
            var arePropertyDescriptorsSupported = function() {
                var obj = {};
                try {
                    Object.defineProperty(obj, 'x', {
                        enumerable: false,
                        value: obj
                    });
                    for (var _ in obj) {
                        return false;
                    }
                    return obj.x === obj;
                } catch (e) {
                    return false;
                }
            };
            var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
            var defineProperty = function(object, name, value, predicate) {
                if (name in object && (!isFunction(predicate) || !predicate())) {
                    return;
                }
                if (supportsDescriptors) {
                    Object.defineProperty(object, name, {
                        configurable: true,
                        enumerable: false,
                        value: value,
                        writable: true
                    });
                } else {
                    object[name] = value;
                }
            };
            var defineProperties = function(object, map) {
                var predicates = arguments.length > 2 ? arguments[2] : {};
                var props = keys(map);
                if (hasSymbols) {
                    props = props.concat(Object.getOwnPropertySymbols(map));
                }
                foreach(props, function(name) {
                    defineProperty(object, name, map[name], predicates[name]);
                });
            };
            defineProperties.supportsDescriptors = !!supportsDescriptors;
            module.exports = defineProperties;
        }, {
            "foreach": 47,
            "object-keys": 49
        }],
        47: [function(_dereq_, module, exports) {
            var hasOwn = Object.prototype.hasOwnProperty;
            var toString = Object.prototype.toString;
            module.exports = function forEach(obj, fn, ctx) {
                if (toString.call(fn) !== '[object Function]') {
                    throw new TypeError('iterator must be a function');
                }
                var l = obj.length;
                if (l === +l) {
                    for (var i = 0; i < l; i++) {
                        fn.call(ctx, obj[i], i, obj);
                    }
                } else {
                    for (var k in obj) {
                        if (hasOwn.call(obj, k)) {
                            fn.call(ctx, obj[k], k, obj);
                        }
                    }
                }
            };
        }, {}],
        48: [function(_dereq_, module, exports) {
            var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
            var slice = Array.prototype.slice;
            var toStr = Object.prototype.toString;
            var funcType = '[object Function]';
            module.exports = function bind(that) {
                var target = this;
                if (typeof target !== 'function' || toStr.call(target) !== funcType) {
                    throw new TypeError(ERROR_MESSAGE + target);
                }
                var args = slice.call(arguments, 1);
                var binder = function() {
                    if (this instanceof bound) {
                        var result = target.apply(this, args.concat(slice.call(arguments)));
                        if (Object(result) === result) {
                            return result;
                        }
                        return this;
                    } else {
                        return target.apply(that, args.concat(slice.call(arguments)));
                    }
                };
                var boundLength = Math.max(0, target.length - args.length);
                var boundArgs = [];
                for (var i = 0; i < boundLength; i++) {
                    boundArgs.push('$' + i);
                }
                var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
                if (target.prototype) {
                    var Empty = function Empty() {};
                    Empty.prototype = target.prototype;
                    bound.prototype = new Empty();
                    Empty.prototype = null;
                }
                return bound;
            };
        }, {}],
        49: [function(_dereq_, module, exports) {
            'use strict';
            var has = Object.prototype.hasOwnProperty;
            var toStr = Object.prototype.toString;
            var slice = Array.prototype.slice;
            var isArgs = _dereq_('./isArguments');
            var hasDontEnumBug = !({
                toString: null
            }).propertyIsEnumerable('toString');
            var hasProtoEnumBug = function() {}.propertyIsEnumerable('prototype');
            var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
            var equalsConstructorPrototype = function(o) {
                var ctor = o.constructor;
                return ctor && ctor.prototype === o;
            };
            var blacklistedKeys = {
                $console: true,
                $frame: true,
                $frameElement: true,
                $frames: true,
                $parent: true,
                $self: true,
                $webkitIndexedDB: true,
                $webkitStorageInfo: true,
                $window: true
            };
            var hasAutomationEqualityBug = (function() {
                if (typeof window === 'undefined') {
                    return false;
                }
                for (var k in window) {
                    try {
                        if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                            try {
                                equalsConstructorPrototype(window[k]);
                            } catch (e) {
                                return true;
                            }
                        }
                    } catch (e) {
                        return true;
                    }
                }
                return false;
            }());
            var equalsConstructorPrototypeIfNotBuggy = function(o) {
                if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
                    return equalsConstructorPrototype(o);
                }
                try {
                    return equalsConstructorPrototype(o);
                } catch (e) {
                    return false;
                }
            };
            var keysShim = function keys(object) {
                var isObject = object !== null && typeof object === 'object';
                var isFunction = toStr.call(object) === '[object Function]';
                var isArguments = isArgs(object);
                var isString = isObject && toStr.call(object) === '[object String]';
                var theKeys = [];
                if (!isObject && !isFunction && !isArguments) {
                    throw new TypeError('Object.keys called on a non-object');
                }
                var skipProto = hasProtoEnumBug && isFunction;
                if (isString && object.length > 0 && !has.call(object, 0)) {
                    for (var i = 0; i < object.length; ++i) {
                        theKeys.push(String(i));
                    }
                }
                if (isArguments && object.length > 0) {
                    for (var j = 0; j < object.length; ++j) {
                        theKeys.push(String(j));
                    }
                } else {
                    for (var name in object) {
                        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                            theKeys.push(String(name));
                        }
                    }
                }
                if (hasDontEnumBug) {
                    var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                    for (var k = 0; k < dontEnums.length; ++k) {
                        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                            theKeys.push(dontEnums[k]);
                        }
                    }
                }
                return theKeys;
            };
            keysShim.shim = function shimObjectKeys() {
                if (Object.keys) {
                    var keysWorksWithArguments = (function() {
                        return (Object.keys(arguments) || '').length === 2;
                    }(1, 2));
                    if (!keysWorksWithArguments) {
                        var originalKeys = Object.keys;
                        Object.keys = function keys(object) {
                            if (isArgs(object)) {
                                return originalKeys(slice.call(object));
                            } else {
                                return originalKeys(object);
                            }
                        };
                    }
                } else {
                    Object.keys = keysShim;
                }
                return Object.keys || keysShim;
            };
            module.exports = keysShim;
        }, {
            "./isArguments": 50
        }],
        50: [function(_dereq_, module, exports) {
            'use strict';
            var toStr = Object.prototype.toString;
            module.exports = function isArguments(value) {
                var str = toStr.call(value);
                var isArgs = str === '[object Arguments]';
                if (!isArgs) {
                    isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
                }
                return isArgs;
            };
        }, {}],
        51: [function(_dereq_, module, exports) {
            'use strict';
            var implementation = _dereq_('./implementation');
            var lacksProperEnumerationOrder = function() {
                if (!Object.assign) {
                    return false;
                }
                var str = 'abcdefghijklmnopqrst';
                var letters = str.split('');
                var map = {};
                for (var i = 0; i < letters.length; ++i) {
                    map[letters[i]] = letters[i];
                }
                var obj = Object.assign({}, map);
                var actual = '';
                for (var k in obj) {
                    actual += k;
                }
                return str !== actual;
            };
            var assignHasPendingExceptions = function() {
                if (!Object.assign || !Object.preventExtensions) {
                    return false;
                }
                var thrower = Object.preventExtensions({
                    1: 2
                });
                try {
                    Object.assign(thrower, 'xy');
                } catch (e) {
                    return thrower[1] === 'y';
                }
            };
            module.exports = function getPolyfill() {
                if (!Object.assign) {
                    return implementation;
                }
                if (lacksProperEnumerationOrder()) {
                    return implementation;
                }
                if (assignHasPendingExceptions()) {
                    return implementation;
                }
                return Object.assign;
            };
        }, {
            "./implementation": 44
        }],
        52: [function(_dereq_, module, exports) {
            'use strict';
            var define = _dereq_('define-properties');
            var getPolyfill = _dereq_('./polyfill');
            module.exports = function shimAssign() {
                var polyfill = getPolyfill();
                define(Object, {
                    assign: polyfill
                }, {
                    assign: function() {
                        return Object.assign !== polyfill;
                    }
                });
                return polyfill;
            };
        }, {
            "./polyfill": 51,
            "define-properties": 46
        }],
        53: [function(_dereq_, module, exports) {
            module.exports = SafeParseTuple

            function SafeParseTuple(obj, reviver) {
                var json
                var error = null
                try {
                    json = JSON.parse(obj, reviver)
                } catch (err) {
                    error = err
                }
                return [error, json]
            }
        }, {}],
        54: [function(_dereq_, module, exports) {
            function clean(s) {
                return s.replace(/\n\r?\s*/g, '')
            }
            module.exports = function tsml(sa) {
                var s = '',
                    i = 0
                for (; i < arguments.length; i++)
                    s += clean(sa[i]) + (arguments[i + 1] || '')
                return s
            }
        }, {}],
        55: [function(_dereq_, module, exports) {
            "use strict";
            var window = _dereq_("global/window")
            var once = _dereq_("once")
            var isFunction = _dereq_("is-function")
            var parseHeaders = _dereq_("parse-headers")
            var xtend = _dereq_("xtend")
            module.exports = createXHR
            createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
            createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest
            forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
                createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
                    options = initParams(uri, options, callback)
                    options.method = method.toUpperCase()
                    return _createXHR(options)
                }
            })

            function forEachArray(array, iterator) {
                for (var i = 0; i < array.length; i++) {
                    iterator(array[i])
                }
            }

            function isEmpty(obj) {
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) return false
                }
                return true
            }

            function initParams(uri, options, callback) {
                var params = uri
                if (isFunction(options)) {
                    callback = options
                    if (typeof uri === "string") {
                        params = {
                            uri: uri
                        }
                    }
                } else {
                    params = xtend(options, {
                        uri: uri
                    })
                }
                params.callback = callback
                return params
            }

            function createXHR(uri, options, callback) {
                options = initParams(uri, options, callback)
                return _createXHR(options)
            }

            function _createXHR(options) {
                var callback = options.callback
                if (typeof callback === "undefined") {
                    throw new Error("callback argument missing")
                }
                callback = once(callback)

                function readystatechange() {
                    if (xhr.readyState === 4) {
                        loadFunc()
                    }
                }

                function getBody() {
                    var body = undefined
                    if (xhr.response) {
                        body = xhr.response
                    } else if (xhr.responseType === "text" || !xhr.responseType) {
                        body = xhr.responseText || xhr.responseXML
                    }
                    if (isJson) {
                        try {
                            body = JSON.parse(body)
                        } catch (e) {}
                    }
                    return body
                }
                var failureResponse = {
                    body: undefined,
                    headers: {},
                    statusCode: 0,
                    method: method,
                    url: uri,
                    rawRequest: xhr
                }

                function errorFunc(evt) {
                    clearTimeout(timeoutTimer)
                    if (!(evt instanceof Error)) {
                        evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"))
                    }
                    evt.statusCode = 0
                    callback(evt, failureResponse)
                }

                function loadFunc() {
                    if (aborted) return
                    var status
                    clearTimeout(timeoutTimer)
                    if (options.useXDR && xhr.status === undefined) {
                        status = 200
                    } else {
                        status = (xhr.status === 1223 ? 204 : xhr.status)
                    }
                    var response = failureResponse
                    var err = null
                    if (status !== 0) {
                        response = {
                            body: getBody(),
                            statusCode: status,
                            method: method,
                            headers: {},
                            url: uri,
                            rawRequest: xhr
                        }
                        if (xhr.getAllResponseHeaders) {
                            response.headers = parseHeaders(xhr.getAllResponseHeaders())
                        }
                    } else {
                        err = new Error("Internal XMLHttpRequest Error")
                    }
                    callback(err, response, response.body)
                }
                var xhr = options.xhr || null
                if (!xhr) {
                    if (options.cors || options.useXDR) {
                        xhr = new createXHR.XDomainRequest()
                    } else {
                        xhr = new createXHR.XMLHttpRequest()
                    }
                }
                var key
                var aborted
                var uri = xhr.url = options.uri || options.url
                var method = xhr.method = options.method || "GET"
                var body = options.body || options.data || null
                var headers = xhr.headers = options.headers || {}
                var sync = !!options.sync
                var isJson = false
                var timeoutTimer
                if ("json" in options) {
                    isJson = true
                    headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json")
                    if (method !== "GET" && method !== "HEAD") {
                        headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json")
                        body = JSON.stringify(options.json)
                    }
                }
                xhr.onreadystatechange = readystatechange
                xhr.onload = loadFunc
                xhr.onerror = errorFunc
                xhr.onprogress = function() {}
                xhr.ontimeout = errorFunc
                xhr.open(method, uri, !sync, options.username, options.password)
                if (!sync) {
                    xhr.withCredentials = !!options.withCredentials
                }
                if (!sync && options.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        aborted = true
                        xhr.abort("timeout")
                        var e = new Error("XMLHttpRequest timeout")
                        e.code = "ETIMEDOUT"
                        errorFunc(e)
                    }, options.timeout)
                }
                if (xhr.setRequestHeader) {
                    for (key in headers) {
                        if (headers.hasOwnProperty(key)) {
                            xhr.setRequestHeader(key, headers[key])
                        }
                    }
                } else if (options.headers && !isEmpty(options.headers)) {
                    throw new Error("Headers cannot be set on an XDomainRequest object")
                }
                if ("responseType" in options) {
                    xhr.responseType = options.responseType
                }
                if ("beforeSend" in options && typeof options.beforeSend === "function") {
                    options.beforeSend(xhr)
                }
                xhr.send(body)
                return xhr
            }

            function noop() {}
        }, {
            "global/window": 2,
            "is-function": 56,
            "once": 57,
            "parse-headers": 60,
            "xtend": 61
        }],
        56: [function(_dereq_, module, exports) {
            module.exports = isFunction
            var toString = Object.prototype.toString

            function isFunction(fn) {
                var string = toString.call(fn)
                return string === '[object Function]' || (typeof fn === 'function' && string !== '[object RegExp]') || (typeof window !== 'undefined' && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt))
            };
        }, {}],
        57: [function(_dereq_, module, exports) {
            module.exports = once
            once.proto = once(function() {
                Object.defineProperty(Function.prototype, 'once', {
                    value: function() {
                        return once(this)
                    },
                    configurable: true
                })
            })

            function once(fn) {
                var called = false
                return function() {
                    if (called) return
                    called = true
                    return fn.apply(this, arguments)
                }
            }
        }, {}],
        58: [function(_dereq_, module, exports) {
            var isFunction = _dereq_('is-function')
            module.exports = forEach
            var toString = Object.prototype.toString
            var hasOwnProperty = Object.prototype.hasOwnProperty

            function forEach(list, iterator, context) {
                if (!isFunction(iterator)) {
                    throw new TypeError('iterator must be a function')
                }
                if (arguments.length < 3) {
                    context = this
                }
                if (toString.call(list) === '[object Array]')
                    forEachArray(list, iterator, context)
                else if (typeof list === 'string')
                    forEachString(list, iterator, context)
                else
                    forEachObject(list, iterator, context)
            }

            function forEachArray(array, iterator, context) {
                for (var i = 0, len = array.length; i < len; i++) {
                    if (hasOwnProperty.call(array, i)) {
                        iterator.call(context, array[i], i, array)
                    }
                }
            }

            function forEachString(string, iterator, context) {
                for (var i = 0, len = string.length; i < len; i++) {
                    iterator.call(context, string.charAt(i), i, string)
                }
            }

            function forEachObject(object, iterator, context) {
                for (var k in object) {
                    if (hasOwnProperty.call(object, k)) {
                        iterator.call(context, object[k], k, object)
                    }
                }
            }
        }, {
            "is-function": 56
        }],
        59: [function(_dereq_, module, exports) {
            exports = module.exports = trim;

            function trim(str) {
                return str.replace(/^\s*|\s*$/g, '');
            }
            exports.left = function(str) {
                return str.replace(/^\s*/, '');
            };
            exports.right = function(str) {
                return str.replace(/\s*$/, '');
            };
        }, {}],
        60: [function(_dereq_, module, exports) {
            var trim = _dereq_('trim'),
                forEach = _dereq_('for-each'),
                isArray = function(arg) {
                    return Object.prototype.toString.call(arg) === '[object Array]';
                }
            module.exports = function(headers) {
                if (!headers)
                    return {}
                var result = {}
                forEach(trim(headers).split('\n'), function(row) {
                    var index = row.indexOf(':'),
                        key = trim(row.slice(0, index)).toLowerCase(),
                        value = trim(row.slice(index + 1))
                    if (typeof(result[key]) === 'undefined') {
                        result[key] = value
                    } else if (isArray(result[key])) {
                        result[key].push(value)
                    } else {
                        result[key] = [result[key], value]
                    }
                })
                return result
            }
        }, {
            "for-each": 58,
            "trim": 59
        }],
        61: [function(_dereq_, module, exports) {
            module.exports = extend
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            function extend() {
                var target = {}
                for (var i = 0; i < arguments.length; i++) {
                    var source = arguments[i]
                    for (var key in source) {
                        if (hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }
                return target
            }
        }, {}],
        62: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _buttonJs = _dereq_('./button.js');
            var _buttonJs2 = _interopRequireDefault(_buttonJs);
            var _componentJs = _dereq_('./component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var BigPlayButton = (function(_Button) {
                _inherits(BigPlayButton, _Button);

                function BigPlayButton(player, options) {
                    _classCallCheck(this, BigPlayButton);
                    _Button.call(this, player, options);
                }
                BigPlayButton.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-big-play-button';
                };
                BigPlayButton.prototype.handleClick = function handleClick() {
                    this.player_.play();
                };
                return BigPlayButton;
            })(_buttonJs2['default']);
            BigPlayButton.prototype.controlText_ = 'Play Video';
            _componentJs2['default'].registerComponent('BigPlayButton', BigPlayButton);
            exports['default'] = BigPlayButton;
            module.exports = exports['default'];
        }, {
            "./button.js": 63,
            "./component.js": 66
        }],
        63: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _clickableComponentJs = _dereq_('./clickable-component.js');
            var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _utilsFnJs = _dereq_('./utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsLogJs = _dereq_('./utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var Button = (function(_ClickableComponent) {
                _inherits(Button, _ClickableComponent);

                function Button(player, options) {
                    _classCallCheck(this, Button);
                    _ClickableComponent.call(this, player, options);
                }
                Button.prototype.createEl = function createEl() {
                    var tag = arguments.length <= 0 || arguments[0] === undefined ? 'button' : arguments[0];
                    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                    props = _objectAssign2['default']({
                        className: this.buildCSSClass()
                    }, props);
                    if (tag !== 'button') {
                        _utilsLogJs2['default'].warn('Creating a Button with an HTML element of ' + tag + ' is deprecated; use ClickableComponent instead.');
                    }
                    attributes = _objectAssign2['default']({
                        type: 'button',
                        'aria-live': 'polite'
                    }, attributes);
                    var el = _component2['default'].prototype.createEl.call(this, tag, props, attributes);
                    this.createControlTextEl(el);
                    return el;
                };
                Button.prototype.addChild = function addChild(child) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var className = this.constructor.name;
                    _utilsLogJs2['default'].warn('Adding an actionable (user controllable) child to a Button (' + className + ') is not supported; use a ClickableComponent instead.');
                    return _component2['default'].prototype.addChild.call(this, child, options);
                };
                Button.prototype.handleKeyPress = function handleKeyPress(event) {
                    if (event.which === 32 || event.which === 13) {} else {
                        _ClickableComponent.prototype.handleKeyPress.call(this, event);
                    }
                };
                return Button;
            })(_clickableComponentJs2['default']);
            _component2['default'].registerComponent('Button', Button);
            exports['default'] = Button;
            module.exports = exports['default'];
        }, {
            "./clickable-component.js": 64,
            "./component": 66,
            "./utils/events.js": 132,
            "./utils/fn.js": 133,
            "./utils/log.js": 136,
            "global/document": 1,
            "object.assign": 45
        }],
        64: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var _utilsDomJs = _dereq_('./utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _utilsFnJs = _dereq_('./utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsLogJs = _dereq_('./utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var ClickableComponent = (function(_Component) {
                _inherits(ClickableComponent, _Component);

                function ClickableComponent(player, options) {
                    _classCallCheck(this, ClickableComponent);
                    _Component.call(this, player, options);
                    this.emitTapEvents();
                    this.on('tap', this.handleClick);
                    this.on('click', this.handleClick);
                    this.on('focus', this.handleFocus);
                    this.on('blur', this.handleBlur);
                }
                ClickableComponent.prototype.createEl = function createEl() {
                    var tag = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];
                    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                    props = _objectAssign2['default']({
                        className: this.buildCSSClass(),
                        tabIndex: 0
                    }, props);
                    if (tag === 'button') {
                        _utilsLogJs2['default'].error('Creating a ClickableComponent with an HTML element of ' + tag + ' is not supported; use a Button instead.');
                    }
                    attributes = _objectAssign2['default']({
                        role: 'button',
                        'aria-live': 'polite'
                    }, attributes);
                    var el = _Component.prototype.createEl.call(this, tag, props, attributes);
                    this.createControlTextEl(el);
                    return el;
                };
                ClickableComponent.prototype.createControlTextEl = function createControlTextEl(el) {
                    this.controlTextEl_ = Dom.createEl('span', {
                        className: 'vjs-control-text'
                    });
                    if (el) {
                        el.appendChild(this.controlTextEl_);
                    }
                    this.controlText(this.controlText_);
                    return this.controlTextEl_;
                };
                ClickableComponent.prototype.controlText = function controlText(text) {
                    if (!text) return this.controlText_ || 'Need Text';
                    this.controlText_ = text;
                    this.controlTextEl_.innerHTML = this.localize(this.controlText_);
                    return this;
                };
                ClickableComponent.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-control vjs-button ' + _Component.prototype.buildCSSClass.call(this);
                };
                ClickableComponent.prototype.addChild = function addChild(child) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    return _Component.prototype.addChild.call(this, child, options);
                };
                ClickableComponent.prototype.handleClick = function handleClick() {};
                ClickableComponent.prototype.handleFocus = function handleFocus() {
                    Events.on(_globalDocument2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
                };
                ClickableComponent.prototype.handleKeyPress = function handleKeyPress(event) {
                    if (event.which === 32 || event.which === 13) {
                        event.preventDefault();
                        this.handleClick(event);
                    } else if (_Component.prototype.handleKeyPress) {
                        _Component.prototype.handleKeyPress.call(this, event);
                    }
                };
                ClickableComponent.prototype.handleBlur = function handleBlur() {
                    Events.off(_globalDocument2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
                };
                return ClickableComponent;
            })(_component2['default']);
            _component2['default'].registerComponent('ClickableComponent', ClickableComponent);
            exports['default'] = ClickableComponent;
            module.exports = exports['default'];
        }, {
            "./component": 66,
            "./utils/dom.js": 131,
            "./utils/events.js": 132,
            "./utils/fn.js": 133,
            "./utils/log.js": 136,
            "global/document": 1,
            "object.assign": 45
        }],
        65: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _button = _dereq_('./button');
            var _button2 = _interopRequireDefault(_button);
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var CloseButton = (function(_Button) {
                _inherits(CloseButton, _Button);

                function CloseButton(player, options) {
                    _classCallCheck(this, CloseButton);
                    _Button.call(this, player, options);
                    this.controlText(options && options.controlText || this.localize('Close'));
                }
                CloseButton.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-close-button ' + _Button.prototype.buildCSSClass.call(this);
                };
                CloseButton.prototype.handleClick = function handleClick() {
                    this.trigger({
                        type: 'close',
                        bubbles: false
                    });
                };
                return CloseButton;
            })(_button2['default']);
            _component2['default'].registerComponent('CloseButton', CloseButton);
            exports['default'] = CloseButton;
            module.exports = exports['default'];
        }, {
            "./button": 63,
            "./component": 66
        }],
        66: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _utilsDomJs = _dereq_('./utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('./utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsGuidJs = _dereq_('./utils/guid.js');
            var Guid = _interopRequireWildcard(_utilsGuidJs);
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _utilsLogJs = _dereq_('./utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _utilsToTitleCaseJs = _dereq_('./utils/to-title-case.js');
            var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var _utilsMergeOptionsJs = _dereq_('./utils/merge-options.js');
            var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);
            var Component = (function() {
                function Component(player, options, ready) {
                    _classCallCheck(this, Component);
                    if (!player && this.play) {
                        this.player_ = player = this;
                    } else {
                        this.player_ = player;
                    }
                    this.options_ = _utilsMergeOptionsJs2['default']({}, this.options_);
                    options = this.options_ = _utilsMergeOptionsJs2['default'](this.options_, options);
                    this.id_ = options.id || options.el && options.el.id;
                    if (!this.id_) {
                        var id = player && player.id && player.id() || 'no_player';
                        this.id_ = id + '_component_' + Guid.newGUID();
                    }
                    this.name_ = options.name || null;
                    if (options.el) {
                        this.el_ = options.el;
                    } else if (options.createEl !== false) {
                        this.el_ = this.createEl();
                    }
                    this.children_ = [];
                    this.childIndex_ = {};
                    this.childNameIndex_ = {};
                    if (options.initChildren !== false) {
                        this.initChildren();
                    }
                    this.ready(ready);
                    if (options.reportTouchActivity !== false) {
                        this.enableTouchActivity();
                    }
                }
                Component.prototype.dispose = function dispose() {
                    this.trigger({
                        type: 'dispose',
                        bubbles: false
                    });
                    if (this.children_) {
                        for (var i = this.children_.length - 1; i >= 0; i--) {
                            if (this.children_[i].dispose) {
                                this.children_[i].dispose();
                            }
                        }
                    }
                    this.children_ = null;
                    this.childIndex_ = null;
                    this.childNameIndex_ = null;
                    this.off();
                    if (this.el_.parentNode) {
                        this.el_.parentNode.removeChild(this.el_);
                    }
                    Dom.removeElData(this.el_);
                    this.el_ = null;
                };
                Component.prototype.player = function player() {
                    return this.player_;
                };
                Component.prototype.options = function options(obj) {
                    _utilsLogJs2['default'].warn('this.options() has been deprecated and will be moved to the constructor in 6.0');
                    if (!obj) {
                        return this.options_;
                    }
                    this.options_ = _utilsMergeOptionsJs2['default'](this.options_, obj);
                    return this.options_;
                };
                Component.prototype.el = function el() {
                    return this.el_;
                };
                Component.prototype.createEl = function createEl(tagName, properties, attributes) {
                    return Dom.createEl(tagName, properties, attributes);
                };
                Component.prototype.localize = function localize(string) {
                    var code = this.player_.language && this.player_.language();
                    var languages = this.player_.languages && this.player_.languages();
                    if (!code || !languages) {
                        return string;
                    }
                    var language = languages[code];
                    if (language && language[string]) {
                        return language[string];
                    }
                    var primaryCode = code.split('-')[0];
                    var primaryLang = languages[primaryCode];
                    if (primaryLang && primaryLang[string]) {
                        return primaryLang[string];
                    }
                    return string;
                };
                Component.prototype.contentEl = function contentEl() {
                    return this.contentEl_ || this.el_;
                };
                Component.prototype.id = function id() {
                    return this.id_;
                };
                Component.prototype.name = function name() {
                    return this.name_;
                };
                Component.prototype.children = function children() {
                    return this.children_;
                };
                Component.prototype.getChildById = function getChildById(id) {
                    return this.childIndex_[id];
                };
                Component.prototype.getChild = function getChild(name) {
                    return this.childNameIndex_[name];
                };
                Component.prototype.addChild = function addChild(child) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var component = undefined;
                    var componentName = undefined;
                    if (typeof child === 'string') {
                        componentName = child;
                        if (!options) {
                            options = {};
                        }
                        if (options === true) {
                            _utilsLogJs2['default'].warn('Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`.');
                            options = {};
                        }
                        var componentClassName = options.componentClass || _utilsToTitleCaseJs2['default'](componentName);
                        options.name = componentName;
                        var ComponentClass = Component.getComponent(componentClassName);
                        if (!ComponentClass) {
                            throw new Error('Component ' + componentClassName + ' does not exist');
                        }
                        if (typeof ComponentClass !== 'function') {
                            return null;
                        }
                        component = new ComponentClass(this.player_ || this, options);
                    } else {
                        component = child;
                    }
                    this.children_.push(component);
                    if (typeof component.id === 'function') {
                        this.childIndex_[component.id()] = component;
                    }
                    componentName = componentName || component.name && component.name();
                    if (componentName) {
                        this.childNameIndex_[componentName] = component;
                    }
                    if (typeof component.el === 'function' && component.el()) {
                        this.contentEl().appendChild(component.el());
                    }
                    return component;
                };
                Component.prototype.removeChild = function removeChild(component) {
                    if (typeof component === 'string') {
                        component = this.getChild(component);
                    }
                    if (!component || !this.children_) {
                        return;
                    }
                    var childFound = false;
                    for (var i = this.children_.length - 1; i >= 0; i--) {
                        if (this.children_[i] === component) {
                            childFound = true;
                            this.children_.splice(i, 1);
                            break;
                        }
                    }
                    if (!childFound) {
                        return;
                    }
                    this.childIndex_[component.id()] = null;
                    this.childNameIndex_[component.name()] = null;
                    var compEl = component.el();
                    if (compEl && compEl.parentNode === this.contentEl()) {
                        this.contentEl().removeChild(component.el());
                    }
                };
                Component.prototype.initChildren = function initChildren() {
                    var _this = this;
                    var children = this.options_.children;
                    if (children) {
                        (function() {
                            var parentOptions = _this.options_;
                            var handleAdd = function handleAdd(child) {
                                var name = child.name;
                                var opts = child.opts;
                                if (parentOptions[name] !== undefined) {
                                    opts = parentOptions[name];
                                }
                                if (opts === false) {
                                    return;
                                }
                                if (opts === true) {
                                    opts = {};
                                }
                                opts.playerOptions = _this.options_.playerOptions;
                                var newChild = _this.addChild(name, opts);
                                if (newChild) {
                                    _this[name] = newChild;
                                }
                            };
                            var workingChildren = undefined;
                            var Tech = Component.getComponent('Tech');
                            if (Array.isArray(children)) {
                                workingChildren = children;
                            } else {
                                workingChildren = Object.keys(children);
                            }
                            workingChildren.concat(Object.keys(_this.options_).filter(function(child) {
                                return !workingChildren.some(function(wchild) {
                                    if (typeof wchild === 'string') {
                                        return child === wchild;
                                    } else {
                                        return child === wchild.name;
                                    }
                                });
                            })).map(function(child) {
                                var name = undefined,
                                    opts = undefined;
                                if (typeof child === 'string') {
                                    name = child;
                                    opts = children[name] || _this.options_[name] || {};
                                } else {
                                    name = child.name;
                                    opts = child;
                                }
                                return {
                                    name: name,
                                    opts: opts
                                };
                            }).filter(function(child) {
                                var c = Component.getComponent(child.opts.componentClass || _utilsToTitleCaseJs2['default'](child.name));
                                return c && !Tech.isTech(c);
                            }).forEach(handleAdd);
                        })();
                    }
                };
                Component.prototype.buildCSSClass = function buildCSSClass() {
                    return '';
                };
                Component.prototype.on = function on(first, second, third) {
                    var _this2 = this;
                    if (typeof first === 'string' || Array.isArray(first)) {
                        Events.on(this.el_, first, Fn.bind(this, second));
                    } else {
                        (function() {
                            var target = first;
                            var type = second;
                            var fn = Fn.bind(_this2, third);
                            var removeOnDispose = function removeOnDispose() {
                                return _this2.off(target, type, fn);
                            };
                            removeOnDispose.guid = fn.guid;
                            _this2.on('dispose', removeOnDispose);
                            var cleanRemover = function cleanRemover() {
                                return _this2.off('dispose', removeOnDispose);
                            };
                            cleanRemover.guid = fn.guid;
                            if (first.nodeName) {
                                Events.on(target, type, fn);
                                Events.on(target, 'dispose', cleanRemover);
                            } else if (typeof first.on === 'function') {
                                target.on(type, fn);
                                target.on('dispose', cleanRemover);
                            }
                        })();
                    }
                    return this;
                };
                Component.prototype.off = function off(first, second, third) {
                    if (!first || typeof first === 'string' || Array.isArray(first)) {
                        Events.off(this.el_, first, second);
                    } else {
                        var target = first;
                        var type = second;
                        var fn = Fn.bind(this, third);
                        this.off('dispose', fn);
                        if (first.nodeName) {
                            Events.off(target, type, fn);
                            Events.off(target, 'dispose', fn);
                        } else {
                            target.off(type, fn);
                            target.off('dispose', fn);
                        }
                    }
                    return this;
                };
                Component.prototype.one = function one(first, second, third) {
                    var _this3 = this,
                        _arguments = arguments;
                    if (typeof first === 'string' || Array.isArray(first)) {
                        Events.one(this.el_, first, Fn.bind(this, second));
                    } else {
                        (function() {
                            var target = first;
                            var type = second;
                            var fn = Fn.bind(_this3, third);
                            var newFunc = function newFunc() {
                                _this3.off(target, type, newFunc);
                                fn.apply(null, _arguments);
                            };
                            newFunc.guid = fn.guid;
                            _this3.on(target, type, newFunc);
                        })();
                    }
                    return this;
                };
                Component.prototype.trigger = function trigger(event, hash) {
                    Events.trigger(this.el_, event, hash);
                    return this;
                };
                Component.prototype.ready = function ready(fn) {
                    var sync = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
                    if (fn) {
                        if (this.isReady_) {
                            if (sync) {
                                fn.call(this);
                            } else {
                                this.setTimeout(fn, 1);
                            }
                        } else {
                            this.readyQueue_ = this.readyQueue_ || [];
                            this.readyQueue_.push(fn);
                        }
                    }
                    return this;
                };
                Component.prototype.triggerReady = function triggerReady() {
                    this.isReady_ = true;
                    this.setTimeout(function() {
                        var readyQueue = this.readyQueue_;
                        this.readyQueue_ = [];
                        if (readyQueue && readyQueue.length > 0) {
                            readyQueue.forEach(function(fn) {
                                fn.call(this);
                            }, this);
                        }
                        this.trigger('ready');
                    }, 1);
                };
                Component.prototype.$ = function $(selector, context) {
                    return Dom.$(selector, context || this.contentEl());
                };
                Component.prototype.$$ = function $$(selector, context) {
                    return Dom.$$(selector, context || this.contentEl());
                };
                Component.prototype.hasClass = function hasClass(classToCheck) {
                    return Dom.hasElClass(this.el_, classToCheck);
                };
                Component.prototype.addClass = function addClass(classToAdd) {
                    Dom.addElClass(this.el_, classToAdd);
                    return this;
                };
                Component.prototype.removeClass = function removeClass(classToRemove) {
                    Dom.removeElClass(this.el_, classToRemove);
                    return this;
                };
                Component.prototype.toggleClass = function toggleClass(classToToggle, predicate) {
                    Dom.toggleElClass(this.el_, classToToggle, predicate);
                    return this;
                };
                Component.prototype.show = function show() {
                    this.removeClass('vjs-hidden');
                    return this;
                };
                Component.prototype.hide = function hide() {
                    this.addClass('vjs-hidden');
                    return this;
                };
                Component.prototype.lockShowing = function lockShowing() {
                    this.addClass('vjs-lock-showing');
                    return this;
                };
                Component.prototype.unlockShowing = function unlockShowing() {
                    this.removeClass('vjs-lock-showing');
                    return this;
                };
                Component.prototype.width = function width(num, skipListeners) {
                    return this.dimension('width', num, skipListeners);
                };
                Component.prototype.height = function height(num, skipListeners) {
                    return this.dimension('height', num, skipListeners);
                };
                Component.prototype.dimensions = function dimensions(width, height) {
                    return this.width(width, true).height(height);
                };
                Component.prototype.dimension = function dimension(widthOrHeight, num, skipListeners) {
                    if (num !== undefined) {
                        if (num === null || num !== num) {
                            num = 0;
                        }
                        if (('' + num).indexOf('%') !== -1 || ('' + num).indexOf('px') !== -1) {
                            this.el_.style[widthOrHeight] = num;
                        } else if (num === 'auto') {
                            this.el_.style[widthOrHeight] = '';
                        } else {
                            this.el_.style[widthOrHeight] = num + 'px';
                        }
                        if (!skipListeners) {
                            this.trigger('resize');
                        }
                        return this;
                    }
                    if (!this.el_) {
                        return 0;
                    }
                    var val = this.el_.style[widthOrHeight];
                    var pxIndex = val.indexOf('px');
                    if (pxIndex !== -1) {
                        return parseInt(val.slice(0, pxIndex), 10);
                    }
                    return parseInt(this.el_['offset' + _utilsToTitleCaseJs2['default'](widthOrHeight)], 10);
                };
                Component.prototype.emitTapEvents = function emitTapEvents() {
                    var touchStart = 0;
                    var firstTouch = null;
                    var tapMovementThreshold = 10;
                    var touchTimeThreshold = 200;
                    var couldBeTap = undefined;
                    this.on('touchstart', function(event) {
                        if (event.touches.length === 1) {
                            firstTouch = _objectAssign2['default']({}, event.touches[0]);
                            touchStart = new Date().getTime();
                            couldBeTap = true;
                        }
                    });
                    this.on('touchmove', function(event) {
                        if (event.touches.length > 1) {
                            couldBeTap = false;
                        } else if (firstTouch) {
                            var xdiff = event.touches[0].pageX - firstTouch.pageX;
                            var ydiff = event.touches[0].pageY - firstTouch.pageY;
                            var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
                            if (touchDistance > tapMovementThreshold) {
                                couldBeTap = false;
                            }
                        }
                    });
                    var noTap = function noTap() {
                        couldBeTap = false;
                    };
                    this.on('touchleave', noTap);
                    this.on('touchcancel', noTap);
                    this.on('touchend', function(event) {
                        firstTouch = null;
                        if (couldBeTap === true) {
                            var touchTime = new Date().getTime() - touchStart;
                            if (touchTime < touchTimeThreshold) {
                                event.preventDefault();
                                this.trigger('tap');
                            }
                        }
                    });
                };
                Component.prototype.enableTouchActivity = function enableTouchActivity() {
                    if (!this.player() || !this.player().reportUserActivity) {
                        return;
                    }
                    var report = Fn.bind(this.player(), this.player().reportUserActivity);
                    var touchHolding = undefined;
                    this.on('touchstart', function() {
                        report();
                        this.clearInterval(touchHolding);
                        touchHolding = this.setInterval(report, 250);
                    });
                    var touchEnd = function touchEnd(event) {
                        report();
                        this.clearInterval(touchHolding);
                    };
                    this.on('touchmove', report);
                    this.on('touchend', touchEnd);
                    this.on('touchcancel', touchEnd);
                };
                Component.prototype.setTimeout = function setTimeout(fn, timeout) {
                    fn = Fn.bind(this, fn);
                    var timeoutId = _globalWindow2['default'].setTimeout(fn, timeout);
                    var disposeFn = function disposeFn() {
                        this.clearTimeout(timeoutId);
                    };
                    disposeFn.guid = 'vjs-timeout-' + timeoutId;
                    this.on('dispose', disposeFn);
                    return timeoutId;
                };
                Component.prototype.clearTimeout = function clearTimeout(timeoutId) {
                    _globalWindow2['default'].clearTimeout(timeoutId);
                    var disposeFn = function disposeFn() {};
                    disposeFn.guid = 'vjs-timeout-' + timeoutId;
                    this.off('dispose', disposeFn);
                    return timeoutId;
                };
                Component.prototype.setInterval = function setInterval(fn, interval) {
                    fn = Fn.bind(this, fn);
                    var intervalId = _globalWindow2['default'].setInterval(fn, interval);
                    var disposeFn = function disposeFn() {
                        this.clearInterval(intervalId);
                    };
                    disposeFn.guid = 'vjs-interval-' + intervalId;
                    this.on('dispose', disposeFn);
                    return intervalId;
                };
                Component.prototype.clearInterval = function clearInterval(intervalId) {
                    _globalWindow2['default'].clearInterval(intervalId);
                    var disposeFn = function disposeFn() {};
                    disposeFn.guid = 'vjs-interval-' + intervalId;
                    this.off('dispose', disposeFn);
                    return intervalId;
                };
                Component.registerComponent = function registerComponent(name, comp) {
                    if (!Component.components_) {
                        Component.components_ = {};
                    }
                    Component.components_[name] = comp;
                    return comp;
                };
                Component.getComponent = function getComponent(name) {
                    if (Component.components_ && Component.components_[name]) {
                        return Component.components_[name];
                    }
                    if (_globalWindow2['default'] && _globalWindow2['default'].videojs && _globalWindow2['default'].videojs[name]) {
                        _utilsLogJs2['default'].warn('The ' + name + ' component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)');
                        return _globalWindow2['default'].videojs[name];
                    }
                };
                Component.extend = function extend(props) {
                    props = props || {};
                    _utilsLogJs2['default'].warn('Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead');
                    var init = props.init || props.init || this.prototype.init || this.prototype.init || function() {};
                    var subObj = function subObj() {
                        init.apply(this, arguments);
                    };
                    subObj.prototype = Object.create(this.prototype);
                    subObj.prototype.constructor = subObj;
                    subObj.extend = Component.extend;
                    for (var _name in props) {
                        if (props.hasOwnProperty(_name)) {
                            subObj.prototype[_name] = props[_name];
                        }
                    }
                    return subObj;
                };
                return Component;
            })();
            Component.registerComponent('Component', Component);
            exports['default'] = Component;
            module.exports = exports['default'];
        }, {
            "./utils/dom.js": 131,
            "./utils/events.js": 132,
            "./utils/fn.js": 133,
            "./utils/guid.js": 135,
            "./utils/log.js": 136,
            "./utils/merge-options.js": 137,
            "./utils/to-title-case.js": 140,
            "global/window": 2,
            "object.assign": 45
        }],
        67: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _playToggleJs = _dereq_('./play-toggle.js');
            var _playToggleJs2 = _interopRequireDefault(_playToggleJs);
            var _timeControlsCurrentTimeDisplayJs = _dereq_('./time-controls/current-time-display.js');
            var _timeControlsCurrentTimeDisplayJs2 = _interopRequireDefault(_timeControlsCurrentTimeDisplayJs);
            var _timeControlsDurationDisplayJs = _dereq_('./time-controls/duration-display.js');
            var _timeControlsDurationDisplayJs2 = _interopRequireDefault(_timeControlsDurationDisplayJs);
            var _timeControlsTimeDividerJs = _dereq_('./time-controls/time-divider.js');
            var _timeControlsTimeDividerJs2 = _interopRequireDefault(_timeControlsTimeDividerJs);
            var _timeControlsRemainingTimeDisplayJs = _dereq_('./time-controls/remaining-time-display.js');
            var _timeControlsRemainingTimeDisplayJs2 = _interopRequireDefault(_timeControlsRemainingTimeDisplayJs);
            var _liveDisplayJs = _dereq_('./live-display.js');
            var _liveDisplayJs2 = _interopRequireDefault(_liveDisplayJs);
            var _progressControlProgressControlJs = _dereq_('./progress-control/progress-control.js');
            var _progressControlProgressControlJs2 = _interopRequireDefault(_progressControlProgressControlJs);
            var _fullscreenToggleJs = _dereq_('./fullscreen-toggle.js');
            var _fullscreenToggleJs2 = _interopRequireDefault(_fullscreenToggleJs);
            var _volumeControlVolumeControlJs = _dereq_('./volume-control/volume-control.js');
            var _volumeControlVolumeControlJs2 = _interopRequireDefault(_volumeControlVolumeControlJs);
            var _volumeMenuButtonJs = _dereq_('./volume-menu-button.js');
            var _volumeMenuButtonJs2 = _interopRequireDefault(_volumeMenuButtonJs);
            var _muteToggleJs = _dereq_('./mute-toggle.js');
            var _muteToggleJs2 = _interopRequireDefault(_muteToggleJs);
            var _textTrackControlsChaptersButtonJs = _dereq_('./text-track-controls/chapters-button.js');
            var _textTrackControlsChaptersButtonJs2 = _interopRequireDefault(_textTrackControlsChaptersButtonJs);
            var _textTrackControlsSubtitlesButtonJs = _dereq_('./text-track-controls/subtitles-button.js');
            var _textTrackControlsSubtitlesButtonJs2 = _interopRequireDefault(_textTrackControlsSubtitlesButtonJs);
            var _textTrackControlsCaptionsButtonJs = _dereq_('./text-track-controls/captions-button.js');
            var _textTrackControlsCaptionsButtonJs2 = _interopRequireDefault(_textTrackControlsCaptionsButtonJs);
            var _playbackRateMenuPlaybackRateMenuButtonJs = _dereq_('./playback-rate-menu/playback-rate-menu-button.js');
            var _playbackRateMenuPlaybackRateMenuButtonJs2 = _interopRequireDefault(_playbackRateMenuPlaybackRateMenuButtonJs);
            var _spacerControlsCustomControlSpacerJs = _dereq_('./spacer-controls/custom-control-spacer.js');
            var _spacerControlsCustomControlSpacerJs2 = _interopRequireDefault(_spacerControlsCustomControlSpacerJs);
            var ControlBar = (function(_Component) {
                _inherits(ControlBar, _Component);

                function ControlBar() {
                    _classCallCheck(this, ControlBar);
                    _Component.apply(this, arguments);
                }
                ControlBar.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-control-bar'
                    }, {
                        'role': 'group'
                    });
                };
                return ControlBar;
            })(_componentJs2['default']);
            ControlBar.prototype.options_ = {
                loadEvent: 'play',
                children: ['playToggle', 'volumeMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'subtitlesButton', 'captionsButton', 'fullscreenToggle']
            };
            _componentJs2['default'].registerComponent('ControlBar', ControlBar);
            exports['default'] = ControlBar;
            module.exports = exports['default'];
        }, {
            "../component.js": 66,
            "./fullscreen-toggle.js": 68,
            "./live-display.js": 69,
            "./mute-toggle.js": 70,
            "./play-toggle.js": 71,
            "./playback-rate-menu/playback-rate-menu-button.js": 72,
            "./progress-control/progress-control.js": 77,
            "./spacer-controls/custom-control-spacer.js": 79,
            "./text-track-controls/captions-button.js": 82,
            "./text-track-controls/chapters-button.js": 83,
            "./text-track-controls/subtitles-button.js": 86,
            "./time-controls/current-time-display.js": 89,
            "./time-controls/duration-display.js": 90,
            "./time-controls/remaining-time-display.js": 91,
            "./time-controls/time-divider.js": 92,
            "./volume-control/volume-control.js": 94,
            "./volume-menu-button.js": 96
        }],
        68: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _buttonJs = _dereq_('../button.js');
            var _buttonJs2 = _interopRequireDefault(_buttonJs);
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var FullscreenToggle = (function(_Button) {
                _inherits(FullscreenToggle, _Button);

                function FullscreenToggle() {
                    _classCallCheck(this, FullscreenToggle);
                    _Button.apply(this, arguments);
                }
                FullscreenToggle.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-fullscreen-control ' + _Button.prototype.buildCSSClass.call(this);
                };
                FullscreenToggle.prototype.handleClick = function handleClick() {
                    if (!this.player_.isFullscreen()) {
                        this.player_.requestFullscreen();
                        this.controlText('Non-Fullscreen');
                    } else {
                        this.player_.exitFullscreen();
                        this.controlText('Fullscreen');
                    }
                };
                return FullscreenToggle;
            })(_buttonJs2['default']);
            FullscreenToggle.prototype.controlText_ = 'Fullscreen';
            _componentJs2['default'].registerComponent('FullscreenToggle', FullscreenToggle);
            exports['default'] = FullscreenToggle;
            module.exports = exports['default'];
        }, {
            "../button.js": 63,
            "../component.js": 66
        }],
        69: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var LiveDisplay = (function(_Component) {
                _inherits(LiveDisplay, _Component);

                function LiveDisplay(player, options) {
                    _classCallCheck(this, LiveDisplay);
                    _Component.call(this, player, options);
                    this.updateShowing();
                    this.on(this.player(), 'durationchange', this.updateShowing);
                }
                LiveDisplay.prototype.createEl = function createEl() {
                    var el = _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-live-control vjs-control'
                    });
                    this.contentEl_ = Dom.createEl('div', {
                        className: 'vjs-live-display',
                        innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE')
                    }, {
                        'aria-live': 'off'
                    });
                    el.appendChild(this.contentEl_);
                    return el;
                };
                LiveDisplay.prototype.updateShowing = function updateShowing() {
                    if (this.player().duration() === Infinity) {
                        this.show();
                    } else {
                        this.hide();
                    }
                };
                return LiveDisplay;
            })(_component2['default']);
            _component2['default'].registerComponent('LiveDisplay', LiveDisplay);
            exports['default'] = LiveDisplay;
            module.exports = exports['default'];
        }, {
            "../component": 66,
            "../utils/dom.js": 131
        }],
        70: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _button = _dereq_('../button');
            var _button2 = _interopRequireDefault(_button);
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var MuteToggle = (function(_Button) {
                _inherits(MuteToggle, _Button);

                function MuteToggle(player, options) {
                    _classCallCheck(this, MuteToggle);
                    _Button.call(this, player, options);
                    this.on(player, 'volumechange', this.update);
                    if (player.tech_ && player.tech_['featuresVolumeControl'] === false) {
                        this.addClass('vjs-hidden');
                    }
                    this.on(player, 'loadstart', function() {
                        this.update();
                        if (player.tech_['featuresVolumeControl'] === false) {
                            this.addClass('vjs-hidden');
                        } else {
                            this.removeClass('vjs-hidden');
                        }
                    });
                }
                MuteToggle.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-mute-control ' + _Button.prototype.buildCSSClass.call(this);
                };
                MuteToggle.prototype.handleClick = function handleClick() {
                    this.player_.muted(this.player_.muted() ? false : true);
                };
                MuteToggle.prototype.update = function update() {
                    var vol = this.player_.volume(),
                        level = 3;
                    if (vol === 0 || this.player_.muted()) {
                        level = 0;
                    } else if (vol < 0.33) {
                        level = 1;
                    } else if (vol < 0.67) {
                        level = 2;
                    }
                    var toMute = this.player_.muted() ? 'Unmute' : 'Mute';
                    if (this.controlText() !== toMute) {
                        this.controlText(toMute);
                    }
                    for (var i = 0; i < 4; i++) {
                        Dom.removeElClass(this.el_, 'vjs-vol-' + i);
                    }
                    Dom.addElClass(this.el_, 'vjs-vol-' + level);
                };
                return MuteToggle;
            })(_button2['default']);
            MuteToggle.prototype.controlText_ = 'Mute';
            _component2['default'].registerComponent('MuteToggle', MuteToggle);
            exports['default'] = MuteToggle;
            module.exports = exports['default'];
        }, {
            "../button": 63,
            "../component": 66,
            "../utils/dom.js": 131
        }],
        71: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _buttonJs = _dereq_('../button.js');
            var _buttonJs2 = _interopRequireDefault(_buttonJs);
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var PlayToggle = (function(_Button) {
                _inherits(PlayToggle, _Button);

                function PlayToggle(player, options) {
                    _classCallCheck(this, PlayToggle);
                    _Button.call(this, player, options);
                    this.on(player, 'play', this.handlePlay);
                    this.on(player, 'pause', this.handlePause);
                }
                PlayToggle.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-play-control ' + _Button.prototype.buildCSSClass.call(this);
                };
                PlayToggle.prototype.handleClick = function handleClick() {
                    if (this.player_.paused()) {
                        this.player_.play();
                    } else {
                        this.player_.pause();
                    }
                };
                PlayToggle.prototype.handlePlay = function handlePlay() {
                    this.removeClass('vjs-paused');
                    this.addClass('vjs-playing');
                    this.controlText('Pause');
                };
                PlayToggle.prototype.handlePause = function handlePause() {
                    this.removeClass('vjs-playing');
                    this.addClass('vjs-paused');
                    this.controlText('Play');
                };
                return PlayToggle;
            })(_buttonJs2['default']);
            PlayToggle.prototype.controlText_ = 'Play';
            _componentJs2['default'].registerComponent('PlayToggle', PlayToggle);
            exports['default'] = PlayToggle;
            module.exports = exports['default'];
        }, {
            "../button.js": 63,
            "../component.js": 66
        }],
        72: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _menuMenuButtonJs = _dereq_('../../menu/menu-button.js');
            var _menuMenuButtonJs2 = _interopRequireDefault(_menuMenuButtonJs);
            var _menuMenuJs = _dereq_('../../menu/menu.js');
            var _menuMenuJs2 = _interopRequireDefault(_menuMenuJs);
            var _playbackRateMenuItemJs = _dereq_('./playback-rate-menu-item.js');
            var _playbackRateMenuItemJs2 = _interopRequireDefault(_playbackRateMenuItemJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var PlaybackRateMenuButton = (function(_MenuButton) {
                _inherits(PlaybackRateMenuButton, _MenuButton);

                function PlaybackRateMenuButton(player, options) {
                    _classCallCheck(this, PlaybackRateMenuButton);
                    _MenuButton.call(this, player, options);
                    this.updateVisibility();
                    this.updateLabel();
                    this.on(player, 'loadstart', this.updateVisibility);
                    this.on(player, 'ratechange', this.updateLabel);
                }
                PlaybackRateMenuButton.prototype.createEl = function createEl() {
                    var el = _MenuButton.prototype.createEl.call(this);
                    this.labelEl_ = Dom.createEl('div', {
                        className: 'vjs-playback-rate-value',
                        innerHTML: 1.0
                    });
                    el.appendChild(this.labelEl_);
                    return el;
                };
                PlaybackRateMenuButton.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-playback-rate ' + _MenuButton.prototype.buildCSSClass.call(this);
                };
                PlaybackRateMenuButton.prototype.createMenu = function createMenu() {
                    var menu = new _menuMenuJs2['default'](this.player());
                    var rates = this.playbackRates();
                    if (rates) {
                        for (var i = rates.length - 1; i >= 0; i--) {
                            menu.addChild(new _playbackRateMenuItemJs2['default'](this.player(), {
                                'rate': rates[i] + 'x'
                            }));
                        }
                    }
                    return menu;
                };
                PlaybackRateMenuButton.prototype.updateARIAAttributes = function updateARIAAttributes() {
                    this.el().setAttribute('aria-valuenow', this.player().playbackRate());
                };
                PlaybackRateMenuButton.prototype.handleClick = function handleClick() {
                    var currentRate = this.player().playbackRate();
                    var rates = this.playbackRates();
                    var newRate = rates[0];
                    for (var i = 0; i < rates.length; i++) {
                        if (rates[i] > currentRate) {
                            newRate = rates[i];
                            break;
                        }
                    }
                    this.player().playbackRate(newRate);
                };
                PlaybackRateMenuButton.prototype.playbackRates = function playbackRates() {
                    return this.options_['playbackRates'] || this.options_.playerOptions && this.options_.playerOptions['playbackRates'];
                };
                PlaybackRateMenuButton.prototype.playbackRateSupported = function playbackRateSupported() {
                    return this.player().tech_ && this.player().tech_['featuresPlaybackRate'] && this.playbackRates() && this.playbackRates().length > 0;
                };
                PlaybackRateMenuButton.prototype.updateVisibility = function updateVisibility() {
                    if (this.playbackRateSupported()) {
                        this.removeClass('vjs-hidden');
                    } else {
                        this.addClass('vjs-hidden');
                    }
                };
                PlaybackRateMenuButton.prototype.updateLabel = function updateLabel() {
                    if (this.playbackRateSupported()) {
                        this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
                    }
                };
                return PlaybackRateMenuButton;
            })(_menuMenuButtonJs2['default']);
            PlaybackRateMenuButton.prototype.controlText_ = 'Playback Rate';
            _componentJs2['default'].registerComponent('PlaybackRateMenuButton', PlaybackRateMenuButton);
            exports['default'] = PlaybackRateMenuButton;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../menu/menu-button.js": 103,
            "../../menu/menu.js": 105,
            "../../utils/dom.js": 131,
            "./playback-rate-menu-item.js": 73
        }],
        73: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _menuMenuItemJs = _dereq_('../../menu/menu-item.js');
            var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var PlaybackRateMenuItem = (function(_MenuItem) {
                _inherits(PlaybackRateMenuItem, _MenuItem);

                function PlaybackRateMenuItem(player, options) {
                    _classCallCheck(this, PlaybackRateMenuItem);
                    var label = options['rate'];
                    var rate = parseFloat(label, 10);
                    options['label'] = label;
                    options['selected'] = rate === 1;
                    _MenuItem.call(this, player, options);
                    this.label = label;
                    this.rate = rate;
                    this.on(player, 'ratechange', this.update);
                }
                PlaybackRateMenuItem.prototype.handleClick = function handleClick() {
                    _MenuItem.prototype.handleClick.call(this);
                    this.player().playbackRate(this.rate);
                };
                PlaybackRateMenuItem.prototype.update = function update() {
                    this.selected(this.player().playbackRate() === this.rate);
                };
                return PlaybackRateMenuItem;
            })(_menuMenuItemJs2['default']);
            PlaybackRateMenuItem.prototype.contentElType = 'button';
            _componentJs2['default'].registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);
            exports['default'] = PlaybackRateMenuItem;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../menu/menu-item.js": 104
        }],
        74: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var LoadProgressBar = (function(_Component) {
                _inherits(LoadProgressBar, _Component);

                function LoadProgressBar(player, options) {
                    _classCallCheck(this, LoadProgressBar);
                    _Component.call(this, player, options);
                    this.on(player, 'progress', this.update);
                }
                LoadProgressBar.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-load-progress',
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
                    });
                };
                LoadProgressBar.prototype.update = function update() {
                    var buffered = this.player_.buffered();
                    var duration = this.player_.duration();
                    var bufferedEnd = this.player_.bufferedEnd();
                    var children = this.el_.children;
                    var percentify = function percentify(time, end) {
                        var percent = time / end || 0;
                        return (percent >= 1 ? 1 : percent) * 100 + '%';
                    };
                    this.el_.style.width = percentify(bufferedEnd, duration);
                    for (var i = 0; i < buffered.length; i++) {
                        var start = buffered.start(i);
                        var end = buffered.end(i);
                        var part = children[i];
                        if (!part) {
                            part = this.el_.appendChild(Dom.createEl());
                        }
                        part.style.left = percentify(start, bufferedEnd);
                        part.style.width = percentify(end - start, bufferedEnd);
                    }
                    for (var i = children.length; i > buffered.length; i--) {
                        this.el_.removeChild(children[i - 1]);
                    }
                };
                return LoadProgressBar;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('LoadProgressBar', LoadProgressBar);
            exports['default'] = LoadProgressBar;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../utils/dom.js": 131
        }],
        75: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var _lodashCompatFunctionThrottle = _dereq_('lodash-compat/function/throttle');
            var _lodashCompatFunctionThrottle2 = _interopRequireDefault(_lodashCompatFunctionThrottle);
            var MouseTimeDisplay = (function(_Component) {
                _inherits(MouseTimeDisplay, _Component);

                function MouseTimeDisplay(player, options) {
                    var _this = this;
                    _classCallCheck(this, MouseTimeDisplay);
                    _Component.call(this, player, options);
                    this.update(0, 0);
                    player.on('ready', function() {
                        _this.on(player.controlBar.progressControl.el(), 'mousemove', _lodashCompatFunctionThrottle2['default'](Fn.bind(_this, _this.handleMouseMove), 25));
                    });
                }
                MouseTimeDisplay.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-mouse-display'
                    });
                };
                MouseTimeDisplay.prototype.handleMouseMove = function handleMouseMove(event) {
                    var duration = this.player_.duration();
                    var newTime = this.calculateDistance(event) * duration;
                    var position = event.pageX - Dom.findElPosition(this.el().parentNode).left;
                    this.update(newTime, position);
                };
                MouseTimeDisplay.prototype.update = function update(newTime, position) {
                    var time = _utilsFormatTimeJs2['default'](newTime, this.player_.duration());
                    this.el().style.left = position + 'px';
                    this.el().setAttribute('data-current-time', time);
                };
                MouseTimeDisplay.prototype.calculateDistance = function calculateDistance(event) {
                    return Dom.getPointerPosition(this.el().parentNode, event).x;
                };
                return MouseTimeDisplay;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('MouseTimeDisplay', MouseTimeDisplay);
            exports['default'] = MouseTimeDisplay;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../utils/dom.js": 131,
            "../../utils/fn.js": 133,
            "../../utils/format-time.js": 134,
            "lodash-compat/function/throttle": 7
        }],
        76: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var PlayProgressBar = (function(_Component) {
                _inherits(PlayProgressBar, _Component);

                function PlayProgressBar(player, options) {
                    _classCallCheck(this, PlayProgressBar);
                    _Component.call(this, player, options);
                    this.updateDataAttr();
                    this.on(player, 'timeupdate', this.updateDataAttr);
                    player.ready(Fn.bind(this, this.updateDataAttr));
                }
                PlayProgressBar.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-play-progress vjs-slider-bar',
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
                    });
                };
                PlayProgressBar.prototype.updateDataAttr = function updateDataAttr() {
                    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    this.el_.setAttribute('data-current-time', _utilsFormatTimeJs2['default'](time, this.player_.duration()));
                };
                return PlayProgressBar;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('PlayProgressBar', PlayProgressBar);
            exports['default'] = PlayProgressBar;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../utils/fn.js": 133,
            "../../utils/format-time.js": 134
        }],
        77: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _seekBarJs = _dereq_('./seek-bar.js');
            var _seekBarJs2 = _interopRequireDefault(_seekBarJs);
            var _mouseTimeDisplayJs = _dereq_('./mouse-time-display.js');
            var _mouseTimeDisplayJs2 = _interopRequireDefault(_mouseTimeDisplayJs);
            var ProgressControl = (function(_Component) {
                _inherits(ProgressControl, _Component);

                function ProgressControl() {
                    _classCallCheck(this, ProgressControl);
                    _Component.apply(this, arguments);
                }
                ProgressControl.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-progress-control vjs-control'
                    });
                };
                return ProgressControl;
            })(_componentJs2['default']);
            ProgressControl.prototype.options_ = {
                children: ['seekBar']
            };
            _componentJs2['default'].registerComponent('ProgressControl', ProgressControl);
            exports['default'] = ProgressControl;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./mouse-time-display.js": 75,
            "./seek-bar.js": 78
        }],
        78: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _sliderSliderJs = _dereq_('../../slider/slider.js');
            var _sliderSliderJs2 = _interopRequireDefault(_sliderSliderJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _loadProgressBarJs = _dereq_('./load-progress-bar.js');
            var _loadProgressBarJs2 = _interopRequireDefault(_loadProgressBarJs);
            var _playProgressBarJs = _dereq_('./play-progress-bar.js');
            var _playProgressBarJs2 = _interopRequireDefault(_playProgressBarJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var SeekBar = (function(_Slider) {
                _inherits(SeekBar, _Slider);

                function SeekBar(player, options) {
                    _classCallCheck(this, SeekBar);
                    _Slider.call(this, player, options);
                    this.on(player, 'timeupdate', this.updateARIAAttributes);
                    player.ready(Fn.bind(this, this.updateARIAAttributes));
                }
                SeekBar.prototype.createEl = function createEl() {
                    return _Slider.prototype.createEl.call(this, 'div', {
                        className: 'vjs-progress-holder'
                    }, {
                        'aria-label': 'video progress bar'
                    });
                };
                SeekBar.prototype.updateARIAAttributes = function updateARIAAttributes() {
                    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    this.el_.setAttribute('aria-valuenow', (this.getPercent() * 100).toFixed(2));
                    this.el_.setAttribute('aria-valuetext', _utilsFormatTimeJs2['default'](time, this.player_.duration()));
                };
                SeekBar.prototype.getPercent = function getPercent() {
                    var percent = this.player_.currentTime() / this.player_.duration();
                    return percent >= 1 ? 1 : percent;
                };
                SeekBar.prototype.handleMouseDown = function handleMouseDown(event) {
                    _Slider.prototype.handleMouseDown.call(this, event);
                    this.player_.scrubbing(true);
                    this.videoWasPlaying = !this.player_.paused();
                    this.player_.pause();
                };
                SeekBar.prototype.handleMouseMove = function handleMouseMove(event) {
                    var newTime = this.calculateDistance(event) * this.player_.duration();
                    if (newTime === this.player_.duration()) {
                        newTime = newTime - 0.1;
                    }
                    this.player_.currentTime(newTime);
                };
                SeekBar.prototype.handleMouseUp = function handleMouseUp(event) {
                    _Slider.prototype.handleMouseUp.call(this, event);
                    this.player_.scrubbing(false);
                    if (this.videoWasPlaying) {
                        this.player_.play();
                    }
                };
                SeekBar.prototype.stepForward = function stepForward() {
                    this.player_.currentTime(this.player_.currentTime() + 5);
                };
                SeekBar.prototype.stepBack = function stepBack() {
                    this.player_.currentTime(this.player_.currentTime() - 5);
                };
                return SeekBar;
            })(_sliderSliderJs2['default']);
            SeekBar.prototype.options_ = {
                children: ['loadProgressBar', 'mouseTimeDisplay', 'playProgressBar'],
                'barName': 'playProgressBar'
            };
            SeekBar.prototype.playerEvent = 'timeupdate';
            _componentJs2['default'].registerComponent('SeekBar', SeekBar);
            exports['default'] = SeekBar;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../slider/slider.js": 113,
            "../../utils/fn.js": 133,
            "../../utils/format-time.js": 134,
            "./load-progress-bar.js": 74,
            "./play-progress-bar.js": 76,
            "object.assign": 45
        }],
        79: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _spacerJs = _dereq_('./spacer.js');
            var _spacerJs2 = _interopRequireDefault(_spacerJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var CustomControlSpacer = (function(_Spacer) {
                _inherits(CustomControlSpacer, _Spacer);

                function CustomControlSpacer() {
                    _classCallCheck(this, CustomControlSpacer);
                    _Spacer.apply(this, arguments);
                }
                CustomControlSpacer.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-custom-control-spacer ' + _Spacer.prototype.buildCSSClass.call(this);
                };
                CustomControlSpacer.prototype.createEl = function createEl() {
                    var el = _Spacer.prototype.createEl.call(this, {
                        className: this.buildCSSClass()
                    });
                    el.innerHTML = '&nbsp;';
                    return el;
                };
                return CustomControlSpacer;
            })(_spacerJs2['default']);
            _componentJs2['default'].registerComponent('CustomControlSpacer', CustomControlSpacer);
            exports['default'] = CustomControlSpacer;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./spacer.js": 80
        }],
        80: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var Spacer = (function(_Component) {
                _inherits(Spacer, _Component);

                function Spacer() {
                    _classCallCheck(this, Spacer);
                    _Component.apply(this, arguments);
                }
                Spacer.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-spacer ' + _Component.prototype.buildCSSClass.call(this);
                };
                Spacer.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: this.buildCSSClass()
                    });
                };
                return Spacer;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('Spacer', Spacer);
            exports['default'] = Spacer;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66
        }],
        81: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');
            var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var CaptionSettingsMenuItem = (function(_TextTrackMenuItem) {
                _inherits(CaptionSettingsMenuItem, _TextTrackMenuItem);

                function CaptionSettingsMenuItem(player, options) {
                    _classCallCheck(this, CaptionSettingsMenuItem);
                    options['track'] = {
                        'kind': options['kind'],
                        'player': player,
                        'label': options['kind'] + ' settings',
                        'selectable': false,
                        'default': false,
                        mode: 'disabled'
                    };
                    options['selectable'] = false;
                    _TextTrackMenuItem.call(this, player, options);
                    this.addClass('vjs-texttrack-settings');
                    this.controlText(', opens ' + options['kind'] + ' settings dialog');
                }
                CaptionSettingsMenuItem.prototype.handleClick = function handleClick() {
                    this.player().getChild('textTrackSettings').show();
                    this.player().getChild('textTrackSettings').el_.focus();
                };
                return CaptionSettingsMenuItem;
            })(_textTrackMenuItemJs2['default']);
            _componentJs2['default'].registerComponent('CaptionSettingsMenuItem', CaptionSettingsMenuItem);
            exports['default'] = CaptionSettingsMenuItem;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./text-track-menu-item.js": 88
        }],
        82: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _textTrackButtonJs = _dereq_('./text-track-button.js');
            var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _captionSettingsMenuItemJs = _dereq_('./caption-settings-menu-item.js');
            var _captionSettingsMenuItemJs2 = _interopRequireDefault(_captionSettingsMenuItemJs);
            var CaptionsButton = (function(_TextTrackButton) {
                _inherits(CaptionsButton, _TextTrackButton);

                function CaptionsButton(player, options, ready) {
                    _classCallCheck(this, CaptionsButton);
                    _TextTrackButton.call(this, player, options, ready);
                    this.el_.setAttribute('aria-label', 'Captions Menu');
                }
                CaptionsButton.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-captions-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
                };
                CaptionsButton.prototype.update = function update() {
                    var threshold = 2;
                    _TextTrackButton.prototype.update.call(this);
                    if (this.player().tech_ && this.player().tech_['featuresNativeTextTracks']) {
                        threshold = 1;
                    }
                    if (this.items && this.items.length > threshold) {
                        this.show();
                    } else {
                        this.hide();
                    }
                };
                CaptionsButton.prototype.createItems = function createItems() {
                    var items = [];
                    if (!(this.player().tech_ && this.player().tech_['featuresNativeTextTracks'])) {
                        items.push(new _captionSettingsMenuItemJs2['default'](this.player_, {
                            'kind': this.kind_
                        }));
                    }
                    return _TextTrackButton.prototype.createItems.call(this, items);
                };
                return CaptionsButton;
            })(_textTrackButtonJs2['default']);
            CaptionsButton.prototype.kind_ = 'captions';
            CaptionsButton.prototype.controlText_ = 'Captions';
            _componentJs2['default'].registerComponent('CaptionsButton', CaptionsButton);
            exports['default'] = CaptionsButton;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./caption-settings-menu-item.js": 81,
            "./text-track-button.js": 87
        }],
        83: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _textTrackButtonJs = _dereq_('./text-track-button.js');
            var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');
            var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);
            var _chaptersTrackMenuItemJs = _dereq_('./chapters-track-menu-item.js');
            var _chaptersTrackMenuItemJs2 = _interopRequireDefault(_chaptersTrackMenuItemJs);
            var _menuMenuJs = _dereq_('../../menu/menu.js');
            var _menuMenuJs2 = _interopRequireDefault(_menuMenuJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsToTitleCaseJs = _dereq_('../../utils/to-title-case.js');
            var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var ChaptersButton = (function(_TextTrackButton) {
                _inherits(ChaptersButton, _TextTrackButton);

                function ChaptersButton(player, options, ready) {
                    _classCallCheck(this, ChaptersButton);
                    _TextTrackButton.call(this, player, options, ready);
                    this.el_.setAttribute('aria-label', 'Chapters Menu');
                }
                ChaptersButton.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-chapters-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
                };
                ChaptersButton.prototype.createItems = function createItems() {
                    var items = [];
                    var tracks = this.player_.textTracks();
                    if (!tracks) {
                        return items;
                    }
                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];
                        if (track['kind'] === this.kind_) {
                            items.push(new _textTrackMenuItemJs2['default'](this.player_, {
                                'track': track
                            }));
                        }
                    }
                    return items;
                };
                ChaptersButton.prototype.createMenu = function createMenu() {
                    var _this = this;
                    var tracks = this.player_.textTracks() || [];
                    var chaptersTrack = undefined;
                    var items = this.items = [];
                    for (var i = 0, _length = tracks.length; i < _length; i++) {
                        var track = tracks[i];
                        if (track['kind'] === this.kind_) {
                            chaptersTrack = track;
                            break;
                        }
                    }
                    var menu = this.menu;
                    if (menu === undefined) {
                        menu = new _menuMenuJs2['default'](this.player_);
                        menu.contentEl().appendChild(Dom.createEl('li', {
                            className: 'vjs-menu-title',
                            innerHTML: _utilsToTitleCaseJs2['default'](this.kind_),
                            tabIndex: -1
                        }));
                    }
                    if (chaptersTrack && chaptersTrack.cues == null) {
                        chaptersTrack['mode'] = 'hidden';
                        var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(chaptersTrack);
                        if (remoteTextTrackEl) {
                            remoteTextTrackEl.addEventListener('load', function(event) {
                                return _this.update();
                            });
                        }
                    }
                    if (chaptersTrack && chaptersTrack.cues && chaptersTrack.cues.length > 0) {
                        var cues = chaptersTrack['cues'],
                            cue = undefined;
                        for (var i = 0, l = cues.length; i < l; i++) {
                            cue = cues[i];
                            var mi = new _chaptersTrackMenuItemJs2['default'](this.player_, {
                                'track': chaptersTrack,
                                'cue': cue
                            });
                            items.push(mi);
                            menu.addChild(mi);
                        }
                        this.addChild(menu);
                    }
                    if (this.items.length > 0) {
                        this.show();
                    }
                    return menu;
                };
                return ChaptersButton;
            })(_textTrackButtonJs2['default']);
            ChaptersButton.prototype.kind_ = 'chapters';
            ChaptersButton.prototype.controlText_ = 'Chapters';
            _componentJs2['default'].registerComponent('ChaptersButton', ChaptersButton);
            exports['default'] = ChaptersButton;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../menu/menu.js": 105,
            "../../utils/dom.js": 131,
            "../../utils/fn.js": 133,
            "../../utils/to-title-case.js": 140,
            "./chapters-track-menu-item.js": 84,
            "./text-track-button.js": 87,
            "./text-track-menu-item.js": 88,
            "global/window": 2
        }],
        84: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _menuMenuItemJs = _dereq_('../../menu/menu-item.js');
            var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var ChaptersTrackMenuItem = (function(_MenuItem) {
                _inherits(ChaptersTrackMenuItem, _MenuItem);

                function ChaptersTrackMenuItem(player, options) {
                    _classCallCheck(this, ChaptersTrackMenuItem);
                    var track = options['track'];
                    var cue = options['cue'];
                    var currentTime = player.currentTime();
                    options['label'] = cue.text;
                    options['selected'] = cue['startTime'] <= currentTime && currentTime < cue['endTime'];
                    _MenuItem.call(this, player, options);
                    this.track = track;
                    this.cue = cue;
                    track.addEventListener('cuechange', Fn.bind(this, this.update));
                }
                ChaptersTrackMenuItem.prototype.handleClick = function handleClick() {
                    _MenuItem.prototype.handleClick.call(this);
                    this.player_.currentTime(this.cue.startTime);
                    this.update(this.cue.startTime);
                };
                ChaptersTrackMenuItem.prototype.update = function update() {
                    var cue = this.cue;
                    var currentTime = this.player_.currentTime();
                    this.selected(cue['startTime'] <= currentTime && currentTime < cue['endTime']);
                };
                return ChaptersTrackMenuItem;
            })(_menuMenuItemJs2['default']);
            _componentJs2['default'].registerComponent('ChaptersTrackMenuItem', ChaptersTrackMenuItem);
            exports['default'] = ChaptersTrackMenuItem;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../menu/menu-item.js": 104,
            "../../utils/fn.js": 133
        }],
        85: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');
            var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var OffTextTrackMenuItem = (function(_TextTrackMenuItem) {
                _inherits(OffTextTrackMenuItem, _TextTrackMenuItem);

                function OffTextTrackMenuItem(player, options) {
                    _classCallCheck(this, OffTextTrackMenuItem);
                    options['track'] = {
                        'kind': options['kind'],
                        'player': player,
                        'label': options['kind'] + ' off',
                        'default': false,
                        'mode': 'disabled'
                    };
                    options['selectable'] = true;
                    _TextTrackMenuItem.call(this, player, options);
                    this.selected(true);
                }
                OffTextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
                    var tracks = this.player().textTracks();
                    var selected = true;
                    for (var i = 0, l = tracks.length; i < l; i++) {
                        var track = tracks[i];
                        if (track['kind'] === this.track['kind'] && track['mode'] === 'showing') {
                            selected = false;
                            break;
                        }
                    }
                    this.selected(selected);
                };
                return OffTextTrackMenuItem;
            })(_textTrackMenuItemJs2['default']);
            _componentJs2['default'].registerComponent('OffTextTrackMenuItem', OffTextTrackMenuItem);
            exports['default'] = OffTextTrackMenuItem;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./text-track-menu-item.js": 88
        }],
        86: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _textTrackButtonJs = _dereq_('./text-track-button.js');
            var _textTrackButtonJs2 = _interopRequireDefault(_textTrackButtonJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var SubtitlesButton = (function(_TextTrackButton) {
                _inherits(SubtitlesButton, _TextTrackButton);

                function SubtitlesButton(player, options, ready) {
                    _classCallCheck(this, SubtitlesButton);
                    _TextTrackButton.call(this, player, options, ready);
                    this.el_.setAttribute('aria-label', 'Subtitles Menu');
                }
                SubtitlesButton.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-subtitles-button ' + _TextTrackButton.prototype.buildCSSClass.call(this);
                };
                return SubtitlesButton;
            })(_textTrackButtonJs2['default']);
            SubtitlesButton.prototype.kind_ = 'subtitles';
            SubtitlesButton.prototype.controlText_ = 'Subtitles';
            _componentJs2['default'].registerComponent('SubtitlesButton', SubtitlesButton);
            exports['default'] = SubtitlesButton;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./text-track-button.js": 87
        }],
        87: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _menuMenuButtonJs = _dereq_('../../menu/menu-button.js');
            var _menuMenuButtonJs2 = _interopRequireDefault(_menuMenuButtonJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _textTrackMenuItemJs = _dereq_('./text-track-menu-item.js');
            var _textTrackMenuItemJs2 = _interopRequireDefault(_textTrackMenuItemJs);
            var _offTextTrackMenuItemJs = _dereq_('./off-text-track-menu-item.js');
            var _offTextTrackMenuItemJs2 = _interopRequireDefault(_offTextTrackMenuItemJs);
            var TextTrackButton = (function(_MenuButton) {
                _inherits(TextTrackButton, _MenuButton);

                function TextTrackButton(player, options) {
                    _classCallCheck(this, TextTrackButton);
                    _MenuButton.call(this, player, options);
                    var tracks = this.player_.textTracks();
                    if (this.items.length <= 1) {
                        this.hide();
                    }
                    if (!tracks) {
                        return;
                    }
                    var updateHandler = Fn.bind(this, this.update);
                    tracks.addEventListener('removetrack', updateHandler);
                    tracks.addEventListener('addtrack', updateHandler);
                    this.player_.on('dispose', function() {
                        tracks.removeEventListener('removetrack', updateHandler);
                        tracks.removeEventListener('addtrack', updateHandler);
                    });
                }
                TextTrackButton.prototype.createItems = function createItems() {
                    var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
                    items.push(new _offTextTrackMenuItemJs2['default'](this.player_, {
                        'kind': this.kind_
                    }));
                    var tracks = this.player_.textTracks();
                    if (!tracks) {
                        return items;
                    }
                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];
                        if (track['kind'] === this.kind_) {
                            items.push(new _textTrackMenuItemJs2['default'](this.player_, {
                                'selectable': true,
                                'track': track
                            }));
                        }
                    }
                    return items;
                };
                return TextTrackButton;
            })(_menuMenuButtonJs2['default']);
            _componentJs2['default'].registerComponent('TextTrackButton', TextTrackButton);
            exports['default'] = TextTrackButton;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../menu/menu-button.js": 103,
            "../../utils/fn.js": 133,
            "./off-text-track-menu-item.js": 85,
            "./text-track-menu-item.js": 88
        }],
        88: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _menuMenuItemJs = _dereq_('../../menu/menu-item.js');
            var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var TextTrackMenuItem = (function(_MenuItem) {
                _inherits(TextTrackMenuItem, _MenuItem);

                function TextTrackMenuItem(player, options) {
                    var _this = this;
                    _classCallCheck(this, TextTrackMenuItem);
                    var track = options['track'];
                    var tracks = player.textTracks();
                    options['label'] = track['label'] || track['language'] || 'Unknown';
                    options['selected'] = track['default'] || track['mode'] === 'showing';
                    _MenuItem.call(this, player, options);
                    this.track = track;
                    if (tracks) {
                        (function() {
                            var changeHandler = Fn.bind(_this, _this.handleTracksChange);
                            tracks.addEventListener('change', changeHandler);
                            _this.on('dispose', function() {
                                tracks.removeEventListener('change', changeHandler);
                            });
                        })();
                    }
                    if (tracks && tracks.onchange === undefined) {
                        (function() {
                            var event = undefined;
                            _this.on(['tap', 'click'], function() {
                                if (typeof _globalWindow2['default'].Event !== 'object') {
                                    try {
                                        event = new _globalWindow2['default'].Event('change');
                                    } catch (err) {}
                                }
                                if (!event) {
                                    event = _globalDocument2['default'].createEvent('Event');
                                    event.initEvent('change', true, true);
                                }
                                tracks.dispatchEvent(event);
                            });
                        })();
                    }
                }
                TextTrackMenuItem.prototype.handleClick = function handleClick(event) {
                    var kind = this.track['kind'];
                    var tracks = this.player_.textTracks();
                    _MenuItem.prototype.handleClick.call(this, event);
                    if (!tracks) return;
                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];
                        if (track['kind'] !== kind) {
                            continue;
                        }
                        if (track === this.track) {
                            track['mode'] = 'showing';
                        } else {
                            track['mode'] = 'disabled';
                        }
                    }
                };
                TextTrackMenuItem.prototype.handleTracksChange = function handleTracksChange(event) {
                    this.selected(this.track['mode'] === 'showing');
                };
                return TextTrackMenuItem;
            })(_menuMenuItemJs2['default']);
            _componentJs2['default'].registerComponent('TextTrackMenuItem', TextTrackMenuItem);
            exports['default'] = TextTrackMenuItem;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../menu/menu-item.js": 104,
            "../../utils/fn.js": 133,
            "global/document": 1,
            "global/window": 2
        }],
        89: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var CurrentTimeDisplay = (function(_Component) {
                _inherits(CurrentTimeDisplay, _Component);

                function CurrentTimeDisplay(player, options) {
                    _classCallCheck(this, CurrentTimeDisplay);
                    _Component.call(this, player, options);
                    this.on(player, 'timeupdate', this.updateContent);
                }
                CurrentTimeDisplay.prototype.createEl = function createEl() {
                    var el = _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-current-time vjs-time-control vjs-control'
                    });
                    this.contentEl_ = Dom.createEl('div', {
                        className: 'vjs-current-time-display',
                        innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00'
                    }, {
                        'aria-live': 'off'
                    });
                    el.appendChild(this.contentEl_);
                    return el;
                };
                CurrentTimeDisplay.prototype.updateContent = function updateContent() {
                    var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    var localizedText = this.localize('Current Time');
                    var formattedTime = _utilsFormatTimeJs2['default'](time, this.player_.duration());
                    this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> ' + formattedTime;
                };
                return CurrentTimeDisplay;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('CurrentTimeDisplay', CurrentTimeDisplay);
            exports['default'] = CurrentTimeDisplay;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../utils/dom.js": 131,
            "../../utils/format-time.js": 134
        }],
        90: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var DurationDisplay = (function(_Component) {
                _inherits(DurationDisplay, _Component);

                function DurationDisplay(player, options) {
                    _classCallCheck(this, DurationDisplay);
                    _Component.call(this, player, options);
                    this.on(player, 'timeupdate', this.updateContent);
                    this.on(player, 'loadedmetadata', this.updateContent);
                }
                DurationDisplay.prototype.createEl = function createEl() {
                    var el = _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-duration vjs-time-control vjs-control'
                    });
                    this.contentEl_ = Dom.createEl('div', {
                        className: 'vjs-duration-display',
                        innerHTML: '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> 0:00'
                    }, {
                        'aria-live': 'off'
                    });
                    el.appendChild(this.contentEl_);
                    return el;
                };
                DurationDisplay.prototype.updateContent = function updateContent() {
                    var duration = this.player_.duration();
                    if (duration) {
                        var localizedText = this.localize('Duration Time');
                        var formattedTime = _utilsFormatTimeJs2['default'](duration);
                        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> ' + formattedTime;
                    }
                };
                return DurationDisplay;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('DurationDisplay', DurationDisplay);
            exports['default'] = DurationDisplay;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../utils/dom.js": 131,
            "../../utils/format-time.js": 134
        }],
        91: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFormatTimeJs = _dereq_('../../utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var RemainingTimeDisplay = (function(_Component) {
                _inherits(RemainingTimeDisplay, _Component);

                function RemainingTimeDisplay(player, options) {
                    _classCallCheck(this, RemainingTimeDisplay);
                    _Component.call(this, player, options);
                    this.on(player, 'timeupdate', this.updateContent);
                }
                RemainingTimeDisplay.prototype.createEl = function createEl() {
                    var el = _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-remaining-time vjs-time-control vjs-control'
                    });
                    this.contentEl_ = Dom.createEl('div', {
                        className: 'vjs-remaining-time-display',
                        innerHTML: '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> -0:00'
                    }, {
                        'aria-live': 'off'
                    });
                    el.appendChild(this.contentEl_);
                    return el;
                };
                RemainingTimeDisplay.prototype.updateContent = function updateContent() {
                    if (this.player_.duration()) {
                        var localizedText = this.localize('Remaining Time');
                        var formattedTime = _utilsFormatTimeJs2['default'](this.player_.remainingTime());
                        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + localizedText + '</span> -' + formattedTime;
                    }
                };
                return RemainingTimeDisplay;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('RemainingTimeDisplay', RemainingTimeDisplay);
            exports['default'] = RemainingTimeDisplay;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../utils/dom.js": 131,
            "../../utils/format-time.js": 134
        }],
        92: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var TimeDivider = (function(_Component) {
                _inherits(TimeDivider, _Component);

                function TimeDivider() {
                    _classCallCheck(this, TimeDivider);
                    _Component.apply(this, arguments);
                }
                TimeDivider.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-time-control vjs-time-divider',
                        innerHTML: '<div><span>/</span></div>'
                    });
                };
                return TimeDivider;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('TimeDivider', TimeDivider);
            exports['default'] = TimeDivider;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66
        }],
        93: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _sliderSliderJs = _dereq_('../../slider/slider.js');
            var _sliderSliderJs2 = _interopRequireDefault(_sliderSliderJs);
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsFnJs = _dereq_('../../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _volumeLevelJs = _dereq_('./volume-level.js');
            var _volumeLevelJs2 = _interopRequireDefault(_volumeLevelJs);
            var VolumeBar = (function(_Slider) {
                _inherits(VolumeBar, _Slider);

                function VolumeBar(player, options) {
                    _classCallCheck(this, VolumeBar);
                    _Slider.call(this, player, options);
                    this.on(player, 'volumechange', this.updateARIAAttributes);
                    player.ready(Fn.bind(this, this.updateARIAAttributes));
                }
                VolumeBar.prototype.createEl = function createEl() {
                    return _Slider.prototype.createEl.call(this, 'div', {
                        className: 'vjs-volume-bar vjs-slider-bar'
                    }, {
                        'aria-label': 'volume level'
                    });
                };
                VolumeBar.prototype.handleMouseMove = function handleMouseMove(event) {
                    this.checkMuted();
                    this.player_.volume(this.calculateDistance(event));
                };
                VolumeBar.prototype.checkMuted = function checkMuted() {
                    if (this.player_.muted()) {
                        this.player_.muted(false);
                    }
                };
                VolumeBar.prototype.getPercent = function getPercent() {
                    if (this.player_.muted()) {
                        return 0;
                    } else {
                        return this.player_.volume();
                    }
                };
                VolumeBar.prototype.stepForward = function stepForward() {
                    this.checkMuted();
                    this.player_.volume(this.player_.volume() + 0.1);
                };
                VolumeBar.prototype.stepBack = function stepBack() {
                    this.checkMuted();
                    this.player_.volume(this.player_.volume() - 0.1);
                };
                VolumeBar.prototype.updateARIAAttributes = function updateARIAAttributes() {
                    var volume = (this.player_.volume() * 100).toFixed(2);
                    this.el_.setAttribute('aria-valuenow', volume);
                    this.el_.setAttribute('aria-valuetext', volume + '%');
                };
                return VolumeBar;
            })(_sliderSliderJs2['default']);
            VolumeBar.prototype.options_ = {
                children: ['volumeLevel'],
                'barName': 'volumeLevel'
            };
            VolumeBar.prototype.playerEvent = 'volumechange';
            _componentJs2['default'].registerComponent('VolumeBar', VolumeBar);
            exports['default'] = VolumeBar;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "../../slider/slider.js": 113,
            "../../utils/fn.js": 133,
            "./volume-level.js": 95
        }],
        94: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _volumeBarJs = _dereq_('./volume-bar.js');
            var _volumeBarJs2 = _interopRequireDefault(_volumeBarJs);
            var VolumeControl = (function(_Component) {
                _inherits(VolumeControl, _Component);

                function VolumeControl(player, options) {
                    _classCallCheck(this, VolumeControl);
                    _Component.call(this, player, options);
                    if (player.tech_ && player.tech_['featuresVolumeControl'] === false) {
                        this.addClass('vjs-hidden');
                    }
                    this.on(player, 'loadstart', function() {
                        if (player.tech_['featuresVolumeControl'] === false) {
                            this.addClass('vjs-hidden');
                        } else {
                            this.removeClass('vjs-hidden');
                        }
                    });
                }
                VolumeControl.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-volume-control vjs-control'
                    });
                };
                return VolumeControl;
            })(_componentJs2['default']);
            VolumeControl.prototype.options_ = {
                children: ['volumeBar']
            };
            _componentJs2['default'].registerComponent('VolumeControl', VolumeControl);
            exports['default'] = VolumeControl;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66,
            "./volume-bar.js": 93
        }],
        95: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var VolumeLevel = (function(_Component) {
                _inherits(VolumeLevel, _Component);

                function VolumeLevel() {
                    _classCallCheck(this, VolumeLevel);
                    _Component.apply(this, arguments);
                }
                VolumeLevel.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-volume-level',
                        innerHTML: '<span class="vjs-control-text"></span>'
                    });
                };
                return VolumeLevel;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('VolumeLevel', VolumeLevel);
            exports['default'] = VolumeLevel;
            module.exports = exports['default'];
        }, {
            "../../component.js": 66
        }],
        96: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _popupPopupJs = _dereq_('../popup/popup.js');
            var _popupPopupJs2 = _interopRequireDefault(_popupPopupJs);
            var _popupPopupButtonJs = _dereq_('../popup/popup-button.js');
            var _popupPopupButtonJs2 = _interopRequireDefault(_popupPopupButtonJs);
            var _muteToggleJs = _dereq_('./mute-toggle.js');
            var _muteToggleJs2 = _interopRequireDefault(_muteToggleJs);
            var _volumeControlVolumeBarJs = _dereq_('./volume-control/volume-bar.js');
            var _volumeControlVolumeBarJs2 = _interopRequireDefault(_volumeControlVolumeBarJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var VolumeMenuButton = (function(_PopupButton) {
                _inherits(VolumeMenuButton, _PopupButton);

                function VolumeMenuButton(player) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    _classCallCheck(this, VolumeMenuButton);
                    if (options.inline === undefined) {
                        options.inline = true;
                    }
                    if (options.vertical === undefined) {
                        if (options.inline) {
                            options.vertical = false;
                        } else {
                            options.vertical = true;
                        }
                    }
                    options.volumeBar = options.volumeBar || {};
                    options.volumeBar.vertical = !!options.vertical;
                    _PopupButton.call(this, player, options);
                    this.on(player, 'volumechange', this.volumeUpdate);
                    this.on(player, 'loadstart', this.volumeUpdate);

                    function updateVisibility() {
                        if (player.tech_ && player.tech_['featuresVolumeControl'] === false) {
                            this.addClass('vjs-hidden');
                        } else {
                            this.removeClass('vjs-hidden');
                        }
                    }
                    updateVisibility.call(this);
                    this.on(player, 'loadstart', updateVisibility);
                    this.on(this.volumeBar, ['slideractive', 'focus'], function() {
                        this.addClass('vjs-slider-active');
                    });
                    this.on(this.volumeBar, ['sliderinactive', 'blur'], function() {
                        this.removeClass('vjs-slider-active');
                    });
                    this.on(this.volumeBar, ['focus'], function() {
                        this.addClass('vjs-lock-showing');
                    });
                    this.on(this.volumeBar, ['blur'], function() {
                        this.removeClass('vjs-lock-showing');
                    });
                }
                VolumeMenuButton.prototype.buildCSSClass = function buildCSSClass() {
                    var orientationClass = '';
                    if (!!this.options_.vertical) {
                        orientationClass = 'vjs-volume-menu-button-vertical';
                    } else {
                        orientationClass = 'vjs-volume-menu-button-horizontal';
                    }
                    return 'vjs-volume-menu-button ' + _PopupButton.prototype.buildCSSClass.call(this) + ' ' + orientationClass;
                };
                VolumeMenuButton.prototype.createPopup = function createPopup() {
                    var popup = new _popupPopupJs2['default'](this.player_, {
                        contentElType: 'div'
                    });
                    var vb = new _volumeControlVolumeBarJs2['default'](this.player_, this.options_.volumeBar);
                    popup.addChild(vb);
                    this.volumeBar = vb;
                    this.attachVolumeBarEvents();
                    return popup;
                };
                VolumeMenuButton.prototype.handleClick = function handleClick() {
                    _muteToggleJs2['default'].prototype.handleClick.call(this);
                    _PopupButton.prototype.handleClick.call(this);
                };
                VolumeMenuButton.prototype.attachVolumeBarEvents = function attachVolumeBarEvents() {
                    this.on(['mousedown', 'touchdown'], this.handleMouseDown);
                };
                VolumeMenuButton.prototype.handleMouseDown = function handleMouseDown(event) {
                    this.on(['mousemove', 'touchmove'], Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove));
                    this.on(_globalDocument2['default'], ['mouseup', 'touchend'], this.handleMouseUp);
                };
                VolumeMenuButton.prototype.handleMouseUp = function handleMouseUp(event) {
                    this.off(['mousemove', 'touchmove'], Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove));
                };
                return VolumeMenuButton;
            })(_popupPopupButtonJs2['default']);
            VolumeMenuButton.prototype.volumeUpdate = _muteToggleJs2['default'].prototype.update;
            VolumeMenuButton.prototype.controlText_ = 'Mute';
            _componentJs2['default'].registerComponent('VolumeMenuButton', VolumeMenuButton);
            exports['default'] = VolumeMenuButton;
            module.exports = exports['default'];
        }, {
            "../component.js": 66,
            "../popup/popup-button.js": 109,
            "../popup/popup.js": 110,
            "../utils/fn.js": 133,
            "./mute-toggle.js": 70,
            "./volume-control/volume-bar.js": 93,
            "global/document": 1
        }],
        97: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var _modalDialog = _dereq_('./modal-dialog');
            var _modalDialog2 = _interopRequireDefault(_modalDialog);
            var _utilsDom = _dereq_('./utils/dom');
            var Dom = _interopRequireWildcard(_utilsDom);
            var _utilsMergeOptions = _dereq_('./utils/merge-options');
            var _utilsMergeOptions2 = _interopRequireDefault(_utilsMergeOptions);
            var ErrorDisplay = (function(_ModalDialog) {
                _inherits(ErrorDisplay, _ModalDialog);

                function ErrorDisplay(player, options) {
                    _classCallCheck(this, ErrorDisplay);
                    _ModalDialog.call(this, player, options);
                    this.on(player, 'error', this.open);
                }
                ErrorDisplay.prototype.buildCSSClass = function buildCSSClass() {
                    return 'vjs-error-display ' + _ModalDialog.prototype.buildCSSClass.call(this);
                };
                ErrorDisplay.prototype.content = function content() {
                    var error = this.player().error();
                    return error ? this.localize(error.message) : '';
                };
                return ErrorDisplay;
            })(_modalDialog2['default']);
            ErrorDisplay.prototype.options_ = _utilsMergeOptions2['default'](_modalDialog2['default'].prototype.options_, {
                fillAlways: true,
                temporary: false,
                uncloseable: true
            });
            _component2['default'].registerComponent('ErrorDisplay', ErrorDisplay);
            exports['default'] = ErrorDisplay;
            module.exports = exports['default'];
        }, {
            "./component": 66,
            "./modal-dialog": 106,
            "./utils/dom": 131,
            "./utils/merge-options": 137
        }],
        98: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var EventTarget = function EventTarget() {};
            EventTarget.prototype.allowedEvents_ = {};
            EventTarget.prototype.on = function(type, fn) {
                var ael = this.addEventListener;
                this.addEventListener = Function.prototype;
                Events.on(this, type, fn);
                this.addEventListener = ael;
            };
            EventTarget.prototype.addEventListener = EventTarget.prototype.on;
            EventTarget.prototype.off = function(type, fn) {
                Events.off(this, type, fn);
            };
            EventTarget.prototype.removeEventListener = EventTarget.prototype.off;
            EventTarget.prototype.one = function(type, fn) {
                Events.one(this, type, fn);
            };
            EventTarget.prototype.trigger = function(event) {
                var type = event.type || event;
                if (typeof event === 'string') {
                    event = {
                        type: type
                    };
                }
                event = Events.fixEvent(event);
                if (this.allowedEvents_[type] && this['on' + type]) {
                    this['on' + type](event);
                }
                Events.trigger(this, event);
            };
            EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;
            exports['default'] = EventTarget;
            module.exports = exports['default'];
        }, {
            "./utils/events.js": 132
        }],
        99: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _utilsLog = _dereq_('./utils/log');
            var _utilsLog2 = _interopRequireDefault(_utilsLog);
            var _inherits = function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) {
                    subClass.super_ = superClass;
                }
            };
            var extendFn = function extendFn(superClass) {
                var subClassMethods = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                var subClass = function subClass() {
                    superClass.apply(this, arguments);
                };
                var methods = {};
                if (typeof subClassMethods === 'object') {
                    if (typeof subClassMethods.init === 'function') {
                        _utilsLog2['default'].warn('Constructor logic via init() is deprecated; please use constructor() instead.');
                        subClassMethods.constructor = subClassMethods.init;
                    }
                    if (subClassMethods.constructor !== Object.prototype.constructor) {
                        subClass = subClassMethods.constructor;
                    }
                    methods = subClassMethods;
                } else if (typeof subClassMethods === 'function') {
                    subClass = subClassMethods;
                }
                _inherits(subClass, superClass);
                for (var name in methods) {
                    if (methods.hasOwnProperty(name)) {
                        subClass.prototype[name] = methods[name];
                    }
                }
                return subClass;
            };
            exports['default'] = extendFn;
            module.exports = exports['default'];
        }, {
            "./utils/log": 136
        }],
        100: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var FullscreenApi = {};
            var apiMap = [
                ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
                ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
                ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
                ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
                ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']
            ];
            var specApi = apiMap[0];
            var browserApi = undefined;
            for (var i = 0; i < apiMap.length; i++) {
                if (apiMap[i][1] in _globalDocument2['default']) {
                    browserApi = apiMap[i];
                    break;
                }
            }
            if (browserApi) {
                for (var i = 0; i < browserApi.length; i++) {
                    FullscreenApi[specApi[i]] = browserApi[i];
                }
            }
            exports['default'] = FullscreenApi;
            module.exports = exports['default'];
        }, {
            "global/document": 1
        }],
        101: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var LoadingSpinner = (function(_Component) {
                _inherits(LoadingSpinner, _Component);

                function LoadingSpinner() {
                    _classCallCheck(this, LoadingSpinner);
                    _Component.apply(this, arguments);
                }
                LoadingSpinner.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-loading-spinner'
                    });
                };
                return LoadingSpinner;
            })(_component2['default']);
            _component2['default'].registerComponent('LoadingSpinner', LoadingSpinner);
            exports['default'] = LoadingSpinner;
            module.exports = exports['default'];
        }, {
            "./component": 66
        }],
        102: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var MediaError = function MediaError(code) {
                if (typeof code === 'number') {
                    this.code = code;
                } else if (typeof code === 'string') {
                    this.message = code;
                } else if (typeof code === 'object') {
                    _objectAssign2['default'](this, code);
                }
                if (!this.message) {
                    this.message = MediaError.defaultMessages[this.code] || '';
                }
            };
            MediaError.prototype.code = 0;
            MediaError.prototype.message = '';
            MediaError.prototype.status = null;
            MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];
            MediaError.defaultMessages = {
                1: 'You aborted the media playback',
                2: 'A network error caused the media download to fail part-way.',
                3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
                4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
                5: 'The media is encrypted and we do not have the keys to decrypt it.'
            };
            for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
                MediaError[MediaError.errorTypes[errNum]] = errNum;
                MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
            }
            exports['default'] = MediaError;
            module.exports = exports['default'];
        }, {
            "object.assign": 45
        }],
        103: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _clickableComponentJs = _dereq_('../clickable-component.js');
            var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _menuJs = _dereq_('./menu.js');
            var _menuJs2 = _interopRequireDefault(_menuJs);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsToTitleCaseJs = _dereq_('../utils/to-title-case.js');
            var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);
            var MenuButton = (function(_ClickableComponent) {
                _inherits(MenuButton, _ClickableComponent);

                function MenuButton(player) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    _classCallCheck(this, MenuButton);
                    _ClickableComponent.call(this, player, options);
                    this.update();
                    this.el_.setAttribute('aria-haspopup', true);
                    this.el_.setAttribute('role', 'menuitem');
                    this.on('keydown', this.handleSubmenuKeyPress);
                }
                MenuButton.prototype.update = function update() {
                    var menu = this.createMenu();
                    if (this.menu) {
                        this.removeChild(this.menu);
                    }
                    this.menu = menu;
                    this.addChild(menu);
                    this.buttonPressed_ = false;
                    this.el_.setAttribute('aria-expanded', false);
                    if (this.items && this.items.length === 0) {
                        this.hide();
                    } else if (this.items && this.items.length > 1) {
                        this.show();
                    }
                };
                MenuButton.prototype.createMenu = function createMenu() {
                    var menu = new _menuJs2['default'](this.player_);
                    if (this.options_.title) {
                        menu.contentEl().appendChild(Dom.createEl('li', {
                            className: 'vjs-menu-title',
                            innerHTML: _utilsToTitleCaseJs2['default'](this.options_.title),
                            tabIndex: -1
                        }));
                    }
                    this.items = this['createItems']();
                    if (this.items) {
                        for (var i = 0; i < this.items.length; i++) {
                            menu.addItem(this.items[i]);
                        }
                    }
                    return menu;
                };
                MenuButton.prototype.createItems = function createItems() {};
                MenuButton.prototype.createEl = function createEl() {
                    return _ClickableComponent.prototype.createEl.call(this, 'div', {
                        className: this.buildCSSClass()
                    });
                };
                MenuButton.prototype.buildCSSClass = function buildCSSClass() {
                    var menuButtonClass = 'vjs-menu-button';
                    if (this.options_.inline === true) {
                        menuButtonClass += '-inline';
                    } else {
                        menuButtonClass += '-popup';
                    }
                    return 'vjs-menu-button ' + menuButtonClass + ' ' + _ClickableComponent.prototype.buildCSSClass.call(this);
                };
                MenuButton.prototype.handleClick = function handleClick() {
                    this.one('mouseout', Fn.bind(this, function() {
                        this.menu.unlockShowing();
                        this.el_.blur();
                    }));
                    if (this.buttonPressed_) {
                        this.unpressButton();
                    } else {
                        this.pressButton();
                    }
                };
                MenuButton.prototype.handleKeyPress = function handleKeyPress(event) {
                    if (event.which === 27 || event.which === 9) {
                        if (this.buttonPressed_) {
                            this.unpressButton();
                        }
                        if (event.which !== 9) {
                            event.preventDefault();
                        }
                    } else if (event.which === 38 || event.which === 40) {
                        if (!this.buttonPressed_) {
                            this.pressButton();
                            event.preventDefault();
                        }
                    } else {
                        _ClickableComponent.prototype.handleKeyPress.call(this, event);
                    }
                };
                MenuButton.prototype.handleSubmenuKeyPress = function handleSubmenuKeyPress(event) {
                    if (event.which === 27 || event.which === 9) {
                        if (this.buttonPressed_) {
                            this.unpressButton();
                        }
                        if (event.which !== 9) {
                            event.preventDefault();
                        }
                    }
                };
                MenuButton.prototype.pressButton = function pressButton() {
                    this.buttonPressed_ = true;
                    this.menu.lockShowing();
                    this.el_.setAttribute('aria-expanded', true);
                    this.menu.focus();
                };
                MenuButton.prototype.unpressButton = function unpressButton() {
                    this.buttonPressed_ = false;
                    this.menu.unlockShowing();
                    this.el_.setAttribute('aria-expanded', false);
                    this.el_.focus();
                };
                return MenuButton;
            })(_clickableComponentJs2['default']);
            _componentJs2['default'].registerComponent('MenuButton', MenuButton);
            exports['default'] = MenuButton;
            module.exports = exports['default'];
        }, {
            "../clickable-component.js": 64,
            "../component.js": 66,
            "../utils/dom.js": 131,
            "../utils/fn.js": 133,
            "../utils/to-title-case.js": 140,
            "./menu.js": 105
        }],
        104: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _clickableComponentJs = _dereq_('../clickable-component.js');
            var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var MenuItem = (function(_ClickableComponent) {
                _inherits(MenuItem, _ClickableComponent);

                function MenuItem(player, options) {
                    _classCallCheck(this, MenuItem);
                    _ClickableComponent.call(this, player, options);
                    this.selectable = options['selectable'];
                    this.selected(options['selected']);
                    if (this.selectable) {
                        this.el_.setAttribute('role', 'menuitemcheckbox');
                    } else {
                        this.el_.setAttribute('role', 'menuitem');
                    }
                }
                MenuItem.prototype.createEl = function createEl(type, props, attrs) {
                    return _ClickableComponent.prototype.createEl.call(this, 'li', _objectAssign2['default']({
                        className: 'vjs-menu-item',
                        innerHTML: this.localize(this.options_['label']),
                        tabIndex: -1
                    }, props), attrs);
                };
                MenuItem.prototype.handleClick = function handleClick() {
                    this.selected(true);
                };
                MenuItem.prototype.selected = function selected(_selected) {
                    if (this.selectable) {
                        if (_selected) {
                            this.addClass('vjs-selected');
                            this.el_.setAttribute('aria-checked', true);
                            this.controlText(', selected');
                        } else {
                            this.removeClass('vjs-selected');
                            this.el_.setAttribute('aria-checked', false);
                            this.controlText(' ');
                        }
                    }
                };
                return MenuItem;
            })(_clickableComponentJs2['default']);
            _componentJs2['default'].registerComponent('MenuItem', MenuItem);
            exports['default'] = MenuItem;
            module.exports = exports['default'];
        }, {
            "../clickable-component.js": 64,
            "../component.js": 66,
            "object.assign": 45
        }],
        105: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsEventsJs = _dereq_('../utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var Menu = (function(_Component) {
                _inherits(Menu, _Component);

                function Menu(player, options) {
                    _classCallCheck(this, Menu);
                    _Component.call(this, player, options);
                    this.focusedChild_ = -1;
                    this.on('keydown', this.handleKeyPress);
                }
                Menu.prototype.addItem = function addItem(component) {
                    this.addChild(component);
                    component.on('click', Fn.bind(this, function() {
                        this.unlockShowing();
                    }));
                };
                Menu.prototype.createEl = function createEl() {
                    var contentElType = this.options_.contentElType || 'ul';
                    this.contentEl_ = Dom.createEl(contentElType, {
                        className: 'vjs-menu-content'
                    });
                    this.contentEl_.setAttribute('role', 'menu');
                    var el = _Component.prototype.createEl.call(this, 'div', {
                        append: this.contentEl_,
                        className: 'vjs-menu'
                    });
                    el.setAttribute('role', 'presentation');
                    el.appendChild(this.contentEl_);
                    Events.on(el, 'click', function(event) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    });
                    return el;
                };
                Menu.prototype.handleKeyPress = function handleKeyPress(event) {
                    if (event.which === 37 || event.which === 40) {
                        event.preventDefault();
                        this.stepForward();
                    } else if (event.which === 38 || event.which === 39) {
                        event.preventDefault();
                        this.stepBack();
                    }
                };
                Menu.prototype.stepForward = function stepForward() {
                    var stepChild = 0;
                    if (this.focusedChild_ !== undefined) {
                        stepChild = this.focusedChild_ + 1;
                    }
                    this.focus(stepChild);
                };
                Menu.prototype.stepBack = function stepBack() {
                    var stepChild = 0;
                    if (this.focusedChild_ !== undefined) {
                        stepChild = this.focusedChild_ - 1;
                    }
                    this.focus(stepChild);
                };
                Menu.prototype.focus = function focus() {
                    var item = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                    var children = this.children();
                    if (children.length > 0) {
                        if (item < 0) {
                            item = 0;
                        } else if (item >= children.length) {
                            item = children.length - 1;
                        }
                        this.focusedChild_ = item;
                        children[item].el_.focus();
                    }
                };
                return Menu;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('Menu', Menu);
            exports['default'] = Menu;
            module.exports = exports['default'];
        }, {
            "../component.js": 66,
            "../utils/dom.js": 131,
            "../utils/events.js": 132,
            "../utils/fn.js": 133
        }],
        106: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _utilsDom = _dereq_('./utils/dom');
            var Dom = _interopRequireWildcard(_utilsDom);
            var _utilsFn = _dereq_('./utils/fn');
            var Fn = _interopRequireWildcard(_utilsFn);
            var _utilsLog = _dereq_('./utils/log');
            var _utilsLog2 = _interopRequireDefault(_utilsLog);
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var _closeButton = _dereq_('./close-button');
            var _closeButton2 = _interopRequireDefault(_closeButton);
            var MODAL_CLASS_NAME = 'vjs-modal-dialog';
            var ESC = 27;
            var ModalDialog = (function(_Component) {
                _inherits(ModalDialog, _Component);

                function ModalDialog(player, options) {
                    _classCallCheck(this, ModalDialog);
                    _Component.call(this, player, options);
                    this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = false;
                    this.closeable(!this.options_.uncloseable);
                    this.content(this.options_.content);
                    this.contentEl_ = Dom.createEl('div', {
                        className: MODAL_CLASS_NAME + '-content'
                    }, {
                        role: 'document'
                    });
                    this.descEl_ = Dom.createEl('p', {
                        className: MODAL_CLASS_NAME + '-description vjs-offscreen',
                        id: this.el().getAttribute('aria-describedby')
                    });
                    Dom.textContent(this.descEl_, this.description());
                    this.el_.appendChild(this.descEl_);
                    this.el_.appendChild(this.contentEl_);
                }
                ModalDialog.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: this.buildCSSClass(),
                        tabIndex: -1
                    }, {
                        'aria-describedby': this.id() + '_description',
                        'aria-hidden': 'true',
                        'aria-label': this.label(),
                        role: 'dialog'
                    });
                };
                ModalDialog.prototype.buildCSSClass = function buildCSSClass() {
                    return MODAL_CLASS_NAME + ' vjs-hidden ' + _Component.prototype.buildCSSClass.call(this);
                };
                ModalDialog.prototype.handleKeyPress = function handleKeyPress(e) {
                    if (e.which === ESC && this.closeable()) {
                        this.close();
                    }
                };
                ModalDialog.prototype.label = function label() {
                    return this.options_.label || this.localize('Modal Window');
                };
                ModalDialog.prototype.description = function description() {
                    var desc = this.options_.description || this.localize('This is a modal window.');
                    if (this.closeable()) {
                        desc += ' ' + this.localize('This modal can be closed by pressing the Escape key or activating the close button.');
                    }
                    return desc;
                };
                ModalDialog.prototype.open = function open() {
                    if (!this.opened_) {
                        var player = this.player();
                        this.trigger('beforemodalopen');
                        this.opened_ = true;
                        if (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) {
                            this.fill();
                        }
                        this.wasPlaying_ = !player.paused();
                        if (this.wasPlaying_) {
                            player.pause();
                        }
                        if (this.closeable()) {
                            this.on(_globalDocument2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
                        }
                        player.controls(false);
                        this.show();
                        this.el().setAttribute('aria-hidden', 'false');
                        this.trigger('modalopen');
                        this.hasBeenOpened_ = true;
                    }
                    return this;
                };
                ModalDialog.prototype.opened = function opened(value) {
                    if (typeof value === 'boolean') {
                        this[value ? 'open' : 'close']();
                    }
                    return this.opened_;
                };
                ModalDialog.prototype.close = function close() {
                    if (this.opened_) {
                        var player = this.player();
                        this.trigger('beforemodalclose');
                        this.opened_ = false;
                        if (this.wasPlaying_) {
                            player.play();
                        }
                        if (this.closeable()) {
                            this.off(_globalDocument2['default'], 'keydown', Fn.bind(this, this.handleKeyPress));
                        }
                        player.controls(true);
                        this.hide();
                        this.el().setAttribute('aria-hidden', 'true');
                        this.trigger('modalclose');
                        if (this.options_.temporary) {
                            this.dispose();
                        }
                    }
                    return this;
                };
                ModalDialog.prototype.closeable = function closeable(value) {
                    if (typeof value === 'boolean') {
                        var closeable = this.closeable_ = !!value;
                        var _close = this.getChild('closeButton');
                        if (closeable && !_close) {
                            var temp = this.contentEl_;
                            this.contentEl_ = this.el_;
                            _close = this.addChild('closeButton');
                            this.contentEl_ = temp;
                            this.on(_close, 'close', this.close);
                        }
                        if (!closeable && _close) {
                            this.off(_close, 'close', this.close);
                            this.removeChild(_close);
                            _close.dispose();
                        }
                    }
                    return this.closeable_;
                };
                ModalDialog.prototype.fill = function fill() {
                    return this.fillWith(this.content());
                };
                ModalDialog.prototype.fillWith = function fillWith(content) {
                    var contentEl = this.contentEl();
                    var parentEl = contentEl.parentNode;
                    var nextSiblingEl = contentEl.nextSibling;
                    this.trigger('beforemodalfill');
                    this.hasBeenFilled_ = true;
                    parentEl.removeChild(contentEl);
                    this.empty();
                    Dom.insertContent(contentEl, content);
                    this.trigger('modalfill');
                    if (nextSiblingEl) {
                        parentEl.insertBefore(contentEl, nextSiblingEl);
                    } else {
                        parentEl.appendChild(contentEl);
                    }
                    return this;
                };
                ModalDialog.prototype.empty = function empty() {
                    this.trigger('beforemodalempty');
                    Dom.emptyEl(this.contentEl());
                    this.trigger('modalempty');
                    return this;
                };
                ModalDialog.prototype.content = function content(value) {
                    if (typeof value !== 'undefined') {
                        this.content_ = value;
                    }
                    return this.content_;
                };
                return ModalDialog;
            })(_component2['default']);
            ModalDialog.prototype.options_ = {
                temporary: true
            };
            _component2['default'].registerComponent('ModalDialog', ModalDialog);
            exports['default'] = ModalDialog;
            module.exports = exports['default'];
        }, {
            "./close-button": 65,
            "./component": 66,
            "./utils/dom": 131,
            "./utils/fn": 133,
            "./utils/log": 136,
            "global/document": 1
        }],
        107: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('./component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _utilsDomJs = _dereq_('./utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('./utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsGuidJs = _dereq_('./utils/guid.js');
            var Guid = _interopRequireWildcard(_utilsGuidJs);
            var _utilsBrowserJs = _dereq_('./utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _utilsLogJs = _dereq_('./utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _utilsToTitleCaseJs = _dereq_('./utils/to-title-case.js');
            var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);
            var _utilsTimeRangesJs = _dereq_('./utils/time-ranges.js');
            var _utilsBufferJs = _dereq_('./utils/buffer.js');
            var _utilsStylesheetJs = _dereq_('./utils/stylesheet.js');
            var stylesheet = _interopRequireWildcard(_utilsStylesheetJs);
            var _fullscreenApiJs = _dereq_('./fullscreen-api.js');
            var _fullscreenApiJs2 = _interopRequireDefault(_fullscreenApiJs);
            var _mediaErrorJs = _dereq_('./media-error.js');
            var _mediaErrorJs2 = _interopRequireDefault(_mediaErrorJs);
            var _safeJsonParseTuple = _dereq_('safe-json-parse/tuple');
            var _safeJsonParseTuple2 = _interopRequireDefault(_safeJsonParseTuple);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var _utilsMergeOptionsJs = _dereq_('./utils/merge-options.js');
            var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);
            var _tracksTextTrackListConverterJs = _dereq_('./tracks/text-track-list-converter.js');
            var _tracksTextTrackListConverterJs2 = _interopRequireDefault(_tracksTextTrackListConverterJs);
            var _techLoaderJs = _dereq_('./tech/loader.js');
            var _techLoaderJs2 = _interopRequireDefault(_techLoaderJs);
            var _posterImageJs = _dereq_('./poster-image.js');
            var _posterImageJs2 = _interopRequireDefault(_posterImageJs);
            var _tracksTextTrackDisplayJs = _dereq_('./tracks/text-track-display.js');
            var _tracksTextTrackDisplayJs2 = _interopRequireDefault(_tracksTextTrackDisplayJs);
            var _loadingSpinnerJs = _dereq_('./loading-spinner.js');
            var _loadingSpinnerJs2 = _interopRequireDefault(_loadingSpinnerJs);
            var _bigPlayButtonJs = _dereq_('./big-play-button.js');
            var _bigPlayButtonJs2 = _interopRequireDefault(_bigPlayButtonJs);
            var _controlBarControlBarJs = _dereq_('./control-bar/control-bar.js');
            var _controlBarControlBarJs2 = _interopRequireDefault(_controlBarControlBarJs);
            var _errorDisplayJs = _dereq_('./error-display.js');
            var _errorDisplayJs2 = _interopRequireDefault(_errorDisplayJs);
            var _tracksTextTrackSettingsJs = _dereq_('./tracks/text-track-settings.js');
            var _tracksTextTrackSettingsJs2 = _interopRequireDefault(_tracksTextTrackSettingsJs);
            var _modalDialog = _dereq_('./modal-dialog');
            var _modalDialog2 = _interopRequireDefault(_modalDialog);
            var _techTechJs = _dereq_('./tech/tech.js');
            var _techTechJs2 = _interopRequireDefault(_techTechJs);
            var _techHtml5Js = _dereq_('./tech/html5.js');
            var _techHtml5Js2 = _interopRequireDefault(_techHtml5Js);
            var Player = (function(_Component) {
                _inherits(Player, _Component);

                function Player(tag, options, ready) {
                    var _this = this;
                    _classCallCheck(this, Player);
                    tag.id = tag.id || 'vjs_video_' + Guid.newGUID();
                    options = _objectAssign2['default'](Player.getTagSettings(tag), options);
                    options.initChildren = false;
                    options.createEl = false;
                    options.reportTouchActivity = false;
                    _Component.call(this, null, options, ready);
                    if (!this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) {
                        throw new Error('No techOrder specified. Did you overwrite ' + 'videojs.options instead of just changing the ' + 'properties you want to override?');
                    }
                    this.tag = tag;
                    this.tagAttributes = tag && Dom.getElAttributes(tag);
                    this.language(this.options_.language);
                    if (options.languages) {
                        (function() {
                            var languagesToLower = {};
                            Object.getOwnPropertyNames(options.languages).forEach(function(name) {
                                languagesToLower[name.toLowerCase()] = options.languages[name];
                            });
                            _this.languages_ = languagesToLower;
                        })();
                    } else {
                        this.languages_ = Player.prototype.options_.languages;
                    }
                    this.cache_ = {};
                    this.poster_ = options.poster || '';
                    this.controls_ = !!options.controls;
                    tag.controls = false;
                    this.scrubbing_ = false;
                    this.el_ = this.createEl();
                    var playerOptionsCopy = _utilsMergeOptionsJs2['default'](this.options_);
                    if (options.plugins) {
                        (function() {
                            var plugins = options.plugins;
                            Object.getOwnPropertyNames(plugins).forEach(function(name) {
                                if (typeof this[name] === 'function') {
                                    this[name](plugins[name]);
                                } else {
                                    _utilsLogJs2['default'].error('Unable to find plugin:', name);
                                }
                            }, _this);
                        })();
                    }
                    this.options_.playerOptions = playerOptionsCopy;
                    this.initChildren();
                    this.isAudio(tag.nodeName.toLowerCase() === 'audio');
                    if (this.controls()) {
                        this.addClass('vjs-controls-enabled');
                    } else {
                        this.addClass('vjs-controls-disabled');
                    }
                    if (this.isAudio()) {
                        this.addClass('vjs-audio');
                    }
                    if (this.flexNotSupported_()) {
                        this.addClass('vjs-no-flex');
                    }
                    Player.players[this.id_] = this;
                    this.userActive(true);
                    this.reportUserActivity();
                    this.listenForUserActivity_();
                    this.on('fullscreenchange', this.handleFullscreenChange_);
                    this.on('stageclick', this.handleStageClick_);
                }
                Player.prototype.dispose = function dispose() {
                    this.trigger('dispose');
                    this.off('dispose');
                    if (this.styleEl_ && this.styleEl_.parentNode) {
                        this.styleEl_.parentNode.removeChild(this.styleEl_);
                    }
                    Player.players[this.id_] = null;
                    if (this.tag && this.tag.player) {
                        this.tag.player = null;
                    }
                    if (this.el_ && this.el_.player) {
                        this.el_.player = null;
                    }
                    if (this.tech_) {
                        this.tech_.dispose();
                    }
                    _Component.prototype.dispose.call(this);
                };
                Player.prototype.createEl = function createEl() {
                    var el = this.el_ = _Component.prototype.createEl.call(this, 'div');
                    var tag = this.tag;
                    tag.removeAttribute('width');
                    tag.removeAttribute('height');
                    var attrs = Dom.getElAttributes(tag);
                    Object.getOwnPropertyNames(attrs).forEach(function(attr) {
                        if (attr === 'class') {
                            el.className = attrs[attr];
                        } else {
                            el.setAttribute(attr, attrs[attr]);
                        }
                    });
                    tag.playerId = tag.id;
                    tag.id += '_html5_api';
                    tag.className = 'vjs-tech';
                    tag.player = el.player = this;
                    this.addClass('vjs-paused');
                    this.styleEl_ = stylesheet.createStyleElement('vjs-styles-dimensions');
                    var defaultsStyleEl = Dom.$('.vjs-styles-defaults');
                    var head = Dom.$('head');
                    head.insertBefore(this.styleEl_, defaultsStyleEl ? defaultsStyleEl.nextSibling : head.firstChild);
                    this.width(this.options_.width);
                    this.height(this.options_.height);
                    this.fluid(this.options_.fluid);
                    this.aspectRatio(this.options_.aspectRatio);
                    tag.initNetworkState_ = tag.networkState;
                    if (tag.parentNode) {
                        tag.parentNode.insertBefore(el, tag);
                    }
                    Dom.insertElFirst(tag, el);
                    this.el_ = el;
                    return el;
                };
                Player.prototype.width = function width(value) {
                    return this.dimension('width', value);
                };
                Player.prototype.height = function height(value) {
                    return this.dimension('height', value);
                };
                Player.prototype.dimension = function dimension(_dimension, value) {
                    var privDimension = _dimension + '_';
                    if (value === undefined) {
                        return this[privDimension] || 0;
                    }
                    if (value === '') {
                        this[privDimension] = undefined;
                    } else {
                        var parsedVal = parseFloat(value);
                        if (isNaN(parsedVal)) {
                            _utilsLogJs2['default'].error('Improper value "' + value + '" supplied for for ' + _dimension);
                            return this;
                        }
                        this[privDimension] = parsedVal;
                    }
                    this.updateStyleEl_();
                    return this;
                };
                Player.prototype.fluid = function fluid(bool) {
                    if (bool === undefined) {
                        return !!this.fluid_;
                    }
                    this.fluid_ = !!bool;
                    if (bool) {
                        this.addClass('vjs-fluid');
                    } else {
                        this.removeClass('vjs-fluid');
                    }
                };
                Player.prototype.aspectRatio = function aspectRatio(ratio) {
                    if (ratio === undefined) {
                        return this.aspectRatio_;
                    }
                    if (!/^\d+\:\d+$/.test(ratio)) {
                        throw new Error('Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.');
                    }
                    this.aspectRatio_ = ratio;
                    this.fluid(true);
                    this.updateStyleEl_();
                };
                Player.prototype.updateStyleEl_ = function updateStyleEl_() {
                    var width = undefined;
                    var height = undefined;
                    var aspectRatio = undefined;
                    var idClass = undefined;
                    if (this.aspectRatio_ !== undefined && this.aspectRatio_ !== 'auto') {
                        aspectRatio = this.aspectRatio_;
                    } else if (this.videoWidth()) {
                        aspectRatio = this.videoWidth() + ':' + this.videoHeight();
                    } else {
                        aspectRatio = '16:9';
                    }
                    var ratioParts = aspectRatio.split(':');
                    var ratioMultiplier = ratioParts[1] / ratioParts[0];
                    if (this.width_ !== undefined) {
                        width = this.width_;
                    } else if (this.height_ !== undefined) {
                        width = this.height_ / ratioMultiplier;
                    } else {
                        width = this.videoWidth() || 300;
                    }
                    if (this.height_ !== undefined) {
                        height = this.height_;
                    } else {
                        height = width * ratioMultiplier;
                    }
                    if (/^[^a-zA-Z]/.test(this.id())) {
                        idClass = 'dimensions-' + this.id();
                    } else {
                        idClass = this.id() + '-dimensions';
                    }
                    this.addClass(idClass);
                    stylesheet.setTextContent(this.styleEl_, '\n      .' + idClass + ' {\n        width: ' + width + 'px;\n        height: ' + height + 'px;\n      }\n\n      .' + idClass + '.vjs-fluid {\n        padding-top: ' + ratioMultiplier * 100 + '%;\n      }\n    ');
                };
                Player.prototype.loadTech_ = function loadTech_(techName, source) {
                    if (this.tech_) {
                        this.unloadTech_();
                    }
                    if (techName !== 'Html5' && this.tag) {
                        _techTechJs2['default'].getTech('Html5').disposeMediaElement(this.tag);
                        this.tag.player = null;
                        this.tag = null;
                    }
                    this.techName_ = techName;
                    this.isReady_ = false;
                    var techOptions = _objectAssign2['default']({
                        'nativeControlsForTouch': this.options_.nativeControlsForTouch,
                        'source': source,
                        'playerId': this.id(),
                        'techId': this.id() + '_' + techName + '_api',
                        'textTracks': this.textTracks_,
                        'autoplay': this.options_.autoplay,
                        'preload': this.options_.preload,
                        'loop': this.options_.loop,
                        'muted': this.options_.muted,
                        'poster': this.poster(),
                        'language': this.language(),
                        'vtt.js': this.options_['vtt.js']
                    }, this.options_[techName.toLowerCase()]);
                    if (this.tag) {
                        techOptions.tag = this.tag;
                    }
                    if (source) {
                        this.currentType_ = source.type;
                        if (source.src === this.cache_.src && this.cache_.currentTime > 0) {
                            techOptions.startTime = this.cache_.currentTime;
                        }
                        this.cache_.src = source.src;
                    }
                    var techComponent = _techTechJs2['default'].getTech(techName);
                    if (!techComponent) {
                        techComponent = _componentJs2['default'].getComponent(techName);
                    }
                    this.tech_ = new techComponent(techOptions);
                    this.tech_.ready(Fn.bind(this, this.handleTechReady_), true);
                    _tracksTextTrackListConverterJs2['default'].jsonToTextTracks(this.textTracksJson_ || [], this.tech_);
                    this.on(this.tech_, 'loadstart', this.handleTechLoadStart_);
                    this.on(this.tech_, 'waiting', this.handleTechWaiting_);
                    this.on(this.tech_, 'canplay', this.handleTechCanPlay_);
                    this.on(this.tech_, 'canplaythrough', this.handleTechCanPlayThrough_);
                    this.on(this.tech_, 'playing', this.handleTechPlaying_);
                    this.on(this.tech_, 'ended', this.handleTechEnded_);
                    this.on(this.tech_, 'seeking', this.handleTechSeeking_);
                    this.on(this.tech_, 'seeked', this.handleTechSeeked_);
                    this.on(this.tech_, 'play', this.handleTechPlay_);
                    this.on(this.tech_, 'firstplay', this.handleTechFirstPlay_);
                    this.on(this.tech_, 'pause', this.handleTechPause_);
                    this.on(this.tech_, 'progress', this.handleTechProgress_);
                    this.on(this.tech_, 'durationchange', this.handleTechDurationChange_);
                    this.on(this.tech_, 'fullscreenchange', this.handleTechFullscreenChange_);
                    this.on(this.tech_, 'error', this.handleTechError_);
                    this.on(this.tech_, 'suspend', this.handleTechSuspend_);
                    this.on(this.tech_, 'abort', this.handleTechAbort_);
                    this.on(this.tech_, 'emptied', this.handleTechEmptied_);
                    this.on(this.tech_, 'stalled', this.handleTechStalled_);
                    this.on(this.tech_, 'loadedmetadata', this.handleTechLoadedMetaData_);
                    this.on(this.tech_, 'loadeddata', this.handleTechLoadedData_);
                    this.on(this.tech_, 'timeupdate', this.handleTechTimeUpdate_);
                    this.on(this.tech_, 'ratechange', this.handleTechRateChange_);
                    this.on(this.tech_, 'volumechange', this.handleTechVolumeChange_);
                    this.on(this.tech_, 'texttrackchange', this.handleTechTextTrackChange_);
                    this.on(this.tech_, 'loadedmetadata', this.updateStyleEl_);
                    this.on(this.tech_, 'posterchange', this.handleTechPosterChange_);
                    this.usingNativeControls(this.techGet_('controls'));
                    if (this.controls() && !this.usingNativeControls()) {
                        this.addTechControlsListeners_();
                    }
                    if (this.tech_.el().parentNode !== this.el() && (techName !== 'Html5' || !this.tag)) {
                        Dom.insertElFirst(this.tech_.el(), this.el());
                    }
                    if (this.tag) {
                        this.tag.player = null;
                        this.tag = null;
                    }
                };
                Player.prototype.unloadTech_ = function unloadTech_() {
                    this.textTracks_ = this.textTracks();
                    this.textTracksJson_ = _tracksTextTrackListConverterJs2['default'].textTracksToJson(this.tech_);
                    this.isReady_ = false;
                    this.tech_.dispose();
                    this.tech_ = false;
                };
                Player.prototype.tech = function tech(safety) {
                    if (safety && safety.IWillNotUseThisInPlugins) {
                        return this.tech_;
                    }
                    var errorText = '\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ';
                    _globalWindow2['default'].alert(errorText);
                    throw new Error(errorText);
                };
                Player.prototype.addTechControlsListeners_ = function addTechControlsListeners_() {
                    this.removeTechControlsListeners_();
                    this.on(this.tech_, 'mousedown', this.handleTechClick_);
                    this.on(this.tech_, 'touchstart', this.handleTechTouchStart_);
                    this.on(this.tech_, 'touchmove', this.handleTechTouchMove_);
                    this.on(this.tech_, 'touchend', this.handleTechTouchEnd_);
                    this.on(this.tech_, 'tap', this.handleTechTap_);
                };
                Player.prototype.removeTechControlsListeners_ = function removeTechControlsListeners_() {
                    this.off(this.tech_, 'tap', this.handleTechTap_);
                    this.off(this.tech_, 'touchstart', this.handleTechTouchStart_);
                    this.off(this.tech_, 'touchmove', this.handleTechTouchMove_);
                    this.off(this.tech_, 'touchend', this.handleTechTouchEnd_);
                    this.off(this.tech_, 'mousedown', this.handleTechClick_);
                };
                Player.prototype.handleTechReady_ = function handleTechReady_() {
                    this.triggerReady();
                    if (this.cache_.volume) {
                        this.techCall_('setVolume', this.cache_.volume);
                    }
                    this.handleTechPosterChange_();
                    this.handleTechDurationChange_();
                    if (this.src() && this.tag && this.options_.autoplay && this.paused()) {
                        delete this.tag.poster;
                        this.play();
                    }
                };
                Player.prototype.handleTechLoadStart_ = function handleTechLoadStart_() {
                    this.removeClass('vjs-ended');
                    this.error(null);
                    if (!this.paused()) {
                        this.trigger('loadstart');
                        this.trigger('firstplay');
                    } else {
                        this.hasStarted(false);
                        this.trigger('loadstart');
                    }
                };
                Player.prototype.hasStarted = function hasStarted(_hasStarted) {
                    if (_hasStarted !== undefined) {
                        if (this.hasStarted_ !== _hasStarted) {
                            this.hasStarted_ = _hasStarted;
                            if (_hasStarted) {
                                this.addClass('vjs-has-started');
                                this.trigger('firstplay');
                            } else {
                                this.removeClass('vjs-has-started');
                            }
                        }
                        return this;
                    }
                    return !!this.hasStarted_;
                };
                Player.prototype.handleTechPlay_ = function handleTechPlay_() {
                    this.removeClass('vjs-ended');
                    this.removeClass('vjs-paused');
                    this.addClass('vjs-playing');
                    this.hasStarted(true);
                    this.trigger('play');
                };
                Player.prototype.handleTechWaiting_ = function handleTechWaiting_() {
                    this.addClass('vjs-waiting');
                    this.trigger('waiting');
                };
                Player.prototype.handleTechCanPlay_ = function handleTechCanPlay_() {
                    this.removeClass('vjs-waiting');
                    this.trigger('canplay');
                };
                Player.prototype.handleTechCanPlayThrough_ = function handleTechCanPlayThrough_() {
                    this.removeClass('vjs-waiting');
                    this.trigger('canplaythrough');
                };
                Player.prototype.handleTechPlaying_ = function handleTechPlaying_() {
                    this.removeClass('vjs-waiting');
                    this.trigger('playing');
                };
                Player.prototype.handleTechSeeking_ = function handleTechSeeking_() {
                    this.addClass('vjs-seeking');
                    this.trigger('seeking');
                };
                Player.prototype.handleTechSeeked_ = function handleTechSeeked_() {
                    this.removeClass('vjs-seeking');
                    this.trigger('seeked');
                };
                Player.prototype.handleTechFirstPlay_ = function handleTechFirstPlay_() {
                    if (this.options_.starttime) {
                        this.currentTime(this.options_.starttime);
                    }
                    this.addClass('vjs-has-started');
                    this.trigger('firstplay');
                };
                Player.prototype.handleTechPause_ = function handleTechPause_() {
                    this.removeClass('vjs-playing');
                    this.addClass('vjs-paused');
                    this.trigger('pause');
                };
                Player.prototype.handleTechProgress_ = function handleTechProgress_() {
                    this.trigger('progress');
                };
                Player.prototype.handleTechEnded_ = function handleTechEnded_() {
                    this.addClass('vjs-ended');
                    if (this.options_.loop) {
                        this.currentTime(0);
                        this.play();
                    } else if (!this.paused()) {
                        this.pause();
                    }
                    this.trigger('ended');
                };
                Player.prototype.handleTechDurationChange_ = function handleTechDurationChange_() {
                    this.duration(this.techGet_('duration'));
                };
                Player.prototype.handleTechClick_ = function handleTechClick_(event) {
                    if (event.button !== 0) return;
                    if (this.controls()) {
                        if (this.paused()) {
                            this.play();
                        } else {
                            this.pause();
                        }
                    }
                };
                Player.prototype.handleTechTap_ = function handleTechTap_() {
                    this.userActive(!this.userActive());
                };
                Player.prototype.handleTechTouchStart_ = function handleTechTouchStart_() {
                    this.userWasActive = this.userActive();
                };
                Player.prototype.handleTechTouchMove_ = function handleTechTouchMove_() {
                    if (this.userWasActive) {
                        this.reportUserActivity();
                    }
                };
                Player.prototype.handleTechTouchEnd_ = function handleTechTouchEnd_(event) {
                    event.preventDefault();
                };
                Player.prototype.handleFullscreenChange_ = function handleFullscreenChange_() {
                    if (this.isFullscreen()) {
                        this.addClass('vjs-fullscreen');
                    } else {
                        this.removeClass('vjs-fullscreen');
                    }
                };
                Player.prototype.handleStageClick_ = function handleStageClick_() {
                    this.reportUserActivity();
                };
                Player.prototype.handleTechFullscreenChange_ = function handleTechFullscreenChange_(event, data) {
                    if (data) {
                        this.isFullscreen(data.isFullscreen);
                    }
                    this.trigger('fullscreenchange');
                };
                Player.prototype.handleTechError_ = function handleTechError_() {
                    var error = this.tech_.error();
                    this.error(error && error.code);
                };
                Player.prototype.handleTechSuspend_ = function handleTechSuspend_() {
                    this.trigger('suspend');
                };
                Player.prototype.handleTechAbort_ = function handleTechAbort_() {
                    this.trigger('abort');
                };
                Player.prototype.handleTechEmptied_ = function handleTechEmptied_() {
                    this.trigger('emptied');
                };
                Player.prototype.handleTechStalled_ = function handleTechStalled_() {
                    this.trigger('stalled');
                };
                Player.prototype.handleTechLoadedMetaData_ = function handleTechLoadedMetaData_() {
                    this.trigger('loadedmetadata');
                };
                Player.prototype.handleTechLoadedData_ = function handleTechLoadedData_() {
                    this.trigger('loadeddata');
                };
                Player.prototype.handleTechTimeUpdate_ = function handleTechTimeUpdate_() {
                    if (firstClick) {
                        if (this.tech_.currentTime() >= 6) {
                            firstClick = false;
                            jQuery('#modal-watch').modal({
                                show: true,
                                keyboard: false,
                                backdrop: 'static'
                            });
                            $('.modal-activate__inner').addClass('active');
                            myPlayer.exitFullscreen();
                            myPlayer.exitFullWindow();
                        }
                    }
                    this.trigger('timeupdate');
                };
                Player.prototype.handleTechRateChange_ = function handleTechRateChange_() {
                    this.trigger('ratechange');
                };
                Player.prototype.handleTechVolumeChange_ = function handleTechVolumeChange_() {
                    this.trigger('volumechange');
                };
                Player.prototype.handleTechTextTrackChange_ = function handleTechTextTrackChange_() {
                    this.trigger('texttrackchange');
                };
                Player.prototype.getCache = function getCache() {
                    return this.cache_;
                };
                Player.prototype.techCall_ = function techCall_(method, arg) {
                    if (this.tech_ && !this.tech_.isReady_) {
                        this.tech_.ready(function() {
                            this[method](arg);
                        }, true);
                    } else {
                        try {
                            this.tech_[method](arg);
                        } catch (e) {
                            _utilsLogJs2['default'](e);
                            throw e;
                        }
                    }
                };
                Player.prototype.techGet_ = function techGet_(method) {
                    if (this.tech_ && this.tech_.isReady_) {
                        try {
                            return this.tech_[method]();
                        } catch (e) {
                            if (this.tech_[method] === undefined) {
                                _utilsLogJs2['default']('Video.js: ' + method + ' method not defined for ' + this.techName_ + ' playback technology.', e);
                            } else {
                                if (e.name === 'TypeError') {
                                    _utilsLogJs2['default']('Video.js: ' + method + ' unavailable on ' + this.techName_ + ' playback technology element.', e);
                                    this.tech_.isReady_ = false;
                                } else {
                                    _utilsLogJs2['default'](e);
                                }
                            }
                            throw e;
                        }
                    }
                    return;
                };
                Player.prototype.play = function play() {
                    this.techCall_('play');
                    return this;
                };
                Player.prototype.pause = function pause() {
                    this.techCall_('pause');
                    return this;
                };
                Player.prototype.paused = function paused() {
                    return this.techGet_('paused') === false ? false : true;
                };
                Player.prototype.scrubbing = function scrubbing(isScrubbing) {
                    if (isScrubbing !== undefined) {
                        this.scrubbing_ = !!isScrubbing;
                        if (isScrubbing) {
                            this.addClass('vjs-scrubbing');
                        } else {
                            this.removeClass('vjs-scrubbing');
                        }
                        return this;
                    }
                    return this.scrubbing_;
                };
                Player.prototype.currentTime = function currentTime(seconds) {
                    if (seconds !== undefined) {
                        this.techCall_('setCurrentTime', seconds);
                        return this;
                    }
                    return this.cache_.currentTime = this.techGet_('currentTime') || 0;
                };
                Player.prototype.duration = function duration(seconds) {
                    if (seconds === undefined) {
                        return this.cache_.duration || 0;
                    }
                    seconds = parseFloat(seconds) || 0;
                    if (seconds < 0) {
                        seconds = Infinity;
                    }
                    if (seconds !== this.cache_.duration) {
                        this.cache_.duration = seconds;
                        if (seconds === Infinity) {
                            this.addClass('vjs-live');
                        } else {
                            this.removeClass('vjs-live');
                        }
                        this.trigger('durationchange');
                    }
                    return this;
                };
                Player.prototype.remainingTime = function remainingTime() {
                    return this.duration() - this.currentTime();
                };
                Player.prototype.buffered = function buffered() {
                    var buffered = this.techGet_('buffered');
                    if (!buffered || !buffered.length) {
                        buffered = _utilsTimeRangesJs.createTimeRange(0, 0);
                    }
                    return buffered;
                };
                Player.prototype.bufferedPercent = function bufferedPercent() {
                    return _utilsBufferJs.bufferedPercent(this.buffered(), this.duration());
                };
                Player.prototype.bufferedEnd = function bufferedEnd() {
                    var buffered = this.buffered(),
                        duration = this.duration(),
                        end = buffered.end(buffered.length - 1);
                    if (end > duration) {
                        end = duration;
                    }
                    return end;
                };
                Player.prototype.volume = function volume(percentAsDecimal) {
                    var vol = undefined;
                    if (percentAsDecimal !== undefined) {
                        vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
                        this.cache_.volume = vol;
                        this.techCall_('setVolume', vol);
                        return this;
                    }
                    vol = parseFloat(this.techGet_('volume'));
                    return isNaN(vol) ? 1 : vol;
                };
                Player.prototype.muted = function muted(_muted) {
                    if (_muted !== undefined) {
                        this.techCall_('setMuted', _muted);
                        return this;
                    }
                    return this.techGet_('muted') || false;
                };
                Player.prototype.supportsFullScreen = function supportsFullScreen() {
                    return this.techGet_('supportsFullScreen') || false;
                };
                Player.prototype.isFullscreen = function isFullscreen(isFS) {
                    if (isFS !== undefined) {
                        this.isFullscreen_ = !!isFS;
                        return this;
                    }
                    return !!this.isFullscreen_;
                };
                Player.prototype.requestFullscreen = function requestFullscreen() {
                    var fsApi = _fullscreenApiJs2['default'];
                    this.isFullscreen(true);
                    if (fsApi.requestFullscreen) {
                        Events.on(_globalDocument2['default'], fsApi.fullscreenchange, Fn.bind(this, function documentFullscreenChange(e) {
                            this.isFullscreen(_globalDocument2['default'][fsApi.fullscreenElement]);
                            if (this.isFullscreen() === false) {
                                Events.off(_globalDocument2['default'], fsApi.fullscreenchange, documentFullscreenChange);
                            }
                            this.trigger('fullscreenchange');
                        }));
                        this.el_[fsApi.requestFullscreen]();
                    } else if (this.tech_.supportsFullScreen()) {
                        this.techCall_('enterFullScreen');
                    } else {
                        this.enterFullWindow();
                        this.trigger('fullscreenchange');
                    }
                    return this;
                };
                Player.prototype.exitFullscreen = function exitFullscreen() {
                    var fsApi = _fullscreenApiJs2['default'];
                    this.isFullscreen(false);
                    if (fsApi.requestFullscreen) {
                        _globalDocument2['default'][fsApi.exitFullscreen]();
                    } else if (this.tech_.supportsFullScreen()) {
                        this.techCall_('exitFullScreen');
                    } else {
                        this.exitFullWindow();
                        this.trigger('fullscreenchange');
                    }
                    return this;
                };
                Player.prototype.enterFullWindow = function enterFullWindow() {
                    this.isFullWindow = true;
                    this.docOrigOverflow = _globalDocument2['default'].documentElement.style.overflow;
                    Events.on(_globalDocument2['default'], 'keydown', Fn.bind(this, this.fullWindowOnEscKey));
                    _globalDocument2['default'].documentElement.style.overflow = 'hidden';
                    Dom.addElClass(_globalDocument2['default'].body, 'vjs-full-window');
                    this.trigger('enterFullWindow');
                };
                Player.prototype.fullWindowOnEscKey = function fullWindowOnEscKey(event) {
                    if (event.keyCode === 27) {
                        if (this.isFullscreen() === true) {
                            this.exitFullscreen();
                        } else {
                            this.exitFullWindow();
                        }
                    }
                };
                Player.prototype.exitFullWindow = function exitFullWindow() {
                    this.isFullWindow = false;
                    Events.off(_globalDocument2['default'], 'keydown', this.fullWindowOnEscKey);
                    _globalDocument2['default'].documentElement.style.overflow = this.docOrigOverflow;
                    Dom.removeElClass(_globalDocument2['default'].body, 'vjs-full-window');
                    this.trigger('exitFullWindow');
                };
                Player.prototype.canPlayType = function canPlayType(type) {
                    var can = undefined;
                    for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
                        var techName = _utilsToTitleCaseJs2['default'](j[i]);
                        var tech = _techTechJs2['default'].getTech(techName);
                        if (!tech) {
                            tech = _componentJs2['default'].getComponent(techName);
                        }
                        if (!tech) {
                            _utilsLogJs2['default'].error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
                            continue;
                        }
                        if (tech.isSupported()) {
                            can = tech.canPlayType(type);
                            if (can) {
                                return can;
                            }
                        }
                    }
                    return '';
                };
                Player.prototype.selectSource = function selectSource(sources) {
                    var techs = this.options_.techOrder.map(_utilsToTitleCaseJs2['default']).map(function(techName) {
                        return [techName, _techTechJs2['default'].getTech(techName) || _componentJs2['default'].getComponent(techName)];
                    }).filter(function(_ref) {
                        var techName = _ref[0];
                        var tech = _ref[1];
                        if (tech) {
                            return tech.isSupported();
                        }
                        _utilsLogJs2['default'].error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
                        return false;
                    });
                    var findFirstPassingTechSourcePair = function findFirstPassingTechSourcePair(outerArray, innerArray, tester) {
                        var found = undefined;
                        outerArray.some(function(outerChoice) {
                            return innerArray.some(function(innerChoice) {
                                found = tester(outerChoice, innerChoice);
                                if (found) {
                                    return true;
                                }
                            });
                        });
                        return found;
                    };
                    var foundSourceAndTech = undefined;
                    var flip = function flip(fn) {
                        return function(a, b) {
                            return fn(b, a);
                        };
                    };
                    var finder = function finder(_ref2, source) {
                        var techName = _ref2[0];
                        var tech = _ref2[1];
                        if (tech.canPlaySource(source)) {
                            return {
                                source: source,
                                tech: techName
                            };
                        }
                    };
                    if (this.options_.sourceOrder) {
                        foundSourceAndTech = findFirstPassingTechSourcePair(sources, techs, flip(finder));
                    } else {
                        foundSourceAndTech = findFirstPassingTechSourcePair(techs, sources, finder);
                    }
                    return foundSourceAndTech || false;
                };
                Player.prototype.src = function src(source) {
                    if (source === undefined) {
                        return this.techGet_('src');
                    }
                    var currentTech = _techTechJs2['default'].getTech(this.techName_);
                    if (!currentTech) {
                        currentTech = _componentJs2['default'].getComponent(this.techName_);
                    }
                    if (Array.isArray(source)) {
                        this.sourceList_(source);
                    } else if (typeof source === 'string') {
                        this.src({
                            src: source
                        });
                    } else if (source instanceof Object) {
                        if (source.type && !currentTech.canPlaySource(source)) {
                            this.sourceList_([source]);
                        } else {
                            this.cache_.src = source.src;
                            this.currentType_ = source.type || '';
                            this.ready(function() {
                                if (currentTech.prototype.hasOwnProperty('setSource')) {
                                    this.techCall_('setSource', source);
                                } else {
                                    this.techCall_('src', source.src);
                                }
                                if (this.options_.preload === 'auto') {
                                    this.load();
                                }
                                if (this.options_.autoplay) {
                                    this.play();
                                }
                            }, true);
                        }
                    }
                    return this;
                };
                Player.prototype.sourceList_ = function sourceList_(sources) {
                    var sourceTech = this.selectSource(sources);
                    if (sourceTech) {
                        if (sourceTech.tech === this.techName_) {
                            this.src(sourceTech.source);
                        } else {
                            this.loadTech_(sourceTech.tech, sourceTech.source);
                        }
                    } else {
                        this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            });
                        }, 0);
                        this.triggerReady();
                    }
                };
                Player.prototype.load = function load() {
                    this.techCall_('load');
                    return this;
                };
                Player.prototype.reset = function reset() {
                    this.loadTech_(_utilsToTitleCaseJs2['default'](this.options_.techOrder[0]), null);
                    this.techCall_('reset');
                    return this;
                };
                Player.prototype.currentSrc = function currentSrc() {
                    return this.techGet_('currentSrc') || this.cache_.src || '';
                };
                Player.prototype.currentType = function currentType() {
                    return this.currentType_ || '';
                };
                Player.prototype.preload = function preload(value) {
                    if (value !== undefined) {
                        this.techCall_('setPreload', value);
                        this.options_.preload = value;
                        return this;
                    }
                    return this.techGet_('preload');
                };
                Player.prototype.autoplay = function autoplay(value) {
                    if (value !== undefined) {
                        this.techCall_('setAutoplay', value);
                        this.options_.autoplay = value;
                        return this;
                    }
                    return this.techGet_('autoplay', value);
                };
                Player.prototype.loop = function loop(value) {
                    if (value !== undefined) {
                        this.techCall_('setLoop', value);
                        this.options_['loop'] = value;
                        return this;
                    }
                    return this.techGet_('loop');
                };
                Player.prototype.poster = function poster(src) {
                    if (src === undefined) {
                        return this.poster_;
                    }
                    if (!src) {
                        src = '';
                    }
                    this.poster_ = src;
                    this.techCall_('setPoster', src);
                    this.trigger('posterchange');
                    return this;
                };
                Player.prototype.handleTechPosterChange_ = function handleTechPosterChange_() {
                    if (!this.poster_ && this.tech_ && this.tech_.poster) {
                        this.poster_ = this.tech_.poster() || '';
                        this.trigger('posterchange');
                    }
                };
                Player.prototype.controls = function controls(bool) {
                    if (bool !== undefined) {
                        bool = !!bool;
                        if (this.controls_ !== bool) {
                            this.controls_ = bool;
                            if (this.usingNativeControls()) {
                                this.techCall_('setControls', bool);
                            }
                            if (bool) {
                                this.removeClass('vjs-controls-disabled');
                                this.addClass('vjs-controls-enabled');
                                this.trigger('controlsenabled');
                                if (!this.usingNativeControls()) {
                                    this.addTechControlsListeners_();
                                }
                            } else {
                                this.removeClass('vjs-controls-enabled');
                                this.addClass('vjs-controls-disabled');
                                this.trigger('controlsdisabled');
                                if (!this.usingNativeControls()) {
                                    this.removeTechControlsListeners_();
                                }
                            }
                        }
                        return this;
                    }
                    return !!this.controls_;
                };
                Player.prototype.usingNativeControls = function usingNativeControls(bool) {
                    if (bool !== undefined) {
                        bool = !!bool;
                        if (this.usingNativeControls_ !== bool) {
                            this.usingNativeControls_ = bool;
                            if (bool) {
                                this.addClass('vjs-using-native-controls');
                                this.trigger('usingnativecontrols');
                            } else {
                                this.removeClass('vjs-using-native-controls');
                                this.trigger('usingcustomcontrols');
                            }
                        }
                        return this;
                    }
                    return !!this.usingNativeControls_;
                };
                Player.prototype.error = function error(err) {
                    if (err === undefined) {
                        return this.error_ || null;
                    }
                    if (err === null) {
                        this.error_ = err;
                        this.removeClass('vjs-error');
                        this.errorDisplay.close();
                        return this;
                    }
                    if (err instanceof _mediaErrorJs2['default']) {
                        this.error_ = err;
                    } else {
                        this.error_ = new _mediaErrorJs2['default'](err);
                    }
                    this.addClass('vjs-error');
                    _utilsLogJs2['default'].error('(CODE:' + this.error_.code + ' ' + _mediaErrorJs2['default'].errorTypes[this.error_.code] + ')', this.error_.message, this.error_);
                    this.trigger('error');
                    return this;
                };
                Player.prototype.ended = function ended() {
                    return this.techGet_('ended');
                };
                Player.prototype.seeking = function seeking() {
                    return this.techGet_('seeking');
                };
                Player.prototype.seekable = function seekable() {
                    return this.techGet_('seekable');
                };
                Player.prototype.reportUserActivity = function reportUserActivity(event) {
                    this.userActivity_ = true;
                };
                Player.prototype.userActive = function userActive(bool) {
                    if (bool !== undefined) {
                        bool = !!bool;
                        if (bool !== this.userActive_) {
                            this.userActive_ = bool;
                            if (bool) {
                                this.userActivity_ = true;
                                this.removeClass('vjs-user-inactive');
                                this.addClass('vjs-user-active');
                                this.trigger('useractive');
                            } else {
                                this.userActivity_ = false;
                                if (this.tech_) {
                                    this.tech_.one('mousemove', function(e) {
                                        e.stopPropagation();
                                        e.preventDefault();
                                    });
                                }
                                this.removeClass('vjs-user-active');
                                this.addClass('vjs-user-inactive');
                                this.trigger('userinactive');
                            }
                        }
                        return this;
                    }
                    return this.userActive_;
                };
                Player.prototype.listenForUserActivity_ = function listenForUserActivity_() {
                    var mouseInProgress = undefined,
                        lastMoveX = undefined,
                        lastMoveY = undefined;
                    var handleActivity = Fn.bind(this, this.reportUserActivity);
                    var handleMouseMove = function handleMouseMove(e) {
                        if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
                            lastMoveX = e.screenX;
                            lastMoveY = e.screenY;
                            handleActivity();
                        }
                    };
                    var handleMouseDown = function handleMouseDown() {
                        handleActivity();
                        this.clearInterval(mouseInProgress);
                        mouseInProgress = this.setInterval(handleActivity, 250);
                    };
                    var handleMouseUp = function handleMouseUp(event) {
                        handleActivity();
                        this.clearInterval(mouseInProgress);
                    };
                    this.on('mousedown', handleMouseDown);
                    this.on('mousemove', handleMouseMove);
                    this.on('mouseup', handleMouseUp);
                    this.on('keydown', handleActivity);
                    this.on('keyup', handleActivity);
                    var inactivityTimeout = undefined;
                    var activityCheck = this.setInterval(function() {
                        if (this.userActivity_) {
                            this.userActivity_ = false;
                            this.userActive(true);
                            this.clearTimeout(inactivityTimeout);
                            var timeout = this.options_['inactivityTimeout'];
                            if (timeout > 0) {
                                inactivityTimeout = this.setTimeout(function() {
                                    if (!this.userActivity_) {
                                        this.userActive(false);
                                    }
                                }, timeout);
                            }
                        }
                    }, 250);
                };
                Player.prototype.playbackRate = function playbackRate(rate) {
                    if (rate !== undefined) {
                        this.techCall_('setPlaybackRate', rate);
                        return this;
                    }
                    if (this.tech_ && this.tech_['featuresPlaybackRate']) {
                        return this.techGet_('playbackRate');
                    } else {
                        return 1.0;
                    }
                };
                Player.prototype.isAudio = function isAudio(bool) {
                    if (bool !== undefined) {
                        this.isAudio_ = !!bool;
                        return this;
                    }
                    return !!this.isAudio_;
                };
                Player.prototype.networkState = function networkState() {
                    return this.techGet_('networkState');
                };
                Player.prototype.readyState = function readyState() {
                    return this.techGet_('readyState');
                };
                Player.prototype.textTracks = function textTracks() {
                    return this.tech_ && this.tech_['textTracks']();
                };
                Player.prototype.remoteTextTracks = function remoteTextTracks() {
                    return this.tech_ && this.tech_['remoteTextTracks']();
                };
                Player.prototype.remoteTextTrackEls = function remoteTextTrackEls() {
                    return this.tech_ && this.tech_['remoteTextTrackEls']();
                };
                Player.prototype.addTextTrack = function addTextTrack(kind, label, language) {
                    return this.tech_ && this.tech_['addTextTrack'](kind, label, language);
                };
                Player.prototype.addRemoteTextTrack = function addRemoteTextTrack(options) {
                    return this.tech_ && this.tech_['addRemoteTextTrack'](options);
                };
                Player.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
                    this.tech_ && this.tech_['removeRemoteTextTrack'](track);
                };
                Player.prototype.videoWidth = function videoWidth() {
                    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
                };
                Player.prototype.videoHeight = function videoHeight() {
                    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
                };
                Player.prototype.language = function language(code) {
                    if (code === undefined) {
                        return this.language_;
                    }
                    this.language_ = ('' + code).toLowerCase();
                    return this;
                };
                Player.prototype.languages = function languages() {
                    return _utilsMergeOptionsJs2['default'](Player.prototype.options_.languages, this.languages_);
                };
                Player.prototype.toJSON = function toJSON() {
                    var options = _utilsMergeOptionsJs2['default'](this.options_);
                    var tracks = options.tracks;
                    options.tracks = [];
                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];
                        track = _utilsMergeOptionsJs2['default'](track);
                        track.player = undefined;
                        options.tracks[i] = track;
                    }
                    return options;
                };
                Player.prototype.createModal = function createModal(content, options) {
                    var player = this;
                    options = options || {};
                    options.content = content || '';
                    var modal = new _modalDialog2['default'](player, options);
                    player.addChild(modal);
                    modal.on('dispose', function() {
                        player.removeChild(modal);
                    });
                    return modal.open();
                };
                Player.getTagSettings = function getTagSettings(tag) {
                    var baseOptions = {
                        'sources': [],
                        'tracks': []
                    };
                    var tagOptions = Dom.getElAttributes(tag);
                    var dataSetup = tagOptions['data-setup'];
                    if (dataSetup !== null) {
                        var _safeParseTuple = _safeJsonParseTuple2['default'](dataSetup || '{}');
                        var err = _safeParseTuple[0];
                        var data = _safeParseTuple[1];
                        if (err) {
                            _utilsLogJs2['default'].error(err);
                        }
                        _objectAssign2['default'](tagOptions, data);
                    }
                    _objectAssign2['default'](baseOptions, tagOptions);
                    if (tag.hasChildNodes()) {
                        var children = tag.childNodes;
                        for (var i = 0, j = children.length; i < j; i++) {
                            var child = children[i];
                            var childName = child.nodeName.toLowerCase();
                            if (childName === 'source') {
                                baseOptions.sources.push(Dom.getElAttributes(child));
                            } else if (childName === 'track') {
                                baseOptions.tracks.push(Dom.getElAttributes(child));
                            }
                        }
                    }
                    return baseOptions;
                };
                return Player;
            })(_componentJs2['default']);
            Player.players = {};
            var navigator = _globalWindow2['default'].navigator;
            Player.prototype.options_ = {
                techOrder: ['html5', 'flash'],
                html5: {},
                flash: {},
                defaultVolume: 0.00,
                inactivityTimeout: 2000,
                playbackRates: [],
                children: ['mediaLoader', 'posterImage', 'textTrackDisplay', 'loadingSpinner', 'bigPlayButton', 'controlBar', 'errorDisplay', 'textTrackSettings'],
                language: _globalDocument2['default'].getElementsByTagName('html')[0].getAttribute('lang') || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || 'en',
                languages: {},
                notSupportedMessage: 'No compatible source was found for this video.'
            };
            Player.prototype.handleLoadedMetaData_;
            Player.prototype.handleLoadedData_;
            Player.prototype.handleUserActive_;
            Player.prototype.handleUserInactive_;
            Player.prototype.handleTimeUpdate_;
            Player.prototype.handleTechEnded_;
            Player.prototype.handleVolumeChange_;
            Player.prototype.handleError_;
            Player.prototype.flexNotSupported_ = function() {
                var elem = _globalDocument2['default'].createElement('i');
                return !('flexBasis' in elem.style || 'webkitFlexBasis' in elem.style || 'mozFlexBasis' in elem.style || 'msFlexBasis' in elem.style || 'msFlexOrder' in elem.style);
            };
            _componentJs2['default'].registerComponent('Player', Player);
            exports['default'] = Player;
            module.exports = exports['default'];
        }, {
            "./big-play-button.js": 62,
            "./component.js": 66,
            "./control-bar/control-bar.js": 67,
            "./error-display.js": 97,
            "./fullscreen-api.js": 100,
            "./loading-spinner.js": 101,
            "./media-error.js": 102,
            "./modal-dialog": 106,
            "./poster-image.js": 111,
            "./tech/html5.js": 116,
            "./tech/loader.js": 117,
            "./tech/tech.js": 118,
            "./tracks/text-track-display.js": 122,
            "./tracks/text-track-list-converter.js": 124,
            "./tracks/text-track-settings.js": 126,
            "./utils/browser.js": 128,
            "./utils/buffer.js": 129,
            "./utils/dom.js": 131,
            "./utils/events.js": 132,
            "./utils/fn.js": 133,
            "./utils/guid.js": 135,
            "./utils/log.js": 136,
            "./utils/merge-options.js": 137,
            "./utils/stylesheet.js": 138,
            "./utils/time-ranges.js": 139,
            "./utils/to-title-case.js": 140,
            "global/document": 1,
            "global/window": 2,
            "object.assign": 45,
            "safe-json-parse/tuple": 53
        }],
        108: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _playerJs = _dereq_('./player.js');
            var _playerJs2 = _interopRequireDefault(_playerJs);
            var plugin = function plugin(name, init) {
                _playerJs2['default'].prototype[name] = init;
            };
            exports['default'] = plugin;
            module.exports = exports['default'];
        }, {
            "./player.js": 107
        }],
        109: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _clickableComponentJs = _dereq_('../clickable-component.js');
            var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _popupJs = _dereq_('./popup.js');
            var _popupJs2 = _interopRequireDefault(_popupJs);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsToTitleCaseJs = _dereq_('../utils/to-title-case.js');
            var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);
            var PopupButton = (function(_ClickableComponent) {
                _inherits(PopupButton, _ClickableComponent);

                function PopupButton(player) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    _classCallCheck(this, PopupButton);
                    _ClickableComponent.call(this, player, options);
                    this.update();
                }
                PopupButton.prototype.update = function update() {
                    var popup = this.createPopup();
                    if (this.popup) {
                        this.removeChild(this.popup);
                    }
                    this.popup = popup;
                    this.addChild(popup);
                    if (this.items && this.items.length === 0) {
                        this.hide();
                    } else if (this.items && this.items.length > 1) {
                        this.show();
                    }
                };
                PopupButton.prototype.createPopup = function createPopup() {};
                PopupButton.prototype.createEl = function createEl() {
                    return _ClickableComponent.prototype.createEl.call(this, 'div', {
                        className: this.buildCSSClass()
                    });
                };
                PopupButton.prototype.buildCSSClass = function buildCSSClass() {
                    var menuButtonClass = 'vjs-menu-button';
                    if (this.options_.inline === true) {
                        menuButtonClass += '-inline';
                    } else {
                        menuButtonClass += '-popup';
                    }
                    return 'vjs-menu-button ' + menuButtonClass + ' ' + _ClickableComponent.prototype.buildCSSClass.call(this);
                };
                return PopupButton;
            })(_clickableComponentJs2['default']);
            _componentJs2['default'].registerComponent('PopupButton', PopupButton);
            exports['default'] = PopupButton;
            module.exports = exports['default'];
        }, {
            "../clickable-component.js": 64,
            "../component.js": 66,
            "../utils/dom.js": 131,
            "../utils/fn.js": 133,
            "../utils/to-title-case.js": 140,
            "./popup.js": 110
        }],
        110: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsEventsJs = _dereq_('../utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var Popup = (function(_Component) {
                _inherits(Popup, _Component);

                function Popup() {
                    _classCallCheck(this, Popup);
                    _Component.apply(this, arguments);
                }
                Popup.prototype.addItem = function addItem(component) {
                    this.addChild(component);
                    component.on('click', Fn.bind(this, function() {
                        this.unlockShowing();
                    }));
                };
                Popup.prototype.createEl = function createEl() {
                    var contentElType = this.options_.contentElType || 'ul';
                    this.contentEl_ = Dom.createEl(contentElType, {
                        className: 'vjs-menu-content'
                    });
                    var el = _Component.prototype.createEl.call(this, 'div', {
                        append: this.contentEl_,
                        className: 'vjs-menu'
                    });
                    el.appendChild(this.contentEl_);
                    Events.on(el, 'click', function(event) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    });
                    return el;
                };
                return Popup;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('Popup', Popup);
            exports['default'] = Popup;
            module.exports = exports['default'];
        }, {
            "../component.js": 66,
            "../utils/dom.js": 131,
            "../utils/events.js": 132,
            "../utils/fn.js": 133
        }],
        111: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _clickableComponentJs = _dereq_('./clickable-component.js');
            var _clickableComponentJs2 = _interopRequireDefault(_clickableComponentJs);
            var _componentJs = _dereq_('./component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsFnJs = _dereq_('./utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsDomJs = _dereq_('./utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsBrowserJs = _dereq_('./utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var PosterImage = (function(_ClickableComponent) {
                _inherits(PosterImage, _ClickableComponent);

                function PosterImage(player, options) {
                    _classCallCheck(this, PosterImage);
                    _ClickableComponent.call(this, player, options);
                    this.update();
                    player.on('posterchange', Fn.bind(this, this.update));
                }
                PosterImage.prototype.dispose = function dispose() {
                    this.player().off('posterchange', this.update);
                    _ClickableComponent.prototype.dispose.call(this);
                };
                PosterImage.prototype.createEl = function createEl() {
                    var el = Dom.createEl('div', {
                        className: 'vjs-poster',
                        tabIndex: -1
                    });
                    if (!browser.BACKGROUND_SIZE_SUPPORTED) {
                        this.fallbackImg_ = Dom.createEl('img');
                        el.appendChild(this.fallbackImg_);
                    }
                    return el;
                };
                PosterImage.prototype.update = function update() {
                    var url = this.player().poster();
                    this.setSrc(url);
                    if (url) {
                        this.show();
                    } else {
                        this.hide();
                    }
                };
                PosterImage.prototype.setSrc = function setSrc(url) {
                    if (this.fallbackImg_) {
                        this.fallbackImg_.src = url;
                    } else {
                        var backgroundImage = '';
                        if (url) {
                            backgroundImage = 'url("' + url + '")';
                        }
                        this.el_.style.backgroundImage = backgroundImage;
                    }
                };
                PosterImage.prototype.handleClick = function handleClick() {
                    if (this.player_.paused()) {
                        this.player_.play();
                    } else {
                        this.player_.pause();
                    }
                };
                return PosterImage;
            })(_clickableComponentJs2['default']);
            _componentJs2['default'].registerComponent('PosterImage', PosterImage);
            exports['default'] = PosterImage;
            module.exports = exports['default'];
        }, {
            "./clickable-component.js": 64,
            "./component.js": 66,
            "./utils/browser.js": 128,
            "./utils/dom.js": 131,
            "./utils/fn.js": 133
        }],
        112: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _windowLoaded = false;
            var videojs = undefined;
            var autoSetup = function autoSetup() {
                var vids = _globalDocument2['default'].getElementsByTagName('video');
                var audios = _globalDocument2['default'].getElementsByTagName('audio');
                var mediaEls = [];
                if (vids && vids.length > 0) {
                    for (var i = 0, e = vids.length; i < e; i++) {
                        mediaEls.push(vids[i]);
                    }
                }
                if (audios && audios.length > 0) {
                    for (var i = 0, e = audios.length; i < e; i++) {
                        mediaEls.push(audios[i]);
                    }
                }
                if (mediaEls && mediaEls.length > 0) {
                    for (var i = 0, e = mediaEls.length; i < e; i++) {
                        var mediaEl = mediaEls[i];
                        if (mediaEl && mediaEl.getAttribute) {
                            if (mediaEl['player'] === undefined) {
                                var options = mediaEl.getAttribute('data-setup');
                                if (options !== null) {
                                    var player = videojs(mediaEl);
                                }
                            }
                        } else {
                            autoSetupTimeout(1);
                            break;
                        }
                    }
                } else if (!_windowLoaded) {
                    autoSetupTimeout(1);
                }
            };
            var autoSetupTimeout = function autoSetupTimeout(wait, vjs) {
                videojs = vjs;
                setTimeout(autoSetup, wait);
            };
            if (_globalDocument2['default'].readyState === 'complete') {
                _windowLoaded = true;
            } else {
                Events.one(_globalWindow2['default'], 'load', function() {
                    _windowLoaded = true;
                });
            }
            var hasLoaded = function hasLoaded() {
                return _windowLoaded;
            };
            exports.autoSetup = autoSetup;
            exports.autoSetupTimeout = autoSetupTimeout;
            exports.hasLoaded = hasLoaded;
        }, {
            "./utils/events.js": 132,
            "global/document": 1,
            "global/window": 2
        }],
        113: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var Slider = (function(_Component) {
                _inherits(Slider, _Component);

                function Slider(player, options) {
                    _classCallCheck(this, Slider);
                    _Component.call(this, player, options);
                    this.bar = this.getChild(this.options_.barName);
                    this.vertical(!!this.options_.vertical);
                    this.on('mousedown', this.handleMouseDown);
                    this.on('touchstart', this.handleMouseDown);
                    this.on('focus', this.handleFocus);
                    this.on('blur', this.handleBlur);
                    this.on('click', this.handleClick);
                    this.on(player, 'controlsvisible', this.update);
                    this.on(player, this.playerEvent, this.update);
                }
                Slider.prototype.createEl = function createEl(type) {
                    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                    props.className = props.className + ' vjs-slider';
                    props = _objectAssign2['default']({
                        tabIndex: 0
                    }, props);
                    attributes = _objectAssign2['default']({
                        'role': 'slider',
                        'aria-valuenow': 0,
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                        tabIndex: 0
                    }, attributes);
                    return _Component.prototype.createEl.call(this, type, props, attributes);
                };
                Slider.prototype.handleMouseDown = function handleMouseDown(event) {
                    event.preventDefault();
                    Dom.blockTextSelection();
                    this.addClass('vjs-sliding');
                    this.trigger('slideractive');
                    this.on(_globalDocument2['default'], 'mousemove', this.handleMouseMove);
                    this.on(_globalDocument2['default'], 'mouseup', this.handleMouseUp);
                    this.on(_globalDocument2['default'], 'touchmove', this.handleMouseMove);
                    this.on(_globalDocument2['default'], 'touchend', this.handleMouseUp);
                    this.handleMouseMove(event);
                };
                Slider.prototype.handleMouseMove = function handleMouseMove() {};
                Slider.prototype.handleMouseUp = function handleMouseUp() {
                    Dom.unblockTextSelection();
                    this.removeClass('vjs-sliding');
                    this.trigger('sliderinactive');
                    this.off(_globalDocument2['default'], 'mousemove', this.handleMouseMove);
                    this.off(_globalDocument2['default'], 'mouseup', this.handleMouseUp);
                    this.off(_globalDocument2['default'], 'touchmove', this.handleMouseMove);
                    this.off(_globalDocument2['default'], 'touchend', this.handleMouseUp);
                    this.update();
                };
                Slider.prototype.update = function update() {
                    if (!this.el_) return;
                    var progress = this.getPercent();
                    var bar = this.bar;
                    if (!bar) return;
                    if (typeof progress !== 'number' || progress !== progress || progress < 0 || progress === Infinity) {
                        progress = 0;
                    }
                    var percentage = (progress * 100).toFixed(2) + '%';
                    if (this.vertical()) {
                        bar.el().style.height = percentage;
                    } else {
                        bar.el().style.width = percentage;
                    }
                };
                Slider.prototype.calculateDistance = function calculateDistance(event) {
                    var position = Dom.getPointerPosition(this.el_, event);
                    if (this.vertical()) {
                        return position.y;
                    }
                    return position.x;
                };
                Slider.prototype.handleFocus = function handleFocus() {
                    this.on(_globalDocument2['default'], 'keydown', this.handleKeyPress);
                };
                Slider.prototype.handleKeyPress = function handleKeyPress(event) {
                    if (event.which === 37 || event.which === 40) {
                        event.preventDefault();
                        this.stepBack();
                    } else if (event.which === 38 || event.which === 39) {
                        event.preventDefault();
                        this.stepForward();
                    }
                };
                Slider.prototype.handleBlur = function handleBlur() {
                    this.off(_globalDocument2['default'], 'keydown', this.handleKeyPress);
                };
                Slider.prototype.handleClick = function handleClick(event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                };
                Slider.prototype.vertical = function vertical(bool) {
                    if (bool === undefined) {
                        return this.vertical_ || false;
                    }
                    this.vertical_ = !!bool;
                    if (this.vertical_) {
                        this.addClass('vjs-slider-vertical');
                    } else {
                        this.addClass('vjs-slider-horizontal');
                    }
                    return this;
                };
                return Slider;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('Slider', Slider);
            exports['default'] = Slider;
            module.exports = exports['default'];
        }, {
            "../component.js": 66,
            "../utils/dom.js": 131,
            "global/document": 1,
            "object.assign": 45
        }],
        114: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function FlashRtmpDecorator(Flash) {
                Flash.streamingFormats = {
                    'rtmp/mp4': 'MP4',
                    'rtmp/flv': 'FLV'
                };
                Flash.streamFromParts = function(connection, stream) {
                    return connection + '&' + stream;
                };
                Flash.streamToParts = function(src) {
                    var parts = {
                        connection: '',
                        stream: ''
                    };
                    if (!src) return parts;
                    var connEnd = src.search(/&(?!\w+=)/);
                    var streamBegin = undefined;
                    if (connEnd !== -1) {
                        streamBegin = connEnd + 1;
                    } else {
                        connEnd = streamBegin = src.lastIndexOf('/') + 1;
                        if (connEnd === 0) {
                            connEnd = streamBegin = src.length;
                        }
                    }
                    parts.connection = src.substring(0, connEnd);
                    parts.stream = src.substring(streamBegin, src.length);
                    return parts;
                };
                Flash.isStreamingType = function(srcType) {
                    return srcType in Flash.streamingFormats;
                };
                Flash.RTMP_RE = /^rtmp[set]?:\/\//i;
                Flash.isStreamingSrc = function(src) {
                    return Flash.RTMP_RE.test(src);
                };
                Flash.rtmpSourceHandler = {};
                Flash.rtmpSourceHandler.canPlayType = function(type) {
                    if (Flash.isStreamingType(type)) {
                        return 'maybe';
                    }
                    return '';
                };
                Flash.rtmpSourceHandler.canHandleSource = function(source) {
                    var can = Flash.rtmpSourceHandler.canPlayType(source.type);
                    if (can) {
                        return can;
                    }
                    if (Flash.isStreamingSrc(source.src)) {
                        return 'maybe';
                    }
                    return '';
                };
                Flash.rtmpSourceHandler.handleSource = function(source, tech) {
                    var srcParts = Flash.streamToParts(source.src);
                    tech['setRtmpConnection'](srcParts.connection);
                    tech['setRtmpStream'](srcParts.stream);
                };
                Flash.registerSourceHandler(Flash.rtmpSourceHandler);
                return Flash;
            }
            exports['default'] = FlashRtmpDecorator;
            module.exports = exports['default'];
        }, {}],
        115: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _tech = _dereq_('./tech');
            var _tech2 = _interopRequireDefault(_tech);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsUrlJs = _dereq_('../utils/url.js');
            var Url = _interopRequireWildcard(_utilsUrlJs);
            var _utilsTimeRangesJs = _dereq_('../utils/time-ranges.js');
            var _flashRtmp = _dereq_('./flash-rtmp');
            var _flashRtmp2 = _interopRequireDefault(_flashRtmp);
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var navigator = _globalWindow2['default'].navigator;
            var Flash = (function(_Tech) {
                _inherits(Flash, _Tech);

                function Flash(options, ready) {
                    _classCallCheck(this, Flash);
                    _Tech.call(this, options, ready);
                    if (options.source) {
                        this.ready(function() {
                            this.setSource(options.source);
                        }, true);
                    }
                    if (options.startTime) {
                        this.ready(function() {
                            this.load();
                            this.play();
                            this.currentTime(options.startTime);
                        }, true);
                    }
                    _globalWindow2['default'].videojs = _globalWindow2['default'].videojs || {};
                    _globalWindow2['default'].videojs.Flash = _globalWindow2['default'].videojs.Flash || {};
                    _globalWindow2['default'].videojs.Flash.onReady = Flash.onReady;
                    _globalWindow2['default'].videojs.Flash.onEvent = Flash.onEvent;
                    _globalWindow2['default'].videojs.Flash.onError = Flash.onError;
                    this.on('seeked', function() {
                        this.lastSeekTarget_ = undefined;
                    });
                }
                Flash.prototype.createEl = function createEl() {
                    var options = this.options_;
                    if (!options.swf) {
                        options.swf = '//vjs.zencdn.net/swf/5.0.1/video-js.swf';
                    }
                    var objId = options.techId;
                    var flashVars = _objectAssign2['default']({
                        'readyFunction': 'videojs.Flash.onReady',
                        'eventProxyFunction': 'videojs.Flash.onEvent',
                        'errorEventProxyFunction': 'videojs.Flash.onError',
                        'autoplay': options.autoplay,
                        'preload': options.preload,
                        'loop': options.loop,
                        'muted': options.muted
                    }, options.flashVars);
                    var params = _objectAssign2['default']({
                        'wmode': 'opaque',
                        'bgcolor': '#000000'
                    }, options.params);
                    var attributes = _objectAssign2['default']({
                        'id': objId,
                        'name': objId,
                        'class': 'vjs-tech'
                    }, options.attributes);
                    this.el_ = Flash.embed(options.swf, flashVars, params, attributes);
                    this.el_.tech = this;
                    return this.el_;
                };
                Flash.prototype.play = function play() {
                    if (this.ended()) {
                        this.setCurrentTime(0);
                    }
                    this.el_.vjs_play();
                };
                Flash.prototype.pause = function pause() {
                    this.el_.vjs_pause();
                };
                Flash.prototype.src = function src(_src) {
                    if (_src === undefined) {
                        return this.currentSrc();
                    }
                    return this.setSrc(_src);
                };
                Flash.prototype.setSrc = function setSrc(src) {
                    src = Url.getAbsoluteURL(src);
                    this.el_.vjs_src(src);
                    if (this.autoplay()) {
                        var tech = this;
                        this.setTimeout(function() {
                            tech.play();
                        }, 0);
                    }
                };
                Flash.prototype.seeking = function seeking() {
                    return this.lastSeekTarget_ !== undefined;
                };
                Flash.prototype.setCurrentTime = function setCurrentTime(time) {
                    var seekable = this.seekable();
                    if (seekable.length) {
                        time = time > seekable.start(0) ? time : seekable.start(0);
                        time = time < seekable.end(seekable.length - 1) ? time : seekable.end(seekable.length - 1);
                        this.lastSeekTarget_ = time;
                        this.trigger('seeking');
                        this.el_.vjs_setProperty('currentTime', time);
                        _Tech.prototype.setCurrentTime.call(this);
                    }
                };
                Flash.prototype.currentTime = function currentTime(time) {
                    if (this.seeking()) {
                        return this.lastSeekTarget_ || 0;
                    }
                    return this.el_.vjs_getProperty('currentTime');
                };
                Flash.prototype.currentSrc = function currentSrc() {
                    if (this.currentSource_) {
                        return this.currentSource_.src;
                    } else {
                        return this.el_.vjs_getProperty('currentSrc');
                    }
                };
                Flash.prototype.load = function load() {
                    this.el_.vjs_load();
                };
                Flash.prototype.poster = function poster() {
                    this.el_.vjs_getProperty('poster');
                };
                Flash.prototype.setPoster = function setPoster() {};
                Flash.prototype.seekable = function seekable() {
                    var duration = this.duration();
                    if (duration === 0) {
                        return _utilsTimeRangesJs.createTimeRange();
                    }
                    return _utilsTimeRangesJs.createTimeRange(0, duration);
                };
                Flash.prototype.buffered = function buffered() {
                    var ranges = this.el_.vjs_getProperty('buffered');
                    if (ranges.length === 0) {
                        return _utilsTimeRangesJs.createTimeRange();
                    }
                    return _utilsTimeRangesJs.createTimeRange(ranges[0][0], ranges[0][1]);
                };
                Flash.prototype.supportsFullScreen = function supportsFullScreen() {
                    return false;
                };
                Flash.prototype.enterFullScreen = function enterFullScreen() {
                    return false;
                };
                return Flash;
            })(_tech2['default']);
            var _api = Flash.prototype;
            var _readWrite = 'rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted'.split(',');
            var _readOnly = 'networkState,readyState,initialTime,duration,startOffsetTime,paused,ended,videoTracks,audioTracks,videoWidth,videoHeight'.split(',');

            function _createSetter(attr) {
                var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
                _api['set' + attrUpper] = function(val) {
                    return this.el_.vjs_setProperty(attr, val);
                };
            }

            function _createGetter(attr) {
                _api[attr] = function() {
                    return this.el_.vjs_getProperty(attr);
                };
            }
            for (var i = 0; i < _readWrite.length; i++) {
                _createGetter(_readWrite[i]);
                _createSetter(_readWrite[i]);
            }
            for (var i = 0; i < _readOnly.length; i++) {
                _createGetter(_readOnly[i]);
            }
            Flash.isSupported = function() {
                return Flash.version()[0] >= 10;
            };
            _tech2['default'].withSourceHandlers(Flash);
            Flash.nativeSourceHandler = {};
            Flash.nativeSourceHandler.canPlayType = function(type) {
                if (type in Flash.formats) {
                    return 'maybe';
                }
                return '';
            };
            Flash.nativeSourceHandler.canHandleSource = function(source) {
                var type;

                function guessMimeType(src) {
                    var ext = Url.getFileExtension(src);
                    if (ext) {
                        return 'video/' + ext;
                    }
                    return '';
                }
                if (!source.type) {
                    type = guessMimeType(source.src);
                } else {
                    type = source.type.replace(/;.*/, '').toLowerCase();
                }
                return Flash.nativeSourceHandler.canPlayType(type);
            };
            Flash.nativeSourceHandler.handleSource = function(source, tech) {
                tech.setSrc(source.src);
            };
            Flash.nativeSourceHandler.dispose = function() {};
            Flash.registerSourceHandler(Flash.nativeSourceHandler);
            Flash.formats = {
                'video/flv': 'FLV',
                'video/x-flv': 'FLV',
                'video/mp4': 'MP4',
                'video/m4v': 'MP4'
            };
            Flash.onReady = function(currSwf) {
                var el = Dom.getEl(currSwf);
                var tech = el && el.tech;
                if (tech && tech.el()) {
                    Flash.checkReady(tech);
                }
            };
            Flash.checkReady = function(tech) {
                if (!tech.el()) {
                    return;
                }
                if (tech.el().vjs_getProperty) {
                    tech.triggerReady();
                } else {
                    this.setTimeout(function() {
                        Flash['checkReady'](tech);
                    }, 50);
                }
            };
            Flash.onEvent = function(swfID, eventName) {
                var tech = Dom.getEl(swfID).tech;
                tech.trigger(eventName);
            };
            Flash.onError = function(swfID, err) {
                var tech = Dom.getEl(swfID).tech;
                if (err === 'srcnotfound') {
                    return tech.error(4);
                }
                tech.error('FLASH: ' + err);
            };
            Flash.version = function() {
                var version = '0,0,0';
                try {
                    version = new _globalWindow2['default'].ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
                } catch (e) {
                    try {
                        if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                            version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
                        }
                    } catch (err) {}
                }
                return version.split(',');
            };
            Flash.embed = function(swf, flashVars, params, attributes) {
                var code = Flash.getEmbedCode(swf, flashVars, params, attributes);
                var obj = Dom.createEl('div', {
                    innerHTML: code
                }).childNodes[0];
                return obj;
            };
            Flash.getEmbedCode = function(swf, flashVars, params, attributes) {
                var objTag = '<object type="application/x-shockwave-flash" ';
                var flashVarsString = '';
                var paramsString = '';
                var attrsString = '';
                if (flashVars) {
                    Object.getOwnPropertyNames(flashVars).forEach(function(key) {
                        flashVarsString += key + '=' + flashVars[key] + '&amp;';
                    });
                }
                params = _objectAssign2['default']({
                    'movie': swf,
                    'flashvars': flashVarsString,
                    'allowScriptAccess': 'always',
                    'allowNetworking': 'all'
                }, params);
                Object.getOwnPropertyNames(params).forEach(function(key) {
                    paramsString += '<param name="' + key + '" value="' + params[key] + '" />';
                });
                attributes = _objectAssign2['default']({
                    'data': swf,
                    'width': '100%',
                    'height': '100%'
                }, attributes);
                Object.getOwnPropertyNames(attributes).forEach(function(key) {
                    attrsString += key + '="' + attributes[key] + '" ';
                });
                return '' + objTag + attrsString + '>' + paramsString + '</object>';
            };
            _flashRtmp2['default'](Flash);
            _component2['default'].registerComponent('Flash', Flash);
            _tech2['default'].registerTech('Flash', Flash);
            exports['default'] = Flash;
            module.exports = exports['default'];
        }, {
            "../component": 66,
            "../utils/dom.js": 131,
            "../utils/time-ranges.js": 139,
            "../utils/url.js": 141,
            "./flash-rtmp": 114,
            "./tech": 118,
            "global/window": 2,
            "object.assign": 45
        }],
        116: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _techJs = _dereq_('./tech.js');
            var _techJs2 = _interopRequireDefault(_techJs);
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _utilsDomJs = _dereq_('../utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsUrlJs = _dereq_('../utils/url.js');
            var Url = _interopRequireWildcard(_utilsUrlJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsLogJs = _dereq_('../utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _utilsBrowserJs = _dereq_('../utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var _utilsMergeOptionsJs = _dereq_('../utils/merge-options.js');
            var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);
            var Html5 = (function(_Tech) {
                _inherits(Html5, _Tech);

                function Html5(options, ready) {
                    _classCallCheck(this, Html5);
                    _Tech.call(this, options, ready);
                    var source = options.source;
                    if (source && (this.el_.currentSrc !== source.src || options.tag && options.tag.initNetworkState_ === 3)) {
                        this.setSource(source);
                    } else {
                        this.handleLateInit_(this.el_);
                    }
                    if (this.el_.hasChildNodes()) {
                        var nodes = this.el_.childNodes;
                        var nodesLength = nodes.length;
                        var removeNodes = [];
                        while (nodesLength--) {
                            var node = nodes[nodesLength];
                            var nodeName = node.nodeName.toLowerCase();
                            if (nodeName === 'track') {
                                if (!this.featuresNativeTextTracks) {
                                    removeNodes.push(node);
                                } else {
                                    this.remoteTextTrackEls().addTrackElement_(node);
                                    this.remoteTextTracks().addTrack_(node.track);
                                }
                            }
                        }
                        for (var i = 0; i < removeNodes.length; i++) {
                            this.el_.removeChild(removeNodes[i]);
                        }
                    }
                    if (this.featuresNativeTextTracks) {
                        this.handleTextTrackChange_ = Fn.bind(this, this.handleTextTrackChange);
                        this.handleTextTrackAdd_ = Fn.bind(this, this.handleTextTrackAdd);
                        this.handleTextTrackRemove_ = Fn.bind(this, this.handleTextTrackRemove);
                        this.proxyNativeTextTracks_();
                    }
                    if (browser.TOUCH_ENABLED && options.nativeControlsForTouch === true || browser.IS_IPHONE || browser.IS_NATIVE_ANDROID) {
                        this.setControls(true);
                    }
                    this.triggerReady();
                }
                Html5.prototype.dispose = function dispose() {
                    var tt = this.el().textTracks;
                    var emulatedTt = this.textTracks();
                    if (tt && tt.removeEventListener) {
                        tt.removeEventListener('change', this.handleTextTrackChange_);
                        tt.removeEventListener('addtrack', this.handleTextTrackAdd_);
                        tt.removeEventListener('removetrack', this.handleTextTrackRemove_);
                    }
                    var i = emulatedTt.length;
                    while (i--) {
                        emulatedTt.removeTrack_(emulatedTt[i]);
                    }
                    Html5.disposeMediaElement(this.el_);
                    _Tech.prototype.dispose.call(this);
                };
                Html5.prototype.createEl = function createEl() {
                    var el = this.options_.tag;
                    if (!el || this['movingMediaElementInDOM'] === false) {
                        if (el) {
                            var clone = el.cloneNode(true);
                            el.parentNode.insertBefore(clone, el);
                            Html5.disposeMediaElement(el);
                            el = clone;
                        } else {
                            el = _globalDocument2['default'].createElement('video');
                            var tagAttributes = this.options_.tag && Dom.getElAttributes(this.options_.tag);
                            var attributes = _utilsMergeOptionsJs2['default']({}, tagAttributes);
                            if (!browser.TOUCH_ENABLED || this.options_.nativeControlsForTouch !== true) {
                                delete attributes.controls;
                            }
                            Dom.setElAttributes(el, _objectAssign2['default'](attributes, {
                                id: this.options_.techId,
                                'class': 'vjs-tech'
                            }));
                        }
                    }
                    var settingsAttrs = ['autoplay', 'preload', 'loop', 'muted'];
                    for (var i = settingsAttrs.length - 1; i >= 0; i--) {
                        var attr = settingsAttrs[i];
                        var overwriteAttrs = {};
                        if (typeof this.options_[attr] !== 'undefined') {
                            overwriteAttrs[attr] = this.options_[attr];
                        }
                        Dom.setElAttributes(el, overwriteAttrs);
                    }
                    return el;
                };
                Html5.prototype.handleLateInit_ = function handleLateInit_(el) {
                    var _this = this;
                    if (el.networkState === 0 || el.networkState === 3) {
                        return;
                    }
                    if (el.readyState === 0) {
                        var _ret = (function() {
                            var loadstartFired = false;
                            var setLoadstartFired = function setLoadstartFired() {
                                loadstartFired = true;
                            };
                            _this.on('loadstart', setLoadstartFired);
                            var triggerLoadstart = function triggerLoadstart() {
                                if (!loadstartFired) {
                                    this.trigger('loadstart');
                                }
                            };
                            _this.on('loadedmetadata', triggerLoadstart);
                            _this.ready(function() {
                                this.off('loadstart', setLoadstartFired);
                                this.off('loadedmetadata', triggerLoadstart);
                                if (!loadstartFired) {
                                    this.trigger('loadstart');
                                }
                            });
                            return {
                                v: undefined
                            };
                        })();
                        if (typeof _ret === 'object') return _ret.v;
                    }
                    var eventsToTrigger = ['loadstart'];
                    eventsToTrigger.push('loadedmetadata');
                    if (el.readyState >= 2) {
                        eventsToTrigger.push('loadeddata');
                    }
                    if (el.readyState >= 3) {
                        eventsToTrigger.push('canplay');
                    }
                    if (el.readyState >= 4) {
                        eventsToTrigger.push('canplaythrough');
                    }
                    this.ready(function() {
                        eventsToTrigger.forEach(function(type) {
                            this.trigger(type);
                        }, this);
                    });
                };
                Html5.prototype.proxyNativeTextTracks_ = function proxyNativeTextTracks_() {
                    var tt = this.el().textTracks;
                    if (tt && tt.addEventListener) {
                        tt.addEventListener('change', this.handleTextTrackChange_);
                        tt.addEventListener('addtrack', this.handleTextTrackAdd_);
                        tt.addEventListener('removetrack', this.handleTextTrackRemove_);
                    }
                };
                Html5.prototype.handleTextTrackChange = function handleTextTrackChange(e) {
                    var tt = this.textTracks();
                    this.textTracks().trigger({
                        type: 'change',
                        target: tt,
                        currentTarget: tt,
                        srcElement: tt
                    });
                };
                Html5.prototype.handleTextTrackAdd = function handleTextTrackAdd(e) {
                    this.textTracks().addTrack_(e.track);
                };
                Html5.prototype.handleTextTrackRemove = function handleTextTrackRemove(e) {
                    this.textTracks().removeTrack_(e.track);
                };
                Html5.prototype.play = function play() {
                    this.el_.play();
                };
                Html5.prototype.pause = function pause() {
                    this.el_.pause();
                };
                Html5.prototype.paused = function paused() {
                    return this.el_.paused;
                };
                Html5.prototype.currentTime = function currentTime() {
                    return this.el_.currentTime;
                };
                Html5.prototype.setCurrentTime = function setCurrentTime(seconds) {
                    try {
                        this.el_.currentTime = seconds;
                    } catch (e) {
                        _utilsLogJs2['default'](e, 'Video is not ready. (Video.js)');
                    }
                };
                Html5.prototype.duration = function duration() {
                    return this.el_.duration || 0;
                };
                Html5.prototype.buffered = function buffered() {
                    return this.el_.buffered;
                };
                Html5.prototype.volume = function volume() {
                    return this.el_.volume;
                };
                Html5.prototype.setVolume = function setVolume(percentAsDecimal) {
                    this.el_.volume = percentAsDecimal;
                };
                Html5.prototype.muted = function muted() {
                    return this.el_.muted;
                };
                Html5.prototype.setMuted = function setMuted(muted) {
                    this.el_.muted = muted;
                };
                Html5.prototype.width = function width() {
                    return this.el_.offsetWidth;
                };
                Html5.prototype.height = function height() {
                    return this.el_.offsetHeight;
                };
                Html5.prototype.supportsFullScreen = function supportsFullScreen() {
                    if (typeof this.el_.webkitEnterFullScreen === 'function') {
                        var userAgent = _globalWindow2['default'].navigator.userAgent;
                        if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) {
                            return true;
                        }
                    }
                    return false;
                };
                Html5.prototype.enterFullScreen = function enterFullScreen() {
                    var video = this.el_;
                    if ('webkitDisplayingFullscreen' in video) {
                        this.one('webkitbeginfullscreen', function() {
                            this.one('webkitendfullscreen', function() {
                                this.trigger('fullscreenchange', {
                                    isFullscreen: false
                                });
                            });
                            this.trigger('fullscreenchange', {
                                isFullscreen: true
                            });
                        });
                    }
                    if (video.paused && video.networkState <= video.HAVE_METADATA) {
                        this.el_.play();
                        this.setTimeout(function() {
                            video.pause();
                            video.webkitEnterFullScreen();
                        }, 0);
                    } else {
                        video.webkitEnterFullScreen();
                    }
                };
                Html5.prototype.exitFullScreen = function exitFullScreen() {
                    this.el_.webkitExitFullScreen();
                };
                Html5.prototype.src = function src(_src) {
                    if (_src === undefined) {
                        return this.el_.src;
                    } else {
                        this.setSrc(_src);
                    }
                };
                Html5.prototype.setSrc = function setSrc(src) {
                    this.el_.src = src;
                };
                Html5.prototype.load = function load() {
                    this.el_.load();
                };
                Html5.prototype.reset = function reset() {
                    Html5.resetMediaElement(this.el_);
                };
                Html5.prototype.currentSrc = function currentSrc() {
                    if (this.currentSource_) {
                        return this.currentSource_.src;
                    } else {
                        return this.el_.currentSrc;
                    }
                };
                Html5.prototype.poster = function poster() {
                    return this.el_.poster;
                };
                Html5.prototype.setPoster = function setPoster(val) {
                    this.el_.poster = val;
                };
                Html5.prototype.preload = function preload() {
                    return this.el_.preload;
                };
                Html5.prototype.setPreload = function setPreload(val) {
                    this.el_.preload = val;
                };
                Html5.prototype.autoplay = function autoplay() {
                    return this.el_.autoplay;
                };
                Html5.prototype.setAutoplay = function setAutoplay(val) {
                    this.el_.autoplay = val;
                };
                Html5.prototype.controls = function controls() {
                    return this.el_.controls;
                };
                Html5.prototype.setControls = function setControls(val) {
                    this.el_.controls = !!val;
                };
                Html5.prototype.loop = function loop() {
                    return this.el_.loop;
                };
                Html5.prototype.setLoop = function setLoop(val) {
                    this.el_.loop = val;
                };
                Html5.prototype.error = function error() {
                    return this.el_.error;
                };
                Html5.prototype.seeking = function seeking() {
                    return this.el_.seeking;
                };
                Html5.prototype.seekable = function seekable() {
                    return this.el_.seekable;
                };
                Html5.prototype.ended = function ended() {
                    return this.el_.ended;
                };
                Html5.prototype.defaultMuted = function defaultMuted() {
                    return this.el_.defaultMuted;
                };
                Html5.prototype.playbackRate = function playbackRate() {
                    return this.el_.playbackRate;
                };
                Html5.prototype.played = function played() {
                    return this.el_.played;
                };
                Html5.prototype.setPlaybackRate = function setPlaybackRate(val) {
                    this.el_.playbackRate = val;
                };
                Html5.prototype.networkState = function networkState() {
                    return this.el_.networkState;
                };
                Html5.prototype.readyState = function readyState() {
                    return this.el_.readyState;
                };
                Html5.prototype.videoWidth = function videoWidth() {
                    return this.el_.videoWidth;
                };
                Html5.prototype.videoHeight = function videoHeight() {
                    return this.el_.videoHeight;
                };
                Html5.prototype.textTracks = function textTracks() {
                    return _Tech.prototype.textTracks.call(this);
                };
                Html5.prototype.addTextTrack = function addTextTrack(kind, label, language) {
                    if (!this['featuresNativeTextTracks']) {
                        return _Tech.prototype.addTextTrack.call(this, kind, label, language);
                    }
                    return this.el_.addTextTrack(kind, label, language);
                };
                Html5.prototype.addRemoteTextTrack = function addRemoteTextTrack() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    if (!this['featuresNativeTextTracks']) {
                        return _Tech.prototype.addRemoteTextTrack.call(this, options);
                    }
                    var htmlTrackElement = _globalDocument2['default'].createElement('track');
                    if (options.kind) {
                        htmlTrackElement.kind = options.kind;
                    }
                    if (options.label) {
                        htmlTrackElement.label = options.label;
                    }
                    if (options.language || options.srclang) {
                        htmlTrackElement.srclang = options.language || options.srclang;
                    }
                    if (options['default']) {
                        htmlTrackElement['default'] = options['default'];
                    }
                    if (options.id) {
                        htmlTrackElement.id = options.id;
                    }
                    if (options.src) {
                        htmlTrackElement.src = options.src;
                    }
                    this.el().appendChild(htmlTrackElement);
                    this.remoteTextTrackEls().addTrackElement_(htmlTrackElement);
                    this.remoteTextTracks().addTrack_(htmlTrackElement.track);
                    return htmlTrackElement;
                };
                Html5.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
                    if (!this['featuresNativeTextTracks']) {
                        return _Tech.prototype.removeRemoteTextTrack.call(this, track);
                    }
                    var tracks = undefined,
                        i = undefined;
                    var trackElement = this.remoteTextTrackEls().getTrackElementByTrack_(track);
                    this.remoteTextTrackEls().removeTrackElement_(trackElement);
                    this.remoteTextTracks().removeTrack_(track);
                    tracks = this.$$('track');
                    i = tracks.length;
                    while (i--) {
                        if (track === tracks[i] || track === tracks[i].track) {
                            this.el().removeChild(tracks[i]);
                        }
                    }
                };
                return Html5;
            })(_techJs2['default']);
            Html5.TEST_VID = _globalDocument2['default'].createElement('video');
            var track = _globalDocument2['default'].createElement('track');
            track.kind = 'captions';
            track.srclang = 'en';
            track.label = 'English';
            Html5.TEST_VID.appendChild(track);
            Html5.isSupported = function() {
                try {
                    Html5.TEST_VID['volume'] = 0.5;
                } catch (e) {
                    return false;
                }
                return !!Html5.TEST_VID.canPlayType;
            };
            _techJs2['default'].withSourceHandlers(Html5);
            Html5.nativeSourceHandler = {};
            Html5.nativeSourceHandler.canPlayType = function(type) {
                try {
                    return Html5.TEST_VID.canPlayType(type);
                } catch (e) {
                    return '';
                }
            };
            Html5.nativeSourceHandler.canHandleSource = function(source) {
                var match, ext;
                if (source.type) {
                    return Html5.nativeSourceHandler.canPlayType(source.type);
                } else if (source.src) {
                    ext = Url.getFileExtension(source.src);
                    return Html5.nativeSourceHandler.canPlayType('video/' + ext);
                }
                return '';
            };
            Html5.nativeSourceHandler.handleSource = function(source, tech) {
                tech.setSrc(source.src);
            };
            Html5.nativeSourceHandler.dispose = function() {};
            Html5.registerSourceHandler(Html5.nativeSourceHandler);
            Html5.canControlVolume = function() {
                var volume = Html5.TEST_VID.volume;
                Html5.TEST_VID.volume = volume / 2 + 0.1;
                return volume !== Html5.TEST_VID.volume;
            };
            Html5.canControlPlaybackRate = function() {
                var playbackRate = Html5.TEST_VID.playbackRate;
                Html5.TEST_VID.playbackRate = playbackRate / 2 + 0.1;
                return playbackRate !== Html5.TEST_VID.playbackRate;
            };
            Html5.supportsNativeTextTracks = function() {
                var supportsTextTracks;
                supportsTextTracks = !!Html5.TEST_VID.textTracks;
                if (supportsTextTracks && Html5.TEST_VID.textTracks.length > 0) {
                    supportsTextTracks = typeof Html5.TEST_VID.textTracks[0]['mode'] !== 'number';
                }
                if (supportsTextTracks && browser.IS_FIREFOX) {
                    supportsTextTracks = false;
                }
                if (supportsTextTracks && !('onremovetrack' in Html5.TEST_VID.textTracks)) {
                    supportsTextTracks = false;
                }
                return supportsTextTracks;
            };
            Html5.Events = ['loadstart', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting', 'seeking', 'seeked', 'ended', 'durationchange', 'timeupdate', 'progress', 'play', 'pause', 'ratechange', 'volumechange'];
            Html5.prototype['featuresVolumeControl'] = Html5.canControlVolume();
            Html5.prototype['featuresPlaybackRate'] = Html5.canControlPlaybackRate();
            Html5.prototype['movingMediaElementInDOM'] = !browser.IS_IOS;
            Html5.prototype['featuresFullscreenResize'] = true;
            Html5.prototype['featuresProgressEvents'] = true;
            Html5.prototype['featuresNativeTextTracks'] = Html5.supportsNativeTextTracks();
            var canPlayType = undefined;
            var mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
            var mp4RE = /^video\/mp4/i;
            Html5.patchCanPlayType = function() {
                if (browser.ANDROID_VERSION >= 4.0) {
                    if (!canPlayType) {
                        canPlayType = Html5.TEST_VID.constructor.prototype.canPlayType;
                    }
                    Html5.TEST_VID.constructor.prototype.canPlayType = function(type) {
                        if (type && mpegurlRE.test(type)) {
                            return 'maybe';
                        }
                        return canPlayType.call(this, type);
                    };
                }
                if (browser.IS_OLD_ANDROID) {
                    if (!canPlayType) {
                        canPlayType = Html5.TEST_VID.constructor.prototype.canPlayType;
                    }
                    Html5.TEST_VID.constructor.prototype.canPlayType = function(type) {
                        if (type && mp4RE.test(type)) {
                            return 'maybe';
                        }
                        return canPlayType.call(this, type);
                    };
                }
            };
            Html5.unpatchCanPlayType = function() {
                var r = Html5.TEST_VID.constructor.prototype.canPlayType;
                Html5.TEST_VID.constructor.prototype.canPlayType = canPlayType;
                canPlayType = null;
                return r;
            };
            Html5.patchCanPlayType();
            Html5.disposeMediaElement = function(el) {
                if (!el) {
                    return;
                }
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
                while (el.hasChildNodes()) {
                    el.removeChild(el.firstChild);
                }
                el.removeAttribute('src');
                if (typeof el.load === 'function') {
                    (function() {
                        try {
                            el.load();
                        } catch (e) {}
                    })();
                }
            };
            Html5.resetMediaElement = function(el) {
                if (!el) {
                    return;
                }
                var sources = el.querySelectorAll('source');
                var i = sources.length;
                while (i--) {
                    el.removeChild(sources[i]);
                }
                el.removeAttribute('src');
                if (typeof el.load === 'function') {
                    (function() {
                        try {
                            el.load();
                        } catch (e) {}
                    })();
                }
            };
            _component2['default'].registerComponent('Html5', Html5);
            _techJs2['default'].registerTech('Html5', Html5);
            exports['default'] = Html5;
            module.exports = exports['default'];
        }, {
            "../component": 66,
            "../utils/browser.js": 128,
            "../utils/dom.js": 131,
            "../utils/fn.js": 133,
            "../utils/log.js": 136,
            "../utils/merge-options.js": 137,
            "../utils/url.js": 141,
            "./tech.js": 118,
            "global/document": 1,
            "global/window": 2,
            "object.assign": 45
        }],
        117: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _componentJs = _dereq_('../component.js');
            var _componentJs2 = _interopRequireDefault(_componentJs);
            var _techJs = _dereq_('./tech.js');
            var _techJs2 = _interopRequireDefault(_techJs);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _utilsToTitleCaseJs = _dereq_('../utils/to-title-case.js');
            var _utilsToTitleCaseJs2 = _interopRequireDefault(_utilsToTitleCaseJs);
            var MediaLoader = (function(_Component) {
                _inherits(MediaLoader, _Component);

                function MediaLoader(player, options, ready) {
                    _classCallCheck(this, MediaLoader);
                    _Component.call(this, player, options, ready);
                    if (!options.playerOptions['sources'] || options.playerOptions['sources'].length === 0) {
                        for (var i = 0, j = options.playerOptions['techOrder']; i < j.length; i++) {
                            var techName = _utilsToTitleCaseJs2['default'](j[i]);
                            var tech = _techJs2['default'].getTech(techName);
                            if (!techName) {
                                tech = _componentJs2['default'].getComponent(techName);
                            }
                            if (tech && tech.isSupported()) {
                                player.loadTech_(techName);
                                break;
                            }
                        }
                    } else {
                        player.src(options.playerOptions['sources']);
                    }
                }
                return MediaLoader;
            })(_componentJs2['default']);
            _componentJs2['default'].registerComponent('MediaLoader', MediaLoader);
            exports['default'] = MediaLoader;
            module.exports = exports['default'];
        }, {
            "../component.js": 66,
            "../utils/to-title-case.js": 140,
            "./tech.js": 118,
            "global/window": 2
        }],
        118: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _tracksHtmlTrackElement = _dereq_('../tracks/html-track-element');
            var _tracksHtmlTrackElement2 = _interopRequireDefault(_tracksHtmlTrackElement);
            var _tracksHtmlTrackElementList = _dereq_('../tracks/html-track-element-list');
            var _tracksHtmlTrackElementList2 = _interopRequireDefault(_tracksHtmlTrackElementList);
            var _utilsMergeOptionsJs = _dereq_('../utils/merge-options.js');
            var _utilsMergeOptionsJs2 = _interopRequireDefault(_utilsMergeOptionsJs);
            var _tracksTextTrack = _dereq_('../tracks/text-track');
            var _tracksTextTrack2 = _interopRequireDefault(_tracksTextTrack);
            var _tracksTextTrackList = _dereq_('../tracks/text-track-list');
            var _tracksTextTrackList2 = _interopRequireDefault(_tracksTextTrackList);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsLogJs = _dereq_('../utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _utilsTimeRangesJs = _dereq_('../utils/time-ranges.js');
            var _utilsBufferJs = _dereq_('../utils/buffer.js');
            var _mediaErrorJs = _dereq_('../media-error.js');
            var _mediaErrorJs2 = _interopRequireDefault(_mediaErrorJs);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var Tech = (function(_Component) {
                _inherits(Tech, _Component);

                function Tech() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    var ready = arguments.length <= 1 || arguments[1] === undefined ? function() {} : arguments[1];
                    _classCallCheck(this, Tech);
                    options.reportTouchActivity = false;
                    _Component.call(this, null, options, ready);
                    this.hasStarted_ = false;
                    this.on('playing', function() {
                        this.hasStarted_ = true;
                    });
                    this.on('loadstart', function() {
                        this.hasStarted_ = false;
                    });
                    this.textTracks_ = options.textTracks;
                    if (!this.featuresProgressEvents) {
                        this.manualProgressOn();
                    }
                    if (!this.featuresTimeupdateEvents) {
                        this.manualTimeUpdatesOn();
                    }
                    if (options.nativeCaptions === false || options.nativeTextTracks === false) {
                        this.featuresNativeTextTracks = false;
                    }
                    if (!this.featuresNativeTextTracks) {
                        this.on('ready', this.emulateTextTracks);
                    }
                    this.initTextTrackListeners();
                    this.emitTapEvents();
                }
                Tech.prototype.manualProgressOn = function manualProgressOn() {
                    this.on('durationchange', this.onDurationChange);
                    this.manualProgress = true;
                    this.one('ready', this.trackProgress);
                };
                Tech.prototype.manualProgressOff = function manualProgressOff() {
                    this.manualProgress = false;
                    this.stopTrackingProgress();
                    this.off('durationchange', this.onDurationChange);
                };
                Tech.prototype.trackProgress = function trackProgress() {
                    this.stopTrackingProgress();
                    this.progressInterval = this.setInterval(Fn.bind(this, function() {
                        var numBufferedPercent = this.bufferedPercent();
                        if (this.bufferedPercent_ !== numBufferedPercent) {
                            this.trigger('progress');
                        }
                        this.bufferedPercent_ = numBufferedPercent;
                        if (numBufferedPercent === 1) {
                            this.stopTrackingProgress();
                        }
                    }), 500);
                };
                Tech.prototype.onDurationChange = function onDurationChange() {
                    this.duration_ = this.duration();
                };
                Tech.prototype.buffered = function buffered() {
                    return _utilsTimeRangesJs.createTimeRange(0, 0);
                };
                Tech.prototype.bufferedPercent = function bufferedPercent() {
                    return _utilsBufferJs.bufferedPercent(this.buffered(), this.duration_);
                };
                Tech.prototype.stopTrackingProgress = function stopTrackingProgress() {
                    this.clearInterval(this.progressInterval);
                };
                Tech.prototype.manualTimeUpdatesOn = function manualTimeUpdatesOn() {
                    this.manualTimeUpdates = true;
                    this.on('play', this.trackCurrentTime);
                    this.on('pause', this.stopTrackingCurrentTime);
                };
                Tech.prototype.manualTimeUpdatesOff = function manualTimeUpdatesOff() {
                    this.manualTimeUpdates = false;
                    this.stopTrackingCurrentTime();
                    this.off('play', this.trackCurrentTime);
                    this.off('pause', this.stopTrackingCurrentTime);
                };
                Tech.prototype.trackCurrentTime = function trackCurrentTime() {
                    if (this.currentTimeInterval) {
                        this.stopTrackingCurrentTime();
                    }
                    this.currentTimeInterval = this.setInterval(function() {
                        this.trigger({
                            type: 'timeupdate',
                            target: this,
                            manuallyTriggered: true
                        });
                    }, 250);
                };
                Tech.prototype.stopTrackingCurrentTime = function stopTrackingCurrentTime() {
                    this.clearInterval(this.currentTimeInterval);
                    this.trigger({
                        type: 'timeupdate',
                        target: this,
                        manuallyTriggered: true
                    });
                };
                Tech.prototype.dispose = function dispose() {
                    var textTracks = this.textTracks();
                    if (textTracks) {
                        var i = textTracks.length;
                        while (i--) {
                            this.removeRemoteTextTrack(textTracks[i]);
                        }
                    }
                    if (this.manualProgress) {
                        this.manualProgressOff();
                    }
                    if (this.manualTimeUpdates) {
                        this.manualTimeUpdatesOff();
                    }
                    _Component.prototype.dispose.call(this);
                };
                Tech.prototype.reset = function reset() {};
                Tech.prototype.error = function error(err) {
                    if (err !== undefined) {
                        if (err instanceof _mediaErrorJs2['default']) {
                            this.error_ = err;
                        } else {
                            this.error_ = new _mediaErrorJs2['default'](err);
                        }
                        this.trigger('error');
                    }
                    return this.error_;
                };
                Tech.prototype.played = function played() {
                    if (this.hasStarted_) {
                        return _utilsTimeRangesJs.createTimeRange(0, 0);
                    }
                    return _utilsTimeRangesJs.createTimeRange();
                };
                Tech.prototype.setCurrentTime = function setCurrentTime() {
                    if (this.manualTimeUpdates) {
                        this.trigger({
                            type: 'timeupdate',
                            target: this,
                            manuallyTriggered: true
                        });
                    }
                };
                Tech.prototype.initTextTrackListeners = function initTextTrackListeners() {
                    var textTrackListChanges = Fn.bind(this, function() {
                        this.trigger('texttrackchange');
                    });
                    var tracks = this.textTracks();
                    if (!tracks) return;
                    tracks.addEventListener('removetrack', textTrackListChanges);
                    tracks.addEventListener('addtrack', textTrackListChanges);
                    this.on('dispose', Fn.bind(this, function() {
                        tracks.removeEventListener('removetrack', textTrackListChanges);
                        tracks.removeEventListener('addtrack', textTrackListChanges);
                    }));
                };
                Tech.prototype.emulateTextTracks = function emulateTextTracks() {
                    var _this = this;
                    var tracks = this.textTracks();
                    if (!tracks) {
                        return;
                    }
                    if (!_globalWindow2['default']['WebVTT'] && this.el().parentNode != null) {
                        var script = _globalDocument2['default'].createElement('script');
                        script.src = this.options_['vtt.js'] || 'https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js';
                        this.el().parentNode.appendChild(script);
                        _globalWindow2['default']['WebVTT'] = true;
                    }
                    var updateDisplay = function updateDisplay() {
                        return _this.trigger('texttrackchange');
                    };
                    var textTracksChanges = function textTracksChanges() {
                        updateDisplay();
                        for (var i = 0; i < tracks.length; i++) {
                            var track = tracks[i];
                            track.removeEventListener('cuechange', updateDisplay);
                            if (track.mode === 'showing') {
                                track.addEventListener('cuechange', updateDisplay);
                            }
                        }
                    };
                    textTracksChanges();
                    tracks.addEventListener('change', textTracksChanges);
                    this.on('dispose', function() {
                        tracks.removeEventListener('change', textTracksChanges);
                    });
                };
                Tech.prototype.textTracks = function textTracks() {
                    this.textTracks_ = this.textTracks_ || new _tracksTextTrackList2['default']();
                    return this.textTracks_;
                };
                Tech.prototype.remoteTextTracks = function remoteTextTracks() {
                    this.remoteTextTracks_ = this.remoteTextTracks_ || new _tracksTextTrackList2['default']();
                    return this.remoteTextTracks_;
                };
                Tech.prototype.remoteTextTrackEls = function remoteTextTrackEls() {
                    this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new _tracksHtmlTrackElementList2['default']();
                    return this.remoteTextTrackEls_;
                };
                Tech.prototype.addTextTrack = function addTextTrack(kind, label, language) {
                    if (!kind) {
                        throw new Error('TextTrack kind is required but was not provided');
                    }
                    return createTrackHelper(this, kind, label, language);
                };
                Tech.prototype.addRemoteTextTrack = function addRemoteTextTrack(options) {
                    var track = _utilsMergeOptionsJs2['default'](options, {
                        tech: this
                    });
                    var htmlTrackElement = new _tracksHtmlTrackElement2['default'](track);
                    this.remoteTextTrackEls().addTrackElement_(htmlTrackElement);
                    this.remoteTextTracks().addTrack_(htmlTrackElement.track);
                    this.textTracks().addTrack_(htmlTrackElement.track);
                    return htmlTrackElement;
                };
                Tech.prototype.removeRemoteTextTrack = function removeRemoteTextTrack(track) {
                    this.textTracks().removeTrack_(track);
                    var trackElement = this.remoteTextTrackEls().getTrackElementByTrack_(track);
                    this.remoteTextTrackEls().removeTrackElement_(trackElement);
                    this.remoteTextTracks().removeTrack_(track);
                };
                Tech.prototype.setPoster = function setPoster() {};
                Tech.prototype.canPlayType = function canPlayType() {
                    return '';
                };
                Tech.isTech = function isTech(component) {
                    return component.prototype instanceof Tech || component instanceof Tech || component === Tech;
                };
                Tech.registerTech = function registerTech(name, tech) {
                    if (!Tech.techs_) {
                        Tech.techs_ = {};
                    }
                    if (!Tech.isTech(tech)) {
                        throw new Error('Tech ' + name + ' must be a Tech');
                    }
                    Tech.techs_[name] = tech;
                    return tech;
                };
                Tech.getTech = function getTech(name) {
                    if (Tech.techs_ && Tech.techs_[name]) {
                        return Tech.techs_[name];
                    }
                    if (_globalWindow2['default'] && _globalWindow2['default'].videojs && _globalWindow2['default'].videojs[name]) {
                        _utilsLogJs2['default'].warn('The ' + name + ' tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)');
                        return _globalWindow2['default'].videojs[name];
                    }
                };
                return Tech;
            })(_component2['default']);
            Tech.prototype.textTracks_;
            var createTrackHelper = function createTrackHelper(self, kind, label, language) {
                var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
                var tracks = self.textTracks();
                options.kind = kind;
                if (label) {
                    options.label = label;
                }
                if (language) {
                    options.language = language;
                }
                options.tech = self;
                var track = new _tracksTextTrack2['default'](options);
                tracks.addTrack_(track);
                return track;
            };
            Tech.prototype.featuresVolumeControl = true;
            Tech.prototype.featuresFullscreenResize = false;
            Tech.prototype.featuresPlaybackRate = false;
            Tech.prototype.featuresProgressEvents = false;
            Tech.prototype.featuresTimeupdateEvents = false;
            Tech.prototype.featuresNativeTextTracks = false;
            Tech.withSourceHandlers = function(_Tech) {
                _Tech.registerSourceHandler = function(handler, index) {
                    var handlers = _Tech.sourceHandlers;
                    if (!handlers) {
                        handlers = _Tech.sourceHandlers = [];
                    }
                    if (index === undefined) {
                        index = handlers.length;
                    }
                    handlers.splice(index, 0, handler);
                };
                _Tech.canPlayType = function(type) {
                    var handlers = _Tech.sourceHandlers || [];
                    var can = undefined;
                    for (var i = 0; i < handlers.length; i++) {
                        can = handlers[i].canPlayType(type);
                        if (can) {
                            return can;
                        }
                    }
                    return '';
                };
                _Tech.selectSourceHandler = function(source) {
                    var handlers = _Tech.sourceHandlers || [];
                    var can = undefined;
                    for (var i = 0; i < handlers.length; i++) {
                        can = handlers[i].canHandleSource(source);
                        if (can) {
                            return handlers[i];
                        }
                    }
                    return null;
                };
                _Tech.canPlaySource = function(srcObj) {
                    var sh = _Tech.selectSourceHandler(srcObj);
                    if (sh) {
                        return sh.canHandleSource(srcObj);
                    }
                    return '';
                };
                var deferrable = ['seekable', 'duration'];
                deferrable.forEach(function(fnName) {
                    var originalFn = this[fnName];
                    if (typeof originalFn !== 'function') {
                        return;
                    }
                    this[fnName] = function() {
                        if (this.sourceHandler_ && this.sourceHandler_[fnName]) {
                            return this.sourceHandler_[fnName].apply(this.sourceHandler_, arguments);
                        }
                        return originalFn.apply(this, arguments);
                    };
                }, _Tech.prototype);
                _Tech.prototype.setSource = function(source) {
                    var sh = _Tech.selectSourceHandler(source);
                    if (!sh) {
                        if (_Tech.nativeSourceHandler) {
                            sh = _Tech.nativeSourceHandler;
                        } else {
                            _utilsLogJs2['default'].error('No source hander found for the current source.');
                        }
                    }
                    this.disposeSourceHandler();
                    this.off('dispose', this.disposeSourceHandler);
                    this.currentSource_ = source;
                    this.sourceHandler_ = sh.handleSource(source, this);
                    this.on('dispose', this.disposeSourceHandler);
                    return this;
                };
                _Tech.prototype.disposeSourceHandler = function() {
                    if (this.sourceHandler_ && this.sourceHandler_.dispose) {
                        this.sourceHandler_.dispose();
                    }
                };
            };
            _component2['default'].registerComponent('Tech', Tech);
            _component2['default'].registerComponent('MediaTechController', Tech);
            Tech.registerTech('Tech', Tech);
            exports['default'] = Tech;
            module.exports = exports['default'];
        }, {
            "../component": 66,
            "../media-error.js": 102,
            "../tracks/html-track-element": 120,
            "../tracks/html-track-element-list": 119,
            "../tracks/text-track": 127,
            "../tracks/text-track-list": 125,
            "../utils/buffer.js": 129,
            "../utils/fn.js": 133,
            "../utils/log.js": 136,
            "../utils/merge-options.js": 137,
            "../utils/time-ranges.js": 139,
            "global/document": 1,
            "global/window": 2
        }],
        119: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }
            var _utilsBrowserJs = _dereq_('../utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var HtmlTrackElementList = (function() {
                function HtmlTrackElementList() {
                    var trackElements = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
                    _classCallCheck(this, HtmlTrackElementList);
                    var list = this;
                    if (browser.IS_IE8) {
                        list = _globalDocument2['default'].createElement('custom');
                        for (var prop in HtmlTrackElementList.prototype) {
                            if (prop !== 'constructor') {
                                list[prop] = HtmlTrackElementList.prototype[prop];
                            }
                        }
                    }
                    list.trackElements_ = [];
                    Object.defineProperty(list, 'length', {
                        get: function get() {
                            return this.trackElements_.length;
                        }
                    });
                    for (var i = 0, _length = trackElements.length; i < _length; i++) {
                        list.addTrackElement_(trackElements[i]);
                    }
                    if (browser.IS_IE8) {
                        return list;
                    }
                }
                HtmlTrackElementList.prototype.addTrackElement_ = function addTrackElement_(trackElement) {
                    this.trackElements_.push(trackElement);
                };
                HtmlTrackElementList.prototype.getTrackElementByTrack_ = function getTrackElementByTrack_(track) {
                    var trackElement_ = undefined;
                    for (var i = 0, _length2 = this.trackElements_.length; i < _length2; i++) {
                        if (track === this.trackElements_[i].track) {
                            trackElement_ = this.trackElements_[i];
                            break;
                        }
                    }
                    return trackElement_;
                };
                HtmlTrackElementList.prototype.removeTrackElement_ = function removeTrackElement_(trackElement) {
                    for (var i = 0, _length3 = this.trackElements_.length; i < _length3; i++) {
                        if (trackElement === this.trackElements_[i]) {
                            this.trackElements_.splice(i, 1);
                            break;
                        }
                    }
                };
                return HtmlTrackElementList;
            })();
            exports['default'] = HtmlTrackElementList;
            module.exports = exports['default'];
        }, {
            "../utils/browser.js": 128,
            "global/document": 1
        }],
        120: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _utilsBrowserJs = _dereq_('../utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _eventTarget = _dereq_('../event-target');
            var _eventTarget2 = _interopRequireDefault(_eventTarget);
            var _tracksTextTrack = _dereq_('../tracks/text-track');
            var _tracksTextTrack2 = _interopRequireDefault(_tracksTextTrack);
            var NONE = 0;
            var LOADING = 1;
            var LOADED = 2;
            var ERROR = 3;
            var HTMLTrackElement = (function(_EventTarget) {
                _inherits(HTMLTrackElement, _EventTarget);

                function HTMLTrackElement() {
                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    _classCallCheck(this, HTMLTrackElement);
                    _EventTarget.call(this);
                    var readyState = undefined,
                        trackElement = this;
                    if (browser.IS_IE8) {
                        trackElement = _globalDocument2['default'].createElement('custom');
                        for (var prop in HTMLTrackElement.prototype) {
                            if (prop !== 'constructor') {
                                trackElement[prop] = HTMLTrackElement.prototype[prop];
                            }
                        }
                    }
                    var track = new _tracksTextTrack2['default'](options);
                    trackElement.kind = track.kind;
                    trackElement.src = track.src;
                    trackElement.srclang = track.language;
                    trackElement.label = track.label;
                    trackElement['default'] = track['default'];
                    Object.defineProperty(trackElement, 'readyState', {
                        get: function get() {
                            return readyState;
                        }
                    });
                    Object.defineProperty(trackElement, 'track', {
                        get: function get() {
                            return track;
                        }
                    });
                    readyState = NONE;
                    track.addEventListener('loadeddata', function() {
                        readyState = LOADED;
                        trackElement.trigger({
                            type: 'load',
                            target: trackElement
                        });
                    });
                    if (browser.IS_IE8) {
                        return trackElement;
                    }
                }
                return HTMLTrackElement;
            })(_eventTarget2['default']);
            HTMLTrackElement.prototype.allowedEvents_ = {
                load: 'load'
            };
            HTMLTrackElement.NONE = NONE;
            HTMLTrackElement.LOADING = LOADING;
            HTMLTrackElement.LOADED = LOADED;
            HTMLTrackElement.ERROR = ERROR;
            exports['default'] = HTMLTrackElement;
            module.exports = exports['default'];
        }, {
            "../event-target": 98,
            "../tracks/text-track": 127,
            "../utils/browser.js": 128,
            "global/document": 1
        }],
        121: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            var _utilsBrowserJs = _dereq_('../utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var TextTrackCueList = function TextTrackCueList(cues) {
                var list = this;
                if (browser.IS_IE8) {
                    list = _globalDocument2['default'].createElement('custom');
                    for (var prop in TextTrackCueList.prototype) {
                        if (prop !== 'constructor') {
                            list[prop] = TextTrackCueList.prototype[prop];
                        }
                    }
                }
                TextTrackCueList.prototype.setCues_.call(list, cues);
                Object.defineProperty(list, 'length', {
                    get: function get() {
                        return this.length_;
                    }
                });
                if (browser.IS_IE8) {
                    return list;
                }
            };
            TextTrackCueList.prototype.setCues_ = function(cues) {
                var oldLength = this.length || 0;
                var i = 0;
                var l = cues.length;
                this.cues_ = cues;
                this.length_ = cues.length;
                var defineProp = function defineProp(i) {
                    if (!('' + i in this)) {
                        Object.defineProperty(this, '' + i, {
                            get: function get() {
                                return this.cues_[i];
                            }
                        });
                    }
                };
                if (oldLength < l) {
                    i = oldLength;
                    for (; i < l; i++) {
                        defineProp.call(this, i);
                    }
                }
            };
            TextTrackCueList.prototype.getCueById = function(id) {
                var result = null;
                for (var i = 0, l = this.length; i < l; i++) {
                    var cue = this[i];
                    if (cue.id === id) {
                        result = cue;
                        break;
                    }
                }
                return result;
            };
            exports['default'] = TextTrackCueList;
            module.exports = exports['default'];
        }, {
            "../utils/browser.js": 128,
            "global/document": 1
        }],
        122: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _menuMenuJs = _dereq_('../menu/menu.js');
            var _menuMenuJs2 = _interopRequireDefault(_menuMenuJs);
            var _menuMenuItemJs = _dereq_('../menu/menu-item.js');
            var _menuMenuItemJs2 = _interopRequireDefault(_menuMenuItemJs);
            var _menuMenuButtonJs = _dereq_('../menu/menu-button.js');
            var _menuMenuButtonJs2 = _interopRequireDefault(_menuMenuButtonJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var darkGray = '#222';
            var lightGray = '#ccc';
            var fontMap = {
                monospace: 'monospace',
                sansSerif: 'sans-serif',
                serif: 'serif',
                monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                monospaceSerif: '"Courier New", monospace',
                proportionalSansSerif: 'sans-serif',
                proportionalSerif: 'serif',
                casual: '"Comic Sans MS", Impact, fantasy',
                script: '"Monotype Corsiva", cursive',
                smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
            };
            var TextTrackDisplay = (function(_Component) {
                _inherits(TextTrackDisplay, _Component);

                function TextTrackDisplay(player, options, ready) {
                    _classCallCheck(this, TextTrackDisplay);
                    _Component.call(this, player, options, ready);
                    player.on('loadstart', Fn.bind(this, this.toggleDisplay));
                    player.on('texttrackchange', Fn.bind(this, this.updateDisplay));
                    player.ready(Fn.bind(this, function() {
                        if (player.tech_ && player.tech_['featuresNativeTextTracks']) {
                            this.hide();
                            return;
                        }
                        player.on('fullscreenchange', Fn.bind(this, this.updateDisplay));
                        var tracks = this.options_.playerOptions['tracks'] || [];
                        for (var i = 0; i < tracks.length; i++) {
                            var track = tracks[i];
                            this.player_.addRemoteTextTrack(track);
                        }
                    }));
                }
                TextTrackDisplay.prototype.toggleDisplay = function toggleDisplay() {
                    if (this.player_.tech_ && this.player_.tech_['featuresNativeTextTracks']) {
                        this.hide();
                    } else {
                        this.show();
                    }
                };
                TextTrackDisplay.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-text-track-display'
                    });
                };
                TextTrackDisplay.prototype.clearDisplay = function clearDisplay() {
                    if (typeof _globalWindow2['default']['WebVTT'] === 'function') {
                        _globalWindow2['default']['WebVTT']['processCues'](_globalWindow2['default'], [], this.el_);
                    }
                };
                TextTrackDisplay.prototype.updateDisplay = function updateDisplay() {
                    var tracks = this.player_.textTracks();
                    this.clearDisplay();
                    if (!tracks) {
                        return;
                    }
                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];
                        if (track['mode'] === 'showing') {
                            this.updateForTrack(track);
                        }
                    }
                };
                TextTrackDisplay.prototype.updateForTrack = function updateForTrack(track) {
                    if (typeof _globalWindow2['default']['WebVTT'] !== 'function' || !track['activeCues']) {
                        return;
                    }
                    var overrides = this.player_['textTrackSettings'].getValues();
                    var cues = [];
                    for (var _i = 0; _i < track['activeCues'].length; _i++) {
                        cues.push(track['activeCues'][_i]);
                    }
                    _globalWindow2['default']['WebVTT']['processCues'](_globalWindow2['default'], track['activeCues'], this.el_);
                    var i = cues.length;
                    while (i--) {
                        var cue = cues[i];
                        if (!cue) {
                            continue;
                        }
                        var cueDiv = cue.displayState;
                        if (overrides.color) {
                            cueDiv.firstChild.style.color = overrides.color;
                        }
                        if (overrides.textOpacity) {
                            tryUpdateStyle(cueDiv.firstChild, 'color', constructColor(overrides.color || '#fff', overrides.textOpacity));
                        }
                        if (overrides.backgroundColor) {
                            cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor;
                        }
                        if (overrides.backgroundOpacity) {
                            tryUpdateStyle(cueDiv.firstChild, 'backgroundColor', constructColor(overrides.backgroundColor || '#000', overrides.backgroundOpacity));
                        }
                        if (overrides.windowColor) {
                            if (overrides.windowOpacity) {
                                tryUpdateStyle(cueDiv, 'backgroundColor', constructColor(overrides.windowColor, overrides.windowOpacity));
                            } else {
                                cueDiv.style.backgroundColor = overrides.windowColor;
                            }
                        }
                        if (overrides.edgeStyle) {
                            if (overrides.edgeStyle === 'dropshadow') {
                                cueDiv.firstChild.style.textShadow = '2px 2px 3px ' + darkGray + ', 2px 2px 4px ' + darkGray + ', 2px 2px 5px ' + darkGray;
                            } else if (overrides.edgeStyle === 'raised') {
                                cueDiv.firstChild.style.textShadow = '1px 1px ' + darkGray + ', 2px 2px ' + darkGray + ', 3px 3px ' + darkGray;
                            } else if (overrides.edgeStyle === 'depressed') {
                                cueDiv.firstChild.style.textShadow = '1px 1px ' + lightGray + ', 0 1px ' + lightGray + ', -1px -1px ' + darkGray + ', 0 -1px ' + darkGray;
                            } else if (overrides.edgeStyle === 'uniform') {
                                cueDiv.firstChild.style.textShadow = '0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray + ', 0 0 4px ' + darkGray;
                            }
                        }
                        if (overrides.fontPercent && overrides.fontPercent !== 1) {
                            var fontSize = _globalWindow2['default'].parseFloat(cueDiv.style.fontSize);
                            cueDiv.style.fontSize = fontSize * overrides.fontPercent + 'px';
                            cueDiv.style.height = 'auto';
                            cueDiv.style.top = 'auto';
                            cueDiv.style.bottom = '2px';
                        }
                        if (overrides.fontFamily && overrides.fontFamily !== 'default') {
                            if (overrides.fontFamily === 'small-caps') {
                                cueDiv.firstChild.style.fontVariant = 'small-caps';
                            } else {
                                cueDiv.firstChild.style.fontFamily = fontMap[overrides.fontFamily];
                            }
                        }
                    }
                };
                return TextTrackDisplay;
            })(_component2['default']);

            function constructColor(color, opacity) {
                return 'rgba(' + parseInt(color[1] + color[1], 16) + ',' + parseInt(color[2] + color[2], 16) + ',' + parseInt(color[3] + color[3], 16) + ',' + opacity + ')';
            }

            function tryUpdateStyle(el, style, rule) {
                try {
                    el.style[style] = rule;
                } catch (e) {}
            }
            _component2['default'].registerComponent('TextTrackDisplay', TextTrackDisplay);
            exports['default'] = TextTrackDisplay;
            module.exports = exports['default'];
        }, {
            "../component": 66,
            "../menu/menu-button.js": 103,
            "../menu/menu-item.js": 104,
            "../menu/menu.js": 105,
            "../utils/fn.js": 133,
            "global/document": 1,
            "global/window": 2
        }],
        123: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            var TextTrackMode = {
                'disabled': 'disabled',
                'hidden': 'hidden',
                'showing': 'showing'
            };
            var TextTrackKind = {
                'subtitles': 'subtitles',
                'captions': 'captions',
                'descriptions': 'descriptions',
                'chapters': 'chapters',
                'metadata': 'metadata'
            };
            exports.TextTrackMode = TextTrackMode;
            exports.TextTrackKind = TextTrackKind;
        }, {}],
        124: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            var trackToJson_ = function trackToJson_(track) {
                var ret = ['kind', 'label', 'language', 'id', 'inBandMetadataTrackDispatchType', 'mode', 'src'].reduce(function(acc, prop, i) {
                    if (track[prop]) {
                        acc[prop] = track[prop];
                    }
                    return acc;
                }, {
                    cues: track.cues && Array.prototype.map.call(track.cues, function(cue) {
                        return {
                            startTime: cue.startTime,
                            endTime: cue.endTime,
                            text: cue.text,
                            id: cue.id
                        };
                    })
                });
                return ret;
            };
            var textTracksToJson = function textTracksToJson(tech) {
                var trackEls = tech.$$('track');
                var trackObjs = Array.prototype.map.call(trackEls, function(t) {
                    return t.track;
                });
                var tracks = Array.prototype.map.call(trackEls, function(trackEl) {
                    var json = trackToJson_(trackEl.track);
                    if (trackEl.src) {
                        json.src = trackEl.src;
                    }
                    return json;
                });
                return tracks.concat(Array.prototype.filter.call(tech.textTracks(), function(track) {
                    return trackObjs.indexOf(track) === -1;
                }).map(trackToJson_));
            };
            var jsonToTextTracks = function jsonToTextTracks(json, tech) {
                json.forEach(function(track) {
                    var addedTrack = tech.addRemoteTextTrack(track).track;
                    if (!track.src && track.cues) {
                        track.cues.forEach(function(cue) {
                            return addedTrack.addCue(cue);
                        });
                    }
                });
                return tech.textTracks();
            };
            exports['default'] = {
                textTracksToJson: textTracksToJson,
                jsonToTextTracks: jsonToTextTracks,
                trackToJson_: trackToJson_
            };
            module.exports = exports['default'];
        }, {}],
        125: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _eventTarget = _dereq_('../event-target');
            var _eventTarget2 = _interopRequireDefault(_eventTarget);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsBrowserJs = _dereq_('../utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var TextTrackList = function TextTrackList(tracks) {
                var list = this;
                if (browser.IS_IE8) {
                    list = _globalDocument2['default'].createElement('custom');
                    for (var prop in TextTrackList.prototype) {
                        if (prop !== 'constructor') {
                            list[prop] = TextTrackList.prototype[prop];
                        }
                    }
                }
                tracks = tracks || [];
                list.tracks_ = [];
                Object.defineProperty(list, 'length', {
                    get: function get() {
                        return this.tracks_.length;
                    }
                });
                for (var i = 0; i < tracks.length; i++) {
                    list.addTrack_(tracks[i]);
                }
                if (browser.IS_IE8) {
                    return list;
                }
            };
            TextTrackList.prototype = Object.create(_eventTarget2['default'].prototype);
            TextTrackList.prototype.constructor = TextTrackList;
            TextTrackList.prototype.allowedEvents_ = {
                'change': 'change',
                'addtrack': 'addtrack',
                'removetrack': 'removetrack'
            };
            for (var _event in TextTrackList.prototype.allowedEvents_) {
                TextTrackList.prototype['on' + _event] = null;
            }
            TextTrackList.prototype.addTrack_ = function(track) {
                var index = this.tracks_.length;
                if (!('' + index in this)) {
                    Object.defineProperty(this, index, {
                        get: function get() {
                            return this.tracks_[index];
                        }
                    });
                }
                track.addEventListener('modechange', Fn.bind(this, function() {
                    this.trigger('change');
                }));
                this.tracks_.push(track);
                this.trigger({
                    type: 'addtrack',
                    track: track
                });
            };
            TextTrackList.prototype.removeTrack_ = function(rtrack) {
                var track = undefined;
                for (var i = 0, l = this.length; i < l; i++) {
                    if (this[i] === rtrack) {
                        track = this[i];
                        this.tracks_.splice(i, 1);
                        break;
                    }
                }
                if (!track) {
                    return;
                }
                this.trigger({
                    type: 'removetrack',
                    track: track
                });
            };
            TextTrackList.prototype.getTrackById = function(id) {
                var result = null;
                for (var i = 0, l = this.length; i < l; i++) {
                    var track = this[i];
                    if (track.id === id) {
                        result = track;
                        break;
                    }
                }
                return result;
            };
            exports['default'] = TextTrackList;
            module.exports = exports['default'];
        }, {
            "../event-target": 98,
            "../utils/browser.js": 128,
            "../utils/fn.js": 133,
            "global/document": 1
        }],
        126: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== 'function' && superClass !== null) {
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var _component = _dereq_('../component');
            var _component2 = _interopRequireDefault(_component);
            var _utilsEventsJs = _dereq_('../utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsLogJs = _dereq_('../utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _safeJsonParseTuple = _dereq_('safe-json-parse/tuple');
            var _safeJsonParseTuple2 = _interopRequireDefault(_safeJsonParseTuple);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var TextTrackSettings = (function(_Component) {
                _inherits(TextTrackSettings, _Component);

                function TextTrackSettings(player, options) {
                    _classCallCheck(this, TextTrackSettings);
                    _Component.call(this, player, options);
                    this.hide();
                    if (options.persistTextTrackSettings === undefined) {
                        this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings;
                    }
                    Events.on(this.$('.vjs-done-button'), 'click', Fn.bind(this, function() {
                        this.saveSettings();
                        this.hide();
                    }));
                    Events.on(this.$('.vjs-default-button'), 'click', Fn.bind(this, function() {
                        this.$('.vjs-fg-color > select').selectedIndex = 0;
                        this.$('.vjs-bg-color > select').selectedIndex = 0;
                        this.$('.window-color > select').selectedIndex = 0;
                        this.$('.vjs-text-opacity > select').selectedIndex = 0;
                        this.$('.vjs-bg-opacity > select').selectedIndex = 0;
                        this.$('.vjs-window-opacity > select').selectedIndex = 0;
                        this.$('.vjs-edge-style select').selectedIndex = 0;
                        this.$('.vjs-font-family select').selectedIndex = 0;
                        this.$('.vjs-font-percent select').selectedIndex = 2;
                        this.updateDisplay();
                    }));
                    Events.on(this.$('.vjs-fg-color > select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-bg-color > select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.window-color > select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-text-opacity > select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-bg-opacity > select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-window-opacity > select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-font-percent select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-edge-style select'), 'change', Fn.bind(this, this.updateDisplay));
                    Events.on(this.$('.vjs-font-family select'), 'change', Fn.bind(this, this.updateDisplay));
                    if (this.options_.persistTextTrackSettings) {
                        this.restoreSettings();
                    }
                }
                TextTrackSettings.prototype.createEl = function createEl() {
                    return _Component.prototype.createEl.call(this, 'div', {
                        className: 'vjs-caption-settings vjs-modal-overlay',
                        innerHTML: captionOptionsMenuTemplate()
                    });
                };
                TextTrackSettings.prototype.getValues = function getValues() {
                    var textEdge = getSelectedOptionValue(this.$('.vjs-edge-style select'));
                    var fontFamily = getSelectedOptionValue(this.$('.vjs-font-family select'));
                    var fgColor = getSelectedOptionValue(this.$('.vjs-fg-color > select'));
                    var textOpacity = getSelectedOptionValue(this.$('.vjs-text-opacity > select'));
                    var bgColor = getSelectedOptionValue(this.$('.vjs-bg-color > select'));
                    var bgOpacity = getSelectedOptionValue(this.$('.vjs-bg-opacity > select'));
                    var windowColor = getSelectedOptionValue(this.$('.window-color > select'));
                    var windowOpacity = getSelectedOptionValue(this.$('.vjs-window-opacity > select'));
                    var fontPercent = _globalWindow2['default']['parseFloat'](getSelectedOptionValue(this.$('.vjs-font-percent > select')));
                    var result = {
                        'backgroundOpacity': bgOpacity,
                        'textOpacity': textOpacity,
                        'windowOpacity': windowOpacity,
                        'edgeStyle': textEdge,
                        'fontFamily': fontFamily,
                        'color': fgColor,
                        'backgroundColor': bgColor,
                        'windowColor': windowColor,
                        'fontPercent': fontPercent
                    };
                    for (var _name in result) {
                        if (result[_name] === '' || result[_name] === 'none' || _name === 'fontPercent' && result[_name] === 1.00) {
                            delete result[_name];
                        }
                    }
                    return result;
                };
                TextTrackSettings.prototype.setValues = function setValues(values) {
                    setSelectedOption(this.$('.vjs-edge-style select'), values.edgeStyle);
                    setSelectedOption(this.$('.vjs-font-family select'), values.fontFamily);
                    setSelectedOption(this.$('.vjs-fg-color > select'), values.color);
                    setSelectedOption(this.$('.vjs-text-opacity > select'), values.textOpacity);
                    setSelectedOption(this.$('.vjs-bg-color > select'), values.backgroundColor);
                    setSelectedOption(this.$('.vjs-bg-opacity > select'), values.backgroundOpacity);
                    setSelectedOption(this.$('.window-color > select'), values.windowColor);
                    setSelectedOption(this.$('.vjs-window-opacity > select'), values.windowOpacity);
                    var fontPercent = values.fontPercent;
                    if (fontPercent) {
                        fontPercent = fontPercent.toFixed(2);
                    }
                    setSelectedOption(this.$('.vjs-font-percent > select'), fontPercent);
                };
                TextTrackSettings.prototype.restoreSettings = function restoreSettings() {
                    var _safeParseTuple = _safeJsonParseTuple2['default'](_globalWindow2['default'].localStorage.getItem('vjs-text-track-settings'));
                    var err = _safeParseTuple[0];
                    var values = _safeParseTuple[1];
                    if (err) {
                        _utilsLogJs2['default'].error(err);
                    }
                    if (values) {
                        this.setValues(values);
                    }
                };
                TextTrackSettings.prototype.saveSettings = function saveSettings() {
                    if (!this.options_.persistTextTrackSettings) {
                        return;
                    }
                    var values = this.getValues();
                    try {
                        if (Object.getOwnPropertyNames(values).length > 0) {
                            _globalWindow2['default'].localStorage.setItem('vjs-text-track-settings', JSON.stringify(values));
                        } else {
                            _globalWindow2['default'].localStorage.removeItem('vjs-text-track-settings');
                        }
                    } catch (e) {}
                };
                TextTrackSettings.prototype.updateDisplay = function updateDisplay() {
                    var ttDisplay = this.player_.getChild('textTrackDisplay');
                    if (ttDisplay) {
                        ttDisplay.updateDisplay();
                    }
                };
                return TextTrackSettings;
            })(_component2['default']);
            _component2['default'].registerComponent('TextTrackSettings', TextTrackSettings);

            function getSelectedOptionValue(target) {
                var selectedOption = undefined;
                if (target.selectedOptions) {
                    selectedOption = target.selectedOptions[0];
                } else if (target.options) {
                    selectedOption = target.options[target.options.selectedIndex];
                }
                return selectedOption.value;
            }

            function setSelectedOption(target, value) {
                if (!value) {
                    return;
                }
                var i = undefined;
                for (i = 0; i < target.options.length; i++) {
                    var option = target.options[i];
                    if (option.value === value) {
                        break;
                    }
                }
                target.selectedIndex = i;
            }

            function captionOptionsMenuTemplate() {
                var template = '<div class="vjs-tracksettings">\n      <div class="vjs-tracksettings-colors">\n        <div class="vjs-fg-color vjs-tracksetting">\n            <label class="vjs-label">Foreground</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <select>\n                <option value="">---</option>\n                <option value="1">Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n        </div> <!-- vjs-fg-color -->\n        <div class="vjs-bg-color vjs-tracksetting">\n            <label class="vjs-label">Background</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-bg-color -->\n        <div class="window-color vjs-tracksetting">\n            <label class="vjs-label">Window</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-window-color -->\n      </div> <!-- vjs-tracksettings -->\n      <div class="vjs-tracksettings-font">\n        <div class="vjs-font-percent vjs-tracksetting">\n          <label class="vjs-label">Font Size</label>\n          <select>\n            <option value="0.50">50%</option>\n            <option value="0.75">75%</option>\n            <option value="1.00" selected>100%</option>\n            <option value="1.25">125%</option>\n            <option value="1.50">150%</option>\n            <option value="1.75">175%</option>\n            <option value="2.00">200%</option>\n            <option value="3.00">300%</option>\n            <option value="4.00">400%</option>\n          </select>\n        </div> <!-- vjs-font-percent -->\n        <div class="vjs-edge-style vjs-tracksetting">\n          <label class="vjs-label">Text Edge Style</label>\n          <select>\n            <option value="none">None</option>\n            <option value="raised">Raised</option>\n            <option value="depressed">Depressed</option>\n            <option value="uniform">Uniform</option>\n            <option value="dropshadow">Dropshadow</option>\n          </select>\n        </div> <!-- vjs-edge-style -->\n        <div class="vjs-font-family vjs-tracksetting">\n          <label class="vjs-label">Font Family</label>\n          <select>\n            <option value="">Default</option>\n            <option value="monospaceSerif">Monospace Serif</option>\n            <option value="proportionalSerif">Proportional Serif</option>\n            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n            <option value="casual">Casual</option>\n            <option value="script">Script</option>\n            <option value="small-caps">Small Caps</option>\n          </select>\n        </div> <!-- vjs-font-family -->\n      </div>\n    </div>\n    <div class="vjs-tracksettings-controls">\n      <button class="vjs-default-button">Defaults</button>\n      <button class="vjs-done-button">Done</button>\n    </div>';
                return template;
            }
            exports['default'] = TextTrackSettings;
            module.exports = exports['default'];
        }, {
            "../component": 66,
            "../utils/events.js": 132,
            "../utils/fn.js": 133,
            "../utils/log.js": 136,
            "global/window": 2,
            "safe-json-parse/tuple": 53
        }],
        127: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _textTrackCueList = _dereq_('./text-track-cue-list');
            var _textTrackCueList2 = _interopRequireDefault(_textTrackCueList);
            var _utilsFnJs = _dereq_('../utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _utilsGuidJs = _dereq_('../utils/guid.js');
            var Guid = _interopRequireWildcard(_utilsGuidJs);
            var _utilsBrowserJs = _dereq_('../utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _textTrackEnums = _dereq_('./text-track-enums');
            var TextTrackEnum = _interopRequireWildcard(_textTrackEnums);
            var _utilsLogJs = _dereq_('../utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _eventTarget = _dereq_('../event-target');
            var _eventTarget2 = _interopRequireDefault(_eventTarget);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _utilsUrlJs = _dereq_('../utils/url.js');
            var _xhr = _dereq_('xhr');
            var _xhr2 = _interopRequireDefault(_xhr);
            var TextTrack = function TextTrack() {
                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                if (!options.tech) {
                    throw new Error('A tech was not provided.');
                }
                var tt = this;
                if (browser.IS_IE8) {
                    tt = _globalDocument2['default'].createElement('custom');
                    for (var prop in TextTrack.prototype) {
                        if (prop !== 'constructor') {
                            tt[prop] = TextTrack.prototype[prop];
                        }
                    }
                }
                tt.tech_ = options.tech;
                var mode = TextTrackEnum.TextTrackMode[options['mode']] || 'disabled';
                var kind = TextTrackEnum.TextTrackKind[options['kind']] || 'subtitles';
                var label = options['label'] || '';
                var language = options['language'] || options['srclang'] || '';
                var id = options['id'] || 'vjs_text_track_' + Guid.newGUID();
                if (kind === 'metadata' || kind === 'chapters') {
                    mode = 'hidden';
                }
                tt.cues_ = [];
                tt.activeCues_ = [];
                var cues = new _textTrackCueList2['default'](tt.cues_);
                var activeCues = new _textTrackCueList2['default'](tt.activeCues_);
                var changed = false;
                var timeupdateHandler = Fn.bind(tt, function() {
                    this['activeCues'];
                    if (changed) {
                        this['trigger']('cuechange');
                        changed = false;
                    }
                });
                if (mode !== 'disabled') {
                    tt.tech_.on('timeupdate', timeupdateHandler);
                }
                Object.defineProperty(tt, 'kind', {
                    get: function get() {
                        return kind;
                    },
                    set: Function.prototype
                });
                Object.defineProperty(tt, 'label', {
                    get: function get() {
                        return label;
                    },
                    set: Function.prototype
                });
                Object.defineProperty(tt, 'language', {
                    get: function get() {
                        return language;
                    },
                    set: Function.prototype
                });
                Object.defineProperty(tt, 'id', {
                    get: function get() {
                        return id;
                    },
                    set: Function.prototype
                });
                Object.defineProperty(tt, 'mode', {
                    get: function get() {
                        return mode;
                    },
                    set: function set(newMode) {
                        if (!TextTrackEnum.TextTrackMode[newMode]) {
                            return;
                        }
                        mode = newMode;
                        if (mode === 'showing') {
                            this.tech_.on('timeupdate', timeupdateHandler);
                        }
                        this.trigger('modechange');
                    }
                });
                Object.defineProperty(tt, 'cues', {
                    get: function get() {
                        if (!this.loaded_) {
                            return null;
                        }
                        return cues;
                    },
                    set: Function.prototype
                });
                Object.defineProperty(tt, 'activeCues', {
                    get: function get() {
                        if (!this.loaded_) {
                            return null;
                        }
                        if (this['cues'].length === 0) {
                            return activeCues;
                        }
                        var ct = this.tech_.currentTime();
                        var active = [];
                        for (var i = 0, l = this['cues'].length; i < l; i++) {
                            var cue = this['cues'][i];
                            if (cue['startTime'] <= ct && cue['endTime'] >= ct) {
                                active.push(cue);
                            } else if (cue['startTime'] === cue['endTime'] && cue['startTime'] <= ct && cue['startTime'] + 0.5 >= ct) {
                                active.push(cue);
                            }
                        }
                        changed = false;
                        if (active.length !== this.activeCues_.length) {
                            changed = true;
                        } else {
                            for (var i = 0; i < active.length; i++) {
                                if (indexOf.call(this.activeCues_, active[i]) === -1) {
                                    changed = true;
                                }
                            }
                        }
                        this.activeCues_ = active;
                        activeCues.setCues_(this.activeCues_);
                        return activeCues;
                    },
                    set: Function.prototype
                });
                if (options.src) {
                    tt.src = options.src;
                    loadTrack(options.src, tt);
                } else {
                    tt.loaded_ = true;
                }
                if (browser.IS_IE8) {
                    return tt;
                }
            };
            TextTrack.prototype = Object.create(_eventTarget2['default'].prototype);
            TextTrack.prototype.constructor = TextTrack;
            TextTrack.prototype.allowedEvents_ = {
                'cuechange': 'cuechange'
            };
            TextTrack.prototype.addCue = function(cue) {
                var tracks = this.tech_.textTracks();
                if (tracks) {
                    for (var i = 0; i < tracks.length; i++) {
                        if (tracks[i] !== this) {
                            tracks[i].removeCue(cue);
                        }
                    }
                }
                this.cues_.push(cue);
                this['cues'].setCues_(this.cues_);
            };
            TextTrack.prototype.removeCue = function(removeCue) {
                var removed = false;
                for (var i = 0, l = this.cues_.length; i < l; i++) {
                    var cue = this.cues_[i];
                    if (cue === removeCue) {
                        this.cues_.splice(i, 1);
                        removed = true;
                    }
                }
                if (removed) {
                    this.cues.setCues_(this.cues_);
                }
            };
            var parseCues = function parseCues(srcContent, track) {
                var parser = new _globalWindow2['default'].WebVTT.Parser(_globalWindow2['default'], _globalWindow2['default'].vttjs, _globalWindow2['default'].WebVTT.StringDecoder());
                parser.oncue = function(cue) {
                    track.addCue(cue);
                };
                parser.onparsingerror = function(error) {
                    _utilsLogJs2['default'].error(error);
                };
                parser.onflush = function() {
                    track.trigger({
                        type: 'loadeddata',
                        target: track
                    });
                };
                parser.parse(srcContent);
                parser.flush();
            };
            var loadTrack = function loadTrack(src, track) {
                var opts = {
                    uri: src
                };
                var crossOrigin = _utilsUrlJs.isCrossOrigin(src);
                if (crossOrigin) {
                    opts.cors = crossOrigin;
                }
                _xhr2['default'](opts, Fn.bind(this, function(err, response, responseBody) {
                    if (err) {
                        return _utilsLogJs2['default'].error(err, response);
                    }
                    track.loaded_ = true;
                    if (typeof _globalWindow2['default'].WebVTT !== 'function') {
                        _globalWindow2['default'].setTimeout(function() {
                            parseCues(responseBody, track);
                        }, 100);
                    } else {
                        parseCues(responseBody, track);
                    }
                }));
            };
            var indexOf = function indexOf(searchElement, fromIndex) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var O = Object(this);
                var len = O.length >>> 0;
                if (len === 0) {
                    return -1;
                }
                var n = +fromIndex || 0;
                if (Math.abs(n) === Infinity) {
                    n = 0;
                }
                if (n >= len) {
                    return -1;
                }
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                while (k < len) {
                    if (k in O && O[k] === searchElement) {
                        return k;
                    }
                    k++;
                }
                return -1;
            };
            exports['default'] = TextTrack;
            module.exports = exports['default'];
        }, {
            "../event-target": 98,
            "../utils/browser.js": 128,
            "../utils/fn.js": 133,
            "../utils/guid.js": 135,
            "../utils/log.js": 136,
            "../utils/url.js": 141,
            "./text-track-cue-list": 121,
            "./text-track-enums": 123,
            "global/document": 1,
            "global/window": 2,
            "xhr": 55
        }],
        128: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var USER_AGENT = _globalWindow2['default'].navigator.userAgent;
            var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
            var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
            var IS_IPHONE = /iPhone/i.test(USER_AGENT);
            exports.IS_IPHONE = IS_IPHONE;
            var IS_IPAD = /iPad/i.test(USER_AGENT);
            exports.IS_IPAD = IS_IPAD;
            var IS_IPOD = /iPod/i.test(USER_AGENT);
            exports.IS_IPOD = IS_IPOD;
            var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
            exports.IS_IOS = IS_IOS;
            var IOS_VERSION = (function() {
                var match = USER_AGENT.match(/OS (\d+)_/i);
                if (match && match[1]) {
                    return match[1];
                }
            })();
            exports.IOS_VERSION = IOS_VERSION;
            var IS_ANDROID = /Android/i.test(USER_AGENT);
            exports.IS_ANDROID = IS_ANDROID;
            var ANDROID_VERSION = (function() {
                var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
                    major, minor;
                if (!match) {
                    return null;
                }
                major = match[1] && parseFloat(match[1]);
                minor = match[2] && parseFloat(match[2]);
                if (major && minor) {
                    return parseFloat(match[1] + '.' + match[2]);
                } else if (major) {
                    return major;
                } else {
                    return null;
                }
            })();
            exports.ANDROID_VERSION = ANDROID_VERSION;
            var IS_OLD_ANDROID = IS_ANDROID && /webkit/i.test(USER_AGENT) && ANDROID_VERSION < 2.3;
            exports.IS_OLD_ANDROID = IS_OLD_ANDROID;
            var IS_NATIVE_ANDROID = IS_ANDROID && ANDROID_VERSION < 5 && appleWebkitVersion < 537;
            exports.IS_NATIVE_ANDROID = IS_NATIVE_ANDROID;
            var IS_FIREFOX = /Firefox/i.test(USER_AGENT);
            exports.IS_FIREFOX = IS_FIREFOX;
            var IS_CHROME = /Chrome/i.test(USER_AGENT);
            exports.IS_CHROME = IS_CHROME;
            var IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT);
            exports.IS_IE8 = IS_IE8;
            var TOUCH_ENABLED = !!('ontouchstart' in _globalWindow2['default'] || _globalWindow2['default'].DocumentTouch && _globalDocument2['default'] instanceof _globalWindow2['default'].DocumentTouch);
            exports.TOUCH_ENABLED = TOUCH_ENABLED;
            var BACKGROUND_SIZE_SUPPORTED = ('backgroundSize' in _globalDocument2['default'].createElement('video').style);
            exports.BACKGROUND_SIZE_SUPPORTED = BACKGROUND_SIZE_SUPPORTED;
        }, {
            "global/document": 1,
            "global/window": 2
        }],
        129: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.bufferedPercent = bufferedPercent;
            var _timeRangesJs = _dereq_('./time-ranges.js');

            function bufferedPercent(buffered, duration) {
                var bufferedDuration = 0,
                    start, end;
                if (!duration) {
                    return 0;
                }
                if (!buffered || !buffered.length) {
                    buffered = _timeRangesJs.createTimeRange(0, 0);
                }
                for (var i = 0; i < buffered.length; i++) {
                    start = buffered.start(i);
                    end = buffered.end(i);
                    if (end > duration) {
                        end = duration;
                    }
                    bufferedDuration += end - start;
                }
                return bufferedDuration / duration;
            }
        }, {
            "./time-ranges.js": 139
        }],
        130: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _logJs = _dereq_('./log.js');
            var _logJs2 = _interopRequireDefault(_logJs);
            var defaultBehaviors = {
                get: function get(obj, key) {
                    return obj[key];
                },
                set: function set(obj, key, value) {
                    obj[key] = value;
                    return true;
                }
            };
            exports['default'] = function(target) {
                var messages = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                if (typeof Proxy === 'function') {
                    var _ret = (function() {
                        var handler = {};
                        Object.keys(messages).forEach(function(key) {
                            if (defaultBehaviors.hasOwnProperty(key)) {
                                handler[key] = function() {
                                    _logJs2['default'].warn(messages[key]);
                                    return defaultBehaviors[key].apply(this, arguments);
                                };
                            }
                        });
                        return {
                            v: new Proxy(target, handler)
                        };
                    })();
                    if (typeof _ret === 'object') return _ret.v;
                }
                return target;
            };
            module.exports = exports['default'];
        }, {
            "./log.js": 136
        }],
        131: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.getEl = getEl;
            exports.createEl = createEl;
            exports.textContent = textContent;
            exports.insertElFirst = insertElFirst;
            exports.getElData = getElData;
            exports.hasElData = hasElData;
            exports.removeElData = removeElData;
            exports.hasElClass = hasElClass;
            exports.addElClass = addElClass;
            exports.removeElClass = removeElClass;
            exports.toggleElClass = toggleElClass;
            exports.setElAttributes = setElAttributes;
            exports.getElAttributes = getElAttributes;
            exports.blockTextSelection = blockTextSelection;
            exports.unblockTextSelection = unblockTextSelection;
            exports.findElPosition = findElPosition;
            exports.getPointerPosition = getPointerPosition;
            exports.isEl = isEl;
            exports.isTextNode = isTextNode;
            exports.emptyEl = emptyEl;
            exports.normalizeContent = normalizeContent;
            exports.appendContent = appendContent;
            exports.insertContent = insertContent;
            var _templateObject = _taggedTemplateLiteralLoose(['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.'], ['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.']);

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _taggedTemplateLiteralLoose(strings, raw) {
                strings.raw = raw;
                return strings;
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _guidJs = _dereq_('./guid.js');
            var Guid = _interopRequireWildcard(_guidJs);
            var _logJs = _dereq_('./log.js');
            var _logJs2 = _interopRequireDefault(_logJs);
            var _tsml = _dereq_('tsml');
            var _tsml2 = _interopRequireDefault(_tsml);

            function isNonBlankString(str) {
                return typeof str === 'string' && /\S/.test(str);
            }

            function throwIfWhitespace(str) {
                if (/\s/.test(str)) {
                    throw new Error('class has illegal whitespace characters');
                }
            }

            function classRegExp(className) {
                return new RegExp('(^|\\s)' + className + '($|\\s)');
            }

            function createQuerier(method) {
                return function(selector, context) {
                    if (!isNonBlankString(selector)) {
                        return _globalDocument2['default'][method](null);
                    }
                    if (isNonBlankString(context)) {
                        context = _globalDocument2['default'].querySelector(context);
                    }
                    return (isEl(context) ? context : _globalDocument2['default'])[method](selector);
                };
            }

            function getEl(id) {
                if (id.indexOf('#') === 0) {
                    id = id.slice(1);
                }
                return _globalDocument2['default'].getElementById(id);
            }

            function createEl() {
                var tagName = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];
                var properties = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                var attributes = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                var el = _globalDocument2['default'].createElement(tagName);
                Object.getOwnPropertyNames(properties).forEach(function(propName) {
                    var val = properties[propName];
                    if (propName.indexOf('aria-') !== -1 || propName === 'role' || propName === 'type') {
                        _logJs2['default'].warn(_tsml2['default'](_templateObject, propName, val));
                        el.setAttribute(propName, val);
                    } else {
                        el[propName] = val;
                    }
                });
                Object.getOwnPropertyNames(attributes).forEach(function(attrName) {
                    var val = attributes[attrName];
                    el.setAttribute(attrName, attributes[attrName]);
                });
                return el;
            }

            function textContent(el, text) {
                if (typeof el.textContent === 'undefined') {
                    el.innerText = text;
                } else {
                    el.textContent = text;
                }
            }

            function insertElFirst(child, parent) {
                if (parent.firstChild) {
                    parent.insertBefore(child, parent.firstChild);
                } else {
                    parent.appendChild(child);
                }
            }
            var elData = {};
            var elIdAttr = 'vdata' + new Date().getTime();

            function getElData(el) {
                var id = el[elIdAttr];
                if (!id) {
                    id = el[elIdAttr] = Guid.newGUID();
                }
                if (!elData[id]) {
                    elData[id] = {};
                }
                return elData[id];
            }

            function hasElData(el) {
                var id = el[elIdAttr];
                if (!id) {
                    return false;
                }
                return !!Object.getOwnPropertyNames(elData[id]).length;
            }

            function removeElData(el) {
                var id = el[elIdAttr];
                if (!id) {
                    return;
                }
                delete elData[id];
                try {
                    delete el[elIdAttr];
                } catch (e) {
                    if (el.removeAttribute) {
                        el.removeAttribute(elIdAttr);
                    } else {
                        el[elIdAttr] = null;
                    }
                }
            }

            function hasElClass(element, classToCheck) {
                if (element.classList) {
                    return element.classList.contains(classToCheck);
                } else {
                    throwIfWhitespace(classToCheck);
                    return classRegExp(classToCheck).test(element.className);
                }
            }

            function addElClass(element, classToAdd) {
                if (element.classList) {
                    element.classList.add(classToAdd);
                } else if (!hasElClass(element, classToAdd)) {
                    element.className = (element.className + ' ' + classToAdd).trim();
                }
                return element;
            }

            function removeElClass(element, classToRemove) {
                if (element.classList) {
                    element.classList.remove(classToRemove);
                } else {
                    throwIfWhitespace(classToRemove);
                    element.className = element.className.split(/\s+/).filter(function(c) {
                        return c !== classToRemove;
                    }).join(' ');
                }
                return element;
            }

            function toggleElClass(element, classToToggle, predicate) {
                var has = hasElClass(element, classToToggle);
                if (typeof predicate === 'function') {
                    predicate = predicate(element, classToToggle);
                }
                if (typeof predicate !== 'boolean') {
                    predicate = !has;
                }
                if (predicate === has) {
                    return;
                }
                if (predicate) {
                    addElClass(element, classToToggle);
                } else {
                    removeElClass(element, classToToggle);
                }
                return element;
            }

            function setElAttributes(el, attributes) {
                Object.getOwnPropertyNames(attributes).forEach(function(attrName) {
                    var attrValue = attributes[attrName];
                    if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false) {
                        el.removeAttribute(attrName);
                    } else {
                        el.setAttribute(attrName, attrValue === true ? '' : attrValue);
                    }
                });
            }

            function getElAttributes(tag) {
                var obj, knownBooleans, attrs, attrName, attrVal;
                obj = {};
                knownBooleans = ',' + 'autoplay,controls,loop,muted,default' + ',';
                if (tag && tag.attributes && tag.attributes.length > 0) {
                    attrs = tag.attributes;
                    for (var i = attrs.length - 1; i >= 0; i--) {
                        attrName = attrs[i].name;
                        attrVal = attrs[i].value;
                        if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(',' + attrName + ',') !== -1) {
                            attrVal = attrVal !== null ? true : false;
                        }
                        obj[attrName] = attrVal;
                    }
                }
                return obj;
            }

            function blockTextSelection() {
                _globalDocument2['default'].body.focus();
                _globalDocument2['default'].onselectstart = function() {
                    return false;
                };
            }

            function unblockTextSelection() {
                _globalDocument2['default'].onselectstart = function() {
                    return true;
                };
            }

            function findElPosition(el) {
                var box = undefined;
                if (el.getBoundingClientRect && el.parentNode) {
                    box = el.getBoundingClientRect();
                }
                if (!box) {
                    return {
                        left: 0,
                        top: 0
                    };
                }
                var docEl = _globalDocument2['default'].documentElement;
                var body = _globalDocument2['default'].body;
                var clientLeft = docEl.clientLeft || body.clientLeft || 0;
                var scrollLeft = _globalWindow2['default'].pageXOffset || body.scrollLeft;
                var left = box.left + scrollLeft - clientLeft;
                var clientTop = docEl.clientTop || body.clientTop || 0;
                var scrollTop = _globalWindow2['default'].pageYOffset || body.scrollTop;
                var top = box.top + scrollTop - clientTop;
                return {
                    left: Math.round(left),
                    top: Math.round(top)
                };
            }

            function getPointerPosition(el, event) {
                var position = {};
                var box = findElPosition(el);
                var boxW = el.offsetWidth;
                var boxH = el.offsetHeight;
                var boxY = box.top;
                var boxX = box.left;
                var pageY = event.pageY;
                var pageX = event.pageX;
                if (event.changedTouches) {
                    pageX = event.changedTouches[0].pageX;
                    pageY = event.changedTouches[0].pageY;
                }
                position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
                position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
                return position;
            }

            function isEl(value) {
                return !!value && typeof value === 'object' && value.nodeType === 1;
            }

            function isTextNode(value) {
                return !!value && typeof value === 'object' && value.nodeType === 3;
            }

            function emptyEl(el) {
                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
                return el;
            }

            function normalizeContent(content) {
                if (typeof content === 'function') {
                    content = content();
                }
                return (Array.isArray(content) ? content : [content]).map(function(value) {
                    if (typeof value === 'function') {
                        value = value();
                    }
                    if (isEl(value) || isTextNode(value)) {
                        return value;
                    }
                    if (typeof value === 'string' && /\S/.test(value)) {
                        return _globalDocument2['default'].createTextNode(value);
                    }
                }).filter(function(value) {
                    return value;
                });
            }

            function appendContent(el, content) {
                normalizeContent(content).forEach(function(node) {
                    return el.appendChild(node);
                });
                return el;
            }

            function insertContent(el, content) {
                return appendContent(emptyEl(el), content);
            }
            var $ = createQuerier('querySelector');
            exports.$ = $;
            var $$ = createQuerier('querySelectorAll');
            exports.$$ = $$;
        }, {
            "./guid.js": 135,
            "./log.js": 136,
            "global/document": 1,
            "global/window": 2,
            "tsml": 54
        }],
        132: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.on = on;
            exports.off = off;
            exports.trigger = trigger;
            exports.one = one;
            exports.fixEvent = fixEvent;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }
            var _domJs = _dereq_('./dom.js');
            var Dom = _interopRequireWildcard(_domJs);
            var _guidJs = _dereq_('./guid.js');
            var Guid = _interopRequireWildcard(_guidJs);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);

            function on(elem, type, fn) {
                if (Array.isArray(type)) {
                    return _handleMultipleEvents(on, elem, type, fn);
                }
                var data = Dom.getElData(elem);
                if (!data.handlers) data.handlers = {};
                if (!data.handlers[type]) data.handlers[type] = [];
                if (!fn.guid) fn.guid = Guid.newGUID();
                data.handlers[type].push(fn);
                if (!data.dispatcher) {
                    data.disabled = false;
                    data.dispatcher = function(event, hash) {
                        if (data.disabled) return;
                        event = fixEvent(event);
                        var handlers = data.handlers[event.type];
                        if (handlers) {
                            var handlersCopy = handlers.slice(0);
                            for (var m = 0, n = handlersCopy.length; m < n; m++) {
                                if (event.isImmediatePropagationStopped()) {
                                    break;
                                } else {
                                    handlersCopy[m].call(elem, event, hash);
                                }
                            }
                        }
                    };
                }
                if (data.handlers[type].length === 1) {
                    if (elem.addEventListener) {
                        elem.addEventListener(type, data.dispatcher, false);
                    } else if (elem.attachEvent) {
                        elem.attachEvent('on' + type, data.dispatcher);
                    }
                }
            }

            function off(elem, type, fn) {
                if (!Dom.hasElData(elem)) return;
                var data = Dom.getElData(elem);
                if (!data.handlers) {
                    return;
                }
                if (Array.isArray(type)) {
                    return _handleMultipleEvents(off, elem, type, fn);
                }
                var removeType = function removeType(t) {
                    data.handlers[t] = [];
                    _cleanUpEvents(elem, t);
                };
                if (!type) {
                    for (var t in data.handlers) {
                        removeType(t);
                    }
                    return;
                }
                var handlers = data.handlers[type];
                if (!handlers) return;
                if (!fn) {
                    removeType(type);
                    return;
                }
                if (fn.guid) {
                    for (var n = 0; n < handlers.length; n++) {
                        if (handlers[n].guid === fn.guid) {
                            handlers.splice(n--, 1);
                        }
                    }
                }
                _cleanUpEvents(elem, type);
            }

            function trigger(elem, event, hash) {
                var elemData = Dom.hasElData(elem) ? Dom.getElData(elem) : {};
                var parent = elem.parentNode || elem.ownerDocument;
                if (typeof event === 'string') {
                    event = {
                        type: event,
                        target: elem
                    };
                }
                event = fixEvent(event);
                if (elemData.dispatcher) {
                    elemData.dispatcher.call(elem, event, hash);
                }
                if (parent && !event.isPropagationStopped() && event.bubbles === true) {
                    trigger.call(null, parent, event, hash);
                } else if (!parent && !event.defaultPrevented) {
                    var targetData = Dom.getElData(event.target);
                    if (event.target[event.type]) {
                        targetData.disabled = true;
                        if (typeof event.target[event.type] === 'function') {
                            event.target[event.type]();
                        }
                        targetData.disabled = false;
                    }
                }
                return !event.defaultPrevented;
            }

            function one(elem, type, fn) {
                if (Array.isArray(type)) {
                    return _handleMultipleEvents(one, elem, type, fn);
                }
                var func = function func() {
                    off(elem, type, func);
                    fn.apply(this, arguments);
                };
                func.guid = fn.guid = fn.guid || Guid.newGUID();
                on(elem, type, func);
            }

            function fixEvent(event) {
                function returnTrue() {
                    return true;
                }

                function returnFalse() {
                    return false;
                }
                if (!event || !event.isPropagationStopped) {
                    var old = event || _globalWindow2['default'].event;
                    event = {};
                    for (var key in old) {
                        if (key !== 'layerX' && key !== 'layerY' && key !== 'keyLocation' && key !== 'webkitMovementX' && key !== 'webkitMovementY') {
                            if (!(key === 'returnValue' && old.preventDefault)) {
                                event[key] = old[key];
                            }
                        }
                    }
                    if (!event.target) {
                        event.target = event.srcElement || _globalDocument2['default'];
                    }
                    if (!event.relatedTarget) {
                        event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
                    }
                    event.preventDefault = function() {
                        if (old.preventDefault) {
                            old.preventDefault();
                        }
                        event.returnValue = false;
                        old.returnValue = false;
                        event.defaultPrevented = true;
                    };
                    event.defaultPrevented = false;
                    event.stopPropagation = function() {
                        if (old.stopPropagation) {
                            old.stopPropagation();
                        }
                        event.cancelBubble = true;
                        old.cancelBubble = true;
                        event.isPropagationStopped = returnTrue;
                    };
                    event.isPropagationStopped = returnFalse;
                    event.stopImmediatePropagation = function() {
                        if (old.stopImmediatePropagation) {
                            old.stopImmediatePropagation();
                        }
                        event.isImmediatePropagationStopped = returnTrue;
                        event.stopPropagation();
                    };
                    event.isImmediatePropagationStopped = returnFalse;
                    if (event.clientX != null) {
                        var doc = _globalDocument2['default'].documentElement,
                            body = _globalDocument2['default'].body;
                        event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                    }
                    event.which = event.charCode || event.keyCode;
                    if (event.button != null) {
                        event.button = event.button & 1 ? 0 : event.button & 4 ? 1 : event.button & 2 ? 2 : 0;
                    }
                }
                return event;
            }

            function _cleanUpEvents(elem, type) {
                var data = Dom.getElData(elem);
                if (data.handlers[type].length === 0) {
                    delete data.handlers[type];
                    if (elem.removeEventListener) {
                        elem.removeEventListener(type, data.dispatcher, false);
                    } else if (elem.detachEvent) {
                        elem.detachEvent('on' + type, data.dispatcher);
                    }
                }
                if (Object.getOwnPropertyNames(data.handlers).length <= 0) {
                    delete data.handlers;
                    delete data.dispatcher;
                    delete data.disabled;
                }
                if (Object.getOwnPropertyNames(data).length === 0) {
                    Dom.removeElData(elem);
                }
            }

            function _handleMultipleEvents(fn, elem, types, callback) {
                types.forEach(function(type) {
                    fn(elem, type, callback);
                });
            }
        }, {
            "./dom.js": 131,
            "./guid.js": 135,
            "global/document": 1,
            "global/window": 2
        }],
        133: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            var _guidJs = _dereq_('./guid.js');
            var bind = function bind(context, fn, uid) {
                if (!fn.guid) {
                    fn.guid = _guidJs.newGUID();
                }
                var ret = function ret() {
                    return fn.apply(context, arguments);
                };
                ret.guid = uid ? uid + '_' + fn.guid : fn.guid;
                return ret;
            };
            exports.bind = bind;
        }, {
            "./guid.js": 135
        }],
        134: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function formatTime(seconds) {
                var guide = arguments.length <= 1 || arguments[1] === undefined ? seconds : arguments[1];
                return (function() {
                    seconds = seconds < 0 ? 0 : seconds;
                    var s = Math.floor(seconds % 60);
                    var m = Math.floor(seconds / 60 % 60);
                    var h = Math.floor(seconds / 3600);
                    var gm = Math.floor(guide / 60 % 60);
                    var gh = Math.floor(guide / 3600);
                    if (isNaN(seconds) || seconds === Infinity) {
                        h = m = s = '-';
                    }
                    h = h > 0 || gh > 0 ? h + ':' : '';
                    m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';
                    s = s < 10 ? '0' + s : s;
                    return h + m + s;
                })();
            }
            exports['default'] = formatTime;
            module.exports = exports['default'];
        }, {}],
        135: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;
            exports.newGUID = newGUID;
            var _guid = 1;

            function newGUID() {
                return _guid++;
            }
        }, {}],
        136: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var log = function log() {
                _logType(null, arguments);
            };
            log.history = [];
            log.error = function() {
                _logType('error', arguments);
            };
            log.warn = function() {
                _logType('warn', arguments);
            };

            function _logType(type, args) {
                var argsArray = Array.prototype.slice.call(args);
                var noop = function noop() {};
                var console = _globalWindow2['default']['console'] || {
                    'log': noop,
                    'warn': noop,
                    'error': noop
                };
                if (type) {
                    argsArray.unshift(type.toUpperCase() + ':');
                } else {
                    type = 'log';
                }
                log.history.push(argsArray);
                argsArray.unshift('VIDEOJS:');
                if (console[type].apply) {
                    console[type].apply(console, argsArray);
                } else {
                    console[type](argsArray.join(' '));
                }
            }
            exports['default'] = log;
            module.exports = exports['default'];
        }, {
            "global/window": 2
        }],
        137: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            exports['default'] = mergeOptions;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _lodashCompatObjectMerge = _dereq_('lodash-compat/object/merge');
            var _lodashCompatObjectMerge2 = _interopRequireDefault(_lodashCompatObjectMerge);

            function isPlain(obj) {
                return !!obj && typeof obj === 'object' && obj.toString() === '[object Object]' && obj.constructor === Object;
            }
            var customizer = function customizer(destination, source) {
                if (!isPlain(source)) {
                    return source;
                }
                if (!isPlain(destination)) {
                    return mergeOptions(source);
                }
            };

            function mergeOptions() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift({});
                args.push(customizer);
                _lodashCompatObjectMerge2['default'].apply(null, args);
                return args[0];
            }
            module.exports = exports['default'];
        }, {
            "lodash-compat/object/merge": 40
        }],
        138: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var createStyleElement = function createStyleElement(className) {
                var style = _globalDocument2['default'].createElement('style');
                style.className = className;
                return style;
            };
            exports.createStyleElement = createStyleElement;
            var setTextContent = function setTextContent(el, content) {
                if (el.styleSheet) {
                    el.styleSheet.cssText = content;
                } else {
                    el.textContent = content;
                }
            };
            exports.setTextContent = setTextContent;
        }, {
            "global/document": 1
        }],
        139: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.createTimeRanges = createTimeRanges;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _logJs = _dereq_('./log.js');
            var _logJs2 = _interopRequireDefault(_logJs);

            function createTimeRanges(start, end) {
                if (Array.isArray(start)) {
                    return createTimeRangesObj(start);
                } else if (start === undefined || end === undefined) {
                    return createTimeRangesObj();
                }
                return createTimeRangesObj([
                    [start, end]
                ]);
            }
            exports.createTimeRange = createTimeRanges;

            function createTimeRangesObj(ranges) {
                if (ranges === undefined || ranges.length === 0) {
                    return {
                        length: 0,
                        start: function start() {
                            throw new Error('This TimeRanges object is empty');
                        },
                        end: function end() {
                            throw new Error('This TimeRanges object is empty');
                        }
                    };
                }
                return {
                    length: ranges.length,
                    start: getRange.bind(null, 'start', 0, ranges),
                    end: getRange.bind(null, 'end', 1, ranges)
                };
            }

            function getRange(fnName, valueIndex, ranges, rangeIndex) {
                if (rangeIndex === undefined) {
                    _logJs2['default'].warn('DEPRECATED: Function \'' + fnName + '\' on \'TimeRanges\' called without an index argument.');
                    rangeIndex = 0;
                }
                rangeCheck(fnName, rangeIndex, ranges.length - 1);
                return ranges[rangeIndex][valueIndex];
            }

            function rangeCheck(fnName, index, maxIndex) {
                if (index < 0 || index > maxIndex) {
                    throw new Error('Failed to execute \'' + fnName + '\' on \'TimeRanges\': The index provided (' + index + ') is greater than or equal to the maximum bound (' + maxIndex + ').');
                }
            }
        }, {
            "./log.js": 136
        }],
        140: [function(_dereq_, module, exports) {
            "use strict";
            exports.__esModule = true;

            function toTitleCase(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            exports["default"] = toTitleCase;
            module.exports = exports["default"];
        }, {}],
        141: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _globalWindow = _dereq_('global/window');
            var _globalWindow2 = _interopRequireDefault(_globalWindow);
            var parseUrl = function parseUrl(url) {
                var props = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];
                var a = _globalDocument2['default'].createElement('a');
                a.href = url;
                var addToBody = a.host === '' && a.protocol !== 'file:';
                var div = undefined;
                if (addToBody) {
                    div = _globalDocument2['default'].createElement('div');
                    div.innerHTML = '<a href="' + url + '"></a>';
                    a = div.firstChild;
                    div.setAttribute('style', 'display:none; position:absolute;');
                    _globalDocument2['default'].body.appendChild(div);
                }
                var details = {};
                for (var i = 0; i < props.length; i++) {
                    details[props[i]] = a[props[i]];
                }
                if (details.protocol === 'http:') {
                    details.host = details.host.replace(/:80$/, '');
                }
                if (details.protocol === 'https:') {
                    details.host = details.host.replace(/:443$/, '');
                }
                if (addToBody) {
                    _globalDocument2['default'].body.removeChild(div);
                }
                return details;
            };
            exports.parseUrl = parseUrl;
            var getAbsoluteURL = function getAbsoluteURL(url) {
                if (!url.match(/^https?:\/\//)) {
                    var div = _globalDocument2['default'].createElement('div');
                    div.innerHTML = '<a href="' + url + '">x</a>';
                    url = div.firstChild.href;
                }
                return url;
            };
            exports.getAbsoluteURL = getAbsoluteURL;
            var getFileExtension = function getFileExtension(path) {
                if (typeof path === 'string') {
                    var splitPathRe = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i;
                    var pathParts = splitPathRe.exec(path);
                    if (pathParts) {
                        return pathParts.pop().toLowerCase();
                    }
                }
                return '';
            };
            exports.getFileExtension = getFileExtension;
            var isCrossOrigin = function isCrossOrigin(url) {
                var winLoc = _globalWindow2['default'].location;
                var urlInfo = parseUrl(url);
                var srcProtocol = urlInfo.protocol === ':' ? winLoc.protocol : urlInfo.protocol;
                var crossOrigin = srcProtocol + urlInfo.host !== winLoc.protocol + winLoc.host;
                return crossOrigin;
            };
            exports.isCrossOrigin = isCrossOrigin;
        }, {
            "global/document": 1,
            "global/window": 2
        }],
        142: [function(_dereq_, module, exports) {
            'use strict';
            exports.__esModule = true;

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj['default'] = obj;
                    return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            }
            var _globalDocument = _dereq_('global/document');
            var _globalDocument2 = _interopRequireDefault(_globalDocument);
            var _setup = _dereq_('./setup');
            var setup = _interopRequireWildcard(_setup);
            var _utilsStylesheetJs = _dereq_('./utils/stylesheet.js');
            var stylesheet = _interopRequireWildcard(_utilsStylesheetJs);
            var _component = _dereq_('./component');
            var _component2 = _interopRequireDefault(_component);
            var _eventTarget = _dereq_('./event-target');
            var _eventTarget2 = _interopRequireDefault(_eventTarget);
            var _utilsEventsJs = _dereq_('./utils/events.js');
            var Events = _interopRequireWildcard(_utilsEventsJs);
            var _player = _dereq_('./player');
            var _player2 = _interopRequireDefault(_player);
            var _pluginsJs = _dereq_('./plugins.js');
            var _pluginsJs2 = _interopRequireDefault(_pluginsJs);
            var _srcJsUtilsMergeOptionsJs = _dereq_('../../src/js/utils/merge-options.js');
            var _srcJsUtilsMergeOptionsJs2 = _interopRequireDefault(_srcJsUtilsMergeOptionsJs);
            var _utilsFnJs = _dereq_('./utils/fn.js');
            var Fn = _interopRequireWildcard(_utilsFnJs);
            var _tracksTextTrackJs = _dereq_('./tracks/text-track.js');
            var _tracksTextTrackJs2 = _interopRequireDefault(_tracksTextTrackJs);
            var _objectAssign = _dereq_('object.assign');
            var _objectAssign2 = _interopRequireDefault(_objectAssign);
            var _utilsTimeRangesJs = _dereq_('./utils/time-ranges.js');
            var _utilsFormatTimeJs = _dereq_('./utils/format-time.js');
            var _utilsFormatTimeJs2 = _interopRequireDefault(_utilsFormatTimeJs);
            var _utilsLogJs = _dereq_('./utils/log.js');
            var _utilsLogJs2 = _interopRequireDefault(_utilsLogJs);
            var _utilsDomJs = _dereq_('./utils/dom.js');
            var Dom = _interopRequireWildcard(_utilsDomJs);
            var _utilsBrowserJs = _dereq_('./utils/browser.js');
            var browser = _interopRequireWildcard(_utilsBrowserJs);
            var _utilsUrlJs = _dereq_('./utils/url.js');
            var Url = _interopRequireWildcard(_utilsUrlJs);
            var _extendJs = _dereq_('./extend.js');
            var _extendJs2 = _interopRequireDefault(_extendJs);
            var _lodashCompatObjectMerge = _dereq_('lodash-compat/object/merge');
            var _lodashCompatObjectMerge2 = _interopRequireDefault(_lodashCompatObjectMerge);
            var _utilsCreateDeprecationProxyJs = _dereq_('./utils/create-deprecation-proxy.js');
            var _utilsCreateDeprecationProxyJs2 = _interopRequireDefault(_utilsCreateDeprecationProxyJs);
            var _xhr = _dereq_('xhr');
            var _xhr2 = _interopRequireDefault(_xhr);
            var _techTechJs = _dereq_('./tech/tech.js');
            var _techTechJs2 = _interopRequireDefault(_techTechJs);
            var _techHtml5Js = _dereq_('./tech/html5.js');
            var _techHtml5Js2 = _interopRequireDefault(_techHtml5Js);
            var _techFlashJs = _dereq_('./tech/flash.js');
            var _techFlashJs2 = _interopRequireDefault(_techFlashJs);
            if (typeof HTMLVideoElement === 'undefined') {
                _globalDocument2['default'].createElement('video');
                _globalDocument2['default'].createElement('audio');
                _globalDocument2['default'].createElement('track');
            }
            var videojs = function videojs(id, options, ready) {
                var tag = undefined;
                if (typeof id === 'string') {
                    if (id.indexOf('#') === 0) {
                        id = id.slice(1);
                    }
                    if (videojs.getPlayers()[id]) {
                        if (options) {
                            _utilsLogJs2['default'].warn('Player "' + id + '" is already initialised. Options will not be applied.');
                        }
                        if (ready) {
                            videojs.getPlayers()[id].ready(ready);
                        }
                        return videojs.getPlayers()[id];
                    } else {
                        tag = Dom.getEl(id);
                    }
                } else {
                    tag = id;
                }
                if (!tag || !tag.nodeName) {
                    throw new TypeError('The element or ID supplied is not valid. (videojs)');
                }
                return tag['player'] || _player2['default'].players[tag.playerId] || new _player2['default'](tag, options, ready);
            };
            var style = Dom.$('.vjs-styles-defaults');
            if (!style) {
                style = stylesheet.createStyleElement('vjs-styles-defaults');
                var head = Dom.$('head');
                head.insertBefore(style, head.firstChild);
                stylesheet.setTextContent(style, '\n    .video-js {\n      width: 300px;\n      height: 150px;\n    }\n\n    .vjs-fluid {\n      padding-top: 56.25%\n    }\n  ');
            }
            setup.autoSetupTimeout(1, videojs);
            videojs.VERSION = '5.6.0';
            videojs.options = _player2['default'].prototype.options_;
            videojs.getPlayers = function() {
                return _player2['default'].players;
            };
            videojs.players = _utilsCreateDeprecationProxyJs2['default'](_player2['default'].players, {
                get: 'Access to videojs.players is deprecated; use videojs.getPlayers instead',
                set: 'Modification of videojs.players is deprecated'
            });
            videojs.getComponent = _component2['default'].getComponent;
            videojs.registerComponent = function(name, comp) {
                if (_techTechJs2['default'].isTech(comp)) {
                    _utilsLogJs2['default'].warn('The ' + name + ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)');
                }
                _component2['default'].registerComponent.call(_component2['default'], name, comp);
            };
            videojs.getTech = _techTechJs2['default'].getTech;
            videojs.registerTech = _techTechJs2['default'].registerTech;
            videojs.browser = browser;
            videojs.TOUCH_ENABLED = browser.TOUCH_ENABLED;
            videojs.extend = _extendJs2['default'];
            videojs.mergeOptions = _srcJsUtilsMergeOptionsJs2['default'];
            videojs.bind = Fn.bind;
            videojs.plugin = _pluginsJs2['default'];
            videojs.addLanguage = function(code, data) {
                var _merge;
                code = ('' + code).toLowerCase();
                return _lodashCompatObjectMerge2['default'](videojs.options.languages, (_merge = {}, _merge[code] = data, _merge))[code];
            };
            videojs.log = _utilsLogJs2['default'];
            videojs.createTimeRange = videojs.createTimeRanges = _utilsTimeRangesJs.createTimeRanges;
            videojs.formatTime = _utilsFormatTimeJs2['default'];
            videojs.parseUrl = Url.parseUrl;
            videojs.isCrossOrigin = Url.isCrossOrigin;
            videojs.EventTarget = _eventTarget2['default'];
            videojs.on = Events.on;
            videojs.one = Events.one;
            videojs.off = Events.off;
            videojs.trigger = Events.trigger;
            videojs.xhr = _xhr2['default'];
            videojs.TextTrack = _tracksTextTrackJs2['default'];
            videojs.isEl = Dom.isEl;
            videojs.isTextNode = Dom.isTextNode;
            videojs.createEl = Dom.createEl;
            videojs.hasClass = Dom.hasElClass;
            videojs.addClass = Dom.addElClass;
            videojs.removeClass = Dom.removeElClass;
            videojs.toggleClass = Dom.toggleElClass;
            videojs.setAttributes = Dom.setElAttributes;
            videojs.getAttributes = Dom.getElAttributes;
            videojs.emptyEl = Dom.emptyEl;
            videojs.appendContent = Dom.appendContent;
            videojs.insertContent = Dom.insertContent;
            if (typeof define === 'function' && define['amd']) {
                define('videojs', [], function() {
                    return videojs;
                });
            } else if (typeof exports === 'object' && typeof module === 'object') {
                module['exports'] = videojs;
            }
            exports['default'] = videojs;
            module.exports = exports['default'];
        }, {
            "../../src/js/utils/merge-options.js": 137,
            "./component": 66,
            "./event-target": 98,
            "./extend.js": 99,
            "./player": 107,
            "./plugins.js": 108,
            "./setup": 112,
            "./tech/flash.js": 115,
            "./tech/html5.js": 116,
            "./tech/tech.js": 118,
            "./tracks/text-track.js": 127,
            "./utils/browser.js": 128,
            "./utils/create-deprecation-proxy.js": 130,
            "./utils/dom.js": 131,
            "./utils/events.js": 132,
            "./utils/fn.js": 133,
            "./utils/format-time.js": 134,
            "./utils/log.js": 136,
            "./utils/stylesheet.js": 138,
            "./utils/time-ranges.js": 139,
            "./utils/url.js": 141,
            "global/document": 1,
            "lodash-compat/object/merge": 40,
            "object.assign": 45,
            "xhr": 55
        }]
    }, {}, [142])(142)
});
(function(root) {
    var vttjs = root.vttjs = {};
    var cueShim = vttjs.VTTCue;
    var regionShim = vttjs.VTTRegion;
    var oldVTTCue = root.VTTCue;
    var oldVTTRegion = root.VTTRegion;
    vttjs.shim = function() {
        vttjs.VTTCue = cueShim;
        vttjs.VTTRegion = regionShim;
    };
    vttjs.restore = function() {
        vttjs.VTTCue = oldVTTCue;
        vttjs.VTTRegion = oldVTTRegion;
    };
}(this));
(function(root, vttjs) {
    var autoKeyword = "auto";
    var directionSetting = {
        "": true,
        "lr": true,
        "rl": true
    };
    var alignSetting = {
        "start": true,
        "middle": true,
        "end": true,
        "left": true,
        "right": true
    };

    function findDirectionSetting(value) {
        if (typeof value !== "string") {
            return false;
        }
        var dir = directionSetting[value.toLowerCase()];
        return dir ? value.toLowerCase() : false;
    }

    function findAlignSetting(value) {
        if (typeof value !== "string") {
            return false;
        }
        var align = alignSetting[value.toLowerCase()];
        return align ? value.toLowerCase() : false;
    }

    function extend(obj) {
        var i = 1;
        for (; i < arguments.length; i++) {
            var cobj = arguments[i];
            for (var p in cobj) {
                obj[p] = cobj[p];
            }
        }
        return obj;
    }

    function VTTCue(startTime, endTime, text) {
        var cue = this;
        var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
        var baseObj = {};
        if (isIE8) {
            cue = document.createElement('custom');
        } else {
            baseObj.enumerable = true;
        }
        cue.hasBeenReset = false;
        var _id = "";
        var _pauseOnExit = false;
        var _startTime = startTime;
        var _endTime = endTime;
        var _text = text;
        var _region = null;
        var _vertical = "";
        var _snapToLines = true;
        var _line = "auto";
        var _lineAlign = "start";
        var _position = 50;
        var _positionAlign = "middle";
        var _size = 50;
        var _align = "middle";
        Object.defineProperty(cue, "id", extend({}, baseObj, {
            get: function() {
                return _id;
            },
            set: function(value) {
                _id = "" + value;
            }
        }));
        Object.defineProperty(cue, "pauseOnExit", extend({}, baseObj, {
            get: function() {
                return _pauseOnExit;
            },
            set: function(value) {
                _pauseOnExit = !!value;
            }
        }));
        Object.defineProperty(cue, "startTime", extend({}, baseObj, {
            get: function() {
                return _startTime;
            },
            set: function(value) {
                if (typeof value !== "number") {
                    throw new TypeError("Start time must be set to a number.");
                }
                _startTime = value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "endTime", extend({}, baseObj, {
            get: function() {
                return _endTime;
            },
            set: function(value) {
                if (typeof value !== "number") {
                    throw new TypeError("End time must be set to a number.");
                }
                _endTime = value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "text", extend({}, baseObj, {
            get: function() {
                return _text;
            },
            set: function(value) {
                _text = "" + value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "region", extend({}, baseObj, {
            get: function() {
                return _region;
            },
            set: function(value) {
                _region = value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "vertical", extend({}, baseObj, {
            get: function() {
                return _vertical;
            },
            set: function(value) {
                var setting = findDirectionSetting(value);
                if (setting === false) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _vertical = setting;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "snapToLines", extend({}, baseObj, {
            get: function() {
                return _snapToLines;
            },
            set: function(value) {
                _snapToLines = !!value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "line", extend({}, baseObj, {
            get: function() {
                return _line;
            },
            set: function(value) {
                if (typeof value !== "number" && value !== autoKeyword) {
                    throw new SyntaxError("An invalid number or illegal string was specified.");
                }
                _line = value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "lineAlign", extend({}, baseObj, {
            get: function() {
                return _lineAlign;
            },
            set: function(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _lineAlign = setting;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "position", extend({}, baseObj, {
            get: function() {
                return _position;
            },
            set: function(value) {
                if (value < 0 || value > 100) {
                    throw new Error("Position must be between 0 and 100.");
                }
                _position = value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "positionAlign", extend({}, baseObj, {
            get: function() {
                return _positionAlign;
            },
            set: function(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _positionAlign = setting;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "size", extend({}, baseObj, {
            get: function() {
                return _size;
            },
            set: function(value) {
                if (value < 0 || value > 100) {
                    throw new Error("Size must be between 0 and 100.");
                }
                _size = value;
                this.hasBeenReset = true;
            }
        }));
        Object.defineProperty(cue, "align", extend({}, baseObj, {
            get: function() {
                return _align;
            },
            set: function(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _align = setting;
                this.hasBeenReset = true;
            }
        }));
        cue.displayState = undefined;
        if (isIE8) {
            return cue;
        }
    }
    VTTCue.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text);
    };
    root.VTTCue = root.VTTCue || VTTCue;
    vttjs.VTTCue = VTTCue;
}(this, (this.vttjs || {})));
(function(root, vttjs) {
    var scrollSetting = {
        "": true,
        "up": true
    };

    function findScrollSetting(value) {
        if (typeof value !== "string") {
            return false;
        }
        var scroll = scrollSetting[value.toLowerCase()];
        return scroll ? value.toLowerCase() : false;
    }

    function isValidPercentValue(value) {
        return typeof value === "number" && (value >= 0 && value <= 100);
    }

    function VTTRegion() {
        var _width = 100;
        var _lines = 3;
        var _regionAnchorX = 0;
        var _regionAnchorY = 100;
        var _viewportAnchorX = 0;
        var _viewportAnchorY = 100;
        var _scroll = "";
        Object.defineProperties(this, {
            "width": {
                enumerable: true,
                get: function() {
                    return _width;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) {
                        throw new Error("Width must be between 0 and 100.");
                    }
                    _width = value;
                }
            },
            "lines": {
                enumerable: true,
                get: function() {
                    return _lines;
                },
                set: function(value) {
                    if (typeof value !== "number") {
                        throw new TypeError("Lines must be set to a number.");
                    }
                    _lines = value;
                }
            },
            "regionAnchorY": {
                enumerable: true,
                get: function() {
                    return _regionAnchorY;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) {
                        throw new Error("RegionAnchorX must be between 0 and 100.");
                    }
                    _regionAnchorY = value;
                }
            },
            "regionAnchorX": {
                enumerable: true,
                get: function() {
                    return _regionAnchorX;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) {
                        throw new Error("RegionAnchorY must be between 0 and 100.");
                    }
                    _regionAnchorX = value;
                }
            },
            "viewportAnchorY": {
                enumerable: true,
                get: function() {
                    return _viewportAnchorY;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) {
                        throw new Error("ViewportAnchorY must be between 0 and 100.");
                    }
                    _viewportAnchorY = value;
                }
            },
            "viewportAnchorX": {
                enumerable: true,
                get: function() {
                    return _viewportAnchorX;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) {
                        throw new Error("ViewportAnchorX must be between 0 and 100.");
                    }
                    _viewportAnchorX = value;
                }
            },
            "scroll": {
                enumerable: true,
                get: function() {
                    return _scroll;
                },
                set: function(value) {
                    var setting = findScrollSetting(value);
                    if (setting === false) {
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    }
                    _scroll = setting;
                }
            }
        });
    }
    root.VTTRegion = root.VTTRegion || VTTRegion;
    vttjs.VTTRegion = VTTRegion;
}(this, (this.vttjs || {})));
(function(global) {
    var _objCreate = Object.create || (function() {
        function F() {}
        return function(o) {
            if (arguments.length !== 1) {
                throw new Error('Object.create shim only accepts one parameter.');
            }
            F.prototype = o;
            return new F();
        };
    })();

    function ParsingError(errorData, message) {
        this.name = "ParsingError";
        this.code = errorData.code;
        this.message = message || errorData.message;
    }
    ParsingError.prototype = _objCreate(Error.prototype);
    ParsingError.prototype.constructor = ParsingError;
    ParsingError.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    };

    function parseTimeStamp(input) {
        function computeSeconds(h, m, s, f) {
            return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
        }
        var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        if (!m) {
            return null;
        }
        if (m[3]) {
            return computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]);
        } else if (m[1] > 59) {
            return computeSeconds(m[1], m[2], 0, m[4]);
        } else {
            return computeSeconds(0, m[1], m[2], m[4]);
        }
    }

    function Settings() {
        this.values = _objCreate(null);
    }
    Settings.prototype = {
        set: function(k, v) {
            if (!this.get(k) && v !== "") {
                this.values[k] = v;
            }
        },
        get: function(k, dflt, defaultKey) {
            if (defaultKey) {
                return this.has(k) ? this.values[k] : dflt[defaultKey];
            }
            return this.has(k) ? this.values[k] : dflt;
        },
        has: function(k) {
            return k in this.values;
        },
        alt: function(k, v, a) {
            for (var n = 0; n < a.length; ++n) {
                if (v === a[n]) {
                    this.set(k, v);
                    break;
                }
            }
        },
        integer: function(k, v) {
            if (/^-?\d+$/.test(v)) {
                this.set(k, parseInt(v, 10));
            }
        },
        percent: function(k, v) {
            var m;
            if ((m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/))) {
                v = parseFloat(v);
                if (v >= 0 && v <= 100) {
                    this.set(k, v);
                    return true;
                }
            }
            return false;
        }
    };

    function parseOptions(input, callback, keyValueDelim, groupDelim) {
        var groups = groupDelim ? input.split(groupDelim) : [input];
        for (var i in groups) {
            if (typeof groups[i] !== "string") {
                continue;
            }
            var kv = groups[i].split(keyValueDelim);
            if (kv.length !== 2) {
                continue;
            }
            var k = kv[0];
            var v = kv[1];
            callback(k, v);
        }
    }

    function parseCue(input, cue, regionList) {
        var oInput = input;

        function consumeTimeStamp() {
            var ts = parseTimeStamp(input);
            if (ts === null) {
                throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed timestamp: " + oInput);
            }
            input = input.replace(/^[^\sa-zA-Z-]+/, "");
            return ts;
        }

        function consumeCueSettings(input, cue) {
            var settings = new Settings();
            parseOptions(input, function(k, v) {
                switch (k) {
                    case "region":
                        for (var i = regionList.length - 1; i >= 0; i--) {
                            if (regionList[i].id === v) {
                                settings.set(k, regionList[i].region);
                                break;
                            }
                        }
                        break;
                    case "vertical":
                        settings.alt(k, v, ["rl", "lr"]);
                        break;
                    case "line":
                        var vals = v.split(","),
                            vals0 = vals[0];
                        settings.integer(k, vals0);
                        settings.percent(k, vals0) ? settings.set("snapToLines", false) : null;
                        settings.alt(k, vals0, ["auto"]);
                        if (vals.length === 2) {
                            settings.alt("lineAlign", vals[1], ["start", "middle", "end"]);
                        }
                        break;
                    case "position":
                        vals = v.split(",");
                        settings.percent(k, vals[0]);
                        if (vals.length === 2) {
                            settings.alt("positionAlign", vals[1], ["start", "middle", "end"]);
                        }
                        break;
                    case "size":
                        settings.percent(k, v);
                        break;
                    case "align":
                        settings.alt(k, v, ["start", "middle", "end", "left", "right"]);
                        break;
                }
            }, /:/, /\s/);
            cue.region = settings.get("region", null);
            cue.vertical = settings.get("vertical", "");
            cue.line = settings.get("line", "auto");
            cue.lineAlign = settings.get("lineAlign", "start");
            cue.snapToLines = settings.get("snapToLines", true);
            cue.size = settings.get("size", 100);
            cue.align = settings.get("align", "middle");
            cue.position = settings.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, cue.align);
            cue.positionAlign = settings.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, cue.align);
        }

        function skipWhitespace() {
            input = input.replace(/^\s+/, "");
        }
        skipWhitespace();
        cue.startTime = consumeTimeStamp();
        skipWhitespace();
        if (input.substr(0, 3) !== "-->") {
            throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + oInput);
        }
        input = input.substr(3);
        skipWhitespace();
        cue.endTime = consumeTimeStamp();
        skipWhitespace();
        consumeCueSettings(input, cue);
    }
    var ESCAPE = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&lrm;": "\u200e",
        "&rlm;": "\u200f",
        "&nbsp;": "\u00a0"
    };
    var TAG_NAME = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    };
    var TAG_ANNOTATION = {
        v: "title",
        lang: "lang"
    };
    var NEEDS_PARENT = {
        rt: "ruby"
    };

    function parseContent(window, input) {
        function nextToken() {
            if (!input) {
                return null;
            }

            function consume(result) {
                input = input.substr(result.length);
                return result;
            }
            var m = input.match(/^([^<]*)(<[^>]+>?)?/);
            return consume(m[1] ? m[1] : m[2]);
        }

        function unescape1(e) {
            return ESCAPE[e];
        }

        function unescape(s) {
            while ((m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/))) {
                s = s.replace(m[0], unescape1);
            }
            return s;
        }

        function shouldAdd(current, element) {
            return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
        }

        function createElement(type, annotation) {
            var tagName = TAG_NAME[type];
            if (!tagName) {
                return null;
            }
            var element = window.document.createElement(tagName);
            element.localName = tagName;
            var name = TAG_ANNOTATION[type];
            if (name && annotation) {
                element[name] = annotation.trim();
            }
            return element;
        }
        var rootDiv = window.document.createElement("div"),
            current = rootDiv,
            t, tagStack = [];
        while ((t = nextToken()) !== null) {
            if (t[0] === '<') {
                if (t[1] === "/") {
                    if (tagStack.length && tagStack[tagStack.length - 1] === t.substr(2).replace(">", "")) {
                        tagStack.pop();
                        current = current.parentNode;
                    }
                    continue;
                }
                var ts = parseTimeStamp(t.substr(1, t.length - 2));
                var node;
                if (ts) {
                    node = window.document.createProcessingInstruction("timestamp", ts);
                    current.appendChild(node);
                    continue;
                }
                var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!m) {
                    continue;
                }
                node = createElement(m[1], m[3]);
                if (!node) {
                    continue;
                }
                if (!shouldAdd(current, node)) {
                    continue;
                }
                if (m[2]) {
                    node.className = m[2].substr(1).replace('.', ' ');
                }
                tagStack.push(m[1]);
                current.appendChild(node);
                current = node;
                continue;
            }
            current.appendChild(window.document.createTextNode(unescape(t)));
        }
        return rootDiv;
    }
    var strongRTLChars = [0x05BE, 0x05C0, 0x05C3, 0x05C6, 0x05D0, 0x05D1, 0x05D2, 0x05D3, 0x05D4, 0x05D5, 0x05D6, 0x05D7, 0x05D8, 0x05D9, 0x05DA, 0x05DB, 0x05DC, 0x05DD, 0x05DE, 0x05DF, 0x05E0, 0x05E1, 0x05E2, 0x05E3, 0x05E4, 0x05E5, 0x05E6, 0x05E7, 0x05E8, 0x05E9, 0x05EA, 0x05F0, 0x05F1, 0x05F2, 0x05F3, 0x05F4, 0x0608, 0x060B, 0x060D, 0x061B, 0x061E, 0x061F, 0x0620, 0x0621, 0x0622, 0x0623, 0x0624, 0x0625, 0x0626, 0x0627, 0x0628, 0x0629, 0x062A, 0x062B, 0x062C, 0x062D, 0x062E, 0x062F, 0x0630, 0x0631, 0x0632, 0x0633, 0x0634, 0x0635, 0x0636, 0x0637, 0x0638, 0x0639, 0x063A, 0x063B, 0x063C, 0x063D, 0x063E, 0x063F, 0x0640, 0x0641, 0x0642, 0x0643, 0x0644, 0x0645, 0x0646, 0x0647, 0x0648, 0x0649, 0x064A, 0x066D, 0x066E, 0x066F, 0x0671, 0x0672, 0x0673, 0x0674, 0x0675, 0x0676, 0x0677, 0x0678, 0x0679, 0x067A, 0x067B, 0x067C, 0x067D, 0x067E, 0x067F, 0x0680, 0x0681, 0x0682, 0x0683, 0x0684, 0x0685, 0x0686, 0x0687, 0x0688, 0x0689, 0x068A, 0x068B, 0x068C, 0x068D, 0x068E, 0x068F, 0x0690, 0x0691, 0x0692, 0x0693, 0x0694, 0x0695, 0x0696, 0x0697, 0x0698, 0x0699, 0x069A, 0x069B, 0x069C, 0x069D, 0x069E, 0x069F, 0x06A0, 0x06A1, 0x06A2, 0x06A3, 0x06A4, 0x06A5, 0x06A6, 0x06A7, 0x06A8, 0x06A9, 0x06AA, 0x06AB, 0x06AC, 0x06AD, 0x06AE, 0x06AF, 0x06B0, 0x06B1, 0x06B2, 0x06B3, 0x06B4, 0x06B5, 0x06B6, 0x06B7, 0x06B8, 0x06B9, 0x06BA, 0x06BB, 0x06BC, 0x06BD, 0x06BE, 0x06BF, 0x06C0, 0x06C1, 0x06C2, 0x06C3, 0x06C4, 0x06C5, 0x06C6, 0x06C7, 0x06C8, 0x06C9, 0x06CA, 0x06CB, 0x06CC, 0x06CD, 0x06CE, 0x06CF, 0x06D0, 0x06D1, 0x06D2, 0x06D3, 0x06D4, 0x06D5, 0x06E5, 0x06E6, 0x06EE, 0x06EF, 0x06FA, 0x06FB, 0x06FC, 0x06FD, 0x06FE, 0x06FF, 0x0700, 0x0701, 0x0702, 0x0703, 0x0704, 0x0705, 0x0706, 0x0707, 0x0708, 0x0709, 0x070A, 0x070B, 0x070C, 0x070D, 0x070F, 0x0710, 0x0712, 0x0713, 0x0714, 0x0715, 0x0716, 0x0717, 0x0718, 0x0719, 0x071A, 0x071B, 0x071C, 0x071D, 0x071E, 0x071F, 0x0720, 0x0721, 0x0722, 0x0723, 0x0724, 0x0725, 0x0726, 0x0727, 0x0728, 0x0729, 0x072A, 0x072B, 0x072C, 0x072D, 0x072E, 0x072F, 0x074D, 0x074E, 0x074F, 0x0750, 0x0751, 0x0752, 0x0753, 0x0754, 0x0755, 0x0756, 0x0757, 0x0758, 0x0759, 0x075A, 0x075B, 0x075C, 0x075D, 0x075E, 0x075F, 0x0760, 0x0761, 0x0762, 0x0763, 0x0764, 0x0765, 0x0766, 0x0767, 0x0768, 0x0769, 0x076A, 0x076B, 0x076C, 0x076D, 0x076E, 0x076F, 0x0770, 0x0771, 0x0772, 0x0773, 0x0774, 0x0775, 0x0776, 0x0777, 0x0778, 0x0779, 0x077A, 0x077B, 0x077C, 0x077D, 0x077E, 0x077F, 0x0780, 0x0781, 0x0782, 0x0783, 0x0784, 0x0785, 0x0786, 0x0787, 0x0788, 0x0789, 0x078A, 0x078B, 0x078C, 0x078D, 0x078E, 0x078F, 0x0790, 0x0791, 0x0792, 0x0793, 0x0794, 0x0795, 0x0796, 0x0797, 0x0798, 0x0799, 0x079A, 0x079B, 0x079C, 0x079D, 0x079E, 0x079F, 0x07A0, 0x07A1, 0x07A2, 0x07A3, 0x07A4, 0x07A5, 0x07B1, 0x07C0, 0x07C1, 0x07C2, 0x07C3, 0x07C4, 0x07C5, 0x07C6, 0x07C7, 0x07C8, 0x07C9, 0x07CA, 0x07CB, 0x07CC, 0x07CD, 0x07CE, 0x07CF, 0x07D0, 0x07D1, 0x07D2, 0x07D3, 0x07D4, 0x07D5, 0x07D6, 0x07D7, 0x07D8, 0x07D9, 0x07DA, 0x07DB, 0x07DC, 0x07DD, 0x07DE, 0x07DF, 0x07E0, 0x07E1, 0x07E2, 0x07E3, 0x07E4, 0x07E5, 0x07E6, 0x07E7, 0x07E8, 0x07E9, 0x07EA, 0x07F4, 0x07F5, 0x07FA, 0x0800, 0x0801, 0x0802, 0x0803, 0x0804, 0x0805, 0x0806, 0x0807, 0x0808, 0x0809, 0x080A, 0x080B, 0x080C, 0x080D, 0x080E, 0x080F, 0x0810, 0x0811, 0x0812, 0x0813, 0x0814, 0x0815, 0x081A, 0x0824, 0x0828, 0x0830, 0x0831, 0x0832, 0x0833, 0x0834, 0x0835, 0x0836, 0x0837, 0x0838, 0x0839, 0x083A, 0x083B, 0x083C, 0x083D, 0x083E, 0x0840, 0x0841, 0x0842, 0x0843, 0x0844, 0x0845, 0x0846, 0x0847, 0x0848, 0x0849, 0x084A, 0x084B, 0x084C, 0x084D, 0x084E, 0x084F, 0x0850, 0x0851, 0x0852, 0x0853, 0x0854, 0x0855, 0x0856, 0x0857, 0x0858, 0x085E, 0x08A0, 0x08A2, 0x08A3, 0x08A4, 0x08A5, 0x08A6, 0x08A7, 0x08A8, 0x08A9, 0x08AA, 0x08AB, 0x08AC, 0x200F, 0xFB1D, 0xFB1F, 0xFB20, 0xFB21, 0xFB22, 0xFB23, 0xFB24, 0xFB25, 0xFB26, 0xFB27, 0xFB28, 0xFB2A, 0xFB2B, 0xFB2C, 0xFB2D, 0xFB2E, 0xFB2F, 0xFB30, 0xFB31, 0xFB32, 0xFB33, 0xFB34, 0xFB35, 0xFB36, 0xFB38, 0xFB39, 0xFB3A, 0xFB3B, 0xFB3C, 0xFB3E, 0xFB40, 0xFB41, 0xFB43, 0xFB44, 0xFB46, 0xFB47, 0xFB48, 0xFB49, 0xFB4A, 0xFB4B, 0xFB4C, 0xFB4D, 0xFB4E, 0xFB4F, 0xFB50, 0xFB51, 0xFB52, 0xFB53, 0xFB54, 0xFB55, 0xFB56, 0xFB57, 0xFB58, 0xFB59, 0xFB5A, 0xFB5B, 0xFB5C, 0xFB5D, 0xFB5E, 0xFB5F, 0xFB60, 0xFB61, 0xFB62, 0xFB63, 0xFB64, 0xFB65, 0xFB66, 0xFB67, 0xFB68, 0xFB69, 0xFB6A, 0xFB6B, 0xFB6C, 0xFB6D, 0xFB6E, 0xFB6F, 0xFB70, 0xFB71, 0xFB72, 0xFB73, 0xFB74, 0xFB75, 0xFB76, 0xFB77, 0xFB78, 0xFB79, 0xFB7A, 0xFB7B, 0xFB7C, 0xFB7D, 0xFB7E, 0xFB7F, 0xFB80, 0xFB81, 0xFB82, 0xFB83, 0xFB84, 0xFB85, 0xFB86, 0xFB87, 0xFB88, 0xFB89, 0xFB8A, 0xFB8B, 0xFB8C, 0xFB8D, 0xFB8E, 0xFB8F, 0xFB90, 0xFB91, 0xFB92, 0xFB93, 0xFB94, 0xFB95, 0xFB96, 0xFB97, 0xFB98, 0xFB99, 0xFB9A, 0xFB9B, 0xFB9C, 0xFB9D, 0xFB9E, 0xFB9F, 0xFBA0, 0xFBA1, 0xFBA2, 0xFBA3, 0xFBA4, 0xFBA5, 0xFBA6, 0xFBA7, 0xFBA8, 0xFBA9, 0xFBAA, 0xFBAB, 0xFBAC, 0xFBAD, 0xFBAE, 0xFBAF, 0xFBB0, 0xFBB1, 0xFBB2, 0xFBB3, 0xFBB4, 0xFBB5, 0xFBB6, 0xFBB7, 0xFBB8, 0xFBB9, 0xFBBA, 0xFBBB, 0xFBBC, 0xFBBD, 0xFBBE, 0xFBBF, 0xFBC0, 0xFBC1, 0xFBD3, 0xFBD4, 0xFBD5, 0xFBD6, 0xFBD7, 0xFBD8, 0xFBD9, 0xFBDA, 0xFBDB, 0xFBDC, 0xFBDD, 0xFBDE, 0xFBDF, 0xFBE0, 0xFBE1, 0xFBE2, 0xFBE3, 0xFBE4, 0xFBE5, 0xFBE6, 0xFBE7, 0xFBE8, 0xFBE9, 0xFBEA, 0xFBEB, 0xFBEC, 0xFBED, 0xFBEE, 0xFBEF, 0xFBF0, 0xFBF1, 0xFBF2, 0xFBF3, 0xFBF4, 0xFBF5, 0xFBF6, 0xFBF7, 0xFBF8, 0xFBF9, 0xFBFA, 0xFBFB, 0xFBFC, 0xFBFD, 0xFBFE, 0xFBFF, 0xFC00, 0xFC01, 0xFC02, 0xFC03, 0xFC04, 0xFC05, 0xFC06, 0xFC07, 0xFC08, 0xFC09, 0xFC0A, 0xFC0B, 0xFC0C, 0xFC0D, 0xFC0E, 0xFC0F, 0xFC10, 0xFC11, 0xFC12, 0xFC13, 0xFC14, 0xFC15, 0xFC16, 0xFC17, 0xFC18, 0xFC19, 0xFC1A, 0xFC1B, 0xFC1C, 0xFC1D, 0xFC1E, 0xFC1F, 0xFC20, 0xFC21, 0xFC22, 0xFC23, 0xFC24, 0xFC25, 0xFC26, 0xFC27, 0xFC28, 0xFC29, 0xFC2A, 0xFC2B, 0xFC2C, 0xFC2D, 0xFC2E, 0xFC2F, 0xFC30, 0xFC31, 0xFC32, 0xFC33, 0xFC34, 0xFC35, 0xFC36, 0xFC37, 0xFC38, 0xFC39, 0xFC3A, 0xFC3B, 0xFC3C, 0xFC3D, 0xFC3E, 0xFC3F, 0xFC40, 0xFC41, 0xFC42, 0xFC43, 0xFC44, 0xFC45, 0xFC46, 0xFC47, 0xFC48, 0xFC49, 0xFC4A, 0xFC4B, 0xFC4C, 0xFC4D, 0xFC4E, 0xFC4F, 0xFC50, 0xFC51, 0xFC52, 0xFC53, 0xFC54, 0xFC55, 0xFC56, 0xFC57, 0xFC58, 0xFC59, 0xFC5A, 0xFC5B, 0xFC5C, 0xFC5D, 0xFC5E, 0xFC5F, 0xFC60, 0xFC61, 0xFC62, 0xFC63, 0xFC64, 0xFC65, 0xFC66, 0xFC67, 0xFC68, 0xFC69, 0xFC6A, 0xFC6B, 0xFC6C, 0xFC6D, 0xFC6E, 0xFC6F, 0xFC70, 0xFC71, 0xFC72, 0xFC73, 0xFC74, 0xFC75, 0xFC76, 0xFC77, 0xFC78, 0xFC79, 0xFC7A, 0xFC7B, 0xFC7C, 0xFC7D, 0xFC7E, 0xFC7F, 0xFC80, 0xFC81, 0xFC82, 0xFC83, 0xFC84, 0xFC85, 0xFC86, 0xFC87, 0xFC88, 0xFC89, 0xFC8A, 0xFC8B, 0xFC8C, 0xFC8D, 0xFC8E, 0xFC8F, 0xFC90, 0xFC91, 0xFC92, 0xFC93, 0xFC94, 0xFC95, 0xFC96, 0xFC97, 0xFC98, 0xFC99, 0xFC9A, 0xFC9B, 0xFC9C, 0xFC9D, 0xFC9E, 0xFC9F, 0xFCA0, 0xFCA1, 0xFCA2, 0xFCA3, 0xFCA4, 0xFCA5, 0xFCA6, 0xFCA7, 0xFCA8, 0xFCA9, 0xFCAA, 0xFCAB, 0xFCAC, 0xFCAD, 0xFCAE, 0xFCAF, 0xFCB0, 0xFCB1, 0xFCB2, 0xFCB3, 0xFCB4, 0xFCB5, 0xFCB6, 0xFCB7, 0xFCB8, 0xFCB9, 0xFCBA, 0xFCBB, 0xFCBC, 0xFCBD, 0xFCBE, 0xFCBF, 0xFCC0, 0xFCC1, 0xFCC2, 0xFCC3, 0xFCC4, 0xFCC5, 0xFCC6, 0xFCC7, 0xFCC8, 0xFCC9, 0xFCCA, 0xFCCB, 0xFCCC, 0xFCCD, 0xFCCE, 0xFCCF, 0xFCD0, 0xFCD1, 0xFCD2, 0xFCD3, 0xFCD4, 0xFCD5, 0xFCD6, 0xFCD7, 0xFCD8, 0xFCD9, 0xFCDA, 0xFCDB, 0xFCDC, 0xFCDD, 0xFCDE, 0xFCDF, 0xFCE0, 0xFCE1, 0xFCE2, 0xFCE3, 0xFCE4, 0xFCE5, 0xFCE6, 0xFCE7, 0xFCE8, 0xFCE9, 0xFCEA, 0xFCEB, 0xFCEC, 0xFCED, 0xFCEE, 0xFCEF, 0xFCF0, 0xFCF1, 0xFCF2, 0xFCF3, 0xFCF4, 0xFCF5, 0xFCF6, 0xFCF7, 0xFCF8, 0xFCF9, 0xFCFA, 0xFCFB, 0xFCFC, 0xFCFD, 0xFCFE, 0xFCFF, 0xFD00, 0xFD01, 0xFD02, 0xFD03, 0xFD04, 0xFD05, 0xFD06, 0xFD07, 0xFD08, 0xFD09, 0xFD0A, 0xFD0B, 0xFD0C, 0xFD0D, 0xFD0E, 0xFD0F, 0xFD10, 0xFD11, 0xFD12, 0xFD13, 0xFD14, 0xFD15, 0xFD16, 0xFD17, 0xFD18, 0xFD19, 0xFD1A, 0xFD1B, 0xFD1C, 0xFD1D, 0xFD1E, 0xFD1F, 0xFD20, 0xFD21, 0xFD22, 0xFD23, 0xFD24, 0xFD25, 0xFD26, 0xFD27, 0xFD28, 0xFD29, 0xFD2A, 0xFD2B, 0xFD2C, 0xFD2D, 0xFD2E, 0xFD2F, 0xFD30, 0xFD31, 0xFD32, 0xFD33, 0xFD34, 0xFD35, 0xFD36, 0xFD37, 0xFD38, 0xFD39, 0xFD3A, 0xFD3B, 0xFD3C, 0xFD3D, 0xFD50, 0xFD51, 0xFD52, 0xFD53, 0xFD54, 0xFD55, 0xFD56, 0xFD57, 0xFD58, 0xFD59, 0xFD5A, 0xFD5B, 0xFD5C, 0xFD5D, 0xFD5E, 0xFD5F, 0xFD60, 0xFD61, 0xFD62, 0xFD63, 0xFD64, 0xFD65, 0xFD66, 0xFD67, 0xFD68, 0xFD69, 0xFD6A, 0xFD6B, 0xFD6C, 0xFD6D, 0xFD6E, 0xFD6F, 0xFD70, 0xFD71, 0xFD72, 0xFD73, 0xFD74, 0xFD75, 0xFD76, 0xFD77, 0xFD78, 0xFD79, 0xFD7A, 0xFD7B, 0xFD7C, 0xFD7D, 0xFD7E, 0xFD7F, 0xFD80, 0xFD81, 0xFD82, 0xFD83, 0xFD84, 0xFD85, 0xFD86, 0xFD87, 0xFD88, 0xFD89, 0xFD8A, 0xFD8B, 0xFD8C, 0xFD8D, 0xFD8E, 0xFD8F, 0xFD92, 0xFD93, 0xFD94, 0xFD95, 0xFD96, 0xFD97, 0xFD98, 0xFD99, 0xFD9A, 0xFD9B, 0xFD9C, 0xFD9D, 0xFD9E, 0xFD9F, 0xFDA0, 0xFDA1, 0xFDA2, 0xFDA3, 0xFDA4, 0xFDA5, 0xFDA6, 0xFDA7, 0xFDA8, 0xFDA9, 0xFDAA, 0xFDAB, 0xFDAC, 0xFDAD, 0xFDAE, 0xFDAF, 0xFDB0, 0xFDB1, 0xFDB2, 0xFDB3, 0xFDB4, 0xFDB5, 0xFDB6, 0xFDB7, 0xFDB8, 0xFDB9, 0xFDBA, 0xFDBB, 0xFDBC, 0xFDBD, 0xFDBE, 0xFDBF, 0xFDC0, 0xFDC1, 0xFDC2, 0xFDC3, 0xFDC4, 0xFDC5, 0xFDC6, 0xFDC7, 0xFDF0, 0xFDF1, 0xFDF2, 0xFDF3, 0xFDF4, 0xFDF5, 0xFDF6, 0xFDF7, 0xFDF8, 0xFDF9, 0xFDFA, 0xFDFB, 0xFDFC, 0xFE70, 0xFE71, 0xFE72, 0xFE73, 0xFE74, 0xFE76, 0xFE77, 0xFE78, 0xFE79, 0xFE7A, 0xFE7B, 0xFE7C, 0xFE7D, 0xFE7E, 0xFE7F, 0xFE80, 0xFE81, 0xFE82, 0xFE83, 0xFE84, 0xFE85, 0xFE86, 0xFE87, 0xFE88, 0xFE89, 0xFE8A, 0xFE8B, 0xFE8C, 0xFE8D, 0xFE8E, 0xFE8F, 0xFE90, 0xFE91, 0xFE92, 0xFE93, 0xFE94, 0xFE95, 0xFE96, 0xFE97, 0xFE98, 0xFE99, 0xFE9A, 0xFE9B, 0xFE9C, 0xFE9D, 0xFE9E, 0xFE9F, 0xFEA0, 0xFEA1, 0xFEA2, 0xFEA3, 0xFEA4, 0xFEA5, 0xFEA6, 0xFEA7, 0xFEA8, 0xFEA9, 0xFEAA, 0xFEAB, 0xFEAC, 0xFEAD, 0xFEAE, 0xFEAF, 0xFEB0, 0xFEB1, 0xFEB2, 0xFEB3, 0xFEB4, 0xFEB5, 0xFEB6, 0xFEB7, 0xFEB8, 0xFEB9, 0xFEBA, 0xFEBB, 0xFEBC, 0xFEBD, 0xFEBE, 0xFEBF, 0xFEC0, 0xFEC1, 0xFEC2, 0xFEC3, 0xFEC4, 0xFEC5, 0xFEC6, 0xFEC7, 0xFEC8, 0xFEC9, 0xFECA, 0xFECB, 0xFECC, 0xFECD, 0xFECE, 0xFECF, 0xFED0, 0xFED1, 0xFED2, 0xFED3, 0xFED4, 0xFED5, 0xFED6, 0xFED7, 0xFED8, 0xFED9, 0xFEDA, 0xFEDB, 0xFEDC, 0xFEDD, 0xFEDE, 0xFEDF, 0xFEE0, 0xFEE1, 0xFEE2, 0xFEE3, 0xFEE4, 0xFEE5, 0xFEE6, 0xFEE7, 0xFEE8, 0xFEE9, 0xFEEA, 0xFEEB, 0xFEEC, 0xFEED, 0xFEEE, 0xFEEF, 0xFEF0, 0xFEF1, 0xFEF2, 0xFEF3, 0xFEF4, 0xFEF5, 0xFEF6, 0xFEF7, 0xFEF8, 0xFEF9, 0xFEFA, 0xFEFB, 0xFEFC, 0x10800, 0x10801, 0x10802, 0x10803, 0x10804, 0x10805, 0x10808, 0x1080A, 0x1080B, 0x1080C, 0x1080D, 0x1080E, 0x1080F, 0x10810, 0x10811, 0x10812, 0x10813, 0x10814, 0x10815, 0x10816, 0x10817, 0x10818, 0x10819, 0x1081A, 0x1081B, 0x1081C, 0x1081D, 0x1081E, 0x1081F, 0x10820, 0x10821, 0x10822, 0x10823, 0x10824, 0x10825, 0x10826, 0x10827, 0x10828, 0x10829, 0x1082A, 0x1082B, 0x1082C, 0x1082D, 0x1082E, 0x1082F, 0x10830, 0x10831, 0x10832, 0x10833, 0x10834, 0x10835, 0x10837, 0x10838, 0x1083C, 0x1083F, 0x10840, 0x10841, 0x10842, 0x10843, 0x10844, 0x10845, 0x10846, 0x10847, 0x10848, 0x10849, 0x1084A, 0x1084B, 0x1084C, 0x1084D, 0x1084E, 0x1084F, 0x10850, 0x10851, 0x10852, 0x10853, 0x10854, 0x10855, 0x10857, 0x10858, 0x10859, 0x1085A, 0x1085B, 0x1085C, 0x1085D, 0x1085E, 0x1085F, 0x10900, 0x10901, 0x10902, 0x10903, 0x10904, 0x10905, 0x10906, 0x10907, 0x10908, 0x10909, 0x1090A, 0x1090B, 0x1090C, 0x1090D, 0x1090E, 0x1090F, 0x10910, 0x10911, 0x10912, 0x10913, 0x10914, 0x10915, 0x10916, 0x10917, 0x10918, 0x10919, 0x1091A, 0x1091B, 0x10920, 0x10921, 0x10922, 0x10923, 0x10924, 0x10925, 0x10926, 0x10927, 0x10928, 0x10929, 0x1092A, 0x1092B, 0x1092C, 0x1092D, 0x1092E, 0x1092F, 0x10930, 0x10931, 0x10932, 0x10933, 0x10934, 0x10935, 0x10936, 0x10937, 0x10938, 0x10939, 0x1093F, 0x10980, 0x10981, 0x10982, 0x10983, 0x10984, 0x10985, 0x10986, 0x10987, 0x10988, 0x10989, 0x1098A, 0x1098B, 0x1098C, 0x1098D, 0x1098E, 0x1098F, 0x10990, 0x10991, 0x10992, 0x10993, 0x10994, 0x10995, 0x10996, 0x10997, 0x10998, 0x10999, 0x1099A, 0x1099B, 0x1099C, 0x1099D, 0x1099E, 0x1099F, 0x109A0, 0x109A1, 0x109A2, 0x109A3, 0x109A4, 0x109A5, 0x109A6, 0x109A7, 0x109A8, 0x109A9, 0x109AA, 0x109AB, 0x109AC, 0x109AD, 0x109AE, 0x109AF, 0x109B0, 0x109B1, 0x109B2, 0x109B3, 0x109B4, 0x109B5, 0x109B6, 0x109B7, 0x109BE, 0x109BF, 0x10A00, 0x10A10, 0x10A11, 0x10A12, 0x10A13, 0x10A15, 0x10A16, 0x10A17, 0x10A19, 0x10A1A, 0x10A1B, 0x10A1C, 0x10A1D, 0x10A1E, 0x10A1F, 0x10A20, 0x10A21, 0x10A22, 0x10A23, 0x10A24, 0x10A25, 0x10A26, 0x10A27, 0x10A28, 0x10A29, 0x10A2A, 0x10A2B, 0x10A2C, 0x10A2D, 0x10A2E, 0x10A2F, 0x10A30, 0x10A31, 0x10A32, 0x10A33, 0x10A40, 0x10A41, 0x10A42, 0x10A43, 0x10A44, 0x10A45, 0x10A46, 0x10A47, 0x10A50, 0x10A51, 0x10A52, 0x10A53, 0x10A54, 0x10A55, 0x10A56, 0x10A57, 0x10A58, 0x10A60, 0x10A61, 0x10A62, 0x10A63, 0x10A64, 0x10A65, 0x10A66, 0x10A67, 0x10A68, 0x10A69, 0x10A6A, 0x10A6B, 0x10A6C, 0x10A6D, 0x10A6E, 0x10A6F, 0x10A70, 0x10A71, 0x10A72, 0x10A73, 0x10A74, 0x10A75, 0x10A76, 0x10A77, 0x10A78, 0x10A79, 0x10A7A, 0x10A7B, 0x10A7C, 0x10A7D, 0x10A7E, 0x10A7F, 0x10B00, 0x10B01, 0x10B02, 0x10B03, 0x10B04, 0x10B05, 0x10B06, 0x10B07, 0x10B08, 0x10B09, 0x10B0A, 0x10B0B, 0x10B0C, 0x10B0D, 0x10B0E, 0x10B0F, 0x10B10, 0x10B11, 0x10B12, 0x10B13, 0x10B14, 0x10B15, 0x10B16, 0x10B17, 0x10B18, 0x10B19, 0x10B1A, 0x10B1B, 0x10B1C, 0x10B1D, 0x10B1E, 0x10B1F, 0x10B20, 0x10B21, 0x10B22, 0x10B23, 0x10B24, 0x10B25, 0x10B26, 0x10B27, 0x10B28, 0x10B29, 0x10B2A, 0x10B2B, 0x10B2C, 0x10B2D, 0x10B2E, 0x10B2F, 0x10B30, 0x10B31, 0x10B32, 0x10B33, 0x10B34, 0x10B35, 0x10B40, 0x10B41, 0x10B42, 0x10B43, 0x10B44, 0x10B45, 0x10B46, 0x10B47, 0x10B48, 0x10B49, 0x10B4A, 0x10B4B, 0x10B4C, 0x10B4D, 0x10B4E, 0x10B4F, 0x10B50, 0x10B51, 0x10B52, 0x10B53, 0x10B54, 0x10B55, 0x10B58, 0x10B59, 0x10B5A, 0x10B5B, 0x10B5C, 0x10B5D, 0x10B5E, 0x10B5F, 0x10B60, 0x10B61, 0x10B62, 0x10B63, 0x10B64, 0x10B65, 0x10B66, 0x10B67, 0x10B68, 0x10B69, 0x10B6A, 0x10B6B, 0x10B6C, 0x10B6D, 0x10B6E, 0x10B6F, 0x10B70, 0x10B71, 0x10B72, 0x10B78, 0x10B79, 0x10B7A, 0x10B7B, 0x10B7C, 0x10B7D, 0x10B7E, 0x10B7F, 0x10C00, 0x10C01, 0x10C02, 0x10C03, 0x10C04, 0x10C05, 0x10C06, 0x10C07, 0x10C08, 0x10C09, 0x10C0A, 0x10C0B, 0x10C0C, 0x10C0D, 0x10C0E, 0x10C0F, 0x10C10, 0x10C11, 0x10C12, 0x10C13, 0x10C14, 0x10C15, 0x10C16, 0x10C17, 0x10C18, 0x10C19, 0x10C1A, 0x10C1B, 0x10C1C, 0x10C1D, 0x10C1E, 0x10C1F, 0x10C20, 0x10C21, 0x10C22, 0x10C23, 0x10C24, 0x10C25, 0x10C26, 0x10C27, 0x10C28, 0x10C29, 0x10C2A, 0x10C2B, 0x10C2C, 0x10C2D, 0x10C2E, 0x10C2F, 0x10C30, 0x10C31, 0x10C32, 0x10C33, 0x10C34, 0x10C35, 0x10C36, 0x10C37, 0x10C38, 0x10C39, 0x10C3A, 0x10C3B, 0x10C3C, 0x10C3D, 0x10C3E, 0x10C3F, 0x10C40, 0x10C41, 0x10C42, 0x10C43, 0x10C44, 0x10C45, 0x10C46, 0x10C47, 0x10C48, 0x1EE00, 0x1EE01, 0x1EE02, 0x1EE03, 0x1EE05, 0x1EE06, 0x1EE07, 0x1EE08, 0x1EE09, 0x1EE0A, 0x1EE0B, 0x1EE0C, 0x1EE0D, 0x1EE0E, 0x1EE0F, 0x1EE10, 0x1EE11, 0x1EE12, 0x1EE13, 0x1EE14, 0x1EE15, 0x1EE16, 0x1EE17, 0x1EE18, 0x1EE19, 0x1EE1A, 0x1EE1B, 0x1EE1C, 0x1EE1D, 0x1EE1E, 0x1EE1F, 0x1EE21, 0x1EE22, 0x1EE24, 0x1EE27, 0x1EE29, 0x1EE2A, 0x1EE2B, 0x1EE2C, 0x1EE2D, 0x1EE2E, 0x1EE2F, 0x1EE30, 0x1EE31, 0x1EE32, 0x1EE34, 0x1EE35, 0x1EE36, 0x1EE37, 0x1EE39, 0x1EE3B, 0x1EE42, 0x1EE47, 0x1EE49, 0x1EE4B, 0x1EE4D, 0x1EE4E, 0x1EE4F, 0x1EE51, 0x1EE52, 0x1EE54, 0x1EE57, 0x1EE59, 0x1EE5B, 0x1EE5D, 0x1EE5F, 0x1EE61, 0x1EE62, 0x1EE64, 0x1EE67, 0x1EE68, 0x1EE69, 0x1EE6A, 0x1EE6C, 0x1EE6D, 0x1EE6E, 0x1EE6F, 0x1EE70, 0x1EE71, 0x1EE72, 0x1EE74, 0x1EE75, 0x1EE76, 0x1EE77, 0x1EE79, 0x1EE7A, 0x1EE7B, 0x1EE7C, 0x1EE7E, 0x1EE80, 0x1EE81, 0x1EE82, 0x1EE83, 0x1EE84, 0x1EE85, 0x1EE86, 0x1EE87, 0x1EE88, 0x1EE89, 0x1EE8B, 0x1EE8C, 0x1EE8D, 0x1EE8E, 0x1EE8F, 0x1EE90, 0x1EE91, 0x1EE92, 0x1EE93, 0x1EE94, 0x1EE95, 0x1EE96, 0x1EE97, 0x1EE98, 0x1EE99, 0x1EE9A, 0x1EE9B, 0x1EEA1, 0x1EEA2, 0x1EEA3, 0x1EEA5, 0x1EEA6, 0x1EEA7, 0x1EEA8, 0x1EEA9, 0x1EEAB, 0x1EEAC, 0x1EEAD, 0x1EEAE, 0x1EEAF, 0x1EEB0, 0x1EEB1, 0x1EEB2, 0x1EEB3, 0x1EEB4, 0x1EEB5, 0x1EEB6, 0x1EEB7, 0x1EEB8, 0x1EEB9, 0x1EEBA, 0x1EEBB, 0x10FFFD];

    function determineBidi(cueDiv) {
        var nodeStack = [],
            text = "",
            charCode;
        if (!cueDiv || !cueDiv.childNodes) {
            return "ltr";
        }

        function pushNodes(nodeStack, node) {
            for (var i = node.childNodes.length - 1; i >= 0; i--) {
                nodeStack.push(node.childNodes[i]);
            }
        }

        function nextTextNode(nodeStack) {
            if (!nodeStack || !nodeStack.length) {
                return null;
            }
            var node = nodeStack.pop(),
                text = node.textContent || node.innerText;
            if (text) {
                var m = text.match(/^.*(\n|\r)/);
                if (m) {
                    nodeStack.length = 0;
                    return m[0];
                }
                return text;
            }
            if (node.tagName === "ruby") {
                return nextTextNode(nodeStack);
            }
            if (node.childNodes) {
                pushNodes(nodeStack, node);
                return nextTextNode(nodeStack);
            }
        }
        pushNodes(nodeStack, cueDiv);
        while ((text = nextTextNode(nodeStack))) {
            for (var i = 0; i < text.length; i++) {
                charCode = text.charCodeAt(i);
                for (var j = 0; j < strongRTLChars.length; j++) {
                    if (strongRTLChars[j] === charCode) {
                        return "rtl";
                    }
                }
            }
        }
        return "ltr";
    }

    function computeLinePos(cue) {
        if (typeof cue.line === "number" && (cue.snapToLines || (cue.line >= 0 && cue.line <= 100))) {
            return cue.line;
        }
        if (!cue.track || !cue.track.textTrackList || !cue.track.textTrackList.mediaElement) {
            return -1;
        }
        var track = cue.track,
            trackList = track.textTrackList,
            count = 0;
        for (var i = 0; i < trackList.length && trackList[i] !== track; i++) {
            if (trackList[i].mode === "showing") {
                count++;
            }
        }
        return ++count * -1;
    }

    function StyleBox() {}
    StyleBox.prototype.applyStyles = function(styles, div) {
        div = div || this.div;
        for (var prop in styles) {
            if (styles.hasOwnProperty(prop)) {
                div.style[prop] = styles[prop];
            }
        }
    };
    StyleBox.prototype.formatStyle = function(val, unit) {
        return val === 0 ? 0 : val + unit;
    };

    function CueStyleBox(window, cue, styleOptions) {
        var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
        var color = "rgba(255, 255, 255, 1)";
        var backgroundColor = "rgba(0, 0, 0, 0.8)";
        if (isIE8) {
            color = "rgb(255, 255, 255)";
            backgroundColor = "rgb(0, 0, 0)";
        }
        StyleBox.call(this);
        this.cue = cue;
        this.cueDiv = parseContent(window, cue.text);
        var styles = {
            color: color,
            backgroundColor: backgroundColor,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        if (!isIE8) {
            styles.writingMode = cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl";
            styles.unicodeBidi = "plaintext";
        }
        this.applyStyles(styles, this.cueDiv);
        this.div = window.document.createElement("div");
        styles = {
            textAlign: cue.align === "middle" ? "center" : cue.align,
            font: styleOptions.font,
            whiteSpace: "pre-line",
            position: "absolute"
        };
        if (!isIE8) {
            styles.direction = determineBidi(this.cueDiv);
            styles.writingMode = cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext";
        }
        this.applyStyles(styles);
        this.div.appendChild(this.cueDiv);
        var textPos = 0;
        switch (cue.positionAlign) {
            case "start":
                textPos = cue.position;
                break;
            case "middle":
                textPos = cue.position - (cue.size / 2);
                break;
            case "end":
                textPos = cue.position - cue.size;
                break;
        }
        if (cue.vertical === "") {
            this.applyStyles({
                left: this.formatStyle(textPos, "%"),
                width: this.formatStyle(cue.size, "%")
            });
        } else {
            this.applyStyles({
                top: this.formatStyle(textPos, "%"),
                height: this.formatStyle(cue.size, "%")
            });
        }
        this.move = function(box) {
            this.applyStyles({
                top: this.formatStyle(box.top, "px"),
                bottom: this.formatStyle(box.bottom, "px"),
                left: this.formatStyle(box.left, "px"),
                right: this.formatStyle(box.right, "px"),
                height: this.formatStyle(box.height, "px"),
                width: this.formatStyle(box.width, "px")
            });
        };
    }
    CueStyleBox.prototype = _objCreate(StyleBox.prototype);
    CueStyleBox.prototype.constructor = CueStyleBox;

    function BoxPosition(obj) {
        var isIE8 = (/MSIE\s8\.0/).test(navigator.userAgent);
        var lh, height, width, top;
        if (obj.div) {
            height = obj.div.offsetHeight;
            width = obj.div.offsetWidth;
            top = obj.div.offsetTop;
            var rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
            obj = obj.div.getBoundingClientRect();
            lh = rects ? Math.max((rects[0] && rects[0].height) || 0, obj.height / rects.length) : 0;
        }
        this.left = obj.left;
        this.right = obj.right;
        this.top = obj.top || top;
        this.height = obj.height || height;
        this.bottom = obj.bottom || (top + (obj.height || height));
        this.width = obj.width || width;
        this.lineHeight = lh !== undefined ? lh : obj.lineHeight;
        if (isIE8 && !this.lineHeight) {
            this.lineHeight = 13;
        }
    }
    BoxPosition.prototype.move = function(axis, toMove) {
        toMove = toMove !== undefined ? toMove : this.lineHeight;
        switch (axis) {
            case "+x":
                this.left += toMove;
                this.right += toMove;
                break;
            case "-x":
                this.left -= toMove;
                this.right -= toMove;
                break;
            case "+y":
                this.top += toMove;
                this.bottom += toMove;
                break;
            case "-y":
                this.top -= toMove;
                this.bottom -= toMove;
                break;
        }
    };
    BoxPosition.prototype.overlaps = function(b2) {
        return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
    };
    BoxPosition.prototype.overlapsAny = function(boxes) {
        for (var i = 0; i < boxes.length; i++) {
            if (this.overlaps(boxes[i])) {
                return true;
            }
        }
        return false;
    };
    BoxPosition.prototype.within = function(container) {
        return this.top >= container.top && this.bottom <= container.bottom && this.left >= container.left && this.right <= container.right;
    };
    BoxPosition.prototype.overlapsOppositeAxis = function(container, axis) {
        switch (axis) {
            case "+x":
                return this.left < container.left;
            case "-x":
                return this.right > container.right;
            case "+y":
                return this.top < container.top;
            case "-y":
                return this.bottom > container.bottom;
        }
    };
    BoxPosition.prototype.intersectPercentage = function(b2) {
        var x = Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)),
            y = Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)),
            intersectArea = x * y;
        return intersectArea / (this.height * this.width);
    };
    BoxPosition.prototype.toCSSCompatValues = function(reference) {
        return {
            top: this.top - reference.top,
            bottom: reference.bottom - this.bottom,
            left: this.left - reference.left,
            right: reference.right - this.right,
            height: this.height,
            width: this.width
        };
    };
    BoxPosition.getSimpleBoxPosition = function(obj) {
        var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0;
        var width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0;
        var top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;
        obj = obj.div ? obj.div.getBoundingClientRect() : obj.tagName ? obj.getBoundingClientRect() : obj;
        var ret = {
            left: obj.left,
            right: obj.right,
            top: obj.top || top,
            height: obj.height || height,
            bottom: obj.bottom || (top + (obj.height || height)),
            width: obj.width || width
        };
        return ret;
    };

    function moveBoxToLinePosition(window, styleBox, containerBox, boxPositions) {
        function findBestPosition(b, axis) {
            var bestPosition, specifiedPosition = new BoxPosition(b),
                percentage = 1;
            for (var i = 0; i < axis.length; i++) {
                while (b.overlapsOppositeAxis(containerBox, axis[i]) || (b.within(containerBox) && b.overlapsAny(boxPositions))) {
                    b.move(axis[i]);
                }
                if (b.within(containerBox)) {
                    return b;
                }
                var p = b.intersectPercentage(containerBox);
                if (percentage > p) {
                    bestPosition = new BoxPosition(b);
                    percentage = p;
                }
                b = new BoxPosition(specifiedPosition);
            }
            return bestPosition || specifiedPosition;
        }
        var boxPosition = new BoxPosition(styleBox),
            cue = styleBox.cue,
            linePos = computeLinePos(cue),
            axis = [];
        if (cue.snapToLines) {
            var size;
            switch (cue.vertical) {
                case "":
                    axis = ["+y", "-y"];
                    size = "height";
                    break;
                case "rl":
                    axis = ["+x", "-x"];
                    size = "width";
                    break;
                case "lr":
                    axis = ["-x", "+x"];
                    size = "width";
                    break;
            }
            var step = boxPosition.lineHeight,
                position = step * Math.round(linePos),
                maxPosition = containerBox[size] + step,
                initialAxis = axis[0];
            if (Math.abs(position) > maxPosition) {
                position = position < 0 ? -1 : 1;
                position *= Math.ceil(maxPosition / step) * step;
            }
            if (linePos < 0) {
                position += cue.vertical === "" ? containerBox.height : containerBox.width;
                axis = axis.reverse();
            }
            boxPosition.move(initialAxis, position);
        } else {
            var calculatedPercentage = (boxPosition.lineHeight / containerBox.height) * 100;
            switch (cue.lineAlign) {
                case "middle":
                    linePos -= (calculatedPercentage / 2);
                    break;
                case "end":
                    linePos -= calculatedPercentage;
                    break;
            }
            switch (cue.vertical) {
                case "":
                    styleBox.applyStyles({
                        top: styleBox.formatStyle(linePos, "%")
                    });
                    break;
                case "rl":
                    styleBox.applyStyles({
                        left: styleBox.formatStyle(linePos, "%")
                    });
                    break;
                case "lr":
                    styleBox.applyStyles({
                        right: styleBox.formatStyle(linePos, "%")
                    });
                    break;
            }
            axis = ["+y", "-x", "+x", "-y"];
            boxPosition = new BoxPosition(styleBox);
        }
        var bestPosition = findBestPosition(boxPosition, axis);
        styleBox.move(bestPosition.toCSSCompatValues(containerBox));
    }

    function WebVTT() {}
    WebVTT.StringDecoder = function() {
        return {
            decode: function(data) {
                if (!data) {
                    return "";
                }
                if (typeof data !== "string") {
                    throw new Error("Error - expected string data.");
                }
                return decodeURIComponent(encodeURIComponent(data));
            }
        };
    };
    WebVTT.convertCueToDOMTree = function(window, cuetext) {
        if (!window || !cuetext) {
            return null;
        }
        return parseContent(window, cuetext);
    };
    var FONT_SIZE_PERCENT = 0.05;
    var FONT_STYLE = "sans-serif";
    var CUE_BACKGROUND_PADDING = "1.5%";
    WebVTT.processCues = function(window, cues, overlay) {
        if (!window || !cues || !overlay) {
            return null;
        }
        while (overlay.firstChild) {
            overlay.removeChild(overlay.firstChild);
        }
        var paddedOverlay = window.document.createElement("div");
        paddedOverlay.style.position = "absolute";
        paddedOverlay.style.left = "0";
        paddedOverlay.style.right = "0";
        paddedOverlay.style.top = "0";
        paddedOverlay.style.bottom = "0";
        paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
        overlay.appendChild(paddedOverlay);

        function shouldCompute(cues) {
            for (var i = 0; i < cues.length; i++) {
                if (cues[i].hasBeenReset || !cues[i].displayState) {
                    return true;
                }
            }
            return false;
        }
        if (!shouldCompute(cues)) {
            for (var i = 0; i < cues.length; i++) {
                paddedOverlay.appendChild(cues[i].displayState);
            }
            return;
        }
        var boxPositions = [],
            containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
            fontSize = Math.round(containerBox.height * FONT_SIZE_PERCENT * 100) / 100;
        var styleOptions = {
            font: fontSize + "px " + FONT_STYLE
        };
        (function() {
            var styleBox, cue;
            for (var i = 0; i < cues.length; i++) {
                cue = cues[i];
                styleBox = new CueStyleBox(window, cue, styleOptions);
                paddedOverlay.appendChild(styleBox.div);
                moveBoxToLinePosition(window, styleBox, containerBox, boxPositions);
                cue.displayState = styleBox.div;
                boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
            }
        })();
    };
    WebVTT.Parser = function(window, vttjs, decoder) {
        if (!decoder) {
            decoder = vttjs;
            vttjs = {};
        }
        if (!vttjs) {
            vttjs = {};
        }
        this.window = window;
        this.vttjs = vttjs;
        this.state = "INITIAL";
        this.buffer = "";
        this.decoder = decoder || new TextDecoder("utf8");
        this.regionList = [];
    };
    WebVTT.Parser.prototype = {
        reportOrThrowError: function(e) {
            if (e instanceof ParsingError) {
                this.onparsingerror && this.onparsingerror(e);
            } else {
                throw e;
            }
        },
        parse: function(data) {
            var self = this;
            if (data) {
                self.buffer += self.decoder.decode(data, {
                    stream: true
                });
            }

            function collectNextLine() {
                var buffer = self.buffer;
                var pos = 0;
                while (pos < buffer.length && buffer[pos] !== '\r' && buffer[pos] !== '\n') {
                    ++pos;
                }
                var line = buffer.substr(0, pos);
                if (buffer[pos] === '\r') {
                    ++pos;
                }
                if (buffer[pos] === '\n') {
                    ++pos;
                }
                self.buffer = buffer.substr(pos);
                return line;
            }

            function parseRegion(input) {
                var settings = new Settings();
                parseOptions(input, function(k, v) {
                    switch (k) {
                        case "id":
                            settings.set(k, v);
                            break;
                        case "width":
                            settings.percent(k, v);
                            break;
                        case "lines":
                            settings.integer(k, v);
                            break;
                        case "regionanchor":
                        case "viewportanchor":
                            var xy = v.split(',');
                            if (xy.length !== 2) {
                                break;
                            }
                            var anchor = new Settings();
                            anchor.percent("x", xy[0]);
                            anchor.percent("y", xy[1]);
                            if (!anchor.has("x") || !anchor.has("y")) {
                                break;
                            }
                            settings.set(k + "X", anchor.get("x"));
                            settings.set(k + "Y", anchor.get("y"));
                            break;
                        case "scroll":
                            settings.alt(k, v, ["up"]);
                            break;
                    }
                }, /=/, /\s/);
                if (settings.has("id")) {
                    var region = new(self.vttjs.VTTRegion || self.window.VTTRegion)();
                    region.width = settings.get("width", 100);
                    region.lines = settings.get("lines", 3);
                    region.regionAnchorX = settings.get("regionanchorX", 0);
                    region.regionAnchorY = settings.get("regionanchorY", 100);
                    region.viewportAnchorX = settings.get("viewportanchorX", 0);
                    region.viewportAnchorY = settings.get("viewportanchorY", 100);
                    region.scroll = settings.get("scroll", "");
                    self.onregion && self.onregion(region);
                    self.regionList.push({
                        id: settings.get("id"),
                        region: region
                    });
                }
            }

            function parseHeader(input) {
                parseOptions(input, function(k, v) {
                    switch (k) {
                        case "Region":
                            parseRegion(v);
                            break;
                    }
                }, /:/);
            }
            try {
                var line;
                if (self.state === "INITIAL") {
                    if (!/\r\n|\n/.test(self.buffer)) {
                        return this;
                    }
                    line = collectNextLine();
                    var m = line.match(/^WEBVTT([ \t].*)?$/);
                    if (!m || !m[0]) {
                        throw new ParsingError(ParsingError.Errors.BadSignature);
                    }
                    self.state = "HEADER";
                }
                var alreadyCollectedLine = false;
                while (self.buffer) {
                    if (!/\r\n|\n/.test(self.buffer)) {
                        return this;
                    }
                    if (!alreadyCollectedLine) {
                        line = collectNextLine();
                    } else {
                        alreadyCollectedLine = false;
                    }
                    switch (self.state) {
                        case "HEADER":
                            if (/:/.test(line)) {
                                parseHeader(line);
                            } else if (!line) {
                                self.state = "ID";
                            }
                            continue;
                        case "NOTE":
                            if (!line) {
                                self.state = "ID";
                            }
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(line)) {
                                self.state = "NOTE";
                                break;
                            }
                            if (!line) {
                                continue;
                            }
                            self.cue = new(self.vttjs.VTTCue || self.window.VTTCue)(0, 0, "");
                            self.state = "CUE";
                            if (line.indexOf("-->") === -1) {
                                self.cue.id = line;
                                continue;
                            }
                        case "CUE":
                            try {
                                parseCue(line, self.cue, self.regionList);
                            } catch (e) {
                                self.reportOrThrowError(e);
                                self.cue = null;
                                self.state = "BADCUE";
                                continue;
                            }
                            self.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var hasSubstring = line.indexOf("-->") !== -1;
                            if (!line || hasSubstring && (alreadyCollectedLine = true)) {
                                self.oncue && self.oncue(self.cue);
                                self.cue = null;
                                self.state = "ID";
                                continue;
                            }
                            if (self.cue.text) {
                                self.cue.text += "\n";
                            }
                            self.cue.text += line;
                            continue;
                        case "BADCUE":
                            if (!line) {
                                self.state = "ID";
                            }
                            continue;
                    }
                }
            } catch (e) {
                self.reportOrThrowError(e);
                if (self.state === "CUETEXT" && self.cue && self.oncue) {
                    self.oncue(self.cue);
                }
                self.cue = null;
                self.state = self.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
            }
            return this;
        },
        flush: function() {
            var self = this;
            try {
                self.buffer += self.decoder.decode();
                if (self.cue || self.state === "HEADER") {
                    self.buffer += "\n\n";
                    self.parse();
                }
                if (self.state === "INITIAL") {
                    throw new ParsingError(ParsingError.Errors.BadSignature);
                }
            } catch (e) {
                self.reportOrThrowError(e);
            }
            self.onflush && self.onflush();
            return this;
        }
    };
    global.WebVTT = WebVTT;
}(this, (this.vttjs || {})));
! function() {
    ! function(a) {
        var b = a && a.videojs;
        if (b) {
            b.CDN_VERSION = "5.6.0";
            var c = "https:" === a.location.protocol ? "https://" : "http://";
            b.options.flash.swf = c + "vjs.zencdn.net/swf/5.0.1/video-js.swf"
        }
    }(window),
    function(a, b, c, d, e, f, g) {
        b && b.HELP_IMPROVE_VIDEOJS !== !1 && (e.random() > .01 || (f = b.location, g = b.videojs || {}, a.src = "//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-3&utmn=1&utmhn=" + d(f.hostname) + "&utmsr=" + b.screen.availWidth + "x" + b.screen.availHeight + "&utmul=" + (c.language || c.userLanguage || "").toLowerCase() + "&utmr=" + d(f.href) + "&utmp=" + d(f.hostname + f.pathname) + "&utmcc=__utma%3D1." + e.floor(1e10 * e.random()) + ".1.1.1.1%3B&utme=8(vjsv*cdnv)9(" + g.VERSION + "*" + g.CDN_VERSION + ")"))
    }(new Image, window, navigator, encodeURIComponent, Math)
}();
(function() {
    'use strict';
    var videojs = null;
    if (typeof window.videojs === 'undefined' && typeof require === 'function') {
        videojs = require('video.js');
    } else {
        videojs = window.videojs;
    }
    (function(window, videojs) {
        var defaults = {},
            videoJsResolutionSwitcher, currentResolution = {},
            menuItemsHolder = {};

        function setSourcesSanitized(player, sources, label, customSourcePicker) {
            currentResolution = {
                label: label,
                sources: sources
            };
            if (typeof customSourcePicker === 'function') {
                return customSourcePicker(player, sources, label);
            }
            return player.src(sources.map(function(src) {
                return {
                    src: src.src,
                    type: src.type,
                    res: src.res
                };
            }));
        }
        var MenuItem = videojs.getComponent('MenuItem');
        var ResolutionMenuItem = videojs.extend(MenuItem, {
            constructor: function(player, options, onClickListener, label) {
                this.onClickListener = onClickListener;
                this.label = label;
                MenuItem.call(this, player, options);
                this.src = options.src;
                this.on('click', this.onClick);
                this.on('touchstart', this.onClick);
                if (options.initialySelected) {
                    this.showAsLabel();
                    this.selected(true);
                    this.addClass('vjs-selected');
                }
            },
            showAsLabel: function() {
                if (this.label) {
                    this.label.innerHTML = this.options_.label;
                }
            },
            onClick: function(customSourcePicker) {
                this.onClickListener(this);
                var currentTime = this.player_.currentTime();
                var isPaused = this.player_.paused();
                this.showAsLabel();
                this.addClass('vjs-selected');
                if (!isPaused) {
                    this.player_.bigPlayButton.hide();
                }
                if (typeof customSourcePicker !== 'function' && typeof this.options_.customSourcePicker === 'function') {
                    customSourcePicker = this.options_.customSourcePicker;
                }
                var handleSeekEvent = 'loadeddata';
                if (this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash') {
                    handleSeekEvent = 'timeupdate';
                }
                setSourcesSanitized(this.player_, this.src, this.options_.label, customSourcePicker).one(handleSeekEvent, function() {
                    this.player_.currentTime(currentTime);
                    this.player_.handleTechSeeked_();
                    if (!isPaused) {
                        this.player_.play().handleTechSeeked_();
                    }
                    this.player_.trigger('resolutionchange');
                });
            }
        });
        var MenuButton = videojs.getComponent('MenuButton');
        var ResolutionMenuButton = videojs.extend(MenuButton, {
            constructor: function(player, options, settings, label) {
                this.sources = options.sources;
                this.label = label;
                this.label.innerHTML = options.initialySelectedLabel;
                MenuButton.call(this, player, options, settings);
                this.controlText('Quality');
                if (settings.dynamicLabel) {
                    this.el().appendChild(label);
                } else {
                    var staticLabel = document.createElement('span');
                    staticLabel.classList.add('vjs-resolution-button-staticlabel');
                    this.el().appendChild(staticLabel);
                }
            },
            createItems: function() {
                var menuItems = [];
                var labels = (this.sources && this.sources.label) || {};
                var onClickUnselectOthers = function(clickedItem) {
                    menuItems.map(function(item) {
                        item.selected(item === clickedItem);
                        item.removeClass('vjs-selected');
                    });
                };
                for (var key in labels) {
                    if (labels.hasOwnProperty(key)) {
                        menuItems.push(new ResolutionMenuItem(this.player_, {
                            label: key,
                            src: labels[key],
                            initialySelected: key === this.options_.initialySelectedLabel,
                            customSourcePicker: this.options_.customSourcePicker
                        }, onClickUnselectOthers, this.label));
                        menuItemsHolder[key] = menuItems[menuItems.length - 1];
                    }
                }
                return menuItems;
            }
        });
        videoJsResolutionSwitcher = function(options) {
            var settings = videojs.mergeOptions(defaults, options),
                player = this,
                label = document.createElement('span'),
                groupedSrc = {};
            label.classList.add('vjs-resolution-button-label');
            player.updateSrc = function(src) {
                if (!src) {
                    return player.src();
                }
                if (player.controlBar.resolutionSwitcher) {
                    player.controlBar.resolutionSwitcher.dispose();
                    delete player.controlBar.resolutionSwitcher;
                }
                src = src.sort(compareResolutions);
                groupedSrc = bucketSources(src);
                var choosen = chooseSrc(groupedSrc, src);
                var menuButton = new ResolutionMenuButton(player, {
                    sources: groupedSrc,
                    initialySelectedLabel: choosen.label,
                    initialySelectedRes: choosen.res,
                    customSourcePicker: settings.customSourcePicker
                }, settings, label);
                menuButton.el().classList.add('vjs-resolution-button');
                player.controlBar.resolutionSwitcher = player.controlBar.el_.insertBefore(menuButton.el_, player.controlBar.getChild('fullscreenToggle').el_);
                return setSourcesSanitized(player, choosen.sources, choosen.label);
            };
            player.currentResolution = function(label, customSourcePicker) {
                if (label == null) {
                    return currentResolution;
                }
                if (menuItemsHolder[label] != null) {
                    menuItemsHolder[label].onClick(customSourcePicker);
                }
                return player;
            };
            player.getGroupedSrc = function() {
                return groupedSrc;
            };

            function compareResolutions(a, b) {
                if (!a.res || !b.res) {
                    return 0;
                }
                return (+b.res) - (+a.res);
            }

            function bucketSources(src) {
                var resolutions = {
                    label: {},
                    res: {},
                    type: {}
                };
                src.map(function(source) {
                    initResolutionKey(resolutions, 'label', source);
                    initResolutionKey(resolutions, 'res', source);
                    initResolutionKey(resolutions, 'type', source);
                    appendSourceToKey(resolutions, 'label', source);
                    appendSourceToKey(resolutions, 'res', source);
                    appendSourceToKey(resolutions, 'type', source);
                });
                return resolutions;
            }

            function initResolutionKey(resolutions, key, source) {
                if (resolutions[key][source[key]] == null) {
                    resolutions[key][source[key]] = [];
                }
            }

            function appendSourceToKey(resolutions, key, source) {
                resolutions[key][source[key]].push(source);
            }

            function chooseSrc(groupedSrc, src) {
                var selectedRes = settings['default'];
                var selectedLabel = '';
                if (selectedRes === 'high') {
                    selectedRes = src[0].res;
                    selectedLabel = src[0].label;
                } else if (selectedRes === 'low' || selectedRes == null) {
                    selectedRes = src[src.length - 1].res;
                    selectedLabel = src[src.length - 1].label;
                } else if (groupedSrc.res[selectedRes]) {
                    selectedLabel = groupedSrc.res[selectedRes][0].label;
                }
                if (selectedRes === undefined) {
                    return {
                        res: selectedRes,
                        label: selectedLabel,
                        sources: groupedSrc.label[selectedLabel]
                    };
                }
                return {
                    res: selectedRes,
                    label: selectedLabel,
                    sources: groupedSrc.res[selectedRes]
                };
            }
            if (player.options_.sources.length > 1) {
                player.ready(function() {
                    player.updateSrc(player.options_.sources);
                });
            }
        };
        videojs.plugin('videoJsResolutionSwitcher', videoJsResolutionSwitcher);
    })(window, videojs);
})();

function SetPlayer(code) {
    var myPlayer = videojs('my-video');
    whereYouAt = myPlayer.currentTime();
    myPlayer.src({
        type: "video/mp4",
        src: code
    });
    myPlayer.play();
    myPlayer.on("loadedmetadata", function() {
        myPlayer.currentTime(whereYouAt);
    });
}! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.videojsOverlay = e()
    }
}(function() {
    return function e(t, n, i) {
        function r(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var d = new Error("Cannot find module '" + s + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var f = n[s] = {
                    exports: {}
                };
                t[s][0].call(f.exports, function(e) {
                    var n = t[s][1][e];
                    return r(n ? n : e)
                }, f, f.exports, e, t, n, i)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
        return r
    }({
        1: [function(e, t, n) {
            t.exports = function(e) {
                for (var t = "", n = 0; n < arguments.length; n++) t += e[n] + (arguments[n + 1] || "");
                return t.replace(/\s+/g, " ").trim()
            }
        }, {}],
        2: [function(e, t, n) {
            (function(i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function a(e, t) {
                    return Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var u = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    d = function(e, t, n) {
                        for (var i = !0; i;) {
                            var r = e,
                                o = t,
                                s = n;
                            i = !1, null === r && (r = Function.prototype);
                            var a = Object.getOwnPropertyDescriptor(r, o);
                            if (void 0 !== a) {
                                if ("value" in a) return a.value;
                                var u = a.get;
                                if (void 0 === u) return;
                                return u.call(s)
                            }
                            var d = Object.getPrototypeOf(r);
                            if (null === d) return;
                            e = d, t = o, n = s, i = !0, a = d = void 0
                        }
                    },
                    f = a(['\n      created, listening to "', '" for "start" and\n      "', '" for "end"\n    '], ['\n      created, listening to "', '" for "start" and\n      "', '" for "end"\n    ']),
                    l = a(["\n          hiding; ", " is an integer and overlay should not show at this time\n        "], ["\n          hiding; ", " is an integer and overlay should not show at this time\n        "]),
                    h = a(["\n          hiding; show point (", ") is before now (", ") and end\n          point (", ") is an event\n        "], ["\n          hiding; show point (", ") is before now (", ") and end\n          point (", ") is an event\n        "]),
                    p = e("tsmlj"),
                    c = r(p),
                    v = "undefined" != typeof window ? window.videojs : "undefined" != typeof i ? i.videojs : null,
                    y = r(v),
                    _ = {
                        align: "top-left",
                        "class": "",
                        content: "This overlay will show up while the video is playing",
                        debug: !1,
                        overlays: [{
                            start: "playing",
                            end: "paused"
                        }]
                    },
                    g = y["default"].getComponent("Component"),
                    w = function(e) {
                        return "number" == typeof e && e === e
                    },
                    b = function(e) {
                        return "string" == typeof e && /^\S+$/.test(e)
                    },
                    m = function(e) {
                        function t(e, n) {
                            var i = this;
                            o(this, t), d(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, n), ["start", "end"].forEach(function(e) {
                                var t = i.options_[e];
                                if (w(t)) i[e + "Event_"] = "timeupdate";
                                else if (b(t)) i[e + "Event_"] = t;
                                else if ("start" === e) throw new Error('invalid "start" option; expected number or string')
                            }), ["endListener_", "rewindListener_", "startListener_"].forEach(function(e) {
                                i[e] = function(n) {
                                    return t.prototype[e].call(i, n)
                                }
                            }), "timeupdate" === this.startEvent_ && this.on(e, "timeupdate", this.rewindListener_), this.debug((0, c["default"])(f, this.startEvent_, this.endEvent_ || "nothing")), this.hide()
                        }
                        return s(t, e), u(t, [{
                            key: "createEl",
                            value: function() {
                                var e = this.options_,
                                    t = e.content,
                                    n = y["default"].createEl("div", {
                                        className: "vjs-overlay vjs-overlay-" + e.align + " " + e["class"] + " vjs-hidden"
                                    });
                                return "string" == typeof t ? n.innerHTML = t : t instanceof DocumentFragment ? n.appendChild(t) : y["default"].appendContent(n, t), n
                            }
                        }, {
                            key: "debug",
                            value: function() {
                                if (this.options_.debug) {
                                    for (var e = y["default"].log, t = e, n = arguments.length, i = Array(n), r = 0; n > r; r++) i[r] = arguments[r];
                                    e.hasOwnProperty(i[0]) && "function" == typeof e[i[0]] && (t = e[i.shift()]), t.apply(void 0, ["overlay#" + this.id() + ": "].concat(i))
                                }
                            }
                        }, {
                            key: "hide",
                            value: function() {
                                return d(Object.getPrototypeOf(t.prototype), "hide", this).call(this), this.debug("hidden"), this.debug('bound `startListener_` to "' + this.startEvent_ + '"'), this.endEvent_ && (this.debug('unbound `endListener_` from "' + this.endEvent_ + '"'), this.off(this.player(), this.endEvent_, this.endListener_)), this.on(this.player(), this.startEvent_, this.startListener_), this
                            }
                        }, {
                            key: "shouldHide_",
                            value: function(e, t) {
                                var n = this.options_.end;
                                return w(n) ? e >= n : n === t
                            }
                        }, {
                            key: "show",
                            value: function() {
                                return d(Object.getPrototypeOf(t.prototype), "show", this).call(this), this.off(this.player(), this.startEvent_, this.startListener_), this.debug("shown"), this.debug('unbound `startListener_` from "' + this.startEvent_ + '"'), this.endEvent_ && (this.debug('bound `endListener_` to "' + this.endEvent_ + '"'), this.on(this.player(), this.endEvent_, this.endListener_)), this
                            }
                        }, {
                            key: "shouldShow_",
                            value: function(e, t) {
                                var n = this.options_.start,
                                    i = this.options_.end;
                                return w(n) ? w(i) ? e >= n && i > e : this.hasShownSinceSeek_ ? Math.floor(e) === n : (this.hasShownSinceSeek_ = !0, e >= n) : n === t
                            }
                        }, {
                            key: "startListener_",
                            value: function(e) {
                                var t = this.player().currentTime();
                                this.shouldShow_(t, e.type) && this.show()
                            }
                        }, {
                            key: "endListener_",
                            value: function(e) {
                                var t = this.player().currentTime();
                                this.shouldHide_(t, e.type) && this.hide()
                            }
                        }, {
                            key: "rewindListener_",
                            value: function(e) {
                                var t = this.player().currentTime(),
                                    n = this.previousTime_,
                                    i = this.options_.start,
                                    r = this.options_.end;
                                n > t && (this.debug("rewind detected"), w(r) && !this.shouldShow_(t) ? (this.debug((0, c["default"])(l, r)), this.hasShownSinceSeek_ = !1, this.hide()) : b(r) && i > t && (this.debug((0, c["default"])(h, i, t, r)), this.hasShownSinceSeek_ = !1, this.hide())), this.previousTime_ = t
                            }
                        }]), t
                    }(g);
                y["default"].registerComponent("Overlay", m);
                var O = function(e) {
                    var t = this,
                        n = y["default"].mergeOptions(_, e);
                    Array.isArray(this.overlays_) && this.overlays_.forEach(function(e) {
                        return e.dispose()
                    });
                    var i = n.overlays;
                    delete n.overlays, this.overlays_ = i.map(function(e) {
                        return t.addChild("overlay", y["default"].mergeOptions(n, e))
                    })
                };
                O.VERSION = "1.0.1", y["default"].plugin("overlay", O), n["default"] = O, t.exports = n["default"]
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            tsmlj: 1
        }]
    }, {}, [2])(2)
});
(function(e) {
    var t = function(e) {
            var t, n, r;
            for (n = 1; n < arguments.length; n++) {
                t = arguments[n];
                for (r in t) {
                    if (t.hasOwnProperty(r)) {
                        e[r] = t[r]
                    }
                }
            }
            return e
        },
        n = {
            autoDisable: false
        },
        r = function(e) {
            var r = this,
                i = false,
                s = t({}, n, e || {});
            r.disableProgress = {
                disable: function() {
                    i = true;
                    r.controlBar.progressControl.seekBar.off("mousedown");
                    r.controlBar.progressControl.seekBar.off("touchstart");
                    r.controlBar.progressControl.seekBar.off("click")
                },
                enable: function() {
                    i = false;
                    r.controlBar.progressControl.seekBar.on("mousedown", r.controlBar.progressControl.seekBar.onMouseDown);
                    r.controlBar.progressControl.seekBar.on("touchstart", r.controlBar.progressControl.seekBar.onMouseDown);
                    r.controlBar.progressControl.seekBar.on("click", r.controlBar.progressControl.seekBar.onClick)
                },
                getState: function() {
                    return i
                }
            };
            if (s.autoDisable) {
                r.disableProgress.disable()
            }
        };
    e.plugin("disableProgress", r)
})(window.videojs)