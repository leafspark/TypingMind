"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[865], {
    80050: function (t, e, i) {
        let s;
        i.r(e), i.d(e, {
            AbortException: function () {
                return i1
            }, AnnotationEditorLayer: function () {
                return i2
            }, AnnotationEditorParamsType: function () {
                return i5
            }, AnnotationEditorType: function () {
                return i4
            }, AnnotationEditorUIManager: function () {
                return i3
            }, AnnotationLayer: function () {
                return i6
            }, AnnotationMode: function () {
                return i9
            }, CMapCompressionType: function () {
                return i7
            }, ColorPicker: function () {
                return i8
            }, DOMSVGFactory: function () {
                return st
            }, DrawLayer: function () {
                return se
            }, FeatureTest: function () {
                return si
            }, GlobalWorkerOptions: function () {
                return ss
            }, ImageKind: function () {
                return sr
            }, InvalidPDFException: function () {
                return sn
            }, MissingPDFException: function () {
                return sa
            }, OPS: function () {
                return so
            }, Outliner: function () {
                return sl
            }, PDFDataRangeTransport: function () {
                return sh
            }, PDFDateString: function () {
                return sd
            }, PDFWorker: function () {
                return sc
            }, PasswordResponses: function () {
                return su
            }, PermissionFlag: function () {
                return sp
            }, PixelsPerInch: function () {
                return sg
            }, RenderingCancelledException: function () {
                return sf
            }, TextLayer: function () {
                return sm
            }, UnexpectedResponseException: function () {
                return sv
            }, Util: function () {
                return sb
            }, VerbosityLevel: function () {
                return sA
            }, XfaLayer: function () {
                return sy
            }, build: function () {
                return s_
            }, createValidAbsoluteUrl: function () {
                return sw
            }, fetchData: function () {
                return sx
            }, getDocument: function () {
                return sE
            }, getFilenameFromUrl: function () {
                return sS
            }, getPdfFilenameFromUrl: function () {
                return sC
            }, getXfaPageViewport: function () {
                return sT
            }, isDataScheme: function () {
                return sM
            }, isPdfFile: function () {
                return sR
            }, noContextMenu: function () {
                return sk
            }, normalizeUnicode: function () {
                return sL
            }, renderTextLayer: function () {
                return sI
            }, setLayerDimensions: function () {
                return sP
            }, shadow: function () {
                return sD
            }, updateTextLayer: function () {
                return sF
            }, version: function () {
                return sO
            }
        });
        var r = i(70046), n = i(48764).Buffer, a = {
            9306: (t, e, i) => {
                var s = i(4901), r = i(6823), n = TypeError;
                t.exports = function (t) {
                    if (s(t)) return t;
                    throw new n(r(t) + " is not a function")
                }
            }, 3506: (t, e, i) => {
                var s = i(3925), r = String, n = TypeError;
                t.exports = function (t) {
                    if (s(t)) return t;
                    throw new n("Can't set " + r(t) + " as a prototype")
                }
            }, 7080: (t, e, i) => {
                var s = i(4402).has;
                t.exports = function (t) {
                    return s(t), t
                }
            }, 679: (t, e, i) => {
                var s = i(1625), r = TypeError;
                t.exports = function (t, e) {
                    if (s(e, t)) return t;
                    throw new r("Incorrect invocation")
                }
            }, 8551: (t, e, i) => {
                var s = i(34), r = String, n = TypeError;
                t.exports = function (t) {
                    if (s(t)) return t;
                    throw new n(r(t) + " is not an object")
                }
            }, 7811: t => {
                t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
            }, 7394: (t, e, i) => {
                var s = i(6706), r = i(4576), n = TypeError;
                t.exports = s(ArrayBuffer.prototype, "byteLength", "get") || function (t) {
                    if ("ArrayBuffer" !== r(t)) throw new n("ArrayBuffer expected");
                    return t.byteLength
                }
            }, 3238: (t, e, i) => {
                var s = i(9504), r = i(7394), n = s(ArrayBuffer.prototype.slice);
                t.exports = function (t) {
                    if (0 !== r(t)) return !1;
                    try {
                        return n(t, 0, 0), !1
                    } catch (t) {
                        return !0
                    }
                }
            }, 5636: (t, e, i) => {
                var s = i(4475), r = i(9504), n = i(6706), a = i(7696), o = i(3238), l = i(7394), h = i(4483),
                    d = i(1548), c = s.structuredClone, u = s.ArrayBuffer, p = s.DataView, g = s.TypeError,
                    f = Math.min, m = u.prototype, v = p.prototype, b = r(m.slice), A = n(m, "resizable", "get"),
                    y = n(m, "maxByteLength", "get"), _ = r(v.getInt8), w = r(v.setInt8);
                t.exports = (d || h) && function (t, e, i) {
                    var s, r = l(t), n = void 0 === e ? r : a(e), m = !A || !A(t);
                    if (o(t)) throw new g("ArrayBuffer is detached");
                    if (d && (t = c(t, {transfer: [t]}), r === n && (i || m))) return t;
                    if (r >= n && (!i || m)) s = b(t, 0, n); else {
                        s = new u(n, i && !m && y ? {maxByteLength: y(t)} : void 0);
                        for (var v = new p(t), x = new p(s), E = f(n, r), S = 0; S < E; S++) w(x, S, _(v, S))
                    }
                    return d || h(t), s
                }
            }, 4644: (t, e, i) => {
                var s, r, n, a = i(7811), o = i(3724), l = i(4475), h = i(4901), d = i(34), c = i(9297), u = i(6955),
                    p = i(6823), g = i(6699), f = i(6840), m = i(2106), v = i(1625), b = i(2787), A = i(2967),
                    y = i(8227), _ = i(3392), w = i(1181), x = w.enforce, E = w.get, S = l.Int8Array,
                    C = S && S.prototype, T = l.Uint8ClampedArray, M = T && T.prototype, R = S && b(S), k = C && b(C),
                    L = Object.prototype, I = l.TypeError, P = y("toStringTag"), D = _("TYPED_ARRAY_TAG"),
                    F = "TypedArrayConstructor", O = a && !!A && "Opera" !== u(l.opera), N = !1, B = {
                        Int8Array: 1,
                        Uint8Array: 1,
                        Uint8ClampedArray: 1,
                        Int16Array: 2,
                        Uint16Array: 2,
                        Int32Array: 4,
                        Uint32Array: 4,
                        Float32Array: 4,
                        Float64Array: 8
                    }, H = {BigInt64Array: 8, BigUint64Array: 8}, z = function (t) {
                        var e = b(t);
                        if (d(e)) {
                            var i = E(e);
                            return i && c(i, F) ? i[F] : z(e)
                        }
                    }, j = function (t) {
                        if (!d(t)) return !1;
                        var e = u(t);
                        return c(B, e) || c(H, e)
                    };
                for (s in B) (n = (r = l[s]) && r.prototype) ? x(n)[F] = r : O = !1;
                for (s in H) (n = (r = l[s]) && r.prototype) && (x(n)[F] = r);
                if ((!O || !h(R) || R === Function.prototype) && (R = function () {
                    throw new I("Incorrect invocation")
                }, O)) for (s in B) l[s] && A(l[s], R);
                if ((!O || !k || k === L) && (k = R.prototype, O)) for (s in B) l[s] && A(l[s].prototype, k);
                if (O && b(M) !== k && A(M, k), o && !c(k, P)) for (s in N = !0, m(k, P, {
                    configurable: !0,
                    get: function () {
                        return d(this) ? this[D] : void 0
                    }
                }), B) l[s] && g(l[s], D, s);
                t.exports = {
                    NATIVE_ARRAY_BUFFER_VIEWS: O, TYPED_ARRAY_TAG: N && D, aTypedArray: function (t) {
                        if (j(t)) return t;
                        throw new I("Target is not a typed array")
                    }, aTypedArrayConstructor: function (t) {
                        if (h(t) && (!A || v(R, t))) return t;
                        throw new I(p(t) + " is not a typed array constructor")
                    }, exportTypedArrayMethod: function (t, e, i, s) {
                        if (o) {
                            if (i) for (var r in B) {
                                var n = l[r];
                                if (n && c(n.prototype, t)) try {
                                    delete n.prototype[t]
                                } catch (i) {
                                    try {
                                        n.prototype[t] = e
                                    } catch (t) {
                                    }
                                }
                            }
                            (!k[t] || i) && f(k, t, i ? e : O && C[t] || e, s)
                        }
                    }, exportTypedArrayStaticMethod: function (t, e, i) {
                        var s, r;
                        if (o) {
                            if (A) {
                                if (i) {
                                    for (s in B) if ((r = l[s]) && c(r, t)) try {
                                        delete r[t]
                                    } catch (t) {
                                    }
                                }
                                if (R[t] && !i) return;
                                try {
                                    return f(R, t, i ? e : O && R[t] || e)
                                } catch (t) {
                                }
                            }
                            for (s in B) (r = l[s]) && (!r[t] || i) && f(r, t, e)
                        }
                    }, getTypedArrayConstructor: z, isView: function (t) {
                        if (!d(t)) return !1;
                        var e = u(t);
                        return "DataView" === e || c(B, e) || c(H, e)
                    }, isTypedArray: j, TypedArray: R, TypedArrayPrototype: k
                }
            }, 5370: (t, e, i) => {
                var s = i(6198);
                t.exports = function (t, e, i) {
                    for (var r = 0, n = arguments.length > 2 ? i : s(e), a = new t(n); n > r;) a[r] = e[r++];
                    return a
                }
            }, 9617: (t, e, i) => {
                var s = i(5397), r = i(5610), n = i(6198), a = function (t) {
                    return function (e, i, a) {
                        var o, l = s(e), h = n(l);
                        if (0 === h) return !t && -1;
                        var d = r(a, h);
                        if (t && i != i) {
                            for (; h > d;) if ((o = l[d++]) != o) return !0
                        } else for (; h > d; d++) if ((t || d in l) && l[d] === i) return t || d || 0;
                        return !t && -1
                    }
                };
                t.exports = {includes: a(!0), indexOf: a(!1)}
            }, 4527: (t, e, i) => {
                var s = i(3724), r = i(4376), n = TypeError, a = Object.getOwnPropertyDescriptor,
                    o = s && !function () {
                        if (void 0 !== this) return !0;
                        try {
                            Object.defineProperty([], "length", {writable: !1}).length = 1
                        } catch (t) {
                            return t instanceof TypeError
                        }
                    }();
                t.exports = o ? function (t, e) {
                    if (r(t) && !a(t, "length").writable) throw new n("Cannot set read only .length");
                    return t.length = e
                } : function (t, e) {
                    return t.length = e
                }
            }, 7628: (t, e, i) => {
                var s = i(6198);
                t.exports = function (t, e) {
                    for (var i = s(t), r = new e(i), n = 0; n < i; n++) r[n] = t[i - n - 1];
                    return r
                }
            }, 9928: (t, e, i) => {
                var s = i(6198), r = i(1291), n = RangeError;
                t.exports = function (t, e, i, a) {
                    var o = s(t), l = r(i), h = l < 0 ? o + l : l;
                    if (h >= o || h < 0) throw new n("Incorrect index");
                    for (var d = new e(o), c = 0; c < o; c++) d[c] = c === h ? a : t[c];
                    return d
                }
            }, 6319: (t, e, i) => {
                var s = i(8551), r = i(9539);
                t.exports = function (t, e, i, n) {
                    try {
                        return n ? e(s(i)[0], i[1]) : e(i)
                    } catch (e) {
                        r(t, "throw", e)
                    }
                }
            }, 4576: (t, e, i) => {
                var s = i(9504), r = s({}.toString), n = s("".slice);
                t.exports = function (t) {
                    return n(r(t), 8, -1)
                }
            }, 6955: (t, e, i) => {
                var s = i(2140), r = i(4901), n = i(4576), a = i(8227)("toStringTag"), o = Object,
                    l = "Arguments" === n(function () {
                        return arguments
                    }()), h = function (t, e) {
                        try {
                            return t[e]
                        } catch (t) {
                        }
                    };
                t.exports = s ? n : function (t) {
                    var e, i, s;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = h(e = o(t), a)) ? i : l ? n(e) : "Object" === (s = n(e)) && r(e.callee) ? "Arguments" : s
                }
            }, 7740: (t, e, i) => {
                var s = i(9297), r = i(5031), n = i(7347), a = i(4913);
                t.exports = function (t, e, i) {
                    for (var o = r(e), l = a.f, h = n.f, d = 0; d < o.length; d++) {
                        var c = o[d];
                        s(t, c) || i && s(i, c) || l(t, c, h(e, c))
                    }
                }
            }, 2211: (t, e, i) => {
                var s = i(9039);
                t.exports = !s(function () {
                    function t() {
                    }

                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                })
            }, 2529: t => {
                t.exports = function (t, e) {
                    return {value: t, done: e}
                }
            }, 6699: (t, e, i) => {
                var s = i(3724), r = i(4913), n = i(6980);
                t.exports = s ? function (t, e, i) {
                    return r.f(t, e, n(1, i))
                } : function (t, e, i) {
                    return t[e] = i, t
                }
            }, 6980: t => {
                t.exports = function (t, e) {
                    return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
                }
            }, 4659: (t, e, i) => {
                var s = i(3724), r = i(4913), n = i(6980);
                t.exports = function (t, e, i) {
                    s ? r.f(t, e, n(0, i)) : t[e] = i
                }
            }, 2106: (t, e, i) => {
                var s = i(283), r = i(4913);
                t.exports = function (t, e, i) {
                    return i.get && s(i.get, e, {getter: !0}), i.set && s(i.set, e, {setter: !0}), r.f(t, e, i)
                }
            }, 6840: (t, e, i) => {
                var s = i(4901), r = i(4913), n = i(283), a = i(9433);
                t.exports = function (t, e, i, o) {
                    o || (o = {});
                    var l = o.enumerable, h = void 0 !== o.name ? o.name : e;
                    if (s(i) && n(i, h, o), o.global) l ? t[e] = i : a(e, i); else {
                        try {
                            o.unsafe ? t[e] && (l = !0) : delete t[e]
                        } catch (t) {
                        }
                        l ? t[e] = i : r.f(t, e, {
                            value: i,
                            enumerable: !1,
                            configurable: !o.nonConfigurable,
                            writable: !o.nonWritable
                        })
                    }
                    return t
                }
            }, 6279: (t, e, i) => {
                var s = i(6840);
                t.exports = function (t, e, i) {
                    for (var r in e) s(t, r, e[r], i);
                    return t
                }
            }, 9433: (t, e, i) => {
                var s = i(4475), r = Object.defineProperty;
                t.exports = function (t, e) {
                    try {
                        r(s, t, {value: e, configurable: !0, writable: !0})
                    } catch (i) {
                        s[t] = e
                    }
                    return e
                }
            }, 3724: (t, e, i) => {
                var s = i(9039);
                t.exports = !s(function () {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function () {
                            return 7
                        }
                    })[1]
                })
            }, 4483: (t, e, i) => {
                var s, r, n, a, o = i(4475), l = i(9714), h = i(1548), d = o.structuredClone, c = o.ArrayBuffer,
                    u = o.MessageChannel, p = !1;
                if (h) p = function (t) {
                    d(t, {transfer: [t]})
                }; else if (c) try {
                    !u && (s = l("worker_threads")) && (u = s.MessageChannel), u && (r = new u, n = new c(2), a = function (t) {
                        r.port1.postMessage(null, [t])
                    }, 2 === n.byteLength && (a(n), 0 === n.byteLength && (p = a)))
                } catch (t) {
                }
                t.exports = p
            }, 4055: (t, e, i) => {
                var s = i(4475), r = i(34), n = s.document, a = r(n) && r(n.createElement);
                t.exports = function (t) {
                    return a ? n.createElement(t) : {}
                }
            }, 6837: t => {
                var e = TypeError;
                t.exports = function (t) {
                    if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
                    return t
                }
            }, 5002: t => {
                t.exports = {
                    IndexSizeError: {s: "INDEX_SIZE_ERR", c: 1, m: 1},
                    DOMStringSizeError: {s: "DOMSTRING_SIZE_ERR", c: 2, m: 0},
                    HierarchyRequestError: {s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1},
                    WrongDocumentError: {s: "WRONG_DOCUMENT_ERR", c: 4, m: 1},
                    InvalidCharacterError: {s: "INVALID_CHARACTER_ERR", c: 5, m: 1},
                    NoDataAllowedError: {s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0},
                    NoModificationAllowedError: {s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1},
                    NotFoundError: {s: "NOT_FOUND_ERR", c: 8, m: 1},
                    NotSupportedError: {s: "NOT_SUPPORTED_ERR", c: 9, m: 1},
                    InUseAttributeError: {s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1},
                    InvalidStateError: {s: "INVALID_STATE_ERR", c: 11, m: 1},
                    SyntaxError: {s: "SYNTAX_ERR", c: 12, m: 1},
                    InvalidModificationError: {s: "INVALID_MODIFICATION_ERR", c: 13, m: 1},
                    NamespaceError: {s: "NAMESPACE_ERR", c: 14, m: 1},
                    InvalidAccessError: {s: "INVALID_ACCESS_ERR", c: 15, m: 1},
                    ValidationError: {s: "VALIDATION_ERR", c: 16, m: 0},
                    TypeMismatchError: {s: "TYPE_MISMATCH_ERR", c: 17, m: 1},
                    SecurityError: {s: "SECURITY_ERR", c: 18, m: 1},
                    NetworkError: {s: "NETWORK_ERR", c: 19, m: 1},
                    AbortError: {s: "ABORT_ERR", c: 20, m: 1},
                    URLMismatchError: {s: "URL_MISMATCH_ERR", c: 21, m: 1},
                    QuotaExceededError: {s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1},
                    TimeoutError: {s: "TIMEOUT_ERR", c: 23, m: 1},
                    InvalidNodeTypeError: {s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1},
                    DataCloneError: {s: "DATA_CLONE_ERR", c: 25, m: 1}
                }
            }, 7290: (t, e, i) => {
                var s = i(516), r = i(9088);
                t.exports = !s && !r && "object" == typeof window && "object" == typeof document
            }, 516: t => {
                t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
            }, 9088: (t, e, i) => {
                var s = i(4475), r = i(4576);
                t.exports = "process" === r(s.process)
            }, 9392: t => {
                t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
            }, 7388: (t, e, i) => {
                var s, r, n = i(4475), a = i(9392), o = n.process, l = n.Deno, h = o && o.versions || l && l.version,
                    d = h && h.v8;
                d && (r = (s = d.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !r && a && (!(s = a.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = a.match(/Chrome\/(\d+)/)) && (r = +s[1]), t.exports = r
            }, 8727: t => {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            }, 6193: (t, e, i) => {
                var s = i(9504), r = Error, n = s("".replace), a = String(new r("zxcasd").stack),
                    o = /\n\s*at [^:]*:[^\n]*/, l = o.test(a);
                t.exports = function (t, e) {
                    if (l && "string" == typeof t && !r.prepareStackTrace) for (; e--;) t = n(t, o, "");
                    return t
                }
            }, 6518: (t, e, i) => {
                var s = i(4475), r = i(7347).f, n = i(6699), a = i(6840), o = i(9433), l = i(7740), h = i(2796);
                t.exports = function (t, e) {
                    var i, d, c, u, p, g = t.target, f = t.global, m = t.stat;
                    if (i = f ? s : m ? s[g] || o(g, {}) : s[g] && s[g].prototype) for (d in e) {
                        if (u = e[d], c = t.dontCallGetSet ? (p = r(i, d)) && p.value : i[d], !h(f ? d : g + (m ? "." : "#") + d, t.forced) && void 0 !== c) {
                            if (typeof u == typeof c) continue;
                            l(u, c)
                        }
                        (t.sham || c && c.sham) && n(u, "sham", !0), a(i, d, u, t)
                    }
                }
            }, 9039: t => {
                t.exports = function (t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            }, 6080: (t, e, i) => {
                var s = i(7476), r = i(9306), n = i(616), a = s(s.bind);
                t.exports = function (t, e) {
                    return r(t), void 0 === e ? t : n ? a(t, e) : function () {
                        return t.apply(e, arguments)
                    }
                }
            }, 616: (t, e, i) => {
                var s = i(9039);
                t.exports = !s(function () {
                    var t = (function () {
                    }).bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                })
            }, 9565: (t, e, i) => {
                var s = i(616), r = Function.prototype.call;
                t.exports = s ? r.bind(r) : function () {
                    return r.apply(r, arguments)
                }
            }, 350: (t, e, i) => {
                var s = i(3724), r = i(9297), n = Function.prototype, a = s && Object.getOwnPropertyDescriptor,
                    o = r(n, "name"), l = o && (!s || s && a(n, "name").configurable);
                t.exports = {
                    EXISTS: o, PROPER: o && "something" === (function () {
                    }).name, CONFIGURABLE: l
                }
            }, 6706: (t, e, i) => {
                var s = i(9504), r = i(9306);
                t.exports = function (t, e, i) {
                    try {
                        return s(r(Object.getOwnPropertyDescriptor(t, e)[i]))
                    } catch (t) {
                    }
                }
            }, 7476: (t, e, i) => {
                var s = i(4576), r = i(9504);
                t.exports = function (t) {
                    if ("Function" === s(t)) return r(t)
                }
            }, 9504: (t, e, i) => {
                var s = i(616), r = Function.prototype, n = r.call, a = s && r.bind.bind(n, n);
                t.exports = s ? a : function (t) {
                    return function () {
                        return n.apply(t, arguments)
                    }
                }
            }, 7751: (t, e, i) => {
                var s = i(4475), r = i(4901);
                t.exports = function (t, e) {
                    var i;
                    return arguments.length < 2 ? r(i = s[t]) ? i : void 0 : s[t] && s[t][e]
                }
            }, 1767: t => {
                t.exports = function (t) {
                    return {iterator: t, next: t.next, done: !1}
                }
            }, 8646: (t, e, i) => {
                var s = i(9565), r = i(8551), n = i(1767), a = i(851);
                t.exports = function (t, e) {
                    e && "string" == typeof t || r(t);
                    var i = a(t);
                    return n(r(void 0 !== i ? s(i, t) : t))
                }
            }, 851: (t, e, i) => {
                var s = i(6955), r = i(5966), n = i(4117), a = i(6269), o = i(8227)("iterator");
                t.exports = function (t) {
                    if (!n(t)) return r(t, o) || r(t, "@@iterator") || a[s(t)]
                }
            }, 81: (t, e, i) => {
                var s = i(9565), r = i(9306), n = i(8551), a = i(6823), o = i(851), l = TypeError;
                t.exports = function (t, e) {
                    var i = arguments.length < 2 ? o(t) : e;
                    if (r(i)) return n(s(i, t));
                    throw new l(a(t) + " is not iterable")
                }
            }, 5966: (t, e, i) => {
                var s = i(9306), r = i(4117);
                t.exports = function (t, e) {
                    var i = t[e];
                    return r(i) ? void 0 : s(i)
                }
            }, 3789: (t, e, i) => {
                var s = i(9306), r = i(8551), n = i(9565), a = i(1291), o = i(1767), l = "Invalid size", h = RangeError,
                    d = TypeError, c = Math.max, u = function (t, e) {
                        this.set = t, this.size = c(e, 0), this.has = s(t.has), this.keys = s(t.keys)
                    };
                u.prototype = {
                    getIterator: function () {
                        return o(r(n(this.keys, this.set)))
                    }, includes: function (t) {
                        return n(this.has, this.set, t)
                    }
                }, t.exports = function (t) {
                    r(t);
                    var e = +t.size;
                    if (e != e) throw new d(l);
                    var i = a(e);
                    if (i < 0) throw new h(l);
                    return new u(t, i)
                }
            }, 4475: function (t) {
                var e = function (t) {
                    return t && t.Math === Math && t
                };
                t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof global && global) || e("object" == typeof this && this) || function () {
                    return this
                }() || Function("return this")()
            }, 9297: (t, e, i) => {
                var s = i(9504), r = i(8981), n = s({}.hasOwnProperty);
                t.exports = Object.hasOwn || function (t, e) {
                    return n(r(t), e)
                }
            }, 421: t => {
                t.exports = {}
            }, 397: (t, e, i) => {
                var s = i(7751);
                t.exports = s("document", "documentElement")
            }, 5917: (t, e, i) => {
                var s = i(3724), r = i(9039), n = i(4055);
                t.exports = !s && !r(function () {
                    return 7 !== Object.defineProperty(n("div"), "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                })
            }, 7055: (t, e, i) => {
                var s = i(9504), r = i(9039), n = i(4576), a = Object, o = s("".split);
                t.exports = r(function () {
                    return !a("z").propertyIsEnumerable(0)
                }) ? function (t) {
                    return "String" === n(t) ? o(t, "") : a(t)
                } : a
            }, 3167: (t, e, i) => {
                var s = i(4901), r = i(34), n = i(2967);
                t.exports = function (t, e, i) {
                    var a, o;
                    return n && s(a = e.constructor) && a !== i && r(o = a.prototype) && o !== i.prototype && n(t, o), t
                }
            }, 3706: (t, e, i) => {
                var s = i(9504), r = i(4901), n = i(7629), a = s(Function.toString);
                r(n.inspectSource) || (n.inspectSource = function (t) {
                    return a(t)
                }), t.exports = n.inspectSource
            }, 1181: (t, e, i) => {
                var s, r, n, a = i(8622), o = i(4475), l = i(34), h = i(6699), d = i(9297), c = i(7629), u = i(6119),
                    p = i(421), g = "Object already initialized", f = o.TypeError, m = o.WeakMap;
                if (a || c.state) {
                    var v = c.state || (c.state = new m);
                    v.get = v.get, v.has = v.has, v.set = v.set, s = function (t, e) {
                        if (v.has(t)) throw new f(g);
                        return e.facade = t, v.set(t, e), e
                    }, r = function (t) {
                        return v.get(t) || {}
                    }, n = function (t) {
                        return v.has(t)
                    }
                } else {
                    var b = u("state");
                    p[b] = !0, s = function (t, e) {
                        if (d(t, b)) throw new f(g);
                        return e.facade = t, h(t, b, e), e
                    }, r = function (t) {
                        return d(t, b) ? t[b] : {}
                    }, n = function (t) {
                        return d(t, b)
                    }
                }
                t.exports = {
                    set: s, get: r, has: n, enforce: function (t) {
                        return n(t) ? r(t) : s(t, {})
                    }, getterFor: function (t) {
                        return function (e) {
                            var i;
                            if (!l(e) || (i = r(e)).type !== t) throw new f("Incompatible receiver, " + t + " required");
                            return i
                        }
                    }
                }
            }, 4209: (t, e, i) => {
                var s = i(8227), r = i(6269), n = s("iterator"), a = Array.prototype;
                t.exports = function (t) {
                    return void 0 !== t && (r.Array === t || a[n] === t)
                }
            }, 4376: (t, e, i) => {
                var s = i(4576);
                t.exports = Array.isArray || function (t) {
                    return "Array" === s(t)
                }
            }, 1108: (t, e, i) => {
                var s = i(6955);
                t.exports = function (t) {
                    var e = s(t);
                    return "BigInt64Array" === e || "BigUint64Array" === e
                }
            }, 4901: t => {
                var e = "object" == typeof document && document.all;
                t.exports = void 0 === e && void 0 !== e ? function (t) {
                    return "function" == typeof t || t === e
                } : function (t) {
                    return "function" == typeof t
                }
            }, 2796: (t, e, i) => {
                var s = i(9039), r = i(4901), n = /#|\.prototype\./, a = function (t, e) {
                    var i = l[o(t)];
                    return i === d || i !== h && (r(e) ? s(e) : !!e)
                }, o = a.normalize = function (t) {
                    return String(t).replace(n, ".").toLowerCase()
                }, l = a.data = {}, h = a.NATIVE = "N", d = a.POLYFILL = "P";
                t.exports = a
            }, 4117: t => {
                t.exports = function (t) {
                    return null == t
                }
            }, 34: (t, e, i) => {
                var s = i(4901);
                t.exports = function (t) {
                    return "object" == typeof t ? null !== t : s(t)
                }
            }, 3925: (t, e, i) => {
                var s = i(34);
                t.exports = function (t) {
                    return s(t) || null === t
                }
            }, 6395: t => {
                t.exports = !1
            }, 757: (t, e, i) => {
                var s = i(7751), r = i(4901), n = i(1625), a = i(7040), o = Object;
                t.exports = a ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    var e = s("Symbol");
                    return r(e) && n(e.prototype, o(t))
                }
            }, 507: (t, e, i) => {
                var s = i(9565);
                t.exports = function (t, e, i) {
                    for (var r, n, a = i ? t : t.iterator, o = t.next; !(r = s(o, a)).done;) if (void 0 !== (n = e(r.value))) return n
                }
            }, 2652: (t, e, i) => {
                var s = i(6080), r = i(9565), n = i(8551), a = i(6823), o = i(4209), l = i(6198), h = i(1625),
                    d = i(81), c = i(851), u = i(9539), p = TypeError, g = function (t, e) {
                        this.stopped = t, this.result = e
                    }, f = g.prototype;
                t.exports = function (t, e, i) {
                    var m, v, b, A, y, _, w, x = i && i.that, E = !!(i && i.AS_ENTRIES), S = !!(i && i.IS_RECORD),
                        C = !!(i && i.IS_ITERATOR), T = !!(i && i.INTERRUPTED), M = s(e, x), R = function (t) {
                            return m && u(m, "normal", t), new g(!0, t)
                        }, k = function (t) {
                            return E ? (n(t), T ? M(t[0], t[1], R) : M(t[0], t[1])) : T ? M(t, R) : M(t)
                        };
                    if (S) m = t.iterator; else if (C) m = t; else {
                        if (!(v = c(t))) throw new p(a(t) + " is not iterable");
                        if (o(v)) {
                            for (b = 0, A = l(t); A > b; b++) if ((y = k(t[b])) && h(f, y)) return y;
                            return new g(!1)
                        }
                        m = d(t, v)
                    }
                    for (_ = S ? t.next : m.next; !(w = r(_, m)).done;) {
                        try {
                            y = k(w.value)
                        } catch (t) {
                            u(m, "throw", t)
                        }
                        if ("object" == typeof y && y && h(f, y)) return y
                    }
                    return new g(!1)
                }
            }, 9539: (t, e, i) => {
                var s = i(9565), r = i(8551), n = i(5966);
                t.exports = function (t, e, i) {
                    var a, o;
                    r(t);
                    try {
                        if (!(a = n(t, "return"))) {
                            if ("throw" === e) throw i;
                            return i
                        }
                        a = s(a, t)
                    } catch (t) {
                        o = !0, a = t
                    }
                    if ("throw" === e) throw i;
                    if (o) throw a;
                    return r(a), i
                }
            }, 9462: (t, e, i) => {
                var s = i(9565), r = i(2360), n = i(6699), a = i(6279), o = i(8227), l = i(1181), h = i(5966),
                    d = i(7657).IteratorPrototype, c = i(2529), u = i(9539), p = o("toStringTag"), g = "IteratorHelper",
                    f = "WrapForValidIterator", m = l.set, v = function (t) {
                        var e = l.getterFor(t ? f : g);
                        return a(r(d), {
                            next: function () {
                                var i = e(this);
                                if (t) return i.nextHandler();
                                try {
                                    var s = i.done ? void 0 : i.nextHandler();
                                    return c(s, i.done)
                                } catch (t) {
                                    throw i.done = !0, t
                                }
                            }, return: function () {
                                var i = e(this), r = i.iterator;
                                if (i.done = !0, t) {
                                    var n = h(r, "return");
                                    return n ? s(n, r) : c(void 0, !0)
                                }
                                if (i.inner) try {
                                    u(i.inner.iterator, "normal")
                                } catch (t) {
                                    return u(r, "throw", t)
                                }
                                return u(r, "normal"), c(void 0, !0)
                            }
                        })
                    }, b = v(!0), A = v(!1);
                n(A, p, "Iterator Helper"), t.exports = function (t, e) {
                    var i = function (i, s) {
                        s ? (s.iterator = i.iterator, s.next = i.next) : s = i, s.type = e ? f : g, s.nextHandler = t, s.counter = 0, s.done = !1, m(this, s)
                    };
                    return i.prototype = e ? b : A, i
                }
            }, 713: (t, e, i) => {
                var s = i(9565), r = i(9306), n = i(8551), a = i(1767), o = i(9462), l = i(6319), h = o(function () {
                    var t = this.iterator, e = n(s(this.next, t));
                    if (!(this.done = !!e.done)) return l(t, this.mapper, [e.value, this.counter++], !0)
                });
                t.exports = function (t) {
                    return n(this), r(t), new h(a(this), {mapper: t})
                }
            }, 7657: (t, e, i) => {
                var s, r, n, a = i(9039), o = i(4901), l = i(34), h = i(2360), d = i(2787), c = i(6840), u = i(8227),
                    p = i(6395), g = u("iterator"), f = !1;
                [].keys && ("next" in (n = [].keys()) ? (r = d(d(n))) !== Object.prototype && (s = r) : f = !0), !l(s) || a(function () {
                    var t = {};
                    return s[g].call(t) !== t
                }) ? s = {} : p && (s = h(s)), o(s[g]) || c(s, g, function () {
                    return this
                }), t.exports = {IteratorPrototype: s, BUGGY_SAFARI_ITERATORS: f}
            }, 6269: t => {
                t.exports = {}
            }, 6198: (t, e, i) => {
                var s = i(8014);
                t.exports = function (t) {
                    return s(t.length)
                }
            }, 283: (t, e, i) => {
                var s = i(9504), r = i(9039), n = i(4901), a = i(9297), o = i(3724), l = i(350).CONFIGURABLE,
                    h = i(3706), d = i(1181), c = d.enforce, u = d.get, p = String, g = Object.defineProperty,
                    f = s("".slice), m = s("".replace), v = s([].join), b = o && !r(function () {
                        return 8 !== g(function () {
                        }, "length", {value: 8}).length
                    }), A = String(String).split("String"), y = t.exports = function (t, e, i) {
                        "Symbol(" === f(p(e), 0, 7) && (e = "[" + m(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i && i.getter && (e = "get " + e), i && i.setter && (e = "set " + e), (!a(t, "name") || l && t.name !== e) && (o ? g(t, "name", {
                            value: e,
                            configurable: !0
                        }) : t.name = e), b && i && a(i, "arity") && t.length !== i.arity && g(t, "length", {value: i.arity});
                        try {
                            i && a(i, "constructor") && i.constructor ? o && g(t, "prototype", {writable: !1}) : t.prototype && (t.prototype = void 0)
                        } catch (t) {
                        }
                        var s = c(t);
                        return a(s, "source") || (s.source = v(A, "string" == typeof e ? e : "")), t
                    };
                Function.prototype.toString = y(function () {
                    return n(this) && u(this).source || h(this)
                }, "toString")
            }, 741: t => {
                var e = Math.ceil, i = Math.floor;
                t.exports = Math.trunc || function (t) {
                    var s = +t;
                    return (s > 0 ? i : e)(s)
                }
            }, 6043: (t, e, i) => {
                var s = i(9306), r = TypeError, n = function (t) {
                    var e, i;
                    this.promise = new t(function (t, s) {
                        if (void 0 !== e || void 0 !== i) throw new r("Bad Promise constructor");
                        e = t, i = s
                    }), this.resolve = s(e), this.reject = s(i)
                };
                t.exports.f = function (t) {
                    return new n(t)
                }
            }, 2603: (t, e, i) => {
                var s = i(655);
                t.exports = function (t, e) {
                    return void 0 === t ? arguments.length < 2 ? "" : e : s(t)
                }
            }, 4149: t => {
                var e = RangeError;
                t.exports = function (t) {
                    if (t == t) return t;
                    throw new e("NaN is not allowed")
                }
            }, 2360: (t, e, i) => {
                var s, r = i(8551), n = i(6801), a = i(8727), o = i(421), l = i(397), h = i(4055), d = i(6119),
                    c = "prototype", u = "script", p = d("IE_PROTO"), g = function () {
                    }, f = function (t) {
                        return "<" + u + ">" + t + "</" + u + ">"
                    }, m = function (t) {
                        t.write(f("")), t.close();
                        var e = t.parentWindow.Object;
                        return t = null, e
                    }, v = function () {
                        var t, e = h("iframe");
                        return e.style.display = "none", l.appendChild(e), e.src = String("java" + u + ":"), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F
                    }, b = function () {
                        try {
                            s = new ActiveXObject("htmlfile")
                        } catch (t) {
                        }
                        b = "undefined" != typeof document ? document.domain && s ? m(s) : v() : m(s);
                        for (var t = a.length; t--;) delete b[c][a[t]];
                        return b()
                    };
                o[p] = !0, t.exports = Object.create || function (t, e) {
                    var i;
                    return null !== t ? (g[c] = r(t), i = new g, g[c] = null, i[p] = t) : i = b(), void 0 === e ? i : n.f(i, e)
                }
            }, 6801: (t, e, i) => {
                var s = i(3724), r = i(8686), n = i(4913), a = i(8551), o = i(5397), l = i(1072);
                e.f = s && !r ? Object.defineProperties : function (t, e) {
                    a(t);
                    for (var i, s = o(e), r = l(e), h = r.length, d = 0; h > d;) n.f(t, i = r[d++], s[i]);
                    return t
                }
            }, 4913: (t, e, i) => {
                var s = i(3724), r = i(5917), n = i(8686), a = i(8551), o = i(6969), l = TypeError,
                    h = Object.defineProperty, d = Object.getOwnPropertyDescriptor, c = "enumerable",
                    u = "configurable", p = "writable";
                e.f = s ? n ? function (t, e, i) {
                    if (a(t), e = o(e), a(i), "function" == typeof t && "prototype" === e && "value" in i && p in i && !i[p]) {
                        var s = d(t, e);
                        s && s[p] && (t[e] = i.value, i = {
                            configurable: u in i ? i[u] : s[u],
                            enumerable: c in i ? i[c] : s[c],
                            writable: !1
                        })
                    }
                    return h(t, e, i)
                } : h : function (t, e, i) {
                    if (a(t), e = o(e), a(i), r) try {
                        return h(t, e, i)
                    } catch (t) {
                    }
                    if ("get" in i || "set" in i) throw new l("Accessors not supported");
                    return "value" in i && (t[e] = i.value), t
                }
            }, 7347: (t, e, i) => {
                var s = i(3724), r = i(9565), n = i(8773), a = i(6980), o = i(5397), l = i(6969), h = i(9297),
                    d = i(5917), c = Object.getOwnPropertyDescriptor;
                e.f = s ? c : function (t, e) {
                    if (t = o(t), e = l(e), d) try {
                        return c(t, e)
                    } catch (t) {
                    }
                    if (h(t, e)) return a(!r(n.f, t, e), t[e])
                }
            }, 8480: (t, e, i) => {
                var s = i(1828), r = i(8727).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function (t) {
                    return s(t, r)
                }
            }, 3717: (t, e) => {
                e.f = Object.getOwnPropertySymbols
            }, 2787: (t, e, i) => {
                var s = i(9297), r = i(4901), n = i(8981), a = i(6119), o = i(2211), l = a("IE_PROTO"), h = Object,
                    d = h.prototype;
                t.exports = o ? h.getPrototypeOf : function (t) {
                    var e = n(t);
                    if (s(e, l)) return e[l];
                    var i = e.constructor;
                    return r(i) && e instanceof i ? i.prototype : e instanceof h ? d : null
                }
            }, 1625: (t, e, i) => {
                var s = i(9504);
                t.exports = s({}.isPrototypeOf)
            }, 1828: (t, e, i) => {
                var s = i(9504), r = i(9297), n = i(5397), a = i(9617).indexOf, o = i(421), l = s([].push);
                t.exports = function (t, e) {
                    var i, s = n(t), h = 0, d = [];
                    for (i in s) !r(o, i) && r(s, i) && l(d, i);
                    for (; e.length > h;) r(s, i = e[h++]) && (~a(d, i) || l(d, i));
                    return d
                }
            }, 1072: (t, e, i) => {
                var s = i(1828), r = i(8727);
                t.exports = Object.keys || function (t) {
                    return s(t, r)
                }
            }, 8773: (t, e) => {
                var i = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, r = s && !i.call({1: 2}, 1);
                e.f = r ? function (t) {
                    var e = s(this, t);
                    return !!e && e.enumerable
                } : i
            }, 2967: (t, e, i) => {
                var s = i(6706), r = i(34), n = i(7750), a = i(3506);
                t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                    var t, e = !1, i = {};
                    try {
                        (t = s(Object.prototype, "__proto__", "set"))(i, []), e = i instanceof Array
                    } catch (t) {
                    }
                    return function (i, s) {
                        return n(i), a(s), r(i) && (e ? t(i, s) : i.__proto__ = s), i
                    }
                }() : void 0)
            }, 4270: (t, e, i) => {
                var s = i(9565), r = i(4901), n = i(34), a = TypeError;
                t.exports = function (t, e) {
                    var i, o;
                    if ("string" === e && r(i = t.toString) && !n(o = s(i, t)) || r(i = t.valueOf) && !n(o = s(i, t)) || "string" !== e && r(i = t.toString) && !n(o = s(i, t))) return o;
                    throw new a("Can't convert object to primitive value")
                }
            }, 5031: (t, e, i) => {
                var s = i(7751), r = i(9504), n = i(8480), a = i(3717), o = i(8551), l = r([].concat);
                t.exports = s("Reflect", "ownKeys") || function (t) {
                    var e = n.f(o(t)), i = a.f;
                    return i ? l(e, i(t)) : e
                }
            }, 8235: (t, e, i) => {
                var s = i(9504), r = i(9297), n = SyntaxError, a = parseInt, o = String.fromCharCode, l = s("".charAt),
                    h = s("".slice), d = s(/./.exec), c = {
                        '\\"': '"',
                        "\\\\": "\\",
                        "\\/": "/",
                        "\\b": "\b",
                        "\\f": "\f",
                        "\\n": "\n",
                        "\\r": "\r",
                        "\\t": "	"
                    }, u = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/;
                t.exports = function (t, e) {
                    for (var i = !0, s = ""; e < t.length;) {
                        var g = l(t, e);
                        if ("\\" === g) {
                            var f = h(t, e, e + 2);
                            if (r(c, f)) s += c[f], e += 2; else if ("\\u" === f) {
                                var m = h(t, e += 2, e + 4);
                                if (!d(u, m)) throw new n("Bad Unicode escape at: " + e);
                                s += o(a(m, 16)), e += 4
                            } else throw new n('Unknown escape sequence: "' + f + '"')
                        } else if ('"' === g) {
                            i = !1, e++;
                            break
                        } else {
                            if (d(p, g)) throw new n("Bad control character in string literal at: " + e);
                            s += g, e++
                        }
                    }
                    if (i) throw new n("Unterminated string at: " + e);
                    return {value: s, end: e}
                }
            }, 7750: (t, e, i) => {
                var s = i(4117), r = TypeError;
                t.exports = function (t) {
                    if (s(t)) throw new r("Can't call method on " + t);
                    return t
                }
            }, 9286: (t, e, i) => {
                var s = i(4402), r = i(8469), n = s.Set, a = s.add;
                t.exports = function (t) {
                    var e = new n;
                    return r(t, function (t) {
                        a(e, t)
                    }), e
                }
            }, 3440: (t, e, i) => {
                var s = i(7080), r = i(4402), n = i(9286), a = i(5170), o = i(3789), l = i(8469), h = i(507), d = r.has,
                    c = r.remove;
                t.exports = function (t) {
                    var e = s(this), i = o(t), r = n(e);
                    return a(e) <= i.size ? l(e, function (t) {
                        i.includes(t) && c(r, t)
                    }) : h(i.getIterator(), function (t) {
                        d(e, t) && c(r, t)
                    }), r
                }
            }, 4402: (t, e, i) => {
                var s = i(9504), r = Set.prototype;
                t.exports = {Set: Set, add: s(r.add), has: s(r.has), remove: s(r.delete), proto: r}
            }, 8750: (t, e, i) => {
                var s = i(7080), r = i(4402), n = i(5170), a = i(3789), o = i(8469), l = i(507), h = r.Set, d = r.add,
                    c = r.has;
                t.exports = function (t) {
                    var e = s(this), i = a(t), r = new h;
                    return n(e) > i.size ? l(i.getIterator(), function (t) {
                        c(e, t) && d(r, t)
                    }) : o(e, function (t) {
                        i.includes(t) && d(r, t)
                    }), r
                }
            }, 4449: (t, e, i) => {
                var s = i(7080), r = i(4402).has, n = i(5170), a = i(3789), o = i(8469), l = i(507), h = i(9539);
                t.exports = function (t) {
                    var e = s(this), i = a(t);
                    if (n(e) <= i.size) return !1 !== o(e, function (t) {
                        if (i.includes(t)) return !1
                    }, !0);
                    var d = i.getIterator();
                    return !1 !== l(d, function (t) {
                        if (r(e, t)) return h(d, "normal", !1)
                    })
                }
            }, 3838: (t, e, i) => {
                var s = i(7080), r = i(5170), n = i(8469), a = i(3789);
                t.exports = function (t) {
                    var e = s(this), i = a(t);
                    return !(r(e) > i.size) && !1 !== n(e, function (t) {
                        if (!i.includes(t)) return !1
                    }, !0)
                }
            }, 8527: (t, e, i) => {
                var s = i(7080), r = i(4402).has, n = i(5170), a = i(3789), o = i(507), l = i(9539);
                t.exports = function (t) {
                    var e = s(this), i = a(t);
                    if (n(e) < i.size) return !1;
                    var h = i.getIterator();
                    return !1 !== o(h, function (t) {
                        if (!r(e, t)) return l(h, "normal", !1)
                    })
                }
            }, 8469: (t, e, i) => {
                var s = i(9504), r = i(507), n = i(4402), a = n.Set, o = n.proto, l = s(o.forEach), h = s(o.keys),
                    d = h(new a).next;
                t.exports = function (t, e, i) {
                    return i ? r({iterator: h(t), next: d}, e) : l(t, e)
                }
            }, 4916: (t, e, i) => {
                var s = i(7751), r = function (t) {
                    return {
                        size: t, has: function () {
                            return !1
                        }, keys: function () {
                            return {
                                next: function () {
                                    return {done: !0}
                                }
                            }
                        }
                    }
                };
                t.exports = function (t) {
                    var e = s("Set");
                    try {
                        new e()[t](r(0));
                        try {
                            return new e()[t](r(-1)), !1
                        } catch (t) {
                            return !0
                        }
                    } catch (t) {
                        return !1
                    }
                }
            }, 5170: (t, e, i) => {
                var s = i(6706), r = i(4402);
                t.exports = s(r.proto, "size", "get") || function (t) {
                    return t.size
                }
            }, 3650: (t, e, i) => {
                var s = i(7080), r = i(4402), n = i(9286), a = i(3789), o = i(507), l = r.add, h = r.has, d = r.remove;
                t.exports = function (t) {
                    var e = s(this), i = a(t).getIterator(), r = n(e);
                    return o(i, function (t) {
                        h(e, t) ? d(r, t) : l(r, t)
                    }), r
                }
            }, 4204: (t, e, i) => {
                var s = i(7080), r = i(4402).add, n = i(9286), a = i(3789), o = i(507);
                t.exports = function (t) {
                    var e = s(this), i = a(t).getIterator(), l = n(e);
                    return o(i, function (t) {
                        r(l, t)
                    }), l
                }
            }, 6119: (t, e, i) => {
                var s = i(5745), r = i(3392), n = s("keys");
                t.exports = function (t) {
                    return n[t] || (n[t] = r(t))
                }
            }, 7629: (t, e, i) => {
                var s = i(6395), r = i(4475), n = i(9433), a = "__core-js_shared__", o = t.exports = r[a] || n(a, {});
                (o.versions || (o.versions = [])).push({
                    version: "3.37.1",
                    mode: s ? "pure" : "global",
                    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            }, 5745: (t, e, i) => {
                var s = i(7629);
                t.exports = function (t, e) {
                    return s[t] || (s[t] = e || {})
                }
            }, 1548: (t, e, i) => {
                var s = i(4475), r = i(9039), n = i(7388), a = i(7290), o = i(516), l = i(9088), h = s.structuredClone;
                t.exports = !!h && !r(function () {
                    if (o && n > 92 || l && n > 94 || a && n > 97) return !1;
                    var t = new ArrayBuffer(8), e = h(t, {transfer: [t]});
                    return 0 !== t.byteLength || 8 !== e.byteLength
                })
            }, 4495: (t, e, i) => {
                var s = i(7388), r = i(9039), n = i(4475).String;
                t.exports = !!Object.getOwnPropertySymbols && !r(function () {
                    var t = Symbol("symbol detection");
                    return !n(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && s && s < 41
                })
            }, 5610: (t, e, i) => {
                var s = i(1291), r = Math.max, n = Math.min;
                t.exports = function (t, e) {
                    var i = s(t);
                    return i < 0 ? r(i + e, 0) : n(i, e)
                }
            }, 5854: (t, e, i) => {
                var s = i(2777), r = TypeError;
                t.exports = function (t) {
                    var e = s(t, "number");
                    if ("number" == typeof e) throw new r("Can't convert number to bigint");
                    return BigInt(e)
                }
            }, 7696: (t, e, i) => {
                var s = i(1291), r = i(8014), n = RangeError;
                t.exports = function (t) {
                    if (void 0 === t) return 0;
                    var e = s(t), i = r(e);
                    if (e !== i) throw new n("Wrong length or index");
                    return i
                }
            }, 5397: (t, e, i) => {
                var s = i(7055), r = i(7750);
                t.exports = function (t) {
                    return s(r(t))
                }
            }, 1291: (t, e, i) => {
                var s = i(741);
                t.exports = function (t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : s(e)
                }
            }, 8014: (t, e, i) => {
                var s = i(1291), r = Math.min;
                t.exports = function (t) {
                    var e = s(t);
                    return e > 0 ? r(e, 9007199254740991) : 0
                }
            }, 8981: (t, e, i) => {
                var s = i(7750), r = Object;
                t.exports = function (t) {
                    return r(s(t))
                }
            }, 9590: (t, e, i) => {
                var s = i(1291), r = RangeError;
                t.exports = function (t) {
                    var e = s(t);
                    if (e < 0) throw new r("The argument can't be less than 0");
                    return e
                }
            }, 2777: (t, e, i) => {
                var s = i(9565), r = i(34), n = i(757), a = i(5966), o = i(4270), l = i(8227), h = TypeError,
                    d = l("toPrimitive");
                t.exports = function (t, e) {
                    if (!r(t) || n(t)) return t;
                    var i, l = a(t, d);
                    if (l) {
                        if (void 0 === e && (e = "default"), !r(i = s(l, t, e)) || n(i)) return i;
                        throw new h("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), o(t, e)
                }
            }, 6969: (t, e, i) => {
                var s = i(2777), r = i(757);
                t.exports = function (t) {
                    var e = s(t, "string");
                    return r(e) ? e : e + ""
                }
            }, 2140: (t, e, i) => {
                var s = i(8227)("toStringTag"), r = {};
                r[s] = "z", t.exports = "[object z]" === String(r)
            }, 655: (t, e, i) => {
                var s = i(6955), r = String;
                t.exports = function (t) {
                    if ("Symbol" === s(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return r(t)
                }
            }, 9714: (t, e, i) => {
                var s = i(9088);
                t.exports = function (t) {
                    try {
                        if (s) return Function('return require("' + t + '")')()
                    } catch (t) {
                    }
                }
            }, 6823: t => {
                var e = String;
                t.exports = function (t) {
                    try {
                        return e(t)
                    } catch (t) {
                        return "Object"
                    }
                }
            }, 3392: (t, e, i) => {
                var s = i(9504), r = 0, n = Math.random(), a = s(1..toString);
                t.exports = function (t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++r + n, 36)
                }
            }, 7040: (t, e, i) => {
                var s = i(4495);
                t.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator
            }, 8686: (t, e, i) => {
                var s = i(3724), r = i(9039);
                t.exports = s && r(function () {
                    return 42 !== Object.defineProperty(function () {
                    }, "prototype", {value: 42, writable: !1}).prototype
                })
            }, 2812: t => {
                var e = TypeError;
                t.exports = function (t, i) {
                    if (t < i) throw new e("Not enough arguments");
                    return t
                }
            }, 8622: (t, e, i) => {
                var s = i(4475), r = i(4901), n = s.WeakMap;
                t.exports = r(n) && /native code/.test(String(n))
            }, 8227: (t, e, i) => {
                var s = i(4475), r = i(5745), n = i(9297), a = i(3392), o = i(4495), l = i(7040), h = s.Symbol,
                    d = r("wks"), c = l ? h.for || h : h && h.withoutSetter || a;
                t.exports = function (t) {
                    return n(d, t) || (d[t] = o && n(h, t) ? h[t] : c("Symbol." + t)), d[t]
                }
            }, 6573: (t, e, i) => {
                var s = i(3724), r = i(2106), n = i(3238), a = ArrayBuffer.prototype;
                !s || "detached" in a || r(a, "detached", {
                    configurable: !0, get: function () {
                        return n(this)
                    }
                })
            }, 7936: (t, e, i) => {
                var s = i(6518), r = i(5636);
                r && s({target: "ArrayBuffer", proto: !0}, {
                    transferToFixedLength: function () {
                        return r(this, arguments.length ? arguments[0] : void 0, !1)
                    }
                })
            }, 8100: (t, e, i) => {
                var s = i(6518), r = i(5636);
                r && s({target: "ArrayBuffer", proto: !0}, {
                    transfer: function () {
                        return r(this, arguments.length ? arguments[0] : void 0, !0)
                    }
                })
            }, 4114: (t, e, i) => {
                var s = i(6518), r = i(8981), n = i(6198), a = i(4527), o = i(6837);
                s({
                    target: "Array", proto: !0, arity: 1, forced: i(9039)(function () {
                        return 4294967297 !== [].push.call({length: 4294967296}, 1)
                    }) || !function () {
                        try {
                            Object.defineProperty([], "length", {writable: !1}).push()
                        } catch (t) {
                            return t instanceof TypeError
                        }
                    }()
                }, {
                    push: function (t) {
                        var e = r(this), i = n(e), s = arguments.length;
                        o(i + s);
                        for (var l = 0; l < s; l++) e[i] = arguments[l], i++;
                        return a(e, i), i
                    }
                })
            }, 4628: (t, e, i) => {
                var s = i(6518), r = i(6043);
                s({target: "Promise", stat: !0}, {
                    withResolvers: function () {
                        var t = r.f(this);
                        return {promise: t.promise, resolve: t.resolve, reject: t.reject}
                    }
                })
            }, 7642: (t, e, i) => {
                var s = i(6518), r = i(3440);
                s({target: "Set", proto: !0, real: !0, forced: !i(4916)("difference")}, {difference: r})
            }, 8004: (t, e, i) => {
                var s = i(6518), r = i(9039), n = i(8750);
                s({
                    target: "Set", proto: !0, real: !0, forced: !i(4916)("intersection") || r(function () {
                        return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
                    })
                }, {intersection: n})
            }, 3853: (t, e, i) => {
                var s = i(6518), r = i(4449);
                s({target: "Set", proto: !0, real: !0, forced: !i(4916)("isDisjointFrom")}, {isDisjointFrom: r})
            }, 5876: (t, e, i) => {
                var s = i(6518), r = i(3838);
                s({target: "Set", proto: !0, real: !0, forced: !i(4916)("isSubsetOf")}, {isSubsetOf: r})
            }, 2475: (t, e, i) => {
                var s = i(6518), r = i(8527);
                s({target: "Set", proto: !0, real: !0, forced: !i(4916)("isSupersetOf")}, {isSupersetOf: r})
            }, 5024: (t, e, i) => {
                var s = i(6518), r = i(3650);
                s({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !i(4916)("symmetricDifference")
                }, {symmetricDifference: r})
            }, 1698: (t, e, i) => {
                var s = i(6518), r = i(4204);
                s({target: "Set", proto: !0, real: !0, forced: !i(4916)("union")}, {union: r})
            }, 7467: (t, e, i) => {
                var s = i(7628), r = i(4644), n = r.aTypedArray, a = r.exportTypedArrayMethod,
                    o = r.getTypedArrayConstructor;
                a("toReversed", function () {
                    return s(n(this), o(this))
                })
            }, 4732: (t, e, i) => {
                var s = i(4644), r = i(9504), n = i(9306), a = i(5370), o = s.aTypedArray,
                    l = s.getTypedArrayConstructor, h = s.exportTypedArrayMethod, d = r(s.TypedArrayPrototype.sort);
                h("toSorted", function (t) {
                    void 0 !== t && n(t);
                    var e = o(this);
                    return d(a(l(e), e), t)
                })
            }, 9577: (t, e, i) => {
                var s = i(9928), r = i(4644), n = i(1108), a = i(1291), o = i(5854), l = r.aTypedArray,
                    h = r.getTypedArrayConstructor;
                (0, r.exportTypedArrayMethod)("with", {
                    with: function (t, e) {
                        var i = l(this), r = a(t), d = n(i) ? o(e) : +e;
                        return s(i, h(i), r, d)
                    }
                }.with, !function () {
                    try {
                        new Int8Array(1).with(2, {
                            valueOf: function () {
                                throw 8
                            }
                        })
                    } catch (t) {
                        return 8 === t
                    }
                }())
            }, 8992: (t, e, i) => {
                var s = i(6518), r = i(4475), n = i(679), a = i(8551), o = i(4901), l = i(2787), h = i(2106),
                    d = i(4659), c = i(9039), u = i(9297), p = i(8227), g = i(7657).IteratorPrototype, f = i(3724),
                    m = i(6395), v = "constructor", b = "Iterator", A = p("toStringTag"), y = TypeError, _ = r[b],
                    w = m || !o(_) || _.prototype !== g || !c(function () {
                        _({})
                    }), x = function () {
                        if (n(this, g), l(this) === g) throw new y("Abstract class Iterator not directly constructable")
                    }, E = function (t, e) {
                        f ? h(g, t, {
                            configurable: !0, get: function () {
                                return e
                            }, set: function (e) {
                                if (a(this), this === g) throw new y("You can't redefine this property");
                                u(this, t) ? this[t] = e : d(this, t, e)
                            }
                        }) : g[t] = e
                    };
                u(g, A) || E(A, b), (w || !u(g, v) || g[v] === Object) && E(v, x), x.prototype = g, s({
                    global: !0,
                    constructor: !0,
                    forced: w
                }, {Iterator: x})
            }, 4743: (t, e, i) => {
                var s = i(6518), r = i(9565), n = i(8551), a = i(1767), o = i(4149), l = i(9590), h = i(9462),
                    d = i(6395), c = h(function () {
                        for (var t, e = this.iterator, i = this.next; this.remaining;) if (this.remaining--, t = n(r(i, e)), this.done = !!t.done) return;
                        if (t = n(r(i, e)), !(this.done = !!t.done)) return t.value
                    });
                s({target: "Iterator", proto: !0, real: !0, forced: d}, {
                    drop: function (t) {
                        n(this);
                        var e = l(o(+t));
                        return new c(a(this), {remaining: e})
                    }
                })
            }, 3215: (t, e, i) => {
                var s = i(6518), r = i(2652), n = i(9306), a = i(8551), o = i(1767);
                s({target: "Iterator", proto: !0, real: !0}, {
                    every: function (t) {
                        a(this), n(t);
                        var e = o(this), i = 0;
                        return !r(e, function (e, s) {
                            if (!t(e, i++)) return s()
                        }, {IS_RECORD: !0, INTERRUPTED: !0}).stopped
                    }
                })
            }, 4520: (t, e, i) => {
                var s = i(6518), r = i(9565), n = i(9306), a = i(8551), o = i(1767), l = i(9462), h = i(6319),
                    d = i(6395), c = l(function () {
                        for (var t, e, i = this.iterator, s = this.predicate, n = this.next; ;) {
                            if (t = a(r(n, i)), this.done = !!t.done) return;
                            if (h(i, s, [e = t.value, this.counter++], !0)) return e
                        }
                    });
                s({target: "Iterator", proto: !0, real: !0, forced: d}, {
                    filter: function (t) {
                        return a(this), n(t), new c(o(this), {predicate: t})
                    }
                })
            }, 670: (t, e, i) => {
                var s = i(6518), r = i(9565), n = i(9306), a = i(8551), o = i(1767), l = i(8646), h = i(9462),
                    d = i(9539), c = i(6395), u = h(function () {
                        for (var t, e, i = this.iterator, s = this.mapper; ;) {
                            if (e = this.inner) try {
                                if (!(t = a(r(e.next, e.iterator))).done) return t.value;
                                this.inner = null
                            } catch (t) {
                                d(i, "throw", t)
                            }
                            if (t = a(r(this.next, i)), this.done = !!t.done) return;
                            try {
                                this.inner = l(s(t.value, this.counter++), !1)
                            } catch (t) {
                                d(i, "throw", t)
                            }
                        }
                    });
                s({target: "Iterator", proto: !0, real: !0, forced: c}, {
                    flatMap: function (t) {
                        return a(this), n(t), new u(o(this), {mapper: t, inner: null})
                    }
                })
            }, 1454: (t, e, i) => {
                var s = i(6518), r = i(713);
                s({target: "Iterator", proto: !0, real: !0, forced: i(6395)}, {map: r})
            }, 7550: (t, e, i) => {
                var s = i(6518), r = i(2652), n = i(9306), a = i(8551), o = i(1767);
                s({target: "Iterator", proto: !0, real: !0}, {
                    some: function (t) {
                        a(this), n(t);
                        var e = o(this), i = 0;
                        return r(e, function (e, s) {
                            if (t(e, i++)) return s()
                        }, {IS_RECORD: !0, INTERRUPTED: !0}).stopped
                    }
                })
            }, 8335: (t, e, i) => {
                var s = i(6518), r = i(3724), n = i(4475), a = i(7751), o = i(9504), l = i(9565), h = i(4901),
                    d = i(34), c = i(4376), u = i(9297), p = i(655), g = i(6198), f = i(4659), m = i(9039), v = i(8235),
                    b = i(4495), A = n.JSON, y = n.Number, _ = n.SyntaxError, w = A && A.parse, x = a("Object", "keys"),
                    E = Object.getOwnPropertyDescriptor, S = o("".charAt), C = o("".slice), T = o(/./.exec),
                    M = o([].push), R = /^\d$/, k = /^[1-9]$/, L = /^(?:-|\d)$/, I = /^[\t\n\r ]$/,
                    P = function (t, e) {
                        var i = new N(t = p(t), 0, ""), s = i.parse(), r = s.value, n = i.skip(I, s.end);
                        if (n < t.length) throw new _('Unexpected extra character: "' + S(t, n) + '" after the parsed data at: ' + n);
                        return h(e) ? D({"": r}, "", e, s) : r
                    }, D = function (t, e, i, s) {
                        var r, n, a, o, h, p = t[e], f = s && p === s.value,
                            m = f && "string" == typeof s.source ? {source: s.source} : {};
                        if (d(p)) {
                            var v = c(p), b = f ? s.nodes : v ? [] : {};
                            if (v) for (o = 0, r = b.length, a = g(p); o < a; o++) F(p, o, D(p, "" + o, i, o < r ? b[o] : void 0)); else for (o = 0, a = g(n = x(p)); o < a; o++) F(p, h = n[o], D(p, h, i, u(b, h) ? b[h] : void 0))
                        }
                        return l(i, t, e, p, m)
                    }, F = function (t, e, i) {
                        if (r) {
                            var s = E(t, e);
                            if (s && !s.configurable) return
                        }
                        void 0 === i ? delete t[e] : f(t, e, i)
                    }, O = function (t, e, i, s) {
                        this.value = t, this.end = e, this.source = i, this.nodes = s
                    }, N = function (t, e) {
                        this.source = t, this.index = e
                    };
                N.prototype = {
                    fork: function (t) {
                        return new N(this.source, t)
                    }, parse: function () {
                        var t = this.source, e = this.skip(I, this.index), i = this.fork(e), s = S(t, e);
                        if (T(L, s)) return i.number();
                        switch (s) {
                            case"{":
                                return i.object();
                            case"[":
                                return i.array();
                            case'"':
                                return i.string();
                            case"t":
                                return i.keyword(!0);
                            case"f":
                                return i.keyword(!1);
                            case"n":
                                return i.keyword(null)
                        }
                        throw new _('Unexpected character: "' + s + '" at: ' + e)
                    }, node: function (t, e, i, s, r) {
                        return new O(e, s, t ? null : C(this.source, i, s), r)
                    }, object: function () {
                        for (var t = this.source, e = this.index + 1, i = !1, s = {}, r = {}; e < t.length;) {
                            if ("}" === S(t, e = this.until(['"', "}"], e)) && !i) {
                                e++;
                                break
                            }
                            var n = this.fork(e).string(), a = n.value;
                            e = n.end, e = this.until([":"], e) + 1, e = this.skip(I, e), f(r, a, n = this.fork(e).parse()), f(s, a, n.value);
                            var o = S(t, e = this.until([",", "}"], n.end));
                            if ("," === o) i = !0, e++; else if ("}" === o) {
                                e++;
                                break
                            }
                        }
                        return this.node(1, s, this.index, e, r)
                    }, array: function () {
                        for (var t = this.source, e = this.index + 1, i = !1, s = [], r = []; e < t.length;) {
                            if ("]" === S(t, e = this.skip(I, e)) && !i) {
                                e++;
                                break
                            }
                            var n = this.fork(e).parse();
                            if (M(r, n), M(s, n.value), "," === S(t, e = this.until([",", "]"], n.end))) i = !0, e++; else if ("]" === S(t, e)) {
                                e++;
                                break
                            }
                        }
                        return this.node(1, s, this.index, e, r)
                    }, string: function () {
                        var t = this.index, e = v(this.source, this.index + 1);
                        return this.node(0, e.value, t, e.end)
                    }, number: function () {
                        var t = this.source, e = this.index, i = e;
                        if ("-" === S(t, i) && i++, "0" === S(t, i)) i++; else if (T(k, S(t, i))) i = this.skip(R, ++i); else throw new _("Failed to parse number at: " + i);
                        if ("." === S(t, i) && (i = this.skip(R, ++i)), ("e" === S(t, i) || "E" === S(t, i)) && (("+" === S(t, ++i) || "-" === S(t, i)) && i++, i === (i = this.skip(R, i)))) throw new _("Failed to parse number's exponent value at: " + i);
                        return this.node(0, y(C(t, e, i)), e, i)
                    }, keyword: function (t) {
                        var e = "" + t, i = this.index, s = i + e.length;
                        if (C(this.source, i, s) !== e) throw new _("Failed to parse value at: " + i);
                        return this.node(0, t, i, s)
                    }, skip: function (t, e) {
                        for (var i = this.source; e < i.length && T(t, S(i, e)); e++) ;
                        return e
                    }, until: function (t, e) {
                        e = this.skip(I, e);
                        for (var i = S(this.source, e), s = 0; s < t.length; s++) if (t[s] === i) return e;
                        throw new _('Unexpected character: "' + i + '" at: ' + e)
                    }
                };
                var B = m(function () {
                    var t, e = "9007199254740993";
                    return w(e, function (e, i, s) {
                        t = s.source
                    }), t !== e
                }), H = b && !m(function () {
                    return 1 / w("-0 	") != -1 / 0
                });
                s({target: "JSON", stat: !0, forced: B}, {
                    parse: function (t, e) {
                        return H && !h(e) ? w(t) : P(t, e)
                    }
                })
            }, 3375: (t, e, i) => {
                i(7642)
            }, 9225: (t, e, i) => {
                i(8004)
            }, 3972: (t, e, i) => {
                i(3853)
            }, 9209: (t, e, i) => {
                i(5876)
            }, 5714: (t, e, i) => {
                i(2475)
            }, 7561: (t, e, i) => {
                i(5024)
            }, 6197: (t, e, i) => {
                i(1698)
            }, 4979: (t, e, i) => {
                var s = i(6518), r = i(4475), n = i(7751), a = i(6980), o = i(4913).f, l = i(9297), h = i(679),
                    d = i(3167), c = i(2603), u = i(5002), p = i(6193), g = i(3724), f = i(6395), m = "DOMException",
                    v = n("Error"), b = n(m), A = function () {
                        h(this, y);
                        var t = arguments.length, e = c(t < 1 ? void 0 : arguments[0]),
                            i = c(t < 2 ? void 0 : arguments[1], "Error"), s = new b(e, i), r = new v(e);
                        return r.name = m, o(s, "stack", a(1, p(r.stack, 1))), d(s, this, A), s
                    }, y = A.prototype = b.prototype, _ = "stack" in new v(m), w = "stack" in new b(1, 2),
                    x = b && g && Object.getOwnPropertyDescriptor(r, m), E = !!x && !(x.writable && x.configurable),
                    S = _ && !E && !w;
                s({global: !0, constructor: !0, forced: f || S}, {DOMException: S ? A : b});
                var C = n(m), T = C.prototype;
                if (T.constructor !== C) {
                    for (var M in f || o(T, "constructor", a(1, C)), u) if (l(u, M)) {
                        var R = u[M], k = R.s;
                        l(C, k) || o(C, k, a(6, R.c))
                    }
                }
            }, 4603: (t, e, i) => {
                var s = i(6840), r = i(9504), n = i(655), a = i(2812), o = URLSearchParams, l = o.prototype,
                    h = r(l.append), d = r(l.delete), c = r(l.forEach), u = r([].push), p = new o("a=1&a=2&b=3");
                p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && s(l, "delete", function (t) {
                    var e, i = arguments.length, s = i < 2 ? void 0 : arguments[1];
                    if (i && void 0 === s) return d(this, t);
                    var r = [];
                    c(this, function (t, e) {
                        u(r, {key: e, value: t})
                    }), a(i, 1);
                    for (var o = n(t), l = n(s), p = 0, g = 0, f = !1, m = r.length; p < m;) e = r[p++], f || e.key === o ? (f = !0, d(this, e.key)) : g++;
                    for (; g < m;) (e = r[g++]).key === o && e.value === l || h(this, e.key, e.value)
                }, {enumerable: !0, unsafe: !0})
            }, 7566: (t, e, i) => {
                var s = i(6840), r = i(9504), n = i(655), a = i(2812), o = URLSearchParams, l = o.prototype,
                    h = r(l.getAll), d = r(l.has), c = new o("a=1");
                (c.has("a", 2) || !c.has("a", void 0)) && s(l, "has", function (t) {
                    var e = arguments.length, i = e < 2 ? void 0 : arguments[1];
                    if (e && void 0 === i) return d(this, t);
                    var s = h(this, t);
                    a(e, 1);
                    for (var r = n(i), o = 0; o < s.length;) if (s[o++] === r) return !0;
                    return !1
                }, {enumerable: !0, unsafe: !0})
            }, 8721: (t, e, i) => {
                var s = i(3724), r = i(9504), n = i(2106), a = URLSearchParams.prototype, o = r(a.forEach);
                !s || "size" in a || n(a, "size", {
                    get: function () {
                        var t = 0;
                        return o(this, function () {
                            t++
                        }), t
                    }, configurable: !0, enumerable: !0
                })
            }
        }, o = {};

        function l(t) {
            var e = o[t];
            if (void 0 !== e) return e.exports;
            var i = o[t] = {exports: {}};
            return a[t].call(i.exports, i, i.exports, l), i.exports
        }

        l.d = (t, e) => {
            for (var i in e) l.o(e, i) && !l.o(t, i) && Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
        }, l.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
        var h = globalThis.pdfjsLib = {};
        l.d(h, {
            AbortException: () => z,
            AnnotationEditorLayer: () => iZ,
            AnnotationEditorParamsType: () => m,
            AnnotationEditorType: () => f,
            AnnotationEditorUIManager: () => tF,
            AnnotationLayer: () => ij,
            AnnotationMode: () => g,
            CMapCompressionType: () => x,
            ColorPicker: () => iX,
            DOMSVGFactory: () => td,
            DrawLayer: () => i0,
            FeatureTest: () => G,
            GlobalWorkerOptions: () => ec,
            ImageKind: () => A,
            InvalidPDFException: () => O,
            MissingPDFException: () => N,
            OPS: () => E,
            Outliner: () => iG,
            PDFDataRangeTransport: () => e5,
            PDFDateString: () => t_,
            PDFWorker: () => e7,
            PasswordResponses: () => S,
            PermissionFlag: () => v,
            PixelsPerInch: () => tr,
            RenderingCancelledException: () => tu,
            TextLayer: () => eq,
            UnexpectedResponseException: () => B,
            Util: () => q,
            VerbosityLevel: () => w,
            XfaLayer: () => id,
            build: () => ia,
            createValidAbsoluteUrl: () => L,
            fetchData: () => to,
            getDocument: () => e0,
            getFilenameFromUrl: () => tf,
            getPdfFilenameFromUrl: () => tm,
            getXfaPageViewport: () => tw,
            isDataScheme: () => tp,
            isPdfFile: () => tg,
            noContextMenu: () => tA,
            normalizeUnicode: () => X,
            renderTextLayer: () => eW,
            setLayerDimensions: () => tC,
            shadow: () => I,
            updateTextLayer: () => eK,
            version: () => ir
        }), l(4114), l(6573), l(8100), l(7936), l(7467), l(4732), l(9577), l(4603), l(7566), l(8721);
        let d = "object" == typeof r && r + "" == "[object process]" && !r.versions.nw && !(r.versions.electron && r.type && "browser" !== r.type),
            c = [1, 0, 0, 1, 0, 0], u = [.001, 0, 0, .001, 0, 0], p = {
                ANY: 1,
                DISPLAY: 2,
                PRINT: 4,
                ANNOTATIONS_FORMS: 16,
                ANNOTATIONS_STORAGE: 32,
                ANNOTATIONS_DISABLE: 64,
                OPLIST: 256
            }, g = {DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3},
            f = {DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15}, m = {
                RESIZE: 1,
                CREATE: 2,
                FREETEXT_SIZE: 11,
                FREETEXT_COLOR: 12,
                FREETEXT_OPACITY: 13,
                INK_COLOR: 21,
                INK_THICKNESS: 22,
                INK_OPACITY: 23,
                HIGHLIGHT_COLOR: 31,
                HIGHLIGHT_DEFAULT_COLOR: 32,
                HIGHLIGHT_THICKNESS: 33,
                HIGHLIGHT_FREE: 34,
                HIGHLIGHT_SHOW_ALL: 35
            }, v = {
                PRINT: 4,
                MODIFY_CONTENTS: 8,
                COPY: 16,
                MODIFY_ANNOTATIONS: 32,
                FILL_INTERACTIVE_FORMS: 256,
                COPY_FOR_ACCESSIBILITY: 512,
                ASSEMBLE: 1024,
                PRINT_HIGH_QUALITY: 2048
            }, b = {FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4},
            A = {GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3}, y = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                WIDGET: 20
            }, _ = {SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5}, w = {ERRORS: 0, WARNINGS: 1, INFOS: 5},
            x = {NONE: 0, BINARY: 1}, E = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
            }, S = {NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2}, C = w.WARNINGS;

        function T(t) {
            C >= w.INFOS && console.log(`Info: ${t}`)
        }

        function M(t) {
            C >= w.WARNINGS && console.log(`Warning: ${t}`)
        }

        function R(t) {
            throw Error(t)
        }

        function k(t, e) {
            t || R(e)
        }

        function L(t, e = null, i = null) {
            if (!t) return null;
            try {
                if (i && "string" == typeof t) {
                    if (i.addDefaultProtocol && t.startsWith("www.")) {
                        let e = t.match(/\./g);
                        e?.length >= 2 && (t = `http://${t}`)
                    }
                    if (i.tryConvertEncoding) try {
                        var s;
                        s = t, t = decodeURIComponent(escape(s))
                    } catch {
                    }
                }
                let r = e ? new URL(t, e) : new URL(t);
                if (function (t) {
                    switch (t?.protocol) {
                        case"http:":
                        case"https:":
                        case"ftp:":
                        case"mailto:":
                        case"tel:":
                            return !0;
                        default:
                            return !1
                    }
                }(r)) return r
            } catch {
            }
            return null
        }

        function I(t, e, i, s = !1) {
            return Object.defineProperty(t, e, {value: i, enumerable: !s, configurable: !0, writable: !1}), i
        }

        let P = function () {
            function t(e, i) {
                this.constructor === t && R("Cannot initialize BaseException."), this.message = e, this.name = i
            }

            return t.prototype = Error(), t.constructor = t, t
        }();

        class D extends P {
            constructor(t, e) {
                super(t, "PasswordException"), this.code = e
            }
        }

        class F extends P {
            constructor(t, e) {
                super(t, "UnknownErrorException"), this.details = e
            }
        }

        class O extends P {
            constructor(t) {
                super(t, "InvalidPDFException")
            }
        }

        class N extends P {
            constructor(t) {
                super(t, "MissingPDFException")
            }
        }

        class B extends P {
            constructor(t, e) {
                super(t, "UnexpectedResponseException"), this.status = e
            }
        }

        class H extends P {
            constructor(t) {
                super(t, "FormatError")
            }
        }

        class z extends P {
            constructor(t) {
                super(t, "AbortException")
            }
        }

        function j(t) {
            ("object" != typeof t || t?.length === void 0) && R("Invalid argument for bytesToString");
            let e = t.length;
            if (e < 8192) return String.fromCharCode.apply(null, t);
            let i = [];
            for (let s = 0; s < e; s += 8192) {
                let r = Math.min(s + 8192, e), n = t.subarray(s, r);
                i.push(String.fromCharCode.apply(null, n))
            }
            return i.join("")
        }

        function U(t) {
            "string" != typeof t && R("Invalid argument for stringToBytes");
            let e = t.length, i = new Uint8Array(e);
            for (let s = 0; s < e; ++s) i[s] = 255 & t.charCodeAt(s);
            return i
        }

        function $(t) {
            let e = Object.create(null);
            for (let [i, s] of t) e[i] = s;
            return e
        }

        class G {
            static get isLittleEndian() {
                return I(this, "isLittleEndian", function () {
                    let t = new Uint8Array(4);
                    return t[0] = 1, 1 === new Uint32Array(t.buffer, 0, 1)[0]
                }())
            }

            static get isEvalSupported() {
                return I(this, "isEvalSupported", function () {
                    try {
                        return Function(""), !0
                    } catch {
                        return !1
                    }
                }())
            }

            static get isOffscreenCanvasSupported() {
                return I(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas)
            }

            static get platform() {
                return "undefined" != typeof navigator && "string" == typeof navigator?.platform ? I(this, "platform", {isMac: navigator.platform.includes("Mac")}) : I(this, "platform", {isMac: !1})
            }

            static get isCSSRoundSupported() {
                return I(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"))
            }
        }

        let V = Array.from(Array(256).keys(), t => t.toString(16).padStart(2, "0"));

        class q {
            static makeHexColor(t, e, i) {
                return `#${V[t]}${V[e]}${V[i]}`
            }

            static scaleMinMax(t, e) {
                let i;
                t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5]
            }

            static transform(t, e) {
                return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
            }

            static applyTransform(t, e) {
                return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]]
            }

            static applyInverseTransform(t, e) {
                let i = e[0] * e[3] - e[1] * e[2];
                return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i]
            }

            static getAxialAlignedBoundingBox(t, e) {
                let i = this.applyTransform(t, e), s = this.applyTransform(t.slice(2, 4), e),
                    r = this.applyTransform([t[0], t[3]], e), n = this.applyTransform([t[2], t[1]], e);
                return [Math.min(i[0], s[0], r[0], n[0]), Math.min(i[1], s[1], r[1], n[1]), Math.max(i[0], s[0], r[0], n[0]), Math.max(i[1], s[1], r[1], n[1])]
            }

            static inverseTransform(t) {
                let e = t[0] * t[3] - t[1] * t[2];
                return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e]
            }

            static singularValueDecompose2dScale(t) {
                let e = [t[0], t[2], t[1], t[3]], i = t[0] * e[0] + t[1] * e[2], s = t[0] * e[1] + t[1] * e[3],
                    r = t[2] * e[0] + t[3] * e[2], n = t[2] * e[1] + t[3] * e[3], a = (i + n) / 2,
                    o = Math.sqrt((i + n) ** 2 - 4 * (i * n - r * s)) / 2;
                return [Math.sqrt(a + o || 1), Math.sqrt(a - o || 1)]
            }

            static normalizeRect(t) {
                let e = t.slice(0);
                return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e
            }

            static intersect(t, e) {
                let i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                    s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
                if (i > s) return null;
                let r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                    n = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
                return r > n ? null : [i, r, s, n]
            }

            static #t(t, e, i, s, r, n, a, o, l, h) {
                if (l <= 0 || l >= 1) return;
                let d = 1 - l, c = l * l, u = c * l, p = d * (d * (d * t + 3 * l * e) + 3 * c * i) + u * s,
                    g = d * (d * (d * r + 3 * l * n) + 3 * c * a) + u * o;
                h[0] = Math.min(h[0], p), h[1] = Math.min(h[1], g), h[2] = Math.max(h[2], p), h[3] = Math.max(h[3], g)
            }

            static #e(t, e, i, s, r, n, a, o, l, h, d, c) {
                if (1e-12 > Math.abs(l)) {
                    Math.abs(h) >= 1e-12 && this.#t(t, e, i, s, r, n, a, o, -d / h, c);
                    return
                }
                let u = h ** 2 - 4 * d * l;
                if (u < 0) return;
                let p = Math.sqrt(u), g = 2 * l;
                this.#t(t, e, i, s, r, n, a, o, (-h + p) / g, c), this.#t(t, e, i, s, r, n, a, o, (-h - p) / g, c)
            }

            static bezierBoundingBox(t, e, i, s, r, n, a, o, l) {
                return l ? (l[0] = Math.min(l[0], t, a), l[1] = Math.min(l[1], e, o), l[2] = Math.max(l[2], t, a), l[3] = Math.max(l[3], e, o)) : l = [Math.min(t, a), Math.min(e, o), Math.max(t, a), Math.max(e, o)], this.#e(t, i, r, a, e, s, n, o, 3 * (-t + 3 * (i - r) + a), 6 * (t - 2 * i + r), 3 * (i - t), l), this.#e(t, i, r, a, e, s, n, o, 3 * (-e + 3 * (s - n) + o), 6 * (e - 2 * s + n), 3 * (s - e), l), l
            }
        }

        let W = null, K = null;

        function X(t) {
            return W || (W = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, K = new Map([["ﬅ", "ſt"]])), t.replaceAll(W, (t, e, i) => e ? e.normalize("NFKC") : K.get(i))
        }

        let Y = "pdfjs_internal_id_", Q = {
            BEZIER_CURVE_TO: 0,
            MOVE_TO: 1,
            LINE_TO: 2,
            QUADRATIC_CURVE_TO: 3,
            RESTORE: 4,
            SAVE: 5,
            SCALE: 6,
            TRANSFORM: 7,
            TRANSLATE: 8
        };
        l(4628), l(1454), l(3375), l(9225), l(3972), l(9209), l(5714), l(7561), l(6197), l(4979), l(8992), l(4743), l(3215), l(7550), l(8335), l(4520);

        class J {
            constructor() {
                this.constructor === J && R("Cannot initialize BaseFilterFactory.")
            }

            addFilter(t) {
                return "none"
            }

            addHCMFilter(t, e) {
                return "none"
            }

            addAlphaFilter(t) {
                return "none"
            }

            addLuminosityFilter(t) {
                return "none"
            }

            addHighlightHCMFilter(t, e, i, s, r) {
                return "none"
            }

            destroy(t = !1) {
            }
        }

        class Z {
            #i = !1;

            constructor({enableHWA: t = !1} = {}) {
                this.constructor === Z && R("Cannot initialize BaseCanvasFactory."), this.#i = t
            }

            create(t, e) {
                if (t <= 0 || e <= 0) throw Error("Invalid canvas size");
                let i = this._createCanvas(t, e);
                return {canvas: i, context: i.getContext("2d", {willReadFrequently: !this.#i})}
            }

            reset(t, e, i) {
                if (!t.canvas) throw Error("Canvas is not specified");
                if (e <= 0 || i <= 0) throw Error("Invalid canvas size");
                t.canvas.width = e, t.canvas.height = i
            }

            destroy(t) {
                if (!t.canvas) throw Error("Canvas is not specified");
                t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null
            }

            _createCanvas(t, e) {
                R("Abstract method `_createCanvas` called.")
            }
        }

        class tt {
            constructor({baseUrl: t = null, isCompressed: e = !0}) {
                this.constructor === tt && R("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = t, this.isCompressed = e
            }

            async fetch({name: t}) {
                if (!this.baseUrl) throw Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                if (!t) throw Error("CMap name must be specified.");
                let e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""),
                    i = this.isCompressed ? x.BINARY : x.NONE;
                return this._fetchData(e, i).catch(t => {
                    throw Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`)
                })
            }

            _fetchData(t, e) {
                R("Abstract method `_fetchData` called.")
            }
        }

        class te {
            constructor({baseUrl: t = null}) {
                this.constructor === te && R("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = t
            }

            async fetch({filename: t}) {
                if (!this.baseUrl) throw Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
                if (!t) throw Error("Font filename must be specified.");
                let e = `${this.baseUrl}${t}`;
                return this._fetchData(e).catch(t => {
                    throw Error(`Unable to load font data at: ${e}`)
                })
            }

            _fetchData(t) {
                R("Abstract method `_fetchData` called.")
            }
        }

        class ti {
            constructor() {
                this.constructor === ti && R("Cannot initialize BaseSVGFactory.")
            }

            create(t, e, i = !1) {
                if (t <= 0 || e <= 0) throw Error("Invalid SVG dimensions");
                let s = this._createSVG("svg:svg");
                return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t} ${e}`), s
            }

            createElement(t) {
                if ("string" != typeof t) throw Error("Invalid SVG element type");
                return this._createSVG(t)
            }

            _createSVG(t) {
                R("Abstract method `_createSVG` called.")
            }
        }

        let ts = "http://www.w3.org/2000/svg";

        class tr {
            static CSS = 96;
            static PDF = 72;
            static PDF_TO_CSS_UNITS = this.CSS / this.PDF
        }

        class tn extends J {
            #s;
            #r;
            #n;
            #a;
            #o;
            #l = 0;

            constructor({docId: t, ownerDocument: e = globalThis.document} = {}) {
                super(), this.#n = t, this.#a = e
            }

            get #h() {
                return this.#s ||= new Map
            }

            get #d() {
                return this.#o ||= new Map
            }

            get #c() {
                if (!this.#r) {
                    let t = this.#a.createElement("div"), {style: e} = t;
                    e.visibility = "hidden", e.contain = "strict", e.width = e.height = 0, e.position = "absolute", e.top = e.left = 0, e.zIndex = -1;
                    let i = this.#a.createElementNS(ts, "svg");
                    i.setAttribute("width", 0), i.setAttribute("height", 0), this.#r = this.#a.createElementNS(ts, "defs"), t.append(i), i.append(this.#r), this.#a.body.append(t)
                }
                return this.#r
            }

            #u(t) {
                if (1 === t.length) {
                    let e = t[0], i = Array(256);
                    for (let t = 0; t < 256; t++) i[t] = e[t] / 255;
                    let s = i.join(",");
                    return [s, s, s]
                }
                let [e, i, s] = t, r = Array(256), n = Array(256), a = Array(256);
                for (let t = 0; t < 256; t++) r[t] = e[t] / 255, n[t] = i[t] / 255, a[t] = s[t] / 255;
                return [r.join(","), n.join(","), a.join(",")]
            }

            addFilter(t) {
                if (!t) return "none";
                let e = this.#h.get(t);
                if (e) return e;
                let [i, s, r] = this.#u(t), n = 1 === t.length ? i : `${i}${s}${r}`;
                if (e = this.#h.get(n)) return this.#h.set(t, e), e;
                let a = `g_${this.#n}_transfer_map_${this.#l++}`, o = `url(#${a})`;
                this.#h.set(t, o), this.#h.set(n, o);
                let l = this.#p(a);
                return this.#g(i, s, r, l), o
            }

            addHCMFilter(t, e) {
                let i = `${t}-${e}`, s = "base", r = this.#d.get(s);
                if (r?.key === i || (r ? (r.filter?.remove(), r.key = i, r.url = "none", r.filter = null) : (r = {
                    key: i,
                    url: "none",
                    filter: null
                }, this.#d.set(s, r)), !t || !e)) return r.url;
                let n = this.#f(t);
                t = q.makeHexColor(...n);
                let a = this.#f(e);
                if (e = q.makeHexColor(...a), this.#c.style.color = "", "#000000" === t && "#ffffff" === e || t === e) return r.url;
                let o = Array(256);
                for (let t = 0; t <= 255; t++) {
                    let e = t / 255;
                    o[t] = e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
                }
                let l = o.join(","), h = `g_${this.#n}_hcm_filter`, d = r.filter = this.#p(h);
                this.#g(l, l, l, d), this.#m(d);
                let c = (t, e) => {
                    let i = n[t] / 255, s = a[t] / 255, r = Array(e + 1);
                    for (let t = 0; t <= e; t++) r[t] = i + t / e * (s - i);
                    return r.join(",")
                };
                return this.#g(c(0, 5), c(1, 5), c(2, 5), d), r.url = `url(#${h})`, r.url
            }

            addAlphaFilter(t) {
                let e = this.#h.get(t);
                if (e) return e;
                let [i] = this.#u([t]), s = `alpha_${i}`;
                if (e = this.#h.get(s)) return this.#h.set(t, e), e;
                let r = `g_${this.#n}_alpha_map_${this.#l++}`, n = `url(#${r})`;
                this.#h.set(t, n), this.#h.set(s, n);
                let a = this.#p(r);
                return this.#v(i, a), n
            }

            addLuminosityFilter(t) {
                let e, i, s = this.#h.get(t || "luminosity");
                if (s) return s;
                if (t ? ([e] = this.#u([t]), i = `luminosity_${e}`) : i = "luminosity", s = this.#h.get(i)) return this.#h.set(t, s), s;
                let r = `g_${this.#n}_luminosity_map_${this.#l++}`, n = `url(#${r})`;
                this.#h.set(t, n), this.#h.set(i, n);
                let a = this.#p(r);
                return this.#b(a), t && this.#v(e, a), n
            }

            addHighlightHCMFilter(t, e, i, s, r) {
                let n = `${e}-${i}-${s}-${r}`, a = this.#d.get(t);
                if (a?.key === n || (a ? (a.filter?.remove(), a.key = n, a.url = "none", a.filter = null) : (a = {
                    key: n,
                    url: "none",
                    filter: null
                }, this.#d.set(t, a)), !e || !i)) return a.url;
                let [o, l] = [e, i].map(this.#f.bind(this)), h = Math.round(.2126 * o[0] + .7152 * o[1] + .0722 * o[2]),
                    d = Math.round(.2126 * l[0] + .7152 * l[1] + .0722 * l[2]), [c, u] = [s, r].map(this.#f.bind(this));
                d < h && ([h, d, c, u] = [d, h, u, c]), this.#c.style.color = "";
                let p = (t, e, i) => {
                    let s = Array(256), r = (d - h) / i, n = t / 255, a = (e - t) / (255 * i), o = 0;
                    for (let t = 0; t <= i; t++) {
                        let e = Math.round(h + t * r), i = n + t * a;
                        for (let t = o; t <= e; t++) s[t] = i;
                        o = e + 1
                    }
                    for (let t = o; t < 256; t++) s[t] = s[o - 1];
                    return s.join(",")
                }, g = `g_${this.#n}_hcm_${t}_filter`, f = a.filter = this.#p(g);
                return this.#m(f), this.#g(p(c[0], u[0], 5), p(c[1], u[1], 5), p(c[2], u[2], 5), f), a.url = `url(#${g})`, a.url
            }

            destroy(t = !1) {
                t && 0 !== this.#d.size || (this.#r && (this.#r.parentNode.parentNode.remove(), this.#r = null), this.#s && (this.#s.clear(), this.#s = null), this.#l = 0)
            }

            #b(t) {
                let e = this.#a.createElementNS(ts, "feColorMatrix");
                e.setAttribute("type", "matrix"), e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(e)
            }

            #m(t) {
                let e = this.#a.createElementNS(ts, "feColorMatrix");
                e.setAttribute("type", "matrix"), e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(e)
            }

            #p(t) {
                let e = this.#a.createElementNS(ts, "filter");
                return e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("id", t), this.#c.append(e), e
            }

            #A(t, e, i) {
                let s = this.#a.createElementNS(ts, e);
                s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t.append(s)
            }

            #g(t, e, i, s) {
                let r = this.#a.createElementNS(ts, "feComponentTransfer");
                s.append(r), this.#A(r, "feFuncR", t), this.#A(r, "feFuncG", e), this.#A(r, "feFuncB", i)
            }

            #v(t, e) {
                let i = this.#a.createElementNS(ts, "feComponentTransfer");
                e.append(i), this.#A(i, "feFuncA", t)
            }

            #f(t) {
                return this.#c.style.color = t, tx(getComputedStyle(this.#c).getPropertyValue("color"))
            }
        }

        class ta extends Z {
            constructor({ownerDocument: t = globalThis.document, enableHWA: e = !1} = {}) {
                super({enableHWA: e}), this._document = t
            }

            _createCanvas(t, e) {
                let i = this._document.createElement("canvas");
                return i.width = t, i.height = e, i
            }
        }

        async function to(t, e = "text") {
            if (tb(t, document.baseURI)) {
                let i = await fetch(t);
                if (!i.ok) throw Error(i.statusText);
                switch (e) {
                    case"arraybuffer":
                        return i.arrayBuffer();
                    case"blob":
                        return i.blob();
                    case"json":
                        return i.json()
                }
                return i.text()
            }
            return new Promise((i, s) => {
                let r = new XMLHttpRequest;
                r.open("GET", t, !0), r.responseType = e, r.onreadystatechange = () => {
                    if (r.readyState === XMLHttpRequest.DONE) {
                        if (200 === r.status || 0 === r.status) {
                            switch (e) {
                                case"arraybuffer":
                                case"blob":
                                case"json":
                                    i(r.response);
                                    return
                            }
                            i(r.responseText);
                            return
                        }
                        s(Error(r.statusText))
                    }
                }, r.send(null)
            })
        }

        class tl extends tt {
            _fetchData(t, e) {
                return to(t, this.isCompressed ? "arraybuffer" : "text").then(t => ({
                    cMapData: t instanceof ArrayBuffer ? new Uint8Array(t) : U(t),
                    compressionType: e
                }))
            }
        }

        class th extends te {
            _fetchData(t) {
                return to(t, "arraybuffer").then(t => new Uint8Array(t))
            }
        }

        class td extends ti {
            _createSVG(t) {
                return document.createElementNS(ts, t)
            }
        }

        class tc {
            constructor({viewBox: t, scale: e, rotation: i, offsetX: s = 0, offsetY: r = 0, dontFlip: n = !1}) {
                let a, o, l, h, d, c, u, p;
                this.viewBox = t, this.scale = e, this.rotation = i, this.offsetX = s, this.offsetY = r;
                let g = (t[2] + t[0]) / 2, f = (t[3] + t[1]) / 2;
                switch ((i %= 360) < 0 && (i += 360), i) {
                    case 180:
                        a = -1, o = 0, l = 0, h = 1;
                        break;
                    case 90:
                        a = 0, o = 1, l = 1, h = 0;
                        break;
                    case 270:
                        a = 0, o = -1, l = -1, h = 0;
                        break;
                    case 0:
                        a = 1, o = 0, l = 0, h = -1;
                        break;
                    default:
                        throw Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")
                }
                n && (l = -l, h = -h), 0 === a ? (d = Math.abs(f - t[1]) * e + s, c = Math.abs(g - t[0]) * e + r, u = (t[3] - t[1]) * e, p = (t[2] - t[0]) * e) : (d = Math.abs(g - t[0]) * e + s, c = Math.abs(f - t[1]) * e + r, u = (t[2] - t[0]) * e, p = (t[3] - t[1]) * e), this.transform = [a * e, o * e, l * e, h * e, d - a * e * g - l * e * f, c - o * e * g - h * e * f], this.width = u, this.height = p
            }

            get rawDims() {
                let {viewBox: t} = this;
                return I(this, "rawDims", {pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1]})
            }

            clone({
                      scale: t = this.scale,
                      rotation: e = this.rotation,
                      offsetX: i = this.offsetX,
                      offsetY: s = this.offsetY,
                      dontFlip: r = !1
                  } = {}) {
                return new tc({
                    viewBox: this.viewBox.slice(),
                    scale: t,
                    rotation: e,
                    offsetX: i,
                    offsetY: s,
                    dontFlip: r
                })
            }

            convertToViewportPoint(t, e) {
                return q.applyTransform([t, e], this.transform)
            }

            convertToViewportRectangle(t) {
                let e = q.applyTransform([t[0], t[1]], this.transform),
                    i = q.applyTransform([t[2], t[3]], this.transform);
                return [e[0], e[1], i[0], i[1]]
            }

            convertToPdfPoint(t, e) {
                return q.applyInverseTransform([t, e], this.transform)
            }
        }

        class tu extends P {
            constructor(t, e = 0) {
                super(t, "RenderingCancelledException"), this.extraDelay = e
            }
        }

        function tp(t) {
            let e = t.length, i = 0;
            for (; i < e && "" === t[i].trim();) i++;
            return "data:" === t.substring(i, i + 5).toLowerCase()
        }

        function tg(t) {
            return "string" == typeof t && /\.pdf$/i.test(t)
        }

        function tf(t) {
            return [t] = t.split(/[#?]/, 1), t.substring(t.lastIndexOf("/") + 1)
        }

        function tm(t, e = "document.pdf") {
            if ("string" != typeof t) return e;
            if (tp(t)) return M('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
            let i = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t),
                r = i.exec(s[1]) || i.exec(s[2]) || i.exec(s[3]);
            if (r && (r = r[0]).includes("%")) try {
                r = i.exec(decodeURIComponent(r))[0]
            } catch {
            }
            return r || e
        }

        class tv {
            started = Object.create(null);
            times = [];

            time(t) {
                t in this.started && M(`Timer is already running for ${t}`), this.started[t] = Date.now()
            }

            timeEnd(t) {
                t in this.started || M(`Timer has not been started for ${t}`), this.times.push({
                    name: t,
                    start: this.started[t],
                    end: Date.now()
                }), delete this.started[t]
            }

            toString() {
                let t = [], e = 0;
                for (let {name: t} of this.times) e = Math.max(t.length, e);
                for (let {name: i, start: s, end: r} of this.times) t.push(`${i.padEnd(e)} ${r - s}ms
`);
                return t.join("")
            }
        }

        function tb(t, e) {
            try {
                let {protocol: i} = e ? new URL(t, e) : new URL(t);
                return "http:" === i || "https:" === i
            } catch {
                return !1
            }
        }

        function tA(t) {
            t.preventDefault()
        }

        function ty(t) {
            console.log("Deprecated API usage: " + t)
        }

        class t_ {
            static toDateObject(t) {
                if (!t || "string" != typeof t) return null;
                let e = (s ||= RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?")).exec(t);
                if (!e) return null;
                let i = parseInt(e[1], 10), r = parseInt(e[2], 10);
                r = r >= 1 && r <= 12 ? r - 1 : 0;
                let n = parseInt(e[3], 10);
                n = n >= 1 && n <= 31 ? n : 1;
                let a = parseInt(e[4], 10);
                a = a >= 0 && a <= 23 ? a : 0;
                let o = parseInt(e[5], 10);
                o = o >= 0 && o <= 59 ? o : 0;
                let l = parseInt(e[6], 10);
                l = l >= 0 && l <= 59 ? l : 0;
                let h = e[7] || "Z", d = parseInt(e[8], 10);
                d = d >= 0 && d <= 23 ? d : 0;
                let c = parseInt(e[9], 10) || 0;
                return c = c >= 0 && c <= 59 ? c : 0, "-" === h ? (a += d, o += c) : "+" === h && (a -= d, o -= c), new Date(Date.UTC(i, r, n, a, o, l))
            }
        }

        function tw(t, {scale: e = 1, rotation: i = 0}) {
            let {width: s, height: r} = t.attributes.style;
            return new tc({viewBox: [0, 0, parseInt(s), parseInt(r)], scale: e, rotation: i})
        }

        function tx(t) {
            if (t.startsWith("#")) {
                let e = parseInt(t.slice(1), 16);
                return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]
            }
            return t.startsWith("rgb(") ? t.slice(4, -1).split(",").map(t => parseInt(t)) : t.startsWith("rgba(") ? t.slice(5, -1).split(",").map(t => parseInt(t)).slice(0, 3) : (M(`Not a valid color format: "${t}"`), [0, 0, 0])
        }

        function tE(t) {
            let {a: e, b: i, c: s, d: r, e: n, f: a} = t.getTransform();
            return [e, i, s, r, n, a]
        }

        function tS(t) {
            let {a: e, b: i, c: s, d: r, e: n, f: a} = t.getTransform().invertSelf();
            return [e, i, s, r, n, a]
        }

        function tC(t, e, i = !1, s = !0) {
            if (e instanceof tc) {
                let {pageWidth: s, pageHeight: r} = e.rawDims, {style: n} = t, a = G.isCSSRoundSupported,
                    o = `var(--scale-factor) * ${s}px`, l = `var(--scale-factor) * ${r}px`,
                    h = a ? `round(${o}, 1px)` : `calc(${o})`, d = a ? `round(${l}, 1px)` : `calc(${l})`;
                i && e.rotation % 180 != 0 ? (n.width = d, n.height = h) : (n.width = h, n.height = d)
            }
            s && t.setAttribute("data-main-rotation", e.rotation)
        }

        class tT {
            #y = null;
            #_ = null;
            #w;
            #x = null;

            constructor(t) {
                this.#w = t
            }

            render() {
                let t = this.#y = document.createElement("div");
                t.className = "editToolbar", t.setAttribute("role", "toolbar");
                let e = this.#w._uiManager._signal;
                t.addEventListener("contextmenu", tA, {signal: e}), t.addEventListener("pointerdown", tT.#E, {signal: e});
                let i = this.#x = document.createElement("div");
                i.className = "buttons", t.append(i);
                let s = this.#w.toolbarPosition;
                if (s) {
                    let {style: e} = t, i = "ltr" === this.#w._uiManager.direction ? 1 - s[0] : s[0];
                    e.insetInlineEnd = `${100 * i}%`, e.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`
                }
                return this.#S(), t
            }

            static #E(t) {
                t.stopPropagation()
            }

            #C(t) {
                this.#w._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation()
            }

            #T(t) {
                this.#w._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation()
            }

            #M(t) {
                let e = this.#w._uiManager._signal;
                t.addEventListener("focusin", this.#C.bind(this), {
                    capture: !0,
                    signal: e
                }), t.addEventListener("focusout", this.#T.bind(this), {
                    capture: !0,
                    signal: e
                }), t.addEventListener("contextmenu", tA, {signal: e})
            }

            hide() {
                this.#y.classList.add("hidden"), this.#_?.hideDropdown()
            }

            show() {
                this.#y.classList.remove("hidden")
            }

            #S() {
                let t = document.createElement("button");
                t.className = "delete", t.tabIndex = 0, t.setAttribute("data-l10n-id", `pdfjs-editor-remove-${this.#w.editorType}-button`), this.#M(t), t.addEventListener("click", t => {
                    this.#w._uiManager.delete()
                }, {signal: this.#w._uiManager._signal}), this.#x.append(t)
            }

            get #R() {
                let t = document.createElement("div");
                return t.className = "divider", t
            }

            addAltTextButton(t) {
                this.#M(t), this.#x.prepend(t, this.#R)
            }

            addColorPicker(t) {
                this.#_ = t;
                let e = t.renderButton();
                this.#M(e), this.#x.prepend(e, this.#R)
            }

            remove() {
                this.#y.remove(), this.#_?.destroy(), this.#_ = null
            }
        }

        class tM {
            #x = null;
            #y = null;
            #k;

            constructor(t) {
                this.#k = t
            }

            #L() {
                let t = this.#y = document.createElement("div");
                t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", tA, {signal: this.#k._signal});
                let e = this.#x = document.createElement("div");
                return e.className = "buttons", t.append(e), this.#I(), t
            }

            #P(t, e) {
                let i = 0, s = 0;
                for (let r of t) {
                    let t = r.y + r.height;
                    if (t < i) continue;
                    let n = r.x + (e ? r.width : 0);
                    if (t > i) {
                        s = n, i = t;
                        continue
                    }
                    e ? n > s && (s = n) : n < s && (s = n)
                }
                return [e ? 1 - s : s, i]
            }

            show(t, e, i) {
                let [s, r] = this.#P(e, i), {style: n} = this.#y ||= this.#L();
                t.append(this.#y), n.insetInlineEnd = `${100 * s}%`, n.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`
            }

            hide() {
                this.#y.remove()
            }

            #I() {
                let t = document.createElement("button");
                t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
                let e = document.createElement("span");
                t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
                let i = this.#k._signal;
                t.addEventListener("contextmenu", tA, {signal: i}), t.addEventListener("click", () => {
                    this.#k.highlightSelection("floating_button")
                }, {signal: i}), this.#x.append(t)
            }
        }

        function tR(t, e, i) {
            for (let s of i) e.addEventListener(s, t[s].bind(t))
        }

        class tk {
            #l = 0;

            get id() {
                return `pdfjs_internal_editor_${this.#l++}`
            }
        }

        class tL {
            #D = (function () {
                if ("undefined" != typeof crypto && "function" == typeof crypto?.randomUUID) return crypto.randomUUID();
                let t = new Uint8Array(32);
                if ("undefined" != typeof crypto && "function" == typeof crypto?.getRandomValues) crypto.getRandomValues(t); else for (let e = 0; e < 32; e++) t[e] = Math.floor(255 * Math.random());
                return j(t)
            })();
            #l = 0;
            #h = null;

            static get _isSVGFittingCanvas() {
                let t = new OffscreenCanvas(1, 3).getContext("2d", {willReadFrequently: !0}), e = new Image;
                return e.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', I(this, "_isSVGFittingCanvas", e.decode().then(() => (t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3), 0 === new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0])))
            }

            async #F(t, e) {
                this.#h ||= new Map;
                let i = this.#h.get(t);
                if (null === i) return null;
                if (i?.bitmap) return i.refCounter += 1, i;
                try {
                    let t;
                    if (i ||= {
                        bitmap: null,
                        id: `image_${this.#D}_${this.#l++}`,
                        refCounter: 0,
                        isSvg: !1
                    }, "string" == typeof e ? (i.url = e, t = await to(e, "blob")) : t = i.file = e, "image/svg+xml" === t.type) {
                        let e = tL._isSVGFittingCanvas, s = new FileReader, r = new Image, n = new Promise((t, n) => {
                            r.onload = () => {
                                i.bitmap = r, i.isSvg = !0, t()
                            }, s.onload = async () => {
                                let t = i.svgUrl = s.result;
                                r.src = await e ? `${t}#svgView(preserveAspectRatio(none))` : t
                            }, r.onerror = s.onerror = n
                        });
                        s.readAsDataURL(t), await n
                    } else i.bitmap = await createImageBitmap(t);
                    i.refCounter = 1
                } catch (t) {
                    console.error(t), i = null
                }
                return this.#h.set(t, i), i && this.#h.set(i.id, i), i
            }

            async getFromFile(t) {
                let {lastModified: e, name: i, size: s, type: r} = t;
                return this.#F(`${e}_${i}_${s}_${r}`, t)
            }

            async getFromUrl(t) {
                return this.#F(t, t)
            }

            async getFromId(t) {
                this.#h ||= new Map;
                let e = this.#h.get(t);
                return e ? e.bitmap ? (e.refCounter += 1, e) : e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url) : null
            }

            getSvgUrl(t) {
                let e = this.#h.get(t);
                return e?.isSvg ? e.svgUrl : null
            }

            deleteId(t) {
                this.#h ||= new Map;
                let e = this.#h.get(t);
                e && (e.refCounter -= 1, 0 === e.refCounter && (e.bitmap = null))
            }

            isValidId(t) {
                return t.startsWith(`image_${this.#D}_`)
            }
        }

        class tI {
            #O = [];
            #N = !1;
            #B;
            #H = -1;

            constructor(t = 128) {
                this.#B = t
            }

            add({cmd: t, undo: e, post: i, mustExec: s, type: r = NaN, overwriteIfSameType: n = !1, keepUndo: a = !1}) {
                if (s && t(), this.#N) return;
                let o = {cmd: t, undo: e, post: i, type: r};
                if (-1 === this.#H) {
                    this.#O.length > 0 && (this.#O.length = 0), this.#H = 0, this.#O.push(o);
                    return
                }
                if (n && this.#O[this.#H].type === r) {
                    a && (o.undo = this.#O[this.#H].undo), this.#O[this.#H] = o;
                    return
                }
                let l = this.#H + 1;
                l === this.#B ? this.#O.splice(0, 1) : (this.#H = l, l < this.#O.length && this.#O.splice(l)), this.#O.push(o)
            }

            undo() {
                if (-1 === this.#H) return;
                this.#N = !0;
                let {undo: t, post: e} = this.#O[this.#H];
                t(), e?.(), this.#N = !1, this.#H -= 1
            }

            redo() {
                if (this.#H < this.#O.length - 1) {
                    this.#H += 1, this.#N = !0;
                    let {cmd: t, post: e} = this.#O[this.#H];
                    t(), e?.(), this.#N = !1
                }
            }

            hasSomethingToUndo() {
                return -1 !== this.#H
            }

            hasSomethingToRedo() {
                return this.#H < this.#O.length - 1
            }

            destroy() {
                this.#O = null
            }
        }

        class tP {
            constructor(t) {
                this.buffer = [], this.callbacks = new Map, this.allKeys = new Set;
                let {isMac: e} = G.platform;
                for (let [i, s, r = {}] of t) for (let t of i) {
                    let i = t.startsWith("mac+");
                    e && i ? (this.callbacks.set(t.slice(4), {
                        callback: s,
                        options: r
                    }), this.allKeys.add(t.split("+").at(-1))) : e || i || (this.callbacks.set(t, {
                        callback: s,
                        options: r
                    }), this.allKeys.add(t.split("+").at(-1)))
                }
            }

            #z(t) {
                t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
                let e = this.buffer.join("+");
                return this.buffer.length = 0, e
            }

            exec(t, e) {
                if (!this.allKeys.has(e.key)) return;
                let i = this.callbacks.get(this.#z(e));
                if (!i) return;
                let {callback: s, options: {bubbles: r = !1, args: n = [], checker: a = null}} = i;
                (!a || a(t, e)) && (s.bind(t, ...n, e)(), r || (e.stopPropagation(), e.preventDefault()))
            }
        }

        class tD {
            static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);

            get _colors() {
                let t = new Map([["CanvasText", null], ["Canvas", null]]);
                return !function (t) {
                    let e = document.createElement("span");
                    for (let i of (e.style.visibility = "hidden", document.body.append(e), t.keys())) {
                        e.style.color = i;
                        let s = window.getComputedStyle(e).color;
                        t.set(i, tx(s))
                    }
                    e.remove()
                }(t), I(this, "_colors", t)
            }

            convert(t) {
                let e = tx(t);
                if (!window.matchMedia("(forced-colors: active)").matches) return e;
                for (let [t, i] of this._colors) if (i.every((t, i) => t === e[i])) return tD._colorsMapping.get(t);
                return e
            }

            getHexCode(t) {
                let e = this._colors.get(t);
                return e ? q.makeHexColor(...e) : t
            }
        }

        class tF {
            #j = new AbortController;
            #U = null;
            #$ = new Map;
            #G = new Map;
            #V = null;
            #q = null;
            #W = null;
            #K = new tI;
            #X = 0;
            #Y = new Set;
            #Q = null;
            #J = null;
            #Z = new Set;
            #tt = !1;
            #te = null;
            #ti = null;
            #ts = null;
            #tr = !1;
            #tn = null;
            #ta = new tk;
            #to = !1;
            #tl = !1;
            #th = null;
            #td = null;
            #tc = null;
            #tu = f.NONE;
            #tp = new Set;
            #tg = null;
            #tf = null;
            #tm = null;
            #tv = this.blur.bind(this);
            #tb = this.focus.bind(this);
            #tA = this.copy.bind(this);
            #ty = this.cut.bind(this);
            #t_ = this.paste.bind(this);
            #tw = this.keydown.bind(this);
            #tx = this.keyup.bind(this);
            #tE = this.onEditingAction.bind(this);
            #tS = this.onPageChanging.bind(this);
            #tC = this.onScaleChanging.bind(this);
            #tT = this.onRotationChanging.bind(this);
            #tM = {
                isEditing: !1,
                isEmpty: !0,
                hasSomethingToUndo: !1,
                hasSomethingToRedo: !1,
                hasSelectedEditor: !1,
                hasSelectedText: !1
            };
            #tR = [0, 0];
            #tk = null;
            #tL = null;
            #tI = null;
            static TRANSLATE_SMALL = 1;
            static TRANSLATE_BIG = 10;

            static get _keyboardManager() {
                let t = tF.prototype,
                    e = t => t.#tL.contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t.hasSomethingToControl(),
                    i = (t, {target: e}) => {
                        if (e instanceof HTMLInputElement) {
                            let {type: t} = e;
                            return "text" !== t && "number" !== t
                        }
                        return !0
                    }, s = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
                return I(this, "_keyboardManager", new tP([[["ctrl+a", "mac+meta+a"], t.selectAll, {checker: i}], [["ctrl+z", "mac+meta+z"], t.undo, {checker: i}], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {checker: i}], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {checker: i}], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {checker: (t, {target: e}) => !(e instanceof HTMLButtonElement) && t.#tL.contains(e) && !t.isEnterHandled}], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {checker: (t, {target: e}) => !(e instanceof HTMLButtonElement) && t.#tL.contains(document.activeElement)}], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
                    args: [-s, 0],
                    checker: e
                }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
                    args: [-r, 0],
                    checker: e
                }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
                    args: [s, 0],
                    checker: e
                }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
                    args: [r, 0],
                    checker: e
                }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
                    args: [0, -s],
                    checker: e
                }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
                    args: [0, -r],
                    checker: e
                }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
                    args: [0, s],
                    checker: e
                }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
                    args: [0, r],
                    checker: e
                }]]))
            }

            constructor(t, e, i, s, r, n, a, o, l) {
                this._signal = this.#j.signal, this.#tL = t, this.#tI = e, this.#V = i, this._eventBus = s, this._eventBus._on("editingaction", this.#tE), this._eventBus._on("pagechanging", this.#tS), this._eventBus._on("scalechanging", this.#tC), this._eventBus._on("rotationchanging", this.#tT), this.#tP(), this.#tD(), this.#tF(), this.#q = r.annotationStorage, this.#te = r.filterFactory, this.#tf = n, this.#ts = a || null, this.#tt = o, this.#tc = l || null, this.viewParameters = {
                    realScale: tr.PDF_TO_CSS_UNITS,
                    rotation: 0
                }, this.isShiftKeyDown = !1
            }

            destroy() {
                for (let t of (this.#j?.abort(), this.#j = null, this._signal = null, this._eventBus._off("editingaction", this.#tE), this._eventBus._off("pagechanging", this.#tS), this._eventBus._off("scalechanging", this.#tC), this._eventBus._off("rotationchanging", this.#tT), this.#G.values())) t.destroy();
                this.#G.clear(), this.#$.clear(), this.#Z.clear(), this.#U = null, this.#tp.clear(), this.#K.destroy(), this.#V?.destroy(), this.#tn?.hide(), this.#tn = null, this.#ti && (clearTimeout(this.#ti), this.#ti = null), this.#tk && (clearTimeout(this.#tk), this.#tk = null)
            }

            async mlGuess(t) {
                return this.#tc?.guess(t) || null
            }

            get hasMLManager() {
                return !!this.#tc
            }

            get hcmFilter() {
                return I(this, "hcmFilter", this.#tf ? this.#te.addHCMFilter(this.#tf.foreground, this.#tf.background) : "none")
            }

            get direction() {
                return I(this, "direction", getComputedStyle(this.#tL).direction)
            }

            get highlightColors() {
                return I(this, "highlightColors", this.#ts ? new Map(this.#ts.split(",").map(t => t.split("=").map(t => t.trim()))) : null)
            }

            get highlightColorNames() {
                return I(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, t => t.reverse())) : null)
            }

            setMainHighlightColorPicker(t) {
                this.#td = t
            }

            editAltText(t) {
                this.#V?.editAltText(this, t)
            }

            onPageChanging({pageNumber: t}) {
                this.#X = t - 1
            }

            focusMainContainer() {
                this.#tL.focus()
            }

            findParent(t, e) {
                for (let i of this.#G.values()) {
                    let {x: s, y: r, width: n, height: a} = i.div.getBoundingClientRect();
                    if (t >= s && t <= s + n && e >= r && e <= r + a) return i
                }
                return null
            }

            disableUserSelect(t = !1) {
                this.#tI.classList.toggle("noUserSelect", t)
            }

            addShouldRescale(t) {
                this.#Z.add(t)
            }

            removeShouldRescale(t) {
                this.#Z.delete(t)
            }

            onScaleChanging({scale: t}) {
                for (let e of (this.commitOrRemove(), this.viewParameters.realScale = t * tr.PDF_TO_CSS_UNITS, this.#Z)) e.onScaleChanging()
            }

            onRotationChanging({pagesRotation: t}) {
                this.commitOrRemove(), this.viewParameters.rotation = t
            }

            #tO({anchorNode: t}) {
                return t.nodeType === Node.TEXT_NODE ? t.parentElement : t
            }

            highlightSelection(t = "") {
                let e = document.getSelection();
                if (!e || e.isCollapsed) return;
                let {anchorNode: i, anchorOffset: s, focusNode: r, focusOffset: n} = e, a = e.toString(),
                    o = this.#tO(e).closest(".textLayer"), l = this.getSelectionBoxes(o);
                if (l) {
                    for (let h of (e.empty(), this.#tu === f.NONE && (this._eventBus.dispatch("showannotationeditorui", {
                        source: this,
                        mode: f.HIGHLIGHT
                    }), this.showAllEditors("highlight", !0, !0)), this.#G.values())) if (h.hasTextLayer(o)) {
                        h.createAndAddNewEditor({x: 0, y: 0}, !1, {
                            methodOfCreation: t,
                            boxes: l,
                            anchorNode: i,
                            anchorOffset: s,
                            focusNode: r,
                            focusOffset: n,
                            text: a
                        });
                        break
                    }
                }
            }

            #tN() {
                let t = document.getSelection();
                if (!t || t.isCollapsed) return;
                let e = this.#tO(t).closest(".textLayer"), i = this.getSelectionBoxes(e);
                i && (this.#tn ||= new tM(this), this.#tn.show(e, i, "ltr" === this.direction))
            }

            addToAnnotationStorage(t) {
                t.isEmpty() || !this.#q || this.#q.has(t.id) || this.#q.setValue(t.id, t)
            }

            #tB() {
                let t = document.getSelection();
                if (!t || t.isCollapsed) {
                    this.#tg && (this.#tn?.hide(), this.#tg = null, this.#tH({hasSelectedText: !1}));
                    return
                }
                let {anchorNode: e} = t;
                if (e !== this.#tg) {
                    if (!this.#tO(t).closest(".textLayer")) {
                        this.#tg && (this.#tn?.hide(), this.#tg = null, this.#tH({hasSelectedText: !1}));
                        return
                    }
                    if (this.#tn?.hide(), this.#tg = e, this.#tH({hasSelectedText: !0}), (this.#tu === f.HIGHLIGHT || this.#tu === f.NONE) && (this.#tu === f.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), this.#tr = this.isShiftKeyDown, !this.isShiftKeyDown)) {
                        let t = this._signal, e = t => {
                            ("pointerup" !== t.type || 0 === t.button) && (window.removeEventListener("pointerup", e), window.removeEventListener("blur", e), "pointerup" === t.type && this.#tz("main_toolbar"))
                        };
                        window.addEventListener("pointerup", e, {signal: t}), window.addEventListener("blur", e, {signal: t})
                    }
                }
            }

            #tz(t = "") {
                this.#tu === f.HIGHLIGHT ? this.highlightSelection(t) : this.#tt && this.#tN()
            }

            #tP() {
                document.addEventListener("selectionchange", this.#tB.bind(this), {signal: this._signal})
            }

            #tj() {
                let t = this._signal;
                window.addEventListener("focus", this.#tb, {signal: t}), window.addEventListener("blur", this.#tv, {signal: t})
            }

            #tU() {
                window.removeEventListener("focus", this.#tb), window.removeEventListener("blur", this.#tv)
            }

            blur() {
                if (this.isShiftKeyDown = !1, this.#tr && (this.#tr = !1, this.#tz("main_toolbar")), !this.hasSelection) return;
                let {activeElement: t} = document;
                for (let e of this.#tp) if (e.div.contains(t)) {
                    this.#th = [e, t], e._focusEventsAllowed = !1;
                    break
                }
            }

            focus() {
                if (!this.#th) return;
                let [t, e] = this.#th;
                this.#th = null, e.addEventListener("focusin", () => {
                    t._focusEventsAllowed = !0
                }, {once: !0, signal: this._signal}), e.focus()
            }

            #tF() {
                let t = this._signal;
                window.addEventListener("keydown", this.#tw, {signal: t}), window.addEventListener("keyup", this.#tx, {signal: t})
            }

            #t$() {
                window.removeEventListener("keydown", this.#tw), window.removeEventListener("keyup", this.#tx)
            }

            #tG() {
                let t = this._signal;
                document.addEventListener("copy", this.#tA, {signal: t}), document.addEventListener("cut", this.#ty, {signal: t}), document.addEventListener("paste", this.#t_, {signal: t})
            }

            #tV() {
                document.removeEventListener("copy", this.#tA), document.removeEventListener("cut", this.#ty), document.removeEventListener("paste", this.#t_)
            }

            #tD() {
                let t = this._signal;
                document.addEventListener("dragover", this.dragOver.bind(this), {signal: t}), document.addEventListener("drop", this.drop.bind(this), {signal: t})
            }

            addEditListeners() {
                this.#tF(), this.#tG()
            }

            removeEditListeners() {
                this.#t$(), this.#tV()
            }

            dragOver(t) {
                for (let {type: e} of t.dataTransfer.items) for (let i of this.#J) if (i.isHandlingMimeForPasting(e)) {
                    t.dataTransfer.dropEffect = "copy", t.preventDefault();
                    return
                }
            }

            drop(t) {
                for (let e of t.dataTransfer.items) for (let i of this.#J) if (i.isHandlingMimeForPasting(e.type)) {
                    i.paste(e, this.currentLayer), t.preventDefault();
                    return
                }
            }

            copy(t) {
                if (t.preventDefault(), this.#U?.commitOrRemove(), !this.hasSelection) return;
                let e = [];
                for (let t of this.#tp) {
                    let i = t.serialize(!0);
                    i && e.push(i)
                }
                0 !== e.length && t.clipboardData.setData("application/pdfjs", JSON.stringify(e))
            }

            cut(t) {
                this.copy(t), this.delete()
            }

            paste(t) {
                t.preventDefault();
                let {clipboardData: e} = t;
                for (let t of e.items) for (let e of this.#J) if (e.isHandlingMimeForPasting(t.type)) {
                    e.paste(t, this.currentLayer);
                    return
                }
                let i = e.getData("application/pdfjs");
                if (!i) return;
                try {
                    i = JSON.parse(i)
                } catch (t) {
                    M(`paste: "${t.message}".`);
                    return
                }
                if (!Array.isArray(i)) return;
                this.unselectAll();
                let s = this.currentLayer;
                try {
                    let t = [];
                    for (let e of i) {
                        let i = s.deserialize(e);
                        if (!i) return;
                        t.push(i)
                    }
                    this.addCommands({
                        cmd: () => {
                            for (let e of t) this.#tq(e);
                            this.#tW(t)
                        }, undo: () => {
                            for (let e of t) e.remove()
                        }, mustExec: !0
                    })
                } catch (t) {
                    M(`paste: "${t.message}".`)
                }
            }

            keydown(t) {
                this.isShiftKeyDown || "Shift" !== t.key || (this.isShiftKeyDown = !0), this.#tu === f.NONE || this.isEditorHandlingKeyboard || tF._keyboardManager.exec(this, t)
            }

            keyup(t) {
                this.isShiftKeyDown && "Shift" === t.key && (this.isShiftKeyDown = !1, this.#tr && (this.#tr = !1, this.#tz("main_toolbar")))
            }

            onEditingAction({name: t}) {
                switch (t) {
                    case"undo":
                    case"redo":
                    case"delete":
                    case"selectAll":
                        this[t]();
                        break;
                    case"highlightSelection":
                        this.highlightSelection("context_menu")
                }
            }

            #tH(t) {
                Object.entries(t).some(([t, e]) => this.#tM[t] !== e) && (this._eventBus.dispatch("annotationeditorstateschanged", {
                    source: this,
                    details: Object.assign(this.#tM, t)
                }), this.#tu === f.HIGHLIGHT && !1 === t.hasSelectedEditor && this.#tK([[m.HIGHLIGHT_FREE, !0]]))
            }

            #tK(t) {
                this._eventBus.dispatch("annotationeditorparamschanged", {source: this, details: t})
            }

            setEditingState(t) {
                t ? (this.#tj(), this.#tG(), this.#tH({
                    isEditing: this.#tu !== f.NONE,
                    isEmpty: this.#tX(),
                    hasSomethingToUndo: this.#K.hasSomethingToUndo(),
                    hasSomethingToRedo: this.#K.hasSomethingToRedo(),
                    hasSelectedEditor: !1
                })) : (this.#tU(), this.#tV(), this.#tH({isEditing: !1}), this.disableUserSelect(!1))
            }

            registerEditorTypes(t) {
                if (!this.#J) for (let e of (this.#J = t, this.#J)) this.#tK(e.defaultPropertiesToUpdate)
            }

            getId() {
                return this.#ta.id
            }

            get currentLayer() {
                return this.#G.get(this.#X)
            }

            getLayer(t) {
                return this.#G.get(t)
            }

            get currentPageIndex() {
                return this.#X
            }

            addLayer(t) {
                this.#G.set(t.pageIndex, t), this.#to ? t.enable() : t.disable()
            }

            removeLayer(t) {
                this.#G.delete(t.pageIndex)
            }

            updateMode(t, e = null, i = !1) {
                if (this.#tu !== t) {
                    if (this.#tu = t, t === f.NONE) {
                        this.setEditingState(!1), this.#tY();
                        return
                    }
                    for (let e of (this.setEditingState(!0), this.#tQ(), this.unselectAll(), this.#G.values())) e.updateMode(t);
                    if (!e && i) {
                        this.addNewEditorFromKeyboard();
                        return
                    }
                    if (e) {
                        for (let t of this.#$.values()) if (t.annotationElementId === e) {
                            this.setSelected(t), t.enterInEditMode();
                            break
                        }
                    }
                }
            }

            addNewEditorFromKeyboard() {
                this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor()
            }

            updateToolbar(t) {
                t !== this.#tu && this._eventBus.dispatch("switchannotationeditormode", {source: this, mode: t})
            }

            updateParams(t, e) {
                if (this.#J) {
                    switch (t) {
                        case m.CREATE:
                            this.currentLayer.addNewEditor();
                            return;
                        case m.HIGHLIGHT_DEFAULT_COLOR:
                            this.#td?.updateColor(e);
                            break;
                        case m.HIGHLIGHT_SHOW_ALL:
                            this._eventBus.dispatch("reporttelemetry", {
                                source: this,
                                details: {type: "editing", data: {type: "highlight", action: "toggle_visibility"}}
                            }), (this.#tm ||= new Map).set(t, e), this.showAllEditors("highlight", e)
                    }
                    for (let i of this.#tp) i.updateParams(t, e);
                    for (let i of this.#J) i.updateDefaultParams(t, e)
                }
            }

            showAllEditors(t, e, i = !1) {
                for (let i of this.#$.values()) i.editorType === t && i.show(e);
                (this.#tm?.get(m.HIGHLIGHT_SHOW_ALL) ?? !0) !== e && this.#tK([[m.HIGHLIGHT_SHOW_ALL, e]])
            }

            enableWaiting(t = !1) {
                if (this.#tl !== t) for (let e of (this.#tl = t, this.#G.values())) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t)
            }

            #tQ() {
                if (!this.#to) {
                    for (let t of (this.#to = !0, this.#G.values())) t.enable();
                    for (let t of this.#$.values()) t.enable()
                }
            }

            #tY() {
                if (this.unselectAll(), this.#to) {
                    for (let t of (this.#to = !1, this.#G.values())) t.disable();
                    for (let t of this.#$.values()) t.disable()
                }
            }

            getEditors(t) {
                let e = [];
                for (let i of this.#$.values()) i.pageIndex === t && e.push(i);
                return e
            }

            getEditor(t) {
                return this.#$.get(t)
            }

            addEditor(t) {
                this.#$.set(t.id, t)
            }

            removeEditor(t) {
                t.div.contains(document.activeElement) && (this.#ti && clearTimeout(this.#ti), this.#ti = setTimeout(() => {
                    this.focusMainContainer(), this.#ti = null
                }, 0)), this.#$.delete(t.id), this.unselect(t), t.annotationElementId && this.#Y.has(t.annotationElementId) || this.#q?.remove(t.id)
            }

            addDeletedAnnotationElement(t) {
                this.#Y.add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0
            }

            isDeletedAnnotationElement(t) {
                return this.#Y.has(t)
            }

            removeDeletedAnnotationElement(t) {
                this.#Y.delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1
            }

            #tq(t) {
                let e = this.#G.get(t.pageIndex);
                e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t))
            }

            setActiveEditor(t) {
                this.#U !== t && (this.#U = t, t && this.#tK(t.propertiesToUpdate))
            }

            get #tJ() {
                let t = null;
                for (t of this.#tp) ;
                return t
            }

            updateUI(t) {
                this.#tJ === t && this.#tK(t.propertiesToUpdate)
            }

            toggleSelected(t) {
                if (this.#tp.has(t)) {
                    this.#tp.delete(t), t.unselect(), this.#tH({hasSelectedEditor: this.hasSelection});
                    return
                }
                this.#tp.add(t), t.select(), this.#tK(t.propertiesToUpdate), this.#tH({hasSelectedEditor: !0})
            }

            setSelected(t) {
                for (let e of this.#tp) e !== t && e.unselect();
                this.#tp.clear(), this.#tp.add(t), t.select(), this.#tK(t.propertiesToUpdate), this.#tH({hasSelectedEditor: !0})
            }

            isSelected(t) {
                return this.#tp.has(t)
            }

            get firstSelectedEditor() {
                return this.#tp.values().next().value
            }

            unselect(t) {
                t.unselect(), this.#tp.delete(t), this.#tH({hasSelectedEditor: this.hasSelection})
            }

            get hasSelection() {
                return 0 !== this.#tp.size
            }

            get isEnterHandled() {
                return 1 === this.#tp.size && this.firstSelectedEditor.isEnterHandled
            }

            undo() {
                this.#K.undo(), this.#tH({
                    hasSomethingToUndo: this.#K.hasSomethingToUndo(),
                    hasSomethingToRedo: !0,
                    isEmpty: this.#tX()
                })
            }

            redo() {
                this.#K.redo(), this.#tH({
                    hasSomethingToUndo: !0,
                    hasSomethingToRedo: this.#K.hasSomethingToRedo(),
                    isEmpty: this.#tX()
                })
            }

            addCommands(t) {
                this.#K.add(t), this.#tH({hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: this.#tX()})
            }

            #tX() {
                if (0 === this.#$.size) return !0;
                if (1 === this.#$.size) for (let t of this.#$.values()) return t.isEmpty();
                return !1
            }

            delete() {
                if (this.commitOrRemove(), !this.hasSelection) return;
                let t = [...this.#tp];
                this.addCommands({
                    cmd: () => {
                        for (let e of t) e.remove()
                    }, undo: () => {
                        for (let e of t) this.#tq(e)
                    }, mustExec: !0
                })
            }

            commitOrRemove() {
                this.#U?.commitOrRemove()
            }

            hasSomethingToControl() {
                return this.#U || this.hasSelection
            }

            #tW(t) {
                for (let t of this.#tp) t.unselect();
                for (let e of (this.#tp.clear(), t)) e.isEmpty() || (this.#tp.add(e), e.select());
                this.#tH({hasSelectedEditor: this.hasSelection})
            }

            selectAll() {
                for (let t of this.#tp) t.commit();
                this.#tW(this.#$.values())
            }

            unselectAll() {
                if ((!this.#U || (this.#U.commitOrRemove(), this.#tu === f.NONE)) && this.hasSelection) {
                    for (let t of this.#tp) t.unselect();
                    this.#tp.clear(), this.#tH({hasSelectedEditor: !1})
                }
            }

            translateSelectedEditors(t, e, i = !1) {
                if (i || this.commitOrRemove(), !this.hasSelection) return;
                this.#tR[0] += t, this.#tR[1] += e;
                let [s, r] = this.#tR, n = [...this.#tp];
                for (let i of (this.#tk && clearTimeout(this.#tk), this.#tk = setTimeout(() => {
                    this.#tk = null, this.#tR[0] = this.#tR[1] = 0, this.addCommands({
                        cmd: () => {
                            for (let t of n) this.#$.has(t.id) && t.translateInPage(s, r)
                        }, undo: () => {
                            for (let t of n) this.#$.has(t.id) && t.translateInPage(-s, -r)
                        }, mustExec: !1
                    })
                }, 1e3), n)) i.translateInPage(t, e)
            }

            setUpDragSession() {
                if (this.hasSelection) for (let t of (this.disableUserSelect(!0), this.#Q = new Map, this.#tp)) this.#Q.set(t, {
                    savedX: t.x,
                    savedY: t.y,
                    savedPageIndex: t.pageIndex,
                    newX: 0,
                    newY: 0,
                    newPageIndex: -1
                })
            }

            endDragSession() {
                if (!this.#Q) return !1;
                this.disableUserSelect(!1);
                let t = this.#Q;
                this.#Q = null;
                let e = !1;
                for (let [{
                    x: i,
                    y: s,
                    pageIndex: r
                }, n] of t) n.newX = i, n.newY = s, n.newPageIndex = r, e ||= i !== n.savedX || s !== n.savedY || r !== n.savedPageIndex;
                if (!e) return !1;
                let i = (t, e, i, s) => {
                    if (this.#$.has(t.id)) {
                        let r = this.#G.get(s);
                        r ? t._setParentAndPosition(r, e, i) : (t.pageIndex = s, t.x = e, t.y = i)
                    }
                };
                return this.addCommands({
                    cmd: () => {
                        for (let [e, {newX: s, newY: r, newPageIndex: n}] of t) i(e, s, r, n)
                    }, undo: () => {
                        for (let [e, {savedX: s, savedY: r, savedPageIndex: n}] of t) i(e, s, r, n)
                    }, mustExec: !0
                }), !0
            }

            dragSelectedEditors(t, e) {
                if (this.#Q) for (let i of this.#Q.keys()) i.drag(t, e)
            }

            rebuild(t) {
                if (null === t.parent) {
                    let e = this.getLayer(t.pageIndex);
                    e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild())
                } else t.parent.addOrRebuild(t)
            }

            get isEditorHandlingKeyboard() {
                return this.getActive()?.shouldGetKeyboardEvents() || 1 === this.#tp.size && this.firstSelectedEditor.shouldGetKeyboardEvents()
            }

            isActive(t) {
                return this.#U === t
            }

            getActive() {
                return this.#U
            }

            getMode() {
                return this.#tu
            }

            get imageManager() {
                return I(this, "imageManager", new tL)
            }

            getSelectionBoxes(t) {
                let e;
                if (!t) return null;
                let i = document.getSelection();
                for (let e = 0, s = i.rangeCount; e < s; e++) if (!t.contains(i.getRangeAt(e).commonAncestorContainer)) return null;
                let {x: s, y: r, width: n, height: a} = t.getBoundingClientRect();
                switch (t.getAttribute("data-main-rotation")) {
                    case"90":
                        e = (t, e, i, o) => ({x: (e - r) / a, y: 1 - (t + i - s) / n, width: o / a, height: i / n});
                        break;
                    case"180":
                        e = (t, e, i, o) => ({
                            x: 1 - (t + i - s) / n,
                            y: 1 - (e + o - r) / a,
                            width: i / n,
                            height: o / a
                        });
                        break;
                    case"270":
                        e = (t, e, i, o) => ({x: 1 - (e + o - r) / a, y: (t - s) / n, width: o / a, height: i / n});
                        break;
                    default:
                        e = (t, e, i, o) => ({x: (t - s) / n, y: (e - r) / a, width: i / n, height: o / a})
                }
                let o = [];
                for (let t = 0, s = i.rangeCount; t < s; t++) {
                    let s = i.getRangeAt(t);
                    if (!s.collapsed) for (let {
                        x: t,
                        y: i,
                        width: r,
                        height: n
                    } of s.getClientRects()) 0 !== r && 0 !== n && o.push(e(t, i, r, n))
                }
                return 0 === o.length ? null : o
            }

            addChangedExistingAnnotation({annotationElementId: t, id: e}) {
                (this.#W ||= new Map).set(t, e)
            }

            removeChangedExistingAnnotation({annotationElementId: t}) {
                this.#W?.delete(t)
            }

            renderAnnotationElement(t) {
                let e = this.#W?.get(t.data.id);
                if (!e) return;
                let i = this.#q.getRawValue(e);
                i && (this.#tu !== f.NONE || i.hasBeenModified) && i.renderAnnotationElement(t)
            }
        }

        class tO {
            #tZ = "";
            #t0 = !1;
            #t1 = null;
            #t2 = null;
            #t5 = null;
            #t4 = !1;
            #w = null;
            static _l10nPromise = null;

            constructor(t) {
                this.#w = t
            }

            static initialize(t) {
                tO._l10nPromise ||= t
            }

            async render() {
                let t = this.#t1 = document.createElement("button");
                t.className = "altText";
                let e = await tO._l10nPromise.get("pdfjs-editor-alt-text-button-label");
                t.textContent = e, t.setAttribute("aria-label", e), t.tabIndex = "0";
                let i = this.#w._uiManager._signal;
                t.addEventListener("contextmenu", tA, {signal: i}), t.addEventListener("pointerdown", t => t.stopPropagation(), {signal: i});
                let s = t => {
                    t.preventDefault(), this.#w._uiManager.editAltText(this.#w)
                };
                return t.addEventListener("click", s, {capture: !0, signal: i}), t.addEventListener("keydown", e => {
                    e.target === t && "Enter" === e.key && (this.#t4 = !0, s(e))
                }, {signal: i}), await this.#t3(), t
            }

            finish() {
                this.#t1 && (this.#t1.focus({focusVisible: this.#t4}), this.#t4 = !1)
            }

            isEmpty() {
                return !this.#tZ && !this.#t0
            }

            get data() {
                return {altText: this.#tZ, decorative: this.#t0}
            }

            set data({altText: t, decorative: e}) {
                (this.#tZ !== t || this.#t0 !== e) && (this.#tZ = t, this.#t0 = e, this.#t3())
            }

            toggle(t = !1) {
                this.#t1 && (!t && this.#t5 && (clearTimeout(this.#t5), this.#t5 = null), this.#t1.disabled = !t)
            }

            destroy() {
                this.#t1?.remove(), this.#t1 = null, this.#t2 = null
            }

            async #t3() {
                let t = this.#t1;
                if (!t) return;
                if (!this.#tZ && !this.#t0) {
                    t.classList.remove("done"), this.#t2?.remove();
                    return
                }
                t.classList.add("done"), tO._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then(e => {
                    t.setAttribute("aria-label", e)
                });
                let e = this.#t2;
                if (!e) {
                    this.#t2 = e = document.createElement("span"), e.className = "tooltip", e.setAttribute("role", "tooltip");
                    let i = e.id = `alt-text-tooltip-${this.#w.id}`;
                    t.setAttribute("aria-describedby", i);
                    let s = this.#w._uiManager._signal;
                    s.addEventListener("abort", () => {
                        clearTimeout(this.#t5), this.#t5 = null
                    }, {once: !0}), t.addEventListener("mouseenter", () => {
                        this.#t5 = setTimeout(() => {
                            this.#t5 = null, this.#t2.classList.add("show"), this.#w._reportTelemetry({action: "alt_text_tooltip"})
                        }, 100)
                    }, {signal: s}), t.addEventListener("mouseleave", () => {
                        this.#t5 && (clearTimeout(this.#t5), this.#t5 = null), this.#t2?.classList.remove("show")
                    }, {signal: s})
                }
                e.innerText = this.#t0 ? await tO._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : this.#tZ, e.parentNode || t.append(e);
                let i = this.#w.getImageForAltText();
                i?.setAttribute("aria-describedby", e.id)
            }
        }

        class tN {
            #t6 = null;
            #t9 = null;
            #tZ = null;
            #t7 = !1;
            #t8 = !1;
            #et = null;
            #ee = null;
            #ei = this.focusin.bind(this);
            #es = this.focusout.bind(this);
            #er = null;
            #en = "";
            #ea = !1;
            #eo = null;
            #el = !1;
            #eh = !1;
            #ed = !1;
            #ec = null;
            #eu = 0;
            #ep = 0;
            #eg = null;
            _initialOptions = Object.create(null);
            _isVisible = !0;
            _uiManager = null;
            _focusEventsAllowed = !0;
            _l10nPromise = null;
            #ef = !1;
            #em = tN._zIndex++;
            static _borderLineWidth = -1;
            static _colorManager = new tD;
            static _zIndex = 1;
            static _telemetryTimeout = 1e3;

            static get _resizerKeyboardManager() {
                let t = tN.prototype._resizeWithKeyboard, e = tF.TRANSLATE_SMALL, i = tF.TRANSLATE_BIG;
                return I(this, "_resizerKeyboardManager", new tP([[["ArrowLeft", "mac+ArrowLeft"], t, {args: [-e, 0]}], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {args: [-i, 0]}], [["ArrowRight", "mac+ArrowRight"], t, {args: [e, 0]}], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {args: [i, 0]}], [["ArrowUp", "mac+ArrowUp"], t, {args: [0, -e]}], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {args: [0, -i]}], [["ArrowDown", "mac+ArrowDown"], t, {args: [0, e]}], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {args: [0, i]}], [["Escape", "mac+Escape"], tN.prototype._stopResizingWithKeyboard]]))
            }

            constructor(t) {
                this.constructor === tN && R("Cannot initialize AnnotationEditor."), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
                let {rotation: e, rawDims: {pageWidth: i, pageHeight: s, pageX: r, pageY: n}} = this.parent.viewport;
                this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, s], this.pageTranslation = [r, n];
                let [a, o] = this.parentDimensions;
                this.x = t.x / a, this.y = t.y / o, this.isAttachedToDOM = !1, this.deleted = !1
            }

            get editorType() {
                return Object.getPrototypeOf(this).constructor._type
            }

            static get _defaultLineColor() {
                return I(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"))
            }

            static deleteAnnotationElement(t) {
                let e = new tB({id: t.parent.getNextId(), parent: t.parent, uiManager: t._uiManager});
                e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e)
            }

            static initialize(t, e, i) {
                if (tN._l10nPromise ||= new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map(e => [e, t.get(e.replaceAll(/([A-Z])/g, t => `-${t.toLowerCase()}`))])), i?.strings) for (let e of i.strings) tN._l10nPromise.set(e, t.get(e));
                if (-1 !== tN._borderLineWidth) return;
                let s = getComputedStyle(document.documentElement);
                tN._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0
            }

            static updateDefaultParams(t, e) {
            }

            static get defaultPropertiesToUpdate() {
                return []
            }

            static isHandlingMimeForPasting(t) {
                return !1
            }

            static paste(t, e) {
                R("Not implemented")
            }

            get propertiesToUpdate() {
                return []
            }

            get _isDraggable() {
                return this.#ef
            }

            set _isDraggable(t) {
                this.#ef = t, this.div?.classList.toggle("draggable", t)
            }

            get isEnterHandled() {
                return !0
            }

            center() {
                let [t, e] = this.pageDimensions;
                switch (this.parentRotation) {
                    case 90:
                        this.x -= this.height * e / (2 * t), this.y += this.width * t / (2 * e);
                        break;
                    case 180:
                        this.x += this.width / 2, this.y += this.height / 2;
                        break;
                    case 270:
                        this.x += this.height * e / (2 * t), this.y -= this.width * t / (2 * e);
                        break;
                    default:
                        this.x -= this.width / 2, this.y -= this.height / 2
                }
                this.fixAndSetPosition()
            }

            addCommands(t) {
                this._uiManager.addCommands(t)
            }

            get currentLayer() {
                return this._uiManager.currentLayer
            }

            setInBackground() {
                this.div.style.zIndex = 0
            }

            setInForeground() {
                this.div.style.zIndex = this.#em
            }

            setParent(t) {
                null !== t ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : this.#ev(), this.parent = t
            }

            focusin(t) {
                this._focusEventsAllowed && (this.#ea ? this.#ea = !1 : this.parent.setSelected(this))
            }

            focusout(t) {
                if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
                let e = t.relatedTarget;
                !e?.closest(`#${this.id}`) && (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove())
            }

            commitOrRemove() {
                this.isEmpty() ? this.remove() : this.commit()
            }

            commit() {
                this.addToAnnotationStorage()
            }

            addToAnnotationStorage() {
                this._uiManager.addToAnnotationStorage(this)
            }

            setAt(t, e, i, s) {
                let [r, n] = this.parentDimensions;
                [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / r, this.y = (e + s) / n, this.fixAndSetPosition()
            }

            #eb([t, e], i, s) {
                [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this.fixAndSetPosition()
            }

            translate(t, e) {
                this.#eb(this.parentDimensions, t, e)
            }

            translateInPage(t, e) {
                this.#eo ||= [this.x, this.y], this.#eb(this.pageDimensions, t, e), this.div.scrollIntoView({block: "nearest"})
            }

            drag(t, e) {
                this.#eo ||= [this.x, this.y];
                let [i, s] = this.parentDimensions;
                if (this.x += t / i, this.y += e / s, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
                    let {x: t, y: e} = this.div.getBoundingClientRect();
                    this.parent.findNewParent(this, t, e) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y))
                }
                let {x: r, y: n} = this, [a, o] = this.getBaseTranslation();
                r += a, n += o, this.div.style.left = `${(100 * r).toFixed(2)}%`, this.div.style.top = `${(100 * n).toFixed(2)}%`, this.div.scrollIntoView({block: "nearest"})
            }

            get _hasBeenMoved() {
                return !!this.#eo && (this.#eo[0] !== this.x || this.#eo[1] !== this.y)
            }

            getBaseTranslation() {
                let [t, e] = this.parentDimensions, {_borderLineWidth: i} = tN, s = i / t, r = i / e;
                switch (this.rotation) {
                    case 90:
                        return [-s, r];
                    case 180:
                        return [s, r];
                    case 270:
                        return [s, -r];
                    default:
                        return [-s, -r]
                }
            }

            get _mustFixPosition() {
                return !0
            }

            fixAndSetPosition(t = this.rotation) {
                let [e, i] = this.pageDimensions, {x: s, y: r, width: n, height: a} = this;
                if (n *= e, a *= i, s *= e, r *= i, this._mustFixPosition) switch (t) {
                    case 0:
                        s = Math.max(0, Math.min(e - n, s)), r = Math.max(0, Math.min(i - a, r));
                        break;
                    case 90:
                        s = Math.max(0, Math.min(e - a, s)), r = Math.min(i, Math.max(n, r));
                        break;
                    case 180:
                        s = Math.min(e, Math.max(n, s)), r = Math.min(i, Math.max(a, r));
                        break;
                    case 270:
                        s = Math.min(e, Math.max(a, s)), r = Math.max(0, Math.min(i - n, r))
                }
                this.x = s /= e, this.y = r /= i;
                let [o, l] = this.getBaseTranslation();
                s += o, r += l;
                let {style: h} = this.div;
                h.left = `${(100 * s).toFixed(2)}%`, h.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM()
            }

            static #eA(t, e, i) {
                switch (i) {
                    case 90:
                        return [e, -t];
                    case 180:
                        return [-t, -e];
                    case 270:
                        return [-e, t];
                    default:
                        return [t, e]
                }
            }

            screenToPageTranslation(t, e) {
                return tN.#eA(t, e, this.parentRotation)
            }

            pageTranslationToScreen(t, e) {
                return tN.#eA(t, e, 360 - this.parentRotation)
            }

            #ey(t) {
                switch (t) {
                    case 90: {
                        let [t, e] = this.pageDimensions;
                        return [0, -t / e, e / t, 0]
                    }
                    case 180:
                        return [-1, 0, 0, -1];
                    case 270: {
                        let [t, e] = this.pageDimensions;
                        return [0, t / e, -e / t, 0]
                    }
                    default:
                        return [1, 0, 0, 1]
                }
            }

            get parentScale() {
                return this._uiManager.viewParameters.realScale
            }

            get parentRotation() {
                return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360
            }

            get parentDimensions() {
                let {parentScale: t, pageDimensions: [e, i]} = this, s = e * t, r = i * t;
                return G.isCSSRoundSupported ? [Math.round(s), Math.round(r)] : [s, r]
            }

            setDims(t, e) {
                let [i, s] = this.parentDimensions;
                this.div.style.width = `${(100 * t / i).toFixed(2)}%`, this.#t8 || (this.div.style.height = `${(100 * e / s).toFixed(2)}%`)
            }

            fixDims() {
                let {style: t} = this.div, {height: e, width: i} = t, s = i.endsWith("%"),
                    r = !this.#t8 && e.endsWith("%");
                if (s && r) return;
                let [n, a] = this.parentDimensions;
                s || (t.width = `${(100 * parseFloat(i) / n).toFixed(2)}%`), this.#t8 || r || (t.height = `${(100 * parseFloat(e) / a).toFixed(2)}%`)
            }

            getInitialTranslation() {
                return [0, 0]
            }

            #e_() {
                if (this.#et) return;
                this.#et = document.createElement("div"), this.#et.classList.add("resizers");
                let t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"],
                    e = this._uiManager._signal;
                for (let i of t) {
                    let t = document.createElement("div");
                    this.#et.append(t), t.classList.add("resizer", i), t.setAttribute("data-resizer-name", i), t.addEventListener("pointerdown", this.#ew.bind(this, i), {signal: e}), t.addEventListener("contextmenu", tA, {signal: e}), t.tabIndex = -1
                }
                this.div.prepend(this.#et)
            }

            #ew(t, e) {
                e.preventDefault();
                let {isMac: i} = G.platform;
                if (0 !== e.button || e.ctrlKey && i) return;
                this.#tZ?.toggle(!1);
                let s = this.#ex.bind(this, t), r = this._isDraggable;
                this._isDraggable = !1;
                let n = this._uiManager._signal, a = {passive: !0, capture: !0, signal: n};
                this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", s, a), window.addEventListener("contextmenu", tA, {signal: n});
                let o = this.x, l = this.y, h = this.width, d = this.height, c = this.parent.div.style.cursor,
                    u = this.div.style.cursor;
                this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
                let p = () => {
                    this.parent.togglePointerEvents(!0), this.#tZ?.toggle(!0), this._isDraggable = r, window.removeEventListener("pointerup", p), window.removeEventListener("blur", p), window.removeEventListener("pointermove", s, a), window.removeEventListener("contextmenu", tA), this.parent.div.style.cursor = c, this.div.style.cursor = u, this.#eE(o, l, h, d)
                };
                window.addEventListener("pointerup", p, {signal: n}), window.addEventListener("blur", p, {signal: n})
            }

            #eE(t, e, i, s) {
                let r = this.x, n = this.y, a = this.width, o = this.height;
                (r !== t || n !== e || a !== i || o !== s) && this.addCommands({
                    cmd: () => {
                        this.width = a, this.height = o, this.x = r, this.y = n;
                        let [t, e] = this.parentDimensions;
                        this.setDims(t * a, e * o), this.fixAndSetPosition()
                    }, undo: () => {
                        this.width = i, this.height = s, this.x = t, this.y = e;
                        let [r, n] = this.parentDimensions;
                        this.setDims(r * i, n * s), this.fixAndSetPosition()
                    }, mustExec: !0
                })
            }

            #ex(t, e) {
                let i, s, r, n;
                let [a, o] = this.parentDimensions, l = this.x, h = this.y, d = this.width, c = this.height,
                    u = tN.MIN_SIZE / a, p = tN.MIN_SIZE / o, g = t => Math.round(1e4 * t) / 1e4,
                    f = this.#ey(this.rotation), m = (t, e) => [f[0] * t + f[2] * e, f[1] * t + f[3] * e],
                    v = this.#ey(360 - this.rotation), b = !1, A = !1;
                switch (t) {
                    case"topLeft":
                        b = !0, i = (t, e) => [0, 0], s = (t, e) => [t, e];
                        break;
                    case"topMiddle":
                        i = (t, e) => [t / 2, 0], s = (t, e) => [t / 2, e];
                        break;
                    case"topRight":
                        b = !0, i = (t, e) => [t, 0], s = (t, e) => [0, e];
                        break;
                    case"middleRight":
                        A = !0, i = (t, e) => [t, e / 2], s = (t, e) => [0, e / 2];
                        break;
                    case"bottomRight":
                        b = !0, i = (t, e) => [t, e], s = (t, e) => [0, 0];
                        break;
                    case"bottomMiddle":
                        i = (t, e) => [t / 2, e], s = (t, e) => [t / 2, 0];
                        break;
                    case"bottomLeft":
                        b = !0, i = (t, e) => [0, e], s = (t, e) => [t, 0];
                        break;
                    case"middleLeft":
                        A = !0, i = (t, e) => [0, e / 2], s = (t, e) => [t, e / 2]
                }
                let y = i(d, c), _ = s(d, c), w = m(..._), x = g(l + w[0]), E = g(h + w[1]), S = 1,
                    C = 1, [T, M] = this.screenToPageTranslation(e.movementX, e.movementY);
                if ([T, M] = (r = T / a, n = M / o, [v[0] * r + v[2] * n, v[1] * r + v[3] * n]), b) {
                    let t = Math.hypot(d, c);
                    S = C = Math.max(Math.min(Math.hypot(_[0] - y[0] - T, _[1] - y[1] - M) / t, 1 / d, 1 / c), u / d, p / c)
                } else A ? S = Math.max(u, Math.min(1, Math.abs(_[0] - y[0] - T))) / d : C = Math.max(p, Math.min(1, Math.abs(_[1] - y[1] - M))) / c;
                let R = g(d * S), k = g(c * C), L = x - (w = m(...s(R, k)))[0], I = E - w[1];
                this.width = R, this.height = k, this.x = L, this.y = I, this.setDims(a * R, o * k), this.fixAndSetPosition()
            }

            altTextFinish() {
                this.#tZ?.finish()
            }

            async addEditToolbar() {
                return this.#er || this.#eh || (this.#er = new tT(this), this.div.append(this.#er.render()), this.#tZ && this.#er.addAltTextButton(await this.#tZ.render())), this.#er
            }

            removeEditToolbar() {
                this.#er && (this.#er.remove(), this.#er = null, this.#tZ?.destroy())
            }

            getClientDimensions() {
                return this.div.getBoundingClientRect()
            }

            async addAltTextButton() {
                this.#tZ || (tO.initialize(tN._l10nPromise), this.#tZ = new tO(this), this.#t6 && (this.#tZ.data = this.#t6, this.#t6 = null), await this.addEditToolbar())
            }

            get altTextData() {
                return this.#tZ?.data
            }

            set altTextData(t) {
                this.#tZ && (this.#tZ.data = t)
            }

            hasAltText() {
                return !this.#tZ?.isEmpty()
            }

            render() {
                this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = this.#t7 ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground();
                let t = this._uiManager._signal;
                this.div.addEventListener("focusin", this.#ei, {signal: t}), this.div.addEventListener("focusout", this.#es, {signal: t});
                let [e, i] = this.parentDimensions;
                this.parentRotation % 180 != 0 && (this.div.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
                let [s, r] = this.getInitialTranslation();
                return this.translate(s, r), tR(this, this.div, ["pointerdown"]), this.div
            }

            pointerdown(t) {
                let {isMac: e} = G.platform;
                if (0 !== t.button || t.ctrlKey && e) {
                    t.preventDefault();
                    return
                }
                if (this.#ea = !0, this._isDraggable) {
                    this.#eS(t);
                    return
                }
                this.#eC(t)
            }

            #eC(t) {
                let {isMac: e} = G.platform;
                t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this)
            }

            #eS(t) {
                let e, i;
                let s = this._uiManager.isSelected(this);
                this._uiManager.setUpDragSession();
                let r = this._uiManager._signal;
                s && (this.div.classList.add("moving"), e = {
                    passive: !0,
                    capture: !0,
                    signal: r
                }, this.#eu = t.clientX, this.#ep = t.clientY, i = t => {
                    let {clientX: e, clientY: i} = t, [s, r] = this.screenToPageTranslation(e - this.#eu, i - this.#ep);
                    this.#eu = e, this.#ep = i, this._uiManager.dragSelectedEditors(s, r)
                }, window.addEventListener("pointermove", i, e));
                let n = () => {
                    window.removeEventListener("pointerup", n), window.removeEventListener("blur", n), s && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", i, e)), this.#ea = !1, this._uiManager.endDragSession() || this.#eC(t)
                };
                window.addEventListener("pointerup", n, {signal: r}), window.addEventListener("blur", n, {signal: r})
            }

            moveInDOM() {
                this.#ec && clearTimeout(this.#ec), this.#ec = setTimeout(() => {
                    this.#ec = null, this.parent?.moveEditorInDOM(this)
                }, 0)
            }

            _setParentAndPosition(t, e, i) {
                t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition()
            }

            getRect(t, e, i = this.rotation) {
                let s = this.parentScale, [r, n] = this.pageDimensions, [a, o] = this.pageTranslation, l = t / s,
                    h = e / s, d = this.x * r, c = this.y * n, u = this.width * r, p = this.height * n;
                switch (i) {
                    case 0:
                        return [d + l + a, n - c - h - p + o, d + l + u + a, n - c - h + o];
                    case 90:
                        return [d + h + a, n - c + l + o, d + h + p + a, n - c + l + u + o];
                    case 180:
                        return [d - l - u + a, n - c + h + o, d - l + a, n - c + h + p + o];
                    case 270:
                        return [d - h - p + a, n - c - l - u + o, d - h + a, n - c - l + o];
                    default:
                        throw Error("Invalid rotation")
                }
            }

            getRectInCurrentCoords(t, e) {
                let [i, s, r, n] = t, a = r - i, o = n - s;
                switch (this.rotation) {
                    case 0:
                        return [i, e - n, a, o];
                    case 90:
                        return [i, e - s, o, a];
                    case 180:
                        return [r, e - s, a, o];
                    case 270:
                        return [r, e - n, o, a];
                    default:
                        throw Error("Invalid rotation")
                }
            }

            onceAdded() {
            }

            isEmpty() {
                return !1
            }

            enableEditMode() {
                this.#eh = !0
            }

            disableEditMode() {
                this.#eh = !1
            }

            isInEditMode() {
                return this.#eh
            }

            shouldGetKeyboardEvents() {
                return this.#ed
            }

            needsToBeRebuilt() {
                return this.div && !this.isAttachedToDOM
            }

            rebuild() {
                let t = this._uiManager._signal;
                this.div?.addEventListener("focusin", this.#ei, {signal: t}), this.div?.addEventListener("focusout", this.#es, {signal: t})
            }

            rotate(t) {
            }

            serialize(t = !1, e = null) {
                R("An editor must be serializable")
            }

            static deserialize(t, e, i) {
                let s = new this.prototype.constructor({parent: e, id: e.getNextId(), uiManager: i});
                s.rotation = t.rotation, s.#t6 = t.accessibilityData;
                let [r, n] = s.pageDimensions, [a, o, l, h] = s.getRectInCurrentCoords(t.rect, n);
                return s.x = a / r, s.y = o / n, s.width = l / r, s.height = h / n, s
            }

            get hasBeenModified() {
                return !!this.annotationElementId && (this.deleted || null !== this.serialize())
            }

            remove() {
                if (this.div.removeEventListener("focusin", this.#ei), this.div.removeEventListener("focusout", this.#es), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.#ec && (clearTimeout(this.#ec), this.#ec = null), this.#ev(), this.removeEditToolbar(), this.#eg) {
                    for (let t of this.#eg.values()) clearTimeout(t);
                    this.#eg = null
                }
                this.parent = null
            }

            get isResizable() {
                return !1
            }

            makeResizable() {
                this.isResizable && (this.#e_(), this.#et.classList.remove("hidden"), tR(this, this.div, ["keydown"]))
            }

            get toolbarPosition() {
                return null
            }

            keydown(t) {
                if (!this.isResizable || t.target !== this.div || "Enter" !== t.key) return;
                this._uiManager.setSelected(this), this.#ee = {
                    savedX: this.x,
                    savedY: this.y,
                    savedWidth: this.width,
                    savedHeight: this.height
                };
                let e = this.#et.children;
                if (!this.#t9) {
                    this.#t9 = Array.from(e);
                    let t = this.#eT.bind(this), i = this.#eM.bind(this), s = this._uiManager._signal;
                    for (let e of this.#t9) {
                        let r = e.getAttribute("data-resizer-name");
                        e.setAttribute("role", "spinbutton"), e.addEventListener("keydown", t, {signal: s}), e.addEventListener("blur", i, {signal: s}), e.addEventListener("focus", this.#eR.bind(this, r), {signal: s}), tN._l10nPromise.get(`pdfjs-editor-resizer-label-${r}`).then(t => e.setAttribute("aria-label", t))
                    }
                }
                let i = this.#t9[0], s = 0;
                for (let t of e) {
                    if (t === i) break;
                    s++
                }
                let r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#t9.length / 4);
                if (r !== s) {
                    if (r < s) for (let t = 0; t < s - r; t++) this.#et.append(this.#et.firstChild); else if (r > s) for (let t = 0; t < r - s; t++) this.#et.firstChild.before(this.#et.lastChild);
                    let t = 0;
                    for (let i of e) {
                        let e = this.#t9[t++].getAttribute("data-resizer-name");
                        tN._l10nPromise.get(`pdfjs-editor-resizer-label-${e}`).then(t => i.setAttribute("aria-label", t))
                    }
                }
                this.#ek(0), this.#ed = !0, this.#et.firstChild.focus({focusVisible: !0}), t.preventDefault(), t.stopImmediatePropagation()
            }

            #eT(t) {
                tN._resizerKeyboardManager.exec(this, t)
            }

            #eM(t) {
                this.#ed && t.relatedTarget?.parentNode !== this.#et && this.#ev()
            }

            #eR(t) {
                this.#en = this.#ed ? t : ""
            }

            #ek(t) {
                if (this.#t9) for (let e of this.#t9) e.tabIndex = t
            }

            _resizeWithKeyboard(t, e) {
                this.#ed && this.#ex(this.#en, {movementX: t, movementY: e})
            }

            #ev() {
                if (this.#ed = !1, this.#ek(-1), this.#ee) {
                    let {savedX: t, savedY: e, savedWidth: i, savedHeight: s} = this.#ee;
                    this.#eE(t, e, i, s), this.#ee = null
                }
            }

            _stopResizingWithKeyboard() {
                this.#ev(), this.div.focus()
            }

            select() {
                if (this.makeResizable(), this.div?.classList.add("selectedEditor"), !this.#er) {
                    this.addEditToolbar().then(() => {
                        this.div?.classList.contains("selectedEditor") && this.#er?.show()
                    });
                    return
                }
                this.#er?.show()
            }

            unselect() {
                this.#et?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({preventScroll: !0}), this.#er?.hide()
            }

            updateParams(t, e) {
            }

            disableEditing() {
            }

            enableEditing() {
            }

            enterInEditMode() {
            }

            getImageForAltText() {
                return null
            }

            get contentDiv() {
                return this.div
            }

            get isEditing() {
                return this.#el
            }

            set isEditing(t) {
                this.#el = t, this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null))
            }

            setAspectRatio(t, e) {
                this.#t8 = !0;
                let {style: i} = this.div;
                i.aspectRatio = t / e, i.height = "auto"
            }

            static get MIN_SIZE() {
                return 16
            }

            static canCreateNewEmptyEditor() {
                return !0
            }

            get telemetryInitialData() {
                return {action: "added"}
            }

            get telemetryFinalData() {
                return null
            }

            _reportTelemetry(t, e = !1) {
                if (e) {
                    this.#eg ||= new Map;
                    let {action: e} = t, i = this.#eg.get(e);
                    i && clearTimeout(i), i = setTimeout(() => {
                        this._reportTelemetry(t), this.#eg.delete(e), 0 === this.#eg.size && (this.#eg = null)
                    }, tN._telemetryTimeout), this.#eg.set(e, i);
                    return
                }
                t.type ||= this.editorType, this._uiManager._eventBus.dispatch("reporttelemetry", {
                    source: this,
                    details: {type: "editing", data: t}
                })
            }

            show(t = this._isVisible) {
                this.div.classList.toggle("hidden", !t), this._isVisible = t
            }

            enable() {
                this.div && (this.div.tabIndex = 0), this.#t7 = !1
            }

            disable() {
                this.div && (this.div.tabIndex = -1), this.#t7 = !0
            }

            renderAnnotationElement(t) {
                let e = t.container.querySelector(".annotationContent");
                if (e) {
                    if ("CANVAS" === e.nodeName) {
                        let t = e;
                        (e = document.createElement("div")).classList.add("annotationContent", this.editorType), t.before(e)
                    }
                } else (e = document.createElement("div")).classList.add("annotationContent", this.editorType), t.container.prepend(e);
                return e
            }

            resetAnnotationElement(t) {
                let {firstChild: e} = t.container;
                "DIV" === e.nodeName && e.classList.contains("annotationContent") && e.remove()
            }
        }

        class tB extends tN {
            constructor(t) {
                super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0
            }

            serialize() {
                return {id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex}
            }
        }

        class tH {
            constructor(t) {
                this.h1 = t ? 4294967295 & t : 3285377520, this.h2 = t ? 4294967295 & t : 3285377520
            }

            update(t) {
                let e, i;
                if ("string" == typeof t) {
                    e = new Uint8Array(2 * t.length), i = 0;
                    for (let s = 0, r = t.length; s < r; s++) {
                        let r = t.charCodeAt(s);
                        r <= 255 ? e[i++] = r : (e[i++] = r >>> 8, e[i++] = 255 & r)
                    }
                } else if (ArrayBuffer.isView(t)) i = (e = t.slice()).byteLength; else throw Error("Invalid data format, must be a string or TypedArray.");
                let s = i >> 2, r = i - 4 * s, n = new Uint32Array(e.buffer, 0, s), a = 0, o = 0, l = this.h1,
                    h = this.h2;
                for (let t = 0; t < s; t++) 1 & t ? (l ^= a = 461845907 * (a = (a = 3432918353 * (a = n[t]) & 4294901760 | 11601 * a & 65535) << 15 | a >>> 17) & 4294901760 | 13715 * a & 65535, l = 5 * (l = l << 13 | l >>> 19) + 3864292196) : (h ^= o = 461845907 * (o = (o = 3432918353 * (o = n[t]) & 4294901760 | 11601 * o & 65535) << 15 | o >>> 17) & 4294901760 | 13715 * o & 65535, h = 5 * (h = h << 13 | h >>> 19) + 3864292196);
                switch (a = 0, r) {
                    case 3:
                        a ^= e[4 * s + 2] << 16;
                    case 2:
                        a ^= e[4 * s + 1] << 8;
                    case 1:
                        a ^= e[4 * s], a = 461845907 * (a = (a = 3432918353 * a & 4294901760 | 11601 * a & 65535) << 15 | a >>> 17) & 4294901760 | 13715 * a & 65535, 1 & s ? l ^= a : h ^= a
                }
                this.h1 = l, this.h2 = h
            }

            hexdigest() {
                let t = this.h1, e = this.h2;
                return t ^= e >>> 1, e = 4283543511 * e & 4294901760 | ((e << 16 | (t = 3981806797 * t & 4294901760 | 36045 * t & 65535) >>> 16) * 2950163797 & 4294901760) >>> 16, t ^= e >>> 1, e = 3301882366 * e & 4294901760 | ((e << 16 | (t = 444984403 * t & 4294901760 | 60499 * t & 65535) >>> 16) * 3120437893 & 4294901760) >>> 16, ((t ^= e >>> 1) >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0")
            }
        }

        let tz = Object.freeze({map: null, hash: "", transfer: void 0});

        class tj {
            #eL = !1;
            #eI = new Map;

            constructor() {
                this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null
            }

            getValue(t, e) {
                let i = this.#eI.get(t);
                return void 0 === i ? e : Object.assign(e, i)
            }

            getRawValue(t) {
                return this.#eI.get(t)
            }

            remove(t) {
                if (this.#eI.delete(t), 0 === this.#eI.size && this.resetModified(), "function" == typeof this.onAnnotationEditor) {
                    for (let t of this.#eI.values()) if (t instanceof tN) return;
                    this.onAnnotationEditor(null)
                }
            }

            setValue(t, e) {
                let i = this.#eI.get(t), s = !1;
                if (void 0 !== i) for (let [t, r] of Object.entries(e)) i[t] !== r && (s = !0, i[t] = r); else s = !0, this.#eI.set(t, e);
                s && this.#eP(), e instanceof tN && "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type)
            }

            has(t) {
                return this.#eI.has(t)
            }

            getAll() {
                return this.#eI.size > 0 ? $(this.#eI) : null
            }

            setAll(t) {
                for (let [e, i] of Object.entries(t)) this.setValue(e, i)
            }

            get size() {
                return this.#eI.size
            }

            #eP() {
                this.#eL || (this.#eL = !0, "function" == typeof this.onSetModified && this.onSetModified())
            }

            resetModified() {
                this.#eL && (this.#eL = !1, "function" == typeof this.onResetModified && this.onResetModified())
            }

            get print() {
                return new tU(this)
            }

            get serializable() {
                if (0 === this.#eI.size) return tz;
                let t = new Map, e = new tH, i = [], s = Object.create(null), r = !1;
                for (let [i, n] of this.#eI) {
                    let a = n instanceof tN ? n.serialize(!1, s) : n;
                    a && (t.set(i, a), e.update(`${i}:${JSON.stringify(a)}`), r ||= !!a.bitmap)
                }
                if (r) for (let e of t.values()) e.bitmap && i.push(e.bitmap);
                return t.size > 0 ? {map: t, hash: e.hexdigest(), transfer: i} : tz
            }

            get editorStats() {
                let t = null, e = new Map;
                for (let i of this.#eI.values()) {
                    if (!(i instanceof tN)) continue;
                    let s = i.telemetryFinalData;
                    if (!s) continue;
                    let {type: r} = s;
                    e.has(r) || e.set(r, Object.getPrototypeOf(i).constructor), t ||= Object.create(null);
                    let n = t[r] ||= new Map;
                    for (let [t, e] of Object.entries(s)) {
                        if ("type" === t) continue;
                        let i = n.get(t);
                        i || (i = new Map, n.set(t, i));
                        let s = i.get(e) ?? 0;
                        i.set(e, s + 1)
                    }
                }
                for (let [i, s] of e) t[i] = s.computeTelemetryFinalData(t[i]);
                return t
            }
        }

        class tU extends tj {
            #eD;

            constructor(t) {
                super();
                let {map: e, hash: i, transfer: s} = t.serializable, r = structuredClone(e, s ? {transfer: s} : null);
                this.#eD = {map: r, hash: i, transfer: s}
            }

            get print() {
                R("Should not call PrintAnnotationStorage.print")
            }

            get serializable() {
                return this.#eD
            }
        }

        class t$ {
            #eF = new Set;

            constructor({ownerDocument: t = globalThis.document, styleElement: e = null}) {
                this._document = t, this.nativeFontFaces = new Set, this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0
            }

            addNativeFontFace(t) {
                this.nativeFontFaces.add(t), this._document.fonts.add(t)
            }

            removeNativeFontFace(t) {
                this.nativeFontFaces.delete(t), this._document.fonts.delete(t)
            }

            insertRule(t) {
                this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
                let e = this.styleElement.sheet;
                e.insertRule(t, e.cssRules.length)
            }

            clear() {
                for (let t of this.nativeFontFaces) this._document.fonts.delete(t);
                this.nativeFontFaces.clear(), this.#eF.clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null)
            }

            async loadSystemFont({systemFontInfo: t, _inspectFont: e}) {
                if (!(!t || this.#eF.has(t.loadedName))) {
                    if (k(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                        let {loadedName: i, src: s, style: r} = t, n = new FontFace(i, s, r);
                        this.addNativeFontFace(n);
                        try {
                            await n.load(), this.#eF.add(i), e?.(t)
                        } catch {
                            M(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(n)
                        }
                        return
                    }
                    R("Not implemented: loadSystemFont without the Font Loading API.")
                }
            }

            async bind(t) {
                if (t.attached || t.missingFile && !t.systemFontInfo) return;
                if (t.attached = !0, t.systemFontInfo) {
                    await this.loadSystemFont(t);
                    return
                }
                if (this.isFontLoadingAPISupported) {
                    let e = t.createNativeFontFace();
                    if (e) {
                        this.addNativeFontFace(e);
                        try {
                            await e.loaded
                        } catch (i) {
                            throw M(`Failed to load font '${e.family}': '${i}'.`), t.disableFontFace = !0, i
                        }
                    }
                    return
                }
                let e = t.createFontFaceRule();
                if (e) {
                    if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
                    await new Promise(e => {
                        let i = this._queueLoadingCallback(e);
                        this._prepareFontLoadEvent(t, i)
                    })
                }
            }

            get isFontLoadingAPISupported() {
                return I(this, "isFontLoadingAPISupported", !!this._document?.fonts)
            }

            get isSyncFontLoadingSupported() {
                let t = !1;
                return d ? t = !0 : "undefined" != typeof navigator && "string" == typeof navigator?.userAgent && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent) && (t = !0), I(this, "isSyncFontLoadingSupported", t)
            }

            _queueLoadingCallback(t) {
                let {loadingRequests: e} = this, i = {
                    done: !1, complete: function () {
                        for (k(!i.done, "completeRequest() cannot be called twice."), i.done = !0; e.length > 0 && e[0].done;) setTimeout(e.shift().callback, 0)
                    }, callback: t
                };
                return e.push(i), i
            }

            get _loadTestFont() {
                return I(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))
            }

            _prepareFontLoadEvent(t, e) {
                var i;
                let s, r;

                function n(t, e) {
                    return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3)
                }

                function a(t, e, i, s) {
                    return t.substring(0, e) + s + t.substring(e + i)
                }

                let o = this._document.createElement("canvas");
                o.width = 1, o.height = 1;
                let l = o.getContext("2d"), h = 0, d = `lt${Date.now()}${this.loadTestFontId++}`,
                    c = this._loadTestFont, u = n(c = a(c, 976, d.length, d), 16);
                for (s = 0, r = d.length - 3; s < r; s += 4) u = u - 1482184792 + n(d, s) | 0;
                s < d.length && (u = u - 1482184792 + n(d + "XXX", s) | 0), c = a(c, 16, 4, String.fromCharCode((i = u) >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i));
                let p = `url(data:font/opentype;base64,${btoa(c)});`, g = `@font-face {font-family:"${d}";src:${p}}`;
                this.insertRule(g);
                let f = this._document.createElement("div");
                for (let e of (f.style.visibility = "hidden", f.style.width = f.style.height = "10px", f.style.position = "absolute", f.style.top = f.style.left = "0px", [t.loadedName, d])) {
                    let t = this._document.createElement("span");
                    t.textContent = "Hi", t.style.fontFamily = e, f.append(t)
                }
                this._document.body.append(f), function t(e, i) {
                    if (++h > 30) {
                        M("Load test font never loaded."), i();
                        return
                    }
                    if (l.font = "30px " + e, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
                        i();
                        return
                    }
                    setTimeout(t.bind(null, e, i))
                }(d, () => {
                    f.remove(), e.complete()
                })
            }
        }

        class tG {
            constructor(t, {disableFontFace: e = !1, inspectFont: i = null}) {
                for (let e in this.compiledGlyphs = Object.create(null), t) this[e] = t[e];
                this.disableFontFace = !0 === e, this._inspectFont = i
            }

            createNativeFontFace() {
                let t;
                if (!this.data || this.disableFontFace) return null;
                if (this.cssFontInfo) {
                    let e = {weight: this.cssFontInfo.fontWeight};
                    this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, e)
                } else t = new FontFace(this.loadedName, this.data, {});
                return this._inspectFont?.(this), t
            }

            createFontFaceRule() {
                let t;
                if (!this.data || this.disableFontFace) return null;
                let e = j(this.data), i = `url(data:${this.mimetype};base64,${btoa(e)});`;
                if (this.cssFontInfo) {
                    let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
                    this.cssFontInfo.italicAngle && (e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), t = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${i}}`
                } else t = `@font-face {font-family:"${this.loadedName}";src:${i}}`;
                return this._inspectFont?.(this, i), t
            }

            getPathGenerator(t, e) {
                let i;
                if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
                try {
                    i = t.get(this.loadedName + "_path_" + e)
                } catch (t) {
                    M(`getPathGenerator - ignoring character: "${t}".`)
                }
                if (!Array.isArray(i) || 0 === i.length) return this.compiledGlyphs[e] = function (t, e) {
                };
                let s = [];
                for (let t = 0, e = i.length; t < e;) switch (i[t++]) {
                    case Q.BEZIER_CURVE_TO: {
                        let [e, r, n, a, o, l] = i.slice(t, t + 6);
                        s.push(t => t.bezierCurveTo(e, r, n, a, o, l)), t += 6
                    }
                        break;
                    case Q.MOVE_TO: {
                        let [e, r] = i.slice(t, t + 2);
                        s.push(t => t.moveTo(e, r)), t += 2
                    }
                        break;
                    case Q.LINE_TO: {
                        let [e, r] = i.slice(t, t + 2);
                        s.push(t => t.lineTo(e, r)), t += 2
                    }
                        break;
                    case Q.QUADRATIC_CURVE_TO: {
                        let [e, r, n, a] = i.slice(t, t + 4);
                        s.push(t => t.quadraticCurveTo(e, r, n, a)), t += 4
                    }
                        break;
                    case Q.RESTORE:
                        s.push(t => t.restore());
                        break;
                    case Q.SAVE:
                        s.push(t => t.save());
                        break;
                    case Q.SCALE:
                        k(2 === s.length, "Scale command is only valid at the third position.");
                        break;
                    case Q.TRANSFORM: {
                        let [e, r, n, a, o, l] = i.slice(t, t + 6);
                        s.push(t => t.transform(e, r, n, a, o, l)), t += 6
                    }
                        break;
                    case Q.TRANSLATE: {
                        let [e, r] = i.slice(t, t + 2);
                        s.push(t => t.translate(e, r)), t += 2
                    }
                }
                return this.compiledGlyphs[e] = function (t, e) {
                    s[0](t), s[1](t), t.scale(e, -e);
                    for (let e = 2, i = s.length; e < i; e++) s[e](t)
                }
            }
        }

        if (d) {
            var tV = Promise.withResolvers(), tq = null;
            (async () => {
                let t, e;
                let i = await import("fs"), s = await import("http"), r = await import("https"),
                    n = await import("url");
                try {
                    t = await import("canvas")
                } catch {
                }
                try {
                    e = await import("path2d")
                } catch {
                }
                return new Map(Object.entries({fs: i, http: s, https: r, url: n, canvas: t, path2d: e}))
            })().then(t => {
                if (tq = t, tV.resolve(), !globalThis.DOMMatrix) {
                    let e = t.get("canvas")?.DOMMatrix;
                    e ? globalThis.DOMMatrix = e : M("Cannot polyfill `DOMMatrix`, rendering may be broken.")
                }
                if (!globalThis.Path2D) {
                    let e = t.get("canvas")?.CanvasRenderingContext2D,
                        i = t.get("path2d")?.applyPath2DToCanvasRenderingContext, s = t.get("path2d")?.Path2D;
                    e && i && s ? (i(e), globalThis.Path2D = s) : M("Cannot polyfill `Path2D`, rendering may be broken.")
                }
            }, t => {
                M(`loadPackages: ${t}`), tq = new Map, tV.resolve()
            })
        }

        class tW {
            static get promise() {
                return tV.promise
            }

            static get(t) {
                return tq?.get(t)
            }
        }

        let tK = function (t) {
            return tW.get("fs").promises.readFile(t).then(t => new Uint8Array(t))
        };

        class tX extends J {
        }

        class tY extends Z {
            _createCanvas(t, e) {
                return tW.get("canvas").createCanvas(t, e)
            }
        }

        class tQ extends tt {
            _fetchData(t, e) {
                return tK(t).then(t => ({cMapData: t, compressionType: e}))
            }
        }

        class tJ extends te {
            _fetchData(t) {
                return tK(t)
            }
        }

        let tZ = {FILL: "Fill", STROKE: "Stroke", SHADING: "Shading"};

        function t0(t, e) {
            if (!e) return;
            let i = e[2] - e[0], s = e[3] - e[1], r = new Path2D;
            r.rect(e[0], e[1], i, s), t.clip(r)
        }

        class t1 {
            constructor() {
                this.constructor === t1 && R("Cannot initialize BaseShadingPattern.")
            }

            getPattern() {
                R("Abstract method `getPattern` called.")
            }
        }

        class t2 extends t1 {
            constructor(t) {
                super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null
            }

            _createGradient(t) {
                let e;
                for (let i of ("axial" === this._type ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1)), this._colorStops)) e.addColorStop(i[0], i[1]);
                return e
            }

            getPattern(t, e, i, s) {
                let r;
                if (s === tZ.STROKE || s === tZ.FILL) {
                    let n = e.current.getClippedPathBoundingBox(s, tE(t)) || [0, 0, 0, 0],
                        a = Math.ceil(n[2] - n[0]) || 1, o = Math.ceil(n[3] - n[1]) || 1,
                        l = e.cachedCanvases.getCanvas("pattern", a, o, !0), h = l.context;
                    h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-n[0], -n[1]), i = q.transform(i, [1, 0, 0, 1, n[0], n[1]]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), t0(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), r = t.createPattern(l.canvas, "no-repeat");
                    let d = new DOMMatrix(i);
                    r.setTransform(d)
                } else t0(t, this._bbox), r = this._createGradient(t);
                return r
            }
        }

        function t5(t, e, i, s, r, n, a, o) {
            let l, h, d, c, u, p, g, f, m;
            let v = e.coords, b = e.colors, A = t.data, y = 4 * t.width;
            v[i + 1] > v[s + 1] && (l = i, i = s, s = l, l = n, n = a, a = l), v[s + 1] > v[r + 1] && (l = s, s = r, r = l, l = a, a = o, o = l), v[i + 1] > v[s + 1] && (l = i, i = s, s = l, l = n, n = a, a = l);
            let _ = (v[i] + e.offsetX) * e.scaleX, w = (v[i + 1] + e.offsetY) * e.scaleY,
                x = (v[s] + e.offsetX) * e.scaleX, E = (v[s + 1] + e.offsetY) * e.scaleY,
                S = (v[r] + e.offsetX) * e.scaleX, C = (v[r + 1] + e.offsetY) * e.scaleY;
            if (w >= C) return;
            let T = b[n], M = b[n + 1], R = b[n + 2], k = b[a], L = b[a + 1], I = b[a + 2], P = b[o], D = b[o + 1],
                F = b[o + 2], O = Math.round(w), N = Math.round(C);
            for (let t = O; t <= N; t++) {
                let e;
                if (t < E) {
                    let e = t < w ? 0 : (w - t) / (w - E);
                    h = _ - (_ - x) * e, d = T - (T - k) * e, c = M - (M - L) * e, u = R - (R - I) * e
                } else {
                    let e;
                    h = x - (x - S) * (e = t > C ? 1 : E === C ? 0 : (E - t) / (E - C)), d = k - (k - P) * e, c = L - (L - D) * e, u = I - (I - F) * e
                }
                p = _ - (_ - S) * (e = t < w ? 0 : t > C ? 1 : (w - t) / (w - C)), g = T - (T - P) * e, f = M - (M - D) * e, m = R - (R - F) * e;
                let i = Math.round(Math.min(h, p)), s = Math.round(Math.max(h, p)), r = y * t + 4 * i;
                for (let t = i; t <= s; t++) (e = (h - t) / (h - p)) < 0 ? e = 0 : e > 1 && (e = 1), A[r++] = d - (d - g) * e | 0, A[r++] = c - (c - f) * e | 0, A[r++] = u - (u - m) * e | 0, A[r++] = 255
            }
        }

        class t4 extends t1 {
            constructor(t) {
                super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null
            }

            _createMeshCanvas(t, e, i) {
                let s = Math.floor(this._bounds[0]), r = Math.floor(this._bounds[1]),
                    n = Math.ceil(this._bounds[2]) - s, a = Math.ceil(this._bounds[3]) - r,
                    o = Math.min(Math.ceil(Math.abs(n * t[0] * 1.1)), 3e3),
                    l = Math.min(Math.ceil(Math.abs(a * t[1] * 1.1)), 3e3), h = n / o, d = a / l, c = {
                        coords: this._coords,
                        colors: this._colors,
                        offsetX: -s,
                        offsetY: -r,
                        scaleX: 1 / h,
                        scaleY: 1 / d
                    }, u = o + 4, p = l + 4, g = i.getCanvas("mesh", u, p, !1), f = g.context, m = f.createImageData(o, l);
                if (e) {
                    let t = m.data;
                    for (let i = 0, s = t.length; i < s; i += 4) t[i] = e[0], t[i + 1] = e[1], t[i + 2] = e[2], t[i + 3] = 255
                }
                for (let t of this._figures) !function (t, e, i) {
                    let s, r;
                    let n = e.coords, a = e.colors;
                    switch (e.type) {
                        case"lattice":
                            let o = e.verticesPerRow, l = Math.floor(n.length / o) - 1, h = o - 1;
                            for (s = 0; s < l; s++) {
                                let e = s * o;
                                for (let s = 0; s < h; s++, e++) t5(t, i, n[e], n[e + 1], n[e + o], a[e], a[e + 1], a[e + o]), t5(t, i, n[e + o + 1], n[e + 1], n[e + o], a[e + o + 1], a[e + 1], a[e + o])
                            }
                            break;
                        case"triangles":
                            for (s = 0, r = n.length; s < r; s += 3) t5(t, i, n[s], n[s + 1], n[s + 2], a[s], a[s + 1], a[s + 2]);
                            break;
                        default:
                            throw Error("illegal figure")
                    }
                }(m, t, c);
                return f.putImageData(m, 2, 2), {
                    canvas: g.canvas,
                    offsetX: s - 2 * h,
                    offsetY: r - 2 * d,
                    scaleX: h,
                    scaleY: d
                }
            }

            getPattern(t, e, i, s) {
                let r;
                if (t0(t, this._bbox), s === tZ.SHADING) r = q.singularValueDecompose2dScale(tE(t)); else if (r = q.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
                    let t = q.singularValueDecompose2dScale(this.matrix);
                    r = [r[0] * t[0], r[1] * t[1]]
                }
                let n = this._createMeshCanvas(r, s === tZ.SHADING ? null : this._background, e.cachedCanvases);
                return s !== tZ.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(n.offsetX, n.offsetY), t.scale(n.scaleX, n.scaleY), t.createPattern(n.canvas, "no-repeat")
            }
        }

        class t3 extends t1 {
            getPattern() {
                return "hotpink"
            }
        }

        let t6 = {COLORED: 1, UNCOLORED: 2};

        class t9 {
            static MAX_PATTERN_SIZE = 3e3;

            constructor(t, e, i, s, r) {
                this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = i, this.canvasGraphicsFactory = s, this.baseTransform = r
            }

            createPatternCanvas(t) {
                let e = this.operatorList, i = this.bbox, s = this.xstep, r = this.ystep, n = this.paintType,
                    a = this.tilingType, o = this.color, l = this.canvasGraphicsFactory;
                T("TilingType: " + a);
                let h = i[0], d = i[1], c = i[2], u = i[3], p = q.singularValueDecompose2dScale(this.matrix),
                    g = q.singularValueDecompose2dScale(this.baseTransform), f = [p[0] * g[0], p[1] * g[1]],
                    m = this.getSizeAndScale(s, this.ctx.canvas.width, f[0]),
                    v = this.getSizeAndScale(r, this.ctx.canvas.height, f[1]),
                    b = t.cachedCanvases.getCanvas("pattern", m.size, v.size, !0), A = b.context,
                    y = l.createCanvasGraphics(A);
                y.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(y, n, o);
                let _ = h, w = d, x = c, E = u;
                return h < 0 && (_ = 0, x += Math.abs(h)), d < 0 && (w = 0, E += Math.abs(d)), A.translate(-(m.scale * _), -(v.scale * w)), y.transform(m.scale, 0, 0, v.scale, 0, 0), A.save(), this.clipBbox(y, _, w, x, E), y.baseTransform = tE(y.ctx), y.executeOperatorList(e), y.endDrawing(), {
                    canvas: b.canvas,
                    scaleX: m.scale,
                    scaleY: v.scale,
                    offsetX: _,
                    offsetY: w
                }
            }

            getSizeAndScale(t, e, i) {
                t = Math.abs(t);
                let s = Math.max(t9.MAX_PATTERN_SIZE, e), r = Math.ceil(t * i);
                return r >= s ? r = s : i = r / t, {scale: i, size: r}
            }

            clipBbox(t, e, i, s, r) {
                let n = s - e, a = r - i;
                t.ctx.rect(e, i, n, a), t.current.updateRectMinMax(tE(t.ctx), [e, i, s, r]), t.clip(), t.endPath()
            }

            setFillAndStrokeStyleToContext(t, e, i) {
                let s = t.ctx, r = t.current;
                switch (e) {
                    case t6.COLORED:
                        let n = this.ctx;
                        s.fillStyle = n.fillStyle, s.strokeStyle = n.strokeStyle, r.fillColor = n.fillStyle, r.strokeColor = n.strokeStyle;
                        break;
                    case t6.UNCOLORED:
                        let a = q.makeHexColor(i[0], i[1], i[2]);
                        s.fillStyle = a, s.strokeStyle = a, r.fillColor = a, r.strokeColor = a;
                        break;
                    default:
                        throw new H(`Unsupported paint type: ${e}`)
                }
            }

            getPattern(t, e, i, s) {
                let r = i;
                s !== tZ.SHADING && (r = q.transform(r, e.baseTransform), this.matrix && (r = q.transform(r, this.matrix)));
                let n = this.createPatternCanvas(e), a = new DOMMatrix(r);
                a = (a = a.translate(n.offsetX, n.offsetY)).scale(1 / n.scaleX, 1 / n.scaleY);
                let o = t.createPattern(n.canvas, "repeat");
                return o.setTransform(a), o
            }
        }

        class t7 {
            constructor(t) {
                this.canvasFactory = t, this.cache = Object.create(null)
            }

            getCanvas(t, e, i) {
                let s;
                return void 0 !== this.cache[t] ? (s = this.cache[t], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t] = s), s
            }

            delete(t) {
                delete this.cache[t]
            }

            clear() {
                for (let t in this.cache) {
                    let e = this.cache[t];
                    this.canvasFactory.destroy(e), delete this.cache[t]
                }
            }
        }

        function t8(t, e, i, s, r, n, a, o, l, h) {
            let [d, c, u, p, g, f] = tE(t);
            if (0 === c && 0 === u) {
                let m = Math.round(a * d + g), v = Math.round(o * p + f),
                    b = Math.abs(Math.round((a + l) * d + g) - m) || 1,
                    A = Math.abs(Math.round((o + h) * p + f) - v) || 1;
                return t.setTransform(Math.sign(d), 0, 0, Math.sign(p), m, v), t.drawImage(e, i, s, r, n, 0, 0, b, A), t.setTransform(d, c, u, p, g, f), [b, A]
            }
            if (0 === d && 0 === p) {
                let m = Math.round(o * u + g), v = Math.round(a * c + f),
                    b = Math.abs(Math.round((o + h) * u + g) - m) || 1,
                    A = Math.abs(Math.round((a + l) * c + f) - v) || 1;
                return t.setTransform(0, Math.sign(c), Math.sign(u), 0, m, v), t.drawImage(e, i, s, r, n, 0, 0, A, b), t.setTransform(d, c, u, p, g, f), [A, b]
            }
            return t.drawImage(e, i, s, r, n, a, o, l, h), [Math.hypot(d, c) * l, Math.hypot(u, p) * h]
        }

        class et {
            constructor(t, e) {
                this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = c, this.textMatrixScale = 1, this.fontMatrix = u, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = b.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e])
            }

            clone() {
                let t = Object.create(this);
                return t.clipBox = this.clipBox.slice(), t
            }

            setCurrentPoint(t, e) {
                this.x = t, this.y = e
            }

            updatePathMinMax(t, e, i) {
                [e, i] = q.applyTransform([e, i], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, i), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, i)
            }

            updateRectMinMax(t, e) {
                let i = q.applyTransform(e, t), s = q.applyTransform(e.slice(2), t),
                    r = q.applyTransform([e[0], e[3]], t), n = q.applyTransform([e[2], e[1]], t);
                this.minX = Math.min(this.minX, i[0], s[0], r[0], n[0]), this.minY = Math.min(this.minY, i[1], s[1], r[1], n[1]), this.maxX = Math.max(this.maxX, i[0], s[0], r[0], n[0]), this.maxY = Math.max(this.maxY, i[1], s[1], r[1], n[1])
            }

            updateScalingPathMinMax(t, e) {
                q.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3])
            }

            updateCurvePathMinMax(t, e, i, s, r, n, a, o, l, h) {
                let d = q.bezierBoundingBox(e, i, s, r, n, a, o, l, h);
                h || this.updateRectMinMax(t, d)
            }

            getPathBoundingBox(t = tZ.FILL, e = null) {
                let i = [this.minX, this.minY, this.maxX, this.maxY];
                if (t === tZ.STROKE) {
                    e || R("Stroke bounding box must include transform.");
                    let t = q.singularValueDecompose2dScale(e), s = t[0] * this.lineWidth / 2,
                        r = t[1] * this.lineWidth / 2;
                    i[0] -= s, i[1] -= r, i[2] += s, i[3] += r
                }
                return i
            }

            updateClipFromPath() {
                let t = q.intersect(this.clipBox, this.getPathBoundingBox());
                this.startNewPathAndClipBox(t || [0, 0, 0, 0])
            }

            isEmptyClip() {
                return this.minX === 1 / 0
            }

            startNewPathAndClipBox(t) {
                this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0
            }

            getClippedPathBoundingBox(t = tZ.FILL, e = null) {
                return q.intersect(this.clipBox, this.getPathBoundingBox(t, e))
            }
        }

        function ee(t, e) {
            let i, s, r, n;
            if ("undefined" != typeof ImageData && e instanceof ImageData) {
                t.putImageData(e, 0, 0);
                return
            }
            let a = e.height, o = e.width, l = a % 16, h = (a - l) / 16, d = 0 === l ? h : h + 1,
                c = t.createImageData(o, 16), u = 0, p, g = e.data, f = c.data;
            if (e.kind === A.GRAYSCALE_1BPP) {
                let e = g.byteLength, n = new Uint32Array(f.buffer, 0, f.byteLength >> 2), a = n.length, m = o + 7 >> 3,
                    v = G.isLittleEndian ? 4278190080 : 255;
                for (i = 0; i < d; i++) {
                    for (s = 0, r = i < h ? 16 : l, p = 0; s < r; s++) {
                        let t = e - u, i = 0, s = t > m ? o : 8 * t - 7, r = -8 & s, a = 0, l = 0;
                        for (; i < r; i += 8) l = g[u++], n[p++] = 128 & l ? 4294967295 : v, n[p++] = 64 & l ? 4294967295 : v, n[p++] = 32 & l ? 4294967295 : v, n[p++] = 16 & l ? 4294967295 : v, n[p++] = 8 & l ? 4294967295 : v, n[p++] = 4 & l ? 4294967295 : v, n[p++] = 2 & l ? 4294967295 : v, n[p++] = 1 & l ? 4294967295 : v;
                        for (; i < s; i++) 0 === a && (l = g[u++], a = 128), n[p++] = l & a ? 4294967295 : v, a >>= 1
                    }
                    for (; p < a;) n[p++] = 0;
                    t.putImageData(c, 0, 16 * i)
                }
            } else if (e.kind === A.RGBA_32BPP) {
                for (i = 0, s = 0, n = 64 * o; i < h; i++) f.set(g.subarray(u, u + n)), u += n, t.putImageData(c, 0, s), s += 16;
                i < d && (n = o * l * 4, f.set(g.subarray(u, u + n)), t.putImageData(c, 0, s))
            } else if (e.kind === A.RGB_24BPP) for (i = 0, n = o * (r = 16); i < d; i++) {
                for (i >= h && (n = o * (r = l)), p = 0, s = n; s--;) f[p++] = g[u++], f[p++] = g[u++], f[p++] = g[u++], f[p++] = 255;
                t.putImageData(c, 0, 16 * i)
            } else throw Error(`bad image kind: ${e.kind}`)
        }

        function ei(t, e) {
            if (e.bitmap) {
                t.drawImage(e.bitmap, 0, 0);
                return
            }
            let i = e.height, s = e.width, r = i % 16, n = (i - r) / 16, a = 0 === r ? n : n + 1,
                o = t.createImageData(s, 16), l = 0, h = e.data, d = o.data;
            for (let e = 0; e < a; e++) {
                let i = e < n ? 16 : r;
                ({srcPos: l} = function ({
                                             src: t,
                                             srcPos: e = 0,
                                             dest: i,
                                             width: s,
                                             height: r,
                                             nonBlackColor: n = 4294967295,
                                             inverseDecode: a = !1
                                         }) {
                    let o = G.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [n, o] : [o, n], d = s >> 3, c = 7 & s,
                        u = t.length;
                    i = new Uint32Array(i.buffer);
                    let p = 0;
                    for (let s = 0; s < r; s++) {
                        for (let s = e + d; e < s; e++) {
                            let s = e < u ? t[e] : 255;
                            i[p++] = 128 & s ? h : l, i[p++] = 64 & s ? h : l, i[p++] = 32 & s ? h : l, i[p++] = 16 & s ? h : l, i[p++] = 8 & s ? h : l, i[p++] = 4 & s ? h : l, i[p++] = 2 & s ? h : l, i[p++] = 1 & s ? h : l
                        }
                        if (0 === c) continue;
                        let s = e < u ? t[e++] : 255;
                        for (let t = 0; t < c; t++) i[p++] = s & 1 << 7 - t ? h : l
                    }
                    return {srcPos: e, destPos: p}
                }({src: h, srcPos: l, dest: d, width: s, height: i, nonBlackColor: 0})), t.putImageData(o, 0, 16 * e)
            }
        }

        function es(t, e) {
            for (let i of ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"]) void 0 !== t[i] && (e[i] = t[i]);
            void 0 !== t.setLineDash && (e.setLineDash(t.getLineDash()), e.lineDashOffset = t.lineDashOffset)
        }

        function er(t) {
            if (t.strokeStyle = t.fillStyle = "#000000", t.fillRule = "nonzero", t.globalAlpha = 1, t.lineWidth = 1, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 10, t.globalCompositeOperation = "source-over", t.font = "10px sans-serif", void 0 !== t.setLineDash && (t.setLineDash([]), t.lineDashOffset = 0), !d) {
                let {filter: e} = t;
                "none" !== e && "" !== e && (t.filter = "none")
            }
        }

        function en(t, e) {
            if (e) return !0;
            let i = q.singularValueDecompose2dScale(t);
            i[0] = Math.fround(i[0]), i[1] = Math.fround(i[1]);
            let s = Math.fround((globalThis.devicePixelRatio || 1) * tr.PDF_TO_CSS_UNITS);
            return i[0] <= s && i[1] <= s
        }

        let ea = ["butt", "round", "square"], eo = ["miter", "round", "bevel"], el = {}, eh = {};

        class ed {
            constructor(t, e, i, s, r, {optionalContentConfig: n, markedContentStack: a = null}, o, l) {
                this.ctx = t, this.current = new et(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = a || [], this.optionalContentConfig = n, this.cachedCanvases = new t7(this.canvasFactory), this.cachedPatterns = new Map, this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = new Map
            }

            getObject(t, e = null) {
                return "string" == typeof t ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e
            }

            beginDrawing({transform: t, viewport: e, transparency: i = !1, background: s = null}) {
                let r = this.ctx.canvas.width, n = this.ctx.canvas.height, a = this.ctx.fillStyle;
                if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, r, n), this.ctx.fillStyle = a, i) {
                    let t = this.cachedCanvases.getCanvas("transparent", r, n);
                    this.compositeCtx = this.ctx, this.transparentCanvas = t.canvas, this.ctx = t.context, this.ctx.save(), this.ctx.transform(...tE(this.compositeCtx))
                }
                this.ctx.save(), er(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = tE(this.ctx)
            }

            executeOperatorList(t, e, i, s) {
                let r;
                let n = t.argsArray, a = t.fnArray, o = e || 0, l = n.length;
                if (l === o) return o;
                let h = l - o > 10 && "function" == typeof i, d = h ? Date.now() + 15 : 0, c = 0, u = this.commonObjs,
                    p = this.objs;
                for (; ;) {
                    if (void 0 !== s && o === s.nextBreakPoint) return s.breakIt(o, i), o;
                    if ((r = a[o]) !== E.dependency) this[r].apply(this, n[o]); else for (let t of n[o]) {
                        let e = t.startsWith("g_") ? u : p;
                        if (!e.has(t)) return e.get(t, i), o
                    }
                    if (++o === l) return o;
                    if (h && ++c > 10) {
                        if (Date.now() > d) return i(), o;
                        c = 0
                    }
                }
            }

            #eO() {
                for (; this.stateStack.length || this.inSMaskMode;) this.restore();
                this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null)
            }

            endDrawing() {
                for (let t of (this.#eO(), this.cachedCanvases.clear(), this.cachedPatterns.clear(), this._cachedBitmapsMap.values())) {
                    for (let e of t.values()) "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
                    t.clear()
                }
                this._cachedBitmapsMap.clear(), this.#eN()
            }

            #eN() {
                if (this.pageColors) {
                    let t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
                    if ("none" !== t) {
                        let e = this.ctx.filter;
                        this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e
                    }
                }
            }

            _scaleImage(t, e) {
                let i, s;
                let r = t.width, n = t.height, a = Math.max(Math.hypot(e[0], e[1]), 1),
                    o = Math.max(Math.hypot(e[2], e[3]), 1), l = r, h = n, d = "prescale1";
                for (; a > 2 && l > 1 || o > 2 && h > 1;) {
                    let e = l, r = h;
                    a > 2 && l > 1 && (e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), a /= l / e), o > 2 && h > 1 && (r = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, o /= h / r), (s = (i = this.cachedCanvases.getCanvas(d, e, r)).context).clearRect(0, 0, e, r), s.drawImage(t, 0, 0, l, h, 0, 0, e, r), t = i.canvas, l = e, h = r, d = "prescale1" === d ? "prescale2" : "prescale1"
                }
                return {img: t, paintWidth: l, paintHeight: h}
            }

            _createMaskCanvas(t) {
                let e, i, s, r;
                let n = this.ctx, {width: a, height: o} = t, l = this.current.fillColor, h = this.current.patternFill,
                    d = tE(n);
                if ((t.bitmap || t.data) && t.count > 1) {
                    let r = t.bitmap || t.data.buffer;
                    i = JSON.stringify(h ? d : [d.slice(0, 4), l]), (e = this._cachedBitmapsMap.get(r)) || (e = new Map, this._cachedBitmapsMap.set(r, e));
                    let n = e.get(i);
                    if (n && !h) return {
                        canvas: n,
                        offsetX: Math.round(Math.min(d[0], d[2]) + d[4]),
                        offsetY: Math.round(Math.min(d[1], d[3]) + d[5])
                    };
                    s = n
                }
                s || ei((r = this.cachedCanvases.getCanvas("maskCanvas", a, o)).context, t);
                let c = q.transform(d, [1 / a, 0, 0, -1 / o, 0, 0]);
                c = q.transform(c, [1, 0, 0, 1, 0, -o]);
                let [u, p, g, f] = q.getAxialAlignedBoundingBox([0, 0, a, o], c),
                    m = this.cachedCanvases.getCanvas("fillCanvas", Math.round(g - u) || 1, Math.round(f - p) || 1),
                    v = m.context;
                v.translate(-u, -p), v.transform(...c), !s && (s = (s = this._scaleImage(r.canvas, tS(v))).img, e && h && e.set(i, s)), v.imageSmoothingEnabled = en(tE(v), t.interpolate), t8(v, s, 0, 0, s.width, s.height, 0, 0, a, o), v.globalCompositeOperation = "source-in";
                let b = q.transform(tS(v), [1, 0, 0, 1, -u, -p]);
                return v.fillStyle = h ? l.getPattern(n, this, b, tZ.FILL) : l, v.fillRect(0, 0, a, o), e && !h && (this.cachedCanvases.delete("fillCanvas"), e.set(i, m.canvas)), {
                    canvas: m.canvas,
                    offsetX: Math.round(u),
                    offsetY: Math.round(p)
                }
            }

            setLineWidth(t) {
                t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t
            }

            setLineCap(t) {
                this.ctx.lineCap = ea[t]
            }

            setLineJoin(t) {
                this.ctx.lineJoin = eo[t]
            }

            setMiterLimit(t) {
                this.ctx.miterLimit = t
            }

            setDash(t, e) {
                let i = this.ctx;
                void 0 !== i.setLineDash && (i.setLineDash(t), i.lineDashOffset = e)
            }

            setRenderingIntent(t) {
            }

            setFlatness(t) {
            }

            setGState(t) {
                for (let [e, i] of t) switch (e) {
                    case"LW":
                        this.setLineWidth(i);
                        break;
                    case"LC":
                        this.setLineCap(i);
                        break;
                    case"LJ":
                        this.setLineJoin(i);
                        break;
                    case"ML":
                        this.setMiterLimit(i);
                        break;
                    case"D":
                        this.setDash(i[0], i[1]);
                        break;
                    case"RI":
                        this.setRenderingIntent(i);
                        break;
                    case"FL":
                        this.setFlatness(i);
                        break;
                    case"Font":
                        this.setFont(i[0], i[1]);
                        break;
                    case"CA":
                        this.current.strokeAlpha = i;
                        break;
                    case"ca":
                        this.current.fillAlpha = i, this.ctx.globalAlpha = i;
                        break;
                    case"BM":
                        this.ctx.globalCompositeOperation = i;
                        break;
                    case"SMask":
                        this.current.activeSMask = i ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                        break;
                    case"TR":
                        this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i)
                }
            }

            get inSMaskMode() {
                return !!this.suspendedCtx
            }

            checkSMaskState() {
                let t = this.inSMaskMode;
                this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode()
            }

            beginSMaskMode() {
                if (this.inSMaskMode) throw Error("beginSMaskMode called while already in smask mode");
                let t = this.ctx.canvas.width, e = this.ctx.canvas.height, i = "smaskGroupAt" + this.groupLevel,
                    s = this.cachedCanvases.getCanvas(i, t, e);
                this.suspendedCtx = this.ctx, this.ctx = s.context;
                let r = this.ctx;
                r.setTransform(...tE(this.suspendedCtx)), es(this.suspendedCtx, r), function (t, e) {
                    if (t._removeMirroring) throw Error("Context is already forwarding operations.");
                    t.__originalSave = t.save, t.__originalRestore = t.restore, t.__originalRotate = t.rotate, t.__originalScale = t.scale, t.__originalTranslate = t.translate, t.__originalTransform = t.transform, t.__originalSetTransform = t.setTransform, t.__originalResetTransform = t.resetTransform, t.__originalClip = t.clip, t.__originalMoveTo = t.moveTo, t.__originalLineTo = t.lineTo, t.__originalBezierCurveTo = t.bezierCurveTo, t.__originalRect = t.rect, t.__originalClosePath = t.closePath, t.__originalBeginPath = t.beginPath, t._removeMirroring = () => {
                        t.save = t.__originalSave, t.restore = t.__originalRestore, t.rotate = t.__originalRotate, t.scale = t.__originalScale, t.translate = t.__originalTranslate, t.transform = t.__originalTransform, t.setTransform = t.__originalSetTransform, t.resetTransform = t.__originalResetTransform, t.clip = t.__originalClip, t.moveTo = t.__originalMoveTo, t.lineTo = t.__originalLineTo, t.bezierCurveTo = t.__originalBezierCurveTo, t.rect = t.__originalRect, t.closePath = t.__originalClosePath, t.beginPath = t.__originalBeginPath, delete t._removeMirroring
                    }, t.save = function () {
                        e.save(), this.__originalSave()
                    }, t.restore = function () {
                        e.restore(), this.__originalRestore()
                    }, t.translate = function (t, i) {
                        e.translate(t, i), this.__originalTranslate(t, i)
                    }, t.scale = function (t, i) {
                        e.scale(t, i), this.__originalScale(t, i)
                    }, t.transform = function (t, i, s, r, n, a) {
                        e.transform(t, i, s, r, n, a), this.__originalTransform(t, i, s, r, n, a)
                    }, t.setTransform = function (t, i, s, r, n, a) {
                        e.setTransform(t, i, s, r, n, a), this.__originalSetTransform(t, i, s, r, n, a)
                    }, t.resetTransform = function () {
                        e.resetTransform(), this.__originalResetTransform()
                    }, t.rotate = function (t) {
                        e.rotate(t), this.__originalRotate(t)
                    }, t.clip = function (t) {
                        e.clip(t), this.__originalClip(t)
                    }, t.moveTo = function (t, i) {
                        e.moveTo(t, i), this.__originalMoveTo(t, i)
                    }, t.lineTo = function (t, i) {
                        e.lineTo(t, i), this.__originalLineTo(t, i)
                    }, t.bezierCurveTo = function (t, i, s, r, n, a) {
                        e.bezierCurveTo(t, i, s, r, n, a), this.__originalBezierCurveTo(t, i, s, r, n, a)
                    }, t.rect = function (t, i, s, r) {
                        e.rect(t, i, s, r), this.__originalRect(t, i, s, r)
                    }, t.closePath = function () {
                        e.closePath(), this.__originalClosePath()
                    }, t.beginPath = function () {
                        e.beginPath(), this.__originalBeginPath()
                    }
                }(r, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]])
            }

            endSMaskMode() {
                if (!this.inSMaskMode) throw Error("endSMaskMode called while not in smask mode");
                this.ctx._removeMirroring(), es(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null
            }

            compose(t) {
                if (!this.current.activeSMask) return;
                t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
                let e = this.current.activeSMask, i = this.suspendedCtx;
                this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore()
            }

            composeSMask(t, e, i, s) {
                let r = s[0], n = s[1], a = s[2] - r, o = s[3] - n;
                0 !== a && 0 !== o && (this.genericComposeSMask(e.context, i, a, o, e.subtype, e.backdrop, e.transferMap, r, n, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore())
            }

            genericComposeSMask(t, e, i, s, r, n, a, o, l, h, d) {
                let c = t.canvas, u = o - h, p = l - d;
                if (n) {
                    if (u < 0 || p < 0 || u + i > c.width || p + s > c.height) {
                        let t = this.cachedCanvases.getCanvas("maskExtension", i, s), e = t.context;
                        e.drawImage(c, -u, -p), n.some(t => 0 !== t) && (e.globalCompositeOperation = "destination-atop", e.fillStyle = q.makeHexColor(...n), e.fillRect(0, 0, i, s), e.globalCompositeOperation = "source-over"), c = t.canvas, u = p = 0
                    } else if (n.some(t => 0 !== t)) {
                        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
                        let e = new Path2D;
                        e.rect(u, p, i, s), t.clip(e), t.globalCompositeOperation = "destination-atop", t.fillStyle = q.makeHexColor(...n), t.fillRect(u, p, i, s), t.restore()
                    }
                }
                e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), "Alpha" === r && a ? e.filter = this.filterFactory.addAlphaFilter(a) : "Luminosity" === r && (e.filter = this.filterFactory.addLuminosityFilter(a));
                let g = new Path2D;
                g.rect(o, l, i, s), e.clip(g), e.globalCompositeOperation = "destination-in", e.drawImage(c, u, p, i, s, o, l, i, s), e.restore()
            }

            save() {
                this.inSMaskMode ? (es(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
                let t = this.current;
                this.stateStack.push(t), this.current = t.clone()
            }

            restore() {
                0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), es(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null)
            }

            transform(t, e, i, s, r, n) {
                this.ctx.transform(t, e, i, s, r, n), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null
            }

            constructPath(t, e, i) {
                let s, r;
                let n = this.ctx, a = this.current, o = a.x, l = a.y, h = tE(n),
                    d = 0 === h[0] && 0 === h[3] || 0 === h[1] && 0 === h[2], c = d ? i.slice(0) : null;
                for (let i = 0, u = 0, p = t.length; i < p; i++) switch (0 | t[i]) {
                    case E.rectangle:
                        o = e[u++], l = e[u++];
                        let p = e[u++], g = e[u++], f = o + p, m = l + g;
                        n.moveTo(o, l), 0 === p || 0 === g ? n.lineTo(f, m) : (n.lineTo(f, l), n.lineTo(f, m), n.lineTo(o, m)), d || a.updateRectMinMax(h, [o, l, f, m]), n.closePath();
                        break;
                    case E.moveTo:
                        o = e[u++], l = e[u++], n.moveTo(o, l), d || a.updatePathMinMax(h, o, l);
                        break;
                    case E.lineTo:
                        o = e[u++], l = e[u++], n.lineTo(o, l), d || a.updatePathMinMax(h, o, l);
                        break;
                    case E.curveTo:
                        s = o, r = l, o = e[u + 4], l = e[u + 5], n.bezierCurveTo(e[u], e[u + 1], e[u + 2], e[u + 3], o, l), a.updateCurvePathMinMax(h, s, r, e[u], e[u + 1], e[u + 2], e[u + 3], o, l, c), u += 6;
                        break;
                    case E.curveTo2:
                        s = o, r = l, n.bezierCurveTo(o, l, e[u], e[u + 1], e[u + 2], e[u + 3]), a.updateCurvePathMinMax(h, s, r, o, l, e[u], e[u + 1], e[u + 2], e[u + 3], c), o = e[u + 2], l = e[u + 3], u += 4;
                        break;
                    case E.curveTo3:
                        s = o, r = l, o = e[u + 2], l = e[u + 3], n.bezierCurveTo(e[u], e[u + 1], o, l, o, l), a.updateCurvePathMinMax(h, s, r, e[u], e[u + 1], o, l, o, l, c), u += 4;
                        break;
                    case E.closePath:
                        n.closePath()
                }
                d && a.updateScalingPathMinMax(h, c), a.setCurrentPoint(o, l)
            }

            closePath() {
                this.ctx.closePath()
            }

            stroke(t = !0) {
                let e = this.ctx, i = this.current.strokeColor;
                e.globalAlpha = this.current.strokeAlpha, this.contentVisible && ("object" == typeof i && i?.getPattern ? (e.save(), e.strokeStyle = i.getPattern(e, this, tS(e), tZ.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha
            }

            closeStroke() {
                this.closePath(), this.stroke()
            }

            fill(t = !0) {
                let e = this.ctx, i = this.current.fillColor, s = this.current.patternFill, r = !1;
                s && (e.save(), e.fillStyle = i.getPattern(e, this, tS(e), tZ.FILL), r = !0);
                let n = this.current.getClippedPathBoundingBox();
                this.contentVisible && null !== n && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), r && e.restore(), t && this.consumePath(n)
            }

            eoFill() {
                this.pendingEOFill = !0, this.fill()
            }

            fillStroke() {
                this.fill(!1), this.stroke(!1), this.consumePath()
            }

            eoFillStroke() {
                this.pendingEOFill = !0, this.fillStroke()
            }

            closeFillStroke() {
                this.closePath(), this.fillStroke()
            }

            closeEOFillStroke() {
                this.pendingEOFill = !0, this.closePath(), this.fillStroke()
            }

            endPath() {
                this.consumePath()
            }

            clip() {
                this.pendingClip = el
            }

            eoClip() {
                this.pendingClip = eh
            }

            beginText() {
                this.current.textMatrix = c, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
            }

            endText() {
                let t = this.pendingTextPaths, e = this.ctx;
                if (void 0 === t) {
                    e.beginPath();
                    return
                }
                for (let i of (e.save(), e.beginPath(), t)) e.setTransform(...i.transform), e.translate(i.x, i.y), i.addToPath(e, i.fontSize);
                e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths
            }

            setCharSpacing(t) {
                this.current.charSpacing = t
            }

            setWordSpacing(t) {
                this.current.wordSpacing = t
            }

            setHScale(t) {
                this.current.textHScale = t / 100
            }

            setLeading(t) {
                this.current.leading = -t
            }

            setFont(t, e) {
                let i = this.commonObjs.get(t), s = this.current;
                if (!i) throw Error(`Can't find font for ${t}`);
                if (s.fontMatrix = i.fontMatrix || u, (0 === s.fontMatrix[0] || 0 === s.fontMatrix[3]) && M("Invalid font matrix for font " + t), e < 0 ? (e = -e, s.fontDirection = -1) : s.fontDirection = 1, this.current.font = i, this.current.fontSize = e, i.isType3Font) return;
                let r = i.loadedName || "sans-serif", n = i.systemFontInfo?.css || `"${r}", ${i.fallbackName}`,
                    a = "normal";
                i.black ? a = "900" : i.bold && (a = "bold");
                let o = i.italic ? "italic" : "normal", l = e;
                e < 16 ? l = 16 : e > 100 && (l = 100), this.current.fontSizeScale = e / l, this.ctx.font = `${o} ${a} ${l}px ${n}`
            }

            setTextRenderingMode(t) {
                this.current.textRenderingMode = t
            }

            setTextRise(t) {
                this.current.textRise = t
            }

            moveText(t, e) {
                this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e
            }

            setLeadingMoveText(t, e) {
                this.setLeading(-e), this.moveText(t, e)
            }

            setTextMatrix(t, e, i, s, r, n) {
                this.current.textMatrix = [t, e, i, s, r, n], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
            }

            nextLine() {
                this.moveText(0, this.current.leading)
            }

            paintChar(t, e, i, s) {
                let r;
                let n = this.ctx, a = this.current, o = a.font, l = a.textRenderingMode,
                    h = a.fontSize / a.fontSizeScale, d = l & b.FILL_STROKE_MASK, c = !!(l & b.ADD_TO_PATH_FLAG),
                    u = a.patternFill && !o.missingFile;
                (o.disableFontFace || c || u) && (r = o.getPathGenerator(this.commonObjs, t)), o.disableFontFace || u ? (n.save(), n.translate(e, i), n.beginPath(), r(n, h), s && n.setTransform(...s), (d === b.FILL || d === b.FILL_STROKE) && n.fill(), (d === b.STROKE || d === b.FILL_STROKE) && n.stroke(), n.restore()) : ((d === b.FILL || d === b.FILL_STROKE) && n.fillText(t, e, i), (d === b.STROKE || d === b.FILL_STROKE) && n.strokeText(t, e, i)), c && (this.pendingTextPaths ||= []).push({
                    transform: tE(n),
                    x: e,
                    y: i,
                    fontSize: h,
                    addToPath: r
                })
            }

            get isFontSubpixelAAEnabled() {
                let {context: t} = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                t.scale(1.5, 1), t.fillText("I", 0, 10);
                let e = t.getImageData(0, 0, 10, 10).data, i = !1;
                for (let t = 3; t < e.length; t += 4) if (e[t] > 0 && e[t] < 255) {
                    i = !0;
                    break
                }
                return I(this, "isFontSubpixelAAEnabled", i)
            }

            showText(t) {
                let e;
                let i = this.current, s = i.font;
                if (s.isType3Font) return this.showType3Text(t);
                let r = i.fontSize;
                if (0 === r) return;
                let n = this.ctx, a = i.fontSizeScale, o = i.charSpacing, l = i.wordSpacing, h = i.fontDirection,
                    d = i.textHScale * h, c = t.length, u = s.vertical, p = u ? 1 : -1, g = s.defaultVMetrics,
                    f = r * i.fontMatrix[0], m = i.textRenderingMode === b.FILL && !s.disableFontFace && !i.patternFill;
                if (n.save(), n.transform(...i.textMatrix), n.translate(i.x, i.y + i.textRise), h > 0 ? n.scale(d, -1) : n.scale(d, 1), i.patternFill) {
                    n.save();
                    let t = i.fillColor.getPattern(n, this, tS(n), tZ.FILL);
                    e = tE(n), n.restore(), n.fillStyle = t
                }
                let v = i.lineWidth, A = i.textMatrixScale;
                if (0 === A || 0 === v) {
                    let t = i.textRenderingMode & b.FILL_STROKE_MASK;
                    (t === b.STROKE || t === b.FILL_STROKE) && (v = this.getSinglePixelWidth())
                } else v /= A;
                if (1 !== a && (n.scale(a, a), v /= a), n.lineWidth = v, s.isInvalidPDFjsFont) {
                    let e = [], s = 0;
                    for (let i of t) e.push(i.unicode), s += i.width;
                    n.fillText(e.join(""), 0, 0), i.x += s * f * d, n.restore(), this.compose();
                    return
                }
                let y = 0, _;
                for (_ = 0; _ < c; ++_) {
                    let i, d;
                    let c = t[_];
                    if ("number" == typeof c) {
                        y += p * c * r / 1e3;
                        continue
                    }
                    let v = !1, b = (c.isSpace ? l : 0) + o, A = c.fontChar, w = c.accent, x = c.width;
                    if (u) {
                        let t = c.vmetric || g, e = -(c.vmetric ? t[1] : .5 * x) * f, s = t[2] * f;
                        x = t ? -t[0] : x, i = e / a, d = (y + s) / a
                    } else i = y / a, d = 0;
                    if (s.remeasure && x > 0) {
                        let t = 1e3 * n.measureText(A).width / r * a;
                        if (x < t && this.isFontSubpixelAAEnabled) {
                            let e = x / t;
                            v = !0, n.save(), n.scale(e, 1), i /= e
                        } else x !== t && (i += (x - t) / 2e3 * r / a)
                    }
                    if (this.contentVisible && (c.isInFont || s.missingFile)) {
                        if (m && !w) n.fillText(A, i, d); else if (this.paintChar(A, i, d, e), w) {
                            let t = i + r * w.offset.x / a, s = d - r * w.offset.y / a;
                            this.paintChar(w.fontChar, t, s, e)
                        }
                    }
                    y += u ? x * f - b * h : x * f + b * h, v && n.restore()
                }
                u ? i.y -= y : i.x += y * d, n.restore(), this.compose()
            }

            showType3Text(t) {
                let e, i, s, r;
                let n = this.ctx, a = this.current, o = a.font, l = a.fontSize, h = a.fontDirection,
                    d = o.vertical ? 1 : -1, c = a.charSpacing, p = a.wordSpacing, g = a.textHScale * h,
                    f = a.fontMatrix || u, m = t.length;
                if (a.textRenderingMode !== b.INVISIBLE && 0 !== l) {
                    for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, n.save(), n.transform(...a.textMatrix), n.translate(a.x, a.y), n.scale(g, h), e = 0; e < m; ++e) {
                        if ("number" == typeof (i = t[e])) {
                            r = d * i * l / 1e3, this.ctx.translate(r, 0), a.x += r * g;
                            continue
                        }
                        let h = (i.isSpace ? p : 0) + c, u = o.charProcOperatorList[i.operatorListId];
                        if (!u) {
                            M(`Type3 character "${i.operatorListId}" is not available.`);
                            continue
                        }
                        this.contentVisible && (this.processingType3 = i, this.save(), n.scale(l, l), n.transform(...f), this.executeOperatorList(u), this.restore()), s = q.applyTransform([i.width, 0], f)[0] * l + h, n.translate(s, 0), a.x += s * g
                    }
                    n.restore(), this.processingType3 = null
                }
            }

            setCharWidth(t, e) {
            }

            setCharWidthAndBounds(t, e, i, s, r, n) {
                this.ctx.rect(i, s, r - i, n - s), this.ctx.clip(), this.endPath()
            }

            getColorN_Pattern(t) {
                let e;
                if ("TilingPattern" === t[0]) {
                    let i = t[1], s = this.baseTransform || tE(this.ctx);
                    e = new t9(t, i, this.ctx, {
                        createCanvasGraphics: t => new ed(t, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                            optionalContentConfig: this.optionalContentConfig,
                            markedContentStack: this.markedContentStack
                        })
                    }, s)
                } else e = this._getPattern(t[1], t[2]);
                return e
            }

            setStrokeColorN() {
                this.current.strokeColor = this.getColorN_Pattern(arguments)
            }

            setFillColorN() {
                this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
            }

            setStrokeRGBColor(t, e, i) {
                let s = q.makeHexColor(t, e, i);
                this.ctx.strokeStyle = s, this.current.strokeColor = s
            }

            setFillRGBColor(t, e, i) {
                let s = q.makeHexColor(t, e, i);
                this.ctx.fillStyle = s, this.current.fillColor = s, this.current.patternFill = !1
            }

            _getPattern(t, e = null) {
                let i;
                return this.cachedPatterns.has(t) ? i = this.cachedPatterns.get(t) : (i = function (t) {
                    switch (t[0]) {
                        case"RadialAxial":
                            return new t2(t);
                        case"Mesh":
                            return new t4(t);
                        case"Dummy":
                            return new t3
                    }
                    throw Error(`Unknown IR type: ${t[0]}`)
                }(this.getObject(t)), this.cachedPatterns.set(t, i)), e && (i.matrix = e), i
            }

            shadingFill(t) {
                if (!this.contentVisible) return;
                let e = this.ctx;
                this.save();
                let i = this._getPattern(t);
                e.fillStyle = i.getPattern(e, this, tS(e), tZ.SHADING);
                let s = tS(e);
                if (s) {
                    let {width: t, height: i} = e.canvas, [r, n, a, o] = q.getAxialAlignedBoundingBox([0, 0, t, i], s);
                    this.ctx.fillRect(r, n, a - r, o - n)
                } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                this.compose(this.current.getClippedPathBoundingBox()), this.restore()
            }

            beginInlineImage() {
                R("Should not call beginInlineImage")
            }

            beginImageData() {
                R("Should not call beginImageData")
            }

            paintFormXObjectBegin(t, e) {
                if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = tE(this.ctx), e)) {
                    let t = e[2] - e[0], i = e[3] - e[1];
                    this.ctx.rect(e[0], e[1], t, i), this.current.updateRectMinMax(tE(this.ctx), e), this.clip(), this.endPath()
                }
            }

            paintFormXObjectEnd() {
                this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop())
            }

            beginGroup(t) {
                if (!this.contentVisible) return;
                this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
                let e = this.ctx;
                t.isolated || T("TODO: Support non-isolated groups."), t.knockout && M("Knockout groups not supported.");
                let i = tE(e);
                if (t.matrix && e.transform(...t.matrix), !t.bbox) throw Error("Bounding box is required.");
                let s = q.getAxialAlignedBoundingBox(t.bbox, tE(e)), r = [0, 0, e.canvas.width, e.canvas.height],
                    n = Math.floor((s = q.intersect(s, r) || [0, 0, 0, 0])[0]), a = Math.floor(s[1]),
                    o = Math.max(Math.ceil(s[2]) - n, 1), l = Math.max(Math.ceil(s[3]) - a, 1);
                this.current.startNewPathAndClipBox([0, 0, o, l]);
                let h = "groupAt" + this.groupLevel;
                t.smask && (h += "_smask_" + this.smaskCounter++ % 2);
                let d = this.cachedCanvases.getCanvas(h, o, l), c = d.context;
                c.translate(-n, -a), c.transform(...i), t.smask ? this.smaskStack.push({
                    canvas: d.canvas,
                    context: c,
                    offsetX: n,
                    offsetY: a,
                    subtype: t.smask.subtype,
                    backdrop: t.smask.backdrop,
                    transferMap: t.smask.transferMap || null,
                    startTransformInverse: null
                }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(n, a), e.save()), es(e, c), this.ctx = c, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++
            }

            endGroup(t) {
                if (!this.contentVisible) return;
                this.groupLevel--;
                let e = this.ctx, i = this.groupStack.pop();
                if (this.ctx = i, this.ctx.imageSmoothingEnabled = !1, t.smask) this.tempSMask = this.smaskStack.pop(), this.restore(); else {
                    this.ctx.restore();
                    let t = tE(this.ctx);
                    this.restore(), this.ctx.save(), this.ctx.setTransform(...t);
                    let i = q.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], t);
                    this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(i)
                }
            }

            beginAnnotation(t, e, i, s, r) {
                if (this.#eO(), er(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
                    let s = e[2] - e[0], n = e[3] - e[1];
                    if (r && this.annotationCanvasMap) {
                        i = i.slice(), i[4] -= e[0], i[5] -= e[1], (e = e.slice())[0] = e[1] = 0, e[2] = s, e[3] = n;
                        let [r, a] = q.singularValueDecompose2dScale(tE(this.ctx)), {viewportScale: o} = this,
                            l = Math.ceil(s * this.outputScaleX * o), h = Math.ceil(n * this.outputScaleY * o);
                        this.annotationCanvas = this.canvasFactory.create(l, h);
                        let {canvas: d, context: c} = this.annotationCanvas;
                        this.annotationCanvasMap.set(t, d), this.annotationCanvas.savedCtx = this.ctx, this.ctx = c, this.ctx.save(), this.ctx.setTransform(r, 0, 0, -a, 0, n * a), er(this.ctx)
                    } else er(this.ctx), this.ctx.rect(e[0], e[1], s, n), this.ctx.clip(), this.endPath()
                }
                this.current = new et(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...i), this.transform(...s)
            }

            endAnnotation() {
                this.annotationCanvas && (this.ctx.restore(), this.#eN(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas)
            }

            paintImageMaskXObject(t) {
                if (!this.contentVisible) return;
                let e = t.count;
                (t = this.getObject(t.data, t)).count = e;
                let i = this.ctx, s = this.processingType3;
                if (s && (void 0 === s.compiled && (s.compiled = function (t) {
                    let e, i, s;
                    let {width: r, height: n} = t;
                    if (r > 1e3 || n > 1e3) return null;
                    let a = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), o = r + 1,
                        l = new Uint8Array(o * (n + 1)), h = r + 7 & -8, d = new Uint8Array(h * n), c = 0;
                    for (let e of t.data) {
                        let t = 128;
                        for (; t > 0;) d[c++] = e & t ? 0 : 255, t >>= 1
                    }
                    let u = 0;
                    for (0 !== d[c = 0] && (l[0] = 1, ++u), i = 1; i < r; i++) d[c] !== d[c + 1] && (l[i] = d[c] ? 2 : 1, ++u), c++;
                    for (0 !== d[c] && (l[i] = 2, ++u), e = 1; e < n; e++) {
                        c = e * h, s = e * o, d[c - h] !== d[c] && (l[s] = d[c] ? 1 : 8, ++u);
                        let t = (d[c] ? 4 : 0) + (d[c - h] ? 8 : 0);
                        for (i = 1; i < r; i++) a[t = (t >> 2) + (d[c + 1] ? 4 : 0) + (d[c - h + 1] ? 8 : 0)] && (l[s + i] = a[t], ++u), c++;
                        if (d[c - h] !== d[c] && (l[s + i] = d[c] ? 2 : 4, ++u), u > 1e3) return null
                    }
                    for (c = h * (n - 1), s = e * o, 0 !== d[c] && (l[s] = 8, ++u), i = 1; i < r; i++) d[c] !== d[c + 1] && (l[s + i] = d[c] ? 4 : 8, ++u), c++;
                    if (0 !== d[c] && (l[s + i] = 4, ++u), u > 1e3) return null;
                    let p = new Int32Array([0, o, -1, 0, -o, 0, 0, 0, 1]), g = new Path2D;
                    for (e = 0; u && e <= n; e++) {
                        let t = e * o, i = t + r;
                        for (; t < i && !l[t];) t++;
                        if (t === i) continue;
                        g.moveTo(t % o, e);
                        let s = t, n = l[t];
                        do {
                            let e = p[n];
                            do t += e; while (!l[t]);
                            let i = l[t];
                            5 !== i && 10 !== i ? (n = i, l[t] = 0) : (n = i & 51 * n >> 4, l[t] &= n >> 2 | n << 2), g.lineTo(t % o, t / o | 0), !l[t] && --u
                        } while (s !== t);
                        --e
                    }
                    return d = null, l = null, function (t) {
                        t.save(), t.scale(1 / r, -1 / n), t.translate(0, -n), t.fill(g), t.beginPath(), t.restore()
                    }
                }(t)), s.compiled)) {
                    s.compiled(i);
                    return
                }
                let r = this._createMaskCanvas(t), n = r.canvas;
                i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(n, r.offsetX, r.offsetY), i.restore(), this.compose()
            }

            paintImageMaskXObjectRepeat(t, e, i = 0, s = 0, r, n) {
                if (!this.contentVisible) return;
                t = this.getObject(t.data, t);
                let a = this.ctx;
                a.save();
                let o = tE(a);
                a.transform(e, i, s, r, 0, 0);
                let l = this._createMaskCanvas(t);
                a.setTransform(1, 0, 0, 1, l.offsetX - o[4], l.offsetY - o[5]);
                for (let t = 0, h = n.length; t < h; t += 2) {
                    let h = q.transform(o, [e, i, s, r, n[t], n[t + 1]]), [d, c] = q.applyTransform([0, 0], h);
                    a.drawImage(l.canvas, d, c)
                }
                a.restore(), this.compose()
            }

            paintImageMaskXObjectGroup(t) {
                if (!this.contentVisible) return;
                let e = this.ctx, i = this.current.fillColor, s = this.current.patternFill;
                for (let r of t) {
                    let {data: t, width: n, height: a, transform: o} = r,
                        l = this.cachedCanvases.getCanvas("maskCanvas", n, a), h = l.context;
                    h.save(), ei(h, this.getObject(t, r)), h.globalCompositeOperation = "source-in", h.fillStyle = s ? i.getPattern(h, this, tS(e), tZ.FILL) : i, h.fillRect(0, 0, n, a), h.restore(), e.save(), e.transform(...o), e.scale(1, -1), t8(e, l.canvas, 0, 0, n, a, 0, -1, 1, 1), e.restore()
                }
                this.compose()
            }

            paintImageXObject(t) {
                if (!this.contentVisible) return;
                let e = this.getObject(t);
                if (!e) {
                    M("Dependent image isn't ready yet");
                    return
                }
                this.paintInlineImageXObject(e)
            }

            paintImageXObjectRepeat(t, e, i, s) {
                if (!this.contentVisible) return;
                let r = this.getObject(t);
                if (!r) {
                    M("Dependent image isn't ready yet");
                    return
                }
                let n = r.width, a = r.height, o = [];
                for (let t = 0, r = s.length; t < r; t += 2) o.push({
                    transform: [e, 0, 0, i, s[t], s[t + 1]],
                    x: 0,
                    y: 0,
                    w: n,
                    h: a
                });
                this.paintInlineImageXObjectGroup(r, o)
            }

            applyTransferMapsToCanvas(t) {
                return "none" !== this.current.transferMaps && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas
            }

            applyTransferMapsToBitmap(t) {
                if ("none" === this.current.transferMaps) return t.bitmap;
                let {bitmap: e, width: i, height: s} = t, r = this.cachedCanvases.getCanvas("inlineImage", i, s),
                    n = r.context;
                return n.filter = this.current.transferMaps, n.drawImage(e, 0, 0), n.filter = "none", r.canvas
            }

            paintInlineImageXObject(t) {
                let e;
                if (!this.contentVisible) return;
                let i = t.width, s = t.height, r = this.ctx;
                if (this.save(), !d) {
                    let {filter: t} = r;
                    "none" !== t && "" !== t && (r.filter = "none")
                }
                if (r.scale(1 / i, -1 / s), t.bitmap) e = this.applyTransferMapsToBitmap(t); else if ("function" == typeof HTMLElement && t instanceof HTMLElement || !t.data) e = t; else {
                    let r = this.cachedCanvases.getCanvas("inlineImage", i, s).context;
                    ee(r, t), e = this.applyTransferMapsToCanvas(r)
                }
                let n = this._scaleImage(e, tS(r));
                r.imageSmoothingEnabled = en(tE(r), t.interpolate), t8(r, n.img, 0, 0, n.paintWidth, n.paintHeight, 0, -s, i, s), this.compose(), this.restore()
            }

            paintInlineImageXObjectGroup(t, e) {
                let i;
                if (!this.contentVisible) return;
                let s = this.ctx;
                if (t.bitmap) i = t.bitmap; else {
                    let e = t.width, s = t.height, r = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
                    ee(r, t), i = this.applyTransferMapsToCanvas(r)
                }
                for (let t of e) s.save(), s.transform(...t.transform), s.scale(1, -1), t8(s, i, t.x, t.y, t.w, t.h, 0, -1, 1, 1), s.restore();
                this.compose()
            }

            paintSolidColorImageMask() {
                this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose())
            }

            markPoint(t) {
            }

            markPointProps(t, e) {
            }

            beginMarkedContent(t) {
                this.markedContentStack.push({visible: !0})
            }

            beginMarkedContentProps(t, e) {
                "OC" === t ? this.markedContentStack.push({visible: this.optionalContentConfig.isVisible(e)}) : this.markedContentStack.push({visible: !0}), this.contentVisible = this.isContentVisible()
            }

            endMarkedContent() {
                this.markedContentStack.pop(), this.contentVisible = this.isContentVisible()
            }

            beginCompat() {
            }

            endCompat() {
            }

            consumePath(t) {
                let e = this.current.isEmptyClip();
                this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
                let i = this.ctx;
                this.pendingClip && (e || (this.pendingClip === eh ? i.clip("evenodd") : i.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), i.beginPath()
            }

            getSinglePixelWidth() {
                if (!this._cachedGetSinglePixelWidth) {
                    let t = tE(this.ctx);
                    if (0 === t[1] && 0 === t[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3])); else {
                        let e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]),
                            s = Math.hypot(t[1], t[3]);
                        this._cachedGetSinglePixelWidth = Math.max(i, s) / e
                    }
                }
                return this._cachedGetSinglePixelWidth
            }

            getScaleForStroking() {
                if (-1 === this._cachedScaleForStroking[0]) {
                    let t, e;
                    let {lineWidth: i} = this.current, {a: s, b: r, c: n, d: a} = this.ctx.getTransform();
                    if (0 === r && 0 === n) {
                        let r = Math.abs(s), n = Math.abs(a);
                        if (r === n) {
                            if (0 === i) t = e = 1 / r; else {
                                let s = r * i;
                                t = e = s < 1 ? 1 / s : 1
                            }
                        } else if (0 === i) t = 1 / r, e = 1 / n; else {
                            let s = r * i, a = n * i;
                            t = s < 1 ? 1 / s : 1, e = a < 1 ? 1 / a : 1
                        }
                    } else {
                        let o = Math.abs(s * a - r * n), l = Math.hypot(s, r), h = Math.hypot(n, a);
                        if (0 === i) t = h / o, e = l / o; else {
                            let s = i * o;
                            t = h > s ? h / s : 1, e = l > s ? l / s : 1
                        }
                    }
                    this._cachedScaleForStroking[0] = t, this._cachedScaleForStroking[1] = e
                }
                return this._cachedScaleForStroking
            }

            rescaleAndStroke(t) {
                let {ctx: e} = this, {lineWidth: i} = this.current, [s, r] = this.getScaleForStroking();
                if (e.lineWidth = i || 1, 1 === s && 1 === r) {
                    e.stroke();
                    return
                }
                let n = e.getLineDash();
                if (t && e.save(), e.scale(s, r), n.length > 0) {
                    let t = Math.max(s, r);
                    e.setLineDash(n.map(e => e / t)), e.lineDashOffset /= t
                }
                e.stroke(), t && e.restore()
            }

            isContentVisible() {
                for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
                return !0
            }
        }

        for (let t in E) void 0 !== ed.prototype[t] && (ed.prototype[E[t]] = ed.prototype[t]);

        class ec {
            static #eB = null;
            static #eH = "";

            static get workerPort() {
                return this.#eB
            }

            static set workerPort(t) {
                if (!("undefined" != typeof Worker && t instanceof Worker) && null !== t) throw Error("Invalid `workerPort` type.");
                this.#eB = t
            }

            static get workerSrc() {
                return this.#eH
            }

            static set workerSrc(t) {
                if ("string" != typeof t) throw Error("Invalid `workerSrc` type.");
                this.#eH = t
            }
        }

        let eu = {DATA: 1, ERROR: 2}, ep = {
            CANCEL: 1,
            CANCEL_COMPLETE: 2,
            CLOSE: 3,
            ENQUEUE: 4,
            ERROR: 5,
            PULL: 6,
            PULL_COMPLETE: 7,
            START_COMPLETE: 8
        };

        function eg(t) {
            switch (t instanceof Error || "object" == typeof t && null !== t || R('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), t.name) {
                case"AbortException":
                    return new z(t.message);
                case"MissingPDFException":
                    return new N(t.message);
                case"PasswordException":
                    return new D(t.message, t.code);
                case"UnexpectedResponseException":
                    return new B(t.message, t.status);
                case"UnknownErrorException":
                    return new F(t.message, t.details);
                default:
                    return new F(t.message, t.toString())
            }
        }

        class ef {
            constructor(t, e, i) {
                this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = Object.create(null), this.streamControllers = Object.create(null), this.callbackCapabilities = Object.create(null), this.actionHandler = Object.create(null), this._onComObjOnMessage = t => {
                    let e = t.data;
                    if (e.targetName !== this.sourceName) return;
                    if (e.stream) {
                        this.#ez(e);
                        return
                    }
                    if (e.callback) {
                        let t = e.callbackId, i = this.callbackCapabilities[t];
                        if (!i) throw Error(`Cannot resolve callback ${t}`);
                        if (delete this.callbackCapabilities[t], e.callback === eu.DATA) i.resolve(e.data); else if (e.callback === eu.ERROR) i.reject(eg(e.reason)); else throw Error("Unexpected callback case");
                        return
                    }
                    let s = this.actionHandler[e.action];
                    if (!s) throw Error(`Unknown action from worker: ${e.action}`);
                    if (e.callbackId) {
                        let t = this.sourceName, r = e.sourceName;
                        new Promise(function (t) {
                            t(s(e.data))
                        }).then(function (s) {
                            i.postMessage({
                                sourceName: t,
                                targetName: r,
                                callback: eu.DATA,
                                callbackId: e.callbackId,
                                data: s
                            })
                        }, function (s) {
                            i.postMessage({
                                sourceName: t,
                                targetName: r,
                                callback: eu.ERROR,
                                callbackId: e.callbackId,
                                reason: eg(s)
                            })
                        });
                        return
                    }
                    if (e.streamId) {
                        this.#ej(e);
                        return
                    }
                    s(e.data)
                }, i.addEventListener("message", this._onComObjOnMessage)
            }

            on(t, e) {
                let i = this.actionHandler;
                if (i[t]) throw Error(`There is already an actionName called "${t}"`);
                i[t] = e
            }

            send(t, e, i) {
                this.comObj.postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: t,
                    data: e
                }, i)
            }

            sendWithPromise(t, e, i) {
                let s = this.callbackId++, r = Promise.withResolvers();
                this.callbackCapabilities[s] = r;
                try {
                    this.comObj.postMessage({
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: t,
                        callbackId: s,
                        data: e
                    }, i)
                } catch (t) {
                    r.reject(t)
                }
                return r.promise
            }

            sendWithStream(t, e, i, s) {
                let r = this.streamId++, n = this.sourceName, a = this.targetName, o = this.comObj;
                return new ReadableStream({
                    start: i => {
                        let l = Promise.withResolvers();
                        return this.streamControllers[r] = {
                            controller: i,
                            startCall: l,
                            pullCall: null,
                            cancelCall: null,
                            isClosed: !1
                        }, o.postMessage({
                            sourceName: n,
                            targetName: a,
                            action: t,
                            streamId: r,
                            data: e,
                            desiredSize: i.desiredSize
                        }, s), l.promise
                    }, pull: t => {
                        let e = Promise.withResolvers();
                        return this.streamControllers[r].pullCall = e, o.postMessage({
                            sourceName: n,
                            targetName: a,
                            stream: ep.PULL,
                            streamId: r,
                            desiredSize: t.desiredSize
                        }), e.promise
                    }, cancel: t => {
                        k(t instanceof Error, "cancel must have a valid reason");
                        let e = Promise.withResolvers();
                        return this.streamControllers[r].cancelCall = e, this.streamControllers[r].isClosed = !0, o.postMessage({
                            sourceName: n,
                            targetName: a,
                            stream: ep.CANCEL,
                            streamId: r,
                            reason: eg(t)
                        }), e.promise
                    }
                }, i)
            }

            #ej(t) {
                let e = t.streamId, i = this.sourceName, s = t.sourceName, r = this.comObj, n = this,
                    a = this.actionHandler[t.action], o = {
                        enqueue(t, n = 1, a) {
                            if (this.isCancelled) return;
                            let o = this.desiredSize;
                            this.desiredSize -= n, o > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.ENQUEUE,
                                streamId: e,
                                chunk: t
                            }, a)
                        },
                        close() {
                            this.isCancelled || (this.isCancelled = !0, r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.CLOSE,
                                streamId: e
                            }), delete n.streamSinks[e])
                        },
                        error(t) {
                            k(t instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.ERROR,
                                streamId: e,
                                reason: eg(t)
                            }))
                        },
                        sinkCapability: Promise.withResolvers(),
                        onPull: null,
                        onCancel: null,
                        isCancelled: !1,
                        desiredSize: t.desiredSize,
                        ready: null
                    };
                o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, new Promise(function (e) {
                    e(a(t.data, o))
                }).then(function () {
                    r.postMessage({sourceName: i, targetName: s, stream: ep.START_COMPLETE, streamId: e, success: !0})
                }, function (t) {
                    r.postMessage({sourceName: i, targetName: s, stream: ep.START_COMPLETE, streamId: e, reason: eg(t)})
                })
            }

            #ez(t) {
                let e = t.streamId, i = this.sourceName, s = t.sourceName, r = this.comObj,
                    n = this.streamControllers[e], a = this.streamSinks[e];
                switch (t.stream) {
                    case ep.START_COMPLETE:
                        t.success ? n.startCall.resolve() : n.startCall.reject(eg(t.reason));
                        break;
                    case ep.PULL_COMPLETE:
                        t.success ? n.pullCall.resolve() : n.pullCall.reject(eg(t.reason));
                        break;
                    case ep.PULL:
                        if (!a) {
                            r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.PULL_COMPLETE,
                                streamId: e,
                                success: !0
                            });
                            break
                        }
                        a.desiredSize <= 0 && t.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = t.desiredSize, new Promise(function (t) {
                            t(a.onPull?.())
                        }).then(function () {
                            r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.PULL_COMPLETE,
                                streamId: e,
                                success: !0
                            })
                        }, function (t) {
                            r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.PULL_COMPLETE,
                                streamId: e,
                                reason: eg(t)
                            })
                        });
                        break;
                    case ep.ENQUEUE:
                        if (k(n, "enqueue should have stream controller"), n.isClosed) break;
                        n.controller.enqueue(t.chunk);
                        break;
                    case ep.CLOSE:
                        if (k(n, "close should have stream controller"), n.isClosed) break;
                        n.isClosed = !0, n.controller.close(), this.#eU(n, e);
                        break;
                    case ep.ERROR:
                        k(n, "error should have stream controller"), n.controller.error(eg(t.reason)), this.#eU(n, e);
                        break;
                    case ep.CANCEL_COMPLETE:
                        t.success ? n.cancelCall.resolve() : n.cancelCall.reject(eg(t.reason)), this.#eU(n, e);
                        break;
                    case ep.CANCEL:
                        if (!a) break;
                        new Promise(function (e) {
                            e(a.onCancel?.(eg(t.reason)))
                        }).then(function () {
                            r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.CANCEL_COMPLETE,
                                streamId: e,
                                success: !0
                            })
                        }, function (t) {
                            r.postMessage({
                                sourceName: i,
                                targetName: s,
                                stream: ep.CANCEL_COMPLETE,
                                streamId: e,
                                reason: eg(t)
                            })
                        }), a.sinkCapability.reject(eg(t.reason)), a.isCancelled = !0, delete this.streamSinks[e];
                        break;
                    default:
                        throw Error("Unexpected stream case")
                }
            }

            async #eU(t, e) {
                await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]), delete this.streamControllers[e]
            }

            destroy() {
                this.comObj.removeEventListener("message", this._onComObjOnMessage)
            }
        }

        class em {
            #e$;
            #eG;

            constructor({parsedData: t, rawData: e}) {
                this.#e$ = t, this.#eG = e
            }

            getRaw() {
                return this.#eG
            }

            get(t) {
                return this.#e$.get(t) ?? null
            }

            getAll() {
                return $(this.#e$)
            }

            has(t) {
                return this.#e$.has(t)
            }
        }

        let ev = Symbol("INTERNAL");

        class eb {
            #eV = !1;
            #eq = !1;
            #eW = !1;
            #eK = !0;

            constructor(t, {name: e, intent: i, usage: s}) {
                this.#eV = !!(t & p.DISPLAY), this.#eq = !!(t & p.PRINT), this.name = e, this.intent = i, this.usage = s
            }

            get visible() {
                if (this.#eW) return this.#eK;
                if (!this.#eK) return !1;
                let {print: t, view: e} = this.usage;
                return this.#eV ? e?.viewState !== "OFF" : !this.#eq || t?.printState !== "OFF"
            }

            _setVisible(t, e, i = !1) {
                t !== ev && R("Internal method `_setVisible` called."), this.#eW = i, this.#eK = e
            }
        }

        class eA {
            #eX = null;
            #eY = new Map;
            #eQ = null;
            #eJ = null;

            constructor(t, e = p.DISPLAY) {
                if (this.renderingIntent = e, this.name = null, this.creator = null, null === t) return;
                for (let i of (this.name = t.name, this.creator = t.creator, this.#eJ = t.order, t.groups)) this.#eY.set(i.id, new eb(e, i));
                if ("OFF" === t.baseState) for (let t of this.#eY.values()) t._setVisible(ev, !1);
                for (let e of t.on) this.#eY.get(e)._setVisible(ev, !0);
                for (let e of t.off) this.#eY.get(e)._setVisible(ev, !1);
                this.#eQ = this.getHash()
            }

            #eZ(t) {
                let e = t.length;
                if (e < 2) return !0;
                let i = t[0];
                for (let s = 1; s < e; s++) {
                    let e;
                    let r = t[s];
                    if (Array.isArray(r)) e = this.#eZ(r); else {
                        if (!this.#eY.has(r)) return M(`Optional content group not found: ${r}`), !0;
                        e = this.#eY.get(r).visible
                    }
                    switch (i) {
                        case"And":
                            if (!e) return !1;
                            break;
                        case"Or":
                            if (e) return !0;
                            break;
                        case"Not":
                            return !e;
                        default:
                            return !0
                    }
                }
                return "And" === i
            }

            isVisible(t) {
                if (0 === this.#eY.size) return !0;
                if (!t) return T("Optional content group not defined."), !0;
                if ("OCG" === t.type) return this.#eY.has(t.id) ? this.#eY.get(t.id).visible : (M(`Optional content group not found: ${t.id}`), !0);
                if ("OCMD" === t.type) {
                    if (t.expression) return this.#eZ(t.expression);
                    if (t.policy && "AnyOn" !== t.policy) {
                        if ("AllOn" === t.policy) {
                            for (let e of t.ids) {
                                if (!this.#eY.has(e)) {
                                    M(`Optional content group not found: ${e}`);
                                    break
                                }
                                if (!this.#eY.get(e).visible) return !1
                            }
                            return !0
                        }
                        if ("AnyOff" === t.policy) {
                            for (let e of t.ids) {
                                if (!this.#eY.has(e)) return M(`Optional content group not found: ${e}`), !0;
                                if (!this.#eY.get(e).visible) return !0
                            }
                            return !1
                        }
                        if ("AllOff" === t.policy) {
                            for (let e of t.ids) {
                                if (!this.#eY.has(e)) {
                                    M(`Optional content group not found: ${e}`);
                                    break
                                }
                                if (this.#eY.get(e).visible) return !1
                            }
                            return !0
                        }
                    } else {
                        for (let e of t.ids) {
                            if (!this.#eY.has(e)) return M(`Optional content group not found: ${e}`), !0;
                            if (this.#eY.get(e).visible) return !0
                        }
                        return !1
                    }
                    return M(`Unknown optional content policy ${t.policy}.`), !0
                }
                return M(`Unknown group type ${t.type}.`), !0
            }

            setVisibility(t, e = !0) {
                let i = this.#eY.get(t);
                if (!i) {
                    M(`Optional content group not found: ${t}`);
                    return
                }
                i._setVisible(ev, !!e, !0), this.#eX = null
            }

            setOCGState({state: t, preserveRB: e}) {
                let i;
                for (let e of t) {
                    switch (e) {
                        case"ON":
                        case"OFF":
                        case"Toggle":
                            i = e;
                            continue
                    }
                    let t = this.#eY.get(e);
                    if (t) switch (i) {
                        case"ON":
                            t._setVisible(ev, !0);
                            break;
                        case"OFF":
                            t._setVisible(ev, !1);
                            break;
                        case"Toggle":
                            t._setVisible(ev, !t.visible)
                    }
                }
                this.#eX = null
            }

            get hasInitialVisibility() {
                return null === this.#eQ || this.getHash() === this.#eQ
            }

            getOrder() {
                return this.#eY.size ? this.#eJ ? this.#eJ.slice() : [...this.#eY.keys()] : null
            }

            getGroups() {
                return this.#eY.size > 0 ? $(this.#eY) : null
            }

            getGroup(t) {
                return this.#eY.get(t) || null
            }

            getHash() {
                if (null !== this.#eX) return this.#eX;
                let t = new tH;
                for (let [e, i] of this.#eY) t.update(`${e}:${i.visible}`);
                return this.#eX = t.hexdigest()
            }
        }

        class ey {
            constructor(t, {disableRange: e = !1, disableStream: i = !1}) {
                k(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
                let {length: s, initialData: r, progressiveDone: n, contentDispositionFilename: a} = t;
                if (this._queuedChunks = [], this._progressiveDone = n, this._contentDispositionFilename = a, r?.length > 0) {
                    let t = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
                    this._queuedChunks.push(t)
                }
                this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((t, e) => {
                    this._onReceiveData({begin: t, chunk: e})
                }), t.addProgressListener((t, e) => {
                    this._onProgress({loaded: t, total: e})
                }), t.addProgressiveReadListener(t => {
                    this._onReceiveData({chunk: t})
                }), t.addProgressiveDoneListener(() => {
                    this._onProgressiveDone()
                }), t.transportReady()
            }

            _onReceiveData({begin: t, chunk: e}) {
                let i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
                void 0 === t ? this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i) : k(this._rangeReaders.some(function (e) {
                    return e._begin === t && (e._enqueue(i), !0)
                }), "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")
            }

            get _progressiveDataLength() {
                return this._fullRequestReader?._loaded ?? 0
            }

            _onProgress(t) {
                void 0 === t.total ? this._rangeReaders[0]?.onProgress?.({loaded: t.loaded}) : this._fullRequestReader?.onProgress?.({
                    loaded: t.loaded,
                    total: t.total
                })
            }

            _onProgressiveDone() {
                this._fullRequestReader?.progressiveDone(), this._progressiveDone = !0
            }

            _removeRangeReader(t) {
                let e = this._rangeReaders.indexOf(t);
                e >= 0 && this._rangeReaders.splice(e, 1)
            }

            getFullReader() {
                k(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                let t = this._queuedChunks;
                return this._queuedChunks = null, new e_(this, t, this._progressiveDone, this._contentDispositionFilename)
            }

            getRangeReader(t, e) {
                if (e <= this._progressiveDataLength) return null;
                let i = new ew(this, t, e);
                return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i
            }

            cancelAllRequests(t) {
                for (let e of (this._fullRequestReader?.cancel(t), this._rangeReaders.slice(0))) e.cancel(t);
                this._pdfDataRangeTransport.abort()
            }
        }

        class e_ {
            constructor(t, e, i = !1, s = null) {
                for (let r of (this._stream = t, this._done = i || !1, this._filename = tg(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0, this._queuedChunks)) this._loaded += r.byteLength;
                this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null
            }

            _enqueue(t) {
                this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
                    value: t,
                    done: !1
                }) : this._queuedChunks.push(t), this._loaded += t.byteLength)
            }

            get headersReady() {
                return this._headersReady
            }

            get filename() {
                return this._filename
            }

            get isRangeSupported() {
                return this._stream._isRangeSupported
            }

            get isStreamingSupported() {
                return this._stream._isStreamingSupported
            }

            get contentLength() {
                return this._stream._contentLength
            }

            async read() {
                if (this._queuedChunks.length > 0) return {value: this._queuedChunks.shift(), done: !1};
                if (this._done) return {value: void 0, done: !0};
                let t = Promise.withResolvers();
                return this._requests.push(t), t.promise
            }

            cancel(t) {
                for (let t of (this._done = !0, this._requests)) t.resolve({value: void 0, done: !0});
                this._requests.length = 0
            }

            progressiveDone() {
                this._done || (this._done = !0)
            }
        }

        class ew {
            constructor(t, e, i) {
                this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null
            }

            _enqueue(t) {
                if (!this._done) {
                    if (0 === this._requests.length) this._queuedChunk = t; else {
                        for (let e of (this._requests.shift().resolve({
                            value: t,
                            done: !1
                        }), this._requests)) e.resolve({value: void 0, done: !0});
                        this._requests.length = 0
                    }
                    this._done = !0, this._stream._removeRangeReader(this)
                }
            }

            get isStreamingSupported() {
                return !1
            }

            async read() {
                if (this._queuedChunk) {
                    let t = this._queuedChunk;
                    return this._queuedChunk = null, {value: t, done: !1}
                }
                if (this._done) return {value: void 0, done: !0};
                let t = Promise.withResolvers();
                return this._requests.push(t), t.promise
            }

            cancel(t) {
                for (let t of (this._done = !0, this._requests)) t.resolve({value: void 0, done: !0});
                this._requests.length = 0, this._stream._removeRangeReader(this)
            }
        }

        function ex({getResponseHeader: t, isHttp: e, rangeChunkSize: i, disableRange: s}) {
            let r = {allowRangeRequests: !1, suggestedLength: void 0}, n = parseInt(t("Content-Length"), 10);
            return Number.isInteger(n) && (r.suggestedLength = n, n <= 2 * i || s || !e || "bytes" !== t("Accept-Ranges") || "identity" !== (t("Content-Encoding") || "identity") || (r.allowRangeRequests = !0)), r
        }

        function eE(t) {
            let e = t("Content-Disposition");
            if (e) {
                let t = function (t) {
                    let e = !0, i = s("filename\\*", "i").exec(t);
                    if (i) {
                        let t = a(i = i[1]);
                        return n(t = l(t = o(t = unescape(t))))
                    }
                    if (i = function (t) {
                        let e;
                        let i = [], r = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                        for (; null !== (e = r.exec(t));) {
                            let [, t, s, r] = e;
                            if ((t = parseInt(t, 10)) in i) {
                                if (0 === t) break;
                                continue
                            }
                            i[t] = [s, r]
                        }
                        let n = [];
                        for (let t = 0; t < i.length && (t in i); ++t) {
                            let [e, s] = i[t];
                            s = a(s), e && (s = unescape(s), 0 === t && (s = o(s))), n.push(s)
                        }
                        return n.join("")
                    }(t)) return n(l(i));
                    if (i = s("filename", "i").exec(t)) {
                        let t = a(i = i[1]);
                        return n(t = l(t))
                    }

                    function s(t, e) {
                        return RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e)
                    }

                    function r(t, i) {
                        if (t) {
                            if (!/^[\x00-\xFF]+$/.test(i)) return i;
                            try {
                                let s = new TextDecoder(t, {fatal: !0}), r = U(i);
                                i = s.decode(r), e = !1
                            } catch {
                            }
                        }
                        return i
                    }

                    function n(t) {
                        return e && /[\x80-\xff]/.test(t) && (t = r("utf-8", t), e && (t = r("iso-8859-1", t))), t
                    }

                    function a(t) {
                        if (t.startsWith('"')) {
                            let e = t.slice(1).split('\\"');
                            for (let t = 0; t < e.length; ++t) {
                                let i = e[t].indexOf('"');
                                -1 !== i && (e[t] = e[t].slice(0, i), e.length = t + 1), e[t] = e[t].replaceAll(/\\(.)/g, "$1")
                            }
                            t = e.join('"')
                        }
                        return t
                    }

                    function o(t) {
                        let e = t.indexOf("'");
                        return -1 === e ? t : r(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""))
                    }

                    function l(t) {
                        return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t) ? t : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, e, i, s) {
                            if ("q" === i || "Q" === i) return r(e, s = (s = s.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function (t, e) {
                                return String.fromCharCode(parseInt(e, 16))
                            }));
                            try {
                                s = atob(s)
                            } catch {
                            }
                            return r(e, s)
                        })
                    }

                    return ""
                }(e);
                if (t.includes("%")) try {
                    t = decodeURIComponent(t)
                } catch {
                }
                if (tg(t)) return t
            }
            return null
        }

        function eS(t, e) {
            return 404 === t || 0 === t && e.startsWith("file:") ? new N('Missing PDF "' + e + '".') : new B(`Unexpected server response (${t}) while retrieving PDF "${e}".`, t)
        }

        function eC(t) {
            return 200 === t || 206 === t
        }

        function eT(t, e, i) {
            return {
                method: "GET",
                headers: t,
                signal: i.signal,
                mode: "cors",
                credentials: e ? "include" : "same-origin",
                redirect: "follow"
            }
        }

        function eM(t) {
            let e = new Headers;
            for (let i in t) {
                let s = t[i];
                void 0 !== s && e.append(i, s)
            }
            return e
        }

        function eR(t) {
            return t instanceof Uint8Array ? t.buffer : t instanceof ArrayBuffer ? t : (M(`getArrayBuffer - unexpected data format: ${t}`), new Uint8Array(t).buffer)
        }

        class ek {
            constructor(t) {
                this.source = t, this.isHttp = /^https?:/i.test(t.url), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = []
            }

            get _progressiveDataLength() {
                return this._fullRequestReader?._loaded ?? 0
            }

            getFullReader() {
                return k(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new eL(this), this._fullRequestReader
            }

            getRangeReader(t, e) {
                if (e <= this._progressiveDataLength) return null;
                let i = new eI(this, t, e);
                return this._rangeRequestReaders.push(i), i
            }

            cancelAllRequests(t) {
                for (let e of (this._fullRequestReader?.cancel(t), this._rangeRequestReaders.slice(0))) e.cancel(t)
            }
        }

        class eL {
            constructor(t) {
                this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
                let e = t.source;
                this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController, this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = eM(this._stream.httpHeaders);
                let i = e.url;
                fetch(i, eT(this._headers, this._withCredentials, this._abortController)).then(t => {
                    if (!eC(t.status)) throw eS(t.status, i);
                    this._reader = t.body.getReader(), this._headersCapability.resolve();
                    let e = e => t.headers.get(e), {
                        allowRangeRequests: s,
                        suggestedLength: r
                    } = ex({
                        getResponseHeader: e,
                        isHttp: this._stream.isHttp,
                        rangeChunkSize: this._rangeChunkSize,
                        disableRange: this._disableRange
                    });
                    this._isRangeSupported = s, this._contentLength = r || this._contentLength, this._filename = eE(e), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new z("Streaming is disabled."))
                }).catch(this._headersCapability.reject), this.onProgress = null
            }

            get headersReady() {
                return this._headersCapability.promise
            }

            get filename() {
                return this._filename
            }

            get contentLength() {
                return this._contentLength
            }

            get isRangeSupported() {
                return this._isRangeSupported
            }

            get isStreamingSupported() {
                return this._isStreamingSupported
            }

            async read() {
                await this._headersCapability.promise;
                let {value: t, done: e} = await this._reader.read();
                return e ? {value: t, done: e} : (this._loaded += t.byteLength, this.onProgress?.({
                    loaded: this._loaded,
                    total: this._contentLength
                }), {value: eR(t), done: !1})
            }

            cancel(t) {
                this._reader?.cancel(t), this._abortController.abort()
            }
        }

        class eI {
            constructor(t, e, i) {
                this._stream = t, this._reader = null, this._loaded = 0;
                let s = t.source;
                this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController, this._headers = eM(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${i - 1}`);
                let r = s.url;
                fetch(r, eT(this._headers, this._withCredentials, this._abortController)).then(t => {
                    if (!eC(t.status)) throw eS(t.status, r);
                    this._readCapability.resolve(), this._reader = t.body.getReader()
                }).catch(this._readCapability.reject), this.onProgress = null
            }

            get isStreamingSupported() {
                return this._isStreamingSupported
            }

            async read() {
                await this._readCapability.promise;
                let {value: t, done: e} = await this._reader.read();
                return e ? {
                    value: t,
                    done: e
                } : (this._loaded += t.byteLength, this.onProgress?.({loaded: this._loaded}), {value: eR(t), done: !1})
            }

            cancel(t) {
                this._reader?.cancel(t), this._abortController.abort()
            }
        }

        class eP {
            constructor(t, e = {}) {
                this.url = t, this.isHttp = /^https?:/i.test(t), this.httpHeaders = this.isHttp && e.httpHeaders || Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = Object.create(null)
            }

            requestRange(t, e, i) {
                let s = {begin: t, end: e};
                for (let t in i) s[t] = i[t];
                return this.request(s)
            }

            requestFull(t) {
                return this.request(t)
            }

            request(t) {
                let e = new XMLHttpRequest, i = this.currXhrId++, s = this.pendingRequests[i] = {xhr: e};
                for (let t in e.open("GET", this.url), e.withCredentials = this.withCredentials, this.httpHeaders) {
                    let i = this.httpHeaders[t];
                    void 0 !== i && e.setRequestHeader(t, i)
                }
                return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), s.expectedStatus = 206) : s.expectedStatus = 200, e.responseType = "arraybuffer", t.onError && (e.onerror = function (i) {
                    t.onError(e.status)
                }), e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t.onHeadersReceived, s.onDone = t.onDone, s.onError = t.onError, s.onProgress = t.onProgress, e.send(null), i
            }

            onProgress(t, e) {
                let i = this.pendingRequests[t];
                i && i.onProgress?.(e)
            }

            onStateChange(t, e) {
                let i = this.pendingRequests[t];
                if (!i) return;
                let s = i.xhr;
                if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), 4 !== s.readyState || !(t in this.pendingRequests)) return;
                if (delete this.pendingRequests[t], 0 === s.status && this.isHttp) {
                    i.onError?.(s.status);
                    return
                }
                let r = s.status || 200;
                if (!(200 === r && 206 === i.expectedStatus) && r !== i.expectedStatus) {
                    i.onError?.(s.status);
                    return
                }
                let n = function (t) {
                    let e = t.response;
                    return "string" != typeof e ? e : U(e).buffer
                }(s);
                if (206 === r) {
                    let t = s.getResponseHeader("Content-Range"), e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
                    i.onDone({begin: parseInt(e[1], 10), chunk: n})
                } else n ? i.onDone({begin: 0, chunk: n}) : i.onError?.(s.status)
            }

            getRequestXhr(t) {
                return this.pendingRequests[t].xhr
            }

            isPendingRequest(t) {
                return t in this.pendingRequests
            }

            abortRequest(t) {
                let e = this.pendingRequests[t].xhr;
                delete this.pendingRequests[t], e.abort()
            }
        }

        class eD {
            constructor(t) {
                this._source = t, this._manager = new eP(t.url, {
                    httpHeaders: t.httpHeaders,
                    withCredentials: t.withCredentials
                }), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = []
            }

            _onRangeRequestReaderClosed(t) {
                let e = this._rangeRequestReaders.indexOf(t);
                e >= 0 && this._rangeRequestReaders.splice(e, 1)
            }

            getFullReader() {
                return k(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new eF(this._manager, this._source), this._fullRequestReader
            }

            getRangeReader(t, e) {
                let i = new eO(this._manager, t, e);
                return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i
            }

            cancelAllRequests(t) {
                for (let e of (this._fullRequestReader?.cancel(t), this._rangeRequestReaders.slice(0))) e.cancel(t)
            }
        }

        class eF {
            constructor(t, e) {
                this._manager = t;
                let i = {
                    onHeadersReceived: this._onHeadersReceived.bind(this),
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                };
                this._url = e.url, this._fullRequestId = t.requestFull(i), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null
            }

            _onHeadersReceived() {
                let t = this._fullRequestId, e = this._manager.getRequestXhr(t), i = t => e.getResponseHeader(t), {
                    allowRangeRequests: s,
                    suggestedLength: r
                } = ex({
                    getResponseHeader: i,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                });
                s && (this._isRangeSupported = !0), this._contentLength = r || this._contentLength, this._filename = eE(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersReceivedCapability.resolve()
            }

            _onDone(t) {
                if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
                    value: t.chunk,
                    done: !1
                }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
                    for (let t of this._requests) t.resolve({value: void 0, done: !0});
                    this._requests.length = 0
                }
            }

            _onError(t) {
                for (let e of (this._storedError = eS(t, this._url), this._headersReceivedCapability.reject(this._storedError), this._requests)) e.reject(this._storedError);
                this._requests.length = 0, this._cachedChunks.length = 0
            }

            _onProgress(t) {
                this.onProgress?.({loaded: t.loaded, total: t.lengthComputable ? t.total : this._contentLength})
            }

            get filename() {
                return this._filename
            }

            get isRangeSupported() {
                return this._isRangeSupported
            }

            get isStreamingSupported() {
                return this._isStreamingSupported
            }

            get contentLength() {
                return this._contentLength
            }

            get headersReady() {
                return this._headersReceivedCapability.promise
            }

            async read() {
                if (this._storedError) throw this._storedError;
                if (this._cachedChunks.length > 0) return {value: this._cachedChunks.shift(), done: !1};
                if (this._done) return {value: void 0, done: !0};
                let t = Promise.withResolvers();
                return this._requests.push(t), t.promise
            }

            cancel(t) {
                for (let e of (this._done = !0, this._headersReceivedCapability.reject(t), this._requests)) e.resolve({
                    value: void 0,
                    done: !0
                });
                this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null
            }
        }

        class eO {
            constructor(t, e, i) {
                this._manager = t;
                let s = {
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                };
                this._url = t.url, this._requestId = t.requestRange(e, i, s), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null
            }

            _close() {
                this.onClosed?.(this)
            }

            _onDone(t) {
                let e = t.chunk;
                for (let t of (this._requests.length > 0 ? this._requests.shift().resolve({
                    value: e,
                    done: !1
                }) : this._queuedChunk = e, this._done = !0, this._requests)) t.resolve({value: void 0, done: !0});
                this._requests.length = 0, this._close()
            }

            _onError(t) {
                for (let e of (this._storedError = eS(t, this._url), this._requests)) e.reject(this._storedError);
                this._requests.length = 0, this._queuedChunk = null
            }

            _onProgress(t) {
                this.isStreamingSupported || this.onProgress?.({loaded: t.loaded})
            }

            get isStreamingSupported() {
                return !1
            }

            async read() {
                if (this._storedError) throw this._storedError;
                if (null !== this._queuedChunk) {
                    let t = this._queuedChunk;
                    return this._queuedChunk = null, {value: t, done: !1}
                }
                if (this._done) return {value: void 0, done: !0};
                let t = Promise.withResolvers();
                return this._requests.push(t), t.promise
            }

            cancel(t) {
                for (let t of (this._done = !0, this._requests)) t.resolve({value: void 0, done: !0});
                this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close()
            }
        }

        let eN = /^file:\/\/\/[a-zA-Z]:\//;

        class eB {
            constructor(t) {
                this.source = t, this.url = function (t) {
                    let e = tW.get("url"), i = e.parse(t);
                    return "file:" === i.protocol || i.host ? i : /^[a-z]:[/\\]/i.test(t) ? e.parse(`file:///${t}`) : (i.host || (i.protocol = "file:"), i)
                }(t.url), this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol, this.isFsUrl = "file:" === this.url.protocol, this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = []
            }

            get _progressiveDataLength() {
                return this._fullRequestReader?._loaded ?? 0
            }

            getFullReader() {
                return k(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new eG(this) : new eU(this), this._fullRequestReader
            }

            getRangeReader(t, e) {
                if (e <= this._progressiveDataLength) return null;
                let i = this.isFsUrl ? new eV(this, t, e) : new e$(this, t, e);
                return this._rangeRequestReaders.push(i), i
            }

            cancelAllRequests(t) {
                for (let e of (this._fullRequestReader?.cancel(t), this._rangeRequestReaders.slice(0))) e.cancel(t)
            }
        }

        class eH {
            constructor(t) {
                this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
                let e = t.source;
                this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers()
            }

            get headersReady() {
                return this._headersCapability.promise
            }

            get filename() {
                return this._filename
            }

            get contentLength() {
                return this._contentLength
            }

            get isRangeSupported() {
                return this._isRangeSupported
            }

            get isStreamingSupported() {
                return this._isStreamingSupported
            }

            async read() {
                if (await this._readCapability.promise, this._done) return {value: void 0, done: !0};
                if (this._storedError) throw this._storedError;
                let t = this._readableStream.read();
                return null === t ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, this.onProgress?.({
                    loaded: this._loaded,
                    total: this._contentLength
                }), {value: new Uint8Array(t).buffer, done: !1})
            }

            cancel(t) {
                if (!this._readableStream) {
                    this._error(t);
                    return
                }
                this._readableStream.destroy(t)
            }

            _error(t) {
                this._storedError = t, this._readCapability.resolve()
            }

            _setReadableStream(t) {
                this._readableStream = t, t.on("readable", () => {
                    this._readCapability.resolve()
                }), t.on("end", () => {
                    t.destroy(), this._done = !0, this._readCapability.resolve()
                }), t.on("error", t => {
                    this._error(t)
                }), !this._isStreamingSupported && this._isRangeSupported && this._error(new z("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError)
            }
        }

        class ez {
            constructor(t) {
                this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
                let e = t.source;
                this._isStreamingSupported = !e.disableStream
            }

            get isStreamingSupported() {
                return this._isStreamingSupported
            }

            async read() {
                if (await this._readCapability.promise, this._done) return {value: void 0, done: !0};
                if (this._storedError) throw this._storedError;
                let t = this._readableStream.read();
                return null === t ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, this.onProgress?.({loaded: this._loaded}), {
                    value: new Uint8Array(t).buffer,
                    done: !1
                })
            }

            cancel(t) {
                if (!this._readableStream) {
                    this._error(t);
                    return
                }
                this._readableStream.destroy(t)
            }

            _error(t) {
                this._storedError = t, this._readCapability.resolve()
            }

            _setReadableStream(t) {
                this._readableStream = t, t.on("readable", () => {
                    this._readCapability.resolve()
                }), t.on("end", () => {
                    t.destroy(), this._done = !0, this._readCapability.resolve()
                }), t.on("error", t => {
                    this._error(t)
                }), this._storedError && this._readableStream.destroy(this._storedError)
            }
        }

        function ej(t, e) {
            return {
                protocol: t.protocol,
                auth: t.auth,
                host: t.hostname,
                port: t.port,
                path: t.path,
                method: "GET",
                headers: e
            }
        }

        class eU extends eH {
            constructor(t) {
                super(t);
                let e = e => {
                    if (404 === e.statusCode) {
                        let t = new N(`Missing PDF "${this._url}".`);
                        this._storedError = t, this._headersCapability.reject(t);
                        return
                    }
                    this._headersCapability.resolve(), this._setReadableStream(e);
                    let i = t => this._readableStream.headers[t.toLowerCase()], {
                        allowRangeRequests: s,
                        suggestedLength: r
                    } = ex({
                        getResponseHeader: i,
                        isHttp: t.isHttp,
                        rangeChunkSize: this._rangeChunkSize,
                        disableRange: this._disableRange
                    });
                    this._isRangeSupported = s, this._contentLength = r || this._contentLength, this._filename = eE(i)
                };
                if (this._request = null, "http:" === this._url.protocol) {
                    let i = tW.get("http");
                    this._request = i.request(ej(this._url, t.httpHeaders), e)
                } else {
                    let i = tW.get("https");
                    this._request = i.request(ej(this._url, t.httpHeaders), e)
                }
                this._request.on("error", t => {
                    this._storedError = t, this._headersCapability.reject(t)
                }), this._request.end()
            }
        }

        class e$ extends ez {
            constructor(t, e, i) {
                for (let e in super(t), this._httpHeaders = {}, t.httpHeaders) {
                    let i = t.httpHeaders[e];
                    void 0 !== i && (this._httpHeaders[e] = i)
                }
                this._httpHeaders.Range = `bytes=${e}-${i - 1}`;
                let s = t => {
                    if (404 === t.statusCode) {
                        let t = new N(`Missing PDF "${this._url}".`);
                        this._storedError = t;
                        return
                    }
                    this._setReadableStream(t)
                };
                if (this._request = null, "http:" === this._url.protocol) {
                    let t = tW.get("http");
                    this._request = t.request(ej(this._url, this._httpHeaders), s)
                } else {
                    let t = tW.get("https");
                    this._request = t.request(ej(this._url, this._httpHeaders), s)
                }
                this._request.on("error", t => {
                    this._storedError = t
                }), this._request.end()
            }
        }

        class eG extends eH {
            constructor(t) {
                super(t);
                let e = decodeURIComponent(this._url.path);
                eN.test(this._url.href) && (e = e.replace(/^\//, ""));
                let i = tW.get("fs");
                i.promises.lstat(e).then(t => {
                    this._contentLength = t.size, this._setReadableStream(i.createReadStream(e)), this._headersCapability.resolve()
                }, t => {
                    "ENOENT" === t.code && (t = new N(`Missing PDF "${e}".`)), this._storedError = t, this._headersCapability.reject(t)
                })
            }
        }

        class eV extends ez {
            constructor(t, e, i) {
                super(t);
                let s = decodeURIComponent(this._url.path);
                eN.test(this._url.href) && (s = s.replace(/^\//, ""));
                let r = tW.get("fs");
                this._setReadableStream(r.createReadStream(s, {start: e, end: i - 1}))
            }
        }

        class eq {
            #e0 = Promise.withResolvers();
            #tL = null;
            #e1 = !1;
            #e2 = !!globalThis.FontInspector?.enabled;
            #e5 = null;
            #e4 = null;
            #e3 = 0;
            #e6 = 0;
            #e9 = null;
            #e7 = null;
            #e8 = 0;
            #it = 0;
            #ie = Object.create(null);
            #ii = [];
            #is = null;
            #ir = [];
            #ia = new WeakMap;
            #io = null;
            static #il = new Map;
            static #ih = new Map;
            static #id = null;
            static #ic = new Set;

            constructor({textContentSource: t, container: e, viewport: i}) {
                if (t instanceof ReadableStream) this.#is = t; else if ("object" == typeof t) this.#is = new ReadableStream({
                    start(e) {
                        e.enqueue(t), e.close()
                    }
                }); else throw Error('No "textContentSource" parameter specified.');
                this.#tL = this.#e7 = e, this.#it = i.scale * (globalThis.devicePixelRatio || 1), this.#e8 = i.rotation, this.#e4 = {
                    prevFontSize: null,
                    prevFontFamily: null,
                    div: null,
                    properties: null,
                    ctx: null
                };
                let {pageWidth: s, pageHeight: r, pageX: n, pageY: a} = i.rawDims;
                this.#io = [1, 0, 0, -1, -n, a + r], this.#e6 = s, this.#e3 = r, eq.#iu(), tC(e, i), this.#e0.promise.catch(() => {
                }).then(() => {
                    eq.#ic.delete(this), this.#e4 = null, this.#ie = null
                })
            }

            render() {
                let t = () => {
                    this.#e9.read().then(({value: e, done: i}) => {
                        if (i) {
                            this.#e0.resolve();
                            return
                        }
                        this.#e5 ??= e.lang, Object.assign(this.#ie, e.styles), this.#ip(e.items), t()
                    }, this.#e0.reject)
                };
                return this.#e9 = this.#is.getReader(), eq.#ic.add(this), t(), this.#e0.promise
            }

            update({viewport: t, onBefore: e = null}) {
                let i = t.scale * (globalThis.devicePixelRatio || 1), s = t.rotation;
                if (s !== this.#e8 && (e?.(), this.#e8 = s, tC(this.#e7, {rotation: s})), i !== this.#it) {
                    e?.(), this.#it = i;
                    let t = {
                        prevFontSize: null,
                        prevFontFamily: null,
                        div: null,
                        properties: null,
                        ctx: eq.#ig(this.#e5)
                    };
                    for (let e of this.#ir) t.properties = this.#ia.get(e), t.div = e, this.#im(t)
                }
            }

            cancel() {
                let t = new z("TextLayer task cancelled.");
                this.#e9?.cancel(t).catch(() => {
                }), this.#e9 = null, this.#e0.reject(t)
            }

            get textDivs() {
                return this.#ir
            }

            get textContentItemsStr() {
                return this.#ii
            }

            #ip(t) {
                if (this.#e1) return;
                this.#e4.ctx ??= eq.#ig(this.#e5);
                let e = this.#ir, i = this.#ii;
                for (let s of t) {
                    if (e.length > 1e5) {
                        M("Ignoring additional textDivs for performance reasons."), this.#e1 = !0;
                        return
                    }
                    if (void 0 === s.str) {
                        if ("beginMarkedContentProps" === s.type || "beginMarkedContent" === s.type) {
                            let t = this.#tL;
                            this.#tL = document.createElement("span"), this.#tL.classList.add("markedContent"), null !== s.id && this.#tL.setAttribute("id", `${s.id}`), t.append(this.#tL)
                        } else "endMarkedContent" === s.type && (this.#tL = this.#tL.parentNode);
                        continue
                    }
                    i.push(s.str), this.#iv(s)
                }
            }

            #iv(t) {
                let e, i;
                let s = document.createElement("span"),
                    r = {angle: 0, canvasWidth: 0, hasText: "" !== t.str, hasEOL: t.hasEOL, fontSize: 0};
                this.#ir.push(s);
                let n = q.transform(this.#io, t.transform), a = Math.atan2(n[1], n[0]), o = this.#ie[t.fontName];
                o.vertical && (a += Math.PI / 2);
                let l = this.#e2 && o.fontSubstitution || o.fontFamily, h = Math.hypot(n[2], n[3]),
                    d = h * eq.#ib(l, this.#e5);
                0 === a ? (e = n[4], i = n[5] - d) : (e = n[4] + d * Math.sin(a), i = n[5] - d * Math.cos(a));
                let c = "calc(var(--scale-factor)*", u = s.style;
                this.#tL === this.#e7 ? (u.left = `${(100 * e / this.#e6).toFixed(2)}%`, u.top = `${(100 * i / this.#e3).toFixed(2)}%`) : (u.left = `${c}${e.toFixed(2)}px)`, u.top = `${c}${i.toFixed(2)}px)`), u.fontSize = `${c}${(eq.#id * h).toFixed(2)}px)`, u.fontFamily = l, r.fontSize = h, s.setAttribute("role", "presentation"), s.textContent = t.str, s.dir = t.dir, this.#e2 && (s.dataset.fontName = o.fontSubstitutionLoadedName || t.fontName), 0 !== a && (r.angle = 180 / Math.PI * a);
                let p = !1;
                if (t.str.length > 1) p = !0; else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
                    let e = Math.abs(t.transform[0]), i = Math.abs(t.transform[3]);
                    e !== i && Math.max(e, i) / Math.min(e, i) > 1.5 && (p = !0)
                }
                if (p && (r.canvasWidth = o.vertical ? t.height : t.width), this.#ia.set(s, r), this.#e4.div = s, this.#e4.properties = r, this.#im(this.#e4), r.hasText && this.#tL.append(s), r.hasEOL) {
                    let t = document.createElement("br");
                    t.setAttribute("role", "presentation"), this.#tL.append(t)
                }
            }

            #im(t) {
                let {div: e, properties: i, ctx: s, prevFontSize: r, prevFontFamily: n} = t, {style: a} = e, o = "";
                if (eq.#id > 1 && (o = `scale(${1 / eq.#id})`), 0 !== i.canvasWidth && i.hasText) {
                    let {fontFamily: l} = a, {canvasWidth: h, fontSize: d} = i;
                    (r !== d || n !== l) && (s.font = `${d * this.#it}px ${l}`, t.prevFontSize = d, t.prevFontFamily = l);
                    let {width: c} = s.measureText(e.textContent);
                    c > 0 && (o = `scaleX(${h * this.#it / c}) ${o}`)
                }
                0 !== i.angle && (o = `rotate(${i.angle}deg) ${o}`), o.length > 0 && (a.transform = o)
            }

            static cleanup() {
                if (!(this.#ic.size > 0)) {
                    for (let {canvas: t} of (this.#il.clear(), this.#ih.values())) t.remove();
                    this.#ih.clear()
                }
            }

            static #ig(t = null) {
                let e = this.#ih.get(t ||= "");
                if (!e) {
                    let i = document.createElement("canvas");
                    i.className = "hiddenCanvasElement", i.lang = t, document.body.append(i), e = i.getContext("2d", {
                        alpha: !1,
                        willReadFrequently: !0
                    }), this.#ih.set(t, e)
                }
                return e
            }

            static #iu() {
                if (null !== this.#id) return;
                let t = document.createElement("div");
                t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.textContent = "X", document.body.append(t), this.#id = t.getBoundingClientRect().height, t.remove()
            }

            static #ib(t, e) {
                let i = this.#il.get(t);
                if (i) return i;
                let s = this.#ig(e), r = s.font;
                s.canvas.width = s.canvas.height = 30, s.font = `30px ${t}`;
                let n = s.measureText(""), a = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
                if (a) {
                    let e = a / (a + o);
                    return this.#il.set(t, e), s.canvas.width = s.canvas.height = 0, s.font = r, e
                }
                s.strokeStyle = "red", s.clearRect(0, 0, 30, 30), s.strokeText("g", 0, 0);
                let l = s.getImageData(0, 0, 30, 30).data;
                o = 0;
                for (let t = l.length - 1 - 3; t >= 0; t -= 4) if (l[t] > 0) {
                    o = Math.ceil(t / 4 / 30);
                    break
                }
                s.clearRect(0, 0, 30, 30), s.strokeText("A", 0, 30), l = s.getImageData(0, 0, 30, 30).data, a = 0;
                for (let t = 0, e = l.length; t < e; t += 4) if (l[t] > 0) {
                    a = 30 - Math.floor(t / 4 / 30);
                    break
                }
                s.canvas.width = s.canvas.height = 0, s.font = r;
                let h = a ? a / (a + o) : .8;
                return this.#il.set(t, h), h
            }
        }

        function eW() {
            ty("`renderTextLayer`, please use `TextLayer` instead.");
            let {textContentSource: t, container: e, viewport: i, ...s} = arguments[0], r = Object.keys(s);
            r.length > 0 && M("Ignoring `renderTextLayer` parameters: " + r.join(", "));
            let n = new eq({textContentSource: t, container: e, viewport: i}), {
                textDivs: a,
                textContentItemsStr: o
            } = n;
            return {promise: n.render(), textDivs: a, textContentItemsStr: o}
        }

        function eK() {
            ty("`updateTextLayer`, please use `TextLayer` instead.")
        }

        class eX {
            static textContent(t) {
                let e = [], i = {items: e, styles: Object.create(null)};
                return !function t(i) {
                    if (!i) return;
                    let s = null, r = i.name;
                    if ("#text" === r) s = i.value; else {
                        if (!eX.shouldBuildText(r)) return;
                        i?.attributes?.textContent ? s = i.attributes.textContent : i.value && (s = i.value)
                    }
                    if (null !== s && e.push({str: s}), i.children) for (let e of i.children) t(e)
                }(t), i
            }

            static shouldBuildText(t) {
                return !("textarea" === t || "input" === t || "option" === t || "select" === t)
            }
        }

        let eY = d ? tY : ta, eQ = d ? tQ : tl, eJ = d ? tX : tn, eZ = d ? tJ : th;

        function e0(t = {}) {
            "string" == typeof t || t instanceof URL ? t = {url: t} : (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (t = {data: t});
            let e = new e2, {docId: i} = e, s = t.url ? function (t) {
                    if (t instanceof URL) return t.href;
                    try {
                        return new URL(t, window.location).href
                    } catch {
                        if (d && "string" == typeof t) return t
                    }
                    throw Error("Invalid PDF url data: either string or URL-object is expected in the url property.")
                }(t.url) : null, r = t.data ? function (t) {
                    if (d && void 0 !== n && t instanceof n) throw Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
                    if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) return t;
                    if ("string" == typeof t) return U(t);
                    if (t instanceof ArrayBuffer || ArrayBuffer.isView(t) || "object" == typeof t && !isNaN(t?.length)) return new Uint8Array(t);
                    throw Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.")
                }(t.data) : null, a = t.httpHeaders || null, o = !0 === t.withCredentials, l = t.password ?? null,
                h = t.range instanceof e5 ? t.range : null,
                c = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : 65536,
                u = t.worker instanceof e7 ? t.worker : null, p = t.verbosity,
                g = "string" != typeof t.docBaseUrl || tp(t.docBaseUrl) ? null : t.docBaseUrl,
                f = "string" == typeof t.cMapUrl ? t.cMapUrl : null, m = !1 !== t.cMapPacked,
                v = t.CMapReaderFactory || eQ,
                b = "string" == typeof t.standardFontDataUrl ? t.standardFontDataUrl : null,
                A = t.StandardFontDataFactory || eZ, y = !0 !== t.stopAtErrors,
                _ = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1,
                w = !1 !== t.isEvalSupported,
                x = "boolean" == typeof t.isOffscreenCanvasSupported ? t.isOffscreenCanvasSupported : !d,
                E = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1,
                S = "boolean" == typeof t.disableFontFace ? t.disableFontFace : d, T = !0 === t.fontExtraProperties,
                M = !0 === t.enableXfa, R = t.ownerDocument || globalThis.document, k = !0 === t.disableRange,
                L = !0 === t.disableStream, I = !0 === t.disableAutoFetch, P = !0 === t.pdfBug, D = !0 === t.enableHWA,
                F = h ? h.length : t.length ?? NaN,
                O = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !d && !S,
                N = "boolean" == typeof t.useWorkerFetch ? t.useWorkerFetch : v === tl && A === th && f && b && tb(f, document.baseURI) && tb(b, document.baseURI),
                B = t.canvasFactory || new eY({ownerDocument: R, enableHWA: D}),
                H = t.filterFactory || new eJ({docId: i, ownerDocument: R});
            Number.isInteger(p) && (C = p);
            let z = {canvasFactory: B, filterFactory: H};
            if (N || (z.cMapReaderFactory = new v({
                baseUrl: f,
                isCompressed: m
            }), z.standardFontDataFactory = new A({baseUrl: b})), !u) {
                let t = {verbosity: p, port: ec.workerPort};
                u = t.port ? e7.fromPort(t) : new e7(t), e._worker = u
            }
            let j = {
                docId: i,
                apiVersion: "4.4.168",
                data: r,
                password: l,
                disableAutoFetch: I,
                rangeChunkSize: c,
                length: F,
                docBaseUrl: g,
                enableXfa: M,
                evaluatorOptions: {
                    maxImageSize: _,
                    disableFontFace: S,
                    ignoreErrors: y,
                    isEvalSupported: w,
                    isOffscreenCanvasSupported: x,
                    canvasMaxAreaInBytes: E,
                    fontExtraProperties: T,
                    useSystemFonts: O,
                    cMapUrl: N ? f : null,
                    standardFontDataUrl: N ? b : null
                }
            }, $ = {
                disableFontFace: S,
                fontExtraProperties: T,
                ownerDocument: R,
                pdfBug: P,
                styleElement: null,
                loadingParams: {disableAutoFetch: I, enableXfa: M}
            };
            return u.promise.then(function () {
                let t;
                if (e.destroyed) throw Error("Loading aborted");
                if (u.destroyed) throw Error("Worker was destroyed");
                let n = u.messageHandler.sendWithPromise("GetDocRequest", j, r ? [r.buffer] : null);
                if (h) t = new ey(h, {disableRange: k, disableStream: L}); else if (!r) {
                    var l;
                    if (!s) throw Error("getDocument - no `url` parameter provided.");
                    l = {
                        url: s,
                        length: F,
                        httpHeaders: a,
                        withCredentials: o,
                        rangeChunkSize: c,
                        disableRange: k,
                        disableStream: L
                    }, t = d ? "undefined" != typeof fetch && "undefined" != typeof Response && "body" in Response.prototype && tb(l.url) ? new ek(l) : new eB(l) : tb(l.url) ? new ek(l) : new eD(l)
                }
                return n.then(s => {
                    if (e.destroyed) throw Error("Loading aborted");
                    if (u.destroyed) throw Error("Worker was destroyed");
                    let r = new ef(i, s, u.port), n = new e8(r, e, t, $, z);
                    e._transport = n, r.send("Ready", null)
                })
            }).catch(e._capability.reject), e
        }

        function e1(t) {
            return "object" == typeof t && Number.isInteger(t?.num) && t.num >= 0 && Number.isInteger(t?.gen) && t.gen >= 0
        }

        class e2 {
            static #n = 0;

            constructor() {
                this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${e2.#n++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null
            }

            get promise() {
                return this._capability.promise
            }

            async destroy() {
                this.destroyed = !0;
                try {
                    this._worker?.port && (this._worker._pendingDestroy = !0), await this._transport?.destroy()
                } catch (t) {
                    throw this._worker?.port && delete this._worker._pendingDestroy, t
                }
                this._transport = null, this._worker && (this._worker.destroy(), this._worker = null)
            }
        }

        class e5 {
            constructor(t, e, i = !1, s = null) {
                this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers()
            }

            addRangeListener(t) {
                this._rangeListeners.push(t)
            }

            addProgressListener(t) {
                this._progressListeners.push(t)
            }

            addProgressiveReadListener(t) {
                this._progressiveReadListeners.push(t)
            }

            addProgressiveDoneListener(t) {
                this._progressiveDoneListeners.push(t)
            }

            onDataRange(t, e) {
                for (let i of this._rangeListeners) i(t, e)
            }

            onDataProgress(t, e) {
                this._readyCapability.promise.then(() => {
                    for (let i of this._progressListeners) i(t, e)
                })
            }

            onDataProgressiveRead(t) {
                this._readyCapability.promise.then(() => {
                    for (let e of this._progressiveReadListeners) e(t)
                })
            }

            onDataProgressiveDone() {
                this._readyCapability.promise.then(() => {
                    for (let t of this._progressiveDoneListeners) t()
                })
            }

            transportReady() {
                this._readyCapability.resolve()
            }

            requestDataRange(t, e) {
                R("Abstract method PDFDataRangeTransport.requestDataRange")
            }

            abort() {
            }
        }

        class e4 {
            constructor(t, e) {
                this._pdfInfo = t, this._transport = e
            }

            get annotationStorage() {
                return this._transport.annotationStorage
            }

            get filterFactory() {
                return this._transport.filterFactory
            }

            get numPages() {
                return this._pdfInfo.numPages
            }

            get fingerprints() {
                return this._pdfInfo.fingerprints
            }

            get isPureXfa() {
                return I(this, "isPureXfa", !!this._transport._htmlForXfa)
            }

            get allXfaHtml() {
                return this._transport._htmlForXfa
            }

            getPage(t) {
                return this._transport.getPage(t)
            }

            getPageIndex(t) {
                return this._transport.getPageIndex(t)
            }

            getDestinations() {
                return this._transport.getDestinations()
            }

            getDestination(t) {
                return this._transport.getDestination(t)
            }

            getPageLabels() {
                return this._transport.getPageLabels()
            }

            getPageLayout() {
                return this._transport.getPageLayout()
            }

            getPageMode() {
                return this._transport.getPageMode()
            }

            getViewerPreferences() {
                return this._transport.getViewerPreferences()
            }

            getOpenAction() {
                return this._transport.getOpenAction()
            }

            getAttachments() {
                return this._transport.getAttachments()
            }

            getJSActions() {
                return this._transport.getDocJSActions()
            }

            getOutline() {
                return this._transport.getOutline()
            }

            getOptionalContentConfig({intent: t = "display"} = {}) {
                let {renderingIntent: e} = this._transport.getRenderingIntent(t);
                return this._transport.getOptionalContentConfig(e)
            }

            getPermissions() {
                return this._transport.getPermissions()
            }

            getMetadata() {
                return this._transport.getMetadata()
            }

            getMarkInfo() {
                return this._transport.getMarkInfo()
            }

            getData() {
                return this._transport.getData()
            }

            saveDocument() {
                return this._transport.saveDocument()
            }

            getDownloadInfo() {
                return this._transport.downloadInfoCapability.promise
            }

            cleanup(t = !1) {
                return this._transport.startCleanup(t || this.isPureXfa)
            }

            destroy() {
                return this.loadingTask.destroy()
            }

            cachedPageNumber(t) {
                return this._transport.cachedPageNumber(t)
            }

            get loadingParams() {
                return this._transport.loadingParams
            }

            get loadingTask() {
                return this._transport.loadingTask
            }

            getFieldObjects() {
                return this._transport.getFieldObjects()
            }

            hasJSActions() {
                return this._transport.hasJSActions()
            }

            getCalculationOrderIds() {
                return this._transport.getCalculationOrderIds()
            }
        }

        class e3 {
            #iA = null;
            #iy = !1;

            constructor(t, e, i, s = !1) {
                this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new tv : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new ie, this._maybeCleanupAfterRender = !1, this._intentStates = new Map, this.destroyed = !1
            }

            get pageNumber() {
                return this._pageIndex + 1
            }

            get rotate() {
                return this._pageInfo.rotate
            }

            get ref() {
                return this._pageInfo.ref
            }

            get userUnit() {
                return this._pageInfo.userUnit
            }

            get view() {
                return this._pageInfo.view
            }

            getViewport({scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: r = !1} = {}) {
                return new tc({viewBox: this.view, scale: t, rotation: e, offsetX: i, offsetY: s, dontFlip: r})
            }

            getAnnotations({intent: t = "display"} = {}) {
                let {renderingIntent: e} = this._transport.getRenderingIntent(t);
                return this._transport.getAnnotations(this._pageIndex, e)
            }

            getJSActions() {
                return this._transport.getPageJSActions(this._pageIndex)
            }

            get filterFactory() {
                return this._transport.filterFactory
            }

            get isPureXfa() {
                return I(this, "isPureXfa", !!this._transport._htmlForXfa)
            }

            async getXfa() {
                return this._transport._htmlForXfa?.children[this._pageIndex] || null
            }

            render({
                       canvasContext: t,
                       viewport: e,
                       intent: i = "display",
                       annotationMode: s = g.ENABLE,
                       transform: r = null,
                       background: n = null,
                       optionalContentConfigPromise: a = null,
                       annotationCanvasMap: o = null,
                       pageColors: l = null,
                       printAnnotationStorage: h = null
                   }) {
                this._stats?.time("Overall");
                let d = this._transport.getRenderingIntent(i, s, h), {renderingIntent: c, cacheKey: u} = d;
                this.#iy = !1, this.#i_(), a ||= this._transport.getOptionalContentConfig(c);
                let f = this._intentStates.get(u);
                f || (f = Object.create(null), this._intentStates.set(u, f)), f.streamReaderCancelTimeout && (clearTimeout(f.streamReaderCancelTimeout), f.streamReaderCancelTimeout = null);
                let m = !!(c & p.PRINT);
                f.displayReadyCapability || (f.displayReadyCapability = Promise.withResolvers(), f.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: !1,
                    separateAnnots: null
                }, this._stats?.time("Page Request"), this._pumpOperatorList(d));
                let v = t => {
                    f.renderTasks.delete(b), (this._maybeCleanupAfterRender || m) && (this.#iy = !0), this.#iw(!m), t ? (b.capability.reject(t), this._abortOperatorList({
                        intentState: f,
                        reason: t instanceof Error ? t : Error(t)
                    })) : b.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats))
                }, b = new is({
                    callback: v,
                    params: {canvasContext: t, viewport: e, transform: r, background: n},
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    annotationCanvasMap: o,
                    operatorList: f.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: this._transport.canvasFactory,
                    filterFactory: this._transport.filterFactory,
                    useRequestAnimationFrame: !m,
                    pdfBug: this._pdfBug,
                    pageColors: l
                });
                (f.renderTasks ||= new Set).add(b);
                let A = b.task;
                return Promise.all([f.displayReadyCapability.promise, a]).then(([t, e]) => {
                    if (this.destroyed) {
                        v();
                        return
                    }
                    if (this._stats?.time("Rendering"), !(e.renderingIntent & c)) throw Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                    b.initializeGraphics({transparency: t, optionalContentConfig: e}), b.operatorListChanged()
                }).catch(v), A
            }

            getOperatorList({
                                intent: t = "display",
                                annotationMode: e = g.ENABLE,
                                printAnnotationStorage: i = null
                            } = {}) {
                let s;
                let r = this._transport.getRenderingIntent(t, e, i, !0), n = this._intentStates.get(r.cacheKey);
                return n || (n = Object.create(null), this._intentStates.set(r.cacheKey, n)), n.opListReadCapability || ((s = Object.create(null)).operatorListChanged = function () {
                    n.operatorList.lastChunk && (n.opListReadCapability.resolve(n.operatorList), n.renderTasks.delete(s))
                }, n.opListReadCapability = Promise.withResolvers(), (n.renderTasks ||= new Set).add(s), n.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: !1,
                    separateAnnots: null
                }, this._stats?.time("Page Request"), this._pumpOperatorList(r)), n.opListReadCapability.promise
            }

            streamTextContent({includeMarkedContent: t = !1, disableNormalization: e = !1} = {}) {
                return this._transport.messageHandler.sendWithStream("GetTextContent", {
                    pageIndex: this._pageIndex,
                    includeMarkedContent: !0 === t,
                    disableNormalization: !0 === e
                }, {highWaterMark: 100, size: t => t.items.length})
            }

            getTextContent(t = {}) {
                if (this._transport._htmlForXfa) return this.getXfa().then(t => eX.textContent(t));
                let e = this.streamTextContent(t);
                return new Promise(function (t, i) {
                    let s = e.getReader(), r = {items: [], styles: Object.create(null), lang: null};
                    !function e() {
                        s.read().then(function ({value: i, done: s}) {
                            if (s) {
                                t(r);
                                return
                            }
                            r.lang ??= i.lang, Object.assign(r.styles, i.styles), r.items.push(...i.items), e()
                        }, i)
                    }()
                })
            }

            getStructTree() {
                return this._transport.getStructTree(this._pageIndex)
            }

            _destroy() {
                this.destroyed = !0;
                let t = [];
                for (let e of this._intentStates.values()) if (this._abortOperatorList({
                    intentState: e,
                    reason: Error("Page was destroyed."),
                    force: !0
                }), !e.opListReadCapability) for (let i of e.renderTasks) t.push(i.completed), i.cancel();
                return this.objs.clear(), this.#iy = !1, this.#i_(), Promise.all(t)
            }

            cleanup(t = !1) {
                this.#iy = !0;
                let e = this.#iw(!1);
                return t && e && (this._stats &&= new tv), e
            }

            #iw(t = !1) {
                if (this.#i_(), !this.#iy || this.destroyed) return !1;
                if (t) return this.#iA = setTimeout(() => {
                    this.#iA = null, this.#iw(!1)
                }, 5e3), !1;
                for (let {
                    renderTasks: t,
                    operatorList: e
                } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return !1;
                return this._intentStates.clear(), this.objs.clear(), this.#iy = !1, !0
            }

            #i_() {
                this.#iA && (clearTimeout(this.#iA), this.#iA = null)
            }

            _startRenderPage(t, e) {
                let i = this._intentStates.get(e);
                i && (this._stats?.timeEnd("Page Request"), i.displayReadyCapability?.resolve(t))
            }

            _renderPageChunk(t, e) {
                for (let i = 0, s = t.length; i < s; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
                for (let i of (e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots, e.renderTasks)) i.operatorListChanged();
                t.lastChunk && this.#iw(!0)
            }

            _pumpOperatorList({renderingIntent: t, cacheKey: e, annotationStorageSerializable: i}) {
                let {map: s, transfer: r} = i, n = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                    pageIndex: this._pageIndex,
                    intent: t,
                    cacheKey: e,
                    annotationStorage: s
                }, r).getReader(), a = this._intentStates.get(e);
                a.streamReader = n;
                let o = () => {
                    n.read().then(({value: t, done: e}) => {
                        if (e) {
                            a.streamReader = null;
                            return
                        }
                        this._transport.destroyed || (this._renderPageChunk(t, a), o())
                    }, t => {
                        if (a.streamReader = null, !this._transport.destroyed) {
                            if (a.operatorList) {
                                for (let t of (a.operatorList.lastChunk = !0, a.renderTasks)) t.operatorListChanged();
                                this.#iw(!0)
                            }
                            if (a.displayReadyCapability) a.displayReadyCapability.reject(t); else if (a.opListReadCapability) a.opListReadCapability.reject(t); else throw t
                        }
                    })
                };
                o()
            }

            _abortOperatorList({intentState: t, reason: e, force: i = !1}) {
                if (t.streamReader) {
                    if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
                        if (t.renderTasks.size > 0) return;
                        if (e instanceof tu) {
                            let i = 100;
                            e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
                                t.streamReaderCancelTimeout = null, this._abortOperatorList({
                                    intentState: t,
                                    reason: e,
                                    force: !0
                                })
                            }, i);
                            return
                        }
                    }
                    if (t.streamReader.cancel(new z(e.message)).catch(() => {
                    }), t.streamReader = null, !this._transport.destroyed) {
                        for (let [e, i] of this._intentStates) if (i === t) {
                            this._intentStates.delete(e);
                            break
                        }
                        this.cleanup()
                    }
                }
            }

            get stats() {
                return this._stats
            }
        }

        class e6 {
            #ix = new Set;
            #iE = Promise.resolve();

            postMessage(t, e) {
                let i = {data: structuredClone(t, e ? {transfer: e} : null)};
                this.#iE.then(() => {
                    for (let t of this.#ix) t.call(this, i)
                })
            }

            addEventListener(t, e) {
                this.#ix.add(e)
            }

            removeEventListener(t, e) {
                this.#ix.delete(e)
            }

            terminate() {
                this.#ix.clear()
            }
        }

        let e9 = {isWorkerDisabled: !1, fakeWorkerId: 0};
        d && (e9.isWorkerDisabled = !0, ec.workerSrc ||= "./pdf.worker.mjs"), e9.isSameOrigin = function (t, e) {
            let i;
            try {
                if (!(i = new URL(t)).origin || "null" === i.origin) return !1
            } catch {
                return !1
            }
            let s = new URL(e, i);
            return i.origin === s.origin
        }, e9.createCDNWrapper = function (t) {
            let e = `await import("${t}");`;
            return URL.createObjectURL(new Blob([e], {type: "text/javascript"}))
        };

        class e7 {
            static #iS;

            constructor({name: t = null, port: e = null, verbosity: i = C} = {}) {
                if (this.name = t, this.destroyed = !1, this.verbosity = i, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
                    if (e7.#iS?.has(e)) throw Error("Cannot use more than one PDFWorker per port.");
                    (e7.#iS ||= new WeakMap).set(e, this), this._initializeFromPort(e);
                    return
                }
                this._initialize()
            }

            get promise() {
                return d ? Promise.all([tW.promise, this._readyCapability.promise]) : this._readyCapability.promise
            }

            #iC() {
                this._readyCapability.resolve(), this._messageHandler.send("configure", {verbosity: this.verbosity})
            }

            get port() {
                return this._port
            }

            get messageHandler() {
                return this._messageHandler
            }

            _initializeFromPort(t) {
                this._port = t, this._messageHandler = new ef("main", "worker", t), this._messageHandler.on("ready", function () {
                }), this.#iC()
            }

            _initialize() {
                if (e9.isWorkerDisabled || e7.#iT) {
                    this._setupFakeWorker();
                    return
                }
                let {workerSrc: t} = e7;
                try {
                    e9.isSameOrigin(window.location.href, t) || (t = e9.createCDNWrapper(new URL(t, window.location).href));
                    let e = new Worker(t, {type: "module"}), i = new ef("main", "worker", e), s = () => {
                        r.abort(), i.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(Error("Worker was destroyed")) : this._setupFakeWorker()
                    }, r = new AbortController;
                    e.addEventListener("error", () => {
                        this._webWorker || s()
                    }, {signal: r.signal}), i.on("test", t => {
                        if (r.abort(), this.destroyed || !t) {
                            s();
                            return
                        }
                        this._messageHandler = i, this._port = e, this._webWorker = e, this.#iC()
                    }), i.on("ready", t => {
                        if (r.abort(), this.destroyed) {
                            s();
                            return
                        }
                        try {
                            n()
                        } catch {
                            this._setupFakeWorker()
                        }
                    });
                    let n = () => {
                        let t = new Uint8Array;
                        i.send("test", t, [t.buffer])
                    };
                    n();
                    return
                } catch {
                    T("The worker has been disabled.")
                }
                this._setupFakeWorker()
            }

            _setupFakeWorker() {
                e9.isWorkerDisabled || (M("Setting up fake worker."), e9.isWorkerDisabled = !0), e7._setupFakeWorkerGlobal.then(t => {
                    if (this.destroyed) {
                        this._readyCapability.reject(Error("Worker was destroyed"));
                        return
                    }
                    let e = new e6;
                    this._port = e;
                    let i = `fake${e9.fakeWorkerId++}`, s = new ef(i + "_worker", i, e);
                    t.setup(s, e), this._messageHandler = new ef(i, i + "_worker", e), this.#iC()
                }).catch(t => {
                    this._readyCapability.reject(Error(`Setting up fake worker failed: "${t.message}".`))
                })
            }

            destroy() {
                this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), e7.#iS?.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
            }

            static fromPort(t) {
                if (!t?.port) throw Error("PDFWorker.fromPort - invalid method signature.");
                let e = this.#iS?.get(t.port);
                if (e) {
                    if (e._pendingDestroy) throw Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                    return e
                }
                return new e7(t)
            }

            static get workerSrc() {
                if (ec.workerSrc) return ec.workerSrc;
                throw Error('No "GlobalWorkerOptions.workerSrc" specified.')
            }

            static get #iT() {
                try {
                    return globalThis.pdfjsWorker?.WorkerMessageHandler || null
                } catch {
                    return null
                }
            }

            static get _setupFakeWorkerGlobal() {
                return I(this, "_setupFakeWorkerGlobal", (async () => this.#iT ? this.#iT : (await import(this.workerSrc)).WorkerMessageHandler)())
            }
        }

        class e8 {
            #iM = new Map;
            #iR = new Map;
            #ik = new Map;
            #iL = new Map;
            #iI = null;

            constructor(t, e, i, s, r) {
                this.messageHandler = t, this.loadingTask = e, this.commonObjs = new ie, this.fontLoader = new t$({
                    ownerDocument: s.ownerDocument,
                    styleElement: s.styleElement
                }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler()
            }

            #iP(t, e = null) {
                let i = this.#iM.get(t);
                if (i) return i;
                let s = this.messageHandler.sendWithPromise(t, e);
                return this.#iM.set(t, s), s
            }

            get annotationStorage() {
                return I(this, "annotationStorage", new tj)
            }

            getRenderingIntent(t, e = g.ENABLE, i = null, s = !1) {
                let r = p.DISPLAY, n = tz;
                switch (t) {
                    case"any":
                        r = p.ANY;
                        break;
                    case"display":
                        break;
                    case"print":
                        r = p.PRINT;
                        break;
                    default:
                        M(`getRenderingIntent - invalid intent: ${t}`)
                }
                switch (e) {
                    case g.DISABLE:
                        r += p.ANNOTATIONS_DISABLE;
                        break;
                    case g.ENABLE:
                        break;
                    case g.ENABLE_FORMS:
                        r += p.ANNOTATIONS_FORMS;
                        break;
                    case g.ENABLE_STORAGE:
                        n = ((r += p.ANNOTATIONS_STORAGE) & p.PRINT && i instanceof tU ? i : this.annotationStorage).serializable;
                        break;
                    default:
                        M(`getRenderingIntent - invalid annotationMode: ${e}`)
                }
                return s && (r += p.OPLIST), {
                    renderingIntent: r,
                    cacheKey: `${r}_${n.hash}`,
                    annotationStorageSerializable: n
                }
            }

            destroy() {
                if (this.destroyCapability) return this.destroyCapability.promise;
                this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), this.#iI?.reject(Error("Worker was destroyed during onPassword callback"));
                let t = [];
                for (let e of this.#iR.values()) t.push(e._destroy());
                this.#iR.clear(), this.#ik.clear(), this.#iL.clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
                let e = this.messageHandler.sendWithPromise("Terminate", null);
                return t.push(e), Promise.all(t).then(() => {
                    this.commonObjs.clear(), this.fontLoader.clear(), this.#iM.clear(), this.filterFactory.destroy(), eq.cleanup(), this._networkStream?.cancelAllRequests(new z("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve()
                }, this.destroyCapability.reject), this.destroyCapability.promise
            }

            setupMessageHandler() {
                let {messageHandler: t, loadingTask: e} = this;
                t.on("GetReader", (t, e) => {
                    k(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = t => {
                        this._lastProgress = {loaded: t.loaded, total: t.total}
                    }, e.onPull = () => {
                        this._fullReader.read().then(function ({value: t, done: i}) {
                            if (i) {
                                e.close();
                                return
                            }
                            k(t instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(t), 1, [t])
                        }).catch(t => {
                            e.error(t)
                        })
                    }, e.onCancel = t => {
                        this._fullReader.cancel(t), e.ready.catch(t => {
                            if (!this.destroyed) throw t
                        })
                    }
                }), t.on("ReaderHeadersReady", t => {
                    let i = Promise.withResolvers(), s = this._fullReader;
                    return s.headersReady.then(() => {
                        s.isStreamingSupported && s.isRangeSupported || (this._lastProgress && e.onProgress?.(this._lastProgress), s.onProgress = t => {
                            e.onProgress?.({loaded: t.loaded, total: t.total})
                        }), i.resolve({
                            isStreamingSupported: s.isStreamingSupported,
                            isRangeSupported: s.isRangeSupported,
                            contentLength: s.contentLength
                        })
                    }, i.reject), i.promise
                }), t.on("GetRangeReader", (t, e) => {
                    k(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                    let i = this._networkStream.getRangeReader(t.begin, t.end);
                    if (!i) {
                        e.close();
                        return
                    }
                    e.onPull = () => {
                        i.read().then(function ({value: t, done: i}) {
                            if (i) {
                                e.close();
                                return
                            }
                            k(t instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(t), 1, [t])
                        }).catch(t => {
                            e.error(t)
                        })
                    }, e.onCancel = t => {
                        i.cancel(t), e.ready.catch(t => {
                            if (!this.destroyed) throw t
                        })
                    }
                }), t.on("GetDoc", ({pdfInfo: t}) => {
                    this._numPages = t.numPages, this._htmlForXfa = t.htmlForXfa, delete t.htmlForXfa, e._capability.resolve(new e4(t, this))
                }), t.on("DocException", function (t) {
                    let i;
                    switch (t.name) {
                        case"PasswordException":
                            i = new D(t.message, t.code);
                            break;
                        case"InvalidPDFException":
                            i = new O(t.message);
                            break;
                        case"MissingPDFException":
                            i = new N(t.message);
                            break;
                        case"UnexpectedResponseException":
                            i = new B(t.message, t.status);
                            break;
                        case"UnknownErrorException":
                            i = new F(t.message, t.details);
                            break;
                        default:
                            R("DocException - expected a valid Error.")
                    }
                    e._capability.reject(i)
                }), t.on("PasswordRequest", t => {
                    if (this.#iI = Promise.withResolvers(), e.onPassword) try {
                        e.onPassword(t => {
                            t instanceof Error ? this.#iI.reject(t) : this.#iI.resolve({password: t})
                        }, t.code)
                    } catch (t) {
                        this.#iI.reject(t)
                    } else this.#iI.reject(new D(t.message, t.code));
                    return this.#iI.promise
                }), t.on("DataLoaded", t => {
                    e.onProgress?.({loaded: t.length, total: t.length}), this.downloadInfoCapability.resolve(t)
                }), t.on("StartRenderPage", t => {
                    this.destroyed || this.#iR.get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey)
                }), t.on("commonobj", ([e, i, s]) => {
                    if (this.destroyed || this.commonObjs.has(e)) return null;
                    switch (i) {
                        case"Font":
                            let {disableFontFace: r, fontExtraProperties: n, pdfBug: a} = this._params;
                            if ("error" in s) {
                                let t = s.error;
                                M(`Error during font loading: ${t}`), this.commonObjs.resolve(e, t);
                                break
                            }
                            let o = new tG(s, {
                                disableFontFace: r,
                                inspectFont: a && globalThis.FontInspector?.enabled ? (t, e) => globalThis.FontInspector.fontAdded(t, e) : null
                            });
                            this.fontLoader.bind(o).catch(() => t.sendWithPromise("FontFallback", {id: e})).finally(() => {
                                !n && o.data && (o.data = null), this.commonObjs.resolve(e, o)
                            });
                            break;
                        case"CopyLocalImage":
                            let {imageRef: l} = s;
                            for (let t of (k(l, "The imageRef must be defined."), this.#iR.values())) for (let [, i] of t.objs) if (i?.ref === l) {
                                if (!i.dataLen) return null;
                                return this.commonObjs.resolve(e, structuredClone(i)), i.dataLen
                            }
                            break;
                        case"FontPath":
                        case"Image":
                        case"Pattern":
                            this.commonObjs.resolve(e, s);
                            break;
                        default:
                            throw Error(`Got unknown common object type ${i}`)
                    }
                    return null
                }), t.on("obj", ([t, e, i, s]) => {
                    if (this.destroyed) return;
                    let r = this.#iR.get(e);
                    if (!r.objs.has(t)) {
                        if (0 === r._intentStates.size) {
                            s?.bitmap?.close();
                            return
                        }
                        switch (i) {
                            case"Image":
                                r.objs.resolve(t, s), s?.dataLen > 1e7 && (r._maybeCleanupAfterRender = !0);
                                break;
                            case"Pattern":
                                r.objs.resolve(t, s);
                                break;
                            default:
                                throw Error(`Got unknown object type ${i}`)
                        }
                    }
                }), t.on("DocProgress", t => {
                    this.destroyed || e.onProgress?.({loaded: t.loaded, total: t.total})
                }), t.on("FetchBuiltInCMap", t => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(t) : Promise.reject(Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", t => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(t) : Promise.reject(Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")))
            }

            getData() {
                return this.messageHandler.sendWithPromise("GetData", null)
            }

            saveDocument() {
                this.annotationStorage.size <= 0 && M("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
                let {map: t, transfer: e} = this.annotationStorage.serializable;
                return this.messageHandler.sendWithPromise("SaveDocument", {
                    isPureXfa: !!this._htmlForXfa,
                    numPages: this._numPages,
                    annotationStorage: t,
                    filename: this._fullReader?.filename ?? null
                }, e).finally(() => {
                    this.annotationStorage.resetModified()
                })
            }

            getPage(t) {
                if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(Error("Invalid page request."));
                let e = t - 1, i = this.#ik.get(e);
                if (i) return i;
                let s = this.messageHandler.sendWithPromise("GetPage", {pageIndex: e}).then(i => {
                    if (this.destroyed) throw Error("Transport destroyed");
                    i.refStr && this.#iL.set(i.refStr, t);
                    let s = new e3(e, i, this, this._params.pdfBug);
                    return this.#iR.set(e, s), s
                });
                return this.#ik.set(e, s), s
            }

            getPageIndex(t) {
                return e1(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
                    num: t.num,
                    gen: t.gen
                }) : Promise.reject(Error("Invalid pageIndex request."))
            }

            getAnnotations(t, e) {
                return this.messageHandler.sendWithPromise("GetAnnotations", {pageIndex: t, intent: e})
            }

            getFieldObjects() {
                return this.#iP("GetFieldObjects")
            }

            hasJSActions() {
                return this.#iP("HasJSActions")
            }

            getCalculationOrderIds() {
                return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null)
            }

            getDestinations() {
                return this.messageHandler.sendWithPromise("GetDestinations", null)
            }

            getDestination(t) {
                return "string" != typeof t ? Promise.reject(Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {id: t})
            }

            getPageLabels() {
                return this.messageHandler.sendWithPromise("GetPageLabels", null)
            }

            getPageLayout() {
                return this.messageHandler.sendWithPromise("GetPageLayout", null)
            }

            getPageMode() {
                return this.messageHandler.sendWithPromise("GetPageMode", null)
            }

            getViewerPreferences() {
                return this.messageHandler.sendWithPromise("GetViewerPreferences", null)
            }

            getOpenAction() {
                return this.messageHandler.sendWithPromise("GetOpenAction", null)
            }

            getAttachments() {
                return this.messageHandler.sendWithPromise("GetAttachments", null)
            }

            getDocJSActions() {
                return this.#iP("GetDocJSActions")
            }

            getPageJSActions(t) {
                return this.messageHandler.sendWithPromise("GetPageJSActions", {pageIndex: t})
            }

            getStructTree(t) {
                return this.messageHandler.sendWithPromise("GetStructTree", {pageIndex: t})
            }

            getOutline() {
                return this.messageHandler.sendWithPromise("GetOutline", null)
            }

            getOptionalContentConfig(t) {
                return this.#iP("GetOptionalContentConfig").then(e => new eA(e, t))
            }

            getPermissions() {
                return this.messageHandler.sendWithPromise("GetPermissions", null)
            }

            getMetadata() {
                let t = "GetMetadata", e = this.#iM.get(t);
                if (e) return e;
                let i = this.messageHandler.sendWithPromise(t, null).then(t => ({
                    info: t[0],
                    metadata: t[1] ? new em(t[1]) : null,
                    contentDispositionFilename: this._fullReader?.filename ?? null,
                    contentLength: this._fullReader?.contentLength ?? null
                }));
                return this.#iM.set(t, i), i
            }

            getMarkInfo() {
                return this.messageHandler.sendWithPromise("GetMarkInfo", null)
            }

            async startCleanup(t = !1) {
                if (!this.destroyed) {
                    for (let t of (await this.messageHandler.sendWithPromise("Cleanup", null), this.#iR.values())) if (!t.cleanup()) throw Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
                    this.commonObjs.clear(), t || this.fontLoader.clear(), this.#iM.clear(), this.filterFactory.destroy(!0), eq.cleanup()
                }
            }

            cachedPageNumber(t) {
                if (!e1(t)) return null;
                let e = 0 === t.gen ? `${t.num}R` : `${t.num}R${t.gen}`;
                return this.#iL.get(e) ?? null
            }
        }

        let it = Symbol("INITIAL_DATA");

        class ie {
            #iD = Object.create(null);

            #iF(t) {
                return this.#iD[t] ||= {...Promise.withResolvers(), data: it}
            }

            get(t, e = null) {
                if (e) {
                    let i = this.#iF(t);
                    return i.promise.then(() => e(i.data)), null
                }
                let i = this.#iD[t];
                if (!i || i.data === it) throw Error(`Requesting object that isn't resolved yet ${t}.`);
                return i.data
            }

            has(t) {
                let e = this.#iD[t];
                return !!e && e.data !== it
            }

            resolve(t, e = null) {
                let i = this.#iF(t);
                i.data = e, i.resolve()
            }

            clear() {
                for (let t in this.#iD) {
                    let {data: e} = this.#iD[t];
                    e?.bitmap?.close()
                }
                this.#iD = Object.create(null)
            }

            * [Symbol.iterator]() {
                for (let t in this.#iD) {
                    let {data: e} = this.#iD[t];
                    e !== it && (yield[t, e])
                }
            }
        }

        class ii {
            #iO = null;

            constructor(t) {
                this.#iO = t, this.onContinue = null
            }

            get promise() {
                return this.#iO.capability.promise
            }

            cancel(t = 0) {
                this.#iO.cancel(null, t)
            }

            get separateAnnots() {
                let {separateAnnots: t} = this.#iO.operatorList;
                if (!t) return !1;
                let {annotationCanvasMap: e} = this.#iO;
                return t.form || t.canvas && e?.size > 0
            }
        }

        class is {
            #iN = null;
            static #iB = new WeakSet;

            constructor({
                            callback: t,
                            params: e,
                            objs: i,
                            commonObjs: s,
                            annotationCanvasMap: r,
                            operatorList: n,
                            pageIndex: a,
                            canvasFactory: o,
                            filterFactory: l,
                            useRequestAnimationFrame: h = !1,
                            pdfBug: d = !1,
                            pageColors: c = null
                        }) {
                this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = n, this._pageIndex = a, this.canvasFactory = o, this.filterFactory = l, this._pdfBug = d, this.pageColors = c, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = !0 === h && "undefined" != typeof window, this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new ii(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas
            }

            get completed() {
                return this.capability.promise.catch(function () {
                })
            }

            initializeGraphics({transparency: t = !1, optionalContentConfig: e}) {
                if (this.cancelled) return;
                if (this._canvas) {
                    if (is.#iB.has(this._canvas)) throw Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                    is.#iB.add(this._canvas)
                }
                this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                let {canvasContext: i, viewport: s, transform: r, background: n} = this.params;
                this.gfx = new ed(i, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {optionalContentConfig: e}, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                    transform: r,
                    viewport: s,
                    transparency: t,
                    background: n
                }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.()
            }

            cancel(t = null, e = 0) {
                this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), this.#iN && (window.cancelAnimationFrame(this.#iN), this.#iN = null), is.#iB.delete(this._canvas), this.callback(t || new tu(`Rendering cancelled, page ${this._pageIndex + 1}`, e))
            }

            operatorListChanged() {
                if (!this.graphicsReady) {
                    this.graphicsReadyCallback ||= this._continueBound;
                    return
                }
                this.stepper?.updateOperatorList(this.operatorList), this.running || this._continue()
            }

            _continue() {
                this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
            }

            _scheduleNext() {
                this._useRequestAnimationFrame ? this.#iN = window.requestAnimationFrame(() => {
                    this.#iN = null, this._nextBound().catch(this._cancelBound)
                }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound)
            }

            async _next() {
                !this.cancelled && (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), is.#iB.delete(this._canvas), this.callback())))
            }
        }

        let ir = "4.4.168", ia = "19fbc8998";

        function io(t) {
            return Math.floor(255 * Math.max(0, Math.min(1, t))).toString(16).padStart(2, "0")
        }

        function il(t) {
            return Math.max(0, Math.min(255, 255 * t))
        }

        l(670);

        class ih {
            static CMYK_G([t, e, i, s]) {
                return ["G", 1 - Math.min(1, .3 * t + .59 * i + .11 * e + s)]
            }

            static G_CMYK([t]) {
                return ["CMYK", 0, 0, 0, 1 - t]
            }

            static G_RGB([t]) {
                return ["RGB", t, t, t]
            }

            static G_rgb([t]) {
                return [t = il(t), t, t]
            }

            static G_HTML([t]) {
                let e = io(t);
                return `#${e}${e}${e}`
            }

            static RGB_G([t, e, i]) {
                return ["G", .3 * t + .59 * e + .11 * i]
            }

            static RGB_rgb(t) {
                return t.map(il)
            }

            static RGB_HTML(t) {
                return `#${t.map(io).join("")}`
            }

            static T_HTML() {
                return "#00000000"
            }

            static T_rgb() {
                return [null]
            }

            static CMYK_RGB([t, e, i, s]) {
                return ["RGB", 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)]
            }

            static CMYK_rgb([t, e, i, s]) {
                return [il(1 - Math.min(1, t + s)), il(1 - Math.min(1, i + s)), il(1 - Math.min(1, e + s))]
            }

            static CMYK_HTML(t) {
                let e = this.CMYK_RGB(t).slice(1);
                return this.RGB_HTML(e)
            }

            static RGB_CMYK([t, e, i]) {
                let s = 1 - t, r = 1 - e, n = 1 - i;
                return ["CMYK", s, r, n, Math.min(s, r, n)]
            }
        }

        class id {
            static setupStorage(t, e, i, s, r) {
                let n = s.getValue(e, {value: null});
                switch (i.name) {
                    case"textarea":
                        if (null !== n.value && (t.textContent = n.value), "print" === r) break;
                        t.addEventListener("input", t => {
                            s.setValue(e, {value: t.target.value})
                        });
                        break;
                    case"input":
                        if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                            if (n.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : n.value === i.attributes.xfaOff && t.removeAttribute("checked"), "print" === r) break;
                            t.addEventListener("change", t => {
                                s.setValue(e, {value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")})
                            })
                        } else {
                            if (null !== n.value && t.setAttribute("value", n.value), "print" === r) break;
                            t.addEventListener("input", t => {
                                s.setValue(e, {value: t.target.value})
                            })
                        }
                        break;
                    case"select":
                        if (null !== n.value) for (let e of (t.setAttribute("value", n.value), i.children)) e.attributes.value === n.value ? e.attributes.selected = !0 : e.attributes.hasOwnProperty("selected") && delete e.attributes.selected;
                        t.addEventListener("input", t => {
                            let i = t.target.options, r = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
                            s.setValue(e, {value: r})
                        })
                }
            }

            static setAttributes({html: t, element: e, storage: i = null, intent: s, linkService: r}) {
                let {attributes: n} = e, a = t instanceof HTMLAnchorElement;
                for (let [e, i] of ("radio" === n.type && (n.name = `${n.name}-${s}`), Object.entries(n))) if (null != i) switch (e) {
                    case"class":
                        i.length && t.setAttribute(e, i.join(" "));
                        break;
                    case"dataId":
                        break;
                    case"id":
                        t.setAttribute("data-element-id", i);
                        break;
                    case"style":
                        Object.assign(t.style, i);
                        break;
                    case"textContent":
                        t.textContent = i;
                        break;
                    default:
                        a && ("href" === e || "newWindow" === e) || t.setAttribute(e, i)
                }
                a && r.addLinkAttributes(t, n.href, n.newWindow), i && n.dataId && this.setupStorage(t, n.dataId, e, i)
            }

            static render(t) {
                let e = t.annotationStorage, i = t.linkService, s = t.xfaHtml, r = t.intent || "display",
                    n = document.createElement(s.name);
                s.attributes && this.setAttributes({html: n, element: s, intent: r, linkService: i});
                let a = "richText" !== r, o = t.div;
                if (o.append(n), t.viewport) {
                    let e = `matrix(${t.viewport.transform.join(",")})`;
                    o.style.transform = e
                }
                a && o.setAttribute("class", "xfaLayer xfaFont");
                let l = [];
                if (0 === s.children.length) {
                    if (s.value) {
                        let t = document.createTextNode(s.value);
                        n.append(t), a && eX.shouldBuildText(s.name) && l.push(t)
                    }
                    return {textDivs: l}
                }
                let h = [[s, -1, n]];
                for (; h.length > 0;) {
                    let [t, s, n] = h.at(-1);
                    if (s + 1 === t.children.length) {
                        h.pop();
                        continue
                    }
                    let o = t.children[++h.at(-1)[1]];
                    if (null === o) continue;
                    let {name: d} = o;
                    if ("#text" === d) {
                        let t = document.createTextNode(o.value);
                        l.push(t), n.append(t);
                        continue
                    }
                    let c = o?.attributes?.xmlns ? document.createElementNS(o.attributes.xmlns, d) : document.createElement(d);
                    if (n.append(c), o.attributes && this.setAttributes({
                        html: c,
                        element: o,
                        storage: e,
                        intent: r,
                        linkService: i
                    }), o.children?.length > 0) h.push([o, -1, c]); else if (o.value) {
                        let t = document.createTextNode(o.value);
                        a && eX.shouldBuildText(d) && l.push(t), c.append(t)
                    }
                }
                for (let t of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t.setAttribute("readOnly", !0);
                return {textDivs: l}
            }

            static update(t) {
                let e = `matrix(${t.viewport.transform.join(",")})`;
                t.div.style.transform = e, t.div.hidden = !1
            }
        }

        let ic = new WeakSet;

        function iu(t) {
            return {width: t[2] - t[0], height: t[3] - t[1]}
        }

        class ip {
            static create(t) {
                switch (t.data.annotationType) {
                    case y.LINK:
                        return new im(t);
                    case y.TEXT:
                        return new iv(t);
                    case y.WIDGET:
                        switch (t.data.fieldType) {
                            case"Tx":
                                return new iA(t);
                            case"Btn":
                                if (t.data.radioButton) return new iw(t);
                                if (t.data.checkBox) return new i_(t);
                                return new ix(t);
                            case"Ch":
                                return new iE(t);
                            case"Sig":
                                return new iy(t)
                        }
                        return new ib(t);
                    case y.POPUP:
                        return new iS(t);
                    case y.FREETEXT:
                        return new iT(t);
                    case y.LINE:
                        return new iM(t);
                    case y.SQUARE:
                        return new iR(t);
                    case y.CIRCLE:
                        return new ik(t);
                    case y.POLYLINE:
                        return new iL(t);
                    case y.CARET:
                        return new iP(t);
                    case y.INK:
                        return new iD(t);
                    case y.POLYGON:
                        return new iI(t);
                    case y.HIGHLIGHT:
                        return new iF(t);
                    case y.UNDERLINE:
                        return new iO(t);
                    case y.SQUIGGLY:
                        return new iN(t);
                    case y.STRIKEOUT:
                        return new iB(t);
                    case y.STAMP:
                        return new iH(t);
                    case y.FILEATTACHMENT:
                        return new iz(t);
                    default:
                        return new ig(t)
                }
            }
        }

        class ig {
            #iH = null;
            #iz = !1;
            #ij = null;

            constructor(t, {isRenderable: e = !1, ignoreBorder: i = !1, createQuadrilaterals: s = !1} = {}) {
                this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), s && this._createQuadrilaterals()
            }

            static _hasPopupData({titleObj: t, contentsObj: e, richText: i}) {
                return !!(t?.str || e?.str || i?.str)
            }

            get hasPopupData() {
                return ig._hasPopupData(this.data)
            }

            updateEdited(t) {
                if (!this.container) return;
                this.#iH ||= {rect: this.data.rect.slice(0)};
                let {rect: e} = t;
                e && this.#iU(e), this.#ij?.popup.updateEdited(t)
            }

            resetEdited() {
                this.#iH && (this.#iU(this.#iH.rect), this.#ij?.popup.resetEdited(), this.#iH = null)
            }

            #iU(t) {
                let {
                    container: {style: e},
                    data: {rect: i, rotation: s},
                    parent: {viewport: {rawDims: {pageWidth: r, pageHeight: n, pageX: a, pageY: o}}}
                } = this;
                i?.splice(0, 4, ...t);
                let {width: l, height: h} = iu(t);
                e.left = `${100 * (t[0] - a) / r}%`, e.top = `${100 * (n - t[3] + o) / n}%`, 0 === s ? (e.width = `${100 * l / r}%`, e.height = `${100 * h / n}%`) : this.setRotation(s)
            }

            _createContainer(t) {
                let {data: e, parent: {page: i, viewport: s}} = this, r = document.createElement("section");
                r.setAttribute("data-annotation-id", e.id), this instanceof ib || (r.tabIndex = 1e3);
                let {style: n} = r;
                if (n.zIndex = this.parent.zIndex++, e.popupRef && r.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof iS) {
                    let {rotation: t} = e;
                    return e.hasOwnCanvas || 0 === t || this.setRotation(t, r), r
                }
                let {width: a, height: o} = iu(e.rect);
                if (!t && e.borderStyle.width > 0) {
                    n.borderWidth = `${e.borderStyle.width}px`;
                    let t = e.borderStyle.horizontalCornerRadius, i = e.borderStyle.verticalCornerRadius;
                    if (t > 0 || i > 0) {
                        let e = `calc(${t}px * var(--scale-factor)) / calc(${i}px * var(--scale-factor))`;
                        n.borderRadius = e
                    } else if (this instanceof iw) {
                        let t = `calc(${a}px * var(--scale-factor)) / calc(${o}px * var(--scale-factor))`;
                        n.borderRadius = t
                    }
                    switch (e.borderStyle.style) {
                        case _.SOLID:
                            n.borderStyle = "solid";
                            break;
                        case _.DASHED:
                            n.borderStyle = "dashed";
                            break;
                        case _.BEVELED:
                            M("Unimplemented border style: beveled");
                            break;
                        case _.INSET:
                            M("Unimplemented border style: inset");
                            break;
                        case _.UNDERLINE:
                            n.borderBottomStyle = "solid"
                    }
                    let s = e.borderColor || null;
                    s ? (this.#iz = !0, n.borderColor = q.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2])) : n.borderWidth = 0
                }
                let l = q.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]), {
                    pageWidth: h,
                    pageHeight: d,
                    pageX: c,
                    pageY: u
                } = s.rawDims;
                n.left = `${100 * (l[0] - c) / h}%`, n.top = `${100 * (l[1] - u) / d}%`;
                let {rotation: p} = e;
                return e.hasOwnCanvas || 0 === p ? (n.width = `${100 * a / h}%`, n.height = `${100 * o / d}%`) : this.setRotation(p, r), r
            }

            setRotation(t, e = this.container) {
                let i, s;
                if (!this.data.rect) return;
                let {pageWidth: r, pageHeight: n} = this.parent.viewport.rawDims, {
                    width: a,
                    height: o
                } = iu(this.data.rect);
                t % 180 == 0 ? (i = 100 * a / r, s = 100 * o / n) : (i = 100 * o / r, s = 100 * a / n), e.style.width = `${i}%`, e.style.height = `${s}%`, e.setAttribute("data-main-rotation", (360 - t) % 360)
            }

            get _commonActions() {
                let t = (t, e, i) => {
                    let s = i.detail[t], r = s[0], n = s.slice(1);
                    i.target.style[e] = ih[`${r}_HTML`](n), this.annotationStorage.setValue(this.data.id, {[e]: ih[`${r}_rgb`](n)})
                };
                return I(this, "_commonActions", {
                    display: t => {
                        let {display: e} = t.detail, i = e % 2 == 1;
                        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                            noView: i,
                            noPrint: 1 === e || 2 === e
                        })
                    }, print: t => {
                        this.annotationStorage.setValue(this.data.id, {noPrint: !t.detail.print})
                    }, hidden: t => {
                        let {hidden: e} = t.detail;
                        this.container.style.visibility = e ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                            noPrint: e,
                            noView: e
                        })
                    }, focus: t => {
                        setTimeout(() => t.target.focus({preventScroll: !1}), 0)
                    }, userName: t => {
                        t.target.title = t.detail.userName
                    }, readonly: t => {
                        t.target.disabled = t.detail.readonly
                    }, required: t => {
                        this._setRequired(t.target, t.detail.required)
                    }, bgColor: e => {
                        t("bgColor", "backgroundColor", e)
                    }, fillColor: e => {
                        t("fillColor", "backgroundColor", e)
                    }, fgColor: e => {
                        t("fgColor", "color", e)
                    }, textColor: e => {
                        t("textColor", "color", e)
                    }, borderColor: e => {
                        t("borderColor", "borderColor", e)
                    }, strokeColor: e => {
                        t("strokeColor", "borderColor", e)
                    }, rotation: t => {
                        let e = t.detail.rotation;
                        this.setRotation(e), this.annotationStorage.setValue(this.data.id, {rotation: e})
                    }
                })
            }

            _dispatchEventFromSandbox(t, e) {
                let i = this._commonActions;
                for (let s of Object.keys(e.detail)) {
                    let r = t[s] || i[s];
                    r?.(e)
                }
            }

            _setDefaultPropertiesFromJS(t) {
                if (!this.enableScripting) return;
                let e = this.annotationStorage.getRawValue(this.data.id);
                if (!e) return;
                let i = this._commonActions;
                for (let [s, r] of Object.entries(e)) {
                    let n = i[s];
                    n && (n({detail: {[s]: r}, target: t}), delete e[s])
                }
            }

            _createQuadrilaterals() {
                let t;
                if (!this.container) return;
                let {quadPoints: e} = this.data;
                if (!e) return;
                let [i, s, r, n] = this.data.rect.map(t => Math.fround(t));
                if (8 === e.length) {
                    let [t, a, o, l] = e.subarray(2, 6);
                    if (r === t && n === a && i === o && s === l) return
                }
                let {style: a} = this.container;
                if (this.#iz) {
                    let {borderColor: e, borderWidth: i} = a;
                    a.borderWidth = 0, t = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${e}" stroke-width="${i}">`], this.container.classList.add("hasBorder")
                }
                let o = r - i, l = n - s, {svgFactory: h} = this, d = h.createElement("svg");
                d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0);
                let c = h.createElement("defs");
                d.append(c);
                let u = h.createElement("clipPath"), p = `clippath_${this.data.id}`;
                u.setAttribute("id", p), u.setAttribute("clipPathUnits", "objectBoundingBox"), c.append(u);
                for (let s = 2, r = e.length; s < r; s += 8) {
                    let r = e[s], a = e[s + 1], d = e[s + 2], c = e[s + 3], p = h.createElement("rect"),
                        g = (d - i) / o, f = (n - a) / l, m = (r - d) / o, v = (a - c) / l;
                    p.setAttribute("x", g), p.setAttribute("y", f), p.setAttribute("width", m), p.setAttribute("height", v), u.append(p), t?.push(`<rect vector-effect="non-scaling-stroke" x="${g}" y="${f}" width="${m}" height="${v}"/>`)
                }
                this.#iz && (t.push("</g></svg>')"), a.backgroundImage = t.join("")), this.container.append(d), this.container.style.clipPath = `url(#${p})`
            }

            _createPopup() {
                let {container: t, data: e} = this;
                t.setAttribute("aria-haspopup", "dialog");
                let i = this.#ij = new iS({
                    data: {
                        color: e.color,
                        titleObj: e.titleObj,
                        modificationDate: e.modificationDate,
                        contentsObj: e.contentsObj,
                        richText: e.richText,
                        parentRect: e.rect,
                        borderStyle: 0,
                        id: `popup_${e.id}`,
                        rotation: e.rotation
                    }, parent: this.parent, elements: [this]
                });
                this.parent.div.append(i.render())
            }

            render() {
                R("Abstract method `AnnotationElement.render` called")
            }

            _getElementsByName(t, e = null) {
                let i = [];
                if (this._fieldObjects) {
                    let s = this._fieldObjects[t];
                    if (s) for (let {page: t, id: r, exportValues: n} of s) {
                        if (-1 === t || r === e) continue;
                        let s = "string" == typeof n ? n : null, a = document.querySelector(`[data-element-id="${r}"]`);
                        if (a && !ic.has(a)) {
                            M(`_getElementsByName - element not allowed: ${r}`);
                            continue
                        }
                        i.push({id: r, exportValue: s, domElement: a})
                    }
                    return i
                }
                for (let s of document.getElementsByName(t)) {
                    let {exportValue: t} = s, r = s.getAttribute("data-element-id");
                    r !== e && ic.has(s) && i.push({id: r, exportValue: t, domElement: s})
                }
                return i
            }

            show() {
                this.container && (this.container.hidden = !1), this.popup?.maybeShow()
            }

            hide() {
                this.container && (this.container.hidden = !0), this.popup?.forceHide()
            }

            getElementsToTriggerPopup() {
                return this.container
            }

            addHighlightArea() {
                let t = this.getElementsToTriggerPopup();
                if (Array.isArray(t)) for (let e of t) e.classList.add("highlightArea"); else t.classList.add("highlightArea")
            }

            get _isEditable() {
                return !1
            }

            _editOnDoubleClick() {
                if (!this._isEditable) return;
                let {annotationEditorType: t, data: {id: e}} = this;
                this.container.addEventListener("dblclick", () => {
                    this.linkService.eventBus?.dispatch("switchannotationeditormode", {
                        source: this,
                        mode: t,
                        editId: e
                    })
                })
            }
        }

        class im extends ig {
            constructor(t, e = null) {
                super(t, {
                    isRenderable: !0,
                    ignoreBorder: !!e?.ignoreBorder,
                    createQuadrilaterals: !0
                }), this.isTooltipOnly = t.data.isTooltipOnly
            }

            render() {
                let {data: t, linkService: e} = this, i = document.createElement("a");
                i.setAttribute("data-element-id", t.id);
                let s = !1;
                return t.url ? (e.addLinkAttributes(i, t.url, t.newWindow), s = !0) : t.action ? (this._bindNamedAction(i, t.action), s = !0) : t.attachment ? (this.#i$(i, t.attachment, t.attachmentDest), s = !0) : t.setOCGState ? (this.#iG(i, t.setOCGState), s = !0) : t.dest ? (this._bindLink(i, t.dest), s = !0) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t), s = !0), t.resetForm ? (this._bindResetFormAction(i, t.resetForm), s = !0) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = !0)), this.container.classList.add("linkAnnotation"), s && this.container.append(i), this.container
            }

            #iV() {
                this.container.setAttribute("data-internal-link", "")
            }

            _bindLink(t, e) {
                t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), !1), (e || "" === e) && this.#iV()
            }

            _bindNamedAction(t, e) {
                t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), !1), this.#iV()
            }

            #i$(t, e, i = null) {
                t.href = this.linkService.getAnchorUrl(""), e.description && (t.title = e.description), t.onclick = () => (this.downloadManager?.openOrDownloadData(e.content, e.filename, i), !1), this.#iV()
            }

            #iG(t, e) {
                t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(e), !1), this.#iV()
            }

            _bindJSAction(t, e) {
                t.href = this.linkService.getAnchorUrl("");
                let i = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
                for (let s of Object.keys(e.actions)) {
                    let r = i.get(s);
                    r && (t[r] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {id: e.id, name: s}
                    }), !1))
                }
                t.onclick || (t.onclick = () => !1), this.#iV()
            }

            _bindResetFormAction(t, e) {
                let i = t.onclick;
                if (i || (t.href = this.linkService.getAnchorUrl("")), this.#iV(), !this._fieldObjects) {
                    M('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (t.onclick = () => !1);
                    return
                }
                t.onclick = () => {
                    i?.();
                    let {fields: t, refs: s, include: r} = e, n = [];
                    if (0 !== t.length || 0 !== s.length) {
                        let e = new Set(s);
                        for (let i of t) for (let {id: t} of this._fieldObjects[i] || []) e.add(t);
                        for (let t of Object.values(this._fieldObjects)) for (let i of t) e.has(i.id) === r && n.push(i)
                    } else for (let t of Object.values(this._fieldObjects)) n.push(...t);
                    let a = this.annotationStorage, o = [];
                    for (let t of n) {
                        let {id: e} = t;
                        switch (o.push(e), t.type) {
                            case"text": {
                                let i = t.defaultValue || "";
                                a.setValue(e, {value: i});
                                break
                            }
                            case"checkbox":
                            case"radiobutton": {
                                let i = t.defaultValue === t.exportValues;
                                a.setValue(e, {value: i});
                                break
                            }
                            case"combobox":
                            case"listbox": {
                                let i = t.defaultValue || "";
                                a.setValue(e, {value: i});
                                break
                            }
                            default:
                                continue
                        }
                        let i = document.querySelector(`[data-element-id="${e}"]`);
                        if (i) {
                            if (!ic.has(i)) {
                                M(`_bindResetFormAction - element not allowed: ${e}`);
                                continue
                            }
                            i.dispatchEvent(new Event("resetform"))
                        }
                    }
                    return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {id: "app", ids: o, name: "ResetForm"}
                    }), !1
                }
            }
        }

        class iv extends ig {
            constructor(t) {
                super(t, {isRenderable: !0})
            }

            render() {
                this.container.classList.add("textAnnotation");
                let t = document.createElement("img");
                return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({type: this.data.name})), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container
            }
        }

        class ib extends ig {
            render() {
                return this.container
            }

            showElementAndHideCanvas(t) {
                this.data.hasOwnCanvas && (t.previousSibling?.nodeName === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1)
            }

            _getKeyModifier(t) {
                return G.platform.isMac ? t.metaKey : t.ctrlKey
            }

            _setEventListener(t, e, i, s, r) {
                i.includes("mouse") ? t.addEventListener(i, t => {
                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                            id: this.data.id,
                            name: s,
                            value: r(t),
                            shift: t.shiftKey,
                            modifier: this._getKeyModifier(t)
                        }
                    })
                }) : t.addEventListener(i, t => {
                    if ("blur" === i) {
                        if (!e.focused || !t.relatedTarget) return;
                        e.focused = !1
                    } else if ("focus" === i) {
                        if (e.focused) return;
                        e.focused = !0
                    }
                    r && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {id: this.data.id, name: s, value: r(t)}
                    })
                })
            }

            _setEventListeners(t, e, i, s) {
                for (let [r, n] of i) ("Action" === n || this.data.actions?.[n]) && (("Focus" === n || "Blur" === n) && (e ||= {focused: !1}), this._setEventListener(t, e, r, n, s), "Focus" !== n || this.data.actions?.Blur ? "Blur" !== n || this.data.actions?.Focus || this._setEventListener(t, e, "focus", "Focus", null) : this._setEventListener(t, e, "blur", "Blur", null))
            }

            _setBackgroundColor(t) {
                let e = this.data.backgroundColor || null;
                t.style.backgroundColor = null === e ? "transparent" : q.makeHexColor(e[0], e[1], e[2])
            }

            _setTextStyle(t) {
                let e;
                let {fontColor: i} = this.data.defaultAppearanceData, s = this.data.defaultAppearanceData.fontSize || 9,
                    r = t.style, n = t => Math.round(10 * t) / 10;
                if (this.data.multiLine) {
                    let t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
                    e = Math.min(s, n(t / (Math.round(t / (1.35 * s)) || 1) / 1.35))
                } else e = Math.min(s, n(Math.abs(this.data.rect[3] - this.data.rect[1] - 2) / 1.35));
                r.fontSize = `calc(${e}px * var(--scale-factor))`, r.color = q.makeHexColor(i[0], i[1], i[2]), null !== this.data.textAlignment && (r.textAlign = ["left", "center", "right"][this.data.textAlignment])
            }

            _setRequired(t, e) {
                e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e)
            }
        }

        class iA extends ib {
            constructor(t) {
                super(t, {isRenderable: t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue})
            }

            setPropertyOnSiblings(t, e, i, s) {
                let r = this.annotationStorage;
                for (let n of this._getElementsByName(t.name, t.id)) n.domElement && (n.domElement[e] = i), r.setValue(n.id, {[s]: i})
            }

            render() {
                let t = this.annotationStorage, e = this.data.id;
                this.container.classList.add("textWidgetAnnotation");
                let i = null;
                if (this.renderForms) {
                    let s = t.getValue(e, {value: this.data.fieldValue}), r = s.value || "",
                        n = t.getValue(e, {charLimit: this.data.maxLen}).charLimit;
                    n && r.length > n && (r = r.slice(0, n));
                    let a = s.formattedValue || this.data.textContent?.join("\n") || null;
                    a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
                    let o = {userValue: r, formattedValue: a, lastCommittedValue: null, commitKey: 1, focused: !1};
                    this.data.multiLine ? ((i = document.createElement("textarea")).textContent = a ?? r, this.data.doNotScroll && (i.style.overflowY = "hidden")) : ((i = document.createElement("input")).type = "text", i.setAttribute("value", a ?? r), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = !0), ic.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 1e3, this._setRequired(i, this.data.required), n && (i.maxLength = n), i.addEventListener("input", s => {
                        t.setValue(e, {value: s.target.value}), this.setPropertyOnSiblings(i, "value", s.target.value, "value"), o.formattedValue = null
                    }), i.addEventListener("resetform", t => {
                        let e = this.data.defaultFieldValue ?? "";
                        i.value = o.userValue = e, o.formattedValue = null
                    });
                    let l = t => {
                        let {formattedValue: e} = o;
                        null != e && (t.target.value = e), t.target.scrollLeft = 0
                    };
                    if (this.enableScripting && this.hasJSActions) {
                        i.addEventListener("focus", t => {
                            if (o.focused) return;
                            let {target: e} = t;
                            o.userValue && (e.value = o.userValue), o.lastCommittedValue = e.value, o.commitKey = 1, this.data.actions?.Focus || (o.focused = !0)
                        }), i.addEventListener("updatefromsandbox", i => {
                            this.showElementAndHideCanvas(i.target), this._dispatchEventFromSandbox({
                                value(i) {
                                    o.userValue = i.detail.value ?? "", t.setValue(e, {value: o.userValue.toString()}), i.target.value = o.userValue
                                }, formattedValue(i) {
                                    let {formattedValue: s} = i.detail;
                                    o.formattedValue = s, null != s && i.target !== document.activeElement && (i.target.value = s), t.setValue(e, {formattedValue: s})
                                }, selRange(t) {
                                    t.target.setSelectionRange(...t.detail.selRange)
                                }, charLimit: i => {
                                    let {charLimit: s} = i.detail, {target: r} = i;
                                    if (0 === s) {
                                        r.removeAttribute("maxLength");
                                        return
                                    }
                                    r.setAttribute("maxLength", s);
                                    let n = o.userValue;
                                    n && !(n.length <= s) && (n = n.slice(0, s), r.value = o.userValue = n, t.setValue(e, {value: n}), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: e,
                                            name: "Keystroke",
                                            value: n,
                                            willCommit: !0,
                                            commitKey: 1,
                                            selStart: r.selectionStart,
                                            selEnd: r.selectionEnd
                                        }
                                    }))
                                }
                            }, i)
                        }), i.addEventListener("keydown", t => {
                            o.commitKey = 1;
                            let i = -1;
                            if ("Escape" === t.key ? i = 0 : "Enter" !== t.key || this.data.multiLine ? "Tab" === t.key && (o.commitKey = 3) : i = 2, -1 === i) return;
                            let {value: s} = t.target;
                            o.lastCommittedValue !== s && (o.lastCommittedValue = s, o.userValue = s, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                source: this,
                                detail: {
                                    id: e,
                                    name: "Keystroke",
                                    value: s,
                                    willCommit: !0,
                                    commitKey: i,
                                    selStart: t.target.selectionStart,
                                    selEnd: t.target.selectionEnd
                                }
                            }))
                        });
                        let s = l;
                        l = null, i.addEventListener("blur", t => {
                            if (!o.focused || !t.relatedTarget) return;
                            this.data.actions?.Blur || (o.focused = !1);
                            let {value: i} = t.target;
                            o.userValue = i, o.lastCommittedValue !== i && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                source: this,
                                detail: {
                                    id: e,
                                    name: "Keystroke",
                                    value: i,
                                    willCommit: !0,
                                    commitKey: o.commitKey,
                                    selStart: t.target.selectionStart,
                                    selEnd: t.target.selectionEnd
                                }
                            }), s(t)
                        }), this.data.actions?.Keystroke && i.addEventListener("beforeinput", t => {
                            o.lastCommittedValue = null;
                            let {data: i, target: s} = t, {value: r, selectionStart: n, selectionEnd: a} = s, l = n,
                                h = a;
                            switch (t.inputType) {
                                case"deleteWordBackward": {
                                    let t = r.substring(0, n).match(/\w*[^\w]*$/);
                                    t && (l -= t[0].length);
                                    break
                                }
                                case"deleteWordForward": {
                                    let t = r.substring(n).match(/^[^\w]*\w*/);
                                    t && (h += t[0].length);
                                    break
                                }
                                case"deleteContentBackward":
                                    n === a && (l -= 1);
                                    break;
                                case"deleteContentForward":
                                    n === a && (h += 1)
                            }
                            t.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                source: this,
                                detail: {
                                    id: e,
                                    name: "Keystroke",
                                    value: r,
                                    change: i || "",
                                    willCommit: !1,
                                    selStart: l,
                                    selEnd: h
                                }
                            })
                        }), this._setEventListeners(i, o, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.value)
                    }
                    if (l && i.addEventListener("blur", l), this.data.comb) {
                        let t = (this.data.rect[2] - this.data.rect[0]) / n;
                        i.classList.add("comb"), i.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`
                    }
                } else (i = document.createElement("div")).textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = !0);
                return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container
            }
        }

        class iy extends ib {
            constructor(t) {
                super(t, {isRenderable: !!t.data.hasOwnCanvas})
            }
        }

        class i_ extends ib {
            constructor(t) {
                super(t, {isRenderable: t.renderForms})
            }

            render() {
                let t = this.annotationStorage, e = this.data, i = e.id,
                    s = t.getValue(i, {value: e.exportValue === e.fieldValue}).value;
                "string" == typeof s && (s = "Off" !== s, t.setValue(i, {value: s})), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
                let r = document.createElement("input");
                return ic.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 1e3, r.addEventListener("change", s => {
                    let {name: r, checked: n} = s.target;
                    for (let s of this._getElementsByName(r, i)) {
                        let i = n && s.exportValue === e.exportValue;
                        s.domElement && (s.domElement.checked = i), t.setValue(s.id, {value: i})
                    }
                    t.setValue(i, {value: n})
                }), r.addEventListener("resetform", t => {
                    let i = e.defaultFieldValue || "Off";
                    t.target.checked = i === e.exportValue
                }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", e => {
                    this._dispatchEventFromSandbox({
                        value(e) {
                            e.target.checked = "Off" !== e.detail.value, t.setValue(i, {value: e.target.checked})
                        }
                    }, e)
                }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container
            }
        }

        class iw extends ib {
            constructor(t) {
                super(t, {isRenderable: t.renderForms})
            }

            render() {
                this.container.classList.add("buttonWidgetAnnotation", "radioButton");
                let t = this.annotationStorage, e = this.data, i = e.id,
                    s = t.getValue(i, {value: e.fieldValue === e.buttonValue}).value;
                if ("string" == typeof s && (s = s !== e.buttonValue, t.setValue(i, {value: s})), s) for (let s of this._getElementsByName(e.fieldName, i)) t.setValue(s.id, {value: !1});
                let r = document.createElement("input");
                if (ic.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.tabIndex = 1e3, r.addEventListener("change", e => {
                    let {name: s, checked: r} = e.target;
                    for (let e of this._getElementsByName(s, i)) t.setValue(e.id, {value: !1});
                    t.setValue(i, {value: r})
                }), r.addEventListener("resetform", t => {
                    let i = e.defaultFieldValue;
                    t.target.checked = null != i && i === e.buttonValue
                }), this.enableScripting && this.hasJSActions) {
                    let s = e.buttonValue;
                    r.addEventListener("updatefromsandbox", e => {
                        this._dispatchEventFromSandbox({
                            value: e => {
                                let r = s === e.detail.value;
                                for (let s of this._getElementsByName(e.target.name)) {
                                    let e = r && s.id === i;
                                    s.domElement && (s.domElement.checked = e), t.setValue(s.id, {value: e})
                                }
                            }
                        }, e)
                    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], t => t.target.checked)
                }
                return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container
            }
        }

        class ix extends im {
            constructor(t) {
                super(t, {ignoreBorder: t.data.hasAppearance})
            }

            render() {
                let t = super.render();
                t.classList.add("buttonWidgetAnnotation", "pushButton");
                let e = t.lastChild;
                return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", t => {
                    this._dispatchEventFromSandbox({}, t)
                })), t
            }
        }

        class iE extends ib {
            constructor(t) {
                super(t, {isRenderable: t.renderForms})
            }

            render() {
                this.container.classList.add("choiceWidgetAnnotation");
                let t = this.annotationStorage, e = this.data.id, i = t.getValue(e, {value: this.data.fieldValue}),
                    s = document.createElement("select");
                ic.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 1e3;
                let r = this.data.combo && this.data.options.length > 0;
                for (let t of (!this.data.combo && (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener("resetform", t => {
                    let e = this.data.defaultFieldValue;
                    for (let t of s.options) t.selected = t.value === e
                }), this.data.options)) {
                    let e = document.createElement("option");
                    e.textContent = t.displayValue, e.value = t.exportValue, i.value.includes(t.exportValue) && (e.setAttribute("selected", !0), r = !1), s.append(e)
                }
                let n = null;
                if (r) {
                    let t = document.createElement("option");
                    t.value = " ", t.setAttribute("hidden", !0), t.setAttribute("selected", !0), s.prepend(t), n = () => {
                        t.remove(), s.removeEventListener("input", n), n = null
                    }, s.addEventListener("input", n)
                }
                let a = t => {
                    let e = t ? "value" : "textContent", {options: i, multiple: r} = s;
                    return r ? Array.prototype.filter.call(i, t => t.selected).map(t => t[e]) : -1 === i.selectedIndex ? null : i[i.selectedIndex][e]
                }, o = a(!1), l = t => {
                    let e = t.target.options;
                    return Array.prototype.map.call(e, t => ({displayValue: t.textContent, exportValue: t.value}))
                };
                return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", i => {
                    this._dispatchEventFromSandbox({
                        value(i) {
                            n?.();
                            let r = i.detail.value, l = new Set(Array.isArray(r) ? r : [r]);
                            for (let t of s.options) t.selected = l.has(t.value);
                            t.setValue(e, {value: a(!0)}), o = a(!1)
                        }, multipleSelection(t) {
                            s.multiple = !0
                        }, remove(i) {
                            let r = s.options, n = i.detail.remove;
                            r[n].selected = !1, s.remove(n), r.length > 0 && -1 === Array.prototype.findIndex.call(r, t => t.selected) && (r[0].selected = !0), t.setValue(e, {
                                value: a(!0),
                                items: l(i)
                            }), o = a(!1)
                        }, clear(i) {
                            for (; 0 !== s.length;) s.remove(0);
                            t.setValue(e, {value: null, items: []}), o = a(!1)
                        }, insert(i) {
                            let {index: r, displayValue: n, exportValue: h} = i.detail.insert, d = s.children[r],
                                c = document.createElement("option");
                            c.textContent = n, c.value = h, d ? d.before(c) : s.append(c), t.setValue(e, {
                                value: a(!0),
                                items: l(i)
                            }), o = a(!1)
                        }, items(i) {
                            let {items: r} = i.detail;
                            for (; 0 !== s.length;) s.remove(0);
                            for (let t of r) {
                                let {displayValue: e, exportValue: i} = t, r = document.createElement("option");
                                r.textContent = e, r.value = i, s.append(r)
                            }
                            s.options.length > 0 && (s.options[0].selected = !0), t.setValue(e, {
                                value: a(!0),
                                items: l(i)
                            }), o = a(!1)
                        }, indices(i) {
                            let s = new Set(i.detail.indices);
                            for (let t of i.target.options) t.selected = s.has(t.index);
                            t.setValue(e, {value: a(!0)}), o = a(!1)
                        }, editable(t) {
                            t.target.disabled = !t.detail.editable
                        }
                    }, i)
                }), s.addEventListener("input", i => {
                    let s = a(!0), r = a(!1);
                    t.setValue(e, {value: s}), i.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                            id: e,
                            name: "Keystroke",
                            value: o,
                            change: r,
                            changeEx: s,
                            willCommit: !1,
                            commitKey: 1,
                            keyDown: !1
                        }
                    })
                }), this._setEventListeners(s, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], t => t.target.value)) : s.addEventListener("input", function (i) {
                    t.setValue(e, {value: a(!0)})
                }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container
            }
        }

        class iS extends ig {
            constructor(t) {
                let {data: e, elements: i} = t;
                super(t, {isRenderable: ig._hasPopupData(e)}), this.elements = i, this.popup = null
            }

            render() {
                this.container.classList.add("popupAnnotation");
                let t = this.popup = new iC({
                    container: this.container,
                    color: this.data.color,
                    titleObj: this.data.titleObj,
                    modificationDate: this.data.modificationDate,
                    contentsObj: this.data.contentsObj,
                    richText: this.data.richText,
                    rect: this.data.rect,
                    parentRect: this.data.parentRect || null,
                    parent: this.parent,
                    elements: this.elements,
                    open: this.data.open
                }), e = [];
                for (let i of this.elements) i.popup = t, e.push(i.data.id), i.addHighlightArea();
                return this.container.setAttribute("aria-controls", e.map(t => `${Y}${t}`).join(",")), this.container
            }
        }

        class iC {
            #iq = this.#iW.bind(this);
            #iK = this.#iX.bind(this);
            #iY = this.#iQ.bind(this);
            #iJ = this.#iZ.bind(this);
            #i0 = null;
            #tL = null;
            #i1 = null;
            #i2 = null;
            #i5 = null;
            #i4 = null;
            #i3 = null;
            #i6 = !1;
            #i9 = null;
            #H = null;
            #i7 = null;
            #i8 = null;
            #st = null;
            #iH = null;
            #se = !1;

            constructor({
                            container: t,
                            color: e,
                            elements: i,
                            titleObj: s,
                            modificationDate: r,
                            contentsObj: n,
                            richText: a,
                            parent: o,
                            rect: l,
                            parentRect: h,
                            open: d
                        }) {
                for (let d of (this.#tL = t, this.#st = s, this.#i1 = n, this.#i8 = a, this.#i4 = o, this.#i0 = e, this.#i7 = l, this.#i3 = h, this.#i5 = i, this.#i2 = t_.toDateObject(r), this.trigger = i.flatMap(t => t.getElementsToTriggerPopup()), this.trigger)) d.addEventListener("click", this.#iJ), d.addEventListener("mouseenter", this.#iY), d.addEventListener("mouseleave", this.#iK), d.classList.add("popupTriggerArea");
                for (let t of i) t.container?.addEventListener("keydown", this.#iq);
                this.#tL.hidden = !0, d && this.#iZ()
            }

            render() {
                if (this.#i9) return;
                let t = this.#i9 = document.createElement("div");
                if (t.className = "popup", this.#i0) {
                    let e = t.style.outlineColor = q.makeHexColor(...this.#i0);
                    CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)` : t.style.backgroundColor = q.makeHexColor(...this.#i0.map(t => Math.floor(.7 * (255 - t) + t)))
                }
                let e = document.createElement("span");
                e.className = "header";
                let i = document.createElement("h1");
                if (e.append(i), {dir: i.dir, str: i.textContent} = this.#st, t.append(e), this.#i2) {
                    let t = document.createElement("span");
                    t.classList.add("popupDate"), t.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), t.setAttribute("data-l10n-args", JSON.stringify({
                        date: this.#i2.toLocaleDateString(),
                        time: this.#i2.toLocaleTimeString()
                    })), e.append(t)
                }
                let s = this.#si;
                if (s) id.render({
                    xfaHtml: s,
                    intent: "richText",
                    div: t
                }), t.lastChild.classList.add("richText", "popupContent"); else {
                    let e = this._formatContents(this.#i1);
                    t.append(e)
                }
                this.#tL.append(t)
            }

            get #si() {
                let t = this.#i8, e = this.#i1;
                return t?.str && (!e?.str || e.str === t.str) && this.#i8.html || null
            }

            get #ss() {
                return this.#si?.attributes?.style?.fontSize || 0
            }

            get #sr() {
                return this.#si?.attributes?.style?.color || null
            }

            #sn(t) {
                let e = [], i = {
                    style: {
                        color: this.#sr,
                        fontSize: this.#ss ? `calc(${this.#ss}px * var(--scale-factor))` : ""
                    }
                };
                for (let s of t.split("\n")) e.push({name: "span", value: s, attributes: i});
                return {str: t, html: {name: "div", attributes: {dir: "auto"}, children: [{name: "p", children: e}]}}
            }

            _formatContents({str: t, dir: e}) {
                let i = document.createElement("p");
                i.classList.add("popupContent"), i.dir = e;
                let s = t.split(/(?:\r\n?|\n)/);
                for (let t = 0, e = s.length; t < e; ++t) {
                    let r = s[t];
                    i.append(document.createTextNode(r)), t < e - 1 && i.append(document.createElement("br"))
                }
                return i
            }

            #iW(t) {
                t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || "Enter" !== t.key && ("Escape" !== t.key || !this.#i6) || this.#iZ()
            }

            updateEdited({rect: t, popupContent: e}) {
                this.#iH ||= {
                    contentsObj: this.#i1,
                    richText: this.#i8
                }, t && (this.#H = null), e && (this.#i8 = this.#sn(e), this.#i1 = null), this.#i9?.remove(), this.#i9 = null
            }

            resetEdited() {
                this.#iH && ({
                    contentsObj: this.#i1,
                    richText: this.#i8
                } = this.#iH, this.#iH = null, this.#i9?.remove(), this.#i9 = null, this.#H = null)
            }

            #sa() {
                if (null !== this.#H) return;
                let {
                    page: {view: t},
                    viewport: {rawDims: {pageWidth: e, pageHeight: i, pageX: s, pageY: r}}
                } = this.#i4, n = !!this.#i3, a = n ? this.#i3 : this.#i7;
                for (let t of this.#i5) if (!a || null !== q.intersect(t.data.rect, a)) {
                    a = t.data.rect, n = !0;
                    break
                }
                let o = q.normalizeRect([a[0], t[3] - a[1] + t[1], a[2], t[3] - a[3] + t[1]]),
                    l = n ? a[2] - a[0] + 5 : 0, h = o[0] + l, d = o[1];
                this.#H = [100 * (h - s) / e, 100 * (d - r) / i];
                let {style: c} = this.#tL;
                c.left = `${this.#H[0]}%`, c.top = `${this.#H[1]}%`
            }

            #iZ() {
                this.#i6 = !this.#i6, this.#i6 ? (this.#iQ(), this.#tL.addEventListener("click", this.#iJ), this.#tL.addEventListener("keydown", this.#iq)) : (this.#iX(), this.#tL.removeEventListener("click", this.#iJ), this.#tL.removeEventListener("keydown", this.#iq))
            }

            #iQ() {
                this.#i9 || this.render(), this.isVisible ? this.#i6 && this.#tL.classList.add("focused") : (this.#sa(), this.#tL.hidden = !1, this.#tL.style.zIndex = parseInt(this.#tL.style.zIndex) + 1e3)
            }

            #iX() {
                this.#tL.classList.remove("focused"), !this.#i6 && this.isVisible && (this.#tL.hidden = !0, this.#tL.style.zIndex = parseInt(this.#tL.style.zIndex) - 1e3)
            }

            forceHide() {
                this.#se = this.isVisible, this.#se && (this.#tL.hidden = !0)
            }

            maybeShow() {
                this.#se && (this.#i9 || this.#iQ(), this.#se = !1, this.#tL.hidden = !1)
            }

            get isVisible() {
                return !1 === this.#tL.hidden
            }
        }

        class iT extends ig {
            constructor(t) {
                super(t, {
                    isRenderable: !0,
                    ignoreBorder: !0
                }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = f.FREETEXT
            }

            render() {
                if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                    let t = document.createElement("div");
                    for (let e of (t.classList.add("annotationTextContent"), t.setAttribute("role", "comment"), this.textContent)) {
                        let i = document.createElement("span");
                        i.textContent = e, t.append(i)
                    }
                    this.container.append(t)
                }
                return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container
            }

            get _isEditable() {
                return this.data.hasOwnCanvas
            }
        }

        class iM extends ig {
            #so = null;

            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0})
            }

            render() {
                this.container.classList.add("lineAnnotation");
                let t = this.data, {width: e, height: i} = iu(t.rect), s = this.svgFactory.create(e, i, !0),
                    r = this.#so = this.svgFactory.createElement("svg:line");
                return r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), r.setAttribute("stroke-width", t.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t.popupRef && this.hasPopupData && this._createPopup(), this.container
            }

            getElementsToTriggerPopup() {
                return this.#so
            }

            addHighlightArea() {
                this.container.classList.add("highlightArea")
            }
        }

        class iR extends ig {
            #sl = null;

            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0})
            }

            render() {
                this.container.classList.add("squareAnnotation");
                let t = this.data, {width: e, height: i} = iu(t.rect), s = this.svgFactory.create(e, i, !0),
                    r = t.borderStyle.width, n = this.#sl = this.svgFactory.createElement("svg:rect");
                return n.setAttribute("x", r / 2), n.setAttribute("y", r / 2), n.setAttribute("width", e - r), n.setAttribute("height", i - r), n.setAttribute("stroke-width", r || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), s.append(n), this.container.append(s), !t.popupRef && this.hasPopupData && this._createPopup(), this.container
            }

            getElementsToTriggerPopup() {
                return this.#sl
            }

            addHighlightArea() {
                this.container.classList.add("highlightArea")
            }
        }

        class ik extends ig {
            #sh = null;

            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0})
            }

            render() {
                this.container.classList.add("circleAnnotation");
                let t = this.data, {width: e, height: i} = iu(t.rect), s = this.svgFactory.create(e, i, !0),
                    r = t.borderStyle.width, n = this.#sh = this.svgFactory.createElement("svg:ellipse");
                return n.setAttribute("cx", e / 2), n.setAttribute("cy", i / 2), n.setAttribute("rx", e / 2 - r / 2), n.setAttribute("ry", i / 2 - r / 2), n.setAttribute("stroke-width", r || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), s.append(n), this.container.append(s), !t.popupRef && this.hasPopupData && this._createPopup(), this.container
            }

            getElementsToTriggerPopup() {
                return this.#sh
            }

            addHighlightArea() {
                this.container.classList.add("highlightArea")
            }
        }

        class iL extends ig {
            #sd = null;

            constructor(t) {
                super(t, {
                    isRenderable: !0,
                    ignoreBorder: !0
                }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline"
            }

            render() {
                this.container.classList.add(this.containerClassName);
                let {data: {rect: t, vertices: e, borderStyle: i, popupRef: s}} = this;
                if (!e) return this.container;
                let {width: r, height: n} = iu(t), a = this.svgFactory.create(r, n, !0), o = [];
                for (let i = 0, s = e.length; i < s; i += 2) {
                    let s = e[i] - t[0], r = t[3] - e[i + 1];
                    o.push(`${s},${r}`)
                }
                o = o.join(" ");
                let l = this.#sd = this.svgFactory.createElement(this.svgElementName);
                return l.setAttribute("points", o), l.setAttribute("stroke-width", i.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), a.append(l), this.container.append(a), !s && this.hasPopupData && this._createPopup(), this.container
            }

            getElementsToTriggerPopup() {
                return this.#sd
            }

            addHighlightArea() {
                this.container.classList.add("highlightArea")
            }
        }

        class iI extends iL {
            constructor(t) {
                super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon"
            }
        }

        class iP extends ig {
            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0})
            }

            render() {
                return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container
            }
        }

        class iD extends ig {
            #sc = [];

            constructor(t) {
                super(t, {
                    isRenderable: !0,
                    ignoreBorder: !0
                }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = f.INK
            }

            render() {
                this.container.classList.add(this.containerClassName);
                let {data: {rect: t, inkLists: e, borderStyle: i, popupRef: s}} = this, {width: r, height: n} = iu(t),
                    a = this.svgFactory.create(r, n, !0);
                for (let r of e) {
                    let e = [];
                    for (let i = 0, s = r.length; i < s; i += 2) {
                        let s = r[i] - t[0], n = t[3] - r[i + 1];
                        e.push(`${s},${n}`)
                    }
                    e = e.join(" ");
                    let n = this.svgFactory.createElement(this.svgElementName);
                    this.#sc.push(n), n.setAttribute("points", e), n.setAttribute("stroke-width", i.width || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), !s && this.hasPopupData && this._createPopup(), a.append(n)
                }
                return this.container.append(a), this.container
            }

            getElementsToTriggerPopup() {
                return this.#sc
            }

            addHighlightArea() {
                this.container.classList.add("highlightArea")
            }
        }

        class iF extends ig {
            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
            }

            render() {
                return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container
            }
        }

        class iO extends ig {
            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
            }

            render() {
                return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container
            }
        }

        class iN extends ig {
            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
            }

            render() {
                return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container
            }
        }

        class iB extends ig {
            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
            }

            render() {
                return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container
            }
        }

        class iH extends ig {
            constructor(t) {
                super(t, {isRenderable: !0, ignoreBorder: !0})
            }

            render() {
                return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container
            }
        }

        class iz extends ig {
            #su = null;

            constructor(t) {
                super(t, {isRenderable: !0});
                let {file: e} = this.data;
                this.filename = e.filename, this.content = e.content, this.linkService.eventBus?.dispatch("fileattachmentannotation", {source: this, ...e})
            }

            render() {
                let t;
                this.container.classList.add("fileAttachmentAnnotation");
                let {container: e, data: i} = this;
                i.hasAppearance || 0 === i.fillAlpha ? t = document.createElement("div") : ((t = document.createElement("img")).src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? "paperclip" : "pushpin"}.svg`, i.fillAlpha && i.fillAlpha < 1 && (t.style = `filter: opacity(${Math.round(100 * i.fillAlpha)}%);`)), t.addEventListener("dblclick", this.#sp.bind(this)), this.#su = t;
                let {isMac: s} = G.platform;
                return e.addEventListener("keydown", t => {
                    "Enter" === t.key && (s ? t.metaKey : t.ctrlKey) && this.#sp()
                }), !i.popupRef && this.hasPopupData ? this._createPopup() : t.classList.add("popupTriggerArea"), e.append(t), e
            }

            getElementsToTriggerPopup() {
                return this.#su
            }

            addHighlightArea() {
                this.container.classList.add("highlightArea")
            }

            #sp() {
                this.downloadManager?.openOrDownloadData(this.content, this.filename)
            }
        }

        class ij {
            #sg = null;
            #sf = null;
            #sm = new Map;

            constructor({
                            div: t,
                            accessibilityManager: e,
                            annotationCanvasMap: i,
                            annotationEditorUIManager: s,
                            page: r,
                            viewport: n
                        }) {
                this.div = t, this.#sg = e, this.#sf = i, this.page = r, this.viewport = n, this.zIndex = 0, this._annotationEditorUIManager = s
            }

            #sv(t, e) {
                let i = t.firstChild || t;
                i.id = `${Y}${e}`, this.div.append(t), this.#sg?.moveElementInDOM(this.div, t, i, !1)
            }

            async render(t) {
                let {annotations: e} = t, i = this.div;
                tC(i, this.viewport);
                let s = new Map, r = {
                    data: null,
                    layer: i,
                    linkService: t.linkService,
                    downloadManager: t.downloadManager,
                    imageResourcesPath: t.imageResourcesPath || "",
                    renderForms: !1 !== t.renderForms,
                    svgFactory: new td,
                    annotationStorage: t.annotationStorage || new tj,
                    enableScripting: !0 === t.enableScripting,
                    hasJSActions: t.hasJSActions,
                    fieldObjects: t.fieldObjects,
                    parent: this,
                    elements: null
                };
                for (let t of e) {
                    if (t.noHTML) continue;
                    let e = t.annotationType === y.POPUP;
                    if (e) {
                        let e = s.get(t.id);
                        if (!e) continue;
                        r.elements = e
                    } else {
                        let {width: e, height: i} = iu(t.rect);
                        if (e <= 0 || i <= 0) continue
                    }
                    r.data = t;
                    let i = ip.create(r);
                    if (!i.isRenderable) continue;
                    if (!e && t.popupRef) {
                        let e = s.get(t.popupRef);
                        e ? e.push(i) : s.set(t.popupRef, [i])
                    }
                    let n = i.render();
                    t.hidden && (n.style.visibility = "hidden"), this.#sv(n, t.id), i.annotationEditorType > 0 && (this.#sm.set(i.data.id, i), this._annotationEditorUIManager?.renderAnnotationElement(i))
                }
                this.#sb()
            }

            update({viewport: t}) {
                let e = this.div;
                this.viewport = t, tC(e, {rotation: t.rotation}), this.#sb(), e.hidden = !1
            }

            #sb() {
                if (!this.#sf) return;
                let t = this.div;
                for (let [e, i] of this.#sf) {
                    let s = t.querySelector(`[data-annotation-id="${e}"]`);
                    if (!s) continue;
                    i.className = "annotationContent";
                    let {firstChild: r} = s;
                    r ? "CANVAS" === r.nodeName ? r.replaceWith(i) : r.classList.contains("annotationContent") ? r.after(i) : r.before(i) : s.append(i)
                }
                this.#sf.clear()
            }

            getEditableAnnotations() {
                return Array.from(this.#sm.values())
            }

            getEditableAnnotation(t) {
                return this.#sm.get(t)
            }
        }

        let iU = /\r\n?|\n/g;

        class i$ extends tN {
            #sA = this.editorDivBlur.bind(this);
            #sy = this.editorDivFocus.bind(this);
            #s_ = this.editorDivInput.bind(this);
            #sw = this.editorDivKeydown.bind(this);
            #sx = this.editorDivPaste.bind(this);
            #i0;
            #sE = "";
            #sS = `${this.id}-editor`;
            #ss;
            #sC = null;
            static _freeTextDefaultContent = "";
            static _internalPadding = 0;
            static _defaultColor = null;
            static _defaultFontSize = 10;

            static get _keyboardManager() {
                let t = i$.prototype, e = t => t.isEmpty(), i = tF.TRANSLATE_SMALL, s = tF.TRANSLATE_BIG;
                return I(this, "_keyboardManager", new tP([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, {bubbles: !0}], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, {
                    args: [-i, 0],
                    checker: e
                }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, {
                    args: [-s, 0],
                    checker: e
                }], [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, {
                    args: [i, 0],
                    checker: e
                }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, {
                    args: [s, 0],
                    checker: e
                }], [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, {
                    args: [0, -i],
                    checker: e
                }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, {
                    args: [0, -s],
                    checker: e
                }], [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, {
                    args: [0, i],
                    checker: e
                }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, {args: [0, s], checker: e}]]))
            }

            static _type = "freetext";
            static _editorType = f.FREETEXT;

            constructor(t) {
                super({
                    ...t,
                    name: "freeTextEditor"
                }), this.#i0 = t.color || i$._defaultColor || tN._defaultLineColor, this.#ss = t.fontSize || i$._defaultFontSize
            }

            static initialize(t, e) {
                tN.initialize(t, e, {strings: ["pdfjs-free-text-default-content"]});
                let i = getComputedStyle(document.documentElement);
                this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"))
            }

            static updateDefaultParams(t, e) {
                switch (t) {
                    case m.FREETEXT_SIZE:
                        i$._defaultFontSize = e;
                        break;
                    case m.FREETEXT_COLOR:
                        i$._defaultColor = e
                }
            }

            updateParams(t, e) {
                switch (t) {
                    case m.FREETEXT_SIZE:
                        this.#sT(e);
                        break;
                    case m.FREETEXT_COLOR:
                        this.#sM(e)
                }
            }

            static get defaultPropertiesToUpdate() {
                return [[m.FREETEXT_SIZE, i$._defaultFontSize], [m.FREETEXT_COLOR, i$._defaultColor || tN._defaultLineColor]]
            }

            get propertiesToUpdate() {
                return [[m.FREETEXT_SIZE, this.#ss], [m.FREETEXT_COLOR, this.#i0]]
            }

            #sT(t) {
                let e = t => {
                    this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`, this.translate(0, -(t - this.#ss) * this.parentScale), this.#ss = t, this.#sR()
                }, i = this.#ss;
                this.addCommands({
                    cmd: e.bind(this, t),
                    undo: e.bind(this, i),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.FREETEXT_SIZE,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                })
            }

            #sM(t) {
                let e = t => {
                    this.#i0 = this.editorDiv.style.color = t
                }, i = this.#i0;
                this.addCommands({
                    cmd: e.bind(this, t),
                    undo: e.bind(this, i),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.FREETEXT_COLOR,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                })
            }

            _translateEmpty(t, e) {
                this._uiManager.translateSelectedEditors(t, e, !0)
            }

            getInitialTranslation() {
                let t = this.parentScale;
                return [-i$._internalPadding * t, -(i$._internalPadding + this.#ss) * t]
            }

            rebuild() {
                this.parent && (super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this)))
            }

            enableEditMode() {
                if (this.isInEditMode()) return;
                this.parent.setEditingState(!1), this.parent.updateToolbar(f.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant");
                let t = this._uiManager._signal;
                this.editorDiv.addEventListener("keydown", this.#sw, {signal: t}), this.editorDiv.addEventListener("focus", this.#sy, {signal: t}), this.editorDiv.addEventListener("blur", this.#sA, {signal: t}), this.editorDiv.addEventListener("input", this.#s_, {signal: t}), this.editorDiv.addEventListener("paste", this.#sx, {signal: t})
            }

            disableEditMode() {
                this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", this.#sS), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", this.#sw), this.editorDiv.removeEventListener("focus", this.#sy), this.editorDiv.removeEventListener("blur", this.#sA), this.editorDiv.removeEventListener("input", this.#s_), this.editorDiv.removeEventListener("paste", this.#sx), this.div.focus({preventScroll: !0}), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"))
            }

            focusin(t) {
                this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus())
            }

            onceAdded() {
                this.width || (this.enableEditMode(), this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null)
            }

            isEmpty() {
                return !this.editorDiv || "" === this.editorDiv.innerText.trim()
            }

            remove() {
                this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove()
            }

            #sk() {
                let t = [];
                for (let e of (this.editorDiv.normalize(), this.editorDiv.childNodes)) t.push(i$.#sL(e));
                return t.join("\n")
            }

            #sR() {
                let t;
                let [e, i] = this.parentDimensions;
                if (this.isAttachedToDOM) t = this.div.getBoundingClientRect(); else {
                    let {currentLayer: e, div: i} = this, s = i.style.display, r = i.classList.contains("hidden");
                    i.classList.remove("hidden"), i.style.display = "hidden", e.div.append(this.div), t = i.getBoundingClientRect(), i.remove(), i.style.display = s, i.classList.toggle("hidden", r)
                }
                this.rotation % 180 == this.parentRotation % 180 ? (this.width = t.width / e, this.height = t.height / i) : (this.width = t.height / e, this.height = t.width / i), this.fixAndSetPosition()
            }

            commit() {
                if (!this.isInEditMode()) return;
                super.commit(), this.disableEditMode();
                let t = this.#sE, e = this.#sE = this.#sk().trimEnd();
                if (t === e) return;
                let i = t => {
                    if (this.#sE = t, !t) {
                        this.remove();
                        return
                    }
                    this.#sI(), this._uiManager.rebuild(this), this.#sR()
                };
                this.addCommands({
                    cmd: () => {
                        i(e)
                    }, undo: () => {
                        i(t)
                    }, mustExec: !1
                }), this.#sR()
            }

            shouldGetKeyboardEvents() {
                return this.isInEditMode()
            }

            enterInEditMode() {
                this.enableEditMode(), this.editorDiv.focus()
            }

            dblclick(t) {
                this.enterInEditMode()
            }

            keydown(t) {
                t.target === this.div && "Enter" === t.key && (this.enterInEditMode(), t.preventDefault())
            }

            editorDivKeydown(t) {
                i$._keyboardManager.exec(this, t)
            }

            editorDivFocus(t) {
                this.isEditing = !0
            }

            editorDivBlur(t) {
                this.isEditing = !1
            }

            editorDivInput(t) {
                this.parent.div.classList.toggle("freetextEditing", this.isEmpty())
            }

            disableEditing() {
                this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline")
            }

            enableEditing() {
                this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0)
            }

            render() {
                let t, e;
                if (this.div) return this.div;
                this.width && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#sS), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), tN._l10nPromise.get("pdfjs-free-text-default-content").then(t => this.editorDiv?.setAttribute("default-content", t)), this.editorDiv.contentEditable = !0;
                let {style: i} = this.editorDiv;
                if (i.fontSize = `calc(${this.#ss}px * var(--scale-factor))`, i.color = this.#i0, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), tR(this, this.div, ["dblclick", "keydown"]), this.width) {
                    let [i, s] = this.parentDimensions;
                    if (this.annotationElementId) {
                        let r, n;
                        let {position: a} = this.#sC, [o, l] = this.getInitialTranslation();
                        [o, l] = this.pageTranslationToScreen(o, l);
                        let [h, d] = this.pageDimensions, [c, u] = this.pageTranslation;
                        switch (this.rotation) {
                            case 0:
                                r = t + (a[0] - c) / h, n = e + this.height - (a[1] - u) / d;
                                break;
                            case 90:
                                r = t + (a[0] - c) / h, n = e - (a[1] - u) / d, [o, l] = [l, -o];
                                break;
                            case 180:
                                r = t - this.width + (a[0] - c) / h, n = e - (a[1] - u) / d, [o, l] = [-o, -l];
                                break;
                            case 270:
                                r = t + (a[0] - c - this.height * d) / h, n = e + (a[1] - u - this.width * h) / d, [o, l] = [-l, o]
                        }
                        this.setAt(r * i, n * s, o, l)
                    } else this.setAt(t * i, e * s, this.width * i, this.height * s);
                    this.#sI(), this._isDraggable = !0, this.editorDiv.contentEditable = !1
                } else this._isDraggable = !1, this.editorDiv.contentEditable = !0;
                return this.div
            }

            static #sL(t) {
                return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(iU, "")
            }

            editorDivPaste(t) {
                let e = t.clipboardData || window.clipboardData, {types: i} = e;
                if (1 === i.length && "text/plain" === i[0]) return;
                t.preventDefault();
                let s = i$.#sP(e.getData("text") || "").replaceAll(iU, "\n");
                if (!s) return;
                let r = window.getSelection();
                if (!r.rangeCount) return;
                this.editorDiv.normalize(), r.deleteFromDocument();
                let n = r.getRangeAt(0);
                if (!s.includes("\n")) {
                    n.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), r.collapseToStart();
                    return
                }
                let {startContainer: a, startOffset: o} = n, l = [], h = [];
                if (a.nodeType === Node.TEXT_NODE) {
                    let t = a.parentElement;
                    if (h.push(a.nodeValue.slice(o).replaceAll(iU, "")), t !== this.editorDiv) {
                        let e = l;
                        for (let i of this.editorDiv.childNodes) {
                            if (i === t) {
                                e = h;
                                continue
                            }
                            e.push(i$.#sL(i))
                        }
                    }
                    l.push(a.nodeValue.slice(0, o).replaceAll(iU, ""))
                } else if (a === this.editorDiv) {
                    let t = l, e = 0;
                    for (let i of this.editorDiv.childNodes) e++ === o && (t = h), t.push(i$.#sL(i))
                }
                this.#sE = `${l.join("\n")}${s}${h.join("\n")}`, this.#sI();
                let d = new Range, c = l.reduce((t, e) => t + e.length, 0);
                for (let {firstChild: t} of this.editorDiv.childNodes) if (t.nodeType === Node.TEXT_NODE) {
                    let e = t.nodeValue.length;
                    if (c <= e) {
                        d.setStart(t, c), d.setEnd(t, c);
                        break
                    }
                    c -= e
                }
                r.removeAllRanges(), r.addRange(d)
            }

            #sI() {
                if (this.editorDiv.replaceChildren(), this.#sE) for (let t of this.#sE.split("\n")) {
                    let e = document.createElement("div");
                    e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e)
                }
            }

            #sD() {
                return this.#sE.replaceAll("\xa0", " ")
            }

            static #sP(t) {
                return t.replaceAll(" ", "\xa0")
            }

            get contentDiv() {
                return this.editorDiv
            }

            static deserialize(t, e, i) {
                let s = null;
                if (t instanceof iT) {
                    let {
                        data: {defaultAppearanceData: {fontSize: e, fontColor: i}, rect: r, rotation: n, id: a},
                        textContent: o,
                        textPosition: l,
                        parent: {page: {pageNumber: h}}
                    } = t;
                    if (!o || 0 === o.length) return null;
                    s = t = {
                        annotationType: f.FREETEXT,
                        color: Array.from(i),
                        fontSize: e,
                        value: o.join("\n"),
                        position: l,
                        pageIndex: h - 1,
                        rect: r.slice(0),
                        rotation: n,
                        id: a,
                        deleted: !1
                    }
                }
                let r = super.deserialize(t, e, i);
                return r.#ss = t.fontSize, r.#i0 = q.makeHexColor(...t.color), r.#sE = i$.#sP(t.value), r.annotationElementId = t.id || null, r.#sC = s, r
            }

            serialize(t = !1) {
                if (this.isEmpty()) return null;
                if (this.deleted) return {pageIndex: this.pageIndex, id: this.annotationElementId, deleted: !0};
                let e = i$._internalPadding * this.parentScale, i = this.getRect(e, e),
                    s = tN._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#i0),
                    r = {
                        annotationType: f.FREETEXT,
                        color: s,
                        fontSize: this.#ss,
                        value: this.#sD(),
                        pageIndex: this.pageIndex,
                        rect: i,
                        rotation: this.rotation,
                        structTreeParentId: this._structTreeParentId
                    };
                return t ? r : this.annotationElementId && !this.#sF(r) ? null : (r.id = this.annotationElementId, r)
            }

            #sF(t) {
                let {value: e, fontSize: i, color: s, pageIndex: r} = this.#sC;
                return this._hasBeenMoved || t.value !== e || t.fontSize !== i || t.color.some((t, e) => t !== s[e]) || t.pageIndex !== r
            }

            renderAnnotationElement(t) {
                let e = super.renderAnnotationElement(t);
                if (this.deleted) return e;
                let {style: i} = e;
                for (let t of (i.fontSize = `calc(${this.#ss}px * var(--scale-factor))`, i.color = this.#i0, e.replaceChildren(), this.#sE.split("\n"))) {
                    let i = document.createElement("div");
                    i.append(t ? document.createTextNode(t) : document.createElement("br")), e.append(i)
                }
                let s = i$._internalPadding * this.parentScale;
                return t.updateEdited({rect: this.getRect(s, s), popupContent: this.#sE}), e
            }

            resetAnnotationElement(t) {
                super.resetAnnotationElement(t), t.resetEdited()
            }
        }

        class iG {
            #sO;
            #sN = [];
            #sB = [];

            constructor(t, e = 0, i = 0, s = !0) {
                let r = 1 / 0, n = -1 / 0, a = 1 / 0, o = -1 / 0;
                for (let {x: i, y: s, width: l, height: h} of t) {
                    let t = 1e-4 * Math.floor((i - e) / 1e-4), d = 1e-4 * Math.ceil((i + l + e) / 1e-4),
                        c = 1e-4 * Math.floor((s - e) / 1e-4), u = 1e-4 * Math.ceil((s + h + e) / 1e-4),
                        p = [t, c, u, !0], g = [d, c, u, !1];
                    this.#sN.push(p, g), r = Math.min(r, t), n = Math.max(n, d), a = Math.min(a, c), o = Math.max(o, u)
                }
                let l = n - r + 2 * i, h = o - a + 2 * i, d = r - i, c = a - i, u = this.#sN.at(s ? -1 : -2),
                    p = [u[0], u[2]];
                for (let t of this.#sN) {
                    let [e, i, s] = t;
                    t[0] = (e - d) / l, t[1] = (i - c) / h, t[2] = (s - c) / h
                }
                this.#sO = {x: d, y: c, width: l, height: h, lastPoint: p}
            }

            getOutlines() {
                this.#sN.sort((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]);
                let t = [];
                for (let e of this.#sN) e[3] ? (t.push(...this.#sH(e)), this.#sz(e)) : (this.#sj(e), t.push(...this.#sH(e)));
                return this.#sU(t)
            }

            #sU(t) {
                let e;
                let i = [], s = new Set;
                for (let e of t) {
                    let [t, s, r] = e;
                    i.push([t, s, e], [t, r, e])
                }
                i.sort((t, e) => t[1] - e[1] || t[0] - e[0]);
                for (let t = 0, e = i.length; t < e; t += 2) {
                    let e = i[t][2], r = i[t + 1][2];
                    e.push(r), r.push(e), s.add(e), s.add(r)
                }
                let r = [];
                for (; s.size > 0;) {
                    let t = s.values().next().value, [i, n, a, o, l] = t;
                    s.delete(t);
                    let h = i, d = n;
                    for (e = [i, a], r.push(e); ;) {
                        let t;
                        if (s.has(o)) t = o; else if (s.has(l)) t = l; else break;
                        s.delete(t), [i, n, a, o, l] = t, h !== i && (e.push(h, d, i, d === n ? n : a), h = i), d = d === n ? a : n
                    }
                    e.push(h, d)
                }
                return new iq(r, this.#sO)
            }

            #s$(t) {
                let e = this.#sB, i = 0, s = e.length - 1;
                for (; i <= s;) {
                    let r = i + s >> 1, n = e[r][0];
                    if (n === t) return r;
                    n < t ? i = r + 1 : s = r - 1
                }
                return s + 1
            }

            #sz([, t, e]) {
                let i = this.#s$(t);
                this.#sB.splice(i, 0, [t, e])
            }

            #sj([, t, e]) {
                let i = this.#s$(t);
                for (let s = i; s < this.#sB.length; s++) {
                    let [i, r] = this.#sB[s];
                    if (i !== t) break;
                    if (i === t && r === e) {
                        this.#sB.splice(s, 1);
                        return
                    }
                }
                for (let s = i - 1; s >= 0; s--) {
                    let [i, r] = this.#sB[s];
                    if (i !== t) break;
                    if (i === t && r === e) {
                        this.#sB.splice(s, 1);
                        return
                    }
                }
            }

            #sH(t) {
                let [e, i, s] = t, r = [[e, i, s]], n = this.#s$(s);
                for (let t = 0; t < n; t++) {
                    let [i, s] = this.#sB[t];
                    for (let t = 0, n = r.length; t < n; t++) {
                        let [, a, o] = r[t];
                        if (!(s <= a) && !(o <= i)) {
                            if (a >= i) {
                                if (o > s) r[t][1] = s; else {
                                    if (1 === n) return [];
                                    r.splice(t, 1), t--, n--
                                }
                                continue
                            }
                            r[t][2] = i, o > s && r.push([e, s, o])
                        }
                    }
                }
                return r
            }
        }

        class iV {
            toSVGPath() {
                throw Error("Abstract method `toSVGPath` must be implemented.")
            }

            get box() {
                throw Error("Abstract getter `box` must be implemented.")
            }

            serialize(t, e) {
                throw Error("Abstract method `serialize` must be implemented.")
            }

            get free() {
                return this instanceof iK
            }
        }

        class iq extends iV {
            #sO;
            #sG;

            constructor(t, e) {
                super(), this.#sG = t, this.#sO = e
            }

            toSVGPath() {
                let t = [];
                for (let e of this.#sG) {
                    let [i, s] = e;
                    t.push(`M${i} ${s}`);
                    for (let r = 2; r < e.length; r += 2) {
                        let n = e[r], a = e[r + 1];
                        n === i ? (t.push(`V${a}`), s = a) : a === s && (t.push(`H${n}`), i = n)
                    }
                    t.push("Z")
                }
                return t.join(" ")
            }

            serialize([t, e, i, s], r) {
                let n = [], a = i - t, o = s - e;
                for (let e of this.#sG) {
                    let i = Array(e.length);
                    for (let r = 0; r < e.length; r += 2) i[r] = t + e[r] * a, i[r + 1] = s - e[r + 1] * o;
                    n.push(i)
                }
                return n
            }

            get box() {
                return this.#sO
            }
        }

        class iW {
            #sO;
            #sV = [];
            #sq;
            #sW;
            #sK = [];
            #sX = new Float64Array(18);
            #sY;
            #sQ;
            #sJ;
            #sZ;
            #s0;
            #s1;
            #s2 = [];
            static #s5 = 8;
            static #s4 = 2;
            static #s3 = iW.#s5 + iW.#s4;

            constructor({x: t, y: e}, i, s, r, n, a = 0) {
                this.#sO = i, this.#s1 = r * s, this.#sW = n, this.#sX.set([NaN, NaN, NaN, NaN, t, e], 6), this.#sq = a, this.#sZ = iW.#s5 * s, this.#sJ = iW.#s3 * s, this.#s0 = s, this.#s2.push(t, e)
            }

            get free() {
                return !0
            }

            isEmpty() {
                return isNaN(this.#sX[8])
            }

            #s6() {
                let t = this.#sX.subarray(4, 6), e = this.#sX.subarray(16, 18), [i, s, r, n] = this.#sO;
                return [(this.#sY + (t[0] - e[0]) / 2 - i) / r, (this.#sQ + (t[1] - e[1]) / 2 - s) / n, (this.#sY + (e[0] - t[0]) / 2 - i) / r, (this.#sQ + (e[1] - t[1]) / 2 - s) / n]
            }

            add({x: t, y: e}) {
                this.#sY = t, this.#sQ = e;
                let [i, s, r, n] = this.#sO, [a, o, l, h] = this.#sX.subarray(8, 12), d = t - l, c = e - h,
                    u = Math.hypot(d, c);
                if (u < this.#sJ) return !1;
                let p = u - this.#sZ, g = p / u, f = g * d, m = g * c, v = a, b = o;
                a = l, o = h, l += f, h += m, this.#s2?.push(t, e);
                let A = -m / p * this.#s1, y = f / p * this.#s1;
                return (this.#sX.set(this.#sX.subarray(2, 8), 0), this.#sX.set([l + A, h + y], 4), this.#sX.set(this.#sX.subarray(14, 18), 12), this.#sX.set([l - A, h - y], 16), isNaN(this.#sX[6])) ? (0 === this.#sK.length && (this.#sX.set([a + A, o + y], 2), this.#sK.push(NaN, NaN, NaN, NaN, (a + A - i) / r, (o + y - s) / n), this.#sX.set([a - A, o - y], 14), this.#sV.push(NaN, NaN, NaN, NaN, (a - A - i) / r, (o - y - s) / n)), this.#sX.set([v, b, a, o, l, h], 6), !this.isEmpty()) : ((this.#sX.set([v, b, a, o, l, h], 6), Math.abs(Math.atan2(b - o, v - a) - Math.atan2(m, f)) < Math.PI / 2) ? ([a, o, l, h] = this.#sX.subarray(2, 6), this.#sK.push(NaN, NaN, NaN, NaN, ((a + l) / 2 - i) / r, ((o + h) / 2 - s) / n), [a, o, v, b] = this.#sX.subarray(14, 18), this.#sV.push(NaN, NaN, NaN, NaN, ((v + a) / 2 - i) / r, ((b + o) / 2 - s) / n)) : ([v, b, a, o, l, h] = this.#sX.subarray(0, 6), this.#sK.push(((v + 5 * a) / 6 - i) / r, ((b + 5 * o) / 6 - s) / n, ((5 * a + l) / 6 - i) / r, ((5 * o + h) / 6 - s) / n, ((a + l) / 2 - i) / r, ((o + h) / 2 - s) / n), [l, h, a, o, v, b] = this.#sX.subarray(12, 18), this.#sV.push(((v + 5 * a) / 6 - i) / r, ((b + 5 * o) / 6 - s) / n, ((5 * a + l) / 6 - i) / r, ((5 * o + h) / 6 - s) / n, ((a + l) / 2 - i) / r, ((o + h) / 2 - s) / n)), !0)
            }

            toSVGPath() {
                if (this.isEmpty()) return "";
                let t = this.#sK, e = this.#sV, i = this.#sX.subarray(4, 6),
                    s = this.#sX.subarray(16, 18), [r, n, a, o] = this.#sO, [l, h, d, c] = this.#s6();
                if (isNaN(this.#sX[6]) && !this.isEmpty()) return `M${(this.#sX[2] - r) / a} ${(this.#sX[3] - n) / o} L${(this.#sX[4] - r) / a} ${(this.#sX[5] - n) / o} L${l} ${h} L${d} ${c} L${(this.#sX[16] - r) / a} ${(this.#sX[17] - n) / o} L${(this.#sX[14] - r) / a} ${(this.#sX[15] - n) / o} Z`;
                let u = [];
                u.push(`M${t[4]} ${t[5]}`);
                for (let e = 6; e < t.length; e += 6) isNaN(t[e]) ? u.push(`L${t[e + 4]} ${t[e + 5]}`) : u.push(`C${t[e]} ${t[e + 1]} ${t[e + 2]} ${t[e + 3]} ${t[e + 4]} ${t[e + 5]}`);
                u.push(`L${(i[0] - r) / a} ${(i[1] - n) / o} L${l} ${h} L${d} ${c} L${(s[0] - r) / a} ${(s[1] - n) / o}`);
                for (let t = e.length - 6; t >= 6; t -= 6) isNaN(e[t]) ? u.push(`L${e[t + 4]} ${e[t + 5]}`) : u.push(`C${e[t]} ${e[t + 1]} ${e[t + 2]} ${e[t + 3]} ${e[t + 4]} ${e[t + 5]}`);
                return u.push(`L${e[4]} ${e[5]} Z`), u.join(" ")
            }

            getOutlines() {
                let t = this.#sK, e = this.#sV, i = this.#sX, s = i.subarray(4, 6),
                    r = i.subarray(16, 18), [n, a, o, l] = this.#sO, h = new Float64Array((this.#s2?.length ?? 0) + 2);
                for (let t = 0, e = h.length - 2; t < e; t += 2) h[t] = (this.#s2[t] - n) / o, h[t + 1] = (this.#s2[t + 1] - a) / l;
                h[h.length - 2] = (this.#sY - n) / o, h[h.length - 1] = (this.#sQ - a) / l;
                let [d, c, u, p] = this.#s6();
                if (isNaN(i[6]) && !this.isEmpty()) {
                    let t = new Float64Array(36);
                    return t.set([NaN, NaN, NaN, NaN, (i[2] - n) / o, (i[3] - a) / l, NaN, NaN, NaN, NaN, (i[4] - n) / o, (i[5] - a) / l, NaN, NaN, NaN, NaN, d, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[16] - n) / o, (i[17] - a) / l, NaN, NaN, NaN, NaN, (i[14] - n) / o, (i[15] - a) / l], 0), new iK(t, h, this.#sO, this.#s0, this.#sq, this.#sW)
                }
                let g = new Float64Array(this.#sK.length + 24 + this.#sV.length), f = t.length;
                for (let e = 0; e < f; e += 2) {
                    if (isNaN(t[e])) {
                        g[e] = g[e + 1] = NaN;
                        continue
                    }
                    g[e] = t[e], g[e + 1] = t[e + 1]
                }
                g.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, d, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (r[0] - n) / o, (r[1] - a) / l], f), f += 24;
                for (let t = e.length - 6; t >= 6; t -= 6) for (let i = 0; i < 6; i += 2) {
                    if (isNaN(e[t + i])) {
                        g[f] = g[f + 1] = NaN, f += 2;
                        continue
                    }
                    g[f] = e[t + i], g[f + 1] = e[t + i + 1], f += 2
                }
                return g.set([NaN, NaN, NaN, NaN, e[4], e[5]], f), new iK(g, h, this.#sO, this.#s0, this.#sq, this.#sW)
            }
        }

        class iK extends iV {
            #sO;
            #s9 = null;
            #sq;
            #sW;
            #s2;
            #s0;
            #s7;

            constructor(t, e, i, s, r, n) {
                super(), this.#s7 = t, this.#s2 = e, this.#sO = i, this.#s0 = s, this.#sq = r, this.#sW = n, this.#s8(n);
                let {x: a, y: o, width: l, height: h} = this.#s9;
                for (let e = 0, i = t.length; e < i; e += 2) t[e] = (t[e] - a) / l, t[e + 1] = (t[e + 1] - o) / h;
                for (let t = 0, i = e.length; t < i; t += 2) e[t] = (e[t] - a) / l, e[t + 1] = (e[t + 1] - o) / h
            }

            toSVGPath() {
                let t = [`M${this.#s7[4]} ${this.#s7[5]}`];
                for (let e = 6, i = this.#s7.length; e < i; e += 6) {
                    if (isNaN(this.#s7[e])) {
                        t.push(`L${this.#s7[e + 4]} ${this.#s7[e + 5]}`);
                        continue
                    }
                    t.push(`C${this.#s7[e]} ${this.#s7[e + 1]} ${this.#s7[e + 2]} ${this.#s7[e + 3]} ${this.#s7[e + 4]} ${this.#s7[e + 5]}`)
                }
                return t.push("Z"), t.join(" ")
            }

            serialize([t, e, i, s], r) {
                let n, a;
                let o = i - t, l = s - e;
                switch (r) {
                    case 0:
                        n = this.#rt(this.#s7, t, s, o, -l), a = this.#rt(this.#s2, t, s, o, -l);
                        break;
                    case 90:
                        n = this.#re(this.#s7, t, e, o, l), a = this.#re(this.#s2, t, e, o, l);
                        break;
                    case 180:
                        n = this.#rt(this.#s7, i, e, -o, l), a = this.#rt(this.#s2, i, e, -o, l);
                        break;
                    case 270:
                        n = this.#re(this.#s7, i, s, -o, -l), a = this.#re(this.#s2, i, s, -o, -l)
                }
                return {outline: Array.from(n), points: [Array.from(a)]}
            }

            #rt(t, e, i, s, r) {
                let n = new Float64Array(t.length);
                for (let a = 0, o = t.length; a < o; a += 2) n[a] = e + t[a] * s, n[a + 1] = i + t[a + 1] * r;
                return n
            }

            #re(t, e, i, s, r) {
                let n = new Float64Array(t.length);
                for (let a = 0, o = t.length; a < o; a += 2) n[a] = e + t[a + 1] * s, n[a + 1] = i + t[a] * r;
                return n
            }

            #s8(t) {
                let e = this.#s7, i = e[4], s = e[5], r = i, n = s, a = i, o = s, l = i, h = s,
                    d = t ? Math.max : Math.min;
                for (let t = 6, c = e.length; t < c; t += 6) {
                    if (isNaN(e[t])) r = Math.min(r, e[t + 4]), n = Math.min(n, e[t + 5]), a = Math.max(a, e[t + 4]), o = Math.max(o, e[t + 5]), h < e[t + 5] ? (l = e[t + 4], h = e[t + 5]) : h === e[t + 5] && (l = d(l, e[t + 4])); else {
                        let c = q.bezierBoundingBox(i, s, ...e.slice(t, t + 6));
                        r = Math.min(r, c[0]), n = Math.min(n, c[1]), a = Math.max(a, c[2]), o = Math.max(o, c[3]), h < c[3] ? (l = c[2], h = c[3]) : h === c[3] && (l = d(l, c[2]))
                    }
                    i = e[t + 4], s = e[t + 5]
                }
                let c = r - this.#sq, u = n - this.#sq, p = a - r + 2 * this.#sq, g = o - n + 2 * this.#sq;
                this.#s9 = {x: c, y: u, width: p, height: g, lastPoint: [l, h]}
            }

            get box() {
                return this.#s9
            }

            getNewOutline(t, e) {
                let {x: i, y: s, width: r, height: n} = this.#s9, [a, o, l, h] = this.#sO, d = r * l, c = n * h,
                    u = i * l + a, p = s * h + o, g = new iW({
                        x: this.#s2[0] * d + u,
                        y: this.#s2[1] * c + p
                    }, this.#sO, this.#s0, t, this.#sW, e ?? this.#sq);
                for (let t = 2; t < this.#s2.length; t += 2) g.add({
                    x: this.#s2[t] * d + u,
                    y: this.#s2[t + 1] * c + p
                });
                return g.getOutlines()
            }
        }

        class iX {
            #iq = this.#iW.bind(this);
            #ri = this.#E.bind(this);
            #rs = null;
            #rr = null;
            #rn;
            #ra = null;
            #ro = !1;
            #rl = !1;
            #w = null;
            #rh;
            #k = null;
            #rd;

            static get _keyboardManager() {
                return I(this, "_keyboardManager", new tP([[["Escape", "mac+Escape"], iX.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], iX.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], iX.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], iX.prototype._moveToPrevious], [["Home", "mac+Home"], iX.prototype._moveToBeginning], [["End", "mac+End"], iX.prototype._moveToEnd]]))
            }

            constructor({editor: t = null, uiManager: e = null}) {
                t ? (this.#rl = !1, this.#rd = m.HIGHLIGHT_COLOR, this.#w = t) : (this.#rl = !0, this.#rd = m.HIGHLIGHT_DEFAULT_COLOR), this.#k = t?._uiManager || e, this.#rh = this.#k._eventBus, this.#rn = t?.color || this.#k?.highlightColors.values().next().value || "#FFFF98"
            }

            renderButton() {
                let t = this.#rs = document.createElement("button");
                t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
                let e = this.#k._signal;
                t.addEventListener("click", this.#rc.bind(this), {signal: e}), t.addEventListener("keydown", this.#iq, {signal: e});
                let i = this.#rr = document.createElement("span");
                return i.className = "swatch", i.setAttribute("aria-hidden", !0), i.style.backgroundColor = this.#rn, t.append(i), t
            }

            renderMainDropdown() {
                let t = this.#ra = this.#ru();
                return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t
            }

            #ru() {
                let t = document.createElement("div"), e = this.#k._signal;
                for (let [i, s] of (t.addEventListener("contextmenu", tA, {signal: e}), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), this.#k.highlightColors)) {
                    let r = document.createElement("button");
                    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", s), r.title = i, r.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${i}`);
                    let n = document.createElement("span");
                    r.append(n), n.className = "swatch", n.style.backgroundColor = s, r.setAttribute("aria-selected", s === this.#rn), r.addEventListener("click", this.#rp.bind(this, s), {signal: e}), t.append(r)
                }
                return t.addEventListener("keydown", this.#iq, {signal: e}), t
            }

            #rp(t, e) {
                e.stopPropagation(), this.#rh.dispatch("switchannotationeditorparams", {
                    source: this,
                    type: this.#rd,
                    value: t
                })
            }

            _colorSelectFromKeyboard(t) {
                if (t.target === this.#rs) {
                    this.#rc(t);
                    return
                }
                let e = t.target.getAttribute("data-color");
                e && this.#rp(e, t)
            }

            _moveToNext(t) {
                if (!this.#rg) {
                    this.#rc(t);
                    return
                }
                if (t.target === this.#rs) {
                    this.#ra.firstChild?.focus();
                    return
                }
                t.target.nextSibling?.focus()
            }

            _moveToPrevious(t) {
                if (t.target === this.#ra?.firstChild || t.target === this.#rs) {
                    this.#rg && this._hideDropdownFromKeyboard();
                    return
                }
                this.#rg || this.#rc(t), t.target.previousSibling?.focus()
            }

            _moveToBeginning(t) {
                if (!this.#rg) {
                    this.#rc(t);
                    return
                }
                this.#ra.firstChild?.focus()
            }

            _moveToEnd(t) {
                if (!this.#rg) {
                    this.#rc(t);
                    return
                }
                this.#ra.lastChild?.focus()
            }

            #iW(t) {
                iX._keyboardManager.exec(this, t)
            }

            #rc(t) {
                if (this.#rg) {
                    this.hideDropdown();
                    return
                }
                if (this.#ro = 0 === t.detail, window.addEventListener("pointerdown", this.#ri, {signal: this.#k._signal}), this.#ra) {
                    this.#ra.classList.remove("hidden");
                    return
                }
                let e = this.#ra = this.#ru();
                this.#rs.append(e)
            }

            #E(t) {
                this.#ra?.contains(t.target) || this.hideDropdown()
            }

            hideDropdown() {
                this.#ra?.classList.add("hidden"), window.removeEventListener("pointerdown", this.#ri)
            }

            get #rg() {
                return this.#ra && !this.#ra.classList.contains("hidden")
            }

            _hideDropdownFromKeyboard() {
                if (!this.#rl) {
                    if (!this.#rg) {
                        this.#w?.unselect();
                        return
                    }
                    this.hideDropdown(), this.#rs.focus({preventScroll: !0, focusVisible: this.#ro})
                }
            }

            updateColor(t) {
                if (this.#rr && (this.#rr.style.backgroundColor = t), !this.#ra) return;
                let e = this.#k.highlightColors.values();
                for (let i of this.#ra.children) i.setAttribute("aria-selected", e.next().value === t)
            }

            destroy() {
                this.#rs?.remove(), this.#rs = null, this.#rr = null, this.#ra?.remove(), this.#ra = null
            }
        }

        class iY extends tN {
            #rf = null;
            #rm = 0;
            #rv;
            #rb = null;
            #_ = null;
            #rA = null;
            #ry = null;
            #r_ = 0;
            #rw = null;
            #rx = null;
            #l = null;
            #rE = !1;
            #tw = this.#rS.bind(this);
            #rC = null;
            #rT;
            #rM = null;
            #rR = "";
            #s1;
            #rk = "";
            static _defaultColor = null;
            static _defaultOpacity = 1;
            static _defaultThickness = 12;
            static _l10nPromise;
            static _type = "highlight";
            static _editorType = f.HIGHLIGHT;
            static _freeHighlightId = -1;
            static _freeHighlight = null;
            static _freeHighlightClipId = "";

            static get _keyboardManager() {
                let t = iY.prototype;
                return I(this, "_keyboardManager", new tP([[["ArrowLeft", "mac+ArrowLeft"], t._moveCaret, {args: [0]}], [["ArrowRight", "mac+ArrowRight"], t._moveCaret, {args: [1]}], [["ArrowUp", "mac+ArrowUp"], t._moveCaret, {args: [2]}], [["ArrowDown", "mac+ArrowDown"], t._moveCaret, {args: [3]}]]))
            }

            constructor(t) {
                super({
                    ...t,
                    name: "highlightEditor"
                }), this.color = t.color || iY._defaultColor, this.#s1 = t.thickness || iY._defaultThickness, this.#rT = t.opacity || iY._defaultOpacity, this.#rv = t.boxes || null, this.#rk = t.methodOfCreation || "", this.#rR = t.text || "", this._isDraggable = !1, t.highlightId > -1 ? (this.#rE = !0, this.#rL(t), this.#rI()) : (this.#rf = t.anchorNode, this.#rm = t.anchorOffset, this.#ry = t.focusNode, this.#r_ = t.focusOffset, this.#rP(), this.#rI(), this.rotate(this.rotation))
            }

            get telemetryInitialData() {
                return {
                    action: "added",
                    type: this.#rE ? "free_highlight" : "highlight",
                    color: this._uiManager.highlightColorNames.get(this.color),
                    thickness: this.#s1,
                    methodOfCreation: this.#rk
                }
            }

            get telemetryFinalData() {
                return {type: "highlight", color: this._uiManager.highlightColorNames.get(this.color)}
            }

            static computeTelemetryFinalData(t) {
                return {numberOfColors: t.get("color").size}
            }

            #rP() {
                let t = new iG(this.#rv, .001);
                this.#rx = t.getOutlines(), {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                } = this.#rx.box;
                let e = new iG(this.#rv, .0025, .001, "ltr" === this._uiManager.direction);
                this.#rA = e.getOutlines();
                let {lastPoint: i} = this.#rA.box;
                this.#rC = [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]
            }

            #rL({highlightOutlines: t, highlightId: e, clipPathId: i}) {
                if (this.#rx = t, this.#rA = t.getNewOutline(this.#s1 / 2 + 1.5, .0025), e >= 0) this.#l = e, this.#rb = i, this.parent.drawLayer.finalizeLine(e, t), this.#rM = this.parent.drawLayer.highlightOutline(this.#rA); else if (this.parent) {
                    let e = this.parent.viewport.rotation;
                    this.parent.drawLayer.updateLine(this.#l, t), this.parent.drawLayer.updateBox(this.#l, iY.#rD(this.#rx.box, (e - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(this.#rM, this.#rA), this.parent.drawLayer.updateBox(this.#rM, iY.#rD(this.#rA.box, e))
                }
                let {x: s, y: r, width: n, height: a} = t.box;
                switch (this.rotation) {
                    case 0:
                        this.x = s, this.y = r, this.width = n, this.height = a;
                        break;
                    case 90: {
                        let [t, e] = this.parentDimensions;
                        this.x = r, this.y = 1 - s, this.width = n * e / t, this.height = a * t / e;
                        break
                    }
                    case 180:
                        this.x = 1 - s, this.y = 1 - r, this.width = n, this.height = a;
                        break;
                    case 270: {
                        let [t, e] = this.parentDimensions;
                        this.x = 1 - r, this.y = s, this.width = n * e / t, this.height = a * t / e
                    }
                }
                let {lastPoint: o} = this.#rA.box;
                this.#rC = [(o[0] - s) / n, (o[1] - r) / a]
            }

            static initialize(t, e) {
                tN.initialize(t, e), iY._defaultColor ||= e.highlightColors?.values().next().value || "#fff066"
            }

            static updateDefaultParams(t, e) {
                switch (t) {
                    case m.HIGHLIGHT_DEFAULT_COLOR:
                        iY._defaultColor = e;
                        break;
                    case m.HIGHLIGHT_THICKNESS:
                        iY._defaultThickness = e
                }
            }

            translateInPage(t, e) {
            }

            get toolbarPosition() {
                return this.#rC
            }

            updateParams(t, e) {
                switch (t) {
                    case m.HIGHLIGHT_COLOR:
                        this.#sM(e);
                        break;
                    case m.HIGHLIGHT_THICKNESS:
                        this.#rF(e)
                }
            }

            static get defaultPropertiesToUpdate() {
                return [[m.HIGHLIGHT_DEFAULT_COLOR, iY._defaultColor], [m.HIGHLIGHT_THICKNESS, iY._defaultThickness]]
            }

            get propertiesToUpdate() {
                return [[m.HIGHLIGHT_COLOR, this.color || iY._defaultColor], [m.HIGHLIGHT_THICKNESS, this.#s1 || iY._defaultThickness], [m.HIGHLIGHT_FREE, this.#rE]]
            }

            #sM(t) {
                let e = t => {
                    this.color = t, this.parent?.drawLayer.changeColor(this.#l, t), this.#_?.updateColor(t)
                }, i = this.color;
                this.addCommands({
                    cmd: e.bind(this, t),
                    undo: e.bind(this, i),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.HIGHLIGHT_COLOR,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                }), this._reportTelemetry({
                    action: "color_changed",
                    color: this._uiManager.highlightColorNames.get(t)
                }, !0)
            }

            #rF(t) {
                let e = this.#s1, i = t => {
                    this.#s1 = t, this.#rO(t)
                };
                this.addCommands({
                    cmd: i.bind(this, t),
                    undo: i.bind(this, e),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.INK_THICKNESS,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                }), this._reportTelemetry({action: "thickness_changed", thickness: t}, !0)
            }

            async addEditToolbar() {
                let t = await super.addEditToolbar();
                return t ? (this._uiManager.highlightColors && (this.#_ = new iX({editor: this}), t.addColorPicker(this.#_)), t) : null
            }

            disableEditing() {
                super.disableEditing(), this.div.classList.toggle("disabled", !0)
            }

            enableEditing() {
                super.enableEditing(), this.div.classList.toggle("disabled", !1)
            }

            fixAndSetPosition() {
                return super.fixAndSetPosition(this.#rN())
            }

            getBaseTranslation() {
                return [0, 0]
            }

            getRect(t, e) {
                return super.getRect(t, e, this.#rN())
            }

            onceAdded() {
                this.parent.addUndoableEditor(this), this.div.focus()
            }

            remove() {
                this.#rB(), this._reportTelemetry({action: "deleted"}), super.remove()
            }

            rebuild() {
                this.parent && (super.rebuild(), null !== this.div && (this.#rI(), this.isAttachedToDOM || this.parent.add(this)))
            }

            setParent(t) {
                let e = !1;
                this.parent && !t ? this.#rB() : t && (this.#rI(t), e = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t), this.show(this._isVisible), e && this.select()
            }

            #rO(t) {
                if (!this.#rE) return;
                this.#rL({highlightOutlines: this.#rx.getNewOutline(t / 2)}), this.fixAndSetPosition();
                let [e, i] = this.parentDimensions;
                this.setDims(this.width * e, this.height * i)
            }

            #rB() {
                null !== this.#l && this.parent && (this.parent.drawLayer.remove(this.#l), this.#l = null, this.parent.drawLayer.remove(this.#rM), this.#rM = null)
            }

            #rI(t = this.parent) {
                null === this.#l && ({
                    id: this.#l,
                    clipPathId: this.#rb
                } = t.drawLayer.highlight(this.#rx, this.color, this.#rT), this.#rM = t.drawLayer.highlightOutline(this.#rA), this.#rw && (this.#rw.style.clipPath = this.#rb))
            }

            static #rD({x: t, y: e, width: i, height: s}, r) {
                switch (r) {
                    case 90:
                        return {x: 1 - e - s, y: t, width: s, height: i};
                    case 180:
                        return {x: 1 - t - i, y: 1 - e - s, width: i, height: s};
                    case 270:
                        return {x: e, y: 1 - t - i, width: s, height: i}
                }
                return {x: t, y: e, width: i, height: s}
            }

            rotate(t) {
                let e;
                let {drawLayer: i} = this.parent;
                this.#rE ? (t = (t - this.rotation + 360) % 360, e = iY.#rD(this.#rx.box, t)) : e = iY.#rD(this, t), i.rotate(this.#l, t), i.rotate(this.#rM, t), i.updateBox(this.#l, e), i.updateBox(this.#rM, iY.#rD(this.#rA.box, t))
            }

            render() {
                if (this.div) return this.div;
                let t = super.render();
                this.#rR && (t.setAttribute("aria-label", this.#rR), t.setAttribute("role", "mark")), this.#rE ? t.classList.add("free") : this.div.addEventListener("keydown", this.#tw, {signal: this._uiManager._signal});
                let e = this.#rw = document.createElement("div");
                t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = this.#rb;
                let [i, s] = this.parentDimensions;
                return this.setDims(this.width * i, this.height * s), tR(this, this.#rw, ["pointerover", "pointerleave"]), this.enableEditing(), t
            }

            pointerover() {
                this.parent.drawLayer.addClass(this.#rM, "hovered")
            }

            pointerleave() {
                this.parent.drawLayer.removeClass(this.#rM, "hovered")
            }

            #rS(t) {
                iY._keyboardManager.exec(this, t)
            }

            _moveCaret(t) {
                switch (this.parent.unselect(this), t) {
                    case 0:
                    case 2:
                        this.#rH(!0);
                        break;
                    case 1:
                    case 3:
                        this.#rH(!1)
                }
            }

            #rH(t) {
                if (!this.#rf) return;
                let e = window.getSelection();
                t ? e.setPosition(this.#rf, this.#rm) : e.setPosition(this.#ry, this.#r_)
            }

            select() {
                super.select(), this.#rM && (this.parent?.drawLayer.removeClass(this.#rM, "hovered"), this.parent?.drawLayer.addClass(this.#rM, "selected"))
            }

            unselect() {
                super.unselect(), this.#rM && (this.parent?.drawLayer.removeClass(this.#rM, "selected"), this.#rE || this.#rH(!1))
            }

            get _mustFixPosition() {
                return !this.#rE
            }

            show(t = this._isVisible) {
                super.show(t), this.parent && (this.parent.drawLayer.show(this.#l, t), this.parent.drawLayer.show(this.#rM, t))
            }

            #rN() {
                return this.#rE ? this.rotation : 0
            }

            #rz() {
                if (this.#rE) return null;
                let [t, e] = this.pageDimensions, i = this.#rv, s = new Float32Array(8 * i.length), r = 0;
                for (let {x: n, y: a, width: o, height: l} of i) {
                    let i = n * t, h = (1 - a - l) * e;
                    s[r] = s[r + 4] = i, s[r + 1] = s[r + 3] = h, s[r + 2] = s[r + 6] = i + o * t, s[r + 5] = s[r + 7] = h + l * e, r += 8
                }
                return s
            }

            #rj(t) {
                return this.#rx.serialize(t, this.#rN())
            }

            static startHighlighting(t, e, {target: i, x: s, y: r}) {
                let {x: n, y: a, width: o, height: l} = i.getBoundingClientRect(), h = e => {
                    this.#rU(t, e)
                }, d = t._signal, c = {capture: !0, passive: !1, signal: d}, u = t => {
                    t.preventDefault(), t.stopPropagation()
                }, p = e => {
                    i.removeEventListener("pointermove", h), window.removeEventListener("blur", p), window.removeEventListener("pointerup", p), window.removeEventListener("pointerdown", u, c), window.removeEventListener("contextmenu", tA), this.#r$(t, e)
                };
                window.addEventListener("blur", p, {signal: d}), window.addEventListener("pointerup", p, {signal: d}), window.addEventListener("pointerdown", u, c), window.addEventListener("contextmenu", tA, {signal: d}), i.addEventListener("pointermove", h, {signal: d}), this._freeHighlight = new iW({
                    x: s,
                    y: r
                }, [n, a, o, l], t.scale, this._defaultThickness / 2, e, .001), {
                    id: this._freeHighlightId,
                    clipPathId: this._freeHighlightClipId
                } = t.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0)
            }

            static #rU(t, e) {
                this._freeHighlight.add(e) && t.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight)
            }

            static #r$(t, e) {
                this._freeHighlight.isEmpty() ? t.drawLayer.removeFreeHighlight(this._freeHighlightId) : t.createAndAddNewEditor(e, !1, {
                    highlightId: this._freeHighlightId,
                    highlightOutlines: this._freeHighlight.getOutlines(),
                    clipPathId: this._freeHighlightClipId,
                    methodOfCreation: "main_toolbar"
                }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = ""
            }

            static deserialize(t, e, i) {
                let s = super.deserialize(t, e, i), {rect: [r, n, a, o], color: l, quadPoints: h} = t;
                s.color = q.makeHexColor(...l), s.#rT = t.opacity;
                let [d, c] = s.pageDimensions;
                s.width = (a - r) / d, s.height = (o - n) / c;
                let u = s.#rv = [];
                for (let t = 0; t < h.length; t += 8) u.push({
                    x: (h[4] - a) / d,
                    y: (o - (1 - h[t + 5])) / c,
                    width: (h[t + 2] - h[t]) / d,
                    height: (h[t + 5] - h[t + 1]) / c
                });
                return s.#rP(), s
            }

            serialize(t = !1) {
                if (this.isEmpty() || t) return null;
                let e = this.getRect(0, 0), i = tN._colorManager.convert(this.color);
                return {
                    annotationType: f.HIGHLIGHT,
                    color: i,
                    opacity: this.#rT,
                    thickness: this.#s1,
                    quadPoints: this.#rz(),
                    outlines: this.#rj(e),
                    pageIndex: this.pageIndex,
                    rect: e,
                    rotation: this.#rN(),
                    structTreeParentId: this._structTreeParentId
                }
            }

            static canCreateNewEmptyEditor() {
                return !1
            }
        }

        class iQ extends tN {
            #rG = 0;
            #rV = 0;
            #rq = this.canvasPointermove.bind(this);
            #rW = this.canvasPointerleave.bind(this);
            #rK = this.canvasPointerup.bind(this);
            #rX = this.canvasPointerdown.bind(this);
            #rY = null;
            #rQ = new Path2D;
            #rJ = !1;
            #rZ = !1;
            #r0 = !1;
            #r1 = null;
            #r2 = 0;
            #r5 = 0;
            #r4 = null;
            static _defaultColor = null;
            static _defaultOpacity = 1;
            static _defaultThickness = 1;
            static _type = "ink";
            static _editorType = f.INK;

            constructor(t) {
                super({
                    ...t,
                    name: "inkEditor"
                }), this.color = t.color || null, this.thickness = t.thickness || null, this.opacity = t.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0
            }

            static initialize(t, e) {
                tN.initialize(t, e)
            }

            static updateDefaultParams(t, e) {
                switch (t) {
                    case m.INK_THICKNESS:
                        iQ._defaultThickness = e;
                        break;
                    case m.INK_COLOR:
                        iQ._defaultColor = e;
                        break;
                    case m.INK_OPACITY:
                        iQ._defaultOpacity = e / 100
                }
            }

            updateParams(t, e) {
                switch (t) {
                    case m.INK_THICKNESS:
                        this.#rF(e);
                        break;
                    case m.INK_COLOR:
                        this.#sM(e);
                        break;
                    case m.INK_OPACITY:
                        this.#r3(e)
                }
            }

            static get defaultPropertiesToUpdate() {
                return [[m.INK_THICKNESS, iQ._defaultThickness], [m.INK_COLOR, iQ._defaultColor || tN._defaultLineColor], [m.INK_OPACITY, Math.round(100 * iQ._defaultOpacity)]]
            }

            get propertiesToUpdate() {
                return [[m.INK_THICKNESS, this.thickness || iQ._defaultThickness], [m.INK_COLOR, this.color || iQ._defaultColor || tN._defaultLineColor], [m.INK_OPACITY, Math.round(100 * (this.opacity ?? iQ._defaultOpacity))]]
            }

            #rF(t) {
                let e = t => {
                    this.thickness = t, this.#r6()
                }, i = this.thickness;
                this.addCommands({
                    cmd: e.bind(this, t),
                    undo: e.bind(this, i),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.INK_THICKNESS,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                })
            }

            #sM(t) {
                let e = t => {
                    this.color = t, this.#r9()
                }, i = this.color;
                this.addCommands({
                    cmd: e.bind(this, t),
                    undo: e.bind(this, i),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.INK_COLOR,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                })
            }

            #r3(t) {
                let e = t => {
                    this.opacity = t, this.#r9()
                };
                t /= 100;
                let i = this.opacity;
                this.addCommands({
                    cmd: e.bind(this, t),
                    undo: e.bind(this, i),
                    post: this._uiManager.updateUI.bind(this._uiManager, this),
                    mustExec: !0,
                    type: m.INK_OPACITY,
                    overwriteIfSameType: !0,
                    keepUndo: !0
                })
            }

            rebuild() {
                this.parent && (super.rebuild(), null !== this.div && (this.canvas || (this.#r7(), this.#r8()), this.isAttachedToDOM || (this.parent.add(this), this.#nt()), this.#r6()))
            }

            remove() {
                null !== this.canvas && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, this.#rY && (clearTimeout(this.#rY), this.#rY = null), this.#r1?.disconnect(), this.#r1 = null, super.remove())
            }

            setParent(t) {
                !this.parent && t ? this._uiManager.removeShouldRescale(this) : this.parent && null === t && this._uiManager.addShouldRescale(this), super.setParent(t)
            }

            onScaleChanging() {
                let [t, e] = this.parentDimensions, i = this.width * t, s = this.height * e;
                this.setDimensions(i, s)
            }

            enableEditMode() {
                this.#rJ || null === this.canvas || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", this.#rX, {signal: this._uiManager._signal}))
            }

            disableEditMode() {
                this.isInEditMode() && null !== this.canvas && (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", this.#rX))
            }

            onceAdded() {
                this._isDraggable = !this.isEmpty()
            }

            isEmpty() {
                return 0 === this.paths.length || 1 === this.paths.length && 0 === this.paths[0].length
            }

            #ne() {
                let {parentRotation: t, parentDimensions: [e, i]} = this;
                switch (t) {
                    case 90:
                        return [0, i, i, e];
                    case 180:
                        return [e, i, e, i];
                    case 270:
                        return [e, 0, i, e];
                    default:
                        return [0, 0, e, i]
                }
            }

            #ni() {
                let {ctx: t, color: e, opacity: i, thickness: s, parentScale: r, scaleFactor: n} = this;
                t.lineWidth = s * r / n, t.lineCap = "round", t.lineJoin = "round", t.miterLimit = 10, t.strokeStyle = `${e}${Math.round(Math.min(255, Math.max(1, 255 * i))).toString(16).padStart(2, "0")}`
            }

            #ns(t, e) {
                let i = this._uiManager._signal;
                this.canvas.addEventListener("contextmenu", tA, {signal: i}), this.canvas.addEventListener("pointerleave", this.#rW, {signal: i}), this.canvas.addEventListener("pointermove", this.#rq, {signal: i}), this.canvas.addEventListener("pointerup", this.#rK, {signal: i}), this.canvas.removeEventListener("pointerdown", this.#rX), this.isEditing = !0, this.#r0 || (this.#r0 = !0, this.#nt(), this.thickness ||= iQ._defaultThickness, this.color ||= iQ._defaultColor || tN._defaultLineColor, this.opacity ??= iQ._defaultOpacity), this.currentPath.push([t, e]), this.#rZ = !1, this.#ni(), this.#r4 = () => {
                    this.#nr(), this.#r4 && window.requestAnimationFrame(this.#r4)
                }, window.requestAnimationFrame(this.#r4)
            }

            #nn(t, e) {
                let [i, s] = this.currentPath.at(-1);
                if (this.currentPath.length > 1 && t === i && e === s) return;
                let r = this.currentPath, n = this.#rQ;
                if (r.push([t, e]), this.#rZ = !0, r.length <= 2) {
                    n.moveTo(...r[0]), n.lineTo(t, e);
                    return
                }
                3 === r.length && (this.#rQ = n = new Path2D, n.moveTo(...r[0])), this.#na(n, ...r.at(-3), ...r.at(-2), t, e)
            }

            #no() {
                if (0 === this.currentPath.length) return;
                let t = this.currentPath.at(-1);
                this.#rQ.lineTo(...t)
            }

            #nl(t, e) {
                let i;
                if (this.#r4 = null, t = Math.min(Math.max(t, 0), this.canvas.width), e = Math.min(Math.max(e, 0), this.canvas.height), this.#nn(t, e), this.#no(), 1 !== this.currentPath.length) i = this.#nh(); else {
                    let s = [t, e];
                    i = [[s, s.slice(), s.slice(), s]]
                }
                let s = this.#rQ, r = this.currentPath;
                this.currentPath = [], this.#rQ = new Path2D, this.addCommands({
                    cmd: () => {
                        this.allRawPaths.push(r), this.paths.push(i), this.bezierPath2D.push(s), this._uiManager.rebuild(this)
                    }, undo: () => {
                        this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), 0 === this.paths.length ? this.remove() : (this.canvas || (this.#r7(), this.#r8()), this.#r6())
                    }, mustExec: !0
                })
            }

            #nr() {
                if (!this.#rZ) return;
                this.#rZ = !1, this.thickness, this.parentScale;
                let t = this.currentPath.slice(-3);
                t.map(t => t[0]), t.map(t => t[1]);
                let {ctx: e} = this;
                for (let t of (e.save(), e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.bezierPath2D)) e.stroke(t);
                e.stroke(this.#rQ), e.restore()
            }

            #na(t, e, i, s, r, n, a) {
                let o = (e + s) / 2, l = (i + r) / 2, h = (s + n) / 2, d = (r + a) / 2;
                t.bezierCurveTo(o + 2 * (s - o) / 3, l + 2 * (r - l) / 3, h + 2 * (s - h) / 3, d + 2 * (r - d) / 3, h, d)
            }

            #nh() {
                let t;
                let e = this.currentPath;
                if (e.length <= 2) return [[e[0], e[0], e.at(-1), e.at(-1)]];
                let i = [], [s, r] = e[0];
                for (t = 1; t < e.length - 2; t++) {
                    let [n, a] = e[t], [o, l] = e[t + 1], h = (n + o) / 2, d = (a + l) / 2,
                        c = [s + 2 * (n - s) / 3, r + 2 * (a - r) / 3], u = [h + 2 * (n - h) / 3, d + 2 * (a - d) / 3];
                    i.push([[s, r], c, u, [h, d]]), [s, r] = [h, d]
                }
                let [n, a] = e[t], [o, l] = e[t + 1], h = [s + 2 * (n - s) / 3, r + 2 * (a - r) / 3];
                return i.push([[s, r], h, [o + 2 * (n - o) / 3, l + 2 * (a - l) / 3], [o, l]]), i
            }

            #r9() {
                if (this.isEmpty()) {
                    this.#nd();
                    return
                }
                this.#ni();
                let {canvas: t, ctx: e} = this;
                for (let i of (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height), this.#nd(), this.bezierPath2D)) e.stroke(i)
            }

            commit() {
                this.#rJ || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), this.#rJ = !0, this.div.classList.add("disabled"), this.#r6(!0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({preventScroll: !0}))
            }

            focusin(t) {
                this._focusEventsAllowed && (super.focusin(t), this.enableEditMode())
            }

            canvasPointerdown(t) {
                0 === t.button && this.isInEditMode() && !this.#rJ && (this.setInForeground(), t.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({preventScroll: !0}), this.#ns(t.offsetX, t.offsetY))
            }

            canvasPointermove(t) {
                t.preventDefault(), this.#nn(t.offsetX, t.offsetY)
            }

            canvasPointerup(t) {
                t.preventDefault(), this.#nc(t)
            }

            canvasPointerleave(t) {
                this.#nc(t)
            }

            #nc(t) {
                this.canvas.removeEventListener("pointerleave", this.#rW), this.canvas.removeEventListener("pointermove", this.#rq), this.canvas.removeEventListener("pointerup", this.#rK), this.canvas.addEventListener("pointerdown", this.#rX, {signal: this._uiManager._signal}), this.#rY && clearTimeout(this.#rY), this.#rY = setTimeout(() => {
                    this.#rY = null, this.canvas.removeEventListener("contextmenu", tA)
                }, 10), this.#nl(t.offsetX, t.offsetY), this.addToAnnotationStorage(), this.setInBackground()
            }

            #r7() {
                this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d")
            }

            #r8() {
                this.#r1 = new ResizeObserver(t => {
                    let e = t[0].contentRect;
                    e.width && e.height && this.setDimensions(e.width, e.height)
                }), this.#r1.observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
                    this.#r1?.disconnect(), this.#r1 = null
                }, {once: !0})
            }

            get isResizable() {
                return !this.isEmpty() && this.#rJ
            }

            render() {
                let t, e;
                if (this.div) return this.div;
                this.width && (t = this.x, e = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
                let [i, s, r, n] = this.#ne();
                if (this.setAt(i, s, 0, 0), this.setDims(r, n), this.#r7(), this.width) {
                    let [i, s] = this.parentDimensions;
                    this.setAspectRatio(this.width * i, this.height * s), this.setAt(t * i, e * s, this.width * i, this.height * s), this.#r0 = !0, this.#nt(), this.setDims(this.width * i, this.height * s), this.#r9(), this.div.classList.add("disabled")
                } else this.div.classList.add("editing"), this.enableEditMode();
                return this.#r8(), this.div
            }

            #nt() {
                if (!this.#r0) return;
                let [t, e] = this.parentDimensions;
                this.canvas.width = Math.ceil(this.width * t), this.canvas.height = Math.ceil(this.height * e), this.#nd()
            }

            setDimensions(t, e) {
                let i = Math.round(t), s = Math.round(e);
                if (this.#r2 === i && this.#r5 === s) return;
                this.#r2 = i, this.#r5 = s, this.canvas.style.visibility = "hidden";
                let [r, n] = this.parentDimensions;
                this.width = t / r, this.height = e / n, this.fixAndSetPosition(), this.#rJ && this.#nu(t, e), this.#nt(), this.#r9(), this.canvas.style.visibility = "visible", this.fixDims()
            }

            #nu(t, e) {
                let i = this.#np(), s = (t - i) / this.#rV, r = (e - i) / this.#rG;
                this.scaleFactor = Math.min(s, r)
            }

            #nd() {
                let t = this.#np() / 2;
                this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t)
            }

            static #ng(t) {
                let e = new Path2D;
                for (let i = 0, s = t.length; i < s; i++) {
                    let [s, r, n, a] = t[i];
                    0 === i && e.moveTo(...s), e.bezierCurveTo(r[0], r[1], n[0], n[1], a[0], a[1])
                }
                return e
            }

            static #nf(t, e, i) {
                let [s, r, n, a] = e;
                switch (i) {
                    case 0:
                        for (let e = 0, i = t.length; e < i; e += 2) t[e] += s, t[e + 1] = a - t[e + 1];
                        break;
                    case 90:
                        for (let e = 0, i = t.length; e < i; e += 2) {
                            let i = t[e];
                            t[e] = t[e + 1] + s, t[e + 1] = i + r
                        }
                        break;
                    case 180:
                        for (let e = 0, i = t.length; e < i; e += 2) t[e] = n - t[e], t[e + 1] += r;
                        break;
                    case 270:
                        for (let e = 0, i = t.length; e < i; e += 2) {
                            let i = t[e];
                            t[e] = n - t[e + 1], t[e + 1] = a - i
                        }
                        break;
                    default:
                        throw Error("Invalid rotation")
                }
                return t
            }

            static #nm(t, e, i) {
                let [s, r, n, a] = e;
                switch (i) {
                    case 0:
                        for (let e = 0, i = t.length; e < i; e += 2) t[e] -= s, t[e + 1] = a - t[e + 1];
                        break;
                    case 90:
                        for (let e = 0, i = t.length; e < i; e += 2) {
                            let i = t[e];
                            t[e] = t[e + 1] - r, t[e + 1] = i - s
                        }
                        break;
                    case 180:
                        for (let e = 0, i = t.length; e < i; e += 2) t[e] = n - t[e], t[e + 1] -= r;
                        break;
                    case 270:
                        for (let e = 0, i = t.length; e < i; e += 2) {
                            let i = t[e];
                            t[e] = a - t[e + 1], t[e + 1] = n - i
                        }
                        break;
                    default:
                        throw Error("Invalid rotation")
                }
                return t
            }

            #nv(t, e, i, s) {
                let r = [], n = this.thickness / 2, a = t * e + n, o = t * i + n;
                for (let e of this.paths) {
                    let i = [], n = [];
                    for (let s = 0, r = e.length; s < r; s++) {
                        let [l, h, d, c] = e[s];
                        if (l[0] === c[0] && l[1] === c[1] && 1 === r) {
                            let e = t * l[0] + a, s = t * l[1] + o;
                            i.push(e, s), n.push(e, s);
                            break
                        }
                        let u = t * l[0] + a, p = t * l[1] + o, g = t * h[0] + a, f = t * h[1] + o, m = t * d[0] + a,
                            v = t * d[1] + o, b = t * c[0] + a, A = t * c[1] + o;
                        0 === s && (i.push(u, p), n.push(u, p)), i.push(g, f, m, v, b, A), n.push(g, f), s === r - 1 && n.push(b, A)
                    }
                    r.push({bezier: iQ.#nf(i, s, this.rotation), points: iQ.#nf(n, s, this.rotation)})
                }
                return r
            }

            #nb() {
                let t = 1 / 0, e = -1 / 0, i = 1 / 0, s = -1 / 0;
                for (let r of this.paths) for (let [n, a, o, l] of r) {
                    let r = q.bezierBoundingBox(...n, ...a, ...o, ...l);
                    t = Math.min(t, r[0]), i = Math.min(i, r[1]), e = Math.max(e, r[2]), s = Math.max(s, r[3])
                }
                return [t, i, e, s]
            }

            #np() {
                return this.#rJ ? Math.ceil(this.thickness * this.parentScale) : 0
            }

            #r6(t = !1) {
                if (this.isEmpty()) return;
                if (!this.#rJ) {
                    this.#r9();
                    return
                }
                let e = this.#nb(), i = this.#np();
                this.#rV = Math.max(tN.MIN_SIZE, e[2] - e[0]), this.#rG = Math.max(tN.MIN_SIZE, e[3] - e[1]);
                let s = Math.ceil(i + this.#rV * this.scaleFactor),
                    r = Math.ceil(i + this.#rG * this.scaleFactor), [n, a] = this.parentDimensions;
                this.width = s / n, this.height = r / a, this.setAspectRatio(s, r);
                let o = this.translationX, l = this.translationY;
                this.translationX = -e[0], this.translationY = -e[1], this.#nt(), this.#r9(), this.#r2 = s, this.#r5 = r, this.setDims(s, r);
                let h = t ? i / this.scaleFactor / 2 : 0;
                this.translate(o - this.translationX - h, l - this.translationY - h)
            }

            static deserialize(t, e, i) {
                if (t instanceof iD) return null;
                let s = super.deserialize(t, e, i);
                s.thickness = t.thickness, s.color = q.makeHexColor(...t.color), s.opacity = t.opacity;
                let [r, n] = s.pageDimensions, a = s.width * r, o = s.height * n, l = s.parentScale,
                    h = t.thickness / 2;
                s.#rJ = !0, s.#r2 = Math.round(a), s.#r5 = Math.round(o);
                let {paths: d, rect: c, rotation: u} = t;
                for (let {bezier: t} of d) {
                    t = iQ.#nm(t, c, u);
                    let e = [];
                    s.paths.push(e);
                    let i = l * (t[0] - h), r = l * (t[1] - h);
                    for (let s = 2, n = t.length; s < n; s += 6) {
                        let n = l * (t[s] - h), a = l * (t[s + 1] - h), o = l * (t[s + 2] - h), d = l * (t[s + 3] - h),
                            c = l * (t[s + 4] - h), u = l * (t[s + 5] - h);
                        e.push([[i, r], [n, a], [o, d], [c, u]]), i = c, r = u
                    }
                    let n = this.#ng(e);
                    s.bezierPath2D.push(n)
                }
                let p = s.#nb();
                return s.#rV = Math.max(tN.MIN_SIZE, p[2] - p[0]), s.#rG = Math.max(tN.MIN_SIZE, p[3] - p[1]), s.#nu(a, o), s
            }

            serialize() {
                if (this.isEmpty()) return null;
                let t = this.getRect(0, 0), e = tN._colorManager.convert(this.ctx.strokeStyle);
                return {
                    annotationType: f.INK,
                    color: e,
                    thickness: this.thickness,
                    opacity: this.opacity,
                    paths: this.#nv(this.scaleFactor / this.parentScale, this.translationX, this.translationY, t),
                    pageIndex: this.pageIndex,
                    rect: t,
                    rotation: this.rotation,
                    structTreeParentId: this._structTreeParentId
                }
            }
        }

        class iJ extends tN {
            #nA = null;
            #ny = null;
            #n_ = null;
            #nw = null;
            #nx = null;
            #nE = "";
            #nS = null;
            #r1 = null;
            #nC = null;
            #nT = !1;
            #nM = !1;
            static _type = "stamp";
            static _editorType = f.STAMP;

            constructor(t) {
                super({...t, name: "stampEditor"}), this.#nw = t.bitmapUrl, this.#nx = t.bitmapFile
            }

            static initialize(t, e) {
                tN.initialize(t, e)
            }

            static get supportedTypes() {
                return I(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map(t => `image/${t}`))
            }

            static get supportedTypesStr() {
                return I(this, "supportedTypesStr", this.supportedTypes.join(","))
            }

            static isHandlingMimeForPasting(t) {
                return this.supportedTypes.includes(t)
            }

            static paste(t, e) {
                e.pasteEditor(f.STAMP, {bitmapFile: t.getAsFile()})
            }

            #nR(t, e = !1) {
                if (!t) {
                    this.remove();
                    return
                }
                this.#nA = t.bitmap, e || (this.#ny = t.id, this.#nT = t.isSvg), t.file && (this.#nE = t.file.name), this.#r7()
            }

            #nk() {
                this.#n_ = null, this._uiManager.enableWaiting(!1), this.#nS && this.div.focus()
            }

            #nL() {
                if (this.#ny) {
                    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(this.#ny).then(t => this.#nR(t, !0)).finally(() => this.#nk());
                    return
                }
                if (this.#nw) {
                    let t = this.#nw;
                    this.#nw = null, this._uiManager.enableWaiting(!0), this.#n_ = this._uiManager.imageManager.getFromUrl(t).then(t => this.#nR(t)).finally(() => this.#nk());
                    return
                }
                if (this.#nx) {
                    let t = this.#nx;
                    this.#nx = null, this._uiManager.enableWaiting(!0), this.#n_ = this._uiManager.imageManager.getFromFile(t).then(t => this.#nR(t)).finally(() => this.#nk());
                    return
                }
                let t = document.createElement("input");
                t.type = "file", t.accept = iJ.supportedTypesStr;
                let e = this._uiManager._signal;
                this.#n_ = new Promise(i => {
                    t.addEventListener("change", async () => {
                        if (t.files && 0 !== t.files.length) {
                            this._uiManager.enableWaiting(!0);
                            let e = await this._uiManager.imageManager.getFromFile(t.files[0]);
                            this.#nR(e)
                        } else this.remove();
                        i()
                    }, {signal: e}), t.addEventListener("cancel", () => {
                        this.remove(), i()
                    }, {signal: e})
                }).finally(() => this.#nk()), t.click()
            }

            remove() {
                this.#ny && (this.#nA = null, this._uiManager.imageManager.deleteId(this.#ny), this.#nS?.remove(), this.#nS = null, this.#r1?.disconnect(), this.#r1 = null, this.#nC && (clearTimeout(this.#nC), this.#nC = null)), super.remove()
            }

            rebuild() {
                if (!this.parent) {
                    this.#ny && this.#nL();
                    return
                }
                super.rebuild(), null !== this.div && (this.#ny && null === this.#nS && this.#nL(), this.isAttachedToDOM || this.parent.add(this))
            }

            onceAdded() {
                this._isDraggable = !0, this.div.focus()
            }

            isEmpty() {
                return !(this.#n_ || this.#nA || this.#nw || this.#nx || this.#ny)
            }

            get isResizable() {
                return !0
            }

            render() {
                let t, e;
                if (this.div) return this.div;
                if (this.width && (t = this.x, e = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), this.#nA ? this.#r7() : this.#nL(), this.width) {
                    let [i, s] = this.parentDimensions;
                    this.setAt(t * i, e * s, this.width * i, this.height * s)
                }
                return this.div
            }

            #r7() {
                let {div: t} = this, {width: e, height: i} = this.#nA, [s, r] = this.pageDimensions;
                if (this.width) e = this.width * s, i = this.height * r; else if (e > .75 * s || i > .75 * r) {
                    let t = Math.min(.75 * s / e, .75 * r / i);
                    e *= t, i *= t
                }
                let [n, a] = this.parentDimensions;
                this.setDims(e * n / s, i * a / r), this._uiManager.enableWaiting(!1);
                let o = this.#nS = document.createElement("canvas");
                t.append(o), t.hidden = !1, this.#nI(e, i), this.#r8(), this.#nM || (this.parent.addUndoableEditor(this), this.#nM = !0), this._reportTelemetry({action: "inserted_image"}), this.#nE && o.setAttribute("aria-label", this.#nE)
            }

            #nP(t, e) {
                let [i, s] = this.parentDimensions;
                this.width = t / i, this.height = e / s, this.setDims(t, e), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, null !== this.#nC && clearTimeout(this.#nC), this.#nC = setTimeout(() => {
                    this.#nC = null, this.#nI(t, e)
                }, 200)
            }

            #nD(t, e) {
                let {width: i, height: s} = this.#nA, r = i, n = s, a = this.#nA;
                for (; r > 2 * t || n > 2 * e;) {
                    let i = r, s = n;
                    r > 2 * t && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2)), n > 2 * e && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2));
                    let o = new OffscreenCanvas(r, n);
                    o.getContext("2d").drawImage(a, 0, 0, i, s, 0, 0, r, n), a = o.transferToImageBitmap()
                }
                return a
            }

            #nI(t, e) {
                t = Math.ceil(t), e = Math.ceil(e);
                let i = this.#nS;
                if (!i || i.width === t && i.height === e) return;
                i.width = t, i.height = e;
                let s = this.#nT ? this.#nA : this.#nD(t, e);
                if (this._uiManager.hasMLManager && !this.hasAltText()) {
                    let i = new OffscreenCanvas(t, e).getContext("2d");
                    i.drawImage(s, 0, 0, s.width, s.height, 0, 0, t, e), this._uiManager.mlGuess({
                        service: "image-to-text",
                        request: {data: i.getImageData(0, 0, t, e).data, width: t, height: e, channels: 4}
                    }).then(t => {
                        let e = t?.output || "";
                        this.parent && e && !this.hasAltText() && (this.altTextData = {altText: e, decorative: !1})
                    })
                }
                let r = i.getContext("2d");
                r.filter = this._uiManager.hcmFilter, r.drawImage(s, 0, 0, s.width, s.height, 0, 0, t, e)
            }

            getImageForAltText() {
                return this.#nS
            }

            #nF(t) {
                if (t) {
                    if (this.#nT) {
                        let t = this._uiManager.imageManager.getSvgUrl(this.#ny);
                        if (t) return t
                    }
                    let t = document.createElement("canvas");
                    return {
                        width: t.width,
                        height: t.height
                    } = this.#nA, t.getContext("2d").drawImage(this.#nA, 0, 0), t.toDataURL()
                }
                if (this.#nT) {
                    let [t, e] = this.pageDimensions, i = Math.round(this.width * t * tr.PDF_TO_CSS_UNITS),
                        s = Math.round(this.height * e * tr.PDF_TO_CSS_UNITS), r = new OffscreenCanvas(i, s);
                    return r.getContext("2d").drawImage(this.#nA, 0, 0, this.#nA.width, this.#nA.height, 0, 0, i, s), r.transferToImageBitmap()
                }
                return structuredClone(this.#nA)
            }

            #r8() {
                this._uiManager._signal && (this.#r1 = new ResizeObserver(t => {
                    let e = t[0].contentRect;
                    e.width && e.height && this.#nP(e.width, e.height)
                }), this.#r1.observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
                    this.#r1?.disconnect(), this.#r1 = null
                }, {once: !0}))
            }

            static deserialize(t, e, i) {
                if (t instanceof iH) return null;
                let s = super.deserialize(t, e, i), {
                    rect: r,
                    bitmapUrl: n,
                    bitmapId: a,
                    isSvg: o,
                    accessibilityData: l
                } = t;
                a && i.imageManager.isValidId(a) ? s.#ny = a : s.#nw = n, s.#nT = o;
                let [h, d] = s.pageDimensions;
                return s.width = (r[2] - r[0]) / h, s.height = (r[3] - r[1]) / d, l && (s.altTextData = l), s
            }

            serialize(t = !1, e = null) {
                if (this.isEmpty()) return null;
                let i = {
                    annotationType: f.STAMP,
                    bitmapId: this.#ny,
                    pageIndex: this.pageIndex,
                    rect: this.getRect(0, 0),
                    rotation: this.rotation,
                    isSvg: this.#nT,
                    structTreeParentId: this._structTreeParentId
                };
                if (t) return i.bitmapUrl = this.#nF(!0), i.accessibilityData = this.altTextData, i;
                let {decorative: s, altText: r} = this.altTextData;
                if (!s && r && (i.accessibilityData = {type: "Figure", alt: r}), null === e) return i;
                e.stamps ||= new Map;
                let n = this.#nT ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
                if (e.stamps.has(this.#ny)) {
                    if (this.#nT) {
                        let t = e.stamps.get(this.#ny);
                        n > t.area && (t.area = n, t.serialized.bitmap.close(), t.serialized.bitmap = this.#nF(!1))
                    }
                } else e.stamps.set(this.#ny, {area: n, serialized: i}), i.bitmap = this.#nF(!1);
                return i
            }
        }

        class iZ {
            #sg;
            #nO = !1;
            #nN = null;
            #nB = null;
            #nH = null;
            #nz = null;
            #nj = null;
            #nU = new Map;
            #n$ = !1;
            #nG = !1;
            #nV = !1;
            #nq = null;
            #k;
            static _initialized = !1;
            static #J = new Map([i$, iQ, iJ, iY].map(t => [t._editorType, t]));

            constructor({
                            uiManager: t,
                            pageIndex: e,
                            div: i,
                            accessibilityManager: s,
                            annotationLayer: r,
                            drawLayer: n,
                            textLayer: a,
                            viewport: o,
                            l10n: l
                        }) {
                let h = [...iZ.#J.values()];
                if (!iZ._initialized) for (let e of (iZ._initialized = !0, h)) e.initialize(l, t);
                t.registerEditorTypes(h), this.#k = t, this.pageIndex = e, this.div = i, this.#sg = s, this.#nN = r, this.viewport = o, this.#nq = a, this.drawLayer = n, this.#k.addLayer(this)
            }

            get isEmpty() {
                return 0 === this.#nU.size
            }

            get isInvisible() {
                return this.isEmpty && this.#k.getMode() === f.NONE
            }

            updateToolbar(t) {
                this.#k.updateToolbar(t)
            }

            updateMode(t = this.#k.getMode()) {
                switch (this.#nW(), t) {
                    case f.NONE:
                        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
                        return;
                    case f.INK:
                        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
                        break;
                    case f.HIGHLIGHT:
                        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
                        break;
                    default:
                        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick()
                }
                this.toggleAnnotationLayerPointerEvents(!1);
                let {classList: e} = this.div;
                for (let i of iZ.#J.values()) e.toggle(`${i._type}Editing`, t === i._editorType);
                this.div.hidden = !1
            }

            hasTextLayer(t) {
                return t === this.#nq?.div
            }

            addInkEditorIfNeeded(t) {
                if (this.#k.getMode() === f.INK) {
                    if (!t) {
                        for (let t of this.#nU.values()) if (t.isEmpty()) {
                            t.setInBackground();
                            return
                        }
                    }
                    this.createAndAddNewEditor({offsetX: 0, offsetY: 0}, !1).setInBackground()
                }
            }

            setEditingState(t) {
                this.#k.setEditingState(t)
            }

            addCommands(t) {
                this.#k.addCommands(t)
            }

            togglePointerEvents(t = !1) {
                this.div.classList.toggle("disabled", !t)
            }

            toggleAnnotationLayerPointerEvents(t = !1) {
                this.#nN?.div.classList.toggle("disabled", !t)
            }

            enable() {
                this.div.tabIndex = 0, this.togglePointerEvents(!0);
                let t = new Set;
                for (let e of this.#nU.values()) e.enableEditing(), e.show(!0), e.annotationElementId && (this.#k.removeChangedExistingAnnotation(e), t.add(e.annotationElementId));
                if (this.#nN) for (let e of this.#nN.getEditableAnnotations()) {
                    if (e.hide(), this.#k.isDeletedAnnotationElement(e.data.id) || t.has(e.data.id)) continue;
                    let i = this.deserialize(e);
                    i && (this.addOrRebuild(i), i.enableEditing())
                }
            }

            disable() {
                this.#nV = !0, this.div.tabIndex = -1, this.togglePointerEvents(!1);
                let t = new Map, e = new Map;
                for (let i of this.#nU.values()) if (i.disableEditing(), i.annotationElementId) {
                    if (null !== i.serialize()) {
                        t.set(i.annotationElementId, i);
                        continue
                    }
                    e.set(i.annotationElementId, i), this.getEditableAnnotation(i.annotationElementId)?.show(), i.remove()
                }
                if (this.#nN) for (let i of this.#nN.getEditableAnnotations()) {
                    let {id: s} = i.data;
                    if (this.#k.isDeletedAnnotationElement(s)) continue;
                    let r = e.get(s);
                    if (r) {
                        r.resetAnnotationElement(i), r.show(!1), i.show();
                        continue
                    }
                    (r = t.get(s)) && (this.#k.addChangedExistingAnnotation(r), r.renderAnnotationElement(i), r.show(!1)), i.show()
                }
                this.#nW(), this.isEmpty && (this.div.hidden = !0);
                let {classList: i} = this.div;
                for (let t of iZ.#J.values()) i.remove(`${t._type}Editing`);
                this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), this.#nV = !1
            }

            getEditableAnnotation(t) {
                return this.#nN?.getEditableAnnotation(t) || null
            }

            setActiveEditor(t) {
                this.#k.getActive() !== t && this.#k.setActiveEditor(t)
            }

            enableTextSelection() {
                this.div.tabIndex = -1, this.#nq?.div && !this.#nz && (this.#nz = this.#nK.bind(this), this.#nq.div.addEventListener("pointerdown", this.#nz, {signal: this.#k._signal}), this.#nq.div.classList.add("highlighting"))
            }

            disableTextSelection() {
                this.div.tabIndex = 0, this.#nq?.div && this.#nz && (this.#nq.div.removeEventListener("pointerdown", this.#nz), this.#nz = null, this.#nq.div.classList.remove("highlighting"))
            }

            #nK(t) {
                if (this.#k.unselectAll(), t.target === this.#nq.div) {
                    let {isMac: e} = G.platform;
                    0 !== t.button || t.ctrlKey && e || (this.#k.showAllEditors("highlight", !0, !0), this.#nq.div.classList.add("free"), iY.startHighlighting(this, "ltr" === this.#k.direction, t), this.#nq.div.addEventListener("pointerup", () => {
                        this.#nq.div.classList.remove("free")
                    }, {once: !0, signal: this.#k._signal}), t.preventDefault())
                }
            }

            enableClick() {
                if (this.#nH) return;
                let t = this.#k._signal;
                this.#nH = this.pointerdown.bind(this), this.#nB = this.pointerup.bind(this), this.div.addEventListener("pointerdown", this.#nH, {signal: t}), this.div.addEventListener("pointerup", this.#nB, {signal: t})
            }

            disableClick() {
                this.#nH && (this.div.removeEventListener("pointerdown", this.#nH), this.div.removeEventListener("pointerup", this.#nB), this.#nH = null, this.#nB = null)
            }

            attach(t) {
                this.#nU.set(t.id, t);
                let {annotationElementId: e} = t;
                e && this.#k.isDeletedAnnotationElement(e) && this.#k.removeDeletedAnnotationElement(t)
            }

            detach(t) {
                this.#nU.delete(t.id), this.#sg?.removePointerInTextLayer(t.contentDiv), !this.#nV && t.annotationElementId && this.#k.addDeletedAnnotationElement(t)
            }

            remove(t) {
                this.detach(t), this.#k.removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, this.#nG || this.addInkEditorIfNeeded(!1)
            }

            changeParent(t) {
                t.parent !== this && (t.parent && t.annotationElementId && (this.#k.addDeletedAnnotationElement(t.annotationElementId), tN.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)))
            }

            add(t) {
                if (t.parent !== this || !t.isAttachedToDOM) {
                    if (this.changeParent(t), this.#k.addEditor(t), this.attach(t), !t.isAttachedToDOM) {
                        let e = t.render();
                        this.div.append(e), t.isAttachedToDOM = !0
                    }
                    t.fixAndSetPosition(), t.onceAdded(), this.#k.addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData)
                }
            }

            moveEditorInDOM(t) {
                if (!t.isAttachedToDOM) return;
                let {activeElement: e} = document;
                t.div.contains(e) && !this.#nj && (t._focusEventsAllowed = !1, this.#nj = setTimeout(() => {
                    this.#nj = null, t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
                        t._focusEventsAllowed = !0
                    }, {once: !0, signal: this.#k._signal}), e.focus())
                }, 0)), t._structTreeParentId = this.#sg?.moveElementInDOM(this.div, t.div, t.contentDiv, !0)
            }

            addOrRebuild(t) {
                t.needsToBeRebuilt() ? (t.parent ||= this, t.rebuild(), t.show()) : this.add(t)
            }

            addUndoableEditor(t) {
                this.addCommands({
                    cmd: () => t._uiManager.rebuild(t), undo: () => {
                        t.remove()
                    }, mustExec: !1
                })
            }

            getNextId() {
                return this.#k.getId()
            }

            get #nX() {
                return iZ.#J.get(this.#k.getMode())
            }

            get _signal() {
                return this.#k._signal
            }

            #nY(t) {
                let e = this.#nX;
                return e ? new e.prototype.constructor(t) : null
            }

            canCreateNewEmptyEditor() {
                return this.#nX?.canCreateNewEmptyEditor()
            }

            pasteEditor(t, e) {
                this.#k.updateToolbar(t), this.#k.updateMode(t);
                let {offsetX: i, offsetY: s} = this.#nQ(), r = this.getNextId(),
                    n = this.#nY({parent: this, id: r, x: i, y: s, uiManager: this.#k, isCentered: !0, ...e});
                n && this.add(n)
            }

            deserialize(t) {
                return iZ.#J.get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, this.#k) || null
            }

            createAndAddNewEditor(t, e, i = {}) {
                let s = this.getNextId(), r = this.#nY({
                    parent: this,
                    id: s,
                    x: t.offsetX,
                    y: t.offsetY,
                    uiManager: this.#k,
                    isCentered: e, ...i
                });
                return r && this.add(r), r
            }

            #nQ() {
                let {x: t, y: e, width: i, height: s} = this.div.getBoundingClientRect(),
                    r = Math.min(window.innerWidth, t + i), n = Math.min(window.innerHeight, e + s),
                    a = (Math.max(0, t) + r) / 2 - t,
                    o = (Math.max(0, e) + n) / 2 - e, [l, h] = this.viewport.rotation % 180 == 0 ? [a, o] : [o, a];
                return {offsetX: l, offsetY: h}
            }

            addNewEditor() {
                this.createAndAddNewEditor(this.#nQ(), !0)
            }

            setSelected(t) {
                this.#k.setSelected(t)
            }

            toggleSelected(t) {
                this.#k.toggleSelected(t)
            }

            isSelected(t) {
                return this.#k.isSelected(t)
            }

            unselect(t) {
                this.#k.unselect(t)
            }

            pointerup(t) {
                let {isMac: e} = G.platform;
                if (0 === t.button && (!t.ctrlKey || !e) && t.target === this.div && this.#n$) {
                    if (this.#n$ = !1, !this.#nO) {
                        this.#nO = !0;
                        return
                    }
                    if (this.#k.getMode() === f.STAMP) {
                        this.#k.unselectAll();
                        return
                    }
                    this.createAndAddNewEditor(t, !1)
                }
            }

            pointerdown(t) {
                if (this.#k.getMode() === f.HIGHLIGHT && this.enableTextSelection(), this.#n$) {
                    this.#n$ = !1;
                    return
                }
                let {isMac: e} = G.platform;
                if (0 !== t.button || t.ctrlKey && e || t.target !== this.div) return;
                this.#n$ = !0;
                let i = this.#k.getActive();
                this.#nO = !i || i.isEmpty()
            }

            findNewParent(t, e, i) {
                let s = this.#k.findParent(e, i);
                return null !== s && s !== this && (s.changeParent(t), !0)
            }

            destroy() {
                for (let t of (this.#k.getActive()?.parent === this && (this.#k.commitOrRemove(), this.#k.setActiveEditor(null)), this.#nj && (clearTimeout(this.#nj), this.#nj = null), this.#nU.values())) this.#sg?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = !1, t.div.remove();
                this.div = null, this.#nU.clear(), this.#k.removeLayer(this)
            }

            #nW() {
                for (let t of (this.#nG = !0, this.#nU.values())) t.isEmpty() && t.remove();
                this.#nG = !1
            }

            render({viewport: t}) {
                for (let e of (this.viewport = t, tC(this.div, t), this.#k.getEditors(this.pageIndex))) this.add(e), e.rebuild();
                this.updateMode()
            }

            update({viewport: t}) {
                this.#k.commitOrRemove(), this.#nW();
                let e = this.viewport.rotation, i = t.rotation;
                if (this.viewport = t, tC(this.div, {rotation: i}), e !== i) for (let t of this.#nU.values()) t.rotate(i);
                this.addInkEditorIfNeeded(!1)
            }

            get pageDimensions() {
                let {pageWidth: t, pageHeight: e} = this.viewport.rawDims;
                return [t, e]
            }

            get scale() {
                return this.#k.viewParameters.realScale
            }
        }

        class i0 {
            #i4 = null;
            #l = 0;
            #nJ = new Map;
            #nZ = new Map;

            constructor({pageIndex: t}) {
                this.pageIndex = t
            }

            setParent(t) {
                if (!this.#i4) {
                    this.#i4 = t;
                    return
                }
                if (this.#i4 !== t) {
                    if (this.#nJ.size > 0) for (let e of this.#nJ.values()) e.remove(), t.append(e);
                    this.#i4 = t
                }
            }

            static get _svgFactory() {
                return I(this, "_svgFactory", new td)
            }

            static #n0(t, {x: e = 0, y: i = 0, width: s = 1, height: r = 1} = {}) {
                let {style: n} = t;
                n.top = `${100 * i}%`, n.left = `${100 * e}%`, n.width = `${100 * s}%`, n.height = `${100 * r}%`
            }

            #n1(t) {
                let e = i0._svgFactory.create(1, 1, !0);
                return this.#i4.append(e), e.setAttribute("aria-hidden", !0), i0.#n0(e, t), e
            }

            #n2(t, e) {
                let i = i0._svgFactory.createElement("clipPath");
                t.append(i);
                let s = `clip_${e}`;
                i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
                let r = i0._svgFactory.createElement("use");
                return i.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), s
            }

            highlight(t, e, i, s = !1) {
                let r = this.#l++, n = this.#n1(t.box);
                n.classList.add("highlight"), t.free && n.classList.add("free");
                let a = i0._svgFactory.createElement("defs");
                n.append(a);
                let o = i0._svgFactory.createElement("path");
                a.append(o);
                let l = `path_p${this.pageIndex}_${r}`;
                o.setAttribute("id", l), o.setAttribute("d", t.toSVGPath()), s && this.#nZ.set(r, o);
                let h = this.#n2(a, l), d = i0._svgFactory.createElement("use");
                return n.append(d), n.setAttribute("fill", e), n.setAttribute("fill-opacity", i), d.setAttribute("href", `#${l}`), this.#nJ.set(r, n), {
                    id: r,
                    clipPathId: `url(#${h})`
                }
            }

            highlightOutline(t) {
                let e;
                let i = this.#l++, s = this.#n1(t.box);
                s.classList.add("highlightOutline");
                let r = i0._svgFactory.createElement("defs");
                s.append(r);
                let n = i0._svgFactory.createElement("path");
                r.append(n);
                let a = `path_p${this.pageIndex}_${i}`;
                if (n.setAttribute("id", a), n.setAttribute("d", t.toSVGPath()), n.setAttribute("vector-effect", "non-scaling-stroke"), t.free) {
                    s.classList.add("free");
                    let t = i0._svgFactory.createElement("mask");
                    r.append(t), e = `mask_p${this.pageIndex}_${i}`, t.setAttribute("id", e), t.setAttribute("maskUnits", "objectBoundingBox");
                    let n = i0._svgFactory.createElement("rect");
                    t.append(n), n.setAttribute("width", "1"), n.setAttribute("height", "1"), n.setAttribute("fill", "white");
                    let o = i0._svgFactory.createElement("use");
                    t.append(o), o.setAttribute("href", `#${a}`), o.setAttribute("stroke", "none"), o.setAttribute("fill", "black"), o.setAttribute("fill-rule", "nonzero"), o.classList.add("mask")
                }
                let o = i0._svgFactory.createElement("use");
                s.append(o), o.setAttribute("href", `#${a}`), e && o.setAttribute("mask", `url(#${e})`);
                let l = o.cloneNode();
                return s.append(l), o.classList.add("mainOutline"), l.classList.add("secondaryOutline"), this.#nJ.set(i, s), i
            }

            finalizeLine(t, e) {
                let i = this.#nZ.get(t);
                this.#nZ.delete(t), this.updateBox(t, e.box), i.setAttribute("d", e.toSVGPath())
            }

            updateLine(t, e) {
                this.#nJ.get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath())
            }

            removeFreeHighlight(t) {
                this.remove(t), this.#nZ.delete(t)
            }

            updatePath(t, e) {
                this.#nZ.get(t).setAttribute("d", e.toSVGPath())
            }

            updateBox(t, e) {
                i0.#n0(this.#nJ.get(t), e)
            }

            show(t, e) {
                this.#nJ.get(t).classList.toggle("hidden", !e)
            }

            rotate(t, e) {
                this.#nJ.get(t).setAttribute("data-main-rotation", e)
            }

            changeColor(t, e) {
                this.#nJ.get(t).setAttribute("fill", e)
            }

            changeOpacity(t, e) {
                this.#nJ.get(t).setAttribute("fill-opacity", e)
            }

            addClass(t, e) {
                this.#nJ.get(t).classList.add(e)
            }

            removeClass(t, e) {
                this.#nJ.get(t).classList.remove(e)
            }

            remove(t) {
                null !== this.#i4 && (this.#nJ.get(t).remove(), this.#nJ.delete(t))
            }

            destroy() {
                for (let t of (this.#i4 = null, this.#nJ.values())) t.remove();
                this.#nJ.clear()
            }
        }

        var i1 = h.AbortException, i2 = h.AnnotationEditorLayer, i5 = h.AnnotationEditorParamsType,
            i4 = h.AnnotationEditorType, i3 = h.AnnotationEditorUIManager, i6 = h.AnnotationLayer,
            i9 = h.AnnotationMode, i7 = h.CMapCompressionType, i8 = h.ColorPicker, st = h.DOMSVGFactory,
            se = h.DrawLayer, si = h.FeatureTest, ss = h.GlobalWorkerOptions, sr = h.ImageKind,
            sn = h.InvalidPDFException, sa = h.MissingPDFException, so = h.OPS, sl = h.Outliner,
            sh = h.PDFDataRangeTransport, sd = h.PDFDateString, sc = h.PDFWorker, su = h.PasswordResponses,
            sp = h.PermissionFlag, sg = h.PixelsPerInch, sf = h.RenderingCancelledException, sm = h.TextLayer,
            sv = h.UnexpectedResponseException, sb = h.Util, sA = h.VerbosityLevel, sy = h.XfaLayer, s_ = h.build,
            sw = h.createValidAbsoluteUrl, sx = h.fetchData, sE = h.getDocument, sS = h.getFilenameFromUrl,
            sC = h.getPdfFilenameFromUrl, sT = h.getXfaPageViewport, sM = h.isDataScheme, sR = h.isPdfFile,
            sk = h.noContextMenu, sL = h.normalizeUnicode, sI = h.renderTextLayer, sP = h.setLayerDimensions,
            sD = h.shadow, sF = h.updateTextLayer, sO = h.version
    }
}]);