import{S as A,i as P,s as V,a as x,k as f,N as C,h as o,c as y,l as v,m as k,n as c,b as w,F as G,O as M,A as S,q as $,r as j,E as F,D as m,U as L,P as N}from"../../../chunks/index-244a5079.js";import{f as O}from"../../../chunks/index-54a83811.js";function q(d,s,e){const l=d.slice();return l[1]=s[e],l}function D(d,s){let e,l,r,n,h=s[1].title+"",_,t,a,i,u;return{key:d,first:null,c(){e=f("a"),l=f("div"),r=f("div"),n=f("p"),_=$(h),t=x(),a=f("img"),u=x(),this.h()},l(g){e=v(g,"A",{href:!0,target:!0,class:!0});var p=k(e);l=v(p,"DIV",{class:!0});var E=k(l);r=v(E,"DIV",{class:!0});var b=k(r);n=v(b,"P",{class:!0});var I=k(n);_=j(I,h),I.forEach(o),t=y(b),a=v(b,"IMG",{class:!0,alt:!0,src:!0}),b.forEach(o),E.forEach(o),u=y(p),p.forEach(o),this.h()},h(){c(n,"class","text-lg md:text-xl 2xl:text-3xl font-bold"),c(a,"class","h-10 2xl:h-12"),c(a,"alt",s[1].title),F(a.src,i="/"+s[1].img)||c(a,"src",i),c(r,"class","flex flex-row gap-4 lg:gap-6 2xl:gap-8 justify-between items-center"),c(l,"class","card-body p-4 lg:p-6 2xl:p-8"),c(e,"href",s[1].url),c(e,"target","_blank"),c(e,"class","card bg-base-200 hover:ring-2 hover:ring-primary col-span-6 md:col-span-3 2xl:col-span-2"),this.first=e},m(g,p){w(g,e,p),m(e,l),m(l,r),m(r,n),m(n,_),m(r,t),m(r,a),m(e,u)},p(g,p){s=g},d(g){g&&o(e)}}}function R(d){let s,e,l=[],r=new Map,n,h=d[0];const _=t=>t[1].title;for(let t=0;t<h.length;t+=1){let a=q(d,h,t),i=_(a);r.set(i,l[t]=D(i,a))}return{c(){s=x(),e=f("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){C('[data-svelte="svelte-1dthbfl"]',document.head).forEach(o),s=y(t),e=v(t,"DIV",{class:!0});var i=k(e);for(let u=0;u<l.length;u+=1)l[u].l(i);i.forEach(o),this.h()},h(){document.title="Contact \u2022 Anhsirk0",c(e,"class","grid grid-cols-6 gap-4 lg:gap-6 2xl:gap-8 w-[86vw] lg:w-[66vw] xl:w-[70vw] mb-8 lg:my-0 lg:p-8 mt-4")},m(t,a){w(t,s,a),w(t,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(t,[a]){a&1&&(h=t[0],l=G(l,a,_,1,t,h,r,e,L,D,null,q))},i(t){n||M(()=>{n=N(e,O,{}),n.start()})},o:S,d(t){t&&o(s),t&&o(e);for(let a=0;a<l.length;a+=1)l[a].d()}}}function T(d){return[[{title:"Email",img:"mail.png",url:"mailto:krishna404@yandex.com"},{title:"Github",img:"github.png",url:"https://github.com/anhsirk0"},{title:"Telegram",img:"telegram.png",url:"https://t.me/anhsirk0"},{title:"Reddit",img:"reddit.png",url:"https://reddit.com/u/anhsirk0"},{title:"LinkedIn",img:"linkedin.png",url:"https://linkedin.com/in/anhsirk0"}]]}class B extends A{constructor(s){super(),P(this,s,T,R,V,{})}}export{B as default};
