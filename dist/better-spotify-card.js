/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
const t$2 = globalThis, e$2 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$4.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$4.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$3 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$3(o2, t2, s$2);
}, S$1 = (s2, o2) => {
  if (e$2) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$2.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$3, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== h2 && e$1(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h2 = e2 == null ? void 0 : e2.call(this);
      r2 == null ? void 0 : r2.call(this, s3), this.requestUpdate(t2, h2, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$3(t3), ...o$3(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a2;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2));
  }
  removeController(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$ET(t2, s2) {
    var _a2;
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const h2 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a2, _b;
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? ((_b = this._$Ej) == null ? void 0 : _b.get(e2)) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2, e2 = false, h2) {
    var _a2;
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h2 = this[t2]), i2 ?? (i2 = r2.getPropertyOptions(t2)), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(t2)) && !this.hasAttribute(r2._$Eu(t2, i2)))) return;
      this.C(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h2 }, r2) {
    i2 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) {
        const { wrapped: t4 } = i2, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
      }), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
      var _a3;
      return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, i$1 = (t2) => t2, s$1 = t$1.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h = "$lit$", o$2 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$1 = "?" + o$2, r$2 = `<${n$1}>`, l = document, c = () => l.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u = Array.isArray, d = (t2) => u(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y2 = /^(?:script|style|textarea|title)$/i, x = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), b = x(1), w = x(2), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t2, i2) {
  if (!u(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i2) : i2;
}
const N = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let n3, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v ? "!--" === u2[1] ? c2 = _ : void 0 !== u2[1] ? c2 = m : void 0 !== u2[2] ? (y2.test(u2[2]) && (n3 = RegExp("</" + u2[2], "g")), c2 = p) : void 0 !== u2[3] && (c2 = p) : c2 === p ? ">" === u2[0] ? (c2 = n3 ?? v, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p : '"' === u2[3] ? $ : g) : c2 === $ || c2 === g ? c2 = p : c2 === _ || c2 === m ? c2 = v : (c2 = p, n3 = void 0);
    const x2 = c2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v ? s3 + r$2 : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h + s3.slice(d2) + o$2 + x2) : s3 + o$2 + (-2 === d2 ? i3 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
class S {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N(t2, i2);
    if (this.el = S.createElement(f2, e2), P.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h)) {
          const i3 = v2[a2++], s2 = r2.getAttribute(t3).split(o$2), e3 = /([.?@])?(.*)/.exec(i3);
          d2.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I : "?" === e3[1] ? L : "@" === e3[1] ? z : H }), r2.removeAttribute(t3);
        } else t3.startsWith(o$2) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y2.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$2), i3 = t3.length - 1;
          if (i3 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++) r2.append(t3[s2], c()), P.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i3], c());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n$1) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$2, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$2.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M(t2, i2, s2 = t2, e2) {
  var _a2, _b;
  if (i2 === E) return i2;
  let h2 = void 0 !== e2 ? (_a2 = s2._$Co) == null ? void 0 : _a2[e2] : s2._$Cl;
  const o2 = a(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ?? (s2._$Co = []))[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = M(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
class R {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? l).importNode(i2, true);
    P.currentNode = e2;
    let h2 = P.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new k(h2, h2.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h2, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new Z(h2, this, t2)), this._$AV.push(i3), r2 = s2[++n3];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h2 = P.nextNode(), o2++);
    }
    return P.currentNode = l, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class k {
  get _$AU() {
    var _a2;
    return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = M(this, t2, i2), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a2;
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e2) this._$AH.p(i2);
    else {
      const t3 = new R(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = C.get(t2.strings);
    return void 0 === i2 && C.set(t2.strings, i2 = new S(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new k(this.O(c()), this.O(c()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = M(this, t2, i2, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = M(this, e3[s2 + n3], i2, n3), r2 === E && (r2 = this._$AH[n3]), o2 || (o2 = !a(r2) || r2 !== this._$AH[n3]), r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z extends H {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = M(this, t2, i2, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
}
const B = t$1.litHtmlPolyfillSupport;
B == null ? void 0 : B(S, k), (t$1.litHtmlVersions ?? (t$1.litHtmlVersions = [])).push("3.3.3");
const D = (t2, i2, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h2 = new k(i2.insertBefore(c(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a2;
    const t2 = super.createRenderRoot();
    return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return E;
  }
}
i._$litElement$ = true, i["finalized"] = true, (_a = s.litElementHydrateSupport) == null ? void 0 : _a.call(s, { LitElement: i });
const o$1 = s.litElementPolyfillSupport;
o$1 == null ? void 0 : o$1({ LitElement: i });
(s.litElementVersions ?? (s.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o, e2, r2) => {
  const { kind: n3, metadata: i2 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = /* @__PURE__ */ new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n4, t2, true, r3);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n4, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n2(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$1(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return n2({ ...r2, state: true, attribute: false });
}
class SpotifyService {
  /**
   * Request SpotifyPlus / Home Assistant to refresh playback state from Spotify Web API
   */
  static async refreshPlaybackState(hass, entityId) {
    try {
      await hass.callService("homeassistant", "update_entity", {
        entity_id: entityId
      });
    } catch (e2) {
      try {
        await hass.callService("spotifyplus", "trigger_scan_interval", {
          entity_id: entityId
        });
      } catch (err) {
      }
    }
  }
  /**
   * Helper to call a SpotifyPlus query service with response data via Home Assistant WebSocket
   */
  static async callSpotifyPlusWS(hass, service, entityId, serviceData = {}) {
    try {
      const response = await hass.callWS({
        type: "call_service",
        domain: "spotifyplus",
        service,
        service_data: {
          entity_id: entityId,
          ...serviceData
        },
        return_response: true
      });
      return response == null ? void 0 : response.response;
    } catch (err) {
      console.warn(`[BetterSpotifyCard] spotifyplus.${service} call failed:`, err);
      throw err;
    }
  }
  /**
   * Get available Spotify Connect devices
   */
  static async getConnectDevices(hass, entityId) {
    var _a2, _b;
    let devices = [];
    try {
      const res = await this.callSpotifyPlusWS(hass, "get_spotify_connect_devices", entityId, {
        refresh: true
      });
      const rawDevices = ((_a2 = res == null ? void 0 : res.result) == null ? void 0 : _a2.devices) || (res == null ? void 0 : res.result) || [];
      if (Array.isArray(rawDevices) && rawDevices.length > 0) {
        devices = rawDevices.map((d2) => ({
          id: d2.id || d2.device_id || d2.name,
          name: d2.name || "Appareil Spotify",
          type: d2.type || "Speaker",
          is_active: Boolean(d2.is_active),
          is_private_session: d2.is_private_session,
          is_restricted: d2.is_restricted,
          volume_percent: d2.volume_percent,
          supports_volume: d2.supports_volume
        }));
      }
    } catch (e2) {
      console.warn("[BetterSpotifyCard] Falling back to entity source_list for connect devices");
    }
    if (devices.length === 0) {
      const entity = hass.states[entityId];
      if (((_b = entity == null ? void 0 : entity.attributes) == null ? void 0 : _b.source_list) && entity.attributes.source_list.length > 0) {
        const currentSource = entity.attributes.source;
        devices = entity.attributes.source_list.map((name) => ({
          id: name,
          name,
          type: "Speaker",
          is_active: name === currentSource
        }));
      }
    }
    if (devices.length > 0) {
      try {
        localStorage.setItem("better_spotify_cached_devices", JSON.stringify(devices));
      } catch (_2) {
      }
      return devices;
    }
    try {
      const cached = localStorage.getItem("better_spotify_cached_devices");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (_2) {
    }
    return [];
  }
  /**
   * Transfer playback to a Spotify Connect device
   */
  static async transferPlayback(hass, entityId, deviceId) {
    try {
      await hass.callService("spotifyplus", "player_transfer_playback", {
        entity_id: entityId,
        device_id: deviceId,
        play: true
      });
      return;
    } catch (e2) {
      await hass.callService("media_player", "select_source", {
        entity_id: entityId,
        source: deviceId
      });
    }
  }
  /**
   * Get user playlist favorites
   */
  static async getPlaylists(hass, entityId, limit = 200) {
    var _a2;
    try {
      const res = await this.callSpotifyPlusWS(hass, "get_playlist_favorites", entityId, {
        limit: 50,
        limit_total: limit,
        sort_result: true
      });
      const items = ((_a2 = res == null ? void 0 : res.result) == null ? void 0 : _a2.items) || [];
      return items.map((p2) => {
        var _a3, _b;
        return {
          id: p2.id || p2.uri,
          name: p2.name || "Sans titre",
          uri: p2.uri,
          description: p2.description,
          images: p2.images || [],
          tracks_total: (_a3 = p2.tracks) == null ? void 0 : _a3.total,
          owner_name: (_b = p2.owner) == null ? void 0 : _b.display_name
        };
      });
    } catch (err) {
      console.error("[BetterSpotifyCard] Erreur getPlaylists:", err);
      return [];
    }
  }
  /**
   * Get paginated items (tracks) for a specific playlist
   */
  static async getPlaylistTracks(hass, entityId, playlistIdOrUri, limit = 50, offset = 0) {
    var _a2, _b;
    try {
      const playlistId = playlistIdOrUri.replace("spotify:playlist:", "").trim();
      const res = await this.callSpotifyPlusWS(hass, "get_playlist_items", entityId, {
        playlist_id: playlistId,
        limit: Math.min(limit, 50),
        offset
      });
      const rawItems = ((_a2 = res == null ? void 0 : res.result) == null ? void 0 : _a2.items) || [];
      const total = ((_b = res == null ? void 0 : res.result) == null ? void 0 : _b.total) ?? rawItems.length;
      const items = rawItems.map((item) => {
        const t2 = item.track || item.item || item;
        if (!t2 || !t2.name) return null;
        return {
          id: t2.id || t2.uri,
          name: t2.name || "Titre inconnu",
          uri: t2.uri,
          duration_ms: t2.duration_ms || 0,
          artists: (t2.artists || []).map((a2) => ({
            id: a2.id || "",
            name: typeof a2 === "string" ? a2 : a2.name || "Artiste inconnu",
            uri: a2.uri || ""
          })),
          album: t2.album ? {
            id: t2.album.id || "",
            name: t2.album.name || "",
            uri: t2.album.uri || "",
            images: t2.album.images || []
          } : void 0,
          is_playable: t2.is_playable ?? true
        };
      }).filter((t2) => t2 !== null);
      return {
        items,
        total,
        offset,
        limit
      };
    } catch (err) {
      console.error("[BetterSpotifyCard] Erreur getPlaylistTracks:", err);
      return { items: [], total: 0, offset, limit };
    }
  }
  /**
   * Get paginated user track favorites (Liked Songs)
   */
  static async getLikedTracks(hass, entityId, limit = 50, offset = 0) {
    var _a2, _b;
    try {
      const res = await this.callSpotifyPlusWS(hass, "get_track_favorites", entityId, {
        limit: Math.min(limit, 50),
        offset,
        sort_result: false
      });
      const rawItems = ((_a2 = res == null ? void 0 : res.result) == null ? void 0 : _a2.items) || [];
      const total = ((_b = res == null ? void 0 : res.result) == null ? void 0 : _b.total) ?? rawItems.length;
      const items = rawItems.map((item) => {
        const t2 = item.track || item.item || item;
        return {
          id: t2.id || t2.uri,
          name: t2.name || "Titre inconnu",
          uri: t2.uri,
          duration_ms: t2.duration_ms || 0,
          artists: (t2.artists || []).map((a2) => ({
            id: a2.id || "",
            name: typeof a2 === "string" ? a2 : a2.name || "Artiste inconnu",
            uri: a2.uri || ""
          })),
          album: t2.album ? {
            id: t2.album.id || "",
            name: t2.album.name || "",
            uri: t2.album.uri || "",
            images: t2.album.images || []
          } : void 0,
          is_playable: t2.is_playable ?? true
        };
      });
      return {
        items,
        total,
        offset,
        limit
      };
    } catch (err) {
      console.error("[BetterSpotifyCard] Erreur getLikedTracks:", err);
      return { items: [], total: 0, offset, limit };
    }
  }
  /**
   * Search tracks in Spotify catalog
   */
  static async searchTracks(hass, entityId, criteria, limit = 20) {
    var _a2;
    if (!criteria || criteria.trim().length === 0) return [];
    try {
      const res = await this.callSpotifyPlusWS(hass, "search_tracks", entityId, {
        criteria: criteria.trim(),
        limit: Math.min(limit, 10),
        limit_total: limit
      });
      const items = ((_a2 = res == null ? void 0 : res.result) == null ? void 0 : _a2.items) || [];
      return items.map((t2) => ({
        id: t2.id || t2.uri,
        name: t2.name || "Titre inconnu",
        uri: t2.uri,
        duration_ms: t2.duration_ms || 0,
        artists: (t2.artists || []).map((a2) => ({ id: a2.id, name: a2.name, uri: a2.uri })),
        album: t2.album ? {
          id: t2.album.id,
          name: t2.album.name,
          uri: t2.album.uri,
          images: t2.album.images || []
        } : void 0,
        is_playable: t2.is_playable ?? true
      }));
    } catch (err) {
      console.error("[BetterSpotifyCard] Erreur searchTracks:", err);
      return [];
    }
  }
  /**
   * Start playing a context (playlist, album, etc.) at an optional offset index or track URI
   */
  static async playContext(hass, entityId, contextUri, offsetPosition = 0, deviceId, offsetUri) {
    try {
      const serviceData = {
        entity_id: entityId,
        context_uri: contextUri,
        offset_position: offsetPosition
      };
      if (offsetUri) {
        serviceData.offset_uri = offsetUri;
      }
      if (deviceId) {
        serviceData.device_id = deviceId;
      }
      await hass.callService("spotifyplus", "player_media_play_context", serviceData);
      return;
    } catch (e2) {
      await hass.callService("media_player", "play_media", {
        entity_id: entityId,
        media_content_type: "playlist",
        media_content_id: contextUri
      });
    }
  }
  /**
   * Start playing a list of tracks (queues the next tracks)
   */
  static async playTracks(hass, entityId, uris, deviceId) {
    if (!uris || uris.length === 0) return;
    try {
      const uriList = uris.slice(0, 50).join(",");
      const serviceData = {
        entity_id: entityId,
        uris: uriList,
        position_ms: 0
      };
      if (deviceId) {
        serviceData.device_id = deviceId;
      }
      await hass.callService("spotifyplus", "player_media_play_tracks", serviceData);
      return;
    } catch (e2) {
      await hass.callService("media_player", "play_media", {
        entity_id: entityId,
        media_content_type: "music",
        media_content_id: uris[0]
      });
    }
  }
  /**
   * Play all liked tracks (favorites) using native SpotifyPlus endpoint
   */
  static async playAllLiked(hass, entityId, deviceId) {
    try {
      const serviceData = {
        entity_id: entityId,
        limit_total: 500
      };
      if (deviceId) {
        serviceData.device_id = deviceId;
      }
      await hass.callService("spotifyplus", "player_media_play_track_favorites", serviceData);
    } catch (err) {
      console.warn("[BetterSpotifyCard] player_media_play_track_favorites failed:", err);
    }
  }
  /**
   * Play liked tracks starting from a specific clicked track index
   */
  static async playLikedTracks(hass, entityId, allLikedTracks, startIndex = 0, deviceId) {
    if (allLikedTracks && allLikedTracks.length > 0) {
      const sliced = allLikedTracks.slice(startIndex, startIndex + 50);
      const uris = sliced.map((t2) => t2.uri);
      await this.playTracks(hass, entityId, uris, deviceId);
    } else {
      await this.playAllLiked(hass, entityId, deviceId);
    }
  }
  /**
   * Standard playback controls
   */
  static async togglePlayPause(hass, entityId) {
    await hass.callService("media_player", "media_play_pause", { entity_id: entityId });
  }
  static async skipNext(hass, entityId) {
    try {
      await hass.callService("spotifyplus", "player_media_skip_next", { entity_id: entityId });
    } catch (e2) {
      await hass.callService("media_player", "media_next_track", { entity_id: entityId });
    }
  }
  static async skipPrevious(hass, entityId) {
    try {
      await hass.callService("spotifyplus", "player_media_skip_previous", { entity_id: entityId });
    } catch (e2) {
      await hass.callService("media_player", "media_previous_track", { entity_id: entityId });
    }
  }
  static async setVolume(hass, entityId, volumePercent) {
    const fraction = Math.max(0, Math.min(100, volumePercent)) / 100;
    await hass.callService("media_player", "volume_set", {
      entity_id: entityId,
      volume_level: fraction
    });
  }
  static async seek(hass, entityId, positionSeconds) {
    await hass.callService("media_player", "media_seek", {
      entity_id: entityId,
      seek_position: positionSeconds
    });
  }
  /**
   * Set shuffle mode
   */
  static async setShuffle(hass, entityId, shuffle) {
    try {
      await hass.callService("spotifyplus", "player_set_shuffle_mode", {
        entity_id: entityId,
        state: shuffle
      });
    } catch (e2) {
      await hass.callService("media_player", "shuffle_set", {
        entity_id: entityId,
        shuffle
      });
    }
  }
  /**
   * Toggle shuffle mode
   */
  static async toggleShuffle(hass, entityId) {
    var _a2;
    const entity = hass.states[entityId];
    const currentShuffle = Boolean((_a2 = entity == null ? void 0 : entity.attributes) == null ? void 0 : _a2.shuffle);
    await this.setShuffle(hass, entityId, !currentShuffle);
  }
}
const cardStyles = i$3`
  :host {
    --bsc-bg: var(--ha-card-background, #121212);
    --bsc-surface: #181818;
    --bsc-surface-elevated: #242424;
    --bsc-surface-hover: #2a2a2a;
    --bsc-primary: #1db954;
    --bsc-primary-hover: #1ed760;
    --bsc-primary-active: #169c46;
    --bsc-text: #ffffff;
    --bsc-text-secondary: #b3b3b3;
    --bsc-text-muted: #727272;
    --bsc-border: rgba(255, 255, 255, 0.08);
    --bsc-radius: 16px;
    --bsc-popup-radius: 28px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    display: block;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* ======================================================== */
  /* MINI PLAYER (DASHBOARD CARD)                             */
  /* ======================================================== */
  .mini-card {
    background: var(--bsc-surface);
    border-radius: var(--bsc-radius);
    padding: 12px 14px;
    color: var(--bsc-text);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
    border: 1px solid var(--bsc-border);
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    user-select: none;
    position: relative;
    overflow: hidden;
  }

  .mini-card:hover {
    background: var(--bsc-surface-elevated);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
    transform: translateY(-1px);
  }

  .mini-card:active {
    transform: scale(0.99);
  }

  .mini-card.placeholder {
    cursor: default;
    border-style: dashed;
    border-color: rgba(29, 185, 84, 0.4);
  }

  .mini-card.placeholder:hover {
    transform: none;
    background: var(--bsc-surface);
  }

  .mini-card.placeholder .mini-cover {
    background: #1db954;
  }

  .mini-card.placeholder .mini-cover svg {
    fill: #ffffff;
    width: 32px;
    height: 32px;
  }

  .mini-card.placeholder .btn-icon:disabled {
    opacity: 0.35;
    cursor: default;
  }

  .mini-main-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mini-cover {
    width: 52px;
    height: 52px;
    min-width: 52px;
    border-radius: 8px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mini-cover svg {
    width: 28px;
    height: 28px;
    fill: var(--bsc-text-muted);
  }

  .mini-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mini-title {
    font-size: 14.5px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--bsc-text);
  }

  .mini-artist {
    font-size: 13px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mini-device-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 500;
    color: var(--bsc-primary);
    margin-top: 2px;
  }

  .mini-device-badge svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }

  .mini-controls {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
  }

  .btn-icon {
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease, transform 0.1s ease;
    padding: 0;
  }

  .btn-icon:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-icon:active {
    transform: scale(0.92);
  }

  .btn-icon svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .btn-play-mini {
    background: var(--bsc-text);
    color: #000;
    width: 38px;
    height: 38px;
  }

  .btn-play-mini:hover {
    background: #f0f0f0;
    color: #000;
    transform: scale(1.05);
  }

  .btn-play-mini svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  /* Thin progress bar at bottom of mini card */
  .mini-progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
  }

  .mini-progress-fill {
    height: 100%;
    background: var(--bsc-primary);
    transition: width 0.3s linear;
  }

  /* ======================================================== */
  /* BUBBLE-CARD STYLE POPUP MODAL                            */
  /* ======================================================== */
  .bubble-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation: fadeIn 0.25s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0.5;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .bubble-sheet {
    width: 100%;
    max-width: 580px;
    height: 90vh;
    max-height: 850px;
    background: #121212;
    border-radius: var(--bsc-popup-radius) var(--bsc-popup-radius) 0 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.7);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    animation: slideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @media (min-width: 640px) {
    .bubble-backdrop {
      align-items: center;
      padding: 24px;
    }
    .bubble-sheet {
      height: 86vh;
      border-radius: var(--bsc-popup-radius);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
  }

  /* Sheet Header */
  .sheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px 12px 18px;
    border-bottom: 1px solid var(--bsc-border);
    flex-shrink: 0;
    background: #141414;
  }

  .sheet-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .spotify-brand-icon {
    width: 24px;
    height: 24px;
    fill: var(--bsc-primary);
    display: flex;
    align-items: center;
  }

  .sheet-header-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: var(--bsc-text);
  }

  .sheet-connect-pill {
    background: rgba(29, 185, 84, 0.15);
    border: 1px solid rgba(29, 185, 84, 0.3);
    color: var(--bsc-primary);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .sheet-connect-pill:hover {
    background: rgba(29, 185, 84, 0.25);
  }

  .sheet-connect-pill svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
  }

  .btn-close {
    background: rgba(255, 255, 255, 0.08);
    border: none;
    color: var(--bsc-text-secondary);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .btn-close:hover {
    background: rgba(255, 255, 255, 0.18);
    color: var(--bsc-text);
  }

  .btn-close svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  /* ======================================================== */
  /* TAB NAVIGATION (AT TOP UNDER HEADER)                     */
  /* ======================================================== */
  .tab-bar {
    display: flex;
    background: #181818;
    padding: 6px 12px;
    gap: 8px;
    border-bottom: 1px solid var(--bsc-border);
    flex-shrink: 0;
  }

  .tab-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px 6px;
    background: transparent;
    border: none;
    border-radius: 12px;
    color: var(--bsc-text-secondary);
    font-size: 11.5px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .tab-btn svg {
    width: 19px;
    height: 19px;
    fill: currentColor;
    transition: transform 0.15s ease;
  }

  .tab-btn:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.05);
  }

  .tab-btn.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.12);
  }

  .tab-btn.active svg {
    transform: scale(1.1);
  }

  /* ======================================================== */
  /* TAB CONTENT AREA (IN MIDDLE)                             */
  /* ======================================================== */
  .tab-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    -webkit-overflow-scrolling: touch;
  }

  /* Custom scrollbar */
  .tab-content::-webkit-scrollbar {
    width: 6px;
  }
  .tab-content::-webkit-scrollbar-track {
    background: transparent;
  }
  .tab-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }

  /* Search input */
  .search-box-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .search-input {
    width: 100%;
    background: #242424;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 12px 42px 12px 42px;
    font-size: 14px;
    color: #fff;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .search-input:focus {
    border-color: var(--bsc-primary);
    background: #2a2a2a;
  }

  .search-input::placeholder {
    color: var(--bsc-text-muted);
  }

  .search-icon-left {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    fill: var(--bsc-text-muted);
    pointer-events: none;
  }

  .search-btn-clear {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--bsc-text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-btn-clear svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  /* Items lists (Tracks, Playlists, Devices) */
  .items-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .list-item:hover {
    background: var(--bsc-surface-elevated);
  }

  .list-item:active {
    background: #2d2d2d;
  }

  .list-item-thumb {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 6px;
    background: #282828;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-item-thumb svg {
    width: 22px;
    height: 22px;
    fill: var(--bsc-text-muted);
  }

  .list-item-thumb-round {
    border-radius: 50%;
  }

  .list-item-text {
    flex: 1;
    min-width: 0;
  }

  .list-item-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-item-title.active {
    color: var(--bsc-primary);
    font-weight: 600;
  }

  .list-item-subtitle {
    font-size: 12.5px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px;
  }

  .list-item-duration {
    font-size: 12px;
    color: var(--bsc-text-muted);
    font-variant-numeric: tabular-nums;
  }

  .list-item-badge {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(29, 185, 84, 0.15);
    color: var(--bsc-primary);
  }

  /* Empty state / Loading state */
  .state-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    text-align: center;
    color: var(--bsc-text-muted);
    gap: 12px;
  }

  .state-message svg {
    width: 48px;
    height: 48px;
    fill: rgba(255, 255, 255, 0.15);
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: var(--bsc-primary);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ======================================================== */
  /* NOW PLAYING COMPONENT (SPOTIFY DESKTOP STYLE AT BOTTOM)  */
  /* ======================================================== */
  .now-playing-section {
    background: linear-gradient(0deg, #121212 0%, #1c1c1c 100%);
    padding: 10px 16px 14px 16px;
    border-top: 1px solid var(--bsc-border);
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Line 1: Seek / timeline bar on top */
  .desktop-seek-row {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .desktop-seek-time {
    font-size: 11px;
    color: var(--bsc-text-muted);
    min-width: 32px;
    font-variant-numeric: tabular-nums;
  }

  .desktop-seek-time.right {
    text-align: right;
  }

  .seek-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(
      to right,
      var(--bsc-primary) 0%,
      var(--bsc-primary) var(--seek-percent, 0%),
      rgba(255, 255, 255, 0.2) var(--seek-percent, 0%),
      rgba(255, 255, 255, 0.2) 100%
    );
    outline: none;
    cursor: pointer;
    transition: height 0.15s ease;
  }

  .seek-slider:hover {
    height: 6px;
  }

  .seek-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--bsc-text);
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transition: transform 0.1s ease;
  }

  .seek-slider:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    background: #ffffff;
  }

  .seek-slider::-moz-range-progress {
    background-color: var(--bsc-primary);
    height: 4px;
    border-radius: 2px;
  }

  /* Line 2: 3-column Spotify Desktop row */
  .desktop-player-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  /* Col Left: Cover, Title, Artist */
  .desktop-col-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 0;
  }

  .desktop-cover {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 6px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  .desktop-meta {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .desktop-title {
    font-size: 13.5px;
    font-weight: 600;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .desktop-artist {
    font-size: 12px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Col Center: Prev, Play/Pause, Next */
  .desktop-col-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .btn-play-large {
    background: var(--bsc-text);
    color: #000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease;
  }

  .btn-play-large:hover {
    background: #ffffff;
    transform: scale(1.06);
  }

  .btn-play-large:active {
    transform: scale(0.95);
  }

  .btn-play-large svg {
    width: 22px;
    height: 22px;
    fill: #000;
  }

  /* Col Right: Mode Lecture, Vol Trigger */
  .desktop-col-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }

  .btn-vol-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--bsc-text);
    cursor: pointer;
    height: 32px;
    padding: 0 10px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.15s ease;
    user-select: none;
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
  }

  .btn-vol-trigger:hover {
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.2);
  }

  .btn-vol-trigger.active {
    background: var(--bsc-primary, #1db954);
    color: #000000;
    border-color: transparent;
  }

  .btn-vol-trigger svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  /* Dedicated Volume Popover / Bar */
  .volume-popover {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    background: #202020;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
    width: 100%;
    box-sizing: border-box;
    animation: fadeIn 0.15s ease-out;
  }

  .btn-vol-step {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--bsc-text);
    cursor: pointer;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 700;
    line-height: 1;
    transition: all 0.12s ease;
    padding: 0;
    user-select: none;
  }

  .btn-vol-step:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.08);
    color: #ffffff;
  }

  .btn-vol-step:active {
    transform: scale(0.92);
  }

  .volume-slider-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    min-width: 0;
    padding: 0 4px;
  }

  .volume-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(
      to right,
      var(--bsc-primary) 0%,
      var(--bsc-primary) var(--volume-percent, 50%),
      rgba(255, 255, 255, 0.2) var(--volume-percent, 50%),
      rgba(255, 255, 255, 0.2) 100%
    );
    outline: none;
    cursor: pointer;
    transition: height 0.15s ease;
  }

  .volume-slider:hover,
  .volume-slider:active {
    height: 8px;
  }

  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    transition: transform 0.1s ease;
  }

  .volume-slider:hover::-webkit-slider-thumb,
  .volume-slider:active::-webkit-slider-thumb {
    transform: scale(1.2);
  }

  .volume-slider::-moz-range-progress {
    background-color: var(--bsc-primary);
    height: 6px;
    border-radius: 3px;
  }

  .volume-percent-label {
    min-width: 38px;
    font-size: 13px;
    font-weight: 700;
    color: var(--bsc-primary, #1db954);
    text-align: right;
    font-variant-numeric: tabular-nums;
    user-select: none;
  }

  .btn-vol-close {
    background: transparent;
    border: none;
    color: var(--bsc-text-muted);
    cursor: pointer;
    width: 28px;
    height: 28px;
    min-width: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: all 0.12s ease;
  }

  .btn-vol-close:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-vol-close svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  .btn-shuffle-toggle {
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    cursor: pointer;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease, transform 0.1s ease;
    padding: 0;
    flex-shrink: 0;
  }

  .btn-shuffle-toggle:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-shuffle-toggle.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.16);
  }

  .btn-shuffle-toggle svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .vol-indicator {
    font-size: 11px;
    font-weight: 500;
    color: var(--bsc-text-muted);
    font-variant-numeric: tabular-nums;
  }

  /* Shuffle toggle button in player controls */
  .btn-shuffle-toggle {
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    cursor: pointer;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease, transform 0.1s ease;
    padding: 0;
  }

  .btn-shuffle-toggle:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-shuffle-toggle.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.16);
  }

  .btn-shuffle-toggle svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  /* Action bar at the top of playlists and liked tabs */
  .tab-action-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .tab-action-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--bsc-text-secondary);
  }

  .tab-action-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .btn-pill-play {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--bsc-primary);
    color: #000;
    border: none;
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 12.5px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease;
  }

  .btn-pill-play:hover {
    background: var(--bsc-primary-hover);
    transform: scale(1.03);
  }

  .btn-pill-play:active {
    transform: scale(0.97);
  }

  .btn-pill-play svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  .btn-pill-shuffle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--bsc-text);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .btn-pill-shuffle:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: scale(1.03);
  }

  .btn-pill-shuffle:active {
    transform: scale(0.97);
  }

  .btn-pill-shuffle svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
  }

  /* Back button in playlist view */
  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    padding: 2px 0 10px 0;
    transition: color 0.15s ease;
  }

  .btn-back:hover {
    color: var(--bsc-text);
  }

  .btn-back svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  /* Playlist detail view header */
  .playlist-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--bsc-border);
  }

  .playlist-header-cover {
    width: 58px;
    height: 58px;
    min-width: 58px;
    border-radius: 8px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  .playlist-header-meta {
    flex: 1;
    min-width: 0;
  }

  .playlist-header-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .playlist-header-sub {
    font-size: 12px;
    color: var(--bsc-text-secondary);
    margin-top: 2px;
  }

  .list-item-arrow {
    color: var(--bsc-text-muted);
    display: flex;
    align-items: center;
  }

  .list-item-arrow svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .default-device-badge {
    display: inline-block;
    margin-left: 8px;
    font-size: 11px;
    font-weight: 600;
    color: var(--bsc-accent);
    background: rgba(29, 185, 84, 0.15);
    border: 1px solid rgba(29, 185, 84, 0.3);
    padding: 2px 7px;
    border-radius: 12px;
    vertical-align: middle;
  }

  .list-item-right-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .btn-star-default {
    background: transparent;
    border: none;
    font-size: 17px;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    line-height: 1;
    transition: transform 0.15s ease, opacity 0.15s ease;
    opacity: 0.7;
  }

  .btn-star-default:hover {
    transform: scale(1.25);
    opacity: 1;
  }

  .btn-star-default.is-default {
    opacity: 1;
    color: #ffd700;
  }

  .loading-more-spinner {
    display: flex;
    justify-content: center;
    padding: 16px 0 8px 0;
  }
`;
const icons = {
  spotify: w`
    <svg viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.503 9.722 1.113.294.18.386.563.207.857zm1.225-2.723c-.226.367-.708.482-1.075.257-2.69-1.653-6.79-2.132-9.97-1.166-.413.125-.85-.11-.974-.522-.125-.413.11-.85.522-.975 3.632-1.103 8.147-.568 11.24 1.332.367.225.482.707.257 1.074zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.494.15-1.016-.13-1.166-.624-.15-.494.13-1.016.624-1.166 3.532-1.072 9.404-.866 13.115 1.338.445.264.59.838.327 1.282-.264.444-.838.59-1.281.326z"/>
    </svg>
  `,
  play: w`
    <svg viewBox="0 0 24 24">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z"/>
    </svg>
  `,
  pause: w`
    <svg viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  `,
  skipNext: w`
    <svg viewBox="0 0 24 24">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
    </svg>
  `,
  skipPrevious: w`
    <svg viewBox="0 0 24 24">
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
    </svg>
  `,
  speaker: w`
    <svg viewBox="0 0 24 24">
      <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  `,
  connectDevices: w`
    <svg viewBox="0 0 24 24">
      <path d="M18 10.01L18 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3.99zM4 14V4h12v10H4zm18 4H10v-2h12v2z"/>
    </svg>
  `,
  search: w`
    <svg viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  `,
  heart: w`
    <svg viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `,
  playlist: w`
    <svg viewBox="0 0 24 24">
      <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
    </svg>
  `,
  volumeLow: w`
    <svg viewBox="0 0 24 24">
      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
    </svg>
  `,
  volumeHigh: w`
    <svg viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
  `,
  volumeMinus: w`
    <svg viewBox="0 0 24 24">
      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5zm10 2h6v2h-6v-2z"/>
    </svg>
  `,
  volumePlus: w`
    <svg viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm11 2h2V9h2v2h2v2h-2v2h-2v-2h-2v-2zm-1.5-3.03V5.9c2.89.86 5 3.54 5 6.1h-2c0-1.77-1.02-3.29-2.5-4.03z"/>
    </svg>
  `,
  close: w`
    <svg viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  `,
  clear: w`
    <svg viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  `,
  musicNote: w`
    <svg viewBox="0 0 24 24">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  `,
  shuffle: w`
    <svg viewBox="0 0 24 24">
      <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
    </svg>
  `,
  arrowBack: w`
    <svg viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  `,
  chevronRight: w`
    <svg viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  `
};
function formatDuration(ms) {
  if (!ms || isNaN(ms) || ms < 0) return "0:00";
  const totalSeconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
function formatSeconds(seconds) {
  if (!seconds || isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
const SCHEMA = [
  {
    name: "entity",
    required: true,
    selector: {
      entity: {
        filter: {
          domain: "media_player"
        }
      }
    }
  },
  {
    name: "default_tab",
    selector: {
      select: {
        mode: "dropdown",
        options: [
          { value: "liked", label: "Titres likés" },
          { value: "playlists", label: "Playlists" },
          { value: "search", label: "Recherche" },
          { value: "devices", label: "Appareils" }
        ]
      }
    }
  }
];
const loadHaForm = async () => {
  if (customElements.get("ha-form")) {
    return;
  }
  try {
    const helpers = window.loadCardHelpers ? await window.loadCardHelpers() : null;
    if (helpers) {
      const card = await helpers.createCardElement({ type: "button" });
      if (card && card.constructor.getConfigElement) {
        await card.constructor.getConfigElement();
      }
    }
  } catch (err) {
  }
  if (customElements.get("ha-form")) {
    return;
  }
  const cardTypes = ["hui-entities-card", "hui-button-card", "hui-markdown-card"];
  for (const cardType of cardTypes) {
    const el = customElements.get(cardType);
    if (el && el.getConfigElement) {
      try {
        await el.getConfigElement();
        if (customElements.get("ha-form")) break;
      } catch (e2) {
      }
    }
  }
};
let BetterSpotifyCardEditor = class extends i {
  constructor() {
    super(...arguments);
    this._computeLabel = (schema) => {
      switch (schema.name) {
        case "entity":
          return "Lecteur Spotify (Entité media_player)";
        case "default_tab":
          return "Onglet affiché par défaut";
        default:
          return schema.name;
      }
    };
    this._computeHelper = (schema) => {
      switch (schema.name) {
        case "entity":
          return "Sélectionnez le compte Spotify ou SpotifyPlus à contrôler";
        case "default_tab":
          return "Onglet affiché lors de l’ouverture de la popup";
        default:
          return "";
      }
    };
  }
  setConfig(config) {
    this._config = { ...config };
  }
  _valueChanged(ev) {
    if (!this._config) return;
    const value = ev.detail.value;
    const newConfig = {
      ...this._config,
      ...value
    };
    this._config = newConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true
      })
    );
  }
  render() {
    if (!this.hass || !this._config) {
      return b``;
    }
    if (customElements.get("ha-form")) {
      return b`
        <div class="card-config">
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${SCHEMA}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      `;
    }
    return b`
      <div class="card-config">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.entity || ""}
          .includeDomains=${["media_player"]}
          label="Lecteur Spotify (Requis)"
          allow-custom-entity
          @value-changed=${(ev) => {
      this._valueChanged({
        detail: { value: { ...this._config, entity: ev.detail.value } }
      });
    }}
        ></ha-entity-picker>
      </div>
    `;
  }
};
BetterSpotifyCardEditor.styles = i$3`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 8px 0;
    }
  `;
__decorateClass$1([
  n2({ attribute: false })
], BetterSpotifyCardEditor.prototype, "hass", 2);
__decorateClass$1([
  r()
], BetterSpotifyCardEditor.prototype, "_config", 2);
BetterSpotifyCardEditor = __decorateClass$1([
  t("better-spotify-card-editor")
], BetterSpotifyCardEditor);
var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(target, key, result) || result;
  if (result) __defProp(target, key, result);
  return result;
};
const _BetterSpotifyCard = class _BetterSpotifyCard extends i {
  constructor() {
    super(...arguments);
    this.popupOpen = false;
    this.activeTab = "liked";
    this.playlists = [];
    this.likedTracks = [];
    this.likedTotal = 0;
    this.likedOffset = 0;
    this.loadingMoreLiked = false;
    this.searchResults = [];
    this.devices = [];
    this.selectedPlaylist = null;
    this.playlistTracks = [];
    this.playlistTotal = 0;
    this.playlistOffset = 0;
    this.loadingPlaylistTracks = false;
    this.loadingMorePlaylistTracks = false;
    this.loadingPlaylists = false;
    this.loadingLiked = false;
    this.loadingSearch = false;
    this.loadingDevices = false;
    this.searchQuery = "";
    this.currentPosition = 0;
    this.volumeMenuOpen = false;
    this.localVolume = null;
    this.initialRefreshDone = false;
  }
  setConfig(config) {
    if (!config) {
      throw new Error("Configuration invalide");
    }
    this.config = {
      default_tab: "liked",
      ...config
    };
    if (this.config.default_tab) {
      this.activeTab = this.config.default_tab;
    }
  }
  getCardSize() {
    return 2;
  }
  static async getConfigElement() {
    await loadHaForm();
    return document.createElement("better-spotify-card-editor");
  }
  static getStubConfig(hass, _entities, _entitiesFallback) {
    let chosenEntity = "";
    if (hass == null ? void 0 : hass.states) {
      const stateKeys = Object.keys(hass.states);
      const spotifyEntity = stateKeys.find((id) => {
        var _a2;
        if (!id.startsWith("media_player.")) return false;
        const state2 = hass.states[id];
        const platform = ((_a2 = state2 == null ? void 0 : state2.attributes) == null ? void 0 : _a2.platform) || "";
        return id.includes("spotify") || platform === "spotifyplus" || platform === "spotify";
      });
      if (spotifyEntity) {
        chosenEntity = spotifyEntity;
      } else {
        const anyMediaPlayer = stateKeys.find((id) => id.startsWith("media_player."));
        if (anyMediaPlayer) {
          chosenEntity = anyMediaPlayer;
        }
      }
    }
    return {
      entity: chosenEntity,
      default_tab: "liked"
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.boundKeydownHandler = (e2) => {
      if (e2.key === "Escape") {
        if (this.volumeMenuOpen) {
          this.closeVolumeMenu();
        } else if (this.popupOpen) {
          this.closePopup();
        }
      }
    };
    window.addEventListener("keydown", this.boundKeydownHandler);
    this.startPositionTicker();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.boundKeydownHandler) {
      window.removeEventListener("keydown", this.boundKeydownHandler);
    }
    if (this.volumeDebounceTimer) {
      clearTimeout(this.volumeDebounceTimer);
      this.volumeDebounceTimer = void 0;
    }
    this.closeVolumeMenu();
    this.stopPositionTicker();
    this.stopPlaybackRefresh();
  }
  startPlaybackRefresh() {
    var _a2;
    this.stopPlaybackRefresh();
    if (this.hass && ((_a2 = this.config) == null ? void 0 : _a2.entity) && this.hass.states[this.config.entity]) {
      SpotifyService.refreshPlaybackState(this.hass, this.config.entity);
    }
    this.refreshStateInterval = window.setInterval(() => {
      var _a3;
      if (this.popupOpen && this.hass && ((_a3 = this.config) == null ? void 0 : _a3.entity) && this.hass.states[this.config.entity]) {
        SpotifyService.refreshPlaybackState(this.hass, this.config.entity);
      }
    }, 3e4);
  }
  stopPlaybackRefresh() {
    if (this.refreshStateInterval) {
      clearInterval(this.refreshStateInterval);
      this.refreshStateInterval = void 0;
    }
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("popupOpen") || changedProps.has("activeTab")) {
      if (this.popupOpen) {
        this.loadCurrentTabData();
      }
    }
  }
  startPositionTicker() {
    this.stopPositionTicker();
    this.positionTickerInterval = window.setInterval(() => {
      this.updateTrackPosition();
    }, 1e3);
  }
  stopPositionTicker() {
    if (this.positionTickerInterval) {
      clearInterval(this.positionTickerInterval);
      this.positionTickerInterval = void 0;
    }
  }
  updateTrackPosition() {
    var _a2, _b;
    if (!this.hass || !((_a2 = this.config) == null ? void 0 : _a2.entity)) return;
    const entity = this.hass.states[this.config.entity];
    if (!entity || entity.state !== "playing") {
      if (((_b = entity == null ? void 0 : entity.attributes) == null ? void 0 : _b.media_position) !== void 0) {
        this.currentPosition = entity.attributes.media_position;
      }
      return;
    }
    const pos = entity.attributes.media_position ?? 0;
    const updatedAt = entity.attributes.media_position_updated_at;
    if (updatedAt) {
      const elapsed = (Date.now() - new Date(updatedAt).getTime()) / 1e3;
      this.currentPosition = Math.max(0, pos + elapsed);
    } else {
      this.currentPosition = pos;
    }
  }
  openPopup(initialTab) {
    if (initialTab) {
      this.activeTab = initialTab;
    }
    this.popupOpen = true;
    this.loadCurrentTabData();
    this.fetchDevices();
    this.startPlaybackRefresh();
  }
  closePopup() {
    this.closeVolumeMenu();
    this.stopPlaybackRefresh();
    this.popupOpen = false;
  }
  setTab(tab) {
    if (this.activeTab !== tab) {
      this.selectedPlaylist = null;
    }
    this.activeTab = tab;
    this.loadCurrentTabData();
  }
  loadCurrentTabData() {
    var _a2;
    if (!this.hass || !((_a2 = this.config) == null ? void 0 : _a2.entity)) return;
    switch (this.activeTab) {
      case "liked":
        if (this.likedTracks.length === 0) this.fetchLikedTracks();
        break;
      case "playlists":
        if (this.playlists.length === 0) this.fetchPlaylists();
        break;
      case "devices":
        this.fetchDevices();
        break;
    }
  }
  getDefaultDevice() {
    return this.config.default_device || localStorage.getItem("better_spotify_default_device") || void 0;
  }
  setDefaultDevice(deviceId) {
    const current = this.getDefaultDevice();
    if (current === deviceId) {
      localStorage.removeItem("better_spotify_default_device");
    } else {
      localStorage.setItem("better_spotify_default_device", deviceId);
    }
    this.requestUpdate();
  }
  getTargetDeviceId() {
    var _a2, _b, _c, _d;
    const defaultDev = this.getDefaultDevice();
    if (defaultDev) return defaultDev;
    if (!this.hass || !((_a2 = this.config) == null ? void 0 : _a2.entity)) return void 0;
    const entity = this.hass.states[this.config.entity];
    if ((_b = entity == null ? void 0 : entity.attributes) == null ? void 0 : _b.source) return void 0;
    return ((_c = this.devices[0]) == null ? void 0 : _c.id) || ((_d = this.devices[0]) == null ? void 0 : _d.name);
  }
  async fetchLikedTracks() {
    if (this.loadingLiked) return;
    this.loadingLiked = true;
    try {
      this.likedTracks = [];
      this.likedOffset = 0;
      this.likedTotal = 0;
      const page = await SpotifyService.getLikedTracks(this.hass, this.config.entity, 50, 0);
      this.likedTracks = page.items;
      this.likedTotal = page.total;
      this.likedOffset = page.items.length;
    } catch (e2) {
      console.error(e2);
    } finally {
      this.loadingLiked = false;
    }
  }
  async loadMoreLikedTracks() {
    if (this.loadingMoreLiked || this.likedTracks.length >= this.likedTotal) return;
    this.loadingMoreLiked = true;
    try {
      const page = await SpotifyService.getLikedTracks(this.hass, this.config.entity, 50, this.likedOffset);
      this.likedTracks = [...this.likedTracks, ...page.items];
      this.likedOffset += page.items.length;
      this.likedTotal = page.total;
    } catch (e2) {
      console.error(e2);
    } finally {
      this.loadingMoreLiked = false;
    }
  }
  async fetchPlaylists() {
    if (this.loadingPlaylists) return;
    this.loadingPlaylists = true;
    try {
      this.playlists = await SpotifyService.getPlaylists(this.hass, this.config.entity, 200);
    } catch (e2) {
      console.error(e2);
    } finally {
      this.loadingPlaylists = false;
    }
  }
  async fetchDevices() {
    if (this.loadingDevices) return;
    this.loadingDevices = true;
    try {
      this.devices = await SpotifyService.getConnectDevices(this.hass, this.config.entity);
    } catch (e2) {
      console.error(e2);
    } finally {
      this.loadingDevices = false;
    }
  }
  handleSearchInput(e2) {
    const input = e2.target;
    this.searchQuery = input.value;
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
    }
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      this.loadingSearch = false;
      return;
    }
    this.loadingSearch = true;
    this.searchDebounceTimer = window.setTimeout(async () => {
      try {
        this.searchResults = await SpotifyService.searchTracks(
          this.hass,
          this.config.entity,
          this.searchQuery,
          25
        );
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingSearch = false;
      }
    }, 350);
  }
  clearSearch() {
    this.searchQuery = "";
    this.searchResults = [];
    this.loadingSearch = false;
  }
  /* Actions */
  async handlePlayPause(e2) {
    e2 == null ? void 0 : e2.stopPropagation();
    await SpotifyService.togglePlayPause(this.hass, this.config.entity);
  }
  async handleNext(e2) {
    e2 == null ? void 0 : e2.stopPropagation();
    await SpotifyService.skipNext(this.hass, this.config.entity);
  }
  async handlePrevious(e2) {
    e2 == null ? void 0 : e2.stopPropagation();
    await SpotifyService.skipPrevious(this.hass, this.config.entity);
  }
  async handleSeek(e2) {
    const target = e2.target;
    const newPos = parseFloat(target.value);
    this.currentPosition = newPos;
    await SpotifyService.seek(this.hass, this.config.entity, newPos);
  }
  handleToggleVolumeMenu(e2) {
    e2 == null ? void 0 : e2.stopPropagation();
    if (this.volumeMenuOpen) {
      this.closeVolumeMenu();
    } else {
      this.openVolumeMenu();
    }
  }
  openVolumeMenu() {
    this.volumeMenuOpen = true;
    this.resetVolumeInactivityTimer();
    this.attachOutsideClickListener();
  }
  closeVolumeMenu() {
    this.volumeMenuOpen = false;
    this.clearVolumeInactivityTimer();
    this.detachOutsideClickListener();
  }
  resetVolumeInactivityTimer() {
    this.clearVolumeInactivityTimer();
    this.volumeInactivityTimer = window.setTimeout(() => {
      this.closeVolumeMenu();
    }, 2e4);
  }
  clearVolumeInactivityTimer() {
    if (this.volumeInactivityTimer) {
      clearTimeout(this.volumeInactivityTimer);
      this.volumeInactivityTimer = void 0;
    }
  }
  attachOutsideClickListener() {
    this.detachOutsideClickListener();
    this.boundOutsideClickListener = (e2) => {
      if (!this.volumeMenuOpen) return;
      const path = e2.composedPath();
      const isInside = path.some((el) => {
        var _a2, _b;
        if (!(el instanceof HTMLElement)) return false;
        return ((_a2 = el.classList) == null ? void 0 : _a2.contains("volume-popover")) || ((_b = el.classList) == null ? void 0 : _b.contains("btn-vol-trigger"));
      });
      if (!isInside) {
        this.closeVolumeMenu();
      }
    };
    window.addEventListener("pointerdown", this.boundOutsideClickListener, { capture: true });
  }
  detachOutsideClickListener() {
    if (this.boundOutsideClickListener) {
      window.removeEventListener("pointerdown", this.boundOutsideClickListener, { capture: true });
      this.boundOutsideClickListener = void 0;
    }
  }
  handleVolumeInput(e2) {
    e2.stopPropagation();
    this.resetVolumeInactivityTimer();
    const val = Number(e2.target.value);
    this.localVolume = val;
    if (this.volumeDebounceTimer) {
      clearTimeout(this.volumeDebounceTimer);
    }
    this.volumeDebounceTimer = window.setTimeout(() => {
      var _a2;
      if (this.hass && ((_a2 = this.config) == null ? void 0 : _a2.entity)) {
        SpotifyService.setVolume(this.hass, this.config.entity, val);
      }
    }, 120);
  }
  async handleVolumeChange(e2) {
    var _a2;
    e2.stopPropagation();
    this.resetVolumeInactivityTimer();
    const val = Number(e2.target.value);
    this.localVolume = val;
    if (this.volumeDebounceTimer) {
      clearTimeout(this.volumeDebounceTimer);
      this.volumeDebounceTimer = void 0;
    }
    if (this.hass && ((_a2 = this.config) == null ? void 0 : _a2.entity)) {
      await SpotifyService.setVolume(this.hass, this.config.entity, val);
    }
    setTimeout(() => {
      this.localVolume = null;
    }, 1200);
  }
  async handleVolumeStep(deltaPercent, e2) {
    var _a2;
    e2 == null ? void 0 : e2.stopPropagation();
    this.resetVolumeInactivityTimer();
    if (!this.hass || !((_a2 = this.config) == null ? void 0 : _a2.entity)) return;
    const entity = this.hass.states[this.config.entity];
    if (!entity) return;
    const currentVol = this.localVolume !== null ? this.localVolume : Math.round((entity.attributes.volume_level ?? 0.5) * 100);
    const newVol = Math.max(0, Math.min(100, currentVol + deltaPercent));
    this.localVolume = newVol;
    await SpotifyService.setVolume(this.hass, this.config.entity, newVol);
    setTimeout(() => {
      this.localVolume = null;
    }, 1200);
  }
  async handleSelectDevice(device) {
    await SpotifyService.transferPlayback(this.hass, this.config.entity, device.id);
    await this.fetchDevices();
  }
  async handleSelectPlaylist(playlist) {
    this.selectedPlaylist = playlist;
    this.playlistTracks = [];
    this.playlistOffset = 0;
    this.playlistTotal = 0;
    this.loadingPlaylistTracks = true;
    try {
      const page = await SpotifyService.getPlaylistTracks(
        this.hass,
        this.config.entity,
        playlist.id || playlist.uri,
        50,
        0
      );
      this.playlistTracks = page.items;
      this.playlistTotal = page.total;
      this.playlistOffset = page.items.length;
    } catch (err) {
      console.error(err);
    } finally {
      this.loadingPlaylistTracks = false;
    }
  }
  async loadMorePlaylistTracks() {
    if (!this.selectedPlaylist || this.loadingMorePlaylistTracks || this.playlistTracks.length >= this.playlistTotal) return;
    this.loadingMorePlaylistTracks = true;
    try {
      const page = await SpotifyService.getPlaylistTracks(
        this.hass,
        this.config.entity,
        this.selectedPlaylist.id || this.selectedPlaylist.uri,
        50,
        this.playlistOffset
      );
      this.playlistTracks = [...this.playlistTracks, ...page.items];
      this.playlistOffset += page.items.length;
      this.playlistTotal = page.total;
    } catch (err) {
      console.error(err);
    } finally {
      this.loadingMorePlaylistTracks = false;
    }
  }
  handleBackToPlaylists() {
    this.selectedPlaylist = null;
    this.playlistTracks = [];
    this.playlistOffset = 0;
    this.playlistTotal = 0;
  }
  handleContentScroll(e2) {
    const el = e2.target;
    if (!el) return;
    const threshold = 300;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
      if (this.activeTab === "liked") {
        this.loadMoreLikedTracks();
      } else if (this.activeTab === "playlists" && this.selectedPlaylist) {
        this.loadMorePlaylistTracks();
      }
    }
  }
  async handlePlayAllLiked(shuffle = false) {
    const targetDev = this.getTargetDeviceId();
    if (shuffle) {
      await SpotifyService.setShuffle(this.hass, this.config.entity, true);
    }
    await SpotifyService.playAllLiked(this.hass, this.config.entity, targetDev);
  }
  async handlePlayAllPlaylist(playlist, shuffle = false) {
    const targetDev = this.getTargetDeviceId();
    if (shuffle) {
      await SpotifyService.setShuffle(this.hass, this.config.entity, true);
    }
    await SpotifyService.playContext(this.hass, this.config.entity, playlist.uri, 0, targetDev);
  }
  async handlePlayPlaylistTrack(playlist, index) {
    const targetDev = this.getTargetDeviceId();
    const track = this.playlistTracks[index];
    await SpotifyService.playContext(
      this.hass,
      this.config.entity,
      playlist.uri,
      index,
      targetDev,
      track == null ? void 0 : track.uri
    );
  }
  async handleToggleShuffle(e2) {
    e2 == null ? void 0 : e2.stopPropagation();
    await SpotifyService.toggleShuffle(this.hass, this.config.entity);
  }
  async handlePlayPlaylist(playlist) {
    await this.handleSelectPlaylist(playlist);
  }
  async handlePlayLikedTrack(index) {
    const targetDev = this.getTargetDeviceId();
    await SpotifyService.playLikedTracks(this.hass, this.config.entity, this.likedTracks, index, targetDev);
  }
  async handlePlaySearchTrack(index) {
    const targetDev = this.getTargetDeviceId();
    const sliced = this.searchResults.slice(index);
    const uris = sliced.map((t2) => t2.uri);
    await SpotifyService.playTracks(this.hass, this.config.entity, uris, targetDev);
  }
  /* ======================================================== */
  /* RENDER METHODS                                           */
  /* ======================================================== */
  render() {
    var _a2;
    if (!this.hass || !((_a2 = this.config) == null ? void 0 : _a2.entity)) {
      return this.renderConfigPlaceholder();
    }
    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return this.renderConfigPlaceholder();
    }
    return b`
      ${this.renderMiniCard(entity)}
      ${this.popupOpen ? this.renderBubblePopup(entity) : ""}
    `;
  }
  /**
   * Preview / Placeholder card when no entity is selected or entity is not found
   */
  renderConfigPlaceholder() {
    var _a2;
    const isConfigured = Boolean((_a2 = this.config) == null ? void 0 : _a2.entity);
    const subtitle = isConfigured ? `Entité "${this.config.entity}" introuvable` : "Sélectionnez votre lecteur Spotify dans l’éditeur";
    return b`
      <div class="mini-card placeholder">
        <div class="mini-main-row">
          <div class="mini-cover">${icons.spotify}</div>
          <div class="mini-info">
            <div class="mini-title">Better Spotify Card</div>
            <div class="mini-artist">${subtitle}</div>
            <div class="mini-device-badge">
              ${icons.speaker}
              <span>Spotify Connect</span>
            </div>
          </div>
          <div class="mini-controls">
            <button class="btn-icon" disabled title="Précédent">${icons.skipPrevious}</button>
            <button class="btn-icon btn-play-mini" disabled title="Lecture">${icons.play}</button>
            <button class="btn-icon" disabled title="Suivant">${icons.skipNext}</button>
          </div>
        </div>
        <div class="mini-progress-bar">
          <div class="mini-progress-fill" style="width: 35%;"></div>
        </div>
      </div>
    `;
  }
  /**
   * Mini Player (Dashboard Card)
   */
  renderMiniCard(entity) {
    const isPlaying = entity.state === "playing";
    const title = entity.attributes.media_title || "Aucune lecture";
    const artist = entity.attributes.media_artist || entity.attributes.sp_user_display_name || "Spotify";
    const picture = entity.attributes.entity_picture;
    const deviceName = entity.attributes.source || entity.attributes.sp_device_name;
    const duration = entity.attributes.media_duration || 0;
    const progressPercent = duration > 0 ? Math.min(100, this.currentPosition / duration * 100) : 0;
    return b`
      <div class="mini-card" @click=${() => this.openPopup()}>
        <div class="mini-main-row">
          ${picture ? b`<img class="mini-cover" src=${picture} alt="Album cover" />` : b`<div class="mini-cover">${icons.musicNote}</div>`}

          <div class="mini-info">
            <div class="mini-title">${title}</div>
            <div class="mini-artist">${artist}</div>
            ${deviceName ? b`
                  <div class="mini-device-badge">
                    ${icons.speaker}
                    <span>${deviceName}</span>
                  </div>
                ` : ""}
          </div>

          <div class="mini-controls">
            <button class="btn-icon" title="Précédent" @click=${(e2) => this.handlePrevious(e2)}>
              ${icons.skipPrevious}
            </button>
            <button
              class="btn-icon btn-play-mini"
              title=${isPlaying ? "Pause" : "Lecture"}
              @click=${(e2) => this.handlePlayPause(e2)}
            >
              ${isPlaying ? icons.pause : icons.play}
            </button>
            <button class="btn-icon" title="Suivant" @click=${(e2) => this.handleNext(e2)}>
              ${icons.skipNext}
            </button>
          </div>
        </div>

        <div class="mini-progress-bar">
          <div class="mini-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
      </div>
    `;
  }
  /**
   * Bubble-Card Style Popup
   */
  renderBubblePopup(entity) {
    const deviceName = entity.attributes.source || entity.attributes.sp_device_name || "Spotify Connect";
    return b`
      <div class="bubble-backdrop" @click=${() => this.closePopup()}>
        <div class="bubble-sheet" @click=${(e2) => e2.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-header-left">
              <span class="spotify-brand-icon">${icons.spotify}</span>
              <span class="sheet-header-title">Spotify</span>
              <button
                class="sheet-connect-pill"
                title="Changer d'appareil"
                @click=${() => this.setTab("devices")}
              >
                ${icons.speaker}
                <span>${deviceName}</span>
              </button>
            </div>
            <button class="btn-close" title="Fermer" @click=${() => this.closePopup()}>
              ${icons.close}
            </button>
          </div>

          <!-- Menu Tabs (placed at top for natural navigation) -->
          <div class="tab-bar">
            <button
              class="tab-btn ${this.activeTab === "liked" ? "active" : ""}"
              @click=${() => this.setTab("liked")}
            >
              ${icons.heart}
              <span>Titres likés</span>
            </button>
            <button
              class="tab-btn ${this.activeTab === "playlists" ? "active" : ""}"
              @click=${() => this.setTab("playlists")}
            >
              ${icons.playlist}
              <span>Playlists</span>
            </button>
            <button
              class="tab-btn ${this.activeTab === "search" ? "active" : ""}"
              @click=${() => this.setTab("search")}
            >
              ${icons.search}
              <span>Recherche</span>
            </button>
            <button
              class="tab-btn ${this.activeTab === "devices" ? "active" : ""}"
              @click=${() => this.setTab("devices")}
            >
              ${icons.connectDevices}
              <span>Appareils</span>
            </button>
          </div>

          <!-- Tab Content Body (middle scrollable area) -->
          <div class="tab-content" @scroll=${(e2) => this.handleContentScroll(e2)}>
            ${this.renderActiveTabContent(entity)}
          </div>

          <!-- Now Playing Player (docked at the bottom) -->
          ${this.renderNowPlayingSection(entity)}
        </div>
      </div>
    `;
  }
  /**
   * Now Playing widget inside Popup (Spotify Desktop Style at bottom)
   */
  renderNowPlayingSection(entity) {
    const isPlaying = entity.state === "playing";
    const title = entity.attributes.media_title || "Aucun titre en cours";
    const artist = entity.attributes.media_artist || "Sélectionnez un morceau ci-dessus";
    const picture = entity.attributes.entity_picture;
    const duration = entity.attributes.media_duration || 0;
    const progressPercent = duration > 0 ? Math.min(100, Math.max(0, this.currentPosition / duration * 100)) : 0;
    const volumeLevel = this.localVolume !== null ? this.localVolume : Math.round((entity.attributes.volume_level ?? 0.5) * 100);
    const volumeIcon = volumeLevel === 0 ? icons.volumeLow : volumeLevel < 50 ? icons.volumeLow : icons.volumeHigh;
    return b`
      <div class="now-playing-section">
        <!-- Optional: Fine Volume Slider Popover -->
        ${this.volumeMenuOpen ? b`
            <div
              class="volume-popover"
              @pointerdown=${() => this.resetVolumeInactivityTimer()}
              @touchstart=${() => this.resetVolumeInactivityTimer()}
            >
              <button
                class="btn-vol-step"
                title="Diminuer le volume (-1%)"
                @click=${(e2) => this.handleVolumeStep(-1, e2)}
              >
                <span>−</span>
              </button>

              <div class="volume-slider-wrapper">
                <input
                  type="range"
                  class="volume-slider"
                  min="0"
                  max="100"
                  step="1"
                  .value=${volumeLevel}
                  style="--volume-percent: ${volumeLevel}%;"
                  @input=${(e2) => this.handleVolumeInput(e2)}
                  @change=${(e2) => this.handleVolumeChange(e2)}
                />
              </div>

              <button
                class="btn-vol-step"
                title="Augmenter le volume (+1%)"
                @click=${(e2) => this.handleVolumeStep(1, e2)}
              >
                <span>+</span>
              </button>

              <span class="volume-percent-label">${volumeLevel}%</span>

              <button
                class="btn-vol-close"
                title="Fermer le menu volume"
                @click=${(e2) => {
      e2.stopPropagation();
      this.closeVolumeMenu();
    }}
              >
                ${icons.close}
              </button>
            </div>
          ` : ""}

        <!-- Line 1: Seek / timeline bar on top -->
        <div class="desktop-seek-row">
          <span class="desktop-seek-time">${formatSeconds(this.currentPosition)}</span>
          <input
            type="range"
            class="seek-slider"
            min="0"
            max=${duration || 100}
            step="1"
            .value=${this.currentPosition}
            style="--seek-percent: ${progressPercent}%;"
            @input=${(e2) => {
      this.currentPosition = Number(e2.target.value);
    }}
            @change=${(e2) => this.handleSeek(e2)}
          />
          <span class="desktop-seek-time right">${formatSeconds(duration)}</span>
        </div>

        <!-- Line 2: 3-column Spotify Desktop row -->
        <div class="desktop-player-row">
          <!-- Left: Cover, Title, Artist -->
          <div class="desktop-col-left">
            ${picture ? b`<img class="desktop-cover" src=${picture} alt="Cover" />` : b`<div class="desktop-cover list-item-thumb">${icons.musicNote}</div>`}
            <div class="desktop-meta">
              <div class="desktop-title" title=${title}>${title}</div>
              <div class="desktop-artist" title=${artist}>${artist}</div>
            </div>
          </div>

          <!-- Center: PREV PLAY NEXT -->
          <div class="desktop-col-center">
            <button class="btn-icon" title="Précédent" @click=${(e2) => this.handlePrevious(e2)}>
              ${icons.skipPrevious}
            </button>
            <button
              class="btn-play-large"
              title=${isPlaying ? "Pause" : "Lecture"}
              @click=${(e2) => this.handlePlayPause(e2)}
            >
              ${isPlaying ? icons.pause : icons.play}
            </button>
            <button class="btn-icon" title="Suivant" @click=${(e2) => this.handleNext(e2)}>
              ${icons.skipNext}
            </button>
          </div>

          <!-- Right: MODE LECTURE (Shuffle) & Single Volume Button -->
          <div class="desktop-col-right">
            <button
              class="btn-shuffle-toggle ${entity.attributes.shuffle ? "active" : ""}"
              title=${entity.attributes.shuffle ? "Mode aléatoire : activé" : "Mode normal (cliquer pour activer l'aléatoire)"}
              @click=${(e2) => this.handleToggleShuffle(e2)}
            >
              ${icons.shuffle}
            </button>

            <button
              class="btn-vol-trigger ${this.volumeMenuOpen ? "active" : ""}"
              title="Régler le volume (${volumeLevel}%)"
              @click=${(e2) => this.handleToggleVolumeMenu(e2)}
            >
              ${volumeIcon}
              <span class="vol-label">${volumeLevel}%</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Tab Content Router
   */
  renderActiveTabContent(entity) {
    switch (this.activeTab) {
      case "liked":
        return this.renderLikedTab(entity);
      case "playlists":
        return this.renderPlaylistsTab(entity);
      case "search":
        return this.renderSearchTab(entity);
      case "devices":
        return this.renderDevicesTab(entity);
    }
  }
  /**
   * Tab 1: Liked Songs (Titres likés)
   */
  renderLikedTab(entity) {
    if (this.loadingLiked) {
      return b`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Chargement des titres likés...</div>
        </div>
      `;
    }
    if (this.likedTracks.length === 0) {
      return b`
        <div class="state-message">
          ${icons.heart}
          <div>Aucun titre liké trouvé ou synchronisé.</div>
          <button class="sheet-connect-pill" @click=${() => this.fetchLikedTracks()}>Actualiser</button>
        </div>
      `;
    }
    const currentTrackTitle = entity.attributes.media_title;
    return b`
      <div class="tab-action-bar">
        <div class="tab-action-title">
          ${this.likedTracks.length}${this.likedTotal > 0 ? ` / ${this.likedTotal}` : ""} titres
        </div>
        <div class="tab-action-buttons">
          <button
            class="btn-pill-play"
            title="Tout écouter"
            @click=${() => this.handlePlayAllLiked(false)}
          >
            ${icons.play}
            <span>Tout écouter</span>
          </button>
        </div>
      </div>

      <div class="items-list">
        ${this.likedTracks.map((track, index) => {
      var _a2, _b, _c;
      const isCurrent = currentTrackTitle && track.name === currentTrackTitle;
      const cover = (_c = (_b = (_a2 = track.album) == null ? void 0 : _a2.images) == null ? void 0 : _b[0]) == null ? void 0 : _c.url;
      const artistNames = track.artists.map((a2) => a2.name).join(", ");
      return b`
            <div
              class="list-item"
              @click=${() => this.handlePlayLikedTrack(index)}
              title="Lancer la lecture à partir de ce titre"
            >
              ${cover ? b`<img class="list-item-thumb" src=${cover} alt="Cover" />` : b`<div class="list-item-thumb">${icons.musicNote}</div>`}

              <div class="list-item-text">
                <div class="list-item-title ${isCurrent ? "active" : ""}">
                  ${track.name}
                </div>
                <div class="list-item-subtitle">${artistNames}</div>
              </div>

              <div class="list-item-duration">${formatDuration(track.duration_ms)}</div>
            </div>
          `;
    })}
        ${this.loadingMoreLiked ? b`<div class="loading-more-spinner"><div class="spinner"></div></div>` : ""}
      </div>
    `;
  }
  /**
   * Tab 2: Playlists
   */
  renderPlaylistsTab(entity) {
    var _a2, _b;
    if (this.selectedPlaylist) {
      const pl = this.selectedPlaylist;
      const cover = (_b = (_a2 = pl.images) == null ? void 0 : _a2[0]) == null ? void 0 : _b.url;
      const currentTrackTitle = entity.attributes.media_title;
      return b`
        <button class="btn-back" @click=${() => this.handleBackToPlaylists()}>
          ${icons.arrowBack}
          <span>Toutes les playlists</span>
        </button>

        <div class="playlist-header">
          ${cover ? b`<img class="playlist-header-cover" src=${cover} alt="Cover" />` : b`<div class="playlist-header-cover list-item-thumb">${icons.playlist}</div>`}
          <div class="playlist-header-meta">
            <div class="playlist-header-title">${pl.name}</div>
            <div class="playlist-header-sub">
              ${pl.tracks_total ? `${pl.tracks_total} titres` : ""}
              ${pl.owner_name ? `• Par ${pl.owner_name}` : ""}
            </div>
          </div>
        </div>

        <div class="tab-action-bar">
          <div class="tab-action-title">
            ${this.playlistTracks.length}${this.playlistTotal > 0 ? ` / ${this.playlistTotal}` : ""} titres
          </div>
          <div class="tab-action-buttons">
            <button
              class="btn-pill-play"
              title="Tout écouter"
              @click=${() => this.handlePlayAllPlaylist(pl, false)}
            >
              ${icons.play}
              <span>Tout écouter</span>
            </button>
          </div>
        </div>

        ${this.loadingPlaylistTracks ? b`
              <div class="state-message">
                <div class="spinner"></div>
                <div>Chargement des morceaux...</div>
              </div>
            ` : this.playlistTracks.length === 0 ? b`
                <div class="state-message">
                  <div>Aucun morceau visible dans la liste.</div>
                  <div style="font-size: 12px; color: var(--sp-text-subdued); margin-top: 6px;">
                    Vous pouvez tout de même écouter la playlist avec le bouton « Tout écouter ».
                  </div>
                </div>
              ` : b`
              <div class="items-list">
                ${this.playlistTracks.map((track, index) => {
        var _a3, _b2, _c;
        const isCurrent = currentTrackTitle && track.name === currentTrackTitle;
        const trackCover = (_c = (_b2 = (_a3 = track.album) == null ? void 0 : _a3.images) == null ? void 0 : _b2[0]) == null ? void 0 : _c.url;
        const artistNames = track.artists.map((a2) => a2.name).join(", ");
        return b`
                    <div
                      class="list-item"
                      @click=${() => this.handlePlayPlaylistTrack(pl, index)}
                      title="Lancer à partir de ce morceau"
                    >
                      ${trackCover ? b`<img class="list-item-thumb" src=${trackCover} alt="Cover" />` : b`<div class="list-item-thumb">${icons.musicNote}</div>`}

                      <div class="list-item-text">
                        <div class="list-item-title ${isCurrent ? "active" : ""}">
                          ${track.name}
                        </div>
                        <div class="list-item-subtitle">${artistNames}</div>
                      </div>

                      <div class="list-item-duration">${formatDuration(track.duration_ms)}</div>
                    </div>
                  `;
      })}
                ${this.loadingMorePlaylistTracks ? b`<div class="loading-more-spinner"><div class="spinner"></div></div>` : ""}
              </div>
            `}
      `;
    }
    if (this.loadingPlaylists) {
      return b`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Chargement des playlists...</div>
        </div>
      `;
    }
    if (this.playlists.length === 0) {
      return b`
        <div class="state-message">
          ${icons.playlist}
          <div>Aucune playlist trouvée.</div>
          <button class="sheet-connect-pill" @click=${() => this.fetchPlaylists()}>Actualiser</button>
        </div>
      `;
    }
    return b`
      <div class="items-list">
        ${this.playlists.map((pl) => {
      var _a3, _b2;
      const cover = (_b2 = (_a3 = pl.images) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.url;
      const subtitle = pl.tracks_total ? `${pl.tracks_total} titres` : pl.owner_name || "Playlist";
      return b`
            <div
              class="list-item"
              @click=${() => this.handleSelectPlaylist(pl)}
              title="Afficher les titres de la playlist ${pl.name}"
            >
              ${cover ? b`<img class="list-item-thumb" src=${cover} alt="Cover" />` : b`<div class="list-item-thumb">${icons.playlist}</div>`}

              <div class="list-item-text">
                <div class="list-item-title">${pl.name}</div>
                <div class="list-item-subtitle">${subtitle}</div>
              </div>

              <div class="list-item-arrow">
                ${icons.chevronRight}
              </div>
            </div>
          `;
    })}
      </div>
    `;
  }
  /**
   * Tab 3: Search
   */
  renderSearchTab(entity) {
    const currentTrackTitle = entity.attributes.media_title;
    return b`
      <div class="search-box-wrapper">
        <span class="search-icon-left">${icons.search}</span>
        <input
          type="text"
          class="search-input"
          placeholder="Rechercher un titre ou un artiste..."
          .value=${this.searchQuery}
          @input=${(e2) => this.handleSearchInput(e2)}
        />
        ${this.searchQuery ? b`
              <button class="search-btn-clear" title="Effacer" @click=${() => this.clearSearch()}>
                ${icons.clear}
              </button>
            ` : ""}
      </div>

      ${this.loadingSearch ? b`
            <div class="state-message">
              <div class="spinner"></div>
              <div>Recherche dans Spotify...</div>
            </div>
          ` : ""}
      ${!this.loadingSearch && this.searchQuery && this.searchResults.length === 0 ? b`
            <div class="state-message">
              ${icons.search}
              <div>Aucun morceau trouvé pour "${this.searchQuery}".</div>
            </div>
          ` : ""}
      ${!this.loadingSearch && !this.searchQuery && this.searchResults.length === 0 ? b`
            <div class="state-message">
              ${icons.musicNote}
              <div>Tapez un nom de morceau, d'album ou d'artiste.</div>
            </div>
          ` : ""}

      <div class="items-list">
        ${this.searchResults.map((track, index) => {
      var _a2, _b, _c;
      const isCurrent = currentTrackTitle && track.name === currentTrackTitle;
      const cover = (_c = (_b = (_a2 = track.album) == null ? void 0 : _a2.images) == null ? void 0 : _b[0]) == null ? void 0 : _c.url;
      const artistNames = track.artists.map((a2) => a2.name).join(", ");
      return b`
            <div
              class="list-item"
              @click=${() => this.handlePlaySearchTrack(index)}
              title="Lire ce titre"
            >
              ${cover ? b`<img class="list-item-thumb" src=${cover} alt="Cover" />` : b`<div class="list-item-thumb">${icons.musicNote}</div>`}

              <div class="list-item-text">
                <div class="list-item-title ${isCurrent ? "active" : ""}">
                  ${track.name}
                </div>
                <div class="list-item-subtitle">${artistNames}</div>
              </div>

              <div class="list-item-duration">${formatDuration(track.duration_ms)}</div>
            </div>
          `;
    })}
      </div>
    `;
  }
  /**
   * Tab 4: Connect Devices
   */
  renderDevicesTab(entity) {
    if (this.loadingDevices) {
      return b`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Recherche des appareils Spotify Connect...</div>
        </div>
      `;
    }
    if (this.devices.length === 0) {
      return b`
        <div class="state-message">
          ${icons.speaker}
          <div>Aucun appareil Spotify Connect détecté.</div>
          <button class="sheet-connect-pill" @click=${() => this.fetchDevices()}>Actualiser</button>
        </div>
      `;
    }
    const currentSource = entity.attributes.source || entity.attributes.sp_device_name;
    return b`
      <div class="items-list">
        ${this.devices.map((device) => {
      const isActive = device.is_active || device.name === currentSource;
      const defaultDev = this.getDefaultDevice();
      const isDefault = defaultDev === device.id || defaultDev === device.name;
      return b`
            <div
              class="list-item"
              @click=${() => this.handleSelectDevice(device)}
              title="Diffuser sur ${device.name}"
            >
              <div class="list-item-thumb list-item-thumb-round">
                ${icons.speaker}
              </div>

              <div class="list-item-text">
                <div class="list-item-title ${isActive ? "active" : ""}">
                  ${device.name}
                  ${isDefault ? b`<span class="default-device-badge">⭐ Par défaut</span>` : ""}
                </div>
                <div class="list-item-subtitle">${device.type || "Haut-parleur"}</div>
              </div>

              <div class="list-item-right-actions">
                ${isActive ? b`<div class="list-item-badge">Actif</div>` : ""}
                <button
                  class="btn-star-default ${isDefault ? "is-default" : ""}"
                  title=${isDefault ? "Lecteur par défaut (cliquer pour retirer)" : "Définir comme lecteur par défaut"}
                  @click=${(e2) => {
        e2.stopPropagation();
        this.setDefaultDevice(device.id || device.name);
      }}
                >
                  ${isDefault ? "⭐" : "☆"}
                </button>
              </div>
            </div>
          `;
    })}
      </div>
    `;
  }
};
_BetterSpotifyCard.styles = cardStyles;
let BetterSpotifyCard = _BetterSpotifyCard;
__decorateClass([
  n2({ attribute: false })
], BetterSpotifyCard.prototype, "hass");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "config");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "popupOpen");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "activeTab");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "playlists");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "likedTracks");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "likedTotal");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "likedOffset");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingMoreLiked");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "searchResults");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "devices");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "selectedPlaylist");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "playlistTracks");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "playlistTotal");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "playlistOffset");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingPlaylistTracks");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingMorePlaylistTracks");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingPlaylists");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingLiked");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingSearch");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "loadingDevices");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "searchQuery");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "currentPosition");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "volumeMenuOpen");
__decorateClass([
  r()
], BetterSpotifyCard.prototype, "localVolume");
if (!customElements.get("better-spotify-card")) {
  customElements.define("better-spotify-card", BetterSpotifyCard);
}
window.customCards = window.customCards || [];
const cardAlreadyRegistered = window.customCards.some(
  (c2) => c2.type === "better-spotify-card"
);
if (!cardAlreadyRegistered) {
  window.customCards.push({
    type: "better-spotify-card",
    name: "Better Spotify Card",
    description: "Lecteur Spotify élégant style Android avec popup type Bubble-Card",
    preview: true,
    documentationURL: "https://github.com/lmindwarel/better-spotify-card"
  });
}
console.info(
  "%c BETTER-SPOTIFY-CARD %c v1.8.2 ",
  "color: white; background: #1DB954; font-weight: 700; border-radius: 3px 0 0 3px;",
  "color: white; background: #282828; font-weight: 700; border-radius: 0 3px 3px 0;"
);
export {
  BetterSpotifyCard
};
//# sourceMappingURL=better-spotify-card.js.map
