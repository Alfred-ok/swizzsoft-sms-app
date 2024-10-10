import{r as b,_ as f,R as m,a as u,c as v,P as t,j as e}from"./index-C7pVrS_7.js";import{a as l}from"./DefaultLayout-DozKH9jr.js";import"./index.es-glSb0DD9.js";import{C as N,a as o}from"./CRow-CPZ9ohDV.js";import{C as h,a as x}from"./CCardBody-B_fQyIRu.js";import{C as j}from"./CCardHeader-C4tY2bm7.js";import{C as P}from"./CContainer-PhEzx4hZ.js";import"./CCloseButton-BpyeHNSr.js";var i=b.forwardRef(function(s,p){var n,d=s.children,g=s.align,r=s.className,c=s.size,y=f(s,["children","align","className","size"]);return m.createElement("nav",u({ref:p},y),m.createElement("ul",{className:v("pagination",(n={},n["justify-content-".concat(g)]=g,n["pagination-".concat(c)]=c,n),r)},d))});i.propTypes={align:t.oneOf(["start","center","end"]),children:t.node,className:t.string,size:t.oneOf(["sm","lg"])};i.displayName="CPagination";var a=b.forwardRef(function(s,p){var n=s.children,d=s.as,g=s.className,r=f(s,["children","as","className"]),c=d??(r.active?"span":"a");return m.createElement("li",u({className:v("page-item",{active:r.active,disabled:r.disabled},g)},r.active&&{"aria-current":"page"}),c==="a"?m.createElement(P,u({className:"page-link",as:c},r,{ref:p}),n):m.createElement(c,{className:"page-link",ref:p},n))});a.propTypes={as:t.elementType,children:t.node,className:t.string};a.displayName="CPaginationItem";const A=()=>e.jsxs(N,{children:[e.jsx(o,{xs:12,children:e.jsxs(h,{className:"mb-4",children:[e.jsx(j,{children:e.jsx("strong",{children:"React Pagination"})}),e.jsxs(x,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",e.jsx("code",{children:"<nav>"})," element to identify it as a navigation section to screen readers and other assistive technologies."]}),e.jsxs("p",{className:"text-body-secondary small",children:["In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",e.jsx("code",{children:"aria-label"})," for the"," ",e.jsx("code",{children:"<nav>"})," to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",e.jsx("code",{children:'aria-label="Search results pages"'}),"."]}),e.jsx(l,{href:"components/pagination",children:e.jsxs(i,{"aria-label":"Page navigation example",children:[e.jsx(a,{children:"Previous"}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"Next"})]})})]})]})}),e.jsx(o,{xs:12,children:e.jsxs(h,{className:"mb-4",children:[e.jsxs(j,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Working with icons"})]}),e.jsxs(x,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",e.jsx("code",{children:"aria"})," attributes."]}),e.jsx(l,{href:"components/pagination#working-with-icons",children:e.jsxs(i,{"aria-label":"Page navigation example",children:[e.jsx(a,{"aria-label":"Previous",children:e.jsx("span",{"aria-hidden":"true",children:"«"})}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{"aria-label":"Next",children:e.jsx("span",{"aria-hidden":"true",children:"»"})})]})})]})]})}),e.jsx(o,{xs:12,children:e.jsxs(h,{className:"mb-4",children:[e.jsxs(j,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Disabled and active states"})]}),e.jsxs(x,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Pagination links are customizable for different circumstances. Use"," ",e.jsx("code",{children:"disabled"})," for links that appear un-clickable and ",e.jsx("code",{children:".active"})," to indicate the current page."]}),e.jsxs("p",{className:"text-body-secondary small",children:["While the ",e.jsx("code",{children:"disabled"})," prop uses ",e.jsx("code",{children:"pointer-events: none"})," to"," ",e.jsx("em",{children:"try"})," to disable the link functionality of ",e.jsx("code",{children:"<a>"}),"s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add ",e.jsx("code",{children:'tabindex="-1"'})," on disabled links and use custom JavaScript to fully disable their functionality."]}),e.jsx(l,{href:"components/pagination#disabled-and-active-states",children:e.jsxs(i,{"aria-label":"Page navigation example",children:[e.jsx(a,{"aria-label":"Previous",disabled:!0,children:e.jsx("span",{"aria-hidden":"true",children:"«"})}),e.jsx(a,{active:!0,children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{"aria-label":"Next",children:e.jsx("span",{"aria-hidden":"true",children:"»"})})]})})]})]})}),e.jsx(o,{xs:12,children:e.jsxs(h,{className:"mb-4",children:[e.jsxs(j,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Sizing"})]}),e.jsxs(x,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Fancy larger or smaller pagination? Add ",e.jsx("code",{children:'size="lg"'})," or"," ",e.jsx("code",{children:'size="sm"'})," for additional sizes."]}),e.jsx(l,{href:"components/pagination#sizing",children:e.jsxs(i,{size:"lg","aria-label":"Page navigation example",children:[e.jsx(a,{children:"Previous"}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"Next"})]})}),e.jsx(l,{href:"components/pagination#sizing",children:e.jsxs(i,{size:"sm","aria-label":"Page navigation example",children:[e.jsx(a,{children:"Previous"}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"Next"})]})})]})]})}),e.jsx(o,{xs:12,children:e.jsxs(h,{className:"mb-4",children:[e.jsxs(j,{children:[e.jsx("strong",{children:"React Pagination"})," ",e.jsx("small",{children:"Alignment"})]}),e.jsxs(x,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Change the alignment of pagination components with"," ",e.jsx("a",{href:"https://coreui.io/docs/utilities/flex/",children:"flexbox utilities"}),"."]}),e.jsx(l,{href:"components/pagination#aligment",children:e.jsxs(i,{className:"justify-content-center","aria-label":"Page navigation example",children:[e.jsx(a,{disabled:!0,children:"Previous"}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"Next"})]})}),e.jsx(l,{href:"components/pagination#aligment",children:e.jsxs(i,{className:"justify-content-end","aria-label":"Page navigation example",children:[e.jsx(a,{disabled:!0,children:"Previous"}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"Next"})]})})]})]})})]});export{A as default};
