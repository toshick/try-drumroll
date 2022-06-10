import{_ as X,o as I,c as D,a as $,F as qe,r as Ge,n as ze,t as Ke,b as G,p as We,d as Ze}from"./entry-3ada228b.mjs";function de(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var Je=function(){},ae=function(){};const z=(e,t,n)=>Math.min(Math.max(n,e),t),P=.001,Qe=.01,ce=10,Xe=.05,Ye=1;function et({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,a;Je(e<=ce*1e3);let o=1-t;o=z(Xe,Ye,o),e=z(Qe,ce,e/1e3),o<1?(r=i=>{const u=i*o,m=u*e,x=u-n,_=K(i,o),M=Math.exp(-m);return P-x/_*M},a=i=>{const m=i*o*e,x=m*n+n,_=Math.pow(o,2)*Math.pow(i,2)*e,M=Math.exp(-m),O=K(Math.pow(i,2),o);return(-r(i)+P>0?-1:1)*((x-_)*M)/O}):(r=i=>{const u=Math.exp(-i*e),m=(i-n)*e+1;return-P+u*m},a=i=>{const u=Math.exp(-i*e),m=(n-i)*(e*e);return u*m});const c=5/e,l=nt(r,a,c);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const i=Math.pow(l,2)*s;return{stiffness:i,damping:o*2*Math.sqrt(s*i),duration:e}}}const tt=12;function nt(e,t,n){let s=n;for(let r=1;r<tt;r++)s=s-e(s)/t(s);return s}function K(e,t){return e*Math.sqrt(1-t*t)}const st=["duration","bounce"],rt=["stiffness","damping","mass"];function le(e,t){return t.some(n=>e[n]!==void 0)}function ot(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!le(e,rt)&&le(e,st)){const n=et(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Y(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,a=de(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:c,damping:l,mass:i,velocity:u,duration:m,isResolvedFromDuration:x}=ot(a),_=ie,M=ie;function O(){const b=u?-(u/1e3):0,h=n-t,d=l/(2*Math.sqrt(c*i)),p=Math.sqrt(c/i)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),d<1){const f=K(p,d);_=g=>{const y=Math.exp(-d*p*g);return n-y*((b+d*p*h)/f*Math.sin(f*g)+h*Math.cos(f*g))},M=g=>{const y=Math.exp(-d*p*g);return d*p*y*(Math.sin(f*g)*(b+d*p*h)/f+h*Math.cos(f*g))-y*(Math.cos(f*g)*(b+d*p*h)-f*h*Math.sin(f*g))}}else if(d===1)_=f=>n-Math.exp(-p*f)*(h+(b+p*h)*f);else{const f=p*Math.sqrt(d*d-1);_=g=>{const y=Math.exp(-d*p*g),S=Math.min(f*g,300);return n-y*((b+d*p*h)*Math.sinh(S)+f*h*Math.cosh(S))/f}}}return O(),{next:b=>{const h=_(b);if(x)o.done=b>=m;else{const d=M(b)*1e3,p=Math.abs(d)<=s,f=Math.abs(n-h)<=r;o.done=p&&f}return o.value=o.done?n:h,o},flipTarget:()=>{u=-u,[t,n]=[n,t],O()}}}Y.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ie=e=>0,he=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},ee=(e,t,n)=>-n*e+n*t+e,ge=(e,t)=>n=>Math.max(Math.min(n,t),e),N=e=>e%1?Number(e.toFixed(5)):e,v=/(-)?([\d]*\.?[\d])+/g,W=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,at=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function E(e){return typeof e=="string"}const k={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},be=Object.assign(Object.assign({},k),{transform:ge(0,1)});Object.assign(Object.assign({},k),{default:1});const ct=e=>({test:t=>E(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),F=ct("%");Object.assign(Object.assign({},F),{parse:e=>F.parse(e)/100,transform:e=>F.transform(e*100)});const te=(e,t)=>n=>Boolean(E(n)&&at.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),ye=(e,t,n)=>s=>{if(!E(s))return s;const[r,a,o,c]=s.match(v);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(o),alpha:c!==void 0?parseFloat(c):1}},T={test:te("hsl","hue"),parse:ye("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+F.transform(N(t))+", "+F.transform(N(n))+", "+N(be.transform(s))+")"},lt=ge(0,255),U=Object.assign(Object.assign({},k),{transform:e=>Math.round(lt(e))}),R={test:te("rgb","red"),parse:ye("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+U.transform(e)+", "+U.transform(t)+", "+U.transform(n)+", "+N(be.transform(s))+")"};function it(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Z={test:te("#"),parse:it,transform:R.transform},B={test:e=>R.test(e)||Z.test(e)||T.test(e),parse:e=>R.test(e)?R.parse(e):T.test(e)?T.parse(e):Z.parse(e),transform:e=>E(e)?e:e.hasOwnProperty("red")?R.transform(e):T.transform(e)},xe="${c}",_e="${n}";function ut(e){var t,n,s,r;return isNaN(e)&&E(e)&&((n=(t=e.match(v))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(W))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function Me(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(W);s&&(n=s.length,e=e.replace(W,xe),t.push(...s.map(B.parse)));const r=e.match(v);return r&&(e=e.replace(v,_e),t.push(...r.map(k.parse))),{values:t,numColors:n,tokenised:e}}function Oe(e){return Me(e).values}function Re(e){const{values:t,numColors:n,tokenised:s}=Me(e),r=t.length;return a=>{let o=s;for(let c=0;c<r;c++)o=o.replace(c<n?xe:_e,c<n?B.transform(a[c]):N(a[c]));return o}}const ft=e=>typeof e=="number"?0:e;function pt(e){const t=Oe(e);return Re(e)(t.map(ft))}const Te={test:ut,parse:Oe,createTransformer:Re,getAnimatableNone:pt};function q(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ue({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,a=0,o=0;if(!t)r=a=o=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;r=q(l,c,e+1/3),a=q(l,c,e),o=q(l,c,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:s}}const mt=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},dt=[Z,R,T],fe=e=>dt.find(t=>t.test(e)),Se=(e,t)=>{let n=fe(e),s=fe(t),r=n.parse(e),a=s.parse(t);n===T&&(r=ue(r),n=R),s===T&&(a=ue(a),s=R);const o=Object.assign({},r);return c=>{for(const l in o)l!=="alpha"&&(o[l]=mt(r[l],a[l],c));return o.alpha=ee(r.alpha,a.alpha,c),n.transform(o)}},ht=e=>typeof e=="number",gt=(e,t)=>n=>t(e(n)),Ie=(...e)=>e.reduce(gt);function De(e,t){return ht(e)?n=>ee(e,t,n):B.test(e)?Se(e,t):Fe(e,t)}const Ne=(e,t)=>{const n=[...e],s=n.length,r=e.map((a,o)=>De(a,t[o]));return a=>{for(let o=0;o<s;o++)n[o]=r[o](a);return n}},bt=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=De(e[r],t[r]));return r=>{for(const a in s)n[a]=s[a](r);return n}};function pe(e){const t=Te.parse(e),n=t.length;let s=0,r=0,a=0;for(let o=0;o<n;o++)s||typeof t[o]=="number"?s++:t[o].hue!==void 0?a++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:a}}const Fe=(e,t)=>{const n=Te.createTransformer(t),s=pe(e),r=pe(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Ie(Ne(s.parsed,r.parsed),n):o=>`${o>0?t:e}`},yt=(e,t)=>n=>ee(e,t,n);function xt(e){if(typeof e=="number")return yt;if(typeof e=="string")return B.test(e)?Se:Fe;if(Array.isArray(e))return Ne;if(typeof e=="object")return bt}function _t(e,t,n){const s=[],r=n||xt(e[0]),a=e.length-1;for(let o=0;o<a;o++){let c=r(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]:t;c=Ie(l,c)}s.push(c)}return s}function Mt([e,t],[n]){return s=>n(he(e,t,s))}function Ot(e,t){const n=e.length,s=n-1;return r=>{let a=0,o=!1;if(r<=e[0]?o=!0:r>=e[s]&&(a=s-1,o=!0),!o){let l=1;for(;l<n&&!(e[l]>r||l===s);l++);a=l-1}const c=he(e[a],e[a+1],r);return t[a](c)}}function je(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const a=e.length;ae(a===t.length),ae(!s||!Array.isArray(s)||s.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=_t(t,s,r),c=a===2?Mt(e,o):Ot(e,o);return n?l=>c(z(e[0],e[a-1],l)):c}const H=e=>t=>1-e(1-t),ne=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Rt=e=>t=>Math.pow(t,e),we=e=>t=>t*t*((e+1)*t-e),Tt=e=>{const t=we(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Ee=1.525,St=4/11,It=8/11,Dt=9/10,Ce=Rt(2);H(Ce);const Ae=ne(Ce),Nt=e=>1-Math.sin(Math.acos(e)),Ft=H(Nt);ne(Ft);const $e=we(Ee);H($e);ne($e);Tt(Ee);const jt=4356/361,wt=35442/1805,Et=16061/1805,Ct=e=>{if(e===1||e===0)return e;const t=e*e;return e<St?7.5625*t:e<It?9.075*t-9.9*e+3.4:e<Dt?jt*t-wt*e+Et:10.8*e*e-20.52*e+10.72};H(Ct);function At(e,t){return e.map(()=>t||Ae).splice(0,e.length-1)}function $t(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function vt(e,t){return e.map(n=>n*t)}function A({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const a={done:!1,value:e},o=Array.isArray(t)?t:[e,t],c=vt(s&&s.length===o.length?s:$t(o),r);function l(){return je(c,o,{ease:Array.isArray(n)?n:At(o,n)})}let i=l();return{next:u=>(a.value=i(u),a.done=u>=r,a),flipTarget:()=>{o.reverse(),i=l()}}}function kt({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:a}){const o={done:!1,value:t};let c=n*e;const l=t+c,i=a===void 0?l:a(l);return i!==l&&(c=i-t),{next:u=>{const m=-c*Math.exp(-u/s);return o.done=!(m>r||m<-r),o.value=o.done?i:i+m,o},flipTarget:()=>{}}}const me={keyframes:A,spring:Y,decay:kt};function Bt(e){if(Array.isArray(e.to))return A;if(me[e.type])return me[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?A:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Y:A}const ve=1/60*1e3,Ht=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),ke=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Ht()),ve);function Lt(e){let t=[],n=[],s=0,r=!1,a=!1;const o=new WeakSet,c={schedule:(l,i=!1,u=!1)=>{const m=u&&r,x=m?t:n;return i&&o.add(l),x.indexOf(l)===-1&&(x.push(l),m&&r&&(s=t.length)),l},cancel:l=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1),o.delete(l)},process:l=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let i=0;i<s;i++){const u=t[i];u(l),o.has(u)&&(c.schedule(u),e())}r=!1,a&&(a=!1,c.process(l))}};return c}const Vt=40;let J=!0,w=!1,Q=!1;const j={delta:0,timestamp:0},C=["read","update","preRender","render","postRender"],L=C.reduce((e,t)=>(e[t]=Lt(()=>w=!0),e),{}),Pt=C.reduce((e,t)=>{const n=L[t];return e[t]=(s,r=!1,a=!1)=>(w||Gt(),n.schedule(s,r,a)),e},{}),Ut=C.reduce((e,t)=>(e[t]=L[t].cancel,e),{});C.reduce((e,t)=>(e[t]=()=>L[t].process(j),e),{});const qt=e=>L[e].process(j),Be=e=>{w=!1,j.delta=J?ve:Math.max(Math.min(e-j.timestamp,Vt),1),j.timestamp=e,Q=!0,C.forEach(qt),Q=!1,w&&(J=!1,ke(Be))},Gt=()=>{w=!0,J=!0,Q||ke(Be)};function He(e,t,n=0){return e-t-n}function zt(e,t,n=0,s=!0){return s?He(t+-e,t,n):t-(e-t)+n}function Kt(e,t,n,s){return s?e>=t+n:e<=-n}const Wt=e=>{const t=({delta:n})=>e(n);return{start:()=>Pt.update(t,!0),stop:()=>Ut.update(t)}};function Zt(e){var t,n,{from:s,autoplay:r=!0,driver:a=Wt,elapsed:o=0,repeat:c=0,repeatType:l="loop",repeatDelay:i=0,onPlay:u,onStop:m,onComplete:x,onRepeat:_,onUpdate:M}=e,O=de(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=O,h,d=0,p=O.duration,f,g=!1,y=!0,S;const se=Bt(O);!((n=(t=se).needsInterpolation)===null||n===void 0)&&n.call(t,s,b)&&(S=je([0,100],[s,b],{clamp:!1}),s=0,b=100);const re=se(Object.assign(Object.assign({},O),{from:s,to:b}));function Le(){d++,l==="reverse"?(y=d%2===0,o=zt(o,p,i,y)):(o=He(o,p,i),l==="mirror"&&re.flipTarget()),g=!1,_&&_()}function Ve(){h.stop(),x&&x()}function Pe(V){if(y||(V=-V),o+=V,!g){const oe=re.next(Math.max(0,o));f=oe.value,S&&(f=S(f)),g=y?oe.done:o<=0}M==null||M(f),g&&(d===0&&(p!=null||(p=o)),d<c?Kt(o,p,i,y)&&Le():Ve())}function Ue(){u==null||u(),h=a(Pe),h.start()}return r&&Ue(),{stop:()=>{m==null||m(),h.stop()}}}const Jt={width:56,height:72},Qt={props:{num:{type:Number,require:!0},index:{type:Number,require:!0}},data(){return{panelNums:[],pos:"100%"}},created(){const e=[];for(let t=this.num;t<61;t+=1)e.push(t%10);this.panelNums=e},mounted(){this.startRoll()},methods:{startRoll(){Zt({from:-Jt.height*(this.panelNums.length-1),to:0,duration:3e3,elapsed:-1e3*this.index,ease:[Ae],onUpdate:e=>{this.pos=`${e}px`}})}}},Xt={class:"Panels"};function Yt(e,t,n,s,r,a){return I(),D("div",Xt,[$("ul",{class:"Panels__List",style:ze({top:r.pos})},[(I(!0),D(qe,null,Ge(r.panelNums,(o,c)=>(I(),D("li",{class:"Panels__Num",key:c},[$("p",null,Ke(o),1)]))),128))],4)])}var en=X(Qt,[["render",Yt],["__scopeId","data-v-3a733773"]]);const tn={},nn={class:"DrumRoll"};function sn(e,t){const n=en;return I(),D("article",nn,[G(n,{class:"DrumRoll__Item",num:4,index:1}),G(n,{num:6,index:2})])}var rn=X(tn,[["render",sn],["__scopeId","data-v-0afd942c"]]);const on={},an=e=>(We("data-v-1bd96a3c"),e=e(),Ze(),e),cn=an(()=>$("h1",null,"Index page",-1));function ln(e,t){const n=rn;return I(),D("main",null,[cn,$("section",null,[G(n)])])}var fn=X(on,[["render",ln],["__scopeId","data-v-1bd96a3c"]]);export{fn as default};
