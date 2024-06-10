"use strict";var _=function(e,v){return function(){return v||e((v={exports:{}}).exports,v),v.exports}};var A=_(function(w,T){
function d(e){return e===0?.40000972152:.40000972152+e*.24279078841}T.exports=d
});var F=_(function(z,I){
function P(e){return e===0?.66666662693:.66666662693+e*.28498786688}I.exports=P
});var S=_(function(B,y){
var L=require('@stdlib/number-float32-base-to-word/dist'),W=require('@stdlib/number-float32-base-from-word/dist'),k=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/constants-float32-ninf/dist'),D=require('@stdlib/constants-float32-exponent-mask/dist'),H=require('@stdlib/constants-float32-exponent-bias/dist'),E=require('@stdlib/constants-float32-significand-mask/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),K=A(),M=F(),q=.69313812256,l=90580006145e-16,R=33554432,X=.3333333333333333;function b(e){var v,t,c,p,u,i,f,a,o,O,n,s,N;return e===0?m:k(e)||e<0?NaN:(e=r(e),t=L(e),i=0,t<8388608&&(i=r(i-25),e=r(e*R),t=L(e)),t>=D?r(e+e):(i=r(i+r((t>>23)-H)),t&=E,o=r(t+4913952)&8388608,e=W(t|o^1065353216),i=r(i+(o>>23)),a=r(e-1),(E&r(32768+t))<49152?a===0?i===0?0:(u=i,r(r(u*q)+r(u*l))):(f=r(r(a*a)*r(.5-r(X*a))),i===0?r(a-f):(u=i,r(r(u*q)-r(r(f-r(u*l))-a)))):(n=r(a/r(2+a)),u=i,N=r(n*n),o=r(t-3187664),s=r(N*N),O=r(3523208-t),p=r(s*r(K(s))),c=r(N*r(M(s))),o|=O,f=r(c+p),o>0?(v=r(.5*r(a*a)),r(i===0?a-r(v-r(n*r(v+f))):r(u*q)-r(r(v-r(n*r(v+f)+r(u*l)))-a))):r(i===0?a-r(n*r(a-f)):r(u*q)-r(r(r(n*r(a-f))-r(u*l))-a)))))}y.exports=b
});var h=S();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
