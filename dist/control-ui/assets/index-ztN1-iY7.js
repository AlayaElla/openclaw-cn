(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const ln=globalThis,Wi=ln.ShadowRoot&&(ln.ShadyCSS===void 0||ln.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qi=Symbol(),aa=new WeakMap;let xo=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==Qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Wi&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=aa.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&aa.set(n,t))}return t}toString(){return this.cssText}};const $r=e=>new xo(typeof e=="string"?e:e+"",void 0,Qi),wr=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,s,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[a+1],e[0]);return new xo(n,e,Qi)},xr=(e,t)=>{if(Wi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),s=ln.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,e.appendChild(i)}},oa=Wi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return $r(n)})(e):e;const{is:Ar,defineProperty:kr,getOwnPropertyDescriptor:Sr,getOwnPropertyNames:_r,getOwnPropertySymbols:Cr,getPrototypeOf:Tr}=Object,xn=globalThis,la=xn.trustedTypes,Er=la?la.emptyScript:"",Ir=xn.reactiveElementPolyfillSupport,_t=(e,t)=>e,fn={toAttribute(e,t){switch(t){case Boolean:e=e?Er:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Zi=(e,t)=>!Ar(e,t),ra={attribute:!0,type:String,converter:fn,reflect:!1,useDefault:!1,hasChanged:Zi};Symbol.metadata??=Symbol("metadata"),xn.litPropertyMetadata??=new WeakMap;let tt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ra){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,n);s!==void 0&&kr(this.prototype,t,s)}}static getPropertyDescriptor(t,n,i){const{get:s,set:a}=Sr(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:s,set(o){const r=s?.call(this);a?.call(this,o),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ra}static _$Ei(){if(this.hasOwnProperty(_t("elementProperties")))return;const t=Tr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t("properties"))){const n=this.properties,i=[..._r(n),...Cr(n)];for(const s of i)this.createProperty(s,n[s])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,s]of n)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const s=this._$Eu(n,i);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)n.unshift(oa(s))}else t!==void 0&&n.push(oa(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$ET(t,n){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:fn).toAttribute(n,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,n){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:fn;this._$Em=s;const r=o.fromAttribute(n,a.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,n,i,s=!1,a){if(t!==void 0){const o=this.constructor;if(s===!1&&(a=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??Zi)(a,n)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i){const{wrapped:o}=a,r=this[s];o!==!0||this._$AL.has(s)||r===void 0||this.C(s,void 0,a,r)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(n)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[_t("elementProperties")]=new Map,tt[_t("finalized")]=new Map,Ir?.({ReactiveElement:tt}),(xn.reactiveElementVersions??=[]).push("2.1.2");const Yi=globalThis,ca=e=>e,pn=Yi.trustedTypes,da=pn?pn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ao="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,ko="?"+Ce,Lr=`<${ko}>`,Ue=document,Mt=()=>Ue.createComment(""),Rt=e=>e===null||typeof e!="object"&&typeof e!="function",Ji=Array.isArray,Mr=e=>Ji(e)||typeof e?.[Symbol.iterator]=="function",Zn=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ua=/-->/g,fa=/>/g,Pe=RegExp(`>|${Zn}(?:([^\\s"'>=/]+)(${Zn}*=${Zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pa=/'/g,ga=/"/g,So=/^(?:script|style|textarea|title)$/i,Rr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),l=Rr(1),Ee=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ha=new WeakMap,De=Ue.createTreeWalker(Ue,129);function _o(e,t){if(!Ji(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return da!==void 0?da.createHTML(t):t}const Pr=(e,t)=>{const n=e.length-1,i=[];let s,a=t===2?"<svg>":t===3?"<math>":"",o=ht;for(let r=0;r<n;r++){const c=e[r];let u,p,f=-1,m=0;for(;m<c.length&&(o.lastIndex=m,p=o.exec(c),p!==null);)m=o.lastIndex,o===ht?p[1]==="!--"?o=ua:p[1]!==void 0?o=fa:p[2]!==void 0?(So.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=Pe):p[3]!==void 0&&(o=Pe):o===Pe?p[0]===">"?(o=s??ht,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,u=p[1],o=p[3]===void 0?Pe:p[3]==='"'?ga:pa):o===ga||o===pa?o=Pe:o===ua||o===fa?o=ht:(o=Pe,s=void 0);const v=o===Pe&&e[r+1].startsWith("/>")?" ":"";a+=o===ht?c+Lr:f>=0?(i.push(u),c.slice(0,f)+Ao+c.slice(f)+Ce+v):c+Ce+(f===-2?r:v)}return[_o(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let $i=class Co{constructor({strings:t,_$litType$:n},i){let s;this.parts=[];let a=0,o=0;const r=t.length-1,c=this.parts,[u,p]=Pr(t,n);if(this.el=Co.createElement(u,i),De.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=De.nextNode())!==null&&c.length<r;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Ao)){const m=p[o++],v=s.getAttribute(f).split(Ce),d=/([.?@])?(.*)/.exec(m);c.push({type:1,index:a,name:d[2],strings:v,ctor:d[1]==="."?Or:d[1]==="?"?Nr:d[1]==="@"?Dr:kn}),s.removeAttribute(f)}else f.startsWith(Ce)&&(c.push({type:6,index:a}),s.removeAttribute(f));if(So.test(s.tagName)){const f=s.textContent.split(Ce),m=f.length-1;if(m>0){s.textContent=pn?pn.emptyScript:"";for(let v=0;v<m;v++)s.append(f[v],Mt()),De.nextNode(),c.push({type:2,index:++a});s.append(f[m],Mt())}}}else if(s.nodeType===8)if(s.data===ko)c.push({type:2,index:a});else{let f=-1;for(;(f=s.data.indexOf(Ce,f+1))!==-1;)c.push({type:7,index:a}),f+=Ce.length-1}a++}}static createElement(t,n){const i=Ue.createElement("template");return i.innerHTML=t,i}};function st(e,t,n=e,i){if(t===Ee)return t;let s=i!==void 0?n._$Co?.[i]:n._$Cl;const a=Rt(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,n,i)),i!==void 0?(n._$Co??=[])[i]=s:n._$Cl=s),s!==void 0&&(t=st(e,s._$AS(e,t.values),s,i)),t}class Fr{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,s=(t?.creationScope??Ue).importNode(n,!0);De.currentNode=s;let a=De.nextNode(),o=0,r=0,c=i[0];for(;c!==void 0;){if(o===c.index){let u;c.type===2?u=new An(a,a.nextSibling,this,t):c.type===1?u=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(u=new Br(a,this,t)),this._$AV.push(u),c=i[++r]}o!==c?.index&&(a=De.nextNode(),o++)}return De.currentNode=Ue,s}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}let An=class To{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=st(this,t,n),Rt(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==Ee&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&Rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ue.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=$i.createElement(_o(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(n);else{const a=new Fr(s,this),o=a.u(this.options);a.p(n),this.T(o),this._$AH=a}}_$AC(t){let n=ha.get(t.strings);return n===void 0&&ha.set(t.strings,n=new $i(t)),n}k(t){Ji(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const a of t)s===n.length?n.push(i=new To(this.O(Mt()),this.O(Mt()),this,this.options)):i=n[s],i._$AI(a),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const i=ca(t).nextSibling;ca(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class kn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,s,a){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,n=this,i,s){const a=this.strings;let o=!1;if(a===void 0)t=st(this,t,n,0),o=!Rt(t)||t!==this._$AH&&t!==Ee,o&&(this._$AH=t);else{const r=t;let c,u;for(t=a[0],c=0;c<a.length-1;c++)u=st(this,r[i+c],n,c),u===Ee&&(u=this._$AH[c]),o||=!Rt(u)||u!==this._$AH[c],u===g?t=g:t!==g&&(t+=(u??"")+a[c+1]),this._$AH[c]=u}o&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let Or=class extends kn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},Nr=class extends kn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},Dr=class extends kn{constructor(t,n,i,s,a){super(t,n,i,s,a),this.type=5}_$AI(t,n=this){if((t=st(this,t,n,0)??g)===Ee)return;const i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Br=class{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}};const Ur={I:An},Kr=Yi.litHtmlPolyfillSupport;Kr?.($i,An),(Yi.litHtmlVersions??=[]).push("3.3.2");const zr=(e,t,n)=>{const i=n?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const a=n?.renderBefore??null;i._$litPart$=s=new An(t.insertBefore(Mt(),a),a,void 0,n??{})}return s._$AI(e),s};const Xi=globalThis;let it=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zr(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ee}};it._$litElement$=!0,it.finalized=!0,Xi.litElementHydrateSupport?.({LitElement:it});const Hr=Xi.litElementPolyfillSupport;Hr?.({LitElement:it});(Xi.litElementVersions??=[]).push("4.2.2");const Eo=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const jr={attribute:!0,type:String,converter:fn,reflect:!1,hasChanged:Zi},qr=(e=jr,t,n)=>{const{kind:i,metadata:s}=n;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),i==="accessor"){const{name:o}=n;return{set(r){const c=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,c,e,!0,r)},init(r){return r!==void 0&&this.C(o,void 0,e,r),r}}}if(i==="setter"){const{name:o}=n;return function(r){const c=this[o];t.call(this,r),this.requestUpdate(o,c,e,!0,r)}}throw Error("Unsupported decorator location: "+i)};function Sn(e){return(t,n)=>typeof n=="object"?qr(e,t,n):((i,s,a)=>{const o=s.hasOwnProperty(a);return s.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(s,a):void 0})(e,t,n)}function w(e){return Sn({...e,state:!0,attribute:!1})}async function ne(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function Gr(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Vr(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Wr(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function Ke(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function at(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function Io(e,t,n){if(t.length===0)return;let i=e;for(let a=0;a<t.length-1;a+=1){const o=t[a],r=t[a+1];if(typeof o=="number"){if(!Array.isArray(i))return;i[o]==null&&(i[o]=typeof r=="number"?[]:{}),i=i[o]}else{if(typeof i!="object"||i==null)return;const c=i;c[o]==null&&(c[o]=typeof r=="number"?[]:{}),i=c[o]}}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(i)&&(i[s]=n);return}typeof i=="object"&&i!=null&&(i[s]=n)}function Lo(e,t){if(t.length===0)return;let n=e;for(let s=0;s<t.length-1;s+=1){const a=t[s];if(typeof a=="number"){if(!Array.isArray(n))return;n=n[a]}else{if(typeof n!="object"||n==null)return;n=n[a]}if(n==null)return}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(n)&&n.splice(i,1);return}typeof n=="object"&&n!=null&&delete n[i]}async function de(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Zr(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Mo(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Qr(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Qr(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Zr(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?at(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=at(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Ke(t.config??{}),e.configFormOriginal=Ke(t.config??{}),e.configRawOriginal=n)}async function rn(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?at(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await de(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Yr(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?at(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await de(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Jr(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function ie(e,t,n){const i=Ke(e.configForm??e.configSnapshot?.config??{});Io(i,t,n),e.configForm=i,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=at(i))}function we(e,t){const n=Ke(e.configForm??e.configSnapshot?.config??{});Lo(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=at(n))}function Xr(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function ec(e){const{state:t,callbacks:n,accountId:i}=e,s=Xr(t),a=(r,c,u={})=>{const{type:p="text",placeholder:f,maxLength:m,help:v}=u,d=t.values[r]??"",y=t.fieldErrors[r],x=`nostr-profile-${r}`;return p==="textarea"?l`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${x}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${c}
          </label>
          <textarea
            id="${x}"
            .value=${d}
            placeholder=${f??""}
            maxlength=${m??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${A=>{const _=A.target;n.onFieldChange(r,_.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${v?l`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${v}</div>`:g}
          ${y?l`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${y}</div>`:g}
        </div>
      `:l`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${x}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${c}
        </label>
        <input
          id="${x}"
          type=${p}
          .value=${d}
          placeholder=${f??""}
          maxlength=${m??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${A=>{const _=A.target;n.onFieldChange(r,_.value)}}
          ?disabled=${t.saving}
        />
        ${v?l`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${v}</div>`:g}
        ${y?l`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${y}</div>`:g}
      </div>
    `},o=()=>{const r=t.values.picture;return r?l`
      <div style="margin-bottom: 12px;">
        <img
          src=${r}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${c=>{const u=c.target;u.style.display="none"}}
          @load=${c=>{const u=c.target;u.style.display="block"}}
        />
      </div>
    `:g};return l`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">编辑资料</div>
        <div style="font-size: 12px; color: var(--text-muted);">账户: ${i}</div>
      </div>

      ${t.error?l`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:g}

      ${t.success?l`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:g}

      ${o()}

      ${a("name","用户名",{placeholder:"satoshi",maxLength:256,help:"短用户名（例如：satoshi）"})}

      ${a("displayName","显示名称",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"您的完整显示名称"})}

      ${a("about","简介",{type:"textarea",placeholder:"向别人介绍自己...",maxLength:2e3,help:"简短的个人简介或描述"})}

      ${a("picture","头像URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"您头像图片的HTTPS URL"})}

      ${t.showAdvanced?l`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">高级选项</div>

              ${a("banner","横幅URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"横幅图片的HTTPS URL"})}

              ${a("website","网站",{type:"url",placeholder:"https://example.com",help:"您的个人网站"})}

              ${a("nip05","NIP-05 标识",{placeholder:"you@example.com",help:"可验证的标识符（例如：you@domain.com）"})}

              ${a("lud16","闪电网络地址",{placeholder:"you@getalby.com",help:"用于打赏的闪电网络地址（LUD-16）"})}
            </div>
          `:g}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!s}
        >
          ${t.saving?"保存中...":"保存并发布"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"导入中...":"从转发器导入"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"隐藏高级选项":"显示高级选项"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          取消
        </button>
      </div>

      ${s?l`<div style="font-size: 12px; color: var(--warning-color); margin-top: 8px;">
            您有未保存的更改
          </div>`:g}
    </div>
  `}function tc(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function nc(e,t){await Gr(e,t),await ne(e,!0)}async function ic(e){await Vr(e),await ne(e,!0)}async function sc(e){await Wr(e),await ne(e,!0)}async function ac(e){await rn(e),await de(e),await ne(e,!0)}async function oc(e){await de(e),await ne(e,!0)}function lc(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[i,...s]=n.split(":");if(!i||s.length===0)continue;const a=i.trim(),o=s.join(":").trim();a&&o&&(t[a]=o)}return t}function Ro(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Po(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function rc(e){const t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;const n=e.settings.token.trim();if(n)return`Bearer ${n}`;const i=e.password.trim();return i?`Bearer ${i}`:null}function Fo(e){const t=rc(e);return t?{Authorization:t}:{}}function cc(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=tc(n??void 0)}function dc(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function uc(e,t,n){const i=e.nostrProfileFormState;i&&(e.nostrProfileFormState={...i,values:{...i.values,[t]:n},fieldErrors:{...i.fieldErrors,[t]:""}})}function fc(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function pc(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=Ro(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const i=await fetch(Po(n),{method:"PUT",headers:{"Content-Type":"application/json",...Fo(e)},body:JSON.stringify(t.values)}),s=await i.json().catch(()=>null);if(!i.ok||s?.ok===!1||!s){const a=s?.error??`Profile update failed (${i.status})`;e.nostrProfileFormState={...t,saving:!1,error:a,success:null,fieldErrors:lc(s?.details)};return}if(!s.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await ne(e,!0)}catch(i){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(i)}`,success:null}}}async function gc(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=Ro(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const i=await fetch(Po(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json",...Fo(e)},body:JSON.stringify({autoMerge:!0})}),s=await i.json().catch(()=>null);if(!i.ok||s?.ok===!1||!s){const c=s?.error??`Profile import failed (${i.status})`;e.nostrProfileFormState={...t,importing:!1,error:c,success:null};return}const a=s.merged??s.imported??null,o=a?{...t.values,...a}:t.values,r=!!(o.banner||o.website||o.nip05||o.lud16);e.nostrProfileFormState={...t,importing:!1,values:o,error:null,success:s.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:r},s.saved&&await ne(e,!0)}catch(i){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(i)}`,success:null}}}const hc=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,Jt=/<\s*\/?\s*final\b[^>]*>/gi,va=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^>]*>/gi;function vc(e,t){return e.trimStart()}function mc(e,t){if(!e||!hc.test(e))return e;let n=e;Jt.test(n)?(Jt.lastIndex=0,n=n.replace(Jt,"")):Jt.lastIndex=0,va.lastIndex=0;let i="",s=0,a=!1;for(const o of n.matchAll(va)){const r=o.index??0,c=o[1]==="/";a?c&&(a=!1):(i+=n.slice(s,r),c||(a=!0)),s=r+o[0].length}return i+=n.slice(s),vc(i)}function Pt(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function O(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e;if(t<0)return"just now";const n=Math.round(t/1e3);if(n<60)return`${n}s ago`;const i=Math.round(n/60);if(i<60)return`${i}m ago`;const s=Math.round(i/60);return s<48?`${s}h ago`:`${Math.round(s/24)}d ago`}function Oo(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const i=Math.round(n/60);return i<48?`${i}h`:`${Math.round(i/24)}d`}function wi(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function xi(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function No(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function gn(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Yn(e){return mc(e)}const yc=/^\[([^\]]+)\]\s*/,bc=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],Jn=new WeakMap,Xn=new WeakMap;function $c(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:bc.some(t=>e.startsWith(`${t} `))}function ei(e){const t=e.match(yc);if(!t)return e;const n=t[1]??"";return $c(n)?e.slice(t[0].length):e}function Ai(e){const t=e,n=typeof t.role=="string"?t.role:"",i=t.content;if(typeof i=="string")return n==="assistant"?Yn(i):ei(i);if(Array.isArray(i)){const s=i.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(s.length>0){const a=s.join(`
`);return n==="assistant"?Yn(a):ei(a)}}return typeof t.text=="string"?n==="assistant"?Yn(t.text):ei(t.text):null}function Do(e){if(!e||typeof e!="object")return Ai(e);const t=e;if(Jn.has(t))return Jn.get(t)??null;const n=Ai(e);return Jn.set(t,n),n}function ma(e){const n=e.content,i=[];if(Array.isArray(n))for(const r of n){const c=r;if(c.type==="thinking"&&typeof c.thinking=="string"){const u=c.thinking.trim();u&&i.push(u)}}if(i.length>0)return i.join(`
`);const s=xc(e);if(!s)return null;const o=[...s.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(r=>(r[1]??"").trim()).filter(Boolean);return o.length>0?o.join(`
`):null}function wc(e){if(!e||typeof e!="object")return ma(e);const t=e;if(Xn.has(t))return Xn.get(t)??null;const n=ma(e);return Xn.set(t,n),n}function xc(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const i=n.map(s=>{const a=s;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(s=>typeof s=="string");if(i.length>0)return i.join(`
`)}return typeof t.text=="string"?t.text:null}function Ac(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(i=>i.trim()).filter(Boolean).map(i=>`_${i}_`);return n.length?["_推理过程:_",...n].join(`
`):""}function ya(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function kc(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function es(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),ya(t)}return ya(kc())}async function Ft(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function Sc(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function _c(e,t,n){if(!e.client||!e.connected)return!1;const i=t.trim(),s=n&&n.length>0;if(!i&&!s)return!1;const a=Date.now(),o=[];if(i&&o.push({type:"text",text:i}),s)for(const u of n)o.push({type:"image",source:{type:"base64",media_type:u.mimeType,data:u.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:o,timestamp:a}],e.chatSending=!0,e.lastError=null;const r=es();e.chatRunId=r,e.chatStream="",e.chatStreamStartedAt=a;const c=s?n.map(u=>{const p=Sc(u.dataUrl);return p?{type:"image",mimeType:p.mimeType,content:p.content}:null}).filter(u=>u!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:i,deliver:!1,idempotencyKey:r,attachments:c}),!0}catch(u){const p=String(u);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=p,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+p}],timestamp:Date.now()}],!1}finally{e.chatSending=!1}}async function Cc(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function Tc(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=Ai(t.message);if(typeof n=="string"){const i=e.chatStream??"";(!i||n.length>=i.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}async function rt(e){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const t={includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown},n=gn(e.sessionsFilterActive,0),i=gn(e.sessionsFilterLimit,0);n>0&&(t.activeMinutes=n),i>0&&(t.limit=i);const s=await e.client.request("sessions.list",t);s&&(e.sessionsResult=s)}catch(t){e.sessionsError=String(t)}finally{e.sessionsLoading=!1}}}async function Ec(e,t,n){if(!e.client||!e.connected)return;const i={key:t};"label"in n&&(i.label=n.label),"thinkingLevel"in n&&(i.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(i.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(i.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",i),await rt(e)}catch(s){e.sessionsError=String(s)}}async function Ic(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),await rt(e)}catch(i){e.sessionsError=String(i)}finally{e.sessionsLoading=!1}}}const ba=50,Lc=80,Mc=12e4;function Rc(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const i=n.map(s=>{if(!s||typeof s!="object")return null;const a=s;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(s=>!!s);return i.length===0?null:i.join(`
`)}function $a(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Rc(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const i=No(n,Mc);return i.truncated?`${i.text}

… truncated (${i.total} chars, showing first ${i.text.length}).`:i.text}function Pc(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Fc(e){if(e.toolStreamOrder.length<=ba)return;const t=e.toolStreamOrder.length-ba,n=e.toolStreamOrder.splice(0,t);for(const i of n)e.toolStreamById.delete(i)}function Oc(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function ki(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Oc(e)}function Nc(e,t=!1){if(t){ki(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>ki(e),Lc))}function ts(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],ki(e)}const Dc=5e3;function Bc(e,t){const n=t.data??{},i=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),i==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:i==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Dc))}function Uc(e,t){if(!t)return;if(t.stream==="compaction"){Bc(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const i=t.data??{},s=typeof i.toolCallId=="string"?i.toolCallId:"";if(!s)return;const a=typeof i.name=="string"?i.name:"tool",o=typeof i.phase=="string"?i.phase:"",r=o==="start"?i.args:void 0,c=o==="update"?$a(i.partialResult):o==="result"?$a(i.result):void 0,u=Date.now();let p=e.toolStreamById.get(s);p?(p.name=a,r!==void 0&&(p.args=r),c!==void 0&&(p.output=c),p.updatedAt=u):(p={toolCallId:s,runId:t.runId,sessionKey:n,name:a,args:r,output:c,startedAt:typeof t.ts=="number"?t.ts:u,updatedAt:u,message:{}},e.toolStreamById.set(s,p),e.toolStreamOrder.push(s)),p.message=Pc(p),Fc(e),Nc(e,o==="result")}const Si=450;function Bt(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const i=e.querySelector(".chat-thread");if(i){const s=getComputedStyle(i).overflowY;if(s==="auto"||s==="scroll"||i.scrollHeight-i.clientHeight>1)return i}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const i=n();if(!i)return;const s=i.scrollHeight-i.scrollTop-i.clientHeight,a=t&&!e.chatHasAutoScrolled;if(!(a||e.chatUserNearBottom||s<Si)){e.chatNewMessagesBelow=!0;return}a&&(e.chatHasAutoScrolled=!0),i.scrollTop=i.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const r=a?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const c=n();if(!c)return;const u=c.scrollHeight-c.scrollTop-c.clientHeight;(a||e.chatUserNearBottom||u<Si)&&(c.scrollTop=c.scrollHeight,e.chatUserNearBottom=!0)},r)})})}function Bo(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const i=n.scrollHeight-n.scrollTop-n.clientHeight;(t||i<80)&&(n.scrollTop=n.scrollHeight)})})}function Kc(e,t){const n=t.currentTarget;if(!n)return;const i=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=i<Si,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function zc(e,t){const n=t.currentTarget;if(!n)return;const i=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=i<80}function wa(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function Hc(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),i=URL.createObjectURL(n),s=document.createElement("a"),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");s.href=i,s.download=`openclaw-logs-${t}-${a}.log`,s.click(),URL.revokeObjectURL(i)}function jc(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:i}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${i}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}const qc=2e3,Gc=new Set(["trace","debug","info","warn","error","fatal"]);function Vc(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Wc(e){if(typeof e!="string")return null;const t=e.toLowerCase();return Gc.has(t)?t:null}function Qc(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,i=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,s=Wc(n?.logLevelName??n?.level),a=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,o=Vc(a);let r=null;o&&(typeof o.subsystem=="string"?r=o.subsystem:typeof o.module=="string"&&(r=o.module)),!r&&a&&a.length<120&&(r=a);let c=null;return typeof t[1]=="string"?c=t[1]:!o&&typeof t[0]=="string"?c=t[0]:typeof t.message=="string"&&(c=t.message),{raw:e,time:i,level:s,subsystem:r,message:c??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function ns(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const i=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),a=(Array.isArray(i.lines)?i.lines.filter(r=>typeof r=="string"):[]).map(Qc),o=!!(t?.reset||i.reset||e.logsCursor==null);e.logsEntries=o?a:[...e.logsEntries,...a].slice(-qc),typeof i.cursor=="number"&&(e.logsCursor=i.cursor),typeof i.file=="string"&&(e.logsFile=i.file),e.logsTruncated=!!i.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function _n(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}async function Cn(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,i,s]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const a=i;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=s}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Zc(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}function Yc(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{_n(e,{quiet:!0})},5e3))}function Jc(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function is(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&ns(e,{quiet:!0})},2e3))}function ss(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function as(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&Cn(e)},3e3))}function os(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function Uo(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function Ko(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(i=>!e.agentIdentityById[i]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const i of n){const s=await e.client.request("agent.identity.get",{agentId:i});s&&(e.agentIdentityById={...e.agentIdentityById,[i]:s})}}catch(i){e.agentIdentityError=String(i)}finally{e.agentIdentityLoading=!1}}}async function cn(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function ls(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,i=t.agents.some(s=>s.id===n);(!n||!i)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}async function Ut(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function Tn(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function Xc(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",atMs:n}}if(e.scheduleKind==="every"){const n=gn(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const i=e.everyUnit;return{kind:"every",everyMs:n*(i==="minutes"?6e4:i==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function ed(e){if(e.payloadKind==="systemEvent"){const s=e.payloadText.trim();if(!s)throw new Error("System event text required.");return{kind:"systemEvent",text:s}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},i=gn(e.timeoutSeconds,0);return i>0&&(n.timeoutSeconds=i),n}async function td(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=Xc(e.cronForm),n=ed(e.cronForm),i=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode!=="legacy"?{mode:e.cronForm.deliveryMode==="announce"?"announce":e.cronForm.deliveryMode==="deliver"?"deliver":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,s=e.cronForm.postToMainPrefix.trim()||"Cron",a=e.cronForm.agentId.trim(),o={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:a||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:i,isolation:e.cronForm.sessionTarget==="isolated"&&e.cronForm.deliveryMode==="legacy"?{postToMainPrefix:s}:void 0};if(!o.name)throw new Error("Name required.");await e.client.request("cron.add",o),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await Tn(e),await Ut(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function nd(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await Tn(e),await Ut(e)}catch(i){e.cronError=String(i)}finally{e.cronBusy=!1}}}async function id(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await zo(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function sd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await Tn(e),await Ut(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function zo(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const Ho={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:Z,n:dn,Gx:xa,Gy:Aa,a:ti,d:ni,h:ad}=Ho,ze=32,rs=64,od=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},q=(e="")=>{const t=new Error(e);throw od(t,q),t},ld=e=>typeof e=="bigint",rd=e=>typeof e=="string",cd=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",Ie=(e,t,n="")=>{const i=cd(e),s=e?.length,a=t!==void 0;if(!i||a&&s!==t){const o=n&&`"${n}" `,r=a?` of length ${t}`:"",c=i?`length=${s}`:`type=${typeof e}`;q(o+"expected Uint8Array"+r+", got "+c)}return e},En=e=>new Uint8Array(e),jo=e=>Uint8Array.from(e),qo=(e,t)=>e.toString(16).padStart(t,"0"),Go=e=>Array.from(Ie(e)).map(t=>qo(t,2)).join(""),xe={_0:48,_9:57,A:65,F:70,a:97,f:102},ka=e=>{if(e>=xe._0&&e<=xe._9)return e-xe._0;if(e>=xe.A&&e<=xe.F)return e-(xe.A-10);if(e>=xe.a&&e<=xe.f)return e-(xe.a-10)},Vo=e=>{const t="hex invalid";if(!rd(e))return q(t);const n=e.length,i=n/2;if(n%2)return q(t);const s=En(i);for(let a=0,o=0;a<i;a++,o+=2){const r=ka(e.charCodeAt(o)),c=ka(e.charCodeAt(o+1));if(r===void 0||c===void 0)return q(t);s[a]=r*16+c}return s},Wo=()=>globalThis?.crypto,dd=()=>Wo()?.subtle??q("crypto.subtle must be defined, consider polyfill"),Ot=(...e)=>{const t=En(e.reduce((i,s)=>i+Ie(s).length,0));let n=0;return e.forEach(i=>{t.set(i,n),n+=i.length}),t},ud=(e=ze)=>Wo().getRandomValues(En(e)),hn=BigInt,Ne=(e,t,n,i="bad number: out of range")=>ld(e)&&t<=e&&e<n?e:q(i),E=(e,t=Z)=>{const n=e%t;return n>=0n?n:t+n},Qo=e=>E(e,dn),fd=(e,t)=>{(e===0n||t<=0n)&&q("no inverse n="+e+" mod="+t);let n=E(e,t),i=t,s=0n,a=1n;for(;n!==0n;){const o=i/n,r=i%n,c=s-a*o;i=n,n=r,s=a,a=c}return i===1n?E(s,t):q("no inverse")},pd=e=>{const t=Xo[e];return typeof t!="function"&&q("hashes."+e+" not set"),t},ii=e=>e instanceof se?e:q("Point expected"),_i=2n**256n;class se{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,i,s){const a=_i;this.X=Ne(t,0n,a),this.Y=Ne(n,0n,a),this.Z=Ne(i,1n,a),this.T=Ne(s,0n,a),Object.freeze(this)}static CURVE(){return Ho}static fromAffine(t){return new se(t.x,t.y,1n,E(t.x*t.y))}static fromBytes(t,n=!1){const i=ni,s=jo(Ie(t,ze)),a=t[31];s[31]=a&-129;const o=Yo(s);Ne(o,0n,n?_i:Z);const c=E(o*o),u=E(c-1n),p=E(i*c+1n);let{isValid:f,value:m}=hd(u,p);f||q("bad point: y not sqrt");const v=(m&1n)===1n,d=(a&128)!==0;return!n&&m===0n&&d&&q("bad point: x==0, isLastByteOdd"),d!==v&&(m=E(-m)),new se(m,o,1n,E(m*o))}static fromHex(t,n){return se.fromBytes(Vo(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=ti,n=ni,i=this;if(i.is0())return q("bad point: ZERO");const{X:s,Y:a,Z:o,T:r}=i,c=E(s*s),u=E(a*a),p=E(o*o),f=E(p*p),m=E(c*t),v=E(p*E(m+u)),d=E(f+E(n*E(c*u)));if(v!==d)return q("bad point: equation left != right (1)");const y=E(s*a),x=E(o*r);return y!==x?q("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:i,Z:s}=this,{X:a,Y:o,Z:r}=ii(t),c=E(n*r),u=E(a*s),p=E(i*r),f=E(o*s);return c===u&&p===f}is0(){return this.equals(nt)}negate(){return new se(E(-this.X),this.Y,this.Z,E(-this.T))}double(){const{X:t,Y:n,Z:i}=this,s=ti,a=E(t*t),o=E(n*n),r=E(2n*E(i*i)),c=E(s*a),u=t+n,p=E(E(u*u)-a-o),f=c+o,m=f-r,v=c-o,d=E(p*m),y=E(f*v),x=E(p*v),A=E(m*f);return new se(d,y,A,x)}add(t){const{X:n,Y:i,Z:s,T:a}=this,{X:o,Y:r,Z:c,T:u}=ii(t),p=ti,f=ni,m=E(n*o),v=E(i*r),d=E(a*f*u),y=E(s*c),x=E((n+i)*(o+r)-m-v),A=E(y-d),_=E(y+d),L=E(v-p*m),k=E(x*A),C=E(_*L),T=E(x*L),N=E(A*_);return new se(k,C,N,T)}subtract(t){return this.add(ii(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return nt;if(Ne(t,1n,dn),t===1n)return this;if(this.equals(He))return _d(t).p;let i=nt,s=He;for(let a=this;t>0n;a=a.double(),t>>=1n)t&1n?i=i.add(a):n&&(s=s.add(a));return i}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:i}=this;if(this.equals(nt))return{x:0n,y:1n};const s=fd(i,Z);E(i*s)!==1n&&q("invalid inverse");const a=E(t*s),o=E(n*s);return{x:a,y:o}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),i=Zo(n);return i[31]|=t&1n?128:0,i}toHex(){return Go(this.toBytes())}clearCofactor(){return this.multiply(hn(ad),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(dn/2n,!1).double();return dn%2n&&(t=t.add(this)),t.is0()}}const He=new se(xa,Aa,1n,E(xa*Aa)),nt=new se(0n,1n,1n,0n);se.BASE=He;se.ZERO=nt;const Zo=e=>Vo(qo(Ne(e,0n,_i),rs)).reverse(),Yo=e=>hn("0x"+Go(jo(Ie(e)).reverse())),ge=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=Z;return n},gd=e=>{const n=e*e%Z*e%Z,i=ge(n,2n)*n%Z,s=ge(i,1n)*e%Z,a=ge(s,5n)*s%Z,o=ge(a,10n)*a%Z,r=ge(o,20n)*o%Z,c=ge(r,40n)*r%Z,u=ge(c,80n)*c%Z,p=ge(u,80n)*c%Z,f=ge(p,10n)*a%Z;return{pow_p_5_8:ge(f,2n)*e%Z,b2:n}},Sa=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,hd=(e,t)=>{const n=E(t*t*t),i=E(n*n*t),s=gd(e*i).pow_p_5_8;let a=E(e*n*s);const o=E(t*a*a),r=a,c=E(a*Sa),u=o===e,p=o===E(-e),f=o===E(-e*Sa);return u&&(a=r),(p||f)&&(a=c),(E(a)&1n)===1n&&(a=E(-a)),{isValid:u||p,value:a}},Ci=e=>Qo(Yo(e)),cs=(...e)=>Xo.sha512Async(Ot(...e)),vd=(...e)=>pd("sha512")(Ot(...e)),Jo=e=>{const t=e.slice(0,ze);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(ze,rs),i=Ci(t),s=He.multiply(i),a=s.toBytes();return{head:t,prefix:n,scalar:i,point:s,pointBytes:a}},ds=e=>cs(Ie(e,ze)).then(Jo),md=e=>Jo(vd(Ie(e,ze))),yd=e=>ds(e).then(t=>t.pointBytes),bd=e=>cs(e.hashable).then(e.finish),$d=(e,t,n)=>{const{pointBytes:i,scalar:s}=e,a=Ci(t),o=He.multiply(a).toBytes();return{hashable:Ot(o,i,n),finish:u=>{const p=Qo(a+Ci(u)*s);return Ie(Ot(o,Zo(p)),rs)}}},wd=async(e,t)=>{const n=Ie(e),i=await ds(t),s=await cs(i.prefix,n);return bd($d(i,s,n))},Xo={sha512Async:async e=>{const t=dd(),n=Ot(e);return En(await t.digest("SHA-512",n.buffer))},sha512:void 0},xd=(e=ud(ze))=>e,Ad={getExtendedPublicKeyAsync:ds,getExtendedPublicKey:md,randomSecretKey:xd},vn=8,kd=256,el=Math.ceil(kd/vn)+1,Ti=2**(vn-1),Sd=()=>{const e=[];let t=He,n=t;for(let i=0;i<el;i++){n=t,e.push(n);for(let s=1;s<Ti;s++)n=n.add(t),e.push(n);t=n.double()}return e};let _a;const Ca=(e,t)=>{const n=t.negate();return e?n:t},_d=e=>{const t=_a||(_a=Sd());let n=nt,i=He;const s=2**vn,a=s,o=hn(s-1),r=hn(vn);for(let c=0;c<el;c++){let u=Number(e&o);e>>=r,u>Ti&&(u-=a,e+=1n);const p=c*Ti,f=p,m=p+Math.abs(u)-1,v=c%2!==0,d=u<0;u===0?i=i.add(Ca(v,t[f])):n=n.add(Ca(d,t[m]))}return e!==0n&&q("invalid wnaf"),{p:n,f:i}},si="clawdbot-device-identity-v1";function Ei(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function tl(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),i=atob(n),s=new Uint8Array(i.length);for(let a=0;a<i.length;a+=1)s[a]=i.charCodeAt(a);return s}function Cd(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function nl(e){const t=await crypto.subtle.digest("SHA-256",e);return Cd(new Uint8Array(t))}async function Td(){const e=Ad.randomSecretKey(),t=await yd(e);return{deviceId:await nl(t),publicKey:Ei(t),privateKey:Ei(e)}}async function us(){try{const n=localStorage.getItem(si);if(n){const i=JSON.parse(n);if(i?.version===1&&typeof i.deviceId=="string"&&typeof i.publicKey=="string"&&typeof i.privateKey=="string"){const s=await nl(tl(i.publicKey));if(s!==i.deviceId){const a={...i,deviceId:s};return localStorage.setItem(si,JSON.stringify(a)),{deviceId:s,publicKey:i.publicKey,privateKey:i.privateKey}}return{deviceId:i.deviceId,publicKey:i.publicKey,privateKey:i.privateKey}}}}catch{}const e=await Td(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(si,JSON.stringify(t)),e}async function Ed(e,t){const n=tl(e),i=new TextEncoder().encode(t),s=await wd(i,n);return Ei(s)}const il="clawdbot.device.auth.v1";function fs(e){return e.trim()}function Id(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const i=n.trim();i&&t.add(i)}return[...t].sort()}function ps(){try{const e=window.localStorage.getItem(il);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function sl(e){try{window.localStorage.setItem(il,JSON.stringify(e))}catch{}}function Ld(e){const t=ps();if(!t||t.deviceId!==e.deviceId)return null;const n=fs(e.role),i=t.tokens[n];return!i||typeof i.token!="string"?null:i}function al(e){const t=fs(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},i=ps();i&&i.deviceId===e.deviceId&&(n.tokens={...i.tokens});const s={token:e.token,role:t,scopes:Id(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=s,sl(n),s}function ol(e){const t=ps();if(!t||t.deviceId!==e.deviceId)return;const n=fs(e.role);if(!t.tokens[n])return;const i={...t,tokens:{...t.tokens}};delete i.tokens[n],sl(i)}async function Le(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Md(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await Le(e)}catch(n){e.devicesError=String(n)}}async function Rd(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await Le(e)}catch(i){e.devicesError=String(i)}}async function Pd(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const i=await us(),s=n.role??t.role;(n.deviceId===i.deviceId||t.deviceId===i.deviceId)&&al({deviceId:i.deviceId,role:s,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await Le(e)}catch(n){e.devicesError=String(n)}}async function Fd(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const i=await us();t.deviceId===i.deviceId&&ol({deviceId:i.deviceId,role:t.role}),await Le(e)}catch(i){e.devicesError=String(i)}}function Od(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Nd(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function gs(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Od(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const i=await e.client.request(n.method,n.params);Dd(e,i)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function Dd(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Ke(t.file??{}))}async function Bd(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const i=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},s=Nd(t,{file:i,baseHash:n});if(!s){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(s.method,s.params),e.execApprovalsDirty=!1,await gs(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function Ud(e,t,n){const i=Ke(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Io(i,t,n),e.execApprovalsForm=i,e.execApprovalsDirty=!0}function Kd(e,t){const n=Ke(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Lo(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function hs(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}function ot(e,t,n){if(!t.trim())return;const i={...e.skillMessages};n?i[t]=n:delete i[t],e.skillMessages=i}function In(e){return e instanceof Error?e.message:String(e)}async function Kt(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=In(n)}finally{e.skillsLoading=!1}}}function zd(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function Hd(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await Kt(e),ot(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(i){const s=In(i);e.skillsError=s,ot(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function jd(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await Kt(e),ot(e,t,{kind:"success",message:"API key saved"})}catch(n){const i=In(n);e.skillsError=i,ot(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function qd(e,t,n,i){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const s=await e.client.request("skills.install",{name:n,installId:i,timeoutMs:12e4});await Kt(e),ot(e,t,{kind:"success",message:s?.message??"Installed"})}catch(s){const a=In(s);e.skillsError=a,ot(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}const Gd=[{label:"对话",tabs:["chat"]},{label:"控制",tabs:["overview","channels","instances","sessions","usage","cron"]},{label:"代理",tabs:["agents","skills","nodes"]},{label:"设置",tabs:["config","debug","logs"]}],ll={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},rl=new Map(Object.entries(ll).map(([e,t])=>[t,e]));function zt(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function Nt(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function vs(e,t=""){const n=zt(t),i=ll[e];return n?`${n}${i}`:i}function cl(e,t=""){const n=zt(t);let i=e||"/";n&&(i===n?i="/":i.startsWith(`${n}/`)&&(i=i.slice(n.length)));let s=Nt(i).toLowerCase();return s.endsWith("/index.html")&&(s="/"),s==="/"?"chat":rl.get(s)??null}function Vd(e){let t=Nt(e);if(t.endsWith("/index.html")&&(t=Nt(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let i=0;i<n.length;i++){const s=`/${n.slice(i).join("/")}`.toLowerCase();if(rl.has(s)){const a=n.slice(0,i);return a.length?`/${a.join("/")}`:""}}return`/${n.join("/")}`}function Wd(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function Ii(e){switch(e){case"agents":return"代理";case"overview":return"概览";case"channels":return"通道";case"instances":return"实例";case"sessions":return"会话";case"usage":return"用量";case"cron":return"定时任务";case"skills":return"技能";case"nodes":return"节点";case"chat":return"对话";case"config":return"配置";case"debug":return"调试";case"logs":return"日志";default:return"控制"}}function Qd(e){switch(e){case"agents":return"管理代理工作区、工具和身份。";case"overview":return"网关状态、入口和快速健康检查。";case"channels":return"管理通道和设置。";case"instances":return"来自已连接客户端和节点的存在信标。";case"sessions":return"查看活跃会话并调整每会话默认设置。";case"usage":return"";case"cron":return"安排唤醒和定期代理运行。";case"skills":return"管理技能可用性和 API 密钥注入。";case"nodes":return"配对设备、功能和命令暴露。";case"chat":return"网关直连对话会话，用于快速操作。";case"config":return"安全编辑 ~/.openclaw/openclaw.json。";case"debug":return"网关快照、事件和手动 RPC 调用。";case"logs":return"实时追踪网关文件日志。";default:return""}}const dl="clawdbot.control.settings.v1";function Zd(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,sendOnEnter:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(dl);if(!n)return t;const i=JSON.parse(n);return{gatewayUrl:typeof i.gatewayUrl=="string"&&i.gatewayUrl.trim()?i.gatewayUrl.trim():t.gatewayUrl,token:typeof i.token=="string"?i.token:t.token,sessionKey:typeof i.sessionKey=="string"&&i.sessionKey.trim()?i.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof i.lastActiveSessionKey=="string"&&i.lastActiveSessionKey.trim()?i.lastActiveSessionKey.trim():typeof i.sessionKey=="string"&&i.sessionKey.trim()||t.lastActiveSessionKey,theme:i.theme==="light"||i.theme==="dark"||i.theme==="system"?i.theme:t.theme,chatFocusMode:typeof i.chatFocusMode=="boolean"?i.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof i.chatShowThinking=="boolean"?i.chatShowThinking:t.chatShowThinking,sendOnEnter:typeof i.sendOnEnter=="boolean"?i.sendOnEnter:t.sendOnEnter,splitRatio:typeof i.splitRatio=="number"&&i.splitRatio>=.4&&i.splitRatio<=.7?i.splitRatio:t.splitRatio,navCollapsed:typeof i.navCollapsed=="boolean"?i.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof i.navGroupsCollapsed=="object"&&i.navGroupsCollapsed!==null?i.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function Yd(e){localStorage.setItem(dl,JSON.stringify(e))}const Xt=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Jd=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,en=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},Xd=({nextTheme:e,applyTheme:t,context:n,currentTheme:i})=>{if(i===e)return;const s=globalThis.document??null;if(!s){t();return}const a=s.documentElement,o=s,r=Jd();if(!!o.startViewTransition&&!r){let u=.5,p=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")u=Xt(n.pointerClientX/window.innerWidth),p=Xt(n.pointerClientY/window.innerHeight);else if(n?.element){const f=n.element.getBoundingClientRect();f.width>0&&f.height>0&&typeof window<"u"&&(u=Xt((f.left+f.width/2)/window.innerWidth),p=Xt((f.top+f.height/2)/window.innerHeight))}a.style.setProperty("--theme-switch-x",`${u*100}%`),a.style.setProperty("--theme-switch-y",`${p*100}%`),a.classList.add("theme-transition");try{const f=o.startViewTransition?.(()=>{t()});f?.finished?f.finished.finally(()=>en(a)):en(a)}catch{en(a),t()}return}t(),en(a)};function eu(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ms(e){return e==="system"?eu():e}function je(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Yd(n),t.theme!==e.theme&&(e.theme=t.theme,Ln(e,ms(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function ul(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&je(e,{...e.settings,lastActiveSessionKey:n})}function tu(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),i=t.get("password"),s=t.get("session"),a=t.get("gatewayUrl");let o=!1;if(n!=null&&(t.delete("token"),o=!0),i!=null){const c=i.trim();c&&(e.password=c),t.delete("password"),o=!0}if(s!=null){const c=s.trim();c&&(e.sessionKey=c,je(e,{...e.settings,sessionKey:c,lastActiveSessionKey:c}))}if(a!=null){const c=a.trim();c&&c!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=c),t.delete("gatewayUrl"),o=!0}if(!o)return;const r=new URL(window.location.href);r.search=t.toString(),window.history.replaceState({},"",r.toString())}function nu(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?is(e):ss(e),t==="debug"?as(e):os(e),ys(e),pl(e,t,!1)}function iu(e,t,n){Xd({nextTheme:t,applyTheme:()=>{e.theme=t,je(e,{...e.settings,theme:t}),Ln(e,ms(t))},context:n,currentTheme:e.theme})}async function ys(e){if(e.tab==="overview"&&await gl(e),e.tab==="channels"&&await uu(e),e.tab==="instances"&&await hs(e),e.tab==="sessions"&&await rt(e),e.tab==="cron"&&await mn(e),e.tab==="skills"&&await Kt(e),e.tab==="agents"){await ls(e),await de(e);const t=e.agentsList?.agents?.map(i=>i.id)??[];t.length>0&&Ko(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(Uo(e,n),e.agentsPanel==="skills"&&cn(e,n),e.agentsPanel==="channels"&&ne(e,!1),e.agentsPanel==="cron"&&mn(e))}e.tab==="nodes"&&(await _n(e),await Le(e),await de(e),await gs(e)),e.tab==="chat"&&(await $l(e),Bt(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await Mo(e),await de(e)),e.tab==="debug"&&(await Cn(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await ns(e,{reset:!0}),Bo(e,!0))}function su(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?zt(e):Vd(window.location.pathname)}function au(e){e.theme=e.settings.theme??"system",Ln(e,ms(e.theme))}function Ln(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function ou(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&Ln(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function lu(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function ru(e,t){if(typeof window>"u")return;const n=cl(window.location.pathname,e.basePath)??"chat";fl(e,n),pl(e,n,t)}function cu(e){if(typeof window>"u")return;const t=cl(window.location.pathname,e.basePath);if(!t)return;const i=new URL(window.location.href).searchParams.get("session")?.trim();i&&(e.sessionKey=i,je(e,{...e.settings,sessionKey:i,lastActiveSessionKey:i})),fl(e,t)}function fl(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?is(e):ss(e),t==="debug"?as(e):os(e),e.connected&&ys(e)}function pl(e,t,n){if(typeof window>"u")return;const i=Nt(vs(t,e.basePath)),s=Nt(window.location.pathname),a=new URL(window.location.href);t==="chat"&&e.sessionKey?a.searchParams.set("session",e.sessionKey):a.searchParams.delete("session"),s!==i&&(a.pathname=i),n?window.history.replaceState({},"",a.toString()):window.history.pushState({},"",a.toString())}function du(e,t,n){if(typeof window>"u")return;const i=new URL(window.location.href);i.searchParams.set("session",t),window.history.replaceState({},"",i.toString())}async function gl(e){await Promise.all([ne(e,!1),hs(e),rt(e),Ut(e),Cn(e)])}async function uu(e){await Promise.all([ne(e,!0),Mo(e),de(e)])}async function mn(e){await Promise.all([ne(e,!1),Ut(e),Tn(e)])}function hl(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const i=n[1]?.trim(),s=n.slice(2).join(":");return!i||!s?null:{agentId:i,rest:s}}function vl(e){return e.chatSending||!!e.chatRunId}function fu(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}async function ml(e){e.connected&&(e.chatMessage="",await Cc(e))}function pu(e,t,n){const i=t.trim(),s=!!(n&&n.length>0);!i&&!s||(e.chatQueue=[...e.chatQueue,{id:es(),text:i,createdAt:Date.now(),attachments:s?n?.map(a=>({...a})):void 0}])}async function yl(e,t,n){ts(e);const i=await _c(e,t,n?.attachments);return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&ul(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),Bt(e),i&&!e.chatRunId&&bl(e),i}async function bl(e){if(!e.connected||vl(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await yl(e,t.text,{attachments:t.attachments})||(e.chatQueue=[t,...e.chatQueue])}function gu(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function hu(e,t,n){if(!e.connected)return;const i=e.chatMessage,s=(t??e.chatMessage).trim(),a=e.chatAttachments??[],o=t==null?a:[],r=o.length>0;if(!(!s&&!r)){if(fu(s)){await ml(e);return}if(t==null&&(e.chatMessage="",e.chatAttachments=[]),vl(e)){pu(e,s,o);return}await yl(e,s,{previousDraft:t==null?i:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:r?o:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft)})}}async function $l(e){await Promise.all([Ft(e),rt(e),Li(e)]),Bt(e)}const vu=bl;function mu(e){const t=hl(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function yu(e,t){const n=zt(e),i=encodeURIComponent(t);return n?`${n}/avatar/${i}?meta=1`:`/avatar/${i}?meta=1`}async function Li(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=mu(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=yu(e.basePath,t);try{const i=await fetch(n,{method:"GET"});if(!i.ok){e.chatAvatarUrl=null;return}const s=await i.json(),a=typeof s.avatarUrl=="string"?s.avatarUrl.trim():"";e.chatAvatarUrl=a||null}catch{e.chatAvatarUrl=null}}const bu={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},$u={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"next-heartbeat",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:"",postToMainPrefix:"Cron"},wl={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"clawdbot-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"clawdbot-macos",IOS_APP:"clawdbot-ios",ANDROID_APP:"clawdbot-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"clawdbot-probe"},Ta=wl,Mi={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(wl));new Set(Object.values(Mi));function wu(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),i=e.token??"",s=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),i];return t==="v2"&&s.push(e.nonce??""),s.join("|")}const xu=4008;class Au{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.onopen=()=>this.queueConnect(),this.ws.onmessage=t=>this.handleMessage(String(t.data??"")),this.ws.onclose=t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()},this.ws.onerror=()=>{})}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],i="operator";let s=null,a=!1,o=this.opts.token;if(t){s=await us();const p=Ld({deviceId:s.deviceId,role:i})?.token;o=p??this.opts.token,a=!!(p&&this.opts.token)}const r=o||this.opts.password?{token:o,password:this.opts.password}:void 0;let c;if(t&&s){const p=Date.now(),f=this.connectNonce??void 0,m=wu({deviceId:s.deviceId,clientId:this.opts.clientName??Ta.CONTROL_UI,clientMode:this.opts.mode??Mi.WEBCHAT,role:i,scopes:n,signedAtMs:p,token:o??null,nonce:f}),v=await Ed(s.privateKey,m);c={id:s.deviceId,publicKey:s.publicKey,signature:v,signedAt:p,nonce:f}}const u={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??Ta.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??Mi.WEBCHAT,instanceId:this.opts.instanceId},role:i,scopes:n,device:c,caps:[],auth:r,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",u).then(p=>{p?.auth?.deviceToken&&s&&al({deviceId:s.deviceId,role:p.auth.role??i,token:p.auth.deviceToken,scopes:p.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(p)}).catch(()=>{a&&s&&ol({deviceId:s.deviceId,role:i}),this.ws?.close(xu,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const i=n;if(i.type==="event"){const s=n;if(s.event==="connect.challenge"){const o=s.payload,r=o&&typeof o.nonce=="string"?o.nonce:null;r&&(this.connectNonce=r,this.sendConnect());return}const a=typeof s.seq=="number"?s.seq:null;a!==null&&(this.lastSeq!==null&&a>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:a}),this.lastSeq=a);try{this.opts.onEvent?.(s)}catch(o){console.error("[gateway] event handler error:",o)}return}if(i.type==="res"){const s=n,a=this.pending.get(s.id);if(!a)return;this.pending.delete(s.id),s.ok?a.resolve(s.payload):a.reject(new Error(s.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const i=es(),s={type:"req",id:i,method:t,params:n},a=new Promise((o,r)=>{this.pending.set(i,{resolve:c=>o(c),reject:r})});return this.ws.send(JSON.stringify(s)),a}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Ri(e){return typeof e=="object"&&e!==null}function ku(e){if(!Ri(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!Ri(n))return null;const i=typeof n.command=="string"?n.command.trim():"";if(!i)return null;const s=typeof e.createdAtMs=="number"?e.createdAtMs:0,a=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!s||!a?null:{id:t,request:{command:i,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:s,expiresAtMs:a}}function Su(e){if(!Ri(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function xl(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function _u(e,t){const n=xl(e).filter(i=>i.id!==t.id);return n.push(t),n}function Ea(e,t){return xl(e).filter(n=>n.id!==t)}const Cu=50,Tu=200,Eu="Assistant";function Ia(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function Pi(e){const t=Ia(e?.name,Cu)??Eu,n=Ia(e?.avatar??void 0,Tu)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function Iu(){return Pi(typeof window>"u"?{}:{name:window.__CLAWDBOT_ASSISTANT_NAME__,avatar:window.__CLAWDBOT_ASSISTANT_AVATAR__})}async function Al(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),i=n?{sessionKey:n}:{};try{const s=await e.client.request("agent.identity.get",i);if(!s)return;const a=Pi(s);e.assistantName=a.name,e.assistantAvatar=a.avatar,e.assistantAgentId=a.agentId??null}catch{}}function ai(e,t){const n=(e??"").trim(),i=t.mainSessionKey?.trim();if(!i)return n;if(!n)return i;const s=t.mainKey?.trim()||"main",a=t.defaultAgentId?.trim();return n==="main"||n===s||a&&(n===`agent:${a}:main`||n===`agent:${a}:${s}`)?i:n}function Lu(e,t){if(!t?.mainSessionKey)return;const n=ai(e.sessionKey,t),i=ai(e.settings.sessionKey,t),s=ai(e.settings.lastActiveSessionKey,t),a=n||i||e.sessionKey,o={...e.settings,sessionKey:i||a,lastActiveSessionKey:s||a},r=o.sessionKey!==e.settings.sessionKey||o.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),r&&je(e,o)}function kl(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new Au({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"clawdbot-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,Pu(e,t),Al(e),ls(e),_n(e,{quiet:!0}),Le(e,{quiet:!0}),ys(e)},onClose:({code:t,reason:n})=>{e.connected=!1,t!==1012&&(e.lastError=`disconnected (${t}): ${n||"no reason"}`)},onEvent:t=>Mu(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function Mu(e,t){try{Ru(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Ru(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;Uc(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&ul(e,n.sessionKey);const i=Tc(e,n);(i==="final"||i==="error"||i==="aborted")&&(ts(e),vu(e)),i==="final"&&Ft(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&mn(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&Le(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=ku(t.payload);if(n){e.execApprovalQueue=_u(e.execApprovalQueue,n),e.execApprovalError=null;const i=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=Ea(e.execApprovalQueue,n.id)},i)}return}if(t.event==="exec.approval.resolved"){const n=Su(t.payload);n&&(e.execApprovalQueue=Ea(e.execApprovalQueue,n.id))}}function Pu(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&Lu(e,n.sessionDefaults)}function Fu(e){e.basePath=su(),ru(e,!0),au(e),ou(e),window.addEventListener("popstate",e.popStateHandler),tu(e),kl(e),Yc(e),e.tab==="logs"&&is(e),e.tab==="debug"&&as(e)}function Ou(e){jc(e)}function Nu(e){window.removeEventListener("popstate",e.popStateHandler),Jc(e),ss(e),os(e),lu(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function Du(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),i=t.has("chatLoading")&&t.get("chatLoading")===!0&&e.chatLoading===!1;Bt(e,n||i||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&Bo(e,t.has("tab")||t.has("logsAutoFollow"))}const bs={CHILD:2},$s=e=>(...t)=>({_$litDirective$:e,values:t});let ws=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:Bu}=Ur,La=e=>e,Uu=e=>e.strings===void 0,Ma=()=>document.createComment(""),vt=(e,t,n)=>{const i=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=i.insertBefore(Ma(),s),o=i.insertBefore(Ma(),s);n=new Bu(a,o,e,e.options)}else{const a=n._$AB.nextSibling,o=n._$AM,r=o!==e;if(r){let c;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(c=e._$AU)!==o._$AU&&n._$AP(c)}if(a!==s||r){let c=n._$AA;for(;c!==a;){const u=La(c).nextSibling;La(i).insertBefore(c,s),c=u}}}return n},Fe=(e,t,n=e)=>(e._$AI(t,n),e),Ku={},zu=(e,t=Ku)=>e._$AH=t,Hu=e=>e._$AH,oi=e=>{e._$AR(),e._$AA.remove()};const Ra=(e,t,n)=>{const i=new Map;for(let s=t;s<=n;s++)i.set(e[s],s);return i},Sl=$s(class extends ws{constructor(e){if(super(e),e.type!==bs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const s=[],a=[];let o=0;for(const r of e)s[o]=i?i(r,o):o,a[o]=n(r,o),o++;return{values:a,keys:s}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const s=Hu(e),{values:a,keys:o}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=o,a;const r=this.ut??=[],c=[];let u,p,f=0,m=s.length-1,v=0,d=a.length-1;for(;f<=m&&v<=d;)if(s[f]===null)f++;else if(s[m]===null)m--;else if(r[f]===o[v])c[v]=Fe(s[f],a[v]),f++,v++;else if(r[m]===o[d])c[d]=Fe(s[m],a[d]),m--,d--;else if(r[f]===o[d])c[d]=Fe(s[f],a[d]),vt(e,c[d+1],s[f]),f++,d--;else if(r[m]===o[v])c[v]=Fe(s[m],a[v]),vt(e,s[f],s[m]),m--,v++;else if(u===void 0&&(u=Ra(o,v,d),p=Ra(r,f,m)),u.has(r[f]))if(u.has(r[m])){const y=p.get(o[v]),x=y!==void 0?s[y]:null;if(x===null){const A=vt(e,s[f]);Fe(A,a[v]),c[v]=A}else c[v]=Fe(x,a[v]),vt(e,s[f],x),s[y]=null;v++}else oi(s[m]),m--;else oi(s[f]),f++;for(;v<=d;){const y=vt(e,c[d+1]);Fe(y,a[v]),c[v++]=y}for(;f<=m;){const y=s[f++];y!==null&&oi(y)}return this.ut=o,zu(e,c),Ee}}),W={messageSquare:l`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:l`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:l`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:l`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:l`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:l`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:l`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:l`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:l`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:l`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:l`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:l`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:l`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:l`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:l`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:l`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:l`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:l`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:l`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:l`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:l`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:l`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:l`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:l`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:l`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:l`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:l`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:l`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:l`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:l`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:l`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `};function ju(e,t){const n=vs(t,e.basePath);return l`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${i=>{i.defaultPrevented||i.button!==0||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||(i.preventDefault(),e.setTab(t))}}
      title=${Ii(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${W[Wd(t)]}</span>
      <span class="nav-item__text">${Ii(t)}</span>
    </a>
  `}function qu(e){const t=Gu(e.hello,e.sessionsResult),n=Vu(e.sessionKey,e.sessionsResult,t),i=e.onboarding,s=e.onboarding,a=e.onboarding?!1:e.settings.chatShowThinking,o=e.onboarding?!0:e.settings.chatFocusMode,r=l`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,c=l`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return l`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${u=>{const p=u.target.value;e.sessionKey=p,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:p,lastActiveSessionKey:p}),e.loadAssistantIdentity(),du(e,p),Ft(e)}}
        >
          ${Sl(n,u=>u.key,u=>l`<option value=${u.key}>
                ${u.displayName??u.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),$l(e)}}
        title="刷新对话数据"
      >
        ${r}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${a?"active":""}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${a}
        title=${i?"引导期间已禁用":"切换助手思考/工作输出"}
      >
        ${W.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${o?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${o}
        title=${s?"引导期间已禁用":"切换专注模式（隐藏侧栏 + 页面标题）"}
      >
        ${c}
      </button>
    </div>
  `}function Gu(e,t){const n=e?.snapshot,i=n?.sessionDefaults?.mainSessionKey?.trim();if(i)return i;const s=n?.sessionDefaults?.mainKey?.trim();return s||(t?.sessions?.some(a=>a.key==="main")?"main":null)}function li(e,t){const n=t?.label?.trim();if(n)return`${n} (${e})`;const i=t?.displayName?.trim();return i||e}function Vu(e,t,n){const i=new Set,s=[],a=n&&t?.sessions?.find(r=>r.key===n),o=t?.sessions?.find(r=>r.key===e);if(n&&(i.add(n),s.push({key:n,displayName:li(n,a||void 0)})),i.has(e)||(i.add(e),s.push({key:e,displayName:li(e,o)})),t?.sessions)for(const r of t.sessions)i.has(r.key)||(i.add(r.key),s.push({key:r.key,displayName:li(r.key,r)}));return s}const Wu=["system","light","dark"];function Qu(e){const t=Math.max(0,Wu.indexOf(e.theme)),n=i=>s=>{const o={element:s.currentTarget};(s.clientX||s.clientY)&&(o.pointerClientX=s.clientX,o.pointerClientY=s.clientY),e.setTheme(i,o)};return l`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="系统主题"
          title="系统"
        >
          ${Ju()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="浅色主题"
          title="浅色"
        >
          ${Zu()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="深色主题"
          title="深色"
        >
          ${Yu()}
        </button>
      </div>
    </div>
  `}function Zu(){return l`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Yu(){return l`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Ju(){return l`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function _l(e,t){if(!e)return e;const i=e.files.some(s=>s.name===t.name)?e.files.map(s=>s.name===t.name?t:s):[...e.files,t];return{...e,files:i}}async function ri(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(i=>i.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function Pa(e,t,n){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.get",{agentId:t,name:n});if(i?.file){const s=i.file.content??"";e.agentFilesList=_l(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:s},Object.hasOwn(e.agentFileDrafts,n)||(e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}}catch(i){e.agentFilesError=String(i)}finally{e.agentFilesLoading=!1}}}async function Xu(e,t,n,i){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const s=await e.client.request("agents.files.set",{agentId:t,name:n,content:i});s?.file&&(e.agentFilesList=_l(e.agentFilesList,s.file),e.agentFileContents={...e.agentFileContents,[n]:i},e.agentFileDrafts={...e.agentFileDrafts,[n]:i})}catch(s){e.agentFilesError=String(s)}finally{e.agentFileSaving=!1}}}const ef={bash:"exec","apply-patch":"apply_patch"},tf={"group:memory":["memory_search","memory_get"],"group:web":["web_search","web_fetch"],"group:fs":["read","write","edit","apply_patch"],"group:runtime":["exec","process"],"group:sessions":["sessions_list","sessions_history","sessions_send","sessions_spawn","session_status"],"group:ui":["browser","canvas"],"group:automation":["cron","gateway"],"group:messaging":["message"],"group:nodes":["nodes"],"group:clawdbot":["browser","canvas","nodes","cron","message","gateway","agents_list","sessions_list","sessions_history","sessions_send","sessions_spawn","session_status","memory_search","memory_get","web_search","web_fetch","image"]},nf={minimal:{allow:["session_status"]},coding:{allow:["group:fs","group:runtime","group:sessions","group:memory","image"]},messaging:{allow:["group:messaging","sessions_list","sessions_history","sessions_send","session_status"]},full:{}};function ve(e){const t=e.trim().toLowerCase();return ef[t]??t}function sf(e){return e?e.map(ve).filter(Boolean):[]}function af(e){const t=sf(e),n=[];for(const i of t){const s=tf[i];if(s){n.push(...s);continue}n.push(i)}return Array.from(new Set(n))}function of(e){if(!e)return;const t=nf[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function lf(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",i=e.mode??"",s=e.version??"";return`${t} ${n} ${i} ${s}`.trim()}function rf(e){const t=e.ts??null;return t?O(t):"n/a"}function xs(e){return e?`${Pt(e)} (${O(e)})`:"n/a"}function cf(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function df(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function Cl(e){const t=e.state??{},n=t.nextRunAtMs?Pt(t.nextRunAtMs):"n/a",i=t.lastRunAtMs?Pt(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${i}`}function Tl(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${Pt(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${Oo(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function El(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,i=e.delivery;if(i&&i.mode!=="none"){const s=i.channel||i.to?` (${i.channel??"last"}${i.to?` -> ${i.to}`:""})`:"";return`${n} · ${i.mode}${s}`}return n}const Fa=[{id:"fs",label:"文件",tools:[{id:"read",label:"read",description:"读取文件内容"},{id:"write",label:"write",description:"创建或覆盖文件"},{id:"edit",label:"edit",description:"精确编辑"},{id:"apply_patch",label:"apply_patch",description:"补丁文件 (OpenAI)"}]},{id:"runtime",label:"运行时",tools:[{id:"exec",label:"exec",description:"执行 Shell 命令"},{id:"process",label:"process",description:"管理后台进程"}]},{id:"web",label:"网络",tools:[{id:"web_search",label:"web_search",description:"搜索网络"},{id:"web_fetch",label:"web_fetch",description:"获取网络内容"}]},{id:"memory",label:"记忆",tools:[{id:"memory_search",label:"memory_search",description:"语义搜索"},{id:"memory_get",label:"memory_get",description:"读取记忆文件"}]},{id:"sessions",label:"会话",tools:[{id:"sessions_list",label:"sessions_list",description:"列出会话"},{id:"sessions_history",label:"sessions_history",description:"会话历史"},{id:"sessions_send",label:"sessions_send",description:"发送到会话"},{id:"sessions_spawn",label:"sessions_spawn",description:"派生子代理"},{id:"session_status",label:"session_status",description:"会话状态"}]},{id:"ui",label:"界面",tools:[{id:"browser",label:"browser",description:"控制网页浏览器"},{id:"canvas",label:"canvas",description:"控制画布"}]},{id:"messaging",label:"消息",tools:[{id:"message",label:"message",description:"发送消息"}]},{id:"automation",label:"自动化",tools:[{id:"cron",label:"cron",description:"定时任务"},{id:"gateway",label:"gateway",description:"网关控制"}]},{id:"nodes",label:"节点",tools:[{id:"nodes",label:"nodes",description:"节点 + 设备"}]},{id:"agents",label:"代理",tools:[{id:"agents_list",label:"agents_list",description:"列出代理"}]},{id:"media",label:"媒体",tools:[{id:"image",label:"image",description:"图像理解"}]}],uf=[{id:"minimal",label:"最小"},{id:"coding",label:"编码"},{id:"messaging",label:"消息"},{id:"full",label:"完整"}];function Fi(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function tn(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let i=0;i<t.length;i+=1)if(t.charCodeAt(i)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function Mn(e,t){const n=t?.emoji?.trim();if(n&&tn(n))return n;const i=e.identity?.emoji?.trim();if(i&&tn(i))return i;const s=t?.avatar?.trim();if(s&&tn(s))return s;const a=e.identity?.avatar?.trim();return a&&tn(a)?a:""}function Il(e,t){return t&&e===t?"默认":null}function ff(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,i=0;for(;n>=1024&&i<t.length-1;)n/=1024,i+=1;return`${n.toFixed(n<10?1:0)} ${t[i]}`}function Rn(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(a=>a?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function Ll(e,t,n,i,s){const a=Rn(t,e.id),r=(n&&n.agentId===e.id?n.workspace:null)||a.entry?.workspace||a.defaults?.workspace||"default",c=a.entry?.model?Ct(a.entry?.model):Ct(a.defaults?.model),u=s?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||a.entry?.name||e.id,p=Mn(e,s)||"-",f=Array.isArray(a.entry?.skills)?a.entry?.skills:null,m=f?.length??null;return{workspace:r,model:c,identityName:u,identityEmoji:p,skillsLabel:f?`已选择 ${m} 个`:"全部技能",isDefault:!!(i&&e.id===i)}}function Ct(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const i=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return i>0?`${n} (+${i} 备选)`:n}}return"-"}function Oa(e){const t=e.match(/^(.+) \(\+\d+ 备选\)$/);return t?t[1]:e}function Na(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function pf(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(i=>typeof i=="string"):null}return null}function gf(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function hf(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const i=[];for(const[s,a]of Object.entries(n)){const o=s.trim();if(!o)continue;const r=a&&typeof a=="object"&&"alias"in a&&typeof a.alias=="string"?a.alias?.trim():void 0,c=r&&r!==o?`${r} (${o})`:o;i.push({value:o,label:c})}return i}function vf(e,t){const n=hf(e),i=t?n.some(s=>s.value===t):!1;return t&&!i&&n.unshift({value:t,label:`当前 (${t})`}),n.length===0?l`
      <option value="" disabled>未配置模型</option>
    `:n.map(s=>l`<option value=${s.value}>${s.label}</option>`)}function mf(e){const t=ve(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function Oi(e){return Array.isArray(e)?af(e).map(mf).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function Tt(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function yf(e,t){if(!t)return!0;const n=ve(e),i=Oi(t.deny);if(Tt(n,i))return!1;const s=Oi(t.allow);return!!(s.length===0||Tt(n,s)||n==="apply_patch"&&Tt("exec",s))}function Da(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=ve(e),i=Oi(t);return!!(Tt(n,i)||n==="apply_patch"&&Tt("exec",i))}function bf(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,i=e.selectedAgentId??n??t[0]?.id??null,s=i?t.find(a=>a.id===i)??null:null;return l`
    <div class="agents-layout">
      <section class="card agents-sidebar">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">代理</div>
            <div class="card-sub">已配置 ${t.length} 个。</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"加载中…":"刷新"}
          </button>
        </div>
        ${e.error?l`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:g}
        <div class="agent-list" style="margin-top: 12px;">
          ${t.length===0?l`
                  <div class="muted">未找到代理。</div>
                `:t.map(a=>{const o=Il(a.id,n),r=Mn(a,e.agentIdentityById[a.id]??null);return l`
                    <button
                      type="button"
                      class="agent-row ${i===a.id?"active":""}"
                      @click=${()=>e.onSelectAgent(a.id)}
                    >
                      <div class="agent-avatar">
                        ${r||Fi(a).slice(0,1)}
                      </div>
                      <div class="agent-info">
                        <div class="agent-title">${Fi(a)}</div>
                        <div class="agent-sub mono">${a.id}</div>
                      </div>
                      ${o?l`<span class="agent-pill">${o}</span>`:g}
                    </button>
                  `})}
        </div>
      </section>
      <section class="agents-main">
        ${s?l`
              ${$f(s,n,e.agentIdentityById[s.id]??null)}
              ${wf(e.activePanel,a=>e.onSelectPanel(a))}
              ${e.activePanel==="overview"?xf({agent:s,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[s.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):g}
              ${e.activePanel==="files"?Mf({agentId:s.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):g}
              ${e.activePanel==="tools"?Pf({agentId:s.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):g}
              ${e.activePanel==="skills"?Of({agentId:s.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):g}
              ${e.activePanel==="channels"?If({agent:s,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[s.id]??null,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):g}
              ${e.activePanel==="cron"?Lf({agent:s,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[s.id]??null,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):g}
            `:l`
                <div class="card">
                  <div class="card-title">选择一个代理</div>
                  <div class="card-sub">选择一个代理以查看其工作区和工具。</div>
                </div>
              `}
      </section>
    </div>
  `}function $f(e,t,n){const i=Il(e.id,t),s=Fi(e),a=e.identity?.theme?.trim()||"代理工作区和路由。",o=Mn(e,n);return l`
    <section class="card agent-header">
      <div class="agent-header-main">
        <div class="agent-avatar agent-avatar--lg">
          ${o||s.slice(0,1)}
        </div>
        <div>
          <div class="card-title">${s}</div>
          <div class="card-sub">${a}</div>
        </div>
      </div>
      <div class="agent-header-meta">
        <div class="mono">${e.id}</div>
        ${i?l`<span class="agent-pill">${i}</span>`:g}
      </div>
    </section>
  `}function wf(e,t){return l`
    <div class="agent-tabs">
      ${[{id:"overview",label:"概览"},{id:"files",label:"文件"},{id:"tools",label:"工具"},{id:"skills",label:"技能"},{id:"channels",label:"通道"},{id:"cron",label:"定时任务"}].map(i=>l`
          <button
            class="agent-tab ${e===i.id?"active":""}"
            type="button"
            @click=${()=>t(i.id)}
          >
            ${i.label}
          </button>
        `)}
    </div>
  `}function xf(e){const{agent:t,configForm:n,agentFilesList:i,agentIdentity:s,agentIdentityLoading:a,agentIdentityError:o,configLoading:r,configSaving:c,configDirty:u,onConfigReload:p,onConfigSave:f,onModelChange:m,onModelFallbacksChange:v}=e,d=Rn(n,t.id),x=(i&&i.agentId===t.id?i.workspace:null)||d.entry?.workspace||d.defaults?.workspace||"default",A=d.entry?.model?Ct(d.entry?.model):Ct(d.defaults?.model),_=Ct(d.defaults?.model),L=Na(d.entry?.model)||(A!=="-"?Oa(A):null),k=Na(d.defaults?.model)||(_!=="-"?Oa(_):null),C=L??k??null,T=pf(d.entry?.model),N=T?T.join(", "):"",ue=s?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||d.entry?.name||"-",jt=Mn(t,s)||"-",H=Array.isArray(d.entry?.skills)?d.entry?.skills:null,ct=H?.length??null,Ve=a?"加载中…":o?"不可用":"",dt=!!(e.defaultId&&t.id===e.defaultId);return l`
    <section class="card">
      <div class="card-title">概览</div>
      <div class="card-sub">工作区路径和身份元数据。</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">工作区</div>
          <div class="mono">${x}</div>
        </div>
        <div class="agent-kv">
          <div class="label">主模型</div>
          <div class="mono">${A}</div>
        </div>
        <div class="agent-kv">
          <div class="label">身份名称</div>
          <div>${ue}</div>
          ${Ve?l`<div class="agent-kv-sub muted">${Ve}</div>`:g}
        </div>
        <div class="agent-kv">
          <div class="label">默认</div>
          <div>${dt?"是":"否"}</div>
        </div>
        <div class="agent-kv">
          <div class="label">身份表情</div>
          <div>${jt}</div>
        </div>
        <div class="agent-kv">
          <div class="label">技能过滤</div>
          <div>${H?`已选择 ${ct} 个`:"全部技能"}</div>
        </div>
      </div>

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">模型选择</div>
        <div class="row" style="gap: 12px; flex-wrap: wrap;">
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>主模型</span>
            <select
              .value=${C??""}
              ?disabled=${!n||r||c}
              @change=${ut=>m(t.id,ut.target.value||null)}
            >
              <option value="">
                ${k?`继承默认 (${k})`:"继承默认"}
              </option>
              ${vf(n,C??void 0)}
            </select>
          </label>
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>备选模型（逗号分隔）</span>
            <input
              .value=${N}
              ?disabled=${!n||r||c}
              placeholder="提供商/模型, 提供商/模型"
              @input=${ut=>v(t.id,gf(ut.target.value))}
            />
          </label>
        </div>
        <div class="row" style="justify-content: flex-end; gap: 8px;">
          <button
            class="btn btn--sm"
            ?disabled=${r}
            @click=${p}
          >
            重新加载配置
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${c||!u}
            @click=${f}
          >
            ${c?"保存中…":"保存"}
          </button>
        </div>
      </div>
    </section>
  `}function Ml(e,t){return l`
    <section class="card">
      <div class="card-title">代理上下文</div>
      <div class="card-sub">${t}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">工作区</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">主模型</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">身份名称</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">身份表情</div>
          <div>${e.identityEmoji}</div>
        </div>
        <div class="agent-kv">
          <div class="label">技能过滤</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">默认</div>
          <div>${e.isDefault?"是":"否"}</div>
        </div>
      </div>
    </section>
  `}function Af(e,t){const n=e.channelMeta?.find(i=>i.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function kf(e){if(!e)return[];const t=new Set;for(const s of e.channelOrder??[])t.add(s);for(const s of e.channelMeta??[])t.add(s.id);for(const s of Object.keys(e.channelAccounts??{}))t.add(s);const n=[],i=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const s of i)t.has(s)&&(n.push(s),t.delete(s));for(const s of t)n.push(s);return n.map(s=>({id:s,label:Af(e,s),accounts:e.channelAccounts?.[s]??[]}))}const Sf=["groupPolicy","streamMode","dmPolicy"];function _f(e,t){if(!e)return null;const i=(e.channels??{})[t];if(i&&typeof i=="object")return i;const s=e[t];return s&&typeof s=="object"?s:null}function Cf(e){if(e==null)return"无";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"无"}}function Tf(e,t){const n=_f(e,t);return n?Sf.flatMap(i=>i in n?[{label:i,value:Cf(n[i])}]:[]):[]}function Ef(e){let t=0,n=0,i=0;for(const s of e){const a=s.probe&&typeof s.probe=="object"&&"ok"in s.probe?!!s.probe.ok:!1;(s.connected===!0||s.running===!0||a)&&(t+=1),s.configured&&(n+=1),s.enabled&&(i+=1)}return{total:e.length,connected:t,configured:n,enabled:i}}function If(e){const t=Ll(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=kf(e.snapshot),i=e.lastSuccess?O(e.lastSuccess):"从未";return l`
    <section class="grid grid-cols-2">
      ${Ml(t,"工作区、身份和模型配置。")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">通道</div>
            <div class="card-sub">网关级通道状态快照。</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"刷新中…":"刷新"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          上次刷新：${i}
        </div>
        ${e.error?l`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:g}
        ${e.snapshot?g:l`
                <div class="callout info" style="margin-top: 12px">加载通道以查看实时状态。</div>
              `}
        ${n.length===0?l`
                <div class="muted" style="margin-top: 16px">未找到通道。</div>
              `:l`
              <div class="list" style="margin-top: 16px;">
                ${n.map(s=>{const a=Ef(s.accounts),o=a.total?`${a.connected}/${a.total} 已连接`:"无账户",r=a.configured?`已配置 ${a.configured} 个`:"未配置",c=a.total?`已启用 ${a.enabled} 个`:"已禁用",u=Tf(e.configForm,s.id);return l`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${s.label}</div>
                        <div class="list-sub mono">${s.id}</div>
                      </div>
                      <div class="list-meta">
                        <div>${o}</div>
                        <div>${r}</div>
                        <div>${c}</div>
                        ${u.length>0?u.map(p=>l`<div>${p.label}: ${p.value}</div>`):g}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </section>
    </section>
  `}function Lf(e){const t=Ll(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=e.jobs.filter(i=>i.agentId===e.agent.id);return l`
    <section class="grid grid-cols-2">
      ${Ml(t,"工作区和调度目标。")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">调度器</div>
            <div class="card-sub">网关定时任务状态。</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"刷新中…":"刷新"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">已启用</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"是":"否":"无"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">任务</div>
            <div class="stat-value">${e.status?.jobs??"无"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">下次唤醒</div>
            <div class="stat-value">${xs(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?l`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:g}
      </section>
    </section>
    <section class="card">
      <div class="card-title">代理定时任务</div>
      <div class="card-sub">针对此代理的定时任务。</div>
      ${n.length===0?l`
              <div class="muted" style="margin-top: 16px">未分配任务。</div>
            `:l`
              <div class="list" style="margin-top: 16px;">
                ${n.map(i=>l`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${i.name}</div>
                      ${i.description?l`<div class="list-sub">${i.description}</div>`:g}
                      <div class="chip-row" style="margin-top: 6px;">
                        <span class="chip">${Tl(i)}</span>
                        <span class="chip ${i.enabled?"chip-ok":"chip-warn"}">
                          ${i.enabled?"已启用":"已禁用"}
                        </span>
                        <span class="chip">${i.sessionTarget}</span>
                      </div>
                    </div>
                    <div class="list-meta">
                      <div class="mono">${Cl(i)}</div>
                      <div class="muted">${El(i)}</div>
                    </div>
                  </div>
                `)}
              </div>
            `}
    </section>
  `}function Mf(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],i=e.agentFileActive??null,s=i?n.find(c=>c.name===i)??null:null,a=i?e.agentFileContents[i]??"":"",o=i?e.agentFileDrafts[i]??a:"",r=i?o!==a:!1;return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">核心文件</div>
          <div class="card-sub">引导人格、身份和工具指导。</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"加载中…":"刷新"}
        </button>
      </div>
      ${t?l`<div class="muted mono" style="margin-top: 8px;">工作区：${t.workspace}</div>`:g}
      ${e.agentFilesError?l`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:g}
      ${t?l`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${n.length===0?l`
                          <div class="muted">未找到文件。</div>
                        `:n.map(c=>Rf(c,i,()=>e.onSelectFile(c.name)))}
                </div>
                <div class="agent-files-editor">
                  ${s?l`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${s.name}</div>
                              <div class="agent-file-sub mono">${s.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                ?disabled=${!r}
                                @click=${()=>e.onFileReset(s.name)}
                              >
                                重置
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!r}
                                @click=${()=>e.onFileSave(s.name)}
                              >
                                ${e.agentFileSaving?"保存中…":"保存"}
                              </button>
                            </div>
                          </div>
                          ${s.missing?l`
                                  <div class="callout info" style="margin-top: 10px">
                                    此文件不存在。保存将在代理工作区中创建它。
                                  </div>
                                `:g}
                          <label class="field" style="margin-top: 12px;">
                            <span>内容</span>
                            <textarea
                              .value=${o}
                              @input=${c=>e.onFileDraftChange(s.name,c.target.value)}
                            ></textarea>
                          </label>
                        `:l`
                          <div class="muted">选择一个文件进行编辑。</div>
                        `}
                </div>
              </div>
            `:l`
              <div class="callout info" style="margin-top: 12px">
                加载代理工作区文件以编辑核心指令。
              </div>
            `}
    </section>
  `}function Rf(e,t,n){const i=e.missing?"缺失":`${ff(e.size)} · ${O(e.updatedAtMs??null)}`;return l`
    <button
      type="button"
      class="agent-file-row ${t===e.name?"active":""}"
      @click=${n}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${i}</div>
      </div>
      ${e.missing?l`
              <span class="agent-pill warn">缺失</span>
            `:g}
    </button>
  `}function Pf(e){const t=Rn(e.configForm,e.agentId),n=t.entry?.tools??{},i=t.globalTools??{},s=n.profile??i.profile??"full",a=n.profile?"代理覆盖":i.profile?"全局默认":"默认",o=Array.isArray(n.allow)&&n.allow.length>0,r=Array.isArray(i.allow)&&i.allow.length>0,c=!!e.configForm&&!e.configLoading&&!e.configSaving&&!o,u=o?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],p=o?[]:Array.isArray(n.deny)?n.deny:[],f=o?{allow:n.allow??[],deny:n.deny??[]}:of(s)??void 0,m=Fa.flatMap(A=>A.tools.map(_=>_.id)),v=A=>{const _=yf(A,f),L=Da(A,u),k=Da(A,p);return{allowed:(_||L)&&!k,baseAllowed:_,denied:k}},d=m.filter(A=>v(A).allowed).length,y=(A,_)=>{const L=new Set(u.map(N=>ve(N)).filter(N=>N.length>0)),k=new Set(p.map(N=>ve(N)).filter(N=>N.length>0)),C=v(A).baseAllowed,T=ve(A);_?(k.delete(T),C||L.add(T)):(L.delete(T),k.add(T)),e.onOverridesChange(e.agentId,[...L],[...k])},x=A=>{const _=new Set(u.map(k=>ve(k)).filter(k=>k.length>0)),L=new Set(p.map(k=>ve(k)).filter(k=>k.length>0));for(const k of m){const C=v(k).baseAllowed,T=ve(k);A?(L.delete(T),C||_.add(T)):(_.delete(T),L.add(T))}e.onOverridesChange(e.agentId,[..._],[...L])};return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">工具访问</div>
          <div class="card-sub">
            此代理的配置文件及逐工具覆盖。
            <span class="mono">${d}/${m.length}</span> 已启用。
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button
            class="btn btn--sm"
            ?disabled=${!c}
            @click=${()=>x(!0)}
          >
            全部启用
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!c}
            @click=${()=>x(!1)}
          >
            全部禁用
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            重新加载配置
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"保存中…":"保存"}
          </button>
        </div>
      </div>

      ${e.configForm?g:l`
              <div class="callout info" style="margin-top: 12px">
                加载网关配置以调整工具配置。
              </div>
            `}
      ${o?l`
              <div class="callout info" style="margin-top: 12px">
                此代理在配置中使用了显式允许列表。工具覆盖在配置选项卡中管理。
              </div>
            `:g}
      ${r?l`
              <div class="callout info" style="margin-top: 12px">
                已设置全局 tools.allow。代理覆盖无法启用被全局阻止的工具。
              </div>
            `:g}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">配置文件</div>
          <div class="mono">${s}</div>
        </div>
        <div class="agent-kv">
          <div class="label">来源</div>
          <div>${a}</div>
        </div>
        ${e.configDirty?l`
                <div class="agent-kv">
                  <div class="label">状态</div>
                  <div class="mono">未保存</div>
                </div>
              `:g}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">快速预设</div>
        <div class="agent-tools-buttons">
          ${uf.map(A=>l`
              <button
                class="btn btn--sm ${s===A.id?"active":""}"
                ?disabled=${!c}
                @click=${()=>e.onProfileChange(e.agentId,A.id,!0)}
              >
                ${A.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!c}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            继承
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${Fa.map(A=>l`
            <div class="agent-tools-section">
              <div class="agent-tools-header">${A.label}</div>
              <div class="agent-tools-list">
                ${A.tools.map(_=>{const{allowed:L}=v(_.id);return l`
                    <div class="agent-tool-row">
                      <div>
                        <div class="agent-tool-title mono">${_.label}</div>
                        <div class="agent-tool-sub">${_.description}</div>
                      </div>
                      <label class="cfg-toggle">
                        <input
                          type="checkbox"
                          .checked=${L}
                          ?disabled=${!c}
                          @change=${k=>y(_.id,k.target.checked)}
                        />
                        <span class="cfg-toggle__track"></span>
                      </label>
                    </div>
                  `})}
              </div>
            </div>
          `)}
      </div>
    </section>
  `}const ci=[{id:"workspace",label:"工作区技能",sources:["openclaw-workspace"]},{id:"built-in",label:"内置技能",sources:["openclaw-bundled"]},{id:"installed",label:"已安装技能",sources:["openclaw-managed"]},{id:"extra",label:"额外技能",sources:["openclaw-extra"]}];function Ff(e){const t=new Map;for(const s of ci)t.set(s.id,{id:s.id,label:s.label,skills:[]});const n={id:"other",label:"其他技能",skills:[]};for(const s of e){const a=ci.find(o=>o.sources.includes(s.source));a?t.get(a.id)?.skills.push(s):n.skills.push(s)}const i=ci.map(s=>t.get(s.id)).filter(s=>!!(s&&s.skills.length>0));return n.skills.length>0&&i.push(n),i}function Of(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=Rn(e.configForm,e.agentId),i=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,s=new Set((i??[]).map(v=>v.trim()).filter(Boolean)),a=i!==void 0,o=!!(e.report&&e.activeAgentId===e.agentId),r=o?e.report?.skills??[]:[],c=e.filter.trim().toLowerCase(),u=c?r.filter(v=>[v.name,v.description,v.source].join(" ").toLowerCase().includes(c)):r,p=Ff(u),f=a?r.filter(v=>s.has(v.name)).length:r.length,m=r.length;return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">技能</div>
          <div class="card-sub">
            代理级技能允许列表和工作区技能。
            ${m>0?l`<span class="mono">${f}/${m}</span>`:g}
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
            使用全部
          </button>
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onDisableAll(e.agentId)}>
            全部禁用
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            重新加载配置
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"加载中…":"刷新"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"保存中…":"保存"}
          </button>
        </div>
      </div>

      ${e.configForm?g:l`
              <div class="callout info" style="margin-top: 12px">
                加载网关配置以设置代理级技能。
              </div>
            `}
      ${a?l`
              <div class="callout info" style="margin-top: 12px">此代理使用自定义技能允许列表。</div>
            `:l`
              <div class="callout info" style="margin-top: 12px">
                所有技能已启用。禁用任何技能将创建代理级允许列表。
              </div>
            `}
      ${!o&&!e.loading?l`
              <div class="callout info" style="margin-top: 12px">
                加载此代理的技能以查看工作区特定条目。
              </div>
            `:g}
      ${e.error?l`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:g}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>过滤</span>
          <input
            .value=${e.filter}
            @input=${v=>e.onFilterChange(v.target.value)}
            placeholder="搜索技能"
          />
        </label>
        <div class="muted">${u.length} 个显示</div>
      </div>

      ${u.length===0?l`
              <div class="muted" style="margin-top: 16px">未找到技能。</div>
            `:l`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${p.map(v=>Nf(v,{agentId:e.agentId,allowSet:s,usingAllowlist:a,editable:t,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function Nf(e,t){const n=e.id==="workspace"||e.id==="built-in";return l`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(i=>Df(i,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function Df(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,i=[...e.missing.bins.map(a=>`bin:${a}`),...e.missing.env.map(a=>`env:${a}`),...e.missing.config.map(a=>`config:${a}`),...e.missing.os.map(a=>`os:${a}`)],s=[];return e.disabled&&s.push("已禁用"),e.blockedByAllowlist&&s.push("被允许列表阻止"),l`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${e.description}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"可用":"已阻止"}
          </span>
          ${e.disabled?l`
                  <span class="chip chip-warn">已禁用</span>
                `:g}
        </div>
        ${i.length>0?l`<div class="muted" style="margin-top: 6px;">缺失：${i.join(", ")}</div>`:g}
        ${s.length>0?l`<div class="muted" style="margin-top: 6px;">原因：${s.join(", ")}</div>`:g}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${n}
            ?disabled=${!t.editable}
            @change=${a=>t.onToggle(t.agentId,e.name,a.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function Bf(e){if(!e&&e!==0)return"n/a";const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function Uf(e,t){const n=t.snapshot,i=n?.channels;if(!n||!i)return!1;const s=i[e],a=typeof s?.configured=="boolean"&&s.configured,o=typeof s?.running=="boolean"&&s.running,r=typeof s?.connected=="boolean"&&s.connected,u=(n.channelAccounts?.[e]??[]).some(p=>p.configured||p.running||p.connected);return a||o||r||u}function Kf(e,t){return t?.[e]?.length??0}function Rl(e,t){const n=Kf(e,t);return n<2?g:l`<div class="account-count">账户 (${n})</div>`}function me(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function Pl(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(me(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Pn(e){return e.filter(t=>typeof t=="string").join(".")}function ae(e,t){const n=Pn(e),i=t[n];if(i)return i;const s=n.split(".");for(const[a,o]of Object.entries(t)){if(!a.includes("*"))continue;const r=a.split(".");if(r.length!==s.length)continue;let c=!0;for(let u=0;u<s.length;u+=1)if(r[u]!=="*"&&r[u]!==s[u]){c=!1;break}if(c)return o}}function Se(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function zf(e){const t=Pn(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}const Hf=new Set(["title","description","default","nullable"]);function jf(e){return Object.keys(e??{}).filter(n=>!Hf.has(n)).length===0}function qf(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const Dt={chevronDown:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,plus:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,minus:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,trash:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,edit:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`};function ke(e){const{schema:t,value:n,path:i,hints:s,unsupported:a,disabled:o,onPatch:r}=e,c=e.showLabel??!0,u=me(t),p=ae(i,s),f=p?.label??t.title??Se(String(i.at(-1))),m=p?.help??t.description,v=Pn(i);if(a.has(v))return l`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">不支持的模式节点。请使用原始模式。</div>
    </div>`;if(t.anyOf||t.oneOf){const y=(t.anyOf??t.oneOf??[]).filter(C=>!(C.type==="null"||Array.isArray(C.type)&&C.type.includes("null")));if(y.length===1)return ke({...e,schema:y[0]});const x=C=>{if(C.const!==void 0)return C.const;if(C.enum&&C.enum.length===1)return C.enum[0]},A=y.map(x),_=A.every(C=>C!==void 0);if(_&&A.length>0&&A.length<=5){const C=n??t.default;return l`
        <div class="cfg-field">
          ${c?l`<label class="cfg-field__label">${f}</label>`:g}
          ${m?l`<div class="cfg-field__help">${m}</div>`:g}
          <div class="cfg-segmented">
            ${A.map((T,N)=>l`
              <button
                type="button"
                class="cfg-segmented__btn ${T===C||String(T)===String(C)?"active":""}"
                ?disabled=${o}
                @click=${()=>r(i,T)}
              >
                ${String(T)}
              </button>
            `)}
          </div>
        </div>
      `}if(_&&A.length>5)return Ua({...e,options:A,value:n??t.default});const L=new Set(y.map(C=>me(C)).filter(Boolean)),k=new Set([...L].map(C=>C==="integer"?"number":C));if([...k].every(C=>["string","number","boolean"].includes(C))){const C=k.has("string"),T=k.has("number");if(k.has("boolean")&&k.size===1)return ke({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(C||T)return Ba({...e,inputType:T&&!C?"number":"text"})}}if(t.enum){const d=t.enum;if(d.length<=5){const y=n??t.default;return l`
        <div class="cfg-field">
          ${c?l`<label class="cfg-field__label">${f}</label>`:g}
          ${m?l`<div class="cfg-field__help">${m}</div>`:g}
          <div class="cfg-segmented">
            ${d.map(x=>l`
              <button
                type="button"
                class="cfg-segmented__btn ${x===y||String(x)===String(y)?"active":""}"
                ?disabled=${o}
                @click=${()=>r(i,x)}
              >
                ${String(x)}
              </button>
            `)}
          </div>
        </div>
      `}return Ua({...e,options:d,value:n??t.default})}if(u==="object")return Vf(e);if(u==="array")return Wf(e);if(u==="boolean"){const d=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return l`
      <label class="cfg-toggle-row ${o?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${f}</span>
          ${m?l`<span class="cfg-toggle-row__help">${m}</span>`:g}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${d}
            ?disabled=${o}
            @change=${y=>r(i,y.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return u==="number"||u==="integer"?Gf(e):u==="string"?Ba({...e,inputType:"text"}):l`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">不支持的类型: ${u}。请使用原始模式。</div>
    </div>
  `}function Ba(e){const{schema:t,value:n,path:i,hints:s,disabled:a,onPatch:o,inputType:r}=e,c=e.showLabel??!0,u=ae(i,s),p=u?.label??t.title??Se(String(i.at(-1))),f=u?.help??t.description,m=u?.sensitive??zf(i),v=u?.placeholder??(m?"••••":t.default!==void 0?`Default: ${t.default}`:""),d=n??"";return l`
    <div class="cfg-field">
      ${c?l`<label class="cfg-field__label">${p}</label>`:g}
      ${f?l`<div class="cfg-field__help">${f}</div>`:g}
      <div class="cfg-input-wrap">
        <input
          type=${m?"password":r}
          class="cfg-input"
          placeholder=${v}
          .value=${d==null?"":String(d)}
          ?disabled=${a}
          @input=${y=>{const x=y.target.value;if(r==="number"){if(x.trim()===""){o(i,void 0);return}const A=Number(x);o(i,Number.isNaN(A)?x:A);return}o(i,x)}}
        />
        ${t.default!==void 0?l`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${a}
            @click=${()=>o(i,t.default)}
          >↺</button>
        `:g}
      </div>
    </div>
  `}function Gf(e){const{schema:t,value:n,path:i,hints:s,disabled:a,onPatch:o}=e,r=e.showLabel??!0,c=ae(i,s),u=c?.label??t.title??Se(String(i.at(-1))),p=c?.help??t.description,f=n??t.default??"",m=typeof f=="number"?f:0;return l`
    <div class="cfg-field">
      ${r?l`<label class="cfg-field__label">${u}</label>`:g}
      ${p?l`<div class="cfg-field__help">${p}</div>`:g}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(i,m-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${f==null?"":String(f)}
          ?disabled=${a}
          @input=${v=>{const d=v.target.value,y=d===""?void 0:Number(d);o(i,y)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(i,m+1)}
        >+</button>
      </div>
    </div>
  `}function Ua(e){const{schema:t,value:n,path:i,hints:s,disabled:a,options:o,onPatch:r}=e,c=e.showLabel??!0,u=ae(i,s),p=u?.label??t.title??Se(String(i.at(-1))),f=u?.help??t.description,m=n??t.default,v=o.findIndex(y=>y===m||String(y)===String(m)),d="__unset__";return l`
    <div class="cfg-field">
      ${c?l`<label class="cfg-field__label">${p}</label>`:g}
      ${f?l`<div class="cfg-field__help">${f}</div>`:g}
      <select
        class="cfg-select"
        ?disabled=${a}
        .value=${v>=0?String(v):d}
        @change=${y=>{const x=y.target.value;r(i,x===d?void 0:o[Number(x)])}}
      >
        <option value=${d}>Select...</option>
        ${o.map((y,x)=>l`
          <option value=${String(x)}>${String(y)}</option>
        `)}
      </select>
    </div>
  `}function Vf(e){const{schema:t,value:n,path:i,hints:s,unsupported:a,disabled:o,onPatch:r}=e;e.showLabel;const c=ae(i,s),u=c?.label??t.title??Se(String(i.at(-1))),p=c?.help??t.description,f=n??t.default,m=f&&typeof f=="object"&&!Array.isArray(f)?f:{},v=t.properties??{},y=Object.entries(v).sort((L,k)=>{const C=ae([...i,L[0]],s)?.order??0,T=ae([...i,k[0]],s)?.order??0;return C!==T?C-T:L[0].localeCompare(k[0])}),x=new Set(Object.keys(v)),A=t.additionalProperties,_=!!A&&typeof A=="object";return i.length===1?l`
      <div class="cfg-fields">
        ${y.map(([L,k])=>ke({schema:k,value:m[L],path:[...i,L],hints:s,unsupported:a,disabled:o,onPatch:r}))}
        ${_?Ka({schema:A,value:m,path:i,hints:s,unsupported:a,disabled:o,reservedKeys:x,onPatch:r}):g}
      </div>
    `:l`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${u}</span>
        <span class="cfg-object__chevron">${Dt.chevronDown}</span>
      </summary>
      ${p?l`<div class="cfg-object__help">${p}</div>`:g}
      <div class="cfg-object__content">
        ${y.map(([L,k])=>ke({schema:k,value:m[L],path:[...i,L],hints:s,unsupported:a,disabled:o,onPatch:r}))}
        ${_?Ka({schema:A,value:m,path:i,hints:s,unsupported:a,disabled:o,reservedKeys:x,onPatch:r}):g}
      </div>
    </details>
  `}function Wf(e){const{schema:t,value:n,path:i,hints:s,unsupported:a,disabled:o,onPatch:r}=e,c=e.showLabel??!0,u=ae(i,s),p=u?.label??t.title??Se(String(i.at(-1))),f=u?.help??t.description,m=Array.isArray(t.items)?t.items[0]:t.items;if(!m)return l`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${p}</div>
        <div class="cfg-field__error">不支持的数组模式。请使用原始模式。</div>
      </div>
    `;const v=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return l`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${c?l`<span class="cfg-array__label">${p}</span>`:g}
        <span class="cfg-array__count">${v.length} item${v.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${o}
          @click=${()=>{const d=[...v,Pl(m)];r(i,d)}}
        >
          <span class="cfg-array__add-icon">${Dt.plus}</span>
          Add
        </button>
      </div>
      ${f?l`<div class="cfg-array__help">${f}</div>`:g}

      ${v.length===0?l`
        <div class="cfg-array__empty">
          No items yet. Click "Add" to create one.
        </div>
      `:l`
        <div class="cfg-array__items">
          ${v.map((d,y)=>l`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${y+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${o}
                  @click=${()=>{const x=[...v];x.splice(y,1),r(i,x)}}
                >
                  ${Dt.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${ke({schema:m,value:d,path:[...i,y],hints:s,unsupported:a,disabled:o,showLabel:!1,onPatch:r})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function Ka(e){const{schema:t,value:n,path:i,hints:s,unsupported:a,disabled:o,reservedKeys:r,onPatch:c}=e,u=jf(t),p=Object.entries(n??{}).filter(([f])=>!r.has(f));return l`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${o}
          @click=${()=>{const f={...n??{}};let m=1,v=`custom-${m}`;for(;v in f;)m+=1,v=`custom-${m}`;f[v]=u?{}:Pl(t),c(i,f)}}
        >
          <span class="cfg-map__add-icon">${Dt.plus}</span>
          Add Entry
        </button>
      </div>

      ${p.length===0?l`
        <div class="cfg-map__empty">No custom entries.</div>
      `:l`
        <div class="cfg-map__items">
          ${p.map(([f,m])=>{const v=[...i,f],d=qf(m);return l`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${f}
                    ?disabled=${o}
                    @change=${y=>{const x=y.target.value.trim();if(!x||x===f)return;const A={...n??{}};x in A||(A[x]=A[f],delete A[f],c(i,A))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${u?l`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${d}
                          ?disabled=${o}
                          @change=${y=>{const x=y.target,A=x.value.trim();if(!A){c(v,void 0);return}try{c(v,JSON.parse(A))}catch{x.value=d}}}
                        ></textarea>
                      `:ke({schema:t,value:m,path:v,hints:s,unsupported:a,disabled:o,showLabel:!1,onPatch:c})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${o}
                  @click=${()=>{const y={...n??{}};delete y[f],c(i,y)}}
                >
                  ${Dt.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const za={env:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,update:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,agents:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle></svg>`,auth:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,channels:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,messages:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,commands:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,hooks:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,skills:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,tools:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,gateway:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,wizard:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h0"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>`,meta:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>`,logging:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,browser:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>`,ui:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,models:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,bindings:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,broadcast:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>`,audio:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,session:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,cron:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,web:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,discovery:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,canvasHost:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,talk:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,plugins:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v6"></path><path d="m4.93 10.93 4.24 4.24"></path><path d="M2 12h6"></path><path d="m4.93 13.07 4.24-4.24"></path><path d="M12 22v-6"></path><path d="m19.07 13.07-4.24-4.24"></path><path d="M22 12h-6"></path><path d="m19.07 10.93-4.24 4.24"></path></svg>`,default:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`},As={env:{label:"环境变量",description:"传递给网关进程的环境变量"},update:{label:"更新",description:"自动更新设置和发布渠道"},agents:{label:"代理",description:"代理配置、模型和身份"},auth:{label:"身份验证",description:"API密钥和身份验证配置文件"},channels:{label:"通道",description:"消息通道（Telegram、Discord、Slack等）"},messages:{label:"消息",description:"消息处理和路由设置"},commands:{label:"命令",description:"自定义斜杠命令"},hooks:{label:"钩子",description:"Webhooks和事件钩子"},skills:{label:"技能",description:"技能包和能力"},tools:{label:"工具",description:"工具配置（浏览器、搜索等）"},gateway:{label:"网关",description:"网关服务器设置（端口、身份验证、绑定）"},wizard:{label:"设置向导",description:"设置向导状态和历史记录"},diagnostics:{label:"诊断",description:"诊断设置"},meta:{label:"元数据",description:"网关元数据和版本信息"},logging:{label:"日志",description:"日志级别和输出配置"},browser:{label:"浏览器",description:"浏览器自动化设置"},ui:{label:"用户界面",description:"用户界面偏好设置"},models:{label:"模型",description:"AI模型配置和提供商"},bindings:{label:"绑定",description:"键绑定和快捷键"},broadcast:{label:"广播",description:"广播和通知设置"},audio:{label:"音频",description:"音频输入/输出设置"},session:{label:"会话",description:"会话管理和持久化"},cron:{label:"定时任务",description:"计划任务和自动化"},web:{label:"Web",description:"Web服务器和API设置"},discovery:{label:"发现",description:"服务发现和网络"},canvasHost:{label:"Canvas主机",description:"Canvas渲染和显示"},talk:{label:"语音",description:"语音和语音设置"},plugins:{label:"插件",description:"插件管理和扩展"}};function Ha(e){return za[e]??za.default}function Qf(e,t,n){if(!n)return!0;const i=n.toLowerCase(),s=As[e];return e.toLowerCase().includes(i)||s&&(s.label.toLowerCase().includes(i)||s.description.toLowerCase().includes(i))?!0:kt(t,i)}function kt(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(i=>String(i).toLowerCase().includes(t)))return!0;if(e.properties){for(const[i,s]of Object.entries(e.properties))if(i.toLowerCase().includes(t)||kt(s,t))return!0}if(e.items){const i=Array.isArray(e.items)?e.items:[e.items];for(const s of i)if(s&&kt(s,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&kt(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const i of n)if(i&&kt(i,t))return!0}return!1}function Zf(e){if(!e.schema)return l`<div class="muted">模式不可用。</div>`;const t=e.schema,n=e.value??{};if(me(t)!=="object"||!t.properties)return l`<div class="callout danger">不支持的模式。使用原始模式。</div>`;const i=new Set(e.unsupportedPaths??[]),s=t.properties,a=e.searchQuery??"",o=e.activeSection,r=e.activeSubsection??null,u=Object.entries(s).sort((f,m)=>{const v=ae([f[0]],e.uiHints)?.order??50,d=ae([m[0]],e.uiHints)?.order??50;return v!==d?v-d:f[0].localeCompare(m[0])}).filter(([f,m])=>!(o&&f!==o||a&&!Qf(f,m,a)));let p=null;if(o&&r&&u.length===1){const f=u[0]?.[1];f&&me(f)==="object"&&f.properties&&f.properties[r]&&(p={sectionKey:o,subsectionKey:r,schema:f.properties[r]})}return u.length===0?l`
      <div class="config-empty">
        <div class="config-empty__icon">${W.search}</div>
        <div class="config-empty__text">
          ${a?`没有匹配"${a}"的设置`:"此部分中没有设置"}
        </div>
      </div>
    `:l`
    <div class="config-form config-form--modern">
      ${p?(()=>{const{sectionKey:f,subsectionKey:m,schema:v}=p,d=ae([f,m],e.uiHints),y=d?.label??v.title??Se(m),x=d?.help??v.description??"",A=n[f],_=A&&typeof A=="object"?A[m]:void 0,L=`config-section-${f}-${m}`;return l`
              <section class="config-section-card" id=${L}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Ha(f)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${y}</h3>
                    ${x?l`<p class="config-section-card__desc">${x}</p>`:g}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${ke({schema:v,value:_,path:[f,m],hints:e.uiHints,unsupported:i,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():u.map(([f,m])=>{const v=As[f]??{label:f.charAt(0).toUpperCase()+f.slice(1),description:m.description??""};return l`
              <section class="config-section-card" id="config-section-${f}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Ha(f)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${v.label}</h3>
                    ${v.description?l`<p class="config-section-card__desc">${v.description}</p>`:g}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${ke({schema:m,value:n[f],path:[f],hints:e.uiHints,unsupported:i,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Yf=new Set(["title","description","default","nullable"]);function Jf(e){return Object.keys(e??{}).filter(n=>!Yf.has(n)).length===0}function Fl(e){const t=e.filter(s=>s!=null),n=t.length!==e.length,i=[];for(const s of t)i.some(a=>Object.is(a,s))||i.push(s);return{enumValues:i,nullable:n}}function Ol(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:Et(e,[])}function Et(e,t){const n=new Set,i={...e},s=Pn(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const r=Xf(e,t);return r||{schema:e,unsupportedPaths:[s]}}const a=Array.isArray(e.type)&&e.type.includes("null"),o=me(e)??(e.properties||e.additionalProperties?"object":void 0);if(i.type=o??e.type,i.nullable=a||e.nullable,i.enum){const{enumValues:r,nullable:c}=Fl(i.enum);i.enum=r,c&&(i.nullable=!0),r.length===0&&n.add(s)}if(o==="object"){const r=e.properties??{},c={};for(const[u,p]of Object.entries(r)){const f=Et(p,[...t,u]);f.schema&&(c[u]=f.schema);for(const m of f.unsupportedPaths)n.add(m)}if(i.properties=c,e.additionalProperties===!0)n.add(s);else if(e.additionalProperties===!1)i.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!Jf(e.additionalProperties)){const u=Et(e.additionalProperties,[...t,"*"]);i.additionalProperties=u.schema??e.additionalProperties,u.unsupportedPaths.length>0&&n.add(s)}}else if(o==="array"){const r=Array.isArray(e.items)?e.items[0]:e.items;if(!r)n.add(s);else{const c=Et(r,[...t,"*"]);i.items=c.schema??r,c.unsupportedPaths.length>0&&n.add(s)}}else o!=="string"&&o!=="number"&&o!=="integer"&&o!=="boolean"&&!i.enum&&n.add(s);return{schema:i,unsupportedPaths:Array.from(n)}}function Xf(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const i=[],s=[];let a=!1;for(const r of n){if(!r||typeof r!="object")return null;if(Array.isArray(r.enum)){const{enumValues:c,nullable:u}=Fl(r.enum);i.push(...c),u&&(a=!0);continue}if("const"in r){if(r.const==null){a=!0;continue}i.push(r.const);continue}if(me(r)==="null"){a=!0;continue}s.push(r)}if(i.length>0&&s.length===0){const r=[];for(const c of i)r.some(u=>Object.is(u,c))||r.push(c);return{schema:{...e,enum:r,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(s.length===1){const r=Et(s[0],t);return r.schema&&(r.schema.nullable=a||r.schema.nullable),r}const o=["string","number","integer","boolean"];return s.length>0&&i.length===0&&s.every(r=>r.type&&o.includes(String(r.type)))?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}function ep(e,t){let n=e;for(const i of t){if(!n)return null;const s=me(n);if(s==="object"){const a=n.properties??{};if(typeof i=="string"&&a[i]){n=a[i];continue}const o=n.additionalProperties;if(typeof i=="string"&&o&&typeof o=="object"){n=o;continue}return null}if(s==="array"){if(typeof i!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function tp(e,t){const i=(e.channels??{})[t],s=e[t];return(i&&typeof i=="object"?i:null)??(s&&typeof s=="object"?s:null)??{}}const np=["groupPolicy","streamMode","dmPolicy"];function ip(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function sp(e){const t=np.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:l`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,i])=>l`
          <div>
            <span class="label">${n}</span>
            <span>${ip(i)}</span>
          </div>
        `)}
    </div>
  `}function ap(e){const t=Ol(e.schema),n=t.schema;if(!n)return l`<div class="callout danger">模式不可用。请使用原始模式。</div>`;const i=ep(n,["channels",e.channelId]);if(!i)return l`<div class="callout danger">通道配置模式不可用。</div>`;const s=e.configValue??{},a=tp(s,e.channelId);return l`
    <div class="config-form">
      ${ke({schema:i,value:a,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${sp(a)}
  `}function _e(e){const{channelId:t,props:n}=e,i=n.configSaving||n.configSchemaLoading;return l`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?l`<div class="muted">正在加载配置模式…</div>`:ap({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:i,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${i||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"保存中…":"保存"}
        </button>
        <button
          class="btn"
          ?disabled=${i}
          @click=${()=>n.onConfigReload()}
        >
          重新加载
        </button>
      </div>
    </div>
  `}function op(e){const{props:t,discord:n,accountCountLabel:i}=e;return l`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">机器人状态和频道配置。</div>
      ${i}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${n?.probe?l`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:g}

      ${_e({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function lp(e){const{props:t,googleChat:n,accountCountLabel:i}=e;return l`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook 状态和频道配置。</div>
      ${i}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?n.configured?"是":"否":"无"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?n.running?"是":"否":"无"}</span>
        </div>
        <div>
          <span class="label">凭证</span>
          <span>${n?.credentialSource??"无"}</span>
        </div>
        <div>
          <span class="label">受众</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"无"}
          </span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${n?.probe?l`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:g}

      ${_e({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function rp(e){const{props:t,imessage:n,accountCountLabel:i}=e;return l`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS 桥接状态和频道配置。</div>
      ${i}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${n?.probe?l`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.error??""}
          </div>`:g}

      ${_e({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function ja(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"无"}function cp(e){const{props:t,nostr:n,nostrAccounts:i,accountCountLabel:s,profileFormState:a,profileFormCallbacks:o,onEditProfile:r}=e,c=i[0],u=n?.configured??c?.configured??!1,p=n?.running??c?.running??!1,f=n?.publicKey??c?.publicKey,m=n?.lastStartAt??c?.lastStartAt??null,v=n?.lastError??c?.lastError??null,d=i.length>1,y=a!=null,x=_=>{const L=_.publicKey,k=_.profile,C=k?.displayName??k?.name??_.name??_.accountId;return l`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${C}</div>
          <div class="account-card-id">${_.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">运行中</span>
            <span>${_.running?"是":"否"}</span>
          </div>
          <div>
            <span class="label">已配置</span>
            <span>${_.configured?"是":"否"}</span>
          </div>
          <div>
            <span class="label">公钥</span>
            <span class="monospace" title="${L??""}">${ja(L)}</span>
          </div>
          <div>
            <span class="label">最后入站</span>
            <span>${_.lastInboundAt?O(_.lastInboundAt):"无"}</span>
          </div>
          ${_.lastError?l`
                <div class="account-card-error">${_.lastError}</div>
              `:g}
        </div>
      </div>
    `},A=()=>{if(y&&o)return ec({state:a,callbacks:o,accountId:i[0]?.accountId??"default"});const _=c?.profile??n?.profile,{name:L,displayName:k,about:C,picture:T,nip05:N}=_??{},ue=L||k||C||T||N;return l`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">资料</div>
          ${u?l`
                <button
                  class="btn btn-sm"
                  @click=${r}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  编辑资料
                </button>
              `:g}
        </div>
        ${ue?l`
              <div class="status-list">
                ${T?l`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${T}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${B=>{B.target.style.display="none"}}
                        />
                      </div>
                    `:g}
                ${L?l`<div><span class="label">姓名</span><span>${L}</span></div>`:g}
                ${k?l`<div><span class="label">显示名称</span><span>${k}</span></div>`:g}
                ${C?l`<div><span class="label">关于</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${C}</span></div>`:g}
                ${N?l`<div><span class="label">NIP-05</span><span>${N}</span></div>`:g}
              </div>
            `:l`
              <div style="color: var(--text-muted); font-size: 13px;">
                未设置资料。点击"编辑资料"来添加您的姓名、简介和头像。
              </div>
            `}
      </div>
    `};return l`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">通过 Nostr 中继（NIP-04）的去中心化私信。</div>
      ${s}

      ${d?l`
            <div class="account-card-list">
              ${i.map(_=>x(_))}
            </div>
          `:l`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">已配置</span>
                <span>${u?"是":"否"}</span>
              </div>
              <div>
                <span class="label">运行中</span>
                <span>${p?"是":"否"}</span>
              </div>
              <div>
                <span class="label">公钥</span>
                <span class="monospace" title="${f??""}"
                  >${ja(f)}</span
                >
              </div>
              <div>
                <span class="label">最后启动</span>
                <span>${m?O(m):"无"}</span>
              </div>
            </div>
          `}

      ${v?l`<div class="callout danger" style="margin-top: 12px;">${v}</div>`:g}

      ${A()}

      ${_e({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>刷新</button>
      </div>
    </div>
  `}function dp(e){const{props:t,signal:n,accountCountLabel:i}=e;return l`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli 状态和频道配置。</div>
      ${i}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">基础URL</span>
          <span>${n?.baseUrl??"无"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${n?.probe?l`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:g}

      ${_e({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function up(e){const{props:t,slack:n,accountCountLabel:i}=e;return l`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">套接字模式状态和频道配置。</div>
      ${i}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后启动</span>
          <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
        </div>
        <div>
          <span class="label">最后探测</span>
          <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
        </div>
      </div>

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${n?.probe?l`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:g}

      ${_e({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function fp(e){const{props:t,telegram:n,telegramAccounts:i,accountCountLabel:s}=e,a=i.length>1,o=r=>{const u=r.probe?.bot?.username,p=r.name||r.accountId;return l`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${u?`@${u}`:p}
          </div>
          <div class="account-card-id">${r.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">运行中</span>
            <span>${r.running?"是":"否"}</span>
          </div>
          <div>
            <span class="label">已配置</span>
            <span>${r.configured?"是":"否"}</span>
          </div>
          <div>
            <span class="label">最后入站</span>
            <span>${r.lastInboundAt?O(r.lastInboundAt):"无"}</span>
          </div>
          ${r.lastError?l`
                <div class="account-card-error">
                  ${r.lastError}
                </div>
              `:g}
        </div>
      </div>
    `};return l`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">机器人状态和频道配置。</div>
      ${s}

      ${a?l`
            <div class="account-card-list">
              ${i.map(r=>o(r))}
            </div>
          `:l`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">已配置</span>
                <span>${n?.configured?"是":"否"}</span>
              </div>
              <div>
                <span class="label">运行中</span>
                <span>${n?.running?"是":"否"}</span>
              </div>
              <div>
                <span class="label">模式</span>
                <span>${n?.mode??"无"}</span>
              </div>
              <div>
                <span class="label">最后启动</span>
                <span>${n?.lastStartAt?O(n.lastStartAt):"无"}</span>
              </div>
              <div>
                <span class="label">最后探测</span>
                <span>${n?.lastProbeAt?O(n.lastProbeAt):"无"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${n?.probe?l`<div class="callout" style="margin-top: 12px;">
            探测 ${n.probe.ok?"成功":"失败"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:g}

      ${_e({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          探测
        </button>
      </div>
    </div>
  `}function pp(e){const{props:t,whatsapp:n,accountCountLabel:i}=e;return l`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">链接 WhatsApp Web 并监控连接健康状况。</div>
      ${i}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">已配置</span>
          <span>${n?.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">已链接</span>
          <span>${n?.linked?"是":"否"}</span>
        </div>
        <div>
          <span class="label">运行中</span>
          <span>${n?.running?"是":"否"}</span>
        </div>
        <div>
          <span class="label">已连接</span>
          <span>${n?.connected?"是":"否"}</span>
        </div>
        <div>
          <span class="label">最后连接</span>
          <span>
            ${n?.lastConnectedAt?O(n.lastConnectedAt):"无"}
          </span>
        </div>
        <div>
          <span class="label">最后消息</span>
          <span>
            ${n?.lastMessageAt?O(n.lastMessageAt):"无"}
          </span>
        </div>
        <div>
          <span class="label">认证时长</span>
          <span>
            ${n?.authAgeMs!=null?Bf(n.authAgeMs):"无"}
          </span>
        </div>
      </div>

      ${n?.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:g}

      ${t.whatsappMessage?l`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:g}

      ${t.whatsappQrDataUrl?l`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:g}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"工作中…":"显示二维码"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          重新链接
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          等待扫描
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          登出
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          刷新
        </button>
      </div>

      ${_e({channelId:"whatsapp",props:t})}
    </div>
  `}function gp(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,i=t?.telegram??void 0,s=t?.discord??null,a=t?.googlechat??null,o=t?.slack??null,r=t?.signal??null,c=t?.imessage??null,u=t?.nostr??null,f=hp(e.snapshot).map((m,v)=>({key:m,enabled:Uf(m,e),order:v})).sort((m,v)=>m.enabled!==v.enabled?m.enabled?-1:1:m.order-v.order);return l`
    <section class="grid grid-cols-2">
      ${f.map(m=>vp(m.key,e,{whatsapp:n,telegram:i,discord:s,googlechat:a,slack:o,signal:r,imessage:c,nostr:u,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">通道健康状况</div>
          <div class="card-sub">来自网关的通道状态快照。</div>
        </div>
        <div class="muted">${e.lastSuccessAt?O(e.lastSuccessAt):"无"}</div>
      </div>
      ${e.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:g}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"暂无快照。"}
      </pre>
    </section>
  `}function hp(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function vp(e,t,n){const i=Rl(e,n.channelAccounts);switch(e){case"whatsapp":return pp({props:t,whatsapp:n.whatsapp,accountCountLabel:i});case"telegram":return fp({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:i});case"discord":return op({props:t,discord:n.discord,accountCountLabel:i});case"googlechat":return lp({props:t,googleChat:n.googlechat,accountCountLabel:i});case"slack":return up({props:t,slack:n.slack,accountCountLabel:i});case"signal":return dp({props:t,signal:n.signal,accountCountLabel:i});case"imessage":return rp({props:t,imessage:n.imessage,accountCountLabel:i});case"nostr":{const s=n.channelAccounts?.nostr??[],a=s[0],o=a?.accountId??"default",r=a?.profile??null,c=t.nostrProfileAccountId===o?t.nostrProfileFormState:null,u=c?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return cp({props:t,nostr:n.nostr,nostrAccounts:s,accountCountLabel:i,profileFormState:c,profileFormCallbacks:u,onEditProfile:()=>t.onNostrProfileEdit(o,r)})}default:return mp(e,t,n.channelAccounts??{})}}function mp(e,t,n){const i=bp(t.snapshot,e),s=t.snapshot?.channels?.[e],a=typeof s?.configured=="boolean"?s.configured:void 0,o=typeof s?.running=="boolean"?s.running:void 0,r=typeof s?.connected=="boolean"?s.connected:void 0,c=typeof s?.lastError=="string"?s.lastError:void 0,u=n[e]??[],p=Rl(e,n);return l`
    <div class="card">
      <div class="card-title">${i}</div>
      <div class="card-sub">通道状态和配置。</div>
      ${p}

      ${u.length>0?l`
            <div class="account-card-list">
              ${u.map(f=>Ap(f))}
            </div>
          `:l`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">已配置</span>
                <span>${a==null?"无":a?"是":"否"}</span>
              </div>
              <div>
                <span class="label">运行中</span>
                <span>${o==null?"无":o?"是":"否"}</span>
              </div>
              <div>
                <span class="label">已连接</span>
                <span>${r==null?"无":r?"是":"否"}</span>
              </div>
            </div>
          `}

      ${c?l`<div class="callout danger" style="margin-top: 12px;">
            ${c}
          </div>`:g}

      ${_e({channelId:e,props:t})}
    </div>
  `}function yp(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function bp(e,t){return yp(e)[t]?.label??e?.channelLabels?.[t]??t}const $p=600*1e3;function Nl(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<$p:!1}function wp(e){return e.running?"是":Nl(e)?"活跃":"否"}function xp(e){return e.connected===!0?"是":e.connected===!1?"否":Nl(e)?"活跃":"无"}function Ap(e){const t=wp(e),n=xp(e);return l`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">运行中</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">已配置</span>
          <span>${e.configured?"是":"否"}</span>
        </div>
        <div>
          <span class="label">已连接</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">最后入站</span>
          <span>${e.lastInboundAt?O(e.lastInboundAt):"无"}</span>
        </div>
        ${e.lastError?l`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:g}
      </div>
    </div>
  `}const It=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(t,!1),It(i,t);return!0},yn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Dl=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),_p(t)}};function kp(e){this._$AN!==void 0?(yn(this),this._$AM=e,Dl(this)):this._$AM=e}function Sp(e,t=!1,n=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let a=n;a<i.length;a++)It(i[a],!1),yn(i[a]);else i!=null&&(It(i,!1),yn(i));else It(this,e)}const _p=e=>{e.type==bs.CHILD&&(e._$AP??=Sp,e._$AQ??=kp)};class Cp extends ws{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Dl(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(It(this,t),yn(this))}setValue(t){if(Uu(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const di=new WeakMap,Tp=$s(class extends Cp{render(e){return g}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),g}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=di.get(t);n===void 0&&(n=new WeakMap,di.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?di.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class Ni extends ws{constructor(t){if(super(t),this.it=g,t.type!==bs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||t==null)return this._t=void 0,this.it=t;if(t===Ee)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Ni.directiveName="unsafeHTML",Ni.resultType=1;const Di=$s(Ni);const{entries:Bl,setPrototypeOf:qa,isFrozen:Ep,getPrototypeOf:Ip,getOwnPropertyDescriptor:Lp}=Object;let{freeze:X,seal:oe,create:Bi}=Object,{apply:Ui,construct:Ki}=typeof Reflect<"u"&&Reflect;X||(X=function(t){return t});oe||(oe=function(t){return t});Ui||(Ui=function(t,n){for(var i=arguments.length,s=new Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=arguments[a];return t.apply(n,s)});Ki||(Ki=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return new t(...i)});const nn=ee(Array.prototype.forEach),Mp=ee(Array.prototype.lastIndexOf),Ga=ee(Array.prototype.pop),mt=ee(Array.prototype.push),Rp=ee(Array.prototype.splice),un=ee(String.prototype.toLowerCase),ui=ee(String.prototype.toString),fi=ee(String.prototype.match),yt=ee(String.prototype.replace),Pp=ee(String.prototype.indexOf),Fp=ee(String.prototype.trim),le=ee(Object.prototype.hasOwnProperty),Y=ee(RegExp.prototype.test),bt=Op(TypeError);function ee(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return Ui(e,t,i)}}function Op(e){return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return Ki(e,n)}}function R(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:un;qa&&qa(e,null);let i=t.length;for(;i--;){let s=t[i];if(typeof s=="string"){const a=n(s);a!==s&&(Ep(t)||(t[i]=a),s=a)}e[s]=!0}return e}function Np(e){for(let t=0;t<e.length;t++)le(e,t)||(e[t]=null);return e}function he(e){const t=Bi(null);for(const[n,i]of Bl(e))le(e,n)&&(Array.isArray(i)?t[n]=Np(i):i&&typeof i=="object"&&i.constructor===Object?t[n]=he(i):t[n]=i);return t}function $t(e,t){for(;e!==null;){const i=Lp(e,t);if(i){if(i.get)return ee(i.get);if(typeof i.value=="function")return ee(i.value)}e=Ip(e)}function n(){return null}return n}const Va=X(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),pi=X(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),gi=X(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Dp=X(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),hi=X(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Bp=X(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Wa=X(["#text"]),Qa=X(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),vi=X(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Za=X(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),sn=X(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Up=oe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Kp=oe(/<%[\w\W]*|[\w\W]*%>/gm),zp=oe(/\$\{[\w\W]*/gm),Hp=oe(/^data-[\-\w.\u00B7-\uFFFF]+$/),jp=oe(/^aria-[\-\w]+$/),Ul=oe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),qp=oe(/^(?:\w+script|data):/i),Gp=oe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Kl=oe(/^html$/i),Vp=oe(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ya=Object.freeze({__proto__:null,ARIA_ATTR:jp,ATTR_WHITESPACE:Gp,CUSTOM_ELEMENT:Vp,DATA_ATTR:Hp,DOCTYPE_NAME:Kl,ERB_EXPR:Kp,IS_ALLOWED_URI:Ul,IS_SCRIPT_OR_DATA:qp,MUSTACHE_EXPR:Up,TMPLIT_EXPR:zp});const wt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Wp=function(){return typeof window>"u"?null:window},Qp=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let i=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(i=n.getAttribute(s));const a="dompurify"+(i?"#"+i:"");try{return t.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Ja=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function zl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wp();const t=M=>zl(M);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==wt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const i=n,s=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:r,Element:c,NodeFilter:u,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:m,trustedTypes:v}=e,d=c.prototype,y=$t(d,"cloneNode"),x=$t(d,"remove"),A=$t(d,"nextSibling"),_=$t(d,"childNodes"),L=$t(d,"parentNode");if(typeof o=="function"){const M=n.createElement("template");M.content&&M.content.ownerDocument&&(n=M.content.ownerDocument)}let k,C="";const{implementation:T,createNodeIterator:N,createDocumentFragment:ue,getElementsByTagName:B}=n,{importNode:jt}=i;let H=Ja();t.isSupported=typeof Bl=="function"&&typeof L=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ct,ERB_EXPR:Ve,TMPLIT_EXPR:dt,DATA_ATTR:ut,ARIA_ATTR:cr,IS_SCRIPT_OR_DATA:dr,ATTR_WHITESPACE:Fs,CUSTOM_ELEMENT:ur}=Ya;let{IS_ALLOWED_URI:Os}=Ya,j=null;const Ns=R({},[...Va,...pi,...gi,...hi,...Wa]);let G=null;const Ds=R({},[...Qa,...vi,...Za,...sn]);let U=Object.seal(Bi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ft=null,Dn=null;const We=Object.seal(Bi(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Bs=!0,Bn=!0,Us=!1,Ks=!0,Qe=!1,qt=!0,Me=!1,Un=!1,Kn=!1,Ze=!1,Gt=!1,Vt=!1,zs=!0,Hs=!1;const fr="user-content-";let zn=!0,pt=!1,Ye={},fe=null;const Hn=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let js=null;const qs=R({},["audio","video","img","source","image","track"]);let jn=null;const Gs=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Wt="http://www.w3.org/1998/Math/MathML",Qt="http://www.w3.org/2000/svg",ye="http://www.w3.org/1999/xhtml";let Je=ye,qn=!1,Gn=null;const pr=R({},[Wt,Qt,ye],ui);let Zt=R({},["mi","mo","mn","ms","mtext"]),Yt=R({},["annotation-xml"]);const gr=R({},["title","style","font","a","script"]);let gt=null;const hr=["application/xhtml+xml","text/html"],vr="text/html";let z=null,Xe=null;const mr=n.createElement("form"),Vs=function(h){return h instanceof RegExp||h instanceof Function},Vn=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Xe&&Xe===h)){if((!h||typeof h!="object")&&(h={}),h=he(h),gt=hr.indexOf(h.PARSER_MEDIA_TYPE)===-1?vr:h.PARSER_MEDIA_TYPE,z=gt==="application/xhtml+xml"?ui:un,j=le(h,"ALLOWED_TAGS")?R({},h.ALLOWED_TAGS,z):Ns,G=le(h,"ALLOWED_ATTR")?R({},h.ALLOWED_ATTR,z):Ds,Gn=le(h,"ALLOWED_NAMESPACES")?R({},h.ALLOWED_NAMESPACES,ui):pr,jn=le(h,"ADD_URI_SAFE_ATTR")?R(he(Gs),h.ADD_URI_SAFE_ATTR,z):Gs,js=le(h,"ADD_DATA_URI_TAGS")?R(he(qs),h.ADD_DATA_URI_TAGS,z):qs,fe=le(h,"FORBID_CONTENTS")?R({},h.FORBID_CONTENTS,z):Hn,ft=le(h,"FORBID_TAGS")?R({},h.FORBID_TAGS,z):he({}),Dn=le(h,"FORBID_ATTR")?R({},h.FORBID_ATTR,z):he({}),Ye=le(h,"USE_PROFILES")?h.USE_PROFILES:!1,Bs=h.ALLOW_ARIA_ATTR!==!1,Bn=h.ALLOW_DATA_ATTR!==!1,Us=h.ALLOW_UNKNOWN_PROTOCOLS||!1,Ks=h.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Qe=h.SAFE_FOR_TEMPLATES||!1,qt=h.SAFE_FOR_XML!==!1,Me=h.WHOLE_DOCUMENT||!1,Ze=h.RETURN_DOM||!1,Gt=h.RETURN_DOM_FRAGMENT||!1,Vt=h.RETURN_TRUSTED_TYPE||!1,Kn=h.FORCE_BODY||!1,zs=h.SANITIZE_DOM!==!1,Hs=h.SANITIZE_NAMED_PROPS||!1,zn=h.KEEP_CONTENT!==!1,pt=h.IN_PLACE||!1,Os=h.ALLOWED_URI_REGEXP||Ul,Je=h.NAMESPACE||ye,Zt=h.MATHML_TEXT_INTEGRATION_POINTS||Zt,Yt=h.HTML_INTEGRATION_POINTS||Yt,U=h.CUSTOM_ELEMENT_HANDLING||{},h.CUSTOM_ELEMENT_HANDLING&&Vs(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(U.tagNameCheck=h.CUSTOM_ELEMENT_HANDLING.tagNameCheck),h.CUSTOM_ELEMENT_HANDLING&&Vs(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(U.attributeNameCheck=h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),h.CUSTOM_ELEMENT_HANDLING&&typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(U.allowCustomizedBuiltInElements=h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Qe&&(Bn=!1),Gt&&(Ze=!0),Ye&&(j=R({},Wa),G=[],Ye.html===!0&&(R(j,Va),R(G,Qa)),Ye.svg===!0&&(R(j,pi),R(G,vi),R(G,sn)),Ye.svgFilters===!0&&(R(j,gi),R(G,vi),R(G,sn)),Ye.mathMl===!0&&(R(j,hi),R(G,Za),R(G,sn))),h.ADD_TAGS&&(typeof h.ADD_TAGS=="function"?We.tagCheck=h.ADD_TAGS:(j===Ns&&(j=he(j)),R(j,h.ADD_TAGS,z))),h.ADD_ATTR&&(typeof h.ADD_ATTR=="function"?We.attributeCheck=h.ADD_ATTR:(G===Ds&&(G=he(G)),R(G,h.ADD_ATTR,z))),h.ADD_URI_SAFE_ATTR&&R(jn,h.ADD_URI_SAFE_ATTR,z),h.FORBID_CONTENTS&&(fe===Hn&&(fe=he(fe)),R(fe,h.FORBID_CONTENTS,z)),h.ADD_FORBID_CONTENTS&&(fe===Hn&&(fe=he(fe)),R(fe,h.ADD_FORBID_CONTENTS,z)),zn&&(j["#text"]=!0),Me&&R(j,["html","head","body"]),j.table&&(R(j,["tbody"]),delete ft.tbody),h.TRUSTED_TYPES_POLICY){if(typeof h.TRUSTED_TYPES_POLICY.createHTML!="function")throw bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof h.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');k=h.TRUSTED_TYPES_POLICY,C=k.createHTML("")}else k===void 0&&(k=Qp(v,s)),k!==null&&typeof C=="string"&&(C=k.createHTML(""));X&&X(h),Xe=h}},Ws=R({},[...pi,...gi,...Dp]),Qs=R({},[...hi,...Bp]),yr=function(h){let S=L(h);(!S||!S.tagName)&&(S={namespaceURI:Je,tagName:"template"});const I=un(h.tagName),D=un(S.tagName);return Gn[h.namespaceURI]?h.namespaceURI===Qt?S.namespaceURI===ye?I==="svg":S.namespaceURI===Wt?I==="svg"&&(D==="annotation-xml"||Zt[D]):!!Ws[I]:h.namespaceURI===Wt?S.namespaceURI===ye?I==="math":S.namespaceURI===Qt?I==="math"&&Yt[D]:!!Qs[I]:h.namespaceURI===ye?S.namespaceURI===Qt&&!Yt[D]||S.namespaceURI===Wt&&!Zt[D]?!1:!Qs[I]&&(gr[I]||!Ws[I]):!!(gt==="application/xhtml+xml"&&Gn[h.namespaceURI]):!1},pe=function(h){mt(t.removed,{element:h});try{L(h).removeChild(h)}catch{x(h)}},Re=function(h,S){try{mt(t.removed,{attribute:S.getAttributeNode(h),from:S})}catch{mt(t.removed,{attribute:null,from:S})}if(S.removeAttribute(h),h==="is")if(Ze||Gt)try{pe(S)}catch{}else try{S.setAttribute(h,"")}catch{}},Zs=function(h){let S=null,I=null;if(Kn)h="<remove></remove>"+h;else{const K=fi(h,/^[\r\n\t ]+/);I=K&&K[0]}gt==="application/xhtml+xml"&&Je===ye&&(h='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+h+"</body></html>");const D=k?k.createHTML(h):h;if(Je===ye)try{S=new m().parseFromString(D,gt)}catch{}if(!S||!S.documentElement){S=T.createDocument(Je,"template",null);try{S.documentElement.innerHTML=qn?C:D}catch{}}const Q=S.body||S.documentElement;return h&&I&&Q.insertBefore(n.createTextNode(I),Q.childNodes[0]||null),Je===ye?B.call(S,Me?"html":"body")[0]:Me?S.documentElement:Q},Ys=function(h){return N.call(h.ownerDocument||h,h,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Wn=function(h){return h instanceof f&&(typeof h.nodeName!="string"||typeof h.textContent!="string"||typeof h.removeChild!="function"||!(h.attributes instanceof p)||typeof h.removeAttribute!="function"||typeof h.setAttribute!="function"||typeof h.namespaceURI!="string"||typeof h.insertBefore!="function"||typeof h.hasChildNodes!="function")},Js=function(h){return typeof r=="function"&&h instanceof r};function be(M,h,S){nn(M,I=>{I.call(t,h,S,Xe)})}const Xs=function(h){let S=null;if(be(H.beforeSanitizeElements,h,null),Wn(h))return pe(h),!0;const I=z(h.nodeName);if(be(H.uponSanitizeElement,h,{tagName:I,allowedTags:j}),qt&&h.hasChildNodes()&&!Js(h.firstElementChild)&&Y(/<[/\w!]/g,h.innerHTML)&&Y(/<[/\w!]/g,h.textContent)||h.nodeType===wt.progressingInstruction||qt&&h.nodeType===wt.comment&&Y(/<[/\w]/g,h.data))return pe(h),!0;if(!(We.tagCheck instanceof Function&&We.tagCheck(I))&&(!j[I]||ft[I])){if(!ft[I]&&ta(I)&&(U.tagNameCheck instanceof RegExp&&Y(U.tagNameCheck,I)||U.tagNameCheck instanceof Function&&U.tagNameCheck(I)))return!1;if(zn&&!fe[I]){const D=L(h)||h.parentNode,Q=_(h)||h.childNodes;if(Q&&D){const K=Q.length;for(let te=K-1;te>=0;--te){const $e=y(Q[te],!0);$e.__removalCount=(h.__removalCount||0)+1,D.insertBefore($e,A(h))}}}return pe(h),!0}return h instanceof c&&!yr(h)||(I==="noscript"||I==="noembed"||I==="noframes")&&Y(/<\/no(script|embed|frames)/i,h.innerHTML)?(pe(h),!0):(Qe&&h.nodeType===wt.text&&(S=h.textContent,nn([ct,Ve,dt],D=>{S=yt(S,D," ")}),h.textContent!==S&&(mt(t.removed,{element:h.cloneNode()}),h.textContent=S)),be(H.afterSanitizeElements,h,null),!1)},ea=function(h,S,I){if(zs&&(S==="id"||S==="name")&&(I in n||I in mr))return!1;if(!(Bn&&!Dn[S]&&Y(ut,S))){if(!(Bs&&Y(cr,S))){if(!(We.attributeCheck instanceof Function&&We.attributeCheck(S,h))){if(!G[S]||Dn[S]){if(!(ta(h)&&(U.tagNameCheck instanceof RegExp&&Y(U.tagNameCheck,h)||U.tagNameCheck instanceof Function&&U.tagNameCheck(h))&&(U.attributeNameCheck instanceof RegExp&&Y(U.attributeNameCheck,S)||U.attributeNameCheck instanceof Function&&U.attributeNameCheck(S,h))||S==="is"&&U.allowCustomizedBuiltInElements&&(U.tagNameCheck instanceof RegExp&&Y(U.tagNameCheck,I)||U.tagNameCheck instanceof Function&&U.tagNameCheck(I))))return!1}else if(!jn[S]){if(!Y(Os,yt(I,Fs,""))){if(!((S==="src"||S==="xlink:href"||S==="href")&&h!=="script"&&Pp(I,"data:")===0&&js[h])){if(!(Us&&!Y(dr,yt(I,Fs,"")))){if(I)return!1}}}}}}}return!0},ta=function(h){return h!=="annotation-xml"&&fi(h,ur)},na=function(h){be(H.beforeSanitizeAttributes,h,null);const{attributes:S}=h;if(!S||Wn(h))return;const I={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:G,forceKeepAttr:void 0};let D=S.length;for(;D--;){const Q=S[D],{name:K,namespaceURI:te,value:$e}=Q,et=z(K),Qn=$e;let V=K==="value"?Qn:Fp(Qn);if(I.attrName=et,I.attrValue=V,I.keepAttr=!0,I.forceKeepAttr=void 0,be(H.uponSanitizeAttribute,h,I),V=I.attrValue,Hs&&(et==="id"||et==="name")&&(Re(K,h),V=fr+V),qt&&Y(/((--!?|])>)|<\/(style|title|textarea)/i,V)){Re(K,h);continue}if(et==="attributename"&&fi(V,"href")){Re(K,h);continue}if(I.forceKeepAttr)continue;if(!I.keepAttr){Re(K,h);continue}if(!Ks&&Y(/\/>/i,V)){Re(K,h);continue}Qe&&nn([ct,Ve,dt],sa=>{V=yt(V,sa," ")});const ia=z(h.nodeName);if(!ea(ia,et,V)){Re(K,h);continue}if(k&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!te)switch(v.getAttributeType(ia,et)){case"TrustedHTML":{V=k.createHTML(V);break}case"TrustedScriptURL":{V=k.createScriptURL(V);break}}if(V!==Qn)try{te?h.setAttributeNS(te,K,V):h.setAttribute(K,V),Wn(h)?pe(h):Ga(t.removed)}catch{Re(K,h)}}be(H.afterSanitizeAttributes,h,null)},br=function M(h){let S=null;const I=Ys(h);for(be(H.beforeSanitizeShadowDOM,h,null);S=I.nextNode();)be(H.uponSanitizeShadowNode,S,null),Xs(S),na(S),S.content instanceof a&&M(S.content);be(H.afterSanitizeShadowDOM,h,null)};return t.sanitize=function(M){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S=null,I=null,D=null,Q=null;if(qn=!M,qn&&(M="<!-->"),typeof M!="string"&&!Js(M))if(typeof M.toString=="function"){if(M=M.toString(),typeof M!="string")throw bt("dirty is not a string, aborting")}else throw bt("toString is not a function");if(!t.isSupported)return M;if(Un||Vn(h),t.removed=[],typeof M=="string"&&(pt=!1),pt){if(M.nodeName){const $e=z(M.nodeName);if(!j[$e]||ft[$e])throw bt("root node is forbidden and cannot be sanitized in-place")}}else if(M instanceof r)S=Zs("<!---->"),I=S.ownerDocument.importNode(M,!0),I.nodeType===wt.element&&I.nodeName==="BODY"||I.nodeName==="HTML"?S=I:S.appendChild(I);else{if(!Ze&&!Qe&&!Me&&M.indexOf("<")===-1)return k&&Vt?k.createHTML(M):M;if(S=Zs(M),!S)return Ze?null:Vt?C:""}S&&Kn&&pe(S.firstChild);const K=Ys(pt?M:S);for(;D=K.nextNode();)Xs(D),na(D),D.content instanceof a&&br(D.content);if(pt)return M;if(Ze){if(Gt)for(Q=ue.call(S.ownerDocument);S.firstChild;)Q.appendChild(S.firstChild);else Q=S;return(G.shadowroot||G.shadowrootmode)&&(Q=jt.call(i,Q,!0)),Q}let te=Me?S.outerHTML:S.innerHTML;return Me&&j["!doctype"]&&S.ownerDocument&&S.ownerDocument.doctype&&S.ownerDocument.doctype.name&&Y(Kl,S.ownerDocument.doctype.name)&&(te="<!DOCTYPE "+S.ownerDocument.doctype.name+`>
`+te),Qe&&nn([ct,Ve,dt],$e=>{te=yt(te,$e," ")}),k&&Vt?k.createHTML(te):te},t.setConfig=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Vn(M),Un=!0},t.clearConfig=function(){Xe=null,Un=!1},t.isValidAttribute=function(M,h,S){Xe||Vn({});const I=z(M),D=z(h);return ea(I,D,S)},t.addHook=function(M,h){typeof h=="function"&&mt(H[M],h)},t.removeHook=function(M,h){if(h!==void 0){const S=Mp(H[M],h);return S===-1?void 0:Rp(H[M],S,1)[0]}return Ga(H[M])},t.removeHooks=function(M){H[M]=[]},t.removeAllHooks=function(){H=Ja()},t}var zi=zl();function ks(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ge=ks();function Hl(e){Ge=e}var Lt={exec:()=>null};function P(e,t=""){let n=typeof e=="string"?e:e.source,i={replace:(s,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(J.caret,"$1"),n=n.replace(s,o),i},getRegex:()=>new RegExp(n,t)};return i}var Zp=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),J={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Yp=/^(?:[ \t]*(?:\n|$))+/,Jp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Xp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ht=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,eg=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ss=/(?:[*+-]|\d{1,9}[.)])/,jl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ql=P(jl).replace(/bull/g,Ss).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),tg=P(jl).replace(/bull/g,Ss).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),_s=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ng=/^[^\n]+/,Cs=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ig=P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Cs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),sg=P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ss).getRegex(),Fn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ts=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ag=P("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ts).replace("tag",Fn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Gl=P(_s).replace("hr",Ht).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),og=P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Gl).getRegex(),Es={blockquote:og,code:Jp,def:ig,fences:Xp,heading:eg,hr:Ht,html:ag,lheading:ql,list:sg,newline:Yp,paragraph:Gl,table:Lt,text:ng},Xa=P("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ht).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),lg={...Es,lheading:tg,table:Xa,paragraph:P(_s).replace("hr",Ht).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Xa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex()},rg={...Es,html:P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ts).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Lt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:P(_s).replace("hr",Ht).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ql).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},cg=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,dg=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Vl=/^( {2,}|\\)\n(?!\s*$)/,ug=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,On=/[\p{P}\p{S}]/u,Is=/[\s\p{P}\p{S}]/u,Wl=/[^\s\p{P}\p{S}]/u,fg=P(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Is).getRegex(),Ql=/(?!~)[\p{P}\p{S}]/u,pg=/(?!~)[\s\p{P}\p{S}]/u,gg=/(?:[^\s\p{P}\p{S}]|~)/u,hg=P(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Zp?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Zl=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,vg=P(Zl,"u").replace(/punct/g,On).getRegex(),mg=P(Zl,"u").replace(/punct/g,Ql).getRegex(),Yl="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",yg=P(Yl,"gu").replace(/notPunctSpace/g,Wl).replace(/punctSpace/g,Is).replace(/punct/g,On).getRegex(),bg=P(Yl,"gu").replace(/notPunctSpace/g,gg).replace(/punctSpace/g,pg).replace(/punct/g,Ql).getRegex(),$g=P("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Wl).replace(/punctSpace/g,Is).replace(/punct/g,On).getRegex(),wg=P(/\\(punct)/,"gu").replace(/punct/g,On).getRegex(),xg=P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ag=P(Ts).replace("(?:-->|$)","-->").getRegex(),kg=P("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ag).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bn=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Sg=P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",bn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Jl=P(/^!?\[(label)\]\[(ref)\]/).replace("label",bn).replace("ref",Cs).getRegex(),Xl=P(/^!?\[(ref)\](?:\[\])?/).replace("ref",Cs).getRegex(),_g=P("reflink|nolink(?!\\()","g").replace("reflink",Jl).replace("nolink",Xl).getRegex(),eo=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ls={_backpedal:Lt,anyPunctuation:wg,autolink:xg,blockSkip:hg,br:Vl,code:dg,del:Lt,emStrongLDelim:vg,emStrongRDelimAst:yg,emStrongRDelimUnd:$g,escape:cg,link:Sg,nolink:Xl,punctuation:fg,reflink:Jl,reflinkSearch:_g,tag:kg,text:ug,url:Lt},Cg={...Ls,link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",bn).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bn).getRegex()},Hi={...Ls,emStrongRDelimAst:bg,emStrongLDelim:mg,url:P(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",eo).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:P(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",eo).getRegex()},Tg={...Hi,br:P(Vl).replace("{2,}","*").getRegex(),text:P(Hi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},an={normal:Es,gfm:lg,pedantic:rg},xt={normal:Ls,gfm:Hi,breaks:Tg,pedantic:Cg},Eg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},to=e=>Eg[e];function Ae(e,t){if(t){if(J.escapeTest.test(e))return e.replace(J.escapeReplace,to)}else if(J.escapeTestNoEncode.test(e))return e.replace(J.escapeReplaceNoEncode,to);return e}function no(e){try{e=encodeURI(e).replace(J.percentDecode,"%")}catch{return null}return e}function io(e,t){let n=e.replace(J.findPipe,(a,o,r)=>{let c=!1,u=o;for(;--u>=0&&r[u]==="\\";)c=!c;return c?"|":" |"}),i=n.split(J.splitPipe),s=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(J.slashPipe,"|");return i}function At(e,t,n){let i=e.length;if(i===0)return"";let s=0;for(;s<i&&e.charAt(i-s-1)===t;)s++;return e.slice(0,i-s)}function Ig(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let i=0;i<e.length;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])n++;else if(e[i]===t[1]&&(n--,n<0))return i;return n>0?-2:-1}function so(e,t,n,i,s){let a=t.href,o=t.title||null,r=e[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:o,text:r,tokens:i.inlineTokens(r)};return i.state.inLink=!1,c}function Lg(e,t,n){let i=e.match(n.other.indentCodeCompensation);if(i===null)return t;let s=i[1];return t.split(`
`).map(a=>{let o=a.match(n.other.beginningSpace);if(o===null)return a;let[r]=o;return r.length>=s.length?a.slice(s.length):a}).join(`
`)}var $n=class{options;rules;lexer;constructor(e){this.options=e||Ge}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:At(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],i=Lg(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let i=At(n,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:At(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=At(t[0],`
`).split(`
`),i="",s="",a=[];for(;n.length>0;){let o=!1,r=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))r.push(n[c]),o=!0;else if(!o)r.push(n[c]);else break;n=n.slice(c);let u=r.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${u}`:u,s=s?`${s}
${p}`:p;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,a,!0),this.lexer.state.top=f,n.length===0)break;let m=a.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let v=m,d=v.raw+`
`+n.join(`
`),y=this.blockquote(d);a[a.length-1]=y,i=i.substring(0,i.length-v.raw.length)+y.raw,s=s.substring(0,s.length-v.text.length)+y.text;break}else if(m?.type==="list"){let v=m,d=v.raw+`
`+n.join(`
`),y=this.list(d);a[a.length-1]=y,i=i.substring(0,i.length-m.raw.length)+y.raw,s=s.substring(0,s.length-v.raw.length)+y.raw,n=d.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let c=!1,u="",p="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let f=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),m=e.split(`
`,1)[0],v=!f.trim(),d=0;if(this.options.pedantic?(d=2,p=f.trimStart()):v?d=t[1].length+1:(d=t[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,p=f.slice(d),d+=t[1].length),v&&this.rules.other.blankLine.test(m)&&(u+=m+`
`,e=e.substring(m.length+1),c=!0),!c){let y=this.rules.other.nextBulletRegex(d),x=this.rules.other.hrRegex(d),A=this.rules.other.fencesBeginRegex(d),_=this.rules.other.headingBeginRegex(d),L=this.rules.other.htmlBeginRegex(d);for(;e;){let k=e.split(`
`,1)[0],C;if(m=k,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),C=m):C=m.replace(this.rules.other.tabCharGlobal,"    "),A.test(m)||_.test(m)||L.test(m)||y.test(m)||x.test(m))break;if(C.search(this.rules.other.nonSpaceChar)>=d||!m.trim())p+=`
`+C.slice(d);else{if(v||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||A.test(f)||_.test(f)||x.test(f))break;p+=`
`+m}!v&&!m.trim()&&(v=!0),u+=k+`
`,e=e.substring(k.length+1),f=C.slice(d)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),s.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),s.raw+=u}let r=s.items.at(-1);if(r)r.raw=r.raw.trimEnd(),r.text=r.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c of s.items){if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),c.task){if(c.text=c.text.replace(this.rules.other.listReplaceTask,""),c.tokens[0]?.type==="text"||c.tokens[0]?.type==="paragraph"){c.tokens[0].raw=c.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),c.tokens[0].text=c.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let p={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=p.checked,s.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=p.raw+c.tokens[0].raw,c.tokens[0].text=p.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(p)):c.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):c.tokens.unshift(p)}}if(!s.loose){let u=c.tokens.filter(f=>f.type==="space"),p=u.length>0&&u.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=p}}if(s.loose)for(let c of s.items){c.loose=!0;for(let u of c.tokens)u.type==="text"&&(u.type="paragraph")}return s}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=io(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<n.length;o++)a.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:a.align[o]});for(let o of s)a.rows.push(io(o,a.header.length).map((r,c)=>({text:r,tokens:this.lexer.inline(r),header:!1,align:a.align[c]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let a=At(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=Ig(t[2],"()");if(a===-2)return;if(a>-1){let o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(i);a&&(i=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?i=i.slice(1):i=i.slice(1,-1)),so(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[i.toLowerCase()];if(!s){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return so(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!(!i||i[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!n||this.rules.inline.punctuation.exec(n))){let s=[...i[0]].length-1,a,o,r=s,c=0,u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+s);(i=u.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(o=[...a].length,i[3]||i[4]){r+=o;continue}else if((i[5]||i[6])&&s%3&&!((s+o)%3)){c+=o;continue}if(r-=o,r>0)continue;o=Math.min(o,o+r+c);let p=[...i[0]][0].length,f=e.slice(0,s+i.index+p+o);if(Math.min(s,o)%2){let v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}let m=f.slice(2,-2);return{type:"strong",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=t[1],i="mailto:"+n):(n=t[1],i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]==="@")n=t[0],i="mailto:"+n;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(s!==t[0]);n=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},re=class ji{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ge,this.options.tokenizer=this.options.tokenizer||new $n,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:J,block:an.normal,inline:xt.normal};this.options.pedantic?(n.block=an.pedantic,n.inline=xt.pedantic):this.options.gfm&&(n.block=an.gfm,this.options.breaks?n.inline=xt.breaks:n.inline=xt.gfm),this.tokenizer.rules=n}static get rules(){return{block:an,inline:xt}}static lex(t,n){return new ji(n).lex(t)}static lexInline(t,n){return new ji(n).inlineTokens(t)}lex(t){t=t.replace(J.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],i=!1){for(this.options.pedantic&&(t=t.replace(J.tabCharGlobal,"    ").replace(J.spaceLine,""));t;){let s;if(this.options.extensions?.block?.some(o=>(s=o.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let o=n.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.at(-1).src=o.text):n.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},n.push(s));continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),n.push(s);continue}let a=t;if(this.options.extensions?.startBlock){let o=1/0,r=t.slice(1),c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},r),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(a=t.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(a))){let o=n.at(-1);i&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(s),i=a.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let o=n.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(s);continue}if(t){let o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let i=t,s=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)a=s[2]?s[2].length:0,i=i.slice(0,s.index+a)+"["+"a".repeat(s[0].length-a-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,r="";for(;t;){o||(r=""),o=!1;let c;if(this.options.extensions?.inline?.some(p=>(c=p.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);let p=n.at(-1);c.type==="text"&&p?.type==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,i,r)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let u=t;if(this.options.extensions?.startInline){let p=1/0,f=t.slice(1),m;this.options.extensions.startInline.forEach(v=>{m=v.call({lexer:this},f),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(u=t.substring(0,p+1))}if(c=this.tokenizer.inlineText(u)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(r=c.raw.slice(-1)),o=!0;let p=n.at(-1);p?.type==="text"?(p.raw+=c.raw,p.text+=c.text):n.push(c);continue}if(t){let p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},wn=class{options;parser;constructor(e){this.options=e||Ge}space(e){return""}code({text:e,lang:t,escaped:n}){let i=(t||"").match(J.notSpaceStart)?.[0],s=e.replace(J.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Ae(i)+'">'+(n?s:Ae(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:Ae(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,i="";for(let o=0;o<e.items.length;o++){let r=e.items[o];i+=this.listitem(r)}let s=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+s+a+`>
`+i+"</"+s+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let i="";for(let s=0;s<e.rows.length;s++){let a=e.rows[s];n="";for(let o=0;o<a.length;o++)n+=this.tablecell(a[o]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ae(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let i=this.parser.parseInline(n),s=no(e);if(s===null)return i;e=s;let a='<a href="'+e+'"';return t&&(a+=' title="'+Ae(t)+'"'),a+=">"+i+"</a>",a}image({href:e,title:t,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let s=no(e);if(s===null)return Ae(n);e=s;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${Ae(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ae(e.text)}},Ms=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},ce=class qi{options;renderer;textRenderer;constructor(t){this.options=t||Ge,this.options.renderer=this.options.renderer||new wn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ms}static parse(t,n){return new qi(n).parse(t)}static parseInline(t,n){return new qi(n).parseInline(t)}parse(t){let n="";for(let i=0;i<t.length;i++){let s=t[i];if(this.options.extensions?.renderers?.[s.type]){let o=s,r=this.options.extensions.renderers[o.type].call({parser:this},o);if(r!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){n+=r||"";continue}}let a=s;switch(a.type){case"space":{n+=this.renderer.space(a);break}case"hr":{n+=this.renderer.hr(a);break}case"heading":{n+=this.renderer.heading(a);break}case"code":{n+=this.renderer.code(a);break}case"table":{n+=this.renderer.table(a);break}case"blockquote":{n+=this.renderer.blockquote(a);break}case"list":{n+=this.renderer.list(a);break}case"checkbox":{n+=this.renderer.checkbox(a);break}case"html":{n+=this.renderer.html(a);break}case"def":{n+=this.renderer.def(a);break}case"paragraph":{n+=this.renderer.paragraph(a);break}case"text":{n+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,n=this.renderer){let i="";for(let s=0;s<t.length;s++){let a=t[s];if(this.options.extensions?.renderers?.[a.type]){let r=this.options.extensions.renderers[a.type].call({parser:this},a);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){i+=r||"";continue}}let o=a;switch(o.type){case"escape":{i+=n.text(o);break}case"html":{i+=n.html(o);break}case"link":{i+=n.link(o);break}case"image":{i+=n.image(o);break}case"checkbox":{i+=n.checkbox(o);break}case"strong":{i+=n.strong(o);break}case"em":{i+=n.em(o);break}case"codespan":{i+=n.codespan(o);break}case"br":{i+=n.br(o);break}case"del":{i+=n.del(o);break}case"text":{i+=n.text(o);break}default:{let r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return i}},St=class{options;block;constructor(e){this.options=e||Ge}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?re.lex:re.lexInline}provideParser(){return this.block?ce.parse:ce.parseInline}},Mg=class{defaults=ks();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ce;Renderer=wn;TextRenderer=Ms;Lexer=re;Tokenizer=$n;Hooks=St;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{let s=i;for(let a of s.header)n=n.concat(this.walkTokens(a.tokens,t));for(let a of s.rows)for(let o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{let s=i;n=n.concat(this.walkTokens(s.items,t));break}default:{let s=i;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{let o=s[a].flat(1/0);n=n.concat(this.walkTokens(o,t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let a=t.renderers[s.name];a?t.renderers[s.name]=function(...o){let r=s.renderer.apply(this,o);return r===!1&&(r=a.apply(this,o)),r}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[s.level];a?a.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){let s=this.defaults.renderer||new wn(this.defaults);for(let a in n.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,r=n.renderer[o],c=s[o];s[o]=(...u)=>{let p=r.apply(s,u);return p===!1&&(p=c.apply(s,u)),p||""}}i.renderer=s}if(n.tokenizer){let s=this.defaults.tokenizer||new $n(this.defaults);for(let a in n.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,r=n.tokenizer[o],c=s[o];s[o]=(...u)=>{let p=r.apply(s,u);return p===!1&&(p=c.apply(s,u)),p}}i.tokenizer=s}if(n.hooks){let s=this.defaults.hooks||new St;for(let a in n.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,r=n.hooks[o],c=s[o];St.passThroughHooks.has(a)?s[o]=u=>{if(this.defaults.async&&St.passThroughHooksRespectAsync.has(a))return(async()=>{let f=await r.call(s,u);return c.call(s,f)})();let p=r.call(s,u);return c.call(s,p)}:s[o]=(...u)=>{if(this.defaults.async)return(async()=>{let f=await r.apply(s,u);return f===!1&&(f=await c.apply(s,u)),f})();let p=r.apply(s,u);return p===!1&&(p=c.apply(s,u)),p}}i.hooks=s}if(n.walkTokens){let s=this.defaults.walkTokens,a=n.walkTokens;i.walkTokens=function(o){let r=[];return r.push(a.call(this,o)),s&&(r=r.concat(s.call(this,o))),r}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return re.lex(e,t??this.defaults)}parser(e,t){return ce.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let i={...n},s={...this.defaults,...i},a=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=e),s.async)return(async()=>{let o=s.hooks?await s.hooks.preprocess(t):t,r=await(s.hooks?await s.hooks.provideLexer():e?re.lex:re.lexInline)(o,s),c=s.hooks?await s.hooks.processAllTokens(r):r;s.walkTokens&&await Promise.all(this.walkTokens(c,s.walkTokens));let u=await(s.hooks?await s.hooks.provideParser():e?ce.parse:ce.parseInline)(c,s);return s.hooks?await s.hooks.postprocess(u):u})().catch(a);try{s.hooks&&(t=s.hooks.preprocess(t));let o=(s.hooks?s.hooks.provideLexer():e?re.lex:re.lexInline)(t,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let r=(s.hooks?s.hooks.provideParser():e?ce.parse:ce.parseInline)(o,s);return s.hooks&&(r=s.hooks.postprocess(r)),r}catch(o){return a(o)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+Ae(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}}},qe=new Mg;function F(e,t){return qe.parse(e,t)}F.options=F.setOptions=function(e){return qe.setOptions(e),F.defaults=qe.defaults,Hl(F.defaults),F};F.getDefaults=ks;F.defaults=Ge;F.use=function(...e){return qe.use(...e),F.defaults=qe.defaults,Hl(F.defaults),F};F.walkTokens=function(e,t){return qe.walkTokens(e,t)};F.parseInline=qe.parseInline;F.Parser=ce;F.parser=ce.parse;F.Renderer=wn;F.TextRenderer=Ms;F.Lexer=re;F.lexer=re.lex;F.Tokenizer=$n;F.Hooks=St;F.parse=F;F.options;F.setOptions;F.use;F.walkTokens;F.parseInline;ce.parse;re.lex;F.setOptions({gfm:!0,breaks:!0});const Rg=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul","img"],Pg=["class","href","rel","target","title","start","src","alt"],ao={ALLOWED_TAGS:Rg,ALLOWED_ATTR:Pg,ADD_DATA_URI_TAGS:["img"]};let oo=!1;const Fg=14e4,Og=4e4,Ng=200,mi=5e4,Be=new Map;function Dg(e){const t=Be.get(e);return t===void 0?null:(Be.delete(e),Be.set(e,t),t)}function lo(e,t){if(Be.set(e,t),Be.size<=Ng)return;const n=Be.keys().next().value;n&&Be.delete(n)}function Bg(){oo||(oo=!0,zi.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function Gi(e){const t=e.trim();if(!t)return"";if(Bg(),t.length<=mi){const o=Dg(t);if(o!==null)return o}const n=No(t,Fg),i=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Og){const r=`<pre class="code-block">${tr(`${n.text}${i}`)}</pre>`,c=zi.sanitize(r,ao);return t.length<=mi&&lo(t,c),c}const s=F.parse(`${n.text}${i}`,{renderer:er}),a=zi.sanitize(s,ao);return t.length<=mi&&lo(t,a),a}const er=new F.Renderer;er.html=({text:e})=>tr(e);function tr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Ug=1500,Kg=2e3,nr="Copy as markdown",zg="Copied",Hg="Copy failed";async function jg(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function on(e,t){e.title=t,e.setAttribute("aria-label",t)}function qg(e){const t=e.label??nr;return l`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const i=n.currentTarget;if(i?.querySelector(".chat-copy-btn__icon"),!i||i.dataset.copying==="1")return;i.dataset.copying="1",i.setAttribute("aria-busy","true"),i.disabled=!0;const s=await jg(e.text());if(i.isConnected){if(delete i.dataset.copying,i.removeAttribute("aria-busy"),i.disabled=!1,!s){i.dataset.error="1",on(i,Hg),window.setTimeout(()=>{i.isConnected&&(delete i.dataset.error,on(i,t))},Kg);return}i.dataset.copied="1",on(i,zg),window.setTimeout(()=>{i.isConnected&&(delete i.dataset.copied,on(i,t))},Ug)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${W.copy}</span>
        <span class="chat-copy-btn__icon-check">${W.check}</span>
      </span>
    </button>
  `}function Gg(e){return qg({text:()=>e,label:nr})}function ir(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const i=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",s=t.content,a=Array.isArray(s)?s:null,o=Array.isArray(a)&&a.some(f=>{const v=String(f.type??"").toLowerCase();return v==="toolresult"||v==="tool_result"}),r=typeof t.toolName=="string"||typeof t.tool_name=="string";(i||o||r)&&(n="toolResult");let c=[];typeof t.content=="string"?c=[{type:"text",text:t.content}]:Array.isArray(t.content)?c=t.content.map(f=>({type:f.type||"text",text:f.text,name:f.name,args:f.args||f.arguments})):typeof t.text=="string"&&(c=[{type:"text",text:t.text}]);const u=typeof t.timestamp=="number"?t.timestamp:Date.now(),p=typeof t.id=="string"?t.id:void 0;return{role:n,content:c,timestamp:u,id:p}}function Rs(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function sr(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Vg={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},Wg={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"反应",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"反应列表",detailKeys:["channelId","messageId"]},sticker:{label:"贴纸",detailKeys:["to","stickerIds"]},poll:{label:"投票",detailKeys:["question","to"]},permissions:{label:"权限",detailKeys:["channelId"]},readMessages:{label:"读取消息",detailKeys:["channelId","limit"]},sendMessage:{label:"发送",detailKeys:["to","content"]},editMessage:{label:"编辑",detailKeys:["channelId","messageId"]},deleteMessage:{label:"删除",detailKeys:["channelId","messageId"]},threadCreate:{label:"创建话题",detailKeys:["channelId","name"]},threadList:{label:"话题列表",detailKeys:["guildId","channelId"]},threadReply:{label:"话题回复",detailKeys:["channelId","content"]},pinMessage:{label:"置顶",detailKeys:["channelId","messageId"]},unpinMessage:{label:"取消置顶",detailKeys:["channelId","messageId"]},listPins:{label:"置顶列表",detailKeys:["channelId"]},searchMessages:{label:"搜索",detailKeys:["guildId","content"]},memberInfo:{label:"成员",detailKeys:["guildId","userId"]},roleInfo:{label:"角色",detailKeys:["guildId"]},emojiList:{label:"表情列表",detailKeys:["guildId"]},roleAdd:{label:"添加角色",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"移除角色",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"频道",detailKeys:["channelId"]},channelList:{label:"频道列表",detailKeys:["guildId"]},voiceStatus:{label:"语音",detailKeys:["guildId","userId"]},eventList:{label:"事件",detailKeys:["guildId"]},eventCreate:{label:"创建事件",detailKeys:["guildId","name"]},timeout:{label:"超时",detailKeys:["guildId","userId"]},kick:{label:"踢出",detailKeys:["guildId","userId"]},ban:{label:"封禁",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"反应",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"反应列表",detailKeys:["channelId","messageId"]},sendMessage:{label:"发送",detailKeys:["to","content"]},editMessage:{label:"编辑",detailKeys:["channelId","messageId"]},deleteMessage:{label:"删除",detailKeys:["channelId","messageId"]},readMessages:{label:"读取消息",detailKeys:["channelId","limit"]},pinMessage:{label:"置顶",detailKeys:["channelId","messageId"]},unpinMessage:{label:"取消置顶",detailKeys:["channelId","messageId"]},listPins:{label:"置顶列表",detailKeys:["channelId"]},memberInfo:{label:"成员",detailKeys:["userId"]},emojiList:{label:"表情列表"}}}},Qg={fallback:Vg,tools:Wg},ar=Qg,ro=ar.fallback??{icon:"puzzle"},Zg=ar.tools??{};function Yg(e){return(e??"tool").trim()}function Jg(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function Xg(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function or(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(i=>or(i)).filter(i=>!!i);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function eh(e,t){if(!e||typeof e!="object")return;let n=e;for(const i of t.split(".")){if(!i||!n||typeof n!="object")return;n=n[i]}return n}function th(e,t){for(const n of t){const i=eh(e,n),s=or(i);if(s)return s}}function nh(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const i=typeof t.offset=="number"?t.offset:void 0,s=typeof t.limit=="number"?t.limit:void 0;return i!==void 0&&s!==void 0?`${n}:${i}-${i+s}`:n}function ih(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function sh(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function ah(e){const t=Yg(e.name),n=t.toLowerCase(),i=Zg[n],s=i?.icon??ro.icon??"puzzle",a=i?.title??Jg(t),o=i?.label??t,r=e.args&&typeof e.args=="object"?e.args.action:void 0,c=typeof r=="string"?r.trim():void 0,u=sh(i,c),p=Xg(u?.label??c);let f;n==="read"&&(f=nh(e.args)),!f&&(n==="write"||n==="edit"||n==="attach")&&(f=ih(e.args));const m=u?.detailKeys??i?.detailKeys??ro.detailKeys??[];return!f&&m.length>0&&(f=th(e.args,m)),!f&&e.meta&&(f=e.meta),f&&(f=lh(f)),{name:t,icon:s,title:a,label:o,verb:p,detail:f}}function oh(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function lh(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const rh=80,ch=2,co=100;function dh(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function uh(e){const t=e.split(`
`),n=t.slice(0,ch),i=n.join(`
`);return i.length>co?i.slice(0,co)+"…":n.length<t.length?i+"…":i}function fh(e){const t=e,n=ph(t.content),i=[];for(const s of n){const a=String(s.type??"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(a)||typeof s.name=="string"&&s.arguments!=null)&&i.push({kind:"call",name:s.name??"tool",args:gh(s.arguments??s.args)})}for(const s of n){const a=String(s.type??"").toLowerCase();if(a!=="toolresult"&&a!=="tool_result")continue;const o=hh(s),r=typeof s.name=="string"?s.name:"tool";i.push({kind:"result",name:r,text:o})}if(sr(e)&&!i.some(s=>s.kind==="result")){const s=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",a=Do(e)??void 0;i.push({kind:"result",name:s,text:a})}return i}function uo(e,t){const n=ah({name:e.name,args:e.args}),i=oh(n),s=!!e.text?.trim(),a=!!t,o=a?()=>{if(s){t(dh(e.text));return}const f=`## ${n.label}

${i?`**Command:** \`${i}\`

`:""}*No output — tool completed successfully.*`;t(f)}:void 0,r=s&&(e.text?.length??0)<=rh,c=s&&!r,u=s&&r,p=!s;return l`
    <div
      class="chat-tool-card ${a?"chat-tool-card--clickable":""}"
      @click=${o}
      role=${a?"button":g}
      tabindex=${a?"0":g}
      @keydown=${a?f=>{f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),o?.())}:g}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${W[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${a?l`<span class="chat-tool-card__action">${s?"View":""} ${W.check}</span>`:g}
        ${p&&!a?l`<span class="chat-tool-card__status">${W.check}</span>`:g}
      </div>
      ${i?l`<div class="chat-tool-card__detail">${i}</div>`:g}
      ${p?l`<div class="chat-tool-card__status-text muted">Completed</div>`:g}
      ${c?l`<div class="chat-tool-card__preview mono">${uh(e.text)}</div>`:g}
      ${u?l`<div class="chat-tool-card__inline mono">${e.text}</div>`:g}
    </div>
  `}function ph(e){return Array.isArray(e)?e.filter(Boolean):[]}function gh(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function hh(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function vh(e){const n=e.content,i=[];if(Array.isArray(n))for(const s of n){if(typeof s!="object"||s===null)continue;const a=s;if(a.type==="image"){const o=a.source;if(o?.type==="base64"&&typeof o.data=="string"){const r=o.data,c=o.media_type||"image/png",u=r.startsWith("data:")?r:`data:${c};base64,${r}`;i.push({url:u})}else typeof a.url=="string"&&i.push({url:a.url})}else if(a.type==="image_url"){const o=a.image_url;typeof o?.url=="string"&&i.push({url:o.url})}}return i}function mh(e){return l`
    <div class="chat-group assistant">
      ${Ps("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function yh(e,t,n,i){const s=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),a=i?.name??"助手";return l`
    <div class="chat-group assistant">
      ${Ps("assistant",i)}
      <div class="chat-group-messages">
        ${lr({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${s}</span>
        </div>
      </div>
    </div>
  `}function bh(e,t){const n=Rs(e.role),i=t.assistantName??"助手",s=n==="user"?"你":n==="assistant"?i:n,a=n==="user"?"user":n==="assistant"?"assistant":"other",o=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return l`
    <div class="chat-group ${a}">
      ${Ps(e.role,{name:i,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((r,c)=>lr(r.message,{isStreaming:e.isStreaming&&c===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${s}</span>
          <span class="chat-group-timestamp">${o}</span>
        </div>
      </div>
    </div>
  `}function Ps(e,t){const n=Rs(e),i=t?.name?.trim()||"助手",s=t?.avatar?.trim()||"",a=n==="user"?"U":n==="assistant"?i.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",o=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return s&&n==="assistant"?$h(s)?l`<img
        class="chat-avatar ${o}"
        src="${s}"
        alt="${i}"
      />`:l`<div class="chat-avatar ${o}">${s}</div>`:l`<div class="chat-avatar ${o}">${a}</div>`}function $h(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||/^\//.test(e)}function wh(e){return e.length===0?g:l`
    <div class="chat-message-images">
      ${e.map(t=>l`
          <img
            src=${t.url}
            alt=${t.alt??"附件图片"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function lr(e,t,n){const i=e,s=typeof i.role=="string"?i.role:"unknown",a=sr(e)||s.toLowerCase()==="toolresult"||s.toLowerCase()==="tool_result"||typeof i.toolCallId=="string"||typeof i.tool_call_id=="string",o=fh(e),r=o.length>0,c=vh(e),u=c.length>0,p=Do(e),f=t.showReasoning&&s==="assistant"?wc(e):null,m=p?.trim()?p:null,v=f?Ac(f):null,d=m,y=s==="assistant"&&!!d?.trim(),x=["chat-bubble",y?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!d&&r&&a?l`${o.map(A=>uo(A,n))}`:!d&&!r&&!u?g:l`
    <div class="${x}">
      ${y?Gg(d):g}
      ${wh(c)}
      ${v?l`<div class="chat-thinking">${Di(Gi(v))}</div>`:g}
      ${d?l`<div class="chat-text">${Di(Gi(d))}</div>`:g}
      ${o.map(A=>uo(A,n))}
    </div>
  `}function xh(e){return l`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${W.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?l`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?l`<div class="sidebar-markdown">${Di(Gi(e.content))}</div>`:l`<div class="muted">No content available</div>`}
      </div>
    </div>
  `}var Ah=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Nn=(e,t,n,i)=>{for(var s=i>1?void 0:i?kh(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(s=(i?o(t,n,s):o(s))||s);return i&&s&&Ah(t,n,s),s};let lt=class extends it{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,s=(e.clientX-this.startX)/n;let a=this.startRatio+s;a=Math.max(this.minRatio,Math.min(this.maxRatio,a)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:a},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return g}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};lt.styles=wr`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;Nn([Sn({type:Number})],lt.prototype,"splitRatio",2);Nn([Sn({type:Number})],lt.prototype,"minRatio",2);Nn([Sn({type:Number})],lt.prototype,"maxRatio",2);lt=Nn([Eo("resizable-divider")],lt);const Sh=5e3;function fo(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function _h(e){return e?e.active?l`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${W.loader} 正在压缩上下文...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Sh?l`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${W.check} 上下文已压缩
        </div>
      `:g:g}function Ch(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Th(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const i=[];for(let s=0;s<n.length;s++){const a=n[s];a.type.startsWith("image/")&&i.push(a)}if(i.length!==0){e.preventDefault();for(const s of i){const a=s.getAsFile();if(!a)continue;const o=new FileReader;o.addEventListener("load",()=>{const r=o.result,c={id:Ch(),dataUrl:r,mimeType:a.type},u=t.attachments??[];t.onAttachmentsChange?.([...u,c])}),o.readAsDataURL(a)}}}function Eh(e){const t=e.attachments??[];return t.length===0?g:l`
    <div class="chat-attachments">
      ${t.map(n=>l`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="附件预览"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="移除附件"
              @click=${()=>{const i=(e.attachments??[]).filter(s=>s.id!==n.id);e.onAttachmentsChange?.(i)}}
            >
              ${W.x}
            </button>
          </div>
        `)}
    </div>
  `}function Ih(e){const t=e.connected,n=e.sending||e.stream!==null,i=!!(e.canAbort&&e.onAbort),a=e.sessions?.sessions?.find(v=>v.key===e.sessionKey)?.reasoningLevel??"off",o=e.showThinking&&a!=="off",r={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},c=(e.attachments?.length??0)>0,u=e.connected?c?"添加消息或粘贴更多图片...":"消息（↩ 发送，Shift+↩ 换行，可粘贴图片）":"连接网关以开始对话…",p=e.splitRatio??.6,f=!!(e.sidebarOpen&&e.onCloseSidebar),m=l`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?l`
              <div class="muted">正在加载对话…</div>
            `:g}
      ${Sl(Mh(e),v=>v.key,v=>v.kind==="reading-indicator"?mh(r):v.kind==="stream"?yh(v.text,v.startedAt,e.onOpenSidebar,r):v.kind==="group"?bh(v,{onOpenSidebar:e.onOpenSidebar,showReasoning:o,assistantName:e.assistantName,assistantAvatar:r.avatar}):g)}
    </div>
  `;return l`
    <section class="card chat">
      ${e.disabledReason?l`<div class="callout">${e.disabledReason}</div>`:g}

      ${e.error?l`<div class="callout danger">${e.error}</div>`:g}

      ${_h(e.compactionStatus)}

      ${e.focusMode?l`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="退出专注模式"
              title="退出专注模式"
            >
              ${W.x}
            </button>
          `:g}

      <div
        class="chat-split-container ${f?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${f?`0 0 ${p*100}%`:"1 1 100%"}"
        >
          ${m}
        </div>

        ${f?l`
              <resizable-divider
                .splitRatio=${p}
                @resize=${v=>e.onSplitRatioChange?.(v.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${xh({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:g}
      </div>

      ${e.queue.length?l`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">队列 (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(v=>l`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${v.text||(v.attachments?.length?`图片 (${v.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="移除队列消息"
                        @click=${()=>e.onQueueRemove(v.id)}
                      >
                        ${W.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:g}

      ${e.showNewMessages?l`
            <button
              class="chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              新消息 ${W.arrowDown}
            </button>
          `:g}

      <div class="chat-compose">
        ${Eh(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>消息</span>
            <textarea
              ${Tp(v=>v&&fo(v))}
              .value=${e.draft}
              ?disabled=${!e.connected}
              @keydown=${v=>{v.key==="Enter"&&(v.isComposing||v.keyCode===229||v.shiftKey||e.connected&&(v.preventDefault(),t&&e.onSend()))}}
              @input=${v=>{const d=v.target;fo(d),e.onDraftChange(d.value)}}
              @paste=${v=>Th(v,e)}
              placeholder=${u}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!i&&e.sending}
              @click=${i?e.onAbort:e.onNewSession}
            >
              ${i?"停止":"新会话"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"队列":"发送"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const po=200;function Lh(e){const t=[];let n=null;for(const i of e){if(i.kind!=="message"){n&&(t.push(n),n=null),t.push(i);continue}const s=ir(i.message),a=Rs(s.role),o=s.timestamp||Date.now();!n||n.role!==a?(n&&t.push(n),n={kind:"group",key:`group:${a}:${i.key}`,role:a,messages:[{message:i.message,key:i.key}],timestamp:o,isStreaming:!1}):n.messages.push({message:i.message,key:i.key})}return n&&t.push(n),t}function Mh(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],i=Array.isArray(e.toolMessages)?e.toolMessages:[],s=Math.max(0,n.length-po);s>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${po} messages (${s} hidden).`,timestamp:Date.now()}});for(let a=s;a<n.length;a++){const o=n[a],r=ir(o);!e.showThinking&&r.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:go(o,a),message:o})}if(e.showThinking)for(let a=0;a<i.length;a++)t.push({kind:"message",key:go(i[a],a+n.length),message:i[a]});if(e.stream!==null){const a=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:a,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:a})}return Lh(t)}function go(e,t){const n=e,i=typeof n.toolCallId=="string"?n.toolCallId:"";if(i)return`tool:${i}`;const s=typeof n.id=="string"?n.id:"";if(s)return`msg:${s}`;const a=typeof n.messageId=="string"?n.messageId:"";if(a)return`msg:${a}`;const o=typeof n.timestamp=="number"?n.timestamp:null,r=typeof n.role=="string"?n.role:"unknown";return o!=null?`msg:${r}:${o}:${t}`:`msg:${r}:${t}`}const Vi={all:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,env:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,update:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,agents:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle></svg>`,auth:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,channels:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,messages:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,commands:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,hooks:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,skills:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,tools:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,gateway:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,wizard:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h0"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>`,meta:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>`,logging:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,browser:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>`,ui:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,models:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,bindings:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,broadcast:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>`,audio:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,session:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,cron:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,web:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,discovery:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,canvasHost:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,talk:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,plugins:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v6"></path><path d="m4.93 10.93 4.24 4.24"></path><path d="M2 12h6"></path><path d="m4.93 13.07 4.24-4.24"></path><path d="M12 22v-6"></path><path d="m19.07 13.07-4.24-4.24"></path><path d="M22 12h-6"></path><path d="m19.07 10.93-4.24 4.24"></path></svg>`,default:l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`},ho=[{key:"env",label:"环境"},{key:"update",label:"更新"},{key:"agents",label:"代理"},{key:"auth",label:"身份验证"},{key:"channels",label:"通道"},{key:"messages",label:"消息"},{key:"commands",label:"命令"},{key:"hooks",label:"钩子"},{key:"skills",label:"技能"},{key:"tools",label:"工具"},{key:"gateway",label:"网关"},{key:"wizard",label:"设置向导"}],vo="__all__";function mo(e){return Vi[e]??Vi.default}function Rh(e,t){const n=As[e];return n||{label:t?.title??Se(e),description:t?.description??""}}function Ph(e){const{key:t,schema:n,uiHints:i}=e;if(!n||me(n)!=="object"||!n.properties)return[];const s=Object.entries(n.properties).map(([a,o])=>{const r=ae([t,a],i),c=r?.label??o.title??Se(a),u=r?.help??o.description??"",p=r?.order??50;return{key:a,label:c,description:u,order:p}});return s.sort((a,o)=>a.order!==o.order?a.order-o.order:a.key.localeCompare(o.key)),s}function Fh(e,t){if(!e||!t)return[];const n=[];function i(s,a,o){if(s===a)return;if(typeof s!=typeof a){n.push({path:o,from:s,to:a});return}if(typeof s!="object"||s===null||a===null){s!==a&&n.push({path:o,from:s,to:a});return}if(Array.isArray(s)&&Array.isArray(a)){JSON.stringify(s)!==JSON.stringify(a)&&n.push({path:o,from:s,to:a});return}const r=s,c=a,u=new Set([...Object.keys(r),...Object.keys(c)]);for(const p of u)i(r[p],c[p],o?`${o}.${p}`:p)}return i(e,t,""),n}function yo(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function Oh(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=Ol(e.schema),i=n.schema?n.unsupportedPaths.length>0:!1,s=n.schema?.properties??{},a=ho.filter(T=>T.key in s),o=new Set(ho.map(T=>T.key)),r=Object.keys(s).filter(T=>!o.has(T)).map(T=>({key:T,label:T.charAt(0).toUpperCase()+T.slice(1)})),c=[...a,...r],u=e.activeSection&&n.schema&&me(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,p=e.activeSection?Rh(e.activeSection,u):null,f=e.activeSection?Ph({key:e.activeSection,schema:u,uiHints:e.uiHints}):[],m=e.formMode==="form"&&!!e.activeSection&&f.length>0,v=e.activeSubsection===vo,d=e.searchQuery||v?null:e.activeSubsection??f[0]?.key??null,y=e.formMode==="form"?Fh(e.originalValue,e.formValue):[],x=e.formMode==="raw"&&e.raw!==e.originalRaw,A=e.formMode==="form"?y.length>0:x,_=!!e.formValue&&!e.loading&&!!n.schema,L=e.connected&&!e.saving&&A&&(e.formMode==="raw"?!0:_),k=e.connected&&!e.applying&&!e.updating&&A&&(e.formMode==="raw"?!0:_),C=e.connected&&!e.applying&&!e.updating;return l`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">设置</div>
          <span class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}">${t}</span>
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg class="config-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder="搜索设置..."
            .value=${e.searchQuery}
            @input=${T=>e.onSearchChange(T.target.value)}
          />
          ${e.searchQuery?l`
            <button
              class="config-search__clear"
              @click=${()=>e.onSearchChange("")}
            >×</button>
          `:g}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${Vi.all}</span>
            <span class="config-nav__label">所有设置</span>
          </button>
          ${c.map(T=>l`
            <button
              class="config-nav__item ${e.activeSection===T.key?"active":""}"
              @click=${()=>e.onSectionChange(T.key)}
            >
              <span class="config-nav__icon">${mo(T.key)}</span>
              <span class="config-nav__label">${T.label}</span>
            </button>
          `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              表单
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              原始
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${A?l`
              <span class="config-changes-badge">${e.formMode==="raw"?"未保存的更改":`${y.length} 个未保存的更改`}</span>
            `:l`
              <span class="config-status muted">无更改</span>
            `}
          </div>
          <div class="config-actions__right">
            <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onReload}>
              ${e.loading?"加载中…":"重新加载"}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!L}
              @click=${e.onSave}
            >
              ${e.saving?"保存中…":"保存"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!k}
              @click=${e.onApply}
            >
              ${e.applying?"应用中…":"应用"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!C}
              @click=${e.onUpdate}
            >
              ${e.updating?"更新中…":"更新"}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${A&&e.formMode==="form"?l`
          <details class="config-diff">
            <summary class="config-diff__summary">
              <span>查看 ${y.length} 个待处理的更改</span>
              <svg class="config-diff__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div class="config-diff__content">
              ${y.map(T=>l`
                <div class="config-diff__item">
                  <div class="config-diff__path">${T.path}</div>
                  <div class="config-diff__values">
                    <span class="config-diff__from">${yo(T.from)}</span>
                    <span class="config-diff__arrow">→</span>
                    <span class="config-diff__to">${yo(T.to)}</span>
                  </div>
                </div>
              `)}
            </div>
          </details>
        `:g}

        ${p&&e.formMode==="form"?l`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">${mo(e.activeSection??"")}</div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">${p.label}</div>
                  ${p.description?l`<div class="config-section-hero__desc">${p.description}</div>`:g}
                </div>
              </div>
            `:g}

        ${m?l`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${d===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(vo)}
                >
                  全部
                </button>
                ${f.map(T=>l`
                    <button
                      class="config-subnav__item ${d===T.key?"active":""}"
                      title=${T.description||T.label}
                      @click=${()=>e.onSubsectionChange(T.key)}
                    >
                      ${T.label}
                    </button>
                  `)}
              </div>
            `:g}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?l`
                ${e.schemaLoading?l`<div class="config-loading">
                      <div class="config-loading__spinner"></div>
                      <span>正在加载模式…</span>
                    </div>`:Zf({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:d})}
                ${i?l`<div class="callout danger" style="margin-top: 12px;">
                      表单视图无法安全编辑某些字段。
                      使用原始模式以避免丢失配置项。
                    </div>`:g}
              `:l`
                <label class="field config-raw-field">
                  <span>原始JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${T=>e.onRawChange(T.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?l`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">${JSON.stringify(e.issues,null,2)}</pre>
            </div>`:g}
      </main>
    </div>
  `}function Nh(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const i=new Set;return t.filter(s=>i.has(s)?!1:(i.add(s),!0))}function Dh(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(i=>i.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Bh(e){const t=Nh(e);return l`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">调度器</div>
        <div class="card-sub">网关内置定时调度器状态。</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">已启用</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"是":"否":"无"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">任务数</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">下次唤醒</div>
            <div class="stat-value">${xs(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"刷新中…":"刷新"}
          </button>
          ${e.error?l`<span class="muted">${e.error}</span>`:g}
        </div>
      </div>

      <div class="card">
        <div class="card-title">新建任务</div>
        <div class="card-sub">创建定时唤醒或代理运行。</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>名称</span>
            <input
              .value=${e.form.name}
              @input=${n=>e.onFormChange({name:n.target.value})}
            />
          </label>
          <label class="field">
            <span>描述</span>
            <input
              .value=${e.form.description}
              @input=${n=>e.onFormChange({description:n.target.value})}
            />
          </label>
          <label class="field">
            <span>代理 ID</span>
            <input
              .value=${e.form.agentId}
              @input=${n=>e.onFormChange({agentId:n.target.value})}
              placeholder="默认"
            />
          </label>
          <label class="field checkbox">
            <span>启用</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${n=>e.onFormChange({enabled:n.target.checked})}
            />
          </label>
          <label class="field">
            <span>调度</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${n=>e.onFormChange({scheduleKind:n.target.value})}
            >
              <option value="every">每隔</option>
              <option value="at">定时</option>
              <option value="cron">Cron 表达式</option>
            </select>
          </label>
        </div>
        ${Uh(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>会话</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${n=>e.onFormChange({sessionTarget:n.target.value})}
            >
              <option value="main">主会话</option>
              <option value="isolated">独立会话</option>
            </select>
          </label>
          <label class="field">
            <span>唤醒模式</span>
            <select
              .value=${e.form.wakeMode}
              @change=${n=>e.onFormChange({wakeMode:n.target.value})}
            >
              <option value="next-heartbeat">下次心跳</option>
              <option value="now">立即</option>
            </select>
          </label>
          <label class="field">
            <span>负载</span>
            <select
              .value=${e.form.payloadKind}
              @change=${n=>e.onFormChange({payloadKind:n.target.value})}
            >
              <option value="systemEvent">系统事件</option>
              <option value="agentTurn">代理轮次</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?"系统文本":"代理消息"}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${n=>e.onFormChange({payloadText:n.target.value})}
            rows="4"
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?l`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>分发方式</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${n=>e.onFormChange({deliveryMode:n.target.value})}
                    >
                      <option value="legacy">主会话摘要（旧版）</option>
                      <option value="announce">通告摘要（默认）</option>
                      <option value="deliver">分发完整输出</option>
                      <option value="none">无（内部）</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>超时（秒）</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${n=>e.onFormChange({timeoutSeconds:n.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"||e.form.deliveryMode==="deliver"?l`
                          <label class="field">
                            <span>通道</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${n=>e.onFormChange({deliveryChannel:n.target.value})}
                            >
                              ${t.map(n=>l`<option value=${n}>
                                    ${Dh(e,n)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>发送至</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${n=>e.onFormChange({deliveryTo:n.target.value})}
                              placeholder="+1555… 或聊天 ID"
                            />
                          </label>
                        `:g}
                  ${e.form.sessionTarget==="isolated"&&e.form.deliveryMode==="legacy"?l`
                          <label class="field">
                            <span>发布到主会话前缀</span>
                            <input
                              .value=${e.form.postToMainPrefix}
                              @input=${n=>e.onFormChange({postToMainPrefix:n.target.value})}
                            />
                          </label>
                        `:g}
                </div>
              `:g}
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${e.busy} @click=${e.onAdd}>
            ${e.busy?"保存中…":"添加任务"}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">任务列表</div>
      <div class="card-sub">网关中存储的所有定时任务。</div>
      ${e.jobs.length===0?l`
              <div class="muted" style="margin-top: 12px">暂无任务。</div>
            `:l`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(n=>Kh(n,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">运行历史</div>
      <div class="card-sub">${e.runsJobId??"（选择一个任务）"}的最近运行记录。</div>
      ${e.runsJobId==null?l`
              <div class="muted" style="margin-top: 12px">选择一个任务以查看运行历史。</div>
            `:e.runs.length===0?l`
                <div class="muted" style="margin-top: 12px">暂无运行记录。</div>
              `:l`
              <div class="list" style="margin-top: 12px;">
                ${e.runs.map(n=>zh(n))}
              </div>
            `}
    </section>
  `}function Uh(e){const t=e.form;return t.scheduleKind==="at"?l`
      <label class="field" style="margin-top: 12px;">
        <span>运行时间</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?l`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>每隔</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>单位</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">分钟</option>
            <option value="hours">小时</option>
            <option value="days">天</option>
          </select>
        </label>
      </div>
    `:l`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>表达式</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>时区（可选）</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function Kh(e,t){const i=`list-item list-item-clickable${t.runsJobId===e.id?" list-item-selected":""}`;return l`
    <div class=${i} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${Tl(e)}</div>
        <div class="muted">${El(e)}</div>
        ${e.agentId?l`<div class="muted">代理: ${e.agentId}</div>`:g}
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.enabled?"已启用":"已禁用"}</span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
      </div>
      <div class="list-meta">
        <div>${Cl(e)}</div>
        <div class="row" style="justify-content: flex-end; margin-top: 8px;">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${s=>{s.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"禁用":"启用"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${s=>{s.stopPropagation(),t.onRun(e)}}
          >
            运行
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${s=>{s.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            历史
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${s=>{s.stopPropagation(),t.onRemove(e)}}
          >
            删除
          </button>
        </div>
      </div>
    </div>
  `}function zh(e){return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${Pt(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${e.error?l`<div class="muted">${e.error}</div>`:g}
      </div>
    </div>
  `}function Hh(e){return l`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">快照</div>
            <div class="card-sub">状态、健康状况和心跳数据。</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"刷新中…":"刷新"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">状态</div>
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">健康状况</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">最后心跳</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">手动RPC</div>
        <div class="card-sub">使用JSON参数发送原始网关方法。</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>方法</span>
            <input
              .value=${e.callMethod}
              @input=${t=>e.onCallMethodChange(t.target.value)}
              placeholder="系统状态"
            />
          </label>
          <label class="field">
            <span>参数（JSON）</span>
            <textarea
              .value=${e.callParams}
              @input=${t=>e.onCallParamsChange(t.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>调用</button>
        </div>
        ${e.callError?l`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:g}
        ${e.callResult?l`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:g}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">模型</div>
      <div class="card-sub">来自models.list的目录。</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">事件日志</div>
      <div class="card-sub">最新的网关事件。</div>
      ${e.eventLog.length===0?l`<div class="muted" style="margin-top: 12px;">暂无事件。</div>`:l`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(t=>l`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${t.event}</div>
                      <div class="list-sub">${new Date(t.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${df(t.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function jh(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const i=Math.floor(n/60);return i<60?`${i}m`:`${Math.floor(i/60)}h`}function Oe(e,t){return t?l`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:g}function qh(e){const t=e.execApprovalQueue[0];if(!t)return g;const n=t.request,i=t.expiresAtMs-Date.now(),s=i>0?`${jh(i)} 后过期`:"已过期",a=e.execApprovalQueue.length;return l`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">执行审批</div>
            <div class="exec-approval-sub">${s}</div>
          </div>
          ${a>1?l`<div class="exec-approval-queue">${a} 个待处理</div>`:g}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${Oe("主机",n.host)}
          ${Oe("代理",n.agentId)}
          ${Oe("会话",n.sessionKey)}
          ${Oe("工作目录",n.cwd)}
          ${Oe("解析路径",n.resolvedPath)}
          ${Oe("安全策略",n.security)}
          ${Oe("询问模式",n.ask)}
        </div>
        ${e.execApprovalError?l`<div class="exec-approval-error">${e.execApprovalError}</div>`:g}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            允许一次
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            始终允许
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            拒绝
          </button>
        </div>
      </div>
    </div>
  `}function Gh(e){const t=e.pendingGatewayUrl;if(!t)return g;const n=e.settings.gatewayUrl||window.location.origin;return l`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite" aria-modal="true">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">⚠️ 网关地址变更请求</div>
            <div class="exec-approval-sub">请仔细核实此请求</div>
          </div>
        </div>
        <div class="exec-approval-meta">
          <div class="exec-approval-meta-row">
            <span>当前地址</span>
            <span class="mono">${n}</span>
          </div>
          <div class="exec-approval-meta-row">
            <span>请求地址</span>
            <span class="mono" style="color: var(--warning)">${t}</span>
          </div>
        </div>
        <div style="margin: 1rem 0; padding: 0.75rem; background: var(--danger-bg, rgba(239, 68, 68, 0.1)); border-radius: 0.5rem; font-size: 0.875rem;">
          <strong>安全警告：</strong>此请求来自 URL 参数。如果您不确定来源，请拒绝此请求。
          连接到恶意网关可能导致您的认证信息泄露。
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn danger"
            @click=${()=>e.rejectPendingGatewayUrl()}
          >
            拒绝
          </button>
          <button
            class="btn primary"
            @click=${()=>e.acceptPendingGatewayUrl()}
          >
            确认连接
          </button>
        </div>
      </div>
    </div>
  `}function Vh(e){return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">已连接实例</div>
          <div class="card-sub">来自网关和客户端的存在信标。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>
      ${e.lastError?l`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:g}
      ${e.statusMessage?l`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:g}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?l`<div class="muted">暂未报告任何实例。</div>`:e.entries.map(t=>Wh(t))}
      </div>
    </section>
  `}function Wh(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}秒前`:"无",n=e.mode??"未知",i=Array.isArray(e.roles)?e.roles.filter(Boolean):[],s=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],a=s.length>0?s.length>3?`${s.length} 作用域`:`作用域: ${s.join(", ")}`:null;return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"未知主机"}</div>
        <div class="list-sub">${lf(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${i.map(o=>l`<span class="chip">${o}</span>`)}
          ${a?l`<span class="chip">${a}</span>`:g}
          ${e.platform?l`<span class="chip">${e.platform}</span>`:g}
          ${e.deviceFamily?l`<span class="chip">${e.deviceFamily}</span>`:g}
          ${e.modelIdentifier?l`<span class="chip">${e.modelIdentifier}</span>`:g}
          ${e.version?l`<span class="chip">${e.version}</span>`:g}
        </div>
      </div>
      <div class="list-meta">
        <div>${rf(e)}</div>
        <div class="muted">上次输入 ${t}</div>
        <div class="muted">原因 ${e.reason??""}</div>
      </div>
    </div>
  `}const bo=["trace","debug","info","warn","error","fatal"];function Qh(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Zh(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Yh(e){const t=e.filterText.trim().toLowerCase(),n=bo.some(a=>!e.levelFilters[a]),i=e.entries.filter(a=>a.level&&!e.levelFilters[a.level]?!1:Zh(a,t)),s=t||n?"filtered":"visible";return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">日志</div>
          <div class="card-sub">网关文件日志（JSONL）。</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"加载中…":"刷新"}
          </button>
          <button
            class="btn"
            ?disabled=${i.length===0}
            @click=${()=>e.onExport(i.map(a=>a.raw),s)}
          >
            导出 ${s}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>过滤器</span>
          <input
            .value=${e.filterText}
            @input=${a=>e.onFilterTextChange(a.target.value)}
            placeholder="搜索日志"
          />
        </label>
        <label class="field checkbox">
          <span>自动跟随</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${a=>e.onToggleAutoFollow(a.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${bo.map(a=>l`
            <label class="chip log-chip ${a}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[a]}
                @change=${o=>e.onLevelToggle(a,o.target.checked)}
              />
              <span>${a}</span>
            </label>
          `)}
      </div>

      ${e.file?l`<div class="muted" style="margin-top: 10px;">文件: ${e.file}</div>`:g}
      ${e.truncated?l`<div class="callout" style="margin-top: 10px;">
            日志输出已截断；显示最新部分。
          </div>`:g}
      ${e.error?l`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:g}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${i.length===0?l`<div class="muted" style="padding: 12px;">无日志条目。</div>`:i.map(a=>l`
                <div class="log-row">
                  <div class="log-time mono">${Qh(a.time)}</div>
                  <div class="log-level ${a.level??""}">${a.level??""}</div>
                  <div class="log-subsystem mono">${a.subsystem??""}</div>
                  <div class="log-message mono">${a.message??a.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Jh(e){const t=sv(e),n=dv(e);return l`
    ${fv(n)}
    ${uv(t)}
    ${Xh(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">节点</div>
          <div class="card-sub">配对设备和实时链接。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?l`<div class="muted">未找到节点。</div>`:e.nodes.map(i=>xv(i))}
      </div>
    </section>
  `}function Xh(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],i=Array.isArray(t.paired)?t.paired:[];return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">设备</div>
          <div class="card-sub">配对请求 + 角色令牌。</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"加载中…":"刷新"}
        </button>
      </div>
      ${e.devicesError?l`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:g}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?l`
              <div class="muted" style="margin-bottom: 8px;">待处理</div>
              ${n.map(s=>ev(s,e))}
            `:g}
        ${i.length>0?l`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">已配对</div>
              ${i.map(s=>tv(s,e))}
            `:g}
        ${n.length===0&&i.length===0?l`<div class="muted">无配对设备。</div>`:g}
      </div>
    </section>
  `}function ev(e,t){const n=e.displayName?.trim()||e.deviceId,i=typeof e.ts=="number"?O(e.ts):"无",s=e.role?.trim()?`role: ${e.role}`:"角色: -",a=e.isRepair?" · repair":"",o=e.remoteIp?` · ${e.remoteIp}`:"";return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${o}</div>
        <div class="muted" style="margin-top: 6px;">
          ${s} · requested ${i}${a}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            批准
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            拒绝
          </button>
        </div>
      </div>
    </div>
  `}function tv(e,t){const n=e.displayName?.trim()||e.deviceId,i=e.remoteIp?` · ${e.remoteIp}`:"",s=`角色: ${wi(e.roles)}`,a=`范围: ${wi(e.scopes)}`,o=Array.isArray(e.tokens)?e.tokens:[];return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${i}</div>
        <div class="muted" style="margin-top: 6px;">${s} · ${a}</div>
        ${o.length===0?l`<div class="muted" style="margin-top: 6px;">令牌: 无</div>`:l`
              <div class="muted" style="margin-top: 10px;">令牌</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${o.map(r=>nv(e.deviceId,r,t))}
              </div>
            `}
      </div>
    </div>
  `}function nv(e,t,n){const i=t.revokedAtMs?"revoked":"active",s=`范围: ${wi(t.scopes)}`,a=O(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return l`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${i} · ${s} · ${a}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          更新
        </button>
        ${t.revokedAtMs?g:l`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}>
              >
                撤销
              </button>
            `}
      </div>
    </div>
  `}const Te="__defaults__",$o=[{value:"deny",label:"拒绝"},{value:"allowlist",label:"白名单"},{value:"full",label:"全部"}],iv=[{value:"off",label:"关闭"},{value:"on-miss",label:"未命中时"},{value:"always",label:"始终"}];function sv(e){const t=e.configForm,n=bv(e.nodes),{defaultBinding:i,agents:s}=wv(t),a=!!t,o=e.configSaving||e.configFormMode==="raw";return{ready:a,disabled:o,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:i,agents:s,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function wo(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function av(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function ov(e){const t=e?.defaults??{};return{security:wo(t.security),ask:av(t.ask),askFallback:wo(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function lv(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],i=[];return n.forEach(s=>{if(!s||typeof s!="object")return;const a=s,o=typeof a.id=="string"?a.id.trim():"";if(!o)return;const r=typeof a.name=="string"?a.name.trim():void 0,c=a.default===!0;i.push({id:o,name:r||void 0,isDefault:c})}),i}function rv(e,t){const n=lv(e),i=Object.keys(t?.agents??{}),s=new Map;n.forEach(o=>s.set(o.id,o)),i.forEach(o=>{s.has(o)||s.set(o,{id:o})});const a=Array.from(s.values());return a.length===0&&a.push({id:"main",isDefault:!0}),a.sort((o,r)=>{if(o.isDefault&&!r.isDefault)return-1;if(!o.isDefault&&r.isDefault)return 1;const c=o.name?.trim()?o.name:o.id,u=r.name?.trim()?r.name:r.id;return c.localeCompare(u)}),a}function cv(e,t){return e===Te?Te:e&&t.some(n=>n.id===e)?e:Te}function dv(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,i=ov(t),s=rv(e.configForm,t),a=$v(e.nodes),o=e.execApprovalsTarget;let r=o==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;o==="node"&&r&&!a.some(f=>f.id===r)&&(r=null);const c=cv(e.execApprovalsSelectedAgent,s),u=c!==Te?(t?.agents??{})[c]??null:null,p=Array.isArray(u?.allowlist)?u.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:i,selectedScope:c,selectedAgent:u,agents:s,allowlist:p,target:o,targetNodeId:r,targetNodes:a,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function uv(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return l`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">执行节点绑定</div>
          <div class="card-sub">
            使用<span class="mono">exec host=node</span>时将代理固定到特定节点。
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"保存中…":"保存"}
        </button>
      </div>

      ${e.formMode==="raw"?l`<div class="callout warn" style="margin-top: 12px;">
            将配置选项卡切换到<strong>表单</strong>模式以在此处编辑绑定。
          </div>`:g}

      ${e.ready?l`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">默认绑定</div>
                  <div class="list-sub">当代理不覆盖节点绑定时使用。</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>节点</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${i=>{const a=i.target.value.trim();e.onBindDefault(a||null)}}
                    >
                      <option value="" ?selected=${n===""}>任何节点</option>
                      ${e.nodes.map(i=>l`<option
                            value=${i.id}
                            ?selected=${n===i.id}
                          >
                            ${i.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?g:l`<div class="muted">没有可用system.run的节点。</div>`}
                </div>
              </div>

              ${e.agents.length===0?l`<div class="muted">未找到代理。</div>`:e.agents.map(i=>yv(i,e))}
            </div>
          `:l`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">加载配置以编辑绑定。</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"加载中…":"加载配置"}
            </button>
          </div>`}
    </section>
  `}function fv(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return l`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">执行审批</div>
          <div class="card-sub">
            <span class="mono">exec host=gateway/node</span>的白名单和审批策略。
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"保存中…":"保存"}
        </button>
      </div>

      ${pv(e)}

      ${t?l`
            ${gv(e)}
            ${hv(e)}
            ${e.selectedScope===Te?g:vv(e)}
          `:l`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">加载执行审批以编辑白名单。</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"加载中…":"加载审批"}
            </button>
          </div>`}
    </section>
  `}function pv(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return l`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">目标</div>
          <div class="list-sub">
            网关编辑本地审批；节点编辑选定的节点。
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>主机</span>
            <select
              ?disabled=${e.disabled}
              @change=${i=>{if(i.target.value==="node"){const o=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||o)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>网关</option>
              <option value="node" ?selected=${e.target==="node"}>节点</option>
            </select>
          </label>
          ${e.target==="node"?l`
                <label class="field">
                  <span>节点</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${i=>{const a=i.target.value.trim();e.onSelectTarget("node",a||null)}}
                  >
                    <option value="" ?selected=${n===""}>选择节点</option>
                    ${e.targetNodes.map(i=>l`<option
                          value=${i.id}
                          ?selected=${n===i.id}
                        >
                          ${i.label}
                        </option>`)}
                  </select>
                </label>
              `:g}
        </div>
      </div>
      ${e.target==="node"&&!t?l`<div class="muted">尚无节点发布执行审批广告。</div>`:g}
    </div>
  `}function gv(e){return l`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">范围</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===Te?"active":""}"
          @click=${()=>e.onSelectScope(Te)}
        >
          默认值
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return l`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function hv(e){const t=e.selectedScope===Te,n=e.defaults,i=e.selectedAgent??{},s=t?["defaults"]:["agents",e.selectedScope],a=typeof i.security=="string"?i.security:void 0,o=typeof i.ask=="string"?i.ask:void 0,r=typeof i.askFallback=="string"?i.askFallback:void 0,c=t?n.security:a??"__default__",u=t?n.ask:o??"__default__",p=t?n.askFallback:r??"__default__",f=typeof i.autoAllowSkills=="boolean"?i.autoAllowSkills:void 0,m=f??n.autoAllowSkills,v=f==null;return l`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">安全</div>
          <div class="list-sub">
            ${t?"默认安全模式。":`默认值: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>模式</span>
            <select
              ?disabled=${e.disabled}
              @change=${d=>{const x=d.target.value;!t&&x==="__default__"?e.onRemove([...s,"security"]):e.onPatch([...s,"security"],x)}}
            >
              ${t?g:l`<option value="__default__" ?selected=${c==="__default__"}>
                    使用默认值 (${n.security})
                  </option>`}
              ${$o.map(d=>l`<option
                    value=${d.value}
                    ?selected=${c===d.value}
                  >
                    ${d.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">询问</div>
          <div class="list-sub">
            ${t?"默认提示策略。":`默认值: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>模式</span>
            <select
              ?disabled=${e.disabled}
              @change=${d=>{const x=d.target.value;!t&&x==="__default__"?e.onRemove([...s,"ask"]):e.onPatch([...s,"ask"],x)}}
            >
              ${t?g:l`<option value="__default__" ?selected=${u==="__default__"}>
                    使用默认值 (${n.ask})
                  </option>`}
              ${iv.map(d=>l`<option
                    value=${d.value}
                    ?selected=${u===d.value}
                  >
                    ${d.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">询问回退</div>
          <div class="list-sub">
            ${t?"当UI提示不可用时应用。":`默认值: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>回退</span>
            <select
              ?disabled=${e.disabled}
              @change=${d=>{const x=d.target.value;!t&&x==="__default__"?e.onRemove([...s,"askFallback"]):e.onPatch([...s,"askFallback"],x)}}
            >
              ${t?g:l`<option value="__default__" ?selected=${p==="__default__"}>
                    使用默认值 (${n.askFallback})
                  </option>`}
              ${$o.map(d=>l`<option
                    value=${d.value}
                    ?selected=${p===d.value}
                  >
                    ${d.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">自动允许技能CLI</div>
          <div class="list-sub">
            ${t?"允许网关列出的技能可执行文件。":v?`使用默认值 (${n.autoAllowSkills?"开":"关"}).`:`覆盖 (${m?"开":"关"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>启用</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${m}
              @change=${d=>{const y=d.target;e.onPatch([...s,"autoAllowSkills"],y.checked)}}
            />
          </label>
          ${!t&&!v?l`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...s,"autoAllowSkills"])}
              >
                使用默认值
              </button>`:g}
        </div>
      </div>
    </div>
  `}function vv(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return l`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">白名单</div>
        <div class="card-sub">不区分大小写的通配符模式。</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const i=[...n,{pattern:""}];e.onPatch(t,i)}}
      >
        添加模式
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?l`<div class="muted">尚无白名单条目。</div>`:n.map((i,s)=>mv(e,i,s))}
    </div>
  `}function mv(e,t,n){const i=t.lastUsedAt?O(t.lastUsedAt):"从未",s=t.lastUsedCommand?xi(t.lastUsedCommand,120):null,a=t.lastResolvedPath?xi(t.lastResolvedPath,120):null;return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"新模式"}</div>
        <div class="list-sub">最后使用: ${i}</div>
        ${s?l`<div class="list-sub mono">${s}</div>`:g}
        ${a?l`<div class="list-sub mono">${a}</div>`:g}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>模式</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${o=>{const r=o.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],r.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          移除
        </button>
      </div>
    </div>
  `}function yv(e,t){const n=e.binding??"__default__",i=e.name?.trim()?`${e.name} (${e.id})`:e.id,s=t.nodes.length>0;return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${i}</div>
        <div class="list-sub">
          ${e.isDefault?"默认代理":"代理"} ·
          ${n==="__default__"?`使用默认值 (${t.defaultBinding??"任意"})`:`覆盖: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>绑定</span>
          <select
            ?disabled=${t.disabled||!s}
            @change=${a=>{const r=a.target.value.trim();t.onBindAgent(e.index,r==="__default__"?null:r)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              使用默认值
            </option>
            ${t.nodes.map(a=>l`<option
                  value=${a.id}
                  ?selected=${n===a.id}
                >
                  ${a.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function bv(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(r=>String(r)==="system.run"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,i)=>n.label.localeCompare(i.label)),t}function $v(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(r=>String(r)==="system.execApprovals.get"||String(r)==="system.execApprovals.set"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,i)=>n.label.localeCompare(i.label)),t}function wv(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const i=(e.tools??{}).exec??{},s=typeof i.node=="string"&&i.node.trim()?i.node.trim():null,a=e.agents??{},o=Array.isArray(a.list)?a.list:[];if(o.length===0)return{defaultBinding:s,agents:[t]};const r=[];return o.forEach((c,u)=>{if(!c||typeof c!="object")return;const p=c,f=typeof p.id=="string"?p.id.trim():"";if(!f)return;const m=typeof p.name=="string"?p.name.trim():void 0,v=p.default===!0,y=(p.tools??{}).exec??{},x=typeof y.node=="string"&&y.node.trim()?y.node.trim():null;r.push({id:f,name:m||void 0,index:u,isDefault:v,binding:x})}),r.length===0&&r.push(t),{defaultBinding:s,agents:r}}function xv(e){const t=!!e.connected,n=!!e.paired,i=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"未知"),s=Array.isArray(e.caps)?e.caps:[],a=Array.isArray(e.commands)?e.commands:[];return l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${i}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"已配对":"未配对"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"已连接":"离线"}
          </span>
          ${s.slice(0,12).map(o=>l`<span class="chip">${String(o)}</span>`)}
          ${a.slice(0,8).map(o=>l`<span class="chip">${String(o)}</span>`)}
        </div>
      </div>
    </div>
  `}function Av(e){const t=e.hello?.snapshot,n=t?.uptimeMs?Oo(t.uptimeMs):"n/a",i=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",s=(()=>{if(e.connected||!e.lastError)return null;const o=e.lastError.toLowerCase();if(!(o.includes("unauthorized")||o.includes("connect failed")))return null;const c=!!e.settings.token.trim(),u=!!e.password.trim();return!c&&!u?l`
        <div class="muted" style="margin-top: 8px;">
          此网关需要身份验证。添加令牌或密码，然后点击连接。
          <div style="margin-top: 6px;">
            <span class="mono">clawdbot dashboard --no-open</span> → 生成带令牌的URL<br />
            <span class="mono">clawdbot doctor --generate-gateway-token</span> → 设置令牌
          </div>
          <div style="margin-top: 6px;">
            <a
              class="session-link"
              href="https://docs.clawd.bot/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="控制界面身份验证文档（在新标签页中打开）"
              >文档：控制界面身份验证</a
            >
          </div>
        </div>
      `:l`
      <div class="muted" style="margin-top: 8px;">
        身份验证失败。重新复制带令牌的URL，使用
        <span class="mono">clawdbot dashboard --no-open</span>，或更新令牌，
        然后点击连接。
        <div style="margin-top: 6px;">
          <a
            class="session-link"
            href="https://docs.clawd.bot/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="控制界面身份验证文档（在新标签页中打开）"
            >文档：控制界面身份验证</a
          >
        </div>
      </div>
    `})(),a=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0)!==!1)return null;const r=e.lastError.toLowerCase();return!r.includes("secure context")&&!r.includes("device identity required")?null:l`
      <div class="muted" style="margin-top: 8px;">
        此页面使用HTTP协议，因此浏览器会阻止设备身份验证。请使用HTTPS（Tailscale Serve）或
        在网关主机上打开 <span class="mono">http://127.0.0.1:18789</span>。
        <div style="margin-top: 6px;">
          如果必须使用HTTP，请设置
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span>（仅限令牌）。
        </div>
        <div style="margin-top: 6px;">
          <a
            class="session-link"
            href="https://docs.clawd.bot/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve 文档（在新标签页中打开）"
            >文档：Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.clawd.bot/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="非安全HTTP文档（在新标签页中打开）"
            >文档：非安全HTTP</a
          >
        </div>
      </div>
    `})();return l`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">网关访问</div>
        <div class="card-sub">仪表板连接位置以及身份验证方式。</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>WebSocket URL</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${o=>{const r=o.target.value;e.onSettingsChange({...e.settings,gatewayUrl:r})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          <label class="field">
            <span>网关令牌</span>
            <input
              .value=${e.settings.token}
              @input=${o=>{const r=o.target.value;e.onSettingsChange({...e.settings,token:r})}}
              placeholder="CLAWDBOT_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>密码（不存储）</span>
            <input
              type="password"
              .value=${e.password}
              @input=${o=>{const r=o.target.value;e.onPasswordChange(r)}}
              placeholder="系统或共享密码"
            />
          </label>
          <label class="field">
            <span>默认会话密钥</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${o=>{const r=o.target.value;e.onSessionKeyChange(r)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>连接</button>
          <button class="btn" @click=${()=>e.onRefresh()}>刷新</button>
          <span class="muted">点击连接以应用连接更改。</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">快照</div>
        <div class="card-sub">最新网关握手信息。</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">状态</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?"已连接":"已断开"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">运行时间</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">心跳间隔</div>
            <div class="stat-value">${i}</div>
          </div>
          <div class="stat">
            <div class="stat-label">上次通道刷新</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?O(e.lastChannelsRefresh):"无"}
            </div>
          </div>
        </div>
        ${e.lastError?l`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${s??""}
              ${a??""}
            </div>`:l`<div class="callout" style="margin-top: 14px;">
              使用通道链接 WhatsApp、Telegram、Discord、Signal 或 iMessage。
            </div>`}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">实例</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">过去5分钟内的存在信标。</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">会话</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">网关跟踪的最近会话密钥。</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">定时任务</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"无":e.cronEnabled?"启用":"禁用"}
        </div>
        <div class="muted">下次唤醒 ${xs(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">注意事项</div>
      <div class="card-sub">远程控制设置的快速提醒。</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">Tailscale服务</div>
          <div class="muted">
            优先使用服务模式，在回环接口上保持网关并使用尾网认证。
          </div>
        </div>
        <div>
          <div class="note-title">会话管理</div>
          <div class="muted">使用 /new 或 sessions.patch 来重置上下文。</div>
        </div>
        <div>
          <div class="note-title">定时任务提醒</div>
          <div class="muted">对重复运行使用隔离会话。</div>
        </div>
      </div>
    </section>
  `}const kv=["","off","minimal","low","medium","high"],Sv=["","off","on"],_v=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"}],Cv=["","off","on","stream"];function Tv(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function rr(e){return Tv(e)==="zai"}function Ev(e){return rr(e)?Sv:kv}function Iv(e,t){return!t||!e||e==="off"?e:"on"}function Lv(e,t){return e?t&&e==="on"?"low":e:null}function Mv(e){const t=e.result?.sessions??[];return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">会话</div>
          <div class="card-sub">活跃会话密钥和每会话覆盖设置。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>活跃于（分钟内）</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>限制</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>包含全局</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>包含未知</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?l`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:g}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`存储: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>密钥</div>
          <div>标签</div>
          <div>类型</div>
          <div>更新时间</div>
          <div>令牌</div>
          <div>思考</div>
          <div>详细</div>
          <div>推理</div>
          <div>操作</div>
        </div>
        ${t.length===0?l`<div class="muted">未找到会话。</div>`:t.map(n=>Rv(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function Rv(e,t,n,i,s){const a=e.updatedAt?O(e.updatedAt):"无",o=e.thinkingLevel??"",r=rr(e.modelProvider),c=Iv(o,r),u=Ev(e.modelProvider),p=e.verboseLevel??"",f=e.reasoningLevel??"",m=e.displayName??e.key,v=e.kind!=="global",d=v?`${vs("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return l`
    <div class="table-row">
      <div class="mono">${v?l`<a href=${d} class="session-link">${m}</a>`:m}</div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${s}
          placeholder="（可选）"
          @change=${y=>{const x=y.target.value.trim();n(e.key,{label:x||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${a}</div>
      <div>${cf(e)}</div>
      <div>
        <select
          .value=${c}
          ?disabled=${s}
          @change=${y=>{const x=y.target.value;n(e.key,{thinkingLevel:Lv(x,r)})}}
        >
          ${u.map(y=>l`<option value=${y}>${y||"继承"}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${p}
          ?disabled=${s}
          @change=${y=>{const x=y.target.value;n(e.key,{verboseLevel:x||null})}}
        >
          ${_v.map(y=>l`<option value=${y.value}>${y.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${f}
          ?disabled=${s}
          @change=${y=>{const x=y.target.value;n(e.key,{reasoningLevel:x||null})}}
        >
          ${Cv.map(y=>l`<option value=${y}>${y||"继承"}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${s} @click=${()=>i(e.key)}>
          删除
        </button>
      </div>
    </div>
  `}const yi=[{id:"workspace",label:"工作区技能",sources:["openclaw-workspace"]},{id:"built-in",label:"内置技能",sources:["openclaw-bundled"]},{id:"installed",label:"已安装技能",sources:["openclaw-managed"]},{id:"extra",label:"额外技能",sources:["openclaw-extra"]}];function Pv(e){const t=new Map;for(const s of yi)t.set(s.id,{id:s.id,label:s.label,skills:[]});const n={id:"other",label:"其他技能",skills:[]};for(const s of e){const a=yi.find(o=>o.sources.includes(s.source));a?t.get(a.id)?.skills.push(s):n.skills.push(s)}const i=yi.map(s=>t.get(s.id)).filter(s=>!!(s&&s.skills.length>0));return n.skills.length>0&&i.push(n),i}function Fv(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),i=n?t.filter(a=>[a.name,a.description,a.source].join(" ").toLowerCase().includes(n)):t,s=Pv(i);return l`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">技能</div>
          <div class="card-sub">内置、管理和工作区技能。</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"加载中…":"刷新"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>过滤</span>
          <input
            .value=${e.filter}
            @input=${a=>e.onFilterChange(a.target.value)}
            placeholder="搜索技能"
          />
        </label>
        <div class="muted">显示 ${i.length} 个</div>
      </div>

      ${e.error?l`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:g}

      ${i.length===0?l`
              <div class="muted" style="margin-top: 16px">未找到技能。</div>
            `:l`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${s.map(a=>{const o=a.id==="workspace"||a.id==="built-in";return l`
                  <details class="agent-skills-group" ?open=${!o}>
                    <summary class="agent-skills-header">
                      <span>${a.label}</span>
                      <span class="muted">${a.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${a.skills.map(r=>Ov(r,e))}
                    </div>
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function Ov(e,t){const n=t.busyKey===e.skillKey,i=t.edits[e.skillKey]??"",s=t.messages[e.skillKey]??null,a=e.install.length>0&&e.missing.bins.length>0,o=[...e.missing.bins.map(c=>`bin:${c}`),...e.missing.env.map(c=>`env:${c}`),...e.missing.config.map(c=>`config:${c}`),...e.missing.os.map(c=>`os:${c}`)],r=[];return e.disabled&&r.push("已禁用"),e.blockedByAllowlist&&r.push("被白名单阻止"),l`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${xi(e.description,140)}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"可用":"已阻止"}
          </span>
          ${e.disabled?l`
                  <span class="chip chip-warn">已禁用</span>
                `:g}
        </div>
        ${o.length>0?l`
              <div class="muted" style="margin-top: 6px;">
                缺失: ${o.join(", ")}
              </div>
            `:g}
        ${r.length>0?l`
              <div class="muted" style="margin-top: 6px;">
                原因: ${r.join(", ")}
              </div>
            `:g}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"启用":"禁用"}
          </button>
          ${a?l`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"安装中…":e.install[0].label}
              </button>`:g}
        </div>
        ${s?l`<div
              class="muted"
              style="margin-top: 8px; color: ${s.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${s.message}
            </div>`:g}
        ${e.primaryEnv?l`
              <div class="field" style="margin-top: 10px;">
                <span>API 密钥</span>
                <input
                  type="password"
                  .value=${i}
                  @input=${c=>t.onEdit(e.skillKey,c.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                保存密钥
              </button>
            `:g}
      </div>
    </div>
  `}const Nv=/^data:/i,Dv=/^https?:\/\//i;function Bv(e){const t=e.agentsList?.agents??[],i=hl(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",a=t.find(r=>r.id===i)?.identity,o=a?.avatarUrl??a?.avatar;if(o)return Nv.test(o)||Dv.test(o)?o:a?.avatarUrl}function Uv(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,i=e.cronStatus?.nextWakeAtMs??null,s=e.connected?null:"已断开与网关的连接。",a=e.tab==="chat",o=a&&(e.settings.chatFocusMode||e.onboarding),r=e.onboarding?!1:e.settings.chatShowThinking,c=Bv(e),u=e.chatAvatarUrl??c??null,p=zt(e.basePath),f=p?`${p}/favicon.svg`:"/favicon.svg",m=e.configForm??e.configSnapshot?.config,v=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;return l`
    <div class="shell ${a?"shell--chat":""} ${o?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"展开侧边栏":"折叠侧边栏"}"
            aria-label="${e.settings.navCollapsed?"展开侧边栏":"折叠侧边栏"}"
          >
            <span class="nav-collapse-toggle__icon">${W.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src="${f}" alt="OpenClaw" />
            </div>
            <div class="brand-text">
              <div class="brand-title">OPENCLAW</div>
              <div class="brand-sub">网关仪表盘</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>健康状态</span>
            <span class="mono">${e.connected?"正常":"离线"}</span>
          </div>
          ${Qu(e)}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${Gd.map(d=>{const y=e.settings.navGroupsCollapsed[d.label]??!1,x=d.tabs.some(A=>A===e.tab);return l`
            <div class="nav-group ${y&&!x?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const A={...e.settings.navGroupsCollapsed};A[d.label]=!y,e.applySettings({...e.settings,navGroupsCollapsed:A})}}
                aria-expanded=${!y}
              >
                <span class="nav-label__text">${d.label}</span>
                <span class="nav-label__chevron">${y?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${d.tabs.map(A=>ju(e,A))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">资源</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noreferrer"
              title="文档（在新标签页中打开）"
            >
              <span class="nav-item__icon" aria-hidden="true">${W.book}</span>
              <span class="nav-item__text">文档</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${a?"content--chat":""}">
        <section class="content-header">
          <div>
            <div class="page-title">${Ii(e.tab)}</div>
            <div class="page-sub">${Qd(e.tab)}</div>
          </div>
          <div class="page-meta">
            ${e.lastError?l`<div class="pill danger">${e.lastError}</div>`:g}
            ${a?qu(e):g}
          </div>
        </section>

        ${e.tab==="overview"?Av({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:i,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:d=>e.applySettings(d),onPasswordChange:d=>e.password=d,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):g}

        ${e.tab==="channels"?gp({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:d=>ne(e,d),onWhatsAppStart:d=>e.handleWhatsAppStart(d),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(d,y)=>ie(e,d,y),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(d,y)=>e.handleNostrProfileEdit(d,y),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(d,y)=>e.handleNostrProfileFieldChange(d,y),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):g}

        ${e.tab==="instances"?Vh({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>hs(e)}):g}

        ${e.tab==="sessions"?Mv({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:d=>{e.sessionsFilterActive=d.activeMinutes,e.sessionsFilterLimit=d.limit,e.sessionsIncludeGlobal=d.includeGlobal,e.sessionsIncludeUnknown=d.includeUnknown},onRefresh:()=>rt(e),onPatch:(d,y)=>Ec(e,d,y),onDelete:d=>Ic(e,d)}):g}

        ${e.tab==="cron"?Bh({loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(d=>d.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:d=>e.cronForm={...e.cronForm,...d},onRefresh:()=>e.loadCron(),onAdd:()=>td(e),onToggle:(d,y)=>nd(e,d,y),onRun:d=>id(e,d),onRemove:d=>sd(e,d),onLoadRuns:d=>zo(e,d)}):g}

        ${e.tab==="agents"?bf({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:v,activePanel:e.agentsPanel,configForm:m,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,skillsFilter:e.skillsFilter,onRefresh:async()=>{await ls(e);const d=e.agentsList?.agents?.map(y=>y.id)??[];d.length>0&&Ko(e,d)},onSelectAgent:d=>{e.agentsSelectedId!==d&&(e.agentsSelectedId=d,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,Uo(e,d),e.agentsPanel==="files"&&ri(e,d),e.agentsPanel==="skills"&&cn(e,d))},onSelectPanel:d=>{e.agentsPanel=d,d==="files"&&v&&e.agentFilesList?.agentId!==v&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},ri(e,v)),d==="skills"&&v&&cn(e,v),d==="channels"&&ne(e,!1),d==="cron"&&e.loadCron()},onLoadFiles:d=>{(async()=>(await ri(e,d),e.agentFileActive&&await Pa(e,d,e.agentFileActive)))()},onSelectFile:d=>{e.agentFileActive=d,v&&Pa(e,v,d)},onFileDraftChange:(d,y)=>{e.agentFileDrafts={...e.agentFileDrafts,[d]:y}},onFileReset:d=>{const y=e.agentFileContents[d]??"";e.agentFileDrafts={...e.agentFileDrafts,[d]:y}},onFileSave:d=>{if(!v)return;const y=e.agentFileDrafts[d]??e.agentFileContents[d]??"";Xu(e,v,d,y)},onToolsProfileChange:(d,y,x)=>{if(!m)return;const A=m.agents?.list;if(!Array.isArray(A))return;const _=A.findIndex(k=>k&&typeof k=="object"&&"id"in k&&k.id===d);if(_<0)return;const L=["agents","list",_,"tools"];y?ie(e,[...L,"profile"],y):we(e,[...L,"profile"]),x&&we(e,[...L,"allow"])},onToolsOverridesChange:(d,y,x)=>{if(!m)return;const A=m.agents?.list;if(!Array.isArray(A))return;const _=A.findIndex(k=>k&&typeof k=="object"&&"id"in k&&k.id===d);if(_<0)return;const L=["agents","list",_,"tools"];y.length>0?ie(e,[...L,"alsoAllow"],y):we(e,[...L,"alsoAllow"]),x.length>0?ie(e,[...L,"deny"],x):we(e,[...L,"deny"])},onConfigReload:()=>de(e),onConfigSave:()=>rn(e),onChannelsRefresh:()=>ne(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:d=>e.skillsFilter=d,onSkillsRefresh:()=>{v&&cn(e,v)},onAgentSkillToggle:(d,y,x)=>{if(!m)return;const A=m.agents?.list;if(!Array.isArray(A))return;const _=A.findIndex(B=>B&&typeof B=="object"&&"id"in B&&B.id===d);if(_<0)return;const L=A[_],k=y.trim();if(!k)return;const C=e.agentSkillsReport?.skills?.map(B=>B.name).filter(Boolean)??[],N=(Array.isArray(L.skills)?L.skills.map(B=>String(B).trim()).filter(Boolean):void 0)??C,ue=new Set(N);x?ue.add(k):ue.delete(k),ie(e,["agents","list",_,"skills"],[...ue])},onAgentSkillsClear:d=>{if(!m)return;const y=m.agents?.list;if(!Array.isArray(y))return;const x=y.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===d);x<0||we(e,["agents","list",x,"skills"])},onAgentSkillsDisableAll:d=>{if(!m)return;const y=m.agents?.list;if(!Array.isArray(y))return;const x=y.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===d);x<0||ie(e,["agents","list",x,"skills"],[])},onModelChange:(d,y)=>{if(!m)return;const x=m.agents?.list;if(!Array.isArray(x))return;const A=x.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===d);if(A<0)return;const _=["agents","list",A,"model"];if(!y){we(e,_);return}const k=x[A]?.model;if(k&&typeof k=="object"&&!Array.isArray(k)){const C=k.fallbacks,T={primary:y,...Array.isArray(C)?{fallbacks:C}:{}};ie(e,_,T)}else ie(e,_,y)},onModelFallbacksChange:(d,y)=>{if(!m)return;const x=m.agents?.list;if(!Array.isArray(x))return;const A=x.findIndex(B=>B&&typeof B=="object"&&"id"in B&&B.id===d);if(A<0)return;const _=["agents","list",A,"model"],L=x[A],k=y.map(B=>B.trim()).filter(Boolean),C=L.model,N=(()=>{if(typeof C=="string")return C.trim()||null;if(C&&typeof C=="object"&&!Array.isArray(C)){const B=C.primary;if(typeof B=="string")return B.trim()||null}return null})();if(k.length===0){N?ie(e,_,N):we(e,_);return}ie(e,_,N?{primary:N,fallbacks:k}:{fallbacks:k})}}):g}

        ${e.tab==="skills"?Fv({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:d=>e.skillsFilter=d,onRefresh:()=>Kt(e,{clearMessages:!0}),onToggle:(d,y)=>Hd(e,d,y),onEdit:(d,y)=>zd(e,d,y),onSaveKey:d=>jd(e,d),onInstall:(d,y,x)=>qd(e,d,y,x)}):g}

        ${e.tab==="nodes"?Jh({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>_n(e),onDevicesRefresh:()=>Le(e),onDeviceApprove:d=>Md(e,d),onDeviceReject:d=>Rd(e,d),onDeviceRotate:(d,y,x)=>Pd(e,{deviceId:d,role:y,scopes:x}),onDeviceRevoke:(d,y)=>Fd(e,{deviceId:d,role:y}),onLoadConfig:()=>de(e),onLoadExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return gs(e,d)},onBindDefault:d=>{d?ie(e,["tools","exec","node"],d):we(e,["tools","exec","node"])},onBindAgent:(d,y)=>{const x=["agents","list",d,"tools","exec","node"];y?ie(e,x,y):we(e,x)},onSaveBindings:()=>rn(e),onExecApprovalsTargetChange:(d,y)=>{e.execApprovalsTarget=d,e.execApprovalsTargetNodeId=y,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:d=>{e.execApprovalsSelectedAgent=d},onExecApprovalsPatch:(d,y)=>Ud(e,d,y),onExecApprovalsRemove:d=>Kd(e,d),onSaveExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Bd(e,d)}}):g}

        ${e.tab==="chat"?Ih({sessionKey:e.sessionKey,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity(),Ft(e),Li(e)},thinkingLevel:e.chatThinkingLevel,showThinking:r,loading:e.chatLoading,sending:e.chatSending,assistantAvatarUrl:u,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:null,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:s,error:e.lastError,sessions:e.sessionsResult,focusMode:o,onRefresh:()=>Promise.all([Ft(e),Li(e)]),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:d=>e.handleChatScroll(d),onDraftChange:d=>e.chatMessage=d,attachments:e.chatAttachments,onAttachmentsChange:d=>e.chatAttachments=d,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:d=>e.removeQueuedMessage(d),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:d=>e.handleOpenSidebar(d),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:d=>e.handleSplitRatioChange(d),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):g}

        ${e.tab==="config"?Oh({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:d=>{e.configRaw=d},onFormModeChange:d=>e.configFormMode=d,onFormPatch:(d,y)=>ie(e,d,y),onSearchChange:d=>e.configSearchQuery=d,onSectionChange:d=>{e.configActiveSection=d,e.configActiveSubsection=null},onSubsectionChange:d=>e.configActiveSubsection=d,onReload:()=>de(e),onSave:()=>rn(e),onApply:()=>Yr(e),onUpdate:()=>Jr(e)}):g}

        ${e.tab==="debug"?Hh({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:d=>e.debugCallMethod=d,onCallParamsChange:d=>e.debugCallParams=d,onRefresh:()=>Cn(e),onCall:()=>Zc(e)}):g}

        ${e.tab==="logs"?Yh({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:d=>e.logsFilterText=d,onLevelToggle:(d,y)=>{e.logsLevelFilters={...e.logsLevelFilters,[d]:y}},onToggleAutoFollow:d=>e.logsAutoFollow=d,onRefresh:()=>ns(e,{reset:!0}),onExport:(d,y)=>e.exportLogs(d,y),onScroll:d=>e.handleLogsScroll(d)}):g}
      </main>
      ${qh(e)}
      ${Gh(e)}
    </div>
  `}var Kv=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,$=(e,t,n,i)=>{for(var s=i>1?void 0:i?zv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(s=(i?o(t,n,s):o(s))||s);return i&&s&&Kv(t,n,s),s};const bi=Iu();function Hv(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let b=class extends it{constructor(){super(...arguments),this.settings=Zd(),this.password="",this.tab="chat",this.onboarding=Hv(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=bi.name,this.assistantAvatar=bi.avatar,this.assistantAgentId=bi.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...$u},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...bu},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>cu(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),Fu(this)}firstUpdated(){Ou(this)}disconnectedCallback(){Nu(this),super.disconnectedCallback()}updated(e){Du(this,e)}connect(){kl(this)}handleChatScroll(e){Kc(this,e)}handleLogsScroll(e){zc(this,e)}exportLogs(e,t){Hc(e,t)}resetToolStream(){ts(this)}resetChatScroll(){wa(this)}scrollToBottom(){wa(this),Bt(this,!0)}async loadAssistantIdentity(){await Al(this)}applySettings(e){je(this,e)}setTab(e){nu(this,e)}setTheme(e,t){iu(this,e,t)}async loadOverview(){await gl(this)}async loadCron(){await mn(this)}async handleAbortChat(){await ml(this)}removeQueuedMessage(e){gu(this,e)}async handleSendChat(e,t){await hu(this,e,t)}async handleWhatsAppStart(e){await nc(this,e)}async handleWhatsAppWait(){await ic(this)}async handleWhatsAppLogout(){await sc(this)}async handleChannelConfigSave(){await ac(this)}async handleChannelConfigReload(){await oc(this)}handleNostrProfileEdit(e,t){cc(this,e,t)}handleNostrProfileCancel(){dc(this)}handleNostrProfileFieldChange(e,t){uc(this,e,t)}async handleNostrProfileSave(){await pc(this)}async handleNostrProfileImport(){await gc(this)}handleNostrProfileToggleAdvanced(){fc(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,je(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return Uv(this)}};$([w()],b.prototype,"settings",2);$([w()],b.prototype,"password",2);$([w()],b.prototype,"tab",2);$([w()],b.prototype,"onboarding",2);$([w()],b.prototype,"connected",2);$([w()],b.prototype,"theme",2);$([w()],b.prototype,"themeResolved",2);$([w()],b.prototype,"hello",2);$([w()],b.prototype,"lastError",2);$([w()],b.prototype,"eventLog",2);$([w()],b.prototype,"assistantName",2);$([w()],b.prototype,"assistantAvatar",2);$([w()],b.prototype,"assistantAgentId",2);$([w()],b.prototype,"sessionKey",2);$([w()],b.prototype,"chatLoading",2);$([w()],b.prototype,"chatSending",2);$([w()],b.prototype,"chatMessage",2);$([w()],b.prototype,"chatMessages",2);$([w()],b.prototype,"chatToolMessages",2);$([w()],b.prototype,"chatStream",2);$([w()],b.prototype,"chatStreamStartedAt",2);$([w()],b.prototype,"chatRunId",2);$([w()],b.prototype,"compactionStatus",2);$([w()],b.prototype,"chatAvatarUrl",2);$([w()],b.prototype,"chatThinkingLevel",2);$([w()],b.prototype,"chatQueue",2);$([w()],b.prototype,"chatAttachments",2);$([w()],b.prototype,"sidebarOpen",2);$([w()],b.prototype,"sidebarContent",2);$([w()],b.prototype,"sidebarError",2);$([w()],b.prototype,"splitRatio",2);$([w()],b.prototype,"nodesLoading",2);$([w()],b.prototype,"nodes",2);$([w()],b.prototype,"devicesLoading",2);$([w()],b.prototype,"devicesError",2);$([w()],b.prototype,"devicesList",2);$([w()],b.prototype,"execApprovalsLoading",2);$([w()],b.prototype,"execApprovalsSaving",2);$([w()],b.prototype,"execApprovalsDirty",2);$([w()],b.prototype,"execApprovalsSnapshot",2);$([w()],b.prototype,"execApprovalsForm",2);$([w()],b.prototype,"execApprovalsSelectedAgent",2);$([w()],b.prototype,"execApprovalsTarget",2);$([w()],b.prototype,"execApprovalsTargetNodeId",2);$([w()],b.prototype,"execApprovalQueue",2);$([w()],b.prototype,"execApprovalBusy",2);$([w()],b.prototype,"execApprovalError",2);$([w()],b.prototype,"pendingGatewayUrl",2);$([w()],b.prototype,"configLoading",2);$([w()],b.prototype,"configRaw",2);$([w()],b.prototype,"configRawOriginal",2);$([w()],b.prototype,"configValid",2);$([w()],b.prototype,"configIssues",2);$([w()],b.prototype,"configSaving",2);$([w()],b.prototype,"configApplying",2);$([w()],b.prototype,"updateRunning",2);$([w()],b.prototype,"applySessionKey",2);$([w()],b.prototype,"configSnapshot",2);$([w()],b.prototype,"configSchema",2);$([w()],b.prototype,"configSchemaVersion",2);$([w()],b.prototype,"configSchemaLoading",2);$([w()],b.prototype,"configUiHints",2);$([w()],b.prototype,"configForm",2);$([w()],b.prototype,"configFormOriginal",2);$([w()],b.prototype,"configFormDirty",2);$([w()],b.prototype,"configFormMode",2);$([w()],b.prototype,"configSearchQuery",2);$([w()],b.prototype,"configActiveSection",2);$([w()],b.prototype,"configActiveSubsection",2);$([w()],b.prototype,"channelsLoading",2);$([w()],b.prototype,"channelsSnapshot",2);$([w()],b.prototype,"channelsError",2);$([w()],b.prototype,"channelsLastSuccess",2);$([w()],b.prototype,"whatsappLoginMessage",2);$([w()],b.prototype,"whatsappLoginQrDataUrl",2);$([w()],b.prototype,"whatsappLoginConnected",2);$([w()],b.prototype,"whatsappBusy",2);$([w()],b.prototype,"nostrProfileFormState",2);$([w()],b.prototype,"nostrProfileAccountId",2);$([w()],b.prototype,"presenceLoading",2);$([w()],b.prototype,"presenceEntries",2);$([w()],b.prototype,"presenceError",2);$([w()],b.prototype,"presenceStatus",2);$([w()],b.prototype,"agentsLoading",2);$([w()],b.prototype,"agentsList",2);$([w()],b.prototype,"agentsError",2);$([w()],b.prototype,"sessionsLoading",2);$([w()],b.prototype,"sessionsResult",2);$([w()],b.prototype,"sessionsError",2);$([w()],b.prototype,"sessionsFilterActive",2);$([w()],b.prototype,"sessionsFilterLimit",2);$([w()],b.prototype,"sessionsIncludeGlobal",2);$([w()],b.prototype,"sessionsIncludeUnknown",2);$([w()],b.prototype,"cronLoading",2);$([w()],b.prototype,"cronJobs",2);$([w()],b.prototype,"cronStatus",2);$([w()],b.prototype,"cronError",2);$([w()],b.prototype,"cronForm",2);$([w()],b.prototype,"cronRunsJobId",2);$([w()],b.prototype,"cronRuns",2);$([w()],b.prototype,"cronBusy",2);$([w()],b.prototype,"skillsLoading",2);$([w()],b.prototype,"skillsReport",2);$([w()],b.prototype,"skillsError",2);$([w()],b.prototype,"skillsFilter",2);$([w()],b.prototype,"skillEdits",2);$([w()],b.prototype,"skillsBusyKey",2);$([w()],b.prototype,"skillMessages",2);$([w()],b.prototype,"debugLoading",2);$([w()],b.prototype,"debugStatus",2);$([w()],b.prototype,"debugHealth",2);$([w()],b.prototype,"debugModels",2);$([w()],b.prototype,"debugHeartbeat",2);$([w()],b.prototype,"debugCallMethod",2);$([w()],b.prototype,"debugCallParams",2);$([w()],b.prototype,"debugCallResult",2);$([w()],b.prototype,"debugCallError",2);$([w()],b.prototype,"logsLoading",2);$([w()],b.prototype,"logsError",2);$([w()],b.prototype,"logsFile",2);$([w()],b.prototype,"logsEntries",2);$([w()],b.prototype,"logsFilterText",2);$([w()],b.prototype,"logsLevelFilters",2);$([w()],b.prototype,"logsAutoFollow",2);$([w()],b.prototype,"logsTruncated",2);$([w()],b.prototype,"logsCursor",2);$([w()],b.prototype,"logsLastFetchAt",2);$([w()],b.prototype,"logsLimit",2);$([w()],b.prototype,"logsMaxBytes",2);$([w()],b.prototype,"logsAtBottom",2);$([w()],b.prototype,"chatNewMessagesBelow",2);b=$([Eo("openclaw-app")],b);
//# sourceMappingURL=index-ztN1-iY7.js.map
