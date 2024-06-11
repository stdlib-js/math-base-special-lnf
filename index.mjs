// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-mask@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-significand-mask@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";var d=.69313812256,a=90580006145e-16;function l(l){var f,j,p,v,h,b,c,x,u,g,k,w;return 0===l?e:n(l)||l<0?NaN:(l=o(l),h=0,(j=t(l))<8388608&&(h-=25,l=o(33554432*l),j=t(l)),j>=i?o(l+l):(h=o(h+o((j>>23)-r)),l=s((j&=m)|1065353216^(x=j+4913952&8388608)),h=o(h+(x>>23)),c=o(l-1),(m&o(32768+j))<49152?0===c?0===h?0:o(o(h*d)+o(h*a)):(b=o(o(c*c)*o(.5-o(.3333333333333333*c))),o(0===h?c-b:o(h*d)-o(o(b-o(h*a))-c))):(g=o(c/o(2+c)),w=o(g*g),x=j-3187664,k=o(w*w),u=3523208-j,v=o(k*o(function(t){return 0===t?.40000972152:.40000972152+.24279078841*t}(k))),p=o(w*o(function(t){return 0===t?.66666662693:.66666662693+.28498786688*t}(k))),x|=u,b=o(p+v),x>0?(f=o(.5*o(c*c)),o(0===h?c-o(f-o(g*o(f+b))):o(h*d)-o(o(f-o(g*o(f+b)+o(h*a)))-c))):o(0===h?c-o(g*o(c-b)):o(h*d)-o(o(o(g*o(c-b))-o(h*a))-c)))))}export{l as default};
//# sourceMappingURL=index.mjs.map
