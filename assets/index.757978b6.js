(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function W(){}function Ie(e,t){for(const n in t)e[n]=t[n];return e}function at(e){return e()}function Be(){return Object.create(null)}function he(e){e.forEach(at)}function Tt(e){return typeof e=="function"}function dt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ie;function B(e,t){return ie||(ie=document.createElement("a")),ie.href=t,e===ie.href}function $t(e){return Object.keys(e).length===0}function Ke(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function y(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function ht(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function Lt(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function X(e){return document.createTextNode(e)}function S(){return X(" ")}function Dt(){return X("")}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ze(e,t){for(const n in t)h(e,n,t[n])}function Nt(e){return Array.from(e.childNodes)}function z(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Rt(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,i,t),o}let Z;function Y(e){Z=e}function Te(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Vt(e){Te().$$.on_mount.push(e)}function qt(e){Te().$$.on_destroy.push(e)}function Ht(){const e=Te();return(t,n,{cancelable:i=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=Rt(t,n,{cancelable:i});return o.slice().forEach(s=>{s.call(e,r)}),!r.defaultPrevented}return!0}}const K=[],Ye=[],le=[],Ge=[],Ut=Promise.resolve();let ke=!1;function Qt(){ke||(ke=!0,Ut.then(gt))}function je(e){le.push(e)}const me=new Set;let se=0;function gt(){const e=Z;do{for(;se<K.length;){const t=K[se];se++,Y(t),Bt(t.$$)}for(Y(null),K.length=0,se=0;Ye.length;)Ye.pop()();for(let t=0;t<le.length;t+=1){const n=le[t];me.has(n)||(me.add(n),n())}le.length=0}while(K.length);for(;Ge.length;)Ge.pop()();ke=!1,me.clear(),Y(e)}function Bt(e){if(e.fragment!==null){e.update(),he(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(je)}}const fe=new Set;let Kt;function Se(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function Je(e,t,n,i){if(e&&e.o){if(fe.has(e))return;fe.add(e),Kt.c.push(()=>{fe.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function zt(e,t){const n={},i={},o={$$scope:1};let r=e.length;for(;r--;){const s=e[r],c=t[r];if(c){for(const f in s)f in c||(i[f]=1);for(const f in c)o[f]||(n[f]=c[f],o[f]=1);e[r]=c}else for(const f in s)o[f]=1}for(const s in i)s in n||(n[s]=void 0);return n}function We(e){e&&e.c()}function Ee(e,t,n,i){const{fragment:o,on_mount:r,on_destroy:s,after_update:c}=e.$$;o&&o.m(t,n),i||je(()=>{const f=r.map(at).filter(Tt);s?s.push(...f):he(f),e.$$.on_mount=[]}),c.forEach(je)}function Oe(e,t){const n=e.$$;n.fragment!==null&&(he(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(e,t){e.$$.dirty[0]===-1&&(K.push(e),Qt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pt(e,t,n,i,o,r,s,c=[-1]){const f=Z;Y(e);const l=e.$$={fragment:null,ctx:null,props:r,update:W,not_equal:o,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Be(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...b)=>{const m=b.length?b[0]:d;return l.ctx&&o(l.ctx[u],l.ctx[u]=m)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](m),a&&Yt(e,u)),d}):[],l.update(),a=!0,he(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const u=Nt(t.target);l.fragment&&l.fragment.l(u),u.forEach(I)}else l.fragment&&l.fragment.c();t.intro&&Se(e.$$.fragment),Ee(e,t.target,t.anchor,t.customElement),gt()}Y(f)}class mt{$destroy(){Oe(this,1),this.$destroy=W}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!$t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Gt="/assets/logo_typo.ddcf4cd4.svg",Jt="/assets/logo_mono.c6257e24.svg",Wt="/assets/hcs_logo.cfbeb79b.svg",Xt="/assets/devfolio.88f610a1.svg",Zt="/assets/polygon.49522c6d.svg",en="/assets/filecoin.1c04c0c4.svg",tn="/assets/solana.4fe8bb78.svg",nn="/assets/replit.6c51d6dc.svg",G=/^[a-z0-9]+(-[a-z0-9]+)*$/,O=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function $e(e){return{...O,...e}}const ge=(e,t,n,i="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),f=o.pop(),l={provider:o.length>0?o[0]:i,prefix:f,name:c};return t&&!J(l)?null:l}const r=o[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return t&&!J(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return t&&!J(c,n)?null:c}return null},J=(e,t)=>e?!!((e.provider===""||e.provider.match(G))&&(t&&e.prefix===""||e.prefix.match(G))&&e.name.match(G)):!1;function on(e,t){const n={...e};for(const i in O){const o=i;if(t[o]!==void 0){const r=t[o];if(n[o]===void 0){n[o]=r;continue}switch(o){case"rotate":n[o]=(n[o]+r)%4;break;case"hFlip":case"vFlip":n[o]=r!==n[o];break;default:n[o]=r}}}return n}function Xe(e,t,n=!1){function i(r,s){if(e.icons[r]!==void 0)return Object.assign({},e.icons[r]);if(s>5)return null;const c=e.aliases;if(c&&c[r]!==void 0){const l=c[r],a=i(l.parent,s+1);return a&&on(a,l)}const f=e.chars;return!s&&f&&f[r]!==void 0?i(f[r],s+1):null}const o=i(t,0);if(o)for(const r in O)o[r]===void 0&&e[r]!==void 0&&(o[r]=e[r]);return o&&n?$e(o):o}function rn(e){for(const t in O)if(e[t]!==void 0)return!0;return!1}function yt(e,t,n){n=n||{};const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),i.push(s)});const o=e.icons;Object.keys(o).forEach(s=>{const c=Xe(e,s,!0);c&&(t(s,c),i.push(s))});const r=n.aliases||"all";if(r!=="none"&&typeof e.aliases=="object"){const s=e.aliases;Object.keys(s).forEach(c=>{if(r==="variations"&&rn(s[c]))return;const f=Xe(e,c,!0);f&&(t(c,f),i.push(c))})}return i}const Ce={provider:"string",aliases:"object",not_found:"object"};for(const e in O)Ce[e]=typeof O[e];function bt(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object")return null;for(const o in Ce)if(e[o]!==void 0&&typeof e[o]!==Ce[o])return null;const n=t.icons;for(const o in n){const r=n[o];if(!o.match(G)||typeof r.body!="string")return null;for(const s in O)if(r[s]!==void 0&&typeof r[s]!=typeof O[s])return null}const i=t.aliases;if(i)for(const o in i){const r=i[o],s=r.parent;if(!o.match(G)||typeof s!="string"||!n[s]&&!i[s])return null;for(const c in O)if(r[c]!==void 0&&typeof r[c]!=typeof O[c])return null}return t}const sn=1;let ue=Object.create(null);try{const e=window||self;e&&e._iconifyStorage.version===sn&&(ue=e._iconifyStorage.storage)}catch{}function cn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function D(e,t){ue[e]===void 0&&(ue[e]=Object.create(null));const n=ue[e];return n[t]===void 0&&(n[t]=cn(e,t)),n[t]}function Le(e,t){if(!bt(t))return[];const n=Date.now();return yt(t,(i,o)=>{o?e.icons[i]=o:e.missing[i]=n})}function ln(e,t,n){try{if(typeof n.body=="string")return e.icons[t]=Object.freeze($e(n)),!0}catch{}return!1}function fn(e,t){const n=e.icons[t];return n===void 0?null:n}let ee=!1;function vt(e){return typeof e=="boolean"&&(ee=e),ee}function un(e){const t=typeof e=="string"?ge(e,!0,ee):e;return t?fn(D(t.provider,t.prefix),t.name):null}function an(e,t){const n=ge(e,!0,ee);if(!n)return!1;const i=D(n.provider,n.prefix);return ln(i,n.name,t)}function dn(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=typeof e.provider=="string"?e.provider:""),ee&&t===""&&(typeof e.prefix!="string"||e.prefix==="")){let i=!1;return bt(e)&&(e.prefix="",yt(e,(o,r)=>{r&&an(o,r)&&(i=!0)})),i}if(typeof e.prefix!="string"||!J({provider:t,prefix:e.prefix,name:"a"}))return!1;const n=D(t,e.prefix);return!!Le(n,e)}const Ze=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function hn(e,t){const n={};for(const i in e){const o=i;if(n[o]=e[o],t[o]===void 0)continue;const r=t[o];switch(o){case"inline":case"slice":typeof r=="boolean"&&(n[o]=r);break;case"hFlip":case"vFlip":r===!0&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(n[o]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(n[o]=r);break;case"rotate":typeof r=="number"&&(n[o]+=r);break}}return n}const gn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ye(e,t,n){if(t===1)return e;if(n=n===void 0?100:n,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(gn);if(i===null||!i.length)return e;const o=[];let r=i.shift(),s=pn.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*t*n)/n)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}function mn(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}function yn(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let i=e.body;[e,t].forEach(c=>{const f=[],l=c.hFlip,a=c.vFlip;let u=c.rotate;l?a?u+=2:(f.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),f.push("scale(-1 1)"),n.top=n.left=0):a&&(f.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),f.push("scale(1 -1)"),n.top=n.left=0);let d;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:d=n.height/2+n.top,f.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:f.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:d=n.width/2+n.left,f.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}u%2===1&&((n.left!==0||n.top!==0)&&(d=n.left,n.left=n.top,n.top=d),n.width!==n.height&&(d=n.width,n.width=n.height,n.height=d)),f.length&&(i='<g transform="'+f.join(" ")+'">'+i+"</g>")});let o,r;t.width===null&&t.height===null?(r="1em",o=ye(r,n.width/n.height)):t.width!==null&&t.height!==null?(o=t.width,r=t.height):t.height!==null?(r=t.height,o=ye(r,n.width/n.height)):(o=t.width,r=ye(o,n.height/n.width)),o==="auto"&&(o=n.width),r==="auto"&&(r=n.height),o=typeof o=="string"?o:o.toString()+"",r=typeof r=="string"?r:r.toString()+"";const s={attributes:{width:o,height:r,preserveAspectRatio:mn(t),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:i};return t.inline&&(s.inline=!0),s}const bn=/\sid="(\S+)"/g,vn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let _n=0;function wn(e,t=vn){const n=[];let i;for(;i=bn.exec(e);)n.push(i[1]);return n.length&&n.forEach(o=>{const r=typeof t=="function"?t(o):t+(_n++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),e}const Ae=Object.create(null);function xn(e,t){Ae[e]=t}function Pe(e){return Ae[e]||Ae[""]}function De(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path===void 0?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:e.random===!0,index:e.index?e.index:0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Ne=Object.create(null),Q=["https://api.simplesvg.com","https://api.unisvg.com"],ae=[];for(;Q.length>0;)Q.length===1||Math.random()>.5?ae.push(Q.shift()):ae.push(Q.pop());Ne[""]=De({resources:["https://api.iconify.design"].concat(ae)});function In(e,t){const n=De(t);return n===null?!1:(Ne[e]=n,!0)}function Re(e){return Ne[e]}const _t=(e,t)=>{let n=e,i=n.indexOf("?")!==-1;function o(r){switch(typeof r){case"boolean":return r?"true":"false";case"number":return encodeURIComponent(r);case"string":return encodeURIComponent(r);default:throw new Error("Invalid parameter")}}return Object.keys(t).forEach(r=>{let s;try{s=o(t[r])}catch{return}n+=(i?"&":"?")+encodeURIComponent(r)+"="+s,i=!0}),n},wt={},de={},kn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}return null};let et=kn();function jn(e,t){const n=Re(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(c=>{r=Math.max(r,c.length)});const s=_t(t+".json",{icons:""});i=n.maxURL-r-n.path.length-s.length}const o=e+":"+t;return de[e]=n.path,wt[o]=i,i}function Sn(e){return e===404}const En=(e,t,n)=>{const i=[];let o=wt[t];o===void 0&&(o=jn(e,t));const r="icons";let s={type:r,provider:e,prefix:t,icons:[]},c=0;return n.forEach((f,l)=>{c+=f.length+1,c>=o&&l>0&&(i.push(s),s={type:r,provider:e,prefix:t,icons:[]},c=f.length),s.icons.push(f)}),i.push(s),i};function On(e){if(typeof e=="string"){if(de[e]===void 0){const t=Re(e);if(!t)return"/";de[e]=t.path}return de[e]}return"/"}const Cn=(e,t,n)=>{if(!et){n("abort",424);return}let i=On(t.provider);switch(t.type){case"icons":{const r=t.prefix,c=t.icons.join(",");i+=_t(r+".json",{icons:c});break}case"custom":{const r=t.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;et(e+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(Sn(s)?"abort":"next",s)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},An={prepare:En,send:Cn};function Pn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return e.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,c=o.name;n[r]===void 0&&(n[r]=Object.create(null));const f=n[r];f[s]===void 0&&(f[s]=D(r,s));const l=f[s];let a;l.icons[c]!==void 0?a=t.loaded:s===""||l.missing[c]!==void 0?a=t.missing:a=t.pending;const u={provider:r,prefix:s,name:c};a.push(u)}),t}const M=Object.create(null),be=Object.create(null);function xt(e,t){e.forEach(n=>{const i=n.provider;if(M[i]===void 0)return;const o=M[i],r=n.prefix,s=o[r];s&&(o[r]=s.filter(c=>c.id!==t))})}function Mn(e,t){be[e]===void 0&&(be[e]=Object.create(null));const n=be[e];n[t]||(n[t]=!0,setTimeout(()=>{if(n[t]=!1,M[e]===void 0||M[e][t]===void 0)return;const i=M[e][t].slice(0);if(!i.length)return;const o=D(e,t);let r=!1;i.forEach(s=>{const c=s.icons,f=c.pending.length;c.pending=c.pending.filter(l=>{if(l.prefix!==t)return!0;const a=l.name;if(o.icons[a]!==void 0)c.loaded.push({provider:e,prefix:t,name:a});else if(o.missing[a]!==void 0)c.missing.push({provider:e,prefix:t,name:a});else return r=!0,!0;return!1}),c.pending.length!==f&&(r||xt([{provider:e,prefix:t}],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}let Fn=0;function Tn(e,t,n){const i=Fn++,o=xt.bind(null,n,i);if(!t.pending.length)return o;const r={id:i,icons:t,callback:e,abort:o};return n.forEach(s=>{const c=s.provider,f=s.prefix;M[c]===void 0&&(M[c]=Object.create(null));const l=M[c];l[f]===void 0&&(l[f]=[]),l[f].push(r)}),o}function $n(e,t=!0,n=!1){const i=[];return e.forEach(o=>{const r=typeof o=="string"?ge(o,!1,n):o;(!t||J(r,n))&&i.push({provider:r.provider,prefix:r.prefix,name:r.name})}),i}var tt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ln(e,t,n,i){const o=e.resources.length,r=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let g=e.resources.slice(0);for(s=[];g.length>1;){const _=Math.floor(Math.random()*g.length);s.push(g[_]),g=g.slice(0,_).concat(g.slice(_+1))}s=s.concat(g)}else s=e.resources.slice(r).concat(e.resources.slice(0,r));const c=Date.now();let f="pending",l=0,a,u=null,d=[],b=[];typeof i=="function"&&b.push(i);function m(){u&&(clearTimeout(u),u=null)}function j(){f==="pending"&&(f="aborted"),m(),d.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),d=[]}function N(g,_){_&&(b=[]),typeof g=="function"&&b.push(g)}function ne(){return{startTime:c,payload:t,status:f,queriesSent:l,queriesPending:d.length,subscribe:N,abort:j}}function C(){f="failed",b.forEach(g=>{g(void 0,a)})}function U(){d.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),d=[]}function A(g,_,P){const F=_!=="success";switch(d=d.filter(k=>k!==g),f){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(_==="abort"){a=P,C();return}if(F){a=P,d.length||(s.length?R():C());return}if(m(),U(),!e.random){const k=e.resources.indexOf(g.resource);k!==-1&&k!==e.index&&(e.index=k)}f="completed",b.forEach(k=>{k(P)})}function R(){if(f!=="pending")return;m();const g=s.shift();if(g===void 0){if(d.length){u=setTimeout(()=>{m(),f==="pending"&&(U(),C())},e.timeout);return}C();return}const _={status:"pending",resource:g,callback:(P,F)=>{A(_,P,F)}};d.push(_),l++,u=setTimeout(R,e.rotate),n(g,t,_.callback)}return setTimeout(R),ne}function Dn(e){if(typeof e!="object"||typeof e.resources!="object"||!(e.resources instanceof Array)||!e.resources.length)throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in tt)e[n]!==void 0?t[n]=e[n]:t[n]=tt[n];return t}function It(e){const t=Dn(e);let n=[];function i(){n=n.filter(c=>c().status==="pending")}function o(c,f,l){const a=Ln(t,c,f,(u,d)=>{i(),l&&l(u,d)});return n.push(a),a}function r(c){const f=n.find(l=>c(l));return f!==void 0?f:null}return{query:o,find:r,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:i}}function nt(){}const ve=Object.create(null);function Nn(e){if(ve[e]===void 0){const t=Re(e);if(!t)return;const n=It(t),i={config:t,redundancy:n};ve[e]=i}return ve[e]}function Rn(e,t,n){let i,o;if(typeof e=="string"){const r=Pe(e);if(!r)return n(void 0,424),nt;o=r.send;const s=Nn(e);s&&(i=s.redundancy)}else{const r=De(e);if(r){i=It(r);const s=e.resources?e.resources[0]:"",c=Pe(s);c&&(o=c.send)}}return!i||!o?(n(void 0,424),nt):i.query(t,o,n)().abort}const Me={};function ot(){}const L=Object.create(null),_e=Object.create(null),we=Object.create(null),xe=Object.create(null);function Vn(e,t){we[e]===void 0&&(we[e]=Object.create(null));const n=we[e];n[t]||(n[t]=!0,setTimeout(()=>{n[t]=!1,Mn(e,t)}))}const rt=Object.create(null);function qn(e,t,n){function i(){const c=(e===""?"":"@"+e+":")+t,f=Math.floor(Date.now()/6e4);rt[c]<f&&(rt[c]=f,console.error('Unable to retrieve icons for "'+c+'" because API is not configured properly.'))}_e[e]===void 0&&(_e[e]=Object.create(null));const o=_e[e];xe[e]===void 0&&(xe[e]=Object.create(null));const r=xe[e];L[e]===void 0&&(L[e]=Object.create(null));const s=L[e];o[t]===void 0?o[t]=n:o[t]=o[t].concat(n).sort(),r[t]||(r[t]=!0,setTimeout(()=>{r[t]=!1;const c=o[t];delete o[t];const f=Pe(e);if(!f){i();return}f.prepare(e,t,c).forEach(a=>{Rn(e,a,(u,d)=>{const b=D(e,t);if(typeof u!="object"){if(d!==404)return;const m=Date.now();a.icons.forEach(j=>{b.missing[j]=m})}else try{const m=Le(b,u);if(!m.length)return;const j=s[t];m.forEach(N=>{delete j[N]}),Me.store&&Me.store(e,u)}catch(m){console.error(m)}Vn(e,t)})})}))}const Hn=(e,t)=>{const n=$n(e,!0,vt()),i=Pn(n);if(!i.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(i.loaded,i.missing,i.pending,ot)}),()=>{l=!1}}const o=Object.create(null),r=[];let s,c;i.pending.forEach(l=>{const a=l.provider,u=l.prefix;if(u===c&&a===s)return;s=a,c=u,r.push({provider:a,prefix:u}),L[a]===void 0&&(L[a]=Object.create(null));const d=L[a];d[u]===void 0&&(d[u]=Object.create(null)),o[a]===void 0&&(o[a]=Object.create(null));const b=o[a];b[u]===void 0&&(b[u]=[])});const f=Date.now();return i.pending.forEach(l=>{const a=l.provider,u=l.prefix,d=l.name,b=L[a][u];b[d]===void 0&&(b[d]=f,o[a][u].push(d))}),r.forEach(l=>{const a=l.provider,u=l.prefix;o[a][u].length&&qn(a,u,o[a][u])}),t?Tn(t,i,r):ot},kt="iconify2",te="iconify",jt=te+"-count",St=te+"-version",Et=36e5,Un=168,Ve={local:!0,session:!0};let Fe=!1;const Ot={local:0,session:0},Ct={local:[],session:[]};let ce=typeof window>"u"?{}:window;function At(e){const t=e+"Storage";try{if(ce&&ce[t]&&typeof ce[t].length=="number")return ce[t]}catch{}return Ve[e]=!1,null}function qe(e,t,n){try{return e.setItem(jt,n.toString()),Ot[t]=n,!0}catch{return!1}}function Pt(e){const t=e.getItem(jt);if(t){const n=parseInt(t);return n||0}return 0}function Qn(e,t){try{e.setItem(St,kt)}catch{}qe(e,t,0)}function Bn(e){try{const t=Pt(e);for(let n=0;n<t;n++)e.removeItem(te+n.toString())}catch{}}const Mt=()=>{if(Fe)return;Fe=!0;const e=Math.floor(Date.now()/Et)-Un;function t(n){const i=At(n);if(!i)return;const o=r=>{const s=te+r.toString(),c=i.getItem(s);if(typeof c!="string")return!1;let f=!0;try{const l=JSON.parse(c);if(typeof l!="object"||typeof l.cached!="number"||l.cached<e||typeof l.provider!="string"||typeof l.data!="object"||typeof l.data.prefix!="string")f=!1;else{const a=l.provider,u=l.data.prefix,d=D(a,u);f=Le(d,l.data).length>0}}catch{f=!1}return f||i.removeItem(s),f};try{const r=i.getItem(St);if(r!==kt){r&&Bn(i),Qn(i,n);return}let s=Pt(i);for(let c=s-1;c>=0;c--)o(c)||(c===s-1?s--:Ct[n].push(c));qe(i,n,s)}catch{}}for(const n in Ve)t(n)},Kn=(e,t)=>{Fe||Mt();function n(i){if(!Ve[i])return!1;const o=At(i);if(!o)return!1;let r=Ct[i].shift();if(r===void 0&&(r=Ot[i],!qe(o,i,r+1)))return!1;try{const s={cached:Math.floor(Date.now()/Et),provider:e,data:t};o.setItem(te+r.toString(),JSON.stringify(s))}catch{return!1}return!0}!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))},Ft=/[\s,]+/;function zn(e,t){t.split(Ft).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Yn(e,t){t.split(Ft).forEach(n=>{const i=n.trim();switch(i){case"left":case"center":case"right":e.hAlign=i;break;case"top":case"middle":case"bottom":e.vAlign=i;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}})}function Gn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:i(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return t}const Jn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};function Wn(e,t){const n=hn(Ze,t),i={...Jn};let o=typeof t.style=="string"?t.style:"";for(let f in t){const l=t[f];if(l!==void 0)switch(f){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[f]=l===!0||l==="true"||l===1;break;case"flip":typeof l=="string"&&zn(n,l);break;case"align":typeof l=="string"&&Yn(n,l);break;case"color":o=o+(o.length>0&&o.trim().slice(-1)!==";"?";":"")+"color: "+l+"; ";break;case"rotate":typeof l=="string"?n[f]=Gn(l):typeof l=="number"&&(n[f]=l);break;case"ariaHidden":case"aria-hidden":l!==!0&&l!=="true"&&delete i["aria-hidden"];break;default:if(f.slice(0,3)==="on:")break;Ze[f]===void 0&&(i[f]=l)}}const r=yn(e,n);for(let f in r.attributes)i[f]=r.attributes[f];r.inline&&(o="vertical-align: -0.125em; "+o),o!==""&&(i.style=o);let s=0,c=t.id;return typeof c=="string"&&(c=c.replace(/-/g,"_")),{attributes:i,body:wn(r.body,c?()=>c+"ID"+s++:"iconifySvelte")}}vt(!0);xn("",An);if(typeof document<"u"&&typeof window<"u"){Me.store=Kn,Mt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!dn(i))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const i="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;In(n,o)||console.error(i)}catch{console.error(i)}}}}function Xn(e,t,n,i,o){function r(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",r(),{data:$e(e)};let s;if(typeof e!="string"||(s=ge(e,!1,!0))===null)return r(),null;const c=un(s);if(c===null)return n&&(!t.loading||t.loading.name!==e)&&(r(),t.name="",t.loading={name:e,abort:Hn([s],i)}),null;r(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const f=["iconify"];return s.prefix!==""&&f.push("iconify--"+s.prefix),s.provider!==""&&f.push("iconify--"+s.provider),{data:c,classes:f}}function Zn(e,t){return e?Wn(e,t):null}function it(e){let t,n=e[0].body+"",i=[e[0].attributes],o={};for(let r=0;r<i.length;r+=1)o=Ie(o,i[r]);return{c(){t=Lt("svg"),ze(t,o)},m(r,s){E(r,t,s),t.innerHTML=n},p(r,s){s&1&&n!==(n=r[0].body+"")&&(t.innerHTML=n),ze(t,o=zt(i,[s&1&&r[0].attributes]))},d(r){r&&I(t)}}}function eo(e){let t,n=e[0]!==null&&it(e);return{c(){n&&n.c(),t=Dt()},m(i,o){n&&n.m(i,o),E(i,t,o)},p(i,[o]){i[0]!==null?n?n.p(i,o):(n=it(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:W,o:W,d(i){n&&n.d(i),i&&I(t)}}}function to(e,t,n){const i={name:"",loading:null,destroyed:!1};let o=!1,r=0,s;const c=l=>{typeof t.onLoad=="function"&&t.onLoad(l),Ht()("load",{icon:l})};function f(){n(3,r++,r)}return Vt(()=>{n(2,o=!0)}),qt(()=>{n(1,i.destroyed=!0,i),i.loading&&(i.loading.abort(),n(1,i.loading=null,i))}),e.$$set=l=>{n(6,t=Ie(Ie({},t),Ke(l)))},e.$$.update=()=>{{const l=Xn(t.icon,i,o,f,c);n(0,s=l?Zn(l.data,t):null),s&&l.classes&&n(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+l.classes.join(" "),s)}},t=Ke(t),[s,i,o,r]}class st extends mt{constructor(t){super(),pt(this,t,to,eo,dt,{})}}function ct(e,t,n){const i=e.slice();return i[1]=t[n],i}function lt(e,t,n){const i=e.slice();return i[4]=t[n],i}function ft(e){let t,n,i;return{c(){t=v("a"),n=v("img"),h(n,"class","sponsor_img svelte-ucwh9h"),B(n.src,i=e[4][0])||h(n,"src",i),h(n,"alt",""),h(t,"href",e[4][1]),h(t,"target","_blank"),h(t,"rel","noopener noreferrer")},m(o,r){E(o,t,r),y(t,n)},p:W,d(o){o&&I(t)}}}function ut(e){let t,n=e[1]+"",i,o,r,s,c=e[0][e[1]],f=[];for(let l=0;l<c.length;l+=1)f[l]=ft(lt(e,c,l));return{c(){t=v("h2"),i=X(n),o=S(),r=v("div");for(let l=0;l<f.length;l+=1)f[l].c();s=S(),z(t,"margin-bottom","36px"),z(t,"color","#FFFFFF99"),h(r,"class","sponsor_grid svelte-ucwh9h")},m(l,a){E(l,t,a),y(t,i),E(l,o,a),E(l,r,a);for(let u=0;u<f.length;u+=1)f[u].m(r,null);y(r,s)},p(l,a){if(a&1){c=l[0][l[1]];let u;for(u=0;u<c.length;u+=1){const d=lt(l,c,u);f[u]?f[u].p(d,a):(f[u]=ft(d),f[u].c(),f[u].m(r,s))}for(;u<f.length;u+=1)f[u].d(1);f.length=c.length}},d(l){l&&I(t),l&&I(o),l&&I(r),ht(f,l)}}}function no(e){let t,n,i,o,r,s,c,f,l,a,u,d,b,m,j,N,ne,C,U,A,R,g,_,P,F,k,V,He,pe,q,T,oe,Ue,re;_=new st({props:{width:"24",icon:"carbon:calendar"}}),V=new st({props:{width:"24",icon:"carbon:location"}});let H=Object.keys(e[0]),x=[];for(let p=0;p<H.length;p+=1)x[p]=ut(ct(e,H,p));return{c(){t=v("meta"),n=v("meta"),i=v("script"),r=S(),s=v("div"),c=v("header"),f=v("img"),a=S(),u=v("img"),b=S(),m=v("main"),j=v("img"),ne=S(),C=v("p"),C.textContent="an in-person multidisciplinary hackathon",U=S(),A=v("div"),R=S(),g=v("div"),We(_.$$.fragment),P=X(`
			22 - 24 Sept '22`),F=S(),k=v("div"),We(V.$$.fragment),He=X(`
			SVIT, Vasad`),pe=S(),q=v("section"),T=v("div"),oe=v("h1"),oe.textContent="Sponsors",Ue=S();for(let p=0;p<x.length;p+=1)x[p].c();document.title=`MECIA Hacks 2022 \u2022 Multidisciplinary Hackathon + Ideothon \u2022
		SVIT, Vasad`,h(t,"content","MECIA Hacks 2022"),h(t,"property","og:title"),h(n,"content","Multidisciplinary Hackathon + Ideothon \u2022 SVIT, Vasad"),h(n,"property","og:description"),i.defer=!0,i.async=!0,B(i.src,o="https://apply.devfolio.co/v2/sdk.js")||h(i,"src",o),h(f,"width","60px"),B(f.src,l=Jt)||h(f,"src",l),h(f,"alt","MECIA Hacks logo"),B(u.src,d=Wt)||h(u,"src",d),h(u,"alt","Hack Club SVIT logo"),h(c,"class","svelte-ucwh9h"),h(j,"class","typo_logo svelte-ucwh9h"),B(j.src,N=Gt)||h(j,"src",N),h(j,"alt","MECIA Hacks logo"),h(C,"class","subtext svelte-ucwh9h"),h(A,"class","apply-button"),h(A,"data-hackathon-slug","hacksvit2022"),h(A,"data-button-theme","dark-inverted"),z(A,"height","44px"),z(A,"width","312px"),h(g,"class","icon_text_set svelte-ucwh9h"),h(k,"class","icon_text_set svelte-ucwh9h"),h(m,"class","hero svelte-ucwh9h"),h(s,"id","home"),h(s,"class","svelte-ucwh9h"),z(oe,"margin-bottom","64px"),h(T,"class","container"),h(q,"id","sponsors"),h(q,"class","svelte-ucwh9h")},m(p,$){y(document.head,t),y(document.head,n),y(document.head,i),E(p,r,$),E(p,s,$),y(s,c),y(c,f),y(c,a),y(c,u),y(s,b),y(s,m),y(m,j),y(m,ne),y(m,C),y(m,U),y(m,A),y(m,R),y(m,g),Ee(_,g,null),y(g,P),y(m,F),y(m,k),Ee(V,k,null),y(k,He),E(p,pe,$),E(p,q,$),y(q,T),y(T,oe),y(T,Ue);for(let w=0;w<x.length;w+=1)x[w].m(T,null);re=!0},p(p,[$]){if($&1){H=Object.keys(p[0]);let w;for(w=0;w<H.length;w+=1){const Qe=ct(p,H,w);x[w]?x[w].p(Qe,$):(x[w]=ut(Qe),x[w].c(),x[w].m(T,null))}for(;w<x.length;w+=1)x[w].d(1);x.length=H.length}},i(p){re||(Se(_.$$.fragment,p),Se(V.$$.fragment,p),re=!0)},o(p){Je(_.$$.fragment,p),Je(V.$$.fragment,p),re=!1},d(p){I(t),I(n),I(i),p&&I(r),p&&I(s),Oe(_),Oe(V),p&&I(pe),p&&I(q),ht(x,p)}}}function oo(e){return[{Diamond:[[Xt,"https://devfolio.co/"],[Zt,"https://polygon.technology/"]],Platinum:[[en,"https://filecoin.io/"],[tn,"https://solana.com/"],[nn,"https://replit.com/"]]}]}class ro extends mt{constructor(t){super(),pt(this,t,oo,no,dt,{})}}new ro({target:document.getElementById("app")});
