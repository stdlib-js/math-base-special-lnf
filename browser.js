// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"";n=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,e,u,i,a;if(null==n)return r.call(n);e=n[f],a=f,t=null!=(i=n)&&o.call(i,a);try{n[f]=void 0}catch(t){return r.call(n)}return u=r.call(n),t?n[f]=e:delete n[f],u}:function(n){return r.call(n)};var u=n,i="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,l=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c([1,3.14,-3.14,5e40]),r=t,n=(i&&r instanceof Float32Array||"[object Float32Array]"===u(r))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===a}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")},p="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(p&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")},w=new l(1),A=new m(w.buffer);function s(n){return w[0]=n,A[0]}var v=new m(1),h=new l(v.buffer),S=new l(1);new m(S.buffer)[0]=4286578688;var F=S[0],g=8388607,U="function"==typeof Math.fround?Math.fround:null,T=new l(1),j="function"==typeof U?U:function(n){return T[0]=n,T[0]},I=.69313812256,N=90580006145e-16;return function(n){var t,r,o,e,f,u,i,a,c,y,l,p,d,b;return 0===n?F:function(n){return n!=n}(n)||n<0?NaN:(u=0,(r=s(n=j(n)))<8388608&&(u=j(u-25),r=s(n=j(33554432*n))),r>=2139095040?j(n+n):(u=j(u+j((r>>23)-127)),c=8388608&j(4913952+(r&=g)),b=r|1065353216^c,v[0]=b,n=h[0],u=j(u+(c>>23)),a=j(n-1),(g&j(32768+r))<49152?0===a?0===u?0:j(j((f=u)*I)+j(f*N)):(i=j(j(a*a)*j(.5-j(.3333333333333333*a))),j(0===u?a-i:j((f=u)*I)-j(j(i-j(f*N))-a))):(l=j(a/j(2+a)),f=u,d=j(l*l),c=j(r-3187664),p=j(d*d),y=j(3523208-r),e=j(p*j(function(n){return 0===n?.40000972152:.40000972152+.24279078841*n}(p))),o=j(d*j(function(n){return 0===n?.66666662693:.66666662693+.28498786688*n}(p))),c|=y,i=j(o+e),c>0?(t=j(.5*j(a*a)),j(0===u?a-j(t-j(l*j(t+i))):j(f*I)-j(j(t-j(l*j(t+i)+j(f*N)))-a))):j(0===u?a-j(l*j(a-i)):j(f*I)-j(j(j(l*j(a-i))-j(f*N))-a)))))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).lnf=t();
//# sourceMappingURL=browser.js.map
