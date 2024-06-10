"use strict";var l=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var T=l(function(k,O){
function S(e){return e===0?.40000972152:.40000972152+e*.24279078841}O.exports=S
});var I=l(function(w,A){
function P(e){return e===0?.66666662693:.66666662693+e*.28498786688}A.exports=P
});var y=l(function(z,E){
var F=require('@stdlib/number-float32-base-to-word/dist'),W=require('@stdlib/number-float32-base-from-word/dist'),d=require('@stdlib/math-base-assert-is-nanf/dist'),m=require('@stdlib/constants-float32-ninf/dist'),D=require('@stdlib/constants-float32-exponent-mask/dist'),H=require('@stdlib/constants-float32-exponent-bias/dist'),L=require('@stdlib/constants-float32-significand-mask/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),K=T(),M=I(),N=.69313812256,q=90580006145e-16,R=33554432,X=.3333333333333333;function b(e){var u,t,_,c,a,v,i,n,p,f,o,s;return e===0?m:d(e)||e<0?NaN:(e=r(e),t=F(e),a=0,t<8388608&&(a-=25,e=r(e*R),t=F(e)),t>=D?r(e+e):(a=r(a+r((t>>23)-H)),t&=L,n=t+4913952&8388608,e=W(t|n^1065353216),a=r(a+(n>>23)),i=r(e-1),(L&r(32768+t))<49152?i===0?a===0?0:r(r(a*N)+r(a*q)):(v=r(r(i*i)*r(.5-r(X*i))),r(a===0?i-v:r(a*N)-r(r(v-r(a*q))-i))):(f=r(i/r(2+i)),s=r(f*f),n=t-3187664,o=r(s*s),p=3523208-t,c=r(o*r(K(o))),_=r(s*r(M(o))),n|=p,v=r(_+c),n>0?(u=r(.5*r(i*i)),r(a===0?i-r(u-r(f*r(u+v))):r(a*N)-r(r(u-r(f*r(u+v)+r(a*q)))-i))):r(a===0?i-r(f*r(i-v)):r(a*N)-r(r(r(f*r(i-v))-r(a*q))-i)))))}E.exports=b
});var h=y();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
