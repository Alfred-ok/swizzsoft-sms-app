import{r as l,_ as y,R as t,a as v,c as g,P as o}from"./index-C7pVrS_7.js";import{t as _}from"./DefaultLayout-DozKH9jr.js";import{C as I}from"./CConditionalPortal-CCUfSn8e.js";import{u as ee,T as oe}from"./CCloseButton-BpyeHNSr.js";var k=l.forwardRef(function(e,i){var r=e.children,d=e.className,a=y(e,["children","className"]);return t.createElement("div",v({className:g("modal-content",d)},a,{ref:i}),r)});k.propTypes={children:o.node,className:o.string};k.displayName="CModalContent";var x=l.forwardRef(function(e,i){var r,d=e.children,a=e.alignment,c=e.className,m=e.fullscreen,p=e.scrollable,u=e.size,b=y(e,["children","alignment","className","fullscreen","scrollable","size"]);return t.createElement("div",v({className:g("modal-dialog",(r={"modal-dialog-centered":a==="center"},r[typeof m=="boolean"?"modal-fullscreen":"modal-fullscreen-".concat(m,"-down")]=m,r["modal-dialog-scrollable"]=p,r["modal-".concat(u)]=u,r),c)},b,{ref:i}),d)});x.propTypes={alignment:o.oneOf(["top","center"]),children:o.node,className:o.string,fullscreen:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl"])]),scrollable:o.bool,size:o.oneOf(["sm","lg","xl"])};x.displayName="CModalDialog";var ne=l.createContext({}),K=l.forwardRef(function(e,i){var r=e.children,d=e.alignment,a=e.backdrop,c=a===void 0?!0:a,m=e.className,p=e.duration,u=p===void 0?150:p,b=e.focus,A=b===void 0?!0:b,G=e.fullscreen,O=e.keyboard,H=O===void 0?!0:O,C=e.onClose,w=e.onClosePrevented,J=e.onShow,R=e.portal,P=R===void 0?!0:R,Q=e.scrollable,U=e.size,T=e.transition,h=T===void 0?!0:T,z=e.unmountOnClose,W=z===void 0?!0:z,E=e.visible,X=y(e,["children","alignment","backdrop","className","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),L=l.useRef(null),f=l.useRef(null),Y=l.useRef(null),Z=ee(i,f),M=l.useState(E),s=M[0],N=M[1],S=l.useState(!1),B=S[0],D=S[1],$={visible:s,setVisible:N};l.useEffect(function(){N(E)},[E]),l.useEffect(function(){var n;return s?(L.current=document.activeElement,document.addEventListener("mouseup",F),document.addEventListener("keydown",j)):(n=L.current)===null||n===void 0||n.focus(),function(){document.removeEventListener("mouseup",F),document.removeEventListener("keydown",j)}},[s]);var V=function(){return c==="static"?D(!0):(N(!1),C&&C())};l.useLayoutEffect(function(){w&&w(),setTimeout(function(){return D(!1)},u)},[B]),l.useLayoutEffect(function(){return s?(document.body.classList.add("modal-open"),c&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout(function(){var n;A&&((n=f.current)===null||n===void 0||n.focus())},h?u:0)):(document.body.classList.remove("modal-open"),c&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),c&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}},[s]);var F=function(n){f.current&&f.current==n.target&&V()},j=function(n){n.key==="Escape"&&H&&V()};return t.createElement(t.Fragment,null,t.createElement(oe,{in:s,mountOnEnter:!0,nodeRef:f,onEnter:J,onExit:C,unmountOnExit:W,timeout:h?u:0},function(n){return t.createElement(I,{portal:P},t.createElement(ne.Provider,{value:$},t.createElement("div",v({className:g("modal",{"modal-static":B,fade:h,show:n==="entered"},m),tabIndex:-1},s?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:v({},n!=="exited"&&{display:"block"})},X,{ref:Z}),t.createElement(x,{alignment:d,fullscreen:G,scrollable:Q,size:U},t.createElement(k,{ref:Y},r)))))}),c&&t.createElement(I,{portal:P},t.createElement(_,{visible:s})))});K.propTypes={alignment:o.oneOf(["top","center"]),backdrop:o.oneOfType([o.bool,o.oneOf(["static"])]),children:o.node,className:o.string,duration:o.number,focus:o.bool,fullscreen:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl"])]),keyboard:o.bool,onClose:o.func,onClosePrevented:o.func,onShow:o.func,portal:o.bool,scrollable:o.bool,size:o.oneOf(["sm","lg","xl"]),transition:o.bool,unmountOnClose:o.bool,visible:o.bool};K.displayName="CModal";var q=l.forwardRef(function(e,i){var r=e.children,d=e.className,a=y(e,["children","className"]);return t.createElement("div",v({className:g("modal-body",d)},a,{ref:i}),r)});q.propTypes={children:o.node,className:o.string};q.displayName="CModalBody";export{K as C,q as a,ne as b};