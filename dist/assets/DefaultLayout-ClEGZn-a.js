const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dashboard-BgVXbv3i.js","./react-vendors-EQJ1DewU.js","./vendor-DmCBWs0o.js","./react-vendors-DIKJ0DAD.css","./SendSms-CD07vz02.js","./index-BwovoiXw.js","./index-DUA3lmzi.css","./SendFromFile-DYlF2lVI.js","./SentMessages-DEQF0MOr.js","./BuyNow-DaA5gvrv.js","./Price-Sq3Axk6r.js","./MpesaPayment-CpLB18ra.js","./OrganisationList-B7srbpCM.js","./icons8-organization-96-B_a_TVRs.js","./OrganisationRegistration-BRMkXinL.js","./icons8-error-EK1qFjAG.js","./UserList-C_cGC3aM.js","./RegisterUser-BjkYD4WY.js"])))=>i.map(i=>d[i]);
import{R as t,u as $,j as e,h as V,i as P,r as C,k as y,C as M,d as F,e as T,N as H,l as q,a as G,m as L,b as N,n as J,o as K,p as h,q as R,s as c,t as _,v as k,w as Q,x as W,S as X,y as Y,z as A,A as Z,D as ee,E as se,F as ae,G as re,H as oe,I as ne,J as D,K as te,L as ce,M as ie}from"./react-vendors-EQJ1DewU.js";import{_ as p}from"./index-BwovoiXw.js";import{n as le,k as S,o as me,P as d,q as de,t as pe,u as he,v as ue,x as xe,y as je,z as fe,B as be}from"./vendor-DmCBWs0o.js";const _e=t.lazy(()=>p(()=>import("./Dashboard-BgVXbv3i.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),Ce=t.lazy(()=>p(()=>import("./SendSms-CD07vz02.js"),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url)),ge=t.lazy(()=>p(()=>import("./SendFromFile-DYlF2lVI.js"),__vite__mapDeps([7,1,2,3]),import.meta.url)),ve=t.lazy(()=>p(()=>import("./SentMessages-DEQF0MOr.js"),__vite__mapDeps([8,1,2,3]),import.meta.url)),ye=t.lazy(()=>p(()=>import("./BuyNow-DaA5gvrv.js"),__vite__mapDeps([9,1,2,3,5,6]),import.meta.url)),Ne=t.lazy(()=>p(()=>import("./Price-Sq3Axk6r.js"),__vite__mapDeps([10,1,2,3,5,6]),import.meta.url)),Se=t.lazy(()=>p(()=>import("./MpesaPayment-CpLB18ra.js"),__vite__mapDeps([11,1,2,3,5,6]),import.meta.url)),we=t.lazy(()=>p(()=>import("./OrganisationList-B7srbpCM.js"),__vite__mapDeps([12,1,2,3,13]),import.meta.url)),Ee=t.lazy(()=>p(()=>import("./OrganisationRegistration-BRMkXinL.js"),__vite__mapDeps([14,1,2,3,13,15]),import.meta.url)),Pe=t.lazy(()=>p(()=>import("./UserList-C_cGC3aM.js"),__vite__mapDeps([16,1,2,3]),import.meta.url)),Te=t.lazy(()=>p(()=>import("./RegisterUser-BjkYD4WY.js"),__vite__mapDeps([17,1,2,3]),import.meta.url)),z=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:_e},{path:"/send-sms",name:"Send SMS",element:Ce},{path:"/send-from-file",name:"Send from file",element:ge},{path:"/sent-messages",name:"Sent Messages",element:ve},{path:"/buy-now",name:"Buy now",element:ye},{path:"/price",name:"price",element:Ne},{path:"/mpesapayment",name:"mpesa payment",element:Se},{path:"/organisation",name:"Organisation",element:we},{path:"/organistion-registeration",name:"Register",element:Ee},{path:"/user",name:"User",element:Pe},{path:"/user-registration",name:"Register User",element:Te}],Re=()=>{const a=$().pathname,o=(r,s)=>{const l=s.find(m=>m.path===r);return l?l.name:!1},n=(r=>{const s=[];return r.split("/").reduce((l,m,u,j)=>{const x=`${l}/${m}`,f=o(x,z);return f&&s.push({pathname:x,name:f,active:u+1===j.length}),x}),s})(a);return e.jsxs(V,{className:"my-0",children:[e.jsx(P,{href:"/",children:"Home"}),n.map((r,s)=>C.createElement(P,{...r.active?{active:!0}:{href:r.pathname},key:s},r.name))]})},Ae=t.memo(Re),Le=()=>e.jsx(y,{className:"px-4",lg:!0,children:e.jsx(C.Suspense,{fallback:e.jsx(M,{color:"primary"}),children:e.jsxs(F,{children:[z.map((a,o)=>a.element&&e.jsx(T,{path:a.path,exact:a.exact,name:a.name,element:e.jsx(a.element,{})},o)),e.jsx(T,{path:"/",element:e.jsx(H,{to:"dashboard",replace:!0})})]})})}),ke=t.memo(Le),De=()=>e.jsxs(q,{className:"px-4",children:[e.jsxs("div",{children:[e.jsx("a",{href:"https://www.swizzsoft.com/",target:"_blank",rel:"noopener noreferrer",children:"SwizzSoft"}),e.jsx("span",{className:"ms-1",children:"© 2024 creativeLabs."})]}),e.jsxs("div",{className:"ms-auto",children:[e.jsx("span",{className:"me-1",children:"Powered by"}),e.jsx("a",{href:"https://www.swizzsoft.com/",target:"_blank",rel:"noopener noreferrer",children:"SwizzSoft & Dashboard Template"})]})]}),ze=t.memo(De),Ie=()=>{const a=C.useRef();G("coreui-free-react-admin-template-theme");const o=L(),i=N(n=>n.sidebarShow);return C.useEffect(()=>{document.addEventListener("scroll",()=>{a.current&&a.current.classList.toggle("shadow-sm",document.documentElement.scrollTop>0)})},[]),e.jsxs(J,{position:"sticky",className:"mb-4 p-0",ref:a,style:{boxShadow:"0px 25px 20px -20px rgba(0, 0, 0, 0.27)"},children:[e.jsxs(y,{className:"border-bottom px-4",fluid:!0,children:[e.jsx(K,{onClick:()=>o({type:"set",sidebarShow:!i}),style:{marginInlineStart:"-14px"},children:e.jsx(h,{icon:le,size:"lg"})}),e.jsxs(R,{className:"d-none d-md-flex",children:[e.jsx(c,{children:e.jsx(_,{to:"/dashboard",as:k,children:"Dashboard"})}),e.jsx(c,{children:e.jsx(_,{href:"#",children:"Users"})})]}),e.jsx(R,{className:"ms-auto",children:e.jsx(c,{children:e.jsx(_,{href:"#",children:e.jsxs(Q,{color:"primary",onClick:()=>S.remove("refreshToken",{path:"/"}),children:[e.jsx(h,{icon:me,style:{marginRight:"5px"}}),"Sign out"]})})})})]}),e.jsx(y,{className:"px-4",fluid:!0,children:e.jsx(Ae,{})})]})},I=({items:a})=>{const o=S.get("role"),i=(s,l,m,u=!1)=>e.jsxs(e.Fragment,{children:[l||u&&e.jsx("span",{className:"nav-icon",children:e.jsx("span",{className:"nav-icon-bullet"})}),s&&s,m&&e.jsx(Y,{color:m.color,className:"ms-auto",children:m.text})]}),n=(s,l,m=!1)=>{const{component:u,name:j,badge:x,icon:f,...b}=s,g=u;return s.role===o||s.role==="Allmembers"||s.roleCode===o?e.jsx(g,{as:"div",children:b.to||b.href?e.jsx(_,{...b.to&&{as:k},...b,children:i(j,f,x,m)}):i(j,f,x,m)},l):null},r=(s,l)=>{var w;const{component:m,name:u,icon:j,items:x,to:f,...b}=s,g=m;return s.role===o||s.role==="Allmembers"||s.roleCode===o?e.jsx(g,{compact:!0,as:"div",toggler:i(u,j),...b,children:(w=s.items)==null?void 0:w.map((v,E)=>v.items?r(v,E):n(v,E,!0))},l):null};return e.jsx(W,{as:X,children:a&&a.map((s,l)=>s.items?r(s,l):n(s,l))})};I.propTypes={items:d.arrayOf(d.any).isRequired};const Be=[{component:c,name:"Dashboard",to:"/dashboard",role:"Allmembers",icon:e.jsx(h,{icon:de,customClassName:"nav-icon"})},{component:A,name:"SMS & Campaigns",to:"/",icon:e.jsx(h,{icon:pe,customClassName:"nav-icon"}),roleCode:"ProT_917201762349",role:"User",items:[{component:c,name:"Send SMS",to:"/send-sms",roleCode:"ProT_917201762349",role:"User"},{component:c,name:"Send from file",to:"/send-from-file",roleCode:"ProT_917201762349",role:"User"},{component:c,name:"Sent Messages",to:"/sent-messages",roleCode:"ProT_917201762349",role:"User"}]},{component:c,name:"Buy Sms",to:"/buy-now",icon:e.jsx(h,{icon:he,customClassName:"nav-icon"}),roleCode:"ProT_917201762349",role:"User"},{component:c,name:"Organisations",to:"/organisation",icon:e.jsx(h,{icon:ue,customClassName:"nav-icon"}),roleCode:"ProT_917201762254",role:"Admin"},{component:c,name:"Users",to:"/user",icon:e.jsx(h,{icon:xe,customClassName:"nav-icon"}),roleCode:"ProT_917201762254",role:"Admin"},{component:Z,name:"Extras"},{component:A,name:"Pages",icon:e.jsx(h,{icon:je,customClassName:"nav-icon"}),items:[{component:c,name:"Login",to:"/login"},{component:c,name:"Register",to:"/register"},{component:c,name:"Error 404",to:"/404"},{component:c,name:"Error 500",to:"/500"}]}],Oe=()=>{const a=L(),o=N(r=>r.sidebarUnfoldable),i=N(r=>r.sidebarShow),n=S.get("username");return e.jsxs(ee,{className:"border-end",colorScheme:"dark",position:"fixed",unfoldable:o,visible:i,onVisibleChange:r=>{a({type:"set",sidebarShow:r})},children:[e.jsxs(se,{className:"border-bottom",children:[e.jsx("span",{style:{display:"flex"},children:e.jsx("h4",{children:n&&n})}),e.jsx(ae,{className:"d-lg-none",dark:!0,onClick:()=>a({type:"set",sidebarShow:!1})})]}),e.jsx(I,{items:Be}),e.jsx(re,{className:"border-top d-none d-lg-flex",children:e.jsx(oe,{onClick:()=>a({type:"set",sidebarUnfoldable:!o})})})]})},Ue=t.memo(Oe),B=a=>{const{content:o,href:i,name:n}=a,r=n.slice(-1)==="s",s=`https://coreui.io/react/docs/${i}`;return e.jsxs(ne,{color:"info",className:"bg-white",children:[o||`A React ${n} component ${r?"have":"has"} been created as a native React.js version
      of Bootstrap ${n}. ${n} ${r?"are":"is"} delivered with some new features,
      variants, and unique design that matches CoreUI Design System requirements.`,e.jsx("br",{}),e.jsx("br",{}),"For more information please visit our official"," ",e.jsx(D,{href:s,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};B.propTypes={content:d.string,href:d.string,name:d.string};t.memo(B);const O=a=>{const{href:o,name:i,text:n,...r}=a,s=i?`https://coreui.io/react/docs/components/${i}`:o;return e.jsx("div",{className:"float-end",children:e.jsx(D,{...r,href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:e.jsx("small",{className:"text-body-secondary",children:n||"docs"})})})};O.propTypes={href:d.string,name:d.string,text:d.string};t.memo(O);const U=a=>{const{children:o,href:i,tabContentClassName:n}=a,r=`https://coreui.io/react/docs/${i}`;return e.jsxs("div",{className:"example",children:[e.jsxs(te,{variant:"underline-border",children:[e.jsx(c,{children:e.jsxs(_,{href:"#",active:!0,children:[e.jsx(h,{icon:fe,className:"me-2"}),"Preview"]})}),e.jsx(c,{children:e.jsxs(_,{href:r,target:"_blank",children:[e.jsx(h,{icon:be,className:"me-2"}),"Code"]})})]}),e.jsx(ce,{className:`rounded-bottom ${n||""}`,children:e.jsx(ie,{className:"p-3 preview",visible:!0,children:o})})]})};U.propTypes={children:d.node,href:d.string,tabContentClassName:d.string};t.memo(U);const Fe=()=>e.jsxs("div",{style:{backgroundColor:"#ccd3df"},children:[e.jsx(Ue,{}),e.jsxs("div",{className:"wrapper d-flex flex-column min-vh-100",children:[e.jsx(Ie,{}),e.jsx("div",{className:"body flex-grow-1",children:e.jsx(ke,{})}),e.jsx(ze,{})]})]});export{Fe as default};
