"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[342], {
    93075: function (e, t, n) {
        n.d(t, {
            NI: function () {
                return w
            }, Rz: function () {
                return K
            }, YF: function () {
                return k
            }, aN: function () {
                return T
            }
        });
        var r, l = n(67294), u = n(97145), o = n(71347), c = n(37317), f = n(73935), i = n(1371), s = n(88301);
        let a = {...r || (r = n.t(l, 2))}, m = a.useInsertionEffect || (e => e());

        function g(e) {
            let t = l.useRef(() => {
            });
            return m(() => {
                t.current = e
            }), l.useCallback(function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return null == t.current ? void 0 : t.current(...n)
            }, [])
        }

        var d = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
        let h = !1, v = 0, p = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + v++,
            C = a.useId || function () {
                let [e, t] = l.useState(() => h ? p() : void 0);
                return d(() => {
                    null == e && t(p())
                }, []), l.useEffect(() => {
                    h = !0
                }, []), e
            }, M = l.createContext(null), x = l.createContext(null), y = () => {
                var e;
                return (null == (e = l.useContext(M)) ? void 0 : e.id) || null
            }, R = () => l.useContext(x);

        function k(e) {
            void 0 === e && (e = {});
            let {nodeId: t} = e, n = function (e) {
                    let {open: t = !1, onOpenChange: n, elements: r} = e, u = C(),
                        o = l.useRef({}), [c] = l.useState(() => (function () {
                            let e = new Map;
                            return {
                                emit(t, n) {
                                    var r;
                                    null == (r = e.get(t)) || r.forEach(e => e(n))
                                }, on(t, n) {
                                    e.set(t, [...e.get(t) || [], n])
                                }, off(t, n) {
                                    var r;
                                    e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter(e => e !== n)) || [])
                                }
                            }
                        })()), f = null != y(), [i, s] = l.useState(r.reference), a = g((e, t, r) => {
                            o.current.openEvent = e ? t : void 0, c.emit("openchange", {
                                open: e,
                                event: t,
                                reason: r,
                                nested: f
                            }), null == n || n(e, t, r)
                        }), m = l.useMemo(() => ({setPositionReference: s}), []), d = l.useMemo(() => ({
                            reference: i || r.reference || null,
                            floating: r.floating || null,
                            domReference: r.reference
                        }), [i, r.reference, r.floating]);
                    return l.useMemo(() => ({
                        dataRef: o,
                        open: t,
                        onOpenChange: a,
                        elements: d,
                        events: c,
                        floatingId: u,
                        refs: m
                    }), [t, a, d, c, u, m])
                }({...e, elements: {reference: null, floating: null, ...e.elements}}), r = e.rootContext || n,
                u = r.elements, [o, f] = l.useState(null), [s, a] = l.useState(null),
                m = (null == u ? void 0 : u.reference) || o, h = l.useRef(null), v = R();
            d(() => {
                m && (h.current = m)
            }, [m]);
            let p = (0, i.YF)({...e, elements: {...u, ...s && {reference: s}}}), M = l.useCallback(e => {
                    let t = (0, c.kK)(e) ? {getBoundingClientRect: () => e.getBoundingClientRect(), contextElement: e} : e;
                    a(t), p.refs.setReference(t)
                }, [p.refs]), x = l.useCallback(e => {
                    ((0, c.kK)(e) || null === e) && (h.current = e, f(e)), ((0, c.kK)(p.refs.reference.current) || null === p.refs.reference.current || null !== e && !(0, c.kK)(e)) && p.refs.setReference(e)
                }, [p.refs]), k = l.useMemo(() => ({
                    ...p.refs,
                    setReference: x,
                    setPositionReference: M,
                    domReference: h
                }), [p.refs, x, M]), b = l.useMemo(() => ({...p.elements, domReference: m}), [p.elements, m]),
                S = l.useMemo(() => ({...p, ...r, refs: k, elements: b, nodeId: t}), [p, k, b, t, r]);
            return d(() => {
                r.dataRef.current.floatingContext = S;
                let e = null == v ? void 0 : v.nodesRef.current.find(e => e.id === t);
                e && (e.context = S)
            }), l.useMemo(() => ({...p, context: S, refs: k, elements: b}), [p, k, b, S])
        }

        let b = "active", S = "selected";

        function E(e, t, n) {
            let r = new Map, l = "item" === n, u = e;
            if (l && e) {
                let {[b]: t, [S]: n, ...r} = e;
                u = r
            }
            return {
                ..."floating" === n && {tabIndex: -1}, ...u, ...t.map(t => {
                    let r = t ? t[n] : null;
                    return "function" == typeof r ? e ? r(e) : null : r
                }).concat(e).reduce((e, t) => (t && Object.entries(t).forEach(t => {
                    let [n, u] = t;
                    if (!(l && [b, S].includes(n))) {
                        if (0 === n.indexOf("on")) {
                            if (r.has(n) || r.set(n, []), "function" == typeof u) {
                                var o;
                                null == (o = r.get(n)) || o.push(u), e[n] = function () {
                                    for (var e, t = arguments.length, l = Array(t), u = 0; u < t; u++) l[u] = arguments[u];
                                    return null == (e = r.get(n)) ? void 0 : e.map(e => e(...l)).find(e => void 0 !== e)
                                }
                            }
                        } else e[n] = u
                    }
                }), e), {})
            }
        }

        function w(e) {
            void 0 === e && (e = []);
            let t = e.map(e => null == e ? void 0 : e.reference), n = e.map(e => null == e ? void 0 : e.floating),
                r = e.map(e => null == e ? void 0 : e.item), u = l.useCallback(t => E(t, e, "reference"), t),
                o = l.useCallback(t => E(t, e, "floating"), n), c = l.useCallback(t => E(t, e, "item"), r);
            return l.useMemo(() => ({getReferenceProps: u, getFloatingProps: o, getItemProps: c}), [u, o, c])
        }

        function H(e, t) {
            return {...e, rects: {...e.rects, floating: {...e.rects.floating, height: t}}}
        }

        let T = e => ({
            name: "inner", options: e, async fn(t) {
                let {
                    listRef: n,
                    overflowRef: r,
                    onFallbackChange: l,
                    offset: u = 0,
                    index: c = 0,
                    minItemsVisible: a = 4,
                    referenceOverflowThreshold: m = 0,
                    scrollRef: g,
                    ...d
                } = (0, o.ku)(e, t), {rects: h, elements: {floating: v}} = t, p = n.current[c];
                if (!p) return {};
                let C = {...t, ...await (0, i.cv)(-p.offsetTop - v.clientTop - h.reference.height / 2 - p.offsetHeight / 2 - u).fn(t)},
                    M = (null == g ? void 0 : g.current) || v, x = await (0, s.US)(H(C, M.scrollHeight), d),
                    y = await (0, s.US)(C, {...d, elementContext: "reference"}), R = Math.max(0, x.top), k = C.y + R,
                    b = Math.max(0, M.scrollHeight - R - Math.max(0, x.bottom));
                return M.style.maxHeight = b + "px", M.scrollTop = R, l && (M.offsetHeight < p.offsetHeight * Math.min(a, n.current.length - 1) - 1 || y.top >= -m || y.bottom >= -m ? f.flushSync(() => l(!0)) : f.flushSync(() => l(!1))), r && (r.current = await (0, s.US)(H({
                    ...C,
                    y: k
                }, M.offsetHeight), d)), {y: k}
            }
        });

        function K(e, t) {
            let {open: n, elements: r} = e, {enabled: o = !0, overflowRef: c, scrollRef: i, onChange: s} = t, a = g(s),
                m = l.useRef(!1), d = l.useRef(null), h = l.useRef(null);
            l.useEffect(() => {
                if (!o) return;

                function e(e) {
                    if (e.ctrlKey || !t || null == c.current) return;
                    let n = e.deltaY, r = c.current.top >= -.5, l = c.current.bottom >= -.5,
                        o = t.scrollHeight - t.clientHeight, i = n < 0 ? -1 : 1, s = n < 0 ? "max" : "min";
                    !(t.scrollHeight <= t.clientHeight) && (!r && n > 0 || !l && n < 0 ? (e.preventDefault(), f.flushSync(() => {
                        a(e => e + Math[s](n, o * i))
                    })) : /firefox/i.test((0, u.ij)()) && (t.scrollTop += n))
                }

                let t = (null == i ? void 0 : i.current) || r.floating;
                if (n && t) return t.addEventListener("wheel", e), requestAnimationFrame(() => {
                    d.current = t.scrollTop, null != c.current && (h.current = {...c.current})
                }), () => {
                    d.current = null, h.current = null, t.removeEventListener("wheel", e)
                }
            }, [o, n, r.floating, c, i, a]);
            let v = l.useMemo(() => ({
                onKeyDown() {
                    m.current = !0
                }, onWheel() {
                    m.current = !1
                }, onPointerMove() {
                    m.current = !1
                }, onScroll() {
                    let e = (null == i ? void 0 : i.current) || r.floating;
                    if (c.current && e && m.current) {
                        if (null !== d.current) {
                            let t = e.scrollTop - d.current;
                            (c.current.bottom < -.5 && t < -1 || c.current.top < -.5 && t > 1) && f.flushSync(() => a(e => e + t))
                        }
                        requestAnimationFrame(() => {
                            d.current = e.scrollTop
                        })
                    }
                }
            }), [r.floating, a, c, i]);
            return l.useMemo(() => o ? {floating: v} : {}, [o, v])
        }
    }
}]);