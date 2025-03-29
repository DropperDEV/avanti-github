(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const E of S)if(E.type==="childList")for(const q of E.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&c(q)}).observe(document,{childList:!0,subtree:!0});function b(S){const E={};return S.integrity&&(E.integrity=S.integrity),S.referrerPolicy&&(E.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?E.credentials="include":S.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function c(S){if(S.ep)return;S.ep=!0;const E=b(S);fetch(S.href,E)}})();function a1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hr={exports:{}},De={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function t1(){if(m0)return De;m0=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function b(c,S,E){var q=null;if(E!==void 0&&(q=""+E),S.key!==void 0&&(q=""+S.key),"key"in S){E={};for(var B in S)B!=="key"&&(E[B]=S[B])}else E=S;return S=E.ref,{$$typeof:r,type:c,key:q,ref:S!==void 0?S:null,props:E}}return De.Fragment=s,De.jsx=b,De.jsxs=b,De}var v0;function l1(){return v0||(v0=1,hr.exports=t1()),hr.exports}var zn=l1(),br={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function e1(){if(p0)return W;p0=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),q=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),L=Symbol.iterator;function F(d){return d===null||typeof d!="object"?null:(d=L&&d[L]||d["@@iterator"],typeof d=="function"?d:null)}var bn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,D={};function w(d,_,H){this.props=d,this.context=_,this.refs=D,this.updater=H||bn}w.prototype.isReactComponent={},w.prototype.setState=function(d,_){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,_,"setState")},w.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function kn(){}kn.prototype=w.prototype;function Zn(d,_,H){this.props=d,this.context=_,this.refs=D,this.updater=H||bn}var sn=Zn.prototype=new kn;sn.constructor=Zn,X(sn,w.prototype),sn.isPureReactComponent=!0;var qn=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},Tn=Object.prototype.hasOwnProperty;function An(d,_,H,R,j,tn){return H=tn.ref,{$$typeof:r,type:d,key:_,ref:H!==void 0?H:null,props:tn}}function Rn(d,_){return An(d.type,_,void 0,void 0,void 0,d.props)}function xn(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function Vt(d){var _={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(H){return _[H]})}var Na=/\/+/g;function wn(d,_){return typeof d=="object"&&d!==null&&d.key!=null?Vt(""+d.key):_.toString(36)}function Ot(){}function zt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Ot,Ot):(d.status="pending",d.then(function(_){d.status==="pending"&&(d.status="fulfilled",d.value=_)},function(_){d.status==="pending"&&(d.status="rejected",d.reason=_)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function Vn(d,_,H,R,j){var tn=typeof d;(tn==="undefined"||tn==="boolean")&&(d=null);var K=!1;if(d===null)K=!0;else switch(tn){case"bigint":case"string":case"number":K=!0;break;case"object":switch(d.$$typeof){case r:case s:K=!0;break;case N:return K=d._init,Vn(K(d._payload),_,H,R,j)}}if(K)return j=j(d),K=R===""?"."+wn(d,0):R,qn(j)?(H="",K!=null&&(H=K.replace(Na,"$&/")+"/"),Vn(j,_,H,"",function($a){return $a})):j!=null&&(xn(j)&&(j=Rn(j,H+(j.key==null||d&&d.key===j.key?"":(""+j.key).replace(Na,"$&/")+"/")+K)),_.push(j)),1;K=0;var aa=R===""?".":R+":";if(qn(d))for(var vn=0;vn<d.length;vn++)R=d[vn],tn=aa+wn(R,vn),K+=Vn(R,_,H,tn,j);else if(vn=F(d),typeof vn=="function")for(d=vn.call(d),vn=0;!(R=d.next()).done;)R=R.value,tn=aa+wn(R,vn++),K+=Vn(R,_,H,tn,j);else if(tn==="object"){if(typeof d.then=="function")return Vn(zt(d),_,H,R,j);throw _=String(d),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return K}function z(d,_,H){if(d==null)return d;var R=[],j=0;return Vn(d,R,"","",function(tn){return _.call(H,tn,j++)}),R}function U(d){if(d._status===-1){var _=d._result;_=_(),_.then(function(H){(d._status===0||d._status===-1)&&(d._status=1,d._result=H)},function(H){(d._status===0||d._status===-1)&&(d._status=2,d._result=H)}),d._status===-1&&(d._status=0,d._result=_)}if(d._status===1)return d._result.default;throw d._result}var Z=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function dn(){}return W.Children={map:z,forEach:function(d,_,H){z(d,function(){_.apply(this,arguments)},H)},count:function(d){var _=0;return z(d,function(){_++}),_},toArray:function(d){return z(d,function(_){return _})||[]},only:function(d){if(!xn(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},W.Component=w,W.Fragment=b,W.Profiler=S,W.PureComponent=Zn,W.StrictMode=c,W.Suspense=M,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,W.__COMPILER_RUNTIME={__proto__:null,c:function(d){return J.H.useMemoCache(d)}},W.cache=function(d){return function(){return d.apply(null,arguments)}},W.cloneElement=function(d,_,H){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var R=X({},d.props),j=d.key,tn=void 0;if(_!=null)for(K in _.ref!==void 0&&(tn=void 0),_.key!==void 0&&(j=""+_.key),_)!Tn.call(_,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&_.ref===void 0||(R[K]=_[K]);var K=arguments.length-2;if(K===1)R.children=H;else if(1<K){for(var aa=Array(K),vn=0;vn<K;vn++)aa[vn]=arguments[vn+2];R.children=aa}return An(d.type,j,void 0,void 0,tn,R)},W.createContext=function(d){return d={$$typeof:q,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:E,_context:d},d},W.createElement=function(d,_,H){var R,j={},tn=null;if(_!=null)for(R in _.key!==void 0&&(tn=""+_.key),_)Tn.call(_,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(j[R]=_[R]);var K=arguments.length-2;if(K===1)j.children=H;else if(1<K){for(var aa=Array(K),vn=0;vn<K;vn++)aa[vn]=arguments[vn+2];j.children=aa}if(d&&d.defaultProps)for(R in K=d.defaultProps,K)j[R]===void 0&&(j[R]=K[R]);return An(d,tn,void 0,void 0,null,j)},W.createRef=function(){return{current:null}},W.forwardRef=function(d){return{$$typeof:B,render:d}},W.isValidElement=xn,W.lazy=function(d){return{$$typeof:N,_payload:{_status:-1,_result:d},_init:U}},W.memo=function(d,_){return{$$typeof:x,type:d,compare:_===void 0?null:_}},W.startTransition=function(d){var _=J.T,H={};J.T=H;try{var R=d(),j=J.S;j!==null&&j(H,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(dn,Z)}catch(tn){Z(tn)}finally{J.T=_}},W.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},W.use=function(d){return J.H.use(d)},W.useActionState=function(d,_,H){return J.H.useActionState(d,_,H)},W.useCallback=function(d,_){return J.H.useCallback(d,_)},W.useContext=function(d){return J.H.useContext(d)},W.useDebugValue=function(){},W.useDeferredValue=function(d,_){return J.H.useDeferredValue(d,_)},W.useEffect=function(d,_,H){var R=J.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(d,_)},W.useId=function(){return J.H.useId()},W.useImperativeHandle=function(d,_,H){return J.H.useImperativeHandle(d,_,H)},W.useInsertionEffect=function(d,_){return J.H.useInsertionEffect(d,_)},W.useLayoutEffect=function(d,_){return J.H.useLayoutEffect(d,_)},W.useMemo=function(d,_){return J.H.useMemo(d,_)},W.useOptimistic=function(d,_){return J.H.useOptimistic(d,_)},W.useReducer=function(d,_,H){return J.H.useReducer(d,_,H)},W.useRef=function(d){return J.H.useRef(d)},W.useState=function(d){return J.H.useState(d)},W.useSyncExternalStore=function(d,_,H){return J.H.useSyncExternalStore(d,_,H)},W.useTransition=function(){return J.H.useTransition()},W.version="19.1.0",W}var g0;function Sr(){return g0||(g0=1,br.exports=e1()),br.exports}var wt=Sr();const Zt=a1(wt);var mr={exports:{}},qe={},vr={exports:{}},pr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function i1(){return y0||(y0=1,function(r){function s(z,U){var Z=z.length;z.push(U);n:for(;0<Z;){var dn=Z-1>>>1,d=z[dn];if(0<S(d,U))z[dn]=U,z[Z]=d,Z=dn;else break n}}function b(z){return z.length===0?null:z[0]}function c(z){if(z.length===0)return null;var U=z[0],Z=z.pop();if(Z!==U){z[0]=Z;n:for(var dn=0,d=z.length,_=d>>>1;dn<_;){var H=2*(dn+1)-1,R=z[H],j=H+1,tn=z[j];if(0>S(R,Z))j<d&&0>S(tn,R)?(z[dn]=tn,z[j]=Z,dn=j):(z[dn]=R,z[H]=Z,dn=H);else if(j<d&&0>S(tn,Z))z[dn]=tn,z[j]=Z,dn=j;else break n}}return U}function S(z,U){var Z=z.sortIndex-U.sortIndex;return Z!==0?Z:z.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;r.unstable_now=function(){return E.now()}}else{var q=Date,B=q.now();r.unstable_now=function(){return q.now()-B}}var M=[],x=[],N=1,L=null,F=3,bn=!1,X=!1,D=!1,w=!1,kn=typeof setTimeout=="function"?setTimeout:null,Zn=typeof clearTimeout=="function"?clearTimeout:null,sn=typeof setImmediate<"u"?setImmediate:null;function qn(z){for(var U=b(x);U!==null;){if(U.callback===null)c(x);else if(U.startTime<=z)c(x),U.sortIndex=U.expirationTime,s(M,U);else break;U=b(x)}}function J(z){if(D=!1,qn(z),!X)if(b(M)!==null)X=!0,Tn||(Tn=!0,wn());else{var U=b(x);U!==null&&Vn(J,U.startTime-z)}}var Tn=!1,An=-1,Rn=5,xn=-1;function Vt(){return w?!0:!(r.unstable_now()-xn<Rn)}function Na(){if(w=!1,Tn){var z=r.unstable_now();xn=z;var U=!0;try{n:{X=!1,D&&(D=!1,Zn(An),An=-1),bn=!0;var Z=F;try{a:{for(qn(z),L=b(M);L!==null&&!(L.expirationTime>z&&Vt());){var dn=L.callback;if(typeof dn=="function"){L.callback=null,F=L.priorityLevel;var d=dn(L.expirationTime<=z);if(z=r.unstable_now(),typeof d=="function"){L.callback=d,qn(z),U=!0;break a}L===b(M)&&c(M),qn(z)}else c(M);L=b(M)}if(L!==null)U=!0;else{var _=b(x);_!==null&&Vn(J,_.startTime-z),U=!1}}break n}finally{L=null,F=Z,bn=!1}U=void 0}}finally{U?wn():Tn=!1}}}var wn;if(typeof sn=="function")wn=function(){sn(Na)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,zt=Ot.port2;Ot.port1.onmessage=Na,wn=function(){zt.postMessage(null)}}else wn=function(){kn(Na,0)};function Vn(z,U){An=kn(function(){z(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rn=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_next=function(z){switch(F){case 1:case 2:case 3:var U=3;break;default:U=F}var Z=F;F=U;try{return z()}finally{F=Z}},r.unstable_requestPaint=function(){w=!0},r.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=F;F=z;try{return U()}finally{F=Z}},r.unstable_scheduleCallback=function(z,U,Z){var dn=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?dn+Z:dn):Z=dn,z){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=Z+d,z={id:N++,callback:U,priorityLevel:z,startTime:Z,expirationTime:d,sortIndex:-1},Z>dn?(z.sortIndex=Z,s(x,z),b(M)===null&&z===b(x)&&(D?(Zn(An),An=-1):D=!0,Vn(J,Z-dn))):(z.sortIndex=d,s(M,z),X||bn||(X=!0,Tn||(Tn=!0,wn()))),z},r.unstable_shouldYield=Vt,r.unstable_wrapCallback=function(z){var U=F;return function(){var Z=F;F=U;try{return z.apply(this,arguments)}finally{F=Z}}}}(pr)),pr}var x0;function u1(){return x0||(x0=1,vr.exports=i1()),vr.exports}var gr={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function o1(){if(S0)return Jn;S0=1;var r=Sr();function s(M){var x="https://react.dev/errors/"+M;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)x+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+M+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(){}var c={d:{f:b,r:function(){throw Error(s(522))},D:b,C:b,L:b,m:b,X:b,S:b,M:b},p:0,findDOMNode:null},S=Symbol.for("react.portal");function E(M,x,N){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:L==null?null:""+L,children:M,containerInfo:x,implementation:N}}var q=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(M,x){if(M==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Jn.createPortal=function(M,x){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return E(M,x,null,N)},Jn.flushSync=function(M){var x=q.T,N=c.p;try{if(q.T=null,c.p=2,M)return M()}finally{q.T=x,c.p=N,c.d.f()}},Jn.preconnect=function(M,x){typeof M=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(M,x))},Jn.prefetchDNS=function(M){typeof M=="string"&&c.d.D(M)},Jn.preinit=function(M,x){if(typeof M=="string"&&x&&typeof x.as=="string"){var N=x.as,L=B(N,x.crossOrigin),F=typeof x.integrity=="string"?x.integrity:void 0,bn=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;N==="style"?c.d.S(M,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:L,integrity:F,fetchPriority:bn}):N==="script"&&c.d.X(M,{crossOrigin:L,integrity:F,fetchPriority:bn,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Jn.preinitModule=function(M,x){if(typeof M=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var N=B(x.as,x.crossOrigin);c.d.M(M,{crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(M)},Jn.preload=function(M,x){if(typeof M=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var N=x.as,L=B(N,x.crossOrigin);c.d.L(M,N,{crossOrigin:L,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Jn.preloadModule=function(M,x){if(typeof M=="string")if(x){var N=B(x.as,x.crossOrigin);c.d.m(M,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(M)},Jn.requestFormReset=function(M){c.d.r(M)},Jn.unstable_batchedUpdates=function(M,x){return M(x)},Jn.useFormState=function(M,x,N){return q.H.useFormState(M,x,N)},Jn.useFormStatus=function(){return q.H.useHostTransitionStatus()},Jn.version="19.1.0",Jn}var O0;function r1(){if(O0)return gr.exports;O0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),gr.exports=o1(),gr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function c1(){if(z0)return qe;z0=1;var r=u1(),s=Sr(),b=r1();function c(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function E(n){var a=n,t=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(t=a.return),n=a.return;while(n)}return a.tag===3?t:null}function q(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function B(n){if(E(n)!==n)throw Error(c(188))}function M(n){var a=n.alternate;if(!a){if(a=E(n),a===null)throw Error(c(188));return a!==n?null:n}for(var t=n,l=a;;){var e=t.return;if(e===null)break;var i=e.alternate;if(i===null){if(l=e.return,l!==null){t=l;continue}break}if(e.child===i.child){for(i=e.child;i;){if(i===t)return B(e),n;if(i===l)return B(e),a;i=i.sibling}throw Error(c(188))}if(t.return!==l.return)t=e,l=i;else{for(var u=!1,o=e.child;o;){if(o===t){u=!0,t=e,l=i;break}if(o===l){u=!0,l=e,t=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===t){u=!0,t=i,l=e;break}if(o===l){u=!0,l=i,t=e;break}o=o.sibling}if(!u)throw Error(c(189))}}if(t.alternate!==l)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?n:a}function x(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=x(n),a!==null)return a;n=n.sibling}return null}var N=Object.assign,L=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),bn=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),kn=Symbol.for("react.provider"),Zn=Symbol.for("react.consumer"),sn=Symbol.for("react.context"),qn=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Tn=Symbol.for("react.suspense_list"),An=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),xn=Symbol.for("react.activity"),Vt=Symbol.for("react.memo_cache_sentinel"),Na=Symbol.iterator;function wn(n){return n===null||typeof n!="object"?null:(n=Na&&n[Na]||n["@@iterator"],typeof n=="function"?n:null)}var Ot=Symbol.for("react.client.reference");function zt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ot?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case X:return"Fragment";case w:return"Profiler";case D:return"StrictMode";case J:return"Suspense";case Tn:return"SuspenseList";case xn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case bn:return"Portal";case sn:return(n.displayName||"Context")+".Provider";case Zn:return(n._context.displayName||"Context")+".Consumer";case qn:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case An:return a=n.displayName||null,a!==null?a:zt(n.type)||"Memo";case Rn:a=n._payload,n=n._init;try{return zt(n(a))}catch{}}return null}var Vn=Array.isArray,z=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},dn=[],d=-1;function _(n){return{current:n}}function H(n){0>d||(n.current=dn[d],dn[d]=null,d--)}function R(n,a){d++,dn[d]=n.current,n.current=a}var j=_(null),tn=_(null),K=_(null),aa=_(null);function vn(n,a){switch(R(K,a),R(tn,n),R(j,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Zs(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Zs(a),n=ws(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}H(j),R(j,n)}function $a(){H(j),H(tn),H(K)}function Pi(n){n.memoizedState!==null&&R(aa,n);var a=j.current,t=ws(a,n.type);a!==t&&(R(tn,n),R(j,t))}function Ue(n){tn.current===n&&(H(j),H(tn)),aa.current===n&&(H(aa),Te._currentValue=Z)}var Fi=Object.prototype.hasOwnProperty,Ii=r.unstable_scheduleCallback,nu=r.unstable_cancelCallback,N0=r.unstable_shouldYield,H0=r.unstable_requestPaint,_a=r.unstable_now,k0=r.unstable_getCurrentPriorityLevel,Or=r.unstable_ImmediatePriority,zr=r.unstable_UserBlockingPriority,Ne=r.unstable_NormalPriority,Y0=r.unstable_LowPriority,Tr=r.unstable_IdlePriority,C0=r.log,B0=r.unstable_setDisableYieldValue,Ul=null,ta=null;function Pa(n){if(typeof C0=="function"&&B0(n),ta&&typeof ta.setStrictMode=="function")try{ta.setStrictMode(Ul,n)}catch{}}var la=Math.clz32?Math.clz32:G0,X0=Math.log,j0=Math.LN2;function G0(n){return n>>>=0,n===0?32:31-(X0(n)/j0|0)|0}var He=256,ke=4194304;function Tt(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ye(n,a,t){var l=n.pendingLanes;if(l===0)return 0;var e=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?e=Tt(l):(u&=o,u!==0?e=Tt(u):t||(t=o&~n,t!==0&&(e=Tt(t))))):(o=l&~i,o!==0?e=Tt(o):u!==0?e=Tt(u):t||(t=l&~n,t!==0&&(e=Tt(t)))),e===0?0:a!==0&&a!==e&&(a&i)===0&&(i=e&-e,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:e}function Nl(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Q0(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(){var n=He;return He<<=1,(He&4194048)===0&&(He=256),n}function _r(){var n=ke;return ke<<=1,(ke&62914560)===0&&(ke=4194304),n}function au(n){for(var a=[],t=0;31>t;t++)a.push(n);return a}function Hl(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Z0(n,a,t,l,e,i){var u=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var o=n.entanglements,f=n.expirationTimes,p=n.hiddenUpdates;for(t=u&~t;0<t;){var O=31-la(t),A=1<<O;o[O]=0,f[O]=-1;var g=p[O];if(g!==null)for(p[O]=null,O=0;O<g.length;O++){var y=g[O];y!==null&&(y.lane&=-536870913)}t&=~A}l!==0&&Er(n,l,0),i!==0&&e===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~a))}function Er(n,a,t){n.pendingLanes|=a,n.suspendedLanes&=~a;var l=31-la(a);n.entangledLanes|=a,n.entanglements[l]=n.entanglements[l]|1073741824|t&4194090}function Mr(n,a){var t=n.entangledLanes|=a;for(n=n.entanglements;t;){var l=31-la(t),e=1<<l;e&a|n[l]&a&&(n[l]|=a),t&=~e}}function tu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function lu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dr(){var n=U.p;return n!==0?n:(n=window.event,n===void 0?32:c0(n.type))}function w0(n,a){var t=U.p;try{return U.p=n,a()}finally{U.p=t}}var Fa=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Fa,$n="__reactProps$"+Fa,Lt="__reactContainer$"+Fa,eu="__reactEvents$"+Fa,V0="__reactListeners$"+Fa,L0="__reactHandles$"+Fa,qr="__reactResources$"+Fa,kl="__reactMarker$"+Fa;function iu(n){delete n[Ln],delete n[$n],delete n[eu],delete n[V0],delete n[L0]}function Kt(n){var a=n[Ln];if(a)return a;for(var t=n.parentNode;t;){if(a=t[Lt]||t[Ln]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(n=Js(n);n!==null;){if(t=n[Ln])return t;n=Js(n)}return a}n=t,t=n.parentNode}return null}function Jt(n){if(n=n[Ln]||n[Lt]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Yl(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(c(33))}function Wt(n){var a=n[qr];return a||(a=n[qr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Yn(n){n[kl]=!0}var Rr=new Set,Ur={};function At(n,a){$t(n,a),$t(n+"Capture",a)}function $t(n,a){for(Ur[n]=a,n=0;n<a.length;n++)Rr.add(a[n])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nr={},Hr={};function J0(n){return Fi.call(Hr,n)?!0:Fi.call(Nr,n)?!1:K0.test(n)?Hr[n]=!0:(Nr[n]=!0,!1)}function Ce(n,a,t){if(J0(a))if(t===null)n.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+t)}}function Be(n,a,t){if(t===null)n.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+t)}}function Ha(n,a,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(a,t,""+l)}}var uu,kr;function Pt(n){if(uu===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);uu=a&&a[1]||"",kr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+n+kr}var ou=!1;function ru(n,a){if(!n||ou)return"";ou=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var g=y}Reflect.construct(n,[],A)}else{try{A.call()}catch(y){g=y}n.call(A.prototype)}}else{try{throw Error()}catch(y){g=y}(A=n())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var f=u.split(`
`),p=o.split(`
`);for(e=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;e<p.length&&!p[e].includes("DetermineComponentFrameRoot");)e++;if(l===f.length||e===p.length)for(l=f.length-1,e=p.length-1;1<=l&&0<=e&&f[l]!==p[e];)e--;for(;1<=l&&0<=e;l--,e--)if(f[l]!==p[e]){if(l!==1||e!==1)do if(l--,e--,0>e||f[l]!==p[e]){var O=`
`+f[l].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=l&&0<=e);break}}}finally{ou=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Pt(t):""}function W0(n){switch(n.tag){case 26:case 27:case 5:return Pt(n.type);case 16:return Pt("Lazy");case 13:return Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return ru(n.type,!1);case 11:return ru(n.type.render,!1);case 1:return ru(n.type,!0);case 31:return Pt("Activity");default:return""}}function Yr(n){try{var a="";do a+=W0(n),n=n.return;while(n);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function da(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Cr(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function $0(n){var a=Cr(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),l=""+n[a];if(!n.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var e=t.get,i=t.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return e.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(n,a,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Xe(n){n._valueTracker||(n._valueTracker=$0(n))}function Br(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return n&&(l=Cr(n)?n.checked?"true":"false":n.value),n=l,n!==t?(a.setValue(n),!0):!1}function je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var P0=/[\n"\\]/g;function ha(n){return n.replace(P0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function cu(n,a,t,l,e,i,u,o){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),a!=null?u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+da(a)):n.value!==""+da(a)&&(n.value=""+da(a)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),a!=null?fu(n,u,da(a)):t!=null?fu(n,u,da(t)):l!=null&&n.removeAttribute("value"),e==null&&i!=null&&(n.defaultChecked=!!i),e!=null&&(n.checked=e&&typeof e!="function"&&typeof e!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+da(o):n.removeAttribute("name")}function Xr(n,a,t,l,e,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null))return;t=t!=null?""+da(t):"",a=a!=null?""+da(a):t,o||a===n.value||(n.value=a),n.defaultValue=a}l=l??e,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=o?n.checked:!!l,n.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function fu(n,a,t){a==="number"&&je(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function Ft(n,a,t,l){if(n=n.options,a){a={};for(var e=0;e<t.length;e++)a["$"+t[e]]=!0;for(t=0;t<n.length;t++)e=a.hasOwnProperty("$"+n[t].value),n[t].selected!==e&&(n[t].selected=e),e&&l&&(n[t].defaultSelected=!0)}else{for(t=""+da(t),a=null,e=0;e<n.length;e++){if(n[e].value===t){n[e].selected=!0,l&&(n[e].defaultSelected=!0);return}a!==null||n[e].disabled||(a=n[e])}a!==null&&(a.selected=!0)}}function jr(n,a,t){if(a!=null&&(a=""+da(a),a!==n.value&&(n.value=a),t==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=t!=null?""+da(t):""}function Gr(n,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(c(92));if(Vn(l)){if(1<l.length)throw Error(c(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=da(a),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l)}function It(n,a){if(a){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=a;return}}n.textContent=a}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qr(n,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":l?n.setProperty(a,t):typeof t!="number"||t===0||F0.has(a)?a==="float"?n.cssFloat=t:n[a]=(""+t).trim():n[a]=t+"px"}function Zr(n,a,t){if(a!=null&&typeof a!="object")throw Error(c(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var e in a)l=a[e],a.hasOwnProperty(e)&&t[e]!==l&&Qr(n,e,l)}else for(var i in a)a.hasOwnProperty(i)&&Qr(n,i,a[i])}function su(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ge(n){return nd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var du=null;function hu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nl=null,al=null;function wr(n){var a=Jt(n);if(a&&(n=a.stateNode)){var t=n[$n]||null;n:switch(n=a.stateNode,a.type){case"input":if(cu(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ha(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==n&&l.form===n.form){var e=l[$n]||null;if(!e)throw Error(c(90));cu(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===n.form&&Br(l)}break n;case"textarea":jr(n,t.value,t.defaultValue);break n;case"select":a=t.value,a!=null&&Ft(n,!!t.multiple,a,!1)}}}var bu=!1;function Vr(n,a,t){if(bu)return n(a,t);bu=!0;try{var l=n(a);return l}finally{if(bu=!1,(nl!==null||al!==null)&&(_i(),nl&&(a=nl,n=al,al=nl=null,wr(a),n)))for(a=0;a<n.length;a++)wr(n[a])}}function Cl(n,a){var t=n.stateNode;if(t===null)return null;var l=t[$n]||null;if(l===null)return null;t=l[a];n:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(c(231,a,typeof t));return t}var ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(ka)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{mu=!1}var Ia=null,vu=null,Qe=null;function Lr(){if(Qe)return Qe;var n,a=vu,t=a.length,l,e="value"in Ia?Ia.value:Ia.textContent,i=e.length;for(n=0;n<t&&a[n]===e[n];n++);var u=t-n;for(l=1;l<=u&&a[t-l]===e[i-l];l++);return Qe=e.slice(n,1<l?1-l:void 0)}function Ze(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function we(){return!0}function Kr(){return!1}function Pn(n){function a(t,l,e,i,u){this._reactName=t,this._targetInst=e,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?we:Kr,this.isPropagationStopped=Kr,this}return N(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=we)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=we)},persist:function(){},isPersistent:we}),a}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ve=Pn(_t),Xl=N({},_t,{view:0,detail:0}),ad=Pn(Xl),pu,gu,jl,Le=N({},Xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jl&&(jl&&n.type==="mousemove"?(pu=n.screenX-jl.screenX,gu=n.screenY-jl.screenY):gu=pu=0,jl=n),pu)},movementY:function(n){return"movementY"in n?n.movementY:gu}}),Jr=Pn(Le),td=N({},Le,{dataTransfer:0}),ld=Pn(td),ed=N({},Xl,{relatedTarget:0}),yu=Pn(ed),id=N({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=Pn(id),od=N({},_t,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rd=Pn(od),cd=N({},_t,{data:0}),Wr=Pn(cd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=dd[n])?!!a[n]:!1}function xu(){return hd}var bd=N({},Xl,{key:function(n){if(n.key){var a=fd[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Ze(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(n){return n.type==="keypress"?Ze(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ze(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),md=Pn(bd),vd=N({},Le,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$r=Pn(vd),pd=N({},Xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),gd=Pn(pd),yd=N({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=Pn(yd),Sd=N({},Le,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=Pn(Sd),zd=N({},_t,{newState:0,oldState:0}),Td=Pn(zd),Ad=[9,13,27,32],Su=ka&&"CompositionEvent"in window,Gl=null;ka&&"documentMode"in document&&(Gl=document.documentMode);var _d=ka&&"TextEvent"in window&&!Gl,Pr=ka&&(!Su||Gl&&8<Gl&&11>=Gl),Fr=" ",Ir=!1;function nc(n,a){switch(n){case"keyup":return Ad.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var tl=!1;function Ed(n,a){switch(n){case"compositionend":return ac(a);case"keypress":return a.which!==32?null:(Ir=!0,Fr);case"textInput":return n=a.data,n===Fr&&Ir?null:n;default:return null}}function Md(n,a){if(tl)return n==="compositionend"||!Su&&nc(n,a)?(n=Lr(),Qe=vu=Ia=null,tl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Pr&&a.locale!=="ko"?null:a.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Dd[n.type]:a==="textarea"}function lc(n,a,t,l){nl?al?al.push(l):al=[l]:nl=l,a=Ui(a,"onChange"),0<a.length&&(t=new Ve("onChange","change",null,t,l),n.push({event:t,listeners:a}))}var Ql=null,Zl=null;function qd(n){Bs(n,0)}function Ke(n){var a=Yl(n);if(Br(a))return n}function ec(n,a){if(n==="change")return a}var ic=!1;if(ka){var Ou;if(ka){var zu="oninput"in document;if(!zu){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),zu=typeof uc.oninput=="function"}Ou=zu}else Ou=!1;ic=Ou&&(!document.documentMode||9<document.documentMode)}function oc(){Ql&&(Ql.detachEvent("onpropertychange",rc),Zl=Ql=null)}function rc(n){if(n.propertyName==="value"&&Ke(Zl)){var a=[];lc(a,Zl,n,hu(n)),Vr(qd,a)}}function Rd(n,a,t){n==="focusin"?(oc(),Ql=a,Zl=t,Ql.attachEvent("onpropertychange",rc)):n==="focusout"&&oc()}function Ud(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ke(Zl)}function Nd(n,a){if(n==="click")return Ke(a)}function Hd(n,a){if(n==="input"||n==="change")return Ke(a)}function kd(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var ea=typeof Object.is=="function"?Object.is:kd;function wl(n,a){if(ea(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var t=Object.keys(n),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var e=t[l];if(!Fi.call(a,e)||!ea(n[e],a[e]))return!1}return!0}function cc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fc(n,a){var t=cc(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=a&&l>=a)return{node:t,offset:a-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=cc(t)}}function sc(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?sc(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function dc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=je(n.document);a instanceof n.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)n=a.contentWindow;else break;a=je(n.document)}return a}function Tu(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var Yd=ka&&"documentMode"in document&&11>=document.documentMode,ll=null,Au=null,Vl=null,_u=!1;function hc(n,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_u||ll==null||ll!==je(l)||(l=ll,"selectionStart"in l&&Tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vl&&wl(Vl,l)||(Vl=l,l=Ui(Au,"onSelect"),0<l.length&&(a=new Ve("onSelect","select",null,a,t),n.push({event:a,listeners:l}),a.target=ll)))}function Et(n,a){var t={};return t[n.toLowerCase()]=a.toLowerCase(),t["Webkit"+n]="webkit"+a,t["Moz"+n]="moz"+a,t}var el={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionrun:Et("Transition","TransitionRun"),transitionstart:Et("Transition","TransitionStart"),transitioncancel:Et("Transition","TransitionCancel"),transitionend:Et("Transition","TransitionEnd")},Eu={},bc={};ka&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Mt(n){if(Eu[n])return Eu[n];if(!el[n])return n;var a=el[n],t;for(t in a)if(a.hasOwnProperty(t)&&t in bc)return Eu[n]=a[t];return n}var mc=Mt("animationend"),vc=Mt("animationiteration"),pc=Mt("animationstart"),Cd=Mt("transitionrun"),Bd=Mt("transitionstart"),Xd=Mt("transitioncancel"),gc=Mt("transitionend"),yc=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function Sa(n,a){yc.set(n,a),At(a,[n])}var xc=new WeakMap;function ba(n,a){if(typeof n=="object"&&n!==null){var t=xc.get(n);return t!==void 0?t:(a={value:n,source:a,stack:Yr(a)},xc.set(n,a),a)}return{value:n,source:a,stack:Yr(a)}}var ma=[],il=0,Du=0;function Je(){for(var n=il,a=Du=il=0;a<n;){var t=ma[a];ma[a++]=null;var l=ma[a];ma[a++]=null;var e=ma[a];ma[a++]=null;var i=ma[a];if(ma[a++]=null,l!==null&&e!==null){var u=l.pending;u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e}i!==0&&Sc(t,e,i)}}function We(n,a,t,l){ma[il++]=n,ma[il++]=a,ma[il++]=t,ma[il++]=l,Du|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function qu(n,a,t,l){return We(n,a,t,l),$e(n)}function ul(n,a){return We(n,null,null,a),$e(n)}function Sc(n,a,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var e=!1,i=n.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(e=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,e&&a!==null&&(e=31-la(t),n=i.hiddenUpdates,l=n[e],l===null?n[e]=[a]:l.push(a),a.lane=t|536870912),i):null}function $e(n){if(50<ve)throw ve=0,Co=null,Error(c(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var ol={};function jd(n,a,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ia(n,a,t,l){return new jd(n,a,t,l)}function Ru(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ya(n,a){var t=n.alternate;return t===null?(t=ia(n.tag,a,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=a,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,a=n.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Oc(n,a){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,a=t.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Pe(n,a,t,l,e,i){var u=0;if(l=n,typeof n=="function")Ru(n)&&(u=1);else if(typeof n=="string")u=Qh(n,t,j.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case xn:return n=ia(31,t,a,e),n.elementType=xn,n.lanes=i,n;case X:return Dt(t.children,e,i,a);case D:u=8,e|=24;break;case w:return n=ia(12,t,a,e|2),n.elementType=w,n.lanes=i,n;case J:return n=ia(13,t,a,e),n.elementType=J,n.lanes=i,n;case Tn:return n=ia(19,t,a,e),n.elementType=Tn,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case kn:case sn:u=10;break n;case Zn:u=9;break n;case qn:u=11;break n;case An:u=14;break n;case Rn:u=16,l=null;break n}u=29,t=Error(c(130,n===null?"null":typeof n,"")),l=null}return a=ia(u,t,a,e),a.elementType=n,a.type=l,a.lanes=i,a}function Dt(n,a,t,l){return n=ia(7,n,l,a),n.lanes=t,n}function Uu(n,a,t){return n=ia(6,n,null,a),n.lanes=t,n}function Nu(n,a,t){return a=ia(4,n.children!==null?n.children:[],n.key,a),a.lanes=t,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var rl=[],cl=0,Fe=null,Ie=0,va=[],pa=0,qt=null,Ca=1,Ba="";function Rt(n,a){rl[cl++]=Ie,rl[cl++]=Fe,Fe=n,Ie=a}function zc(n,a,t){va[pa++]=Ca,va[pa++]=Ba,va[pa++]=qt,qt=n;var l=Ca;n=Ba;var e=32-la(l)-1;l&=~(1<<e),t+=1;var i=32-la(a)+e;if(30<i){var u=e-e%5;i=(l&(1<<u)-1).toString(32),l>>=u,e-=u,Ca=1<<32-la(a)+e|t<<e|l,Ba=i+n}else Ca=1<<i|t<<e|l,Ba=n}function Hu(n){n.return!==null&&(Rt(n,1),zc(n,1,0))}function ku(n){for(;n===Fe;)Fe=rl[--cl],rl[cl]=null,Ie=rl[--cl],rl[cl]=null;for(;n===qt;)qt=va[--pa],va[pa]=null,Ba=va[--pa],va[pa]=null,Ca=va[--pa],va[pa]=null}var Wn=null,Sn=null,en=!1,Ut=null,Ea=!1,Yu=Error(c(519));function Nt(n){var a=Error(c(418,""));throw Jl(ba(a,n)),Yu}function Tc(n){var a=n.stateNode,t=n.type,l=n.memoizedProps;switch(a[Ln]=n,a[$n]=l,t){case"dialog":nn("cancel",a),nn("close",a);break;case"iframe":case"object":case"embed":nn("load",a);break;case"video":case"audio":for(t=0;t<ge.length;t++)nn(ge[t],a);break;case"source":nn("error",a);break;case"img":case"image":case"link":nn("error",a),nn("load",a);break;case"details":nn("toggle",a);break;case"input":nn("invalid",a),Xr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xe(a);break;case"select":nn("invalid",a);break;case"textarea":nn("invalid",a),Gr(a,l.value,l.defaultValue,l.children),Xe(a)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Qs(a.textContent,t)?(l.popover!=null&&(nn("beforetoggle",a),nn("toggle",a)),l.onScroll!=null&&nn("scroll",a),l.onScrollEnd!=null&&nn("scrollend",a),l.onClick!=null&&(a.onclick=Ni),a=!0):a=!1,a||Nt(n)}function Ac(n){for(Wn=n.return;Wn;)switch(Wn.tag){case 5:case 13:Ea=!1;return;case 27:case 3:Ea=!0;return;default:Wn=Wn.return}}function Ll(n){if(n!==Wn)return!1;if(!en)return Ac(n),en=!0,!1;var a=n.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Io(n.type,n.memoizedProps)),t=!t),t&&Sn&&Nt(n),Ac(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(t=n.data,t==="/$"){if(a===0){Sn=za(n.nextSibling);break n}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++;n=n.nextSibling}Sn=null}}else a===27?(a=Sn,mt(n.type)?(n=lr,lr=null,Sn=n):Sn=a):Sn=Wn?za(n.stateNode.nextSibling):null;return!0}function Kl(){Sn=Wn=null,en=!1}function _c(){var n=Ut;return n!==null&&(na===null?na=n:na.push.apply(na,n),Ut=null),n}function Jl(n){Ut===null?Ut=[n]:Ut.push(n)}var Cu=_(null),Ht=null,Xa=null;function nt(n,a,t){R(Cu,a._currentValue),a._currentValue=t}function ja(n){n._currentValue=Cu.current,H(Cu)}function Bu(n,a,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),n===t)break;n=n.return}}function Xu(n,a,t,l){var e=n.child;for(e!==null&&(e.return=n);e!==null;){var i=e.dependencies;if(i!==null){var u=e.child;i=i.firstContext;n:for(;i!==null;){var o=i;i=e;for(var f=0;f<a.length;f++)if(o.context===a[f]){i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Bu(i.return,t,n),l||(u=null);break n}i=o.next}}else if(e.tag===18){if(u=e.return,u===null)throw Error(c(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Bu(u,t,n),u=null}else u=e.child;if(u!==null)u.return=e;else for(u=e;u!==null;){if(u===n){u=null;break}if(e=u.sibling,e!==null){e.return=u.return,u=e;break}u=u.return}e=u}}function Wl(n,a,t,l){n=null;for(var e=a,i=!1;e!==null;){if(!i){if((e.flags&524288)!==0)i=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var u=e.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var o=e.type;ea(e.pendingProps.value,u.value)||(n!==null?n.push(o):n=[o])}}else if(e===aa.current){if(u=e.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(n!==null?n.push(Te):n=[Te])}e=e.return}n!==null&&Xu(a,n,t,l),a.flags|=262144}function ni(n){for(n=n.firstContext;n!==null;){if(!ea(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function kt(n){Ht=n,Xa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Kn(n){return Ec(Ht,n)}function ai(n,a){return Ht===null&&kt(n),Ec(n,a)}function Ec(n,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Xa===null){if(n===null)throw Error(c(308));Xa=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Xa=Xa.next=a;return t}var Gd=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){a.aborted=!0,n.forEach(function(t){return t()})}},Qd=r.unstable_scheduleCallback,Zd=r.unstable_NormalPriority,Un={$$typeof:sn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Gd,data:new Map,refCount:0}}function $l(n){n.refCount--,n.refCount===0&&Qd(Zd,function(){n.controller.abort()})}var Pl=null,Gu=0,fl=0,sl=null;function wd(n,a){if(Pl===null){var t=Pl=[];Gu=0,fl=wo(),sl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Gu++,a.then(Mc,Mc),a}function Mc(){if(--Gu===0&&Pl!==null){sl!==null&&(sl.status="fulfilled");var n=Pl;Pl=null,fl=0,sl=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Vd(n,a){var t=[],l={status:"pending",value:null,reason:null,then:function(e){t.push(e)}};return n.then(function(){l.status="fulfilled",l.value=a;for(var e=0;e<t.length;e++)(0,t[e])(a)},function(e){for(l.status="rejected",l.reason=e,e=0;e<t.length;e++)(0,t[e])(void 0)}),l}var Dc=z.S;z.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&wd(n,a),Dc!==null&&Dc(n,a)};var Yt=_(null);function Qu(){var n=Yt.current;return n!==null?n:mn.pooledCache}function ti(n,a){a===null?R(Yt,Yt.current):R(Yt,a.pool)}function qc(){var n=Qu();return n===null?null:{parent:Un._currentValue,pool:n}}var Fl=Error(c(460)),Rc=Error(c(474)),li=Error(c(542)),Zu={then:function(){}};function Uc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ei(){}function Nc(n,a,t){switch(t=n[t],t===void 0?n.push(a):t!==a&&(a.then(ei,ei),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,kc(n),n;default:if(typeof a.status=="string")a.then(ei,ei);else{if(n=mn,n!==null&&100<n.shellSuspendCounter)throw Error(c(482));n=a,n.status="pending",n.then(function(l){if(a.status==="pending"){var e=a;e.status="fulfilled",e.value=l}},function(l){if(a.status==="pending"){var e=a;e.status="rejected",e.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,kc(n),n}throw Il=a,Fl}}var Il=null;function Hc(){if(Il===null)throw Error(c(459));var n=Il;return Il=null,n}function kc(n){if(n===Fl||n===li)throw Error(c(483))}var at=!1;function wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function tt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function lt(n,a,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(un&2)!==0){var e=l.pending;return e===null?a.next=a:(a.next=e.next,e.next=a),l.pending=a,a=$e(n),Sc(n,null,t),a}return We(n,l,a,t),$e(n)}function ne(n,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=n.pendingLanes,t|=l,a.lanes=t,Mr(n,t)}}function Lu(n,a){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var e=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?e=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?e=i=a:i=i.next=a}else e=i=a;t={baseState:l.baseState,firstBaseUpdate:e,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=a:n.next=a,t.lastBaseUpdate=a}var Ku=!1;function ae(){if(Ku){var n=sl;if(n!==null)throw n}}function te(n,a,t,l){Ku=!1;var e=n.updateQueue;at=!1;var i=e.firstBaseUpdate,u=e.lastBaseUpdate,o=e.shared.pending;if(o!==null){e.shared.pending=null;var f=o,p=f.next;f.next=null,u===null?i=p:u.next=p,u=f;var O=n.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==u&&(o===null?O.firstBaseUpdate=p:o.next=p,O.lastBaseUpdate=f))}if(i!==null){var A=e.baseState;u=0,O=p=f=null,o=i;do{var g=o.lane&-536870913,y=g!==o.lane;if(y?(an&g)===g:(l&g)===g){g!==0&&g===fl&&(Ku=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var V=n,G=o;g=a;var fn=t;switch(G.tag){case 1:if(V=G.payload,typeof V=="function"){A=V.call(fn,A,g);break n}A=V;break n;case 3:V.flags=V.flags&-65537|128;case 0:if(V=G.payload,g=typeof V=="function"?V.call(fn,A,g):V,g==null)break n;A=N({},A,g);break n;case 2:at=!0}}g=o.callback,g!==null&&(n.flags|=64,y&&(n.flags|=8192),y=e.callbacks,y===null?e.callbacks=[g]:y.push(g))}else y={lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(p=O=y,f=A):O=O.next=y,u|=g;if(o=o.next,o===null){if(o=e.shared.pending,o===null)break;y=o,o=y.next,y.next=null,e.lastBaseUpdate=y,e.shared.pending=null}}while(!0);O===null&&(f=A),e.baseState=f,e.firstBaseUpdate=p,e.lastBaseUpdate=O,i===null&&(e.shared.lanes=0),st|=u,n.lanes=u,n.memoizedState=A}}function Yc(n,a){if(typeof n!="function")throw Error(c(191,n));n.call(a)}function Cc(n,a){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Yc(t[n],a)}var dl=_(null),ii=_(0);function Bc(n,a){n=Ka,R(ii,n),R(dl,a),Ka=n|a.baseLanes}function Ju(){R(ii,Ka),R(dl,dl.current)}function Wu(){Ka=ii.current,H(dl),H(ii)}var et=0,$=null,rn=null,Mn=null,ui=!1,hl=!1,Ct=!1,oi=0,le=0,bl=null,Ld=0;function _n(){throw Error(c(321))}function $u(n,a){if(a===null)return!1;for(var t=0;t<a.length&&t<n.length;t++)if(!ea(n[t],a[t]))return!1;return!0}function Pu(n,a,t,l,e,i){return et=i,$=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=n===null||n.memoizedState===null?Of:zf,Ct=!1,i=t(l,e),Ct=!1,hl&&(i=jc(a,t,l,e)),Xc(n),i}function Xc(n){z.H=hi;var a=rn!==null&&rn.next!==null;if(et=0,Mn=rn=$=null,ui=!1,le=0,bl=null,a)throw Error(c(300));n===null||Cn||(n=n.dependencies,n!==null&&ni(n)&&(Cn=!0))}function jc(n,a,t,l){$=n;var e=0;do{if(hl&&(bl=null),le=0,hl=!1,25<=e)throw Error(c(301));if(e+=1,Mn=rn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Id,i=a(t,l)}while(hl);return i}function Kd(){var n=z.H,a=n.useState()[0];return a=typeof a.then=="function"?ee(a):a,n=n.useState()[0],(rn!==null?rn.memoizedState:null)!==n&&($.flags|=1024),a}function Fu(){var n=oi!==0;return oi=0,n}function Iu(n,a,t){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~t}function no(n){if(ui){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ui=!1}et=0,Mn=rn=$=null,hl=!1,le=oi=0,bl=null}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?$.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function Dn(){if(rn===null){var n=$.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var a=Mn===null?$.memoizedState:Mn.next;if(a!==null)Mn=a,rn=n;else{if(n===null)throw $.alternate===null?Error(c(467)):Error(c(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},Mn===null?$.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ee(n){var a=le;return le+=1,bl===null&&(bl=[]),n=Nc(bl,n,a),a=$,(Mn===null?a.memoizedState:Mn.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Of:zf),n}function ri(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ee(n);if(n.$$typeof===sn)return Kn(n)}throw Error(c(438,String(n)))}function to(n){var a=null,t=$.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(e){return e.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ao(),$.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(n),l=0;l<n;l++)t[l]=Vt;return a.index++,t}function Ga(n,a){return typeof a=="function"?a(n):a}function ci(n){var a=Dn();return lo(a,rn,n)}function lo(n,a,t){var l=n.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var e=n.baseQueue,i=l.pending;if(i!==null){if(e!==null){var u=e.next;e.next=i.next,i.next=u}a.baseQueue=e=i,l.pending=null}if(i=n.baseState,e===null)n.memoizedState=i;else{a=e.next;var o=u=null,f=null,p=a,O=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(an&A)===A:(et&A)===A){var g=p.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===fl&&(O=!0);else if((et&g)===g){p=p.next,g===fl&&(O=!0);continue}else A={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},f===null?(o=f=A,u=i):f=f.next=A,$.lanes|=g,st|=g;A=p.action,Ct&&t(i,A),i=p.hasEagerState?p.eagerState:t(i,A)}else g={lane:A,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},f===null?(o=f=g,u=i):f=f.next=g,$.lanes|=A,st|=A;p=p.next}while(p!==null&&p!==a);if(f===null?u=i:f.next=o,!ea(i,n.memoizedState)&&(Cn=!0,O&&(t=sl,t!==null)))throw t;n.memoizedState=i,n.baseState=u,n.baseQueue=f,l.lastRenderedState=i}return e===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function eo(n){var a=Dn(),t=a.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=n;var l=t.dispatch,e=t.pending,i=a.memoizedState;if(e!==null){t.pending=null;var u=e=e.next;do i=n(i,u.action),u=u.next;while(u!==e);ea(i,a.memoizedState)||(Cn=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function Gc(n,a,t){var l=$,e=Dn(),i=en;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=a();var u=!ea((rn||e).memoizedState,t);u&&(e.memoizedState=t,Cn=!0),e=e.queue;var o=wc.bind(null,l,e,n);if(ie(2048,8,o,[n]),e.getSnapshot!==a||u||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,ml(9,fi(),Zc.bind(null,l,e,t,a),null),mn===null)throw Error(c(349));i||(et&124)!==0||Qc(l,a,t)}return t}function Qc(n,a,t){n.flags|=16384,n={getSnapshot:a,value:t},a=$.updateQueue,a===null?(a=ao(),$.updateQueue=a,a.stores=[n]):(t=a.stores,t===null?a.stores=[n]:t.push(n))}function Zc(n,a,t,l){a.value=t,a.getSnapshot=l,Vc(a)&&Lc(n)}function wc(n,a,t){return t(function(){Vc(a)&&Lc(n)})}function Vc(n){var a=n.getSnapshot;n=n.value;try{var t=a();return!ea(n,t)}catch{return!0}}function Lc(n){var a=ul(n,2);a!==null&&fa(a,n,2)}function io(n){var a=Fn();if(typeof n=="function"){var t=n;if(n=t(),Ct){Pa(!0);try{t()}finally{Pa(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},a}function Kc(n,a,t,l){return n.baseState=t,lo(n,rn,typeof l=="function"?l:Ga)}function Jd(n,a,t,l,e){if(di(n))throw Error(c(485));if(n=a.action,n!==null){var i={payload:e,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,Jc(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Jc(n,a){var t=a.action,l=a.payload,e=n.state;if(a.isTransition){var i=z.T,u={};z.T=u;try{var o=t(e,l),f=z.S;f!==null&&f(u,o),Wc(n,a,o)}catch(p){uo(n,a,p)}finally{z.T=i}}else try{i=t(e,l),Wc(n,a,i)}catch(p){uo(n,a,p)}}function Wc(n,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){$c(n,a,l)},function(l){return uo(n,a,l)}):$c(n,a,t)}function $c(n,a,t){a.status="fulfilled",a.value=t,Pc(a),n.state=t,a=n.pending,a!==null&&(t=a.next,t===a?n.pending=null:(t=t.next,a.next=t,Jc(n,t)))}function uo(n,a,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Pc(a),a=a.next;while(a!==l)}n.action=null}function Pc(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Fc(n,a){return a}function Ic(n,a){if(en){var t=mn.formState;if(t!==null){n:{var l=$;if(en){if(Sn){a:{for(var e=Sn,i=Ea;e.nodeType!==8;){if(!i){e=null;break a}if(e=za(e.nextSibling),e===null){e=null;break a}}i=e.data,e=i==="F!"||i==="F"?e:null}if(e){Sn=za(e.nextSibling),l=e.data==="F!";break n}}Nt(l)}l=!1}l&&(a=t[0])}}return t=Fn(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fc,lastRenderedState:a},t.queue=l,t=yf.bind(null,$,l),l.dispatch=t,l=io(!1),i=so.bind(null,$,!1,l.queue),l=Fn(),e={state:a,dispatch:null,action:n,pending:null},l.queue=e,t=Jd.bind(null,$,e,i,t),e.dispatch=t,l.memoizedState=n,[a,t,!1]}function nf(n){var a=Dn();return af(a,rn,n)}function af(n,a,t){if(a=lo(n,a,Fc)[0],n=ci(Ga)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=ee(a)}catch(u){throw u===Fl?li:u}else l=a;a=Dn();var e=a.queue,i=e.dispatch;return t!==a.memoizedState&&($.flags|=2048,ml(9,fi(),Wd.bind(null,e,t),null)),[l,i,n]}function Wd(n,a){n.action=a}function tf(n){var a=Dn(),t=rn;if(t!==null)return af(a,t,n);Dn(),a=a.memoizedState,t=Dn();var l=t.queue.dispatch;return t.memoizedState=n,[a,l,!1]}function ml(n,a,t,l){return n={tag:n,create:t,deps:l,inst:a,next:null},a=$.updateQueue,a===null&&(a=ao(),$.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,a.lastEffect=n),n}function fi(){return{destroy:void 0,resource:void 0}}function lf(){return Dn().memoizedState}function si(n,a,t,l){var e=Fn();l=l===void 0?null:l,$.flags|=n,e.memoizedState=ml(1|a,fi(),t,l)}function ie(n,a,t,l){var e=Dn();l=l===void 0?null:l;var i=e.memoizedState.inst;rn!==null&&l!==null&&$u(l,rn.memoizedState.deps)?e.memoizedState=ml(a,i,t,l):($.flags|=n,e.memoizedState=ml(1|a,i,t,l))}function ef(n,a){si(8390656,8,n,a)}function uf(n,a){ie(2048,8,n,a)}function of(n,a){return ie(4,2,n,a)}function rf(n,a){return ie(4,4,n,a)}function cf(n,a){if(typeof a=="function"){n=n();var t=a(n);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function ff(n,a,t){t=t!=null?t.concat([n]):null,ie(4,4,cf.bind(null,a,n),t)}function oo(){}function sf(n,a){var t=Dn();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&$u(a,l[1])?l[0]:(t.memoizedState=[n,a],n)}function df(n,a){var t=Dn();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&$u(a,l[1]))return l[0];if(l=n(),Ct){Pa(!0);try{n()}finally{Pa(!1)}}return t.memoizedState=[l,a],l}function ro(n,a,t){return t===void 0||(et&1073741824)!==0?n.memoizedState=a:(n.memoizedState=t,n=ms(),$.lanes|=n,st|=n,t)}function hf(n,a,t,l){return ea(t,a)?t:dl.current!==null?(n=ro(n,t,l),ea(n,a)||(Cn=!0),n):(et&42)===0?(Cn=!0,n.memoizedState=t):(n=ms(),$.lanes|=n,st|=n,a)}function bf(n,a,t,l,e){var i=U.p;U.p=i!==0&&8>i?i:8;var u=z.T,o={};z.T=o,so(n,!1,a,t);try{var f=e(),p=z.S;if(p!==null&&p(o,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var O=Vd(f,l);ue(n,a,O,ca(n))}else ue(n,a,l,ca(n))}catch(A){ue(n,a,{then:function(){},status:"rejected",reason:A},ca())}finally{U.p=i,z.T=u}}function $d(){}function co(n,a,t,l){if(n.tag!==5)throw Error(c(476));var e=mf(n).queue;bf(n,e,a,Z,t===null?$d:function(){return vf(n),t(l)})}function mf(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:Z},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function vf(n){var a=mf(n).next.queue;ue(n,a,{},ca())}function fo(){return Kn(Te)}function pf(){return Dn().memoizedState}function gf(){return Dn().memoizedState}function Pd(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var t=ca();n=tt(t);var l=lt(a,n,t);l!==null&&(fa(l,a,t),ne(l,a,t)),a={cache:ju()},n.payload=a;return}a=a.return}}function Fd(n,a,t){var l=ca();t={lane:l,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},di(n)?xf(a,t):(t=qu(n,a,t,l),t!==null&&(fa(t,n,l),Sf(t,a,l)))}function yf(n,a,t){var l=ca();ue(n,a,t,l)}function ue(n,a,t,l){var e={lane:l,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(di(n))xf(a,e);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,o=i(u,t);if(e.hasEagerState=!0,e.eagerState=o,ea(o,u))return We(n,a,e,0),mn===null&&Je(),!1}catch{}finally{}if(t=qu(n,a,e,l),t!==null)return fa(t,n,l),Sf(t,a,l),!0}return!1}function so(n,a,t,l){if(l={lane:2,revertLane:wo(),action:l,hasEagerState:!1,eagerState:null,next:null},di(n)){if(a)throw Error(c(479))}else a=qu(n,t,l,2),a!==null&&fa(a,n,2)}function di(n){var a=n.alternate;return n===$||a!==null&&a===$}function xf(n,a){hl=ui=!0;var t=n.pending;t===null?a.next=a:(a.next=t.next,t.next=a),n.pending=a}function Sf(n,a,t){if((t&4194048)!==0){var l=a.lanes;l&=n.pendingLanes,t|=l,a.lanes=t,Mr(n,t)}}var hi={readContext:Kn,use:ri,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n},Of={readContext:Kn,use:ri,useCallback:function(n,a){return Fn().memoizedState=[n,a===void 0?null:a],n},useContext:Kn,useEffect:ef,useImperativeHandle:function(n,a,t){t=t!=null?t.concat([n]):null,si(4194308,4,cf.bind(null,a,n),t)},useLayoutEffect:function(n,a){return si(4194308,4,n,a)},useInsertionEffect:function(n,a){si(4,2,n,a)},useMemo:function(n,a){var t=Fn();a=a===void 0?null:a;var l=n();if(Ct){Pa(!0);try{n()}finally{Pa(!1)}}return t.memoizedState=[l,a],l},useReducer:function(n,a,t){var l=Fn();if(t!==void 0){var e=t(a);if(Ct){Pa(!0);try{t(a)}finally{Pa(!1)}}}else e=a;return l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},l.queue=n,n=n.dispatch=Fd.bind(null,$,n),[l.memoizedState,n]},useRef:function(n){var a=Fn();return n={current:n},a.memoizedState=n},useState:function(n){n=io(n);var a=n.queue,t=yf.bind(null,$,a);return a.dispatch=t,[n.memoizedState,t]},useDebugValue:oo,useDeferredValue:function(n,a){var t=Fn();return ro(t,n,a)},useTransition:function(){var n=io(!1);return n=bf.bind(null,$,n.queue,!0,!1),Fn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,t){var l=$,e=Fn();if(en){if(t===void 0)throw Error(c(407));t=t()}else{if(t=a(),mn===null)throw Error(c(349));(an&124)!==0||Qc(l,a,t)}e.memoizedState=t;var i={value:t,getSnapshot:a};return e.queue=i,ef(wc.bind(null,l,i,n),[n]),l.flags|=2048,ml(9,fi(),Zc.bind(null,l,i,t,a),null),t},useId:function(){var n=Fn(),a=mn.identifierPrefix;if(en){var t=Ba,l=Ca;t=(l&~(1<<32-la(l)-1)).toString(32)+t,a="«"+a+"R"+t,t=oi++,0<t&&(a+="H"+t.toString(32)),a+="»"}else t=Ld++,a="«"+a+"r"+t.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:fo,useFormState:Ic,useActionState:Ic,useOptimistic:function(n){var a=Fn();a.memoizedState=a.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=so.bind(null,$,!0,t),t.dispatch=a,[n,a]},useMemoCache:to,useCacheRefresh:function(){return Fn().memoizedState=Pd.bind(null,$)}},zf={readContext:Kn,use:ri,useCallback:sf,useContext:Kn,useEffect:uf,useImperativeHandle:ff,useInsertionEffect:of,useLayoutEffect:rf,useMemo:df,useReducer:ci,useRef:lf,useState:function(){return ci(Ga)},useDebugValue:oo,useDeferredValue:function(n,a){var t=Dn();return hf(t,rn.memoizedState,n,a)},useTransition:function(){var n=ci(Ga)[0],a=Dn().memoizedState;return[typeof n=="boolean"?n:ee(n),a]},useSyncExternalStore:Gc,useId:pf,useHostTransitionStatus:fo,useFormState:nf,useActionState:nf,useOptimistic:function(n,a){var t=Dn();return Kc(t,rn,n,a)},useMemoCache:to,useCacheRefresh:gf},Id={readContext:Kn,use:ri,useCallback:sf,useContext:Kn,useEffect:uf,useImperativeHandle:ff,useInsertionEffect:of,useLayoutEffect:rf,useMemo:df,useReducer:eo,useRef:lf,useState:function(){return eo(Ga)},useDebugValue:oo,useDeferredValue:function(n,a){var t=Dn();return rn===null?ro(t,n,a):hf(t,rn.memoizedState,n,a)},useTransition:function(){var n=eo(Ga)[0],a=Dn().memoizedState;return[typeof n=="boolean"?n:ee(n),a]},useSyncExternalStore:Gc,useId:pf,useHostTransitionStatus:fo,useFormState:tf,useActionState:tf,useOptimistic:function(n,a){var t=Dn();return rn!==null?Kc(t,rn,n,a):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:to,useCacheRefresh:gf},vl=null,oe=0;function bi(n){var a=oe;return oe+=1,vl===null&&(vl=[]),Nc(vl,n,a)}function re(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function mi(n,a){throw a.$$typeof===L?Error(c(525)):(n=Object.prototype.toString.call(a),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Tf(n){var a=n._init;return a(n._payload)}function Af(n){function a(m,h){if(n){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function t(m,h){if(!n)return null;for(;h!==null;)a(m,h),h=h.sibling;return null}function l(m){for(var h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function e(m,h){return m=Ya(m,h),m.index=0,m.sibling=null,m}function i(m,h,v){return m.index=v,n?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=67108866,h):v):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function u(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function o(m,h,v,T){return h===null||h.tag!==6?(h=Uu(v,m.mode,T),h.return=m,h):(h=e(h,v),h.return=m,h)}function f(m,h,v,T){var k=v.type;return k===X?O(m,h,v.props.children,T,v.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&Tf(k)===h.type)?(h=e(h,v.props),re(h,v),h.return=m,h):(h=Pe(v.type,v.key,v.props,null,m.mode,T),re(h,v),h.return=m,h)}function p(m,h,v,T){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Nu(v,m.mode,T),h.return=m,h):(h=e(h,v.children||[]),h.return=m,h)}function O(m,h,v,T,k){return h===null||h.tag!==7?(h=Dt(v,m.mode,T,k),h.return=m,h):(h=e(h,v),h.return=m,h)}function A(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Uu(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case F:return v=Pe(h.type,h.key,h.props,null,m.mode,v),re(v,h),v.return=m,v;case bn:return h=Nu(h,m.mode,v),h.return=m,h;case Rn:var T=h._init;return h=T(h._payload),A(m,h,v)}if(Vn(h)||wn(h))return h=Dt(h,m.mode,v,null),h.return=m,h;if(typeof h.then=="function")return A(m,bi(h),v);if(h.$$typeof===sn)return A(m,ai(m,h),v);mi(m,h)}return null}function g(m,h,v,T){var k=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return k!==null?null:o(m,h,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case F:return v.key===k?f(m,h,v,T):null;case bn:return v.key===k?p(m,h,v,T):null;case Rn:return k=v._init,v=k(v._payload),g(m,h,v,T)}if(Vn(v)||wn(v))return k!==null?null:O(m,h,v,T,null);if(typeof v.then=="function")return g(m,h,bi(v),T);if(v.$$typeof===sn)return g(m,h,ai(m,v),T);mi(m,v)}return null}function y(m,h,v,T,k){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return m=m.get(v)||null,o(h,m,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case F:return m=m.get(T.key===null?v:T.key)||null,f(h,m,T,k);case bn:return m=m.get(T.key===null?v:T.key)||null,p(h,m,T,k);case Rn:var P=T._init;return T=P(T._payload),y(m,h,v,T,k)}if(Vn(T)||wn(T))return m=m.get(v)||null,O(h,m,T,k,null);if(typeof T.then=="function")return y(m,h,v,bi(T),k);if(T.$$typeof===sn)return y(m,h,v,ai(h,T),k);mi(h,T)}return null}function V(m,h,v,T){for(var k=null,P=null,C=h,Q=h=0,Xn=null;C!==null&&Q<v.length;Q++){C.index>Q?(Xn=C,C=null):Xn=C.sibling;var ln=g(m,C,v[Q],T);if(ln===null){C===null&&(C=Xn);break}n&&C&&ln.alternate===null&&a(m,C),h=i(ln,h,Q),P===null?k=ln:P.sibling=ln,P=ln,C=Xn}if(Q===v.length)return t(m,C),en&&Rt(m,Q),k;if(C===null){for(;Q<v.length;Q++)C=A(m,v[Q],T),C!==null&&(h=i(C,h,Q),P===null?k=C:P.sibling=C,P=C);return en&&Rt(m,Q),k}for(C=l(C);Q<v.length;Q++)Xn=y(C,m,Q,v[Q],T),Xn!==null&&(n&&Xn.alternate!==null&&C.delete(Xn.key===null?Q:Xn.key),h=i(Xn,h,Q),P===null?k=Xn:P.sibling=Xn,P=Xn);return n&&C.forEach(function(xt){return a(m,xt)}),en&&Rt(m,Q),k}function G(m,h,v,T){if(v==null)throw Error(c(151));for(var k=null,P=null,C=h,Q=h=0,Xn=null,ln=v.next();C!==null&&!ln.done;Q++,ln=v.next()){C.index>Q?(Xn=C,C=null):Xn=C.sibling;var xt=g(m,C,ln.value,T);if(xt===null){C===null&&(C=Xn);break}n&&C&&xt.alternate===null&&a(m,C),h=i(xt,h,Q),P===null?k=xt:P.sibling=xt,P=xt,C=Xn}if(ln.done)return t(m,C),en&&Rt(m,Q),k;if(C===null){for(;!ln.done;Q++,ln=v.next())ln=A(m,ln.value,T),ln!==null&&(h=i(ln,h,Q),P===null?k=ln:P.sibling=ln,P=ln);return en&&Rt(m,Q),k}for(C=l(C);!ln.done;Q++,ln=v.next())ln=y(C,m,Q,ln.value,T),ln!==null&&(n&&ln.alternate!==null&&C.delete(ln.key===null?Q:ln.key),h=i(ln,h,Q),P===null?k=ln:P.sibling=ln,P=ln);return n&&C.forEach(function(n1){return a(m,n1)}),en&&Rt(m,Q),k}function fn(m,h,v,T){if(typeof v=="object"&&v!==null&&v.type===X&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case F:n:{for(var k=v.key;h!==null;){if(h.key===k){if(k=v.type,k===X){if(h.tag===7){t(m,h.sibling),T=e(h,v.props.children),T.return=m,m=T;break n}}else if(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&Tf(k)===h.type){t(m,h.sibling),T=e(h,v.props),re(T,v),T.return=m,m=T;break n}t(m,h);break}else a(m,h);h=h.sibling}v.type===X?(T=Dt(v.props.children,m.mode,T,v.key),T.return=m,m=T):(T=Pe(v.type,v.key,v.props,null,m.mode,T),re(T,v),T.return=m,m=T)}return u(m);case bn:n:{for(k=v.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(m,h.sibling),T=e(h,v.children||[]),T.return=m,m=T;break n}else{t(m,h);break}else a(m,h);h=h.sibling}T=Nu(v,m.mode,T),T.return=m,m=T}return u(m);case Rn:return k=v._init,v=k(v._payload),fn(m,h,v,T)}if(Vn(v))return V(m,h,v,T);if(wn(v)){if(k=wn(v),typeof k!="function")throw Error(c(150));return v=k.call(v),G(m,h,v,T)}if(typeof v.then=="function")return fn(m,h,bi(v),T);if(v.$$typeof===sn)return fn(m,h,ai(m,v),T);mi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(t(m,h.sibling),T=e(h,v),T.return=m,m=T):(t(m,h),T=Uu(v,m.mode,T),T.return=m,m=T),u(m)):t(m,h)}return function(m,h,v,T){try{oe=0;var k=fn(m,h,v,T);return vl=null,k}catch(C){if(C===Fl||C===li)throw C;var P=ia(29,C,null,m.mode);return P.lanes=T,P.return=m,P}finally{}}}var pl=Af(!0),_f=Af(!1),ga=_(null),Ma=null;function it(n){var a=n.alternate;R(Nn,Nn.current&1),R(ga,n),Ma===null&&(a===null||dl.current!==null||a.memoizedState!==null)&&(Ma=n)}function Ef(n){if(n.tag===22){if(R(Nn,Nn.current),R(ga,n),Ma===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Ma=n)}}else ut()}function ut(){R(Nn,Nn.current),R(ga,ga.current)}function Qa(n){H(ga),Ma===n&&(Ma=null),H(Nn)}var Nn=_(0);function vi(n){for(var a=n;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||tr(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function ho(n,a,t,l){a=n.memoizedState,t=t(l,a),t=t==null?a:N({},a,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var bo={enqueueSetState:function(n,a,t){n=n._reactInternals;var l=ca(),e=tt(l);e.payload=a,t!=null&&(e.callback=t),a=lt(n,e,l),a!==null&&(fa(a,n,l),ne(a,n,l))},enqueueReplaceState:function(n,a,t){n=n._reactInternals;var l=ca(),e=tt(l);e.tag=1,e.payload=a,t!=null&&(e.callback=t),a=lt(n,e,l),a!==null&&(fa(a,n,l),ne(a,n,l))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var t=ca(),l=tt(t);l.tag=2,a!=null&&(l.callback=a),a=lt(n,l,t),a!==null&&(fa(a,n,t),ne(a,n,t))}};function Mf(n,a,t,l,e,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,i,u):a.prototype&&a.prototype.isPureReactComponent?!wl(t,l)||!wl(e,i):!0}function Df(n,a,t,l){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==n&&bo.enqueueReplaceState(a,a.state,null)}function Bt(n,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(n=n.defaultProps){t===a&&(t=N({},t));for(var e in n)t[e]===void 0&&(t[e]=n[e])}return t}var pi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function qf(n){pi(n)}function Rf(n){console.error(n)}function Uf(n){pi(n)}function gi(n,a){try{var t=n.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Nf(n,a,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function mo(n,a,t){return t=tt(t),t.tag=3,t.payload={element:null},t.callback=function(){gi(n,a)},t}function Hf(n){return n=tt(n),n.tag=3,n}function kf(n,a,t,l){var e=t.type.getDerivedStateFromError;if(typeof e=="function"){var i=l.value;n.payload=function(){return e(i)},n.callback=function(){Nf(a,t,l)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Nf(a,t,l),typeof e!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function nh(n,a,t,l,e){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&Wl(a,t,e,!0),t=ga.current,t!==null){switch(t.tag){case 13:return Ma===null?Xo():t.alternate===null&&On===0&&(On=3),t.flags&=-257,t.flags|=65536,t.lanes=e,l===Zu?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Go(n,l,e)),!1;case 22:return t.flags|=65536,l===Zu?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Go(n,l,e)),!1}throw Error(c(435,t.tag))}return Go(n,l,e),Xo(),!1}if(en)return a=ga.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=e,l!==Yu&&(n=Error(c(422),{cause:l}),Jl(ba(n,t)))):(l!==Yu&&(a=Error(c(423),{cause:l}),Jl(ba(a,t))),n=n.current.alternate,n.flags|=65536,e&=-e,n.lanes|=e,l=ba(l,t),e=mo(n.stateNode,l,e),Lu(n,e),On!==4&&(On=2)),!1;var i=Error(c(520),{cause:l});if(i=ba(i,t),me===null?me=[i]:me.push(i),On!==4&&(On=2),a===null)return!0;l=ba(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,n=e&-e,t.lanes|=n,n=mo(t.stateNode,l,n),Lu(t,n),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dt===null||!dt.has(i))))return t.flags|=65536,e&=-e,t.lanes|=e,e=Hf(e),kf(e,n,t,l),Lu(t,e),!1}t=t.return}while(t!==null);return!1}var Yf=Error(c(461)),Cn=!1;function jn(n,a,t,l){a.child=n===null?_f(a,null,t,l):pl(a,n.child,t,l)}function Cf(n,a,t,l,e){t=t.render;var i=a.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return kt(a),l=Pu(n,a,t,u,i,e),o=Fu(),n!==null&&!Cn?(Iu(n,a,e),Za(n,a,e)):(en&&o&&Hu(a),a.flags|=1,jn(n,a,l,e),a.child)}function Bf(n,a,t,l,e){if(n===null){var i=t.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Xf(n,a,i,l,e)):(n=Pe(t.type,null,l,a,a.mode,e),n.ref=a.ref,n.return=a,a.child=n)}if(i=n.child,!zo(n,e)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:wl,t(u,l)&&n.ref===a.ref)return Za(n,a,e)}return a.flags|=1,n=Ya(i,l),n.ref=a.ref,n.return=a,a.child=n}function Xf(n,a,t,l,e){if(n!==null){var i=n.memoizedProps;if(wl(i,l)&&n.ref===a.ref)if(Cn=!1,a.pendingProps=l=i,zo(n,e))(n.flags&131072)!==0&&(Cn=!0);else return a.lanes=n.lanes,Za(n,a,e)}return vo(n,a,t,l,e)}function jf(n,a,t){var l=a.pendingProps,e=l.children,i=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=i!==null?i.baseLanes|t:t,n!==null){for(e=a.child=n.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;a.childLanes=i&~l}else a.childLanes=0,a.child=null;return Gf(n,a,l,t)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&ti(a,i!==null?i.cachePool:null),i!==null?Bc(a,i):Ju(),Ef(a);else return a.lanes=a.childLanes=536870912,Gf(n,a,i!==null?i.baseLanes|t:t,t)}else i!==null?(ti(a,i.cachePool),Bc(a,i),ut(),a.memoizedState=null):(n!==null&&ti(a,null),Ju(),ut());return jn(n,a,e,t),a.child}function Gf(n,a,t,l){var e=Qu();return e=e===null?null:{parent:Un._currentValue,pool:e},a.memoizedState={baseLanes:t,cachePool:e},n!==null&&ti(a,null),Ju(),Ef(a),n!==null&&Wl(n,a,l,!0),null}function yi(n,a){var t=a.ref;if(t===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(n===null||n.ref!==t)&&(a.flags|=4194816)}}function vo(n,a,t,l,e){return kt(a),t=Pu(n,a,t,l,void 0,e),l=Fu(),n!==null&&!Cn?(Iu(n,a,e),Za(n,a,e)):(en&&l&&Hu(a),a.flags|=1,jn(n,a,t,e),a.child)}function Qf(n,a,t,l,e,i){return kt(a),a.updateQueue=null,t=jc(a,l,t,e),Xc(n),l=Fu(),n!==null&&!Cn?(Iu(n,a,i),Za(n,a,i)):(en&&l&&Hu(a),a.flags|=1,jn(n,a,t,i),a.child)}function Zf(n,a,t,l,e){if(kt(a),a.stateNode===null){var i=ol,u=t.contextType;typeof u=="object"&&u!==null&&(i=Kn(u)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bo,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},wu(a),u=t.contextType,i.context=typeof u=="object"&&u!==null?Kn(u):ol,i.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ho(a,t,u,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&bo.enqueueReplaceState(i,i.state,null),te(a,l,i,e),ae(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(n===null){i=a.stateNode;var o=a.memoizedProps,f=Bt(t,o);i.props=f;var p=i.context,O=t.contextType;u=ol,typeof O=="object"&&O!==null&&(u=Kn(O));var A=t.getDerivedStateFromProps;O=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||p!==u)&&Df(a,i,l,u),at=!1;var g=a.memoizedState;i.state=g,te(a,l,i,e),ae(),p=a.memoizedState,o||g!==p||at?(typeof A=="function"&&(ho(a,t,A,l),p=a.memoizedState),(f=at||Mf(a,t,f,l,g,p,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=p),i.props=l,i.state=p,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,Vu(n,a),u=a.memoizedProps,O=Bt(t,u),i.props=O,A=a.pendingProps,g=i.context,p=t.contextType,f=ol,typeof p=="object"&&p!==null&&(f=Kn(p)),o=t.getDerivedStateFromProps,(p=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||g!==f)&&Df(a,i,l,f),at=!1,g=a.memoizedState,i.state=g,te(a,l,i,e),ae();var y=a.memoizedState;u!==A||g!==y||at||n!==null&&n.dependencies!==null&&ni(n.dependencies)?(typeof o=="function"&&(ho(a,t,o,l),y=a.memoizedState),(O=at||Mf(a,t,O,l,g,y,f)||n!==null&&n.dependencies!==null&&ni(n.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,f)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=y),i.props=l,i.state=y,i.context=f,l=O):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&g===n.memoizedState||(a.flags|=1024),l=!1)}return i=l,yi(n,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,n!==null&&l?(a.child=pl(a,n.child,null,e),a.child=pl(a,null,t,e)):jn(n,a,t,e),a.memoizedState=i.state,n=a.child):n=Za(n,a,e),n}function wf(n,a,t,l){return Kl(),a.flags|=256,jn(n,a,t,l),a.child}var po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function go(n){return{baseLanes:n,cachePool:qc()}}function yo(n,a,t){return n=n!==null?n.childLanes&~t:0,a&&(n|=ya),n}function Vf(n,a,t){var l=a.pendingProps,e=!1,i=(a.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(Nn.current&2)!==0),u&&(e=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,n===null){if(en){if(e?it(a):ut(),en){var o=Sn,f;if(f=o){n:{for(f=o,o=Ea;f.nodeType!==8;){if(!o){o=null;break n}if(f=za(f.nextSibling),f===null){o=null;break n}}o=f}o!==null?(a.memoizedState={dehydrated:o,treeContext:qt!==null?{id:Ca,overflow:Ba}:null,retryLane:536870912,hydrationErrors:null},f=ia(18,null,null,0),f.stateNode=o,f.return=a,a.child=f,Wn=a,Sn=null,f=!0):f=!1}f||Nt(a)}if(o=a.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return tr(o)?a.lanes=32:a.lanes=536870912,null;Qa(a)}return o=l.children,l=l.fallback,e?(ut(),e=a.mode,o=xi({mode:"hidden",children:o},e),l=Dt(l,e,t,null),o.return=a,l.return=a,o.sibling=l,a.child=o,e=a.child,e.memoizedState=go(t),e.childLanes=yo(n,u,t),a.memoizedState=po,l):(it(a),xo(a,o))}if(f=n.memoizedState,f!==null&&(o=f.dehydrated,o!==null)){if(i)a.flags&256?(it(a),a.flags&=-257,a=So(n,a,t)):a.memoizedState!==null?(ut(),a.child=n.child,a.flags|=128,a=null):(ut(),e=l.fallback,o=a.mode,l=xi({mode:"visible",children:l.children},o),e=Dt(e,o,t,null),e.flags|=2,l.return=a,e.return=a,l.sibling=e,a.child=l,pl(a,n.child,null,t),l=a.child,l.memoizedState=go(t),l.childLanes=yo(n,u,t),a.memoizedState=po,a=e);else if(it(a),tr(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var p=u.dgst;u=p,l=Error(c(419)),l.stack="",l.digest=u,Jl({value:l,source:null,stack:null}),a=So(n,a,t)}else if(Cn||Wl(n,a,t,!1),u=(t&n.childLanes)!==0,Cn||u){if(u=mn,u!==null&&(l=t&-t,l=(l&42)!==0?1:tu(l),l=(l&(u.suspendedLanes|t))!==0?0:l,l!==0&&l!==f.retryLane))throw f.retryLane=l,ul(n,l),fa(u,n,l),Yf;o.data==="$?"||Xo(),a=So(n,a,t)}else o.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=f.treeContext,Sn=za(o.nextSibling),Wn=a,en=!0,Ut=null,Ea=!1,n!==null&&(va[pa++]=Ca,va[pa++]=Ba,va[pa++]=qt,Ca=n.id,Ba=n.overflow,qt=a),a=xo(a,l.children),a.flags|=4096);return a}return e?(ut(),e=l.fallback,o=a.mode,f=n.child,p=f.sibling,l=Ya(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,p!==null?e=Ya(p,e):(e=Dt(e,o,t,null),e.flags|=2),e.return=a,l.return=a,l.sibling=e,a.child=l,l=e,e=a.child,o=n.child.memoizedState,o===null?o=go(t):(f=o.cachePool,f!==null?(p=Un._currentValue,f=f.parent!==p?{parent:p,pool:p}:f):f=qc(),o={baseLanes:o.baseLanes|t,cachePool:f}),e.memoizedState=o,e.childLanes=yo(n,u,t),a.memoizedState=po,l):(it(a),t=n.child,n=t.sibling,t=Ya(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,n!==null&&(u=a.deletions,u===null?(a.deletions=[n],a.flags|=16):u.push(n)),a.child=t,a.memoizedState=null,t)}function xo(n,a){return a=xi({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function xi(n,a){return n=ia(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function So(n,a,t){return pl(a,n.child,null,t),n=xo(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Lf(n,a,t){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a),Bu(n.return,a,t)}function Oo(n,a,t,l,e){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:e}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=t,i.tailMode=e)}function Kf(n,a,t){var l=a.pendingProps,e=l.revealOrder,i=l.tail;if(jn(n,a,l.children,t),l=Nn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lf(n,t,a);else if(n.tag===19)Lf(n,t,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break n;for(;n.sibling===null;){if(n.return===null||n.return===a)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(R(Nn,l),e){case"forwards":for(t=a.child,e=null;t!==null;)n=t.alternate,n!==null&&vi(n)===null&&(e=t),t=t.sibling;t=e,t===null?(e=a.child,a.child=null):(e=t.sibling,t.sibling=null),Oo(a,!1,e,t,i);break;case"backwards":for(t=null,e=a.child,a.child=null;e!==null;){if(n=e.alternate,n!==null&&vi(n)===null){a.child=e;break}n=e.sibling,e.sibling=t,t=e,e=n}Oo(a,!0,t,null,i);break;case"together":Oo(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Za(n,a,t){if(n!==null&&(a.dependencies=n.dependencies),st|=a.lanes,(t&a.childLanes)===0)if(n!==null){if(Wl(n,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(c(153));if(a.child!==null){for(n=a.child,t=Ya(n,n.pendingProps),a.child=t,t.return=a;n.sibling!==null;)n=n.sibling,t=t.sibling=Ya(n,n.pendingProps),t.return=a;t.sibling=null}return a.child}function zo(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&ni(n)))}function ah(n,a,t){switch(a.tag){case 3:vn(a,a.stateNode.containerInfo),nt(a,Un,n.memoizedState.cache),Kl();break;case 27:case 5:Pi(a);break;case 4:vn(a,a.stateNode.containerInfo);break;case 10:nt(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(it(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Vf(n,a,t):(it(a),n=Za(n,a,t),n!==null?n.sibling:null);it(a);break;case 19:var e=(n.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(Wl(n,a,t,!1),l=(t&a.childLanes)!==0),e){if(l)return Kf(n,a,t);a.flags|=128}if(e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),R(Nn,Nn.current),l)break;return null;case 22:case 23:return a.lanes=0,jf(n,a,t);case 24:nt(a,Un,n.memoizedState.cache)}return Za(n,a,t)}function Jf(n,a,t){if(n!==null)if(n.memoizedProps!==a.pendingProps)Cn=!0;else{if(!zo(n,t)&&(a.flags&128)===0)return Cn=!1,ah(n,a,t);Cn=(n.flags&131072)!==0}else Cn=!1,en&&(a.flags&1048576)!==0&&zc(a,Ie,a.index);switch(a.lanes=0,a.tag){case 16:n:{n=a.pendingProps;var l=a.elementType,e=l._init;if(l=e(l._payload),a.type=l,typeof l=="function")Ru(l)?(n=Bt(l,n),a.tag=1,a=Zf(null,a,l,n,t)):(a.tag=0,a=vo(null,a,l,n,t));else{if(l!=null){if(e=l.$$typeof,e===qn){a.tag=11,a=Cf(null,a,l,n,t);break n}else if(e===An){a.tag=14,a=Bf(null,a,l,n,t);break n}}throw a=zt(l)||l,Error(c(306,a,""))}}return a;case 0:return vo(n,a,a.type,a.pendingProps,t);case 1:return l=a.type,e=Bt(l,a.pendingProps),Zf(n,a,l,e,t);case 3:n:{if(vn(a,a.stateNode.containerInfo),n===null)throw Error(c(387));l=a.pendingProps;var i=a.memoizedState;e=i.element,Vu(n,a),te(a,l,null,t);var u=a.memoizedState;if(l=u.cache,nt(a,Un,l),l!==i.cache&&Xu(a,[Un],t,!0),ae(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=wf(n,a,l,t);break n}else if(l!==e){e=ba(Error(c(424)),a),Jl(e),a=wf(n,a,l,t);break n}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Sn=za(n.firstChild),Wn=a,en=!0,Ut=null,Ea=!0,t=_f(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Kl(),l===e){a=Za(n,a,t);break n}jn(n,a,l,t)}a=a.child}return a;case 26:return yi(n,a),n===null?(t=Fs(a.type,null,a.pendingProps,null))?a.memoizedState=t:en||(t=a.type,n=a.pendingProps,l=Hi(K.current).createElement(t),l[Ln]=a,l[$n]=n,Qn(l,t,n),Yn(l),a.stateNode=l):a.memoizedState=Fs(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Pi(a),n===null&&en&&(l=a.stateNode=Ws(a.type,a.pendingProps,K.current),Wn=a,Ea=!0,e=Sn,mt(a.type)?(lr=e,Sn=za(l.firstChild)):Sn=e),jn(n,a,a.pendingProps.children,t),yi(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&en&&((e=l=Sn)&&(l=Dh(l,a.type,a.pendingProps,Ea),l!==null?(a.stateNode=l,Wn=a,Sn=za(l.firstChild),Ea=!1,e=!0):e=!1),e||Nt(a)),Pi(a),e=a.type,i=a.pendingProps,u=n!==null?n.memoizedProps:null,l=i.children,Io(e,i)?l=null:u!==null&&Io(e,u)&&(a.flags|=32),a.memoizedState!==null&&(e=Pu(n,a,Kd,null,null,t),Te._currentValue=e),yi(n,a),jn(n,a,l,t),a.child;case 6:return n===null&&en&&((n=t=Sn)&&(t=qh(t,a.pendingProps,Ea),t!==null?(a.stateNode=t,Wn=a,Sn=null,n=!0):n=!1),n||Nt(a)),null;case 13:return Vf(n,a,t);case 4:return vn(a,a.stateNode.containerInfo),l=a.pendingProps,n===null?a.child=pl(a,null,l,t):jn(n,a,l,t),a.child;case 11:return Cf(n,a,a.type,a.pendingProps,t);case 7:return jn(n,a,a.pendingProps,t),a.child;case 8:return jn(n,a,a.pendingProps.children,t),a.child;case 12:return jn(n,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,nt(a,a.type,l.value),jn(n,a,l.children,t),a.child;case 9:return e=a.type._context,l=a.pendingProps.children,kt(a),e=Kn(e),l=l(e),a.flags|=1,jn(n,a,l,t),a.child;case 14:return Bf(n,a,a.type,a.pendingProps,t);case 15:return Xf(n,a,a.type,a.pendingProps,t);case 19:return Kf(n,a,t);case 31:return l=a.pendingProps,t=a.mode,l={mode:l.mode,children:l.children},n===null?(t=xi(l,t),t.ref=a.ref,a.child=t,t.return=a,a=t):(t=Ya(n.child,l),t.ref=a.ref,a.child=t,t.return=a,a=t),a;case 22:return jf(n,a,t);case 24:return kt(a),l=Kn(Un),n===null?(e=Qu(),e===null&&(e=mn,i=ju(),e.pooledCache=i,i.refCount++,i!==null&&(e.pooledCacheLanes|=t),e=i),a.memoizedState={parent:l,cache:e},wu(a),nt(a,Un,e)):((n.lanes&t)!==0&&(Vu(n,a),te(a,null,null,t),ae()),e=n.memoizedState,i=a.memoizedState,e.parent!==l?(e={parent:l,cache:l},a.memoizedState=e,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=e),nt(a,Un,l)):(l=i.cache,nt(a,Un,l),l!==e.cache&&Xu(a,[Un],t,!0))),jn(n,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(c(156,a.tag))}function wa(n){n.flags|=4}function Wf(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!l0(a)){if(a=ga.current,a!==null&&((an&4194048)===an?Ma!==null:(an&62914560)!==an&&(an&536870912)===0||a!==Ma))throw Il=Zu,Rc;n.flags|=8192}}function Si(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?_r():536870912,n.lanes|=a,Sl|=a)}function ce(n,a){if(!en)switch(n.tailMode){case"hidden":a=n.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function yn(n){var a=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(a)for(var e=n.child;e!==null;)t|=e.lanes|e.childLanes,l|=e.subtreeFlags&65011712,l|=e.flags&65011712,e.return=n,e=e.sibling;else for(e=n.child;e!==null;)t|=e.lanes|e.childLanes,l|=e.subtreeFlags,l|=e.flags,e.return=n,e=e.sibling;return n.subtreeFlags|=l,n.childLanes=t,a}function th(n,a,t){var l=a.pendingProps;switch(ku(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(a),null;case 1:return yn(a),null;case 3:return t=a.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ja(Un),$a(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Ll(a)?wa(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,_c())),yn(a),null;case 26:return t=a.memoizedState,n===null?(wa(a),t!==null?(yn(a),Wf(a,t)):(yn(a),a.flags&=-16777217)):t?t!==n.memoizedState?(wa(a),yn(a),Wf(a,t)):(yn(a),a.flags&=-16777217):(n.memoizedProps!==l&&wa(a),yn(a),a.flags&=-16777217),null;case 27:Ue(a),t=K.current;var e=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==l&&wa(a);else{if(!l){if(a.stateNode===null)throw Error(c(166));return yn(a),null}n=j.current,Ll(a)?Tc(a):(n=Ws(e,l,t),a.stateNode=n,wa(a))}return yn(a),null;case 5:if(Ue(a),t=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&wa(a);else{if(!l){if(a.stateNode===null)throw Error(c(166));return yn(a),null}if(n=j.current,Ll(a))Tc(a);else{switch(e=Hi(K.current),n){case 1:n=e.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:n=e.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":n=e.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":n=e.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":n=e.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?e.createElement("select",{is:l.is}):e.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?e.createElement(t,{is:l.is}):e.createElement(t)}}n[Ln]=a,n[$n]=l;n:for(e=a.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.tag!==27&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break n;for(;e.sibling===null;){if(e.return===null||e.return===a)break n;e=e.return}e.sibling.return=e.return,e=e.sibling}a.stateNode=n;n:switch(Qn(n,t,l),t){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&wa(a)}}return yn(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==l&&wa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(c(166));if(n=K.current,Ll(a)){if(n=a.stateNode,t=a.memoizedProps,l=null,e=Wn,e!==null)switch(e.tag){case 27:case 5:l=e.memoizedProps}n[Ln]=a,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Qs(n.nodeValue,t)),n||Nt(a)}else n=Hi(n).createTextNode(l),n[Ln]=a,a.stateNode=n}return yn(a),null;case 13:if(l=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(e=Ll(a),l!==null&&l.dehydrated!==null){if(n===null){if(!e)throw Error(c(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e[Ln]=a}else Kl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;yn(a),e=!1}else e=_c(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),e=!0;if(!e)return a.flags&256?(Qa(a),a):(Qa(a),null)}if(Qa(a),(a.flags&128)!==0)return a.lanes=t,a;if(t=l!==null,n=n!==null&&n.memoizedState!==null,t){l=a.child,e=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(e=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==e&&(l.flags|=2048)}return t!==n&&t&&(a.child.flags|=8192),Si(a,a.updateQueue),yn(a),null;case 4:return $a(),n===null&&Jo(a.stateNode.containerInfo),yn(a),null;case 10:return ja(a.type),yn(a),null;case 19:if(H(Nn),e=a.memoizedState,e===null)return yn(a),null;if(l=(a.flags&128)!==0,i=e.rendering,i===null)if(l)ce(e,!1);else{if(On!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(i=vi(n),i!==null){for(a.flags|=128,ce(e,!1),n=i.updateQueue,a.updateQueue=n,Si(a,n),a.subtreeFlags=0,n=t,t=a.child;t!==null;)Oc(t,n),t=t.sibling;return R(Nn,Nn.current&1|2),a.child}n=n.sibling}e.tail!==null&&_a()>Ti&&(a.flags|=128,l=!0,ce(e,!1),a.lanes=4194304)}else{if(!l)if(n=vi(i),n!==null){if(a.flags|=128,l=!0,n=n.updateQueue,a.updateQueue=n,Si(a,n),ce(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!en)return yn(a),null}else 2*_a()-e.renderingStartTime>Ti&&t!==536870912&&(a.flags|=128,l=!0,ce(e,!1),a.lanes=4194304);e.isBackwards?(i.sibling=a.child,a.child=i):(n=e.last,n!==null?n.sibling=i:a.child=i,e.last=i)}return e.tail!==null?(a=e.tail,e.rendering=a,e.tail=a.sibling,e.renderingStartTime=_a(),a.sibling=null,n=Nn.current,R(Nn,l?n&1|2:n&1),a):(yn(a),null);case 22:case 23:return Qa(a),Wu(),l=a.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(yn(a),a.subtreeFlags&6&&(a.flags|=8192)):yn(a),t=a.updateQueue,t!==null&&Si(a,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),n!==null&&H(Yt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),ja(Un),yn(a),null;case 25:return null;case 30:return null}throw Error(c(156,a.tag))}function lh(n,a){switch(ku(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return ja(Un),$a(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Ue(a),null;case 13:if(Qa(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(c(340));Kl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return H(Nn),null;case 4:return $a(),null;case 10:return ja(a.type),null;case 22:case 23:return Qa(a),Wu(),n!==null&&H(Yt),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return ja(Un),null;case 25:return null;default:return null}}function $f(n,a){switch(ku(a),a.tag){case 3:ja(Un),$a();break;case 26:case 27:case 5:Ue(a);break;case 4:$a();break;case 13:Qa(a);break;case 19:H(Nn);break;case 10:ja(a.type);break;case 22:case 23:Qa(a),Wu(),n!==null&&H(Yt);break;case 24:ja(Un)}}function fe(n,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var e=l.next;t=e;do{if((t.tag&n)===n){l=void 0;var i=t.create,u=t.inst;l=i(),u.destroy=l}t=t.next}while(t!==e)}}catch(o){hn(a,a.return,o)}}function ot(n,a,t){try{var l=a.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var i=e.next;l=i;do{if((l.tag&n)===n){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,e=a;var f=t,p=o;try{p()}catch(O){hn(e,f,O)}}}l=l.next}while(l!==i)}}catch(O){hn(a,a.return,O)}}function Pf(n){var a=n.updateQueue;if(a!==null){var t=n.stateNode;try{Cc(a,t)}catch(l){hn(n,n.return,l)}}}function Ff(n,a,t){t.props=Bt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){hn(n,a,l)}}function se(n,a){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(e){hn(n,a,e)}}function Da(n,a){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(e){hn(n,a,e)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(e){hn(n,a,e)}else t.current=null}function If(n){var a=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(e){hn(n,n.return,e)}}function To(n,a,t){try{var l=n.stateNode;Th(l,n.type,t,a),l[$n]=a}catch(e){hn(n,n.return,e)}}function ns(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&mt(n.type)||n.tag===4}function Ao(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||ns(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&mt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _o(n,a,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(n),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ni));else if(l!==4&&(l===27&&mt(n.type)&&(t=n.stateNode,a=null),n=n.child,n!==null))for(_o(n,a,t),n=n.sibling;n!==null;)_o(n,a,t),n=n.sibling}function Oi(n,a,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?t.insertBefore(n,a):t.appendChild(n);else if(l!==4&&(l===27&&mt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(Oi(n,a,t),n=n.sibling;n!==null;)Oi(n,a,t),n=n.sibling}function as(n){var a=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Qn(a,l,t),a[Ln]=n,a[$n]=t}catch(i){hn(n,n.return,i)}}var Va=!1,En=!1,Eo=!1,ts=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function eh(n,a){if(n=n.containerInfo,Po=ji,n=dc(n),Tu(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var e=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var u=0,o=-1,f=-1,p=0,O=0,A=n,g=null;a:for(;;){for(var y;A!==t||e!==0&&A.nodeType!==3||(o=u+e),A!==i||l!==0&&A.nodeType!==3||(f=u+l),A.nodeType===3&&(u+=A.nodeValue.length),(y=A.firstChild)!==null;)g=A,A=y;for(;;){if(A===n)break a;if(g===t&&++p===e&&(o=u),g===i&&++O===l&&(f=u),(y=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=y}t=o===-1||f===-1?null:{start:o,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fo={focusedElem:n,selectionRange:t},ji=!1,Bn=a;Bn!==null;)if(a=Bn,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Bn=n;else for(;Bn!==null;){switch(a=Bn,i=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,t=a,e=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var V=Bt(t.type,e,t.elementType===t.type);n=l.getSnapshotBeforeUpdate(V,i),l.__reactInternalSnapshotBeforeUpdate=n}catch(G){hn(t,t.return,G)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)ar(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ar(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(c(163))}if(n=a.sibling,n!==null){n.return=a.return,Bn=n;break}Bn=a.return}}function ls(n,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:rt(n,t),l&4&&fe(5,t);break;case 1:if(rt(n,t),l&4)if(n=t.stateNode,a===null)try{n.componentDidMount()}catch(u){hn(t,t.return,u)}else{var e=Bt(t.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(e,a,n.__reactInternalSnapshotBeforeUpdate)}catch(u){hn(t,t.return,u)}}l&64&&Pf(t),l&512&&se(t,t.return);break;case 3:if(rt(n,t),l&64&&(n=t.updateQueue,n!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Cc(n,a)}catch(u){hn(t,t.return,u)}}break;case 27:a===null&&l&4&&as(t);case 26:case 5:rt(n,t),a===null&&l&4&&If(t),l&512&&se(t,t.return);break;case 12:rt(n,t);break;case 13:rt(n,t),l&4&&us(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=hh.bind(null,t),Rh(n,t))));break;case 22:if(l=t.memoizedState!==null||Va,!l){a=a!==null&&a.memoizedState!==null||En,e=Va;var i=En;Va=l,(En=a)&&!i?ct(n,t,(t.subtreeFlags&8772)!==0):rt(n,t),Va=e,En=i}break;case 30:break;default:rt(n,t)}}function es(n){var a=n.alternate;a!==null&&(n.alternate=null,es(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&iu(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var pn=null,In=!1;function La(n,a,t){for(t=t.child;t!==null;)is(n,a,t),t=t.sibling}function is(n,a,t){if(ta&&typeof ta.onCommitFiberUnmount=="function")try{ta.onCommitFiberUnmount(Ul,t)}catch{}switch(t.tag){case 26:En||Da(t,a),La(n,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:En||Da(t,a);var l=pn,e=In;mt(t.type)&&(pn=t.stateNode,In=!1),La(n,a,t),xe(t.stateNode),pn=l,In=e;break;case 5:En||Da(t,a);case 6:if(l=pn,e=In,pn=null,La(n,a,t),pn=l,In=e,pn!==null)if(In)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(t.stateNode)}catch(i){hn(t,a,i)}else try{pn.removeChild(t.stateNode)}catch(i){hn(t,a,i)}break;case 18:pn!==null&&(In?(n=pn,Ks(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Me(n)):Ks(pn,t.stateNode));break;case 4:l=pn,e=In,pn=t.stateNode.containerInfo,In=!0,La(n,a,t),pn=l,In=e;break;case 0:case 11:case 14:case 15:En||ot(2,t,a),En||ot(4,t,a),La(n,a,t);break;case 1:En||(Da(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Ff(t,a,l)),La(n,a,t);break;case 21:La(n,a,t);break;case 22:En=(l=En)||t.memoizedState!==null,La(n,a,t),En=l;break;default:La(n,a,t)}}function us(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Me(n)}catch(t){hn(a,a.return,t)}}function ih(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new ts),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new ts),a;default:throw Error(c(435,n.tag))}}function Mo(n,a){var t=ih(n);a.forEach(function(l){var e=bh.bind(null,n,l);t.has(l)||(t.add(l),l.then(e,e))})}function ua(n,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var e=t[l],i=n,u=a,o=u;n:for(;o!==null;){switch(o.tag){case 27:if(mt(o.type)){pn=o.stateNode,In=!1;break n}break;case 5:pn=o.stateNode,In=!1;break n;case 3:case 4:pn=o.stateNode.containerInfo,In=!0;break n}o=o.return}if(pn===null)throw Error(c(160));is(i,u,e),pn=null,In=!1,i=e.alternate,i!==null&&(i.return=null),e.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)os(a,n),a=a.sibling}var Oa=null;function os(n,a){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ua(a,n),oa(n),l&4&&(ot(3,n,n.return),fe(3,n),ot(5,n,n.return));break;case 1:ua(a,n),oa(n),l&512&&(En||t===null||Da(t,t.return)),l&64&&Va&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var e=Oa;if(ua(a,n),oa(n),l&512&&(En||t===null||Da(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,e=e.ownerDocument||e;a:switch(l){case"title":i=e.getElementsByTagName("title")[0],(!i||i[kl]||i[Ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=e.createElement(l),e.head.insertBefore(i,e.querySelector("head > title"))),Qn(i,l,t),i[Ln]=n,Yn(i),l=i;break n;case"link":var u=a0("link","href",e).get(l+(t.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(o,1);break a}}i=e.createElement(l),Qn(i,l,t),e.head.appendChild(i);break;case"meta":if(u=a0("meta","content",e).get(l+(t.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(o,1);break a}}i=e.createElement(l),Qn(i,l,t),e.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ln]=n,Yn(i),l=i}n.stateNode=l}else t0(e,n.type,n.stateNode);else n.stateNode=n0(e,l,n.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?t0(e,n.type,n.stateNode):n0(e,l,n.memoizedProps)):l===null&&n.stateNode!==null&&To(n,n.memoizedProps,t.memoizedProps)}break;case 27:ua(a,n),oa(n),l&512&&(En||t===null||Da(t,t.return)),t!==null&&l&4&&To(n,n.memoizedProps,t.memoizedProps);break;case 5:if(ua(a,n),oa(n),l&512&&(En||t===null||Da(t,t.return)),n.flags&32){e=n.stateNode;try{It(e,"")}catch(y){hn(n,n.return,y)}}l&4&&n.stateNode!=null&&(e=n.memoizedProps,To(n,e,t!==null?t.memoizedProps:e)),l&1024&&(Eo=!0);break;case 6:if(ua(a,n),oa(n),l&4){if(n.stateNode===null)throw Error(c(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(y){hn(n,n.return,y)}}break;case 3:if(Ci=null,e=Oa,Oa=ki(a.containerInfo),ua(a,n),Oa=e,oa(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Me(a.containerInfo)}catch(y){hn(n,n.return,y)}Eo&&(Eo=!1,rs(n));break;case 4:l=Oa,Oa=ki(n.stateNode.containerInfo),ua(a,n),oa(n),Oa=l;break;case 12:ua(a,n),oa(n);break;case 13:ua(a,n),oa(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ho=_a()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Mo(n,l)));break;case 22:e=n.memoizedState!==null;var f=t!==null&&t.memoizedState!==null,p=Va,O=En;if(Va=p||e,En=O||f,ua(a,n),En=O,Va=p,oa(n),l&8192)n:for(a=n.stateNode,a._visibility=e?a._visibility&-2:a._visibility|1,e&&(t===null||f||Va||En||Xt(n)),t=null,a=n;;){if(a.tag===5||a.tag===26){if(t===null){f=t=a;try{if(i=f.stateNode,e)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=f.stateNode;var A=f.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;o.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(y){hn(f,f.return,y)}}}else if(a.tag===6){if(t===null){f=a;try{f.stateNode.nodeValue=e?"":f.memoizedProps}catch(y){hn(f,f.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break n;for(;a.sibling===null;){if(a.return===null||a.return===n)break n;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Mo(n,t))));break;case 19:ua(a,n),oa(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Mo(n,l)));break;case 30:break;case 21:break;default:ua(a,n),oa(n)}}function oa(n){var a=n.flags;if(a&2){try{for(var t,l=n.return;l!==null;){if(ns(l)){t=l;break}l=l.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var e=t.stateNode,i=Ao(n);Oi(n,i,e);break;case 5:var u=t.stateNode;t.flags&32&&(It(u,""),t.flags&=-33);var o=Ao(n);Oi(n,o,u);break;case 3:case 4:var f=t.stateNode.containerInfo,p=Ao(n);_o(n,p,f);break;default:throw Error(c(161))}}catch(O){hn(n,n.return,O)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function rs(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;rs(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function rt(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ls(n,a.alternate,a),a=a.sibling}function Xt(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:ot(4,a,a.return),Xt(a);break;case 1:Da(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Ff(a,a.return,t),Xt(a);break;case 27:xe(a.stateNode);case 26:case 5:Da(a,a.return),Xt(a);break;case 22:a.memoizedState===null&&Xt(a);break;case 30:Xt(a);break;default:Xt(a)}n=n.sibling}}function ct(n,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,e=n,i=a,u=i.flags;switch(i.tag){case 0:case 11:case 15:ct(e,i,t),fe(4,i);break;case 1:if(ct(e,i,t),l=i,e=l.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(p){hn(l,l.return,p)}if(l=i,e=l.updateQueue,e!==null){var o=l.stateNode;try{var f=e.shared.hiddenCallbacks;if(f!==null)for(e.shared.hiddenCallbacks=null,e=0;e<f.length;e++)Yc(f[e],o)}catch(p){hn(l,l.return,p)}}t&&u&64&&Pf(i),se(i,i.return);break;case 27:as(i);case 26:case 5:ct(e,i,t),t&&l===null&&u&4&&If(i),se(i,i.return);break;case 12:ct(e,i,t);break;case 13:ct(e,i,t),t&&u&4&&us(e,i);break;case 22:i.memoizedState===null&&ct(e,i,t),se(i,i.return);break;case 30:break;default:ct(e,i,t)}a=a.sibling}}function Do(n,a){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&$l(t))}function qo(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&$l(n))}function qa(n,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)cs(n,a,t,l),a=a.sibling}function cs(n,a,t,l){var e=a.flags;switch(a.tag){case 0:case 11:case 15:qa(n,a,t,l),e&2048&&fe(9,a);break;case 1:qa(n,a,t,l);break;case 3:qa(n,a,t,l),e&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&$l(n)));break;case 12:if(e&2048){qa(n,a,t,l),n=a.stateNode;try{var i=a.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(f){hn(a,a.return,f)}}else qa(n,a,t,l);break;case 13:qa(n,a,t,l);break;case 23:break;case 22:i=a.stateNode,u=a.alternate,a.memoizedState!==null?i._visibility&2?qa(n,a,t,l):de(n,a):i._visibility&2?qa(n,a,t,l):(i._visibility|=2,gl(n,a,t,l,(a.subtreeFlags&10256)!==0)),e&2048&&Do(u,a);break;case 24:qa(n,a,t,l),e&2048&&qo(a.alternate,a);break;default:qa(n,a,t,l)}}function gl(n,a,t,l,e){for(e=e&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var i=n,u=a,o=t,f=l,p=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,o,f,e),fe(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?gl(i,u,o,f,e):de(i,u):(O._visibility|=2,gl(i,u,o,f,e)),e&&p&2048&&Do(u.alternate,u);break;case 24:gl(i,u,o,f,e),e&&p&2048&&qo(u.alternate,u);break;default:gl(i,u,o,f,e)}a=a.sibling}}function de(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=n,l=a,e=l.flags;switch(l.tag){case 22:de(t,l),e&2048&&Do(l.alternate,l);break;case 24:de(t,l),e&2048&&qo(l.alternate,l);break;default:de(t,l)}a=a.sibling}}var he=8192;function yl(n){if(n.subtreeFlags&he)for(n=n.child;n!==null;)fs(n),n=n.sibling}function fs(n){switch(n.tag){case 26:yl(n),n.flags&he&&n.memoizedState!==null&&wh(Oa,n.memoizedState,n.memoizedProps);break;case 5:yl(n);break;case 3:case 4:var a=Oa;Oa=ki(n.stateNode.containerInfo),yl(n),Oa=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=he,he=16777216,yl(n),he=a):yl(n));break;default:yl(n)}}function ss(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function be(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Bn=l,hs(l,n)}ss(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ds(n),n=n.sibling}function ds(n){switch(n.tag){case 0:case 11:case 15:be(n),n.flags&2048&&ot(9,n,n.return);break;case 3:be(n);break;case 12:be(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,zi(n)):be(n);break;default:be(n)}}function zi(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Bn=l,hs(l,n)}ss(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:ot(8,a,a.return),zi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,zi(a));break;default:zi(a)}n=n.sibling}}function hs(n,a){for(;Bn!==null;){var t=Bn;switch(t.tag){case 0:case 11:case 15:ot(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Bn=l;else n:for(t=n;Bn!==null;){l=Bn;var e=l.sibling,i=l.return;if(es(l),l===t){Bn=null;break n}if(e!==null){e.return=i,Bn=e;break n}Bn=i}}}var uh={getCacheForType:function(n){var a=Kn(Un),t=a.data.get(n);return t===void 0&&(t=n(),a.data.set(n,t)),t}},oh=typeof WeakMap=="function"?WeakMap:Map,un=0,mn=null,I=null,an=0,on=0,ra=null,ft=!1,xl=!1,Ro=!1,Ka=0,On=0,st=0,jt=0,Uo=0,ya=0,Sl=0,me=null,na=null,No=!1,Ho=0,Ti=1/0,Ai=null,dt=null,Gn=0,ht=null,Ol=null,zl=0,ko=0,Yo=null,bs=null,ve=0,Co=null;function ca(){if((un&2)!==0&&an!==0)return an&-an;if(z.T!==null){var n=fl;return n!==0?n:wo()}return Dr()}function ms(){ya===0&&(ya=(an&536870912)===0||en?Ar():536870912);var n=ga.current;return n!==null&&(n.flags|=32),ya}function fa(n,a,t){(n===mn&&(on===2||on===9)||n.cancelPendingCommit!==null)&&(Tl(n,0),bt(n,an,ya,!1)),Hl(n,t),((un&2)===0||n!==mn)&&(n===mn&&((un&2)===0&&(jt|=t),On===4&&bt(n,an,ya,!1)),Ra(n))}function vs(n,a,t){if((un&6)!==0)throw Error(c(327));var l=!t&&(a&124)===0&&(a&n.expiredLanes)===0||Nl(n,a),e=l?fh(n,a):jo(n,a,!0),i=l;do{if(e===0){xl&&!l&&bt(n,a,0,!1);break}else{if(t=n.current.alternate,i&&!rh(t)){e=jo(n,a,!1),i=!1;continue}if(e===2){if(i=a,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;n:{var o=n;e=me;var f=o.current.memoizedState.isDehydrated;if(f&&(Tl(o,u).flags|=256),u=jo(o,u,!1),u!==2){if(Ro&&!f){o.errorRecoveryDisabledLanes|=i,jt|=i,e=4;break n}i=na,na=e,i!==null&&(na===null?na=i:na.push.apply(na,i))}e=u}if(i=!1,e!==2)continue}}if(e===1){Tl(n,0),bt(n,a,0,!0);break}n:{switch(l=n,i=e,i){case 0:case 1:throw Error(c(345));case 4:if((a&4194048)!==a)break;case 6:bt(l,a,ya,!ft);break n;case 2:na=null;break;case 3:case 5:break;default:throw Error(c(329))}if((a&62914560)===a&&(e=Ho+300-_a(),10<e)){if(bt(l,a,ya,!ft),Ye(l,0,!0)!==0)break n;l.timeoutHandle=Vs(ps.bind(null,l,t,na,Ai,No,a,ya,jt,Sl,ft,i,2,-0,0),e);break n}ps(l,t,na,Ai,No,a,ya,jt,Sl,ft,i,0,-0,0)}}break}while(!0);Ra(n)}function ps(n,a,t,l,e,i,u,o,f,p,O,A,g,y){if(n.timeoutHandle=-1,A=a.subtreeFlags,(A&8192||(A&16785408)===16785408)&&(ze={stylesheets:null,count:0,unsuspend:Zh},fs(a),A=Vh(),A!==null)){n.cancelPendingCommit=A(Ts.bind(null,n,a,i,t,l,e,u,o,f,O,1,g,y)),bt(n,i,u,!p);return}Ts(n,a,i,t,l,e,u,o,f)}function rh(n){for(var a=n;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var e=t[l],i=e.getSnapshot;e=e.value;try{if(!ea(i(),e))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function bt(n,a,t,l){a&=~Uo,a&=~jt,n.suspendedLanes|=a,n.pingedLanes&=~a,l&&(n.warmLanes|=a),l=n.expirationTimes;for(var e=a;0<e;){var i=31-la(e),u=1<<i;l[i]=-1,e&=~u}t!==0&&Er(n,t,a)}function _i(){return(un&6)===0?(pe(0),!1):!0}function Bo(){if(I!==null){if(on===0)var n=I.return;else n=I,Xa=Ht=null,no(n),vl=null,oe=0,n=I;for(;n!==null;)$f(n.alternate,n),n=n.return;I=null}}function Tl(n,a){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,_h(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Bo(),mn=n,I=t=Ya(n.current,null),an=a,on=0,ra=null,ft=!1,xl=Nl(n,a),Ro=!1,Sl=ya=Uo=jt=st=On=0,na=me=null,No=!1,(a&8)!==0&&(a|=a&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=a;0<l;){var e=31-la(l),i=1<<e;a|=n[e],l&=~i}return Ka=a,Je(),t}function gs(n,a){$=null,z.H=hi,a===Fl||a===li?(a=Hc(),on=3):a===Rc?(a=Hc(),on=4):on=a===Yf?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ra=a,I===null&&(On=1,gi(n,ba(a,n.current)))}function ys(){var n=z.H;return z.H=hi,n===null?hi:n}function xs(){var n=z.A;return z.A=uh,n}function Xo(){On=4,ft||(an&4194048)!==an&&ga.current!==null||(xl=!0),(st&134217727)===0&&(jt&134217727)===0||mn===null||bt(mn,an,ya,!1)}function jo(n,a,t){var l=un;un|=2;var e=ys(),i=xs();(mn!==n||an!==a)&&(Ai=null,Tl(n,a)),a=!1;var u=On;n:do try{if(on!==0&&I!==null){var o=I,f=ra;switch(on){case 8:Bo(),u=6;break n;case 3:case 2:case 9:case 6:ga.current===null&&(a=!0);var p=on;if(on=0,ra=null,Al(n,o,f,p),t&&xl){u=0;break n}break;default:p=on,on=0,ra=null,Al(n,o,f,p)}}ch(),u=On;break}catch(O){gs(n,O)}while(!0);return a&&n.shellSuspendCounter++,Xa=Ht=null,un=l,z.H=e,z.A=i,I===null&&(mn=null,an=0,Je()),u}function ch(){for(;I!==null;)Ss(I)}function fh(n,a){var t=un;un|=2;var l=ys(),e=xs();mn!==n||an!==a?(Ai=null,Ti=_a()+500,Tl(n,a)):xl=Nl(n,a);n:do try{if(on!==0&&I!==null){a=I;var i=ra;a:switch(on){case 1:on=0,ra=null,Al(n,a,i,1);break;case 2:case 9:if(Uc(i)){on=0,ra=null,Os(a);break}a=function(){on!==2&&on!==9||mn!==n||(on=7),Ra(n)},i.then(a,a);break n;case 3:on=7;break n;case 4:on=5;break n;case 7:Uc(i)?(on=0,ra=null,Os(a)):(on=0,ra=null,Al(n,a,i,7));break;case 5:var u=null;switch(I.tag){case 26:u=I.memoizedState;case 5:case 27:var o=I;if(!u||l0(u)){on=0,ra=null;var f=o.sibling;if(f!==null)I=f;else{var p=o.return;p!==null?(I=p,Ei(p)):I=null}break a}}on=0,ra=null,Al(n,a,i,5);break;case 6:on=0,ra=null,Al(n,a,i,6);break;case 8:Bo(),On=6;break n;default:throw Error(c(462))}}sh();break}catch(O){gs(n,O)}while(!0);return Xa=Ht=null,z.H=l,z.A=e,un=t,I!==null?0:(mn=null,an=0,Je(),On)}function sh(){for(;I!==null&&!N0();)Ss(I)}function Ss(n){var a=Jf(n.alternate,n,Ka);n.memoizedProps=n.pendingProps,a===null?Ei(n):I=a}function Os(n){var a=n,t=a.alternate;switch(a.tag){case 15:case 0:a=Qf(t,a,a.pendingProps,a.type,void 0,an);break;case 11:a=Qf(t,a,a.pendingProps,a.type.render,a.ref,an);break;case 5:no(a);default:$f(t,a),a=I=Oc(a,Ka),a=Jf(t,a,Ka)}n.memoizedProps=n.pendingProps,a===null?Ei(n):I=a}function Al(n,a,t,l){Xa=Ht=null,no(a),vl=null,oe=0;var e=a.return;try{if(nh(n,e,a,t,an)){On=1,gi(n,ba(t,n.current)),I=null;return}}catch(i){if(e!==null)throw I=e,i;On=1,gi(n,ba(t,n.current)),I=null;return}a.flags&32768?(en||l===1?n=!0:xl||(an&536870912)!==0?n=!1:(ft=n=!0,(l===2||l===9||l===3||l===6)&&(l=ga.current,l!==null&&l.tag===13&&(l.flags|=16384))),zs(a,n)):Ei(a)}function Ei(n){var a=n;do{if((a.flags&32768)!==0){zs(a,ft);return}n=a.return;var t=th(a.alternate,a,Ka);if(t!==null){I=t;return}if(a=a.sibling,a!==null){I=a;return}I=a=n}while(a!==null);On===0&&(On=5)}function zs(n,a){do{var t=lh(n.alternate,n);if(t!==null){t.flags&=32767,I=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(n=n.sibling,n!==null)){I=n;return}I=n=t}while(n!==null);On=6,I=null}function Ts(n,a,t,l,e,i,u,o,f){n.cancelPendingCommit=null;do Mi();while(Gn!==0);if((un&6)!==0)throw Error(c(327));if(a!==null){if(a===n.current)throw Error(c(177));if(i=a.lanes|a.childLanes,i|=Du,Z0(n,t,i,u,o,f),n===mn&&(I=mn=null,an=0),Ol=a,ht=n,zl=t,ko=i,Yo=e,bs=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,mh(Ne,function(){return Ds(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,e=U.p,U.p=2,u=un,un|=4;try{eh(n,a,t)}finally{un=u,U.p=e,z.T=l}}Gn=1,As(),_s(),Es()}}function As(){if(Gn===1){Gn=0;var n=ht,a=Ol,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=z.T,z.T=null;var l=U.p;U.p=2;var e=un;un|=4;try{os(a,n);var i=Fo,u=dc(n.containerInfo),o=i.focusedElem,f=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&sc(o.ownerDocument.documentElement,o)){if(f!==null&&Tu(o)){var p=f.start,O=f.end;if(O===void 0&&(O=p),"selectionStart"in o)o.selectionStart=p,o.selectionEnd=Math.min(O,o.value.length);else{var A=o.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var y=g.getSelection(),V=o.textContent.length,G=Math.min(f.start,V),fn=f.end===void 0?G:Math.min(f.end,V);!y.extend&&G>fn&&(u=fn,fn=G,G=u);var m=fc(o,G),h=fc(o,fn);if(m&&h&&(y.rangeCount!==1||y.anchorNode!==m.node||y.anchorOffset!==m.offset||y.focusNode!==h.node||y.focusOffset!==h.offset)){var v=A.createRange();v.setStart(m.node,m.offset),y.removeAllRanges(),G>fn?(y.addRange(v),y.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),y.addRange(v))}}}}for(A=[],y=o;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<A.length;o++){var T=A[o];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}ji=!!Po,Fo=Po=null}finally{un=e,U.p=l,z.T=t}}n.current=a,Gn=2}}function _s(){if(Gn===2){Gn=0;var n=ht,a=Ol,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=z.T,z.T=null;var l=U.p;U.p=2;var e=un;un|=4;try{ls(n,a.alternate,a)}finally{un=e,U.p=l,z.T=t}}Gn=3}}function Es(){if(Gn===4||Gn===3){Gn=0,H0();var n=ht,a=Ol,t=zl,l=bs;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Gn=5:(Gn=0,Ol=ht=null,Ms(n,n.pendingLanes));var e=n.pendingLanes;if(e===0&&(dt=null),lu(t),a=a.stateNode,ta&&typeof ta.onCommitFiberRoot=="function")try{ta.onCommitFiberRoot(Ul,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=z.T,e=U.p,U.p=2,z.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{z.T=a,U.p=e}}(zl&3)!==0&&Mi(),Ra(n),e=n.pendingLanes,(t&4194090)!==0&&(e&42)!==0?n===Co?ve++:(ve=0,Co=n):ve=0,pe(0)}}function Ms(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,$l(a)))}function Mi(n){return As(),_s(),Es(),Ds()}function Ds(){if(Gn!==5)return!1;var n=ht,a=ko;ko=0;var t=lu(zl),l=z.T,e=U.p;try{U.p=32>t?32:t,z.T=null,t=Yo,Yo=null;var i=ht,u=zl;if(Gn=0,Ol=ht=null,zl=0,(un&6)!==0)throw Error(c(331));var o=un;if(un|=4,ds(i.current),cs(i,i.current,u,t),un=o,pe(0,!1),ta&&typeof ta.onPostCommitFiberRoot=="function")try{ta.onPostCommitFiberRoot(Ul,i)}catch{}return!0}finally{U.p=e,z.T=l,Ms(n,a)}}function qs(n,a,t){a=ba(t,a),a=mo(n.stateNode,a,2),n=lt(n,a,2),n!==null&&(Hl(n,2),Ra(n))}function hn(n,a,t){if(n.tag===3)qs(n,n,t);else for(;a!==null;){if(a.tag===3){qs(a,n,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dt===null||!dt.has(l))){n=ba(t,n),t=Hf(2),l=lt(a,t,2),l!==null&&(kf(t,l,a,n),Hl(l,2),Ra(l));break}}a=a.return}}function Go(n,a,t){var l=n.pingCache;if(l===null){l=n.pingCache=new oh;var e=new Set;l.set(a,e)}else e=l.get(a),e===void 0&&(e=new Set,l.set(a,e));e.has(t)||(Ro=!0,e.add(t),n=dh.bind(null,n,a,t),a.then(n,n))}function dh(n,a,t){var l=n.pingCache;l!==null&&l.delete(a),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,mn===n&&(an&t)===t&&(On===4||On===3&&(an&62914560)===an&&300>_a()-Ho?(un&2)===0&&Tl(n,0):Uo|=t,Sl===an&&(Sl=0)),Ra(n)}function Rs(n,a){a===0&&(a=_r()),n=ul(n,a),n!==null&&(Hl(n,a),Ra(n))}function hh(n){var a=n.memoizedState,t=0;a!==null&&(t=a.retryLane),Rs(n,t)}function bh(n,a){var t=0;switch(n.tag){case 13:var l=n.stateNode,e=n.memoizedState;e!==null&&(t=e.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(a),Rs(n,t)}function mh(n,a){return Ii(n,a)}var Di=null,_l=null,Qo=!1,qi=!1,Zo=!1,Gt=0;function Ra(n){n!==_l&&n.next===null&&(_l===null?Di=_l=n:_l=_l.next=n),qi=!0,Qo||(Qo=!0,ph())}function pe(n,a){if(!Zo&&qi){Zo=!0;do for(var t=!1,l=Di;l!==null;){if(n!==0){var e=l.pendingLanes;if(e===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-la(42|n)+1)-1,i&=e&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,ks(l,i))}else i=an,i=Ye(l,l===mn?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Nl(l,i)||(t=!0,ks(l,i));l=l.next}while(t);Zo=!1}}function vh(){Us()}function Us(){qi=Qo=!1;var n=0;Gt!==0&&(Ah()&&(n=Gt),Gt=0);for(var a=_a(),t=null,l=Di;l!==null;){var e=l.next,i=Ns(l,a);i===0?(l.next=null,t===null?Di=e:t.next=e,e===null&&(_l=t)):(t=l,(n!==0||(i&3)!==0)&&(qi=!0)),l=e}pe(n)}function Ns(n,a){for(var t=n.suspendedLanes,l=n.pingedLanes,e=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-la(i),o=1<<u,f=e[u];f===-1?((o&t)===0||(o&l)!==0)&&(e[u]=Q0(o,a)):f<=a&&(n.expiredLanes|=o),i&=~o}if(a=mn,t=an,t=Ye(n,n===a?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===a&&(on===2||on===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&nu(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Nl(n,t)){if(a=t&-t,a===n.callbackPriority)return a;switch(l!==null&&nu(l),lu(t)){case 2:case 8:t=zr;break;case 32:t=Ne;break;case 268435456:t=Tr;break;default:t=Ne}return l=Hs.bind(null,n),t=Ii(t,l),n.callbackPriority=a,n.callbackNode=t,a}return l!==null&&l!==null&&nu(l),n.callbackPriority=2,n.callbackNode=null,2}function Hs(n,a){if(Gn!==0&&Gn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Mi()&&n.callbackNode!==t)return null;var l=an;return l=Ye(n,n===mn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(vs(n,l,a),Ns(n,_a()),n.callbackNode!=null&&n.callbackNode===t?Hs.bind(null,n):null)}function ks(n,a){if(Mi())return null;vs(n,a,!0)}function ph(){Eh(function(){(un&6)!==0?Ii(Or,vh):Us()})}function wo(){return Gt===0&&(Gt=Ar()),Gt}function Ys(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ge(""+n)}function Cs(n,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,n.id&&t.setAttribute("form",n.id),a.parentNode.insertBefore(t,a),n=new FormData(n),t.parentNode.removeChild(t),n}function gh(n,a,t,l,e){if(a==="submit"&&t&&t.stateNode===e){var i=Ys((e[$n]||null).action),u=l.submitter;u&&(a=(a=u[$n]||null)?Ys(a.formAction):u.getAttribute("formAction"),a!==null&&(i=a,u=null));var o=new Ve("action","action",null,l,e);n.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gt!==0){var f=u?Cs(e,u):new FormData(e);co(t,{pending:!0,data:f,method:e.method,action:i},null,f)}}else typeof i=="function"&&(o.preventDefault(),f=u?Cs(e,u):new FormData(e),co(t,{pending:!0,data:f,method:e.method,action:i},i,f))},currentTarget:e}]})}}for(var Vo=0;Vo<Mu.length;Vo++){var Lo=Mu[Vo],yh=Lo.toLowerCase(),xh=Lo[0].toUpperCase()+Lo.slice(1);Sa(yh,"on"+xh)}Sa(mc,"onAnimationEnd"),Sa(vc,"onAnimationIteration"),Sa(pc,"onAnimationStart"),Sa("dblclick","onDoubleClick"),Sa("focusin","onFocus"),Sa("focusout","onBlur"),Sa(Cd,"onTransitionRun"),Sa(Bd,"onTransitionStart"),Sa(Xd,"onTransitionCancel"),Sa(gc,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ge="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ge));function Bs(n,a){a=(a&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],e=l.event;l=l.listeners;n:{var i=void 0;if(a)for(var u=l.length-1;0<=u;u--){var o=l[u],f=o.instance,p=o.currentTarget;if(o=o.listener,f!==i&&e.isPropagationStopped())break n;i=o,e.currentTarget=p;try{i(e)}catch(O){pi(O)}e.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(o=l[u],f=o.instance,p=o.currentTarget,o=o.listener,f!==i&&e.isPropagationStopped())break n;i=o,e.currentTarget=p;try{i(e)}catch(O){pi(O)}e.currentTarget=null,i=f}}}}function nn(n,a){var t=a[eu];t===void 0&&(t=a[eu]=new Set);var l=n+"__bubble";t.has(l)||(Xs(a,n,2,!1),t.add(l))}function Ko(n,a,t){var l=0;a&&(l|=4),Xs(t,n,l,a)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Jo(n){if(!n[Ri]){n[Ri]=!0,Rr.forEach(function(t){t!=="selectionchange"&&(Sh.has(t)||Ko(t,!1,n),Ko(t,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Ri]||(a[Ri]=!0,Ko("selectionchange",!1,a))}}function Xs(n,a,t,l){switch(c0(a)){case 2:var e=Jh;break;case 8:e=Wh;break;default:e=rr}t=e.bind(null,a,t,n),e=void 0,!mu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(e=!0),l?e!==void 0?n.addEventListener(a,t,{capture:!0,passive:e}):n.addEventListener(a,t,!0):e!==void 0?n.addEventListener(a,t,{passive:e}):n.addEventListener(a,t,!1)}function Wo(n,a,t,l,e){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)n:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===e)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===e)return;u=u.return}for(;o!==null;){if(u=Kt(o),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue n}o=o.parentNode}}l=l.return}Vr(function(){var p=i,O=hu(t),A=[];n:{var g=yc.get(n);if(g!==void 0){var y=Ve,V=n;switch(n){case"keypress":if(Ze(t)===0)break n;case"keydown":case"keyup":y=md;break;case"focusin":V="focus",y=yu;break;case"focusout":V="blur",y=yu;break;case"beforeblur":case"afterblur":y=yu;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gd;break;case mc:case vc:case pc:y=ud;break;case gc:y=xd;break;case"scroll":case"scrollend":y=ad;break;case"wheel":y=Od;break;case"copy":case"cut":case"paste":y=rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=$r;break;case"toggle":case"beforetoggle":y=Td}var G=(a&4)!==0,fn=!G&&(n==="scroll"||n==="scrollend"),m=G?g!==null?g+"Capture":null:g;G=[];for(var h=p,v;h!==null;){var T=h;if(v=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||v===null||m===null||(T=Cl(h,m),T!=null&&G.push(ye(h,T,v))),fn)break;h=h.return}0<G.length&&(g=new y(g,V,null,t,O),A.push({event:g,listeners:G}))}}if((a&7)===0){n:{if(g=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",g&&t!==du&&(V=t.relatedTarget||t.fromElement)&&(Kt(V)||V[Lt]))break n;if((y||g)&&(g=O.window===O?O:(g=O.ownerDocument)?g.defaultView||g.parentWindow:window,y?(V=t.relatedTarget||t.toElement,y=p,V=V?Kt(V):null,V!==null&&(fn=E(V),G=V.tag,V!==fn||G!==5&&G!==27&&G!==6)&&(V=null)):(y=null,V=p),y!==V)){if(G=Jr,T="onMouseLeave",m="onMouseEnter",h="mouse",(n==="pointerout"||n==="pointerover")&&(G=$r,T="onPointerLeave",m="onPointerEnter",h="pointer"),fn=y==null?g:Yl(y),v=V==null?g:Yl(V),g=new G(T,h+"leave",y,t,O),g.target=fn,g.relatedTarget=v,T=null,Kt(O)===p&&(G=new G(m,h+"enter",V,t,O),G.target=v,G.relatedTarget=fn,T=G),fn=T,y&&V)a:{for(G=y,m=V,h=0,v=G;v;v=El(v))h++;for(v=0,T=m;T;T=El(T))v++;for(;0<h-v;)G=El(G),h--;for(;0<v-h;)m=El(m),v--;for(;h--;){if(G===m||m!==null&&G===m.alternate)break a;G=El(G),m=El(m)}G=null}else G=null;y!==null&&js(A,g,y,G,!1),V!==null&&fn!==null&&js(A,fn,V,G,!0)}}n:{if(g=p?Yl(p):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=ec;else if(tc(g))if(ic)k=Hd;else{k=Ud;var P=Rd}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&su(p.elementType)&&(k=ec):k=Nd;if(k&&(k=k(n,p))){lc(A,k,t,O);break n}P&&P(n,g,p),n==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&fu(g,"number",g.value)}switch(P=p?Yl(p):window,n){case"focusin":(tc(P)||P.contentEditable==="true")&&(ll=P,Au=p,Vl=null);break;case"focusout":Vl=Au=ll=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,hc(A,t,O);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":hc(A,t,O)}var C;if(Su)n:{switch(n){case"compositionstart":var Q="onCompositionStart";break n;case"compositionend":Q="onCompositionEnd";break n;case"compositionupdate":Q="onCompositionUpdate";break n}Q=void 0}else tl?nc(n,t)&&(Q="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(Q="onCompositionStart");Q&&(Pr&&t.locale!=="ko"&&(tl||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&tl&&(C=Lr()):(Ia=O,vu="value"in Ia?Ia.value:Ia.textContent,tl=!0)),P=Ui(p,Q),0<P.length&&(Q=new Wr(Q,n,null,t,O),A.push({event:Q,listeners:P}),C?Q.data=C:(C=ac(t),C!==null&&(Q.data=C)))),(C=_d?Ed(n,t):Md(n,t))&&(Q=Ui(p,"onBeforeInput"),0<Q.length&&(P=new Wr("onBeforeInput","beforeinput",null,t,O),A.push({event:P,listeners:Q}),P.data=C)),gh(A,n,p,t,O)}Bs(A,a)})}function ye(n,a,t){return{instance:n,listener:a,currentTarget:t}}function Ui(n,a){for(var t=a+"Capture",l=[];n!==null;){var e=n,i=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||i===null||(e=Cl(n,t),e!=null&&l.unshift(ye(n,e,i)),e=Cl(n,a),e!=null&&l.push(ye(n,e,i))),n.tag===3)return l;n=n.return}return[]}function El(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function js(n,a,t,l,e){for(var i=a._reactName,u=[];t!==null&&t!==l;){var o=t,f=o.alternate,p=o.stateNode;if(o=o.tag,f!==null&&f===l)break;o!==5&&o!==26&&o!==27||p===null||(f=p,e?(p=Cl(t,i),p!=null&&u.unshift(ye(t,p,f))):e||(p=Cl(t,i),p!=null&&u.push(ye(t,p,f)))),t=t.return}u.length!==0&&n.push({event:a,listeners:u})}var Oh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function Gs(n){return(typeof n=="string"?n:""+n).replace(Oh,`
`).replace(zh,"")}function Qs(n,a){return a=Gs(a),Gs(n)===a}function Ni(){}function cn(n,a,t,l,e,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||It(n,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&It(n,""+l);break;case"className":Be(n,"class",l);break;case"tabIndex":Be(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(n,t,l);break;case"style":Zr(n,l,i);break;case"data":if(a!=="object"){Be(n,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ge(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&cn(n,a,"name",e.name,e,null),cn(n,a,"formEncType",e.formEncType,e,null),cn(n,a,"formMethod",e.formMethod,e,null),cn(n,a,"formTarget",e.formTarget,e,null)):(cn(n,a,"encType",e.encType,e,null),cn(n,a,"method",e.method,e,null),cn(n,a,"target",e.target,e,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=Ge(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Ni);break;case"onScroll":l!=null&&nn("scroll",n);break;case"onScrollEnd":l!=null&&nn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(t=l.__html,t!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=Ge(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":nn("beforetoggle",n),nn("toggle",n),Ce(n,"popover",l);break;case"xlinkActuate":Ha(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ha(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ha(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ha(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ha(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ha(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ha(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ha(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ha(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ce(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=I0.get(t)||t,Ce(n,t,l))}}function $o(n,a,t,l,e,i){switch(t){case"style":Zr(n,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(t=l.__html,t!=null){if(e.children!=null)throw Error(c(60));n.innerHTML=t}}break;case"children":typeof l=="string"?It(n,l):(typeof l=="number"||typeof l=="bigint")&&It(n,""+l);break;case"onScroll":l!=null&&nn("scroll",n);break;case"onScrollEnd":l!=null&&nn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ur.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(e=t.endsWith("Capture"),a=t.slice(2,e?t.length-7:void 0),i=n[$n]||null,i=i!=null?i[t]:null,typeof i=="function"&&n.removeEventListener(a,i,e),typeof l=="function")){typeof i!="function"&&i!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(a,l,e);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):Ce(n,t,l)}}}function Qn(n,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nn("error",n),nn("load",n);var l=!1,e=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:cn(n,a,i,u,t,null)}}e&&cn(n,a,"srcSet",t.srcSet,t,null),l&&cn(n,a,"src",t.src,t,null);return;case"input":nn("invalid",n);var o=i=u=e=null,f=null,p=null;for(l in t)if(t.hasOwnProperty(l)){var O=t[l];if(O!=null)switch(l){case"name":e=O;break;case"type":u=O;break;case"checked":f=O;break;case"defaultChecked":p=O;break;case"value":i=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,a));break;default:cn(n,a,l,O,t,null)}}Xr(n,i,o,f,p,u,e,!1),Xe(n);return;case"select":nn("invalid",n),l=u=i=null;for(e in t)if(t.hasOwnProperty(e)&&(o=t[e],o!=null))switch(e){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:cn(n,a,e,o,t,null)}a=i,t=u,n.multiple=!!l,a!=null?Ft(n,!!l,a,!1):t!=null&&Ft(n,!!l,t,!0);return;case"textarea":nn("invalid",n),i=e=l=null;for(u in t)if(t.hasOwnProperty(u)&&(o=t[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":e=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:cn(n,a,u,o,t,null)}Gr(n,l,e,i),Xe(n);return;case"option":for(f in t)if(t.hasOwnProperty(f)&&(l=t[f],l!=null))switch(f){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:cn(n,a,f,l,t,null)}return;case"dialog":nn("beforetoggle",n),nn("toggle",n),nn("cancel",n),nn("close",n);break;case"iframe":case"object":nn("load",n);break;case"video":case"audio":for(l=0;l<ge.length;l++)nn(ge[l],n);break;case"image":nn("error",n),nn("load",n);break;case"details":nn("toggle",n);break;case"embed":case"source":case"link":nn("error",n),nn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in t)if(t.hasOwnProperty(p)&&(l=t[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,a));default:cn(n,a,p,l,t,null)}return;default:if(su(a)){for(O in t)t.hasOwnProperty(O)&&(l=t[O],l!==void 0&&$o(n,a,O,l,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(l=t[o],l!=null&&cn(n,a,o,l,t,null))}function Th(n,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,i=null,u=null,o=null,f=null,p=null,O=null;for(y in t){var A=t[y];if(t.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=A;default:l.hasOwnProperty(y)||cn(n,a,y,null,l,A)}}for(var g in l){var y=l[g];if(A=t[g],l.hasOwnProperty(g)&&(y!=null||A!=null))switch(g){case"type":i=y;break;case"name":e=y;break;case"checked":p=y;break;case"defaultChecked":O=y;break;case"value":u=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,a));break;default:y!==A&&cn(n,a,g,y,l,A)}}cu(n,u,o,f,p,O,i,e);return;case"select":y=u=o=g=null;for(i in t)if(f=t[i],t.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":y=f;default:l.hasOwnProperty(i)||cn(n,a,i,null,l,f)}for(e in l)if(i=l[e],f=t[e],l.hasOwnProperty(e)&&(i!=null||f!=null))switch(e){case"value":g=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==f&&cn(n,a,e,i,l,f)}a=o,t=u,l=y,g!=null?Ft(n,!!t,g,!1):!!l!=!!t&&(a!=null?Ft(n,!!t,a,!0):Ft(n,!!t,t?[]:"",!1));return;case"textarea":y=g=null;for(o in t)if(e=t[o],t.hasOwnProperty(o)&&e!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:cn(n,a,o,null,l,e)}for(u in l)if(e=l[u],i=t[u],l.hasOwnProperty(u)&&(e!=null||i!=null))switch(u){case"value":g=e;break;case"defaultValue":y=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(c(91));break;default:e!==i&&cn(n,a,u,e,l,i)}jr(n,g,y);return;case"option":for(var V in t)if(g=t[V],t.hasOwnProperty(V)&&g!=null&&!l.hasOwnProperty(V))switch(V){case"selected":n.selected=!1;break;default:cn(n,a,V,null,l,g)}for(f in l)if(g=l[f],y=t[f],l.hasOwnProperty(f)&&g!==y&&(g!=null||y!=null))switch(f){case"selected":n.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:cn(n,a,f,g,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in t)g=t[G],t.hasOwnProperty(G)&&g!=null&&!l.hasOwnProperty(G)&&cn(n,a,G,null,l,g);for(p in l)if(g=l[p],y=t[p],l.hasOwnProperty(p)&&g!==y&&(g!=null||y!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(137,a));break;default:cn(n,a,p,g,l,y)}return;default:if(su(a)){for(var fn in t)g=t[fn],t.hasOwnProperty(fn)&&g!==void 0&&!l.hasOwnProperty(fn)&&$o(n,a,fn,void 0,l,g);for(O in l)g=l[O],y=t[O],!l.hasOwnProperty(O)||g===y||g===void 0&&y===void 0||$o(n,a,O,g,l,y);return}}for(var m in t)g=t[m],t.hasOwnProperty(m)&&g!=null&&!l.hasOwnProperty(m)&&cn(n,a,m,null,l,g);for(A in l)g=l[A],y=t[A],!l.hasOwnProperty(A)||g===y||g==null&&y==null||cn(n,a,A,g,l,y)}var Po=null,Fo=null;function Hi(n){return n.nodeType===9?n:n.ownerDocument}function Zs(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ws(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Io(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var nr=null;function Ah(){var n=window.event;return n&&n.type==="popstate"?n===nr?!1:(nr=n,!0):(nr=null,!1)}var Vs=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,Ls=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ls<"u"?function(n){return Ls.resolve(null).then(n).catch(Mh)}:Vs;function Mh(n){setTimeout(function(){throw n})}function mt(n){return n==="head"}function Ks(n,a){var t=a,l=0,e=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(0<l&&8>l){t=l;var u=n.ownerDocument;if(t&1&&xe(u.documentElement),t&2&&xe(u.body),t&4)for(t=u.head,xe(t),u=t.firstChild;u;){var o=u.nextSibling,f=u.nodeName;u[kl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=o}}if(e===0){n.removeChild(i),Me(a);return}e--}else t==="$"||t==="$?"||t==="$!"?e++:l=t.charCodeAt(0)-48;else l=0;t=i}while(t);Me(a)}function ar(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ar(t),iu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Dh(n,a,t,l){for(;n.nodeType===1;){var e=t;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[kl])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==e.rel||n.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||n.getAttribute("title")!==(e.title==null?null:e.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(e.src==null?null:e.src)||n.getAttribute("type")!==(e.type==null?null:e.type)||n.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var i=e.name==null?null:""+e.name;if(e.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=za(n.nextSibling),n===null)break}return null}function qh(n,a,t){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=za(n.nextSibling),n===null))return null;return n}function tr(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Rh(n,a){var t=n.ownerDocument;if(n.data!=="$?"||t.readyState==="complete")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function za(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var lr=null;function Js(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return n;a--}else t==="/$"&&a++}n=n.previousSibling}return null}function Ws(n,a,t){switch(a=Hi(t),n){case"html":if(n=a.documentElement,!n)throw Error(c(452));return n;case"head":if(n=a.head,!n)throw Error(c(453));return n;case"body":if(n=a.body,!n)throw Error(c(454));return n;default:throw Error(c(451))}}function xe(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);iu(n)}var xa=new Map,$s=new Set;function ki(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ja=U.d;U.d={f:Uh,r:Nh,D:Hh,C:kh,L:Yh,m:Ch,X:Xh,S:Bh,M:jh};function Uh(){var n=Ja.f(),a=_i();return n||a}function Nh(n){var a=Jt(n);a!==null&&a.tag===5&&a.type==="form"?vf(a):Ja.r(n)}var Ml=typeof document>"u"?null:document;function Ps(n,a,t){var l=Ml;if(l&&typeof a=="string"&&a){var e=ha(a);e='link[rel="'+n+'"][href="'+e+'"]',typeof t=="string"&&(e+='[crossorigin="'+t+'"]'),$s.has(e)||($s.add(e),n={rel:n,crossOrigin:t,href:a},l.querySelector(e)===null&&(a=l.createElement("link"),Qn(a,"link",n),Yn(a),l.head.appendChild(a)))}}function Hh(n){Ja.D(n),Ps("dns-prefetch",n,null)}function kh(n,a){Ja.C(n,a),Ps("preconnect",n,a)}function Yh(n,a,t){Ja.L(n,a,t);var l=Ml;if(l&&n&&a){var e='link[rel="preload"][as="'+ha(a)+'"]';a==="image"&&t&&t.imageSrcSet?(e+='[imagesrcset="'+ha(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(e+='[imagesizes="'+ha(t.imageSizes)+'"]')):e+='[href="'+ha(n)+'"]';var i=e;switch(a){case"style":i=Dl(n);break;case"script":i=ql(n)}xa.has(i)||(n=N({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:n,as:a},t),xa.set(i,n),l.querySelector(e)!==null||a==="style"&&l.querySelector(Se(i))||a==="script"&&l.querySelector(Oe(i))||(a=l.createElement("link"),Qn(a,"link",n),Yn(a),l.head.appendChild(a)))}}function Ch(n,a){Ja.m(n,a);var t=Ml;if(t&&n){var l=a&&typeof a.as=="string"?a.as:"script",e='link[rel="modulepreload"][as="'+ha(l)+'"][href="'+ha(n)+'"]',i=e;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ql(n)}if(!xa.has(i)&&(n=N({rel:"modulepreload",href:n},a),xa.set(i,n),t.querySelector(e)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Oe(i)))return}l=t.createElement("link"),Qn(l,"link",n),Yn(l),t.head.appendChild(l)}}}function Bh(n,a,t){Ja.S(n,a,t);var l=Ml;if(l&&n){var e=Wt(l).hoistableStyles,i=Dl(n);a=a||"default";var u=e.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(Se(i)))o.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":a},t),(t=xa.get(i))&&er(n,t);var f=u=l.createElement("link");Yn(f),Qn(f,"link",n),f._p=new Promise(function(p,O){f.onload=p,f.onerror=O}),f.addEventListener("load",function(){o.loading|=1}),f.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Yi(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:o},e.set(i,u)}}}function Xh(n,a){Ja.X(n,a);var t=Ml;if(t&&n){var l=Wt(t).hoistableScripts,e=ql(n),i=l.get(e);i||(i=t.querySelector(Oe(e)),i||(n=N({src:n,async:!0},a),(a=xa.get(e))&&ir(n,a),i=t.createElement("script"),Yn(i),Qn(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function jh(n,a){Ja.M(n,a);var t=Ml;if(t&&n){var l=Wt(t).hoistableScripts,e=ql(n),i=l.get(e);i||(i=t.querySelector(Oe(e)),i||(n=N({src:n,async:!0,type:"module"},a),(a=xa.get(e))&&ir(n,a),i=t.createElement("script"),Yn(i),Qn(i,"link",n),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(e,i))}}function Fs(n,a,t,l){var e=(e=K.current)?ki(e):null;if(!e)throw Error(c(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Dl(t.href),t=Wt(e).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Dl(t.href);var i=Wt(e).hoistableStyles,u=i.get(n);if(u||(e=e.ownerDocument||e,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=e.querySelector(Se(n)))&&!i._p&&(u.instance=i,u.state.loading=5),xa.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},xa.set(n,t),i||Gh(e,n,t,u.state))),a&&l===null)throw Error(c(528,""));return u}if(a&&l!==null)throw Error(c(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ql(t),t=Wt(e).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,n))}}function Dl(n){return'href="'+ha(n)+'"'}function Se(n){return'link[rel="stylesheet"]['+n+"]"}function Is(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function Gh(n,a,t,l){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=n.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Qn(a,"link",t),Yn(a),n.head.appendChild(a))}function ql(n){return'[src="'+ha(n)+'"]'}function Oe(n){return"script[async]"+n}function n0(n,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=n.querySelector('style[data-href~="'+ha(t.href)+'"]');if(l)return a.instance=l,Yn(l),l;var e=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Yn(l),Qn(l,"style",e),Yi(l,t.precedence,n),a.instance=l;case"stylesheet":e=Dl(t.href);var i=n.querySelector(Se(e));if(i)return a.state.loading|=4,a.instance=i,Yn(i),i;l=Is(t),(e=xa.get(e))&&er(l,e),i=(n.ownerDocument||n).createElement("link"),Yn(i);var u=i;return u._p=new Promise(function(o,f){u.onload=o,u.onerror=f}),Qn(i,"link",l),a.state.loading|=4,Yi(i,t.precedence,n),a.instance=i;case"script":return i=ql(t.src),(e=n.querySelector(Oe(i)))?(a.instance=e,Yn(e),e):(l=t,(e=xa.get(i))&&(l=N({},t),ir(l,e)),n=n.ownerDocument||n,e=n.createElement("script"),Yn(e),Qn(e,"link",l),n.head.appendChild(e),a.instance=e);case"void":return null;default:throw Error(c(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Yi(l,t.precedence,n));return a.instance}function Yi(n,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=l.length?l[l.length-1]:null,i=e,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===a)i=o;else if(i!==e)break}i?i.parentNode.insertBefore(n,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(n,a.firstChild))}function er(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function ir(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Ci=null;function a0(n,a,t){if(Ci===null){var l=new Map,e=Ci=new Map;e.set(t,l)}else e=Ci,l=e.get(t),l||(l=new Map,e.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),e=0;e<t.length;e++){var i=t[e];if(!(i[kl]||i[Ln]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(a)||"";u=n+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function t0(n,a,t){n=n.ownerDocument||n,n.head.insertBefore(t,a==="title"?n.querySelector("head > title"):null)}function Qh(n,a,t){if(t===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function l0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ze=null;function Zh(){}function wh(n,a,t){if(ze===null)throw Error(c(475));var l=ze;if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var e=Dl(t.href),i=n.querySelector(Se(e));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Bi.bind(l),n.then(l,l)),a.state.loading|=4,a.instance=i,Yn(i);return}i=n.ownerDocument||n,t=Is(t),(e=xa.get(e))&&er(t,e),i=i.createElement("link"),Yn(i);var u=i;u._p=new Promise(function(o,f){u.onload=o,u.onerror=f}),Qn(i,"link",t),a.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Bi.bind(l),n.addEventListener("load",a),n.addEventListener("error",a))}}function Vh(){if(ze===null)throw Error(c(475));var n=ze;return n.stylesheets&&n.count===0&&ur(n,n.stylesheets),0<n.count?function(a){var t=setTimeout(function(){if(n.stylesheets&&ur(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(t)}}:null}function Bi(){if(this.count--,this.count===0){if(this.stylesheets)ur(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Xi=null;function ur(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Xi=new Map,a.forEach(Lh,n),Xi=null,Bi.call(n))}function Lh(n,a){if(!(a.state.loading&4)){var t=Xi.get(n);if(t)var l=t.get(null);else{t=new Map,Xi.set(n,t);for(var e=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<e.length;i++){var u=e[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),l=u)}l&&t.set(null,l)}e=a.instance,u=e.getAttribute("data-precedence"),i=t.get(u)||l,i===l&&t.set(null,e),t.set(u,e),this.count++,l=Bi.bind(this),e.addEventListener("load",l),e.addEventListener("error",l),i?i.parentNode.insertBefore(e,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(e,n.firstChild)),a.state.loading|=4}}var Te={$$typeof:sn,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Kh(n,a,t,l,e,i,u,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=l,this.onUncaughtError=e,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function e0(n,a,t,l,e,i,u,o,f,p,O,A){return n=new Kh(n,a,t,u,o,f,p,A),a=1,i===!0&&(a|=24),i=ia(3,null,null,a),n.current=i,i.stateNode=n,a=ju(),a.refCount++,n.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},wu(i),n}function i0(n){return n?(n=ol,n):ol}function u0(n,a,t,l,e,i){e=i0(e),l.context===null?l.context=e:l.pendingContext=e,l=tt(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=lt(n,l,a),t!==null&&(fa(t,n,a),ne(t,n,a))}function o0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<a?t:a}}function or(n,a){o0(n,a),(n=n.alternate)&&o0(n,a)}function r0(n){if(n.tag===13){var a=ul(n,67108864);a!==null&&fa(a,n,67108864),or(n,67108864)}}var ji=!0;function Jh(n,a,t,l){var e=z.T;z.T=null;var i=U.p;try{U.p=2,rr(n,a,t,l)}finally{U.p=i,z.T=e}}function Wh(n,a,t,l){var e=z.T;z.T=null;var i=U.p;try{U.p=8,rr(n,a,t,l)}finally{U.p=i,z.T=e}}function rr(n,a,t,l){if(ji){var e=cr(l);if(e===null)Wo(n,a,l,Gi,t),f0(n,l);else if(Ph(e,n,a,t,l))l.stopPropagation();else if(f0(n,l),a&4&&-1<$h.indexOf(n)){for(;e!==null;){var i=Jt(e);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Tt(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var f=1<<31-la(u);o.entanglements[1]|=f,u&=~f}Ra(i),(un&6)===0&&(Ti=_a()+500,pe(0))}}break;case 13:o=ul(i,2),o!==null&&fa(o,i,2),_i(),or(i,2)}if(i=cr(l),i===null&&Wo(n,a,l,Gi,t),i===e)break;e=i}e!==null&&l.stopPropagation()}else Wo(n,a,l,null,t)}}function cr(n){return n=hu(n),fr(n)}var Gi=null;function fr(n){if(Gi=null,n=Kt(n),n!==null){var a=E(n);if(a===null)n=null;else{var t=a.tag;if(t===13){if(n=q(a),n!==null)return n;n=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Gi=n,null}function c0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case Or:return 2;case zr:return 8;case Ne:case Y0:return 32;case Tr:return 268435456;default:return 32}default:return 32}}var sr=!1,vt=null,pt=null,gt=null,Ae=new Map,_e=new Map,yt=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(n,a){switch(n){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Ae.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":_e.delete(a.pointerId)}}function Ee(n,a,t,l,e,i){return n===null||n.nativeEvent!==i?(n={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[e]},a!==null&&(a=Jt(a),a!==null&&r0(a)),n):(n.eventSystemFlags|=l,a=n.targetContainers,e!==null&&a.indexOf(e)===-1&&a.push(e),n)}function Ph(n,a,t,l,e){switch(a){case"focusin":return vt=Ee(vt,n,a,t,l,e),!0;case"dragenter":return pt=Ee(pt,n,a,t,l,e),!0;case"mouseover":return gt=Ee(gt,n,a,t,l,e),!0;case"pointerover":var i=e.pointerId;return Ae.set(i,Ee(Ae.get(i)||null,n,a,t,l,e)),!0;case"gotpointercapture":return i=e.pointerId,_e.set(i,Ee(_e.get(i)||null,n,a,t,l,e)),!0}return!1}function s0(n){var a=Kt(n.target);if(a!==null){var t=E(a);if(t!==null){if(a=t.tag,a===13){if(a=q(t),a!==null){n.blockedOn=a,w0(n.priority,function(){if(t.tag===13){var l=ca();l=tu(l);var e=ul(t,l);e!==null&&fa(e,t,l),or(t,l)}});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qi(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var t=cr(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);du=l,t.target.dispatchEvent(l),du=null}else return a=Jt(t),a!==null&&r0(a),n.blockedOn=t,!1;a.shift()}return!0}function d0(n,a,t){Qi(n)&&t.delete(a)}function Fh(){sr=!1,vt!==null&&Qi(vt)&&(vt=null),pt!==null&&Qi(pt)&&(pt=null),gt!==null&&Qi(gt)&&(gt=null),Ae.forEach(d0),_e.forEach(d0)}function Zi(n,a){n.blockedOn===a&&(n.blockedOn=null,sr||(sr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Fh)))}var wi=null;function h0(n){wi!==n&&(wi=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wi===n&&(wi=null);for(var a=0;a<n.length;a+=3){var t=n[a],l=n[a+1],e=n[a+2];if(typeof l!="function"){if(fr(l||t)===null)continue;break}var i=Jt(t);i!==null&&(n.splice(a,3),a-=3,co(i,{pending:!0,data:e,method:t.method,action:l},l,e))}}))}function Me(n){function a(f){return Zi(f,n)}vt!==null&&Zi(vt,n),pt!==null&&Zi(pt,n),gt!==null&&Zi(gt,n),Ae.forEach(a),_e.forEach(a);for(var t=0;t<yt.length;t++){var l=yt[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<yt.length&&(t=yt[0],t.blockedOn===null);)s0(t),t.blockedOn===null&&yt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var e=t[l],i=t[l+1],u=e[$n]||null;if(typeof i=="function")u||h0(t);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(e=i,u=i[$n]||null)o=u.formAction;else if(fr(e)!==null)continue}else o=u.action;typeof o=="function"?t[l+1]=o:(t.splice(l,3),l-=3),h0(t)}}}function dr(n){this._internalRoot=n}Vi.prototype.render=dr.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(c(409));var t=a.current,l=ca();u0(t,l,n,a,null,null)},Vi.prototype.unmount=dr.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;u0(n.current,2,null,n,null,null),_i(),a[Lt]=null}};function Vi(n){this._internalRoot=n}Vi.prototype.unstable_scheduleHydration=function(n){if(n){var a=Dr();n={blockedOn:null,target:n,priority:a};for(var t=0;t<yt.length&&a!==0&&a<yt[t].priority;t++);yt.splice(t,0,n),t===0&&s0(n)}};var b0=s.version;if(b0!=="19.1.0")throw Error(c(527,b0,"19.1.0"));U.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=M(a),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var Ih={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Ul=Li.inject(Ih),ta=Li}catch{}}return qe.createRoot=function(n,a){if(!S(n))throw Error(c(299));var t=!1,l="",e=qf,i=Rf,u=Uf,o=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(e=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(o=a.unstable_transitionCallbacks)),a=e0(n,1,!1,null,null,t,l,e,i,u,o,null),n[Lt]=a.current,Jo(n),new dr(a)},qe.hydrateRoot=function(n,a,t){if(!S(n))throw Error(c(299));var l=!1,e="",i=qf,u=Rf,o=Uf,f=null,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks),t.formState!==void 0&&(p=t.formState)),a=e0(n,1,!0,a,t??null,l,e,i,u,o,f,p),a.context=i0(null),t=a.current,l=ca(),l=tu(l),e=tt(l),e.callback=null,lt(t,e,l),t=l,a.current.lanes=t,Hl(a,t),Ra(a),n[Lt]=a.current,Jo(n),new Vi(a)},qe.version="19.1.0",qe}var T0;function f1(){if(T0)return mr.exports;T0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),mr.exports=c1(),mr.exports}var s1=f1();const d1="/avanti-github/assets/gh-logo-DXFGcC85.svg";function h1(){return zn.jsxs("header",{className:"flex justify-center items-center  gap-4",children:[zn.jsx("img",{src:d1,alt:"Logo"}),zn.jsxs("h1",{className:" text-white font-semibold text-6xl",children:["PerfiI ",zn.jsx("strong",{className:"font-extrabold",children:"GitHub"})]})]})}const b1="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.1817%200C11.631%200.0643066%2012.0835%200.111279%2012.529%200.195898C14.6936%200.607031%2016.5464%201.61221%2018.0885%203.17886C19.4914%204.60405%2020.4188%206.29736%2020.817%208.26108C21.3175%2010.7295%2020.9722%2013.0835%2019.7351%2015.2809C19.3389%2015.9848%2018.8377%2016.6298%2018.3847%2017.3017C18.3419%2017.3178%2018.2992%2017.3339%2018.2564%2017.35C18.3369%2017.3915%2018.4335%2017.4163%2018.4953%2017.4768C20.5444%2019.4878%2022.5918%2021.5007%2024.6333%2023.5194C24.7792%2023.6636%2024.8788%2023.8543%2025%2024.0234V24.3652C24.8936%2024.6819%2024.6756%2024.8872%2024.3652%2025H24.0234C23.8267%2024.8615%2023.6065%2024.7469%2023.4368%2024.5808C21.3896%2022.5771%2019.35%2020.5657%2017.3082%2018.5565C17.2566%2018.5059%2017.2025%2018.4579%2017.1398%2018.3995C17.0692%2018.4477%2017.0014%2018.4896%2016.9383%2018.5377C15.5811%2019.5722%2014.0595%2020.2468%2012.3818%2020.5327C9.87446%2020.9599%207.48838%2020.5855%205.27173%2019.3094C2.96553%2017.9817%201.36572%2016.06%200.509717%2013.5335C0.255859%2012.7841%200.10127%2012.0118%200.0422363%2011.2213C0.0375977%2011.1585%200.0145508%2011.0972%200%2011.0352V9.66797C0.0149414%209.59766%200.0336426%209.52793%200.0441895%209.45698C0.105029%209.04746%200.141992%208.63296%200.227295%208.22866C0.635547%206.2939%201.54116%204.61934%202.92188%203.20737C4.47202%201.62222%206.33569%200.606836%208.51855%200.194238C8.94736%200.113135%209.38232%200.063916%209.8145%200H11.1817ZM1.61445%2010.2985C1.63369%2010.6609%201.63267%2010.9635%201.66826%2011.2618C1.89365%2013.1501%202.61221%2014.8245%203.92432%2016.21C6.22021%2018.6342%209.05664%2019.5454%2012.307%2018.9131C15.1566%2018.3587%2017.2862%2016.7189%2018.5484%2014.0819C19.8208%2011.424%2019.7434%208.7374%2018.3187%206.16904C16.8584%203.53643%2014.5546%202.03594%2011.5669%201.66851C9.20781%201.37832%207.03818%201.95239%205.13687%203.39321C2.83711%205.13604%201.69321%207.48369%201.61445%2010.2985Z'%20fill='white'/%3e%3c/svg%3e";function m1({setAccount:r,setErrorMsg:s,setLoading:b,setTriggered:c}){const[S,E]=wt.useState(""),q=async()=>{if(c(!0),!!S.trim()){b(!0),s("");try{const B=await fetch(`https://api.github.com/users/${S}`);if(console.log(S),!B.ok)throw new Error("Usuário não encontrado");const M=await B.json();r(M)}catch(B){s(B.message),r(null)}finally{b(!1)}}};return zn.jsxs("div",{className:"bg-white flex w-4/12 rounded-lg overflow-hidden border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500",children:[zn.jsx("input",{type:"text",placeholder:"Digite um usuário do Github",className:"p-4 flex-1 outline-none text-gray-700 placeholder-black font-semibold",value:S,onChange:B=>E(B.target.value),onKeyDown:B=>B.key=="Enter"&&q()}),zn.jsx("button",{onClick:q,className:"bg-blue-500 hover:bg-blue-600 transition-colors p-4 flex items-center  rounded-lg justify-center",children:zn.jsx("img",{src:b1,alt:"Find",className:"w-5 h-5"})})]})}function Hn(r,s){s===void 0&&(s={});var b=s.insertAt;if(r&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],S=document.createElement("style");S.type="text/css",b==="top"&&c.firstChild?c.insertBefore(S,c.firstChild):c.appendChild(S),S.styleSheet?S.styleSheet.cssText=r:S.appendChild(document.createTextNode(r))}}Hn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Ua=function(){return Ua=Object.assign||function(r){for(var s,b=1,c=arguments.length;b<c;b++)for(var S in s=arguments[b])Object.prototype.hasOwnProperty.call(s,S)&&(r[S]=s[S]);return r},Ua.apply(this,arguments)};function Wi(r){return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Wi(r)}var v1=/^\s+/,p1=/\s+$/;function Y(r,s){if(s=s||{},(r=r||"")instanceof Y)return r;if(!(this instanceof Y))return new Y(r,s);var b=function(c){var S={r:0,g:0,b:0},E=1,q=null,B=null,M=null,x=!1,N=!1;typeof c=="string"&&(c=function(X){X=X.replace(v1,"").replace(p1,"").toLowerCase();var D,w=!1;if(xr[X])X=xr[X],w=!0;else if(X=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(D=Ta.rgb.exec(X))?{r:D[1],g:D[2],b:D[3]}:(D=Ta.rgba.exec(X))?{r:D[1],g:D[2],b:D[3],a:D[4]}:(D=Ta.hsl.exec(X))?{h:D[1],s:D[2],l:D[3]}:(D=Ta.hsla.exec(X))?{h:D[1],s:D[2],l:D[3],a:D[4]}:(D=Ta.hsv.exec(X))?{h:D[1],s:D[2],v:D[3]}:(D=Ta.hsva.exec(X))?{h:D[1],s:D[2],v:D[3],a:D[4]}:(D=Ta.hex8.exec(X))?{r:sa(D[1]),g:sa(D[2]),b:sa(D[3]),a:q0(D[4]),format:w?"name":"hex8"}:(D=Ta.hex6.exec(X))?{r:sa(D[1]),g:sa(D[2]),b:sa(D[3]),format:w?"name":"hex"}:(D=Ta.hex4.exec(X))?{r:sa(D[1]+""+D[1]),g:sa(D[2]+""+D[2]),b:sa(D[3]+""+D[3]),a:q0(D[4]+""+D[4]),format:w?"name":"hex8"}:(D=Ta.hex3.exec(X))?{r:sa(D[1]+""+D[1]),g:sa(D[2]+""+D[2]),b:sa(D[3]+""+D[3]),format:w?"name":"hex"}:!1}(c)),Wi(c)=="object"&&(Wa(c.r)&&Wa(c.g)&&Wa(c.b)?(L=c.r,F=c.g,bn=c.b,S={r:255*gn(L,255),g:255*gn(F,255),b:255*gn(bn,255)},x=!0,N=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Wa(c.h)&&Wa(c.s)&&Wa(c.v)?(q=Re(c.s),B=Re(c.v),S=function(X,D,w){X=6*gn(X,360),D=gn(D,100),w=gn(w,100);var kn=Math.floor(X),Zn=X-kn,sn=w*(1-D),qn=w*(1-Zn*D),J=w*(1-(1-Zn)*D),Tn=kn%6,An=[w,qn,sn,sn,J,w][Tn],Rn=[J,w,w,qn,sn,sn][Tn],xn=[sn,sn,J,w,w,qn][Tn];return{r:255*An,g:255*Rn,b:255*xn}}(c.h,q,B),x=!0,N="hsv"):Wa(c.h)&&Wa(c.s)&&Wa(c.l)&&(q=Re(c.s),M=Re(c.l),S=function(X,D,w){var kn,Zn,sn;function qn(An,Rn,xn){return xn<0&&(xn+=1),xn>1&&(xn-=1),xn<1/6?An+6*(Rn-An)*xn:xn<.5?Rn:xn<2/3?An+(Rn-An)*(2/3-xn)*6:An}if(X=gn(X,360),D=gn(D,100),w=gn(w,100),D===0)kn=Zn=sn=w;else{var J=w<.5?w*(1+D):w+D-w*D,Tn=2*w-J;kn=qn(Tn,J,X+1/3),Zn=qn(Tn,J,X),sn=qn(Tn,J,X-1/3)}return{r:255*kn,g:255*Zn,b:255*sn}}(c.h,q,M),x=!0,N="hsl"),c.hasOwnProperty("a")&&(E=c.a));var L,F,bn;return E=R0(E),{ok:x,format:c.format||N,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:E}}(r);this._originalInput=r,this._r=b.r,this._g=b.g,this._b=b.b,this._a=b.a,this._roundA=Math.round(100*this._a)/100,this._format=s.format||b.format,this._gradientType=s.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=b.ok}function A0(r,s,b){r=gn(r,255),s=gn(s,255),b=gn(b,255);var c,S,E=Math.max(r,s,b),q=Math.min(r,s,b),B=(E+q)/2;if(E==q)c=S=0;else{var M=E-q;switch(S=B>.5?M/(2-E-q):M/(E+q),E){case r:c=(s-b)/M+(s<b?6:0);break;case s:c=(b-r)/M+2;break;case b:c=(r-s)/M+4}c/=6}return{h:c,s:S,l:B}}function _0(r,s,b){r=gn(r,255),s=gn(s,255),b=gn(b,255);var c,S,E=Math.max(r,s,b),q=Math.min(r,s,b),B=E,M=E-q;if(S=E===0?0:M/E,E==q)c=0;else{switch(E){case r:c=(s-b)/M+(s<b?6:0);break;case s:c=(b-r)/M+2;break;case b:c=(r-s)/M+4}c/=6}return{h:c,s:S,v:B}}function E0(r,s,b,c){var S=[Aa(Math.round(r).toString(16)),Aa(Math.round(s).toString(16)),Aa(Math.round(b).toString(16))];return c&&S[0].charAt(0)==S[0].charAt(1)&&S[1].charAt(0)==S[1].charAt(1)&&S[2].charAt(0)==S[2].charAt(1)?S[0].charAt(0)+S[1].charAt(0)+S[2].charAt(0):S.join("")}function M0(r,s,b,c){return[Aa(U0(c)),Aa(Math.round(r).toString(16)),Aa(Math.round(s).toString(16)),Aa(Math.round(b).toString(16))].join("")}function g1(r,s){s=s===0?0:s||10;var b=Y(r).toHsl();return b.s-=s/100,b.s=$i(b.s),Y(b)}function y1(r,s){s=s===0?0:s||10;var b=Y(r).toHsl();return b.s+=s/100,b.s=$i(b.s),Y(b)}function x1(r){return Y(r).desaturate(100)}function S1(r,s){s=s===0?0:s||10;var b=Y(r).toHsl();return b.l+=s/100,b.l=$i(b.l),Y(b)}function O1(r,s){s=s===0?0:s||10;var b=Y(r).toRgb();return b.r=Math.max(0,Math.min(255,b.r-Math.round(-s/100*255))),b.g=Math.max(0,Math.min(255,b.g-Math.round(-s/100*255))),b.b=Math.max(0,Math.min(255,b.b-Math.round(-s/100*255))),Y(b)}function z1(r,s){s=s===0?0:s||10;var b=Y(r).toHsl();return b.l-=s/100,b.l=$i(b.l),Y(b)}function T1(r,s){var b=Y(r).toHsl(),c=(b.h+s)%360;return b.h=c<0?360+c:c,Y(b)}function A1(r){var s=Y(r).toHsl();return s.h=(s.h+180)%360,Y(s)}function D0(r,s){if(isNaN(s)||s<=0)throw new Error("Argument to polyad must be a positive number");for(var b=Y(r).toHsl(),c=[Y(r)],S=360/s,E=1;E<s;E++)c.push(Y({h:(b.h+E*S)%360,s:b.s,l:b.l}));return c}function _1(r){var s=Y(r).toHsl(),b=s.h;return[Y(r),Y({h:(b+72)%360,s:s.s,l:s.l}),Y({h:(b+216)%360,s:s.s,l:s.l})]}function E1(r,s,b){s=s||6,b=b||30;var c=Y(r).toHsl(),S=360/b,E=[Y(r)];for(c.h=(c.h-(S*s>>1)+720)%360;--s;)c.h=(c.h+S)%360,E.push(Y(c));return E}function M1(r,s){s=s||6;for(var b=Y(r).toHsv(),c=b.h,S=b.s,E=b.v,q=[],B=1/s;s--;)q.push(Y({h:c,s:S,v:E})),E=(E+B)%1;return q}Y.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,s,b,c=this.toRgb();return r=c.r/255,s=c.g/255,b=c.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4))},setAlpha:function(r){return this._a=R0(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=_0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=_0(this._r,this._g,this._b),s=Math.round(360*r.h),b=Math.round(100*r.s),c=Math.round(100*r.v);return this._a==1?"hsv("+s+", "+b+"%, "+c+"%)":"hsva("+s+", "+b+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var r=A0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=A0(this._r,this._g,this._b),s=Math.round(360*r.h),b=Math.round(100*r.s),c=Math.round(100*r.l);return this._a==1?"hsl("+s+", "+b+"%, "+c+"%)":"hsla("+s+", "+b+"%, "+c+"%, "+this._roundA+")"},toHex:function(r){return E0(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(s,b,c,S,E){var q=[Aa(Math.round(s).toString(16)),Aa(Math.round(b).toString(16)),Aa(Math.round(c).toString(16)),Aa(U0(S))];return E&&q[0].charAt(0)==q[0].charAt(1)&&q[1].charAt(0)==q[1].charAt(1)&&q[2].charAt(0)==q[2].charAt(1)&&q[3].charAt(0)==q[3].charAt(1)?q[0].charAt(0)+q[1].charAt(0)+q[2].charAt(0)+q[3].charAt(0):q.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*gn(this._r,255))+"%",g:Math.round(100*gn(this._g,255))+"%",b:Math.round(100*gn(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*gn(this._r,255))+"%, "+Math.round(100*gn(this._g,255))+"%, "+Math.round(100*gn(this._b,255))+"%)":"rgba("+Math.round(100*gn(this._r,255))+"%, "+Math.round(100*gn(this._g,255))+"%, "+Math.round(100*gn(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(D1[E0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var s="#"+M0(this._r,this._g,this._b,this._a),b=s,c=this._gradientType?"GradientType = 1, ":"";if(r){var S=Y(r);b="#"+M0(S._r,S._g,S._b,S._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+s+",endColorstr="+b+")"},toString:function(r){var s=!!r;r=r||this._format;var b=!1,c=this._a<1&&this._a>=0;return s||!c||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(b=this.toRgbString()),r==="prgb"&&(b=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(b=this.toHexString()),r==="hex3"&&(b=this.toHexString(!0)),r==="hex4"&&(b=this.toHex8String(!0)),r==="hex8"&&(b=this.toHex8String()),r==="name"&&(b=this.toName()),r==="hsl"&&(b=this.toHslString()),r==="hsv"&&(b=this.toHsvString()),b||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Y(this.toString())},_applyModification:function(r,s){var b=r.apply(null,[this].concat([].slice.call(s)));return this._r=b._r,this._g=b._g,this._b=b._b,this.setAlpha(b._a),this},lighten:function(){return this._applyModification(S1,arguments)},brighten:function(){return this._applyModification(O1,arguments)},darken:function(){return this._applyModification(z1,arguments)},desaturate:function(){return this._applyModification(g1,arguments)},saturate:function(){return this._applyModification(y1,arguments)},greyscale:function(){return this._applyModification(x1,arguments)},spin:function(){return this._applyModification(T1,arguments)},_applyCombination:function(r,s){return r.apply(null,[this].concat([].slice.call(s)))},analogous:function(){return this._applyCombination(E1,arguments)},complement:function(){return this._applyCombination(A1,arguments)},monochromatic:function(){return this._applyCombination(M1,arguments)},splitcomplement:function(){return this._applyCombination(_1,arguments)},triad:function(){return this._applyCombination(D0,[3])},tetrad:function(){return this._applyCombination(D0,[4])}},Y.fromRatio=function(r,s){if(Wi(r)=="object"){var b={};for(var c in r)r.hasOwnProperty(c)&&(b[c]=c==="a"?r[c]:Re(r[c]));r=b}return Y(r,s)},Y.equals=function(r,s){return!(!r||!s)&&Y(r).toRgbString()==Y(s).toRgbString()},Y.random=function(){return Y.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Y.mix=function(r,s,b){b=b===0?0:b||50;var c=Y(r).toRgb(),S=Y(s).toRgb(),E=b/100;return Y({r:(S.r-c.r)*E+c.r,g:(S.g-c.g)*E+c.g,b:(S.b-c.b)*E+c.b,a:(S.a-c.a)*E+c.a})},Y.readability=function(r,s){var b=Y(r),c=Y(s);return(Math.max(b.getLuminance(),c.getLuminance())+.05)/(Math.min(b.getLuminance(),c.getLuminance())+.05)},Y.isReadable=function(r,s,b){var c,S,E=Y.readability(r,s);switch(S=!1,(c=function(q){var B,M;return B=((q=q||{level:"AA",size:"small"}).level||"AA").toUpperCase(),M=(q.size||"small").toLowerCase(),B!=="AA"&&B!=="AAA"&&(B="AA"),M!=="small"&&M!=="large"&&(M="small"),{level:B,size:M}}(b)).level+c.size){case"AAsmall":case"AAAlarge":S=E>=4.5;break;case"AAlarge":S=E>=3;break;case"AAAsmall":S=E>=7}return S},Y.mostReadable=function(r,s,b){var c,S,E,q,B=null,M=0;S=(b=b||{}).includeFallbackColors,E=b.level,q=b.size;for(var x=0;x<s.length;x++)(c=Y.readability(r,s[x]))>M&&(M=c,B=Y(s[x]));return Y.isReadable(r,B,{level:E,size:q})||!S?B:(b.includeFallbackColors=!1,Y.mostReadable(r,["#fff","#000"],b))};var xr=Y.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},D1=Y.hexNames=function(r){var s={};for(var b in r)r.hasOwnProperty(b)&&(s[r[b]]=b);return s}(xr);function R0(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function gn(r,s){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(r)&&(r="100%");var b=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(r);return r=Math.min(s,Math.max(0,parseFloat(r))),b&&(r=parseInt(r*s,10)/100),Math.abs(r-s)<1e-6?1:r%s/parseFloat(s)}function $i(r){return Math.min(1,Math.max(0,r))}function sa(r){return parseInt(r,16)}function Aa(r){return r.length==1?"0"+r:""+r}function Re(r){return r<=1&&(r=100*r+"%"),r}function U0(r){return Math.round(255*parseFloat(r)).toString(16)}function q0(r){return sa(r)/255}var St,Ki,Ji,Ta=(Ki="[\\s|\\(]+("+(St="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+St+")[,|\\s]+("+St+")\\s*\\)?",Ji="[\\s|\\(]+("+St+")[,|\\s]+("+St+")[,|\\s]+("+St+")[,|\\s]+("+St+")\\s*\\)?",{CSS_UNIT:new RegExp(St),rgb:new RegExp("rgb"+Ki),rgba:new RegExp("rgba"+Ji),hsl:new RegExp("hsl"+Ki),hsla:new RegExp("hsla"+Ji),hsv:new RegExp("hsv"+Ki),hsva:new RegExp("hsva"+Ji),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Wa(r){return!!Ta.CSS_UNIT.exec(r)}var q1=function(r,s){var b=(typeof r=="string"?parseInt(r):r)||0;if(b>=-5&&b<=5){var c=b,S=parseFloat(s),E=S+c*(S/5)*-1;return(E==0||E<=Number.EPSILON)&&(E=.1),{animationPeriod:E+"s"}}return{animationPeriod:s}},R1=function(r,s){var b=r||{},c="";switch(s){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var S={};if(b.fontSize){var E=b.fontSize;S=function(q,B){var M={};for(var x in q)Object.prototype.hasOwnProperty.call(q,x)&&B.indexOf(x)<0&&(M[x]=q[x]);if(q!=null&&typeof Object.getOwnPropertySymbols=="function"){var N=0;for(x=Object.getOwnPropertySymbols(q);N<x.length;N++)B.indexOf(x[N])<0&&Object.prototype.propertyIsEnumerable.call(q,x[N])&&(M[x[N]]=q[x[N]])}return M}(b,["fontSize"]),c=E}return{fontSize:c,styles:S}},U1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},N1=function(r){var s=r.className,b=r.text,c=r.textColor,S=r.staticText,E=r.style;return b?Zt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(s||"").trim(),style:Ua(Ua(Ua({},S&&U1),c&&{color:c,mixBlendMode:"unset"}),E&&E)},typeof b=="string"&&b.length?b:"loading"):null},H1="rgb(50, 205, 50)";function k1(r,s){s===void 0&&(s=0);var b=[];return function c(S,E){return E===void 0&&(E=0),b.push.apply(b,S),b.length<E&&c(b,E),b.slice(0,E)}(r,s)}Hn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var Rl=Y(H1).toRgb(),Qt=Array.from({length:4},function(r,s){return"--atom-phase".concat(s+1,"-rgb")}),Y1=function(r){var s,b=R1(r==null?void 0:r.style,r==null?void 0:r.size),c=b.styles,S=b.fontSize,E=r==null?void 0:r.easing,q=q1(r==null?void 0:r.speedPlus,"1s").animationPeriod,B=function(M){var x={};if(M instanceof Array){for(var N=k1(M,Qt.length),L=0;L<N.length&&!(L>=4);L++)try{if(!(D=Y(N[L])).isValid())throw new Error("invalid color");var F=(w=D.toRgb()).r,bn=w.g,X=w.b;x[Qt[L]]="".concat(F,", ").concat(bn,", ").concat(X)}catch{F=Rl.r,bn=Rl.g,X=Rl.b,x[Qt[L]]="".concat(F,", ").concat(bn,", ").concat(X),console.warn("Possibly an invalid color( ".concat(N[L]," ) passed to Atom indicator!"))}return x}try{if(typeof M!="string")throw new Error("Color String expected");var D;if(!(D=Y(M)).isValid())throw new Error("Invalid color");var w;for(F=(w=D.toRgb()).r,bn=w.g,X=w.b,L=0;L<Qt.length;L++)x[Qt[L]]="".concat(F,", ").concat(bn,", ").concat(X)}catch(kn){for(kn instanceof Error?console.warn("[".concat(kn.message,']: Received "').concat(typeof M,'" instead with value, ').concat(JSON.stringify(M))):console.warn("".concat(JSON.stringify(M)," received in <Atom /> indicator cannot be processed. Using default instead!")),L=0;L<Qt.length;L++)F=Rl.r,bn=Rl.g,X=Rl.b,x[Qt[L]]="".concat(F,", ").concat(bn,", ").concat(X)}return x}((s=r==null?void 0:r.color)!==null&&s!==void 0?s:"");return Zt.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",style:Ua(Ua(Ua(Ua(Ua({},S&&{fontSize:S}),q&&{"--rli-animation-duration":q}),E&&{"--rli-animation-function":E}),B),c),role:"status","aria-live":"polite","aria-label":"Loading"},Zt.createElement("span",{className:"rli-d-i-b atom-indicator"},Zt.createElement("span",{className:"rli-d-i-b electron-orbit"}),Zt.createElement("span",{className:"rli-d-i-b electron-orbit"}),Zt.createElement("span",{className:"rli-d-i-b electron-orbit"})),Zt.createElement(N1,{className:"atom-text",staticText:!0,text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor}))};Hn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--commet-phase".concat(s+1,"-color")});Hn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--OP-annulus-phase".concat(s+1,"-color")});function yr(r){return r&&r.Math===Math&&r}Hn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);yr(typeof window=="object"&&window)||yr(typeof self=="object"&&self)||yr(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(r,s){return"--OP-dotted-phase".concat(s+1,"-color")});Hn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--OP-spokes-phase".concat(s+1,"-color")});Hn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(r,s){return"--OP-annulus-dual-sectors-phase".concat(s+1,"-color")});Hn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return["--OP-annulus-track-phase".concat(s+1,"-color"),"--OP-annulus-sector-phase".concat(s+1,"-color")]});Hn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--four-square-phase".concat(s+1,"-color")});Hn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--mosaic-phase".concat(s+1,"-color")});Hn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--riple-phase".concat(s+1,"-color")});Hn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--TD-pulsate-phase".concat(s+1,"-color")});Hn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--TD-brick-stack-phase".concat(s+1,"-color")});Hn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--TD-bob-phase".concat(s+1,"-color")});Hn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--TD-bounce-phase".concat(s+1,"-color")});Hn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--shape-phase".concat(s+1,"-color")});Hn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--trophySpin-phase".concat(s+1,"-color")});Hn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--slab-phase".concat(s+1,"-color")});Hn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(r,s){return"--life-line-phase".concat(s+1,"-color")});function C1({account:r,loading:s,errorMsg:b}){const{name:c,bio:S,avatar_url:E}=r||{};return zn.jsx("div",{className:"rounded-2xl bg-gray-200 p-4 lg:min-w-[800px] max-w-[800px] flex justify-center",children:s?zn.jsx(Y1,{color:"#0632bf",size:"large"}):r?zn.jsxs("div",{className:"flex gap-6 items-center justify-center",children:[zn.jsx("img",{src:E,alt:"photo",className:"rounded-full size-64 border-3 border-blue"}),zn.jsxs("div",{className:"flex gap-2 flex-col w-2/4 h-[120px] overflow-hidden",children:[zn.jsx("h2",{className:"text-blue text-2xl font-semibold",children:c}),zn.jsx("p",{className:"line-clamp-3",title:S,children:S})]})]}):zn.jsx("p",{className:"text-red-500 break-words text-center",children:b})})}function B1(){const[r,s]=wt.useState(null),[b,c]=wt.useState(""),[S,E]=wt.useState(!1),[q,B]=wt.useState(!1);return zn.jsxs("main",{className:"min-h-screen mx-auto flex flex-col  p-16 px-30 items-center gap-8",children:[zn.jsx(h1,{}),zn.jsx(m1,{setAccount:s,setErrorMsg:c,setLoading:E,setTriggered:B}),q&&zn.jsx(C1,{account:r,loading:S,errorMsg:b})]})}s1.createRoot(document.getElementById("root")).render(zn.jsx(wt.StrictMode,{children:zn.jsx(B1,{})}));
