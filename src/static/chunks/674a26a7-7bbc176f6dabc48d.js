"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[251], {
    84105: function (e, r, t) {
        let a;
        t.d(r, {
            P6: function () {
                return iT
            }, ij: function () {
                return function e(r, t) {
                    en();
                    var n, s, i, c, o, l, f, h = t || {};
                    if ("undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer) return e(new Uint8Array(r), ((h = rd(h)).type = "array", h));
                    "undefined" != typeof Uint8Array && r instanceof Uint8Array && !h.type && (h.type = "undefined" != typeof Deno ? "buffer" : "array");
                    var u = r, d = [0, 0, 0, 0], p = !1;
                    if (h.cellStyles && (h.cellNF = !0, h.sheetStubs = !0), sf = {}, h.dateNF && (sf.dateNF = h.dateNF), h.type || (h.type = ed && X.isBuffer(r) ? "buffer" : "base64"), "file" != h.type || (h.type = ed ? "buffer" : "binary", u = function (e) {
                        if (void 0 !== a) return a.readFileSync(e);
                        if ("undefined" != typeof Deno) return Deno.readFileSync(e);
                        if ("undefined" != typeof $ && "undefined" != typeof File && "undefined" != typeof Folder) try {
                            var r = File(e);
                            r.open("r"), r.encoding = "binary";
                            var t = r.read();
                            return r.close(), t
                        } catch (e) {
                            if (!e.message || !e.message.match(/onstruct/)) throw e
                        }
                        throw Error("Cannot access file " + e)
                    }(r), "undefined" == typeof Uint8Array || ed || (h.type = "array")), "string" == h.type && (p = !0, h.type = "binary", h.codepage = 65001, u = r.match(/[^\x00-\x7F]/) ? rX(r) : r), "array" == h.type && "undefined" != typeof Uint8Array && r instanceof Uint8Array && "undefined" != typeof ArrayBuffer) {
                        var g = new Uint8Array(new ArrayBuffer(3));
                        if (g.foo = "bar", !g.foo) return (h = rd(h)).type = "array", e(eT(u), h)
                    }
                    switch ((d = ic(u, h))[0]) {
                        case 208:
                            if (207 === d[1] && 17 === d[2] && 224 === d[3] && 161 === d[4] && 177 === d[5] && 26 === d[6] && 225 === d[7]) return i = e9.read(u, h), c = h, e9.find(i, "EncryptedPackage") ? function (e, r) {
                                var t = r || {}, a = "Workbook", n = e9.find(e, a);
                                try {
                                    if (a = "/!DataSpaces/Version", !(n = e9.find(e, a)) || !n.content || (s = n.content, (i = {}).id = s.read_shift(0, "lpp4"), i.R = nl(s, 4), i.U = nl(s, 4), i.W = nl(s, 4), a = "/!DataSpaces/DataSpaceMap", !(n = e9.find(e, a)) || !n.content)) throw Error("ECMA-376 Encrypted file missing " + a);
                                    var s, i, c = function (e) {
                                        var r = [];
                                        e.l += 4;
                                        for (var t = e.read_shift(4); t-- > 0;) r.push(function (e) {
                                            for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), s = []; n-- > 0;) s.push({
                                                t: e.read_shift(4),
                                                v: e.read_shift(0, "lpp4")
                                            });
                                            if (a.name = e.read_shift(0, "lpp4"), a.comps = s, e.l != t) throw Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
                                            return a
                                        }(e));
                                        return r
                                    }(n.content);
                                    if (1 !== c.length || 1 !== c[0].comps.length || 0 !== c[0].comps[0].t || "StrongEncryptionDataSpace" !== c[0].name || "EncryptedPackage" !== c[0].comps[0].v) throw Error("ECMA-376 Encrypted file bad " + a);
                                    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", !(n = e9.find(e, a)) || !n.content) throw Error("ECMA-376 Encrypted file missing " + a);
                                    var o = function (e) {
                                        var r = [];
                                        e.l += 4;
                                        for (var t = e.read_shift(4); t-- > 0;) r.push(e.read_shift(0, "lpp4"));
                                        return r
                                    }(n.content);
                                    if (1 != o.length || "StrongEncryptionTransform" != o[0]) throw Error("ECMA-376 Encrypted file bad " + a);
                                    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", !(n = e9.find(e, a)) || !n.content) throw Error("ECMA-376 Encrypted file missing " + a);
                                    !function (e) {
                                        var r,
                                            t = (r = {}, e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = nl(e, 4), r.U = nl(e, 4), r.W = nl(e, 4), r);
                                        if (t.ename = e.read_shift(0, "8lpp4"), t.blksz = e.read_shift(4), t.cmode = e.read_shift(4), 4 != e.read_shift(4)) throw Error("Bad !Primary record")
                                    }(n.content)
                                } catch (e) {
                                }
                                if (a = "/EncryptionInfo", !(n = e9.find(e, a)) || !n.content) throw Error("ECMA-376 Encrypted file missing " + a);
                                var l = function (e) {
                                    var r, t, a, n = nl(e);
                                    switch (n.Minor) {
                                        case 2:
                                            return [n.Minor, function (e) {
                                                if ((63 & e.read_shift(4)) != 36) throw Error("EncryptionInfo mismatch");
                                                var r = e.read_shift(4);
                                                return {t: "Std", h: nf(e, r), v: nh(e, e.length - e.l)}
                                            }(e, n)];
                                        case 3:
                                            return [n.Minor, function () {
                                                throw Error("File is password-protected: ECMA-376 Extensible")
                                            }(e, n)];
                                        case 4:
                                            return [n.Minor, (r = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"], e.l += 4, t = e.read_shift(e.length - e.l, "utf8"), a = {}, t.replace(rx, function (e) {
                                                var t = rF(e);
                                                switch (rP(t[0])) {
                                                    case"<?xml":
                                                    case"<encryption":
                                                    case"</encryption>":
                                                    case"</keyEncryptors>":
                                                    case"</keyEncryptor>":
                                                        break;
                                                    case"<keyData":
                                                        r.forEach(function (e) {
                                                            a[e] = t[e]
                                                        });
                                                        break;
                                                    case"<dataIntegrity":
                                                        a.encryptedHmacKey = t.encryptedHmacKey, a.encryptedHmacValue = t.encryptedHmacValue;
                                                        break;
                                                    case"<keyEncryptors>":
                                                    case"<keyEncryptors":
                                                        a.encs = [];
                                                        break;
                                                    case"<keyEncryptor":
                                                        a.uri = t.uri;
                                                        break;
                                                    case"<encryptedKey":
                                                        a.encs.push(t);
                                                        break;
                                                    default:
                                                        throw t[0]
                                                }
                                            }), a)]
                                    }
                                    throw Error("ECMA-376 Encrypted file unrecognized Version: " + n.Minor)
                                }(n.content);
                                if (a = "/EncryptedPackage", !(n = e9.find(e, a)) || !n.content) throw Error("ECMA-376 Encrypted file missing " + a);
                                if (4 == l[0] && "undefined" != typeof decrypt_agile) return decrypt_agile(l[1], n.content, t.password || "", t);
                                if (2 == l[0] && "undefined" != typeof decrypt_std76) return decrypt_std76(l[1], n.content, t.password || "", t);
                                throw Error("File is password-protected")
                            }(i, c) : sj(i, c);
                            break;
                        case 9:
                            if (d[1] <= 8) return sj(u, h);
                            break;
                        case 60:
                            return sV(u, h);
                        case 73:
                            if (73 === d[1] && 42 === d[2] && 0 === d[3]) throw Error("TIFF Image File is not a spreadsheet");
                            if (68 === d[1]) return function (e, r) {
                                var t = r || {}, a = !!t.WTF;
                                t.WTF = !0;
                                try {
                                    var n = a3.to_workbook(e, t);
                                    return t.WTF = a, n
                                } catch (n) {
                                    if (t.WTF = a, !n.message.match(/SYLK bad record ID/) && a) throw n;
                                    return a8.to_workbook(e, r)
                                }
                            }(u, h);
                            break;
                        case 84:
                            if (65 === d[1] && 66 === d[2] && 76 === d[3]) return a5.to_workbook(u, h);
                            break;
                        case 80:
                            return 75 === d[1] && d[2] < 9 && d[3] < 9 ? (n = u, (s = h || {}).type || (s.type = ed && X.isBuffer(n) ? "buffer" : "base64"), function (e, r) {
                                if (e5(), is(r = r || {}), rw(e, "META-INF/manifest.xml") || rw(e, "objectdata.xml")) return function (e, r) {
                                    r = r || {}, rw(e, "META-INF/manifest.xml") && function (e, r) {
                                        for (var t, a, n = r4(e); t = r3.exec(n);) switch (t[3]) {
                                            case"manifest":
                                                break;
                                            case"file-entry":
                                                if ("/" == (a = rF(t[0], !1)).path && "application/vnd.oasis.opendocument.spreadsheet" !== a.type) throw Error("This OpenDocument is not a spreadsheet");
                                                break;
                                            case"encryption-data":
                                            case"algorithm":
                                            case"start-key-generation":
                                            case"key-derivation":
                                                throw Error("Unsupported ODS Encryption");
                                            default:
                                                if (r && r.WTF) throw t
                                        }
                                    }(rS(e, "META-INF/manifest.xml"), r);
                                    var t = rk(e, "content.xml");
                                    if (!t) throw Error("Missing content.xml in ODS / UOF file");
                                    var a = s2(rK(t), r);
                                    return rw(e, "meta.xml") && (a.Props = ah(rS(e, "meta.xml"))), a
                                }(e, r);
                                if (rw(e, "Index/Document.iwa")) {
                                    if ("undefined" == typeof Uint8Array) throw Error("NUMBERS file parsing requires Uint8Array support");
                                    if (e.FileIndex) return ia(e);
                                    var t, a, n, s, i, c, o, l, f, h, u, d, p, g, m, v, b, T = e9.utils.cfb_new();
                                    return ry(e).forEach(function (r) {
                                        !function (e, r, t) {
                                            if (e.FullPaths) {
                                                if ("string" == typeof t) {
                                                    var a;
                                                    return a = ed ? ep(t) : function (e) {
                                                        for (var r = [], t = 0, a = e.length + 250, n = eg(e.length + 255), s = 0; s < e.length; ++s) {
                                                            var i = e.charCodeAt(s);
                                                            if (i < 128) n[t++] = i; else if (i < 2048) n[t++] = 192 | i >> 6 & 31, n[t++] = 128 | 63 & i; else if (i >= 55296 && i < 57344) {
                                                                i = (1023 & i) + 64;
                                                                var c = 1023 & e.charCodeAt(++s);
                                                                n[t++] = 240 | i >> 8 & 7, n[t++] = 128 | i >> 2 & 63, n[t++] = 128 | c >> 6 & 15 | (3 & i) << 4, n[t++] = 128 | 63 & c
                                                            } else n[t++] = 224 | i >> 12 & 15, n[t++] = 128 | i >> 6 & 63, n[t++] = 128 | 63 & i;
                                                            t > a && (r.push(n.slice(0, t)), t = 0, n = eg(65535), a = 65530)
                                                        }
                                                        return r.push(n.slice(0, t)), eE(r)
                                                    }(t), e9.utils.cfb_add(e, r, a)
                                                }
                                                e9.utils.cfb_add(e, r, t)
                                            } else e.file(r, t)
                                        }(T, r, function e(r, t, a) {
                                            if (!a) return rE(rA(r, t));
                                            if (!t) return null;
                                            try {
                                                return e(r, t)
                                            } catch (e) {
                                                return null
                                            }
                                        }(e, r))
                                    }), ia(T)
                                }
                                if (!rw(e, "[Content_Types].xml")) {
                                    if (rw(e, "index.xml.gz")) throw Error("Unsupported NUMBERS 08 file");
                                    if (rw(e, "index.xml")) throw Error("Unsupported NUMBERS 09 file");
                                    throw Error("Unsupported ZIP file")
                                }
                                var E = ry(e), w = function (e) {
                                    var r = {
                                        workbooks: [],
                                        sheets: [],
                                        charts: [],
                                        dialogs: [],
                                        macros: [],
                                        rels: [],
                                        strs: [],
                                        comments: [],
                                        threadedcomments: [],
                                        links: [],
                                        coreprops: [],
                                        extprops: [],
                                        custprops: [],
                                        themes: [],
                                        styles: [],
                                        calcchains: [],
                                        vba: [],
                                        drawings: [],
                                        metadata: [],
                                        people: [],
                                        TODO: [],
                                        xmlns: ""
                                    };
                                    if (!e || !e.match) return r;
                                    var t = {};
                                    if ((e.match(rx) || []).forEach(function (e) {
                                        var a = rF(e);
                                        switch (a[0].replace(rN, "<")) {
                                            case"<?xml":
                                                break;
                                            case"<Types":
                                                r.xmlns = a["xmlns" + (a[0].match(/<(\w+):/) || ["", ""])[1]];
                                                break;
                                            case"<Default":
                                                t[a.Extension] = a.ContentType;
                                                break;
                                            case"<Override":
                                                void 0 !== r[as[a.ContentType]] && r[as[a.ContentType]].push(a.PartName)
                                        }
                                    }), r.xmlns !== r5.CT) throw Error("Unknown Namespace: " + r.xmlns);
                                    return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r
                                }(rk(e, "[Content_Types].xml")), A = !1;
                                if (0 === w.workbooks.length && rS(e, m = "xl/workbook.xml", !0) && w.workbooks.push(m), 0 === w.workbooks.length) {
                                    if (!rS(e, m = "xl/workbook.bin", !0)) throw Error("Could not find workbook");
                                    w.workbooks.push(m), A = !0
                                }
                                "bin" == w.workbooks[0].slice(-3) && (A = !0);
                                var S = {}, k = {};
                                if (!r.bookSheets && !r.bookProps) {
                                    if (sl = [], w.sst) try {
                                        sl = function (e, r, t) {
                                            if (".bin" === r.slice(-4)) {
                                                var a, n;
                                                return a = [], n = !1, tN(e, function (e, r, s) {
                                                    switch (s) {
                                                        case 159:
                                                            a.Count = e[0], a.Unique = e[1];
                                                            break;
                                                        case 19:
                                                            a.push(e);
                                                            break;
                                                        case 160:
                                                            return !0;
                                                        case 35:
                                                            n = !0;
                                                            break;
                                                        case 36:
                                                            n = !1;
                                                            break;
                                                        default:
                                                            if (r.T, !n || t.WTF) throw Error("Unexpected record 0x" + s.toString(16))
                                                    }
                                                }), a
                                            }
                                            return function (e, r) {
                                                var t = [], a = "";
                                                if (!e) return t;
                                                var n = e.match(ns);
                                                if (n) {
                                                    a = n[2].replace(ni, "").split(nc);
                                                    for (var s = 0; s != a.length; ++s) {
                                                        var i = nn(a[s].trim(), r);
                                                        null != i && (t[t.length] = i)
                                                    }
                                                    n = rF(n[1]), t.Count = n.count, t.Unique = n.uniqueCount
                                                }
                                                return t
                                            }(e, t)
                                        }(rS(e, ii(w.sst)), w.sst, r)
                                    } catch (e) {
                                        if (r.WTF) throw e
                                    }
                                    r.cellStyles && w.themes.length && (t = rk(e, w.themes[0].replace(/^\//, ""), !0) || "", w.themes[0], S = nU(t, r)), w.style && (a = rS(e, ii(w.style)), n = w.style, s = S, i = r, k = ".bin" === n.slice(-4) ? function (e, r, t) {
                                        var a = {};
                                        for (var n in a.NumberFmt = [], ex) a.NumberFmt[n] = ex[n];
                                        a.CellXf = [], a.Fonts = [];
                                        var s = [], i = !1;
                                        return tN(e, function (e, n, c) {
                                            switch (c) {
                                                case 44:
                                                    a.NumberFmt[e[0]] = e[1], e3(e[1], e[0]);
                                                    break;
                                                case 43:
                                                    a.Fonts.push(e), null != e.color.theme && r && r.themeElements && r.themeElements.clrScheme && (e.color.rgb = nv(r.themeElements.clrScheme[e.color.theme].rgb, e.color.tint || 0));
                                                    break;
                                                case 1025:
                                                case 45:
                                                case 46:
                                                case 48:
                                                case 507:
                                                case 572:
                                                case 475:
                                                case 1171:
                                                case 2102:
                                                case 1130:
                                                case 512:
                                                case 2095:
                                                case 3072:
                                                    break;
                                                case 47:
                                                    617 == s[s.length - 1] && a.CellXf.push(e);
                                                    break;
                                                case 35:
                                                    i = !0;
                                                    break;
                                                case 36:
                                                    i = !1;
                                                    break;
                                                case 37:
                                                    s.push(c), i = !0;
                                                    break;
                                                case 38:
                                                    s.pop(), i = !1;
                                                    break;
                                                default:
                                                    if (n.T > 0) s.push(c); else if (n.T < 0) s.pop(); else if (!i || t.WTF && 37 != s[s.length - 1]) throw Error("Unexpected record 0x" + c.toString(16))
                                            }
                                        }), a
                                    }(a, s, i) : nR(a, s, i))
                                }
                                w.links.map(function (t) {
                                    try {
                                        var a, n;
                                        return ao(rk(e, ac(ii(t))), t), a = rS(e, ii(t)), n = r, ".bin" === t.slice(-4) ? function (e, r, t, a) {
                                            if (!e) return e;
                                            var n = a || {}, s = !1;
                                            tN(e, function (e, r, t) {
                                                switch (t) {
                                                    case 359:
                                                    case 363:
                                                    case 364:
                                                    case 366:
                                                    case 367:
                                                    case 368:
                                                    case 369:
                                                    case 370:
                                                    case 371:
                                                    case 472:
                                                    case 577:
                                                    case 578:
                                                    case 579:
                                                    case 580:
                                                    case 581:
                                                    case 582:
                                                    case 583:
                                                    case 584:
                                                    case 585:
                                                    case 586:
                                                    case 587:
                                                        break;
                                                    case 35:
                                                        s = !0;
                                                        break;
                                                    case 36:
                                                        s = !1;
                                                        break;
                                                    default:
                                                        if (r.T) ; else if (!s || n.WTF) throw Error("Unexpected record 0x" + t.toString(16))
                                                }
                                            }, n)
                                        }(a, 0, 0, n) : void 0
                                    } catch (e) {
                                    }
                                });
                                var y = function (e, r, t) {
                                    if (".bin" === r.slice(-4)) {
                                        var a, n, s, i, c, o;
                                        return n = {
                                            AppVersion: {},
                                            WBProps: {},
                                            WBView: [],
                                            Sheets: [],
                                            CalcPr: {},
                                            xmlns: ""
                                        }, s = [], i = !1, (a = t) || (a = {}), a.biff = 12, c = [], (o = [[]]).SheetNames = [], o.XTI = [], sK[16] = {
                                            n: "BrtFRTArchID$",
                                            f: sM
                                        }, tN(e, function (e, r, t) {
                                            switch (t) {
                                                case 156:
                                                    o.SheetNames.push(e.name), n.Sheets.push(e);
                                                    break;
                                                case 153:
                                                    n.WBProps = e;
                                                    break;
                                                case 39:
                                                    null != e.Sheet && (a.SID = e.Sheet), e.Ref = sr(e.Ptg, null, null, o, a), delete a.SID, delete e.Ptg, c.push(e);
                                                    break;
                                                case 1036:
                                                case 361:
                                                case 2071:
                                                case 158:
                                                case 143:
                                                case 664:
                                                case 353:
                                                case 3072:
                                                case 3073:
                                                case 534:
                                                case 677:
                                                case 157:
                                                case 610:
                                                case 2050:
                                                case 155:
                                                case 548:
                                                case 676:
                                                case 128:
                                                case 665:
                                                case 2128:
                                                case 2125:
                                                case 549:
                                                case 2053:
                                                case 596:
                                                case 2076:
                                                case 2075:
                                                case 2082:
                                                case 397:
                                                case 154:
                                                case 1117:
                                                case 553:
                                                case 2091:
                                                case 16:
                                                    break;
                                                case 357:
                                                case 358:
                                                case 355:
                                                case 667:
                                                    o[0].length ? o.push([t, e]) : o[0] = [t, e], o[o.length - 1].XTI = [];
                                                    break;
                                                case 362:
                                                    0 === o.length && (o[0] = [], o[0].XTI = []), o[o.length - 1].XTI = o[o.length - 1].XTI.concat(e), o.XTI = o.XTI.concat(e);
                                                    break;
                                                case 35:
                                                case 37:
                                                    s.push(t), i = !0;
                                                    break;
                                                case 36:
                                                case 38:
                                                    s.pop(), i = !1;
                                                    break;
                                                default:
                                                    if (r.T) ; else if (!i || a.WTF && 37 != s[s.length - 1] && 35 != s[s.length - 1]) throw Error("Unexpected record 0x" + t.toString(16))
                                            }
                                        }, a), sF(n), n.Names = c, n.supbooks = o, n
                                    }
                                    return function (e, r) {
                                        if (!e) throw Error("Could not find file");
                                        var t = {
                                            AppVersion: {},
                                            WBProps: {},
                                            WBView: [],
                                            Sheets: [],
                                            CalcPr: {},
                                            Names: [],
                                            xmlns: ""
                                        }, a = !1, n = "xmlns", s = {}, i = 0;
                                        if (e.replace(rx, function (c, o) {
                                            var l = rF(c);
                                            switch (rP(l[0])) {
                                                case"<?xml":
                                                case"</workbook>":
                                                case"<fileVersion/>":
                                                case"</fileVersion>":
                                                case"<fileSharing":
                                                case"<fileSharing/>":
                                                case"</workbookPr>":
                                                case"<workbookProtection":
                                                case"<workbookProtection/>":
                                                case"<bookViews":
                                                case"<bookViews>":
                                                case"</bookViews>":
                                                case"</workbookView>":
                                                case"<sheets":
                                                case"<sheets>":
                                                case"</sheets>":
                                                case"</sheet>":
                                                case"<functionGroups":
                                                case"<functionGroups/>":
                                                case"<functionGroup":
                                                case"<externalReferences":
                                                case"</externalReferences>":
                                                case"<externalReferences>":
                                                case"<externalReference":
                                                case"<definedNames/>":
                                                case"<definedName/>":
                                                case"</calcPr>":
                                                case"<oleSize":
                                                case"<customWorkbookViews>":
                                                case"</customWorkbookViews>":
                                                case"<customWorkbookViews":
                                                case"<customWorkbookView":
                                                case"</customWorkbookView>":
                                                case"<pivotCaches>":
                                                case"</pivotCaches>":
                                                case"<pivotCaches":
                                                case"<pivotCache":
                                                case"<smartTagPr":
                                                case"<smartTagPr/>":
                                                case"<smartTagTypes":
                                                case"<smartTagTypes>":
                                                case"</smartTagTypes>":
                                                case"<smartTagType":
                                                case"<webPublishing":
                                                case"<webPublishing/>":
                                                case"<fileRecoveryPr":
                                                case"<fileRecoveryPr/>":
                                                case"<webPublishObjects>":
                                                case"<webPublishObjects":
                                                case"</webPublishObjects>":
                                                case"<webPublishObject":
                                                case"<extLst":
                                                case"<extLst>":
                                                case"</extLst>":
                                                case"<extLst/>":
                                                case"<ArchID":
                                                case"<revisionPtr":
                                                    break;
                                                case"<workbook":
                                                    c.match(sL) && (n = "xmlns" + c.match(/<(\w+):/)[1]), t.xmlns = l[n];
                                                    break;
                                                case"<fileVersion":
                                                    delete l[0], t.AppVersion = l;
                                                    break;
                                                case"<workbookPr":
                                                case"<workbookPr/>":
                                                    sO.forEach(function (e) {
                                                        if (null != l[e[0]]) switch (e[2]) {
                                                            case"bool":
                                                                t.WBProps[e[0]] = rz(l[e[0]]);
                                                                break;
                                                            case"int":
                                                                t.WBProps[e[0]] = parseInt(l[e[0]], 10);
                                                                break;
                                                            default:
                                                                t.WBProps[e[0]] = l[e[0]]
                                                        }
                                                    }), l.codeName && (t.WBProps.CodeName = rK(l.codeName));
                                                    break;
                                                case"<workbookView":
                                                case"<workbookView/>":
                                                    delete l[0], t.WBView.push(l);
                                                    break;
                                                case"<sheet":
                                                    switch (l.state) {
                                                        case"hidden":
                                                            l.Hidden = 1;
                                                            break;
                                                        case"veryHidden":
                                                            l.Hidden = 2;
                                                            break;
                                                        default:
                                                            l.Hidden = 0
                                                    }
                                                    delete l.state, l.name = rU(rK(l.name)), delete l[0], t.Sheets.push(l);
                                                    break;
                                                case"<definedNames>":
                                                case"<definedNames":
                                                case"<ext":
                                                case"<AlternateContent":
                                                case"<AlternateContent>":
                                                    a = !0;
                                                    break;
                                                case"</definedNames>":
                                                case"</ext>":
                                                case"</AlternateContent>":
                                                    a = !1;
                                                    break;
                                                case"<definedName":
                                                    (s = {}).Name = rK(l.name), l.comment && (s.Comment = l.comment), l.localSheetId && (s.Sheet = +l.localSheetId), rz(l.hidden || "0") && (s.Hidden = !0), i = o + c.length;
                                                    break;
                                                case"</definedName>":
                                                    s.Ref = rU(rK(e.slice(i, o))), t.Names.push(s);
                                                    break;
                                                case"<calcPr":
                                                case"<calcPr/>":
                                                    delete l[0], t.CalcPr = l;
                                                    break;
                                                default:
                                                    if (!a && r.WTF) throw Error("unrecognized " + l[0] + " in workbook")
                                            }
                                            return c
                                        }), -1 === r6.indexOf(t.xmlns)) throw Error("Unknown Namespace: " + t.xmlns);
                                        return sF(t), t
                                    }(e, t)
                                }(rS(e, ii(w.workbooks[0])), w.workbooks[0], r), C = {}, _ = "";
                                w.coreprops.length && ((_ = rS(e, ii(w.coreprops[0]), !0)) && (C = ah(_)), 0 !== w.extprops.length && (_ = rS(e, ii(w.extprops[0]), !0))) && (c = _, o = C, l = r, f = {}, o || (o = {}), c = rK(c), au.forEach(function (e) {
                                    var r = (c.match(rJ(e[0])) || [])[1];
                                    switch (e[2]) {
                                        case"string":
                                            r && (o[e[1]] = rU(r));
                                            break;
                                        case"bool":
                                            o[e[1]] = "true" === r;
                                            break;
                                        case"raw":
                                            var t = c.match(RegExp("<" + e[0] + "[^>]*>([\\s\\S]*?)</" + e[0] + ">"));
                                            t && t.length > 0 && (f[e[1]] = t[1])
                                    }
                                }), f.HeadingPairs && f.TitlesOfParts && ad(f.HeadingPairs, f.TitlesOfParts, o, l));
                                var O = {};
                                (!r.bookSheets || r.bookProps) && 0 !== w.custprops.length && (_ = rk(e, ii(w.custprops[0]), !0)) && (O = function (e, r) {
                                    var t = {}, a = "", n = e.match(ap);
                                    if (n) for (var s = 0; s != n.length; ++s) {
                                        var i = n[s], c = rF(i);
                                        switch (c[0]) {
                                            case"<?xml":
                                            case"<Properties":
                                                break;
                                            case"<property":
                                                a = rU(c.name);
                                                break;
                                            case"</property>":
                                                a = null;
                                                break;
                                            default:
                                                if (0 === i.indexOf("<vt:")) {
                                                    var o = i.split(">"), l = o[0].slice(4), f = o[1];
                                                    switch (l) {
                                                        case"lpstr":
                                                        case"bstr":
                                                        case"lpwstr":
                                                        case"cy":
                                                        case"error":
                                                            t[a] = rU(f);
                                                            break;
                                                        case"bool":
                                                            t[a] = rz(f);
                                                            break;
                                                        case"i1":
                                                        case"i2":
                                                        case"i4":
                                                        case"i8":
                                                        case"int":
                                                        case"uint":
                                                            t[a] = parseInt(f, 10);
                                                            break;
                                                        case"r4":
                                                        case"r8":
                                                        case"decimal":
                                                            t[a] = parseFloat(f);
                                                            break;
                                                        case"filetime":
                                                        case"date":
                                                            t[a] = rh(f);
                                                            break;
                                                        default:
                                                            if ("/" == l.slice(-1)) break;
                                                            r.WTF && "undefined" != typeof console && console.warn("Unexpected", i, l, o)
                                                    }
                                                } else if ("</" === i.slice(0, 2)) ; else if (r.WTF) throw Error(i)
                                        }
                                    }
                                    return t
                                }(_, r));
                                var R = {};
                                if ((r.bookSheets || r.bookProps) && (y.Sheets ? g = y.Sheets.map(function (e) {
                                    return e.name
                                }) : C.Worksheets && C.SheetNames.length > 0 && (g = C.SheetNames), r.bookProps && (R.Props = C, R.Custprops = O), r.bookSheets && void 0 !== g && (R.SheetNames = g), r.bookSheets ? R.SheetNames : r.bookProps)) return R;
                                g = {};
                                var I = {};
                                r.bookDeps && w.calcchain && (I = function (e, r, t) {
                                    if (".bin" === r.slice(-4)) {
                                        var a;
                                        return a = [], tN(e, function (e, r, t) {
                                            if (63 === t) a.push(e); else if (r.T) ; else throw Error("Unexpected record 0x" + t.toString(16))
                                        }), a
                                    }
                                    return function (e) {
                                        var r = [];
                                        if (!e) return r;
                                        var t = 1;
                                        return (e.match(rx) || []).forEach(function (e) {
                                            var a = rF(e);
                                            switch (a[0]) {
                                                case"<?xml":
                                                case"<calcChain":
                                                case"<calcChain>":
                                                case"</calcChain>":
                                                    break;
                                                case"<c":
                                                    delete a[0], a.i ? t = a.i : a.i = t, r.push(a)
                                            }
                                        }), r
                                    }(e, r, t)
                                }(rS(e, ii(w.calcchain)), w.calcchain, r));
                                var x = 0, N = {}, D = y.Sheets;
                                C.Worksheets = D.length, C.SheetNames = [];
                                for (var F = 0; F != D.length; ++F) C.SheetNames[F] = D[F].name;
                                var P = A ? "bin" : "xml", L = w.workbooks[0].lastIndexOf("/"),
                                    M = (w.workbooks[0].slice(0, L + 1) + "_rels/" + w.workbooks[0].slice(L + 1) + ".rels").replace(/^\//, "");
                                rw(e, M) || (M = "xl/_rels/workbook." + P + ".rels");
                                var U = ao(rk(e, M, !0), M.replace(/_rels.*/, "s5s"));
                                (w.metadata || []).length >= 1 && (r.xlmeta = function (e, r, t) {
                                    if (".bin" === r.slice(-4)) {
                                        var a, n, s, i, c;
                                        return a = {
                                            Types: [],
                                            Cell: [],
                                            Value: []
                                        }, n = t || {}, s = [], i = !1, c = 2, tN(e, function (e, r, t) {
                                            switch (t) {
                                                case 335:
                                                    a.Types.push({name: e.name});
                                                    break;
                                                case 51:
                                                    e.forEach(function (e) {
                                                        1 == c ? a.Cell.push({
                                                            type: a.Types[e[0] - 1].name,
                                                            index: e[1]
                                                        }) : 0 == c && a.Value.push({
                                                            type: a.Types[e[0] - 1].name,
                                                            index: e[1]
                                                        })
                                                    });
                                                    break;
                                                case 337:
                                                    c = e ? 1 : 0;
                                                    break;
                                                case 338:
                                                    c = 2;
                                                    break;
                                                case 35:
                                                    s.push(t), i = !0;
                                                    break;
                                                case 36:
                                                    s.pop(), i = !1;
                                                    break;
                                                default:
                                                    if (r.T) ; else if (!i || n.WTF && 35 != s[s.length - 1]) throw Error("Unexpected record 0x" + t.toString(16))
                                            }
                                        }), a
                                    }
                                    return function (e, r, t) {
                                        var a, n = {Types: [], Cell: [], Value: []};
                                        if (!e) return n;
                                        var s = !1, i = 2;
                                        return e.replace(rx, function (e) {
                                            var r = rF(e);
                                            switch (rP(r[0])) {
                                                case"<?xml":
                                                case"<metadata":
                                                case"</metadata>":
                                                case"<metadataTypes":
                                                case"</metadataTypes>":
                                                case"</metadataType>":
                                                case"</futureMetadata>":
                                                case"<bk>":
                                                case"</bk>":
                                                case"</rc>":
                                                case"<extLst":
                                                case"<extLst>":
                                                case"</extLst>":
                                                case"<extLst/>":
                                                    break;
                                                case"<metadataType":
                                                    n.Types.push({name: r.name});
                                                    break;
                                                case"<futureMetadata":
                                                    for (var c = 0; c < n.Types.length; ++c) n.Types[c].name == r.name && (a = n.Types[c]);
                                                    break;
                                                case"<rc":
                                                    1 == i ? n.Cell.push({
                                                        type: n.Types[r.t - 1].name,
                                                        index: +r.v
                                                    }) : 0 == i && n.Value.push({
                                                        type: n.Types[r.t - 1].name,
                                                        index: +r.v
                                                    });
                                                    break;
                                                case"<cellMetadata":
                                                    i = 1;
                                                    break;
                                                case"</cellMetadata>":
                                                case"</valueMetadata>":
                                                    i = 2;
                                                    break;
                                                case"<valueMetadata":
                                                    i = 0;
                                                    break;
                                                case"<ext":
                                                    s = !0;
                                                    break;
                                                case"</ext>":
                                                    s = !1;
                                                    break;
                                                case"<rvb":
                                                    if (!a) break;
                                                    a.offsets || (a.offsets = []), a.offsets.push(+r.i);
                                                    break;
                                                default:
                                                    if (!s && t.WTF) throw Error("unrecognized " + r[0] + " in metadata")
                                            }
                                            return e
                                        }), n
                                    }(e, 0, t)
                                }(rS(e, ii(w.metadata[0])), w.metadata[0], r)), (w.people || []).length >= 1 && (r.people = (h = rS(e, ii(w.people[0])), u = r, d = [], p = !1, h.replace(rx, function (e) {
                                    var r = rF(e);
                                    switch (rP(r[0])) {
                                        case"<?xml":
                                        case"<personList":
                                        case"</personList>":
                                        case"</person>":
                                        case"<extLst":
                                        case"<extLst>":
                                        case"</extLst>":
                                        case"<extLst/>":
                                            break;
                                        case"<person":
                                            d.push({name: r.displayname, id: r.id});
                                            break;
                                        case"<ext":
                                            p = !0;
                                            break;
                                        case"</ext>":
                                            p = !1;
                                            break;
                                        default:
                                            if (!p && u.WTF) throw Error("unrecognized " + r[0] + " in threaded comments")
                                    }
                                    return e
                                }), d)), U && (U = function (e, r) {
                                    if (!e) return 0;
                                    try {
                                        e = r.map(function (r) {
                                            var t;
                                            return r.id || (r.id = r.strRelID), [r.name, e["!id"][r.id].Target, (t = e["!id"][r.id].Type, ai.WS.indexOf(t) > -1 ? "sheet" : ai.CS && t == ai.CS ? "chart" : ai.DS && t == ai.DS ? "dialog" : ai.MS && t == ai.MS ? "macro" : t && t.length ? t : "sheet")]
                                        })
                                    } catch (e) {
                                        return null
                                    }
                                    return e && 0 !== e.length ? e : null
                                }(U, y.Sheets));
                                var B = rS(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
                                for (x = 0; x != C.Worksheets; ++x) {
                                    var H = "sheet";
                                    if (U && U[x] ? (rw(e, v = "xl/" + U[x][1].replace(/[\/]?xl\//, "")) || (v = U[x][1]), rw(e, v) || (v = M.replace(/_rels\/.*$/, "") + U[x][1]), H = U[x][2]) : v = (v = "xl/worksheets/sheet" + (x + 1 - B) + "." + P).replace(/sheet0\./, "sheet."), b = v.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && null != r.sheets) switch (typeof r.sheets) {
                                        case"number":
                                            if (x != r.sheets) continue;
                                            break;
                                        case"string":
                                            if (C.SheetNames[x].toLowerCase() != r.sheets.toLowerCase()) continue;
                                            break;
                                        default:
                                            if (Array.isArray && Array.isArray(r.sheets)) {
                                                for (var W = !1, V = 0; V != r.sheets.length; ++V) "number" == typeof r.sheets[V] && r.sheets[V] == x && (W = 1), "string" == typeof r.sheets[V] && r.sheets[V].toLowerCase() == C.SheetNames[x].toLowerCase() && (W = 1);
                                                if (!W) continue
                                            }
                                    }
                                    !function (e, r, t, a, n, s, i, c, o, l, f, h) {
                                        try {
                                            s[a] = ao(rk(e, t, !0), r);
                                            var u, d = rS(e, r);
                                            switch (c) {
                                                case"sheet":
                                                    p = s[a], u = ".bin" === r.slice(-4) ? function (e, r, t, a, n, s, i) {
                                                        if (!e) return e;
                                                        var c, o, l, f, h, u, d, p, g, m, v, b, T = r || {};
                                                        a || (a = {"!id": {}});
                                                        var E = T.dense ? [] : {},
                                                            w = {s: {r: 2e6, c: 2e6}, e: {r: 0, c: 0}}, A = [], S = !1,
                                                            k = !1, y = [];
                                                        T.biff = 12, T["!row"] = 0;
                                                        var C = 0, _ = !1, O = [], R = {},
                                                            I = T.supbooks || n.supbooks || [[]];
                                                        if (I.sharedf = R, I.arrayf = O, I.SheetNames = n.SheetNames || n.Sheets.map(function (e) {
                                                            return e.name
                                                        }), !T.supbooks && (T.supbooks = I, n.Names)) for (var x = 0; x < n.Names.length; ++x) I[0][x + 1] = n.Names[x];
                                                        var N = [], D = [], F = !1;
                                                        if (sK[16] = {
                                                            n: "BrtShortReal",
                                                            f: sC
                                                        }, tN(e, function (e, r, x) {
                                                            if (!k) switch (x) {
                                                                case 148:
                                                                    c = e;
                                                                    break;
                                                                case 0:
                                                                    o = e, T.sheetRows && T.sheetRows <= o.r && (k = !0), g = tB(h = o.r), T["!row"] = o.r, (e.hidden || e.hpt || null != e.level) && (e.hpt && (e.hpx = ny(e.hpt)), D[e.r] = e);
                                                                    break;
                                                                case 2:
                                                                case 3:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                case 7:
                                                                case 8:
                                                                case 9:
                                                                case 10:
                                                                case 11:
                                                                case 13:
                                                                case 14:
                                                                case 15:
                                                                case 16:
                                                                case 17:
                                                                case 18:
                                                                case 62:
                                                                    switch (l = {t: e[2]}, e[2]) {
                                                                        case"n":
                                                                            l.v = e[1];
                                                                            break;
                                                                        case"s":
                                                                            p = sl[e[1]], l.v = p.t, l.r = p.r;
                                                                            break;
                                                                        case"b":
                                                                            l.v = !!e[1];
                                                                            break;
                                                                        case"e":
                                                                            l.v = e[1], !1 !== T.cellText && (l.w = aa[l.v]);
                                                                            break;
                                                                        case"str":
                                                                            l.t = "s", l.v = e[1];
                                                                            break;
                                                                        case"is":
                                                                            l.t = "s", l.v = e[1].t
                                                                    }
                                                                    if ((f = i.CellXf[e[0].iStyleRef]) && su(l, f.numFmtId, null, T, s, i), u = -1 == e[0].c ? u + 1 : e[0].c, T.dense ? (E[h] || (E[h] = []), E[h][u] = l) : E[tW(u) + g] = l, T.cellFormula) {
                                                                        for (C = 0, _ = !1; C < O.length; ++C) {
                                                                            var P = O[C];
                                                                            o.r >= P[0].s.r && o.r <= P[0].e.r && u >= P[0].s.c && u <= P[0].e.c && (l.F = t$(P[0]), _ = !0)
                                                                        }
                                                                        !_ && e.length > 3 && (l.f = e[3])
                                                                    }
                                                                    if (w.s.r > o.r && (w.s.r = o.r), w.s.c > u && (w.s.c = u), w.e.r < o.r && (w.e.r = o.r), w.e.c < u && (w.e.c = u), T.cellDates && f && "n" == l.t && e1(ex[f.numFmtId])) {
                                                                        var L = eP(l.v);
                                                                        L && (l.t = "d", l.v = new Date(L.y, L.m - 1, L.d, L.H, L.M, L.S, L.u))
                                                                    }
                                                                    v && ("XLDAPR" == v.type && (l.D = !0), v = void 0), b && (b = void 0);
                                                                    break;
                                                                case 1:
                                                                case 12:
                                                                    if (!T.sheetStubs || S) break;
                                                                    l = {
                                                                        t: "z",
                                                                        v: void 0
                                                                    }, u = -1 == e[0].c ? u + 1 : e[0].c, T.dense ? (E[h] || (E[h] = []), E[h][u] = l) : E[tW(u) + g] = l, w.s.r > o.r && (w.s.r = o.r), w.s.c > u && (w.s.c = u), w.e.r < o.r && (w.e.r = o.r), w.e.c < u && (w.e.c = u), v && ("XLDAPR" == v.type && (l.D = !0), v = void 0), b && (b = void 0);
                                                                    break;
                                                                case 176:
                                                                    y.push(e);
                                                                    break;
                                                                case 49:
                                                                    v = ((T.xlmeta || {}).Cell || [])[e - 1];
                                                                    break;
                                                                case 494:
                                                                    var M = a["!id"][e.relId];
                                                                    for (M ? (e.Target = M.Target, e.loc && (e.Target += "#" + e.loc), e.Rel = M) : "" == e.relId && (e.Target = "#" + e.loc), h = e.rfx.s.r; h <= e.rfx.e.r; ++h) for (u = e.rfx.s.c; u <= e.rfx.e.c; ++u) T.dense ? (E[h] || (E[h] = []), E[h][u] || (E[h][u] = {
                                                                        t: "z",
                                                                        v: void 0
                                                                    }), E[h][u].l = e) : (E[d = tz({
                                                                        c: u,
                                                                        r: h
                                                                    })] || (E[d] = {t: "z", v: void 0}), E[d].l = e);
                                                                    break;
                                                                case 426:
                                                                    if (!T.cellFormula) break;
                                                                    O.push(e), (m = T.dense ? E[h][u] : E[tW(u) + g]).f = sr(e[1], w, {
                                                                        r: o.r,
                                                                        c: u
                                                                    }, I, T), m.F = t$(e[0]);
                                                                    break;
                                                                case 427:
                                                                    if (!T.cellFormula) break;
                                                                    R[tz(e[0].s)] = e[1], (m = T.dense ? E[h][u] : E[tW(u) + g]).f = sr(e[1], w, {
                                                                        r: o.r,
                                                                        c: u
                                                                    }, I, T);
                                                                    break;
                                                                case 60:
                                                                    if (!T.cellStyles) break;
                                                                    for (; e.e >= e.s;) N[e.e--] = {
                                                                        width: e.w / 256,
                                                                        hidden: !!(1 & e.flags),
                                                                        level: e.level
                                                                    }, F || (F = !0, nS(e.w / 256)), nk(N[e.e + 1]);
                                                                    break;
                                                                case 161:
                                                                    E["!autofilter"] = {ref: t$(e)};
                                                                    break;
                                                                case 476:
                                                                    E["!margins"] = e;
                                                                    break;
                                                                case 147:
                                                                    n.Sheets[t] || (n.Sheets[t] = {}), e.name && (n.Sheets[t].CodeName = e.name), (e.above || e.left) && (E["!outline"] = {
                                                                        above: e.above,
                                                                        left: e.left
                                                                    });
                                                                    break;
                                                                case 137:
                                                                    n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), e.RTL && (n.Views[0].RTL = !0);
                                                                    break;
                                                                case 485:
                                                                case 64:
                                                                case 1053:
                                                                case 151:
                                                                case 152:
                                                                case 175:
                                                                case 644:
                                                                case 625:
                                                                case 562:
                                                                case 396:
                                                                case 1112:
                                                                case 1146:
                                                                case 471:
                                                                case 1050:
                                                                case 649:
                                                                case 1105:
                                                                case 589:
                                                                case 607:
                                                                case 564:
                                                                case 1055:
                                                                case 168:
                                                                case 174:
                                                                case 1180:
                                                                case 499:
                                                                case 507:
                                                                case 550:
                                                                case 171:
                                                                case 167:
                                                                case 1177:
                                                                case 169:
                                                                case 1181:
                                                                case 551:
                                                                case 552:
                                                                case 661:
                                                                case 639:
                                                                case 478:
                                                                case 537:
                                                                case 477:
                                                                case 536:
                                                                case 1103:
                                                                case 680:
                                                                case 1104:
                                                                case 1024:
                                                                case 663:
                                                                case 535:
                                                                case 678:
                                                                case 504:
                                                                case 1043:
                                                                case 428:
                                                                case 170:
                                                                case 3072:
                                                                case 50:
                                                                case 2070:
                                                                case 1045:
                                                                    break;
                                                                case 35:
                                                                    S = !0;
                                                                    break;
                                                                case 36:
                                                                    S = !1;
                                                                    break;
                                                                case 37:
                                                                    A.push(x), S = !0;
                                                                    break;
                                                                case 38:
                                                                    A.pop(), S = !1;
                                                                    break;
                                                                default:
                                                                    if (r.T) ; else if (!S || T.WTF) throw Error("Unexpected record 0x" + x.toString(16))
                                                            }
                                                        }, T), delete T.supbooks, delete T["!row"], !E["!ref"] && (w.s.r < 2e6 || c && (c.e.r > 0 || c.e.c > 0 || c.s.r > 0 || c.s.c > 0)) && (E["!ref"] = t$(c || w)), T.sheetRows && E["!ref"]) {
                                                            var P = tY(E["!ref"]);
                                                            T.sheetRows <= +P.e.r && (P.e.r = T.sheetRows - 1, P.e.r > w.e.r && (P.e.r = w.e.r), P.e.r < P.s.r && (P.s.r = P.e.r), P.e.c > w.e.c && (P.e.c = w.e.c), P.e.c < P.s.c && (P.s.c = P.e.c), E["!fullref"] = E["!ref"], E["!ref"] = t$(P))
                                                        }
                                                        return y.length > 0 && (E["!merges"] = y), N.length > 0 && (E["!cols"] = N), D.length > 0 && (E["!rows"] = D), E
                                                    }(d, o, n, p, l, f, h) : function (e, r, t, a, n, s, i) {
                                                        if (!e) return e;
                                                        a || (a = {"!id": {}});
                                                        var c = r.dense ? [] : {},
                                                            o = {s: {r: 2e6, c: 2e6}, e: {r: 0, c: 0}}, l = "", f = "",
                                                            h = e.match(sp);
                                                        h ? (l = e.slice(0, h.index), f = e.slice(h.index + h[0].length)) : l = f = e;
                                                        var u = l.match(sE);
                                                        u ? sS(u[0], c, n, t) : (u = l.match(sw)) && (p = u[0], u[1], sS(p.slice(0, p.indexOf(">")), c, n, t));
                                                        var d = (l.match(/<(?:\w*:)?dimension/) || {index: -1}).index;
                                                        if (d > 0) {
                                                            var p, g, m, v = l.slice(d, d + 50).match(sm);
                                                            v && (m = tY(v[1])).s.r <= m.e.r && m.s.c <= m.e.c && m.s.r >= 0 && m.s.c >= 0 && (c["!ref"] = t$(m))
                                                        }
                                                        var b = l.match(sA);
                                                        b && b[1] && function (e, r) {
                                                            r.Views || (r.Views = [{}]), (e.match(sk) || []).forEach(function (e, t) {
                                                                var a = rF(e);
                                                                r.Views[t] || (r.Views[t] = {}), +a.zoomScale && (r.Views[t].zoom = +a.zoomScale), rz(a.rightToLeft) && (r.Views[t].RTL = !0)
                                                            })
                                                        }(b[1], n);
                                                        var T = [];
                                                        if (r.cellStyles) {
                                                            var E = l.match(sv);
                                                            E && function (e, r) {
                                                                for (var t = !1, a = 0; a != r.length; ++a) {
                                                                    var n = rF(r[a], !0);
                                                                    n.hidden && (n.hidden = rz(n.hidden));
                                                                    var s = parseInt(n.min, 10) - 1,
                                                                        i = parseInt(n.max, 10) - 1;
                                                                    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = !0, nS(n.width)), nk(n); s <= i;) e[s++] = rd(n)
                                                                }
                                                            }(T, E)
                                                        }
                                                        h && sy(h[1], c, r, o, s, i);
                                                        var w = f.match(sb);
                                                        w && (c["!autofilter"] = {ref: (w[0].match(/ref="([^"]*)"/) || [])[1]});
                                                        var A = [], S = f.match(sd);
                                                        if (S) for (d = 0; d != S.length; ++d) A[d] = tY(S[d].slice(S[d].indexOf('"') + 1));
                                                        var k = f.match(sg);
                                                        k && function (e, r, t) {
                                                            for (var a = Array.isArray(e), n = 0; n != r.length; ++n) {
                                                                var s = rF(rK(r[n]), !0);
                                                                if (!s.ref) return;
                                                                var i = ((t || {})["!id"] || [])[s.id];
                                                                i ? (s.Target = i.Target, s.location && (s.Target += "#" + rU(s.location))) : (s.Target = "#" + rU(s.location), i = {
                                                                    Target: s.Target,
                                                                    TargetMode: "Internal"
                                                                }), s.Rel = i, s.tooltip && (s.Tooltip = s.tooltip, delete s.tooltip);
                                                                for (var c = tY(s.ref), o = c.s.r; o <= c.e.r; ++o) for (var l = c.s.c; l <= c.e.c; ++l) {
                                                                    var f = tz({c: l, r: o});
                                                                    a ? (e[o] || (e[o] = []), e[o][l] || (e[o][l] = {
                                                                        t: "z",
                                                                        v: void 0
                                                                    }), e[o][l].l = s) : (e[f] || (e[f] = {
                                                                        t: "z",
                                                                        v: void 0
                                                                    }), e[f].l = s)
                                                                }
                                                            }
                                                        }(c, k, a);
                                                        var y = f.match(sT);
                                                        if (y && (c["!margins"] = function (e) {
                                                            var r = {};
                                                            return ["left", "right", "top", "bottom", "header", "footer"].forEach(function (t) {
                                                                e[t] && (r[t] = parseFloat(e[t]))
                                                            }), r
                                                        }(rF(y[0]))), !c["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r && (c["!ref"] = t$(o)), r.sheetRows > 0 && c["!ref"]) {
                                                            var C = tY(c["!ref"]);
                                                            r.sheetRows <= +C.e.r && (C.e.r = r.sheetRows - 1, C.e.r > o.e.r && (C.e.r = o.e.r), C.e.r < C.s.r && (C.s.r = C.e.r), C.e.c > o.e.c && (C.e.c = o.e.c), C.e.c < C.s.c && (C.s.c = C.e.c), c["!fullref"] = c["!ref"], c["!ref"] = t$(C))
                                                        }
                                                        return T.length > 0 && (c["!cols"] = T), A.length > 0 && (c["!merges"] = A), c
                                                    }(d, o, n, p, l, f, h);
                                                    break;
                                                case"chart":
                                                    if (g = s[a], !(u = ".bin" === r.slice(-4) ? function (e, r, t, a, n) {
                                                        if (!e) return e;
                                                        a || (a = {"!id": {}});
                                                        var s = {"!type": "chart", "!drawel": null, "!rel": ""}, i = [],
                                                            c = !1;
                                                        return tN(e, function (e, a, o) {
                                                            switch (o) {
                                                                case 550:
                                                                    s["!rel"] = e;
                                                                    break;
                                                                case 651:
                                                                    n.Sheets[t] || (n.Sheets[t] = {}), e.name && (n.Sheets[t].CodeName = e.name);
                                                                    break;
                                                                case 562:
                                                                case 652:
                                                                case 669:
                                                                case 679:
                                                                case 551:
                                                                case 552:
                                                                case 476:
                                                                case 3072:
                                                                    break;
                                                                case 35:
                                                                    c = !0;
                                                                    break;
                                                                case 36:
                                                                    c = !1;
                                                                    break;
                                                                case 37:
                                                                    i.push(o);
                                                                    break;
                                                                case 38:
                                                                    i.pop();
                                                                    break;
                                                                default:
                                                                    if (a.T > 0) i.push(o); else if (a.T < 0) i.pop(); else if (!c || r.WTF) throw Error("Unexpected record 0x" + o.toString(16))
                                                            }
                                                        }, r), a["!id"][s["!rel"]] && (s["!drawel"] = a["!id"][s["!rel"]]), s
                                                    }(d, o, n, g, l, f, h) : function (e, r, t, a, n) {
                                                        if (!e) return e;
                                                        a || (a = {"!id": {}});
                                                        var s, i = {"!type": "chart", "!drawel": null, "!rel": ""},
                                                            c = e.match(sE);
                                                        return c && sS(c[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i
                                                    }(d, 0, n, g, l, f, h)) || !u["!drawel"]) break;
                                                    var p, g, m = r_(u["!drawel"].Target, r), v = ac(m),
                                                        b = function (e, r) {
                                                            if (!e) return "??";
                                                            var t = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
                                                            return r["!id"][t].Target
                                                        }(rk(e, m, !0), ao(rk(e, v, !0), m)), T = r_(b, m), E = ac(T);
                                                    u = function (e, r, t, a, n, s) {
                                                        var i = s || {"!type": "chart"};
                                                        if (!e) return s;
                                                        var c = 0, o = 0, l = "A",
                                                            f = {s: {r: 2e6, c: 2e6}, e: {r: 0, c: 0}};
                                                        return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (e) {
                                                            var r = function (e) {
                                                                var r, t = [], a = e.match(/^<c:numCache>/);
                                                                (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function (e) {
                                                                    var r = e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
                                                                    r && (t[+r[1]] = a ? +r[2] : r[2])
                                                                });
                                                                var n = rU((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
                                                                return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function (e) {
                                                                    r = e.replace(/<.*?>/g, "")
                                                                }), [t, n, r]
                                                            }(e);
                                                            f.s.r = f.s.c = 0, f.e.c = c, l = tW(c), r[0].forEach(function (e, t) {
                                                                i[l + tB(t)] = {t: "n", v: e, z: r[1]}, o = t
                                                            }), f.e.r < o && (f.e.r = o), ++c
                                                        }), c > 0 && (i["!ref"] = t$(f)), i
                                                    }(rk(e, T, !0), 0, 0, ao(rk(e, E, !0), T), 0, u);
                                                    break;
                                                case"macro":
                                                    s[a], r.slice(-4), u = {"!type": "macro"};
                                                    break;
                                                case"dialog":
                                                    s[a], r.slice(-4), u = {"!type": "dialog"};
                                                    break;
                                                default:
                                                    throw Error("Unrecognized sheet type " + c)
                                            }
                                            i[a] = u;
                                            var w = [];
                                            s && s[a] && re(s[a]).forEach(function (t) {
                                                var n, i, c, l, f, h = "";
                                                if (s[a][t].Type == ai.CMNT) {
                                                    h = r_(s[a][t].Target, r);
                                                    var d = function (e, r, t) {
                                                        if (".bin" === r.slice(-4)) {
                                                            var a, n, s, i;
                                                            return a = [], n = [], s = {}, i = !1, tN(e, function (e, r, c) {
                                                                switch (c) {
                                                                    case 632:
                                                                        n.push(e);
                                                                        break;
                                                                    case 635:
                                                                        s = e;
                                                                        break;
                                                                    case 637:
                                                                        s.t = e.t, s.h = e.h, s.r = e.r;
                                                                        break;
                                                                    case 636:
                                                                        if (s.author = n[s.iauthor], delete s.iauthor, t.sheetRows && s.rfx && t.sheetRows <= s.rfx.r) break;
                                                                        s.t || (s.t = ""), delete s.rfx, a.push(s);
                                                                        break;
                                                                    case 3072:
                                                                    case 37:
                                                                    case 38:
                                                                        break;
                                                                    case 35:
                                                                        i = !0;
                                                                        break;
                                                                    case 36:
                                                                        i = !1;
                                                                        break;
                                                                    default:
                                                                        if (r.T) ; else if (!i || t.WTF) throw Error("Unexpected record 0x" + c.toString(16))
                                                                }
                                                            }), a
                                                        }
                                                        return function (e, r) {
                                                            if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
                                                            var t = [], a = [],
                                                                n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
                                                            n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function (e) {
                                                                if ("" !== e && "" !== e.trim()) {
                                                                    var r = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
                                                                    r && t.push(r[1])
                                                                }
                                                            });
                                                            var s = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
                                                            return s && s[1] && s[1].split(/<\/\w*:?comment>/).forEach(function (e) {
                                                                if ("" !== e && "" !== e.trim()) {
                                                                    var n = e.match(/<(?:\w+:)?comment[^>]*>/);
                                                                    if (n) {
                                                                        var s = rF(n[0]), i = {
                                                                            author: s.authorId && t[s.authorId] || "sheetjsghost",
                                                                            ref: s.ref,
                                                                            guid: s.guid
                                                                        }, c = tV(s.ref);
                                                                        if (!r.sheetRows || !(r.sheetRows <= c.r)) {
                                                                            var o = e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),
                                                                                l = !!o && !!o[1] && nn(o[1]) || {
                                                                                    r: "",
                                                                                    t: "",
                                                                                    h: ""
                                                                                };
                                                                            i.r = l.r, "<t></t>" == l.r && (l.t = l.h = ""), i.t = (l.t || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"), r.cellHTML && (i.h = l.h), a.push(i)
                                                                        }
                                                                    }
                                                                }
                                                            }), a
                                                        }(e, t)
                                                    }(rS(e, h, !0), h, o);
                                                    if (!d || !d.length) return;
                                                    nB(u, d, !1)
                                                }
                                                s[a][t].Type == ai.TCMNT && (h = r_(s[a][t].Target, r), w = w.concat((n = rS(e, h, !0), i = [], c = !1, l = {}, f = 0, n.replace(rx, function (e, r) {
                                                    var t = rF(e);
                                                    switch (rP(t[0])) {
                                                        case"<?xml":
                                                        case"<ThreadedComments":
                                                        case"</ThreadedComments>":
                                                        case"<extLst":
                                                        case"<extLst>":
                                                        case"</extLst>":
                                                        case"<extLst/>":
                                                            break;
                                                        case"<threadedComment":
                                                            l = {author: t.personId, guid: t.id, ref: t.ref, T: 1};
                                                            break;
                                                        case"</threadedComment>":
                                                            null != l.t && i.push(l);
                                                            break;
                                                        case"<text>":
                                                        case"<text":
                                                            f = r + e.length;
                                                            break;
                                                        case"</text>":
                                                            l.t = n.slice(f, r).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                                            break;
                                                        case"<mentions":
                                                        case"<mentions>":
                                                        case"<ext":
                                                            c = !0;
                                                            break;
                                                        case"</mentions>":
                                                        case"</ext>":
                                                            c = !1;
                                                            break;
                                                        default:
                                                            if (!c && o.WTF) throw Error("unrecognized " + t[0] + " in threaded comments")
                                                    }
                                                    return e
                                                }), i)))
                                            }), w && w.length && nB(u, w, !0, o.people || [])
                                        } catch (e) {
                                            if (o.WTF) throw e
                                        }
                                    }(e, v, b, C.SheetNames[x], x, N, g, H, r, y, S, k)
                                }
                                return R = {
                                    Directory: w,
                                    Workbook: y,
                                    Props: C,
                                    Custprops: O,
                                    Deps: I,
                                    Sheets: g,
                                    SheetNames: C.SheetNames,
                                    Strings: sl,
                                    Styles: k,
                                    Themes: S,
                                    SSF: rd(ex)
                                }, r && r.bookFiles && (e.files ? (R.keys = E, R.files = e.files) : (R.keys = [], R.files = {}, e.FullPaths.forEach(function (r, t) {
                                    r = r.replace(/^Root Entry[\/]/, ""), R.keys.push(r), R.files[r] = e.FileIndex[t]
                                }))), r && r.bookVBA && (w.vba.length > 0 ? R.vbaraw = rS(e, ii(w.vba[0]), !0) : w.defaults && "application/vnd.ms-office.vbaProject" === w.defaults.bin && (R.vbaraw = rS(e, "xl/vbaProject.bin", !0))), R
                            }(rC(n, s), s)) : il(r, u, h, p);
                        case 239:
                            return 60 === d[3] ? sV(u, h) : il(r, u, h, p);
                        case 255:
                            if (254 === d[1]) return o = u, l = h, f = o, "base64" == l.type && (f = eu(f)), f = Y.utils.decode(1200, f.slice(2), "str"), l.type = "binary", io(f, l);
                            if (0 === d[1] && 2 === d[2] && 0 === d[3]) return a7.to_workbook(u, h);
                            break;
                        case 0:
                            if (0 === d[1] && (d[2] >= 2 && 0 === d[3] || 0 === d[2] && (8 === d[3] || 9 === d[3]))) return a7.to_workbook(u, h);
                            break;
                        case 3:
                        case 131:
                        case 139:
                        case 140:
                            return a4.to_workbook(u, h);
                        case 123:
                            if (92 === d[1] && 114 === d[2] && 116 === d[3]) return ng.to_workbook(u, h);
                            break;
                        case 10:
                        case 13:
                        case 32:
                            return function (e, r) {
                                var t = "", a = ic(e, r);
                                switch (r.type) {
                                    case"base64":
                                        t = eu(e);
                                        break;
                                    case"binary":
                                        t = e;
                                        break;
                                    case"buffer":
                                        t = e.toString("binary");
                                        break;
                                    case"array":
                                        t = ru(e);
                                        break;
                                    default:
                                        throw Error("Unrecognized type " + r.type)
                                }
                                return 239 == a[0] && 187 == a[1] && 191 == a[2] && (t = rK(t)), r.type = "binary", io(t, r)
                            }(u, h);
                        case 137:
                            if (80 === d[1] && 78 === d[2] && 71 === d[3]) throw Error("PNG Image File is not a spreadsheet")
                    }
                    return a2.indexOf(d[0]) > -1 && d[2] <= 12 && d[3] <= 31 ? a4.to_workbook(u, h) : il(r, u, h, p)
                }
            }
        });
        var n, s, i, c, o, l, f, h, u, d, p, g, m, v, b, T, E, w, A, S, k, y, C, _, O, R, I, x, N, D, F, P, L, M, U, B,
            H, W, V, z, G, Y, j, K, X = t(20067).Buffer, J = t(72061), Z = {};
        Z.version = "0.18.5";
        var q = 1200, Q = 1252,
            ee = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], er = {
                0: 1252,
                1: 65001,
                2: 65001,
                77: 1e4,
                128: 932,
                129: 949,
                130: 1361,
                134: 936,
                136: 950,
                161: 1253,
                162: 1254,
                163: 1258,
                177: 1255,
                178: 1256,
                186: 1257,
                204: 1251,
                222: 874,
                238: 1250,
                255: 1252,
                69: 6969
            }, et = function (e) {
                -1 != ee.indexOf(e) && (Q = er[0] = e)
            }, ea = function (e) {
                q = e, et(e)
            };

        function en() {
            ea(1200), et(1252)
        }

        function es(e) {
            for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
            return r
        }

        function ei(e) {
            for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
            return r.join("")
        }

        var ec = function (e) {
            var r = e.charCodeAt(0), t = e.charCodeAt(1);
            return 255 == r && 254 == t ? function (e) {
                for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
                return r.join("")
            }(e.slice(2)) : 254 == r && 255 == t ? ei(e.slice(2)) : 65279 == r ? e.slice(1) : e
        }, eo = function (e) {
            return String.fromCharCode(e)
        }, el = function (e) {
            return String.fromCharCode(e)
        }, ef = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function eh(e) {
            for (var r = "", t = 0, a = 0, n = 0, s = 0, i = 0, c = 0, o = 0, l = 0; l < e.length;) s = (t = e.charCodeAt(l++)) >> 2, i = (3 & t) << 4 | (a = e.charCodeAt(l++)) >> 4, c = (15 & a) << 2 | (n = e.charCodeAt(l++)) >> 6, o = 63 & n, isNaN(a) ? c = o = 64 : isNaN(n) && (o = 64), r += ef.charAt(s) + ef.charAt(i) + ef.charAt(c) + ef.charAt(o);
            return r
        }

        function eu(e) {
            var r = "", t = 0, a = 0, n = 0, s = 0, i = 0, c = 0;
            e = e.replace(/[^\w\+\/\=]/g, "");
            for (var o = 0; o < e.length;) r += String.fromCharCode(ef.indexOf(e.charAt(o++)) << 2 | (s = ef.indexOf(e.charAt(o++))) >> 4), t = (15 & s) << 4 | (i = ef.indexOf(e.charAt(o++))) >> 2, 64 !== i && (r += String.fromCharCode(t)), a = (3 & i) << 6 | (c = ef.indexOf(e.charAt(o++))), 64 !== c && (r += String.fromCharCode(a));
            return r
        }

        var ed = void 0 !== X && void 0 !== J && void 0 !== J.versions && !!J.versions.node, ep = function () {
            if (void 0 !== X) {
                var e = !X.from;
                if (!e) try {
                    X.from("foo", "utf8")
                } catch (r) {
                    e = !0
                }
                return e ? function (e, r) {
                    return r ? new X(e, r) : new X(e)
                } : X.from.bind(X)
            }
            return function () {
            }
        }();

        function eg(e) {
            return ed ? X.alloc ? X.alloc(e) : new X(e) : "undefined" != typeof Uint8Array ? new Uint8Array(e) : Array(e)
        }

        function em(e) {
            return ed ? X.allocUnsafe ? X.allocUnsafe(e) : new X(e) : "undefined" != typeof Uint8Array ? new Uint8Array(e) : Array(e)
        }

        var ev = function (e) {
            return ed ? ep(e, "binary") : e.split("").map(function (e) {
                return 255 & e.charCodeAt(0)
            })
        };

        function eb(e) {
            if (Array.isArray(e)) return e.map(function (e) {
                return String.fromCharCode(e)
            }).join("");
            for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
            return r.join("")
        }

        function eT(e) {
            if ("undefined" == typeof ArrayBuffer) throw Error("Unsupported");
            if (e instanceof ArrayBuffer) return eT(new Uint8Array(e));
            for (var r = Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
            return r
        }

        var eE = ed ? function (e) {
            return X.concat(e.map(function (e) {
                return X.isBuffer(e) ? e : ep(e)
            }))
        } : function (e) {
            if ("undefined" != typeof Uint8Array) {
                var r = 0, t = 0;
                for (r = 0; r < e.length; ++r) t += e[r].length;
                var a = new Uint8Array(t), n = 0;
                for (r = 0, t = 0; r < e.length; t += n, ++r) if (n = e[r].length, e[r] instanceof Uint8Array) a.set(e[r], t); else if ("string" == typeof e[r]) throw "wtf"; else a.set(new Uint8Array(e[r]), t);
                return a
            }
            return [].concat.apply([], e.map(function (e) {
                return Array.isArray(e) ? e : [].slice.call(e)
            }))
        }, ew = /\u0000/g, eA = /[\u0001-\u0006]/g;

        function eS(e) {
            for (var r = "", t = e.length - 1; t >= 0;) r += e.charAt(t--);
            return r
        }

        function ek(e, r) {
            var t = "" + e;
            return t.length >= r ? t : rp("0", r - t.length) + t
        }

        function ey(e, r) {
            var t = "" + e;
            return t.length >= r ? t : rp(" ", r - t.length) + t
        }

        function eC(e, r) {
            var t = "" + e;
            return t.length >= r ? t : t + rp(" ", r - t.length)
        }

        function e_(e, r) {
            var t, a;
            return e > 4294967296 || e < -4294967296 ? (t = "" + Math.round(e)).length >= r ? t : rp("0", r - t.length) + t : (a = "" + Math.round(e)).length >= r ? a : rp("0", r - a.length) + a
        }

        function eO(e, r) {
            return r = r || 0, e.length >= 7 + r && (32 | e.charCodeAt(r)) == 103 && (32 | e.charCodeAt(r + 1)) == 101 && (32 | e.charCodeAt(r + 2)) == 110 && (32 | e.charCodeAt(r + 3)) == 101 && (32 | e.charCodeAt(r + 4)) == 114 && (32 | e.charCodeAt(r + 5)) == 97 && (32 | e.charCodeAt(r + 6)) == 108
        }

        var eR = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]],
            eI = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]],
            ex = {
                0: "General",
                1: "0",
                2: "0.00",
                3: "#,##0",
                4: "#,##0.00",
                9: "0%",
                10: "0.00%",
                11: "0.00E+00",
                12: "# ?/?",
                13: "# ??/??",
                14: "m/d/yy",
                15: "d-mmm-yy",
                16: "d-mmm",
                17: "mmm-yy",
                18: "h:mm AM/PM",
                19: "h:mm:ss AM/PM",
                20: "h:mm",
                21: "h:mm:ss",
                22: "m/d/yy h:mm",
                37: "#,##0 ;(#,##0)",
                38: "#,##0 ;[Red](#,##0)",
                39: "#,##0.00;(#,##0.00)",
                40: "#,##0.00;[Red](#,##0.00)",
                45: "mm:ss",
                46: "[h]:mm:ss",
                47: "mmss.0",
                48: "##0.0E+0",
                49: "@",
                56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
            }, eN = {
                5: 37,
                6: 38,
                7: 39,
                8: 40,
                23: 0,
                24: 0,
                25: 0,
                26: 0,
                27: 14,
                28: 14,
                29: 14,
                30: 14,
                31: 14,
                50: 14,
                51: 14,
                52: 14,
                53: 14,
                54: 14,
                55: 14,
                56: 14,
                57: 14,
                58: 14,
                59: 1,
                60: 2,
                61: 3,
                62: 4,
                67: 9,
                68: 10,
                69: 12,
                70: 13,
                71: 14,
                72: 14,
                73: 15,
                74: 16,
                75: 17,
                76: 20,
                77: 21,
                78: 22,
                79: 45,
                80: 46,
                81: 47,
                82: 0
            }, eD = {
                5: '"$"#,##0_);\\("$"#,##0\\)',
                63: '"$"#,##0_);\\("$"#,##0\\)',
                6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
                64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
                7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
                65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
                8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
                66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
                41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
                42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
                43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
                44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
            };

        function eF(e, r, t) {
            for (var a = e < 0 ? -1 : 1, n = e * a, s = 0, i = 1, c = 0, o = 1, l = 0, f = 0, h = Math.floor(n); l < r && (c = (h = Math.floor(n)) * i + s, f = h * l + o, !(n - h < 5e-8));) n = 1 / (n - h), s = i, i = c, o = l, l = f;
            if (f > r && (l > r ? (f = o, c = s) : (f = l, c = i)), !t) return [0, a * c, f];
            var u = Math.floor(a * c / f);
            return [u, a * c - u * f, f]
        }

        function eP(e, r, t) {
            if (e > 2958465 || e < 0) return null;
            var a = 0 | e, n = Math.floor(86400 * (e - a)), s = 0, i = [],
                c = {D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0};
            if (1e-6 > Math.abs(c.u) && (c.u = 0), r && r.date1904 && (a += 1462), c.u > .9999 && (c.u = 0, 86400 == ++n && (c.T = n = 0, ++a, ++c.D)), 60 === a) i = t ? [1317, 10, 29] : [1900, 2, 29], s = 3; else if (0 === a) i = t ? [1317, 8, 29] : [1900, 1, 0], s = 6; else {
                a > 60 && --a;
                var o, l, f = new Date(1900, 0, 1);
                f.setDate(f.getDate() + a - 1), i = [f.getFullYear(), f.getMonth() + 1, f.getDate()], s = f.getDay(), a < 60 && (s = (s + 6) % 7), t && (o = i, o[0] -= 581, l = f.getDay(), f < 60 && (l = (l + 6) % 7), s = l)
            }
            return c.y = i[0], c.m = i[1], c.d = i[2], c.S = n % 60, n = Math.floor(n / 60), c.M = n % 60, n = Math.floor(n / 60), c.H = n, c.q = s, c
        }

        var eL = new Date(1899, 11, 31, 0, 0, 0), eM = eL.getTime(), eU = new Date(1900, 2, 1, 0, 0, 0);

        function eB(e, r) {
            var t = e.getTime();
            return r ? t -= 1262304e5 : e >= eU && (t += 864e5), (t - (eM + (e.getTimezoneOffset() - eL.getTimezoneOffset()) * 6e4)) / 864e5
        }

        function eH(e) {
            return -1 == e.indexOf(".") ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1")
        }

        function eW(e) {
            var r, t, a, n, s, i = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
            return i >= -4 && i <= -1 ? s = e.toPrecision(10 + i) : 9 >= Math.abs(i) ? (r = e < 0 ? 12 : 11, s = (t = eH(e.toFixed(12))).length <= r || (t = e.toPrecision(10)).length <= r ? t : e.toExponential(5)) : s = 10 === i ? e.toFixed(10).substr(0, 12) : (a = eH(e.toFixed(11))).length > (e < 0 ? 12 : 11) || "0" === a || "-0" === a ? e.toPrecision(6) : a, eH(-1 == (n = s.toUpperCase()).indexOf("E") ? n : n.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2"))
        }

        function eV(e, r) {
            switch (typeof e) {
                case"string":
                    return e;
                case"boolean":
                    return e ? "TRUE" : "FALSE";
                case"number":
                    return (0 | e) === e ? e.toString(10) : eW(e);
                case"undefined":
                    return "";
                case"object":
                    if (null == e) return "";
                    if (e instanceof Date) return e4(14, eB(e, r && r.date1904), r)
            }
            throw Error("unsupported value in General format: " + e)
        }

        function ez(e) {
            if (e.length <= 3) return e;
            for (var r = e.length % 3, t = e.substr(0, r); r != e.length; r += 3) t += (t.length > 0 ? "," : "") + e.substr(r, 3);
            return t
        }

        var eG = /%/g, e$ = /# (\?+)( ?)\/( ?)(\d+)/, eY = /^#*0*\.([0#]+)/, ej = /\).*[0#]/,
            eK = /\(###\) ###\\?-####/;

        function eX(e) {
            for (var r, t = "", a = 0; a != e.length; ++a) switch (r = e.charCodeAt(a)) {
                case 35:
                    break;
                case 63:
                    t += " ";
                    break;
                case 48:
                    t += "0";
                    break;
                default:
                    t += String.fromCharCode(r)
            }
            return t
        }

        function eJ(e, r) {
            var t = Math.pow(10, r);
            return "" + Math.round(e * t) / t
        }

        function eZ(e, r) {
            var t = e - Math.floor(e), a = Math.pow(10, r);
            return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a)
        }

        function eq(e, r, t) {
            return (0 | t) === t ? function e(r, t, a) {
                if (40 === r.charCodeAt(0) && !t.match(ej)) {
                    var n, s = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    return a >= 0 ? e("n", s, a) : "(" + e("n", s, -a) + ")"
                }
                if (44 === t.charCodeAt(t.length - 1)) return function (e, r, t) {
                    for (var a = r.length - 1; 44 === r.charCodeAt(a - 1);) --a;
                    return eq(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)))
                }(r, t, a);
                if (-1 !== t.indexOf("%")) return c = (i = t).replace(eG, ""), o = i.length - c.length, eq(r, c, a * Math.pow(10, 2 * o)) + rp("%", o);
                if (-1 !== t.indexOf("E")) return function e(r, t) {
                    var a, n = r.indexOf("E") - r.indexOf(".") - 1;
                    if (r.match(/^#+0.0E\+0$/)) {
                        if (0 == t) return "0.0E+0";
                        if (t < 0) return "-" + e(r, -t);
                        var s = r.indexOf(".");
                        -1 === s && (s = r.indexOf("E"));
                        var i = Math.floor(Math.log(t) * Math.LOG10E) % s;
                        if (i < 0 && (i += s), !(a = (t / Math.pow(10, i)).toPrecision(n + 1 + (s + i) % s)).match(/[Ee]/)) {
                            var c = Math.floor(Math.log(t) * Math.LOG10E);
                            -1 === a.indexOf(".") ? a = a.charAt(0) + "." + a.substr(1) + "E+" + (c - a.length + i) : a += "E+" + (c - i), a = a.replace(/\+-/, "-")
                        }
                        a = a.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, r, t, a) {
                            return r + t + a.substr(0, (s + i) % s) + "." + a.substr(i) + "E"
                        })
                    } else a = t.toExponential(n);
                    return r.match(/E\+00$/) && a.match(/e[+-]\d$/) && (a = a.substr(0, a.length - 1) + "0" + a.charAt(a.length - 1)), r.match(/E\-/) && a.match(/e\+/) && (a = a.replace(/e\+/, "e")), a.replace("e", "E")
                }(t, a);
                if (36 === t.charCodeAt(0)) return "$" + e(r, t.substr(" " == t.charAt(1) ? 2 : 1), a);
                var i, c, o, l, f, h, u, d = Math.abs(a), p = a < 0 ? "-" : "";
                if (t.match(/^00+$/)) return p + ek(d, t.length);
                if (t.match(/^[#?]+$/)) return l = "" + a, 0 === a && (l = ""), l.length > t.length ? l : eX(t.substr(0, t.length - l.length)) + l;
                if (f = t.match(e$)) return p + (0 === d ? "" : "" + d) + rp(" ", (n = f)[1].length + 2 + n[4].length);
                if (t.match(/^#+0+$/)) return p + ek(d, t.length - t.indexOf("0"));
                if (f = t.match(eY)) return l = (l = ("" + a).replace(/^([^\.]+)$/, "$1." + eX(f[1])).replace(/\.$/, "." + eX(f[1]))).replace(/\.(\d*)$/, function (e, r) {
                    return "." + r + rp("0", eX(f[1]).length - r.length)
                }), -1 !== t.indexOf("0.") ? l : l.replace(/^0\./, ".");
                if (f = (t = t.replace(/^#+([0.])/, "$1")).match(/^(0*)\.(#*)$/)) return p + ("" + d).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, f[1].length ? "0." : ".");
                if (f = t.match(/^#{1,3},##0(\.?)$/)) return p + ez("" + d);
                if (f = t.match(/^#,##0\.([#0]*0)$/)) return a < 0 ? "-" + e(r, t, -a) : ez("" + a) + "." + rp("0", f[1].length);
                if (f = t.match(/^#,#*,#0/)) return e(r, t.replace(/^#,#*,/, ""), a);
                if (f = t.match(/^([0#]+)(\\?-([0#]+))+$/)) return l = eS(e(r, t.replace(/[\\-]/g, ""), a)), h = 0, eS(eS(t.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
                    return h < l.length ? l.charAt(h++) : "0" === e ? "0" : ""
                }));
                if (t.match(eK)) return "(" + (l = e(r, "##########", a)).substr(0, 3) + ") " + l.substr(3, 3) + "-" + l.substr(6);
                var g = "";
                if (f = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = eF(d, Math.pow(10, h = Math.min(f[4].length, 7)) - 1, !1), l = "" + p, " " == (g = eq("n", f[1], u[1])).charAt(g.length - 1) && (g = g.substr(0, g.length - 1) + "0"), l += g + f[2] + "/" + f[3], (g = eC(u[2], h)).length < f[4].length && (g = eX(f[4].substr(f[4].length - g.length)) + g), l += g;
                if (f = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return p + ((u = eF(d, Math.pow(10, h = Math.min(Math.max(f[1].length, f[4].length), 7)) - 1, !0))[0] || (u[1] ? "" : "0")) + " " + (u[1] ? ey(u[1], h) + f[2] + "/" + f[3] + eC(u[2], h) : rp(" ", 2 * h + 1 + f[2].length + f[3].length));
                if (f = t.match(/^[#0?]+$/)) return (l = "" + a, t.length <= l.length) ? l : eX(t.substr(0, t.length - l.length)) + l;
                if (f = t.match(/^([#0]+)\.([#0]+)$/)) {
                    h = (l = "" + a.toFixed(Math.min(f[2].length, 10)).replace(/([^0])0+$/, "$1")).indexOf(".");
                    var m = t.indexOf(".") - h, v = t.length - l.length - m;
                    return eX(t.substr(0, m) + l + t.substr(t.length - v))
                }
                if (f = t.match(/^00,000\.([#0]*0)$/)) return a < 0 ? "-" + e(r, t, -a) : ez("" + a).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (e) {
                    return "00," + (e.length < 3 ? ek(0, 3 - e.length) : "") + e
                }) + "." + ek(0, f[1].length);
                switch (t) {
                    case"###,###":
                    case"##,###":
                    case"#,###":
                        var b = ez("" + d);
                        return "0" !== b ? p + b : "";
                    default:
                        if (t.match(/\.[0#?]*$/)) return e(r, t.slice(0, t.lastIndexOf(".")), a) + eX(t.slice(t.lastIndexOf(".")))
                }
                throw Error("unsupported format |" + t + "|")
            }(e, r, t) : function e(r, t, a) {
                if (40 === r.charCodeAt(0) && !t.match(ej)) {
                    var n, s, i, c, o, l, f = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    return a >= 0 ? e("n", f, a) : "(" + e("n", f, -a) + ")"
                }
                if (44 === t.charCodeAt(t.length - 1)) return function (e, r, t) {
                    for (var a = r.length - 1; 44 === r.charCodeAt(a - 1);) --a;
                    return eq(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)))
                }(r, t, a);
                if (-1 !== t.indexOf("%")) return u = (h = t).replace(eG, ""), d = h.length - u.length, eq(r, u, a * Math.pow(10, 2 * d)) + rp("%", d);
                if (-1 !== t.indexOf("E")) return function e(r, t) {
                    var a, n = r.indexOf("E") - r.indexOf(".") - 1;
                    if (r.match(/^#+0.0E\+0$/)) {
                        if (0 == t) return "0.0E+0";
                        if (t < 0) return "-" + e(r, -t);
                        var s = r.indexOf(".");
                        -1 === s && (s = r.indexOf("E"));
                        var i = Math.floor(Math.log(t) * Math.LOG10E) % s;
                        if (i < 0 && (i += s), -1 === (a = (t / Math.pow(10, i)).toPrecision(n + 1 + (s + i) % s)).indexOf("e")) {
                            var c = Math.floor(Math.log(t) * Math.LOG10E);
                            for (-1 === a.indexOf(".") ? a = a.charAt(0) + "." + a.substr(1) + "E+" + (c - a.length + i) : a += "E+" + (c - i); "0." === a.substr(0, 2);) a = (a = a.charAt(0) + a.substr(2, s) + "." + a.substr(2 + s)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
                            a = a.replace(/\+-/, "-")
                        }
                        a = a.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, r, t, a) {
                            return r + t + a.substr(0, (s + i) % s) + "." + a.substr(i) + "E"
                        })
                    } else a = t.toExponential(n);
                    return r.match(/E\+00$/) && a.match(/e[+-]\d$/) && (a = a.substr(0, a.length - 1) + "0" + a.charAt(a.length - 1)), r.match(/E\-/) && a.match(/e\+/) && (a = a.replace(/e\+/, "e")), a.replace("e", "E")
                }(t, a);
                if (36 === t.charCodeAt(0)) return "$" + e(r, t.substr(" " == t.charAt(1) ? 2 : 1), a);
                var h, u, d, p, g, m, v, b = Math.abs(a), T = a < 0 ? "-" : "";
                if (t.match(/^00+$/)) return T + e_(b, t.length);
                if (t.match(/^[#?]+$/)) return "0" === (p = e_(a, 0)) && (p = ""), p.length > t.length ? p : eX(t.substr(0, t.length - p.length)) + p;
                if (g = t.match(e$)) return c = Math.floor((i = Math.round(b * (s = parseInt((n = g)[4], 10)))) / s), o = i - c * s, T + (0 === c ? "" : "" + c) + " " + (0 === o ? rp(" ", n[1].length + 1 + n[4].length) : ey(o, n[1].length) + n[2] + "/" + n[3] + ek(s, n[4].length));
                if (t.match(/^#+0+$/)) return T + e_(b, t.length - t.indexOf("0"));
                if (g = t.match(eY)) return p = eJ(a, g[1].length).replace(/^([^\.]+)$/, "$1." + eX(g[1])).replace(/\.$/, "." + eX(g[1])).replace(/\.(\d*)$/, function (e, r) {
                    return "." + r + rp("0", eX(g[1]).length - r.length)
                }), -1 !== t.indexOf("0.") ? p : p.replace(/^0\./, ".");
                if (g = (t = t.replace(/^#+([0.])/, "$1")).match(/^(0*)\.(#*)$/)) return T + eJ(b, g[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, g[1].length ? "0." : ".");
                if (g = t.match(/^#{1,3},##0(\.?)$/)) return T + ez(e_(b, 0));
                if (g = t.match(/^#,##0\.([#0]*0)$/)) return a < 0 ? "-" + e(r, t, -a) : ez("" + (Math.floor(a) + ((l = g[1].length) < ("" + Math.round((a - Math.floor(a)) * Math.pow(10, l))).length ? 1 : 0))) + "." + ek(eZ(a, g[1].length), g[1].length);
                if (g = t.match(/^#,#*,#0/)) return e(r, t.replace(/^#,#*,/, ""), a);
                if (g = t.match(/^([0#]+)(\\?-([0#]+))+$/)) return p = eS(e(r, t.replace(/[\\-]/g, ""), a)), m = 0, eS(eS(t.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
                    return m < p.length ? p.charAt(m++) : "0" === e ? "0" : ""
                }));
                if (t.match(eK)) return "(" + (p = e(r, "##########", a)).substr(0, 3) + ") " + p.substr(3, 3) + "-" + p.substr(6);
                var E = "";
                if (g = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return v = eF(b, Math.pow(10, m = Math.min(g[4].length, 7)) - 1, !1), p = "" + T, " " == (E = eq("n", g[1], v[1])).charAt(E.length - 1) && (E = E.substr(0, E.length - 1) + "0"), p += E + g[2] + "/" + g[3], (E = eC(v[2], m)).length < g[4].length && (E = eX(g[4].substr(g[4].length - E.length)) + E), p += E;
                if (g = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return T + ((v = eF(b, Math.pow(10, m = Math.min(Math.max(g[1].length, g[4].length), 7)) - 1, !0))[0] || (v[1] ? "" : "0")) + " " + (v[1] ? ey(v[1], m) + g[2] + "/" + g[3] + eC(v[2], m) : rp(" ", 2 * m + 1 + g[2].length + g[3].length));
                if (g = t.match(/^[#0?]+$/)) return (p = e_(a, 0), t.length <= p.length) ? p : eX(t.substr(0, t.length - p.length)) + p;
                if (g = t.match(/^([#0?]+)\.([#0]+)$/)) {
                    m = (p = "" + a.toFixed(Math.min(g[2].length, 10)).replace(/([^0])0+$/, "$1")).indexOf(".");
                    var w = t.indexOf(".") - m, A = t.length - p.length - w;
                    return eX(t.substr(0, w) + p + t.substr(t.length - A))
                }
                if (g = t.match(/^00,000\.([#0]*0)$/)) return m = eZ(a, g[1].length), a < 0 ? "-" + e(r, t, -a) : ez(a < 2147483647 && a > -2147483648 ? "" + (a >= 0 ? 0 | a : a - 1 | 0) : "" + Math.floor(a)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (e) {
                    return "00," + (e.length < 3 ? ek(0, 3 - e.length) : "") + e
                }) + "." + ek(m, g[1].length);
                switch (t) {
                    case"###,##0.00":
                        return e(r, "#,##0.00", a);
                    case"###,###":
                    case"##,###":
                    case"#,###":
                        var S = ez(e_(b, 0));
                        return "0" !== S ? T + S : "";
                    case"###,###.00":
                        return e(r, "###,##0.00", a).replace(/^0\./, ".");
                    case"#,###.00":
                        return e(r, "#,##0.00", a).replace(/^0\./, ".")
                }
                throw Error("unsupported format |" + t + "|")
            }(e, r, t)
        }

        var eQ = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;

        function e1(e) {
            for (var r = 0, t = "", a = ""; r < e.length;) switch (t = e.charAt(r)) {
                case"G":
                    eO(e, r) && (r += 6), r++;
                    break;
                case'"':
                    for (; 34 !== e.charCodeAt(++r) && r < e.length;) ;
                    ++r;
                    break;
                case"\\":
                case"_":
                    r += 2;
                    break;
                case"@":
                    ++r;
                    break;
                case"B":
                case"b":
                    if ("1" === e.charAt(r + 1) || "2" === e.charAt(r + 1)) return !0;
                case"M":
                case"D":
                case"Y":
                case"H":
                case"S":
                case"E":
                case"m":
                case"d":
                case"y":
                case"h":
                case"s":
                case"e":
                case"g":
                    return !0;
                case"A":
                case"a":
                case"上":
                    if ("A/P" === e.substr(r, 3).toUpperCase() || "AM/PM" === e.substr(r, 5).toUpperCase() || "上午/下午" === e.substr(r, 5).toUpperCase()) return !0;
                    ++r;
                    break;
                case"[":
                    for (a = t; "]" !== e.charAt(r++) && r < e.length;) a += e.charAt(r);
                    if (a.match(eQ)) return !0;
                    break;
                case".":
                case"0":
                case"#":
                    for (; r < e.length && ("0#?.,E+-%".indexOf(t = e.charAt(++r)) > -1 || "\\" == t && "-" == e.charAt(r + 1) && "0#".indexOf(e.charAt(r + 2)) > -1);) ;
                    break;
                case"?":
                    for (; e.charAt(++r) === t;) ;
                    break;
                case"*":
                    ++r, (" " == e.charAt(r) || "*" == e.charAt(r)) && ++r;
                    break;
                case"(":
                case")":
                case" ":
                default:
                    ++r;
                    break;
                case"1":
                case"2":
                case"3":
                case"4":
                case"5":
                case"6":
                case"7":
                case"8":
                case"9":
                    for (; r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1;) ;
            }
            return !1
        }

        var e0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;

        function e2(e, r) {
            if (null == r) return !1;
            var t = parseFloat(r[2]);
            switch (r[1]) {
                case"=":
                    if (e == t) return !0;
                    break;
                case">":
                    if (e > t) return !0;
                    break;
                case"<":
                    if (e < t) return !0;
                    break;
                case"<>":
                    if (e != t) return !0;
                    break;
                case">=":
                    if (e >= t) return !0;
                    break;
                case"<=":
                    if (e <= t) return !0
            }
            return !1
        }

        function e4(e, r, t) {
            null == t && (t = {});
            var a = "";
            switch (typeof e) {
                case"string":
                    a = "m/d/yy" == e && t.dateNF ? t.dateNF : e;
                    break;
                case"number":
                    null == (a = 14 == e && t.dateNF ? t.dateNF : (null != t.table ? t.table : ex)[e]) && (a = t.table && t.table[eN[e]] || ex[eN[e]]), null == a && (a = eD[e] || "General")
            }
            if (eO(a, 0)) return eV(r, t);
            r instanceof Date && (r = eB(r, t.date1904));
            var n = function (e, r) {
                var t = function (e) {
                    for (var r = [], t = !1, a = 0, n = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
                        case 34:
                            t = !t;
                            break;
                        case 95:
                        case 42:
                        case 92:
                            ++a;
                            break;
                        case 59:
                            r[r.length] = e.substr(n, a - n), n = a + 1
                    }
                    if (r[r.length] = e.substr(n), !0 === t) throw Error("Format |" + e + "| unterminated string ");
                    return r
                }(e), a = t.length, n = t[a - 1].indexOf("@");
                if (a < 4 && n > -1 && --a, t.length > 4) throw Error("cannot find right format for |" + t.join("|") + "|");
                if ("number" != typeof r) return [4, 4 === t.length || n > -1 ? t[t.length - 1] : "@"];
                switch (t.length) {
                    case 1:
                        t = n > -1 ? ["General", "General", "General", t[0]] : [t[0], t[0], t[0], "@"];
                        break;
                    case 2:
                        t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
                        break;
                    case 3:
                        t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"]
                }
                var s = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
                if (-1 === t[0].indexOf("[") && -1 === t[1].indexOf("[")) return [a, s];
                if (null != t[0].match(/\[[=<>]/) || null != t[1].match(/\[[=<>]/)) {
                    var i = t[0].match(e0), c = t[1].match(e0);
                    return e2(r, i) ? [a, t[0]] : e2(r, c) ? [a, t[1]] : [a, t[null != i && null != c ? 2 : 1]]
                }
                return [a, s]
            }(a, r);
            if (eO(n[1])) return eV(r, t);
            if (!0 === r) r = "TRUE"; else if (!1 === r) r = "FALSE"; else if ("" === r || null == r) return "";
            return function (e, r, t, a) {
                for (var n, s, i, c = [], o = "", l = 0, f = "", h = "t", u = "H"; l < e.length;) switch (f = e.charAt(l)) {
                    case"G":
                        if (!eO(e, l)) throw Error("unrecognized character " + f + " in " + e);
                        c[c.length] = {t: "G", v: "General"}, l += 7;
                        break;
                    case'"':
                        for (o = ""; 34 !== (i = e.charCodeAt(++l)) && l < e.length;) o += String.fromCharCode(i);
                        c[c.length] = {t: "t", v: o}, ++l;
                        break;
                    case"\\":
                        var d = e.charAt(++l), p = "(" === d || ")" === d ? d : "t";
                        c[c.length] = {t: p, v: d}, ++l;
                        break;
                    case"_":
                        c[c.length] = {t: "t", v: " "}, l += 2;
                        break;
                    case"@":
                        c[c.length] = {t: "T", v: r}, ++l;
                        break;
                    case"B":
                    case"b":
                        if ("1" === e.charAt(l + 1) || "2" === e.charAt(l + 1)) {
                            if (null == n && null == (n = eP(r, t, "2" === e.charAt(l + 1)))) return "";
                            c[c.length] = {t: "X", v: e.substr(l, 2)}, h = f, l += 2;
                            break
                        }
                    case"M":
                    case"D":
                    case"Y":
                    case"H":
                    case"S":
                    case"E":
                        f = f.toLowerCase();
                    case"m":
                    case"d":
                    case"y":
                    case"h":
                    case"s":
                    case"e":
                    case"g":
                        if (r < 0 || null == n && null == (n = eP(r, t))) return "";
                        for (o = f; ++l < e.length && e.charAt(l).toLowerCase() === f;) o += f;
                        "m" === f && "h" === h.toLowerCase() && (f = "M"), "h" === f && (f = u), c[c.length] = {
                            t: f,
                            v: o
                        }, h = f;
                        break;
                    case"A":
                    case"a":
                    case"上":
                        var g = {t: f, v: f};
                        if (null == n && (n = eP(r, t)), "A/P" === e.substr(l, 3).toUpperCase() ? (null != n && (g.v = n.H >= 12 ? "P" : "A"), g.t = "T", u = "h", l += 3) : "AM/PM" === e.substr(l, 5).toUpperCase() ? (null != n && (g.v = n.H >= 12 ? "PM" : "AM"), g.t = "T", l += 5, u = "h") : "上午/下午" === e.substr(l, 5).toUpperCase() ? (null != n && (g.v = n.H >= 12 ? "下午" : "上午"), g.t = "T", l += 5, u = "h") : (g.t = "t", ++l), null == n && "T" === g.t) return "";
                        c[c.length] = g, h = f;
                        break;
                    case"[":
                        for (o = f; "]" !== e.charAt(l++) && l < e.length;) o += e.charAt(l);
                        if ("]" !== o.slice(-1)) throw 'unterminated "[" block: |' + o + "|";
                        if (o.match(eQ)) {
                            if (null == n && null == (n = eP(r, t))) return "";
                            c[c.length] = {t: "Z", v: o.toLowerCase()}, h = o.charAt(1)
                        } else o.indexOf("$") > -1 && (o = (o.match(/\$([^-\[\]]*)/) || [])[1] || "$", e1(e) || (c[c.length] = {
                            t: "t",
                            v: o
                        }));
                        break;
                    case".":
                        if (null != n) {
                            for (o = f; ++l < e.length && "0" === (f = e.charAt(l));) o += f;
                            c[c.length] = {t: "s", v: o};
                            break
                        }
                    case"0":
                    case"#":
                        for (o = f; ++l < e.length && "0#?.,E+-%".indexOf(f = e.charAt(l)) > -1;) o += f;
                        c[c.length] = {t: "n", v: o};
                        break;
                    case"?":
                        for (o = f; e.charAt(++l) === f;) o += f;
                        c[c.length] = {t: f, v: o}, h = f;
                        break;
                    case"*":
                        ++l, (" " == e.charAt(l) || "*" == e.charAt(l)) && ++l;
                        break;
                    case"(":
                    case")":
                        c[c.length] = {t: 1 === a ? "t" : f, v: f}, ++l;
                        break;
                    case"1":
                    case"2":
                    case"3":
                    case"4":
                    case"5":
                    case"6":
                    case"7":
                    case"8":
                    case"9":
                        for (o = f; l < e.length && "0123456789".indexOf(e.charAt(++l)) > -1;) o += e.charAt(l);
                        c[c.length] = {t: "D", v: o};
                        break;
                    case" ":
                        c[c.length] = {t: f, v: f}, ++l;
                        break;
                    case"$":
                        c[c.length] = {t: "t", v: "$"}, ++l;
                        break;
                    default:
                        if (-1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f)) throw Error("unrecognized character " + f + " in " + e);
                        c[c.length] = {t: "t", v: f}, ++l
                }
                var m, v = 0, b = 0;
                for (l = c.length - 1, h = "t"; l >= 0; --l) switch (c[l].t) {
                    case"h":
                    case"H":
                        c[l].t = u, h = "h", v < 1 && (v = 1);
                        break;
                    case"s":
                        (m = c[l].v.match(/\.0+$/)) && (b = Math.max(b, m[0].length - 1)), v < 3 && (v = 3);
                    case"d":
                    case"y":
                    case"M":
                    case"e":
                        h = c[l].t;
                        break;
                    case"m":
                        "s" === h && (c[l].t = "M", v < 2 && (v = 2));
                        break;
                    case"X":
                        break;
                    case"Z":
                        v < 1 && c[l].v.match(/[Hh]/) && (v = 1), v < 2 && c[l].v.match(/[Mm]/) && (v = 2), v < 3 && c[l].v.match(/[Ss]/) && (v = 3)
                }
                switch (v) {
                    case 0:
                        break;
                    case 1:
                        n.u >= .5 && (n.u = 0, ++n.S), n.S >= 60 && (n.S = 0, ++n.M), n.M >= 60 && (n.M = 0, ++n.H);
                        break;
                    case 2:
                        n.u >= .5 && (n.u = 0, ++n.S), n.S >= 60 && (n.S = 0, ++n.M)
                }
                var T, E = "";
                for (l = 0; l < c.length; ++l) switch (c[l].t) {
                    case"t":
                    case"T":
                    case" ":
                    case"D":
                        break;
                    case"X":
                        c[l].v = "", c[l].t = ";";
                        break;
                    case"d":
                    case"m":
                    case"y":
                    case"h":
                    case"H":
                    case"M":
                    case"s":
                    case"e":
                    case"b":
                    case"Z":
                        c[l].v = function (e, r, t, a) {
                            var n, s = "", i = 0, c = 0, o = t.y, l = 0;
                            switch (e) {
                                case 98:
                                    o = t.y + 543;
                                case 121:
                                    switch (r.length) {
                                        case 1:
                                        case 2:
                                            n = o % 100, l = 2;
                                            break;
                                        default:
                                            n = o % 1e4, l = 4
                                    }
                                    break;
                                case 109:
                                    switch (r.length) {
                                        case 1:
                                        case 2:
                                            n = t.m, l = r.length;
                                            break;
                                        case 3:
                                            return eI[t.m - 1][1];
                                        case 5:
                                            return eI[t.m - 1][0];
                                        default:
                                            return eI[t.m - 1][2]
                                    }
                                    break;
                                case 100:
                                    switch (r.length) {
                                        case 1:
                                        case 2:
                                            n = t.d, l = r.length;
                                            break;
                                        case 3:
                                            return eR[t.q][0];
                                        default:
                                            return eR[t.q][1]
                                    }
                                    break;
                                case 104:
                                    switch (r.length) {
                                        case 1:
                                        case 2:
                                            n = 1 + (t.H + 11) % 12, l = r.length;
                                            break;
                                        default:
                                            throw "bad hour format: " + r
                                    }
                                    break;
                                case 72:
                                    switch (r.length) {
                                        case 1:
                                        case 2:
                                            n = t.H, l = r.length;
                                            break;
                                        default:
                                            throw "bad hour format: " + r
                                    }
                                    break;
                                case 77:
                                    switch (r.length) {
                                        case 1:
                                        case 2:
                                            n = t.M, l = r.length;
                                            break;
                                        default:
                                            throw "bad minute format: " + r
                                    }
                                    break;
                                case 115:
                                    if ("s" != r && "ss" != r && ".0" != r && ".00" != r && ".000" != r) throw "bad second format: " + r;
                                    if (0 === t.u && ("s" == r || "ss" == r)) return ek(t.S, r.length);
                                    if ((i = Math.round((c = a >= 2 ? 3 === a ? 1e3 : 100 : 1 === a ? 10 : 1) * (t.S + t.u))) >= 60 * c && (i = 0), "s" === r) return 0 === i ? "0" : "" + i / c;
                                    if (s = ek(i, 2 + a), "ss" === r) return s.substr(0, 2);
                                    return "." + s.substr(2, r.length - 1);
                                case 90:
                                    switch (r) {
                                        case"[h]":
                                        case"[hh]":
                                            n = 24 * t.D + t.H;
                                            break;
                                        case"[m]":
                                        case"[mm]":
                                            n = (24 * t.D + t.H) * 60 + t.M;
                                            break;
                                        case"[s]":
                                        case"[ss]":
                                            n = ((24 * t.D + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
                                            break;
                                        default:
                                            throw "bad abstime format: " + r
                                    }
                                    l = 3 === r.length ? 1 : 2;
                                    break;
                                case 101:
                                    n = o, l = 1
                            }
                            return l > 0 ? ek(n, l) : ""
                        }(c[l].t.charCodeAt(0), c[l].v, n, b), c[l].t = "t";
                        break;
                    case"n":
                    case"?":
                        for (T = l + 1; null != c[T] && ("?" === (f = c[T].t) || "D" === f || (" " === f || "t" === f) && null != c[T + 1] && ("?" === c[T + 1].t || "t" === c[T + 1].t && "/" === c[T + 1].v) || "(" === c[l].t && (" " === f || "n" === f || ")" === f) || "t" === f && ("/" === c[T].v || " " === c[T].v && null != c[T + 1] && "?" == c[T + 1].t));) c[l].v += c[T].v, c[T] = {
                            v: "",
                            t: ";"
                        }, ++T;
                        E += c[l].v, l = T - 1;
                        break;
                    case"G":
                        c[l].t = "t", c[l].v = eV(r, t)
                }
                var w, A, S = "";
                if (E.length > 0) {
                    40 == E.charCodeAt(0) ? (w = r < 0 && 45 === E.charCodeAt(0) ? -r : r, A = eq("n", E, w)) : (A = eq("n", E, w = r < 0 && a > 1 ? -r : r), w < 0 && c[0] && "t" == c[0].t && (A = A.substr(1), c[0].v = "-" + c[0].v)), T = A.length - 1;
                    var k = c.length;
                    for (l = 0; l < c.length; ++l) if (null != c[l] && "t" != c[l].t && c[l].v.indexOf(".") > -1) {
                        k = l;
                        break
                    }
                    var y = c.length;
                    if (k === c.length && -1 === A.indexOf("E")) {
                        for (l = c.length - 1; l >= 0; --l) null != c[l] && -1 !== "n?".indexOf(c[l].t) && (T >= c[l].v.length - 1 ? (T -= c[l].v.length, c[l].v = A.substr(T + 1, c[l].v.length)) : T < 0 ? c[l].v = "" : (c[l].v = A.substr(0, T + 1), T = -1), c[l].t = "t", y = l);
                        T >= 0 && y < c.length && (c[y].v = A.substr(0, T + 1) + c[y].v)
                    } else if (k !== c.length && -1 === A.indexOf("E")) {
                        for (T = A.indexOf(".") - 1, l = k; l >= 0; --l) if (null != c[l] && -1 !== "n?".indexOf(c[l].t)) {
                            for (s = c[l].v.indexOf(".") > -1 && l === k ? c[l].v.indexOf(".") - 1 : c[l].v.length - 1, S = c[l].v.substr(s + 1); s >= 0; --s) T >= 0 && ("0" === c[l].v.charAt(s) || "#" === c[l].v.charAt(s)) && (S = A.charAt(T--) + S);
                            c[l].v = S, c[l].t = "t", y = l
                        }
                        for (T >= 0 && y < c.length && (c[y].v = A.substr(0, T + 1) + c[y].v), T = A.indexOf(".") + 1, l = k; l < c.length; ++l) if (null != c[l] && (-1 !== "n?(".indexOf(c[l].t) || l === k)) {
                            for (s = c[l].v.indexOf(".") > -1 && l === k ? c[l].v.indexOf(".") + 1 : 0, S = c[l].v.substr(0, s); s < c[l].v.length; ++s) T < A.length && (S += A.charAt(T++));
                            c[l].v = S, c[l].t = "t", y = l
                        }
                    }
                }
                for (l = 0; l < c.length; ++l) null != c[l] && "n?".indexOf(c[l].t) > -1 && (w = a > 1 && r < 0 && l > 0 && "-" === c[l - 1].v ? -r : r, c[l].v = eq(c[l].t, c[l].v, w), c[l].t = "t");
                var C = "";
                for (l = 0; l !== c.length; ++l) null != c[l] && (C += c[l].v);
                return C
            }(n[1], r, t, n[0])
        }

        function e3(e, r) {
            if ("number" != typeof r) {
                r = +r || -1;
                for (var t = 0; t < 392; ++t) {
                    if (void 0 == ex[t]) {
                        r < 0 && (r = t);
                        continue
                    }
                    if (ex[t] == e) {
                        r = t;
                        break
                    }
                }
                r < 0 && (r = 391)
            }
            return ex[r] = e, r
        }

        function e5() {
            var e;
            e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', ex = e
        }

        var e6 = {
            5: '"$"#,##0_);\\("$"#,##0\\)',
            6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
            7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
            8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            23: "General",
            24: "General",
            25: "General",
            26: "General",
            27: "m/d/yy",
            28: "m/d/yy",
            29: "m/d/yy",
            30: "m/d/yy",
            31: "m/d/yy",
            32: "h:mm:ss",
            33: "h:mm:ss",
            34: "h:mm:ss",
            35: "h:mm:ss",
            36: "m/d/yy",
            41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
            42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
            43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
            44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
            50: "m/d/yy",
            51: "m/d/yy",
            52: "m/d/yy",
            53: "m/d/yy",
            54: "m/d/yy",
            55: "m/d/yy",
            56: "m/d/yy",
            57: "m/d/yy",
            58: "m/d/yy",
            59: "0",
            60: "0.00",
            61: "#,##0",
            62: "#,##0.00",
            63: '"$"#,##0_);\\("$"#,##0\\)',
            64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
            65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
            66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            67: "0%",
            68: "0.00%",
            69: "# ?/?",
            70: "# ??/??",
            71: "m/d/yy",
            72: "m/d/yy",
            73: "d-mmm-yy",
            74: "d-mmm",
            75: "mmm-yy",
            76: "h:mm",
            77: "h:mm:ss",
            78: "m/d/yy h:mm",
            79: "mm:ss",
            80: "[h]:mm:ss",
            81: "mmss.0"
        }, e8 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g, e7 = ((n = {}).version = "1.2.0", c = (i = function (e) {
            var r = 0, t = 0, a = 0, n = "undefined" != typeof Int32Array ? new Int32Array(4096) : Array(4096);
            for (a = 0; 256 != a; ++a) n[a] = e[a];
            for (a = 0; 256 != a; ++a) for (t = e[a], r = 256 + a; r < 4096; r += 256) t = n[r] = t >>> 8 ^ e[255 & t];
            var s = [];
            for (a = 1; 16 != a; ++a) s[a - 1] = "undefined" != typeof Int32Array ? n.subarray(256 * a, 256 * a + 256) : n.slice(256 * a, 256 * a + 256);
            return s
        }(s = function () {
            for (var e = 0, r = Array(256), t = 0; 256 != t; ++t) e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = t) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1, r[t] = e;
            return "undefined" != typeof Int32Array ? new Int32Array(r) : r
        }()))[0], o = i[1], l = i[2], f = i[3], h = i[4], u = i[5], d = i[6], p = i[7], g = i[8], m = i[9], v = i[10], b = i[11], T = i[12], E = i[13], w = i[14], n.table = s, n.bstr = function (e, r) {
            for (var t = -1 ^ r, a = 0, n = e.length; a < n;) t = t >>> 8 ^ s[(t ^ e.charCodeAt(a++)) & 255];
            return ~t
        }, n.buf = function (e, r) {
            for (var t = -1 ^ r, a = e.length - 15, n = 0; n < a;) t = w[e[n++] ^ 255 & t] ^ E[e[n++] ^ t >> 8 & 255] ^ T[e[n++] ^ t >> 16 & 255] ^ b[e[n++] ^ t >>> 24] ^ v[e[n++]] ^ m[e[n++]] ^ g[e[n++]] ^ p[e[n++]] ^ d[e[n++]] ^ u[e[n++]] ^ h[e[n++]] ^ f[e[n++]] ^ l[e[n++]] ^ o[e[n++]] ^ c[e[n++]] ^ s[e[n++]];
            for (a += 15; n < a;) t = t >>> 8 ^ s[(t ^ e[n++]) & 255];
            return ~t
        }, n.str = function (e, r) {
            for (var t = -1 ^ r, a = 0, n = e.length, i = 0, c = 0; a < n;) (i = e.charCodeAt(a++)) < 128 ? t = t >>> 8 ^ s[(t ^ i) & 255] : i < 2048 ? t = (t = t >>> 8 ^ s[(t ^ (192 | i >> 6 & 31)) & 255]) >>> 8 ^ s[(t ^ (128 | 63 & i)) & 255] : i >= 55296 && i < 57344 ? (i = (1023 & i) + 64, c = 1023 & e.charCodeAt(a++), t = (t = (t = (t = t >>> 8 ^ s[(t ^ (240 | i >> 8 & 7)) & 255]) >>> 8 ^ s[(t ^ (128 | i >> 2 & 63)) & 255]) >>> 8 ^ s[(t ^ (128 | c >> 6 & 15 | (3 & i) << 4)) & 255]) >>> 8 ^ s[(t ^ (128 | 63 & c)) & 255]) : t = (t = (t = t >>> 8 ^ s[(t ^ (224 | i >> 12 & 15)) & 255]) >>> 8 ^ s[(t ^ (128 | i >> 6 & 63)) & 255]) >>> 8 ^ s[(t ^ (128 | 63 & i)) & 255];
            return ~t
        }, n), e9 = function () {
            var e, r, t = {};

            function a(e) {
                if ("/" == e.charAt(e.length - 1)) return -1 === e.slice(0, -1).indexOf("/") ? e : a(e.slice(0, -1));
                var r = e.lastIndexOf("/");
                return -1 === r ? e : e.slice(0, r + 1)
            }

            function n(e) {
                if ("/" == e.charAt(e.length - 1)) return n(e.slice(0, -1));
                var r = e.lastIndexOf("/");
                return -1 === r ? e : e.slice(r + 1)
            }

            function s(e) {
                tR(e, 0);
                for (var r = {}, t = 0; e.l <= e.length - 4;) {
                    var a = e.read_shift(2), n = e.read_shift(2), s = e.l + n, i = {};
                    21589 === a && (1 & (t = e.read_shift(1)) && (i.mtime = e.read_shift(4)), n > 5 && (2 & t && (i.atime = e.read_shift(4)), 4 & t && (i.ctime = e.read_shift(4))), i.mtime && (i.mt = new Date(1e3 * i.mtime))), e.l = s, r[a] = i
                }
                return r
            }

            function i() {
                return e || (e = {})
            }

            function c(e, r) {
                if (80 == e[0] && 75 == e[1]) return K(e, r);
                if ((32 | e[0]) == 109 && (32 | e[1]) == 105) return function (e, r) {
                    if ("mime-version:" != b(e.slice(0, 13)).toLowerCase()) throw Error("Unsupported MAD header");
                    var t = r && r.root || "", a = (ed && X.isBuffer(e) ? e.toString("binary") : b(e)).split("\r\n"),
                        n = 0, s = "";
                    for (n = 0; n < a.length; ++n) if (s = a[n], /^Content-Location:/i.test(s) && (s = s.slice(s.indexOf("file")), t || (t = s.slice(0, s.lastIndexOf("/") + 1)), s.slice(0, t.length) != t)) for (; t.length > 0 && (t = (t = t.slice(0, t.length - 1)).slice(0, t.lastIndexOf("/") + 1), s.slice(0, t.length) != t);) ;
                    var i = (a[1] || "").match(/boundary="(.*?)"/);
                    if (!i) throw Error("MAD cannot find boundary");
                    var c = "--" + (i[1] || ""), o = {FileIndex: [], FullPaths: []};
                    l(o);
                    var f, h = 0;
                    for (n = 0; n < a.length; ++n) {
                        var u = a[n];
                        (u === c || u === c + "--") && (h++ && function (e, r, t) {
                            for (var a, n = "", s = "", i = "", c = 0; c < 10; ++c) {
                                var o = r[c];
                                if (!o || o.match(/^\s*$/)) break;
                                var l = o.match(/^(.*?):\s*([^\s].*)$/);
                                if (l) switch (l[1].toLowerCase()) {
                                    case"content-location":
                                        n = l[2].trim();
                                        break;
                                    case"content-type":
                                        i = l[2].trim();
                                        break;
                                    case"content-transfer-encoding":
                                        s = l[2].trim()
                                }
                            }
                            switch (++c, s.toLowerCase()) {
                                case"base64":
                                    a = ev(eu(r.slice(c).join("")));
                                    break;
                                case"quoted-printable":
                                    a = function (e) {
                                        for (var r = [], t = 0; t < e.length; ++t) {
                                            for (var a = e[t]; t <= e.length && "=" == a.charAt(a.length - 1);) a = a.slice(0, a.length - 1) + e[++t];
                                            r.push(a)
                                        }
                                        for (var n = 0; n < r.length; ++n) r[n] = r[n].replace(/[=][0-9A-Fa-f]{2}/g, function (e) {
                                            return String.fromCharCode(parseInt(e.slice(1), 16))
                                        });
                                        return ev(r.join("\r\n"))
                                    }(r.slice(c));
                                    break;
                                default:
                                    throw Error("Unsupported Content-Transfer-Encoding " + s)
                            }
                            var f = Z(e, n.slice(t.length), a, {unsafe: !0});
                            i && (f.ctype = i)
                        }(o, a.slice(f, n), t), f = n)
                    }
                    return o
                }(e, r);
                if (e.length < 512) throw Error("CFB file size " + e.length + " < 512");
                var t = 3, a = 512, n = 0, s = 0, i = 0, c = 0, f = 0, h = [], g = e.slice(0, 512);
                tR(g, 0);
                var m = function (e) {
                    if (80 == e[e.l] && 75 == e[e.l + 1]) return [0, 0];
                    e.chk(p, "Header Signature: "), e.l += 16;
                    var r = e.read_shift(2, "u");
                    return [e.read_shift(2, "u"), r]
                }(g);
                switch (t = m[0]) {
                    case 3:
                        a = 512;
                        break;
                    case 4:
                        a = 4096;
                        break;
                    case 0:
                        if (0 == m[1]) return K(e, r);
                    default:
                        throw Error("Major Version: Expected 3 or 4 saw " + t)
                }
                512 !== a && tR(g = e.slice(0, a), 28);
                var v = e.slice(0, a);
                !function (e, r) {
                    var t = 9;
                    switch (e.l += 2, t = e.read_shift(2)) {
                        case 9:
                            if (3 != r) throw Error("Sector Shift: Expected 9 saw " + t);
                            break;
                        case 12:
                            if (4 != r) throw Error("Sector Shift: Expected 12 saw " + t);
                            break;
                        default:
                            throw Error("Sector Shift: Expected 9 or 12 saw " + t)
                    }
                    e.chk("0600", "Mini Sector Shift: "), e.chk("000000000000", "Reserved: ")
                }(g, t);
                var T = g.read_shift(4, "i");
                if (3 === t && 0 !== T) throw Error("# Directory Sectors: Expected 0 saw " + T);
                g.l += 4, i = g.read_shift(4, "i"), g.l += 4, g.chk("00100000", "Mini Stream Cutoff Size: "), c = g.read_shift(4, "i"), n = g.read_shift(4, "i"), f = g.read_shift(4, "i"), s = g.read_shift(4, "i");
                for (var E = -1, w = 0; w < 109 && !((E = g.read_shift(4, "i")) < 0); ++w) h[w] = E;
                var A = function (e, r) {
                    for (var t = Math.ceil(e.length / r) - 1, a = [], n = 1; n < t; ++n) a[n - 1] = e.slice(n * r, (n + 1) * r);
                    return a[t - 1] = e.slice(t * r), a
                }(e, a);
                !function e(r, t, a, n, s) {
                    var i = d;
                    if (r === d) {
                        if (0 !== t) throw Error("DIFAT chain shorter than expected")
                    } else if (-1 !== r) {
                        var c = a[r], o = (n >>> 2) - 1;
                        if (!c) return;
                        for (var l = 0; l < o && (i = tA(c, 4 * l)) !== d; ++l) s.push(i);
                        e(tA(c, n - 4), t - 1, a, n, s)
                    }
                }(f, s, A, a, h);
                var S = function (e, r, t, a) {
                    var n = e.length, s = [], i = [], c = [], o = [], l = a - 1, f = 0, h = 0, u = 0, d = 0;
                    for (f = 0; f < n; ++f) if (c = [], (u = f + r) >= n && (u -= n), !i[u]) {
                        o = [];
                        var p = [];
                        for (h = u; h >= 0;) {
                            p[h] = !0, i[h] = !0, c[c.length] = h, o.push(e[h]);
                            var g = t[Math.floor(4 * h / a)];
                            if (a < 4 + (d = 4 * h & l)) throw Error("FAT boundary crossed: " + h + " 4 " + a);
                            if (!e[g] || p[h = tA(e[g], d)]) break
                        }
                        s[u] = {nodes: c, data: r7([o])}
                    }
                    return s
                }(A, i, h, a);
                S[i].name = "!Directory", n > 0 && c !== d && (S[c].name = "!MiniFAT"), S[h[0]].name = "!FAT", S.fat_addrs = h, S.ssz = a;
                var k = [], y = [], C = [];
                (function (e, r, t, a, n, s, i, c) {
                    for (var l, f = 0, h = a.length ? 2 : 0, p = r[e].data, g = 0, m = 0; g < p.length; g += 128) {
                        var v = p.slice(g, g + 128);
                        tR(v, 64), m = v.read_shift(2), l = te(v, 0, m - h), a.push(l);
                        var b = {
                            name: l,
                            type: v.read_shift(1),
                            color: v.read_shift(1),
                            L: v.read_shift(4, "i"),
                            R: v.read_shift(4, "i"),
                            C: v.read_shift(4, "i"),
                            clsid: v.read_shift(16),
                            state: v.read_shift(4, "i"),
                            start: 0,
                            size: 0
                        };
                        0 !== v.read_shift(2) + v.read_shift(2) + v.read_shift(2) + v.read_shift(2) && (b.ct = o(v, v.l - 8)), 0 !== v.read_shift(2) + v.read_shift(2) + v.read_shift(2) + v.read_shift(2) && (b.mt = o(v, v.l - 8)), b.start = v.read_shift(4, "i"), b.size = v.read_shift(4, "i"), b.size < 0 && b.start < 0 && (b.size = b.type = 0, b.start = d, b.name = ""), 5 === b.type ? (f = b.start, n > 0 && f !== d && (r[f].name = "!StreamData")) : b.size >= 4096 ? (b.storage = "fat", void 0 === r[b.start] && (r[b.start] = function (e, r, t, a, n) {
                            var s = [], i = [];
                            n || (n = []);
                            var c = a - 1, o = 0, l = 0;
                            for (o = r; o >= 0;) {
                                n[o] = !0, s[s.length] = o, i.push(e[o]);
                                var f = t[Math.floor(4 * o / a)];
                                if (a < 4 + (l = 4 * o & c)) throw Error("FAT boundary crossed: " + o + " 4 " + a);
                                if (!e[f]) break;
                                o = tA(e[f], l)
                            }
                            return {nodes: s, data: r7([i])}
                        }(t, b.start, r.fat_addrs, r.ssz)), r[b.start].name = b.name, b.content = r[b.start].data.slice(0, b.size)) : (b.storage = "minifat", b.size < 0 ? b.size = 0 : f !== d && b.start !== d && r[f] && (b.content = function (e, r, t) {
                            for (var a = e.start, n = e.size, s = [], i = a; t && n > 0 && i >= 0;) s.push(r.slice(i * u, i * u + u)), n -= u, i = tA(t, 4 * i);
                            return 0 === s.length ? tx(0) : eE(s).slice(0, e.size)
                        }(b, r[f].data, (r[c] || {}).data))), b.content && tR(b.content, 0), s[l] = b, i.push(b)
                    }
                })(i, S, A, k, n, {}, y, c), function (e, r, t) {
                    for (var a = 0, n = 0, s = 0, i = 0, c = 0, o = t.length, l = [], f = []; a < o; ++a) l[a] = f[a] = a, r[a] = t[a];
                    for (; c < f.length; ++c) n = e[a = f[c]].L, s = e[a].R, i = e[a].C, l[a] === a && (-1 !== n && l[n] !== n && (l[a] = l[n]), -1 !== s && l[s] !== s && (l[a] = l[s])), -1 !== i && (l[i] = a), -1 !== n && a != l[a] && (l[n] = l[a], f.lastIndexOf(n) < c && f.push(n)), -1 !== s && a != l[a] && (l[s] = l[a], f.lastIndexOf(s) < c && f.push(s));
                    for (a = 1; a < o; ++a) l[a] === a && (-1 !== s && l[s] !== s ? l[a] = l[s] : -1 !== n && l[n] !== n && (l[a] = l[n]));
                    for (a = 1; a < o; ++a) if (0 !== e[a].type) {
                        if ((c = a) != l[c]) do c = l[c], r[a] = r[c] + "/" + r[a]; while (0 !== c && -1 !== l[c] && c != l[c]);
                        l[a] = -1
                    }
                    for (r[0] += "/", a = 1; a < o; ++a) 2 !== e[a].type && (r[a] += "/")
                }(y, C, k), k.shift();
                var _ = {FileIndex: y, FullPaths: C};
                return r && r.raw && (_.raw = {header: v, sectors: A}), _
            }

            function o(e, r) {
                return new Date((tw(e, r + 4) / 1e7 * 4294967296 + tw(e, r) / 1e7 - 11644473600) * 1e3)
            }

            function l(e, r) {
                var t = r || {}, a = t.root || "Root Entry";
                if (e.FullPaths || (e.FullPaths = []), e.FileIndex || (e.FileIndex = []), e.FullPaths.length !== e.FileIndex.length) throw Error("inconsistent CFB structure");
                0 === e.FullPaths.length && (e.FullPaths[0] = a + "/", e.FileIndex[0] = {
                    name: a,
                    type: 5
                }), t.CLSID && (e.FileIndex[0].clsid = t.CLSID), function (e) {
                    var r = "\x01Sh33tJ5";
                    if (!e9.find(e, "/" + r)) {
                        var t = tx(4);
                        t[0] = 55, t[1] = t[3] = 50, t[2] = 54, e.FileIndex.push({
                            name: r,
                            type: 2,
                            content: t,
                            size: 4,
                            L: 69,
                            R: 69,
                            C: 69
                        }), e.FullPaths.push(e.FullPaths[0] + r), f(e)
                    }
                }(e)
            }

            function f(e, r) {
                l(e);
                for (var t = !1, s = !1, i = e.FullPaths.length - 1; i >= 0; --i) {
                    var c = e.FileIndex[i];
                    switch (c.type) {
                        case 0:
                            s ? t = !0 : (e.FileIndex.pop(), e.FullPaths.pop());
                            break;
                        case 1:
                        case 2:
                        case 5:
                            s = !0, isNaN(c.R * c.L * c.C) && (t = !0), c.R > -1 && c.L > -1 && c.R == c.L && (t = !0);
                            break;
                        default:
                            t = !0
                    }
                }
                if (t || r) {
                    var o = new Date(1987, 1, 19), f = 0, h = Object.create ? Object.create(null) : {}, u = [];
                    for (i = 0; i < e.FullPaths.length; ++i) h[e.FullPaths[i]] = !0, 0 !== e.FileIndex[i].type && u.push([e.FullPaths[i], e.FileIndex[i]]);
                    for (i = 0; i < u.length; ++i) {
                        var d = a(u[i][0]);
                        (s = h[d]) || (u.push([d, {
                            name: n(d).replace("/", ""),
                            type: 1,
                            clsid: m,
                            ct: o,
                            mt: o,
                            content: null
                        }]), h[d] = !0)
                    }
                    for (u.sort(function (e, r) {
                        return function (e, r) {
                            for (var t = e.split("/"), a = r.split("/"), n = 0, s = 0, i = Math.min(t.length, a.length); n < i; ++n) {
                                if (s = t[n].length - a[n].length) return s;
                                if (t[n] != a[n]) return t[n] < a[n] ? -1 : 1
                            }
                            return t.length - a.length
                        }(e[0], r[0])
                    }), e.FullPaths = [], e.FileIndex = [], i = 0; i < u.length; ++i) e.FullPaths[i] = u[i][0], e.FileIndex[i] = u[i][1];
                    for (i = 0; i < u.length; ++i) {
                        var p = e.FileIndex[i], g = e.FullPaths[i];
                        if (p.name = n(g).replace("/", ""), p.L = p.R = p.C = -(p.color = 1), p.size = p.content ? p.content.length : 0, p.start = 0, p.clsid = p.clsid || m, 0 === i) p.C = u.length > 1 ? 1 : -1, p.size = 0, p.type = 5; else if ("/" == g.slice(-1)) {
                            for (f = i + 1; f < u.length && a(e.FullPaths[f]) != g; ++f) ;
                            for (p.C = f >= u.length ? -1 : f, f = i + 1; f < u.length && a(e.FullPaths[f]) != a(g); ++f) ;
                            p.R = f >= u.length ? -1 : f, p.type = 1
                        } else a(e.FullPaths[i + 1] || "") == a(g) && (p.R = i + 1), p.type = 2
                    }
                }
            }

            function h(e, t) {
                var a = t || {};
                if ("mad" == a.fileType) return function (e, r) {
                    for (var t = r || {}, a = t.boundary || "SheetJS", n = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + (a = "------=" + a).slice(2) + '"', "", "", ""], s = e.FullPaths[0], i = s, c = e.FileIndex[0], o = 1; o < e.FullPaths.length; ++o) if (i = e.FullPaths[o].slice(s.length), (c = e.FileIndex[o]).size && c.content && "\x01Sh33tJ5" != i) {
                        i = i.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (e) {
                            return "_x" + e.charCodeAt(0).toString(16) + "_"
                        }).replace(/[\u0080-\uFFFF]/g, function (e) {
                            return "_u" + e.charCodeAt(0).toString(16) + "_"
                        });
                        for (var l = c.content, f = ed && X.isBuffer(l) ? l.toString("binary") : b(l), h = 0, u = Math.min(1024, f.length), d = 0, p = 0; p <= u; ++p) (d = f.charCodeAt(p)) >= 32 && d < 128 && ++h;
                        var g = h >= 4 * u / 5;
                        n.push(a), n.push("Content-Location: " + (t.root || "file:///C:/SheetJS/") + i), n.push("Content-Transfer-Encoding: " + (g ? "quoted-printable" : "base64")), n.push("Content-Type: " + function (e, r) {
                            if (e.ctype) return e.ctype;
                            var t = e.name || "", a = t.match(/\.([^\.]+)$/);
                            return a && J[a[1]] || r && (a = (t = r).match(/[\.\\]([^\.\\])+$/)) && J[a[1]] ? J[a[1]] : "application/octet-stream"
                        }(c, i)), n.push(""), n.push(g ? function (e) {
                            var r = e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (e) {
                                var r = e.charCodeAt(0).toString(16).toUpperCase();
                                return "=" + (1 == r.length ? "0" + r : r)
                            });
                            "\n" == (r = r.replace(/ $/mg, "=20").replace(/\t$/mg, "=09")).charAt(0) && (r = "=0D" + r.slice(1)), r = r.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");
                            for (var t = [], a = r.split("\r\n"), n = 0; n < a.length; ++n) {
                                var s = a[n];
                                if (0 == s.length) {
                                    t.push("");
                                    continue
                                }
                                for (var i = 0; i < s.length;) {
                                    var c = 76, o = s.slice(i, i + c);
                                    "=" == o.charAt(c - 1) ? c-- : "=" == o.charAt(c - 2) ? c -= 2 : "=" == o.charAt(c - 3) && (c -= 3), o = s.slice(i, i + c), (i += c) < s.length && (o += "="), t.push(o)
                                }
                            }
                            return t.join("\r\n")
                        }(f) : function (e) {
                            for (var r = eh(e), t = [], a = 0; a < r.length; a += 76) t.push(r.slice(a, a + 76));
                            return t.join("\r\n") + "\r\n"
                        }(f))
                    }
                    return n.push(a + "--\r\n"), n.join("\r\n")
                }(e, a);
                if (f(e), "zip" === a.fileType) return function (e, t) {
                    var a = [], n = [], s = tx(1), i = (t || {}).compression ? 8 : 0, c = 0, o = 0, l = 0, f = 0,
                        h = e.FullPaths[0], u = h, d = e.FileIndex[0], p = [], g = 0;
                    for (c = 1; c < e.FullPaths.length; ++c) if (u = e.FullPaths[c].slice(h.length), (d = e.FileIndex[c]).size && d.content && "\x01Sh33tJ5" != u) {
                        var m, v = l, b = tx(u.length);
                        for (o = 0; o < u.length; ++o) b.write_shift(1, 127 & u.charCodeAt(o));
                        b = b.slice(0, b.l), p[f] = e7.buf(d.content, 0);
                        var T = d.content;
                        8 == i && (m = T, T = r ? r.deflateRawSync(m) : B(m)), (s = tx(30)).write_shift(4, 67324752), s.write_shift(2, 20), s.write_shift(2, 0), s.write_shift(2, i), d.mt ? function (e, r) {
                            "string" == typeof r && (r = new Date(r));
                            var t = r.getHours();
                            t = (t = t << 6 | r.getMinutes()) << 5 | r.getSeconds() >>> 1, e.write_shift(2, t);
                            var a = r.getFullYear() - 1980;
                            a = (a = a << 4 | r.getMonth() + 1) << 5 | r.getDate(), e.write_shift(2, a)
                        }(s, d.mt) : s.write_shift(4, 0), s.write_shift(-4, p[f]), s.write_shift(4, T.length), s.write_shift(4, d.content.length), s.write_shift(2, b.length), s.write_shift(2, 0), l += s.length, a.push(s), l += b.length, a.push(b), l += T.length, a.push(T), (s = tx(46)).write_shift(4, 33639248), s.write_shift(2, 0), s.write_shift(2, 20), s.write_shift(2, 0), s.write_shift(2, i), s.write_shift(4, 0), s.write_shift(-4, p[f]), s.write_shift(4, T.length), s.write_shift(4, d.content.length), s.write_shift(2, b.length), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(4, 0), s.write_shift(4, v), g += s.l, n.push(s), g += b.length, n.push(b), ++f
                    }
                    return (s = tx(22)).write_shift(4, 101010256), s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(2, f), s.write_shift(2, f), s.write_shift(4, g), s.write_shift(4, l), s.write_shift(2, 0), eE([eE(a), eE(n), s])
                }(e, a);
                var n = function (e) {
                    for (var r = 0, t = 0, a = 0; a < e.FileIndex.length; ++a) {
                        var n = e.FileIndex[a];
                        if (n.content) {
                            var s = n.content.length;
                            s > 0 && (s < 4096 ? r += s + 63 >> 6 : t += s + 511 >> 9)
                        }
                    }
                    for (var i = e.FullPaths.length + 3 >> 2, c = r + 7 >> 3, o = r + 127 >> 7, l = c + t + i + o, f = l + 127 >> 7, h = f <= 109 ? 0 : Math.ceil((f - 109) / 127); l + f + h + 127 >> 7 > f;) h = ++f <= 109 ? 0 : Math.ceil((f - 109) / 127);
                    var u = [1, h, f, o, i, t, r, 0];
                    return e.FileIndex[0].size = r << 6, u[7] = (e.FileIndex[0].start = u[0] + u[1] + u[2] + u[3] + u[4] + u[5]) + (u[6] + 7 >> 3), u
                }(e), s = tx(n[7] << 9), i = 0, c = 0;
                for (i = 0; i < 8; ++i) s.write_shift(1, g[i]);
                for (i = 0; i < 8; ++i) s.write_shift(2, 0);
                for (s.write_shift(2, 62), s.write_shift(2, 3), s.write_shift(2, 65534), s.write_shift(2, 9), s.write_shift(2, 6), i = 0; i < 3; ++i) s.write_shift(2, 0);
                for (s.write_shift(4, 0), s.write_shift(4, n[2]), s.write_shift(4, n[0] + n[1] + n[2] + n[3] - 1), s.write_shift(4, 0), s.write_shift(4, 4096), s.write_shift(4, n[3] ? n[0] + n[1] + n[2] - 1 : d), s.write_shift(4, n[3]), s.write_shift(-4, n[1] ? n[0] - 1 : d), s.write_shift(4, n[1]), i = 0; i < 109; ++i) s.write_shift(-4, i < n[2] ? n[1] + i : -1);
                if (n[1]) for (c = 0; c < n[1]; ++c) {
                    for (; i < 236 + 127 * c; ++i) s.write_shift(-4, i < n[2] ? n[1] + i : -1);
                    s.write_shift(-4, c === n[1] - 1 ? d : c + 1)
                }
                var o = function (e) {
                    for (c += e; i < c - 1; ++i) s.write_shift(-4, i + 1);
                    e && (++i, s.write_shift(-4, d))
                };
                for (c = (i = 0) + n[1]; i < c; ++i) s.write_shift(-4, v.DIFSECT);
                for (c += n[2]; i < c; ++i) s.write_shift(-4, v.FATSECT);
                o(n[3]), o(n[4]);
                for (var l = 0, h = 0, u = e.FileIndex[0]; l < e.FileIndex.length; ++l) (u = e.FileIndex[l]).content && ((h = u.content.length) < 4096 || (u.start = c, o(h + 511 >> 9)));
                for (o(n[6] + 7 >> 3); 511 & s.l;) s.write_shift(-4, v.ENDOFCHAIN);
                for (l = 0, c = i = 0; l < e.FileIndex.length; ++l) (u = e.FileIndex[l]).content && (h = u.content.length) && !(h >= 4096) && (u.start = c, o(h + 63 >> 6));
                for (; 511 & s.l;) s.write_shift(-4, v.ENDOFCHAIN);
                for (i = 0; i < n[4] << 2; ++i) {
                    var p = e.FullPaths[i];
                    if (!p || 0 === p.length) {
                        for (l = 0; l < 17; ++l) s.write_shift(4, 0);
                        for (l = 0; l < 3; ++l) s.write_shift(4, -1);
                        for (l = 0; l < 12; ++l) s.write_shift(4, 0);
                        continue
                    }
                    u = e.FileIndex[i], 0 === i && (u.start = u.size ? u.start - 1 : d);
                    var m = 0 === i && a.root || u.name;
                    if (h = 2 * (m.length + 1), s.write_shift(64, m, "utf16le"), s.write_shift(2, h), s.write_shift(1, u.type), s.write_shift(1, u.color), s.write_shift(-4, u.L), s.write_shift(-4, u.R), s.write_shift(-4, u.C), u.clsid) s.write_shift(16, u.clsid, "hex"); else for (l = 0; l < 4; ++l) s.write_shift(4, 0);
                    s.write_shift(4, u.state || 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, u.start), s.write_shift(4, u.size), s.write_shift(4, 0)
                }
                for (i = 1; i < e.FileIndex.length; ++i) if ((u = e.FileIndex[i]).size >= 4096) {
                    if (s.l = u.start + 1 << 9, ed && X.isBuffer(u.content)) u.content.copy(s, s.l, 0, u.size), s.l += u.size + 511 & -512; else {
                        for (l = 0; l < u.size; ++l) s.write_shift(1, u.content[l]);
                        for (; 511 & l; ++l) s.write_shift(1, 0)
                    }
                }
                for (i = 1; i < e.FileIndex.length; ++i) if ((u = e.FileIndex[i]).size > 0 && u.size < 4096) {
                    if (ed && X.isBuffer(u.content)) u.content.copy(s, s.l, 0, u.size), s.l += u.size + 63 & -64; else {
                        for (l = 0; l < u.size; ++l) s.write_shift(1, u.content[l]);
                        for (; 63 & l; ++l) s.write_shift(1, 0)
                    }
                }
                if (ed) s.l = s.length; else for (; s.l < s.length;) s.write_shift(1, 0);
                return s
            }

            t.version = "1.2.1";
            var u = 64, d = -2, p = "d0cf11e0a1b11ae1", g = [208, 207, 17, 224, 161, 177, 26, 225],
                m = "00000000000000000000000000000000", v = {
                    MAXREGSECT: -6,
                    DIFSECT: -4,
                    FATSECT: -3,
                    ENDOFCHAIN: -2,
                    FREESECT: -1,
                    HEADER_SIGNATURE: p,
                    HEADER_MINOR_VERSION: "3e00",
                    MAXREGSID: -6,
                    NOSTREAM: -1,
                    HEADER_CLSID: m,
                    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
                };

            function b(e) {
                for (var r = Array(e.length), t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
                return r.join("")
            }

            for (var T = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], E = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], w = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], A = "undefined" != typeof Uint8Array, S = A ? new Uint8Array(256) : [], k = 0; k < 256; ++k) S[k] = function (e) {
                var r = (e << 1 | e << 11) & 139536 | (e << 5 | e << 15) & 558144;
                return (r >> 16 | r >> 8 | r) & 255
            }(k);

            function y(e, r) {
                var t = 7 & r, a = r >>> 3;
                return (e[a] | (t <= 5 ? 0 : e[a + 1] << 8)) >>> t & 7
            }

            function C(e, r) {
                var t = 7 & r, a = r >>> 3;
                return (e[a] | (t <= 3 ? 0 : e[a + 1] << 8)) >>> t & 31
            }

            function _(e, r) {
                var t = 7 & r, a = r >>> 3;
                return (e[a] | (t <= 1 ? 0 : e[a + 1] << 8)) >>> t & 127
            }

            function O(e, r, t) {
                var a = 7 & r, n = r >>> 3, s = (1 << t) - 1, i = e[n] >>> a;
                return t < 8 - a ? i & s : (i |= e[n + 1] << 8 - a, t < 16 - a) ? i & s : (i |= e[n + 2] << 16 - a, t < 24 - a) ? i & s : (i |= e[n + 3] << 24 - a) & s
            }

            function R(e, r, t) {
                var a = 7 & r, n = r >>> 3;
                return a <= 5 ? e[n] |= (7 & t) << a : (e[n] |= t << a & 255, e[n + 1] = (7 & t) >> 8 - a), r + 3
            }

            function I(e, r, t) {
                var a = r >>> 3;
                return t <<= 7 & r, e[a] |= 255 & t, t >>>= 8, e[a + 1] = t, r + 8
            }

            function x(e, r, t) {
                var a = r >>> 3;
                return t <<= 7 & r, e[a] |= 255 & t, t >>>= 8, e[a + 1] = 255 & t, e[a + 2] = t >>> 8, r + 16
            }

            function N(e, r) {
                var t = e.length, a = 2 * t > r ? 2 * t : r + 5, n = 0;
                if (t >= r) return e;
                if (ed) {
                    var s = em(a);
                    if (e.copy) e.copy(s); else for (; n < e.length; ++n) s[n] = e[n];
                    return s
                }
                if (A) {
                    var i = new Uint8Array(a);
                    if (i.set) i.set(e); else for (; n < t; ++n) i[n] = e[n];
                    return i
                }
                return e.length = a, e
            }

            function D(e) {
                for (var r = Array(e), t = 0; t < e; ++t) r[t] = 0;
                return r
            }

            function F(e, r, t) {
                var a = 1, n = 0, s = 0, i = 0, c = 0, o = e.length, l = A ? new Uint16Array(32) : D(32);
                for (s = 0; s < 32; ++s) l[s] = 0;
                for (s = o; s < t; ++s) e[s] = 0;
                o = e.length;
                var f = A ? new Uint16Array(o) : D(o);
                for (s = 0; s < o; ++s) l[n = e[s]]++, a < n && (a = n), f[s] = 0;
                for (s = 1, l[0] = 0; s <= a; ++s) l[s + 16] = c = c + l[s - 1] << 1;
                for (s = 0; s < o; ++s) 0 != (c = e[s]) && (f[s] = l[c + 16]++);
                var h = 0;
                for (s = 0; s < o; ++s) if (0 != (h = e[s])) for (c = function (e, r) {
                    var t = S[255 & e];
                    return r <= 8 ? t >>> 8 - r : (t = t << 8 | S[e >> 8 & 255], r <= 16) ? t >>> 16 - r : (t = t << 8 | S[e >> 16 & 255]) >>> 24 - r
                }(f[s], a) >> a - h, i = (1 << a + 4 - h) - 1; i >= 0; --i) r[c | i << h] = 15 & h | s << 4;
                return a
            }

            var P = A ? new Uint16Array(512) : D(512), L = A ? new Uint16Array(32) : D(32);
            if (!A) {
                for (var M = 0; M < 512; ++M) P[M] = 0;
                for (M = 0; M < 32; ++M) L[M] = 0
            }
            !function () {
                for (var e = [], r = 0; r < 32; r++) e.push(5);
                F(e, L, 32);
                var t = [];
                for (r = 0; r <= 143; r++) t.push(8);
                for (; r <= 255; r++) t.push(9);
                for (; r <= 279; r++) t.push(7);
                for (; r <= 287; r++) t.push(8);
                F(t, P, 288)
            }();
            var U = function () {
                for (var e = A ? new Uint8Array(32768) : [], r = 0, t = 0; r < w.length - 1; ++r) for (; t < w[r + 1]; ++t) e[t] = r;
                for (; t < 32768; ++t) e[t] = 29;
                var a = A ? new Uint8Array(259) : [];
                for (r = 0, t = 0; r < E.length - 1; ++r) for (; t < E[r + 1]; ++t) a[t] = r;
                return function (r, t) {
                    return r.length < 8 ? function (e, r) {
                        for (var t = 0; t < e.length;) {
                            var a = Math.min(65535, e.length - t), n = t + a == e.length;
                            for (r.write_shift(1, +n), r.write_shift(2, a), r.write_shift(2, 65535 & ~a); a-- > 0;) r[r.l++] = e[t++]
                        }
                        return r.l
                    }(r, t) : function (r, t) {
                        for (var n = 0, s = 0, i = A ? new Uint16Array(32768) : []; s < r.length;) {
                            var c = Math.min(65535, r.length - s);
                            if (c < 10) {
                                for (7 & (n = R(t, n, +!(s + c != r.length))) && (n += 8 - (7 & n)), t.l = n / 8 | 0, t.write_shift(2, c), t.write_shift(2, 65535 & ~c); c-- > 0;) t[t.l++] = r[s++];
                                n = 8 * t.l;
                                continue
                            }
                            n = R(t, n, +!(s + c != r.length) + 2);
                            for (var o = 0; c-- > 0;) {
                                var l, f, h = r[s], u = -1, d = 0;
                                if ((u = i[o = (o << 5 ^ h) & 32767]) && ((u |= -32768 & s) > s && (u -= 32768), u < s)) for (; r[u + d] == r[s + d] && d < 250;) ++d;
                                if (d > 2) {
                                    (h = a[d]) <= 22 ? n = I(t, n, S[h + 1] >> 1) - 1 : (I(t, n, 3), I(t, n += 5, S[h - 23] >> 5), n += 3);
                                    var p = h < 8 ? 0 : h - 4 >> 2;
                                    p > 0 && (x(t, n, d - E[h]), n += p), n = I(t, n, S[h = e[s - u]] >> 3) - 3;
                                    var g = h < 4 ? 0 : h - 2 >> 1;
                                    g > 0 && (x(t, n, s - u - w[h]), n += g);
                                    for (var m = 0; m < d; ++m) i[o] = 32767 & s, o = (o << 5 ^ r[s]) & 32767, ++s;
                                    c -= d - 1
                                } else h <= 143 ? h += 48 : (f = (1 & (f = 1)) << (7 & (l = n)), t[l >>> 3] |= f, n = l + 1), n = I(t, n, S[h]), i[o] = 32767 & s, ++s
                            }
                            n = I(t, n, 0) - 1
                        }
                        return t.l = (n + 7) / 8 | 0, t.l
                    }(r, t)
                }
            }();

            function B(e) {
                var r = tx(50 + Math.floor(1.1 * e.length)), t = U(e, r);
                return r.slice(0, t)
            }

            var H = A ? new Uint16Array(32768) : D(32768), W = A ? new Uint16Array(32768) : D(32768),
                V = A ? new Uint16Array(128) : D(128), z = 1, G = 1;

            function Y(e, r) {
                var t = function (e, r) {
                    if (3 == e[0] && !(3 & e[1])) return [eg(r), 2];
                    for (var t = 0, a = 0, n = em(r || 262144), s = 0, i = n.length >>> 0, c = 0, o = 0; (1 & a) == 0;) {
                        if (a = y(e, t), t += 3, a >>> 1 == 0) {
                            7 & t && (t += 8 - (7 & t));
                            var l = e[t >>> 3] | e[(t >>> 3) + 1] << 8;
                            if (t += 32, l > 0) for (!r && i < s + l && (i = (n = N(n, s + l)).length); l-- > 0;) n[s++] = e[t >>> 3], t += 8;
                            continue
                        }
                        for (a >> 1 == 1 ? (c = 9, o = 5) : (t = function (e, r) {
                            var t, a, n, s = C(e, r) + 257, i = C(e, r += 5) + 1;
                            r += 5;
                            var c = (a = 7 & (t = r), ((e[n = t >>> 3] | (a <= 4 ? 0 : e[n + 1] << 8)) >>> a & 15) + 4);
                            r += 4;
                            for (var o = 0, l = A ? new Uint8Array(19) : D(19), f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], h = 1, u = A ? new Uint8Array(8) : D(8), d = A ? new Uint8Array(8) : D(8), p = l.length, g = 0; g < c; ++g) l[T[g]] = o = y(e, r), h < o && (h = o), u[o]++, r += 3;
                            var m = 0;
                            for (g = 1, u[0] = 0; g <= h; ++g) d[g] = m = m + u[g - 1] << 1;
                            for (g = 0; g < p; ++g) 0 != (m = l[g]) && (f[g] = d[m]++);
                            var v = 0;
                            for (g = 0; g < p; ++g) if (0 != (v = l[g])) {
                                m = S[f[g]] >> 8 - v;
                                for (var b = (1 << 7 - v) - 1; b >= 0; --b) V[m | b << v] = 7 & v | g << 3
                            }
                            var E = [];
                            for (h = 1; E.length < s + i;) switch (m = V[_(e, r)], r += 7 & m, m >>>= 3) {
                                case 16:
                                    for (o = 3 + function (e, r) {
                                        var t = 7 & r, a = r >>> 3;
                                        return (e[a] | (t <= 6 ? 0 : e[a + 1] << 8)) >>> t & 3
                                    }(e, r), r += 2, m = E[E.length - 1]; o-- > 0;) E.push(m);
                                    break;
                                case 17:
                                    for (o = 3 + y(e, r), r += 3; o-- > 0;) E.push(0);
                                    break;
                                case 18:
                                    for (o = 11 + _(e, r), r += 7; o-- > 0;) E.push(0);
                                    break;
                                default:
                                    E.push(m), h < m && (h = m)
                            }
                            var w = E.slice(0, s), k = E.slice(s);
                            for (g = s; g < 286; ++g) w[g] = 0;
                            for (g = i; g < 30; ++g) k[g] = 0;
                            return z = F(w, H, 286), G = F(k, W, 30), r
                        }(e, t), c = z, o = G); ;) {
                            !r && i < s + 32767 && (i = (n = N(n, s + 32767)).length);
                            var f = O(e, t, c), h = a >>> 1 == 1 ? P[f] : H[f];
                            if (t += 15 & h, ((h >>>= 4) >>> 8 & 255) == 0) n[s++] = h; else if (256 == h) break; else {
                                var u = (h -= 257) < 8 ? 0 : h - 4 >> 2;
                                u > 5 && (u = 0);
                                var d = s + E[h];
                                u > 0 && (d += O(e, t, u), t += u), f = O(e, t, o), t += 15 & (h = a >>> 1 == 1 ? L[f] : W[f]);
                                var p = (h >>>= 4) < 4 ? 0 : h - 2 >> 1, g = w[h];
                                for (p > 0 && (g += O(e, t, p), t += p), !r && i < d && (i = (n = N(n, d + 100)).length); s < d;) n[s] = n[s - g], ++s
                            }
                        }
                    }
                    return r ? [n, t + 7 >>> 3] : [n.slice(0, s), t + 7 >>> 3]
                }(e.slice(e.l || 0), r);
                return e.l += t[1], t[0]
            }

            function j(e, r) {
                if (e) "undefined" != typeof console && console.error(r); else throw Error(r)
            }

            function K(e, t) {
                tR(e, 0);
                var a = {FileIndex: [], FullPaths: []};
                l(a, {root: t.root});
                for (var n = e.length - 4; (80 != e[n] || 75 != e[n + 1] || 5 != e[n + 2] || 6 != e[n + 3]) && n >= 0;) --n;
                e.l = n + 4, e.l += 4;
                var i = e.read_shift(2);
                e.l += 6;
                var c = e.read_shift(4);
                for (n = 0, e.l = c; n < i; ++n) {
                    e.l += 20;
                    var o = e.read_shift(4), f = e.read_shift(4), h = e.read_shift(2), u = e.read_shift(2),
                        d = e.read_shift(2);
                    e.l += 8;
                    var p = e.read_shift(4), g = s(e.slice(e.l + h, e.l + h + u));
                    e.l += h + u + d;
                    var m = e.l;
                    e.l = p + 4, function (e, t, a, n, i) {
                        e.l += 2;
                        var c, o, l, f, h, u, d, p = e.read_shift(2), g = e.read_shift(2),
                            m = (c = 65535 & e.read_shift(2), o = 65535 & e.read_shift(2), l = new Date, f = 31 & o, h = 15 & (o >>>= 5), o >>>= 4, l.setMilliseconds(0), l.setFullYear(o + 1980), l.setMonth(h - 1), l.setDate(f), u = 31 & c, d = 63 & (c >>>= 5), c >>>= 6, l.setHours(c), l.setMinutes(d), l.setSeconds(u << 1), l);
                        if (8257 & p) throw Error("Unsupported ZIP encryption");
                        e.read_shift(4);
                        for (var v = e.read_shift(4), b = e.read_shift(4), T = e.read_shift(2), E = e.read_shift(2), w = "", A = 0; A < T; ++A) w += String.fromCharCode(e[e.l++]);
                        if (E) {
                            var S = s(e.slice(e.l, e.l + E));
                            (S[21589] || {}).mt && (m = S[21589].mt), ((i || {})[21589] || {}).mt && (m = i[21589].mt)
                        }
                        e.l += E;
                        var k = e.slice(e.l, e.l + v);
                        switch (g) {
                            case 8:
                                k = function (e, t) {
                                    if (!r) return Y(e, t);
                                    var a = new r.InflateRaw, n = a._processChunk(e.slice(e.l), a._finishFlushFlag);
                                    return e.l += a.bytesRead, n
                                }(e, b);
                                break;
                            case 0:
                                break;
                            default:
                                throw Error("Unsupported ZIP Compression method " + g)
                        }
                        var y = !1;
                        8 & p && (134695760 == e.read_shift(4) && (e.read_shift(4), y = !0), v = e.read_shift(4), b = e.read_shift(4)), v != t && j(y, "Bad compressed size: " + t + " != " + v), b != a && j(y, "Bad uncompressed size: " + a + " != " + b), Z(n, w, k, {
                            unsafe: !0,
                            mt: m
                        })
                    }(e, o, f, a, g), e.l = m
                }
                return a
            }

            var J = {
                htm: "text/html",
                xml: "text/xml",
                gif: "image/gif",
                jpg: "image/jpeg",
                png: "image/png",
                mso: "application/x-mso",
                thmx: "application/vnd.ms-officetheme",
                sh33tj5: "application/octet-stream"
            };

            function Z(e, r, t, a) {
                var s = a && a.unsafe;
                s || l(e);
                var i = !s && e9.find(e, r);
                if (!i) {
                    var c = e.FullPaths[0];
                    r.slice(0, c.length) == c ? c = r : ("/" != c.slice(-1) && (c += "/"), c = (c + r).replace("//", "/")), i = {
                        name: n(r),
                        type: 2
                    }, e.FileIndex.push(i), e.FullPaths.push(c), s || e9.utils.cfb_gc(e)
                }
                return i.content = t, i.size = t ? t.length : 0, a && (a.CLSID && (i.clsid = a.CLSID), a.mt && (i.mt = a.mt), a.ct && (i.ct = a.ct)), i
            }

            return t.find = function (e, r) {
                var t = e.FullPaths.map(function (e) {
                    return e.toUpperCase()
                }), a = t.map(function (e) {
                    var r = e.split("/");
                    return r[r.length - ("/" == e.slice(-1) ? 2 : 1)]
                }), n = !1;
                47 === r.charCodeAt(0) ? (n = !0, r = t[0].slice(0, -1) + r) : n = -1 !== r.indexOf("/");
                var s = r.toUpperCase(), i = !0 === n ? t.indexOf(s) : a.indexOf(s);
                if (-1 !== i) return e.FileIndex[i];
                var c = !s.match(eA);
                for (s = s.replace(ew, ""), c && (s = s.replace(eA, "!")), i = 0; i < t.length; ++i) if ((c ? t[i].replace(eA, "!") : t[i]).replace(ew, "") == s || (c ? a[i].replace(eA, "!") : a[i]).replace(ew, "") == s) return e.FileIndex[i];
                return null
            }, t.read = function (r, t) {
                var a = t && t.type;
                switch (!a && ed && X.isBuffer(r) && (a = "buffer"), a || "base64") {
                    case"file":
                        return i(), c(e.readFileSync(r), t);
                    case"base64":
                        return c(ev(eu(r)), t);
                    case"binary":
                        return c(ev(r), t)
                }
                return c(r, t)
            }, t.parse = c, t.write = function (r, t) {
                var a = h(r, t);
                switch (t && t.type || "buffer") {
                    case"file":
                        i(), e.writeFileSync(t.filename, a);
                        break;
                    case"binary":
                        return "string" == typeof a ? a : b(a);
                    case"base64":
                        return eh("string" == typeof a ? a : b(a));
                    case"buffer":
                        if (ed) return X.isBuffer(a) ? a : ep(a);
                    case"array":
                        return "string" == typeof a ? ev(a) : a
                }
                return a
            }, t.writeFile = function (r, t, a) {
                i();
                var n = h(r, a);
                e.writeFileSync(t, n)
            }, t.utils = {
                cfb_new: function (e) {
                    var r = {};
                    return l(r, e), r
                }, cfb_add: Z, cfb_del: function (e, r) {
                    l(e);
                    var t = e9.find(e, r);
                    if (t) {
                        for (var a = 0; a < e.FileIndex.length; ++a) if (e.FileIndex[a] == t) return e.FileIndex.splice(a, 1), e.FullPaths.splice(a, 1), !0
                    }
                    return !1
                }, cfb_mov: function (e, r, t) {
                    l(e);
                    var a = e9.find(e, r);
                    if (a) {
                        for (var s = 0; s < e.FileIndex.length; ++s) if (e.FileIndex[s] == a) return e.FileIndex[s].name = n(t), e.FullPaths[s] = t, !0
                    }
                    return !1
                }, cfb_gc: function (e) {
                    f(e, !0)
                }, ReadShift: tS, CheckField: tO, prep_blob: tR, bconcat: eE, use_zlib: function (e) {
                    try {
                        var t = new e.InflateRaw;
                        if (t._processChunk(new Uint8Array([3, 0]), t._finishFlushFlag), t.bytesRead) r = e; else throw Error("zlib does not expose bytesRead")
                    } catch (e) {
                        console.error("cannot use native zlib: " + (e.message || e))
                    }
                }, _deflateRaw: B, _inflateRaw: Y, consts: v
            }, t
        }();

        function re(e) {
            for (var r = Object.keys(e), t = [], a = 0; a < r.length; ++a) Object.prototype.hasOwnProperty.call(e, r[a]) && t.push(r[a]);
            return t
        }

        function rr(e) {
            for (var r = [], t = re(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
            return r
        }

        var rt = new Date(1899, 11, 30, 0, 0, 0);

        function ra(e, r) {
            var t = e.getTime();
            return r && (t -= 1263168e5), (t - (rt.getTime() + (e.getTimezoneOffset() - rt.getTimezoneOffset()) * 6e4)) / 864e5
        }

        var rn = new Date, rs = rt.getTime() + (rn.getTimezoneOffset() - rt.getTimezoneOffset()) * 6e4,
            ri = rn.getTimezoneOffset();

        function rc(e) {
            var r = new Date;
            return r.setTime(864e5 * e + rs), r.getTimezoneOffset() !== ri && r.setTime(r.getTime() + (r.getTimezoneOffset() - ri) * 6e4), r
        }

        var ro = new Date("2017-02-19T19:06:09.000Z"), rl = isNaN(ro.getFullYear()) ? new Date("2/19/17") : ro,
            rf = 2017 == rl.getFullYear();

        function rh(e, r) {
            var t = new Date(e);
            if (rf) return r > 0 ? t.setTime(t.getTime() + 6e4 * t.getTimezoneOffset()) : r < 0 && t.setTime(t.getTime() - 6e4 * t.getTimezoneOffset()), t;
            if (e instanceof Date) return e;
            if (1917 == rl.getFullYear() && !isNaN(t.getFullYear())) {
                var a = t.getFullYear();
                return e.indexOf("" + a) > -1 || t.setFullYear(t.getFullYear() + 100), t
            }
            var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
                s = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
            return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - 6e4 * s.getTimezoneOffset())), s
        }

        function ru(e, r) {
            if (ed && X.isBuffer(e)) {
                if (r) {
                    if (255 == e[0] && 254 == e[1]) return rX(e.slice(2).toString("utf16le"));
                    if (254 == e[1] && 255 == e[2]) return rX(ei(e.slice(2).toString("binary")))
                }
                return e.toString("binary")
            }
            if ("undefined" != typeof TextDecoder) try {
                if (r) {
                    if (255 == e[0] && 254 == e[1]) return rX(new TextDecoder("utf-16le").decode(e.slice(2)));
                    if (254 == e[0] && 255 == e[1]) return rX(new TextDecoder("utf-16be").decode(e.slice(2)))
                }
                var t = {
                    "€": "\x80",
                    "‚": "\x82",
                    ƒ: "\x83",
                    "„": "\x84",
                    "…": "\x85",
                    "†": "\x86",
                    "‡": "\x87",
                    ˆ: "\x88",
                    "‰": "\x89",
                    Š: "\x8a",
                    "‹": "\x8b",
                    Œ: "\x8c",
                    Ž: "\x8e",
                    "‘": "\x91",
                    "’": "\x92",
                    "“": "\x93",
                    "”": "\x94",
                    "•": "\x95",
                    "–": "\x96",
                    "—": "\x97",
                    "˜": "\x98",
                    "™": "\x99",
                    š: "\x9a",
                    "›": "\x9b",
                    œ: "\x9c",
                    ž: "\x9e",
                    Ÿ: "\x9f"
                };
                return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (e) {
                    return t[e] || e
                })
            } catch (e) {
            }
            for (var a = [], n = 0; n != e.length; ++n) a.push(String.fromCharCode(e[n]));
            return a.join("")
        }

        function rd(e) {
            if ("undefined" != typeof JSON && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
            if ("object" != typeof e || null == e) return e;
            if (e instanceof Date) return new Date(e.getTime());
            var r = {};
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = rd(e[t]));
            return r
        }

        function rp(e, r) {
            for (var t = ""; t.length < r;) t += e;
            return t
        }

        function rg(e) {
            var r = Number(e);
            if (!isNaN(r)) return isFinite(r) ? r : NaN;
            if (!/\d/.test(e)) return r;
            var t = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function () {
                return t *= 100, ""
            });
            return isNaN(r = Number(a)) && isNaN(r = Number(a = a.replace(/[(](.*)[)]/, function (e, r) {
                return t = -t, r
            }))) ? r : r / t
        }

        var rm = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

        function rv(e) {
            var r = new Date(e), t = new Date(NaN), a = r.getYear(), n = r.getMonth(), s = r.getDate();
            if (isNaN(s)) return t;
            var i = e.toLowerCase();
            if (i.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
                if ((i = i.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 && -1 == rm.indexOf(i)) return t
            } else if (i.match(/[a-z]/)) return t;
            return a < 0 || a > 8099 ? t : (n > 0 || s > 1) && 101 != a ? r : e.match(/[^-0-9:,\/\\]/) ? t : r
        }

        var rb = (A = 5 == "abacaba".split(/(:?b)/i).length, function (e, r, t) {
            if (A || "string" == typeof r) return e.split(r);
            for (var a = e.split(r), n = [a[0]], s = 1; s < a.length; ++s) n.push(t), n.push(a[s]);
            return n
        });

        function rT(e) {
            return e ? e.content && e.type ? ru(e.content, !0) : e.data ? ec(e.data) : e.asNodeBuffer && ed ? ec(e.asNodeBuffer().toString("binary")) : e.asBinary ? ec(e.asBinary()) : e._data && e._data.getContent ? ec(ru(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null
        }

        function rE(e) {
            if (!e) return null;
            if (e.data) return es(e.data);
            if (e.asNodeBuffer && ed) return e.asNodeBuffer();
            if (e._data && e._data.getContent) {
                var r = e._data.getContent();
                return "string" == typeof r ? es(r) : Array.prototype.slice.call(r)
            }
            return e.content && e.type ? e.content : null
        }

        function rw(e, r) {
            for (var t = e.FullPaths || re(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), s = 0; s < t.length; ++s) {
                var i = t[s].replace(/^Root Entry[\/]/, "").toLowerCase();
                if (a == i || n == i) return e.files ? e.files[t[s]] : e.FileIndex[s]
            }
            return null
        }

        function rA(e, r) {
            var t = rw(e, r);
            if (null == t) throw Error("Cannot find file " + r + " in zip");
            return t
        }

        function rS(e, r, t) {
            if (!t) {
                var a;
                return (a = rA(e, r)) && ".bin" === a.name.slice(-4) ? rE(a) : rT(a)
            }
            if (!r) return null;
            try {
                return rS(e, r)
            } catch (e) {
                return null
            }
        }

        function rk(e, r, t) {
            if (!t) return rT(rA(e, r));
            if (!r) return null;
            try {
                return rk(e, r)
            } catch (e) {
                return null
            }
        }

        function ry(e) {
            for (var r = e.FullPaths || re(e.files), t = [], a = 0; a < r.length; ++a) "/" != r[a].slice(-1) && t.push(r[a].replace(/^Root Entry[\/]/, ""));
            return t.sort()
        }

        function rC(e, r) {
            switch (r.type) {
                case"base64":
                    return e9.read(e, {type: "base64"});
                case"binary":
                    return e9.read(e, {type: "binary"});
                case"buffer":
                case"array":
                    return e9.read(e, {type: "buffer"})
            }
            throw Error("Unrecognized type " + r.type)
        }

        function r_(e, r) {
            if ("/" == e.charAt(0)) return e.slice(1);
            var t = r.split("/");
            "/" != r.slice(-1) && t.pop();
            for (var a = e.split("/"); 0 !== a.length;) {
                var n = a.shift();
                ".." === n ? t.pop() : "." !== n && t.push(n)
            }
            return t.join("/")
        }

        var rO = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
            rR = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
            rI = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,
            rx = rO.match(rI) ? rI : /<[^>]*>/g, rN = /<\w*:/, rD = /<(\/?)\w+:/;

        function rF(e, r, t) {
            for (var a = {}, n = 0, s = 0; n !== e.length && 32 !== (s = e.charCodeAt(n)) && 10 !== s && 13 !== s; ++n) ;
            if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
            var i = e.match(rR), c = 0, o = "", l = 0, f = "", h = "", u = 1;
            if (i) for (l = 0; l != i.length; ++l) {
                for (s = 0, h = i[l]; s != h.length && 61 !== h.charCodeAt(s); ++s) ;
                for (f = h.slice(0, s).trim(); 32 == h.charCodeAt(s + 1);) ++s;
                for (c = 0, u = 34 == (n = h.charCodeAt(s + 1)) || 39 == n ? 1 : 0, o = h.slice(s + 1 + u, h.length - u); c != f.length && 58 !== f.charCodeAt(c); ++c) ;
                if (c === f.length) f.indexOf("_") > 0 && (f = f.slice(0, f.indexOf("_"))), a[f] = o, t || (a[f.toLowerCase()] = o); else {
                    var d = (5 === c && "xmlns" === f.slice(0, 5) ? "xmlns" : "") + f.slice(c + 1);
                    if (a[d] && "ext" == f.slice(c - 3, c)) continue;
                    a[d] = o, t || (a[d.toLowerCase()] = o)
                }
            }
            return a
        }

        function rP(e) {
            return e.replace(rD, "<$1")
        }

        var rL = {"&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&"}, rM = rr(rL),
            rU = (S = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, k = /_x([\da-fA-F]{4})_/ig, function e(r) {
                var t = r + "", a = t.indexOf("<![CDATA[");
                if (-1 == a) return t.replace(S, function (e, r) {
                    return rL[e] || String.fromCharCode(parseInt(r, e.indexOf("x") > -1 ? 16 : 10)) || e
                }).replace(k, function (e, r) {
                    return String.fromCharCode(parseInt(r, 16))
                });
                var n = t.indexOf("]]>");
                return e(t.slice(0, a)) + t.slice(a + 9, n) + e(t.slice(n + 3))
            }), rB = /[&<>'"]/g, rH = /[\u0000-\u001f]/g;

        function rW(e) {
            return (e + "").replace(rB, function (e) {
                return rM[e]
            }).replace(/\n/g, "<br/>").replace(rH, function (e) {
                return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";"
            })
        }

        var rV = function () {
            var e = /&#(\d+);/g;

            function r(e, r) {
                return String.fromCharCode(parseInt(r, 10))
            }

            return function (t) {
                return t.replace(e, r)
            }
        }();

        function rz(e) {
            switch (e) {
                case 1:
                case!0:
                case"1":
                case"true":
                case"TRUE":
                    return !0;
                default:
                    return !1
            }
        }

        function rG(e) {
            for (var r = "", t = 0, a = 0, n = 0, s = 0, i = 0; t < e.length;) {
                if ((a = e.charCodeAt(t++)) < 128) {
                    r += String.fromCharCode(a);
                    continue
                }
                if (n = e.charCodeAt(t++), a > 191 && a < 224) {
                    r += String.fromCharCode((31 & a) << 6 | 63 & n);
                    continue
                }
                if (s = e.charCodeAt(t++), a < 240) {
                    r += String.fromCharCode((15 & a) << 12 | (63 & n) << 6 | 63 & s);
                    continue
                }
                r += String.fromCharCode(55296 + ((i = ((7 & a) << 18 | (63 & n) << 12 | (63 & s) << 6 | 63 & e.charCodeAt(t++)) - 65536) >>> 10 & 1023)) + String.fromCharCode(56320 + (1023 & i))
            }
            return r
        }

        function r$(e) {
            var r, t, a, n = eg(2 * e.length), s = 1, i = 0, c = 0;
            for (t = 0; t < e.length; t += s) s = 1, (a = e.charCodeAt(t)) < 128 ? r = a : a < 224 ? (r = (31 & a) * 64 + (63 & e.charCodeAt(t + 1)), s = 2) : a < 240 ? (r = (15 & a) * 4096 + (63 & e.charCodeAt(t + 1)) * 64 + (63 & e.charCodeAt(t + 2)), s = 3) : (s = 4, c = 55296 + ((r = (7 & a) * 262144 + (63 & e.charCodeAt(t + 1)) * 4096 + (63 & e.charCodeAt(t + 2)) * 64 + (63 & e.charCodeAt(t + 3)) - 65536) >>> 10 & 1023), r = 56320 + (1023 & r)), 0 !== c && (n[i++] = 255 & c, n[i++] = c >>> 8, c = 0), n[i++] = r % 256, n[i++] = r >>> 8;
            return n.slice(0, i).toString("ucs2")
        }

        function rY(e) {
            return ep(e, "binary").toString("utf8")
        }

        var rj = "foo bar baz\xe2\x98\x83\xf0\x9f\x8d\xa3",
            rK = ed && (rY(rj) == rG(rj) && rY || r$(rj) == rG(rj) && r$) || rG, rX = ed ? function (e) {
                return ep(e, "utf8").toString("binary")
            } : function (e) {
                for (var r = [], t = 0, a = 0, n = 0; t < e.length;) switch (a = e.charCodeAt(t++), !0) {
                    case a < 128:
                        r.push(String.fromCharCode(a));
                        break;
                    case a < 2048:
                        r.push(String.fromCharCode(192 + (a >> 6))), r.push(String.fromCharCode(128 + (63 & a)));
                        break;
                    case a >= 55296 && a < 57344:
                        a -= 55296, r.push(String.fromCharCode(240 + ((n = e.charCodeAt(t++) - 56320 + (a << 10)) >> 18 & 7))), r.push(String.fromCharCode(144 + (n >> 12 & 63))), r.push(String.fromCharCode(128 + (n >> 6 & 63))), r.push(String.fromCharCode(128 + (63 & n)));
                        break;
                    default:
                        r.push(String.fromCharCode(224 + (a >> 12))), r.push(String.fromCharCode(128 + (a >> 6 & 63))), r.push(String.fromCharCode(128 + (63 & a)))
                }
                return r.join("")
            }, rJ = (y = {}, function (e, r) {
                var t = e + "|" + (r || "");
                return y[t] ? y[t] : y[t] = RegExp("<(?:\\w+:)?" + e + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + e + ">", r || "")
            }),
            rZ = (C = [["nbsp", " "], ["middot", "\xb7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function (e) {
                return [RegExp("&" + e[0] + ";", "ig"), e[1]]
            }), function (e) {
                for (var r = e.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, ""), t = 0; t < C.length; ++t) r = r.replace(C[t][0], C[t][1]);
                return r
            }), rq = (_ = {}, function (e) {
                return void 0 !== _[e] ? _[e] : _[e] = RegExp("<(?:vt:)?" + e + ">([\\s\\S]*?)</(?:vt:)?" + e + ">", "g")
            }), rQ = /<\/?(?:vt:)?variant>/g, r1 = /<(?:vt:)([^>]*)>([\s\S]*)</;

        function r0(e, r) {
            var t = rF(e), a = e.match(rq(t.baseType)) || [], n = [];
            if (a.length != t.size) {
                if (r.WTF) throw Error("unexpected vector length " + a.length + " != " + t.size);
                return n
            }
            return a.forEach(function (e) {
                var r = e.replace(rQ, "").match(r1);
                r && n.push({v: rK(r[2]), t: r[1]})
            }), n
        }

        var r2 = /(^\s|\s$|\n)/;

        function r4(e) {
            if (ed && X.isBuffer(e)) return e.toString("utf8");
            if ("string" == typeof e) return e;
            if ("undefined" != typeof Uint8Array && e instanceof Uint8Array) return rK(eb(eT(e)));
            throw Error("Bad input format: expected Buffer or string")
        }

        var r3 = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg,
            r5 = {CT: "http://schemas.openxmlformats.org/package/2006/content-types"},
            r6 = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"],
            r8 = function (e) {
                for (var r = [], t = 0; t < e[0].length; ++t) if (e[0][t]) for (var a = 0, n = e[0][t].length; a < n; a += 10240) r.push.apply(r, e[0][t].slice(a, a + 10240));
                return r
            }, r7 = ed ? function (e) {
                return e[0].length > 0 && X.isBuffer(e[0][0]) ? X.concat(e[0].map(function (e) {
                    return X.isBuffer(e) ? e : ep(e)
                })) : r8(e)
            } : r8, r9 = function (e, r, t) {
                for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(tT(e, n)));
                return a.join("").replace(ew, "")
            }, te = ed ? function (e, r, t) {
                return X.isBuffer(e) ? e.toString("utf16le", r, t).replace(ew, "") : r9(e, r, t)
            } : r9, tr = function (e, r, t) {
                for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
                return a.join("")
            }, tt = ed ? function (e, r, t) {
                return X.isBuffer(e) ? e.toString("hex", r, r + t) : tr(e, r, t)
            } : tr, ta = function (e, r, t) {
                for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(tb(e, n)));
                return a.join("")
            }, tn = ed ? function (e, r, t) {
                return X.isBuffer(e) ? e.toString("utf8", r, t) : ta(e, r, t)
            } : ta, ts = function (e, r) {
                var t = tw(e, r);
                return t > 0 ? tn(e, r + 4, r + 4 + t - 1) : ""
            }, ti = ts, tc = function (e, r) {
                var t = tw(e, r);
                return t > 0 ? tn(e, r + 4, r + 4 + t - 1) : ""
            }, to = tc, tl = function (e, r) {
                var t = 2 * tw(e, r);
                return t > 0 ? tn(e, r + 4, r + 4 + t - 1) : ""
            }, tf = tl, th = function (e, r) {
                var t = tw(e, r);
                return t > 0 ? te(e, r + 4, r + 4 + t) : ""
            }, tu = th, td = function (e, r) {
                var t = tw(e, r);
                return t > 0 ? tn(e, r + 4, r + 4 + t) : ""
            }, tp = td, tg = function (e, r) {
                return function (e, r) {
                    for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((127 & e[r + 7]) << 4) + (e[r + 6] >>> 4 & 15), n = 15 & e[r + 6], s = 5; s >= 0; --s) n = 256 * n + e[r + s];
                    return 2047 == a ? 0 == n ? 1 / 0 * t : NaN : (0 == a ? a = -1022 : (a -= 1023, n += 4503599627370496), t * Math.pow(2, a - 52) * n)
                }(e, r)
            }, tm = tg, tv = function (e) {
                return Array.isArray(e) || "undefined" != typeof Uint8Array && e instanceof Uint8Array
            };
        ed && (ti = function (e, r) {
            if (!X.isBuffer(e)) return ts(e, r);
            var t = e.readUInt32LE(r);
            return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : ""
        }, to = function (e, r) {
            if (!X.isBuffer(e)) return tc(e, r);
            var t = e.readUInt32LE(r);
            return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : ""
        }, tf = function (e, r) {
            if (!X.isBuffer(e)) return tl(e, r);
            var t = 2 * e.readUInt32LE(r);
            return e.toString("utf16le", r + 4, r + 4 + t - 1)
        }, tu = function (e, r) {
            if (!X.isBuffer(e)) return th(e, r);
            var t = e.readUInt32LE(r);
            return e.toString("utf16le", r + 4, r + 4 + t)
        }, tp = function (e, r) {
            if (!X.isBuffer(e)) return td(e, r);
            var t = e.readUInt32LE(r);
            return e.toString("utf8", r + 4, r + 4 + t)
        }, tm = function (e, r) {
            return X.isBuffer(e) ? e.readDoubleLE(r) : tg(e, r)
        }, tv = function (e) {
            return X.isBuffer(e) || Array.isArray(e) || "undefined" != typeof Uint8Array && e instanceof Uint8Array
        }), void 0 !== Y && (te = function (e, r, t) {
            return Y.utils.decode(1200, e.slice(r, t)).replace(ew, "")
        }, tn = function (e, r, t) {
            return Y.utils.decode(65001, e.slice(r, t))
        }, ti = function (e, r) {
            var t = tw(e, r);
            return t > 0 ? Y.utils.decode(Q, e.slice(r + 4, r + 4 + t - 1)) : ""
        }, to = function (e, r) {
            var t = tw(e, r);
            return t > 0 ? Y.utils.decode(q, e.slice(r + 4, r + 4 + t - 1)) : ""
        }, tf = function (e, r) {
            var t = 2 * tw(e, r);
            return t > 0 ? Y.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1)) : ""
        }, tu = function (e, r) {
            var t = tw(e, r);
            return t > 0 ? Y.utils.decode(1200, e.slice(r + 4, r + 4 + t)) : ""
        }, tp = function (e, r) {
            var t = tw(e, r);
            return t > 0 ? Y.utils.decode(65001, e.slice(r + 4, r + 4 + t)) : ""
        });
        var tb = function (e, r) {
            return e[r]
        }, tT = function (e, r) {
            return 256 * e[r + 1] + e[r]
        }, tE = function (e, r) {
            var t = 256 * e[r + 1] + e[r];
            return t < 32768 ? t : -((65535 - t + 1) * 1)
        }, tw = function (e, r) {
            return 16777216 * e[r + 3] + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r]
        }, tA = function (e, r) {
            return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]
        };

        function tS(e, r) {
            var t, a, n, s, i, c, o = "", l = [];
            switch (r) {
                case"dbcs":
                    if (c = this.l, ed && X.isBuffer(this)) o = this.slice(this.l, this.l + 2 * e).toString("utf16le"); else for (i = 0; i < e; ++i) o += String.fromCharCode(tT(this, c)), c += 2;
                    e *= 2;
                    break;
                case"utf8":
                    o = tn(this, this.l, this.l + e);
                    break;
                case"utf16le":
                    e *= 2, o = te(this, this.l, this.l + e);
                    break;
                case"wstr":
                    if (void 0 === Y) return tS.call(this, e, "dbcs");
                    o = Y.utils.decode(q, this.slice(this.l, this.l + 2 * e)), e *= 2;
                    break;
                case"lpstr-ansi":
                    o = ti(this, this.l), e = 4 + tw(this, this.l);
                    break;
                case"lpstr-cp":
                    o = to(this, this.l), e = 4 + tw(this, this.l);
                    break;
                case"lpwstr":
                    o = tf(this, this.l), e = 4 + 2 * tw(this, this.l);
                    break;
                case"lpp4":
                    e = 4 + tw(this, this.l), o = tu(this, this.l), 2 & e && (e += 2);
                    break;
                case"8lpp4":
                    e = 4 + tw(this, this.l), o = tp(this, this.l), 3 & e && (e += 4 - (3 & e));
                    break;
                case"cstr":
                    for (e = 0, o = ""; 0 !== (n = tb(this, this.l + e++));) l.push(eo(n));
                    o = l.join("");
                    break;
                case"_wstr":
                    for (e = 0, o = ""; 0 !== (n = tT(this, this.l + e));) l.push(eo(n)), e += 2;
                    e += 2, o = l.join("");
                    break;
                case"dbcs-cont":
                    for (i = 0, o = "", c = this.l; i < e; ++i) {
                        if (this.lens && -1 !== this.lens.indexOf(c)) return n = tb(this, c), this.l = c + 1, s = tS.call(this, e - i, n ? "dbcs-cont" : "sbcs-cont"), l.join("") + s;
                        l.push(eo(tT(this, c))), c += 2
                    }
                    o = l.join(""), e *= 2;
                    break;
                case"cpstr":
                    if (void 0 !== Y) {
                        o = Y.utils.decode(q, this.slice(this.l, this.l + e));
                        break
                    }
                case"sbcs-cont":
                    for (i = 0, o = "", c = this.l; i != e; ++i) {
                        if (this.lens && -1 !== this.lens.indexOf(c)) return n = tb(this, c), this.l = c + 1, s = tS.call(this, e - i, n ? "dbcs-cont" : "sbcs-cont"), l.join("") + s;
                        l.push(eo(tb(this, c))), c += 1
                    }
                    o = l.join("");
                    break;
                default:
                    switch (e) {
                        case 1:
                            return t = tb(this, this.l), this.l++, t;
                        case 2:
                            return t = ("i" === r ? tE : tT)(this, this.l), this.l += 2, t;
                        case 4:
                        case -4:
                            if ("i" === r || (128 & this[this.l + 3]) == 0) return t = (e > 0 ? tA : function (e, r) {
                                return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]
                            })(this, this.l), this.l += 4, t;
                            return a = tw(this, this.l), this.l += 4, a;
                        case 8:
                        case -8:
                            if ("f" === r) return a = 8 == e ? tm(this, this.l) : tm([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, a;
                            e = 8;
                        case 16:
                            o = tt(this, this.l, e)
                    }
            }
            return this.l += e, o
        }

        var tk = function (e, r, t) {
            e[t] = 255 & r, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255
        }, ty = function (e, r, t) {
            e[t] = 255 & r, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255
        }, tC = function (e, r, t) {
            e[t] = 255 & r, e[t + 1] = r >>> 8 & 255
        };

        function t_(e, r, t) {
            var a = 0, n = 0;
            if ("dbcs" === t) {
                for (n = 0; n != r.length; ++n) tC(this, r.charCodeAt(n), this.l + 2 * n);
                a = 2 * r.length
            } else if ("sbcs" === t) {
                if (void 0 !== Y && 874 == Q) for (n = 0; n != r.length; ++n) {
                    var s = Y.utils.encode(Q, r.charAt(n));
                    this[this.l + n] = s[0]
                } else for (n = 0, r = r.replace(/[^\x00-\x7F]/g, "_"); n != r.length; ++n) this[this.l + n] = 255 & r.charCodeAt(n);
                a = r.length
            } else if ("hex" === t) {
                for (; n < e; ++n) this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
                return this
            } else if ("utf16le" === t) {
                var i = Math.min(this.l + e, this.length);
                for (n = 0; n < Math.min(r.length, e); ++n) {
                    var c = r.charCodeAt(n);
                    this[this.l++] = 255 & c, this[this.l++] = c >> 8
                }
                for (; this.l < i;) this[this.l++] = 0;
                return this
            } else switch (e) {
                case 1:
                    a = 1, this[this.l] = 255 & r;
                    break;
                case 2:
                    a = 2, this[this.l] = 255 & r, r >>>= 8, this[this.l + 1] = 255 & r;
                    break;
                case 3:
                    a = 3, this[this.l] = 255 & r, r >>>= 8, this[this.l + 1] = 255 & r, r >>>= 8, this[this.l + 2] = 255 & r;
                    break;
                case 4:
                    a = 4, tk(this, r, this.l);
                    break;
                case 8:
                    if (a = 8, "f" === t) {
                        !function (e, r, t) {
                            var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, s = 0, i = a ? -r : r;
                            isFinite(i) ? 0 == i ? n = s = 0 : (n = Math.floor(Math.log(i) / Math.LN2), s = i * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(s) || s < 4503599627370496) ? n = -1022 : (s -= 4503599627370496, n += 1023)) : (n = 2047, s = isNaN(r) ? 26985 : 0);
                            for (var c = 0; c <= 5; ++c, s /= 256) e[t + c] = 255 & s;
                            e[t + 6] = (15 & n) << 4 | 15 & s, e[t + 7] = n >> 4 | a
                        }(this, r, this.l);
                        break
                    }
                case 16:
                    break;
                case -4:
                    a = 4, ty(this, r, this.l)
            }
            return this.l += a, this
        }

        function tO(e, r) {
            var t = tt(this, this.l, e.length >> 1);
            if (t !== e) throw Error(r + "Expected " + e + " saw " + t);
            this.l += e.length >> 1
        }

        function tR(e, r) {
            e.l = r, e.read_shift = tS, e.chk = tO, e.write_shift = t_
        }

        function tI(e, r) {
            e.l += r
        }

        function tx(e) {
            var r = eg(e);
            return tR(r, 0), r
        }

        function tN(e, r, t) {
            if (e) {
                tR(e, e.l || 0);
                for (var a, n, s, i = e.length, c = 0, o = 0; e.l < i;) {
                    128 & (c = e.read_shift(1)) && (c = (127 & c) + ((127 & e.read_shift(1)) << 7));
                    var l = sK[c] || sK[65535];
                    for (n = 1, s = 127 & (a = e.read_shift(1)); n < 4 && 128 & a; ++n) s += (127 & (a = e.read_shift(1))) << 7 * n;
                    o = e.l + s;
                    var f = l.f && l.f(e, s, t);
                    if (e.l = o, r(f, l, c)) return
                }
            }
        }

        function tD() {
            var e = [], r = ed ? 256 : 2048, t = function (e) {
                var r = tx(e);
                return tR(r, 0), r
            }, a = t(r), n = function () {
                a && (a.length > a.l && ((a = a.slice(0, a.l)).l = a.length), a.length > 0 && e.push(a), a = null)
            }, s = function (e) {
                return a && e < a.length - a.l ? a : (n(), a = t(Math.max(e + 1, r)))
            };
            return {
                next: s, push: function (e) {
                    n(), null == (a = e).l && (a.l = a.length), s(r)
                }, end: function () {
                    return n(), eE(e)
                }, _bufs: e
            }
        }

        function tF(e, r, t) {
            var a = rd(e);
            if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
                for (; a.c >= 256;) a.c -= 256;
                for (; a.r >= 65536;) a.r -= 65536
            }
            return a
        }

        function tP(e, r, t) {
            var a = rd(e);
            return a.s = tF(a.s, r.s, t), a.e = tF(a.e, r.s, t), a
        }

        function tL(e, r) {
            if (e.cRel && e.c < 0) for (e = rd(e); e.c < 0;) e.c += r > 8 ? 16384 : 256;
            if (e.rRel && e.r < 0) for (e = rd(e); e.r < 0;) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
            var t = tz(e);
            return e.cRel || null == e.cRel || (t = t.replace(/^([A-Z])/, "$$$1")), e.rRel || null == e.rRel || (t = t.replace(/([A-Z]|^)(\d+)$/, "$1$$$2")), t
        }

        function tM(e, r) {
            return 0 != e.s.r || e.s.rRel || e.e.r != (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) || e.e.rRel ? 0 != e.s.c || e.s.cRel || e.e.c != (r.biff >= 12 ? 16383 : 255) || e.e.cRel ? tL(e.s, r.biff) + ":" + tL(e.e, r.biff) : (e.s.rRel ? "" : "$") + tB(e.s.r) + ":" + (e.e.rRel ? "" : "$") + tB(e.e.r) : (e.s.cRel ? "" : "$") + tW(e.s.c) + ":" + (e.e.cRel ? "" : "$") + tW(e.e.c)
        }

        function tU(e) {
            return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1
        }

        function tB(e) {
            return "" + (e + 1)
        }

        function tH(e) {
            for (var r = e.replace(/^\$([A-Z])/, "$1"), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
            return t - 1
        }

        function tW(e) {
            if (e < 0) throw Error("invalid column " + e);
            var r = "";
            for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
            return r
        }

        function tV(e) {
            for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
                var n = e.charCodeAt(a);
                n >= 48 && n <= 57 ? r = 10 * r + (n - 48) : n >= 65 && n <= 90 && (t = 26 * t + (n - 64))
            }
            return {c: t - 1, r: r - 1}
        }

        function tz(e) {
            for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
            return t + (e.r + 1)
        }

        function tG(e) {
            var r = e.indexOf(":");
            return -1 == r ? {s: tV(e), e: tV(e)} : {s: tV(e.slice(0, r)), e: tV(e.slice(r + 1))}
        }

        function t$(e, r) {
            return void 0 === r || "number" == typeof r ? t$(e.s, e.e) : ("string" != typeof e && (e = tz(e)), "string" != typeof r && (r = tz(r)), e == r ? e : e + ":" + r)
        }

        function tY(e) {
            var r = {s: {c: 0, r: 0}, e: {c: 0, r: 0}}, t = 0, a = 0, n = 0, s = e.length;
            for (t = 0; a < s && !((n = e.charCodeAt(a) - 64) < 1) && !(n > 26); ++a) t = 26 * t + n;
            for (r.s.c = --t, t = 0; a < s && !((n = e.charCodeAt(a) - 48) < 0) && !(n > 9); ++a) t = 10 * t + n;
            if (r.s.r = --t, a === s || 10 != n) return r.e.c = r.s.c, r.e.r = r.s.r, r;
            for (++a, t = 0; a != s && !((n = e.charCodeAt(a) - 64) < 1) && !(n > 26); ++a) t = 26 * t + n;
            for (r.e.c = --t, t = 0; a != s && !((n = e.charCodeAt(a) - 48) < 0) && !(n > 9); ++a) t = 10 * t + n;
            return r.e.r = --t, r
        }

        function tj(e, r) {
            var t = "d" == e.t && r instanceof Date;
            if (null != e.z) try {
                return e.w = e4(e.z, t ? ra(r) : r)
            } catch (e) {
            }
            try {
                return e.w = e4((e.XF || {}).numFmtId || (t ? 14 : 0), t ? ra(r) : r)
            } catch (e) {
                return "" + r
            }
        }

        function tK(e, r, t) {
            return null == e || null == e.t || "z" == e.t ? "" : void 0 !== e.w ? e.w : ("d" == e.t && !e.z && t && t.dateNF && (e.z = t.dateNF), "e" == e.t) ? aa[e.v] || e.v : void 0 == r ? tj(e, e.v) : tj(e, r)
        }

        function tX(e, r) {
            var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
            return a[t] = e, {SheetNames: [t], Sheets: a}
        }

        function tJ(e, r, t) {
            var a = t || {}, n = e ? Array.isArray(e) : a.dense, s = e || (n ? [] : {}), i = 0, c = 0;
            if (s && null != a.origin) {
                if ("number" == typeof a.origin) i = a.origin; else {
                    var o = "string" == typeof a.origin ? tV(a.origin) : a.origin;
                    i = o.r, c = o.c
                }
                s["!ref"] || (s["!ref"] = "A1:A1")
            }
            var l = {s: {c: 1e7, r: 1e7}, e: {c: 0, r: 0}};
            if (s["!ref"]) {
                var f = tY(s["!ref"]);
                l.s.c = f.s.c, l.s.r = f.s.r, l.e.c = Math.max(l.e.c, f.e.c), l.e.r = Math.max(l.e.r, f.e.r), -1 == i && (l.e.r = i = f.e.r + 1)
            }
            for (var h = 0; h != r.length; ++h) if (r[h]) {
                if (!Array.isArray(r[h])) throw Error("aoa_to_sheet expects an array of arrays");
                for (var u = 0; u != r[h].length; ++u) if (void 0 !== r[h][u]) {
                    var d = {v: r[h][u]}, p = i + h, g = c + u;
                    if (l.s.r > p && (l.s.r = p), l.s.c > g && (l.s.c = g), l.e.r < p && (l.e.r = p), l.e.c < g && (l.e.c = g), !r[h][u] || "object" != typeof r[h][u] || Array.isArray(r[h][u]) || r[h][u] instanceof Date) {
                        if (Array.isArray(d.v) && (d.f = r[h][u][1], d.v = d.v[0]), null === d.v) {
                            if (d.f) d.t = "n"; else if (a.nullError) d.t = "e", d.v = 0; else {
                                if (!a.sheetStubs) continue;
                                d.t = "z"
                            }
                        } else "number" == typeof d.v ? d.t = "n" : "boolean" == typeof d.v ? d.t = "b" : d.v instanceof Date ? (d.z = a.dateNF || ex[14], a.cellDates ? (d.t = "d", d.w = e4(d.z, ra(d.v))) : (d.t = "n", d.v = ra(d.v), d.w = e4(d.z, d.v))) : d.t = "s"
                    } else d = r[h][u];
                    if (n) s[p] || (s[p] = []), s[p][g] && s[p][g].z && (d.z = s[p][g].z), s[p][g] = d; else {
                        var m = tz({c: g, r: p});
                        s[m] && s[m].z && (d.z = s[m].z), s[m] = d
                    }
                }
            }
            return l.s.c < 1e7 && (s["!ref"] = t$(l)), s
        }

        function tZ(e, r) {
            return tJ(null, e, r)
        }

        function tq(e) {
            var r = e.read_shift(4);
            return 0 === r ? "" : e.read_shift(r, "dbcs")
        }

        function tQ(e, r) {
            var t = e.l, a = e.read_shift(1), n = tq(e), s = [], i = {t: n, h: n};
            if ((1 & a) != 0) {
                for (var c = e.read_shift(4), o = 0; o != c; ++o) s.push({ich: e.read_shift(2), ifnt: e.read_shift(2)});
                i.r = s
            } else i.r = [{ich: 0, ifnt: 0}];
            return e.l = t + r, i
        }

        function t1(e) {
            var r = e.read_shift(4), t = e.read_shift(2);
            return t += e.read_shift(1) << 16, e.l++, {c: r, iStyleRef: t}
        }

        function t0(e) {
            var r = e.read_shift(2);
            return r += e.read_shift(1) << 16, e.l++, {c: -1, iStyleRef: r}
        }

        function t2(e) {
            var r = e.read_shift(4);
            return 0 === r || 4294967295 === r ? "" : e.read_shift(r, "dbcs")
        }

        function t4(e) {
            var r = e.slice(e.l, e.l + 4), t = 1 & r[0], a = 2 & r[0];
            e.l += 4;
            var n = 0 === a ? tm([0, 0, 0, 0, 252 & r[0], r[1], r[2], r[3]], 0) : tA(r, 0) >> 2;
            return t ? n / 100 : n
        }

        function t3(e) {
            var r = {s: {}, e: {}};
            return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r
        }

        function t5(e) {
            if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
            return e.read_shift(8, "f")
        }

        function t6(e, r) {
            var t = e.read_shift(4);
            switch (t) {
                case 0:
                    return "";
                case 4294967295:
                case 4294967294:
                    return ({2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE"})[e.read_shift(4)] || ""
            }
            if (t > 400) throw Error("Unsupported Clipboard: " + t.toString(16));
            return e.l -= 4, e.read_shift(0, 1 == r ? "lpstr" : "lpwstr")
        }

        var t8 = [80, 81], t7 = {
                1: {n: "CodePage", t: 2},
                2: {n: "Category", t: 80},
                3: {n: "PresentationFormat", t: 80},
                4: {n: "ByteCount", t: 3},
                5: {n: "LineCount", t: 3},
                6: {n: "ParagraphCount", t: 3},
                7: {n: "SlideCount", t: 3},
                8: {n: "NoteCount", t: 3},
                9: {n: "HiddenCount", t: 3},
                10: {n: "MultimediaClipCount", t: 3},
                11: {n: "ScaleCrop", t: 11},
                12: {n: "HeadingPairs", t: 4108},
                13: {n: "TitlesOfParts", t: 4126},
                14: {n: "Manager", t: 80},
                15: {n: "Company", t: 80},
                16: {n: "LinksUpToDate", t: 11},
                17: {n: "CharacterCount", t: 3},
                19: {n: "SharedDoc", t: 11},
                22: {n: "HyperlinksChanged", t: 11},
                23: {n: "AppVersion", t: 3, p: "version"},
                24: {n: "DigSig", t: 65},
                26: {n: "ContentType", t: 80},
                27: {n: "ContentStatus", t: 80},
                28: {n: "Language", t: 80},
                29: {n: "Version", t: 80},
                255: {},
                2147483648: {n: "Locale", t: 19},
                2147483651: {n: "Behavior", t: 19},
                1919054434: {}
            }, t9 = {
                1: {n: "CodePage", t: 2},
                2: {n: "Title", t: 80},
                3: {n: "Subject", t: 80},
                4: {n: "Author", t: 80},
                5: {n: "Keywords", t: 80},
                6: {n: "Comments", t: 80},
                7: {n: "Template", t: 80},
                8: {n: "LastAuthor", t: 80},
                9: {n: "RevNumber", t: 80},
                10: {n: "EditTime", t: 64},
                11: {n: "LastPrinted", t: 64},
                12: {n: "CreatedDate", t: 64},
                13: {n: "ModifiedDate", t: 64},
                14: {n: "PageCount", t: 3},
                15: {n: "WordCount", t: 3},
                16: {n: "CharCount", t: 3},
                17: {n: "Thumbnail", t: 71},
                18: {n: "Application", t: 80},
                19: {n: "DocSecurity", t: 3},
                255: {},
                2147483648: {n: "Locale", t: 19},
                2147483651: {n: "Behavior", t: 19},
                1919054434: {}
            }, ae = {
                1: "US",
                2: "CA",
                3: "",
                7: "RU",
                20: "EG",
                30: "GR",
                31: "NL",
                32: "BE",
                33: "FR",
                34: "ES",
                36: "HU",
                39: "IT",
                41: "CH",
                43: "AT",
                44: "GB",
                45: "DK",
                46: "SE",
                47: "NO",
                48: "PL",
                49: "DE",
                52: "MX",
                55: "BR",
                61: "AU",
                64: "NZ",
                66: "TH",
                81: "JP",
                82: "KR",
                84: "VN",
                86: "CN",
                90: "TR",
                105: "JS",
                213: "DZ",
                216: "MA",
                218: "LY",
                351: "PT",
                354: "IS",
                358: "FI",
                420: "CZ",
                886: "TW",
                961: "LB",
                962: "JO",
                963: "SY",
                964: "IQ",
                965: "KW",
                966: "SA",
                971: "AE",
                972: "IL",
                974: "QA",
                981: "IR",
                65535: "US"
            },
            ar = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"],
            at = rd([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (e) {
                return [e >> 16 & 255, e >> 8 & 255, 255 & e]
            })), aa = {
                0: "#NULL!",
                7: "#DIV/0!",
                15: "#VALUE!",
                23: "#REF!",
                29: "#NAME?",
                36: "#NUM!",
                42: "#N/A",
                43: "#GETTING_DATA",
                255: "#WTF?"
            }, an = {
                "#NULL!": 0,
                "#DIV/0!": 7,
                "#VALUE!": 15,
                "#REF!": 23,
                "#NAME?": 29,
                "#NUM!": 36,
                "#N/A": 42,
                "#GETTING_DATA": 43,
                "#WTF?": 255
            }, as = {
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
                "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
                "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
                "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
                "application/vnd.ms-excel.worksheet": "sheets",
                "application/vnd.ms-excel.binIndexWs": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
                "application/vnd.ms-excel.chartsheet": "charts",
                "application/vnd.ms-excel.macrosheet+xml": "macros",
                "application/vnd.ms-excel.macrosheet": "macros",
                "application/vnd.ms-excel.intlmacrosheet": "TODO",
                "application/vnd.ms-excel.binIndexMs": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
                "application/vnd.ms-excel.dialogsheet": "dialogs",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
                "application/vnd.ms-excel.sharedStrings": "strs",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
                "application/vnd.ms-excel.styles": "styles",
                "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
                "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
                "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
                "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
                "application/vnd.ms-excel.comments": "comments",
                "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
                "application/vnd.ms-excel.person+xml": "people",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
                "application/vnd.ms-excel.sheetMetadata": "metadata",
                "application/vnd.ms-excel.pivotTable": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
                "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
                "application/vnd.ms-office.chartstyle+xml": "TODO",
                "application/vnd.ms-office.chartex+xml": "TODO",
                "application/vnd.ms-excel.calcChain": "calcchains",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
                "application/vnd.ms-office.activeX": "TODO",
                "application/vnd.ms-office.activeX+xml": "TODO",
                "application/vnd.ms-excel.attachedToolbars": "TODO",
                "application/vnd.ms-excel.connections": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
                "application/vnd.ms-excel.externalLink": "links",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
                "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
                "application/vnd.ms-excel.pivotCacheRecords": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
                "application/vnd.ms-excel.queryTable": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
                "application/vnd.ms-excel.userNames": "TODO",
                "application/vnd.ms-excel.revisionHeaders": "TODO",
                "application/vnd.ms-excel.revisionLog": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
                "application/vnd.ms-excel.tableSingleCells": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
                "application/vnd.ms-excel.slicer": "TODO",
                "application/vnd.ms-excel.slicerCache": "TODO",
                "application/vnd.ms-excel.slicer+xml": "TODO",
                "application/vnd.ms-excel.slicerCache+xml": "TODO",
                "application/vnd.ms-excel.wsSortMap": "TODO",
                "application/vnd.ms-excel.table": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
                "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
                "application/vnd.ms-excel.Timeline+xml": "TODO",
                "application/vnd.ms-excel.TimelineCache+xml": "TODO",
                "application/vnd.ms-office.vbaProject": "vba",
                "application/vnd.ms-office.vbaProjectSignature": "TODO",
                "application/vnd.ms-office.volatileDependencies": "TODO",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
                "application/vnd.ms-excel.controlproperties+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.model+data": "TODO",
                "application/vnd.ms-excel.Survey+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
                "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
                "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
                "application/vnd.openxmlformats-package.relationships+xml": "rels",
                "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
                "image/png": "TODO",
                sheet: "js"
            }, ai = {
                CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
                CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
                WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],
                DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
                MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
                TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment"
            };

        function ac(e) {
            var r = e.lastIndexOf("/");
            return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels"
        }

        function ao(e, r) {
            var t = {"!id": {}};
            if (!e) return t;
            "/" !== r.charAt(0) && (r = "/" + r);
            var a = {};
            return (e.match(rx) || []).forEach(function (e) {
                var n = rF(e);
                if ("<Relationship" === n[0]) {
                    var s = {};
                    s.Type = n.Type, s.Target = n.Target, s.Id = n.Id, n.TargetMode && (s.TargetMode = n.TargetMode), t["External" === n.TargetMode ? n.Target : r_(n.Target, r)] = s, a[n.Id] = s
                }
            }), t["!id"] = a, t
        }

        var al = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]],
            af = function () {
                for (var e = Array(al.length), r = 0; r < al.length; ++r) {
                    var t = al[r],
                        a = "(?:" + t[0].slice(0, t[0].indexOf(":")) + ":)" + t[0].slice(t[0].indexOf(":") + 1);
                    e[r] = RegExp("<" + a + "[^>]*>([\\s\\S]*?)</" + a + ">")
                }
                return e
            }();

        function ah(e) {
            var r = {};
            e = rK(e);
            for (var t = 0; t < al.length; ++t) {
                var a = al[t], n = e.match(af[t]);
                null != n && n.length > 0 && (r[a[1]] = rU(n[1])), "date" === a[2] && r[a[1]] && (r[a[1]] = rh(r[a[1]]))
            }
            return r
        }

        var au = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];

        function ad(e, r, t, a) {
            var n = [];
            if ("string" == typeof e) n = r0(e, a); else for (var s = 0; s < e.length; ++s) n = n.concat(e[s].map(function (e) {
                return {v: e}
            }));
            var i = "string" == typeof r ? r0(r, a).map(function (e) {
                return e.v
            }) : r, c = 0, o = 0;
            if (i.length > 0) for (var l = 0; l !== n.length; l += 2) {
                switch (o = +n[l + 1].v, n[l].v) {
                    case"Worksheets":
                    case"工作表":
                    case"Листы":
                    case"أوراق العمل":
                    case"ワークシート":
                    case"גליונות עבודה":
                    case"Arbeitsbl\xe4tter":
                    case"\xc7alışma Sayfaları":
                    case"Feuilles de calcul":
                    case"Fogli di lavoro":
                    case"Folhas de c\xe1lculo":
                    case"Planilhas":
                    case"Regneark":
                    case"Hojas de c\xe1lculo":
                    case"Werkbladen":
                        t.Worksheets = o, t.SheetNames = i.slice(c, c + o);
                        break;
                    case"Named Ranges":
                    case"Rangos con nombre":
                    case"名前付き一覧":
                    case"Benannte Bereiche":
                    case"Navngivne omr\xe5der":
                        t.NamedRanges = o, t.DefinedNames = i.slice(c, c + o);
                        break;
                    case"Charts":
                    case"Diagramme":
                        t.Chartsheets = o, t.ChartNames = i.slice(c, c + o)
                }
                c += o
            }
        }

        var ap = /<[^>]+>[^<]*/g, ag = {
            Title: "Title",
            Subject: "Subject",
            Author: "Author",
            Keywords: "Keywords",
            Comments: "Description",
            LastAuthor: "LastAuthor",
            RevNumber: "Revision",
            Application: "AppName",
            LastPrinted: "LastPrinted",
            CreatedDate: "Created",
            ModifiedDate: "LastSaved",
            Category: "Category",
            Manager: "Manager",
            Company: "Company",
            AppVersion: "Version",
            ContentStatus: "ContentStatus",
            Identifier: "Identifier",
            Language: "Language"
        };

        function am(e) {
            var r = e.read_shift(4);
            return new Date((e.read_shift(4) / 1e7 * 4294967296 + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "")
        }

        function av(e, r, t) {
            var a = e.l, n = e.read_shift(0, "lpstr-cp");
            if (t) for (; e.l - a & 3;) ++e.l;
            return n
        }

        function ab(e, r, t) {
            var a = e.read_shift(0, "lpwstr");
            return t && (e.l += 4 - (a.length + 1 & 3) & 3), a
        }

        function aT(e, r, t) {
            return 31 === r ? ab(e) : av(e, r, t)
        }

        function aE(e, r, t) {
            return aT(e, r, !1 === t ? 0 : 4)
        }

        function aw(e, r) {
            for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
                var s = e.read_shift(4), i = e.read_shift(4);
                a[s] = e.read_shift(i, 1200 === r ? "utf16le" : "utf8").replace(ew, "").replace(eA, "!"), 1200 === r && i % 2 && (e.l += 2)
            }
            return 3 & e.l && (e.l = e.l >> 3 << 2), a
        }

        function aA(e) {
            var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
            return e.l += r, (3 & r) > 0 && (e.l += 4 - (3 & r) & 3), t
        }

        function aS(e, r, t) {
            var a, n, s = e.read_shift(2), i = t || {};
            if (e.l += 2, 12 !== r && s !== r && -1 === t8.indexOf(r) && !((65534 & r) == 4126 && (65534 & s) == 4126)) throw Error("Expected type " + r + " saw " + s);
            switch (12 === r ? s : r) {
                case 2:
                    return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
                case 3:
                    return e.read_shift(4, "i");
                case 11:
                    return 0 !== e.read_shift(4);
                case 19:
                    return e.read_shift(4);
                case 30:
                    return av(e, s, 4).replace(ew, "");
                case 31:
                    return ab(e);
                case 64:
                    return am(e);
                case 65:
                    return aA(e);
                case 71:
                    return (a = {}).Size = e.read_shift(4), e.l += a.Size + 3 - (a.Size - 1) % 4, a;
                case 80:
                    return aE(e, s, !i.raw).replace(ew, "");
                case 81:
                    return (function (e, r) {
                        if (!r) throw Error("VtUnalignedString must have positive length");
                        return aT(e, r, 0)
                    })(e, s).replace(ew, "");
                case 4108:
                    return function (e) {
                        for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(function (e) {
                            var r = e.l, t = aS(e, 81);
                            return 0 == e[e.l] && 0 == e[e.l + 1] && e.l - r & 2 && (e.l += 2), [t, aS(e, 3)]
                        }(e));
                        return t
                    }(e);
                case 4126:
                case 4127:
                    return 4127 == s ? function (e) {
                        for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
                            var n = e.l;
                            t[a] = e.read_shift(0, "lpwstr").replace(ew, ""), e.l - n & 2 && (e.l += 2)
                        }
                        return t
                    }(e) : function (e) {
                        for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace(ew, "");
                        return t
                    }(e);
                default:
                    throw Error("TypedPropertyValue unrecognized type " + r + " " + s)
            }
        }

        function ak(e, r) {
            var t = e.l, a = e.read_shift(4), n = e.read_shift(4), s = [], i = 0, c = 0, o = -1, l = {};
            for (i = 0; i != n; ++i) {
                var f = e.read_shift(4), h = e.read_shift(4);
                s[i] = [f, h + t]
            }
            s.sort(function (e, r) {
                return e[1] - r[1]
            });
            var u = {};
            for (i = 0; i != n; ++i) {
                if (e.l !== s[i][1]) {
                    var d = !0;
                    if (i > 0 && r) switch (r[s[i - 1][0]].t) {
                        case 2:
                            e.l + 2 === s[i][1] && (e.l += 2, d = !1);
                            break;
                        case 80:
                        case 4108:
                            e.l <= s[i][1] && (e.l = s[i][1], d = !1)
                    }
                    if ((!r || 0 == i) && e.l <= s[i][1] && (d = !1, e.l = s[i][1]), d) throw Error("Read Error: Expected address " + s[i][1] + " at " + e.l + " :" + i)
                }
                if (r) {
                    var p = r[s[i][0]];
                    if (u[p.n] = aS(e, p.t, {raw: !0}), "version" === p.p && (u[p.n] = String(u[p.n] >> 16) + "." + ("0000" + String(65535 & u[p.n])).slice(-4)), "CodePage" == p.n) switch (u[p.n]) {
                        case 0:
                            u[p.n] = 1252;
                        case 874:
                        case 932:
                        case 936:
                        case 949:
                        case 950:
                        case 1250:
                        case 1251:
                        case 1253:
                        case 1254:
                        case 1255:
                        case 1256:
                        case 1257:
                        case 1258:
                        case 1e4:
                        case 1200:
                        case 1201:
                        case 1252:
                        case 65e3:
                        case -536:
                        case 65001:
                        case -535:
                            ea(c = u[p.n] >>> 0 & 65535);
                            break;
                        default:
                            throw Error("Unsupported CodePage: " + u[p.n])
                    }
                } else if (1 === s[i][0]) {
                    if (ea(c = u.CodePage = aS(e, 2)), -1 !== o) {
                        var g = e.l;
                        e.l = s[o][1], l = aw(e, c), e.l = g
                    }
                } else if (0 === s[i][0]) {
                    if (0 === c) {
                        o = i, e.l = s[i + 1][1];
                        continue
                    }
                    l = aw(e, c)
                } else {
                    var m, v = l[s[i][0]];
                    switch (e[e.l]) {
                        case 65:
                            e.l += 4, m = aA(e);
                            break;
                        case 30:
                        case 31:
                            e.l += 4, m = aE(e, e[e.l - 4]).replace(/\u0000+$/, "");
                            break;
                        case 3:
                            e.l += 4, m = e.read_shift(4, "i");
                            break;
                        case 19:
                            e.l += 4, m = e.read_shift(4);
                            break;
                        case 5:
                            e.l += 4, m = e.read_shift(8, "f");
                            break;
                        case 11:
                            e.l += 4, m = a_(e, 4);
                            break;
                        case 64:
                            e.l += 4, m = rh(am(e));
                            break;
                        default:
                            throw Error("unparsed value: " + e[e.l])
                    }
                    u[v] = m
                }
            }
            return e.l = t + a, u
        }

        function ay(e, r, t) {
            var a, n = e.content;
            if (!n) return {};
            tR(n, 0);
            var s, i, c, o, l = 0;
            n.chk("feff", "Byte Order: "), n.read_shift(2);
            var f = n.read_shift(4), h = n.read_shift(16);
            if (h !== e9.utils.consts.HEADER_CLSID && h !== t) throw Error("Bad PropertySet CLSID " + h);
            if (1 !== (s = n.read_shift(4)) && 2 !== s) throw Error("Unrecognized #Sets: " + s);
            if (i = n.read_shift(16), o = n.read_shift(4), 1 === s && o !== n.l) throw Error("Length mismatch: " + o + " !== " + n.l);
            2 === s && (c = n.read_shift(16), l = n.read_shift(4));
            var u = ak(n, r), d = {SystemIdentifier: f};
            for (var p in u) d[p] = u[p];
            if (d.FMTID = i, 1 === s) return d;
            if (l - n.l == 2 && (n.l += 2), n.l !== l) throw Error("Length mismatch 2: " + n.l + " !== " + l);
            try {
                a = ak(n, null)
            } catch (e) {
            }
            for (p in a) d[p] = a[p];
            return d.FMTID = [i, c], d
        }

        function aC(e, r) {
            return e.read_shift(r), null
        }

        function a_(e, r) {
            return 1 === e.read_shift(r)
        }

        function aO(e) {
            return e.read_shift(2, "u")
        }

        function aR(e, r) {
            return function (e, r, t) {
                for (var a = [], n = e.l + r; e.l < n;) a.push(t(e, n - e.l));
                if (n !== e.l) throw Error("Slurp error");
                return a
            }(e, r, aO)
        }

        function aI(e, r, t) {
            var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", s = q;
            t && t.biff >= 8 && (q = 1200), t && 8 != t.biff ? 12 == t.biff && (n = "wstr") : e.read_shift(1) && (n = "dbcs-cont"), t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
            var i = a ? e.read_shift(a, n) : "";
            return q = s, i
        }

        function ax(e, r, t) {
            if (t) {
                if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
                if (t.biff >= 12) return e.read_shift(r, "dbcs-cont")
            }
            return 0 === e.read_shift(1) ? e.read_shift(r, "sbcs-cont") : e.read_shift(r, "dbcs-cont")
        }

        function aN(e, r, t) {
            var a = e.read_shift(t && 2 == t.biff ? 1 : 2);
            return 0 === a ? (e.l++, "") : ax(e, a, t)
        }

        function aD(e, r, t) {
            if (t.biff > 5) return aN(e, r, t);
            var a = e.read_shift(1);
            return 0 === a ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont")
        }

        function aF(e) {
            var r = e.read_shift(4);
            return r > 0 ? e.read_shift(r, "utf16le").replace(ew, "") : ""
        }

        function aP(e) {
            return [e.read_shift(1), e.read_shift(1), e.read_shift(1), e.read_shift(1)]
        }

        function aL(e, r) {
            var t = aP(e, r);
            return t[3] = 0, t
        }

        function aM(e) {
            return {r: e.read_shift(2), c: e.read_shift(2), ixfe: e.read_shift(2)}
        }

        function aU(e) {
            return [e.read_shift(2), t4(e)]
        }

        function aB(e) {
            var r = e.read_shift(2), t = e.read_shift(2);
            return {s: {c: e.read_shift(2), r: r}, e: {c: e.read_shift(2), r: t}}
        }

        function aH(e) {
            var r = e.read_shift(2), t = e.read_shift(2);
            return {s: {c: e.read_shift(1), r: r}, e: {c: e.read_shift(1), r: t}}
        }

        function aW(e) {
            e.l += 4;
            var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
            return e.l += 12, [t, r, a]
        }

        function aV(e) {
            e.l += 2, e.l += e.read_shift(2)
        }

        var az = {
            0: aV, 4: aV, 5: aV, 6: aV, 7: function (e) {
                return e.l += 4, e.cf = e.read_shift(2), {}
            }, 8: aV, 9: aV, 10: aV, 11: aV, 12: aV, 13: function (e) {
                var r = {};
                return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r
            }, 14: aV, 15: aV, 16: aV, 17: aV, 18: aV, 19: aV, 20: aV, 21: aW
        };

        function aG(e, r) {
            var t = {BIFFVer: 0, dt: 0};
            switch (t.BIFFVer = e.read_shift(2), (r -= 2) >= 2 && (t.dt = e.read_shift(2), e.l -= 2), t.BIFFVer) {
                case 1536:
                case 1280:
                case 1024:
                case 768:
                case 512:
                case 2:
                case 7:
                    break;
                default:
                    if (r > 6) throw Error("Unexpected BIFF Ver " + t.BIFFVer)
            }
            return e.read_shift(r), t
        }

        function a$(e, r, t) {
            var a = 0;
            t && 2 == t.biff || (a = e.read_shift(2));
            var n = e.read_shift(2);
            return t && 2 == t.biff && (a = 1 - (n >> 15), n &= 32767), [{
                Unsynced: 1 & a,
                DyZero: (2 & a) >> 1,
                ExAsc: (4 & a) >> 2,
                ExDsc: (8 & a) >> 3
            }, n]
        }

        function aY(e, r, t) {
            var a = e.l + r, n = 8 != t.biff && t.biff ? 2 : 4, s = e.read_shift(n), i = e.read_shift(n),
                c = e.read_shift(2), o = e.read_shift(2);
            return e.l = a, {s: {r: s, c: c}, e: {r: i, c: o}}
        }

        function aj(e, r, t) {
            var a, n = aM(e, 6);
            (2 == t.biff || 9 == r) && ++e.l;
            var s = (a = e.read_shift(1), 1 === e.read_shift(1) ? a : 1 === a);
            return n.val = s, n.t = !0 === s || !1 === s ? "b" : "e", n
        }

        var aK = function (e, r, t) {
            return 0 === r ? "" : aD(e, r, t)
        };

        function aX(e, r, t) {
            var a, n = e.read_shift(2), s = {
                fBuiltIn: 1 & n,
                fWantAdvise: n >>> 1 & 1,
                fWantPict: n >>> 2 & 1,
                fOle: n >>> 3 & 1,
                fOleLink: n >>> 4 & 1,
                cf: n >>> 5 & 1023,
                fIcon: n >>> 15 & 1
            };
            return 14849 === t.sbcch && (a = function (e, r, t) {
                e.l += 4, r -= 4;
                var a = e.l + r, n = aI(e, r, t), s = e.read_shift(2);
                if (s !== (a -= e.l)) throw Error("Malformed AddinUdf: padding = " + a + " != " + s);
                return e.l += s, n
            }(e, r - 2, t)), s.body = a || e.read_shift(r - 2), "string" == typeof a && (s.Name = a), s
        }

        var aJ = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];

        function aZ(e, r, t) {
            var a, n, s, i, c = e.l + r, o = e.read_shift(2), l = e.read_shift(1), f = e.read_shift(1),
                h = e.read_shift(t && 2 == t.biff ? 1 : 2), u = 0;
            (!t || t.biff >= 5) && (5 != t.biff && (e.l += 2), u = e.read_shift(2), 5 == t.biff && (e.l += 2), e.l += 4);
            var d = ax(e, f, t);
            32 & o && (d = aJ[d.charCodeAt(0)]);
            var p = c - e.l;
            return t && 2 == t.biff && --p, {
                chKey: l,
                Name: d,
                itab: u,
                rgce: c != e.l && 0 !== h && p > 0 ? (a = p, s = e.l + a, i = n8(e, h, t), s !== e.l && (n = n6(e, s - e.l, i, t)), [i, n]) : []
            }
        }

        function aq(e, r, t) {
            if (t.biff < 8) {
                var a;
                return 3 == e[e.l + 1] && e[e.l]++, 3 == (a = aI(e, r, t)).charCodeAt(0) ? a.slice(1) : a
            }
            for (var n = [], s = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); 0 != i--;) n.push(function (e, r, t) {
                var a = t.biff > 8 ? 4 : 2;
                return [e.read_shift(a), e.read_shift(a, "i"), e.read_shift(a, "i")]
            }(e, t.biff, t));
            if (e.l != s) throw Error("Bad ExternSheet: " + e.l + " != " + s);
            return n
        }

        function aQ(e, r, t) {
            var a = aH(e, 6);
            switch (t.biff) {
                case 2:
                    e.l++, r -= 7;
                    break;
                case 3:
                case 4:
                    e.l += 2, r -= 8;
                    break;
                default:
                    e.l += 6, r -= 12
            }
            return [a, function (e, r, t) {
                var a, n, s = e.l + r, i = 2 == t.biff ? 1 : 2, c = e.read_shift(i);
                if (65535 == c) return [[], (a = r - 2, void (e.l += a))];
                var o = n8(e, c, t);
                return r !== c + i && (n = n6(e, r - c - i, o, t)), e.l = s, [o, n]
            }(e, r, t, a)]
        }

        var a1 = {
            8: function (e, r) {
                var t = e.l + r;
                e.l += 10;
                var a = e.read_shift(2);
                e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
                var n = e.read_shift(1);
                return e.l += n, e.l = t, {fmt: a}
            }
        };

        function a0(e, r, t) {
            if (!t.cellStyles) return void (e.l += r);
            var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), s = e.read_shift(a), i = e.read_shift(a),
                c = e.read_shift(a), o = e.read_shift(2);
            2 == a && (e.l += 2);
            var l = {s: n, e: s, w: i, ixfe: c, flags: o};
            return (t.biff >= 5 || !t.biff) && (l.level = o >> 8 & 7), l
        }

        var a2 = [2, 3, 48, 49, 131, 139, 140, 245], a4 = function () {
                var e = {
                    1: 437,
                    2: 850,
                    3: 1252,
                    4: 1e4,
                    100: 852,
                    101: 866,
                    102: 865,
                    103: 861,
                    104: 895,
                    105: 620,
                    106: 737,
                    107: 857,
                    120: 950,
                    121: 949,
                    122: 936,
                    123: 932,
                    124: 874,
                    125: 1255,
                    126: 1256,
                    150: 10007,
                    151: 10029,
                    152: 10006,
                    200: 1250,
                    201: 1251,
                    202: 1254,
                    203: 1253,
                    0: 20127,
                    8: 865,
                    9: 437,
                    10: 850,
                    11: 437,
                    13: 437,
                    14: 850,
                    15: 437,
                    16: 850,
                    17: 437,
                    18: 850,
                    19: 932,
                    20: 850,
                    21: 437,
                    22: 850,
                    23: 865,
                    24: 437,
                    25: 437,
                    26: 850,
                    27: 437,
                    28: 863,
                    29: 850,
                    31: 852,
                    34: 852,
                    35: 852,
                    36: 860,
                    37: 850,
                    38: 866,
                    55: 850,
                    64: 852,
                    77: 936,
                    78: 949,
                    79: 950,
                    80: 874,
                    87: 1252,
                    88: 1252,
                    89: 1252,
                    108: 863,
                    134: 737,
                    135: 852,
                    136: 857,
                    204: 1257,
                    255: 16969
                }, r = rr({
                    1: 437,
                    2: 850,
                    3: 1252,
                    4: 1e4,
                    100: 852,
                    101: 866,
                    102: 865,
                    103: 861,
                    104: 895,
                    105: 620,
                    106: 737,
                    107: 857,
                    120: 950,
                    121: 949,
                    122: 936,
                    123: 932,
                    124: 874,
                    125: 1255,
                    126: 1256,
                    150: 10007,
                    151: 10029,
                    152: 10006,
                    200: 1250,
                    201: 1251,
                    202: 1254,
                    203: 1253,
                    0: 20127
                });

                function t(r, t) {
                    var a = t || {};
                    a.dateNF || (a.dateNF = "yyyymmdd");
                    var n = tZ(function (r, t) {
                        var a = [], n = eg(1);
                        switch (t.type) {
                            case"base64":
                                n = ev(eu(r));
                                break;
                            case"binary":
                                n = ev(r);
                                break;
                            case"buffer":
                            case"array":
                                n = r
                        }
                        tR(n, 0);
                        var s = n.read_shift(1), i = !!(136 & s), c = !1, o = !1;
                        switch (s) {
                            case 2:
                            case 3:
                            case 131:
                            case 139:
                            case 245:
                                break;
                            case 48:
                            case 49:
                                c = !0, i = !0;
                                break;
                            case 140:
                                o = !0;
                                break;
                            default:
                                throw Error("DBF Unsupported Version: " + s.toString(16))
                        }
                        var l = 0, f = 521;
                        2 == s && (l = n.read_shift(2)), n.l += 3, 2 != s && (l = n.read_shift(4)), l > 1048576 && (l = 1e6), 2 != s && (f = n.read_shift(2));
                        var h = n.read_shift(2), u = t.codepage || 1252;
                        2 != s && (n.l += 16, n.read_shift(1), 0 !== n[n.l] && (u = e[n[n.l]]), n.l += 1, n.l += 2), o && (n.l += 36);
                        for (var d = [], p = {}, g = Math.min(n.length, 2 == s ? 521 : f - 10 - (c ? 264 : 0)), m = o ? 32 : 11; n.l < g && 13 != n[n.l];) switch ((p = {}).name = Y.utils.decode(u, n.slice(n.l, n.l + m)).replace(/[\u0000\r\n].*$/g, ""), n.l += m, p.type = String.fromCharCode(n.read_shift(1)), 2 == s || o || (p.offset = n.read_shift(4)), p.len = n.read_shift(1), 2 == s && (p.offset = n.read_shift(2)), p.dec = n.read_shift(1), p.name.length && d.push(p), 2 != s && (n.l += o ? 13 : 14), p.type) {
                            case"B":
                                (!c || 8 != p.len) && t.WTF && console.log("Skipping " + p.name + ":" + p.type);
                                break;
                            case"G":
                            case"P":
                                t.WTF && console.log("Skipping " + p.name + ":" + p.type);
                                break;
                            case"+":
                            case"0":
                            case"@":
                            case"C":
                            case"D":
                            case"F":
                            case"I":
                            case"L":
                            case"M":
                            case"N":
                            case"O":
                            case"T":
                            case"Y":
                                break;
                            default:
                                throw Error("Unknown Field Type: " + p.type)
                        }
                        if (13 !== n[n.l] && (n.l = f - 1), 13 !== n.read_shift(1)) throw Error("DBF Terminator not found " + n.l + " " + n[n.l]);
                        n.l = f;
                        var v = 0, b = 0;
                        for (b = 0, a[0] = []; b != d.length; ++b) a[0][b] = d[b].name;
                        for (; l-- > 0;) {
                            if (42 === n[n.l]) {
                                n.l += h;
                                continue
                            }
                            for (++n.l, a[++v] = [], b = 0, b = 0; b != d.length; ++b) {
                                var T = n.slice(n.l, n.l + d[b].len);
                                n.l += d[b].len, tR(T, 0);
                                var E = Y.utils.decode(u, T);
                                switch (d[b].type) {
                                    case"C":
                                        E.trim().length && (a[v][b] = E.replace(/\s+$/, ""));
                                        break;
                                    case"D":
                                        8 === E.length ? a[v][b] = new Date(+E.slice(0, 4), +E.slice(4, 6) - 1, +E.slice(6, 8)) : a[v][b] = E;
                                        break;
                                    case"F":
                                        a[v][b] = parseFloat(E.trim());
                                        break;
                                    case"+":
                                    case"I":
                                        a[v][b] = o ? 2147483648 ^ T.read_shift(-4, "i") : T.read_shift(4, "i");
                                        break;
                                    case"L":
                                        switch (E.trim().toUpperCase()) {
                                            case"Y":
                                            case"T":
                                                a[v][b] = !0;
                                                break;
                                            case"N":
                                            case"F":
                                                a[v][b] = !1;
                                                break;
                                            case"":
                                            case"?":
                                                break;
                                            default:
                                                throw Error("DBF Unrecognized L:|" + E + "|")
                                        }
                                        break;
                                    case"M":
                                        if (!i) throw Error("DBF Unexpected MEMO for type " + s.toString(16));
                                        a[v][b] = "##MEMO##" + (o ? parseInt(E.trim(), 10) : T.read_shift(4));
                                        break;
                                    case"N":
                                        (E = E.replace(/\u0000/g, "").trim()) && "." != E && (a[v][b] = +E || 0);
                                        break;
                                    case"@":
                                        a[v][b] = new Date(T.read_shift(-8, "f") - 621356832e5);
                                        break;
                                    case"T":
                                        a[v][b] = new Date((T.read_shift(4) - 2440588) * 864e5 + T.read_shift(4));
                                        break;
                                    case"Y":
                                        a[v][b] = T.read_shift(4, "i") / 1e4 + T.read_shift(4, "i") / 1e4 * 4294967296;
                                        break;
                                    case"O":
                                        a[v][b] = -T.read_shift(-8, "f");
                                        break;
                                    case"B":
                                        if (c && 8 == d[b].len) {
                                            a[v][b] = T.read_shift(8, "f");
                                            break
                                        }
                                    case"G":
                                    case"P":
                                        T.l += d[b].len;
                                        break;
                                    case"0":
                                        if ("_NullFlags" === d[b].name) break;
                                    default:
                                        throw Error("DBF Unsupported data type " + d[b].type)
                                }
                            }
                        }
                        if (2 != s && n.l < n.length && 26 != n[n.l++]) throw Error("DBF EOF Marker missing " + (n.l - 1) + " of " + n.length + " " + n[n.l - 1].toString(16));
                        return t && t.sheetRows && (a = a.slice(0, t.sheetRows)), t.DBF = d, a
                    }(r, a), a);
                    return n["!cols"] = a.DBF.map(function (e) {
                        return {wch: e.len, DBF: e}
                    }), delete a.DBF, n
                }

                var a = {B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0};
                return {
                    to_workbook: function (e, r) {
                        try {
                            return tX(t(e, r), r)
                        } catch (e) {
                            if (r && r.WTF) throw e
                        }
                        return {SheetNames: [], Sheets: {}}
                    }, to_sheet: t, from_sheet: function (e, t) {
                        var n = t || {};
                        if (+n.codepage >= 0 && ea(+n.codepage), "string" == n.type) throw Error("Cannot write DBF to JS string");
                        var s = tD(), i = ih(e, {header: 1, raw: !0, cellDates: !0}), c = i[0], o = i.slice(1),
                            l = e["!cols"] || [], f = 0, h = 0, u = 0, d = 1;
                        for (f = 0; f < c.length; ++f) {
                            if (((l[f] || {}).DBF || {}).name) {
                                c[f] = l[f].DBF.name, ++u;
                                continue
                            }
                            if (null != c[f]) {
                                if (++u, "number" == typeof c[f] && (c[f] = c[f].toString(10)), "string" != typeof c[f]) throw Error("DBF Invalid column name " + c[f] + " |" + typeof c[f] + "|");
                                if (c.indexOf(c[f]) !== f) {
                                    for (h = 0; h < 1024; ++h) if (-1 == c.indexOf(c[f] + "_" + h)) {
                                        c[f] += "_" + h;
                                        break
                                    }
                                }
                            }
                        }
                        var p = tY(e["!ref"]), g = [], m = [], v = [];
                        for (f = 0; f <= p.e.c - p.s.c; ++f) {
                            var b = "", T = "", E = 0, w = [];
                            for (h = 0; h < o.length; ++h) null != o[h][f] && w.push(o[h][f]);
                            if (0 == w.length || null == c[f]) {
                                g[f] = "?";
                                continue
                            }
                            for (h = 0; h < w.length; ++h) {
                                switch (typeof w[h]) {
                                    case"number":
                                        T = "B";
                                        break;
                                    case"string":
                                    default:
                                        T = "C";
                                        break;
                                    case"boolean":
                                        T = "L";
                                        break;
                                    case"object":
                                        T = w[h] instanceof Date ? "D" : "C"
                                }
                                E = Math.max(E, String(w[h]).length), b = b && b != T ? "C" : T
                            }
                            E > 250 && (E = 250), "C" == (T = ((l[f] || {}).DBF || {}).type) && l[f].DBF.len > E && (E = l[f].DBF.len), "B" == b && "N" == T && (b = "N", v[f] = l[f].DBF.dec, E = l[f].DBF.len), m[f] = "C" == b || "N" == T ? E : a[b] || 0, d += m[f], g[f] = b
                        }
                        var A = s.next(32);
                        for (A.write_shift(4, 318902576), A.write_shift(4, o.length), A.write_shift(2, 296 + 32 * u), A.write_shift(2, d), f = 0; f < 4; ++f) A.write_shift(4, 0);
                        for (A.write_shift(4, 0 | (+r[Q] || 3) << 8), f = 0, h = 0; f < c.length; ++f) if (null != c[f]) {
                            var S = s.next(32), k = (c[f].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
                            S.write_shift(1, k, "sbcs"), S.write_shift(1, "?" == g[f] ? "C" : g[f], "sbcs"), S.write_shift(4, h), S.write_shift(1, m[f] || a[g[f]] || 0), S.write_shift(1, v[f] || 0), S.write_shift(1, 2), S.write_shift(4, 0), S.write_shift(1, 0), S.write_shift(4, 0), S.write_shift(4, 0), h += m[f] || a[g[f]] || 0
                        }
                        var y = s.next(264);
                        for (y.write_shift(4, 13), f = 0; f < 65; ++f) y.write_shift(4, 0);
                        for (f = 0; f < o.length; ++f) {
                            var C = s.next(d);
                            for (C.write_shift(1, 0), h = 0; h < c.length; ++h) if (null != c[h]) switch (g[h]) {
                                case"L":
                                    C.write_shift(1, null == o[f][h] ? 63 : o[f][h] ? 84 : 70);
                                    break;
                                case"B":
                                    C.write_shift(8, o[f][h] || 0, "f");
                                    break;
                                case"N":
                                    var _ = "0";
                                    for ("number" == typeof o[f][h] && (_ = o[f][h].toFixed(v[h] || 0)), u = 0; u < m[h] - _.length; ++u) C.write_shift(1, 32);
                                    C.write_shift(1, _, "sbcs");
                                    break;
                                case"D":
                                    o[f][h] ? (C.write_shift(4, ("0000" + o[f][h].getFullYear()).slice(-4), "sbcs"), C.write_shift(2, ("00" + (o[f][h].getMonth() + 1)).slice(-2), "sbcs"), C.write_shift(2, ("00" + o[f][h].getDate()).slice(-2), "sbcs")) : C.write_shift(8, "00000000", "sbcs");
                                    break;
                                case"C":
                                    var O = String(null != o[f][h] ? o[f][h] : "").slice(0, m[h]);
                                    for (C.write_shift(1, O, "sbcs"), u = 0; u < m[h] - O.length; ++u) C.write_shift(1, 32)
                            }
                        }
                        return s.next(1).write_shift(1, 26), s.end()
                    }
                }
            }(), a3 = function () {
                var e = {
                        AA: "\xc0",
                        BA: "\xc1",
                        CA: "\xc2",
                        DA: 195,
                        HA: "\xc4",
                        JA: 197,
                        AE: "\xc8",
                        BE: "\xc9",
                        CE: "\xca",
                        HE: "\xcb",
                        AI: "\xcc",
                        BI: "\xcd",
                        CI: "\xce",
                        HI: "\xcf",
                        AO: "\xd2",
                        BO: "\xd3",
                        CO: "\xd4",
                        DO: 213,
                        HO: "\xd6",
                        AU: "\xd9",
                        BU: "\xda",
                        CU: "\xdb",
                        HU: "\xdc",
                        Aa: "\xe0",
                        Ba: "\xe1",
                        Ca: "\xe2",
                        Da: 227,
                        Ha: "\xe4",
                        Ja: 229,
                        Ae: "\xe8",
                        Be: "\xe9",
                        Ce: "\xea",
                        He: "\xeb",
                        Ai: "\xec",
                        Bi: "\xed",
                        Ci: "\xee",
                        Hi: "\xef",
                        Ao: "\xf2",
                        Bo: "\xf3",
                        Co: "\xf4",
                        Do: 245,
                        Ho: "\xf6",
                        Au: "\xf9",
                        Bu: "\xfa",
                        Cu: "\xfb",
                        Hu: "\xfc",
                        KC: "\xc7",
                        Kc: "\xe7",
                        q: "\xe6",
                        z: "œ",
                        a: "\xc6",
                        j: "Œ",
                        DN: 209,
                        Dn: 241,
                        Hy: 255,
                        S: 169,
                        c: 170,
                        R: 174,
                        "B ": 180,
                        0: 176,
                        1: 177,
                        2: 178,
                        3: 179,
                        5: 181,
                        6: 182,
                        7: 183,
                        Q: 185,
                        k: 186,
                        b: 208,
                        i: 216,
                        l: 222,
                        s: 240,
                        y: 248,
                        "!": 161,
                        '"': 162,
                        "#": 163,
                        "(": 164,
                        "%": 165,
                        "'": 167,
                        "H ": 168,
                        "+": 171,
                        ";": 187,
                        "<": 188,
                        "=": 189,
                        ">": 190,
                        "?": 191,
                        "{": 223
                    },
                    r = RegExp("\x1bN(" + re(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"),
                    t = function (r, t) {
                        var a = e[t];
                        return "number" == typeof a ? el(a) : a
                    }, a = function (e, r, t) {
                        var a = r.charCodeAt(0) - 32 << 4 | t.charCodeAt(0) - 48;
                        return 59 == a ? e : el(a)
                    };

                function n(e, n) {
                    var s, i = e.split(/[\n\r]+/), c = -1, o = -1, l = 0, f = 0, h = [], u = [], d = null, p = {}, g = [],
                        m = [], v = [], b = 0;
                    for (+n.codepage >= 0 && ea(+n.codepage); l !== i.length; ++l) {
                        b = 0;
                        var T, E = i[l].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t),
                            w = E.replace(/;;/g, "\0").split(";").map(function (e) {
                                return e.replace(/\u0000/g, ";")
                            }), A = w[0];
                        if (E.length > 0) switch (A) {
                            case"ID":
                            case"E":
                            case"B":
                            case"O":
                            case"W":
                                break;
                            case"P":
                                "P" == w[1].charAt(0) && u.push(E.slice(3).replace(/;;/g, ";"));
                                break;
                            case"C":
                                var S = !1, k = !1, y = !1, C = !1, _ = -1, O = -1;
                                for (f = 1; f < w.length; ++f) switch (w[f].charAt(0)) {
                                    case"A":
                                    case"G":
                                        break;
                                    case"X":
                                        o = parseInt(w[f].slice(1)) - 1, k = !0;
                                        break;
                                    case"Y":
                                        for (c = parseInt(w[f].slice(1)) - 1, k || (o = 0), s = h.length; s <= c; ++s) h[s] = [];
                                        break;
                                    case"K":
                                        '"' === (T = w[f].slice(1)).charAt(0) ? T = T.slice(1, T.length - 1) : "TRUE" === T ? T = !0 : "FALSE" === T ? T = !1 : isNaN(rg(T)) ? isNaN(rv(T).getDate()) || (T = rh(T)) : (T = rg(T), null !== d && e1(d) && (T = rc(T))), void 0 !== Y && "string" == typeof T && "string" != (n || {}).type && (n || {}).codepage && (T = Y.utils.decode(n.codepage, T)), S = !0;
                                        break;
                                    case"E":
                                        C = !0;
                                        var R = nH(w[f].slice(1), {r: c, c: o});
                                        h[c][o] = [h[c][o], R];
                                        break;
                                    case"S":
                                        y = !0, h[c][o] = [h[c][o], "S5S"];
                                        break;
                                    case"R":
                                        _ = parseInt(w[f].slice(1)) - 1;
                                        break;
                                    case"C":
                                        O = parseInt(w[f].slice(1)) - 1;
                                        break;
                                    default:
                                        if (n && n.WTF) throw Error("SYLK bad record " + E)
                                }
                                if (S && (h[c][o] && 2 == h[c][o].length ? h[c][o][0] = T : h[c][o] = T, d = null), y) {
                                    if (C) throw Error("SYLK shared formula cannot have own formula");
                                    var I = _ > -1 && h[_][O];
                                    if (!I || !I[1]) throw Error("SYLK shared formula cannot find base");
                                    h[c][o][1] = nz(I[1], {r: c - _, c: o - O})
                                }
                                break;
                            case"F":
                                var x = 0;
                                for (f = 1; f < w.length; ++f) switch (w[f].charAt(0)) {
                                    case"X":
                                        o = parseInt(w[f].slice(1)) - 1, ++x;
                                        break;
                                    case"Y":
                                        for (c = parseInt(w[f].slice(1)) - 1, s = h.length; s <= c; ++s) h[s] = [];
                                        break;
                                    case"M":
                                        b = parseInt(w[f].slice(1)) / 20;
                                        break;
                                    case"F":
                                    case"G":
                                    case"S":
                                    case"D":
                                    case"N":
                                        break;
                                    case"P":
                                        d = u[parseInt(w[f].slice(1))];
                                        break;
                                    case"W":
                                        for (s = parseInt((v = w[f].slice(1).split(" "))[0], 10); s <= parseInt(v[1], 10); ++s) b = parseInt(v[2], 10), m[s - 1] = 0 === b ? {hidden: !0} : {wch: b}, nk(m[s - 1]);
                                        break;
                                    case"C":
                                        m[o = parseInt(w[f].slice(1)) - 1] || (m[o] = {});
                                        break;
                                    case"R":
                                        g[c = parseInt(w[f].slice(1)) - 1] || (g[c] = {}), b > 0 ? (g[c].hpt = b, g[c].hpx = ny(b)) : 0 === b && (g[c].hidden = !0);
                                        break;
                                    default:
                                        if (n && n.WTF) throw Error("SYLK bad record " + E)
                                }
                                x < 1 && (d = null);
                                break;
                            default:
                                if (n && n.WTF) throw Error("SYLK bad record " + E)
                        }
                    }
                    return g.length > 0 && (p["!rows"] = g), m.length > 0 && (p["!cols"] = m), n && n.sheetRows && (h = h.slice(0, n.sheetRows)), [h, p]
                }

                function s(e, r) {
                    var t = function (e, r) {
                        switch (r.type) {
                            case"base64":
                                return n(eu(e), r);
                            case"binary":
                                return n(e, r);
                            case"buffer":
                                return n(ed && X.isBuffer(e) ? e.toString("binary") : eb(e), r);
                            case"array":
                                return n(ru(e), r)
                        }
                        throw Error("Unrecognized type " + r.type)
                    }(e, r), a = t[0], s = t[1], i = tZ(a, r);
                    return re(s).forEach(function (e) {
                        i[e] = s[e]
                    }), i
                }

                return e["|"] = 254, {
                    to_workbook: function (e, r) {
                        return tX(s(e, r), r)
                    }, to_sheet: s, from_sheet: function (e, r) {
                        var t, a = ["ID;PWXL;N;E"], n = [], s = tY(e["!ref"]), i = Array.isArray(e);
                        a.push("P;PGeneral"), a.push("F;P0;DG0G8;M255"), e["!cols"] && function (e, r) {
                            r.forEach(function (r, t) {
                                var a = "F;W" + (t + 1) + " " + (t + 1) + " ";
                                r.hidden ? a += "0" : ("number" != typeof r.width || r.wpx || (r.wpx = nT(r.width)), "number" != typeof r.wpx || r.wch || (r.wch = nE(r.wpx)), "number" == typeof r.wch && (a += Math.round(r.wch))), " " != a.charAt(a.length - 1) && e.push(a)
                            })
                        }(a, e["!cols"]), e["!rows"] && function (e, r) {
                            r.forEach(function (r, t) {
                                var a = "F;";
                                r.hidden ? a += "M0;" : r.hpt ? a += "M" + 20 * r.hpt + ";" : r.hpx && (a += "M" + 96 * r.hpx / 96 * 20 + ";"), a.length > 2 && e.push(a + "R" + (t + 1))
                            })
                        }(a, e["!rows"]), a.push("B;Y" + (s.e.r - s.s.r + 1) + ";X" + (s.e.c - s.s.c + 1) + ";D" + [s.s.c, s.s.r, s.e.c, s.e.r].join(" "));
                        for (var c = s.s.r; c <= s.e.r; ++c) for (var o = s.s.c; o <= s.e.c; ++o) {
                            var l = tz({r: c, c: o});
                            (t = i ? (e[c] || [])[o] : e[l]) && (null != t.v || t.f && !t.F) && n.push(function (e, r, t, a) {
                                var n = "C;Y" + (t + 1) + ";X" + (a + 1) + ";K";
                                switch (e.t) {
                                    case"n":
                                        n += e.v || 0, e.f && !e.F && (n += ";E" + nV(e.f, {r: t, c: a}));
                                        break;
                                    case"b":
                                        n += e.v ? "TRUE" : "FALSE";
                                        break;
                                    case"e":
                                        n += e.w || e.v;
                                        break;
                                    case"d":
                                        n += '"' + (e.w || e.v) + '"';
                                        break;
                                    case"s":
                                        n += '"' + e.v.replace(/"/g, "").replace(/;/g, ";;") + '"'
                                }
                                return n
                            }(t, 0, c, o, r))
                        }
                        return a.join("\r\n") + "\r\n" + n.join("\r\n") + "\r\nE\r\n"
                    }
                }
            }(), a5 = function () {
                var e, r;

                function t(e, r) {
                    for (var t = e.split("\n"), a = -1, n = -1, s = 0, i = []; s !== t.length; ++s) {
                        if ("BOT" === t[s].trim()) {
                            i[++a] = [], n = 0;
                            continue
                        }
                        if (!(a < 0)) {
                            for (var c = t[s].trim().split(","), o = c[0], l = c[1], f = t[++s] || ""; 1 & (f.match(/["]/g) || []).length && s < t.length - 1;) f += "\n" + t[++s];
                            switch (f = f.trim(), +o) {
                                case -1:
                                    if ("BOT" === f) {
                                        i[++a] = [], n = 0;
                                        continue
                                    }
                                    if ("EOD" !== f) throw Error("Unrecognized DIF special command " + f);
                                    break;
                                case 0:
                                    "TRUE" === f ? i[a][n] = !0 : "FALSE" === f ? i[a][n] = !1 : isNaN(rg(l)) ? isNaN(rv(l).getDate()) ? i[a][n] = l : i[a][n] = rh(l) : i[a][n] = rg(l), ++n;
                                    break;
                                case 1:
                                    (f = (f = f.slice(1, f.length - 1)).replace(/""/g, '"')) && f.match(/^=".*"$/) && (f = f.slice(2, -1)), i[a][n++] = "" !== f ? f : null
                            }
                            if ("EOD" === f) break
                        }
                    }
                    return r && r.sheetRows && (i = i.slice(0, r.sheetRows)), i
                }

                function a(e, r) {
                    return tZ(function (e, r) {
                        switch (r.type) {
                            case"base64":
                                return t(eu(e), r);
                            case"binary":
                                return t(e, r);
                            case"buffer":
                                return t(ed && X.isBuffer(e) ? e.toString("binary") : eb(e), r);
                            case"array":
                                return t(ru(e), r)
                        }
                        throw Error("Unrecognized type " + r.type)
                    }(e, r), r)
                }

                return {
                    to_workbook: function (e, r) {
                        return tX(a(e, r), r)
                    }, to_sheet: a, from_sheet: (e = function (e, r, t, a, n) {
                        e.push(r), e.push(t + "," + a), e.push('"' + n.replace(/"/g, '""') + '"')
                    }, r = function (e, r, t, a) {
                        e.push(r + "," + t), e.push(1 == r ? '"' + a.replace(/"/g, '""') + '"' : a)
                    }, function (t) {
                        var a, n = [], s = tY(t["!ref"]), i = Array.isArray(t);
                        e(n, "TABLE", 0, 1, "sheetjs"), e(n, "VECTORS", 0, s.e.r - s.s.r + 1, ""), e(n, "TUPLES", 0, s.e.c - s.s.c + 1, ""), e(n, "DATA", 0, 0, "");
                        for (var c = s.s.r; c <= s.e.r; ++c) {
                            r(n, -1, 0, "BOT");
                            for (var o = s.s.c; o <= s.e.c; ++o) {
                                var l = tz({r: c, c: o});
                                if (!(a = i ? (t[c] || [])[o] : t[l])) {
                                    r(n, 1, 0, "");
                                    continue
                                }
                                switch (a.t) {
                                    case"n":
                                        var f = a.w;
                                        f || null == a.v || (f = a.v), null == f ? !a.f || a.F ? r(n, 1, 0, "") : r(n, 1, 0, "=" + a.f) : r(n, 0, f, "V");
                                        break;
                                    case"b":
                                        r(n, 0, a.v ? 1 : 0, a.v ? "TRUE" : "FALSE");
                                        break;
                                    case"s":
                                        r(n, 1, 0, isNaN(a.v) ? a.v : '="' + a.v + '"');
                                        break;
                                    case"d":
                                        a.w || (a.w = e4(a.z || ex[14], ra(rh(a.v)))), r(n, 0, a.w, "V");
                                        break;
                                    default:
                                        r(n, 1, 0, "")
                                }
                            }
                        }
                        return r(n, -1, 0, "EOD"), n.join("\r\n")
                    })
                }
            }(), a6 = function () {
                function e(e) {
                    return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n")
                }

                function r(e, r) {
                    return tZ(function (e, r) {
                        for (var t = e.split("\n"), a = -1, n = -1, s = 0, i = []; s !== t.length; ++s) {
                            var c = t[s].trim().split(":");
                            if ("cell" === c[0]) {
                                var o = tV(c[1]);
                                if (i.length <= o.r) for (a = i.length; a <= o.r; ++a) i[a] || (i[a] = []);
                                switch (a = o.r, n = o.c, c[2]) {
                                    case"t":
                                        i[a][n] = c[3].replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
                                        break;
                                    case"v":
                                        i[a][n] = +c[3];
                                        break;
                                    case"vtf":
                                        var l = c[c.length - 1];
                                    case"vtc":
                                        "nl" === c[3] ? i[a][n] = !!+c[4] : i[a][n] = +c[4], "vtf" == c[2] && (i[a][n] = [i[a][n], l])
                                }
                            }
                        }
                        return r && r.sheetRows && (i = i.slice(0, r.sheetRows)), i
                    }(e, r), r)
                }

                var t = "--SocialCalcSpreadsheetControlSave\nContent-type: text/plain; charset=UTF-8\n";
                return {
                    to_workbook: function (e, t) {
                        return tX(r(e, t), t)
                    }, to_sheet: r, from_sheet: function (r) {
                        return ["socialcalc:version:1.5\nMIME-Version: 1.0\nContent-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave", t, "# SocialCalc Spreadsheet Control Save\npart:sheet", t, function (r) {
                            if (!r || !r["!ref"]) return "";
                            for (var t, a = [], n = [], s = "", i = tG(r["!ref"]), c = Array.isArray(r), o = i.s.r; o <= i.e.r; ++o) for (var l = i.s.c; l <= i.e.c; ++l) if (s = tz({
                                r: o,
                                c: l
                            }), (t = c ? (r[o] || [])[l] : r[s]) && null != t.v && "z" !== t.t) {
                                switch (n = ["cell", s, "t"], t.t) {
                                    case"s":
                                    case"str":
                                        n.push(e(t.v));
                                        break;
                                    case"n":
                                        t.f ? (n[2] = "vtf", n[3] = "n", n[4] = t.v, n[5] = e(t.f)) : (n[2] = "v", n[3] = t.v);
                                        break;
                                    case"b":
                                        n[2] = "vt" + (t.f ? "f" : "c"), n[3] = "nl", n[4] = t.v ? "1" : "0", n[5] = e(t.f || (t.v ? "TRUE" : "FALSE"));
                                        break;
                                    case"d":
                                        var f = ra(rh(t.v));
                                        n[2] = "vtc", n[3] = "nd", n[4] = "" + f, n[5] = t.w || e4(t.z || ex[14], f);
                                        break;
                                    case"e":
                                        continue
                                }
                                a.push(n.join(":"))
                            }
                            return a.push("sheet:c:" + (i.e.c - i.s.c + 1) + ":r:" + (i.e.r - i.s.r + 1) + ":tvf:1"), a.push("valueformat:1:text-wiki"), a.join("\n")
                        }(r), "--SocialCalcSpreadsheetControlSave--"].join("\n")
                    }
                }
            }(), a8 = function () {
                function e(e, r, t, a, n) {
                    n.raw ? r[t][a] = e : "" === e || ("TRUE" === e ? r[t][a] = !0 : "FALSE" === e ? r[t][a] = !1 : isNaN(rg(e)) ? isNaN(rv(e).getDate()) ? r[t][a] = e : r[t][a] = rh(e) : r[t][a] = rg(e))
                }

                var r = {44: ",", 9: "	", 59: ";", 124: "|"}, t = {44: 3, 9: 2, 59: 1, 124: 0};

                function a(e) {
                    for (var a = {}, n = !1, s = 0, i = 0; s < e.length; ++s) 34 == (i = e.charCodeAt(s)) ? n = !n : !n && i in r && (a[i] = (a[i] || 0) + 1);
                    for (s in i = [], a) Object.prototype.hasOwnProperty.call(a, s) && i.push([a[s], s]);
                    if (!i.length) for (s in a = t) Object.prototype.hasOwnProperty.call(a, s) && i.push([a[s], s]);
                    return i.sort(function (e, r) {
                        return e[0] - r[0] || t[e[1]] - t[r[1]]
                    }), r[i.pop()[1]] || 44
                }

                function n(r, t) {
                    var n, s = "", i = "string" == t.type ? [0, 0, 0, 0] : ic(r, t);
                    switch (t.type) {
                        case"base64":
                            s = eu(r);
                            break;
                        case"binary":
                        case"string":
                            s = r;
                            break;
                        case"buffer":
                            s = 65001 == t.codepage ? r.toString("utf8") : t.codepage && void 0 !== Y ? Y.utils.decode(t.codepage, r) : ed && X.isBuffer(r) ? r.toString("binary") : eb(r);
                            break;
                        case"array":
                            s = ru(r);
                            break;
                        default:
                            throw Error("Unrecognized type " + t.type)
                    }
                    return (239 == i[0] && 187 == i[1] && 191 == i[2] ? s = rK(s.slice(3)) : "string" != t.type && "buffer" != t.type && 65001 == t.codepage ? s = rK(s) : "binary" == t.type && void 0 !== Y && t.codepage && (s = Y.utils.decode(t.codepage, Y.utils.encode(28591, s))), "socialcalc:version:" == s.slice(0, 19)) ? a6.to_sheet("string" == t.type ? s : rK(s), t) : (n = s, !(t && t.PRN) || t.FS || "sep=" == n.slice(0, 4) || n.indexOf("	") >= 0 || n.indexOf(",") >= 0 || n.indexOf(";") >= 0 ? function (e, r) {
                        var t, n = r || {}, s = "", i = n.dense ? [] : {}, c = {s: {c: 0, r: 0}, e: {c: 0, r: 0}};
                        "sep=" == e.slice(0, 4) ? 13 == e.charCodeAt(5) && 10 == e.charCodeAt(6) ? (s = e.charAt(4), e = e.slice(7)) : 13 == e.charCodeAt(5) || 10 == e.charCodeAt(5) ? (s = e.charAt(4), e = e.slice(6)) : s = a(e.slice(0, 1024)) : s = n && n.FS ? n.FS : a(e.slice(0, 1024));
                        var o = 0, l = 0, f = 0, h = 0, u = 0, d = s.charCodeAt(0), p = !1, g = 0, m = e.charCodeAt(0);
                        e = e.replace(/\r\n/mg, "\n");
                        var v = null != n.dateNF ? RegExp("^" + ("number" == typeof (t = n.dateNF) ? ex[t] : t).replace(e8, "(\\d+)") + "$") : null;

                        function b() {
                            var r = e.slice(h, u), t = {};
                            if ('"' == r.charAt(0) && '"' == r.charAt(r.length - 1) && (r = r.slice(1, -1).replace(/""/g, '"')), 0 === r.length) t.t = "z"; else if (n.raw) t.t = "s", t.v = r; else if (0 === r.trim().length) t.t = "s", t.v = r; else if (61 == r.charCodeAt(0)) 34 == r.charCodeAt(1) && 34 == r.charCodeAt(r.length - 1) ? (t.t = "s", t.v = r.slice(2, -1).replace(/""/g, '"')) : 1 != r.length ? (t.t = "n", t.f = r.slice(1)) : (t.t = "s", t.v = r); else if ("TRUE" == r) t.t = "b", t.v = !0; else if ("FALSE" == r) t.t = "b", t.v = !1; else if (isNaN(f = rg(r))) {
                                if (!isNaN(rv(r).getDate()) || v && r.match(v)) {
                                    t.z = n.dateNF || ex[14];
                                    var a, s, p, b, T, E, w, A, S, k, y = 0;
                                    v && r.match(v) && (a = n.dateNF, s = r.match(v) || [], p = -1, b = -1, T = -1, E = -1, w = -1, A = -1, (a.match(e8) || []).forEach(function (e, r) {
                                        var t = parseInt(s[r + 1], 10);
                                        switch (e.toLowerCase().charAt(0)) {
                                            case"y":
                                                p = t;
                                                break;
                                            case"d":
                                                T = t;
                                                break;
                                            case"h":
                                                E = t;
                                                break;
                                            case"s":
                                                A = t;
                                                break;
                                            case"m":
                                                E >= 0 ? w = t : b = t
                                        }
                                    }), A >= 0 && -1 == w && b >= 0 && (w = b, b = -1), 7 == (S = ("" + (p >= 0 ? p : new Date().getFullYear())).slice(-4) + "-" + ("00" + (b >= 1 ? b : 1)).slice(-2) + "-" + ("00" + (T >= 1 ? T : 1)).slice(-2)).length && (S = "0" + S), 8 == S.length && (S = "20" + S), k = ("00" + (E >= 0 ? E : 0)).slice(-2) + ":" + ("00" + (w >= 0 ? w : 0)).slice(-2) + ":" + ("00" + (A >= 0 ? A : 0)).slice(-2), r = -1 == E && -1 == w && -1 == A ? S : -1 == p && -1 == b && -1 == T ? k : S + "T" + k, y = 1), n.cellDates ? (t.t = "d", t.v = rh(r, y)) : (t.t = "n", t.v = ra(rh(r, y))), !1 !== n.cellText && (t.w = e4(t.z, t.v instanceof Date ? ra(t.v) : t.v)), n.cellNF || delete t.z
                                } else t.t = "s", t.v = r
                            } else t.t = "n", !1 !== n.cellText && (t.w = r), t.v = f;
                            if ("z" == t.t || (n.dense ? (i[o] || (i[o] = []), i[o][l] = t) : i[tz({
                                c: l,
                                r: o
                            })] = t), h = u + 1, m = e.charCodeAt(h), c.e.c < l && (c.e.c = l), c.e.r < o && (c.e.r = o), g == d) ++l; else if (l = 0, ++o, n.sheetRows && n.sheetRows <= o) return !0
                        }

                        e:for (; u < e.length; ++u) switch (g = e.charCodeAt(u)) {
                            case 34:
                                34 === m && (p = !p);
                                break;
                            case d:
                            case 10:
                            case 13:
                                if (!p && b()) break e
                        }
                        return u - h > 0 && b(), i["!ref"] = t$(c), i
                    }(n, t) : tZ(function (r, t) {
                        var a = t || {}, n = [];
                        if (!r || 0 === r.length) return n;
                        for (var s = r.split(/[\r\n]/), i = s.length - 1; i >= 0 && 0 === s[i].length;) --i;
                        for (var c = 10, o = 0, l = 0; l <= i; ++l) -1 == (o = s[l].indexOf(" ")) ? o = s[l].length : o++, c = Math.max(c, o);
                        for (l = 0; l <= i; ++l) {
                            n[l] = [];
                            var f = 0;
                            for (e(s[l].slice(0, c).trim(), n, l, f, a), f = 1; f <= (s[l].length - c) / 10 + 1; ++f) e(s[l].slice(c + (f - 1) * 10, c + 10 * f).trim(), n, l, f, a)
                        }
                        return a.sheetRows && (n = n.slice(0, a.sheetRows)), n
                    }(n, t), t))
                }

                return {
                    to_workbook: function (e, r) {
                        return tX(n(e, r), r)
                    }, to_sheet: n, from_sheet: function (e) {
                        for (var r, t = [], a = tY(e["!ref"]), n = Array.isArray(e), s = a.s.r; s <= a.e.r; ++s) {
                            for (var i = [], c = a.s.c; c <= a.e.c; ++c) {
                                var o = tz({r: s, c: c});
                                if (!(r = n ? (e[s] || [])[c] : e[o]) || null == r.v) {
                                    i.push("          ");
                                    continue
                                }
                                for (var l = (r.w || (tK(r), r.w) || "").slice(0, 10); l.length < 10;) l += " ";
                                i.push(l + (0 === c ? " " : ""))
                            }
                            t.push(i.join(""))
                        }
                        return t.join("\n")
                    }
                }
            }(), a7 = function () {
                function e(e, r, t) {
                    if (e) {
                        tR(e, e.l || 0);
                        for (var a = t.Enum || h; e.l < e.length;) {
                            var n = e.read_shift(2), s = a[n] || a[65535], i = e.read_shift(2), c = e.l + i,
                                o = s.f && s.f(e, i, t);
                            if (e.l = c, r(o, s, n)) return
                        }
                    }
                }

                function r(r, t) {
                    if (!r) return r;
                    var a = t || {}, n = a.dense ? [] : {}, s = "Sheet1", i = "", c = 0, o = {}, l = [], f = [],
                        d = {s: {r: 0, c: 0}, e: {r: 0, c: 0}}, p = a.sheetRows || 0;
                    if (0 == r[2] && (8 == r[3] || 9 == r[3]) && r.length >= 16 && 5 == r[14] && 108 === r[15]) throw Error("Unsupported Works 3 for Mac file");
                    if (2 == r[2]) a.Enum = h, e(r, function (e, r, t) {
                        switch (t) {
                            case 0:
                                a.vers = e, e >= 4096 && (a.qpro = !0);
                                break;
                            case 6:
                                d = e;
                                break;
                            case 204:
                                e && (i = e);
                                break;
                            case 222:
                                i = e;
                                break;
                            case 15:
                            case 51:
                                a.qpro || (e[1].v = e[1].v.slice(1));
                            case 13:
                            case 14:
                            case 16:
                                14 == t && (112 & e[2]) == 112 && (15 & e[2]) > 1 && (15 & e[2]) < 15 && (e[1].z = a.dateNF || ex[14], a.cellDates && (e[1].t = "d", e[1].v = rc(e[1].v))), a.qpro && e[3] > c && (n["!ref"] = t$(d), o[s] = n, l.push(s), n = a.dense ? [] : {}, d = {
                                    s: {
                                        r: 0,
                                        c: 0
                                    }, e: {r: 0, c: 0}
                                }, c = e[3], s = i || "Sheet" + (c + 1), i = "");
                                var f = a.dense ? (n[e[0].r] || [])[e[0].c] : n[tz(e[0])];
                                if (f) {
                                    f.t = e[1].t, f.v = e[1].v, null != e[1].z && (f.z = e[1].z), null != e[1].f && (f.f = e[1].f);
                                    break
                                }
                                a.dense ? (n[e[0].r] || (n[e[0].r] = []), n[e[0].r][e[0].c] = e[1]) : n[tz(e[0])] = e[1]
                        }
                    }, a); else if (26 == r[2] || 14 == r[2]) a.Enum = u, 14 == r[2] && (a.qpro = !0, r.l = 0), e(r, function (e, r, t) {
                        switch (t) {
                            case 204:
                                s = e;
                                break;
                            case 22:
                                e[1].v = e[1].v.slice(1);
                            case 23:
                            case 24:
                            case 25:
                            case 37:
                            case 39:
                            case 40:
                                if (e[3] > c && (n["!ref"] = t$(d), o[s] = n, l.push(s), n = a.dense ? [] : {}, d = {
                                    s: {
                                        r: 0,
                                        c: 0
                                    }, e: {r: 0, c: 0}
                                }, s = "Sheet" + ((c = e[3]) + 1)), p > 0 && e[0].r >= p) break;
                                a.dense ? (n[e[0].r] || (n[e[0].r] = []), n[e[0].r][e[0].c] = e[1]) : n[tz(e[0])] = e[1], d.e.c < e[0].c && (d.e.c = e[0].c), d.e.r < e[0].r && (d.e.r = e[0].r);
                                break;
                            case 27:
                                e[14e3] && (f[e[14e3][0]] = e[14e3][1]);
                                break;
                            case 1537:
                                f[e[0]] = e[1], e[0] == c && (s = e[1])
                        }
                    }, a); else throw Error("Unrecognized LOTUS BOF " + r[2]);
                    if (n["!ref"] = t$(d), o[i || s] = n, l.push(i || s), !f.length) return {SheetNames: l, Sheets: o};
                    for (var g = {}, m = [], v = 0; v < f.length; ++v) o[l[v]] ? (m.push(f[v] || l[v]), g[f[v]] = o[f[v]] || o[l[v]]) : (m.push(f[v]), g[f[v]] = {"!ref": "A1"});
                    return {SheetNames: m, Sheets: g}
                }

                function t(e, r, t) {
                    var a = [{c: 0, r: 0}, {t: "n", v: 0}, 0, 0];
                    return t.qpro && 20768 != t.vers ? (a[0].c = e.read_shift(1), a[3] = e.read_shift(1), a[0].r = e.read_shift(2), e.l += 2) : (a[2] = e.read_shift(1), a[0].c = e.read_shift(2), a[0].r = e.read_shift(2)), a
                }

                function a(e, r, a) {
                    var n = e.l + r, s = t(e, r, a);
                    if (s[1].t = "s", 20768 == a.vers) {
                        e.l++;
                        var i = e.read_shift(1);
                        return s[1].v = e.read_shift(i, "utf8"), s
                    }
                    return a.qpro && e.l++, s[1].v = e.read_shift(n - e.l, "cstr"), s
                }

                function n(e, r, t) {
                    var a = 32768 & r;
                    return r &= -32769, r = (a ? e : 0) + (r >= 8192 ? r - 16384 : r), (a ? "" : "$") + (t ? tW(r) : tB(r))
                }

                var s = {
                        51: ["FALSE", 0],
                        52: ["TRUE", 0],
                        70: ["LEN", 1],
                        80: ["SUM", 69],
                        81: ["AVERAGEA", 69],
                        82: ["COUNTA", 69],
                        83: ["MINA", 69],
                        84: ["MAXA", 69],
                        111: ["T", 1]
                    },
                    i = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];

                function c(e) {
                    var r = [{c: 0, r: 0}, {t: "n", v: 0}, 0];
                    return r[0].r = e.read_shift(2), r[3] = e[e.l++], r[0].c = e[e.l++], r
                }

                function o(e, r) {
                    var t = c(e, r), a = e.read_shift(4), n = e.read_shift(4), s = e.read_shift(2);
                    if (65535 == s) return 0 === a && 3221225472 === n ? (t[1].t = "e", t[1].v = 15) : 0 === a && 3489660928 === n ? (t[1].t = "e", t[1].v = 42) : t[1].v = 0, t;
                    var i = 32768 & s;
                    return s = (32767 & s) - 16446, t[1].v = (1 - 2 * i) * (n * Math.pow(2, s + 32) + a * Math.pow(2, s)), t
                }

                function l(e, r) {
                    var t = c(e, r), a = e.read_shift(8, "f");
                    return t[1].v = a, t
                }

                function f(e, r) {
                    return 0 == e[e.l + r - 1] ? e.read_shift(r, "cstr") : ""
                }

                var h = {
                    0: {n: "BOF", f: aO},
                    1: {n: "EOF"},
                    2: {n: "CALCMODE"},
                    3: {n: "CALCORDER"},
                    4: {n: "SPLIT"},
                    5: {n: "SYNC"},
                    6: {
                        n: "RANGE", f: function (e, r, t) {
                            var a = {s: {c: 0, r: 0}, e: {c: 0, r: 0}};
                            return 8 == r && t.qpro ? (a.s.c = e.read_shift(1), e.l++, a.s.r = e.read_shift(2), a.e.c = e.read_shift(1), e.l++, a.e.r = e.read_shift(2)) : (a.s.c = e.read_shift(2), a.s.r = e.read_shift(2), 12 == r && t.qpro && (e.l += 2), a.e.c = e.read_shift(2), a.e.r = e.read_shift(2), 12 == r && t.qpro && (e.l += 2), 65535 == a.s.c && (a.s.c = a.e.c = a.s.r = a.e.r = 0)), a
                        }
                    },
                    7: {n: "WINDOW1"},
                    8: {n: "COLW1"},
                    9: {n: "WINTWO"},
                    10: {n: "COLW2"},
                    11: {n: "NAME"},
                    12: {n: "BLANK"},
                    13: {
                        n: "INTEGER", f: function (e, r, a) {
                            var n = t(e, r, a);
                            return n[1].v = e.read_shift(2, "i"), n
                        }
                    },
                    14: {
                        n: "NUMBER", f: function (e, r, a) {
                            var n = t(e, r, a);
                            return n[1].v = e.read_shift(8, "f"), n
                        }
                    },
                    15: {n: "LABEL", f: a},
                    16: {
                        n: "FORMULA", f: function (e, r, a) {
                            var c = e.l + r, o = t(e, r, a);
                            if (o[1].v = e.read_shift(8, "f"), a.qpro) e.l = c; else {
                                var l = e.read_shift(2);
                                (function (e, r) {
                                    tR(e, 0);
                                    for (var t = [], a = 0, c = "", o = "", l = "", f = ""; e.l < e.length;) {
                                        var h = e[e.l++];
                                        switch (h) {
                                            case 0:
                                                t.push(e.read_shift(8, "f"));
                                                break;
                                            case 1:
                                                o = n(r[0].c, e.read_shift(2), !0), c = n(r[0].r, e.read_shift(2), !1), t.push(o + c);
                                                break;
                                            case 2:
                                                var u = n(r[0].c, e.read_shift(2), !0), d = n(r[0].r, e.read_shift(2), !1);
                                                o = n(r[0].c, e.read_shift(2), !0), c = n(r[0].r, e.read_shift(2), !1), t.push(u + d + ":" + o + c);
                                                break;
                                            case 3:
                                                if (e.l < e.length) {
                                                    console.error("WK1 premature formula end");
                                                    return
                                                }
                                                break;
                                            case 4:
                                                t.push("(" + t.pop() + ")");
                                                break;
                                            case 5:
                                                t.push(e.read_shift(2));
                                                break;
                                            case 6:
                                                for (var p = ""; h = e[e.l++];) p += String.fromCharCode(h);
                                                t.push('"' + p.replace(/"/g, '""') + '"');
                                                break;
                                            case 8:
                                                t.push("-" + t.pop());
                                                break;
                                            case 23:
                                                t.push("+" + t.pop());
                                                break;
                                            case 22:
                                                t.push("NOT(" + t.pop() + ")");
                                                break;
                                            case 20:
                                            case 21:
                                                f = t.pop(), l = t.pop(), t.push(["AND", "OR"][h - 20] + "(" + l + "," + f + ")");
                                                break;
                                            default:
                                                if (h < 32 && i[h]) f = t.pop(), l = t.pop(), t.push(l + i[h] + f); else if (s[h]) {
                                                    if (69 == (a = s[h][1]) && (a = e[e.l++]), a > t.length) {
                                                        console.error("WK1 bad formula parse 0x" + h.toString(16) + ":|" + t.join("|") + "|");
                                                        return
                                                    }
                                                    var g = t.slice(-a);
                                                    t.length -= a, t.push(s[h][0] + "(" + g.join(",") + ")")
                                                } else if (h <= 7) return console.error("WK1 invalid opcode " + h.toString(16)); else if (h <= 24) return console.error("WK1 unsupported op " + h.toString(16)); else if (h <= 30) return console.error("WK1 invalid opcode " + h.toString(16)); else if (h <= 115) return console.error("WK1 unsupported function opcode " + h.toString(16)); else return console.error("WK1 unrecognized opcode " + h.toString(16))
                                        }
                                    }
                                    1 == t.length ? r[1].f = "" + t[0] : console.error("WK1 bad formula parse |" + t.join("|") + "|")
                                })(e.slice(e.l, e.l + l), o), e.l += l
                            }
                            return o
                        }
                    },
                    24: {n: "TABLE"},
                    25: {n: "ORANGE"},
                    26: {n: "PRANGE"},
                    27: {n: "SRANGE"},
                    28: {n: "FRANGE"},
                    29: {n: "KRANGE1"},
                    32: {n: "HRANGE"},
                    35: {n: "KRANGE2"},
                    36: {n: "PROTEC"},
                    37: {n: "FOOTER"},
                    38: {n: "HEADER"},
                    39: {n: "SETUP"},
                    40: {n: "MARGINS"},
                    41: {n: "LABELFMT"},
                    42: {n: "TITLES"},
                    43: {n: "SHEETJS"},
                    45: {n: "GRAPH"},
                    46: {n: "NGRAPH"},
                    47: {n: "CALCCOUNT"},
                    48: {n: "UNFORMATTED"},
                    49: {n: "CURSORW12"},
                    50: {n: "WINDOW"},
                    51: {n: "STRING", f: a},
                    55: {n: "PASSWORD"},
                    56: {n: "LOCKED"},
                    60: {n: "QUERY"},
                    61: {n: "QUERYNAME"},
                    62: {n: "PRINT"},
                    63: {n: "PRINTNAME"},
                    64: {n: "GRAPH2"},
                    65: {n: "GRAPHNAME"},
                    66: {n: "ZOOM"},
                    67: {n: "SYMSPLIT"},
                    68: {n: "NSROWS"},
                    69: {n: "NSCOLS"},
                    70: {n: "RULER"},
                    71: {n: "NNAME"},
                    72: {n: "ACOMM"},
                    73: {n: "AMACRO"},
                    74: {n: "PARSE"},
                    102: {n: "PRANGES??"},
                    103: {n: "RRANGES??"},
                    104: {n: "FNAME??"},
                    105: {n: "MRANGES??"},
                    204: {n: "SHEETNAMECS", f: f},
                    222: {
                        n: "SHEETNAMELP", f: function (e, r) {
                            var t = e[e.l++];
                            t > r - 1 && (t = r - 1);
                            for (var a = ""; a.length < t;) a += String.fromCharCode(e[e.l++]);
                            return a
                        }
                    },
                    65535: {n: ""}
                }, u = {
                    0: {n: "BOF"},
                    1: {n: "EOF"},
                    2: {n: "PASSWORD"},
                    3: {n: "CALCSET"},
                    4: {n: "WINDOWSET"},
                    5: {n: "SHEETCELLPTR"},
                    6: {n: "SHEETLAYOUT"},
                    7: {n: "COLUMNWIDTH"},
                    8: {n: "HIDDENCOLUMN"},
                    9: {n: "USERRANGE"},
                    10: {n: "SYSTEMRANGE"},
                    11: {n: "ZEROFORCE"},
                    12: {n: "SORTKEYDIR"},
                    13: {n: "FILESEAL"},
                    14: {n: "DATAFILLNUMS"},
                    15: {n: "PRINTMAIN"},
                    16: {n: "PRINTSTRING"},
                    17: {n: "GRAPHMAIN"},
                    18: {n: "GRAPHSTRING"},
                    19: {n: "??"},
                    20: {n: "ERRCELL"},
                    21: {n: "NACELL"},
                    22: {
                        n: "LABEL16", f: function (e, r) {
                            var t = c(e, r);
                            return t[1].t = "s", t[1].v = e.read_shift(r - 4, "cstr"), t
                        }
                    },
                    23: {n: "NUMBER17", f: o},
                    24: {
                        n: "NUMBER18", f: function (e, r) {
                            var t = c(e, r);
                            t[1].v = e.read_shift(2);
                            var a = t[1].v >> 1;
                            if (1 & t[1].v) switch (7 & a) {
                                case 0:
                                    a = (a >> 3) * 5e3;
                                    break;
                                case 1:
                                    a = (a >> 3) * 500;
                                    break;
                                case 2:
                                    a = (a >> 3) / 20;
                                    break;
                                case 3:
                                    a = (a >> 3) / 200;
                                    break;
                                case 4:
                                    a = (a >> 3) / 2e3;
                                    break;
                                case 5:
                                    a = (a >> 3) / 2e4;
                                    break;
                                case 6:
                                    a = (a >> 3) / 16;
                                    break;
                                case 7:
                                    a = (a >> 3) / 64
                            }
                            return t[1].v = a, t
                        }
                    },
                    25: {
                        n: "FORMULA19", f: function (e, r) {
                            var t = o(e, 14);
                            return e.l += r - 14, t
                        }
                    },
                    26: {n: "FORMULA1A"},
                    27: {
                        n: "XFORMAT", f: function (e, r) {
                            for (var t = {}, a = e.l + r; e.l < a;) {
                                var n = e.read_shift(2);
                                if (14e3 == n) {
                                    for (t[n] = [0, ""], t[n][0] = e.read_shift(2); e[e.l];) t[n][1] += String.fromCharCode(e[e.l]), e.l++;
                                    e.l++
                                }
                            }
                            return t
                        }
                    },
                    28: {n: "DTLABELMISC"},
                    29: {n: "DTLABELCELL"},
                    30: {n: "GRAPHWINDOW"},
                    31: {n: "CPA"},
                    32: {n: "LPLAUTO"},
                    33: {n: "QUERY"},
                    34: {n: "HIDDENSHEET"},
                    35: {n: "??"},
                    37: {
                        n: "NUMBER25", f: function (e, r) {
                            var t = c(e, r), a = e.read_shift(4);
                            return t[1].v = a >> 6, t
                        }
                    },
                    38: {n: "??"},
                    39: {n: "NUMBER27", f: l},
                    40: {
                        n: "FORMULA28", f: function (e, r) {
                            var t = l(e, 14);
                            return e.l += r - 10, t
                        }
                    },
                    142: {n: "??"},
                    147: {n: "??"},
                    150: {n: "??"},
                    151: {n: "??"},
                    152: {n: "??"},
                    153: {n: "??"},
                    154: {n: "??"},
                    155: {n: "??"},
                    156: {n: "??"},
                    163: {n: "??"},
                    174: {n: "??"},
                    175: {n: "??"},
                    176: {n: "??"},
                    177: {n: "??"},
                    184: {n: "??"},
                    185: {n: "??"},
                    186: {n: "??"},
                    187: {n: "??"},
                    188: {n: "??"},
                    195: {n: "??"},
                    201: {n: "??"},
                    204: {n: "SHEETNAMECS", f: f},
                    205: {n: "??"},
                    206: {n: "??"},
                    207: {n: "??"},
                    208: {n: "??"},
                    256: {n: "??"},
                    259: {n: "??"},
                    260: {n: "??"},
                    261: {n: "??"},
                    262: {n: "??"},
                    263: {n: "??"},
                    265: {n: "??"},
                    266: {n: "??"},
                    267: {n: "??"},
                    268: {n: "??"},
                    270: {n: "??"},
                    271: {n: "??"},
                    384: {n: "??"},
                    389: {n: "??"},
                    390: {n: "??"},
                    393: {n: "??"},
                    396: {n: "??"},
                    512: {n: "??"},
                    514: {n: "??"},
                    513: {n: "??"},
                    516: {n: "??"},
                    517: {n: "??"},
                    640: {n: "??"},
                    641: {n: "??"},
                    642: {n: "??"},
                    643: {n: "??"},
                    644: {n: "??"},
                    645: {n: "??"},
                    646: {n: "??"},
                    647: {n: "??"},
                    648: {n: "??"},
                    658: {n: "??"},
                    659: {n: "??"},
                    660: {n: "??"},
                    661: {n: "??"},
                    662: {n: "??"},
                    665: {n: "??"},
                    666: {n: "??"},
                    768: {n: "??"},
                    772: {n: "??"},
                    1537: {
                        n: "SHEETINFOQP", f: function (e, r, t) {
                            if (t.qpro && !(r < 21)) {
                                var a = e.read_shift(1);
                                return e.l += 17, e.l += 1, e.l += 2, [a, e.read_shift(r - 21, "cstr")]
                            }
                        }
                    },
                    1600: {n: "??"},
                    1602: {n: "??"},
                    1793: {n: "??"},
                    1794: {n: "??"},
                    1795: {n: "??"},
                    1796: {n: "??"},
                    1920: {n: "??"},
                    2048: {n: "??"},
                    2049: {n: "??"},
                    2052: {n: "??"},
                    2688: {n: "??"},
                    10998: {n: "??"},
                    12849: {n: "??"},
                    28233: {n: "??"},
                    28484: {n: "??"},
                    65535: {n: ""}
                };
                return {
                    sheet_to_wk1: function (e, r) {
                        var t, a, n = r || {};
                        if (+n.codepage >= 0 && ea(+n.codepage), "string" == n.type) throw Error("Cannot write WK1 to JS string");
                        var s = tD(), i = tY(e["!ref"]), c = Array.isArray(e), o = [];
                        sJ(s, 0, ((t = tx(2)).write_shift(2, 1030), t)), sJ(s, 6, ((a = tx(8)).write_shift(2, i.s.c), a.write_shift(2, i.s.r), a.write_shift(2, i.e.c), a.write_shift(2, i.e.r), a));
                        for (var l = Math.min(i.e.r, 8191), f = i.s.r; f <= l; ++f) for (var h = tB(f), u = i.s.c; u <= i.e.c; ++u) {
                            f === i.s.r && (o[u] = tW(u));
                            var d = o[u] + h, p = c ? (e[f] || [])[u] : e[d];
                            p && "z" != p.t && ("n" == p.t ? (0 | p.v) == p.v && p.v >= -32768 && p.v <= 32767 ? sJ(s, 13, function (e, r, t) {
                                var a = tx(7);
                                return a.write_shift(1, 255), a.write_shift(2, r), a.write_shift(2, e), a.write_shift(2, t, "i"), a
                            }(f, u, p.v)) : sJ(s, 14, function (e, r, t) {
                                var a = tx(13);
                                return a.write_shift(1, 255), a.write_shift(2, r), a.write_shift(2, e), a.write_shift(8, t, "f"), a
                            }(f, u, p.v)) : sJ(s, 15, function (e, r, t) {
                                var a = tx(7 + t.length);
                                a.write_shift(1, 255), a.write_shift(2, r), a.write_shift(2, e), a.write_shift(1, 39);
                                for (var n = 0; n < a.length; ++n) {
                                    var s = t.charCodeAt(n);
                                    a.write_shift(1, s >= 128 ? 95 : s)
                                }
                                return a.write_shift(1, 0), a
                            }(f, u, tK(p).slice(0, 239))))
                        }
                        return sJ(s, 1), s.end()
                    }, book_to_wk3: function (e, r) {
                        var t = r || {};
                        if (+t.codepage >= 0 && ea(+t.codepage), "string" == t.type) throw Error("Cannot write WK3 to JS string");
                        var a = tD();
                        sJ(a, 0, function (e) {
                            var r = tx(26);
                            r.write_shift(2, 4096), r.write_shift(2, 4), r.write_shift(4, 0);
                            for (var t = 0, a = 0, n = 0, s = 0; s < e.SheetNames.length; ++s) {
                                var i = e.SheetNames[s], c = e.Sheets[i];
                                if (c && c["!ref"]) {
                                    ++n;
                                    var o = tG(c["!ref"]);
                                    t < o.e.r && (t = o.e.r), a < o.e.c && (a = o.e.c)
                                }
                            }
                            return t > 8191 && (t = 8191), r.write_shift(2, t), r.write_shift(1, n), r.write_shift(1, a), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 1), r.write_shift(1, 2), r.write_shift(4, 0), r.write_shift(4, 0), r
                        }(e));
                        for (var n = 0, s = 0; n < e.SheetNames.length; ++n) (e.Sheets[e.SheetNames[n]] || {})["!ref"] && sJ(a, 27, function (e, r) {
                            var t = tx(5 + e.length);
                            t.write_shift(2, 14e3), t.write_shift(2, r);
                            for (var a = 0; a < e.length; ++a) {
                                var n = e.charCodeAt(a);
                                t[t.l++] = n > 127 ? 95 : n
                            }
                            return t[t.l++] = 0, t
                        }(e.SheetNames[n], s++));
                        var i = 0;
                        for (n = 0; n < e.SheetNames.length; ++n) {
                            var c = e.Sheets[e.SheetNames[n]];
                            if (c && c["!ref"]) {
                                for (var o = tY(c["!ref"]), l = Array.isArray(c), f = [], h = Math.min(o.e.r, 8191), u = o.s.r; u <= h; ++u) for (var d = tB(u), p = o.s.c; p <= o.e.c; ++p) {
                                    u === o.s.r && (f[p] = tW(p));
                                    var g = f[p] + d, m = l ? (c[u] || [])[p] : c[g];
                                    m && "z" != m.t && ("n" == m.t ? sJ(a, 23, function (e, r, t, a) {
                                        var n = tx(14);
                                        if (n.write_shift(2, e), n.write_shift(1, t), n.write_shift(1, r), 0 == a) return n.write_shift(4, 0), n.write_shift(4, 0), n.write_shift(2, 65535), n;
                                        var s = 0, i = 0, c = 0, o = 0;
                                        return a < 0 && (s = 1, a = -a), i = 0 | Math.log2(a), a /= Math.pow(2, i - 31), (2147483648 & (o = a >>> 0)) == 0 && (a /= 2, ++i, o = a >>> 0), a -= o, o |= 2147483648, o >>>= 0, a *= 4294967296, c = a >>> 0, n.write_shift(4, c), n.write_shift(4, o), i += 16383 + (s ? 32768 : 0), n.write_shift(2, i), n
                                    }(u, p, i, m.v)) : sJ(a, 22, function (e, r, t, a) {
                                        var n = tx(6 + a.length);
                                        n.write_shift(2, e), n.write_shift(1, t), n.write_shift(1, r), n.write_shift(1, 39);
                                        for (var s = 0; s < a.length; ++s) {
                                            var i = a.charCodeAt(s);
                                            n.write_shift(1, i >= 128 ? 95 : i)
                                        }
                                        return n.write_shift(1, 0), n
                                    }(u, p, i, tK(m).slice(0, 239))))
                                }
                                ++i
                            }
                        }
                        return sJ(a, 1), a.end()
                    }, to_workbook: function (e, t) {
                        switch (t.type) {
                            case"base64":
                                return r(ev(eu(e)), t);
                            case"binary":
                                return r(ev(e), t);
                            case"buffer":
                            case"array":
                                return r(e, t)
                        }
                        throw "Unsupported type " + t.type
                    }
                }
            }(), a9 = function () {
                var e = rJ("t"), r = rJ("rPr");

                function t(t) {
                    var a = t.match(e);
                    if (!a) return {t: "s", v: ""};
                    var n = {t: "s", v: rU(a[1])}, s = t.match(r);
                    return s && (n.s = function (e) {
                        var r = {}, t = e.match(rx), a = 0, n = !1;
                        if (t) for (; a != t.length; ++a) {
                            var s = rF(t[a]);
                            switch (s[0].replace(/\w*:/g, "")) {
                                case"<condense":
                                case"<extend":
                                    break;
                                case"<shadow":
                                    if (!s.val) break;
                                case"<shadow>":
                                case"<shadow/>":
                                    r.shadow = 1;
                                    break;
                                case"</shadow>":
                                    break;
                                case"<charset":
                                    if ("1" == s.val) break;
                                    r.cp = er[parseInt(s.val, 10)];
                                    break;
                                case"<outline":
                                    if (!s.val) break;
                                case"<outline>":
                                case"<outline/>":
                                    r.outline = 1;
                                    break;
                                case"</outline>":
                                    break;
                                case"<rFont":
                                    r.name = s.val;
                                    break;
                                case"<sz":
                                    r.sz = s.val;
                                    break;
                                case"<strike":
                                    if (!s.val) break;
                                case"<strike>":
                                case"<strike/>":
                                    r.strike = 1;
                                    break;
                                case"</strike>":
                                    break;
                                case"<u":
                                    if (!s.val) break;
                                    switch (s.val) {
                                        case"double":
                                            r.uval = "double";
                                            break;
                                        case"singleAccounting":
                                            r.uval = "single-accounting";
                                            break;
                                        case"doubleAccounting":
                                            r.uval = "double-accounting"
                                    }
                                case"<u>":
                                case"<u/>":
                                    r.u = 1;
                                    break;
                                case"</u>":
                                    break;
                                case"<b":
                                    if ("0" == s.val) break;
                                case"<b>":
                                case"<b/>":
                                    r.b = 1;
                                    break;
                                case"</b>":
                                    break;
                                case"<i":
                                    if ("0" == s.val) break;
                                case"<i>":
                                case"<i/>":
                                    r.i = 1;
                                    break;
                                case"</i>":
                                case"<color>":
                                case"<color/>":
                                case"</color>":
                                case"<family>":
                                case"<family/>":
                                case"</family>":
                                case"<vertAlign>":
                                case"<vertAlign/>":
                                case"</vertAlign>":
                                case"<scheme":
                                case"<scheme>":
                                case"<scheme/>":
                                case"</scheme>":
                                case"<extLst":
                                case"<extLst>":
                                case"</extLst>":
                                    break;
                                case"<color":
                                    s.rgb && (r.color = s.rgb.slice(2, 8));
                                    break;
                                case"<family":
                                    r.family = s.val;
                                    break;
                                case"<vertAlign":
                                    r.valign = s.val;
                                    break;
                                case"<ext":
                                    n = !0;
                                    break;
                                case"</ext>":
                                    n = !1;
                                    break;
                                default:
                                    if (47 !== s[0].charCodeAt(1) && !n) throw Error("Unrecognized rich format " + s[0])
                            }
                        }
                        return r
                    }(s[1])), n
                }

                var a = /<(?:\w+:)?r>/g, n = /<\/(?:\w+:)?r>/;
                return function (e) {
                    return e.replace(a, "").split(n).map(t).filter(function (e) {
                        return e.v
                    })
                }
            }(), ne = function () {
                var e = /(\r\n|\n)/g;

                function r(r) {
                    var t, a, n, s, i, c = [[], r.v, []];
                    return r.v ? (r.s && (t = r.s, a = c[0], n = c[2], s = [], t.u && s.push("text-decoration: underline;"), t.uval && s.push("text-underline-style:" + t.uval + ";"), t.sz && s.push("font-size:" + t.sz + "pt;"), t.outline && s.push("text-effect: outline;"), t.shadow && s.push("text-shadow: auto;"), a.push('<span style="' + s.join("") + '">'), t.b && (a.push("<b>"), n.push("</b>")), t.i && (a.push("<i>"), n.push("</i>")), t.strike && (a.push("<s>"), n.push("</s>")), "superscript" == (i = t.valign || "") || "super" == i ? i = "sup" : "subscript" == i && (i = "sub"), "" != i && (a.push("<" + i + ">"), n.push("</" + i + ">")), n.push("</span>")), c[0].join("") + c[1].replace(e, "<br/>") + c[2].join("")) : ""
                }

                return function (e) {
                    return e.map(r).join("")
                }
            }(), nr = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, nt = /<(?:\w+:)?r>/,
            na = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;

        function nn(e, r) {
            var t = !r || r.cellHTML, a = {};
            return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = rU(rK(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), a.r = rK(e), t && (a.h = rW(a.t))) : e.match(nt) && (a.r = rK(e), a.t = rU(rK((e.replace(na, "").match(nr) || []).join("").replace(rx, ""))), t && (a.h = ne(a9(a.r)))), a) : {t: ""}
        }

        var ns = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, ni = /<(?:\w+:)?(?:si|sstItem)>/g,
            nc = /<\/(?:\w+:)?(?:si|sstItem)>/;

        function no(e) {
            if (void 0 !== Y) return Y.utils.encode(Q, e);
            for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
            return r
        }

        function nl(e, r) {
            var t = {};
            return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t
        }

        function nf(e, r) {
            var t = e.l + r, a = {};
            a.Flags = 63 & e.read_shift(4), e.l += 4, a.AlgID = e.read_shift(4);
            var n = !1;
            switch (a.AlgID) {
                case 26126:
                case 26127:
                case 26128:
                    n = 36 == a.Flags;
                    break;
                case 26625:
                    n = 4 == a.Flags;
                    break;
                case 0:
                    n = 16 == a.Flags || 4 == a.Flags || 36 == a.Flags;
                    break;
                default:
                    throw "Unrecognized encryption algorithm: " + a.AlgID
            }
            if (!n) throw Error("Encryption Flags/AlgID mismatch");
            return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(t - e.l >> 1, "utf16le"), e.l = t, a
        }

        function nh(e, r) {
            var t = {}, a = e.l + r;
            return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t
        }

        var nu = (O = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], R = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], I = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], x = function (e, r) {
            var t;
            return ((t = e ^ r) / 2 | 128 * t) & 255
        }, N = function (e) {
            for (var r = R[e.length - 1], t = 104, a = e.length - 1; a >= 0; --a) for (var n = e[a], s = 0; 7 != s; ++s) 64 & n && (r ^= I[t]), n *= 2, --t;
            return r
        }, function (e) {
            for (var r, t, a, n = no(e), s = N(n), i = n.length, c = eg(16), o = 0; 16 != o; ++o) c[o] = 0;
            for ((1 & i) == 1 && (r = s >> 8, c[i] = x(187, r), --i, r = 255 & s, t = n[n.length - 1], c[i] = x(t, r)); i > 0;) --i, r = s >> 8, c[i] = x(n[i], r), --i, r = 255 & s, c[i] = x(n[i], r);
            for (i = 15, a = 15 - n.length; a > 0;) r = s >> 8, c[i] = x(O[a], r), --i, --a, r = 255 & s, c[i] = x(n[i], r), --i, --a;
            return c
        }), nd = function (e, r, t, a, n) {
            var s, i;
            for (n || (n = r), a || (a = nu(e)), s = 0; s != r.length; ++s) i = ((i = r[s] ^ a[t]) >> 5 | i << 3) & 255, n[s] = i, ++t;
            return [n, t, a]
        }, np = function (e) {
            var r = 0, t = nu(e);
            return function (e) {
                var a = nd("", e, r, t);
                return r = a[1], a[0]
            }
        }, ng = function () {
            function e(e, t) {
                switch (t.type) {
                    case"base64":
                        return r(eu(e), t);
                    case"binary":
                        return r(e, t);
                    case"buffer":
                        return r(ed && X.isBuffer(e) ? e.toString("binary") : eb(e), t);
                    case"array":
                        return r(ru(e), t)
                }
                throw Error("Unrecognized type " + t.type)
            }

            function r(e, r) {
                var t = (r || {}).dense ? [] : {}, a = e.match(/\\trowd.*?\\row\b/g);
                if (!a.length) throw Error("RTF missing table");
                var n = {s: {c: 0, r: 0}, e: {c: 0, r: a.length - 1}};
                return a.forEach(function (e, r) {
                    Array.isArray(t) && (t[r] = []);
                    for (var a, s = /\\\w+\b/g, i = 0, c = -1; a = s.exec(e);) {
                        if ("\\cell" === a[0]) {
                            var o = e.slice(i, s.lastIndex - a[0].length);
                            if (" " == o[0] && (o = o.slice(1)), ++c, o.length) {
                                var l = {v: o, t: "s"};
                                Array.isArray(t) ? t[r][c] = l : t[tz({r: r, c: c})] = l
                            }
                        }
                        i = s.lastIndex
                    }
                    c > n.e.c && (n.e.c = c)
                }), t["!ref"] = t$(n), t
            }

            return {
                to_workbook: function (r, t) {
                    return tX(e(r, t), t)
                }, to_sheet: e, from_sheet: function (e) {
                    for (var r, t = ["{\\rtf1\\ansi"], a = tY(e["!ref"]), n = Array.isArray(e), s = a.s.r; s <= a.e.r; ++s) {
                        t.push("\\trowd\\trautofit1");
                        for (var i = a.s.c; i <= a.e.c; ++i) t.push("\\cellx" + (i + 1));
                        for (t.push("\\pard\\intbl"), i = a.s.c; i <= a.e.c; ++i) {
                            var c = tz({r: s, c: i});
                            (r = n ? (e[s] || [])[i] : e[c]) && (null != r.v || r.f && !r.F) && (t.push(" " + (r.w || (tK(r), r.w))), t.push("\\cell"))
                        }
                        t.push("\\pard\\intbl\\row")
                    }
                    return t.join("") + "}"
                }
            }
        }();

        function nm(e) {
            for (var r = 0, t = 1; 3 != r; ++r) t = 256 * t + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
            return t.toString(16).toUpperCase().slice(1)
        }

        function nv(e, r) {
            if (0 === r) return e;
            var t, a = function (e) {
                var r = e[0] / 255, t = e[1] / 255, a = e[2] / 255, n = Math.max(r, t, a), s = Math.min(r, t, a),
                    i = n - s;
                if (0 === i) return [0, 0, r];
                var c = 0, o = 0, l = n + s;
                switch (o = i / (l > 1 ? 2 - l : l), n) {
                    case r:
                        c = ((t - a) / i + 6) % 6;
                        break;
                    case t:
                        c = (a - r) / i + 2;
                        break;
                    case a:
                        c = (r - t) / i + 4
                }
                return [c / 6, o, l / 2]
            }([parseInt((t = e.slice("#" === e[0] ? 1 : 0).slice(0, 6)).slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)]);
            return r < 0 ? a[2] = a[2] * (1 + r) : a[2] = 1 - (1 - a[2]) * (1 - r), nm(function (e) {
                var r, t = e[0], a = e[1], n = e[2], s = 2 * a * (n < .5 ? n : 1 - n), i = n - s / 2, c = [i, i, i],
                    o = 6 * t;
                if (0 !== a) switch (0 | o) {
                    case 0:
                    case 6:
                        r = s * o, c[0] += s, c[1] += r;
                        break;
                    case 1:
                        r = s * (2 - o), c[0] += r, c[1] += s;
                        break;
                    case 2:
                        r = s * (o - 2), c[1] += s, c[2] += r;
                        break;
                    case 3:
                        r = s * (4 - o), c[1] += r, c[2] += s;
                        break;
                    case 4:
                        r = s * (o - 4), c[2] += s, c[0] += r;
                        break;
                    case 5:
                        r = s * (6 - o), c[2] += r, c[0] += s
                }
                for (var l = 0; 3 != l; ++l) c[l] = Math.round(255 * c[l]);
                return c
            }(a))
        }

        var nb = 6;

        function nT(e) {
            return Math.floor((e + Math.round(128 / nb) / 256) * nb)
        }

        function nE(e) {
            return Math.floor((e - 5) / nb * 100 + .5) / 100
        }

        function nw(e) {
            return Math.round((e * nb + 5) / nb * 256) / 256
        }

        function nA(e) {
            return nw(nE(nT(e)))
        }

        function nS(e) {
            var r = Math.abs(e - nA(e)), t = nb;
            if (r > .005) for (nb = 1; nb < 15; ++nb) Math.abs(e - nA(e)) <= r && (r = Math.abs(e - nA(e)), t = nb);
            nb = t
        }

        function nk(e) {
            e.width ? (e.wpx = nT(e.width), e.wch = nE(e.wpx), e.MDW = nb) : e.wpx ? (e.wch = nE(e.wpx), e.width = nw(e.wch), e.MDW = nb) : "number" == typeof e.wch && (e.width = nw(e.wch), e.wpx = nT(e.width), e.MDW = nb), e.customWidth && delete e.customWidth
        }

        function ny(e) {
            return 96 * e / 96
        }

        var nC = {
                None: "none",
                Solid: "solid",
                Gray50: "mediumGray",
                Gray75: "darkGray",
                Gray25: "lightGray",
                HorzStripe: "darkHorizontal",
                VertStripe: "darkVertical",
                ReverseDiagStripe: "darkDown",
                DiagStripe: "darkUp",
                DiagCross: "darkGrid",
                ThickDiagCross: "darkTrellis",
                ThinHorzStripe: "lightHorizontal",
                ThinVertStripe: "lightVertical",
                ThinReverseDiagStripe: "lightDown",
                ThinHorzCross: "lightGrid"
            }, n_ = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
            nO = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"],
            nR = (D = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, F = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, P = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, L = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, M = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/, function (e, r, t) {
                var a, n = {};
                return e && ((a = (e = e.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "")).match(D)) && function (e, r, t) {
                    r.NumberFmt = [];
                    for (var a = re(ex), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = ex[a[n]];
                    var s = e[0].match(rx);
                    if (s) for (n = 0; n < s.length; ++n) {
                        var i = rF(s[n]);
                        switch (rP(i[0])) {
                            case"<numFmts":
                            case"</numFmts>":
                            case"<numFmts/>":
                            case"<numFmts>":
                            case"</numFmt>":
                                break;
                            case"<numFmt":
                                var c = rU(rK(i.formatCode)), o = parseInt(i.numFmtId, 10);
                                if (r.NumberFmt[o] = c, o > 0) {
                                    if (o > 392) {
                                        for (o = 392; o > 60 && null != r.NumberFmt[o]; --o) ;
                                        r.NumberFmt[o] = c
                                    }
                                    e3(c, o)
                                }
                                break;
                            default:
                                if (t.WTF) throw Error("unrecognized " + i[0] + " in numFmts")
                        }
                    }
                }(a, n, t), (a = e.match(L)) && function (e, r, t, a) {
                    r.Fonts = [];
                    var n = {}, s = !1;
                    (e[0].match(rx) || []).forEach(function (e) {
                        var i = rF(e);
                        switch (rP(i[0])) {
                            case"<fonts":
                            case"<fonts>":
                            case"</fonts>":
                            case"<font":
                            case"<font>":
                            case"<name/>":
                            case"</name>":
                            case"<sz/>":
                            case"</sz>":
                            case"<vertAlign/>":
                            case"</vertAlign>":
                            case"<family/>":
                            case"</family>":
                            case"<scheme/>":
                            case"</scheme>":
                            case"<color/>":
                            case"</color>":
                            case"<extLst":
                            case"<extLst>":
                            case"</extLst>":
                                break;
                            case"</font>":
                            case"<font/>":
                                r.Fonts.push(n), n = {};
                                break;
                            case"<name":
                                i.val && (n.name = rK(i.val));
                                break;
                            case"<b":
                                n.bold = i.val ? rz(i.val) : 1;
                                break;
                            case"<b/>":
                                n.bold = 1;
                                break;
                            case"<i":
                                n.italic = i.val ? rz(i.val) : 1;
                                break;
                            case"<i/>":
                                n.italic = 1;
                                break;
                            case"<u":
                                switch (i.val) {
                                    case"none":
                                        n.underline = 0;
                                        break;
                                    case"single":
                                        n.underline = 1;
                                        break;
                                    case"double":
                                        n.underline = 2;
                                        break;
                                    case"singleAccounting":
                                        n.underline = 33;
                                        break;
                                    case"doubleAccounting":
                                        n.underline = 34
                                }
                                break;
                            case"<u/>":
                                n.underline = 1;
                                break;
                            case"<strike":
                                n.strike = i.val ? rz(i.val) : 1;
                                break;
                            case"<strike/>":
                                n.strike = 1;
                                break;
                            case"<outline":
                                n.outline = i.val ? rz(i.val) : 1;
                                break;
                            case"<outline/>":
                                n.outline = 1;
                                break;
                            case"<shadow":
                                n.shadow = i.val ? rz(i.val) : 1;
                                break;
                            case"<shadow/>":
                                n.shadow = 1;
                                break;
                            case"<condense":
                                n.condense = i.val ? rz(i.val) : 1;
                                break;
                            case"<condense/>":
                                n.condense = 1;
                                break;
                            case"<extend":
                                n.extend = i.val ? rz(i.val) : 1;
                                break;
                            case"<extend/>":
                                n.extend = 1;
                                break;
                            case"<sz":
                                i.val && (n.sz = +i.val);
                                break;
                            case"<vertAlign":
                                i.val && (n.vertAlign = i.val);
                                break;
                            case"<family":
                                i.val && (n.family = parseInt(i.val, 10));
                                break;
                            case"<scheme":
                                i.val && (n.scheme = i.val);
                                break;
                            case"<charset":
                                if ("1" == i.val) break;
                                i.codepage = er[parseInt(i.val, 10)];
                                break;
                            case"<color":
                                if (n.color || (n.color = {}), i.auto && (n.color.auto = rz(i.auto)), i.rgb) n.color.rgb = i.rgb.slice(-6); else if (i.indexed) {
                                    n.color.index = parseInt(i.indexed, 10);
                                    var c = at[n.color.index];
                                    81 == n.color.index && (c = at[1]), c || (c = at[1]), n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16)
                                } else i.theme && (n.color.theme = parseInt(i.theme, 10), i.tint && (n.color.tint = parseFloat(i.tint)), i.theme && t.themeElements && t.themeElements.clrScheme && (n.color.rgb = nv(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
                                break;
                            case"<AlternateContent":
                            case"<ext":
                                s = !0;
                                break;
                            case"</AlternateContent>":
                            case"</ext>":
                                s = !1;
                                break;
                            default:
                                if (a && a.WTF && !s) throw Error("unrecognized " + i[0] + " in fonts")
                        }
                    })
                }(a, n, r, t), (a = e.match(P)) && function (e, r, t, a) {
                    r.Fills = [];
                    var n = {}, s = !1;
                    (e[0].match(rx) || []).forEach(function (e) {
                        var t = rF(e);
                        switch (rP(t[0])) {
                            case"<fills":
                            case"<fills>":
                            case"</fills>":
                            case"</fill>":
                            case"<gradientFill>":
                            case"<patternFill/>":
                            case"</patternFill>":
                            case"<bgColor/>":
                            case"</bgColor>":
                            case"<fgColor/>":
                            case"</fgColor>":
                            case"<stop":
                            case"<stop/>":
                            case"</stop>":
                            case"<color":
                            case"<color/>":
                            case"</color>":
                            case"<extLst":
                            case"<extLst>":
                            case"</extLst>":
                                break;
                            case"<fill>":
                            case"<fill":
                            case"<fill/>":
                                n = {}, r.Fills.push(n);
                                break;
                            case"<gradientFill":
                            case"</gradientFill>":
                                r.Fills.push(n), n = {};
                                break;
                            case"<patternFill":
                            case"<patternFill>":
                                t.patternType && (n.patternType = t.patternType);
                                break;
                            case"<bgColor":
                                n.bgColor || (n.bgColor = {}), t.indexed && (n.bgColor.indexed = parseInt(t.indexed, 10)), t.theme && (n.bgColor.theme = parseInt(t.theme, 10)), t.tint && (n.bgColor.tint = parseFloat(t.tint)), t.rgb && (n.bgColor.rgb = t.rgb.slice(-6));
                                break;
                            case"<fgColor":
                                n.fgColor || (n.fgColor = {}), t.theme && (n.fgColor.theme = parseInt(t.theme, 10)), t.tint && (n.fgColor.tint = parseFloat(t.tint)), null != t.rgb && (n.fgColor.rgb = t.rgb.slice(-6));
                                break;
                            case"<ext":
                                s = !0;
                                break;
                            case"</ext>":
                                s = !1;
                                break;
                            default:
                                if (a && a.WTF && !s) throw Error("unrecognized " + t[0] + " in fills")
                        }
                    })
                }(a, n, 0, t), (a = e.match(M)) && function (e, r, t, a) {
                    r.Borders = [];
                    var n = {}, s = !1;
                    (e[0].match(rx) || []).forEach(function (e) {
                        var t = rF(e);
                        switch (rP(t[0])) {
                            case"<borders":
                            case"<borders>":
                            case"</borders>":
                            case"</border>":
                            case"<left/>":
                            case"<left":
                            case"<left>":
                            case"</left>":
                            case"<right/>":
                            case"<right":
                            case"<right>":
                            case"</right>":
                            case"<top/>":
                            case"<top":
                            case"<top>":
                            case"</top>":
                            case"<bottom/>":
                            case"<bottom":
                            case"<bottom>":
                            case"</bottom>":
                            case"<diagonal":
                            case"<diagonal>":
                            case"<diagonal/>":
                            case"</diagonal>":
                            case"<horizontal":
                            case"<horizontal>":
                            case"<horizontal/>":
                            case"</horizontal>":
                            case"<vertical":
                            case"<vertical>":
                            case"<vertical/>":
                            case"</vertical>":
                            case"<start":
                            case"<start>":
                            case"<start/>":
                            case"</start>":
                            case"<end":
                            case"<end>":
                            case"<end/>":
                            case"</end>":
                            case"<color":
                            case"<color>":
                            case"<color/>":
                            case"</color>":
                            case"<extLst":
                            case"<extLst>":
                            case"</extLst>":
                                break;
                            case"<border":
                            case"<border>":
                            case"<border/>":
                                n = {}, t.diagonalUp && (n.diagonalUp = rz(t.diagonalUp)), t.diagonalDown && (n.diagonalDown = rz(t.diagonalDown)), r.Borders.push(n);
                                break;
                            case"<ext":
                                s = !0;
                                break;
                            case"</ext>":
                                s = !1;
                                break;
                            default:
                                if (a && a.WTF && !s) throw Error("unrecognized " + t[0] + " in borders")
                        }
                    })
                }(a, n, 0, t), (a = e.match(F)) && function (e, r, t) {
                    r.CellXf = [];
                    var a, n = !1;
                    (e[0].match(rx) || []).forEach(function (e) {
                        var s = rF(e), i = 0;
                        switch (rP(s[0])) {
                            case"<cellXfs":
                            case"<cellXfs>":
                            case"<cellXfs/>":
                            case"</cellXfs>":
                            case"</xf>":
                            case"</alignment>":
                            case"<protection":
                            case"</protection>":
                            case"<protection/>":
                            case"<extLst":
                            case"<extLst>":
                            case"</extLst>":
                                break;
                            case"<xf":
                            case"<xf/>":
                                for (a = s, delete a[0], i = 0; i < n_.length; ++i) a[n_[i]] && (a[n_[i]] = parseInt(a[n_[i]], 10));
                                for (i = 0; i < nO.length; ++i) a[nO[i]] && (a[nO[i]] = rz(a[nO[i]]));
                                if (r.NumberFmt && a.numFmtId > 392) {
                                    for (i = 392; i > 60; --i) if (r.NumberFmt[a.numFmtId] == r.NumberFmt[i]) {
                                        a.numFmtId = i;
                                        break
                                    }
                                }
                                r.CellXf.push(a);
                                break;
                            case"<alignment":
                            case"<alignment/>":
                                var c = {};
                                s.vertical && (c.vertical = s.vertical), s.horizontal && (c.horizontal = s.horizontal), null != s.textRotation && (c.textRotation = s.textRotation), s.indent && (c.indent = s.indent), s.wrapText && (c.wrapText = rz(s.wrapText)), a.alignment = c;
                                break;
                            case"<AlternateContent":
                            case"<ext":
                                n = !0;
                                break;
                            case"</AlternateContent>":
                            case"</ext>":
                                n = !1;
                                break;
                            default:
                                if (t && t.WTF && !n) throw Error("unrecognized " + s[0] + " in cellXfs")
                        }
                    })
                }(a, n, t)), n
            }),
            nI = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];

        function nx(e, r, t) {
            r.themeElements.clrScheme = [];
            var a = {};
            (e[0].match(rx) || []).forEach(function (e) {
                var n = rF(e);
                switch (n[0]) {
                    case"<a:clrScheme":
                    case"</a:clrScheme>":
                        break;
                    case"<a:srgbClr":
                        a.rgb = n.val;
                        break;
                    case"<a:sysClr":
                        a.rgb = n.lastClr;
                        break;
                    case"<a:dk1>":
                    case"</a:dk1>":
                    case"<a:lt1>":
                    case"</a:lt1>":
                    case"<a:dk2>":
                    case"</a:dk2>":
                    case"<a:lt2>":
                    case"</a:lt2>":
                    case"<a:accent1>":
                    case"</a:accent1>":
                    case"<a:accent2>":
                    case"</a:accent2>":
                    case"<a:accent3>":
                    case"</a:accent3>":
                    case"<a:accent4>":
                    case"</a:accent4>":
                    case"<a:accent5>":
                    case"</a:accent5>":
                    case"<a:accent6>":
                    case"</a:accent6>":
                    case"<a:hlink>":
                    case"</a:hlink>":
                    case"<a:folHlink>":
                    case"</a:folHlink>":
                        "/" === n[0].charAt(1) ? (r.themeElements.clrScheme[nI.indexOf(n[0])] = a, a = {}) : a.name = n[0].slice(3, n[0].length - 1);
                        break;
                    default:
                        if (t && t.WTF) throw Error("Unrecognized " + n[0] + " in clrScheme")
                }
            })
        }

        function nN() {
        }

        function nD() {
        }

        var nF = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, nP = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
            nL = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/,
            nM = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;

        function nU(e, r) {
            e && 0 !== e.length || ((n = [rO])[n.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', n[n.length] = "<a:themeElements>", n[n.length] = '<a:clrScheme name="Office">', n[n.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', n[n.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', n[n.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', n[n.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', n[n.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', n[n.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', n[n.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', n[n.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', n[n.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', n[n.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', n[n.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', n[n.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', n[n.length] = "</a:clrScheme>", n[n.length] = '<a:fontScheme name="Office">', n[n.length] = "<a:majorFont>", n[n.length] = '<a:latin typeface="Cambria"/>', n[n.length] = '<a:ea typeface=""/>', n[n.length] = '<a:cs typeface=""/>', n[n.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', n[n.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', n[n.length] = '<a:font script="Hans" typeface="宋体"/>', n[n.length] = '<a:font script="Hant" typeface="新細明體"/>', n[n.length] = '<a:font script="Arab" typeface="Times New Roman"/>', n[n.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', n[n.length] = '<a:font script="Thai" typeface="Tahoma"/>', n[n.length] = '<a:font script="Ethi" typeface="Nyala"/>', n[n.length] = '<a:font script="Beng" typeface="Vrinda"/>', n[n.length] = '<a:font script="Gujr" typeface="Shruti"/>', n[n.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', n[n.length] = '<a:font script="Knda" typeface="Tunga"/>', n[n.length] = '<a:font script="Guru" typeface="Raavi"/>', n[n.length] = '<a:font script="Cans" typeface="Euphemia"/>', n[n.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', n[n.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', n[n.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', n[n.length] = '<a:font script="Thaa" typeface="MV Boli"/>', n[n.length] = '<a:font script="Deva" typeface="Mangal"/>', n[n.length] = '<a:font script="Telu" typeface="Gautami"/>', n[n.length] = '<a:font script="Taml" typeface="Latha"/>', n[n.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', n[n.length] = '<a:font script="Orya" typeface="Kalinga"/>', n[n.length] = '<a:font script="Mlym" typeface="Kartika"/>', n[n.length] = '<a:font script="Laoo" typeface="DokChampa"/>', n[n.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', n[n.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', n[n.length] = '<a:font script="Viet" typeface="Times New Roman"/>', n[n.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', n[n.length] = '<a:font script="Geor" typeface="Sylfaen"/>', n[n.length] = "</a:majorFont>", n[n.length] = "<a:minorFont>", n[n.length] = '<a:latin typeface="Calibri"/>', n[n.length] = '<a:ea typeface=""/>', n[n.length] = '<a:cs typeface=""/>', n[n.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', n[n.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', n[n.length] = '<a:font script="Hans" typeface="宋体"/>', n[n.length] = '<a:font script="Hant" typeface="新細明體"/>', n[n.length] = '<a:font script="Arab" typeface="Arial"/>', n[n.length] = '<a:font script="Hebr" typeface="Arial"/>', n[n.length] = '<a:font script="Thai" typeface="Tahoma"/>', n[n.length] = '<a:font script="Ethi" typeface="Nyala"/>', n[n.length] = '<a:font script="Beng" typeface="Vrinda"/>', n[n.length] = '<a:font script="Gujr" typeface="Shruti"/>', n[n.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', n[n.length] = '<a:font script="Knda" typeface="Tunga"/>', n[n.length] = '<a:font script="Guru" typeface="Raavi"/>', n[n.length] = '<a:font script="Cans" typeface="Euphemia"/>', n[n.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', n[n.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', n[n.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', n[n.length] = '<a:font script="Thaa" typeface="MV Boli"/>', n[n.length] = '<a:font script="Deva" typeface="Mangal"/>', n[n.length] = '<a:font script="Telu" typeface="Gautami"/>', n[n.length] = '<a:font script="Taml" typeface="Latha"/>', n[n.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', n[n.length] = '<a:font script="Orya" typeface="Kalinga"/>', n[n.length] = '<a:font script="Mlym" typeface="Kartika"/>', n[n.length] = '<a:font script="Laoo" typeface="DokChampa"/>', n[n.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', n[n.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', n[n.length] = '<a:font script="Viet" typeface="Arial"/>', n[n.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', n[n.length] = '<a:font script="Geor" typeface="Sylfaen"/>', n[n.length] = "</a:minorFont>", n[n.length] = "</a:fontScheme>", n[n.length] = '<a:fmtScheme name="Office">', n[n.length] = "<a:fillStyleLst>", n[n.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', n[n.length] = '<a:gradFill rotWithShape="1">', n[n.length] = "<a:gsLst>", n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', n[n.length] = "</a:gsLst>", n[n.length] = '<a:lin ang="16200000" scaled="1"/>', n[n.length] = "</a:gradFill>", n[n.length] = '<a:gradFill rotWithShape="1">', n[n.length] = "<a:gsLst>",n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',n[n.length] = "</a:gsLst>",n[n.length] = '<a:lin ang="16200000" scaled="0"/>',n[n.length] = "</a:gradFill>",n[n.length] = "</a:fillStyleLst>",n[n.length] = "<a:lnStyleLst>",n[n.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',n[n.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',n[n.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',n[n.length] = "</a:lnStyleLst>",n[n.length] = "<a:effectStyleLst>",n[n.length] = "<a:effectStyle>",n[n.length] = "<a:effectLst>",n[n.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',n[n.length] = "</a:effectLst>",n[n.length] = "</a:effectStyle>",n[n.length] = "<a:effectStyle>",n[n.length] = "<a:effectLst>",n[n.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',n[n.length] = "</a:effectLst>",n[n.length] = "</a:effectStyle>",n[n.length] = "<a:effectStyle>",n[n.length] = "<a:effectLst>",n[n.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',n[n.length] = "</a:effectLst>",n[n.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',n[n.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',n[n.length] = "</a:effectStyle>",n[n.length] = "</a:effectStyleLst>",n[n.length] = "<a:bgFillStyleLst>",n[n.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',n[n.length] = '<a:gradFill rotWithShape="1">',n[n.length] = "<a:gsLst>",n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',n[n.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',n[n.length] = "</a:gsLst>",n[n.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',n[n.length] = "</a:gradFill>",n[n.length] = '<a:gradFill rotWithShape="1">',n[n.length] = "<a:gsLst>",n[n.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',n[n.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',n[n.length] = "</a:gsLst>",n[n.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',n[n.length] = "</a:gradFill>",n[n.length] = "</a:bgFillStyleLst>",n[n.length] = "</a:fmtScheme>",n[n.length] = "</a:themeElements>",n[n.length] = "<a:objectDefaults>",n[n.length] = "<a:spDef>",n[n.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',n[n.length] = "</a:spDef>",n[n.length] = "<a:lnDef>",n[n.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',n[n.length] = "</a:lnDef>",n[n.length] = "</a:objectDefaults>",n[n.length] = "<a:extraClrSchemeLst/>",n[n.length] = "</a:theme>",e = n.join(""));
            var t, a, n, s, i, c, o = {};
            if (!(c = e.match(nM))) throw Error("themeElements not found in theme");
            return s = c[0], o.themeElements = {}, [["clrScheme", nF, nx], ["fontScheme", nP, nN], ["fmtScheme", nL, nD]].forEach(function (e) {
                if (!(i = s.match(e[1]))) throw Error(e[0] + " not found in themeElements");
                e[2](i, o, r)
            }), o.raw = e, o
        }

        function nB(e, r, t, a) {
            var n, s = Array.isArray(e);
            r.forEach(function (r) {
                var i = tV(r.ref);
                if (s ? (e[i.r] || (e[i.r] = []), n = e[i.r][i.c]) : n = e[r.ref], !n) {
                    n = {t: "z"}, s ? e[i.r][i.c] = n : e[r.ref] = n;
                    var c = tY(e["!ref"] || "BDWGO1000001:A1");
                    c.s.r > i.r && (c.s.r = i.r), c.e.r < i.r && (c.e.r = i.r), c.s.c > i.c && (c.s.c = i.c), c.e.c < i.c && (c.e.c = i.c);
                    var o = t$(c);
                    o !== e["!ref"] && (e["!ref"] = o)
                }
                n.c || (n.c = []);
                var l = {a: r.author, t: r.t, r: r.r, T: t};
                r.h && (l.h = r.h);
                for (var f = n.c.length - 1; f >= 0; --f) {
                    if (!t && n.c[f].T) return;
                    t && !n.c[f].T && n.c.splice(f, 1)
                }
                if (t && a) {
                    for (f = 0; f < a.length; ++f) if (l.a == a[f].id) {
                        l.a = a[f].name || l.a;
                        break
                    }
                }
                n.c.push(l)
            })
        }

        var nH = function () {
                var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = {r: 0, c: 0};

                function t(e, t, a, n) {
                    var s = !1, i = !1;
                    0 == a.length ? i = !0 : "[" == a.charAt(0) && (i = !0, a = a.slice(1, -1)), 0 == n.length ? s = !0 : "[" == n.charAt(0) && (s = !0, n = n.slice(1, -1));
                    var c = a.length > 0 ? 0 | parseInt(a, 10) : 0, o = n.length > 0 ? 0 | parseInt(n, 10) : 0;
                    return s ? o += r.c : --o, i ? c += r.r : --c, t + (s ? "" : "$") + tW(o) + (i ? "" : "$") + tB(c)
                }

                return function (a, n) {
                    return r = n, a.replace(e, t)
                }
            }(),
            nW = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
            nV = function (e, r) {
                return e.replace(nW, function (e, t, a, n, s, i) {
                    var c = tH(n) - (a ? 0 : r.c), o = tU(i) - (s ? 0 : r.r);
                    return t + "R" + (0 == o ? "" : s ? o + 1 : "[" + o + "]") + "C" + (0 == c ? "" : a ? c + 1 : "[" + c + "]")
                })
            };

        function nz(e, r) {
            return e.replace(nW, function (e, t, a, n, s, i) {
                return t + ("$" == a ? a + n : tW(tH(n) + r.c)) + ("$" == s ? s + i : tB(tU(i) + r.r))
            })
        }

        function nG(e) {
            return e.replace(/_xlfn\./g, "")
        }

        function n$(e) {
            e.l += 1
        }

        function nY(e, r) {
            var t = e.read_shift(1 == r ? 1 : 2);
            return [16383 & t, t >> 14 & 1, t >> 15 & 1]
        }

        function nj(e, r, t) {
            var a = 2;
            if (t) {
                if (t.biff >= 2 && t.biff <= 5) return nK(e, r, t);
                12 == t.biff && (a = 4)
            }
            var n = e.read_shift(a), s = e.read_shift(a), i = nY(e, 2), c = nY(e, 2);
            return {s: {r: n, c: i[0], cRel: i[1], rRel: i[2]}, e: {r: s, c: c[0], cRel: c[1], rRel: c[2]}}
        }

        function nK(e) {
            var r = nY(e, 2), t = nY(e, 2), a = e.read_shift(1), n = e.read_shift(1);
            return {s: {r: r[0], c: a, cRel: r[1], rRel: r[2]}, e: {r: t[0], c: n, cRel: t[1], rRel: t[2]}}
        }

        function nX(e, r, t) {
            if (t && t.biff >= 2 && t.biff <= 5) {
                var a, n;
                return a = nY(e, 2), n = e.read_shift(1), {r: a[0], c: n, cRel: a[1], rRel: a[2]}
            }
            var s = e.read_shift(t && 12 == t.biff ? 4 : 2), i = nY(e, 2);
            return {r: s, c: i[0], cRel: i[1], rRel: i[2]}
        }

        function nJ(e) {
            var r = 1 & e[e.l + 1];
            return e.l += 4, [r, 1]
        }

        function nZ(e) {
            return [e.read_shift(1), e.read_shift(1)]
        }

        function nq(e, r, t) {
            var a;
            return e.l += 2, [{
                r: e.read_shift(2),
                c: 255 & (a = e.read_shift(2)),
                fQuoted: !!(16384 & a),
                cRel: a >> 15,
                rRel: a >> 15
            }]
        }

        function nQ(e) {
            return e.l += 6, []
        }

        function n1(e) {
            return e.l += 2, [aO(e), 1 & e.read_shift(2)]
        }

        var n0 = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"],
            n2 = {
                1: {
                    n: "PtgExp", f: function (e, r, t) {
                        return (e.l++, t && 12 == t.biff) ? [e.read_shift(4, "i"), 0] : [e.read_shift(2), e.read_shift(t && 2 == t.biff ? 1 : 2)]
                    }
                },
                2: {n: "PtgTbl", f: tI},
                3: {n: "PtgAdd", f: n$},
                4: {n: "PtgSub", f: n$},
                5: {n: "PtgMul", f: n$},
                6: {n: "PtgDiv", f: n$},
                7: {n: "PtgPower", f: n$},
                8: {n: "PtgConcat", f: n$},
                9: {n: "PtgLt", f: n$},
                10: {n: "PtgLe", f: n$},
                11: {n: "PtgEq", f: n$},
                12: {n: "PtgGe", f: n$},
                13: {n: "PtgGt", f: n$},
                14: {n: "PtgNe", f: n$},
                15: {n: "PtgIsect", f: n$},
                16: {n: "PtgUnion", f: n$},
                17: {n: "PtgRange", f: n$},
                18: {n: "PtgUplus", f: n$},
                19: {n: "PtgUminus", f: n$},
                20: {n: "PtgPercent", f: n$},
                21: {n: "PtgParen", f: n$},
                22: {n: "PtgMissArg", f: n$},
                23: {
                    n: "PtgStr", f: function (e, r, t) {
                        return e.l++, aI(e, r - 1, t)
                    }
                },
                26: {
                    n: "PtgSheet", f: function (e, r, t) {
                        return e.l += 5, e.l += 2, e.l += 2 == t.biff ? 1 : 4, ["PTGSHEET"]
                    }
                },
                27: {
                    n: "PtgEndSheet", f: function (e, r, t) {
                        return e.l += 2 == t.biff ? 4 : 5, ["PTGENDSHEET"]
                    }
                },
                28: {
                    n: "PtgErr", f: function (e) {
                        return e.l++, aa[e.read_shift(1)]
                    }
                },
                29: {
                    n: "PtgBool", f: function (e) {
                        return e.l++, 0 !== e.read_shift(1)
                    }
                },
                30: {
                    n: "PtgInt", f: function (e) {
                        return e.l++, e.read_shift(2)
                    }
                },
                31: {
                    n: "PtgNum", f: function (e) {
                        return e.l++, t5(e, 8)
                    }
                },
                32: {
                    n: "PtgArray", f: function (e, r, t) {
                        var a = (96 & e[e.l++]) >> 5;
                        return e.l += 2 == t.biff ? 6 : 12 == t.biff ? 14 : 7, [a]
                    }
                },
                33: {
                    n: "PtgFunc", f: function (e, r, t) {
                        var a = (96 & e[e.l]) >> 5;
                        e.l += 1;
                        var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
                        return [si[n], ss[n], a]
                    }
                },
                34: {
                    n: "PtgFuncVar", f: function (e, r, t) {
                        var a = e[e.l++], n = e.read_shift(1),
                            s = t && t.biff <= 3 ? [88 == a ? -1 : 0, e.read_shift(1)] : [e[e.l + 1] >> 7, 32767 & e.read_shift(2)];
                        return [n, (0 === s[0] ? ss : sn)[s[1]]]
                    }
                },
                35: {
                    n: "PtgName", f: function (e, r, t) {
                        var a = e.read_shift(1) >>> 5 & 3, n = !t || t.biff >= 8 ? 4 : 2, s = e.read_shift(n);
                        switch (t.biff) {
                            case 2:
                                e.l += 5;
                                break;
                            case 3:
                            case 4:
                                e.l += 8;
                                break;
                            case 5:
                                e.l += 12
                        }
                        return [a, 0, s]
                    }
                },
                36: {
                    n: "PtgRef", f: function (e, r, t) {
                        var a = (96 & e[e.l]) >> 5;
                        return e.l += 1, [a, nX(e, 0, t)]
                    }
                },
                37: {
                    n: "PtgArea", f: function (e, r, t) {
                        return [(96 & e[e.l++]) >> 5, nj(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t)]
                    }
                },
                38: {
                    n: "PtgMemArea", f: function (e, r, t) {
                        var a = e.read_shift(1) >>> 5 & 3;
                        return e.l += t && 2 == t.biff ? 3 : 4, [a, e.read_shift(t && 2 == t.biff ? 1 : 2)]
                    }
                },
                39: {n: "PtgMemErr", f: tI},
                40: {n: "PtgMemNoMem", f: tI},
                41: {
                    n: "PtgMemFunc", f: function (e, r, t) {
                        return [e.read_shift(1) >>> 5 & 3, e.read_shift(t && 2 == t.biff ? 1 : 2)]
                    }
                },
                42: {
                    n: "PtgRefErr", f: function (e, r, t) {
                        var a = e.read_shift(1) >>> 5 & 3;
                        return e.l += 4, t.biff < 8 && e.l--, 12 == t.biff && (e.l += 2), [a]
                    }
                },
                43: {
                    n: "PtgAreaErr", f: function (e, r, t) {
                        var a = (96 & e[e.l++]) >> 5;
                        return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a]
                    }
                },
                44: {
                    n: "PtgRefN", f: function (e, r, t) {
                        var a = (96 & e[e.l]) >> 5;
                        return e.l += 1, [a, function (e, r, t) {
                            var a, n, s, i, c = t && t.biff ? t.biff : 8;
                            if (c >= 2 && c <= 5) return a = e.read_shift(2), n = e.read_shift(1), s = (32768 & a) >> 15, i = (16384 & a) >> 14, a &= 16383, 1 == s && a >= 8192 && (a -= 16384), 1 == i && n >= 128 && (n -= 256), {
                                r: a,
                                c: n,
                                cRel: i,
                                rRel: s
                            };
                            var o = e.read_shift(c >= 12 ? 4 : 2), l = e.read_shift(2), f = (16384 & l) >> 14,
                                h = (32768 & l) >> 15;
                            if (l &= 16383, 1 == h) for (; o > 524287;) o -= 1048576;
                            if (1 == f) for (; l > 8191;) l -= 16384;
                            return {r: o, c: l, cRel: f, rRel: h}
                        }(e, 0, t)]
                    }
                },
                45: {
                    n: "PtgAreaN", f: function (e, r, t) {
                        return [(96 & e[e.l++]) >> 5, function (e, r, t) {
                            if (t.biff < 8) return nK(e, r, t);
                            var a = e.read_shift(12 == t.biff ? 4 : 2), n = e.read_shift(12 == t.biff ? 4 : 2),
                                s = nY(e, 2), i = nY(e, 2);
                            return {
                                s: {r: a, c: s[0], cRel: s[1], rRel: s[2]},
                                e: {r: n, c: i[0], cRel: i[1], rRel: i[2]}
                            }
                        }(e, r - 1, t)]
                    }
                },
                46: {
                    n: "PtgMemAreaN", f: function (e) {
                        return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
                    }
                },
                47: {
                    n: "PtgMemNoMemN", f: function (e) {
                        return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)]
                    }
                },
                57: {
                    n: "PtgNameX", f: function (e, r, t) {
                        var a, n, s;
                        return 5 == t.biff ? (a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2, "i"), e.l += 8, s = e.read_shift(2), e.l += 12, [a, n, s]) : [e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4)]
                    }
                },
                58: {
                    n: "PtgRef3d", f: function (e, r, t) {
                        var a = (96 & e[e.l]) >> 5;
                        e.l += 1;
                        var n = e.read_shift(2);
                        return t && 5 == t.biff && (e.l += 12), [a, n, nX(e, 0, t)]
                    }
                },
                59: {
                    n: "PtgArea3d", f: function (e, r, t) {
                        var a = (96 & e[e.l++]) >> 5, n = e.read_shift(2, "i"), s = 8;
                        if (t) switch (t.biff) {
                            case 5:
                                e.l += 12, s = 6;
                                break;
                            case 12:
                                s = 12
                        }
                        return [a, n, nj(e, s, t)]
                    }
                },
                60: {
                    n: "PtgRefErr3d", f: function (e, r, t) {
                        var a = (96 & e[e.l++]) >> 5, n = e.read_shift(2), s = 4;
                        if (t) switch (t.biff) {
                            case 5:
                                s = 15;
                                break;
                            case 12:
                                s = 6
                        }
                        return e.l += s, [a, n]
                    }
                },
                61: {
                    n: "PtgAreaErr3d", f: function (e, r, t) {
                        var a = (96 & e[e.l++]) >> 5, n = e.read_shift(2), s = 8;
                        if (t) switch (t.biff) {
                            case 5:
                                e.l += 12, s = 6;
                                break;
                            case 12:
                                s = 12
                        }
                        return e.l += s, [a, n]
                    }
                },
                255: {}
            }, n4 = {
                64: 32,
                96: 32,
                65: 33,
                97: 33,
                66: 34,
                98: 34,
                67: 35,
                99: 35,
                68: 36,
                100: 36,
                69: 37,
                101: 37,
                70: 38,
                102: 38,
                71: 39,
                103: 39,
                72: 40,
                104: 40,
                73: 41,
                105: 41,
                74: 42,
                106: 42,
                75: 43,
                107: 43,
                76: 44,
                108: 44,
                77: 45,
                109: 45,
                78: 46,
                110: 46,
                79: 47,
                111: 47,
                88: 34,
                120: 34,
                89: 57,
                121: 57,
                90: 58,
                122: 58,
                91: 59,
                123: 59,
                92: 60,
                124: 60,
                93: 61,
                125: 61
            }, n3 = {
                1: {n: "PtgElfLel", f: n1},
                2: {n: "PtgElfRw", f: nq},
                3: {n: "PtgElfCol", f: nq},
                6: {n: "PtgElfRwV", f: nq},
                7: {n: "PtgElfColV", f: nq},
                10: {n: "PtgElfRadical", f: nq},
                11: {n: "PtgElfRadicalS", f: nQ},
                13: {n: "PtgElfColS", f: nQ},
                15: {n: "PtgElfColSV", f: nQ},
                16: {n: "PtgElfRadicalLel", f: n1},
                25: {
                    n: "PtgList", f: function (e) {
                        e.l += 2;
                        var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2),
                            s = e.read_shift(2), i = n0[t >> 2 & 31];
                        return {ixti: r, coltype: 3 & t, rt: i, idx: a, c: n, C: s}
                    }
                },
                29: {
                    n: "PtgSxName", f: function (e) {
                        return e.l += 2, [e.read_shift(4)]
                    }
                },
                255: {}
            }, n5 = {
                0: {
                    n: "PtgAttrNoop", f: function (e) {
                        return e.l += 4, [0, 0]
                    }
                },
                1: {
                    n: "PtgAttrSemi", f: function (e, r, t) {
                        var a = 255 & e[e.l + 1] ? 1 : 0;
                        return e.l += t && 2 == t.biff ? 3 : 4, [a]
                    }
                },
                2: {
                    n: "PtgAttrIf", f: function (e, r, t) {
                        var a = 255 & e[e.l + 1] ? 1 : 0;
                        return e.l += 2, [a, e.read_shift(t && 2 == t.biff ? 1 : 2)]
                    }
                },
                4: {
                    n: "PtgAttrChoose", f: function (e, r, t) {
                        e.l += 2;
                        for (var a = e.read_shift(t && 2 == t.biff ? 1 : 2), n = [], s = 0; s <= a; ++s) n.push(e.read_shift(t && 2 == t.biff ? 1 : 2));
                        return n
                    }
                },
                8: {
                    n: "PtgAttrGoto", f: function (e, r, t) {
                        var a = 255 & e[e.l + 1] ? 1 : 0;
                        return e.l += 2, [a, e.read_shift(t && 2 == t.biff ? 1 : 2)]
                    }
                },
                16: {
                    n: "PtgAttrSum", f: function (e, r, t) {
                        e.l += t && 2 == t.biff ? 3 : 4
                    }
                },
                32: {n: "PtgAttrBaxcel", f: nJ},
                33: {n: "PtgAttrBaxcel", f: nJ},
                64: {
                    n: "PtgAttrSpace", f: function (e) {
                        return e.read_shift(2), nZ(e, 2)
                    }
                },
                65: {
                    n: "PtgAttrSpaceSemi", f: function (e) {
                        return e.read_shift(2), nZ(e, 2)
                    }
                },
                128: {
                    n: "PtgAttrIfError", f: function (e) {
                        var r = 255 & e[e.l + 1] ? 1 : 0;
                        return e.l += 2, [r, e.read_shift(2)]
                    }
                },
                255: {}
            };

        function n6(e, r, t, a) {
            if (a.biff < 8) return n = r, void (e.l += n);
            for (var n, s, i = e.l + r, c = [], o = 0; o !== t.length; ++o) switch (t[o][0]) {
                case"PtgArray":
                    t[o][1] = function (e, r, t) {
                        var a = 0, n = 0;
                        12 == t.biff ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, 0 == --n && (n = 256));
                        for (var s = 0, i = []; s != a && (i[s] = []); ++s) for (var c = 0; c != n; ++c) i[s][c] = function (e, r) {
                            var t = [e.read_shift(1)];
                            if (12 == r) switch (t[0]) {
                                case 2:
                                    t[0] = 4;
                                    break;
                                case 4:
                                    t[0] = 16;
                                    break;
                                case 0:
                                    t[0] = 1;
                                    break;
                                case 1:
                                    t[0] = 2
                            }
                            switch (t[0]) {
                                case 4:
                                    t[1] = a_(e, 1) ? "TRUE" : "FALSE", 12 != r && (e.l += 7);
                                    break;
                                case 37:
                                case 16:
                                    t[1] = aa[e[e.l]], e.l += 12 == r ? 4 : 8;
                                    break;
                                case 0:
                                    e.l += 8;
                                    break;
                                case 1:
                                    t[1] = t5(e, 8);
                                    break;
                                case 2:
                                    t[1] = aD(e, 0, {biff: r > 0 && r < 8 ? 2 : r});
                                    break;
                                default:
                                    throw Error("Bad SerAr: " + t[0])
                            }
                            return t
                        }(e, t.biff);
                        return i
                    }(e, 0, a), c.push(t[o][1]);
                    break;
                case"PtgMemArea":
                    t[o][2] = function (e, r, t) {
                        for (var a = e.read_shift(12 == t.biff ? 4 : 2), n = [], s = 0; s != a; ++s) n.push((12 == t.biff ? t3 : aB)(e, 8));
                        return n
                    }(e, t[o][1], a), c.push(t[o][2]);
                    break;
                case"PtgExp":
                    a && 12 == a.biff && (t[o][1][1] = e.read_shift(4), c.push(t[o][1]));
                    break;
                case"PtgList":
                case"PtgElfRadicalS":
                case"PtgElfColS":
                case"PtgElfColSV":
                    throw "Unsupported " + t[o][0]
            }
            return 0 != (r = i - e.l) && c.push((s = r, void (e.l += s))), c
        }

        function n8(e, r, t) {
            for (var a, n, s, i = e.l + r, c = []; i != e.l;) (r = i - e.l, n = n2[s = e[e.l]] || n2[n4[s]], (24 === s || 25 === s) && (n = (24 === s ? n3 : n5)[e[e.l + 1]]), n && n.f) ? c.push([n.n, n.f(e, r, t)]) : (a = r, e.l += a);
            return c
        }

        var n7 = {
            PtgAdd: "+",
            PtgConcat: "&",
            PtgDiv: "/",
            PtgEq: "=",
            PtgGe: ">=",
            PtgGt: ">",
            PtgLe: "<=",
            PtgLt: "<",
            PtgMul: "*",
            PtgNe: "<>",
            PtgPower: "^",
            PtgSub: "-"
        };

        function n9(e, r, t) {
            if (!e) return "SH33TJSERR0";
            if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
            if (!e.XTI) return "SH33TJSERR6";
            var a = e.XTI[r];
            if (t.biff < 8) return r > 1e4 && (r -= 65536), r < 0 && (r = -r), 0 == r ? "" : e.XTI[r - 1];
            if (!a) return "SH33TJSERR1";
            var n = "";
            if (t.biff > 8) switch (e[a[0]][0]) {
                case 357:
                    return n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
                case 358:
                    if (null != t.SID) return e.SheetNames[t.SID];
                    return "SH33TJSSAME" + e[a[0]][0];
                default:
                    return "SH33TJSSRC" + e[a[0]][0]
            }
            switch (e[a[0]][0][0]) {
                case 1025:
                    return n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
                case 14849:
                    return e[a[0]].slice(1).map(function (e) {
                        return e.Name
                    }).join(";;");
                default:
                    if (!e[a[0]][0][3]) return "SH33TJSERR2";
                    return n = -1 == a[1] ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]
            }
        }

        function se(e, r, t) {
            var a = n9(e, r, t);
            return "#REF" == a ? a : function (e, r) {
                if (!e && !(r && r.biff <= 5 && r.biff >= 2)) throw Error("empty sheet name");
                return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e
            }(a, t)
        }

        function sr(e, r, t, a, n) {
            var s, i, c, o, l = n && n.biff || 8, f = {s: {c: 0, r: 0}, e: {c: 0, r: 0}}, h = [], u = 0, d = 0, p = "";
            if (!e[0] || !e[0][0]) return "";
            for (var g = -1, m = "", v = 0, b = e[0].length; v < b; ++v) {
                var T = e[0][v];
                switch (T[0]) {
                    case"PtgUminus":
                        h.push("-" + h.pop());
                        break;
                    case"PtgUplus":
                        h.push("+" + h.pop());
                        break;
                    case"PtgPercent":
                        h.push(h.pop() + "%");
                        break;
                    case"PtgAdd":
                    case"PtgConcat":
                    case"PtgDiv":
                    case"PtgEq":
                    case"PtgGe":
                    case"PtgGt":
                    case"PtgLe":
                    case"PtgLt":
                    case"PtgMul":
                    case"PtgNe":
                    case"PtgPower":
                    case"PtgSub":
                        if (s = h.pop(), i = h.pop(), g >= 0) {
                            switch (e[0][g][1][0]) {
                                case 0:
                                    m = rp(" ", e[0][g][1][1]);
                                    break;
                                case 1:
                                    m = rp("\r", e[0][g][1][1]);
                                    break;
                                default:
                                    if (m = "", n.WTF) throw Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0])
                            }
                            i += m, g = -1
                        }
                        h.push(i + n7[T[0]] + s);
                        break;
                    case"PtgIsect":
                        s = h.pop(), i = h.pop(), h.push(i + " " + s);
                        break;
                    case"PtgUnion":
                        s = h.pop(), i = h.pop(), h.push(i + "," + s);
                        break;
                    case"PtgRange":
                        s = h.pop(), i = h.pop(), h.push(i + ":" + s);
                        break;
                    case"PtgAttrChoose":
                    case"PtgAttrGoto":
                    case"PtgAttrIf":
                    case"PtgAttrIfError":
                    case"PtgAttrBaxcel":
                    case"PtgAttrSemi":
                    case"PtgMemArea":
                    case"PtgTbl":
                    case"PtgMemErr":
                    case"PtgMemAreaN":
                    case"PtgMemNoMemN":
                    case"PtgAttrNoop":
                    case"PtgSheet":
                    case"PtgEndSheet":
                    case"PtgMemFunc":
                    case"PtgMemNoMem":
                        break;
                    case"PtgRef":
                        c = tF(T[1][1], f, n), h.push(tL(c, l));
                        break;
                    case"PtgRefN":
                        c = t ? tF(T[1][1], t, n) : T[1][1], h.push(tL(c, l));
                        break;
                    case"PtgRef3d":
                        u = T[1][1], c = tF(T[1][2], f, n), p = se(a, u, n), h.push(p + "!" + tL(c, l));
                        break;
                    case"PtgFunc":
                    case"PtgFuncVar":
                        var E = T[1][0], w = T[1][1];
                        E || (E = 0);
                        var A = 0 == (E &= 127) ? [] : h.slice(-E);
                        h.length -= E, "User" === w && (w = A.shift()), h.push(w + "(" + A.join(",") + ")");
                        break;
                    case"PtgBool":
                        h.push(T[1] ? "TRUE" : "FALSE");
                        break;
                    case"PtgInt":
                    case"PtgErr":
                        h.push(T[1]);
                        break;
                    case"PtgNum":
                        h.push(String(T[1]));
                        break;
                    case"PtgStr":
                        h.push('"' + T[1].replace(/"/g, '""') + '"');
                        break;
                    case"PtgAreaN":
                        o = tP(T[1][1], t ? {s: t} : f, n), h.push(tM(o, n));
                        break;
                    case"PtgArea":
                        o = tP(T[1][1], f, n), h.push(tM(o, n));
                        break;
                    case"PtgArea3d":
                        u = T[1][1], o = T[1][2], p = se(a, u, n), h.push(p + "!" + tM(o, n));
                        break;
                    case"PtgAttrSum":
                        h.push("SUM(" + h.pop() + ")");
                        break;
                    case"PtgName":
                        d = T[1][2];
                        var S = (a.names || [])[d - 1] || (a[0] || [])[d], k = S ? S.Name : "SH33TJSNAME" + String(d);
                        k && "_xlfn." == k.slice(0, 6) && !n.xlfn && (k = k.slice(6)), h.push(k);
                        break;
                    case"PtgNameX":
                        var y, C = T[1][1];
                        if (d = T[1][2], n.biff <= 5) C < 0 && (C = -C), a[C] && (y = a[C][d]); else {
                            var _ = "";
                            if (14849 == ((a[C] || [])[0] || [])[0] || (1025 == ((a[C] || [])[0] || [])[0] ? a[C][d] && a[C][d].itab > 0 && (_ = a.SheetNames[a[C][d].itab - 1] + "!") : _ = a.SheetNames[d - 1] + "!"), a[C] && a[C][d]) _ += a[C][d].Name; else if (a[0] && a[0][d]) _ += a[0][d].Name; else {
                                var O = (n9(a, C, n) || "").split(";;");
                                O[d - 1] ? _ = O[d - 1] : _ += "SH33TJSERRX"
                            }
                            h.push(_);
                            break
                        }
                        y || (y = {Name: "SH33TJSERRY"}), h.push(y.Name);
                        break;
                    case"PtgParen":
                        var R = "(", I = ")";
                        if (g >= 0) {
                            switch (m = "", e[0][g][1][0]) {
                                case 2:
                                    R = rp(" ", e[0][g][1][1]) + R;
                                    break;
                                case 3:
                                    R = rp("\r", e[0][g][1][1]) + R;
                                    break;
                                case 4:
                                    I = rp(" ", e[0][g][1][1]) + I;
                                    break;
                                case 5:
                                    I = rp("\r", e[0][g][1][1]) + I;
                                    break;
                                default:
                                    if (n.WTF) throw Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0])
                            }
                            g = -1
                        }
                        h.push(R + h.pop() + I);
                        break;
                    case"PtgRefErr":
                    case"PtgRefErr3d":
                    case"PtgAreaErr":
                    case"PtgAreaErr3d":
                        h.push("#REF!");
                        break;
                    case"PtgExp":
                        c = {c: T[1][1], r: T[1][0]};
                        var x = {c: t.c, r: t.r};
                        if (a.sharedf[tz(c)]) {
                            var N = a.sharedf[tz(c)];
                            h.push(sr(N, f, x, a, n))
                        } else {
                            var D = !1;
                            for (s = 0; s != a.arrayf.length; ++s) if (i = a.arrayf[s], !(c.c < i[0].s.c) && !(c.c > i[0].e.c) && !(c.r < i[0].s.r) && !(c.r > i[0].e.r)) {
                                h.push(sr(i[1], f, x, a, n)), D = !0;
                                break
                            }
                            D || h.push(T[1])
                        }
                        break;
                    case"PtgArray":
                        h.push("{" + function (e) {
                            for (var r = [], t = 0; t < e.length; ++t) {
                                for (var a = e[t], n = [], s = 0; s < a.length; ++s) {
                                    var i = a[s];
                                    i ? 2 === i[0] ? n.push('"' + i[1].replace(/"/g, '""') + '"') : n.push(i[1]) : n.push("")
                                }
                                r.push(n.join(","))
                            }
                            return r.join(";")
                        }(T[1]) + "}");
                        break;
                    case"PtgAttrSpace":
                    case"PtgAttrSpaceSemi":
                        g = v;
                        break;
                    case"PtgMissArg":
                        h.push("");
                        break;
                    case"PtgList":
                        h.push("Table" + T[1].idx + "[#" + T[1].rt + "]");
                        break;
                    case"PtgElfCol":
                    case"PtgElfColS":
                    case"PtgElfColSV":
                    case"PtgElfColV":
                    case"PtgElfLel":
                    case"PtgElfRadical":
                    case"PtgElfRadicalLel":
                    case"PtgElfRadicalS":
                    case"PtgElfRw":
                    case"PtgElfRwV":
                        throw Error("Unsupported ELFs");
                    default:
                        throw Error("Unrecognized Formula Token: " + String(T))
                }
                var F = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
                if (3 != n.biff && g >= 0 && -1 == F.indexOf(e[0][v][0])) {
                    T = e[0][g];
                    var P = !0;
                    switch (T[1][0]) {
                        case 4:
                            P = !1;
                        case 0:
                            m = rp(" ", T[1][1]);
                            break;
                        case 5:
                            P = !1;
                        case 1:
                            m = rp("\r", T[1][1]);
                            break;
                        default:
                            if (m = "", n.WTF) throw Error("Unexpected PtgAttrSpaceType " + T[1][0])
                    }
                    h.push((P ? m : "") + h.pop() + (P ? "" : m)), g = -1
                }
            }
            if (h.length > 1 && n.WTF) throw Error("bad formula stack");
            return h[0]
        }

        function st(e, r, t) {
            var a = e.l + r, n = aM(e, 6);
            2 == t.biff && ++e.l;
            var s = function (e) {
                var r;
                if (65535 !== tT(e, e.l + 6)) return [t5(e), "n"];
                switch (e[e.l]) {
                    case 0:
                        return e.l += 8, ["String", "s"];
                    case 1:
                        return r = 1 === e[e.l + 2], e.l += 8, [r, "b"];
                    case 2:
                        return r = e[e.l + 2], e.l += 8, [r, "e"];
                    case 3:
                        return e.l += 8, ["", "s"]
                }
                return []
            }(e, 8), i = e.read_shift(1);
            2 != t.biff && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
            var c = function (e, r, t) {
                var a, n, s = e.l + r, i = 2 == t.biff ? 1 : 2, c = e.read_shift(i);
                if (65535 == c) return [[], (a = r - 2, void (e.l += a))];
                var o = n8(e, c, t);
                return r !== c + i && (n = n6(e, r - c - i, o, t)), e.l = s, [o, n]
            }(e, a - e.l, t);
            return {cell: n, val: s[0], formula: c, shared: i >> 3 & 1, tt: s[1]}
        }

        function sa(e, r, t) {
            var a = e.read_shift(4), n = n8(e, a, t), s = e.read_shift(4), i = s > 0 ? n6(e, s, n, t) : null;
            return [n, i]
        }

        var sn = {
            0: "BEEP",
            1: "OPEN",
            2: "OPEN.LINKS",
            3: "CLOSE.ALL",
            4: "SAVE",
            5: "SAVE.AS",
            6: "FILE.DELETE",
            7: "PAGE.SETUP",
            8: "PRINT",
            9: "PRINTER.SETUP",
            10: "QUIT",
            11: "NEW.WINDOW",
            12: "ARRANGE.ALL",
            13: "WINDOW.SIZE",
            14: "WINDOW.MOVE",
            15: "FULL",
            16: "CLOSE",
            17: "RUN",
            22: "SET.PRINT.AREA",
            23: "SET.PRINT.TITLES",
            24: "SET.PAGE.BREAK",
            25: "REMOVE.PAGE.BREAK",
            26: "FONT",
            27: "DISPLAY",
            28: "PROTECT.DOCUMENT",
            29: "PRECISION",
            30: "A1.R1C1",
            31: "CALCULATE.NOW",
            32: "CALCULATION",
            34: "DATA.FIND",
            35: "EXTRACT",
            36: "DATA.DELETE",
            37: "SET.DATABASE",
            38: "SET.CRITERIA",
            39: "SORT",
            40: "DATA.SERIES",
            41: "TABLE",
            42: "FORMAT.NUMBER",
            43: "ALIGNMENT",
            44: "STYLE",
            45: "BORDER",
            46: "CELL.PROTECTION",
            47: "COLUMN.WIDTH",
            48: "UNDO",
            49: "CUT",
            50: "COPY",
            51: "PASTE",
            52: "CLEAR",
            53: "PASTE.SPECIAL",
            54: "EDIT.DELETE",
            55: "INSERT",
            56: "FILL.RIGHT",
            57: "FILL.DOWN",
            61: "DEFINE.NAME",
            62: "CREATE.NAMES",
            63: "FORMULA.GOTO",
            64: "FORMULA.FIND",
            65: "SELECT.LAST.CELL",
            66: "SHOW.ACTIVE.CELL",
            67: "GALLERY.AREA",
            68: "GALLERY.BAR",
            69: "GALLERY.COLUMN",
            70: "GALLERY.LINE",
            71: "GALLERY.PIE",
            72: "GALLERY.SCATTER",
            73: "COMBINATION",
            74: "PREFERRED",
            75: "ADD.OVERLAY",
            76: "GRIDLINES",
            77: "SET.PREFERRED",
            78: "AXES",
            79: "LEGEND",
            80: "ATTACH.TEXT",
            81: "ADD.ARROW",
            82: "SELECT.CHART",
            83: "SELECT.PLOT.AREA",
            84: "PATTERNS",
            85: "MAIN.CHART",
            86: "OVERLAY",
            87: "SCALE",
            88: "FORMAT.LEGEND",
            89: "FORMAT.TEXT",
            90: "EDIT.REPEAT",
            91: "PARSE",
            92: "JUSTIFY",
            93: "HIDE",
            94: "UNHIDE",
            95: "WORKSPACE",
            96: "FORMULA",
            97: "FORMULA.FILL",
            98: "FORMULA.ARRAY",
            99: "DATA.FIND.NEXT",
            100: "DATA.FIND.PREV",
            101: "FORMULA.FIND.NEXT",
            102: "FORMULA.FIND.PREV",
            103: "ACTIVATE",
            104: "ACTIVATE.NEXT",
            105: "ACTIVATE.PREV",
            106: "UNLOCKED.NEXT",
            107: "UNLOCKED.PREV",
            108: "COPY.PICTURE",
            109: "SELECT",
            110: "DELETE.NAME",
            111: "DELETE.FORMAT",
            112: "VLINE",
            113: "HLINE",
            114: "VPAGE",
            115: "HPAGE",
            116: "VSCROLL",
            117: "HSCROLL",
            118: "ALERT",
            119: "NEW",
            120: "CANCEL.COPY",
            121: "SHOW.CLIPBOARD",
            122: "MESSAGE",
            124: "PASTE.LINK",
            125: "APP.ACTIVATE",
            126: "DELETE.ARROW",
            127: "ROW.HEIGHT",
            128: "FORMAT.MOVE",
            129: "FORMAT.SIZE",
            130: "FORMULA.REPLACE",
            131: "SEND.KEYS",
            132: "SELECT.SPECIAL",
            133: "APPLY.NAMES",
            134: "REPLACE.FONT",
            135: "FREEZE.PANES",
            136: "SHOW.INFO",
            137: "SPLIT",
            138: "ON.WINDOW",
            139: "ON.DATA",
            140: "DISABLE.INPUT",
            142: "OUTLINE",
            143: "LIST.NAMES",
            144: "FILE.CLOSE",
            145: "SAVE.WORKBOOK",
            146: "DATA.FORM",
            147: "COPY.CHART",
            148: "ON.TIME",
            149: "WAIT",
            150: "FORMAT.FONT",
            151: "FILL.UP",
            152: "FILL.LEFT",
            153: "DELETE.OVERLAY",
            155: "SHORT.MENUS",
            159: "SET.UPDATE.STATUS",
            161: "COLOR.PALETTE",
            162: "DELETE.STYLE",
            163: "WINDOW.RESTORE",
            164: "WINDOW.MAXIMIZE",
            166: "CHANGE.LINK",
            167: "CALCULATE.DOCUMENT",
            168: "ON.KEY",
            169: "APP.RESTORE",
            170: "APP.MOVE",
            171: "APP.SIZE",
            172: "APP.MINIMIZE",
            173: "APP.MAXIMIZE",
            174: "BRING.TO.FRONT",
            175: "SEND.TO.BACK",
            185: "MAIN.CHART.TYPE",
            186: "OVERLAY.CHART.TYPE",
            187: "SELECT.END",
            188: "OPEN.MAIL",
            189: "SEND.MAIL",
            190: "STANDARD.FONT",
            191: "CONSOLIDATE",
            192: "SORT.SPECIAL",
            193: "GALLERY.3D.AREA",
            194: "GALLERY.3D.COLUMN",
            195: "GALLERY.3D.LINE",
            196: "GALLERY.3D.PIE",
            197: "VIEW.3D",
            198: "GOAL.SEEK",
            199: "WORKGROUP",
            200: "FILL.GROUP",
            201: "UPDATE.LINK",
            202: "PROMOTE",
            203: "DEMOTE",
            204: "SHOW.DETAIL",
            206: "UNGROUP",
            207: "OBJECT.PROPERTIES",
            208: "SAVE.NEW.OBJECT",
            209: "SHARE",
            210: "SHARE.NAME",
            211: "DUPLICATE",
            212: "APPLY.STYLE",
            213: "ASSIGN.TO.OBJECT",
            214: "OBJECT.PROTECTION",
            215: "HIDE.OBJECT",
            216: "SET.EXTRACT",
            217: "CREATE.PUBLISHER",
            218: "SUBSCRIBE.TO",
            219: "ATTRIBUTES",
            220: "SHOW.TOOLBAR",
            222: "PRINT.PREVIEW",
            223: "EDIT.COLOR",
            224: "SHOW.LEVELS",
            225: "FORMAT.MAIN",
            226: "FORMAT.OVERLAY",
            227: "ON.RECALC",
            228: "EDIT.SERIES",
            229: "DEFINE.STYLE",
            240: "LINE.PRINT",
            243: "ENTER.DATA",
            249: "GALLERY.RADAR",
            250: "MERGE.STYLES",
            251: "EDITION.OPTIONS",
            252: "PASTE.PICTURE",
            253: "PASTE.PICTURE.LINK",
            254: "SPELLING",
            256: "ZOOM",
            259: "INSERT.OBJECT",
            260: "WINDOW.MINIMIZE",
            265: "SOUND.NOTE",
            266: "SOUND.PLAY",
            267: "FORMAT.SHAPE",
            268: "EXTEND.POLYGON",
            269: "FORMAT.AUTO",
            272: "GALLERY.3D.BAR",
            273: "GALLERY.3D.SURFACE",
            274: "FILL.AUTO",
            276: "CUSTOMIZE.TOOLBAR",
            277: "ADD.TOOL",
            278: "EDIT.OBJECT",
            279: "ON.DOUBLECLICK",
            280: "ON.ENTRY",
            281: "WORKBOOK.ADD",
            282: "WORKBOOK.MOVE",
            283: "WORKBOOK.COPY",
            284: "WORKBOOK.OPTIONS",
            285: "SAVE.WORKSPACE",
            288: "CHART.WIZARD",
            289: "DELETE.TOOL",
            290: "MOVE.TOOL",
            291: "WORKBOOK.SELECT",
            292: "WORKBOOK.ACTIVATE",
            293: "ASSIGN.TO.TOOL",
            295: "COPY.TOOL",
            296: "RESET.TOOL",
            297: "CONSTRAIN.NUMERIC",
            298: "PASTE.TOOL",
            302: "WORKBOOK.NEW",
            305: "SCENARIO.CELLS",
            306: "SCENARIO.DELETE",
            307: "SCENARIO.ADD",
            308: "SCENARIO.EDIT",
            309: "SCENARIO.SHOW",
            310: "SCENARIO.SHOW.NEXT",
            311: "SCENARIO.SUMMARY",
            312: "PIVOT.TABLE.WIZARD",
            313: "PIVOT.FIELD.PROPERTIES",
            314: "PIVOT.FIELD",
            315: "PIVOT.ITEM",
            316: "PIVOT.ADD.FIELDS",
            318: "OPTIONS.CALCULATION",
            319: "OPTIONS.EDIT",
            320: "OPTIONS.VIEW",
            321: "ADDIN.MANAGER",
            322: "MENU.EDITOR",
            323: "ATTACH.TOOLBARS",
            324: "VBAActivate",
            325: "OPTIONS.CHART",
            328: "VBA.INSERT.FILE",
            330: "VBA.PROCEDURE.DEFINITION",
            336: "ROUTING.SLIP",
            338: "ROUTE.DOCUMENT",
            339: "MAIL.LOGON",
            342: "INSERT.PICTURE",
            343: "EDIT.TOOL",
            344: "GALLERY.DOUGHNUT",
            350: "CHART.TREND",
            352: "PIVOT.ITEM.PROPERTIES",
            354: "WORKBOOK.INSERT",
            355: "OPTIONS.TRANSITION",
            356: "OPTIONS.GENERAL",
            370: "FILTER.ADVANCED",
            373: "MAIL.ADD.MAILER",
            374: "MAIL.DELETE.MAILER",
            375: "MAIL.REPLY",
            376: "MAIL.REPLY.ALL",
            377: "MAIL.FORWARD",
            378: "MAIL.NEXT.LETTER",
            379: "DATA.LABEL",
            380: "INSERT.TITLE",
            381: "FONT.PROPERTIES",
            382: "MACRO.OPTIONS",
            383: "WORKBOOK.HIDE",
            384: "WORKBOOK.UNHIDE",
            385: "WORKBOOK.DELETE",
            386: "WORKBOOK.NAME",
            388: "GALLERY.CUSTOM",
            390: "ADD.CHART.AUTOFORMAT",
            391: "DELETE.CHART.AUTOFORMAT",
            392: "CHART.ADD.DATA",
            393: "AUTO.OUTLINE",
            394: "TAB.ORDER",
            395: "SHOW.DIALOG",
            396: "SELECT.ALL",
            397: "UNGROUP.SHEETS",
            398: "SUBTOTAL.CREATE",
            399: "SUBTOTAL.REMOVE",
            400: "RENAME.OBJECT",
            412: "WORKBOOK.SCROLL",
            413: "WORKBOOK.NEXT",
            414: "WORKBOOK.PREV",
            415: "WORKBOOK.TAB.SPLIT",
            416: "FULL.SCREEN",
            417: "WORKBOOK.PROTECT",
            420: "SCROLLBAR.PROPERTIES",
            421: "PIVOT.SHOW.PAGES",
            422: "TEXT.TO.COLUMNS",
            423: "FORMAT.CHARTTYPE",
            424: "LINK.FORMAT",
            425: "TRACER.DISPLAY",
            430: "TRACER.NAVIGATE",
            431: "TRACER.CLEAR",
            432: "TRACER.ERROR",
            433: "PIVOT.FIELD.GROUP",
            434: "PIVOT.FIELD.UNGROUP",
            435: "CHECKBOX.PROPERTIES",
            436: "LABEL.PROPERTIES",
            437: "LISTBOX.PROPERTIES",
            438: "EDITBOX.PROPERTIES",
            439: "PIVOT.REFRESH",
            440: "LINK.COMBO",
            441: "OPEN.TEXT",
            442: "HIDE.DIALOG",
            443: "SET.DIALOG.FOCUS",
            444: "ENABLE.OBJECT",
            445: "PUSHBUTTON.PROPERTIES",
            446: "SET.DIALOG.DEFAULT",
            447: "FILTER",
            448: "FILTER.SHOW.ALL",
            449: "CLEAR.OUTLINE",
            450: "FUNCTION.WIZARD",
            451: "ADD.LIST.ITEM",
            452: "SET.LIST.ITEM",
            453: "REMOVE.LIST.ITEM",
            454: "SELECT.LIST.ITEM",
            455: "SET.CONTROL.VALUE",
            456: "SAVE.COPY.AS",
            458: "OPTIONS.LISTS.ADD",
            459: "OPTIONS.LISTS.DELETE",
            460: "SERIES.AXES",
            461: "SERIES.X",
            462: "SERIES.Y",
            463: "ERRORBAR.X",
            464: "ERRORBAR.Y",
            465: "FORMAT.CHART",
            466: "SERIES.ORDER",
            467: "MAIL.LOGOFF",
            468: "CLEAR.ROUTING.SLIP",
            469: "APP.ACTIVATE.MICROSOFT",
            470: "MAIL.EDIT.MAILER",
            471: "ON.SHEET",
            472: "STANDARD.WIDTH",
            473: "SCENARIO.MERGE",
            474: "SUMMARY.INFO",
            475: "FIND.FILE",
            476: "ACTIVE.CELL.FONT",
            477: "ENABLE.TIPWIZARD",
            478: "VBA.MAKE.ADDIN",
            480: "INSERTDATATABLE",
            481: "WORKGROUP.OPTIONS",
            482: "MAIL.SEND.MAILER",
            485: "AUTOCORRECT",
            489: "POST.DOCUMENT",
            491: "PICKLIST",
            493: "VIEW.SHOW",
            494: "VIEW.DEFINE",
            495: "VIEW.DELETE",
            509: "SHEET.BACKGROUND",
            510: "INSERT.MAP.OBJECT",
            511: "OPTIONS.MENONO",
            517: "MSOCHECKS",
            518: "NORMAL",
            519: "LAYOUT",
            520: "RM.PRINT.AREA",
            521: "CLEAR.PRINT.AREA",
            522: "ADD.PRINT.AREA",
            523: "MOVE.BRK",
            545: "HIDECURR.NOTE",
            546: "HIDEALL.NOTES",
            547: "DELETE.NOTE",
            548: "TRAVERSE.NOTES",
            549: "ACTIVATE.NOTES",
            620: "PROTECT.REVISIONS",
            621: "UNPROTECT.REVISIONS",
            647: "OPTIONS.ME",
            653: "WEB.PUBLISH",
            667: "NEWWEBQUERY",
            673: "PIVOT.TABLE.CHART",
            753: "OPTIONS.SAVE",
            755: "OPTIONS.SPELL",
            808: "HIDEALL.INKANNOTS"
        }, ss = {
            0: "COUNT",
            1: "IF",
            2: "ISNA",
            3: "ISERROR",
            4: "SUM",
            5: "AVERAGE",
            6: "MIN",
            7: "MAX",
            8: "ROW",
            9: "COLUMN",
            10: "NA",
            11: "NPV",
            12: "STDEV",
            13: "DOLLAR",
            14: "FIXED",
            15: "SIN",
            16: "COS",
            17: "TAN",
            18: "ATAN",
            19: "PI",
            20: "SQRT",
            21: "EXP",
            22: "LN",
            23: "LOG10",
            24: "ABS",
            25: "INT",
            26: "SIGN",
            27: "ROUND",
            28: "LOOKUP",
            29: "INDEX",
            30: "REPT",
            31: "MID",
            32: "LEN",
            33: "VALUE",
            34: "TRUE",
            35: "FALSE",
            36: "AND",
            37: "OR",
            38: "NOT",
            39: "MOD",
            40: "DCOUNT",
            41: "DSUM",
            42: "DAVERAGE",
            43: "DMIN",
            44: "DMAX",
            45: "DSTDEV",
            46: "VAR",
            47: "DVAR",
            48: "TEXT",
            49: "LINEST",
            50: "TREND",
            51: "LOGEST",
            52: "GROWTH",
            53: "GOTO",
            54: "HALT",
            55: "RETURN",
            56: "PV",
            57: "FV",
            58: "NPER",
            59: "PMT",
            60: "RATE",
            61: "MIRR",
            62: "IRR",
            63: "RAND",
            64: "MATCH",
            65: "DATE",
            66: "TIME",
            67: "DAY",
            68: "MONTH",
            69: "YEAR",
            70: "WEEKDAY",
            71: "HOUR",
            72: "MINUTE",
            73: "SECOND",
            74: "NOW",
            75: "AREAS",
            76: "ROWS",
            77: "COLUMNS",
            78: "OFFSET",
            79: "ABSREF",
            80: "RELREF",
            81: "ARGUMENT",
            82: "SEARCH",
            83: "TRANSPOSE",
            84: "ERROR",
            85: "STEP",
            86: "TYPE",
            87: "ECHO",
            88: "SET.NAME",
            89: "CALLER",
            90: "DEREF",
            91: "WINDOWS",
            92: "SERIES",
            93: "DOCUMENTS",
            94: "ACTIVE.CELL",
            95: "SELECTION",
            96: "RESULT",
            97: "ATAN2",
            98: "ASIN",
            99: "ACOS",
            100: "CHOOSE",
            101: "HLOOKUP",
            102: "VLOOKUP",
            103: "LINKS",
            104: "INPUT",
            105: "ISREF",
            106: "GET.FORMULA",
            107: "GET.NAME",
            108: "SET.VALUE",
            109: "LOG",
            110: "EXEC",
            111: "CHAR",
            112: "LOWER",
            113: "UPPER",
            114: "PROPER",
            115: "LEFT",
            116: "RIGHT",
            117: "EXACT",
            118: "TRIM",
            119: "REPLACE",
            120: "SUBSTITUTE",
            121: "CODE",
            122: "NAMES",
            123: "DIRECTORY",
            124: "FIND",
            125: "CELL",
            126: "ISERR",
            127: "ISTEXT",
            128: "ISNUMBER",
            129: "ISBLANK",
            130: "T",
            131: "N",
            132: "FOPEN",
            133: "FCLOSE",
            134: "FSIZE",
            135: "FREADLN",
            136: "FREAD",
            137: "FWRITELN",
            138: "FWRITE",
            139: "FPOS",
            140: "DATEVALUE",
            141: "TIMEVALUE",
            142: "SLN",
            143: "SYD",
            144: "DDB",
            145: "GET.DEF",
            146: "REFTEXT",
            147: "TEXTREF",
            148: "INDIRECT",
            149: "REGISTER",
            150: "CALL",
            151: "ADD.BAR",
            152: "ADD.MENU",
            153: "ADD.COMMAND",
            154: "ENABLE.COMMAND",
            155: "CHECK.COMMAND",
            156: "RENAME.COMMAND",
            157: "SHOW.BAR",
            158: "DELETE.MENU",
            159: "DELETE.COMMAND",
            160: "GET.CHART.ITEM",
            161: "DIALOG.BOX",
            162: "CLEAN",
            163: "MDETERM",
            164: "MINVERSE",
            165: "MMULT",
            166: "FILES",
            167: "IPMT",
            168: "PPMT",
            169: "COUNTA",
            170: "CANCEL.KEY",
            171: "FOR",
            172: "WHILE",
            173: "BREAK",
            174: "NEXT",
            175: "INITIATE",
            176: "REQUEST",
            177: "POKE",
            178: "EXECUTE",
            179: "TERMINATE",
            180: "RESTART",
            181: "HELP",
            182: "GET.BAR",
            183: "PRODUCT",
            184: "FACT",
            185: "GET.CELL",
            186: "GET.WORKSPACE",
            187: "GET.WINDOW",
            188: "GET.DOCUMENT",
            189: "DPRODUCT",
            190: "ISNONTEXT",
            191: "GET.NOTE",
            192: "NOTE",
            193: "STDEVP",
            194: "VARP",
            195: "DSTDEVP",
            196: "DVARP",
            197: "TRUNC",
            198: "ISLOGICAL",
            199: "DCOUNTA",
            200: "DELETE.BAR",
            201: "UNREGISTER",
            204: "USDOLLAR",
            205: "FINDB",
            206: "SEARCHB",
            207: "REPLACEB",
            208: "LEFTB",
            209: "RIGHTB",
            210: "MIDB",
            211: "LENB",
            212: "ROUNDUP",
            213: "ROUNDDOWN",
            214: "ASC",
            215: "DBCS",
            216: "RANK",
            219: "ADDRESS",
            220: "DAYS360",
            221: "TODAY",
            222: "VDB",
            223: "ELSE",
            224: "ELSE.IF",
            225: "END.IF",
            226: "FOR.CELL",
            227: "MEDIAN",
            228: "SUMPRODUCT",
            229: "SINH",
            230: "COSH",
            231: "TANH",
            232: "ASINH",
            233: "ACOSH",
            234: "ATANH",
            235: "DGET",
            236: "CREATE.OBJECT",
            237: "VOLATILE",
            238: "LAST.ERROR",
            239: "CUSTOM.UNDO",
            240: "CUSTOM.REPEAT",
            241: "FORMULA.CONVERT",
            242: "GET.LINK.INFO",
            243: "TEXT.BOX",
            244: "INFO",
            245: "GROUP",
            246: "GET.OBJECT",
            247: "DB",
            248: "PAUSE",
            251: "RESUME",
            252: "FREQUENCY",
            253: "ADD.TOOLBAR",
            254: "DELETE.TOOLBAR",
            255: "User",
            256: "RESET.TOOLBAR",
            257: "EVALUATE",
            258: "GET.TOOLBAR",
            259: "GET.TOOL",
            260: "SPELLING.CHECK",
            261: "ERROR.TYPE",
            262: "APP.TITLE",
            263: "WINDOW.TITLE",
            264: "SAVE.TOOLBAR",
            265: "ENABLE.TOOL",
            266: "PRESS.TOOL",
            267: "REGISTER.ID",
            268: "GET.WORKBOOK",
            269: "AVEDEV",
            270: "BETADIST",
            271: "GAMMALN",
            272: "BETAINV",
            273: "BINOMDIST",
            274: "CHIDIST",
            275: "CHIINV",
            276: "COMBIN",
            277: "CONFIDENCE",
            278: "CRITBINOM",
            279: "EVEN",
            280: "EXPONDIST",
            281: "FDIST",
            282: "FINV",
            283: "FISHER",
            284: "FISHERINV",
            285: "FLOOR",
            286: "GAMMADIST",
            287: "GAMMAINV",
            288: "CEILING",
            289: "HYPGEOMDIST",
            290: "LOGNORMDIST",
            291: "LOGINV",
            292: "NEGBINOMDIST",
            293: "NORMDIST",
            294: "NORMSDIST",
            295: "NORMINV",
            296: "NORMSINV",
            297: "STANDARDIZE",
            298: "ODD",
            299: "PERMUT",
            300: "POISSON",
            301: "TDIST",
            302: "WEIBULL",
            303: "SUMXMY2",
            304: "SUMX2MY2",
            305: "SUMX2PY2",
            306: "CHITEST",
            307: "CORREL",
            308: "COVAR",
            309: "FORECAST",
            310: "FTEST",
            311: "INTERCEPT",
            312: "PEARSON",
            313: "RSQ",
            314: "STEYX",
            315: "SLOPE",
            316: "TTEST",
            317: "PROB",
            318: "DEVSQ",
            319: "GEOMEAN",
            320: "HARMEAN",
            321: "SUMSQ",
            322: "KURT",
            323: "SKEW",
            324: "ZTEST",
            325: "LARGE",
            326: "SMALL",
            327: "QUARTILE",
            328: "PERCENTILE",
            329: "PERCENTRANK",
            330: "MODE",
            331: "TRIMMEAN",
            332: "TINV",
            334: "MOVIE.COMMAND",
            335: "GET.MOVIE",
            336: "CONCATENATE",
            337: "POWER",
            338: "PIVOT.ADD.DATA",
            339: "GET.PIVOT.TABLE",
            340: "GET.PIVOT.FIELD",
            341: "GET.PIVOT.ITEM",
            342: "RADIANS",
            343: "DEGREES",
            344: "SUBTOTAL",
            345: "SUMIF",
            346: "COUNTIF",
            347: "COUNTBLANK",
            348: "SCENARIO.GET",
            349: "OPTIONS.LISTS.GET",
            350: "ISPMT",
            351: "DATEDIF",
            352: "DATESTRING",
            353: "NUMBERSTRING",
            354: "ROMAN",
            355: "OPEN.DIALOG",
            356: "SAVE.DIALOG",
            357: "VIEW.GET",
            358: "GETPIVOTDATA",
            359: "HYPERLINK",
            360: "PHONETIC",
            361: "AVERAGEA",
            362: "MAXA",
            363: "MINA",
            364: "STDEVPA",
            365: "VARPA",
            366: "STDEVA",
            367: "VARA",
            368: "BAHTTEXT",
            369: "THAIDAYOFWEEK",
            370: "THAIDIGIT",
            371: "THAIMONTHOFYEAR",
            372: "THAINUMSOUND",
            373: "THAINUMSTRING",
            374: "THAISTRINGLENGTH",
            375: "ISTHAIDIGIT",
            376: "ROUNDBAHTDOWN",
            377: "ROUNDBAHTUP",
            378: "THAIYEAR",
            379: "RTD",
            380: "CUBEVALUE",
            381: "CUBEMEMBER",
            382: "CUBEMEMBERPROPERTY",
            383: "CUBERANKEDMEMBER",
            384: "HEX2BIN",
            385: "HEX2DEC",
            386: "HEX2OCT",
            387: "DEC2BIN",
            388: "DEC2HEX",
            389: "DEC2OCT",
            390: "OCT2BIN",
            391: "OCT2HEX",
            392: "OCT2DEC",
            393: "BIN2DEC",
            394: "BIN2OCT",
            395: "BIN2HEX",
            396: "IMSUB",
            397: "IMDIV",
            398: "IMPOWER",
            399: "IMABS",
            400: "IMSQRT",
            401: "IMLN",
            402: "IMLOG2",
            403: "IMLOG10",
            404: "IMSIN",
            405: "IMCOS",
            406: "IMEXP",
            407: "IMARGUMENT",
            408: "IMCONJUGATE",
            409: "IMAGINARY",
            410: "IMREAL",
            411: "COMPLEX",
            412: "IMSUM",
            413: "IMPRODUCT",
            414: "SERIESSUM",
            415: "FACTDOUBLE",
            416: "SQRTPI",
            417: "QUOTIENT",
            418: "DELTA",
            419: "GESTEP",
            420: "ISEVEN",
            421: "ISODD",
            422: "MROUND",
            423: "ERF",
            424: "ERFC",
            425: "BESSELJ",
            426: "BESSELK",
            427: "BESSELY",
            428: "BESSELI",
            429: "XIRR",
            430: "XNPV",
            431: "PRICEMAT",
            432: "YIELDMAT",
            433: "INTRATE",
            434: "RECEIVED",
            435: "DISC",
            436: "PRICEDISC",
            437: "YIELDDISC",
            438: "TBILLEQ",
            439: "TBILLPRICE",
            440: "TBILLYIELD",
            441: "PRICE",
            442: "YIELD",
            443: "DOLLARDE",
            444: "DOLLARFR",
            445: "NOMINAL",
            446: "EFFECT",
            447: "CUMPRINC",
            448: "CUMIPMT",
            449: "EDATE",
            450: "EOMONTH",
            451: "YEARFRAC",
            452: "COUPDAYBS",
            453: "COUPDAYS",
            454: "COUPDAYSNC",
            455: "COUPNCD",
            456: "COUPNUM",
            457: "COUPPCD",
            458: "DURATION",
            459: "MDURATION",
            460: "ODDLPRICE",
            461: "ODDLYIELD",
            462: "ODDFPRICE",
            463: "ODDFYIELD",
            464: "RANDBETWEEN",
            465: "WEEKNUM",
            466: "AMORDEGRC",
            467: "AMORLINC",
            468: "CONVERT",
            724: "SHEETJS",
            469: "ACCRINT",
            470: "ACCRINTM",
            471: "WORKDAY",
            472: "NETWORKDAYS",
            473: "GCD",
            474: "MULTINOMIAL",
            475: "LCM",
            476: "FVSCHEDULE",
            477: "CUBEKPIMEMBER",
            478: "CUBESET",
            479: "CUBESETCOUNT",
            480: "IFERROR",
            481: "COUNTIFS",
            482: "SUMIFS",
            483: "AVERAGEIF",
            484: "AVERAGEIFS"
        }, si = {
            2: 1,
            3: 1,
            10: 0,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 0,
            20: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            27: 2,
            30: 2,
            31: 3,
            32: 1,
            33: 1,
            34: 0,
            35: 0,
            38: 1,
            39: 2,
            40: 3,
            41: 3,
            42: 3,
            43: 3,
            44: 3,
            45: 3,
            47: 3,
            48: 2,
            53: 1,
            61: 3,
            63: 0,
            65: 3,
            66: 3,
            67: 1,
            68: 1,
            69: 1,
            70: 1,
            71: 1,
            72: 1,
            73: 1,
            74: 0,
            75: 1,
            76: 1,
            77: 1,
            79: 2,
            80: 2,
            83: 1,
            85: 0,
            86: 1,
            89: 0,
            90: 1,
            94: 0,
            95: 0,
            97: 2,
            98: 1,
            99: 1,
            101: 3,
            102: 3,
            105: 1,
            106: 1,
            108: 2,
            111: 1,
            112: 1,
            113: 1,
            114: 1,
            117: 2,
            118: 1,
            119: 4,
            121: 1,
            126: 1,
            127: 1,
            128: 1,
            129: 1,
            130: 1,
            131: 1,
            133: 1,
            134: 1,
            135: 1,
            136: 2,
            137: 2,
            138: 2,
            140: 1,
            141: 1,
            142: 3,
            143: 4,
            144: 4,
            161: 1,
            162: 1,
            163: 1,
            164: 1,
            165: 2,
            172: 1,
            175: 2,
            176: 2,
            177: 3,
            178: 2,
            179: 1,
            184: 1,
            186: 1,
            189: 3,
            190: 1,
            195: 3,
            196: 3,
            197: 1,
            198: 1,
            199: 3,
            201: 1,
            207: 4,
            210: 3,
            211: 1,
            212: 2,
            213: 2,
            214: 1,
            215: 1,
            225: 0,
            229: 1,
            230: 1,
            231: 1,
            232: 1,
            233: 1,
            234: 1,
            235: 3,
            244: 1,
            247: 4,
            252: 2,
            257: 1,
            261: 1,
            271: 1,
            273: 4,
            274: 2,
            275: 2,
            276: 2,
            277: 3,
            278: 3,
            279: 1,
            280: 3,
            281: 3,
            282: 3,
            283: 1,
            284: 1,
            285: 2,
            286: 4,
            287: 3,
            288: 2,
            289: 4,
            290: 3,
            291: 3,
            292: 3,
            293: 4,
            294: 1,
            295: 3,
            296: 1,
            297: 3,
            298: 1,
            299: 2,
            300: 3,
            301: 3,
            302: 4,
            303: 2,
            304: 2,
            305: 2,
            306: 2,
            307: 2,
            308: 2,
            309: 3,
            310: 2,
            311: 2,
            312: 2,
            313: 2,
            314: 2,
            315: 2,
            316: 4,
            325: 2,
            326: 2,
            327: 2,
            328: 2,
            331: 2,
            332: 2,
            337: 2,
            342: 1,
            343: 1,
            346: 2,
            347: 1,
            350: 4,
            351: 3,
            352: 1,
            353: 2,
            360: 1,
            368: 1,
            369: 1,
            370: 1,
            371: 1,
            372: 1,
            373: 1,
            374: 1,
            375: 1,
            376: 1,
            377: 1,
            378: 1,
            382: 3,
            385: 1,
            392: 1,
            393: 1,
            396: 2,
            397: 2,
            398: 2,
            399: 1,
            400: 1,
            401: 1,
            402: 1,
            403: 1,
            404: 1,
            405: 1,
            406: 1,
            407: 1,
            408: 1,
            409: 1,
            410: 1,
            414: 4,
            415: 1,
            416: 1,
            417: 2,
            420: 1,
            421: 1,
            422: 2,
            424: 1,
            425: 2,
            426: 2,
            427: 2,
            428: 2,
            430: 3,
            438: 3,
            439: 3,
            440: 3,
            443: 2,
            444: 2,
            445: 2,
            446: 2,
            447: 6,
            448: 6,
            449: 2,
            450: 2,
            464: 2,
            468: 3,
            476: 2,
            479: 1,
            480: 2,
            65535: 0
        };

        function sc(e) {
            return "of:" == e.slice(0, 3) && (e = e.slice(3)), 61 == e.charCodeAt(0) && 61 == (e = e.slice(1)).charCodeAt(0) && (e = e.slice(1)), (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function (e, r) {
                return r.replace(/\./g, "")
            })).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";")
        }

        function so(e) {
            var r = e.split(":");
            return [r[0].split(".")[0], r[0].split(".")[1] + (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : "")]
        }

        var sl = {}, sf = {};

        function sh(e, r) {
            if (e) {
                var t = [.7, .7, .75, .75, .3, .3];
                "xlml" == r && (t = [1, 1, 1, 1, .5, .5]), null == e.left && (e.left = t[0]), null == e.right && (e.right = t[1]), null == e.top && (e.top = t[2]), null == e.bottom && (e.bottom = t[3]), null == e.header && (e.header = t[4]), null == e.footer && (e.footer = t[5])
            }
        }

        function su(e, r, t, a, n, s) {
            try {
                a.cellNF && (e.z = ex[r])
            } catch (e) {
                if (a.WTF) throw e
            }
            if ("z" !== e.t || a.cellStyles) {
                if ("d" === e.t && "string" == typeof e.v && (e.v = rh(e.v)), (!a || !1 !== a.cellText) && "z" !== e.t) try {
                    if (null == ex[r] && e3(e6[r] || "General", r), "e" === e.t) e.w = e.w || aa[e.v]; else if (0 === r) {
                        if ("n" === e.t) (0 | e.v) === e.v ? e.w = e.v.toString(10) : e.w = eW(e.v); else if ("d" === e.t) {
                            var i = ra(e.v);
                            (0 | i) === i ? e.w = i.toString(10) : e.w = eW(i)
                        } else {
                            if (void 0 === e.v) return "";
                            e.w = eV(e.v, sf)
                        }
                    } else "d" === e.t ? e.w = e4(r, ra(e.v), sf) : e.w = e4(r, e.v, sf)
                } catch (e) {
                    if (a.WTF) throw e
                }
                if (a.cellStyles && null != t) try {
                    e.s = s.Fills[t], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = nv(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = nv(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb))
                } catch (e) {
                    if (a.WTF && s.Fills) throw e
                }
            }
        }

        var sd = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
            sp = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, sg = /<(?:\w:)?hyperlink [^>]*>/mg,
            sm = /"(\w*:\w*)"/, sv = /<(?:\w:)?col\b[^>]*[\/]?>/g,
            sb = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
            sT = /<(?:\w:)?pageMargins[^>]*\/>/g, sE = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
            sw = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,
            sA = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;

        function sS(e, r, t, a) {
            var n = rF(e);
            t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = rU(rK(n.codeName)))
        }

        var sk = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/,
            sy = (U = /<(?:\w+:)?c[ \/>]/, B = /<\/(?:\w+:)?row>/, H = /r=["']([^"']*)["']/, W = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, V = /ref=["']([^"']*)["']/, z = rJ("v"), G = rJ("f"), function (e, r, t, a, n, s) {
                for (var i, c, o, l, f, h = 0, u = "", d = [], p = [], g = 0, m = 0, v = 0, b = "", T = 0, E = 0, w = 0, A = 0, S = Array.isArray(s.CellXf), k = [], y = [], C = Array.isArray(r), _ = [], O = {}, R = !1, I = !!t.sheetStubs, x = e.split(B), N = 0, D = x.length; N != D; ++N) {
                    var F = (u = x[N].trim()).length;
                    if (0 !== F) {
                        var P = 0;
                        r:for (h = 0; h < F; ++h) switch (u[h]) {
                            case">":
                                if ("/" != u[h - 1]) {
                                    ++h;
                                    break r
                                }
                                if (t && t.cellStyles) {
                                    if (T = null != (c = rF(u.slice(P, h), !0)).r ? parseInt(c.r, 10) : T + 1, E = -1, t.sheetRows && t.sheetRows < T) continue;
                                    O = {}, R = !1, c.ht && (R = !0, O.hpt = parseFloat(c.ht), O.hpx = ny(O.hpt)), "1" == c.hidden && (R = !0, O.hidden = !0), null != c.outlineLevel && (R = !0, O.level = +c.outlineLevel), R && (_[T - 1] = O)
                                }
                                break;
                            case"<":
                                P = h
                        }
                        if (P >= h) break;
                        if (T = null != (c = rF(u.slice(P, h), !0)).r ? parseInt(c.r, 10) : T + 1, E = -1, !t.sheetRows || !(t.sheetRows < T)) {
                            a.s.r > T - 1 && (a.s.r = T - 1), a.e.r < T - 1 && (a.e.r = T - 1), t && t.cellStyles && (O = {}, R = !1, c.ht && (R = !0, O.hpt = parseFloat(c.ht), O.hpx = ny(O.hpt)), "1" == c.hidden && (R = !0, O.hidden = !0), null != c.outlineLevel && (R = !0, O.level = +c.outlineLevel), R && (_[T - 1] = O)), d = u.slice(h).split(U);
                            for (var L = 0; L != d.length && "<" == d[L].trim().charAt(0); ++L) ;
                            for (h = 0, d = d.slice(L); h != d.length; ++h) if (0 !== (u = d[h].trim()).length) {
                                if (p = u.match(H), g = h, m = 0, v = 0, u = "<c " + ("<" == u.slice(0, 1) ? ">" : "") + u, null != p && 2 === p.length) {
                                    for (m = 0, g = 0, b = p[1]; m != b.length && !((v = b.charCodeAt(m) - 64) < 1) && !(v > 26); ++m) g = 26 * g + v;
                                    E = --g
                                } else ++E;
                                for (m = 0; m != u.length && 62 !== u.charCodeAt(m); ++m) ;
                                if (++m, (c = rF(u.slice(0, m), !0)).r || (c.r = tz({
                                    r: T - 1,
                                    c: E
                                })), b = u.slice(m), i = {t: ""}, null != (p = b.match(z)) && "" !== p[1] && (i.v = rU(p[1])), t.cellFormula) {
                                    if (null != (p = b.match(G)) && "" !== p[1]) {
                                        if (i.f = rU(rK(p[1])).replace(/\r\n/g, "\n"), t.xlfn || (i.f = nG(i.f)), p[0].indexOf('t="array"') > -1) i.F = (b.match(V) || [])[1], i.F.indexOf(":") > -1 && k.push([tY(i.F), i.F]); else if (p[0].indexOf('t="shared"') > -1) {
                                            l = rF(p[0]);
                                            var M = rU(rK(p[1]));
                                            t.xlfn || (M = nG(M)), y[parseInt(l.si, 10)] = [l, M, c.r]
                                        }
                                    } else (p = b.match(/<f[^>]*\/>/)) && y[(l = rF(p[0])).si] && (i.f = function (e, r, t) {
                                        var a = tG(r).s, n = tV(t);
                                        return nz(e, {r: n.r - a.r, c: n.c - a.c})
                                    }(y[l.si][1], y[l.si][2], c.r));
                                    var Y = tV(c.r);
                                    for (m = 0; m < k.length; ++m) Y.r >= k[m][0].s.r && Y.r <= k[m][0].e.r && Y.c >= k[m][0].s.c && Y.c <= k[m][0].e.c && (i.F = k[m][1])
                                }
                                if (null == c.t && void 0 === i.v) {
                                    if (i.f || i.F) i.v = 0, i.t = "n"; else {
                                        if (!I) continue;
                                        i.t = "z"
                                    }
                                } else i.t = c.t || "n";
                                switch (a.s.c > E && (a.s.c = E), a.e.c < E && (a.e.c = E), i.t) {
                                    case"n":
                                        if ("" == i.v || null == i.v) {
                                            if (!I) continue;
                                            i.t = "z"
                                        } else i.v = parseFloat(i.v);
                                        break;
                                    case"s":
                                        if (void 0 === i.v) {
                                            if (!I) continue;
                                            i.t = "z"
                                        } else o = sl[parseInt(i.v, 10)], i.v = o.t, i.r = o.r, t.cellHTML && (i.h = o.h);
                                        break;
                                    case"str":
                                        i.t = "s", i.v = null != i.v ? rK(i.v) : "", t.cellHTML && (i.h = rW(i.v));
                                        break;
                                    case"inlineStr":
                                        p = b.match(W), i.t = "s", null != p && (o = nn(p[1])) ? (i.v = o.t, t.cellHTML && (i.h = o.h)) : i.v = "";
                                        break;
                                    case"b":
                                        i.v = rz(i.v);
                                        break;
                                    case"d":
                                        t.cellDates ? i.v = rh(i.v, 1) : (i.v = ra(rh(i.v, 1)), i.t = "n");
                                        break;
                                    case"e":
                                        t && !1 === t.cellText || (i.w = i.v), i.v = an[i.v]
                                }
                                if (w = A = 0, f = null, S && void 0 !== c.s && null != (f = s.CellXf[c.s]) && (null != f.numFmtId && (w = f.numFmtId), t.cellStyles && null != f.fillId && (A = f.fillId)), su(i, w, A, t, n, s), t.cellDates && S && "n" == i.t && e1(ex[w]) && (i.t = "d", i.v = rc(i.v)), c.cm && t.xlmeta) {
                                    var j = (t.xlmeta.Cell || [])[+c.cm - 1];
                                    j && "XLDAPR" == j.type && (i.D = !0)
                                }
                                if (C) {
                                    var K = tV(c.r);
                                    r[K.r] || (r[K.r] = []), r[K.r][K.c] = i
                                } else r[c.r] = i
                            }
                        }
                    }
                }
                _.length > 0 && (r["!rows"] = _)
            });

        function sC(e) {
            return [t0(e), t5(e), "n"]
        }

        var s_ = ["left", "right", "top", "bottom", "header", "footer"],
            sO = [["allowRefreshQuery", !1, "bool"], ["autoCompressPictures", !0, "bool"], ["backupFile", !1, "bool"], ["checkCompatibility", !1, "bool"], ["CodeName", ""], ["date1904", !1, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", !1, "bool"], ["hidePivotFieldList", !1, "bool"], ["promptedSolutions", !1, "bool"], ["publishItems", !1, "bool"], ["refreshAllConnections", !1, "bool"], ["saveExternalLinkValues", !0, "bool"], ["showBorderUnselectedTables", !0, "bool"], ["showInkAnnotation", !0, "bool"], ["showObjects", "all"], ["showPivotChartFilter", !1, "bool"], ["updateLinks", "userSet"]],
            sR = [["activeTab", 0, "int"], ["autoFilterDateGrouping", !0, "bool"], ["firstSheet", 0, "int"], ["minimized", !1, "bool"], ["showHorizontalScroll", !0, "bool"], ["showSheetTabs", !0, "bool"], ["showVerticalScroll", !0, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]],
            sI = [],
            sx = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];

        function sN(e, r) {
            for (var t = 0; t != e.length; ++t) for (var a = e[t], n = 0; n != r.length; ++n) {
                var s = r[n];
                if (null == a[s[0]]) a[s[0]] = s[1]; else switch (s[2]) {
                    case"bool":
                        "string" == typeof a[s[0]] && (a[s[0]] = rz(a[s[0]]));
                        break;
                    case"int":
                        "string" == typeof a[s[0]] && (a[s[0]] = parseInt(a[s[0]], 10))
                }
            }
        }

        function sD(e, r) {
            for (var t = 0; t != r.length; ++t) {
                var a = r[t];
                if (null == e[a[0]]) e[a[0]] = a[1]; else switch (a[2]) {
                    case"bool":
                        "string" == typeof e[a[0]] && (e[a[0]] = rz(e[a[0]]));
                        break;
                    case"int":
                        "string" == typeof e[a[0]] && (e[a[0]] = parseInt(e[a[0]], 10))
                }
            }
        }

        function sF(e) {
            sD(e.WBProps, sO), sD(e.CalcPr, sx), sN(e.WBView, sR), sN(e.Sheets, sI), sf.date1904 = rz(e.WBProps.date1904)
        }

        var sP = "][*?/\\".split(""), sL = /<\w+:workbook/;

        function sM(e, r) {
            var t = {};
            return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t
        }

        var sU = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
            sB = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;

        function sH(e, r) {
            var t = e.split(/\s+/), a = [];
            if (r || (a[0] = t[0]), 1 === t.length) return a;
            var n, s, i, c = e.match(sU);
            if (c) for (i = 0; i != c.length; ++i) -1 === (s = (n = c[i].match(sB))[1].indexOf(":")) ? a[n[1]] = n[2].slice(1, n[2].length - 1) : a["xmlns:" === n[1].slice(0, 6) ? "xmlns" + n[1].slice(6) : n[1].slice(s + 1)] = n[2].slice(1, n[2].length - 1);
            return a
        }

        function sW(e, r) {
            var t, a, n, s = r || {};
            e5();
            var i = ec(r4(e));
            ("binary" == s.type || "array" == s.type || "base64" == s.type) && (i = void 0 !== Y ? Y.utils.decode(65001, es(i)) : rK(i));
            var c = i.slice(0, 1024).toLowerCase(), o = !1;
            if ((1023 & (c = c.replace(/".*?"/g, "")).indexOf(">")) > Math.min(1023 & c.indexOf(","), 1023 & c.indexOf(";"))) {
                var l = rd(s);
                return l.type = "string", a8.to_workbook(i, l)
            }
            if (-1 == c.indexOf("<?xml") && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function (e) {
                c.indexOf("<" + e) >= 0 && (o = !0)
            }), o) return function (e, r) {
                var t = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
                if (!t || 0 == t.length) throw Error("Invalid HTML: could not find <table>");
                if (1 == t.length) return tX(sZ(t[0], r), r);
                var a = im();
                return t.forEach(function (e, t) {
                    iv(a, sZ(e, r), "Sheet" + (t + 1))
                }), a
            }(i, s);
            K = {
                "General Number": "General",
                "General Date": ex[22],
                "Long Date": "dddd, mmmm dd, yyyy",
                "Medium Date": ex[15],
                "Short Date": ex[14],
                "Long Time": ex[19],
                "Medium Time": ex[18],
                "Short Time": ex[20],
                Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
                Fixed: ex[2],
                Standard: ex[4],
                Percent: ex[10],
                Scientific: ex[11],
                "Yes/No": '"Yes";"Yes";"No";@',
                "True/False": '"True";"True";"False";@',
                "On/Off": '"Yes";"Yes";"No";@'
            };
            var f, h, u, d = [], p = {}, g = [], m = s.dense ? [] : {}, v = "", b = {}, T = {},
                E = sH('<Data ss:Type="String">'), w = 0, A = 0, S = 0, k = {s: {r: 2e6, c: 2e6}, e: {r: 0, c: 0}},
                y = {}, C = {}, _ = "", O = 0, R = [], I = {}, x = {}, N = 0, D = [], F = [], P = {}, L = [], M = !1,
                U = [], B = [], H = {}, W = 0, V = 0, z = {Sheets: [], WBProps: {date1904: !1}}, G = {};
            r3.lastIndex = 0, i = i.replace(/<!--([\s\S]*?)-->/mg, "");
            for (var X = ""; f = r3.exec(i);) switch (f[3] = (X = f[3]).toLowerCase()) {
                case"data":
                    if ("data" == X) {
                        if ("/" === f[1]) {
                            if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"))
                        } else "/" !== f[0].charAt(f[0].length - 2) && d.push([f[3], !0]);
                        break
                    }
                    if (d[d.length - 1][1]) break;
                    "/" === f[1] ? function (e, r, t, a, n, s, i, c, o, l) {
                        var f = "General", h = a.StyleID, u = {};
                        l = l || {};
                        var d = [], p = 0;
                        for (void 0 === h && c && (h = c.StyleID), void 0 === h && i && (h = i.StyleID); void 0 !== s[h] && (s[h].nf && (f = s[h].nf), s[h].Interior && d.push(s[h].Interior), s[h].Parent);) h = s[h].Parent;
                        switch (t.Type) {
                            case"Boolean":
                                a.t = "b", a.v = rz(e);
                                break;
                            case"String":
                                a.t = "s", a.r = rV(rU(e)), a.v = e.indexOf("<") > -1 ? rU(r || e).replace(/<.*?>/g, "") : a.r;
                                break;
                            case"DateTime":
                                "Z" != e.slice(-1) && (e += "Z"), a.v = (rh(e) - new Date(Date.UTC(1899, 11, 30))) / 864e5, a.v != a.v ? a.v = rU(e) : a.v < 60 && (a.v = a.v - 1), f && "General" != f || (f = "yyyy-mm-dd");
                            case"Number":
                                void 0 === a.v && (a.v = +e), a.t || (a.t = "n");
                                break;
                            case"Error":
                                a.t = "e", a.v = an[e], !1 !== l.cellText && (a.w = e);
                                break;
                            default:
                                "" == e && "" == r ? a.t = "z" : (a.t = "s", a.v = rV(r || e))
                        }
                        if (!function (e, r, t) {
                            if ("z" !== e.t) {
                                if (!t || !1 !== t.cellText) try {
                                    if ("e" === e.t) e.w = e.w || aa[e.v]; else if ("General" === r) "n" === e.t ? (0 | e.v) === e.v ? e.w = e.v.toString(10) : e.w = eW(e.v) : e.w = eV(e.v); else {
                                        var a, n, s;
                                        e.w = (a = r || "General", n = e.v, s = K[a] || rU(a), "General" === s ? eV(n) : e4(s, n))
                                    }
                                } catch (e) {
                                    if (t.WTF) throw e
                                }
                                try {
                                    var i = K[r] || r || "General";
                                    if (t.cellNF && (e.z = i), t.cellDates && "n" == e.t && e1(i)) {
                                        var c = eP(e.v);
                                        c && (e.t = "d", e.v = new Date(c.y, c.m - 1, c.d, c.H, c.M, c.S, c.u))
                                    }
                                } catch (e) {
                                    if (t.WTF) throw e
                                }
                            }
                        }(a, f, l), !1 !== l.cellFormula) {
                            if (a.Formula) {
                                var g = rU(a.Formula);
                                61 == g.charCodeAt(0) && (g = g.slice(1)), a.f = nH(g, n), delete a.Formula, "RC" == a.ArrayRange ? a.F = nH("RC:RC", n) : a.ArrayRange && (a.F = nH(a.ArrayRange, n), o.push([tY(a.F), a.F]))
                            } else for (p = 0; p < o.length; ++p) n.r >= o[p][0].s.r && n.r <= o[p][0].e.r && n.c >= o[p][0].s.c && n.c <= o[p][0].e.c && (a.F = o[p][1])
                        }
                        l.cellStyles && (d.forEach(function (e) {
                            !u.patternType && e.patternType && (u.patternType = e.patternType)
                        }), a.s = u), void 0 !== a.StyleID && (a.ixfe = a.StyleID)
                    }(i.slice(w, f.index), _, E, "comment" == d[d.length - 1][0] ? P : b, {
                        c: A,
                        r: S
                    }, y, L[A], T, U, s) : (_ = "", E = sH(f[0]), w = f.index + f[0].length);
                    break;
                case"cell":
                    if ("/" === f[1]) {
                        if (F.length > 0 && (b.c = F), (!s.sheetRows || s.sheetRows > S) && void 0 !== b.v && (s.dense ? (m[S] || (m[S] = []), m[S][A] = b) : m[tW(A) + tB(S)] = b), b.HRef && (b.l = {Target: rU(b.HRef)}, b.HRefScreenTip && (b.l.Tooltip = b.HRefScreenTip), delete b.HRef, delete b.HRefScreenTip), (b.MergeAcross || b.MergeDown) && (W = A + (0 | parseInt(b.MergeAcross, 10)), V = S + (0 | parseInt(b.MergeDown, 10)), R.push({
                            s: {
                                c: A,
                                r: S
                            }, e: {c: W, r: V}
                        })), s.sheetStubs) {
                            if (b.MergeAcross || b.MergeDown) {
                                for (var J = A; J <= W; ++J) for (var Z = S; Z <= V; ++Z) (J > A || Z > S) && (s.dense ? (m[Z] || (m[Z] = []), m[Z][J] = {t: "z"}) : m[tW(J) + tB(Z)] = {t: "z"});
                                A = W + 1
                            } else ++A
                        } else b.MergeAcross ? A = W + 1 : ++A
                    } else (b = function (e) {
                        var r = e.split(/\s+/), t = {};
                        if (1 === r.length) return t;
                        var a, n, s, i = e.match(sU);
                        if (i) for (s = 0; s != i.length; ++s) -1 === (n = (a = i[s].match(sB))[1].indexOf(":")) ? t[a[1]] = a[2].slice(1, a[2].length - 1) : t["xmlns:" === a[1].slice(0, 6) ? "xmlns" + a[1].slice(6) : a[1].slice(n + 1)] = a[2].slice(1, a[2].length - 1);
                        return t
                    }(f[0])).Index && (A = +b.Index - 1), A < k.s.c && (k.s.c = A), A > k.e.c && (k.e.c = A), "/>" === f[0].slice(-2) && ++A, F = [];
                    break;
                case"row":
                    "/" === f[1] || "/>" === f[0].slice(-2) ? (S < k.s.r && (k.s.r = S), S > k.e.r && (k.e.r = S), "/>" === f[0].slice(-2) && (T = sH(f[0])).Index && (S = +T.Index - 1), A = 0, ++S) : ((T = sH(f[0])).Index && (S = +T.Index - 1), H = {}, ("0" == T.AutoFitHeight || T.Height) && (H.hpx = parseInt(T.Height, 10), H.hpt = 96 * H.hpx / 96, B[S] = H), "1" == T.Hidden && (H.hidden = !0, B[S] = H));
                    break;
                case"worksheet":
                    if ("/" === f[1]) {
                        if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"));
                        g.push(v), k.s.r <= k.e.r && k.s.c <= k.e.c && (m["!ref"] = t$(k), s.sheetRows && s.sheetRows <= k.e.r && (m["!fullref"] = m["!ref"], k.e.r = s.sheetRows - 1, m["!ref"] = t$(k))), R.length && (m["!merges"] = R), L.length > 0 && (m["!cols"] = L), B.length > 0 && (m["!rows"] = B), p[v] = m
                    } else k = {
                        s: {r: 2e6, c: 2e6},
                        e: {r: 0, c: 0}
                    }, S = A = 0, d.push([f[3], !1]), v = rU((h = sH(f[0])).Name), m = s.dense ? [] : {}, R = [], U = [], B = [], G = {
                        name: v,
                        Hidden: 0
                    }, z.Sheets.push(G);
                    break;
                case"table":
                    if ("/" === f[1]) {
                        if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"))
                    } else "/>" == f[0].slice(-2) || (d.push([f[3], !1]), L = [], M = !1);
                    break;
                case"style":
                    "/" === f[1] ? function (e, r, t) {
                        if (t.cellStyles && r.Interior) {
                            var a = r.Interior;
                            a.Pattern && (a.patternType = nC[a.Pattern] || a.Pattern)
                        }
                        e[r.ID] = r
                    }(y, C, s) : C = sH(f[0]);
                    break;
                case"numberformat":
                    C.nf = rU(sH(f[0]).Format || "General"), K[C.nf] && (C.nf = K[C.nf]);
                    for (var q = 0; 392 != q && ex[q] != C.nf; ++q) ;
                    if (392 == q) {
                        for (q = 57; 392 != q; ++q) if (null == ex[q]) {
                            e3(C.nf, q);
                            break
                        }
                    }
                    break;
                case"column":
                    if ("table" !== d[d.length - 1][0]) break;
                    if ((u = sH(f[0])).Hidden && (u.hidden = !0, delete u.Hidden), u.Width && (u.wpx = parseInt(u.Width, 10)), !M && u.wpx > 10) {
                        M = !0, nb = 6;
                        for (var Q = 0; Q < L.length; ++Q) L[Q] && nk(L[Q])
                    }
                    M && nk(u), L[u.Index - 1 || L.length] = u;
                    for (var ee = 0; ee < +u.Span; ++ee) L[L.length] = rd(u);
                    break;
                case"namedrange":
                    if ("/" === f[1]) break;
                    z.Names || (z.Names = []);
                    var er = rF(f[0]), et = {Name: er.Name, Ref: nH(er.RefersTo.slice(1), {r: 0, c: 0})};
                    z.Sheets.length > 0 && (et.Sheet = z.Sheets.length - 1), z.Names.push(et);
                    break;
                case"namedcell":
                case"b":
                case"i":
                case"u":
                case"s":
                case"em":
                case"h2":
                case"h3":
                case"sub":
                case"sup":
                case"span":
                case"alignment":
                case"borders":
                case"border":
                case"protection":
                case"paragraphs":
                case"name":
                case"pixelsperinch":
                case"null":
                    break;
                case"font":
                    "/>" === f[0].slice(-2) || ("/" === f[1] ? _ += i.slice(O, f.index) : O = f.index + f[0].length);
                    break;
                case"interior":
                    if (!s.cellStyles) break;
                    C.Interior = sH(f[0]);
                    break;
                case"author":
                case"title":
                case"description":
                case"created":
                case"keywords":
                case"subject":
                case"category":
                case"company":
                case"lastauthor":
                case"lastsaved":
                case"lastprinted":
                case"version":
                case"revision":
                case"totaltime":
                case"hyperlinkbase":
                case"manager":
                case"contentstatus":
                case"identifier":
                case"language":
                case"appname":
                    "/>" === f[0].slice(-2) || ("/" === f[1] ? (t = X, a = i.slice(N, f.index), j || (j = rr(ag)), I[t = j[t] || t] = a) : N = f.index + f[0].length);
                    break;
                case"styles":
                case"workbook":
                    if ("/" === f[1]) {
                        if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"))
                    } else d.push([f[3], !1]);
                    break;
                case"comment":
                    if ("/" === f[1]) {
                        if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"));
                        (n = P).t = n.v || "", n.t = n.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), n.v = n.w = n.ixfe = void 0, F.push(P)
                    } else d.push([f[3], !1]), P = {a: (h = sH(f[0])).Author};
                    break;
                case"autofilter":
                    if ("/" === f[1]) {
                        if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"))
                    } else if ("/" !== f[0].charAt(f[0].length - 2)) {
                        var ea = sH(f[0]);
                        m["!autofilter"] = {ref: nH(ea.Range).replace(/\$/g, "")}, d.push([f[3], !0])
                    }
                    break;
                case"datavalidation":
                case"componentoptions":
                case"documentproperties":
                case"customdocumentproperties":
                case"officedocumentsettings":
                case"pivottable":
                case"pivotcache":
                case"names":
                case"mapinfo":
                case"pagebreaks":
                case"querytable":
                case"sorting":
                case"schema":
                case"conditionalformatting":
                case"smarttagtype":
                case"smarttags":
                case"excelworkbook":
                case"workbookoptions":
                case"worksheetoptions":
                    if ("/" === f[1]) {
                        if ((h = d.pop())[0] !== f[3]) throw Error("Bad state: " + h.join("|"))
                    } else "/" !== f[0].charAt(f[0].length - 2) && d.push([f[3], !0]);
                    break;
                default:
                    if (0 == d.length && "document" == f[3] || 0 == d.length && "uof" == f[3]) return s2(i, s);
                    var en = !0;
                    switch (d[d.length - 1][0]) {
                        case"officedocumentsettings":
                            switch (f[3]) {
                                case"allowpng":
                                case"removepersonalinformation":
                                case"downloadcomponents":
                                case"locationofcomponents":
                                case"colors":
                                case"color":
                                case"index":
                                case"rgb":
                                case"targetscreensize":
                                case"readonlyrecommended":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"componentoptions":
                            switch (f[3]) {
                                case"toolbar":
                                case"hideofficelogo":
                                case"spreadsheetautofit":
                                case"label":
                                case"caption":
                                case"maxheight":
                                case"maxwidth":
                                case"nextsheetnumber":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"excelworkbook":
                            switch (f[3]) {
                                case"date1904":
                                    z.WBProps.date1904 = !0;
                                    break;
                                case"windowheight":
                                case"windowwidth":
                                case"windowtopx":
                                case"windowtopy":
                                case"tabratio":
                                case"protectstructure":
                                case"protectwindow":
                                case"protectwindows":
                                case"activesheet":
                                case"displayinknotes":
                                case"firstvisiblesheet":
                                case"supbook":
                                case"sheetname":
                                case"sheetindex":
                                case"sheetindexfirst":
                                case"sheetindexlast":
                                case"dll":
                                case"acceptlabelsinformulas":
                                case"donotsavelinkvalues":
                                case"iteration":
                                case"maxiterations":
                                case"maxchange":
                                case"path":
                                case"xct":
                                case"count":
                                case"selectedsheets":
                                case"calculation":
                                case"uncalced":
                                case"startupprompt":
                                case"crn":
                                case"externname":
                                case"formula":
                                case"colfirst":
                                case"collast":
                                case"wantadvise":
                                case"boolean":
                                case"error":
                                case"text":
                                case"ole":
                                case"noautorecover":
                                case"publishobjects":
                                case"donotcalculatebeforesave":
                                case"number":
                                case"refmoder1c1":
                                case"embedsavesmarttags":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"workbookoptions":
                            switch (f[3]) {
                                case"owcversion":
                                case"height":
                                case"width":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"worksheetoptions":
                            switch (f[3]) {
                                case"visible":
                                    if ("/>" === f[0].slice(-2)) ; else if ("/" === f[1]) switch (i.slice(N, f.index)) {
                                        case"SheetHidden":
                                            G.Hidden = 1;
                                            break;
                                        case"SheetVeryHidden":
                                            G.Hidden = 2
                                    } else N = f.index + f[0].length;
                                    break;
                                case"header":
                                    m["!margins"] || sh(m["!margins"] = {}, "xlml"), isNaN(+rF(f[0]).Margin) || (m["!margins"].header = +rF(f[0]).Margin);
                                    break;
                                case"footer":
                                    m["!margins"] || sh(m["!margins"] = {}, "xlml"), isNaN(+rF(f[0]).Margin) || (m["!margins"].footer = +rF(f[0]).Margin);
                                    break;
                                case"pagemargins":
                                    var ei = rF(f[0]);
                                    m["!margins"] || sh(m["!margins"] = {}, "xlml"), isNaN(+ei.Top) || (m["!margins"].top = +ei.Top), isNaN(+ei.Left) || (m["!margins"].left = +ei.Left), isNaN(+ei.Right) || (m["!margins"].right = +ei.Right), isNaN(+ei.Bottom) || (m["!margins"].bottom = +ei.Bottom);
                                    break;
                                case"displayrighttoleft":
                                    z.Views || (z.Views = []), z.Views[0] || (z.Views[0] = {}), z.Views[0].RTL = !0;
                                    break;
                                case"freezepanes":
                                case"frozennosplit":
                                case"splithorizontal":
                                case"splitvertical":
                                case"donotdisplaygridlines":
                                case"activerow":
                                case"activecol":
                                case"toprowbottompane":
                                case"leftcolumnrightpane":
                                case"unsynced":
                                case"print":
                                case"printerrors":
                                case"panes":
                                case"scale":
                                case"pane":
                                case"number":
                                case"layout":
                                case"pagesetup":
                                case"selected":
                                case"protectobjects":
                                case"enableselection":
                                case"protectscenarios":
                                case"validprinterinfo":
                                case"horizontalresolution":
                                case"verticalresolution":
                                case"numberofcopies":
                                case"activepane":
                                case"toprowvisible":
                                case"leftcolumnvisible":
                                case"fittopage":
                                case"rangeselection":
                                case"papersizeindex":
                                case"pagelayoutzoom":
                                case"pagebreakzoom":
                                case"filteron":
                                case"fitwidth":
                                case"fitheight":
                                case"commentslayout":
                                case"zoom":
                                case"lefttoright":
                                case"gridlines":
                                case"allowsort":
                                case"allowfilter":
                                case"allowinsertrows":
                                case"allowdeleterows":
                                case"allowinsertcols":
                                case"allowdeletecols":
                                case"allowinserthyperlinks":
                                case"allowformatcells":
                                case"allowsizecols":
                                case"allowsizerows":
                                case"tabcolorindex":
                                case"donotdisplayheadings":
                                case"showpagelayoutzoom":
                                case"blackandwhite":
                                case"donotdisplayzeros":
                                case"displaypagebreak":
                                case"rowcolheadings":
                                case"donotdisplayoutline":
                                case"noorientation":
                                case"allowusepivottables":
                                case"zeroheight":
                                case"viewablerange":
                                case"selection":
                                case"protectcontents":
                                    break;
                                case"nosummaryrowsbelowdetail":
                                    m["!outline"] || (m["!outline"] = {}), m["!outline"].above = !0;
                                    break;
                                case"nosummarycolumnsrightdetail":
                                    m["!outline"] || (m["!outline"] = {}), m["!outline"].left = !0;
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"pivottable":
                        case"pivotcache":
                            switch (f[3]) {
                                case"immediateitemsondrop":
                                case"showpagemultipleitemlabel":
                                case"compactrowindent":
                                case"location":
                                case"pivotfield":
                                case"orientation":
                                case"layoutform":
                                case"layoutsubtotallocation":
                                case"layoutcompactrow":
                                case"position":
                                case"pivotitem":
                                case"datatype":
                                case"datafield":
                                case"sourcename":
                                case"parentfield":
                                case"ptlineitems":
                                case"ptlineitem":
                                case"countofsameitems":
                                case"item":
                                case"itemtype":
                                case"ptsource":
                                case"cacheindex":
                                case"consolidationreference":
                                case"filename":
                                case"reference":
                                case"nocolumngrand":
                                case"norowgrand":
                                case"blanklineafteritems":
                                case"hidden":
                                case"subtotal":
                                case"basefield":
                                case"mapchilditems":
                                case"function":
                                case"refreshonfileopen":
                                case"printsettitles":
                                case"mergelabels":
                                case"defaultversion":
                                case"refreshname":
                                case"refreshdate":
                                case"refreshdatecopy":
                                case"versionlastrefresh":
                                case"versionlastupdate":
                                case"versionupdateablemin":
                                case"versionrefreshablemin":
                                case"calculation":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"pagebreaks":
                            switch (f[3]) {
                                case"colbreaks":
                                case"colbreak":
                                case"rowbreaks":
                                case"rowbreak":
                                case"colstart":
                                case"colend":
                                case"rowend":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"autofilter":
                            switch (f[3]) {
                                case"autofiltercolumn":
                                case"autofiltercondition":
                                case"autofilterand":
                                case"autofilteror":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"querytable":
                            switch (f[3]) {
                                case"id":
                                case"autoformatfont":
                                case"autoformatpattern":
                                case"querysource":
                                case"querytype":
                                case"enableredirections":
                                case"refreshedinxl9":
                                case"urlstring":
                                case"htmltables":
                                case"connection":
                                case"commandtext":
                                case"refreshinfo":
                                case"notitles":
                                case"nextid":
                                case"columninfo":
                                case"overwritecells":
                                case"donotpromptforfile":
                                case"textwizardsettings":
                                case"source":
                                case"number":
                                case"decimal":
                                case"thousandseparator":
                                case"trailingminusnumbers":
                                case"formatsettings":
                                case"fieldtype":
                                case"delimiters":
                                case"tab":
                                case"comma":
                                case"autoformatname":
                                case"versionlastedit":
                                case"versionlastrefresh":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"datavalidation":
                            switch (f[3]) {
                                case"range":
                                case"type":
                                case"min":
                                case"max":
                                case"sort":
                                case"descending":
                                case"order":
                                case"casesensitive":
                                case"value":
                                case"errorstyle":
                                case"errormessage":
                                case"errortitle":
                                case"inputmessage":
                                case"inputtitle":
                                case"combohide":
                                case"inputhide":
                                case"condition":
                                case"qualifier":
                                case"useblank":
                                case"value1":
                                case"value2":
                                case"format":
                                case"cellrangelist":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"sorting":
                        case"conditionalformatting":
                            switch (f[3]) {
                                case"range":
                                case"type":
                                case"min":
                                case"max":
                                case"sort":
                                case"descending":
                                case"order":
                                case"casesensitive":
                                case"value":
                                case"errorstyle":
                                case"errormessage":
                                case"errortitle":
                                case"cellrangelist":
                                case"inputmessage":
                                case"inputtitle":
                                case"combohide":
                                case"inputhide":
                                case"condition":
                                case"qualifier":
                                case"useblank":
                                case"value1":
                                case"value2":
                                case"format":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"mapinfo":
                        case"schema":
                        case"data":
                            switch (f[3]) {
                                case"map":
                                case"entry":
                                case"range":
                                case"xpath":
                                case"field":
                                case"xsdtype":
                                case"filteron":
                                case"aggregate":
                                case"elementtype":
                                case"attributetype":
                                case"schema":
                                case"element":
                                case"complextype":
                                case"datatype":
                                case"all":
                                case"attribute":
                                case"extends":
                                case"row":
                                    break;
                                default:
                                    en = !1
                            }
                            break;
                        case"smarttags":
                            break;
                        default:
                            en = !1
                    }
                    if (en || f[3].match(/!\[CDATA/)) break;
                    if (!d[d.length - 1][1]) throw "Unrecognized tag: " + f[3] + "|" + d.join("|");
                    if ("customdocumentproperties" === d[d.length - 1][0]) {
                        "/>" === f[0].slice(-2) || ("/" === f[1] ? function (e, r, t, a) {
                            var n = a;
                            switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
                                case"boolean":
                                    n = rz(a);
                                    break;
                                case"i2":
                                case"int":
                                    n = parseInt(a, 10);
                                    break;
                                case"r4":
                                case"float":
                                    n = parseFloat(a);
                                    break;
                                case"date":
                                case"dateTime.tz":
                                    n = rh(a);
                                    break;
                                case"i8":
                                case"string":
                                case"fixed":
                                case"uuid":
                                case"bin.base64":
                                    break;
                                default:
                                    throw Error("bad custprop:" + t[0])
                            }
                            e[rU(r)] = n
                        }(x, X, D, i.slice(N, f.index)) : (D = f, N = f.index + f[0].length));
                        break
                    }
                    if (s.WTF) throw "Unrecognized tag: " + f[3] + "|" + d.join("|")
            }
            var eo = {};
            return s.bookSheets || s.bookProps || (eo.Sheets = p), eo.SheetNames = g, eo.Workbook = z, eo.SSF = rd(ex), eo.Props = I, eo.Custprops = x, eo
        }

        function sV(e, r) {
            switch (is(r = r || {}), r.type || "base64") {
                case"base64":
                    return sW(eu(e), r);
                case"binary":
                case"buffer":
                case"file":
                    return sW(e, r);
                case"array":
                    return sW(eb(e), r)
            }
        }

        var sz = [60, 1084, 2066, 2165, 2175];

        function sG(e, r, t) {
            if ("z" !== e.t && e.XF) {
                var a = 0;
                try {
                    a = e.z || e.XF.numFmtId || 0, r.cellNF && (e.z = ex[a])
                } catch (e) {
                    if (r.WTF) throw e
                }
                if (!r || !1 !== r.cellText) try {
                    "e" === e.t ? e.w = e.w || aa[e.v] : 0 === a || "General" == a ? "n" === e.t ? (0 | e.v) === e.v ? e.w = e.v.toString(10) : e.w = eW(e.v) : e.w = eV(e.v) : e.w = e4(a, e.v, {
                        date1904: !!t,
                        dateNF: r && r.dateNF
                    })
                } catch (e) {
                    if (r.WTF) throw e
                }
                if (r.cellDates && a && "n" == e.t && e1(ex[a] || String(a))) {
                    var n = eP(e.v);
                    n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u))
                }
            }
        }

        function s$(e, r, t) {
            return {v: e, ixfe: r, t: t}
        }

        var sY = {SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae"};

        function sj(e, r) {
            if (r || (r = {}), is(r), en(), r.codepage && et(r.codepage), e.FullPaths) {
                if (e9.find(e, "/encryption")) throw Error("File is password-protected");
                n = e9.find(e, "!CompObj"), s = e9.find(e, "/Workbook") || e9.find(e, "/Book")
            } else {
                switch (r.type) {
                    case"base64":
                        e = ev(eu(e));
                        break;
                    case"binary":
                        e = ev(e);
                        break;
                    case"buffer":
                        break;
                    case"array":
                        Array.isArray(e) || (e = Array.prototype.slice.call(e))
                }
                tR(e, 0), s = {content: e}
            }
            if (n && function (e) {
                var r = {}, t = e.content;
                if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = t6(t, 1), !(t.length - t.l <= 4)) {
                    var a = t.read_shift(4);
                    0 != a && !(a > 40) && (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), !(t.length - t.l <= 4) && 1907505652 === (a = t.read_shift(4))) && (r.UnicodeClipboardFormat = t6(t, 2), 0 != (a = t.read_shift(4)) && !(a > 40)) && (t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr"))
                }
            }(n), r.bookProps && !r.bookSheets) i = {}; else {
                var t, a, n, s, i, c, o = ed ? "buffer" : "array";
                if (s && s.content) i = function (e, r) {
                    var t, a, n, s, i, c, o, l, f, h = {opts: {}}, u = {}, d = r.dense ? [] : {}, p = {}, g = {},
                        m = null, v = [], b = "", T = {}, E = "", w = {}, A = [], S = [], k = [],
                        y = {Sheets: [], WBProps: {date1904: !1}, Views: [{}]}, C = {}, _ = function (e) {
                            return e < 8 ? at[e] : e < 64 && k[e - 8] || at[e]
                        }, O = function (e, r, t) {
                            var a, n = r.XF.data;
                            n && n.patternType && t && t.cellStyles && (r.s = {}, r.s.patternType = n.patternType, (a = nm(_(n.icvFore))) && (r.s.fgColor = {rgb: a}), (a = nm(_(n.icvBack))) && (r.s.bgColor = {rgb: a}))
                        }, R = function (e, r, t) {
                            if (!(U > 1) && (!t.sheetRows || !(e.r >= t.sheetRows))) {
                                if (t.cellStyles && r.XF && r.XF.data && O(e, r, t), delete r.ixfe, delete r.XF, i = e, E = tz(e), g && g.s && g.e || (g = {
                                    s: {
                                        r: 0,
                                        c: 0
                                    }, e: {r: 0, c: 0}
                                }), e.r < g.s.r && (g.s.r = e.r), e.c < g.s.c && (g.s.c = e.c), e.r + 1 > g.e.r && (g.e.r = e.r + 1), e.c + 1 > g.e.c && (g.e.c = e.c + 1), t.cellFormula && r.f) {
                                    for (var a = 0; a < A.length; ++a) if (!(A[a][0].s.c > e.c) && !(A[a][0].s.r > e.r) && !(A[a][0].e.c < e.c) && !(A[a][0].e.r < e.r)) {
                                        r.F = t$(A[a][0]), (A[a][0].s.c != e.c || A[a][0].s.r != e.r) && delete r.f, r.f && (r.f = "" + sr(A[a][1], g, e, L, I));
                                        break
                                    }
                                }
                                t.dense ? (d[e.r] || (d[e.r] = []), d[e.r][e.c] = r) : d[E] = r
                            }
                        }, I = {
                            enc: !1,
                            sbcch: 0,
                            snames: [],
                            sharedf: w,
                            arrayf: A,
                            rrtabid: [],
                            lastuser: "",
                            biff: 8,
                            codepage: 0,
                            winlocked: 0,
                            cellStyles: !!r && !!r.cellStyles,
                            WTF: !!r && !!r.wtf
                        };
                    r.password && (I.password = r.password);
                    var x = [], N = [], D = [], F = [], P = !1, L = [];
                    L.SheetNames = I.snames, L.sharedf = I.sharedf, L.arrayf = I.arrayf, L.names = [], L.XTI = [];
                    var M = 0, U = 0, B = 0, H = [], W = [];
                    I.codepage = 1200, ea(1200);
                    for (var V = !1; e.l < e.length - 1;) {
                        var z = e.l, G = e.read_shift(2);
                        if (0 === G && 10 === M) break;
                        var Y = e.l === e.length ? 0 : e.read_shift(2), j = sX[G];
                        if (j && j.f) {
                            if (r.bookSheets && 133 === M && 133 !== G) break;
                            if (M = G, 2 === j.r || 12 == j.r) {
                                var K = e.read_shift(2);
                                if (Y -= 2, !I.enc && K !== G && ((255 & K) << 8 | K >> 8) !== G) throw Error("rt mismatch: " + K + "!=" + G);
                                12 == j.r && (e.l += 10, Y -= 10)
                            }
                            var X = {};
                            if (X = 10 === G ? j.f(e, Y, I) : function (e, r, t, a, n) {
                                var s = a, i = [], c = t.slice(t.l, t.l + s);
                                if (n && n.enc && n.enc.insitu && c.length > 0) switch (e) {
                                    case 9:
                                    case 521:
                                    case 1033:
                                    case 2057:
                                    case 47:
                                    case 405:
                                    case 225:
                                    case 406:
                                    case 312:
                                    case 404:
                                    case 10:
                                    case 133:
                                        break;
                                    default:
                                        n.enc.insitu(c)
                                }
                                i.push(c), t.l += s;
                                for (var o = tT(t, t.l), l = sX[o], f = 0; null != l && sz.indexOf(o) > -1;) s = tT(t, t.l + 2), f = t.l + 4, 2066 == o ? f += 4 : (2165 == o || 2175 == o) && (f += 12), c = t.slice(f, t.l + 4 + s), i.push(c), t.l += 4 + s, l = sX[o = tT(t, t.l)];
                                var h = eE(i);
                                tR(h, 0);
                                var u = 0;
                                h.lens = [];
                                for (var d = 0; d < i.length; ++d) h.lens.push(u), u += i[d].length;
                                if (h.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + h.length + " < " + a;
                                return r.f(h, h.length, n)
                            }(G, j, e, Y, I), 0 == U && -1 === [9, 521, 1033, 2057].indexOf(M)) continue;
                            switch (G) {
                                case 34:
                                    h.opts.Date1904 = y.WBProps.date1904 = X;
                                    break;
                                case 134:
                                    h.opts.WriteProtect = !0;
                                    break;
                                case 47:
                                    if (I.enc || (e.l = 0), I.enc = X, !r.password) throw Error("File is password-protected");
                                    if (null == X.valid) throw Error("Encryption scheme unsupported");
                                    if (!X.valid) throw Error("Password is incorrect");
                                    break;
                                case 92:
                                    I.lastuser = X;
                                    break;
                                case 66:
                                    var J = Number(X);
                                    switch (J) {
                                        case 21010:
                                            J = 1200;
                                            break;
                                        case 32768:
                                            J = 1e4;
                                            break;
                                        case 32769:
                                            J = 1252
                                    }
                                    ea(I.codepage = J), V = !0;
                                    break;
                                case 317:
                                    I.rrtabid = X;
                                    break;
                                case 25:
                                    I.winlocked = X;
                                    break;
                                case 439:
                                    h.opts.RefreshAll = X;
                                    break;
                                case 12:
                                    h.opts.CalcCount = X;
                                    break;
                                case 16:
                                    h.opts.CalcDelta = X;
                                    break;
                                case 17:
                                    h.opts.CalcIter = X;
                                    break;
                                case 13:
                                    h.opts.CalcMode = X;
                                    break;
                                case 14:
                                    h.opts.CalcPrecision = X;
                                    break;
                                case 95:
                                    h.opts.CalcSaveRecalc = X;
                                    break;
                                case 15:
                                    I.CalcRefMode = X;
                                    break;
                                case 2211:
                                    h.opts.FullCalc = X;
                                    break;
                                case 129:
                                    X.fDialog && (d["!type"] = "dialog"), X.fBelow || ((d["!outline"] || (d["!outline"] = {})).above = !0), X.fRight || ((d["!outline"] || (d["!outline"] = {})).left = !0);
                                    break;
                                case 224:
                                    S.push(X);
                                    break;
                                case 430:
                                    L.push([X]), L[L.length - 1].XTI = [];
                                    break;
                                case 35:
                                case 547:
                                    L[L.length - 1].push(X);
                                    break;
                                case 24:
                                case 536:
                                    s = {
                                        Name: X.Name,
                                        Ref: sr(X.rgce, g, null, L, I)
                                    }, X.itab > 0 && (s.Sheet = X.itab - 1), L.names.push(s), L[0] || (L[0] = [], L[0].XTI = []), L[L.length - 1].push(X), "_xlnm._FilterDatabase" == X.Name && X.itab > 0 && X.rgce && X.rgce[0] && X.rgce[0][0] && "PtgArea3d" == X.rgce[0][0][0] && (W[X.itab - 1] = {ref: t$(X.rgce[0][0][1][2])});
                                    break;
                                case 22:
                                    I.ExternCount = X;
                                    break;
                                case 23:
                                    0 == L.length && (L[0] = [], L[0].XTI = []), L[L.length - 1].XTI = L[L.length - 1].XTI.concat(X), L.XTI = L.XTI.concat(X);
                                    break;
                                case 2196:
                                    if (I.biff < 8) break;
                                    null != s && (s.Comment = X[1]);
                                    break;
                                case 18:
                                    d["!protect"] = X;
                                    break;
                                case 19:
                                    0 !== X && I.WTF && console.error("Password verifier: " + X);
                                    break;
                                case 133:
                                    p[X.pos] = X, I.snames.push(X.name);
                                    break;
                                case 10:
                                    if (--U) break;
                                    if (g.e) {
                                        if (g.e.r > 0 && g.e.c > 0) {
                                            if (g.e.r--, g.e.c--, d["!ref"] = t$(g), r.sheetRows && r.sheetRows <= g.e.r) {
                                                var Z = g.e.r;
                                                g.e.r = r.sheetRows - 1, d["!fullref"] = d["!ref"], d["!ref"] = t$(g), g.e.r = Z
                                            }
                                            g.e.r++, g.e.c++
                                        }
                                        x.length > 0 && (d["!merges"] = x), N.length > 0 && (d["!objects"] = N), D.length > 0 && (d["!cols"] = D), F.length > 0 && (d["!rows"] = F), y.Sheets.push(C)
                                    }
                                    "" === b ? T = d : u[b] = d, d = r.dense ? [] : {};
                                    break;
                                case 9:
                                case 521:
                                case 1033:
                                case 2057:
                                    if (8 === I.biff && (I.biff = ({9: 2, 521: 3, 1033: 4})[G] || ({
                                        512: 2,
                                        768: 3,
                                        1024: 4,
                                        1280: 5,
                                        1536: 8,
                                        2: 2,
                                        7: 2
                                    })[X.BIFFVer] || 8), I.biffguess = 0 == X.BIFFVer, 0 == X.BIFFVer && 4096 == X.dt && (I.biff = 5, V = !0, ea(I.codepage = 28591)), 8 == I.biff && 0 == X.BIFFVer && 16 == X.dt && (I.biff = 2), U++) break;
                                    if (d = r.dense ? [] : {}, I.biff < 8 && !V && (V = !0, ea(I.codepage = r.codepage || 1252)), I.biff < 5 || 0 == X.BIFFVer && 4096 == X.dt) {
                                        "" === b && (b = "Sheet1"), g = {s: {r: 0, c: 0}, e: {r: 0, c: 0}};
                                        var q = {pos: e.l - Y, name: b};
                                        p[q.pos] = q, I.snames.push(b)
                                    } else b = (p[z] || {name: ""}).name;
                                    32 == X.dt && (d["!type"] = "chart"), 64 == X.dt && (d["!type"] = "macro"), x = [], N = [], I.arrayf = A = [], D = [], F = [], P = !1, C = {
                                        Hidden: (p[z] || {hs: 0}).hs,
                                        name: b
                                    };
                                    break;
                                case 515:
                                case 3:
                                case 2:
                                    "chart" == d["!type"] && (r.dense ? (d[X.r] || [])[X.c] : d[tz({
                                        c: X.c,
                                        r: X.r
                                    })]) && ++X.c, t = {
                                        ixfe: X.ixfe,
                                        XF: S[X.ixfe] || {},
                                        v: X.val,
                                        t: "n"
                                    }, B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                        c: X.c,
                                        r: X.r
                                    }, t, r);
                                    break;
                                case 5:
                                case 517:
                                    t = {
                                        ixfe: X.ixfe,
                                        XF: S[X.ixfe],
                                        v: X.val,
                                        t: X.t
                                    }, B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                        c: X.c,
                                        r: X.r
                                    }, t, r);
                                    break;
                                case 638:
                                    t = {
                                        ixfe: X.ixfe,
                                        XF: S[X.ixfe],
                                        v: X.rknum,
                                        t: "n"
                                    }, B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                        c: X.c,
                                        r: X.r
                                    }, t, r);
                                    break;
                                case 189:
                                    for (var Q = X.c; Q <= X.C; ++Q) {
                                        var ee = X.rkrec[Q - X.c][0];
                                        t = {
                                            ixfe: ee,
                                            XF: S[ee],
                                            v: X.rkrec[Q - X.c][1],
                                            t: "n"
                                        }, B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                            c: Q,
                                            r: X.r
                                        }, t, r)
                                    }
                                    break;
                                case 6:
                                case 518:
                                case 1030:
                                    if ("String" == X.val) {
                                        m = X;
                                        break
                                    }
                                    if ((t = s$(X.val, X.cell.ixfe, X.tt)).XF = S[t.ixfe], r.cellFormula) {
                                        var er = X.formula;
                                        if (er && er[0] && er[0][0] && "PtgExp" == er[0][0][0]) {
                                            var et = er[0][0][1][0], en = er[0][0][1][1], es = tz({r: et, c: en});
                                            w[es] ? t.f = "" + sr(X.formula, g, X.cell, L, I) : t.F = ((r.dense ? (d[et] || [])[en] : d[es]) || {}).F
                                        } else t.f = "" + sr(X.formula, g, X.cell, L, I)
                                    }
                                    B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R(X.cell, t, r), m = X;
                                    break;
                                case 7:
                                case 519:
                                    if (m) m.val = X, (t = s$(X, m.cell.ixfe, "s")).XF = S[t.ixfe], r.cellFormula && (t.f = "" + sr(m.formula, g, m.cell, L, I)), B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R(m.cell, t, r), m = null; else throw Error("String record expects Formula");
                                    break;
                                case 33:
                                case 545:
                                    A.push(X);
                                    var ei = tz(X[0].s);
                                    if (c = r.dense ? (d[X[0].s.r] || [])[X[0].s.c] : d[ei], r.cellFormula && c) {
                                        if (!m || !ei || !c) break;
                                        c.f = "" + sr(X[1], g, X[0], L, I), c.F = t$(X[0])
                                    }
                                    break;
                                case 1212:
                                    if (!r.cellFormula) break;
                                    if (E) {
                                        if (!m) break;
                                        w[tz(m.cell)] = X[0], ((c = r.dense ? (d[m.cell.r] || [])[m.cell.c] : d[tz(m.cell)]) || {}).f = "" + sr(X[0], g, i, L, I)
                                    }
                                    break;
                                case 253:
                                    t = s$(v[X.isst].t, X.ixfe, "s"), v[X.isst].h && (t.h = v[X.isst].h), t.XF = S[t.ixfe], B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                        c: X.c,
                                        r: X.r
                                    }, t, r);
                                    break;
                                case 513:
                                    r.sheetStubs && (t = {
                                        ixfe: X.ixfe,
                                        XF: S[X.ixfe],
                                        t: "z"
                                    }, B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                        c: X.c,
                                        r: X.r
                                    }, t, r));
                                    break;
                                case 190:
                                    if (r.sheetStubs) for (var ec = X.c; ec <= X.C; ++ec) {
                                        var eo = X.ixfe[ec - X.c];
                                        t = {
                                            ixfe: eo,
                                            XF: S[eo],
                                            t: "z"
                                        }, B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                            c: ec,
                                            r: X.r
                                        }, t, r)
                                    }
                                    break;
                                case 214:
                                case 516:
                                case 4:
                                    (t = s$(X.val, X.ixfe, "s")).XF = S[t.ixfe], B > 0 && (t.z = H[t.ixfe >> 8 & 63]), sG(t, r, h.opts.Date1904), R({
                                        c: X.c,
                                        r: X.r
                                    }, t, r);
                                    break;
                                case 0:
                                case 512:
                                    1 === U && (g = X);
                                    break;
                                case 252:
                                    v = X;
                                    break;
                                case 1054:
                                    if (4 == I.biff) {
                                        H[B++] = X[1];
                                        for (var el = 0; el < B + 163 && ex[el] != X[1]; ++el) ;
                                        el >= 163 && e3(X[1], B + 163)
                                    } else e3(X[1], X[0]);
                                    break;
                                case 30:
                                    H[B++] = X;
                                    for (var ef = 0; ef < B + 163 && ex[ef] != X; ++ef) ;
                                    ef >= 163 && e3(X, B + 163);
                                    break;
                                case 229:
                                    x = x.concat(X);
                                    break;
                                case 93:
                                    N[X.cmo[0]] = I.lastobj = X;
                                    break;
                                case 438:
                                    I.lastobj.TxO = X;
                                    break;
                                case 127:
                                    I.lastobj.ImData = X;
                                    break;
                                case 440:
                                    for (f = X[0].s.r; f <= X[0].e.r; ++f) for (l = X[0].s.c; l <= X[0].e.c; ++l) (c = r.dense ? (d[f] || [])[l] : d[tz({
                                        c: l,
                                        r: f
                                    })]) && (c.l = X[1]);
                                    break;
                                case 2048:
                                    for (f = X[0].s.r; f <= X[0].e.r; ++f) for (l = X[0].s.c; l <= X[0].e.c; ++l) (c = r.dense ? (d[f] || [])[l] : d[tz({
                                        c: l,
                                        r: f
                                    })]) && c.l && (c.l.Tooltip = X[1]);
                                    break;
                                case 28:
                                    if (I.biff <= 5 && I.biff >= 2) break;
                                    c = r.dense ? (d[X[0].r] || [])[X[0].c] : d[tz(X[0])];
                                    var eh = N[X[2]];
                                    c || (r.dense ? (d[X[0].r] || (d[X[0].r] = []), c = d[X[0].r][X[0].c] = {t: "z"}) : c = d[tz(X[0])] = {t: "z"}, g.e.r = Math.max(g.e.r, X[0].r), g.s.r = Math.min(g.s.r, X[0].r), g.e.c = Math.max(g.e.c, X[0].c), g.s.c = Math.min(g.s.c, X[0].c)), c.c || (c.c = []), o = {
                                        a: X[1],
                                        t: eh.TxO.t
                                    }, c.c.push(o);
                                    break;
                                case 2173:
                                    !function (e, r) {
                                        r.forEach(function (e) {
                                            e[0]
                                        })
                                    }(S[X.ixfe], X.ext);
                                    break;
                                case 125:
                                    if (!I.cellStyles) break;
                                    for (; X.e >= X.s;) D[X.e--] = {
                                        width: X.w / 256,
                                        level: X.level || 0,
                                        hidden: !!(1 & X.flags)
                                    }, P || (P = !0, nS(X.w / 256)), nk(D[X.e + 1]);
                                    break;
                                case 520:
                                    var eu = {};
                                    null != X.level && (F[X.r] = eu, eu.level = X.level), X.hidden && (F[X.r] = eu, eu.hidden = !0), X.hpt && (F[X.r] = eu, eu.hpt = X.hpt, eu.hpx = ny(X.hpt));
                                    break;
                                case 38:
                                case 39:
                                case 40:
                                case 41:
                                    d["!margins"] || sh(d["!margins"] = {}), d["!margins"][({
                                        38: "left",
                                        39: "right",
                                        40: "top",
                                        41: "bottom"
                                    })[G]] = X;
                                    break;
                                case 161:
                                    d["!margins"] || sh(d["!margins"] = {}), d["!margins"].header = X.header, d["!margins"].footer = X.footer;
                                    break;
                                case 574:
                                    X.RTL && (y.Views[0].RTL = !0);
                                    break;
                                case 146:
                                    k = X;
                                    break;
                                case 2198:
                                    n = X;
                                    break;
                                case 140:
                                    a = X;
                                    break;
                                case 442:
                                    b ? C.CodeName = X || C.name : y.WBProps.CodeName = X || "ThisWorkbook"
                            }
                        } else j || console.error("Missing Info for XLS Record 0x" + G.toString(16)), e.l += Y
                    }
                    return h.SheetNames = re(p).sort(function (e, r) {
                        return Number(e) - Number(r)
                    }).map(function (e) {
                        return p[e].name
                    }), r.bookSheets || (h.Sheets = u), !h.SheetNames.length && T["!ref"] ? (h.SheetNames.push("Sheet1"), h.Sheets && (h.Sheets.Sheet1 = T)) : h.Preamble = T, h.Sheets && W.forEach(function (e, r) {
                        h.Sheets[h.SheetNames[r]]["!autofilter"] = e
                    }), h.Strings = v, h.SSF = rd(ex), I.enc && (h.Encryption = I.enc), n && (h.Themes = n), h.Metadata = {}, void 0 !== a && (h.Metadata.Country = a), L.names.length > 0 && (y.Names = L.names), h.Workbook = y, h
                }(s.content, r); else if ((c = e9.find(e, "PerfectOffice_MAIN")) && c.content) i = a7.to_workbook(c.content, (r.type = o, r)); else if ((c = e9.find(e, "NativeContent_MAIN")) && c.content) i = a7.to_workbook(c.content, (r.type = o, r)); else if ((c = e9.find(e, "MN0")) && c.content) throw Error("Unsupported Works 4 for Mac file"); else throw Error("Cannot find Workbook stream");
                r.bookVBA && e.FullPaths && e9.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (i.vbaraw = (t = e, a = e9.utils.cfb_new({root: "R"}), t.FullPaths.forEach(function (e, r) {
                    if ("/" !== e.slice(-1) && e.match(/_VBA_PROJECT_CUR/)) {
                        var n = e.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
                        e9.utils.cfb_add(a, n, t.FileIndex[r].content)
                    }
                }), e9.write(a)))
            }
            var l = {};
            return e.FullPaths && function (e, r, t) {
                var a = e9.find(e, "/!DocumentSummaryInformation");
                if (a && a.size > 0) try {
                    var n = ay(a, t7, sY.DSI);
                    for (var s in n) r[s] = n[s]
                } catch (e) {
                    if (t.WTF) throw e
                }
                var i = e9.find(e, "/!SummaryInformation");
                if (i && i.size > 0) try {
                    var c = ay(i, t9, sY.SI);
                    for (var o in c) null == r[o] && (r[o] = c[o])
                } catch (e) {
                    if (t.WTF) throw e
                }
                r.HeadingPairs && r.TitlesOfParts && (ad(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts)
            }(e, l, r), i.Props = i.Custprops = l, r.bookFiles && (i.cfb = e), i
        }

        var sK = {
            0: {
                f: function (e, r) {
                    var t = {}, a = e.l + r;
                    t.r = e.read_shift(4), e.l += 4;
                    var n = e.read_shift(2);
                    e.l += 1;
                    var s = e.read_shift(1);
                    return e.l = a, 7 & s && (t.level = 7 & s), 16 & s && (t.hidden = !0), 32 & s && (t.hpt = n / 20), t
                }
            },
            1: {
                f: function (e) {
                    return [t1(e)]
                }
            },
            2: {
                f: function (e) {
                    return [t1(e), t4(e), "n"]
                }
            },
            3: {
                f: function (e) {
                    return [t1(e), e.read_shift(1), "e"]
                }
            },
            4: {
                f: function (e) {
                    return [t1(e), e.read_shift(1), "b"]
                }
            },
            5: {
                f: function (e) {
                    return [t1(e), t5(e), "n"]
                }
            },
            6: {
                f: function (e) {
                    return [t1(e), tq(e), "str"]
                }
            },
            7: {
                f: function (e) {
                    return [t1(e), e.read_shift(4), "s"]
                }
            },
            8: {
                f: function (e, r, t) {
                    var a = e.l + r, n = t1(e);
                    n.r = t["!row"];
                    var s = [n, tq(e), "str"];
                    if (t.cellFormula) {
                        e.l += 2;
                        var i = sa(e, a - e.l, t);
                        s[3] = sr(i, null, n, t.supbooks, t)
                    } else e.l = a;
                    return s
                }
            },
            9: {
                f: function (e, r, t) {
                    var a = e.l + r, n = t1(e);
                    n.r = t["!row"];
                    var s = [n, t5(e), "n"];
                    if (t.cellFormula) {
                        e.l += 2;
                        var i = sa(e, a - e.l, t);
                        s[3] = sr(i, null, n, t.supbooks, t)
                    } else e.l = a;
                    return s
                }
            },
            10: {
                f: function (e, r, t) {
                    var a = e.l + r, n = t1(e);
                    n.r = t["!row"];
                    var s = [n, e.read_shift(1), "b"];
                    if (t.cellFormula) {
                        e.l += 2;
                        var i = sa(e, a - e.l, t);
                        s[3] = sr(i, null, n, t.supbooks, t)
                    } else e.l = a;
                    return s
                }
            },
            11: {
                f: function (e, r, t) {
                    var a = e.l + r, n = t1(e);
                    n.r = t["!row"];
                    var s = [n, e.read_shift(1), "e"];
                    if (t.cellFormula) {
                        e.l += 2;
                        var i = sa(e, a - e.l, t);
                        s[3] = sr(i, null, n, t.supbooks, t)
                    } else e.l = a;
                    return s
                }
            },
            12: {
                f: function (e) {
                    return [t0(e)]
                }
            },
            13: {
                f: function (e) {
                    return [t0(e), t4(e), "n"]
                }
            },
            14: {
                f: function (e) {
                    return [t0(e), e.read_shift(1), "e"]
                }
            },
            15: {
                f: function (e) {
                    return [t0(e), e.read_shift(1), "b"]
                }
            },
            16: {f: sC},
            17: {
                f: function (e) {
                    return [t0(e), tq(e), "str"]
                }
            },
            18: {
                f: function (e) {
                    return [t0(e), e.read_shift(4), "s"]
                }
            },
            19: {f: tQ},
            20: {},
            21: {},
            22: {},
            23: {},
            24: {},
            25: {},
            26: {},
            27: {},
            28: {},
            29: {},
            30: {},
            31: {},
            32: {},
            33: {},
            34: {},
            35: {T: 1},
            36: {T: -1},
            37: {T: 1},
            38: {T: -1},
            39: {
                f: function (e, r, t) {
                    var a = e.l + r;
                    e.l += 4, e.l += 1;
                    var n = e.read_shift(4), s = tq(e), i = sa(e, 0, t), c = t2(e);
                    e.l = a;
                    var o = {Name: s, Ptg: i};
                    return n < 268435455 && (o.Sheet = n), c && (o.Comment = c), o
                }
            },
            40: {},
            42: {},
            43: {
                f: function (e, r, t) {
                    var a, n = {};
                    n.sz = e.read_shift(2) / 20;
                    var s = (a = e.read_shift(1), e.l++, {
                        fBold: 1 & a,
                        fItalic: 2 & a,
                        fUnderline: 4 & a,
                        fStrikeout: 8 & a,
                        fOutline: 16 & a,
                        fShadow: 32 & a,
                        fCondense: 64 & a,
                        fExtend: 128 & a
                    });
                    switch (s.fItalic && (n.italic = 1), s.fCondense && (n.condense = 1), s.fExtend && (n.extend = 1), s.fShadow && (n.shadow = 1), s.fOutline && (n.outline = 1), s.fStrikeout && (n.strike = 1), 700 === e.read_shift(2) && (n.bold = 1), e.read_shift(2)) {
                        case 1:
                            n.vertAlign = "superscript";
                            break;
                        case 2:
                            n.vertAlign = "subscript"
                    }
                    var i = e.read_shift(1);
                    0 != i && (n.underline = i);
                    var c = e.read_shift(1);
                    c > 0 && (n.family = c);
                    var o = e.read_shift(1);
                    switch (o > 0 && (n.charset = o), e.l++, n.color = function (e) {
                        var r = {}, t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(2, "i"),
                            s = e.read_shift(1), i = e.read_shift(1), c = e.read_shift(1);
                        switch (e.l++, t >>> 1) {
                            case 0:
                                r.auto = 1;
                                break;
                            case 1:
                                r.index = a;
                                var o = at[a];
                                o && (r.rgb = nm(o));
                                break;
                            case 2:
                                r.rgb = nm([s, i, c]);
                                break;
                            case 3:
                                r.theme = a
                        }
                        return 0 != n && (r.tint = n > 0 ? n / 32767 : n / 32768), r
                    }(e, 8), e.read_shift(1)) {
                        case 1:
                            n.scheme = "major";
                            break;
                        case 2:
                            n.scheme = "minor"
                    }
                    return n.name = tq(e, r - 21), n
                }
            },
            44: {
                f: function (e, r) {
                    return [e.read_shift(2), tq(e, r - 2)]
                }
            },
            45: {f: tI},
            46: {f: tI},
            47: {
                f: function (e, r) {
                    var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
                    return e.l = t, {ixfe: a, numFmtId: n}
                }
            },
            48: {},
            49: {
                f: function (e) {
                    return e.read_shift(4, "i")
                }
            },
            50: {},
            51: {
                f: function (e) {
                    for (var r = [], t = e.read_shift(4); t-- > 0;) r.push([e.read_shift(4), e.read_shift(4)]);
                    return r
                }
            },
            52: {T: 1},
            53: {T: -1},
            54: {T: 1},
            55: {T: -1},
            56: {T: 1},
            57: {T: -1},
            58: {},
            59: {},
            60: {f: a0},
            62: {
                f: function (e) {
                    return [t1(e), tQ(e), "is"]
                }
            },
            63: {
                f: function (e) {
                    var r = {};
                    r.i = e.read_shift(4);
                    var t = {};
                    t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = tz(t);
                    var a = e.read_shift(1);
                    return 2 & a && (r.l = "1"), 8 & a && (r.a = "1"), r
                }
            },
            64: {
                f: function () {
                }
            },
            65: {},
            66: {},
            67: {},
            68: {},
            69: {},
            70: {},
            128: {},
            129: {T: 1},
            130: {T: -1},
            131: {T: 1, f: tI, p: 0},
            132: {T: -1},
            133: {T: 1},
            134: {T: -1},
            135: {T: 1},
            136: {T: -1},
            137: {
                T: 1, f: function (e) {
                    var r = e.read_shift(2);
                    return e.l += 28, {RTL: 32 & r}
                }
            },
            138: {T: -1},
            139: {T: 1},
            140: {T: -1},
            141: {T: 1},
            142: {T: -1},
            143: {T: 1},
            144: {T: -1},
            145: {T: 1},
            146: {T: -1},
            147: {
                f: function (e, r) {
                    var t = {}, a = e[e.l];
                    return ++e.l, t.above = !(64 & a), t.left = !(128 & a), e.l += 18, t.name = tq(e, r - 19), t
                }
            },
            148: {f: t3, p: 16},
            151: {
                f: function () {
                }
            },
            152: {},
            153: {
                f: function (e, r) {
                    var t = {}, a = e.read_shift(4);
                    t.defaultThemeVersion = e.read_shift(4);
                    var n = r > 8 ? tq(e) : "";
                    return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(65536 & a), t.backupFile = !!(64 & a), t.checkCompatibility = !!(4096 & a), t.date1904 = !!(1 & a), t.filterPrivacy = !!(8 & a), t.hidePivotFieldList = !!(1024 & a), t.promptedSolutions = !!(16 & a), t.publishItems = !!(2048 & a), t.refreshAllConnections = !!(262144 & a), t.saveExternalLinkValues = !!(128 & a), t.showBorderUnselectedTables = !!(4 & a), t.showInkAnnotation = !!(32 & a), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(32768 & a), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t
                }
            },
            154: {},
            155: {},
            156: {
                f: function (e, r) {
                    var t = {};
                    return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = t2(e, r - 8), t.name = tq(e), t
                }
            },
            157: {},
            158: {},
            159: {
                T: 1, f: function (e) {
                    return [e.read_shift(4), e.read_shift(4)]
                }
            },
            160: {T: -1},
            161: {T: 1, f: t3},
            162: {T: -1},
            163: {T: 1},
            164: {T: -1},
            165: {T: 1},
            166: {T: -1},
            167: {},
            168: {},
            169: {},
            170: {},
            171: {},
            172: {T: 1},
            173: {T: -1},
            174: {},
            175: {},
            176: {f: t3},
            177: {T: 1},
            178: {T: -1},
            179: {T: 1},
            180: {T: -1},
            181: {T: 1},
            182: {T: -1},
            183: {T: 1},
            184: {T: -1},
            185: {T: 1},
            186: {T: -1},
            187: {T: 1},
            188: {T: -1},
            189: {T: 1},
            190: {T: -1},
            191: {T: 1},
            192: {T: -1},
            193: {T: 1},
            194: {T: -1},
            195: {T: 1},
            196: {T: -1},
            197: {T: 1},
            198: {T: -1},
            199: {T: 1},
            200: {T: -1},
            201: {T: 1},
            202: {T: -1},
            203: {T: 1},
            204: {T: -1},
            205: {T: 1},
            206: {T: -1},
            207: {T: 1},
            208: {T: -1},
            209: {T: 1},
            210: {T: -1},
            211: {T: 1},
            212: {T: -1},
            213: {T: 1},
            214: {T: -1},
            215: {T: 1},
            216: {T: -1},
            217: {T: 1},
            218: {T: -1},
            219: {T: 1},
            220: {T: -1},
            221: {T: 1},
            222: {T: -1},
            223: {T: 1},
            224: {T: -1},
            225: {T: 1},
            226: {T: -1},
            227: {T: 1},
            228: {T: -1},
            229: {T: 1},
            230: {T: -1},
            231: {T: 1},
            232: {T: -1},
            233: {T: 1},
            234: {T: -1},
            235: {T: 1},
            236: {T: -1},
            237: {T: 1},
            238: {T: -1},
            239: {T: 1},
            240: {T: -1},
            241: {T: 1},
            242: {T: -1},
            243: {T: 1},
            244: {T: -1},
            245: {T: 1},
            246: {T: -1},
            247: {T: 1},
            248: {T: -1},
            249: {T: 1},
            250: {T: -1},
            251: {T: 1},
            252: {T: -1},
            253: {T: 1},
            254: {T: -1},
            255: {T: 1},
            256: {T: -1},
            257: {T: 1},
            258: {T: -1},
            259: {T: 1},
            260: {T: -1},
            261: {T: 1},
            262: {T: -1},
            263: {T: 1},
            264: {T: -1},
            265: {T: 1},
            266: {T: -1},
            267: {T: 1},
            268: {T: -1},
            269: {T: 1},
            270: {T: -1},
            271: {T: 1},
            272: {T: -1},
            273: {T: 1},
            274: {T: -1},
            275: {T: 1},
            276: {T: -1},
            277: {},
            278: {T: 1},
            279: {T: -1},
            280: {T: 1},
            281: {T: -1},
            282: {T: 1},
            283: {T: 1},
            284: {T: -1},
            285: {T: 1},
            286: {T: -1},
            287: {T: 1},
            288: {T: -1},
            289: {T: 1},
            290: {T: -1},
            291: {T: 1},
            292: {T: -1},
            293: {T: 1},
            294: {T: -1},
            295: {T: 1},
            296: {T: -1},
            297: {T: 1},
            298: {T: -1},
            299: {T: 1},
            300: {T: -1},
            301: {T: 1},
            302: {T: -1},
            303: {T: 1},
            304: {T: -1},
            305: {T: 1},
            306: {T: -1},
            307: {T: 1},
            308: {T: -1},
            309: {T: 1},
            310: {T: -1},
            311: {T: 1},
            312: {T: -1},
            313: {T: -1},
            314: {T: 1},
            315: {T: -1},
            316: {T: 1},
            317: {T: -1},
            318: {T: 1},
            319: {T: -1},
            320: {T: 1},
            321: {T: -1},
            322: {T: 1},
            323: {T: -1},
            324: {T: 1},
            325: {T: -1},
            326: {T: 1},
            327: {T: -1},
            328: {T: 1},
            329: {T: -1},
            330: {T: 1},
            331: {T: -1},
            332: {T: 1},
            333: {T: -1},
            334: {T: 1},
            335: {
                f: function (e, r) {
                    return {flags: e.read_shift(4), version: e.read_shift(4), name: tq(e, r - 8)}
                }
            },
            336: {T: -1},
            337: {
                f: function (e) {
                    return e.l += 4, 0 != e.read_shift(4)
                }, T: 1
            },
            338: {T: -1},
            339: {T: 1},
            340: {T: -1},
            341: {T: 1},
            342: {T: -1},
            343: {T: 1},
            344: {T: -1},
            345: {T: 1},
            346: {T: -1},
            347: {T: 1},
            348: {T: -1},
            349: {T: 1},
            350: {T: -1},
            351: {},
            352: {},
            353: {T: 1},
            354: {T: -1},
            355: {f: t2},
            357: {},
            358: {},
            359: {},
            360: {T: 1},
            361: {},
            362: {f: aq},
            363: {},
            364: {},
            366: {},
            367: {},
            368: {},
            369: {},
            370: {},
            371: {},
            372: {T: 1},
            373: {T: -1},
            374: {T: 1},
            375: {T: -1},
            376: {T: 1},
            377: {T: -1},
            378: {T: 1},
            379: {T: -1},
            380: {T: 1},
            381: {T: -1},
            382: {T: 1},
            383: {T: -1},
            384: {T: 1},
            385: {T: -1},
            386: {T: 1},
            387: {T: -1},
            388: {T: 1},
            389: {T: -1},
            390: {T: 1},
            391: {T: -1},
            392: {T: 1},
            393: {T: -1},
            394: {T: 1},
            395: {T: -1},
            396: {},
            397: {},
            398: {},
            399: {},
            400: {},
            401: {T: 1},
            403: {},
            404: {},
            405: {},
            406: {},
            407: {},
            408: {},
            409: {},
            410: {},
            411: {},
            412: {},
            413: {},
            414: {},
            415: {},
            416: {},
            417: {},
            418: {},
            419: {},
            420: {},
            421: {},
            422: {T: 1},
            423: {T: 1},
            424: {T: -1},
            425: {T: -1},
            426: {
                f: function (e, r, t) {
                    var a = e.l + r, n = t3(e, 16), s = e.read_shift(1), i = [n];
                    if (i[2] = s, t.cellFormula) {
                        var c = sa(e, a - e.l, t);
                        i[1] = c
                    } else e.l = a;
                    return i
                }
            },
            427: {
                f: function (e, r, t) {
                    var a = e.l + r, n = [t3(e, 16)];
                    if (t.cellFormula) {
                        var s = sa(e, a - e.l, t);
                        n[1] = s, e.l = a
                    } else e.l = a;
                    return n
                }
            },
            428: {},
            429: {T: 1},
            430: {T: -1},
            431: {T: 1},
            432: {T: -1},
            433: {T: 1},
            434: {T: -1},
            435: {T: 1},
            436: {T: -1},
            437: {T: 1},
            438: {T: -1},
            439: {T: 1},
            440: {T: -1},
            441: {T: 1},
            442: {T: -1},
            443: {T: 1},
            444: {T: -1},
            445: {T: 1},
            446: {T: -1},
            447: {T: 1},
            448: {T: -1},
            449: {T: 1},
            450: {T: -1},
            451: {T: 1},
            452: {T: -1},
            453: {T: 1},
            454: {T: -1},
            455: {T: 1},
            456: {T: -1},
            457: {T: 1},
            458: {T: -1},
            459: {T: 1},
            460: {T: -1},
            461: {T: 1},
            462: {T: -1},
            463: {T: 1},
            464: {T: -1},
            465: {T: 1},
            466: {T: -1},
            467: {T: 1},
            468: {T: -1},
            469: {T: 1},
            470: {T: -1},
            471: {},
            472: {},
            473: {T: 1},
            474: {T: -1},
            475: {},
            476: {
                f: function (e) {
                    var r = {};
                    return s_.forEach(function (t) {
                        r[t] = t5(e, 8)
                    }), r
                }
            },
            477: {},
            478: {},
            479: {T: 1},
            480: {T: -1},
            481: {T: 1},
            482: {T: -1},
            483: {T: 1},
            484: {T: -1},
            485: {
                f: function () {
                }
            },
            486: {T: 1},
            487: {T: -1},
            488: {T: 1},
            489: {T: -1},
            490: {T: 1},
            491: {T: -1},
            492: {T: 1},
            493: {T: -1},
            494: {
                f: function (e, r) {
                    var t = e.l + r, a = t3(e, 16), n = t2(e), s = tq(e), i = tq(e), c = tq(e);
                    e.l = t;
                    var o = {rfx: a, relId: n, loc: s, display: c};
                    return i && (o.Tooltip = i), o
                }
            },
            495: {T: 1},
            496: {T: -1},
            497: {T: 1},
            498: {T: -1},
            499: {},
            500: {T: 1},
            501: {T: -1},
            502: {T: 1},
            503: {T: -1},
            504: {},
            505: {T: 1},
            506: {T: -1},
            507: {},
            508: {T: 1},
            509: {T: -1},
            510: {T: 1},
            511: {T: -1},
            512: {},
            513: {},
            514: {T: 1},
            515: {T: -1},
            516: {T: 1},
            517: {T: -1},
            518: {T: 1},
            519: {T: -1},
            520: {T: 1},
            521: {T: -1},
            522: {},
            523: {},
            524: {},
            525: {},
            526: {},
            527: {},
            528: {T: 1},
            529: {T: -1},
            530: {T: 1},
            531: {T: -1},
            532: {T: 1},
            533: {T: -1},
            534: {},
            535: {},
            536: {},
            537: {},
            538: {T: 1},
            539: {T: -1},
            540: {T: 1},
            541: {T: -1},
            542: {T: 1},
            548: {},
            549: {},
            550: {f: t2},
            551: {},
            552: {},
            553: {},
            554: {T: 1},
            555: {T: -1},
            556: {T: 1},
            557: {T: -1},
            558: {T: 1},
            559: {T: -1},
            560: {T: 1},
            561: {T: -1},
            562: {},
            564: {},
            565: {T: 1},
            566: {T: -1},
            569: {T: 1},
            570: {T: -1},
            572: {},
            573: {T: 1},
            574: {T: -1},
            577: {},
            578: {},
            579: {},
            580: {},
            581: {},
            582: {},
            583: {},
            584: {},
            585: {},
            586: {},
            587: {},
            588: {T: -1},
            589: {},
            590: {T: 1},
            591: {T: -1},
            592: {T: 1},
            593: {T: -1},
            594: {T: 1},
            595: {T: -1},
            596: {},
            597: {T: 1},
            598: {T: -1},
            599: {T: 1},
            600: {T: -1},
            601: {T: 1},
            602: {T: -1},
            603: {T: 1},
            604: {T: -1},
            605: {T: 1},
            606: {T: -1},
            607: {},
            608: {T: 1},
            609: {T: -1},
            610: {},
            611: {T: 1},
            612: {T: -1},
            613: {T: 1},
            614: {T: -1},
            615: {T: 1},
            616: {T: -1},
            617: {T: 1},
            618: {T: -1},
            619: {T: 1},
            620: {T: -1},
            625: {},
            626: {T: 1},
            627: {T: -1},
            628: {T: 1},
            629: {T: -1},
            630: {T: 1},
            631: {T: -1},
            632: {f: tq},
            633: {T: 1},
            634: {T: -1},
            635: {
                T: 1, f: function (e) {
                    var r = {};
                    r.iauthor = e.read_shift(4);
                    var t = t3(e, 16);
                    return r.rfx = t.s, r.ref = tz(t.s), e.l += 16, r
                }
            },
            636: {T: -1},
            637: {f: tQ},
            638: {T: 1},
            639: {},
            640: {T: -1},
            641: {T: 1},
            642: {T: -1},
            643: {T: 1},
            644: {},
            645: {T: -1},
            646: {T: 1},
            648: {T: 1},
            649: {},
            650: {T: -1},
            651: {
                f: function (e, r) {
                    return e.l += 10, {name: tq(e, r - 10)}
                }
            },
            652: {},
            653: {T: 1},
            654: {T: -1},
            655: {T: 1},
            656: {T: -1},
            657: {T: 1},
            658: {T: -1},
            659: {},
            660: {T: 1},
            661: {},
            662: {T: -1},
            663: {},
            664: {T: 1},
            665: {},
            666: {T: -1},
            667: {},
            668: {},
            669: {},
            671: {T: 1},
            672: {T: -1},
            673: {T: 1},
            674: {T: -1},
            675: {},
            676: {},
            677: {},
            678: {},
            679: {},
            680: {},
            681: {},
            1024: {},
            1025: {},
            1026: {T: 1},
            1027: {T: -1},
            1028: {T: 1},
            1029: {T: -1},
            1030: {},
            1031: {T: 1},
            1032: {T: -1},
            1033: {T: 1},
            1034: {T: -1},
            1035: {},
            1036: {},
            1037: {},
            1038: {T: 1},
            1039: {T: -1},
            1040: {},
            1041: {T: 1},
            1042: {T: -1},
            1043: {},
            1044: {},
            1045: {},
            1046: {T: 1},
            1047: {T: -1},
            1048: {T: 1},
            1049: {T: -1},
            1050: {},
            1051: {T: 1},
            1052: {T: 1},
            1053: {
                f: function () {
                }
            },
            1054: {T: 1},
            1055: {},
            1056: {T: 1},
            1057: {T: -1},
            1058: {T: 1},
            1059: {T: -1},
            1061: {},
            1062: {T: 1},
            1063: {T: -1},
            1064: {T: 1},
            1065: {T: -1},
            1066: {T: 1},
            1067: {T: -1},
            1068: {T: 1},
            1069: {T: -1},
            1070: {T: 1},
            1071: {T: -1},
            1072: {T: 1},
            1073: {T: -1},
            1075: {T: 1},
            1076: {T: -1},
            1077: {T: 1},
            1078: {T: -1},
            1079: {T: 1},
            1080: {T: -1},
            1081: {T: 1},
            1082: {T: -1},
            1083: {T: 1},
            1084: {T: -1},
            1085: {},
            1086: {T: 1},
            1087: {T: -1},
            1088: {T: 1},
            1089: {T: -1},
            1090: {T: 1},
            1091: {T: -1},
            1092: {T: 1},
            1093: {T: -1},
            1094: {T: 1},
            1095: {T: -1},
            1096: {},
            1097: {T: 1},
            1098: {},
            1099: {T: -1},
            1100: {T: 1},
            1101: {T: -1},
            1102: {},
            1103: {},
            1104: {},
            1105: {},
            1111: {},
            1112: {},
            1113: {T: 1},
            1114: {T: -1},
            1115: {T: 1},
            1116: {T: -1},
            1117: {},
            1118: {T: 1},
            1119: {T: -1},
            1120: {T: 1},
            1121: {T: -1},
            1122: {T: 1},
            1123: {T: -1},
            1124: {T: 1},
            1125: {T: -1},
            1126: {},
            1128: {T: 1},
            1129: {T: -1},
            1130: {},
            1131: {T: 1},
            1132: {T: -1},
            1133: {T: 1},
            1134: {T: -1},
            1135: {T: 1},
            1136: {T: -1},
            1137: {T: 1},
            1138: {T: -1},
            1139: {T: 1},
            1140: {T: -1},
            1141: {},
            1142: {T: 1},
            1143: {T: -1},
            1144: {T: 1},
            1145: {T: -1},
            1146: {},
            1147: {T: 1},
            1148: {T: -1},
            1149: {T: 1},
            1150: {T: -1},
            1152: {T: 1},
            1153: {T: -1},
            1154: {T: -1},
            1155: {T: -1},
            1156: {T: -1},
            1157: {T: 1},
            1158: {T: -1},
            1159: {T: 1},
            1160: {T: -1},
            1161: {T: 1},
            1162: {T: -1},
            1163: {T: 1},
            1164: {T: -1},
            1165: {T: 1},
            1166: {T: -1},
            1167: {T: 1},
            1168: {T: -1},
            1169: {T: 1},
            1170: {T: -1},
            1171: {},
            1172: {T: 1},
            1173: {T: -1},
            1177: {},
            1178: {T: 1},
            1180: {},
            1181: {},
            1182: {},
            2048: {T: 1},
            2049: {T: -1},
            2050: {},
            2051: {T: 1},
            2052: {T: -1},
            2053: {},
            2054: {},
            2055: {T: 1},
            2056: {T: -1},
            2057: {T: 1},
            2058: {T: -1},
            2060: {},
            2067: {},
            2068: {T: 1},
            2069: {T: -1},
            2070: {},
            2071: {},
            2072: {T: 1},
            2073: {T: -1},
            2075: {},
            2076: {},
            2077: {T: 1},
            2078: {T: -1},
            2079: {},
            2080: {T: 1},
            2081: {T: -1},
            2082: {},
            2083: {T: 1},
            2084: {T: -1},
            2085: {T: 1},
            2086: {T: -1},
            2087: {T: 1},
            2088: {T: -1},
            2089: {T: 1},
            2090: {T: -1},
            2091: {},
            2092: {},
            2093: {T: 1},
            2094: {T: -1},
            2095: {},
            2096: {T: 1},
            2097: {T: -1},
            2098: {T: 1},
            2099: {T: -1},
            2100: {T: 1},
            2101: {T: -1},
            2102: {},
            2103: {T: 1},
            2104: {T: -1},
            2105: {},
            2106: {T: 1},
            2107: {T: -1},
            2108: {},
            2109: {T: 1},
            2110: {T: -1},
            2111: {T: 1},
            2112: {T: -1},
            2113: {T: 1},
            2114: {T: -1},
            2115: {},
            2116: {},
            2117: {},
            2118: {T: 1},
            2119: {T: -1},
            2120: {},
            2121: {T: 1},
            2122: {T: -1},
            2123: {T: 1},
            2124: {T: -1},
            2125: {},
            2126: {T: 1},
            2127: {T: -1},
            2128: {},
            2129: {T: 1},
            2130: {T: -1},
            2131: {T: 1},
            2132: {T: -1},
            2133: {T: 1},
            2134: {},
            2135: {},
            2136: {},
            2137: {T: 1},
            2138: {T: -1},
            2139: {T: 1},
            2140: {T: -1},
            2141: {},
            3072: {},
            3073: {},
            4096: {T: 1},
            4097: {T: -1},
            5002: {T: 1},
            5003: {T: -1},
            5081: {T: 1},
            5082: {T: -1},
            5083: {},
            5084: {T: 1},
            5085: {T: -1},
            5086: {T: 1},
            5087: {T: -1},
            5088: {},
            5089: {},
            5090: {},
            5092: {T: 1},
            5093: {T: -1},
            5094: {},
            5095: {T: 1},
            5096: {T: -1},
            5097: {},
            5099: {},
            65535: {n: ""}
        }, sX = {
            6: {f: st},
            10: {f: aC},
            12: {f: aO},
            13: {f: aO},
            14: {f: a_},
            15: {f: a_},
            16: {f: t5},
            17: {f: a_},
            18: {f: a_},
            19: {f: aO},
            20: {f: aK},
            21: {f: aK},
            23: {f: aq},
            24: {f: aZ},
            25: {f: a_},
            26: {},
            27: {},
            28: {
                f: function (e, r, t) {
                    return function (e, r, t) {
                        if (!(t.biff < 8)) {
                            var a = e.read_shift(2), n = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2),
                                c = aD(e, 0, t);
                            return t.biff < 8 && e.read_shift(1), [{r: a, c: n}, c, i, s]
                        }
                    }(e, 0, t)
                }
            },
            29: {},
            34: {f: a_},
            35: {f: aX},
            38: {f: t5},
            39: {f: t5},
            40: {f: t5},
            41: {f: t5},
            42: {f: a_},
            43: {f: a_},
            47: {
                f: function (e, r, t) {
                    var a, n, s, i = {Type: t.biff >= 8 ? e.read_shift(2) : 0};
                    return i.Type ? (a = r - 2, (n = i || {}).Info = e.read_shift(2), e.l -= 2, 1 === n.Info ? n.Data = function (e) {
                        var r = {}, t = r.EncryptionVersionInfo = nl(e, 4);
                        if (1 != t.Major || 1 != t.Minor) throw "unrecognized version code " + t.Major + " : " + t.Minor;
                        return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r
                    }(e, a) : n.Data = function (e, r) {
                        var t = {}, a = t.EncryptionVersionInfo = nl(e, 4);
                        if (r -= 4, 2 != a.Minor) throw Error("unrecognized minor version code: " + a.Minor);
                        if (a.Major > 4 || a.Major < 2) throw Error("unrecognized major version code: " + a.Major);
                        t.Flags = e.read_shift(4), r -= 4;
                        var n = e.read_shift(4);
                        return r -= 4, t.EncryptionHeader = nf(e, n), r -= n, t.EncryptionVerifier = nh(e, r), t
                    }(e, a)) : (t.biff, s = {
                        key: aO(e),
                        verificationBytes: aO(e)
                    }, t.password && (s.verifier = function (e) {
                        var r, t, a = 0, n = no(e), s = n.length + 1;
                        for (t = 1, (r = eg(s))[0] = n.length; t != s; ++t) r[t] = n[t - 1];
                        for (t = s - 1; t >= 0; --t) a = (((16384 & a) == 0 ? 0 : 1) | a << 1 & 32767) ^ r[t];
                        return 52811 ^ a
                    }(t.password)), i.valid = s.verificationBytes === s.verifier, i.valid && (i.insitu = np(t.password))), i
                }
            },
            49: {
                f: function (e, r, t) {
                    var a = {dyHeight: e.read_shift(2), fl: e.read_shift(2)};
                    switch (t && t.biff || 8) {
                        case 2:
                            break;
                        case 3:
                        case 4:
                            e.l += 2;
                            break;
                        default:
                            e.l += 10
                    }
                    return a.name = aI(e, 0, t), a
                }
            },
            51: {f: aO},
            60: {},
            61: {
                f: function (e) {
                    return {
                        Pos: [e.read_shift(2), e.read_shift(2)],
                        Dim: [e.read_shift(2), e.read_shift(2)],
                        Flags: e.read_shift(2),
                        CurTab: e.read_shift(2),
                        FirstTab: e.read_shift(2),
                        Selected: e.read_shift(2),
                        TabRatio: e.read_shift(2)
                    }
                }
            },
            64: {f: a_},
            65: {
                f: function () {
                }
            },
            66: {f: aO},
            77: {},
            80: {},
            81: {},
            82: {},
            85: {f: aO},
            89: {},
            90: {},
            91: {},
            92: {
                f: function (e, r, t) {
                    if (t.enc) return e.l += r, "";
                    var a = e.l, n = aD(e, 0, t);
                    return e.read_shift(r + a - e.l), n
                }
            },
            93: {
                f: function (e, r, t) {
                    if (t && t.biff < 8) {
                        var a, n, s, i, c;
                        return a = r, e.l += 4, n = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, a -= 36, (c = []).push((a1[n] || tI)(e, a, t)), {
                            cmo: [s, n, i],
                            ft: c
                        }
                    }
                    var o = aW(e, 22), l = function (e, r) {
                        for (var t = e.l + r, a = []; e.l < t;) {
                            var n = e.read_shift(2);
                            e.l -= 2;
                            try {
                                a.push(az[n](e, t - e.l))
                            } catch (r) {
                                return e.l = t, a
                            }
                        }
                        return e.l != t && (e.l = t), a
                    }(e, r - 22, o[1]);
                    return {cmo: o, ft: l}
                }
            },
            94: {},
            95: {f: a_},
            96: {},
            97: {},
            99: {f: a_},
            125: {f: a0},
            128: {
                f: function (e) {
                    e.l += 4;
                    var r = [e.read_shift(2), e.read_shift(2)];
                    if (0 !== r[0] && r[0]--, 0 !== r[1] && r[1]--, r[0] > 7 || r[1] > 7) throw Error("Bad Gutters: " + r.join("|"));
                    return r
                }
            },
            129: {
                f: function (e, r, t) {
                    var a = t && 8 == t.biff || 2 == r ? e.read_shift(2) : (e.l += r, 0);
                    return {fDialog: 16 & a, fBelow: 64 & a, fRight: 128 & a}
                }
            },
            130: {f: aO},
            131: {f: a_},
            132: {f: a_},
            133: {
                f: function (e, r, t) {
                    var a = e.read_shift(4), n = 3 & e.read_shift(1), s = e.read_shift(1);
                    switch (s) {
                        case 0:
                            s = "Worksheet";
                            break;
                        case 1:
                            s = "Macrosheet";
                            break;
                        case 2:
                            s = "Chartsheet";
                            break;
                        case 6:
                            s = "VBAModule"
                    }
                    var i = aI(e, 0, t);
                    return 0 === i.length && (i = "Sheet1"), {pos: a, hs: n, dt: s, name: i}
                }
            },
            134: {},
            140: {
                f: function (e) {
                    var r, t = [0, 0];
                    return r = e.read_shift(2), t[0] = ae[r] || r, r = e.read_shift(2), t[1] = ae[r] || r, t
                }
            },
            141: {f: aO},
            144: {},
            146: {
                f: function (e) {
                    for (var r = e.read_shift(2), t = []; r-- > 0;) t.push(aL(e, 8));
                    return t
                }
            },
            151: {},
            152: {},
            153: {},
            154: {},
            155: {},
            156: {f: aO},
            157: {},
            158: {},
            160: {f: aR},
            161: {
                f: function (e, r) {
                    var t = {};
                    return r < 32 || (e.l += 16, t.header = t5(e, 8), t.footer = t5(e, 8), e.l += 2), t
                }
            },
            174: {},
            175: {},
            176: {},
            177: {},
            178: {},
            180: {},
            181: {},
            182: {},
            184: {},
            185: {},
            189: {
                f: function (e, r) {
                    for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), s = []; e.l < t;) s.push(aU(e));
                    if (e.l !== t) throw Error("MulRK read error");
                    var i = e.read_shift(2);
                    if (s.length != i - n + 1) throw Error("MulRK length mismatch");
                    return {r: a, c: n, C: i, rkrec: s}
                }
            },
            190: {
                f: function (e, r) {
                    for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), s = []; e.l < t;) s.push(e.read_shift(2));
                    if (e.l !== t) throw Error("MulBlank read error");
                    var i = e.read_shift(2);
                    if (s.length != i - n + 1) throw Error("MulBlank length mismatch");
                    return {r: a, c: n, C: i, ixfe: s}
                }
            },
            193: {f: aC},
            197: {},
            198: {},
            199: {},
            200: {},
            201: {},
            202: {f: a_},
            203: {},
            204: {},
            205: {},
            206: {},
            207: {},
            208: {},
            209: {},
            210: {},
            211: {},
            213: {},
            215: {},
            216: {},
            217: {},
            218: {f: aO},
            220: {},
            221: {f: a_},
            222: {},
            224: {
                f: function (e, r, t) {
                    var a, n, s, i, c, o = {};
                    return o.ifnt = e.read_shift(2), o.numFmtId = e.read_shift(2), o.flags = e.read_shift(2), o.fStyle = o.flags >> 2 & 1, o.data = (o.fStyle, a = {}, n = e.read_shift(4), s = e.read_shift(4), i = e.read_shift(4), c = e.read_shift(2), a.patternType = ar[i >> 26], t.cellStyles && (a.alc = 7 & n, a.fWrap = n >> 3 & 1, a.alcV = n >> 4 & 7, a.fJustLast = n >> 7 & 1, a.trot = n >> 8 & 255, a.cIndent = n >> 16 & 15, a.fShrinkToFit = n >> 20 & 1, a.iReadOrder = n >> 22 & 2, a.fAtrNum = n >> 26 & 1, a.fAtrFnt = n >> 27 & 1, a.fAtrAlc = n >> 28 & 1, a.fAtrBdr = n >> 29 & 1, a.fAtrPat = n >> 30 & 1, a.fAtrProt = n >> 31 & 1, a.dgLeft = 15 & s, a.dgRight = s >> 4 & 15, a.dgTop = s >> 8 & 15, a.dgBottom = s >> 12 & 15, a.icvLeft = s >> 16 & 127, a.icvRight = s >> 23 & 127, a.grbitDiag = s >> 30 & 3, a.icvTop = 127 & i, a.icvBottom = i >> 7 & 127, a.icvDiag = i >> 14 & 127, a.dgDiag = i >> 21 & 15, a.icvFore = 127 & c, a.icvBack = c >> 7 & 127, a.fsxButton = c >> 14 & 1), a), o
                }
            },
            225: {
                f: function (e, r) {
                    return 0 === r || e.read_shift(2), 1200
                }
            },
            226: {f: aC},
            227: {},
            229: {
                f: function (e, r) {
                    for (var t = [], a = e.read_shift(2); a--;) t.push(aB(e, r));
                    return t
                }
            },
            233: {},
            235: {},
            236: {},
            237: {},
            239: {},
            240: {},
            241: {},
            242: {},
            244: {},
            245: {},
            246: {},
            247: {},
            248: {},
            249: {},
            251: {},
            252: {
                f: function (e, r) {
                    for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), s = [], i = 0; i != n && e.l < t; ++i) s.push(function (e) {
                        var r = q;
                        q = 1200;
                        var t, a = e.read_shift(2), n = e.read_shift(1), s = 4 & n, i = 8 & n, c = 0, o = {};
                        i && (c = e.read_shift(2)), s && (t = e.read_shift(4));
                        var l = 0 === a ? "" : e.read_shift(a, 2 == 1 + (1 & n) ? "dbcs-cont" : "sbcs-cont");
                        return i && (e.l += 4 * c), s && (e.l += t), o.t = l, i || (o.raw = "<t>" + o.t + "</t>", o.r = o.t), q = r, o
                    }(e));
                    return s.Count = a, s.Unique = n, s
                }
            },
            253: {
                f: function (e) {
                    var r = aM(e);
                    return r.isst = e.read_shift(4), r
                }
            },
            255: {
                f: function (e, r) {
                    var t = {};
                    return t.dsst = e.read_shift(2), e.l += r - 2, t
                }
            },
            256: {},
            259: {},
            290: {},
            311: {},
            312: {},
            315: {},
            317: {f: aR},
            318: {},
            319: {},
            320: {},
            330: {},
            331: {},
            333: {},
            334: {},
            335: {},
            336: {},
            337: {},
            338: {},
            339: {},
            340: {},
            351: {},
            352: {f: a_},
            353: {f: aC},
            401: {},
            402: {},
            403: {},
            404: {},
            405: {},
            406: {},
            407: {},
            408: {},
            425: {},
            426: {},
            427: {},
            428: {},
            429: {},
            430: {
                f: function (e, r, t) {
                    var a = e.l + r, n = e.read_shift(2), s = e.read_shift(2);
                    if (t.sbcch = s, 1025 == s || 14849 == s) return [s, n];
                    if (s < 1 || s > 255) throw Error("Unexpected SupBook type: " + s);
                    for (var i = ax(e, s), c = []; a > e.l;) c.push(aN(e));
                    return [s, n, i, c]
                }
            },
            431: {f: a_},
            432: {},
            433: {},
            434: {},
            437: {},
            438: {
                f: function (e, r, t) {
                    var a = e.l, n = "";
                    try {
                        e.l += 4;
                        var s, i, c = (t.lastobj || {cmo: [0, 0]}).cmo[1];
                        -1 == [0, 5, 7, 11, 12, 14].indexOf(c) ? e.l += 6 : (e.read_shift(1), e.l++, e.read_shift(2), e.l += 2);
                        var o = e.read_shift(2);
                        e.read_shift(2), aO(e, 2);
                        var l = e.read_shift(2);
                        e.l += l;
                        for (var f = 1; f < e.lens.length - 1; ++f) {
                            if (e.l - a != e.lens[f]) throw Error("TxO: bad continue record");
                            var h = e[e.l], u = ax(e, e.lens[f + 1] - e.lens[f] - 1);
                            if ((n += u).length >= (h ? o : 2 * o)) break
                        }
                        if (n.length !== o && n.length !== 2 * o) throw Error("cchText: " + o + " != " + n.length);
                        return e.l = a + r, {t: n}
                    } catch (t) {
                        return e.l = a + r, {t: n}
                    }
                }
            },
            439: {f: a_},
            440: {
                f: function (e, r) {
                    var t = aB(e, 8);
                    return e.l += 16, [t, function (e, r) {
                        var t = e.l + r, a = e.read_shift(4);
                        if (2 !== a) throw Error("Unrecognized streamVersion: " + a);
                        var n = e.read_shift(2);
                        e.l += 2;
                        var s, i, c, o, l, f, h = "";
                        16 & n && (s = aF(e, t - e.l)), 128 & n && (i = aF(e, t - e.l)), (257 & n) == 257 && (c = aF(e, t - e.l)), (257 & n) == 1 && (o = function (e, r) {
                            var t, a, n, s, i = e.read_shift(16);
                            switch (r -= 16, i) {
                                case"e0c9ea79f9bace118c8200aa004ba90b":
                                    return t = e.read_shift(4), a = e.l, n = !1, t > 24 && (e.l += t - 24, "795881f43b1d7f48af2c825dc4852763" === e.read_shift(16) && (n = !0), e.l = a), s = e.read_shift((n ? t - 24 : t) >> 1, "utf16le").replace(ew, ""), n && (e.l += 24), s;
                                case"0303000000000000c000000000000046":
                                    return function (e) {
                                        for (var r = e.read_shift(2), t = ""; r-- > 0;) t += "../";
                                        var a = e.read_shift(0, "lpstr-ansi");
                                        if (e.l += 2, 57005 != e.read_shift(2)) throw Error("Bad FileMoniker");
                                        if (0 === e.read_shift(4)) return t + a.replace(/\\/g, "/");
                                        var n = e.read_shift(4);
                                        if (3 != e.read_shift(2)) throw Error("Bad FileMoniker");
                                        return t + e.read_shift(n >> 1, "utf16le").replace(ew, "")
                                    }(e, r);
                                default:
                                    throw Error("Unsupported Moniker " + i)
                            }
                        }(e, t - e.l)), 8 & n && (h = aF(e, t - e.l)), 32 & n && (l = e.read_shift(16)), 64 & n && (f = am(e)), e.l = t;
                        var u = i || c || o || "";
                        u && h && (u += "#" + h), u || (u = "#" + h), 2 & n && "/" == u.charAt(0) && "/" != u.charAt(1) && (u = "file://" + u);
                        var d = {Target: u};
                        return l && (d.guid = l), f && (d.time = f), s && (d.Tooltip = s), d
                    }(e, r - 24)]
                }
            },
            441: {},
            442: {f: aN},
            443: {},
            444: {f: aO},
            445: {},
            446: {},
            448: {f: aC},
            449: {
                f: function (e) {
                    return e.read_shift(2), e.read_shift(4)
                }, r: 2
            },
            450: {f: aC},
            512: {f: aY},
            513: {f: aM},
            515: {
                f: function (e, r, t) {
                    t.biffguess && 2 == t.biff && (t.biff = 5);
                    var a = aM(e, 6), n = t5(e, 8);
                    return a.val = n, a
                }
            },
            516: {
                f: function (e, r, t) {
                    t.biffguess && 2 == t.biff && (t.biff = 5);
                    var a = e.l + r, n = aM(e, 6);
                    2 == t.biff && e.l++;
                    var s = aN(e, a - e.l, t);
                    return n.val = s, n
                }
            },
            517: {f: aj},
            519: {f: aN},
            520: {
                f: function (e) {
                    var r = {};
                    r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
                    var t = e.read_shift(2);
                    e.l += 4;
                    var a = e.read_shift(1);
                    return e.l += 3, 7 & a && (r.level = 7 & a), 32 & a && (r.hidden = !0), 64 & a && (r.hpt = t / 20), r
                }
            },
            523: {},
            545: {f: aQ},
            549: {f: a$},
            566: {},
            574: {
                f: function (e, r, t) {
                    return t && t.biff >= 2 && t.biff < 5 ? {} : {RTL: 64 & e.read_shift(2)}
                }
            },
            638: {
                f: function (e) {
                    var r = e.read_shift(2), t = e.read_shift(2), a = aU(e);
                    return {r: r, c: t, ixfe: a[0], rknum: a[1]}
                }
            },
            659: {},
            1048: {},
            1054: {
                f: function (e, r, t) {
                    return [e.read_shift(2), aD(e, 0, t)]
                }
            },
            1084: {},
            1212: {
                f: function (e, r, t) {
                    var a, n, s, i, c, o, l, f, h = aH(e, 6);
                    e.l++;
                    var u = e.read_shift(1);
                    return [(a = e, n = r -= 8, s = t, o = a.l + n, l = a.read_shift(2), f = n8(a, l, s), 65535 == l ? [[], (i = n - 2, void (a.l += i))] : (n !== l + 2 && (c = n6(a, o - l - 2, f, s)), [f, c])), u, h]
                }
            },
            2048: {
                f: function (e, r) {
                    e.read_shift(2);
                    var t = aB(e, 8), a = e.read_shift((r - 10) / 2, "dbcs-cont");
                    return [t, a = a.replace(ew, "")]
                }
            },
            2049: {},
            2050: {},
            2051: {},
            2052: {},
            2053: {},
            2054: {},
            2055: {},
            2056: {},
            2057: {f: aG},
            2058: {},
            2059: {},
            2060: {},
            2061: {},
            2062: {},
            2063: {},
            2064: {},
            2066: {},
            2067: {},
            2128: {},
            2129: {},
            2130: {},
            2131: {},
            2132: {},
            2133: {},
            2134: {},
            2135: {},
            2136: {},
            2137: {},
            2138: {},
            2146: {},
            2147: {r: 12},
            2148: {},
            2149: {},
            2150: {},
            2151: {f: aC},
            2152: {},
            2154: {},
            2155: {},
            2156: {},
            2161: {},
            2162: {},
            2164: {},
            2165: {},
            2166: {},
            2167: {},
            2168: {},
            2169: {},
            2170: {},
            2171: {},
            2172: {
                f: function (e) {
                    e.l += 2;
                    var r = {cxfs: 0, crc: 0};
                    return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r
                }, r: 12
            },
            2173: {
                f: function (e, r) {
                    var t = e.l + r;
                    e.l += 2;
                    var a = e.read_shift(2);
                    e.l += 2;
                    for (var n = e.read_shift(2), s = []; n-- > 0;) s.push(function (e) {
                        var r = e.read_shift(2), t = e.read_shift(2) - 4, a = [r];
                        switch (r) {
                            case 4:
                            case 5:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 13:
                                a[1] = function (e) {
                                    var r, t, a = {};
                                    switch (a.xclrType = e.read_shift(2), a.nTintShade = e.read_shift(2), a.xclrType) {
                                        case 0:
                                        case 4:
                                            e.l += 4;
                                            break;
                                        case 1:
                                            a.xclrValue = (r = e, t = 0, void (r.l += 4));
                                            break;
                                        case 2:
                                            a.xclrValue = aP(e, 4);
                                            break;
                                        case 3:
                                            a.xclrValue = e.read_shift(4)
                                    }
                                    return e.l += 8, a
                                }(e, t);
                                break;
                            case 6:
                                a[1] = void (e.l += t);
                                break;
                            case 14:
                            case 15:
                                a[1] = e.read_shift(1 === t ? 1 : 2);
                                break;
                            default:
                                throw Error("Unrecognized ExtProp type: " + r + " " + t)
                        }
                        return a
                    }(e, t - e.l));
                    return {ixfe: a, ext: s}
                }, r: 12
            },
            2174: {},
            2175: {},
            2180: {},
            2181: {},
            2182: {},
            2183: {},
            2184: {},
            2185: {},
            2186: {},
            2187: {},
            2188: {f: a_, r: 12},
            2189: {},
            2190: {r: 12},
            2191: {},
            2192: {},
            2194: {},
            2195: {},
            2196: {
                f: function (e, r, t) {
                    if (t.biff < 8) {
                        e.l += r;
                        return
                    }
                    var a = e.read_shift(2), n = e.read_shift(2);
                    return [ax(e, a, t), ax(e, n, t)]
                }, r: 12
            },
            2197: {},
            2198: {
                f: function (e, r, t) {
                    var a, n = e.l + r;
                    if (124226 !== e.read_shift(4)) {
                        if (!t.cellStyles) {
                            e.l = n;
                            return
                        }
                        var s = e.slice(e.l);
                        e.l = n;
                        try {
                            a = rC(s, {type: "array"})
                        } catch (e) {
                            return
                        }
                        var i = rk(a, "theme/theme/theme1.xml", !0);
                        if (i) return nU(i, t)
                    }
                }, r: 12
            },
            2199: {},
            2200: {},
            2201: {},
            2202: {
                f: function (e) {
                    return [0 !== e.read_shift(4), 0 !== e.read_shift(4), e.read_shift(4)]
                }, r: 12
            },
            2203: {f: aC},
            2204: {},
            2205: {},
            2206: {},
            2207: {},
            2211: {
                f: function (e) {
                    var r, t, a = (r = e.read_shift(2), t = e.read_shift(2), e.l += 8, {type: r, flags: t});
                    if (2211 != a.type) throw Error("Invalid Future Record " + a.type);
                    return 0 !== e.read_shift(4)
                }
            },
            2212: {},
            2213: {},
            2214: {},
            2215: {},
            4097: {},
            4098: {},
            4099: {},
            4102: {},
            4103: {},
            4105: {},
            4106: {},
            4107: {},
            4108: {},
            4109: {},
            4116: {},
            4117: {},
            4118: {},
            4119: {},
            4120: {},
            4121: {},
            4122: {},
            4123: {},
            4124: {},
            4125: {},
            4126: {},
            4127: {},
            4128: {},
            4129: {},
            4130: {},
            4132: {},
            4133: {},
            4134: {f: aO},
            4135: {},
            4146: {},
            4147: {},
            4148: {},
            4149: {},
            4154: {},
            4156: {},
            4157: {},
            4158: {},
            4159: {},
            4160: {},
            4161: {},
            4163: {},
            4164: {
                f: function (e, r, t) {
                    var a = {area: !1};
                    if (5 != t.biff) return e.l += r, a;
                    var n = e.read_shift(1);
                    return e.l += 3, 16 & n && (a.area = !0), a
                }
            },
            4165: {},
            4166: {},
            4168: {},
            4170: {},
            4171: {},
            4174: {},
            4175: {},
            4176: {},
            4177: {},
            4187: {},
            4188: {
                f: function (e) {
                    for (var r = e.read_shift(2), t = []; r-- > 0;) t.push(aL(e, 8));
                    return t
                }
            },
            4189: {},
            4191: {},
            4192: {},
            4193: {},
            4194: {},
            4195: {},
            4196: {},
            4197: {},
            4198: {},
            4199: {},
            4200: {},
            0: {f: aY},
            1: {},
            2: {
                f: function (e) {
                    var r = aM(e, 6);
                    ++e.l;
                    var t = e.read_shift(2);
                    return r.t = "n", r.val = t, r
                }
            },
            3: {
                f: function (e) {
                    var r = aM(e, 6);
                    ++e.l;
                    var t = t5(e, 8);
                    return r.t = "n", r.val = t, r
                }
            },
            4: {
                f: function (e, r, t) {
                    t.biffguess && 5 == t.biff && (t.biff = 2);
                    var a = aM(e, 6);
                    ++e.l;
                    var n = aD(e, r - 7, t);
                    return a.t = "str", a.val = n, a
                }
            },
            5: {f: aj},
            7: {
                f: function (e) {
                    var r = e.read_shift(1);
                    return 0 === r ? (e.l++, "") : e.read_shift(r, "sbcs-cont")
                }
            },
            8: {},
            9: {f: aG},
            11: {},
            22: {f: aO},
            30: {f: aD},
            31: {},
            32: {},
            33: {f: aQ},
            36: {},
            37: {f: a$},
            50: {
                f: function (e, r) {
                    e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13
                }
            },
            62: {},
            52: {},
            67: {},
            68: {f: aO},
            69: {},
            86: {},
            126: {},
            127: {
                f: function (e) {
                    var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4),
                        n = {fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a)};
                    return e.l += a, n
                }
            },
            135: {},
            136: {},
            137: {},
            145: {},
            148: {},
            149: {},
            150: {},
            169: {},
            171: {},
            188: {},
            191: {},
            192: {},
            194: {},
            195: {},
            214: {
                f: function (e, r, t) {
                    var a = e.l + r, n = aM(e, 6), s = e.read_shift(2), i = ax(e, s, t);
                    return e.l = a, n.t = "str", n.val = i, n
                }
            },
            223: {},
            234: {},
            354: {},
            421: {},
            518: {f: st},
            521: {f: aG},
            536: {f: aZ},
            547: {f: aX},
            561: {},
            579: {},
            1030: {f: st},
            1033: {f: aG},
            1091: {},
            2157: {},
            2163: {},
            2177: {},
            2240: {},
            2241: {},
            2242: {},
            2243: {},
            2244: {},
            2245: {},
            2246: {},
            2247: {},
            2248: {},
            2249: {},
            2250: {},
            2251: {},
            2262: {r: 12},
            29282: {}
        };

        function sJ(e, r, t, a) {
            if (!isNaN(r)) {
                var n = a || (t || []).length || 0, s = e.next(4);
                s.write_shift(2, r), s.write_shift(2, n), n > 0 && tv(t) && e.push(t)
            }
        }

        function sZ(e, r) {
            var t = r || {}, a = t.dense ? [] : {}, n = (e = e.replace(/<!--.*?-->/g, "")).match(/<table/i);
            if (!n) throw Error("Invalid HTML: could not find <table>");
            var s = e.match(/<\/table/i), i = n.index, c = s && s.index || e.length,
                o = rb(e.slice(i, c), /(:?<tr[^>]*>)/i, "<tr>"), l = -1, f = 0, h = 0, u = 0,
                d = {s: {r: 1e7, c: 1e7}, e: {r: 0, c: 0}}, p = [];
            for (i = 0; i < o.length; ++i) {
                var g = o[i].trim(), m = g.slice(0, 3).toLowerCase();
                if ("<tr" == m) {
                    if (++l, t.sheetRows && t.sheetRows <= l) {
                        --l;
                        break
                    }
                    f = 0;
                    continue
                }
                if ("<td" == m || "<th" == m) {
                    var v = g.split(/<\/t[dh]>/i);
                    for (c = 0; c < v.length; ++c) {
                        var b = v[c].trim();
                        if (b.match(/<t[dh]/i)) {
                            for (var T = b, E = 0; "<" == T.charAt(0) && (E = T.indexOf(">")) > -1;) T = T.slice(E + 1);
                            for (var w = 0; w < p.length; ++w) {
                                var A = p[w];
                                A.s.c == f && A.s.r < l && l <= A.e.r && (f = A.e.c + 1, w = -1)
                            }
                            var S = rF(b.slice(0, b.indexOf(">")));
                            u = S.colspan ? +S.colspan : 1, ((h = +S.rowspan) > 1 || u > 1) && p.push({
                                s: {r: l, c: f},
                                e: {r: l + (h || 1) - 1, c: f + u - 1}
                            });
                            var k = S.t || S["data-t"] || "";
                            if (!T.length || (T = rZ(T), d.s.r > l && (d.s.r = l), d.e.r < l && (d.e.r = l), d.s.c > f && (d.s.c = f), d.e.c < f && (d.e.c = f), !T.length)) {
                                f += u;
                                continue
                            }
                            var y = {t: "s", v: T};
                            !t.raw && T.trim().length && "s" != k && ("TRUE" === T ? y = {
                                t: "b",
                                v: !0
                            } : "FALSE" === T ? y = {
                                t: "b",
                                v: !1
                            } : isNaN(rg(T)) ? isNaN(rv(T).getDate()) || (y = {
                                t: "d",
                                v: rh(T)
                            }, t.cellDates || (y = {t: "n", v: ra(y.v)}), y.z = t.dateNF || ex[14]) : y = {
                                t: "n",
                                v: rg(T)
                            }), t.dense ? (a[l] || (a[l] = []), a[l][f] = y) : a[tz({r: l, c: f})] = y, f += u
                        }
                    }
                }
            }
            return a["!ref"] = t$(d), p.length && (a["!merges"] = p), a
        }

        function sq(e, r, t) {
            var a = t || {}, n = 0, s = 0;
            if (null != a.origin) {
                if ("number" == typeof a.origin) n = a.origin; else {
                    var i = "string" == typeof a.origin ? tV(a.origin) : a.origin;
                    n = i.r, s = i.c
                }
            }
            var c = r.getElementsByTagName("tr"), o = Math.min(a.sheetRows || 1e7, c.length),
                l = {s: {r: 0, c: 0}, e: {r: n, c: s}};
            if (e["!ref"]) {
                var f = tG(e["!ref"]);
                l.s.r = Math.min(l.s.r, f.s.r), l.s.c = Math.min(l.s.c, f.s.c), l.e.r = Math.max(l.e.r, f.e.r), l.e.c = Math.max(l.e.c, f.e.c), -1 == n && (l.e.r = n = f.e.r + 1)
            }
            var h = [], u = 0, d = e["!rows"] || (e["!rows"] = []), p = 0, g = 0, m = 0, v = 0, b = 0, T = 0;
            for (e["!cols"] || (e["!cols"] = []); p < c.length && g < o; ++p) {
                var E = c[p];
                if (s1(E)) {
                    if (a.display) continue;
                    d[g] = {hidden: !0}
                }
                var w = E.children;
                for (m = v = 0; m < w.length; ++m) {
                    var A = w[m];
                    if (!(a.display && s1(A))) {
                        var S = A.hasAttribute("data-v") ? A.getAttribute("data-v") : A.hasAttribute("v") ? A.getAttribute("v") : rZ(A.innerHTML),
                            k = A.getAttribute("data-z") || A.getAttribute("z");
                        for (u = 0; u < h.length; ++u) {
                            var y = h[u];
                            y.s.c == v + s && y.s.r < g + n && g + n <= y.e.r && (v = y.e.c + 1 - s, u = -1)
                        }
                        T = +A.getAttribute("colspan") || 1, ((b = +A.getAttribute("rowspan") || 1) > 1 || T > 1) && h.push({
                            s: {
                                r: g + n,
                                c: v + s
                            }, e: {r: g + n + (b || 1) - 1, c: v + s + (T || 1) - 1}
                        });
                        var C = {t: "s", v: S}, _ = A.getAttribute("data-t") || A.getAttribute("t") || "";
                        null != S && (0 == S.length ? C.t = _ || "z" : a.raw || 0 == S.trim().length || "s" == _ || ("TRUE" === S ? C = {
                            t: "b",
                            v: !0
                        } : "FALSE" === S ? C = {t: "b", v: !1} : isNaN(rg(S)) ? isNaN(rv(S).getDate()) || (C = {
                            t: "d",
                            v: rh(S)
                        }, a.cellDates || (C = {t: "n", v: ra(C.v)}), C.z = a.dateNF || ex[14]) : C = {
                            t: "n",
                            v: rg(S)
                        })), void 0 === C.z && null != k && (C.z = k);
                        var O = "", R = A.getElementsByTagName("A");
                        if (R && R.length) for (var I = 0; I < R.length && (!R[I].hasAttribute("href") || "#" == (O = R[I].getAttribute("href")).charAt(0)); ++I) ;
                        O && "#" != O.charAt(0) && (C.l = {Target: O}), a.dense ? (e[g + n] || (e[g + n] = []), e[g + n][v + s] = C) : e[tz({
                            c: v + s,
                            r: g + n
                        })] = C, l.e.c < v + s && (l.e.c = v + s), v += T
                    }
                }
                ++g
            }
            return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), l.e.r = Math.max(l.e.r, g - 1 + n), e["!ref"] = t$(l), g >= o && (e["!fullref"] = t$((l.e.r = c.length - p + g - 1 + n, l))), e
        }

        function sQ(e, r) {
            return sq((r || {}).dense ? [] : {}, e, r)
        }

        function s1(e) {
            var r = "",
                t = e.ownerDocument.defaultView && "function" == typeof e.ownerDocument.defaultView.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle : "function" == typeof getComputedStyle ? getComputedStyle : null;
            return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), "none" === r
        }

        var s0 = {
            day: ["d", "dd"],
            month: ["m", "mm"],
            year: ["y", "yy"],
            hours: ["h", "hh"],
            minutes: ["m", "mm"],
            seconds: ["s", "ss"],
            "am-pm": ["A/P", "AM/PM"],
            "day-of-week": ["ddd", "dddd"],
            era: ["e", "ee"],
            quarter: ["\\Qm", 'm\\"th quarter"']
        };

        function s2(e, r) {
            var t, a, n, s, i, c, o = r || {}, l = r4(e), f = [], h = {name: ""}, u = "", d = 0, p = {}, g = [],
                m = o.dense ? [] : {}, v = {value: ""}, b = "", T = 0, E = [], w = -1, A = -1,
                S = {s: {r: 1e6, c: 1e7}, e: {r: 0, c: 0}}, k = 0, y = {}, C = [], _ = {}, O = 0, R = [], I = 1, x = 1,
                N = [], D = {Names: []}, F = {}, P = ["", ""], L = [], M = {}, U = "", B = 0, H = !1, W = !1, V = 0;
            for (r3.lastIndex = 0, l = l.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); i = r3.exec(l);) switch (i[3] = i[3].replace(/_.*$/, "")) {
                case"table":
                case"工作表":
                    "/" === i[1] ? (S.e.c >= S.s.c && S.e.r >= S.s.r ? m["!ref"] = t$(S) : m["!ref"] = "A1:A1", o.sheetRows > 0 && o.sheetRows <= S.e.r && (m["!fullref"] = m["!ref"], S.e.r = o.sheetRows - 1, m["!ref"] = t$(S)), C.length && (m["!merges"] = C), R.length && (m["!rows"] = R), n.name = n["名称"] || n.name, "undefined" != typeof JSON && JSON.stringify(n), g.push(n.name), p[n.name] = m, W = !1) : "/" !== i[0].charAt(i[0].length - 2) && (n = rF(i[0], !1), w = A = -1, S.s.r = S.s.c = 1e7, S.e.r = S.e.c = 0, m = o.dense ? [] : {}, C = [], R = [], W = !0);
                    break;
                case"table-row-group":
                    "/" === i[1] ? --k : ++k;
                    break;
                case"table-row":
                case"行":
                    if ("/" === i[1]) {
                        w += I, I = 1;
                        break
                    }
                    if ((s = rF(i[0], !1))["行号"] ? w = s["行号"] - 1 : -1 == w && (w = 0), (I = +s["number-rows-repeated"] || 1) < 10) for (V = 0; V < I; ++V) k > 0 && (R[w + V] = {level: k});
                    A = -1;
                    break;
                case"covered-table-cell":
                    "/" !== i[1] && ++A, o.sheetStubs && (o.dense ? (m[w] || (m[w] = []), m[w][A] = {t: "z"}) : m[tz({
                        r: w,
                        c: A
                    })] = {t: "z"}), b = "", E = [];
                    break;
                case"table-cell":
                case"数据":
                    if ("/" === i[0].charAt(i[0].length - 2)) ++A, x = parseInt((v = rF(i[0], !1))["number-columns-repeated"] || "1", 10), c = {
                        t: "z",
                        v: null
                    }, v.formula && !1 != o.cellFormula && (c.f = sc(rU(v.formula))), "string" == (v["数据类型"] || v["value-type"]) && (c.t = "s", c.v = rU(v["string-value"] || ""), o.dense ? (m[w] || (m[w] = []), m[w][A] = c) : m[tz({
                        r: w,
                        c: A
                    })] = c), A += x - 1; else if ("/" !== i[1]) {
                        b = "", T = 0, E = [], x = 1;
                        var z = I ? w + I - 1 : w;
                        if (++A > S.e.c && (S.e.c = A), A < S.s.c && (S.s.c = A), w < S.s.r && (S.s.r = w), z > S.e.r && (S.e.r = z), v = rF(i[0], !1), L = [], M = {}, c = {
                            t: v["数据类型"] || v["value-type"],
                            v: null
                        }, o.cellFormula) {
                            if (v.formula && (v.formula = rU(v.formula)), v["number-matrix-columns-spanned"] && v["number-matrix-rows-spanned"] && (_ = {
                                s: {
                                    r: w,
                                    c: A
                                },
                                e: {
                                    r: w + (parseInt(v["number-matrix-rows-spanned"], 10) || 0) - 1,
                                    c: A + (parseInt(v["number-matrix-columns-spanned"], 10) || 0) - 1
                                }
                            }, c.F = t$(_), N.push([_, c.F])), v.formula) c.f = sc(v.formula); else for (V = 0; V < N.length; ++V) w >= N[V][0].s.r && w <= N[V][0].e.r && A >= N[V][0].s.c && A <= N[V][0].e.c && (c.F = N[V][1])
                        }
                        switch ((v["number-columns-spanned"] || v["number-rows-spanned"]) && (_ = {
                            s: {r: w, c: A},
                            e: {
                                r: w + (parseInt(v["number-rows-spanned"], 10) || 0) - 1,
                                c: A + (parseInt(v["number-columns-spanned"], 10) || 0) - 1
                            }
                        }, C.push(_)), v["number-columns-repeated"] && (x = parseInt(v["number-columns-repeated"], 10)), c.t) {
                            case"boolean":
                                c.t = "b", c.v = rz(v["boolean-value"]);
                                break;
                            case"float":
                            case"percentage":
                            case"currency":
                                c.t = "n", c.v = parseFloat(v.value);
                                break;
                            case"date":
                                c.t = "d", c.v = rh(v["date-value"]), o.cellDates || (c.t = "n", c.v = ra(c.v)), c.z = "m/d/yy";
                                break;
                            case"time":
                                c.t = "n", c.v = function (e) {
                                    var r = 0, t = 0, a = !1,
                                        n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
                                    if (!n) throw Error("|" + e + "| is not an ISO8601 Duration");
                                    for (var s = 1; s != n.length; ++s) if (n[s]) {
                                        switch (t = 1, s > 3 && (a = !0), n[s].slice(n[s].length - 1)) {
                                            case"Y":
                                                throw Error("Unsupported ISO Duration Field: " + n[s].slice(n[s].length - 1));
                                            case"D":
                                                t *= 24;
                                            case"H":
                                                t *= 60;
                                            case"M":
                                                if (a) t *= 60; else throw Error("Unsupported ISO Duration Field: M")
                                        }
                                        r += t * parseInt(n[s], 10)
                                    }
                                    return r
                                }(v["time-value"]) / 86400, o.cellDates && (c.t = "d", c.v = rc(c.v)), c.z = "HH:MM:SS";
                                break;
                            case"number":
                                c.t = "n", c.v = parseFloat(v["数据数值"]);
                                break;
                            default:
                                if ("string" !== c.t && "text" !== c.t && c.t) throw Error("Unsupported value type " + c.t);
                                c.t = "s", null != v["string-value"] && (b = rU(v["string-value"]), E = [])
                        }
                    } else {
                        if (H = !1, "s" === c.t && (c.v = b || "", E.length && (c.R = E), H = 0 == T), F.Target && (c.l = F), L.length > 0 && (c.c = L, L = []), b && !1 !== o.cellText && (c.w = b), H && (c.t = "z", delete c.v), (!H || o.sheetStubs) && !(o.sheetRows && o.sheetRows <= w)) for (var G = 0; G < I; ++G) {
                            if (x = parseInt(v["number-columns-repeated"] || "1", 10), o.dense) for (m[w + G] || (m[w + G] = []), m[w + G][A] = 0 == G ? c : rd(c); --x > 0;) m[w + G][A + x] = rd(c); else for (m[tz({
                                r: w + G,
                                c: A
                            })] = c; --x > 0;) m[tz({r: w + G, c: A + x})] = rd(c);
                            S.e.c <= A && (S.e.c = A)
                        }
                        A += (x = parseInt(v["number-columns-repeated"] || "1", 10)) - 1, x = 0, c = {}, b = "", E = []
                    }
                    F = {};
                    break;
                case"document":
                case"document-content":
                case"电子表格文档":
                case"spreadsheet":
                case"主体":
                case"scripts":
                case"styles":
                case"font-face-decls":
                case"master-styles":
                    if ("/" === i[1]) {
                        if ((t = f.pop())[0] !== i[3]) throw "Bad state: " + t
                    } else "/" !== i[0].charAt(i[0].length - 2) && f.push([i[3], !0]);
                    break;
                case"annotation":
                    if ("/" === i[1]) {
                        if ((t = f.pop())[0] !== i[3]) throw "Bad state: " + t;
                        M.t = b, E.length && (M.R = E), M.a = U, L.push(M)
                    } else "/" !== i[0].charAt(i[0].length - 2) && f.push([i[3], !1]);
                    U = "", B = 0, b = "", T = 0, E = [];
                    break;
                case"creator":
                    "/" === i[1] ? U = l.slice(B, i.index) : B = i.index + i[0].length;
                    break;
                case"meta":
                case"元数据":
                case"settings":
                case"config-item-set":
                case"config-item-map-indexed":
                case"config-item-map-entry":
                case"config-item-map-named":
                case"shapes":
                case"frame":
                case"text-box":
                case"image":
                case"data-pilot-tables":
                case"list-style":
                case"form":
                case"dde-links":
                case"event-listeners":
                case"chart":
                    if ("/" === i[1]) {
                        if ((t = f.pop())[0] !== i[3]) throw "Bad state: " + t
                    } else "/" !== i[0].charAt(i[0].length - 2) && f.push([i[3], !1]);
                    b = "", T = 0, E = [];
                    break;
                case"scientific-number":
                case"currency-symbol":
                case"currency-style":
                case"script":
                case"libraries":
                case"automatic-styles":
                case"default-style":
                case"page-layout":
                case"style":
                case"map":
                case"font-face":
                case"paragraph-properties":
                case"table-properties":
                case"table-column-properties":
                case"table-row-properties":
                case"table-cell-properties":
                case"fraction":
                case"boolean-style":
                case"boolean":
                case"text-style":
                case"text-content":
                case"text-properties":
                case"embedded-text":
                case"body":
                case"电子表格":
                case"forms":
                case"table-column":
                case"table-header-rows":
                case"table-rows":
                case"table-column-group":
                case"table-header-columns":
                case"table-columns":
                case"null-date":
                case"graphic-properties":
                case"calculation-settings":
                case"named-expressions":
                case"label-range":
                case"label-ranges":
                case"named-expression":
                case"sort":
                case"sort-by":
                case"sort-groups":
                case"tab":
                case"line-break":
                case"span":
                case"s":
                case"date":
                case"object":
                case"title":
                case"标题":
                case"desc":
                case"binary-data":
                case"table-source":
                case"scenario":
                case"iteration":
                case"content-validations":
                case"content-validation":
                case"help-message":
                case"error-message":
                case"database-ranges":
                case"filter":
                case"filter-and":
                case"filter-or":
                case"filter-condition":
                case"list-level-style-bullet":
                case"list-level-style-number":
                case"list-level-properties":
                case"sender-firstname":
                case"sender-lastname":
                case"sender-initials":
                case"sender-title":
                case"sender-position":
                case"sender-email":
                case"sender-phone-private":
                case"sender-fax":
                case"sender-company":
                case"sender-phone-work":
                case"sender-street":
                case"sender-city":
                case"sender-postal-code":
                case"sender-country":
                case"sender-state-or-province":
                case"author-name":
                case"author-initials":
                case"chapter":
                case"file-name":
                case"template-name":
                case"sheet-name":
                case"event-listener":
                case"initial-creator":
                case"creation-date":
                case"print-date":
                case"generator":
                case"document-statistic":
                case"user-defined":
                case"editing-duration":
                case"editing-cycles":
                case"config-item":
                case"page-number":
                case"page-count":
                case"time":
                case"cell-range-source":
                case"detective":
                case"operation":
                case"highlighted-range":
                case"data-pilot-table":
                case"source-cell-range":
                case"source-service":
                case"data-pilot-field":
                case"data-pilot-level":
                case"data-pilot-subtotals":
                case"data-pilot-subtotal":
                case"data-pilot-members":
                case"data-pilot-member":
                case"data-pilot-display-info":
                case"data-pilot-sort-info":
                case"data-pilot-layout-info":
                case"data-pilot-field-reference":
                case"data-pilot-groups":
                case"data-pilot-group":
                case"data-pilot-group-member":
                case"rect":
                case"dde-connection-decls":
                case"dde-connection-decl":
                case"dde-link":
                case"dde-source":
                case"properties":
                case"property":
                case"table-protection":
                case"data-pilot-grand-total":
                case"office-document-common-attrs":
                    break;
                case"number-style":
                case"percentage-style":
                case"date-style":
                case"time-style":
                    if ("/" === i[1]) {
                        if (y[h.name] = u, (t = f.pop())[0] !== i[3]) throw "Bad state: " + t
                    } else "/" !== i[0].charAt(i[0].length - 2) && (u = "", h = rF(i[0], !1), f.push([i[3], !0]));
                    break;
                case"number":
                case"day":
                case"month":
                case"year":
                case"era":
                case"day-of-week":
                case"week-of-year":
                case"quarter":
                case"hours":
                case"minutes":
                case"seconds":
                case"am-pm":
                    switch (f[f.length - 1][0]) {
                        case"time-style":
                        case"date-style":
                            a = rF(i[0], !1), u += s0[i[3]]["long" === a.style ? 1 : 0]
                    }
                    break;
                case"text":
                    if ("/>" === i[0].slice(-2)) ; else if ("/" === i[1]) switch (f[f.length - 1][0]) {
                        case"number-style":
                        case"date-style":
                        case"time-style":
                            u += l.slice(d, i.index)
                    } else d = i.index + i[0].length;
                    break;
                case"named-range":
                    P = so((a = rF(i[0], !1))["cell-range-address"]);
                    var Y = {Name: a.name, Ref: P[0] + "!" + P[1]};
                    W && (Y.Sheet = g.length), D.Names.push(Y);
                    break;
                case"p":
                case"文本串":
                    if (["master-styles"].indexOf(f[f.length - 1][0]) > -1) break;
                    if ("/" !== i[1] || v && v["string-value"]) rF(i[0], !1), T = i.index + i[0].length; else {
                        var j = [rU(l.slice(T, i.index).replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function (e, r) {
                            return Array(parseInt(r, 10) + 1).join(" ")
                        }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, "\n").replace(/<[^>]*>/g, ""))];
                        b = (b.length > 0 ? b + "\n" : "") + j[0]
                    }
                    break;
                case"database-range":
                    if ("/" === i[1]) break;
                    try {
                        p[(P = so(rF(i[0])["target-range-address"]))[0]]["!autofilter"] = {ref: P[1]}
                    } catch (e) {
                    }
                    break;
                case"a":
                    if ("/" !== i[1]) {
                        if (!(F = rF(i[0], !1)).href) break;
                        F.Target = rU(F.href), delete F.href, "#" == F.Target.charAt(0) && F.Target.indexOf(".") > -1 ? (P = so(F.Target.slice(1)), F.Target = "#" + P[0] + "!" + P[1]) : F.Target.match(/^\.\.[\\\/]/) && (F.Target = F.Target.slice(3))
                    }
                    break;
                default:
                    switch (i[2]) {
                        case"dc:":
                        case"calcext:":
                        case"loext:":
                        case"ooo:":
                        case"chartooo:":
                        case"draw:":
                        case"style:":
                        case"chart:":
                        case"form:":
                        case"uof:":
                        case"表:":
                        case"字:":
                            break;
                        default:
                            if (o.WTF) throw Error(i)
                    }
            }
            var K = {Sheets: p, SheetNames: g, Workbook: D};
            return o.bookSheets && delete K.Sheets, K
        }/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
        function s4(e) {
            return new DataView(e.buffer, e.byteOffset, e.byteLength)
        }

        function s3(e) {
            return "undefined" != typeof TextDecoder ? new TextDecoder().decode(e) : rK(eb(e))
        }

        function s5(e) {
            var r = new Uint8Array(e.reduce(function (e, r) {
                return e + r.length
            }, 0)), t = 0;
            return e.forEach(function (e) {
                r.set(e, t), t += e.length
            }), r
        }

        function s6(e) {
            return e -= e >> 1 & 1431655765, ((e = (858993459 & e) + (e >> 2 & 858993459)) + (e >> 4) & 252645135) * 16843009 >>> 24
        }

        function s8(e, r) {
            var t = r ? r[0] : 0, a = 127 & e[t];
            t:if (e[t++] >= 128 && (a |= (127 & e[t]) << 7, e[t++] < 128 || (a |= (127 & e[t]) << 14, e[t++] < 128) || (a |= (127 & e[t]) << 21, e[t++] < 128) || (a += (127 & e[t]) * 268435456, ++t, e[t++] < 128) || (a += (127 & e[t]) * 34359738368, ++t, e[t++] < 128) || (a += (127 & e[t]) * 4398046511104, ++t, e[t++] < 128))) break t;
            return r && (r[0] = t), a
        }

        function s7(e) {
            var r = 0, t = 127 & e[0];
            t:if (e[r++] >= 128) {
                if (t |= (127 & e[r]) << 7, e[r++] < 128 || (t |= (127 & e[r]) << 14, e[r++] < 128) || (t |= (127 & e[r]) << 21, e[r++] < 128)) break t;
                t |= (127 & e[r]) << 28
            }
            return t
        }

        function s9(e) {
            for (var r = [], t = [0]; t[0] < e.length;) {
                var a, n = t[0], s = s8(e, t), i = 7 & s, c = 0;
                if (0 == (s = Math.floor(s / 8))) break;
                switch (i) {
                    case 0:
                        for (var o = t[0]; e[t[0]++] >= 128;) ;
                        a = e.slice(o, t[0]);
                        break;
                    case 5:
                        c = 4, a = e.slice(t[0], t[0] + c), t[0] += c;
                        break;
                    case 1:
                        c = 8, a = e.slice(t[0], t[0] + c), t[0] += c;
                        break;
                    case 2:
                        c = s8(e, t), a = e.slice(t[0], t[0] + c), t[0] += c;
                        break;
                    default:
                        throw Error("PB Type ".concat(i, " for Field ").concat(s, " at offset ").concat(n))
                }
                var l = {data: a, type: i};
                null == r[s] ? r[s] = [l] : r[s].push(l)
            }
            return r
        }

        function ie(e, r) {
            return (null == e ? void 0 : e.map(function (e) {
                return r(e.data)
            })) || []
        }

        function ir(e) {
            return s8(s9(e)[1][0].data)
        }

        function it(e, r) {
            var t = s9(r.data), a = s7(t[1][0].data), n = t[3], s = [];
            return (n || []).forEach(function (r) {
                var t = s9(r.data), n = s7(t[1][0].data) >>> 0;
                switch (a) {
                    case 1:
                        s[n] = s3(t[3][0].data);
                        break;
                    case 8:
                        var i = s9(e[ir(t[9][0].data)][0].data), c = e[ir(i[1][0].data)][0], o = s7(c.meta[1][0].data);
                        if (2001 != o) throw Error("2000 unexpected reference to ".concat(o));
                        var l = s9(c.data);
                        s[n] = l[3].map(function (e) {
                            return s3(e.data)
                        }).join("")
                }
            }), s
        }

        function ia(e) {
            var r, t, a, n, s = {}, i = [];
            if (e.FullPaths.forEach(function (e) {
                if (e.match(/\.iwpv2/)) throw Error("Unsupported password protection")
            }), e.FileIndex.forEach(function (e) {
                var r, t;
                if (e.name.match(/\.iwa$/)) {
                    try {
                        r = function (e) {
                            for (var r = [], t = 0; t < e.length;) {
                                var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
                                t += 3, r.push(function (e, r) {
                                    if (0 != e) throw Error("Unexpected Snappy chunk type ".concat(e));
                                    for (var t = [0], a = s8(r, t), n = []; t[0] < r.length;) {
                                        var s = 3 & r[t[0]];
                                        if (0 == s) {
                                            var i = r[t[0]++] >> 2;
                                            if (i < 60) ++i; else {
                                                var c = i - 59;
                                                i = r[t[0]], c > 1 && (i |= r[t[0] + 1] << 8), c > 2 && (i |= r[t[0] + 2] << 16), c > 3 && (i |= r[t[0] + 3] << 24), i >>>= 0, i++, t[0] += c
                                            }
                                            n.push(r.slice(t[0], t[0] + i)), t[0] += i;
                                            continue
                                        }
                                        var o = 0, l = 0;
                                        if (1 == s ? (l = (r[t[0]] >> 2 & 7) + 4, o = (224 & r[t[0]++]) << 3 | r[t[0]++]) : (l = (r[t[0]++] >> 2) + 1, 2 == s ? (o = r[t[0]] | r[t[0] + 1] << 8, t[0] += 2) : (o = (r[t[0]] | r[t[0] + 1] << 8 | r[t[0] + 2] << 16 | r[t[0] + 3] << 24) >>> 0, t[0] += 4)), n = [s5(n)], 0 == o) throw Error("Invalid offset 0");
                                        if (o > n[0].length) throw Error("Invalid offset beyond length");
                                        if (l >= o) for (n.push(n[0].slice(-o)), l -= o; l >= n[n.length - 1].length;) n.push(n[n.length - 1]), l -= n[n.length - 1].length;
                                        n.push(n[0].slice(-o, -o + l))
                                    }
                                    var f = s5(n);
                                    if (f.length != a) throw Error("Unexpected length: ".concat(f.length, " != ").concat(a));
                                    return f
                                }(a, e.slice(t, t + n))), t += n
                            }
                            if (t !== e.length) throw Error("data is not a valid framed stream!");
                            return s5(r)
                        }(e.content)
                    } catch (r) {
                        return console.log("?? " + e.content.length + " " + (r.message || r))
                    }
                    try {
                        t = function (e) {
                            for (var r, t = [], a = [0]; a[0] < e.length;) {
                                var n = s8(e, a), s = s9(e.slice(a[0], a[0] + n));
                                a[0] += n;
                                var i = {id: s7(s[1][0].data), messages: []};
                                s[2].forEach(function (r) {
                                    var t = s9(r.data), n = s7(t[3][0].data);
                                    i.messages.push({meta: t, data: e.slice(a[0], a[0] + n)}), a[0] += n
                                }), (null == (r = s[3]) ? void 0 : r[0]) && (i.merge = s7(s[3][0].data) >>> 0 > 0), t.push(i)
                            }
                            return t
                        }(r)
                    } catch (e) {
                        return console.log("## " + (e.message || e))
                    }
                    t.forEach(function (e) {
                        s[e.id] = e.messages, i.push(e.id)
                    })
                }
            }), !i.length) throw Error("File has no messages");
            var c = (null == (n = null == (a = null == (t = null == (r = null == s ? void 0 : s[1]) ? void 0 : r[0]) ? void 0 : t.meta) ? void 0 : a[1]) ? void 0 : n[0].data) && 1 == s7(s[1][0].meta[1][0].data) && s[1][0];
            if (c || i.forEach(function (e) {
                s[e].forEach(function (e) {
                    if (1 == s7(e.meta[1][0].data) >>> 0) {
                        if (c) throw Error("Document has multiple roots");
                        c = e
                    }
                })
            }), !c) throw Error("Cannot find Document root");
            return function (e, r) {
                var t = im();
                if (ie(s9(r.data)[1], ir).forEach(function (r) {
                    e[r].forEach(function (r) {
                        if (2 == s7(r.meta[1][0].data)) {
                            var a, n, s, i = (s = {
                                name: (null == (a = (n = s9(r.data))[1]) ? void 0 : a[0]) ? s3(n[1][0].data) : "",
                                sheets: []
                            }, ie(n[2], ir).forEach(function (r) {
                                e[r].forEach(function (r) {
                                    6e3 == s7(r.meta[1][0].data) && s.sheets.push(function (e, r) {
                                        var t = s9(r.data), a = {"!ref": "A1"}, n = e[ir(t[2][0].data)],
                                            s = s7(n[0].meta[1][0].data);
                                        if (6001 != s) throw Error("6000 unexpected reference to ".concat(s));
                                        return function (e, r, t) {
                                            var a, n = s9(r.data), s = {s: {r: 0, c: 0}, e: {r: 0, c: 0}};
                                            if (s.e.r = (s7(n[6][0].data) >>> 0) - 1, s.e.r < 0) throw Error("Invalid row varint ".concat(n[6][0].data));
                                            if (s.e.c = (s7(n[7][0].data) >>> 0) - 1, s.e.c < 0) throw Error("Invalid col varint ".concat(n[7][0].data));
                                            t["!ref"] = t$(s);
                                            var i = s9(n[4][0].data), c = it(e, e[ir(i[4][0].data)][0]),
                                                o = (null == (a = i[17]) ? void 0 : a[0]) ? it(e, e[ir(i[17][0].data)][0]) : [],
                                                l = s9(i[3][0].data), f = 0;
                                            l[1].forEach(function (r) {
                                                var a, n, s, i, l = e[ir(s9(r.data)[2][0].data)][0],
                                                    h = s7(l.meta[1][0].data);
                                                if (6002 != h) throw Error("6001 unexpected reference to ".concat(h));
                                                var u = (s = (null == (a = null == (n = s9(l.data)) ? void 0 : n[7]) ? void 0 : a[0]) ? s7(n[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, i = ie(n[5], function (e) {
                                                    return function (e, r) {
                                                        var t, a, n, s, i, c, o, l, f, h, u, d, p, g, m, v, b = s9(e),
                                                            T = s7(b[1][0].data) >>> 0, E = s7(b[2][0].data) >>> 0,
                                                            w = (null == (a = null == (t = b[8]) ? void 0 : t[0]) ? void 0 : a.data) && s7(b[8][0].data) > 0 || !1;
                                                        if ((null == (s = null == (n = b[7]) ? void 0 : n[0]) ? void 0 : s.data) && 0 != r) m = null == (c = null == (i = b[7]) ? void 0 : i[0]) ? void 0 : c.data, v = null == (l = null == (o = b[6]) ? void 0 : o[0]) ? void 0 : l.data; else if ((null == (h = null == (f = b[4]) ? void 0 : f[0]) ? void 0 : h.data) && 1 != r) m = null == (d = null == (u = b[4]) ? void 0 : u[0]) ? void 0 : d.data, v = null == (g = null == (p = b[3]) ? void 0 : p[0]) ? void 0 : g.data; else throw "NUMBERS Tile missing ".concat(r, " cell storage");
                                                        for (var A = w ? 4 : 1, S = s4(m), k = [], y = 0; y < m.length / 2; ++y) {
                                                            var C = S.getUint16(2 * y, !0);
                                                            C < 65535 && k.push([y, C])
                                                        }
                                                        if (k.length != E) throw "Expected ".concat(E, " cells, found ").concat(k.length);
                                                        var _ = [];
                                                        for (y = 0; y < k.length - 1; ++y) _[k[y][0]] = v.subarray(k[y][1] * A, k[y + 1][1] * A);
                                                        return k.length >= 1 && (_[k[k.length - 1][0]] = v.subarray(k[k.length - 1][1] * A)), {
                                                            R: T,
                                                            cells: _
                                                        }
                                                    }(e, s)
                                                }), {
                                                    nrows: s7(n[4][0].data) >>> 0, data: i.reduce(function (e, r) {
                                                        return e[r.R] || (e[r.R] = []), r.cells.forEach(function (t, a) {
                                                            if (e[r.R][a]) throw Error("Duplicate cell r=".concat(r.R, " c=").concat(a));
                                                            e[r.R][a] = t
                                                        }), e
                                                    }, [])
                                                });
                                                u.data.forEach(function (e, r) {
                                                    e.forEach(function (e, a) {
                                                        var n = tz({r: f + r, c: a}), s = function (e, r, t) {
                                                            switch (e[0]) {
                                                                case 0:
                                                                case 1:
                                                                case 2:
                                                                case 3:
                                                                    return function (e, r, t, a) {
                                                                        var n, s = s4(e), i = s.getUint32(4, !0),
                                                                            c = (a > 1 ? 12 : 8) + 4 * s6(i & (a > 1 ? 3470 : 398)),
                                                                            o = -1, l = -1, f = NaN,
                                                                            h = new Date(2001, 0, 1);
                                                                        switch (512 & i && (o = s.getUint32(c, !0), c += 4), c += 4 * s6(i & (a > 1 ? 12288 : 4096)), 16 & i && (l = s.getUint32(c, !0), c += 4), 32 & i && (f = s.getFloat64(c, !0), c += 8), 64 & i && (h.setTime(h.getTime() + 1e3 * s.getFloat64(c, !0)), c += 8), e[2]) {
                                                                            case 0:
                                                                                break;
                                                                            case 2:
                                                                                n = {t: "n", v: f};
                                                                                break;
                                                                            case 3:
                                                                                n = {t: "s", v: r[l]};
                                                                                break;
                                                                            case 5:
                                                                                n = {t: "d", v: h};
                                                                                break;
                                                                            case 6:
                                                                                n = {t: "b", v: f > 0};
                                                                                break;
                                                                            case 7:
                                                                                n = {t: "n", v: f / 86400};
                                                                                break;
                                                                            case 8:
                                                                                n = {t: "e", v: 0};
                                                                                break;
                                                                            case 9:
                                                                                if (o > -1) n = {
                                                                                    t: "s",
                                                                                    v: t[o]
                                                                                }; else if (l > -1) n = {
                                                                                    t: "s",
                                                                                    v: r[l]
                                                                                }; else if (isNaN(f)) throw Error("Unsupported cell type ".concat(e.slice(0, 4))); else n = {
                                                                                    t: "n",
                                                                                    v: f
                                                                                };
                                                                                break;
                                                                            default:
                                                                                throw Error("Unsupported cell type ".concat(e.slice(0, 4)))
                                                                        }
                                                                        return n
                                                                    }(e, r, t, e[0]);
                                                                case 5:
                                                                    return function (e, r, t) {
                                                                        var a, n = s4(e), s = n.getUint32(8, !0),
                                                                            i = 12, c = -1, o = -1, l = NaN, f = NaN,
                                                                            h = new Date(2001, 0, 1);
                                                                        switch (1 & s && (l = function (e, r) {
                                                                            for (var t = (127 & e[r + 15]) << 7 | e[r + 14] >> 1, a = 1 & e[r + 14], n = r + 13; n >= r; --n) a = 256 * a + e[n];
                                                                            return (128 & e[r + 15] ? -a : a) * Math.pow(10, t - 6176)
                                                                        }(e, i), i += 16), 2 & s && (f = n.getFloat64(i, !0), i += 8), 4 & s && (h.setTime(h.getTime() + 1e3 * n.getFloat64(i, !0)), i += 8), 8 & s && (o = n.getUint32(i, !0), i += 4), 16 & s && (c = n.getUint32(i, !0), i += 4), e[1]) {
                                                                            case 0:
                                                                                break;
                                                                            case 2:
                                                                            case 10:
                                                                                a = {t: "n", v: l};
                                                                                break;
                                                                            case 3:
                                                                                a = {t: "s", v: r[o]};
                                                                                break;
                                                                            case 5:
                                                                                a = {t: "d", v: h};
                                                                                break;
                                                                            case 6:
                                                                                a = {t: "b", v: f > 0};
                                                                                break;
                                                                            case 7:
                                                                                a = {t: "n", v: f / 86400};
                                                                                break;
                                                                            case 8:
                                                                                a = {t: "e", v: 0};
                                                                                break;
                                                                            case 9:
                                                                                if (c > -1) a = {
                                                                                    t: "s",
                                                                                    v: t[c]
                                                                                }; else throw Error("Unsupported cell type ".concat(e[1], " : ").concat(31 & s, " : ").concat(e.slice(0, 4)));
                                                                                break;
                                                                            default:
                                                                                throw Error("Unsupported cell type ".concat(e[1], " : ").concat(31 & s, " : ").concat(e.slice(0, 4)))
                                                                        }
                                                                        return a
                                                                    }(e, r, t);
                                                                default:
                                                                    throw Error("Unsupported payload version ".concat(e[0]))
                                                            }
                                                        }(e, c, o);
                                                        s && (t[n] = s)
                                                    })
                                                }), f += u.nrows
                                            })
                                        }(e, n[0], a), a
                                    }(e, r))
                                })
                            }), s);
                            i.sheets.forEach(function (e, r) {
                                iv(t, e, 0 == r ? i.name : i.name + "_" + r, !0)
                            })
                        }
                    })
                }), 0 == t.SheetNames.length) throw Error("Empty NUMBERS file");
                return t
            }(s, c)
        }

        function is(e) {
            var r;
            (r = [["cellNF", !1], ["cellHTML", !0], ["cellFormula", !0], ["cellStyles", !1], ["cellText", !0], ["cellDates", !1], ["sheetStubs", !1], ["sheetRows", 0, "n"], ["bookDeps", !1], ["bookSheets", !1], ["bookProps", !1], ["bookFiles", !1], ["bookVBA", !1], ["password", ""], ["WTF", !1]], function (e) {
                for (var t = 0; t != r.length; ++t) {
                    var a = r[t];
                    void 0 === e[a[0]] && (e[a[0]] = a[1]), "n" === a[2] && (e[a[0]] = Number(e[a[0]]))
                }
            })(e)
        }

        function ii(e) {
            return "/" == e.charAt(0) ? e.slice(1) : e
        }

        function ic(e, r) {
            var t = "";
            switch ((r || {}).type || "base64") {
                case"buffer":
                case"array":
                    return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
                case"base64":
                    t = eu(e.slice(0, 12));
                    break;
                case"binary":
                    t = e;
                    break;
                default:
                    throw Error("Unrecognized type " + (r && r.type || "undefined"))
            }
            return [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3), t.charCodeAt(4), t.charCodeAt(5), t.charCodeAt(6), t.charCodeAt(7)]
        }

        function io(e, r) {
            var t = 0;
            a:for (; t < e.length;) switch (e.charCodeAt(t)) {
                case 10:
                case 13:
                case 32:
                    ++t;
                    break;
                case 60:
                    return sV(e.slice(t), r);
                default:
                    break a
            }
            return a8.to_workbook(e, r)
        }

        function il(e, r, t, a) {
            return a ? (t.type = "string", a8.to_workbook(e, t)) : a8.to_workbook(r, t)
        }

        function ih(e, r) {
            if (null == e || null == e["!ref"]) return [];
            var t = {t: "n", v: 0}, a = 0, n = 1, s = [], i = 0, c = "", o = {s: {r: 0, c: 0}, e: {r: 0, c: 0}},
                l = r || {}, f = null != l.range ? l.range : e["!ref"];
            switch (1 === l.header ? a = 1 : "A" === l.header ? a = 2 : Array.isArray(l.header) ? a = 3 : null == l.header && (a = 0), typeof f) {
                case"string":
                    o = tY(f);
                    break;
                case"number":
                    (o = tY(e["!ref"])).s.r = f;
                    break;
                default:
                    o = f
            }
            a > 0 && (n = 0);
            var h = tB(o.s.r), u = [], d = [], p = 0, g = 0, m = Array.isArray(e), v = o.s.r, b = 0, T = {};
            m && !e[v] && (e[v] = []);
            var E = l.skipHidden && e["!cols"] || [], w = l.skipHidden && e["!rows"] || [];
            for (b = o.s.c; b <= o.e.c; ++b) if (!(E[b] || {}).hidden) switch (u[b] = tW(b), t = m ? e[v][b] : e[u[b] + h], a) {
                case 1:
                    s[b] = b - o.s.c;
                    break;
                case 2:
                    s[b] = u[b];
                    break;
                case 3:
                    s[b] = l.header[b - o.s.c];
                    break;
                default:
                    if (null == t && (t = {w: "__EMPTY", t: "s"}), c = i = tK(t, null, l), g = T[i] || 0) {
                        do c = i + "_" + g++; while (T[c]);
                        T[i] = g, T[c] = 1
                    } else T[i] = 1;
                    s[b] = c
            }
            for (v = o.s.r + n; v <= o.e.r; ++v) if (!(w[v] || {}).hidden) {
                var A = function (e, r, t, a, n, s, i, c) {
                    var o = tB(t), l = c.defval, f = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"), h = !0,
                        u = 1 === n ? [] : {};
                    if (1 !== n) {
                        if (Object.defineProperty) try {
                            Object.defineProperty(u, "__rowNum__", {value: t, enumerable: !1})
                        } catch (e) {
                            u.__rowNum__ = t
                        } else u.__rowNum__ = t
                    }
                    if (!i || e[t]) for (var d = r.s.c; d <= r.e.c; ++d) {
                        var p = i ? e[t][d] : e[a[d] + o];
                        if (void 0 === p || void 0 === p.t) {
                            if (void 0 === l) continue;
                            null != s[d] && (u[s[d]] = l);
                            continue
                        }
                        var g = p.v;
                        switch (p.t) {
                            case"z":
                                if (null == g) break;
                                continue;
                            case"e":
                                g = 0 == g ? null : void 0;
                                break;
                            case"s":
                            case"d":
                            case"b":
                            case"n":
                                break;
                            default:
                                throw Error("unrecognized type " + p.t)
                        }
                        if (null != s[d]) {
                            if (null == g) {
                                if ("e" == p.t && null === g) u[s[d]] = null; else if (void 0 !== l) u[s[d]] = l; else {
                                    if (!f || null !== g) continue;
                                    u[s[d]] = null
                                }
                            } else u[s[d]] = f && ("n" !== p.t || "n" === p.t && !1 !== c.rawNumbers) ? g : tK(p, g, c);
                            null != g && (h = !1)
                        }
                    }
                    return {row: u, isempty: h}
                }(e, o, v, u, a, s, m, l);
                (!1 === A.isempty || (1 === a ? !1 !== l.blankrows : l.blankrows)) && (d[p++] = A.row)
            }
            return d.length = p, d
        }

        var iu = /"/g;

        function id(e, r) {
            var t = [], a = null == r ? {} : r;
            if (null == e || null == e["!ref"]) return "";
            var n = tY(e["!ref"]), s = void 0 !== a.FS ? a.FS : ",", i = s.charCodeAt(0),
                c = void 0 !== a.RS ? a.RS : "\n", o = c.charCodeAt(0), l = RegExp(("|" == s ? "\\|" : s) + "+$"),
                f = "", h = [];
            a.dense = Array.isArray(e);
            for (var u = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], p = n.s.c; p <= n.e.c; ++p) (u[p] || {}).hidden || (h[p] = tW(p));
            for (var g = 0, m = n.s.r; m <= n.e.r; ++m) if (!(d[m] || {}).hidden) {
                if (null == (f = function (e, r, t, a, n, s, i, c) {
                    for (var o = !0, l = [], f = "", h = tB(t), u = r.s.c; u <= r.e.c; ++u) if (a[u]) {
                        var d = c.dense ? (e[t] || [])[u] : e[a[u] + h];
                        if (null == d) f = ""; else if (null != d.v) {
                            o = !1, f = "" + (c.rawNumbers && "n" == d.t ? d.v : tK(d, null, c));
                            for (var p = 0, g = 0; p !== f.length; ++p) if ((g = f.charCodeAt(p)) === n || g === s || 34 === g || c.forceQuotes) {
                                f = '"' + f.replace(iu, '""') + '"';
                                break
                            }
                            "ID" == f && (f = '"ID"')
                        } else null == d.f || d.F ? f = "" : (o = !1, (f = "=" + d.f).indexOf(",") >= 0 && (f = '"' + f.replace(iu, '""') + '"'));
                        l.push(f)
                    }
                    return !1 === c.blankrows && o ? null : l.join(i)
                }(e, n, m, h, i, o, s, a))) continue;
                a.strip && (f = f.replace(l, "")), (f || !1 !== a.blankrows) && t.push((g++ ? c : "") + f)
            }
            return delete a.dense, t.join("")
        }

        function ip(e, r, t) {
            var a, n = t || {}, s = +!n.skipHeader, i = e || {}, c = 0, o = 0;
            if (i && null != n.origin) {
                if ("number" == typeof n.origin) c = n.origin; else {
                    var l = "string" == typeof n.origin ? tV(n.origin) : n.origin;
                    c = l.r, o = l.c
                }
            }
            var f = {s: {c: 0, r: 0}, e: {c: o, r: c + r.length - 1 + s}};
            if (i["!ref"]) {
                var h = tY(i["!ref"]);
                f.e.c = Math.max(f.e.c, h.e.c), f.e.r = Math.max(f.e.r, h.e.r), -1 == c && (c = h.e.r + 1, f.e.r = c + r.length - 1 + s)
            } else -1 == c && (c = 0, f.e.r = r.length - 1 + s);
            var u = n.header || [], d = 0;
            r.forEach(function (e, r) {
                re(e).forEach(function (t) {
                    -1 == (d = u.indexOf(t)) && (u[d = u.length] = t);
                    var l = e[t], f = "z", h = "", p = tz({c: o + d, r: c + r + s});
                    a = ig(i, p), !l || "object" != typeof l || l instanceof Date ? ("number" == typeof l ? f = "n" : "boolean" == typeof l ? f = "b" : "string" == typeof l ? f = "s" : l instanceof Date ? (f = "d", n.cellDates || (f = "n", l = ra(l)), h = n.dateNF || ex[14]) : null === l && n.nullError && (f = "e", l = 0), a ? (a.t = f, a.v = l, delete a.w, delete a.R, h && (a.z = h)) : i[p] = a = {
                        t: f,
                        v: l
                    }, h && (a.z = h)) : i[p] = l
                })
            }), f.e.c = Math.max(f.e.c, o + u.length - 1);
            var p = tB(c);
            if (s) for (d = 0; d < u.length; ++d) i[tW(d + o) + p] = {t: "s", v: u[d]};
            return i["!ref"] = t$(f), i
        }

        function ig(e, r, t) {
            if ("string" == typeof r) {
                if (Array.isArray(e)) {
                    var a = tV(r);
                    return e[a.r] || (e[a.r] = []), e[a.r][a.c] || (e[a.r][a.c] = {t: "z"})
                }
                return e[r] || (e[r] = {t: "z"})
            }
            return "number" != typeof r ? ig(e, tz(r)) : ig(e, tz({r: r, c: t || 0}))
        }

        function im() {
            return {SheetNames: [], Sheets: {}}
        }

        function iv(e, r, t, a) {
            var n = 1;
            if (!t) for (; n <= 65535 && -1 != e.SheetNames.indexOf(t = "Sheet" + n); ++n, t = void 0) ;
            if (!t || e.SheetNames.length >= 65535) throw Error("Too many worksheets");
            if (a && e.SheetNames.indexOf(t) >= 0) {
                var s = t.match(/(^.*?)(\d+)$/);
                n = s && +s[2] || 0;
                var i = s && s[1] || t;
                for (++n; n <= 65535 && -1 != e.SheetNames.indexOf(t = i + n); ++n) ;
            }
            if (!function (e, r) {
                if (e.length > 31) throw Error("Sheet names cannot exceed 31 chars");
                sP.forEach(function (r) {
                    if (-1 != e.indexOf(r)) throw Error("Sheet name cannot contain : \\ / ? * [ ]")
                })
            }(t), e.SheetNames.indexOf(t) >= 0) throw Error("Worksheet with name |" + t + "| already exists!");
            return e.SheetNames.push(t), e.Sheets[t] = r, t
        }

        function ib(e, r, t) {
            return r ? (e.l = {Target: r}, t && (e.l.Tooltip = t)) : delete e.l, e
        }

        var iT = {
            encode_col: tW,
            encode_row: tB,
            encode_cell: tz,
            encode_range: t$,
            decode_col: tH,
            decode_row: tU,
            split_cell: function (e) {
                return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",")
            },
            decode_cell: tV,
            decode_range: tG,
            format_cell: tK,
            sheet_add_aoa: tJ,
            sheet_add_json: ip,
            sheet_add_dom: sq,
            aoa_to_sheet: tZ,
            json_to_sheet: function (e, r) {
                return ip(null, e, r)
            },
            table_to_sheet: sQ,
            table_to_book: function (e, r) {
                return tX(sQ(e, r), r)
            },
            sheet_to_csv: id,
            sheet_to_txt: function (e, r) {
                r || (r = {}), r.FS = "	", r.RS = "\n";
                var t = id(e, r);
                if (void 0 === Y || "string" == r.type) return t;
                var a = Y.utils.encode(1200, t, "str");
                return String.fromCharCode(255) + String.fromCharCode(254) + a
            },
            sheet_to_json: ih,
            sheet_to_html: function (e, r) {
                var t = r || {},
                    a = null != t.header ? t.header : '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
                    n = null != t.footer ? t.footer : "</body></html>", s = [a], i = tG(e["!ref"]);
                t.dense = Array.isArray(e), s.push("<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">");
                for (var c = i.s.r; c <= i.e.r; ++c) s.push(function (e, r, t, a) {
                    for (var n = e["!merges"] || [], s = [], i = r.s.c; i <= r.e.c; ++i) {
                        for (var c = 0, o = 0, l = 0; l < n.length; ++l) if (!(n[l].s.r > t) && !(n[l].s.c > i) && !(n[l].e.r < t) && !(n[l].e.c < i)) {
                            if (n[l].s.r < t || n[l].s.c < i) {
                                c = -1;
                                break
                            }
                            c = n[l].e.r - n[l].s.r + 1, o = n[l].e.c - n[l].s.c + 1;
                            break
                        }
                        if (!(c < 0)) {
                            var f = tz({r: t, c: i}), h = a.dense ? (e[t] || [])[i] : e[f],
                                u = h && null != h.v && (h.h || rW(h.w || (tK(h), h.w) || "")) || "", d = {};
                            c > 1 && (d.rowspan = c), o > 1 && (d.colspan = o), a.editable ? u = '<span contenteditable="true">' + u + "</span>" : h && (d["data-t"] = h && h.t || "z", null != h.v && (d["data-v"] = h.v), null != h.z && (d["data-z"] = h.z), h.l && "#" != (h.l.Target || "#").charAt(0) && (u = '<a href="' + h.l.Target + '">' + u + "</a>")), d.id = (a.id || "sjs") + "-" + f, s.push(function (e, r, t) {
                                return "<td" + (null != t ? re(t).map(function (e) {
                                    return " " + e + '="' + t[e] + '"'
                                }).join("") : "") + (null != r ? (r.match(r2) ? ' xml:space="preserve"' : "") + ">" + r + "</td" : "/") + ">"
                            }(0, u, d))
                        }
                    }
                    return "<tr>" + s.join("") + "</tr>"
                }(e, i, c, t));
                return s.push("</table>" + n), s.join("")
            },
            sheet_to_formulae: function (e) {
                var r, t = "", a = "";
                if (null == e || null == e["!ref"]) return [];
                var n, s = tY(e["!ref"]), i = "", c = [], o = [], l = Array.isArray(e);
                for (n = s.s.c; n <= s.e.c; ++n) c[n] = tW(n);
                for (var f = s.s.r; f <= s.e.r; ++f) for (i = tB(f), n = s.s.c; n <= s.e.c; ++n) if (t = c[n] + i, r = l ? (e[f] || [])[n] : e[t], a = "", void 0 !== r) {
                    if (null != r.F) {
                        if (t = r.F, !r.f) continue;
                        a = r.f, -1 == t.indexOf(":") && (t = t + ":" + t)
                    }
                    if (null != r.f) a = r.f; else if ("z" == r.t) continue; else if ("n" == r.t && null != r.v) a = "" + r.v; else if ("b" == r.t) a = r.v ? "TRUE" : "FALSE"; else if (void 0 !== r.w) a = "'" + r.w; else {
                        if (void 0 === r.v) continue;
                        a = "s" == r.t ? "'" + r.v : "" + r.v
                    }
                    o[o.length] = t + "=" + a
                }
                return o
            },
            sheet_to_row_object_array: ih,
            sheet_get_cell: ig,
            book_new: im,
            book_append_sheet: iv,
            book_set_sheet_visibility: function (e, r, t) {
                e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
                var a = function (e, r) {
                    if ("number" == typeof r) {
                        if (r >= 0 && e.SheetNames.length > r) return r;
                        throw Error("Cannot find sheet # " + r)
                    }
                    if ("string" == typeof r) {
                        var t = e.SheetNames.indexOf(r);
                        if (t > -1) return t;
                        throw Error("Cannot find sheet name |" + r + "|")
                    }
                    throw Error("Cannot find sheet |" + r + "|")
                }(e, r);
                switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), t) {
                    case 0:
                    case 1:
                    case 2:
                        break;
                    default:
                        throw Error("Bad sheet visibility setting " + t)
                }
                e.Workbook.Sheets[a].Hidden = t
            },
            cell_set_number_format: function (e, r) {
                return e.z = r, e
            },
            cell_set_hyperlink: ib,
            cell_set_internal_link: function (e, r, t) {
                return ib(e, "#" + r, t)
            },
            cell_add_comment: function (e, r, t) {
                e.c || (e.c = []), e.c.push({t: r, a: t || "SheetJS"})
            },
            sheet_set_array_formula: function (e, r, t, a) {
                for (var n = "string" != typeof r ? r : tY(r), s = "string" == typeof r ? r : t$(r), i = n.s.r; i <= n.e.r; ++i) for (var c = n.s.c; c <= n.e.c; ++c) {
                    var o = ig(e, i, c);
                    o.t = "n", o.F = s, delete o.v, i == n.s.r && c == n.s.c && (o.f = t, a && (o.D = !0))
                }
                return e
            },
            consts: {SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2}
        };
        Z.version
    }
}]);