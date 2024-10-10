import{r,R as v,c as k,P as t,_ as H,a as P,j as e}from"./index-C7pVrS_7.js";import{a as C,g as T}from"./DefaultLayout-DozKH9jr.js";import"./index.es-glSb0DD9.js";import{C as U,a as R}from"./CRow-CPZ9ohDV.js";import{C as g,a as I}from"./CCardBody-B_fQyIRu.js";import{C as w}from"./CCardHeader-C4tY2bm7.js";import{u as O,T as F}from"./CCloseButton-BpyeHNSr.js";import{g as B}from"./getNextActiveElement-BFbndcFM.js";import{g as V}from"./getTransitionDurationFromElement-Cpu4p4hx.js";import"./CContainer-PhEzx4hZ.js";var D=r.createContext({}),f=r.forwardRef(function(a,x){var d=a.children,p=a.activeItemKey,l=a.className,b=a.onChange,m=r.useId(),h=r.useState(p),c=h[0],o=h[1];return r.useEffect(function(){c&&b&&b(c)},[c]),v.createElement(D.Provider,{value:{_activeItemKey:c,setActiveItemKey:o,id:m}},v.createElement("div",{className:k("tabs",l),ref:x},d))});f.propTypes={activeItemKey:t.oneOfType([t.number,t.string]).isRequired,children:t.node,className:t.string,onChange:t.func};f.displayName="CTabs";var s=r.forwardRef(function(a,x){var d=a.children,p=a.className,l=a.itemKey,b=H(a,["children","className","itemKey"]),m=r.useContext(D),h=m._activeItemKey,c=m.setActiveItemKey,o=m.id,j=function(){return l===h};return v.createElement("button",P({className:k("nav-link",{active:j()},p),id:"".concat(o).concat(l,"-tab"),onClick:function(){return c(l)},onFocus:function(){return c(l)},role:"tab",tabIndex:j()?0:-1,type:"button","aria-controls":"".concat(o).concat(l,"-tab-pane"),"aria-selected":j(),ref:x},b),d)});s.propTypes={children:t.node,className:t.string,itemKey:t.oneOfType([t.number,t.string]).isRequired};s.displayName="CTab";var n=r.forwardRef(function(a,x){var d=a.children,p=a.className,l=a.itemKey,b=a.onHide,m=a.onShow,h=a.transition,c=h===void 0?!0:h,o=a.visible,j=H(a,["children","className","itemKey","onHide","onShow","transition","visible"]),i=r.useContext(D),N=i._activeItemKey,K=i.id,y=r.useRef(),q=O(x,y),E=r.useState(o||N===l),A=E[0],S=E[1];return r.useEffect(function(){o!==void 0&&S(o)},[o]),r.useEffect(function(){S(N===l)},[N]),v.createElement(F,{in:A,nodeRef:y,onEnter:m,onExit:b,timeout:y.current?V(y.current):0},function(L){return v.createElement("div",P({className:k("tab-pane",{active:A,fade:c,show:L==="entered"},p),id:"".concat(K).concat(l,"-tab-pane"),role:"tabpanel","aria-labelledby":"".concat(K).concat(l,"-tab"),tabIndex:0,ref:q},j),d)})});n.propTypes={children:t.node,className:t.string,itemKey:t.oneOfType([t.number,t.string]).isRequired,onHide:t.func,onShow:t.func,transition:t.bool,visible:t.bool};n.displayName="CTabPanel";var u=r.forwardRef(function(a,x){var d,p=a.children,l=a.className,b=a.layout,m=a.variant,h=H(a,["children","className","layout","variant"]),c=r.useRef(null),o=O(x,c),j=function(i){if(c.current!==null&&(i.key==="ArrowDown"||i.key==="ArrowUp"||i.key==="ArrowLeft"||i.key==="ArrowRight"||i.key==="Home"||i.key==="End")){i.preventDefault();var N=i.target,K=Array.from(c.current.querySelectorAll(".nav-link:not(.disabled):not(:disabled)")),y=void 0;i.key==="Home"||i.key==="End"?y=i.key==="End"?K.at(-1):K[0]:y=B(K,N,i.key==="ArrowDown"||i.key==="ArrowRight",!0),y&&y.focus({preventScroll:!0})}};return v.createElement("div",P({className:k("nav",(d={},d["nav-".concat(b)]=b,d["nav-".concat(m)]=m,d),l),role:"tablist",onKeyDown:j,ref:o},h),p)});u.propTypes={children:t.node,className:t.string,layout:t.oneOf(["fill","justified"]),variant:t.oneOf(["pills","tabs","underline","underline-border"])};u.displayName="CTabList";const $=()=>e.jsxs(U,{children:[e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsx(w,{children:e.jsx("strong",{children:"React Tabs"})}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["The basic React tabs example uses the ",e.jsx("code",{children:'variant="tabs"'})," props to generate a tabbed interface."]}),e.jsx(C,{href:"components/tabs/#example",children:e.jsxs(f,{activeItemKey:"profile",children:[e.jsxs(u,{variant:"tabs",children:[e.jsx(s,{itemKey:"home",children:"Home"}),e.jsx(s,{itemKey:"profile",children:"Profile"}),e.jsx(s,{itemKey:"contact",children:"Contact"}),e.jsx(s,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"p-3",itemKey:"home",children:"Home tab content"}),e.jsx(n,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),e.jsx(n,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),e.jsx(n,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Unstyled"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["If you don’t provide the ",e.jsx("code",{children:"variant"})," prop, the component will default to a basic style."]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:"profile",children:[e.jsxs(u,{children:[e.jsx(s,{itemKey:"home",children:"Home"}),e.jsx(s,{itemKey:"profile",children:"Profile"}),e.jsx(s,{itemKey:"contact",children:"Contact"}),e.jsx(s,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"p-3",itemKey:"home",children:"Home tab content"}),e.jsx(n,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),e.jsx(n,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),e.jsx(n,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Pills"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Take that same code, but use ",e.jsx("code",{children:'variant="pills"'})," instead:"]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(u,{variant:"pills",children:[e.jsx(s,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),e.jsx(s,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),e.jsx(s,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),e.jsx(s,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"p-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),e.jsx(n,{className:"p-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),e.jsx(n,{className:"p-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),e.jsx(n,{className:"p-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Underline"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Take that same code, but use ",e.jsx("code",{children:'variant="underline"'})," instead:"]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(u,{variant:"underline",children:[e.jsx(s,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),e.jsx(s,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),e.jsx(s,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),e.jsx(s,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Underline border"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Take that same code, but use ",e.jsx("code",{children:'variant="underline-border"'})," instead:"]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(u,{variant:"underline-border",children:[e.jsx(s,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),e.jsx(s,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),e.jsx(s,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),e.jsx(s,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})})]});export{$ as default};