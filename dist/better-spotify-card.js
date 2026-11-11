var t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=/* @__PURE__ */new WeakMap,a=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}},r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,v=u.trustedTypes,m=v?v.emptyScript:"",b=u.reactiveElementPolyfillSupport,g=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!n(t,e),x={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=/* @__PURE__ */new WeakMap;var k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);a?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=/* @__PURE__ */new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=/* @__PURE__ */new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=/* @__PURE__ */new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),a=t.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s;const r=a.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){if(void 0!==t){const r=this.constructor;if(!1===s&&(a=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??y)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},r){i&&!(this._$Ej??=/* @__PURE__ */new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==a||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=/* @__PURE__ */new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[g("elementProperties")]=/* @__PURE__ */new Map,k[g("finalized")]=/* @__PURE__ */new Map,b?.({ReactiveElement:k}),(u.reactiveElementVersions??=[]).push("2.1.2");var $=globalThis,_=t=>t,w=$.trustedTypes,T=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+S,C=`<${A}>`,E=document,M=()=>E.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,D="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,H=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,V=/"/g,U=/^(?:script|style|textarea|title)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=I(1),W=I(2),q=(I(3),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),Q=/* @__PURE__ */new WeakMap,F=E.createTreeWalker(E,129);function K(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}var G=(t,e)=>{const i=t.length-1,s=[];let a,r=2===e?"<svg>":3===e?"<math>":"",o=O;for(let n=0;n<i;n++){const e=t[n];let i,l,c=-1,d=0;for(;d<e.length&&(o.lastIndex=d,l=o.exec(e),null!==l);)d=o.lastIndex,o===O?"!--"===l[1]?o=R:void 0!==l[1]?o=N:void 0!==l[2]?(U.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=a??O,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,i=l[1],o=void 0===l[3]?H:'"'===l[3]?V:B):o===V||o===B?o=H:o===R||o===N?o=O:(o=H,a=void 0);const h=o===H&&t[n+1].startsWith("/>")?" ":"";r+=o===O?e+C:c>=0?(s.push(i),e.slice(0,c)+P+e.slice(c)+S+h):e+S+(-2===c?n:h)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]},J=class t{constructor({strings:e,_$litType$:i},s){let a;this.parts=[];let r=0,o=0;const n=e.length-1,l=this.parts,[c,d]=G(e,i);if(this.el=t.createElement(c,s),F.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=F.nextNode())&&l.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(P)){const e=d[o++],i=a.getAttribute(t).split(S),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?at:et}),a.removeAttribute(t)}else t.startsWith(S)&&(l.push({type:6,index:r}),a.removeAttribute(t));if(U.test(a.tagName)){const t=a.textContent.split(S),e=t.length-1;if(e>0){a.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],M()),F.nextNode(),l.push({type:2,index:++r});a.append(t[e],M())}}}else if(8===a.nodeType)if(a.data===A)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=a.data.indexOf(S,t+1));)l.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}};function Z(t,e,i=t,s){if(e===q)return e;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const r=z(e)?void 0:e._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(t),a._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(e=Z(t,a._$AS(t,e.values),a,s)),e}var X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??E).importNode(e,!0);F.currentNode=s;let a=F.nextNode(),r=0,o=0,n=i[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new tt(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new rt(a,this,t)),this._$AV.push(e),n=i[++o]}r!==n?.index&&(a=F.nextNode(),r++)}return F.currentNode=E,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new J(t)),e}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,a=0;for(const r of e)a===i.length?i.push(s=new t(this.O(M()),this.O(M()),this,this.options)):s=i[a],s._$AI(r),a++;a<i.length&&(this._$AR(s&&s._$AB.nextSibling,a),i.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=_(t).nextSibling;_(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(/* @__PURE__ */new String),this.strings=i):this._$AH=Y}_$AI(t,e=this,i,s){const a=this.strings;let r=!1;if(void 0===a)t=Z(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const s=t;let o,n;for(t=a[0],o=0;o<a.length-1;o++)n=Z(this,s[i+o],e,o),n===q&&(n=this._$AH[o]),r||=!z(n)||n!==this._$AH[o],n===Y?t=Y:t!==Y&&(t+=(n??"")+a[o+1]),this._$AH[o]=n}r&&!s&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}},st=class extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}},at=class extends et{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??Y)===q)return;const i=this._$AH,s=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}},ot=$.litHtmlPolyfillSupport;ot?.(J,tt),($.litHtmlVersions??=[]).push("3.3.3");var nt=globalThis,lt=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new tt(e.insertBefore(M(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};lt._$litElement$=!0,lt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:lt});var ct=nt.litElementPolyfillSupport;ct?.({LitElement:lt}),(nt.litElementVersions??=[]).push("4.2.2");var dt={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y},ht=(t=dt,e,i)=>{const{kind:s,metadata:a}=i;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=/* @__PURE__ */new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,a,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];e.call(this,i),this.requestUpdate(s,a,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}var vt=class{static async refreshPlaybackState(t,e){try{await t.callService("spotifyplus","trigger_scan_interval",{entity_id:e})}catch(T){try{await t.callService("homeassistant","update_entity",{entity_id:e})}catch(i){}}}static async callSpotifyPlusWS(t,e,i,s={}){try{return(await t.callWS({type:"call_service",domain:"spotifyplus",service:e,service_data:{entity_id:i,...s},return_response:!0}))?.response}catch(a){throw console.warn(`[BetterSpotifyCard] spotifyplus.${e} call failed:`,a),a}}static async getConnectDevices(t,e){try{const i=await this.callSpotifyPlusWS(t,"get_spotify_connect_devices",e,{refresh:!0}),s=i?.result?.devices||i?.result||[];if(Array.isArray(s))return s.map(t=>({id:t.id||t.device_id||t.name,name:t.name||"Appareil Spotify",type:t.type||"Speaker",is_active:Boolean(t.is_active),is_private_session:t.is_private_session,is_restricted:t.is_restricted,volume_percent:t.volume_percent,supports_volume:t.supports_volume}))}catch(T){console.warn("[BetterSpotifyCard] Falling back to entity source_list for connect devices")}const i=t.states[e];if(i?.attributes?.source_list){const t=i.attributes.source;return i.attributes.source_list.map(e=>({id:e,name:e,type:"Speaker",is_active:e===t}))}return[]}static async transferPlayback(t,e,i){try{return void(await t.callService("spotifyplus","player_transfer_playback",{entity_id:e,device_id:i,play:!0}))}catch(T){await t.callService("media_player","select_source",{entity_id:e,source:i})}}static async getPlaylists(t,e,i=200){try{return((await this.callSpotifyPlusWS(t,"get_playlist_favorites",e,{limit:50,limit_total:i,sort_result:!0}))?.result?.items||[]).map(t=>({id:t.id||t.uri,name:t.name||"Sans titre",uri:t.uri,description:t.description,images:t.images||[],tracks_total:t.tracks?.total,owner_name:t.owner?.display_name}))}catch(s){return console.error("[BetterSpotifyCard] Erreur getPlaylists:",s),[]}}static async getPlaylistTracks(t,e,i,s=50,a=0){try{const r=i.replace("spotify:playlist:","").trim(),o=await this.callSpotifyPlusWS(t,"get_playlist_items",e,{playlist_id:r,limit:Math.min(s,50),offset:a}),n=o?.result?.items||[],l=o?.result?.total??n.length;return{items:n.map(t=>{const e=t.track||t.item||t;return e&&e.name?{id:e.id||e.uri,name:e.name||"Titre inconnu",uri:e.uri,duration_ms:e.duration_ms||0,artists:(e.artists||[]).map(t=>({id:t.id||"",name:"string"==typeof t?t:t.name||"Artiste inconnu",uri:t.uri||""})),album:e.album?{id:e.album.id||"",name:e.album.name||"",uri:e.album.uri||"",images:e.album.images||[]}:void 0,is_playable:e.is_playable??!0}:null}).filter(t=>null!==t),total:l,offset:a,limit:s}}catch(r){return console.error("[BetterSpotifyCard] Erreur getPlaylistTracks:",r),{items:[],total:0,offset:a,limit:s}}}static async getLikedTracks(t,e,i=50,s=0){try{const a=await this.callSpotifyPlusWS(t,"get_track_favorites",e,{limit:Math.min(i,50),offset:s,sort_result:!1}),r=a?.result?.items||[],o=a?.result?.total??r.length;return{items:r.map(t=>{const e=t.track||t.item||t;return{id:e.id||e.uri,name:e.name||"Titre inconnu",uri:e.uri,duration_ms:e.duration_ms||0,artists:(e.artists||[]).map(t=>({id:t.id||"",name:"string"==typeof t?t:t.name||"Artiste inconnu",uri:t.uri||""})),album:e.album?{id:e.album.id||"",name:e.album.name||"",uri:e.album.uri||"",images:e.album.images||[]}:void 0,is_playable:e.is_playable??!0}}),total:o,offset:s,limit:i}}catch(a){return console.error("[BetterSpotifyCard] Erreur getLikedTracks:",a),{items:[],total:0,offset:s,limit:i}}}static async searchTracks(t,e,i,s=20){if(!i||0===i.trim().length)return[];try{return((await this.callSpotifyPlusWS(t,"search_tracks",e,{criteria:i.trim(),limit:Math.min(s,10),limit_total:s}))?.result?.items||[]).map(t=>({id:t.id||t.uri,name:t.name||"Titre inconnu",uri:t.uri,duration_ms:t.duration_ms||0,artists:(t.artists||[]).map(t=>({id:t.id,name:t.name,uri:t.uri})),album:t.album?{id:t.album.id,name:t.album.name,uri:t.album.uri,images:t.album.images||[]}:void 0,is_playable:t.is_playable??!0}))}catch(a){return console.error("[BetterSpotifyCard] Erreur searchTracks:",a),[]}}static async playContext(t,e,i,s=0,a,r){try{const o={entity_id:e,context_uri:i,offset_position:s};return r&&(o.offset_uri=r),a&&(o.device_id=a),void(await t.callService("spotifyplus","player_media_play_context",o))}catch(T){await t.callService("media_player","play_media",{entity_id:e,media_content_type:"playlist",media_content_id:i})}}static async playTracks(t,e,i,s){if(i&&0!==i.length)try{const a={entity_id:e,uris:i.slice(0,50).join(","),position_ms:0};return s&&(a.device_id=s),void(await t.callService("spotifyplus","player_media_play_tracks",a))}catch(T){await t.callService("media_player","play_media",{entity_id:e,media_content_type:"music",media_content_id:i[0]})}}static async playAllLiked(t,e,i){try{const s={entity_id:e,limit_total:500};i&&(s.device_id=i),await t.callService("spotifyplus","player_media_play_track_favorites",s)}catch(s){console.warn("[BetterSpotifyCard] player_media_play_track_favorites failed:",s)}}static async playLikedTracks(t,e,i,s=0,a){if(i&&i.length>0){const r=i.slice(s,s+50).map(t=>t.uri);await this.playTracks(t,e,r,a)}else await this.playAllLiked(t,e,a)}static async togglePlayPause(t,e){await t.callService("media_player","media_play_pause",{entity_id:e})}static async skipNext(t,e){try{await t.callService("spotifyplus","player_media_skip_next",{entity_id:e})}catch(T){await t.callService("media_player","media_next_track",{entity_id:e})}}static async skipPrevious(t,e){try{await t.callService("spotifyplus","player_media_skip_previous",{entity_id:e})}catch(T){await t.callService("media_player","media_previous_track",{entity_id:e})}}static async setVolume(t,e,i){const s=Math.max(0,Math.min(100,i))/100;await t.callService("media_player","volume_set",{entity_id:e,volume_level:s})}static async seek(t,e,i){await t.callService("media_player","media_seek",{entity_id:e,seek_position:i})}static async setShuffle(t,e,i){try{await t.callService("spotifyplus","player_set_shuffle_mode",{entity_id:e,state:i})}catch(T){await t.callService("media_player","shuffle_set",{entity_id:e,shuffle:i})}}static async toggleShuffle(t,e){const i=t.states[e],s=Boolean(i?.attributes?.shuffle);await this.setShuffle(t,e,!s)}},mt=r`
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
`,bt={spotify:W`
    <svg viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.503 9.722 1.113.294.18.386.563.207.857zm1.225-2.723c-.226.367-.708.482-1.075.257-2.69-1.653-6.79-2.132-9.97-1.166-.413.125-.85-.11-.974-.522-.125-.413.11-.85.522-.975 3.632-1.103 8.147-.568 11.24 1.332.367.225.482.707.257 1.074zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.494.15-1.016-.13-1.166-.624-.15-.494.13-1.016.624-1.166 3.532-1.072 9.404-.866 13.115 1.338.445.264.59.838.327 1.282-.264.444-.838.59-1.281.326z"/>
    </svg>
  `,play:W`
    <svg viewBox="0 0 24 24">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z"/>
    </svg>
  `,pause:W`
    <svg viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  `,skipNext:W`
    <svg viewBox="0 0 24 24">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
    </svg>
  `,skipPrevious:W`
    <svg viewBox="0 0 24 24">
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
    </svg>
  `,speaker:W`
    <svg viewBox="0 0 24 24">
      <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  `,connectDevices:W`
    <svg viewBox="0 0 24 24">
      <path d="M18 10.01L18 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3.99zM4 14V4h12v10H4zm18 4H10v-2h12v2z"/>
    </svg>
  `,search:W`
    <svg viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  `,heart:W`
    <svg viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `,playlist:W`
    <svg viewBox="0 0 24 24">
      <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
    </svg>
  `,volumeLow:W`
    <svg viewBox="0 0 24 24">
      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
    </svg>
  `,volumeHigh:W`
    <svg viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
  `,volumeMinus:W`
    <svg viewBox="0 0 24 24">
      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5zm10 2h6v2h-6v-2z"/>
    </svg>
  `,volumePlus:W`
    <svg viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm11 2h2V9h2v2h2v2h-2v2h-2v-2h-2v-2zm-1.5-3.03V5.9c2.89.86 5 3.54 5 6.1h-2c0-1.77-1.02-3.29-2.5-4.03z"/>
    </svg>
  `,close:W`
    <svg viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  `,clear:W`
    <svg viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  `,musicNote:W`
    <svg viewBox="0 0 24 24">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  `,shuffle:W`
    <svg viewBox="0 0 24 24">
      <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
    </svg>
  `,arrowBack:W`
    <svg viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  `,chevronRight:W`
    <svg viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  `};function gt(t){if(!t||isNaN(t)||t<0)return"0:00";const e=Math.floor(t/1e3),i=e%60;return`${Math.floor(e/60)}:${i<10?"0":""}${i}`}function ft(t){if(!t||isNaN(t)||t<0)return"0:00";const e=Math.floor(t/60),i=Math.floor(t%60);return`${e}:${i<10?"0":""}${i}`}function yt(t,e,i,s){var a,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}var xt=[{name:"entity",required:!0,selector:{entity:{filter:{domain:"media_player"}}}},{name:"default_tab",selector:{select:{mode:"dropdown",options:[{value:"liked",label:"Titres likés"},{value:"playlists",label:"Playlists"},{value:"search",label:"Recherche"},{value:"devices",label:"Appareils"}]}}}],kt=class extends lt{constructor(...t){super(...t),this._computeLabel=t=>{switch(t.name){case"entity":return"Lecteur Spotify (Entité media_player)";case"default_tab":return"Onglet affiché par défaut";default:return t.name}},this._computeHelper=t=>{switch(t.name){case"entity":return"Sélectionnez le compte Spotify ou SpotifyPlus à contrôler";case"default_tab":return"Onglet affiché lors de l’ouverture de la popup";default:return""}}}setConfig(t){this._config={...t}}_valueChanged(t){if(!this._config)return;const e=t.detail.value,i={...this._config,...e};this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}render(){return this.hass&&this._config?customElements.get("ha-form")?j`
        <div class="card-config">
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${xt}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      `:j`
      <div class="card-config">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.entity||""}
          .includeDomains=${["media_player"]}
          label="Lecteur Spotify (Requis)"
          allow-custom-entity
          @value-changed=${t=>{this._valueChanged({detail:{value:{...this._config,entity:t.detail.value}}})}}
        ></ha-entity-picker>
      </div>
    `:j``}static{this.styles=r`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 8px 0;
    }
  `}};yt([pt({attribute:!1})],kt.prototype,"hass",void 0),yt([ut()],kt.prototype,"_config",void 0),kt=yt([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("better-spotify-card-editor")],kt);var $t=class extends lt{constructor(...t){super(...t),this.popupOpen=!1,this.activeTab="liked",this.playlists=[],this.likedTracks=[],this.likedTotal=0,this.likedOffset=0,this.loadingMoreLiked=!1,this.searchResults=[],this.devices=[],this.selectedPlaylist=null,this.playlistTracks=[],this.playlistTotal=0,this.playlistOffset=0,this.loadingPlaylistTracks=!1,this.loadingMorePlaylistTracks=!1,this.loadingPlaylists=!1,this.loadingLiked=!1,this.loadingSearch=!1,this.loadingDevices=!1,this.searchQuery="",this.currentPosition=0,this.volumeMenuOpen=!1,this.localVolume=null,this.initialRefreshDone=!1}static{this.styles=mt}setConfig(t){if(!t)throw new Error("Configuration invalide");this.config={default_tab:"liked",...t},this.config.default_tab&&(this.activeTab=this.config.default_tab)}getCardSize(){return 2}static async getConfigElement(){return await(async()=>{if(!customElements.get("ha-form")){try{const t=window.loadCardHelpers?await window.loadCardHelpers():null;if(t){const e=await t.createCardElement({type:"button"});e&&e.constructor.getConfigElement&&await e.constructor.getConfigElement()}}catch(t){}if(!customElements.get("ha-form"))for(const t of["hui-entities-card","hui-button-card","hui-markdown-card"]){const e=customElements.get(t);if(e&&e.getConfigElement)try{if(await e.getConfigElement(),customElements.get("ha-form"))break}catch(T){}}}})(),document.createElement("better-spotify-card-editor")}static getStubConfig(t,e,i){let s="";if(t?.states){const e=Object.keys(t.states),i=e.find(e=>{if(!e.startsWith("media_player."))return!1;const i=t.states[e]?.attributes?.platform||"";return e.includes("spotify")||"spotifyplus"===i||"spotify"===i});if(i)s=i;else{const t=e.find(t=>t.startsWith("media_player."));t&&(s=t)}}return{entity:s,default_tab:"liked"}}connectedCallback(){super.connectedCallback(),this.boundKeydownHandler=t=>{"Escape"===t.key&&(this.volumeMenuOpen?this.volumeMenuOpen=!1:this.popupOpen&&this.closePopup())},window.addEventListener("keydown",this.boundKeydownHandler),this.startPositionTicker(),this.startPlaybackRefresh()}disconnectedCallback(){super.disconnectedCallback(),this.boundKeydownHandler&&window.removeEventListener("keydown",this.boundKeydownHandler),this.volumeDebounceTimer&&(clearTimeout(this.volumeDebounceTimer),this.volumeDebounceTimer=void 0),this.stopPositionTicker(),this.stopPlaybackRefresh()}startPlaybackRefresh(){this.stopPlaybackRefresh(),this.hass&&this.config?.entity&&this.hass.states[this.config.entity]&&vt.refreshPlaybackState(this.hass,this.config.entity),this.refreshStateInterval=window.setInterval(()=>{this.hass&&this.config?.entity&&this.hass.states[this.config.entity]&&vt.refreshPlaybackState(this.hass,this.config.entity)},15e3)}stopPlaybackRefresh(){this.refreshStateInterval&&(clearInterval(this.refreshStateInterval),this.refreshStateInterval=void 0)}updated(t){super.updated(t),t.has("hass")&&this.hass&&this.config?.entity&&!this.initialRefreshDone&&(this.initialRefreshDone=!0,this.startPlaybackRefresh()),(t.has("popupOpen")||t.has("activeTab"))&&this.popupOpen&&this.loadCurrentTabData()}startPositionTicker(){this.stopPositionTicker(),this.positionTickerInterval=window.setInterval(()=>{this.updateTrackPosition()},1e3)}stopPositionTicker(){this.positionTickerInterval&&(clearInterval(this.positionTickerInterval),this.positionTickerInterval=void 0)}updateTrackPosition(){if(!this.hass||!this.config?.entity)return;const t=this.hass.states[this.config.entity];if(!t||"playing"!==t.state)return void(void 0!==t?.attributes?.media_position&&(this.currentPosition=t.attributes.media_position));const e=t.attributes.media_position??0,i=t.attributes.media_position_updated_at;if(i){const t=(Date.now()-new Date(i).getTime())/1e3;this.currentPosition=Math.max(0,e+t)}else this.currentPosition=e}openPopup(t){t&&(this.activeTab=t),this.popupOpen=!0,this.loadCurrentTabData(),this.fetchDevices(),this.hass&&this.config?.entity&&vt.refreshPlaybackState(this.hass,this.config.entity)}closePopup(){this.popupOpen=!1}setTab(t){this.activeTab!==t&&(this.selectedPlaylist=null),this.activeTab=t,this.loadCurrentTabData()}loadCurrentTabData(){if(this.hass&&this.config?.entity)switch(this.activeTab){case"liked":0===this.likedTracks.length&&this.fetchLikedTracks();break;case"playlists":0===this.playlists.length&&this.fetchPlaylists();break;case"devices":this.fetchDevices()}}getDefaultDevice(){return this.config.default_device||localStorage.getItem("better_spotify_default_device")||void 0}setDefaultDevice(t){this.getDefaultDevice()===t?localStorage.removeItem("better_spotify_default_device"):localStorage.setItem("better_spotify_default_device",t),this.requestUpdate()}getTargetDeviceId(){if(this.hass&&this.config?.entity&&!this.hass.states[this.config.entity]?.attributes?.source)return this.getDefaultDevice()||this.devices[0]?.id||this.devices[0]?.name}async fetchLikedTracks(){if(!this.loadingLiked){this.loadingLiked=!0;try{this.likedTracks=[],this.likedOffset=0,this.likedTotal=0;const t=await vt.getLikedTracks(this.hass,this.config.entity,50,0);this.likedTracks=t.items,this.likedTotal=t.total,this.likedOffset=t.items.length}catch(T){console.error(T)}finally{this.loadingLiked=!1}}}async loadMoreLikedTracks(){if(!(this.loadingMoreLiked||this.likedTracks.length>=this.likedTotal)){this.loadingMoreLiked=!0;try{const t=await vt.getLikedTracks(this.hass,this.config.entity,50,this.likedOffset);this.likedTracks=[...this.likedTracks,...t.items],this.likedOffset+=t.items.length,this.likedTotal=t.total}catch(T){console.error(T)}finally{this.loadingMoreLiked=!1}}}async fetchPlaylists(){if(!this.loadingPlaylists){this.loadingPlaylists=!0;try{this.playlists=await vt.getPlaylists(this.hass,this.config.entity,200)}catch(T){console.error(T)}finally{this.loadingPlaylists=!1}}}async fetchDevices(){if(!this.loadingDevices){this.loadingDevices=!0;try{this.devices=await vt.getConnectDevices(this.hass,this.config.entity)}catch(T){console.error(T)}finally{this.loadingDevices=!1}}}handleSearchInput(t){const e=t.target;if(this.searchQuery=e.value,this.searchDebounceTimer&&clearTimeout(this.searchDebounceTimer),!this.searchQuery.trim())return this.searchResults=[],void(this.loadingSearch=!1);this.loadingSearch=!0,this.searchDebounceTimer=window.setTimeout(async()=>{try{this.searchResults=await vt.searchTracks(this.hass,this.config.entity,this.searchQuery,25)}catch(t){console.error(t)}finally{this.loadingSearch=!1}},350)}clearSearch(){this.searchQuery="",this.searchResults=[],this.loadingSearch=!1}async handlePlayPause(t){t?.stopPropagation(),await vt.togglePlayPause(this.hass,this.config.entity)}async handleNext(t){t?.stopPropagation(),await vt.skipNext(this.hass,this.config.entity)}async handlePrevious(t){t?.stopPropagation(),await vt.skipPrevious(this.hass,this.config.entity)}async handleSeek(t){const e=t.target,i=parseFloat(e.value);this.currentPosition=i,await vt.seek(this.hass,this.config.entity,i)}handleToggleVolumeMenu(t){t?.stopPropagation(),this.volumeMenuOpen=!this.volumeMenuOpen}handleVolumeInput(t){t.stopPropagation();const e=Number(t.target.value);this.localVolume=e,this.volumeDebounceTimer&&clearTimeout(this.volumeDebounceTimer),this.volumeDebounceTimer=window.setTimeout(()=>{this.hass&&this.config?.entity&&vt.setVolume(this.hass,this.config.entity,e)},120)}async handleVolumeChange(t){t.stopPropagation();const e=Number(t.target.value);this.localVolume=e,this.volumeDebounceTimer&&(clearTimeout(this.volumeDebounceTimer),this.volumeDebounceTimer=void 0),this.hass&&this.config?.entity&&await vt.setVolume(this.hass,this.config.entity,e),setTimeout(()=>{this.localVolume=null},1200)}async handleVolumeStep(t,e){if(e?.stopPropagation(),!this.hass||!this.config?.entity)return;const i=this.hass.states[this.config.entity];if(!i)return;const s=null!==this.localVolume?this.localVolume:Math.round(100*(i.attributes.volume_level??.5)),a=Math.max(0,Math.min(100,s+t));this.localVolume=a,await vt.setVolume(this.hass,this.config.entity,a),setTimeout(()=>{this.localVolume=null},1200)}async handleSelectDevice(t){await vt.transferPlayback(this.hass,this.config.entity,t.id),await this.fetchDevices()}async handleSelectPlaylist(t){this.selectedPlaylist=t,this.playlistTracks=[],this.playlistOffset=0,this.playlistTotal=0,this.loadingPlaylistTracks=!0;try{const e=await vt.getPlaylistTracks(this.hass,this.config.entity,t.id||t.uri,50,0);this.playlistTracks=e.items,this.playlistTotal=e.total,this.playlistOffset=e.items.length}catch(e){console.error(e)}finally{this.loadingPlaylistTracks=!1}}async loadMorePlaylistTracks(){if(!(!this.selectedPlaylist||this.loadingMorePlaylistTracks||this.playlistTracks.length>=this.playlistTotal)){this.loadingMorePlaylistTracks=!0;try{const t=await vt.getPlaylistTracks(this.hass,this.config.entity,this.selectedPlaylist.id||this.selectedPlaylist.uri,50,this.playlistOffset);this.playlistTracks=[...this.playlistTracks,...t.items],this.playlistOffset+=t.items.length,this.playlistTotal=t.total}catch(t){console.error(t)}finally{this.loadingMorePlaylistTracks=!1}}}handleBackToPlaylists(){this.selectedPlaylist=null,this.playlistTracks=[],this.playlistOffset=0,this.playlistTotal=0}handleContentScroll(t){const e=t.target;e&&e.scrollHeight-e.scrollTop-e.clientHeight<300&&("liked"===this.activeTab?this.loadMoreLikedTracks():"playlists"===this.activeTab&&this.selectedPlaylist&&this.loadMorePlaylistTracks())}async handlePlayAllLiked(t=!1){const e=this.getTargetDeviceId();t&&await vt.setShuffle(this.hass,this.config.entity,!0),await vt.playAllLiked(this.hass,this.config.entity,e)}async handlePlayAllPlaylist(t,e=!1){const i=this.getTargetDeviceId();e&&await vt.setShuffle(this.hass,this.config.entity,!0),await vt.playContext(this.hass,this.config.entity,t.uri,0,i)}async handlePlayPlaylistTrack(t,e){const i=this.getTargetDeviceId(),s=this.playlistTracks[e];await vt.playContext(this.hass,this.config.entity,t.uri,e,i,s?.uri)}async handleToggleShuffle(t){t?.stopPropagation(),await vt.toggleShuffle(this.hass,this.config.entity)}async handlePlayPlaylist(t){await this.handleSelectPlaylist(t)}async handlePlayLikedTrack(t){const e=this.getTargetDeviceId();await vt.playLikedTracks(this.hass,this.config.entity,this.likedTracks,t,e)}async handlePlaySearchTrack(t){const e=this.getTargetDeviceId(),i=this.searchResults.slice(t).map(t=>t.uri);await vt.playTracks(this.hass,this.config.entity,i,e)}render(){if(!this.hass||!this.config?.entity)return this.renderConfigPlaceholder();const t=this.hass.states[this.config.entity];return t?j`
      ${this.renderMiniCard(t)}
      ${this.popupOpen?this.renderBubblePopup(t):""}
    `:this.renderConfigPlaceholder()}renderConfigPlaceholder(){const t=Boolean(this.config?.entity)?`Entité "${this.config.entity}" introuvable`:"Sélectionnez votre lecteur Spotify dans l’éditeur";return j`
      <div class="mini-card placeholder">
        <div class="mini-main-row">
          <div class="mini-cover">${bt.spotify}</div>
          <div class="mini-info">
            <div class="mini-title">Better Spotify Card</div>
            <div class="mini-artist">${t}</div>
            <div class="mini-device-badge">
              ${bt.speaker}
              <span>Spotify Connect</span>
            </div>
          </div>
          <div class="mini-controls">
            <button class="btn-icon" disabled title="Précédent">${bt.skipPrevious}</button>
            <button class="btn-icon btn-play-mini" disabled title="Lecture">${bt.play}</button>
            <button class="btn-icon" disabled title="Suivant">${bt.skipNext}</button>
          </div>
        </div>
        <div class="mini-progress-bar">
          <div class="mini-progress-fill" style="width: 35%;"></div>
        </div>
      </div>
    `}renderMiniCard(t){const e="playing"===t.state,i=t.attributes.media_title||"Aucune lecture",s=t.attributes.media_artist||t.attributes.sp_user_display_name||"Spotify",a=t.attributes.entity_picture,r=t.attributes.source||t.attributes.sp_device_name,o=t.attributes.media_duration||0,n=o>0?Math.min(100,this.currentPosition/o*100):0;return j`
      <div class="mini-card" @click=${()=>this.openPopup()}>
        <div class="mini-main-row">
          ${a?j`<img class="mini-cover" src=${a} alt="Album cover" />`:j`<div class="mini-cover">${bt.musicNote}</div>`}

          <div class="mini-info">
            <div class="mini-title">${i}</div>
            <div class="mini-artist">${s}</div>
            ${r?j`
                  <div class="mini-device-badge">
                    ${bt.speaker}
                    <span>${r}</span>
                  </div>
                `:""}
          </div>

          <div class="mini-controls">
            <button class="btn-icon" title="Précédent" @click=${t=>this.handlePrevious(t)}>
              ${bt.skipPrevious}
            </button>
            <button
              class="btn-icon btn-play-mini"
              title=${e?"Pause":"Lecture"}
              @click=${t=>this.handlePlayPause(t)}
            >
              ${e?bt.pause:bt.play}
            </button>
            <button class="btn-icon" title="Suivant" @click=${t=>this.handleNext(t)}>
              ${bt.skipNext}
            </button>
          </div>
        </div>

        <div class="mini-progress-bar">
          <div class="mini-progress-fill" style="width: ${n}%;"></div>
        </div>
      </div>
    `}renderBubblePopup(t){const e=t.attributes.source||t.attributes.sp_device_name||"Spotify Connect";return j`
      <div class="bubble-backdrop" @click=${()=>this.closePopup()}>
        <div class="bubble-sheet" @click=${t=>t.stopPropagation()}>
          <!-- Header -->
          <div class="sheet-header">
            <div class="sheet-header-left">
              <span class="spotify-brand-icon">${bt.spotify}</span>
              <span class="sheet-header-title">Spotify</span>
              <button
                class="sheet-connect-pill"
                title="Changer d'appareil"
                @click=${()=>this.setTab("devices")}
              >
                ${bt.speaker}
                <span>${e}</span>
              </button>
            </div>
            <button class="btn-close" title="Fermer" @click=${()=>this.closePopup()}>
              ${bt.close}
            </button>
          </div>

          <!-- Menu Tabs (placed at top for natural navigation) -->
          <div class="tab-bar">
            <button
              class="tab-btn ${"liked"===this.activeTab?"active":""}"
              @click=${()=>this.setTab("liked")}
            >
              ${bt.heart}
              <span>Titres likés</span>
            </button>
            <button
              class="tab-btn ${"playlists"===this.activeTab?"active":""}"
              @click=${()=>this.setTab("playlists")}
            >
              ${bt.playlist}
              <span>Playlists</span>
            </button>
            <button
              class="tab-btn ${"search"===this.activeTab?"active":""}"
              @click=${()=>this.setTab("search")}
            >
              ${bt.search}
              <span>Recherche</span>
            </button>
            <button
              class="tab-btn ${"devices"===this.activeTab?"active":""}"
              @click=${()=>this.setTab("devices")}
            >
              ${bt.connectDevices}
              <span>Appareils</span>
            </button>
          </div>

          <!-- Tab Content Body (middle scrollable area) -->
          <div class="tab-content" @scroll=${t=>this.handleContentScroll(t)}>
            ${this.renderActiveTabContent(t)}
          </div>

          <!-- Now Playing Player (docked at the bottom) -->
          ${this.renderNowPlayingSection(t)}
        </div>
      </div>
    `}renderNowPlayingSection(t){const e="playing"===t.state,i=t.attributes.media_title||"Aucun titre en cours",s=t.attributes.media_artist||"Sélectionnez un morceau ci-dessus",a=t.attributes.entity_picture,r=t.attributes.media_duration||0,o=r>0?Math.min(100,Math.max(0,this.currentPosition/r*100)):0,n=null!==this.localVolume?this.localVolume:Math.round(100*(t.attributes.volume_level??.5)),l=0===n||n<50?bt.volumeLow:bt.volumeHigh;return j`
      <div class="now-playing-section">
        <!-- Optional: Fine Volume Slider Popover -->
        ${this.volumeMenuOpen?j`
            <div class="volume-popover">
              <button
                class="btn-vol-step"
                title="Diminuer le volume (-1%)"
                @click=${t=>this.handleVolumeStep(-1,t)}
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
                  .value=${n}
                  style="--volume-percent: ${n}%;"
                  @input=${t=>this.handleVolumeInput(t)}
                  @change=${t=>this.handleVolumeChange(t)}
                />
              </div>

              <button
                class="btn-vol-step"
                title="Augmenter le volume (+1%)"
                @click=${t=>this.handleVolumeStep(1,t)}
              >
                <span>+</span>
              </button>

              <span class="volume-percent-label">${n}%</span>

              <button
                class="btn-vol-close"
                title="Fermer le menu volume"
                @click=${t=>{t.stopPropagation(),this.volumeMenuOpen=!1}}
              >
                ${bt.close}
              </button>
            </div>
          `:""}

        <!-- Line 1: Seek / timeline bar on top -->
        <div class="desktop-seek-row">
          <span class="desktop-seek-time">${ft(this.currentPosition)}</span>
          <input
            type="range"
            class="seek-slider"
            min="0"
            max=${r||100}
            step="1"
            .value=${this.currentPosition}
            style="--seek-percent: ${o}%;"
            @input=${t=>{this.currentPosition=Number(t.target.value)}}
            @change=${t=>this.handleSeek(t)}
          />
          <span class="desktop-seek-time right">${ft(r)}</span>
        </div>

        <!-- Line 2: 3-column Spotify Desktop row -->
        <div class="desktop-player-row">
          <!-- Left: Cover, Title, Artist -->
          <div class="desktop-col-left">
            ${a?j`<img class="desktop-cover" src=${a} alt="Cover" />`:j`<div class="desktop-cover list-item-thumb">${bt.musicNote}</div>`}
            <div class="desktop-meta">
              <div class="desktop-title" title=${i}>${i}</div>
              <div class="desktop-artist" title=${s}>${s}</div>
            </div>
          </div>

          <!-- Center: PREV PLAY NEXT -->
          <div class="desktop-col-center">
            <button class="btn-icon" title="Précédent" @click=${t=>this.handlePrevious(t)}>
              ${bt.skipPrevious}
            </button>
            <button
              class="btn-play-large"
              title=${e?"Pause":"Lecture"}
              @click=${t=>this.handlePlayPause(t)}
            >
              ${e?bt.pause:bt.play}
            </button>
            <button class="btn-icon" title="Suivant" @click=${t=>this.handleNext(t)}>
              ${bt.skipNext}
            </button>
          </div>

          <!-- Right: MODE LECTURE (Shuffle) & Single Volume Button -->
          <div class="desktop-col-right">
            <button
              class="btn-shuffle-toggle ${t.attributes.shuffle?"active":""}"
              title=${t.attributes.shuffle?"Mode aléatoire : activé":"Mode normal (cliquer pour activer l'aléatoire)"}
              @click=${t=>this.handleToggleShuffle(t)}
            >
              ${bt.shuffle}
            </button>

            <button
              class="btn-vol-trigger ${this.volumeMenuOpen?"active":""}"
              title="Régler le volume (${n}%)"
              @click=${t=>this.handleToggleVolumeMenu(t)}
            >
              ${l}
              <span class="vol-label">${n}%</span>
            </button>
          </div>
        </div>
      </div>
    `}renderActiveTabContent(t){switch(this.activeTab){case"liked":return this.renderLikedTab(t);case"playlists":return this.renderPlaylistsTab(t);case"search":return this.renderSearchTab(t);case"devices":return this.renderDevicesTab(t)}}renderLikedTab(t){if(this.loadingLiked)return j`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Chargement des titres likés...</div>
        </div>
      `;if(0===this.likedTracks.length)return j`
        <div class="state-message">
          ${bt.heart}
          <div>Aucun titre liké trouvé ou synchronisé.</div>
          <button class="sheet-connect-pill" @click=${()=>this.fetchLikedTracks()}>Actualiser</button>
        </div>
      `;const e=t.attributes.media_title;return j`
      <div class="tab-action-bar">
        <div class="tab-action-title">
          ${this.likedTracks.length}${this.likedTotal>0?` / ${this.likedTotal}`:""} titres
        </div>
        <div class="tab-action-buttons">
          <button
            class="btn-pill-play"
            title="Tout écouter"
            @click=${()=>this.handlePlayAllLiked(!1)}
          >
            ${bt.play}
            <span>Tout écouter</span>
          </button>
        </div>
      </div>

      <div class="items-list">
        ${this.likedTracks.map((t,i)=>{const s=e&&t.name===e,a=t.album?.images?.[0]?.url,r=t.artists.map(t=>t.name).join(", ");return j`
            <div
              class="list-item"
              @click=${()=>this.handlePlayLikedTrack(i)}
              title="Lancer la lecture à partir de ce titre"
            >
              ${a?j`<img class="list-item-thumb" src=${a} alt="Cover" />`:j`<div class="list-item-thumb">${bt.musicNote}</div>`}

              <div class="list-item-text">
                <div class="list-item-title ${s?"active":""}">
                  ${t.name}
                </div>
                <div class="list-item-subtitle">${r}</div>
              </div>

              <div class="list-item-duration">${gt(t.duration_ms)}</div>
            </div>
          `})}
        ${this.loadingMoreLiked?j`<div class="loading-more-spinner"><div class="spinner"></div></div>`:""}
      </div>
    `}renderPlaylistsTab(t){if(this.selectedPlaylist){const e=this.selectedPlaylist,i=e.images?.[0]?.url,s=t.attributes.media_title;return j`
        <button class="btn-back" @click=${()=>this.handleBackToPlaylists()}>
          ${bt.arrowBack}
          <span>Toutes les playlists</span>
        </button>

        <div class="playlist-header">
          ${i?j`<img class="playlist-header-cover" src=${i} alt="Cover" />`:j`<div class="playlist-header-cover list-item-thumb">${bt.playlist}</div>`}
          <div class="playlist-header-meta">
            <div class="playlist-header-title">${e.name}</div>
            <div class="playlist-header-sub">
              ${e.tracks_total?`${e.tracks_total} titres`:""}
              ${e.owner_name?`• Par ${e.owner_name}`:""}
            </div>
          </div>
        </div>

        <div class="tab-action-bar">
          <div class="tab-action-title">
            ${this.playlistTracks.length}${this.playlistTotal>0?` / ${this.playlistTotal}`:""} titres
          </div>
          <div class="tab-action-buttons">
            <button
              class="btn-pill-play"
              title="Tout écouter"
              @click=${()=>this.handlePlayAllPlaylist(e,!1)}
            >
              ${bt.play}
              <span>Tout écouter</span>
            </button>
          </div>
        </div>

        ${this.loadingPlaylistTracks?j`
              <div class="state-message">
                <div class="spinner"></div>
                <div>Chargement des morceaux...</div>
              </div>
            `:0===this.playlistTracks.length?j`
                <div class="state-message">
                  <div>Aucun morceau visible dans la liste.</div>
                  <div style="font-size: 12px; color: var(--sp-text-subdued); margin-top: 6px;">
                    Vous pouvez tout de même écouter la playlist avec le bouton « Tout écouter ».
                  </div>
                </div>
              `:j`
              <div class="items-list">
                ${this.playlistTracks.map((t,i)=>{const a=s&&t.name===s,r=t.album?.images?.[0]?.url,o=t.artists.map(t=>t.name).join(", ");return j`
                    <div
                      class="list-item"
                      @click=${()=>this.handlePlayPlaylistTrack(e,i)}
                      title="Lancer à partir de ce morceau"
                    >
                      ${r?j`<img class="list-item-thumb" src=${r} alt="Cover" />`:j`<div class="list-item-thumb">${bt.musicNote}</div>`}

                      <div class="list-item-text">
                        <div class="list-item-title ${a?"active":""}">
                          ${t.name}
                        </div>
                        <div class="list-item-subtitle">${o}</div>
                      </div>

                      <div class="list-item-duration">${gt(t.duration_ms)}</div>
                    </div>
                  `})}
                ${this.loadingMorePlaylistTracks?j`<div class="loading-more-spinner"><div class="spinner"></div></div>`:""}
              </div>
            `}
      `}return this.loadingPlaylists?j`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Chargement des playlists...</div>
        </div>
      `:0===this.playlists.length?j`
        <div class="state-message">
          ${bt.playlist}
          <div>Aucune playlist trouvée.</div>
          <button class="sheet-connect-pill" @click=${()=>this.fetchPlaylists()}>Actualiser</button>
        </div>
      `:j`
      <div class="items-list">
        ${this.playlists.map(t=>{const e=t.images?.[0]?.url,i=t.tracks_total?`${t.tracks_total} titres`:t.owner_name||"Playlist";return j`
            <div
              class="list-item"
              @click=${()=>this.handleSelectPlaylist(t)}
              title="Afficher les titres de la playlist ${t.name}"
            >
              ${e?j`<img class="list-item-thumb" src=${e} alt="Cover" />`:j`<div class="list-item-thumb">${bt.playlist}</div>`}

              <div class="list-item-text">
                <div class="list-item-title">${t.name}</div>
                <div class="list-item-subtitle">${i}</div>
              </div>

              <div class="list-item-arrow">
                ${bt.chevronRight}
              </div>
            </div>
          `})}
      </div>
    `}renderSearchTab(t){const e=t.attributes.media_title;return j`
      <div class="search-box-wrapper">
        <span class="search-icon-left">${bt.search}</span>
        <input
          type="text"
          class="search-input"
          placeholder="Rechercher un titre ou un artiste..."
          .value=${this.searchQuery}
          @input=${t=>this.handleSearchInput(t)}
        />
        ${this.searchQuery?j`
              <button class="search-btn-clear" title="Effacer" @click=${()=>this.clearSearch()}>
                ${bt.clear}
              </button>
            `:""}
      </div>

      ${this.loadingSearch?j`
            <div class="state-message">
              <div class="spinner"></div>
              <div>Recherche dans Spotify...</div>
            </div>
          `:""}
      ${!this.loadingSearch&&this.searchQuery&&0===this.searchResults.length?j`
            <div class="state-message">
              ${bt.search}
              <div>Aucun morceau trouvé pour "${this.searchQuery}".</div>
            </div>
          `:""}
      ${this.loadingSearch||this.searchQuery||0!==this.searchResults.length?"":j`
            <div class="state-message">
              ${bt.musicNote}
              <div>Tapez un nom de morceau, d'album ou d'artiste.</div>
            </div>
          `}

      <div class="items-list">
        ${this.searchResults.map((t,i)=>{const s=e&&t.name===e,a=t.album?.images?.[0]?.url,r=t.artists.map(t=>t.name).join(", ");return j`
            <div
              class="list-item"
              @click=${()=>this.handlePlaySearchTrack(i)}
              title="Lire ce titre"
            >
              ${a?j`<img class="list-item-thumb" src=${a} alt="Cover" />`:j`<div class="list-item-thumb">${bt.musicNote}</div>`}

              <div class="list-item-text">
                <div class="list-item-title ${s?"active":""}">
                  ${t.name}
                </div>
                <div class="list-item-subtitle">${r}</div>
              </div>

              <div class="list-item-duration">${gt(t.duration_ms)}</div>
            </div>
          `})}
      </div>
    `}renderDevicesTab(t){if(this.loadingDevices)return j`
        <div class="state-message">
          <div class="spinner"></div>
          <div>Recherche des appareils Spotify Connect...</div>
        </div>
      `;if(0===this.devices.length)return j`
        <div class="state-message">
          ${bt.speaker}
          <div>Aucun appareil Spotify Connect détecté.</div>
          <button class="sheet-connect-pill" @click=${()=>this.fetchDevices()}>Actualiser</button>
        </div>
      `;const e=t.attributes.source||t.attributes.sp_device_name;return j`
      <div class="items-list">
        ${this.devices.map(t=>{const i=t.is_active||t.name===e,s=this.getDefaultDevice(),a=s===t.id||s===t.name;return j`
            <div
              class="list-item"
              @click=${()=>this.handleSelectDevice(t)}
              title="Diffuser sur ${t.name}"
            >
              <div class="list-item-thumb list-item-thumb-round">
                ${bt.speaker}
              </div>

              <div class="list-item-text">
                <div class="list-item-title ${i?"active":""}">
                  ${t.name}
                  ${a?j`<span class="default-device-badge">⭐ Par défaut</span>`:""}
                </div>
                <div class="list-item-subtitle">${t.type||"Haut-parleur"}</div>
              </div>

              <div class="list-item-right-actions">
                ${i?j`<div class="list-item-badge">Actif</div>`:""}
                <button
                  class="btn-star-default ${a?"is-default":""}"
                  title=${a?"Lecteur par défaut (cliquer pour retirer)":"Définir comme lecteur par défaut"}
                  @click=${e=>{e.stopPropagation(),this.setDefaultDevice(t.id||t.name)}}
                >
                  ${a?"⭐":"☆"}
                </button>
              </div>
            </div>
          `})}
      </div>
    `}};yt([pt({attribute:!1})],$t.prototype,"hass",void 0),yt([ut()],$t.prototype,"config",void 0),yt([ut()],$t.prototype,"popupOpen",void 0),yt([ut()],$t.prototype,"activeTab",void 0),yt([ut()],$t.prototype,"playlists",void 0),yt([ut()],$t.prototype,"likedTracks",void 0),yt([ut()],$t.prototype,"likedTotal",void 0),yt([ut()],$t.prototype,"likedOffset",void 0),yt([ut()],$t.prototype,"loadingMoreLiked",void 0),yt([ut()],$t.prototype,"searchResults",void 0),yt([ut()],$t.prototype,"devices",void 0),yt([ut()],$t.prototype,"selectedPlaylist",void 0),yt([ut()],$t.prototype,"playlistTracks",void 0),yt([ut()],$t.prototype,"playlistTotal",void 0),yt([ut()],$t.prototype,"playlistOffset",void 0),yt([ut()],$t.prototype,"loadingPlaylistTracks",void 0),yt([ut()],$t.prototype,"loadingMorePlaylistTracks",void 0),yt([ut()],$t.prototype,"loadingPlaylists",void 0),yt([ut()],$t.prototype,"loadingLiked",void 0),yt([ut()],$t.prototype,"loadingSearch",void 0),yt([ut()],$t.prototype,"loadingDevices",void 0),yt([ut()],$t.prototype,"searchQuery",void 0),yt([ut()],$t.prototype,"currentPosition",void 0),yt([ut()],$t.prototype,"volumeMenuOpen",void 0),yt([ut()],$t.prototype,"localVolume",void 0),customElements.get("better-spotify-card")||customElements.define("better-spotify-card",$t),window.customCards=window.customCards||[],window.customCards.some(t=>"better-spotify-card"===t.type)||window.customCards.push({type:"better-spotify-card",name:"Better Spotify Card",description:"Lecteur Spotify élégant style Android avec popup type Bubble-Card",preview:!0,documentationURL:"https://github.com/lmindwarel/better-spotify-card"}),console.info("%c BETTER-SPOTIFY-CARD %c v1.8.0 ","color: white; background: #1DB954; font-weight: 700; border-radius: 3px 0 0 3px;","color: white; background: #282828; font-weight: 700; border-radius: 0 3px 3px 0;");export{$t as BetterSpotifyCard};
//# sourceMappingURL=better-spotify-card.js.map