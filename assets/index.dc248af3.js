(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function W(){}function je(e,t){for(const n in t)e[n]=t[n];return e}function ht(e){return e()}function ze(){return Object.create(null)}function he(e){e.forEach(ht)}function $t(e){return typeof e=="function"}function gt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ie;function K(e,t){return ie||(ie=document.createElement("a")),ie.href=t,e===ie.href}function Dt(e){return Object.keys(e).length===0}function Ye(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function m(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function pt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function Nt(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function X(e){return document.createTextNode(e)}function k(){return X(" ")}function Rt(){return X("")}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ge(e,t){for(const n in t)g(e,n,t[n])}function qt(e){return Array.from(e.childNodes)}function V(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Ut(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,i,t),o}let Z;function Y(e){Z=e}function $e(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Vt(e){$e().$$.on_mount.push(e)}function Ht(e){$e().$$.on_destroy.push(e)}function Qt(){const e=$e();return(t,n,{cancelable:i=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=Ut(t,n,{cancelable:i});return o.slice().forEach(s=>{s.call(e,r)}),!r.defaultPrevented}return!0}}const z=[],Je=[],le=[],We=[],Bt=Promise.resolve();let Se=!1;function Kt(){Se||(Se=!0,Bt.then(mt))}function Ee(e){le.push(e)}const be=new Set;let se=0;function mt(){const e=Z;do{for(;se<z.length;){const t=z[se];se++,Y(t),zt(t.$$)}for(Y(null),z.length=0,se=0;Je.length;)Je.pop()();for(let t=0;t<le.length;t+=1){const n=le[t];be.has(n)||(be.add(n),n())}le.length=0}while(z.length);for(;We.length;)We.pop()();Se=!1,be.clear(),Y(e)}function zt(e){if(e.fragment!==null){e.update(),he(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ee)}}const fe=new Set;let Yt;function Oe(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function Xe(e,t,n,i){if(e&&e.o){if(fe.has(e))return;fe.add(e),Yt.c.push(()=>{fe.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Gt(e,t){const n={},i={},o={$$scope:1};let r=e.length;for(;r--;){const s=e[r],l=t[r];if(l){for(const f in s)f in l||(i[f]=1);for(const f in l)o[f]||(n[f]=l[f],o[f]=1);e[r]=l}else for(const f in s)o[f]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ze(e){e&&e.c()}function Ce(e,t,n,i){const{fragment:o,on_mount:r,on_destroy:s,after_update:l}=e.$$;o&&o.m(t,n),i||Ee(()=>{const f=r.map(ht).filter($t);s?s.push(...f):he(f),e.$$.on_mount=[]}),l.forEach(Ee)}function Ae(e,t){const n=e.$$;n.fragment!==null&&(he(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(e,t){e.$$.dirty[0]===-1&&(z.push(e),Kt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function yt(e,t,n,i,o,r,s,l=[-1]){const f=Z;Y(e);const c=e.$$={fragment:null,ctx:null,props:r,update:W,not_equal:o,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ze(),dirty:l,skip_bound:!1,root:t.target||f.$$.root};s&&s(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(u,d,...y)=>{const v=y.length?y[0]:d;return c.ctx&&o(c.ctx[u],c.ctx[u]=v)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](v),a&&Jt(e,u)),d}):[],c.update(),a=!0,he(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const u=qt(t.target);c.fragment&&c.fragment.l(u),u.forEach(I)}else c.fragment&&c.fragment.c();t.intro&&Oe(e.$$.fragment),Ce(e,t.target,t.anchor,t.customElement),mt()}Y(f)}class bt{$destroy(){Ae(this,1),this.$destroy=W}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!Dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Wt="/assets/logo_typo.ddcf4cd4.svg",Xt="/assets/logo_mono.c6257e24.svg",Zt="/assets/hcs_logo.cfbeb79b.svg",en="/assets/devfolio.88f610a1.svg",tn="/assets/polygon.49522c6d.svg",nn="/assets/filecoin.1c04c0c4.svg",on="/assets/solana.4fe8bb78.svg",rn="/assets/replit.6c51d6dc.svg",G=/^[a-z0-9]+(-[a-z0-9]+)*$/,P=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function De(e){return{...P,...e}}const ge=(e,t,n,i="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),f=o.pop(),c={provider:o.length>0?o[0]:i,prefix:f,name:l};return t&&!J(c)?null:c}const r=o[0],s=r.split("-");if(s.length>1){const l={provider:i,prefix:s.shift(),name:s.join("-")};return t&&!J(l)?null:l}if(n&&i===""){const l={provider:i,prefix:"",name:r};return t&&!J(l,n)?null:l}return null},J=(e,t)=>e?!!((e.provider===""||e.provider.match(G))&&(t&&e.prefix===""||e.prefix.match(G))&&e.name.match(G)):!1;function sn(e,t){const n={...e};for(const i in P){const o=i;if(t[o]!==void 0){const r=t[o];if(n[o]===void 0){n[o]=r;continue}switch(o){case"rotate":n[o]=(n[o]+r)%4;break;case"hFlip":case"vFlip":n[o]=r!==n[o];break;default:n[o]=r}}}return n}function et(e,t,n=!1){function i(r,s){if(e.icons[r]!==void 0)return Object.assign({},e.icons[r]);if(s>5)return null;const l=e.aliases;if(l&&l[r]!==void 0){const c=l[r],a=i(c.parent,s+1);return a&&sn(a,c)}const f=e.chars;return!s&&f&&f[r]!==void 0?i(f[r],s+1):null}const o=i(t,0);if(o)for(const r in P)o[r]===void 0&&e[r]!==void 0&&(o[r]=e[r]);return o&&n?De(o):o}function cn(e){for(const t in P)if(e[t]!==void 0)return!0;return!1}function vt(e,t,n){n=n||{};const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),i.push(s)});const o=e.icons;Object.keys(o).forEach(s=>{const l=et(e,s,!0);l&&(t(s,l),i.push(s))});const r=n.aliases||"all";if(r!=="none"&&typeof e.aliases=="object"){const s=e.aliases;Object.keys(s).forEach(l=>{if(r==="variations"&&cn(s[l]))return;const f=et(e,l,!0);f&&(t(l,f),i.push(l))})}return i}const Pe={provider:"string",aliases:"object",not_found:"object"};for(const e in P)Pe[e]=typeof P[e];function _t(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object")return null;for(const o in Pe)if(e[o]!==void 0&&typeof e[o]!==Pe[o])return null;const n=t.icons;for(const o in n){const r=n[o];if(!o.match(G)||typeof r.body!="string")return null;for(const s in P)if(r[s]!==void 0&&typeof r[s]!=typeof P[s])return null}const i=t.aliases;if(i)for(const o in i){const r=i[o],s=r.parent;if(!o.match(G)||typeof s!="string"||!n[s]&&!i[s])return null;for(const l in P)if(r[l]!==void 0&&typeof r[l]!=typeof P[l])return null}return t}const ln=1;let ue=Object.create(null);try{const e=window||self;e&&e._iconifyStorage.version===ln&&(ue=e._iconifyStorage.storage)}catch{}function fn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function R(e,t){ue[e]===void 0&&(ue[e]=Object.create(null));const n=ue[e];return n[t]===void 0&&(n[t]=fn(e,t)),n[t]}function Ne(e,t){if(!_t(t))return[];const n=Date.now();return vt(t,(i,o)=>{o?e.icons[i]=o:e.missing[i]=n})}function un(e,t,n){try{if(typeof n.body=="string")return e.icons[t]=Object.freeze(De(n)),!0}catch{}return!1}function an(e,t){const n=e.icons[t];return n===void 0?null:n}let ee=!1;function wt(e){return typeof e=="boolean"&&(ee=e),ee}function dn(e){const t=typeof e=="string"?ge(e,!0,ee):e;return t?an(R(t.provider,t.prefix),t.name):null}function hn(e,t){const n=ge(e,!0,ee);if(!n)return!1;const i=R(n.provider,n.prefix);return un(i,n.name,t)}function gn(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=typeof e.provider=="string"?e.provider:""),ee&&t===""&&(typeof e.prefix!="string"||e.prefix==="")){let i=!1;return _t(e)&&(e.prefix="",vt(e,(o,r)=>{r&&hn(o,r)&&(i=!0)})),i}if(typeof e.prefix!="string"||!J({provider:t,prefix:e.prefix,name:"a"}))return!1;const n=R(t,e.prefix);return!!Ne(n,e)}const tt=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function pn(e,t){const n={};for(const i in e){const o=i;if(n[o]=e[o],t[o]===void 0)continue;const r=t[o];switch(o){case"inline":case"slice":typeof r=="boolean"&&(n[o]=r);break;case"hFlip":case"vFlip":r===!0&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(n[o]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(n[o]=r);break;case"rotate":typeof r=="number"&&(n[o]+=r);break}}return n}const mn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ve(e,t,n){if(t===1)return e;if(n=n===void 0?100:n,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(mn);if(i===null||!i.length)return e;const o=[];let r=i.shift(),s=yn.test(r);for(;;){if(s){const l=parseFloat(r);isNaN(l)?o.push(r):o.push(Math.ceil(l*t*n)/n)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}function bn(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}function vn(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let i=e.body;[e,t].forEach(l=>{const f=[],c=l.hFlip,a=l.vFlip;let u=l.rotate;c?a?u+=2:(f.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),f.push("scale(-1 1)"),n.top=n.left=0):a&&(f.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),f.push("scale(1 -1)"),n.top=n.left=0);let d;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:d=n.height/2+n.top,f.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:f.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:d=n.width/2+n.left,f.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}u%2===1&&((n.left!==0||n.top!==0)&&(d=n.left,n.left=n.top,n.top=d),n.width!==n.height&&(d=n.width,n.width=n.height,n.height=d)),f.length&&(i='<g transform="'+f.join(" ")+'">'+i+"</g>")});let o,r;t.width===null&&t.height===null?(r="1em",o=ve(r,n.width/n.height)):t.width!==null&&t.height!==null?(o=t.width,r=t.height):t.height!==null?(r=t.height,o=ve(r,n.width/n.height)):(o=t.width,r=ve(o,n.height/n.width)),o==="auto"&&(o=n.width),r==="auto"&&(r=n.height),o=typeof o=="string"?o:o.toString()+"",r=typeof r=="string"?r:r.toString()+"";const s={attributes:{width:o,height:r,preserveAspectRatio:bn(t),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:i};return t.inline&&(s.inline=!0),s}const _n=/\sid="(\S+)"/g,wn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let xn=0;function In(e,t=wn){const n=[];let i;for(;i=_n.exec(e);)n.push(i[1]);return n.length&&n.forEach(o=>{const r=typeof t=="function"?t(o):t+(xn++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),e}const Fe=Object.create(null);function kn(e,t){Fe[e]=t}function Me(e){return Fe[e]||Fe[""]}function Re(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path===void 0?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:e.random===!0,index:e.index?e.index:0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const qe=Object.create(null),B=["https://api.simplesvg.com","https://api.unisvg.com"],ae=[];for(;B.length>0;)B.length===1||Math.random()>.5?ae.push(B.shift()):ae.push(B.pop());qe[""]=Re({resources:["https://api.iconify.design"].concat(ae)});function jn(e,t){const n=Re(t);return n===null?!1:(qe[e]=n,!0)}function Ue(e){return qe[e]}const xt=(e,t)=>{let n=e,i=n.indexOf("?")!==-1;function o(r){switch(typeof r){case"boolean":return r?"true":"false";case"number":return encodeURIComponent(r);case"string":return encodeURIComponent(r);default:throw new Error("Invalid parameter")}}return Object.keys(t).forEach(r=>{let s;try{s=o(t[r])}catch{return}n+=(i?"&":"?")+encodeURIComponent(r)+"="+s,i=!0}),n},It={},de={},Sn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}return null};let nt=Sn();function En(e,t){const n=Ue(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(l=>{r=Math.max(r,l.length)});const s=xt(t+".json",{icons:""});i=n.maxURL-r-n.path.length-s.length}const o=e+":"+t;return de[e]=n.path,It[o]=i,i}function On(e){return e===404}const Cn=(e,t,n)=>{const i=[];let o=It[t];o===void 0&&(o=En(e,t));const r="icons";let s={type:r,provider:e,prefix:t,icons:[]},l=0;return n.forEach((f,c)=>{l+=f.length+1,l>=o&&c>0&&(i.push(s),s={type:r,provider:e,prefix:t,icons:[]},l=f.length),s.icons.push(f)}),i.push(s),i};function An(e){if(typeof e=="string"){if(de[e]===void 0){const t=Ue(e);if(!t)return"/";de[e]=t.path}return de[e]}return"/"}const Pn=(e,t,n)=>{if(!nt){n("abort",424);return}let i=An(t.provider);switch(t.type){case"icons":{const r=t.prefix,l=t.icons.join(",");i+=xt(r+".json",{icons:l});break}case"custom":{const r=t.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;nt(e+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(On(s)?"abort":"next",s)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},Fn={prepare:Cn,send:Pn};function Mn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return e.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,l=o.name;n[r]===void 0&&(n[r]=Object.create(null));const f=n[r];f[s]===void 0&&(f[s]=R(r,s));const c=f[s];let a;c.icons[l]!==void 0?a=t.loaded:s===""||c.missing[l]!==void 0?a=t.missing:a=t.pending;const u={provider:r,prefix:s,name:l};a.push(u)}),t}const L=Object.create(null),_e=Object.create(null);function kt(e,t){e.forEach(n=>{const i=n.provider;if(L[i]===void 0)return;const o=L[i],r=n.prefix,s=o[r];s&&(o[r]=s.filter(l=>l.id!==t))})}function Tn(e,t){_e[e]===void 0&&(_e[e]=Object.create(null));const n=_e[e];n[t]||(n[t]=!0,setTimeout(()=>{if(n[t]=!1,L[e]===void 0||L[e][t]===void 0)return;const i=L[e][t].slice(0);if(!i.length)return;const o=R(e,t);let r=!1;i.forEach(s=>{const l=s.icons,f=l.pending.length;l.pending=l.pending.filter(c=>{if(c.prefix!==t)return!0;const a=c.name;if(o.icons[a]!==void 0)l.loaded.push({provider:e,prefix:t,name:a});else if(o.missing[a]!==void 0)l.missing.push({provider:e,prefix:t,name:a});else return r=!0,!0;return!1}),l.pending.length!==f&&(r||kt([{provider:e,prefix:t}],s.id),s.callback(l.loaded.slice(0),l.missing.slice(0),l.pending.slice(0),s.abort))})}))}let Ln=0;function $n(e,t,n){const i=Ln++,o=kt.bind(null,n,i);if(!t.pending.length)return o;const r={id:i,icons:t,callback:e,abort:o};return n.forEach(s=>{const l=s.provider,f=s.prefix;L[l]===void 0&&(L[l]=Object.create(null));const c=L[l];c[f]===void 0&&(c[f]=[]),c[f].push(r)}),o}function Dn(e,t=!0,n=!1){const i=[];return e.forEach(o=>{const r=typeof o=="string"?ge(o,!1,n):o;(!t||J(r,n))&&i.push({provider:r.provider,prefix:r.prefix,name:r.name})}),i}var ot={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Nn(e,t,n,i){const o=e.resources.length,r=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let p=e.resources.slice(0);for(s=[];p.length>1;){const w=Math.floor(Math.random()*p.length);s.push(p[w]),p=p.slice(0,w).concat(p.slice(w+1))}s=s.concat(p)}else s=e.resources.slice(r).concat(e.resources.slice(0,r));const l=Date.now();let f="pending",c=0,a,u=null,d=[],y=[];typeof i=="function"&&y.push(i);function v(){u&&(clearTimeout(u),u=null)}function M(){f==="pending"&&(f="aborted"),v(),d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function T(p,w){w&&(y=[]),typeof p=="function"&&y.push(p)}function ne(){return{startTime:l,payload:t,status:f,queriesSent:c,queriesPending:d.length,subscribe:T,abort:M}}function j(){f="failed",y.forEach(p=>{p(void 0,a)})}function H(){d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function $(p,w,E){const O=w!=="success";switch(d=d.filter(A=>A!==p),f){case"pending":break;case"failed":if(O||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){a=E,j();return}if(O){a=E,d.length||(s.length?C():j());return}if(v(),H(),!e.random){const A=e.resources.indexOf(p.resource);A!==-1&&A!==e.index&&(e.index=A)}f="completed",y.forEach(A=>{A(E)})}function C(){if(f!=="pending")return;v();const p=s.shift();if(p===void 0){if(d.length){u=setTimeout(()=>{v(),f==="pending"&&(H(),j())},e.timeout);return}j();return}const w={status:"pending",resource:p,callback:(E,O)=>{$(w,E,O)}};d.push(w),c++,u=setTimeout(C,e.rotate),n(p,t,w.callback)}return setTimeout(C),ne}function Rn(e){if(typeof e!="object"||typeof e.resources!="object"||!(e.resources instanceof Array)||!e.resources.length)throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in ot)e[n]!==void 0?t[n]=e[n]:t[n]=ot[n];return t}function jt(e){const t=Rn(e);let n=[];function i(){n=n.filter(l=>l().status==="pending")}function o(l,f,c){const a=Nn(t,l,f,(u,d)=>{i(),c&&c(u,d)});return n.push(a),a}function r(l){const f=n.find(c=>l(c));return f!==void 0?f:null}return{query:o,find:r,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:i}}function rt(){}const we=Object.create(null);function qn(e){if(we[e]===void 0){const t=Ue(e);if(!t)return;const n=jt(t),i={config:t,redundancy:n};we[e]=i}return we[e]}function Un(e,t,n){let i,o;if(typeof e=="string"){const r=Me(e);if(!r)return n(void 0,424),rt;o=r.send;const s=qn(e);s&&(i=s.redundancy)}else{const r=Re(e);if(r){i=jt(r);const s=e.resources?e.resources[0]:"",l=Me(s);l&&(o=l.send)}}return!i||!o?(n(void 0,424),rt):i.query(t,o,n)().abort}const Te={};function it(){}const N=Object.create(null),xe=Object.create(null),Ie=Object.create(null),ke=Object.create(null);function Vn(e,t){Ie[e]===void 0&&(Ie[e]=Object.create(null));const n=Ie[e];n[t]||(n[t]=!0,setTimeout(()=>{n[t]=!1,Tn(e,t)}))}const st=Object.create(null);function Hn(e,t,n){function i(){const l=(e===""?"":"@"+e+":")+t,f=Math.floor(Date.now()/6e4);st[l]<f&&(st[l]=f,console.error('Unable to retrieve icons for "'+l+'" because API is not configured properly.'))}xe[e]===void 0&&(xe[e]=Object.create(null));const o=xe[e];ke[e]===void 0&&(ke[e]=Object.create(null));const r=ke[e];N[e]===void 0&&(N[e]=Object.create(null));const s=N[e];o[t]===void 0?o[t]=n:o[t]=o[t].concat(n).sort(),r[t]||(r[t]=!0,setTimeout(()=>{r[t]=!1;const l=o[t];delete o[t];const f=Me(e);if(!f){i();return}f.prepare(e,t,l).forEach(a=>{Un(e,a,(u,d)=>{const y=R(e,t);if(typeof u!="object"){if(d!==404)return;const v=Date.now();a.icons.forEach(M=>{y.missing[M]=v})}else try{const v=Ne(y,u);if(!v.length)return;const M=s[t];v.forEach(T=>{delete M[T]}),Te.store&&Te.store(e,u)}catch(v){console.error(v)}Vn(e,t)})})}))}const Qn=(e,t)=>{const n=Dn(e,!0,wt()),i=Mn(n);if(!i.pending.length){let c=!0;return t&&setTimeout(()=>{c&&t(i.loaded,i.missing,i.pending,it)}),()=>{c=!1}}const o=Object.create(null),r=[];let s,l;i.pending.forEach(c=>{const a=c.provider,u=c.prefix;if(u===l&&a===s)return;s=a,l=u,r.push({provider:a,prefix:u}),N[a]===void 0&&(N[a]=Object.create(null));const d=N[a];d[u]===void 0&&(d[u]=Object.create(null)),o[a]===void 0&&(o[a]=Object.create(null));const y=o[a];y[u]===void 0&&(y[u]=[])});const f=Date.now();return i.pending.forEach(c=>{const a=c.provider,u=c.prefix,d=c.name,y=N[a][u];y[d]===void 0&&(y[d]=f,o[a][u].push(d))}),r.forEach(c=>{const a=c.provider,u=c.prefix;o[a][u].length&&Hn(a,u,o[a][u])}),t?$n(t,i,r):it},St="iconify2",te="iconify",Et=te+"-count",Ot=te+"-version",Ct=36e5,Bn=168,Ve={local:!0,session:!0};let Le=!1;const At={local:0,session:0},Pt={local:[],session:[]};let ce=typeof window>"u"?{}:window;function Ft(e){const t=e+"Storage";try{if(ce&&ce[t]&&typeof ce[t].length=="number")return ce[t]}catch{}return Ve[e]=!1,null}function He(e,t,n){try{return e.setItem(Et,n.toString()),At[t]=n,!0}catch{return!1}}function Mt(e){const t=e.getItem(Et);if(t){const n=parseInt(t);return n||0}return 0}function Kn(e,t){try{e.setItem(Ot,St)}catch{}He(e,t,0)}function zn(e){try{const t=Mt(e);for(let n=0;n<t;n++)e.removeItem(te+n.toString())}catch{}}const Tt=()=>{if(Le)return;Le=!0;const e=Math.floor(Date.now()/Ct)-Bn;function t(n){const i=Ft(n);if(!i)return;const o=r=>{const s=te+r.toString(),l=i.getItem(s);if(typeof l!="string")return!1;let f=!0;try{const c=JSON.parse(l);if(typeof c!="object"||typeof c.cached!="number"||c.cached<e||typeof c.provider!="string"||typeof c.data!="object"||typeof c.data.prefix!="string")f=!1;else{const a=c.provider,u=c.data.prefix,d=R(a,u);f=Ne(d,c.data).length>0}}catch{f=!1}return f||i.removeItem(s),f};try{const r=i.getItem(Ot);if(r!==St){r&&zn(i),Kn(i,n);return}let s=Mt(i);for(let l=s-1;l>=0;l--)o(l)||(l===s-1?s--:Pt[n].push(l));He(i,n,s)}catch{}}for(const n in Ve)t(n)},Yn=(e,t)=>{Le||Tt();function n(i){if(!Ve[i])return!1;const o=Ft(i);if(!o)return!1;let r=Pt[i].shift();if(r===void 0&&(r=At[i],!He(o,i,r+1)))return!1;try{const s={cached:Math.floor(Date.now()/Ct),provider:e,data:t};o.setItem(te+r.toString(),JSON.stringify(s))}catch{return!1}return!0}!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))},Lt=/[\s,]+/;function Gn(e,t){t.split(Lt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Jn(e,t){t.split(Lt).forEach(n=>{const i=n.trim();switch(i){case"left":case"center":case"right":e.hAlign=i;break;case"top":case"middle":case"bottom":e.vAlign=i;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}})}function Wn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:i(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return t}const Xn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};function Zn(e,t){const n=pn(tt,t),i={...Xn};let o=typeof t.style=="string"?t.style:"";for(let f in t){const c=t[f];if(c!==void 0)switch(f){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[f]=c===!0||c==="true"||c===1;break;case"flip":typeof c=="string"&&Gn(n,c);break;case"align":typeof c=="string"&&Jn(n,c);break;case"color":o=o+(o.length>0&&o.trim().slice(-1)!==";"?";":"")+"color: "+c+"; ";break;case"rotate":typeof c=="string"?n[f]=Wn(c):typeof c=="number"&&(n[f]=c);break;case"ariaHidden":case"aria-hidden":c!==!0&&c!=="true"&&delete i["aria-hidden"];break;default:if(f.slice(0,3)==="on:")break;tt[f]===void 0&&(i[f]=c)}}const r=vn(e,n);for(let f in r.attributes)i[f]=r.attributes[f];r.inline&&(o="vertical-align: -0.125em; "+o),o!==""&&(i.style=o);let s=0,l=t.id;return typeof l=="string"&&(l=l.replace(/-/g,"_")),{attributes:i,body:In(r.body,l?()=>l+"ID"+s++:"iconifySvelte")}}wt(!0);kn("",Fn);if(typeof document<"u"&&typeof window<"u"){Te.store=Yn,Tt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!gn(i))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const i="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;jn(n,o)||console.error(i)}catch{console.error(i)}}}}function eo(e,t,n,i,o){function r(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",r(),{data:De(e)};let s;if(typeof e!="string"||(s=ge(e,!1,!0))===null)return r(),null;const l=dn(s);if(l===null)return n&&(!t.loading||t.loading.name!==e)&&(r(),t.name="",t.loading={name:e,abort:Qn([s],i)}),null;r(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const f=["iconify"];return s.prefix!==""&&f.push("iconify--"+s.prefix),s.provider!==""&&f.push("iconify--"+s.provider),{data:l,classes:f}}function to(e,t){return e?Zn(e,t):null}function ct(e){let t,n=e[0].body+"",i=[e[0].attributes],o={};for(let r=0;r<i.length;r+=1)o=je(o,i[r]);return{c(){t=Nt("svg"),Ge(t,o)},m(r,s){S(r,t,s),t.innerHTML=n},p(r,s){s&1&&n!==(n=r[0].body+"")&&(t.innerHTML=n),Ge(t,o=Gt(i,[s&1&&r[0].attributes]))},d(r){r&&I(t)}}}function no(e){let t,n=e[0]!==null&&ct(e);return{c(){n&&n.c(),t=Rt()},m(i,o){n&&n.m(i,o),S(i,t,o)},p(i,[o]){i[0]!==null?n?n.p(i,o):(n=ct(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:W,o:W,d(i){n&&n.d(i),i&&I(t)}}}function oo(e,t,n){const i={name:"",loading:null,destroyed:!1};let o=!1,r=0,s;const l=c=>{typeof t.onLoad=="function"&&t.onLoad(c),Qt()("load",{icon:c})};function f(){n(3,r++,r)}return Vt(()=>{n(2,o=!0)}),Ht(()=>{n(1,i.destroyed=!0,i),i.loading&&(i.loading.abort(),n(1,i.loading=null,i))}),e.$$set=c=>{n(6,t=je(je({},t),Ye(c)))},e.$$.update=()=>{{const c=eo(t.icon,i,o,f,l);n(0,s=c?to(c.data,t):null),s&&c.classes&&n(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+c.classes.join(" "),s)}},t=Ye(t),[s,i,o,r]}class lt extends bt{constructor(t){super(),yt(this,t,oo,no,gt,{})}}function ft(e,t,n){const i=e.slice();return i[1]=t[n],i}function ut(e,t,n){const i=e.slice();return i[4]=t[n],i}function at(e){let t,n,i;return{c(){t=b("a"),n=b("img"),g(n,"class","sponsor_img svelte-yw4ru1"),K(n.src,i=e[4][0])||g(n,"src",i),g(n,"alt",""),g(t,"href",e[4][1]),g(t,"target","_blank"),g(t,"rel","noopener noreferrer")},m(o,r){S(o,t,r),m(t,n)},p:W,d(o){o&&I(t)}}}function dt(e){let t,n=e[1]+"",i,o,r,s,l=e[0][e[1]],f=[];for(let c=0;c<l.length;c+=1)f[c]=at(ut(e,l,c));return{c(){t=b("h2"),i=X(n),o=k(),r=b("div");for(let c=0;c<f.length;c+=1)f[c].c();s=k(),V(t,"margin-top","20px"),V(t,"margin-bottom","36px"),V(t,"color","#FFFFFF99"),g(r,"class","sponsor_grid svelte-yw4ru1")},m(c,a){S(c,t,a),m(t,i),S(c,o,a),S(c,r,a);for(let u=0;u<f.length;u+=1)f[u].m(r,null);m(r,s)},p(c,a){if(a&1){l=c[0][c[1]];let u;for(u=0;u<l.length;u+=1){const d=ut(c,l,u);f[u]?f[u].p(d,a):(f[u]=at(d),f[u].c(),f[u].m(r,s))}for(;u<f.length;u+=1)f[u].d(1);f.length=l.length}},d(c){c&&I(t),c&&I(o),c&&I(r),pt(f,c)}}}function ro(e){let t,n,i,o,r,s,l,f,c,a,u,d,y,v,M,T,ne,j,H,$,C,p,w,E,O,A,Qe,pe,me,q,D,oe,Be,ye,Q,re;C=new lt({props:{width:"24",icon:"carbon:calendar"}}),O=new lt({props:{width:"24",icon:"carbon:location"}});let U=Object.keys(e[0]),x=[];for(let h=0;h<U.length;h+=1)x[h]=dt(ft(e,U,h));return{c(){t=b("script"),i=k(),o=b("div"),r=b("header"),s=b("img"),f=k(),c=b("img"),u=k(),d=b("main"),y=b("img"),M=k(),T=b("p"),T.textContent="an in-person multidisciplinary hackathon",ne=k(),j=b("div"),H=k(),$=b("div"),Ze(C.$$.fragment),p=X(`
			22 - 24 Sept '22`),w=k(),E=b("div"),Ze(O.$$.fragment),A=X(`
			SVIT, Vasad`),Qe=k(),pe=b("div"),me=k(),q=b("section"),D=b("div"),oe=b("h1"),oe.textContent="Sponsors",Be=k();for(let h=0;h<x.length;h+=1)x[h].c();ye=k(),Q=b("footer"),Q.innerHTML=`<div class="container"><div class="flex justify-between items-center"><div>\xA9 2022, <a href="https://www.hackclubsvit.co" target="_blank" rel="noopener noreferrer">Hack Club SVIT</a>. All rights reserved. \u2022
				<a href="https://devfolio.co/code-of-conduct" target="_blank" rel="noopener noreferrer">Code of Conduct</a></div></div></div>`,t.defer=!0,t.async=!0,K(t.src,n="https://apply.devfolio.co/v2/sdk.js")||g(t,"src",n),g(s,"width","60px"),K(s.src,l=Xt)||g(s,"src",l),g(s,"alt","MECIA Hacks logo"),K(c.src,a=Zt)||g(c,"src",a),g(c,"alt","Hack Club SVIT logo"),g(r,"class","svelte-yw4ru1"),g(y,"class","typo_logo svelte-yw4ru1"),K(y.src,v=Wt)||g(y,"src",v),g(y,"alt","MECIA Hacks logo"),g(T,"class","subtext svelte-yw4ru1"),g(j,"class","apply-button"),g(j,"data-hackathon-slug","mecia-hacks"),g(j,"data-button-theme","dark-inverted"),V(j,"height","44px"),V(j,"width","312px"),g($,"class","icon_text_pair svelte-yw4ru1"),g(E,"class","icon_text_pair svelte-yw4ru1"),g(d,"class","hero svelte-yw4ru1"),g(pe,"class","pulsating_gradient svelte-yw4ru1"),g(o,"id","home"),g(o,"class","svelte-yw4ru1"),V(oe,"margin-bottom","54px"),g(D,"class","container"),g(q,"id","sponsors"),g(q,"class","svelte-yw4ru1"),g(Q,"class","svelte-yw4ru1")},m(h,F){m(document.head,t),S(h,i,F),S(h,o,F),m(o,r),m(r,s),m(r,f),m(r,c),m(o,u),m(o,d),m(d,y),m(d,M),m(d,T),m(d,ne),m(d,j),m(d,H),m(d,$),Ce(C,$,null),m($,p),m(d,w),m(d,E),Ce(O,E,null),m(E,A),m(o,Qe),m(o,pe),S(h,me,F),S(h,q,F),m(q,D),m(D,oe),m(D,Be);for(let _=0;_<x.length;_+=1)x[_].m(D,null);S(h,ye,F),S(h,Q,F),re=!0},p(h,[F]){if(F&1){U=Object.keys(h[0]);let _;for(_=0;_<U.length;_+=1){const Ke=ft(h,U,_);x[_]?x[_].p(Ke,F):(x[_]=dt(Ke),x[_].c(),x[_].m(D,null))}for(;_<x.length;_+=1)x[_].d(1);x.length=U.length}},i(h){re||(Oe(C.$$.fragment,h),Oe(O.$$.fragment,h),re=!0)},o(h){Xe(C.$$.fragment,h),Xe(O.$$.fragment,h),re=!1},d(h){I(t),h&&I(i),h&&I(o),Ae(C),Ae(O),h&&I(me),h&&I(q),pt(x,h),h&&I(ye),h&&I(Q)}}}function io(e){return[{Diamond:[[en,"https://devfolio.co/"],[tn,"https://polygon.technology/"]],Platinum:[[nn,"https://filecoin.io/"],[on,"https://solana.com/"],[rn,"https://replit.com/"]]}]}class so extends bt{constructor(t){super(),yt(this,t,io,ro,gt,{})}}new so({target:document.getElementById("app")});
