(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[273], {
    43408: function (t) {
        t.exports = {
            readFile: function () {
                throw Error("readFile cannot be called from the edge runtime.")
            }
        }
    }, 88795: function (t, e, i) {
        "use strict";
        var s, r = i(70046);
        Object.defineProperty(e, "__esModule", {value: !0});
        var h = i(43408), a = "@vercel/edge-config", o = "0.4.1", n = {
            UNEXPECTED: "@vercel/edge-config: Unexpected error",
            UNAUTHORIZED: "@vercel/edge-config: Unauthorized",
            NETWORK: "@vercel/edge-config: Network error",
            EDGE_CONFIG_NOT_FOUND: "@vercel/edge-config: Edge Config not found"
        };

        function l(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function c(t) {
            if ("string" != typeof t) throw Error("@vercel/edge-config: Expected key to be a string")
        }

        function d(t) {
            if (!Array.isArray(t) || t.some(t => "string" != typeof t)) throw Error("@vercel/edge-config: Expected keys to be an array of string")
        }

        function u(t) {
            return "function" == typeof structuredClone ? structuredClone(t) : void 0 === t ? t : JSON.parse(JSON.stringify(t))
        }

        function f(t) {
            return function (t) {
                try {
                    let e = new URL(t);
                    if ("edge-config.vercel.com" !== e.host || "https:" !== e.protocol || !e.pathname.startsWith("/ecfg")) return null;
                    let i = e.pathname.split("/")[1];
                    if (!i) return null;
                    let s = e.searchParams.get("token");
                    if (!s || "" === s) return null;
                    return {
                        type: "vercel",
                        baseUrl: `https://edge-config.vercel.com/${i}`,
                        id: i,
                        version: "1",
                        token: s
                    }
                } catch (t) {
                    return null
                }
            }(t) || function (t) {
                try {
                    let e = new URL(t), i = e.searchParams.get("id"), s = e.searchParams.get("token"),
                        r = e.searchParams.get("version") || "1";
                    if ((!i || e.pathname.startsWith("/ecfg_")) && (i = e.pathname.split("/")[1] || null), !i || !s) return null;
                    return e.search = "", {type: "external", baseUrl: e.toString(), id: i, token: s, version: r}
                } catch (t) {
                    return null
                }
            }(t)
        }

        var p = t => t instanceof Error && l(t, "digest") && "DYNAMIC_SERVER_USAGE" === t.digest;

        function g(t) {
            return new Response(t.response, {
                headers: {
                    ...t.headers,
                    Age: String(Math.max(1, Math.floor((Date.now() - t.time) / 1e3)))
                }, status: t.status
            })
        }

        var v = new Map;

        async function y(t, e = {}) {
            let {headers: i = new Headers, ...s} = e, r = i.get("Authorization"), h = `${t},${r || ""}`, a = v.get(h);
            if (a) {
                let {etag: e, response: r} = a, o = new Headers(i);
                o.set("If-None-Match", e);
                let n = function (t) {
                    if (!t) return null;
                    let e = /stale-if-error=(?<staleIfError>\d+)/i.exec(t);
                    return (null == e ? void 0 : e.groups) ? Number(e.groups.staleIfError) : null
                }(o.get("Cache-Control")), l = await fetch(t, {...s, headers: o}).then(function (t) {
                    switch (t.status) {
                        case 500:
                        case 502:
                        case 503:
                        case 504:
                            return "number" == typeof n && a.time < Date.now() + 1e3 * n ? g(a) : t;
                        default:
                            return t
                    }
                }, function (t) {
                    if ("number" == typeof n && a.time < Date.now() + 1e3 * n) return g(a);
                    throw t
                });
                if (304 === l.status) return l.cachedResponseBody = JSON.parse(r), l;
                let c = l.headers.get("ETag");
                return l.ok && c && v.set(h, {
                    etag: c,
                    response: await l.clone().text(),
                    headers: Object.fromEntries(l.headers.entries()),
                    status: l.status,
                    time: Date.now()
                }), l
            }
            let o = await fetch(t, e), n = o.headers.get("ETag");
            return o.ok && n && v.set(h, {
                etag: n,
                response: await o.clone().text(),
                headers: Object.fromEntries(o.headers.entries()),
                status: o.status,
                time: Date.now()
            }), o
        }

        async function m(t) {
            if ("vercel" !== t.type || !r.env.AWS_LAMBDA_FUNCTION_NAME) return null;
            try {
                let e = await h.readFile.call(void 0, `/opt/edge-config/${t.id}.json`, "utf-8");
                return JSON.parse(e)
            } catch (t) {
                return null
            }
        }

        async function E(t) {
            "undefined" == typeof EdgeRuntime && await t.arrayBuffer()
        }

        function w(t, e = {staleIfError: 604800}) {
            if (!t) throw Error("@vercel/edge-config: No connection string provided");
            let i = f(t);
            if (!i) throw Error("@vercel/edge-config: Invalid connection string provided");
            let s = i.baseUrl, h = i.version, g = {Authorization: `Bearer ${i.token}`};
            return void 0 !== r && r.env.VERCEL_ENV && (g["x-edge-config-vercel-env"] = r.env.VERCEL_ENV), "string" == typeof a && "string" == typeof o && (g["x-edge-config-sdk"] = `${a}@${o}`), "number" == typeof e.staleIfError && e.staleIfError > 0 && (g["cache-control"] = `stale-if-error=${e.staleIfError}`), {
                connection: i, async get(t) {
                    let e = await m(i);
                    return e ? (c(t), Promise.resolve(u(e.items[t]))) : (c(t), y(`${s}/item/${t}?version=${h}`, {
                        headers: new Headers(g),
                        cache: "no-store"
                    }).then(async t => {
                        if (t.ok) return t.json();
                        if (await E(t), 401 === t.status) throw Error(n.UNAUTHORIZED);
                        if (404 === t.status) {
                            if (t.headers.has("x-edge-config-digest")) return;
                            throw Error(n.EDGE_CONFIG_NOT_FOUND)
                        }
                        if (void 0 !== t.cachedResponseBody) return t.cachedResponseBody;
                        throw Error(n.UNEXPECTED)
                    }, t => {
                        if (p(t)) throw t;
                        throw Error(n.NETWORK)
                    }))
                }, async has(t) {
                    let e = await m(i);
                    return e ? (c(t), Promise.resolve(l(e.items, t))) : (c(t), fetch(`${s}/item/${t}?version=${h}`, {
                        method: "HEAD",
                        headers: new Headers(g),
                        cache: "no-store"
                    }).then(t => {
                        if (401 === t.status) throw Error(n.UNAUTHORIZED);
                        if (404 === t.status) {
                            if (t.headers.has("x-edge-config-digest")) return !1;
                            throw Error(n.EDGE_CONFIG_NOT_FOUND)
                        }
                        if (t.ok) return !0;
                        throw Error(n.UNEXPECTED)
                    }, t => {
                        if (p(t)) throw t;
                        throw Error(n.NETWORK)
                    }))
                }, async getAll(t) {
                    let e = await m(i);
                    if (e) return void 0 === t ? Promise.resolve(u(e.items)) : (d(t), Promise.resolve(u(function (t, e) {
                        let i = {};
                        return e.forEach(e => {
                            i[e] = t[e]
                        }), i
                    }(e.items, t))));
                    Array.isArray(t) && d(t);
                    let r = Array.isArray(t) ? new URLSearchParams(t.map(t => ["key", t])).toString() : null;
                    return "" === r ? Promise.resolve({}) : y(`${s}/items?version=${h}${null === r ? "" : `&${r}`}`, {
                        headers: new Headers(g),
                        cache: "no-store"
                    }).then(async t => {
                        if (t.ok) return t.json();
                        if (await E(t), 401 === t.status) throw Error(n.UNAUTHORIZED);
                        if (404 === t.status) throw Error(n.EDGE_CONFIG_NOT_FOUND);
                        if (void 0 !== t.cachedResponseBody) return t.cachedResponseBody;
                        throw Error(n.UNEXPECTED)
                    }, t => {
                        if (p(t)) throw t;
                        throw Error(n.NETWORK)
                    })
                }, async digest() {
                    let t = await m(i);
                    return t ? Promise.resolve(t.digest) : y(`${s}/digest?version=${h}`, {
                        headers: new Headers(g),
                        cache: "no-store"
                    }).then(async t => {
                        if (t.ok) return t.json();
                        if (await E(t), void 0 !== t.cachedResponseBody) return t.cachedResponseBody;
                        throw Error(n.UNEXPECTED)
                    }, t => {
                        if (p(t)) throw t;
                        throw Error(n.NETWORK)
                    })
                }
            }
        }

        function S() {
            s || (s = w(r.env.EDGE_CONFIG))
        }

        e.createClient = w, e.digest = (...t) => (S(), s.digest(...t)), e.get = (...t) => (S(), s.get(...t)), e.getAll = (...t) => (S(), s.getAll(...t)), e.has = (...t) => (S(), s.has(...t)), e.parseConnectionString = f
    }, 17064: function (t, e, i) {
        "use strict";
        let s = (this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {default: t}
        })(i(4456));
        t.exports = Object.assign(s.default, {default: s.default, LRUCache: s.default})
    }, 4456: function (t, e, i) {
        "use strict";
        var s = i(70046);
        Object.defineProperty(e, "__esModule", {value: !0}), e.LRUCache = void 0;
        let r = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
            h = new Set, a = (t, e, i, r) => {
                "object" == typeof s && s && "function" == typeof s.emitWarning ? s.emitWarning(t, e, i, r) : console.error(`[${i}] ${e}: ${t}`)
            }, o = t => !h.has(t);
        Symbol("type");
        let n = t => t && t === Math.floor(t) && t > 0 && isFinite(t),
            l = t => n(t) ? t <= 256 ? Uint8Array : t <= 65536 ? Uint16Array : t <= 4294967296 ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? c : null : null;

        class c extends Array {
            constructor(t) {
                super(t), this.fill(0)
            }
        }

        class d {
            heap;
            length;
            static #t = !1;

            static create(t) {
                let e = l(t);
                if (!e) return [];
                d.#t = !0;
                let i = new d(t, e);
                return d.#t = !1, i
            }

            constructor(t, e) {
                if (!d.#t) throw TypeError("instantiate Stack using Stack.create(n)");
                this.heap = new e(t), this.length = 0
            }

            push(t) {
                this.heap[this.length++] = t
            }

            pop() {
                return this.heap[--this.length]
            }
        }

        class u {
            #e;
            #i;
            #s;
            #r;
            #h;
            ttl;
            ttlResolution;
            ttlAutopurge;
            updateAgeOnGet;
            updateAgeOnHas;
            allowStale;
            noDisposeOnSet;
            noUpdateTTL;
            maxEntrySize;
            sizeCalculation;
            noDeleteOnFetchRejection;
            noDeleteOnStaleGet;
            allowStaleOnFetchAbort;
            allowStaleOnFetchRejection;
            ignoreFetchAbort;
            #a;
            #o;
            #n;
            #l;
            #c;
            #d;
            #u;
            #f;
            #p;
            #g;
            #v;
            #y;
            #m;
            #E;
            #w;
            #S;
            #_;

            static unsafeExposeInternals(t) {
                return {
                    starts: t.#m,
                    ttls: t.#E,
                    sizes: t.#y,
                    keyMap: t.#n,
                    keyList: t.#l,
                    valList: t.#c,
                    next: t.#d,
                    prev: t.#u,
                    get head() {
                        return t.#f
                    },
                    get tail() {
                        return t.#p
                    },
                    free: t.#g,
                    isBackgroundFetch: e => t.#z(e),
                    backgroundFetch: (e, i, s, r) => t.#k(e, i, s, r),
                    moveToTail: e => t.#L(e),
                    indexes: e => t.#x(e),
                    rindexes: e => t.#F(e),
                    isStale: e => t.#T(e)
                }
            }

            get max() {
                return this.#e
            }

            get maxSize() {
                return this.#i
            }

            get calculatedSize() {
                return this.#o
            }

            get size() {
                return this.#a
            }

            get fetchMethod() {
                return this.#h
            }

            get dispose() {
                return this.#s
            }

            get disposeAfter() {
                return this.#r
            }

            constructor(t) {
                let {
                    max: e = 0,
                    ttl: i,
                    ttlResolution: s = 1,
                    ttlAutopurge: r,
                    updateAgeOnGet: c,
                    updateAgeOnHas: f,
                    allowStale: p,
                    dispose: g,
                    disposeAfter: v,
                    noDisposeOnSet: y,
                    noUpdateTTL: m,
                    maxSize: E = 0,
                    maxEntrySize: w = 0,
                    sizeCalculation: S,
                    fetchMethod: _,
                    noDeleteOnFetchRejection: z,
                    noDeleteOnStaleGet: k,
                    allowStaleOnFetchRejection: L,
                    allowStaleOnFetchAbort: x,
                    ignoreFetchAbort: F
                } = t;
                if (0 !== e && !n(e)) throw TypeError("max option must be a nonnegative integer");
                let T = e ? l(e) : Array;
                if (!T) throw Error("invalid max value: " + e);
                if (this.#e = e, this.#i = E, this.maxEntrySize = w || this.#i, this.sizeCalculation = S, this.sizeCalculation) {
                    if (!this.#i && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                    if ("function" != typeof this.sizeCalculation) throw TypeError("sizeCalculation set to non-function")
                }
                if (void 0 !== _ && "function" != typeof _) throw TypeError("fetchMethod must be a function if specified");
                if (this.#h = _, this.#S = !!_, this.#n = new Map, this.#l = Array(e).fill(void 0), this.#c = Array(e).fill(void 0), this.#d = new T(e), this.#u = new T(e), this.#f = 0, this.#p = 0, this.#g = d.create(e), this.#a = 0, this.#o = 0, "function" == typeof g && (this.#s = g), "function" == typeof v ? (this.#r = v, this.#v = []) : (this.#r = void 0, this.#v = void 0), this.#w = !!this.#s, this.#_ = !!this.#r, this.noDisposeOnSet = !!y, this.noUpdateTTL = !!m, this.noDeleteOnFetchRejection = !!z, this.allowStaleOnFetchRejection = !!L, this.allowStaleOnFetchAbort = !!x, this.ignoreFetchAbort = !!F, 0 !== this.maxEntrySize) {
                    if (0 !== this.#i && !n(this.#i)) throw TypeError("maxSize must be a positive integer if specified");
                    if (!n(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
                    this.#A()
                }
                if (this.allowStale = !!p, this.noDeleteOnStaleGet = !!k, this.updateAgeOnGet = !!c, this.updateAgeOnHas = !!f, this.ttlResolution = n(s) || 0 === s ? s : 1, this.ttlAutopurge = !!r, this.ttl = i || 0, this.ttl) {
                    if (!n(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
                    this.#b()
                }
                if (0 === this.#e && 0 === this.ttl && 0 === this.#i) throw TypeError("At least one of max, maxSize, or ttl is required");
                if (!this.ttlAutopurge && !this.#e && !this.#i) {
                    let t = "LRU_CACHE_UNBOUNDED";
                    o(t) && (h.add(t), a("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, u))
                }
            }

            getRemainingTTL(t) {
                return this.#n.has(t) ? 1 / 0 : 0
            }

            #b() {
                let t = new c(this.#e), e = new c(this.#e);
                this.#E = t, this.#m = e, this.#O = (i, s, h = r.now()) => {
                    if (e[i] = 0 !== s ? h : 0, t[i] = s, 0 !== s && this.ttlAutopurge) {
                        let t = setTimeout(() => {
                            this.#T(i) && this.delete(this.#l[i])
                        }, s + 1);
                        t.unref && t.unref()
                    }
                }, this.#D = i => {
                    e[i] = 0 !== t[i] ? r.now() : 0
                }, this.#C = (r, h) => {
                    if (t[h]) {
                        let a = t[h], o = e[h];
                        r.ttl = a, r.start = o, r.now = i || s(), r.remainingTTL = r.now + a - o
                    }
                };
                let i = 0, s = () => {
                    let t = r.now();
                    if (this.ttlResolution > 0) {
                        i = t;
                        let e = setTimeout(() => i = 0, this.ttlResolution);
                        e.unref && e.unref()
                    }
                    return t
                };
                this.getRemainingTTL = r => {
                    let h = this.#n.get(r);
                    return void 0 === h ? 0 : 0 === t[h] || 0 === e[h] ? 1 / 0 : e[h] + t[h] - (i || s())
                }, this.#T = r => 0 !== t[r] && 0 !== e[r] && (i || s()) - e[r] > t[r]
            }

            #D = () => {
            };
            #C = () => {
            };
            #O = () => {
            };
            #T = () => !1;

            #A() {
                let t = new c(this.#e);
                this.#o = 0, this.#y = t, this.#N = e => {
                    this.#o -= t[e], t[e] = 0
                }, this.#R = (t, e, i, s) => {
                    if (this.#z(e)) return 0;
                    if (!n(i)) {
                        if (s) {
                            if ("function" != typeof s) throw TypeError("sizeCalculation must be a function");
                            if (!n(i = s(e, t))) throw TypeError("sizeCalculation return invalid (expect positive integer)")
                        } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.")
                    }
                    return i
                }, this.#U = (e, i, s) => {
                    if (t[e] = i, this.#i) {
                        let i = this.#i - t[e];
                        for (; this.#o > i;) this.#M(!0)
                    }
                    this.#o += t[e], s && (s.entrySize = i, s.totalCalculatedSize = this.#o)
                }
            }

            #N = t => {
            };
            #U = (t, e, i) => {
            };
            #R = (t, e, i, s) => {
                if (i || s) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
                return 0
            };

            * #x({allowStale: t = this.allowStale} = {}) {
                if (this.#a) for (let e = this.#p; this.#I(e) && ((t || !this.#T(e)) && (yield e), e !== this.#f);) e = this.#u[e]
            }

            * #F({allowStale: t = this.allowStale} = {}) {
                if (this.#a) for (let e = this.#f; this.#I(e) && ((t || !this.#T(e)) && (yield e), e !== this.#p);) e = this.#d[e]
            }

            #I(t) {
                return void 0 !== t && this.#n.get(this.#l[t]) === t
            }

            * entries() {
                for (let t of this.#x()) void 0 === this.#c[t] || void 0 === this.#l[t] || this.#z(this.#c[t]) || (yield[this.#l[t], this.#c[t]])
            }

            * rentries() {
                for (let t of this.#F()) void 0 === this.#c[t] || void 0 === this.#l[t] || this.#z(this.#c[t]) || (yield[this.#l[t], this.#c[t]])
            }

            * keys() {
                for (let t of this.#x()) {
                    let e = this.#l[t];
                    void 0 === e || this.#z(this.#c[t]) || (yield e)
                }
            }

            * rkeys() {
                for (let t of this.#F()) {
                    let e = this.#l[t];
                    void 0 === e || this.#z(this.#c[t]) || (yield e)
                }
            }

            * values() {
                for (let t of this.#x()) void 0 === this.#c[t] || this.#z(this.#c[t]) || (yield this.#c[t])
            }

            * rvalues() {
                for (let t of this.#F()) void 0 === this.#c[t] || this.#z(this.#c[t]) || (yield this.#c[t])
            }

            [Symbol.iterator]() {
                return this.entries()
            }

            find(t, e = {}) {
                for (let i of this.#x()) {
                    let s = this.#c[i], r = this.#z(s) ? s.__staleWhileFetching : s;
                    if (void 0 !== r && t(r, this.#l[i], this)) return this.get(this.#l[i], e)
                }
            }

            forEach(t, e = this) {
                for (let i of this.#x()) {
                    let s = this.#c[i], r = this.#z(s) ? s.__staleWhileFetching : s;
                    void 0 !== r && t.call(e, r, this.#l[i], this)
                }
            }

            rforEach(t, e = this) {
                for (let i of this.#F()) {
                    let s = this.#c[i], r = this.#z(s) ? s.__staleWhileFetching : s;
                    void 0 !== r && t.call(e, r, this.#l[i], this)
                }
            }

            purgeStale() {
                let t = !1;
                for (let e of this.#F({allowStale: !0})) this.#T(e) && (this.delete(this.#l[e]), t = !0);
                return t
            }

            dump() {
                let t = [];
                for (let e of this.#x({allowStale: !0})) {
                    let i = this.#l[e], s = this.#c[e], h = this.#z(s) ? s.__staleWhileFetching : s;
                    if (void 0 === h || void 0 === i) continue;
                    let a = {value: h};
                    if (this.#E && this.#m) {
                        a.ttl = this.#E[e];
                        let t = r.now() - this.#m[e];
                        a.start = Math.floor(Date.now() - t)
                    }
                    this.#y && (a.size = this.#y[e]), t.unshift([i, a])
                }
                return t
            }

            load(t) {
                for (let [e, i] of (this.clear(), t)) {
                    if (i.start) {
                        let t = Date.now() - i.start;
                        i.start = r.now() - t
                    }
                    this.set(e, i.value, i)
                }
            }

            set(t, e, i = {}) {
                let {
                    ttl: s = this.ttl,
                    start: r,
                    noDisposeOnSet: h = this.noDisposeOnSet,
                    sizeCalculation: a = this.sizeCalculation,
                    status: o
                } = i, {noUpdateTTL: n = this.noUpdateTTL} = i, l = this.#R(t, e, i.size || 0, a);
                if (this.maxEntrySize && l > this.maxEntrySize) return o && (o.set = "miss", o.maxEntrySizeExceeded = !0), this.delete(t), this;
                let c = 0 === this.#a ? void 0 : this.#n.get(t);
                if (void 0 === c) c = 0 === this.#a ? this.#p : 0 !== this.#g.length ? this.#g.pop() : this.#a === this.#e ? this.#M(!1) : this.#a, this.#l[c] = t, this.#c[c] = e, this.#n.set(t, c), this.#d[this.#p] = c, this.#u[c] = this.#p, this.#p = c, this.#a++, this.#U(c, l, o), o && (o.set = "add"), n = !1; else {
                    this.#L(c);
                    let i = this.#c[c];
                    if (e !== i) {
                        if (this.#S && this.#z(i) ? i.__abortController.abort(Error("replaced")) : !h && (this.#w && this.#s?.(i, t, "set"), this.#_ && this.#v?.push([i, t, "set"])), this.#N(c), this.#U(c, l, o), this.#c[c] = e, o) {
                            o.set = "replace";
                            let t = i && this.#z(i) ? i.__staleWhileFetching : i;
                            void 0 !== t && (o.oldValue = t)
                        }
                    } else o && (o.set = "update")
                }
                if (0 === s || this.#E || this.#b(), this.#E && (n || this.#O(c, s, r), o && this.#C(o, c)), !h && this.#_ && this.#v) {
                    let t;
                    let e = this.#v;
                    for (; t = e?.shift();) this.#r?.(...t)
                }
                return this
            }

            pop() {
                try {
                    for (; this.#a;) {
                        let t = this.#c[this.#f];
                        if (this.#M(!0), this.#z(t)) {
                            if (t.__staleWhileFetching) return t.__staleWhileFetching
                        } else if (void 0 !== t) return t
                    }
                } finally {
                    if (this.#_ && this.#v) {
                        let t;
                        let e = this.#v;
                        for (; t = e?.shift();) this.#r?.(...t)
                    }
                }
            }

            #M(t) {
                let e = this.#f, i = this.#l[e], s = this.#c[e];
                return this.#S && this.#z(s) ? s.__abortController.abort(Error("evicted")) : (this.#w || this.#_) && (this.#w && this.#s?.(s, i, "evict"), this.#_ && this.#v?.push([s, i, "evict"])), this.#N(e), t && (this.#l[e] = void 0, this.#c[e] = void 0, this.#g.push(e)), 1 === this.#a ? (this.#f = this.#p = 0, this.#g.length = 0) : this.#f = this.#d[e], this.#n.delete(i), this.#a--, e
            }

            has(t, e = {}) {
                let {updateAgeOnHas: i = this.updateAgeOnHas, status: s} = e, r = this.#n.get(t);
                if (void 0 !== r) {
                    let t = this.#c[r];
                    if (this.#z(t) && void 0 === t.__staleWhileFetching) return !1;
                    if (!this.#T(r)) return i && this.#D(r), s && (s.has = "hit", this.#C(s, r)), !0;
                    s && (s.has = "stale", this.#C(s, r))
                } else s && (s.has = "miss");
                return !1
            }

            peek(t, e = {}) {
                let {allowStale: i = this.allowStale} = e, s = this.#n.get(t);
                if (void 0 !== s && (i || !this.#T(s))) {
                    let t = this.#c[s];
                    return this.#z(t) ? t.__staleWhileFetching : t
                }
            }

            #k(t, e, i, s) {
                let r = void 0 === e ? void 0 : this.#c[e];
                if (this.#z(r)) return r;
                let h = new AbortController, {signal: a} = i;
                a?.addEventListener("abort", () => h.abort(a.reason), {signal: h.signal});
                let o = {signal: h.signal, options: i, context: s}, n = (s, r = !1) => {
                    let {aborted: a} = h.signal, n = i.ignoreFetchAbort && void 0 !== s;
                    return (i.status && (a && !r ? (i.status.fetchAborted = !0, i.status.fetchError = h.signal.reason, n && (i.status.fetchAbortIgnored = !0)) : i.status.fetchResolved = !0), !a || n || r) ? (this.#c[e] === c && (void 0 === s ? c.__staleWhileFetching ? this.#c[e] = c.__staleWhileFetching : this.delete(t) : (i.status && (i.status.fetchUpdated = !0), this.set(t, s, o.options))), s) : l(h.signal.reason)
                }, l = s => {
                    let {aborted: r} = h.signal, a = r && i.allowStaleOnFetchAbort,
                        o = a || i.allowStaleOnFetchRejection, n = o || i.noDeleteOnFetchRejection;
                    if (this.#c[e] !== c || (n && void 0 !== c.__staleWhileFetching ? a || (this.#c[e] = c.__staleWhileFetching) : this.delete(t)), o) return i.status && void 0 !== c.__staleWhileFetching && (i.status.returnedStale = !0), c.__staleWhileFetching;
                    if (c.__returned === c) throw s
                };
                i.status && (i.status.fetchDispatched = !0);
                let c = new Promise((e, s) => {
                        let a = this.#h?.(t, r, o);
                        a && a instanceof Promise && a.then(t => e(t), s), h.signal.addEventListener("abort", () => {
                            (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (e(), i.allowStaleOnFetchAbort && (e = t => n(t, !0)))
                        })
                    }).then(n, t => (i.status && (i.status.fetchRejected = !0, i.status.fetchError = t), l(t))),
                    d = Object.assign(c, {__abortController: h, __staleWhileFetching: r, __returned: void 0});
                return void 0 === e ? (this.set(t, d, {
                    ...o.options,
                    status: void 0
                }), e = this.#n.get(t)) : this.#c[e] = d, d
            }

            #z(t) {
                return !!this.#S && !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof AbortController
            }

            async fetch(t, e = {}) {
                let {
                    allowStale: i = this.allowStale,
                    updateAgeOnGet: s = this.updateAgeOnGet,
                    noDeleteOnStaleGet: r = this.noDeleteOnStaleGet,
                    ttl: h = this.ttl,
                    noDisposeOnSet: a = this.noDisposeOnSet,
                    size: o = 0,
                    sizeCalculation: n = this.sizeCalculation,
                    noUpdateTTL: l = this.noUpdateTTL,
                    noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
                    allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
                    ignoreFetchAbort: u = this.ignoreFetchAbort,
                    allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
                    context: p,
                    forceRefresh: g = !1,
                    status: v,
                    signal: y
                } = e;
                if (!this.#S) return v && (v.fetch = "get"), this.get(t, {
                    allowStale: i,
                    updateAgeOnGet: s,
                    noDeleteOnStaleGet: r,
                    status: v
                });
                let m = {
                    allowStale: i,
                    updateAgeOnGet: s,
                    noDeleteOnStaleGet: r,
                    ttl: h,
                    noDisposeOnSet: a,
                    size: o,
                    sizeCalculation: n,
                    noUpdateTTL: l,
                    noDeleteOnFetchRejection: c,
                    allowStaleOnFetchRejection: d,
                    allowStaleOnFetchAbort: f,
                    ignoreFetchAbort: u,
                    status: v,
                    signal: y
                }, E = this.#n.get(t);
                if (void 0 === E) {
                    v && (v.fetch = "miss");
                    let e = this.#k(t, E, m, p);
                    return e.__returned = e
                }
                {
                    let e = this.#c[E];
                    if (this.#z(e)) {
                        let t = i && void 0 !== e.__staleWhileFetching;
                        return v && (v.fetch = "inflight", t && (v.returnedStale = !0)), t ? e.__staleWhileFetching : e.__returned = e
                    }
                    let r = this.#T(E);
                    if (!g && !r) return v && (v.fetch = "hit"), this.#L(E), s && this.#D(E), v && this.#C(v, E), e;
                    let h = this.#k(t, E, m, p), a = void 0 !== h.__staleWhileFetching && i;
                    return v && (v.fetch = r ? "stale" : "refresh", a && r && (v.returnedStale = !0)), a ? h.__staleWhileFetching : h.__returned = h
                }
            }

            get(t, e = {}) {
                let {
                    allowStale: i = this.allowStale,
                    updateAgeOnGet: s = this.updateAgeOnGet,
                    noDeleteOnStaleGet: r = this.noDeleteOnStaleGet,
                    status: h
                } = e, a = this.#n.get(t);
                if (void 0 !== a) {
                    let e = this.#c[a], o = this.#z(e);
                    return (h && this.#C(h, a), this.#T(a)) ? (h && (h.get = "stale"), o) ? (h && i && void 0 !== e.__staleWhileFetching && (h.returnedStale = !0), i ? e.__staleWhileFetching : void 0) : (r || this.delete(t), h && i && (h.returnedStale = !0), i ? e : void 0) : (h && (h.get = "hit"), o) ? e.__staleWhileFetching : (this.#L(a), s && this.#D(a), e)
                }
                h && (h.get = "miss")
            }

            #W(t, e) {
                this.#u[e] = t, this.#d[t] = e
            }

            #L(t) {
                t !== this.#p && (t === this.#f ? this.#f = this.#d[t] : this.#W(this.#u[t], this.#d[t]), this.#W(this.#p, t), this.#p = t)
            }

            delete(t) {
                let e = !1;
                if (0 !== this.#a) {
                    let i = this.#n.get(t);
                    if (void 0 !== i) {
                        if (e = !0, 1 === this.#a) this.clear(); else {
                            this.#N(i);
                            let e = this.#c[i];
                            this.#z(e) ? e.__abortController.abort(Error("deleted")) : (this.#w || this.#_) && (this.#w && this.#s?.(e, t, "delete"), this.#_ && this.#v?.push([e, t, "delete"])), this.#n.delete(t), this.#l[i] = void 0, this.#c[i] = void 0, i === this.#p ? this.#p = this.#u[i] : i === this.#f ? this.#f = this.#d[i] : (this.#d[this.#u[i]] = this.#d[i], this.#u[this.#d[i]] = this.#u[i]), this.#a--, this.#g.push(i)
                        }
                    }
                }
                if (this.#_ && this.#v?.length) {
                    let t;
                    let e = this.#v;
                    for (; t = e?.shift();) this.#r?.(...t)
                }
                return e
            }

            clear() {
                for (let t of this.#F({allowStale: !0})) {
                    let e = this.#c[t];
                    if (this.#z(e)) e.__abortController.abort(Error("deleted")); else {
                        let i = this.#l[t];
                        this.#w && this.#s?.(e, i, "delete"), this.#_ && this.#v?.push([e, i, "delete"])
                    }
                }
                if (this.#n.clear(), this.#c.fill(void 0), this.#l.fill(void 0), this.#E && this.#m && (this.#E.fill(0), this.#m.fill(0)), this.#y && this.#y.fill(0), this.#f = 0, this.#p = 0, this.#g.length = 0, this.#o = 0, this.#a = 0, this.#_ && this.#v) {
                    let t;
                    let e = this.#v;
                    for (; t = e?.shift();) this.#r?.(...t)
                }
            }
        }

        e.LRUCache = u, e.default = u
    }
}]);