(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{9988:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plan-zvladani-rizik",function(){return r(9203)}])},9203:function(e,t,r){"use strict";r.r(t),r.d(t,{FilterOption:function(){return te},__N_SSG:function(){return se},default:function(){return le}});var n=r(1799),i=r(9396);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r(5893),l=r(8834),u=r(1405),c=r(9049),d=r(978),p=r(7294),f=r(8059),x=r(4192),v=r(9946),m=r(6723),b=r(3855);function h(e,t){let[r,n]=(0,p.useState)(e),i=(0,b.E)(e);return(0,m.e)((()=>n(i.current)),[i,n,...t]),r}var g=r(3784),y=r(2351),O=r(2984),R=r(8043),S=r(1363),w=r(1497),j=r(4103),T=r(4575),I=r(6567),N=r(4157),C=r(9650),k=r(6045);function D(e={},t=null,r=[]){for(let[n,i]of Object.entries(e))E(r,P(t,n),i);return r}function P(e,t){return e?e+"["+t+"]":t}function E(e,t,r){if(Array.isArray(r))for(let[n,i]of r.entries())E(e,P(t,n.toString()),i);else r instanceof Date?e.push([t,r.toISOString()]):"boolean"==typeof r?e.push([t,r?"1":"0"]):"string"==typeof r?e.push([t,r]):"number"==typeof r?e.push([t,`${r}`]):null==r?e.push([t,""]):D(r,t,e)}var A=r(5466),z=r(3781);var Z,_,L=((_=L||{})[_.Open=0]="Open",_[_.Closed=1]="Closed",_),M=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(M||{}),F=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(F||{}),V=((Z=V||{})[Z.OpenListbox=0]="OpenListbox",Z[Z.CloseListbox=1]="CloseListbox",Z[Z.SetDisabled=2]="SetDisabled",Z[Z.SetOrientation=3]="SetOrientation",Z[Z.GoToOption=4]="GoToOption",Z[Z.Search=5]="Search",Z[Z.ClearSearch=6]="ClearSearch",Z[Z.RegisterOption=7]="RegisterOption",Z[Z.UnregisterOption=8]="UnregisterOption",Z);function Y(e,t=(e=>e)){let r=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,n=(0,T.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),i=r?n.indexOf(r):null;return-1===i&&(i=null),{options:n,activeOptionIndex:i}}let H={1:e=>e.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{value:r,mode:n,compare:i}=e.propsRef.current,a=e.options.findIndex((e=>{let t=e.dataRef.current.value;return(0,O.E)(n,{1:()=>r.some((e=>i(e,t))),0:()=>i(r,t)})}));return-1!==a&&(t=a),{...e,listboxState:0,activeOptionIndex:t}},2:(e,t)=>e.disabled===t.disabled?e:{...e,disabled:t.disabled},3:(e,t)=>e.orientation===t.orientation?e:{...e,orientation:t.orientation},4(e,t){var r;if(e.disabled||1===e.listboxState)return e;let n=Y(e),i=(0,w.d)(t,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:i,activationTrigger:null!=(r=t.trigger)?r:1}},5:(e,t)=>{if(e.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))})),a=i?e.options.indexOf(i):-1;return-1===a||a===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:a,activationTrigger:1}},6:e=>e.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},7:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},n=Y(e,(e=>[...e,r]));if(null===e.activeOptionIndex){let{value:i,mode:a,compare:o}=e.propsRef.current,s=t.dataRef.current.value;(0,O.E)(a,{1:()=>i.some((e=>o(e,s))),0:()=>o(i,s)})&&(n.activeOptionIndex=n.options.indexOf(r))}return{...e,...n}},8:(e,t)=>{let r=Y(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},U=(0,p.createContext)(null);function G(e){let t=(0,p.useContext)(U);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function Q(e,t){return(0,O.E)(t.type,H,e,t)}U.displayName="ListboxContext";let $=p.Fragment,J=(0,y.yV)((function(e,t){let{value:r,defaultValue:n,name:i,onChange:a,by:o=((e,t)=>e===t),disabled:s=!1,horizontal:l=!1,multiple:u=!1,...c}=e;const d=l?"horizontal":"vertical";let f=(0,g.T)(t),[x,v]=function(e,t,r){let[n,i]=(0,p.useState)(r),a=void 0!==e;return[a?e:n,(0,z.z)((e=>(a||i(e),null==t?void 0:t(e))))]}(r,a,n),b=(0,p.useReducer)(Q,{listboxState:1,propsRef:{current:{value:x,onChange:v,mode:u?1:0,compare:(0,z.z)("string"==typeof o?(e,t)=>{let r=o;return(null==e?void 0:e[r])===(null==t?void 0:t[r])}:o)}},labelRef:(0,p.createRef)(),buttonRef:(0,p.createRef)(),optionsRef:(0,p.createRef)(),disabled:s,orientation:d,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:h,propsRef:R,optionsRef:S,buttonRef:w},j]=b;R.current.value=x,R.current.mode=u?1:0,(0,m.e)((()=>{R.current.onChange=e=>(0,O.E)(R.current.mode,{0:()=>v(e),1(){let t=R.current.value.slice(),{compare:r}=R.current,n=t.findIndex((t=>r(t,e)));return-1===n?t.push(e):t.splice(n,1),v(t)}})}),[v,R]),(0,m.e)((()=>j({type:2,disabled:s})),[s]),(0,m.e)((()=>j({type:3,orientation:d})),[d]),(0,C.O)([w,S],((e,t)=>{var r;j({type:1}),(0,T.sP)(t,T.tJ.Loose)||(e.preventDefault(),null==(r=w.current)||r.focus())}),0===h);let N=(0,p.useMemo)((()=>({open:0===h,disabled:s,value:x})),[h,s,x]),P={ref:f};return p.createElement(U.Provider,{value:b},p.createElement(I.up,{value:(0,O.E)(h,{0:I.ZM.Open,1:I.ZM.Closed})},null!=i&&null!=x&&D({[i]:x}).map((([e,t])=>p.createElement(k._,{features:k.A.Hidden,...(0,y.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,y.sY)({ourProps:P,theirProps:c,slot:N,defaultTag:$,name:"Listbox"})))})),B=(0,y.yV)((function(e,t){var r;let[n,i]=G("Listbox.Button"),a=(0,g.T)(n.buttonRef,t),o=`headlessui-listbox-button-${(0,v.M)()}`,s=(0,x.G)(),l=(0,z.z)((e=>{switch(e.key){case S.R.Space:case S.R.Enter:case S.R.ArrowDown:e.preventDefault(),i({type:0}),s.nextFrame((()=>{n.propsRef.current.value||i({type:4,focus:w.T.First})}));break;case S.R.ArrowUp:e.preventDefault(),i({type:0}),s.nextFrame((()=>{n.propsRef.current.value||i({type:4,focus:w.T.Last})}))}})),u=(0,z.z)((e=>{if(e.key===S.R.Space)e.preventDefault()})),c=(0,z.z)((e=>{if((0,j.P)(e.currentTarget))return e.preventDefault();0===n.listboxState?(i({type:1}),s.nextFrame((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),i({type:0}))})),d=h((()=>{if(n.labelRef.current)return[n.labelRef.current.id,o].join(" ")}),[n.labelRef.current,o]),f=(0,p.useMemo)((()=>({open:0===n.listboxState,disabled:n.disabled,value:n.propsRef.current.value})),[n]),m=e,b={ref:a,id:o,type:(0,N.f)(e,n.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=n.optionsRef.current)?void 0:r.id,"aria-expanded":n.disabled?void 0:0===n.listboxState,"aria-labelledby":d,disabled:n.disabled,onKeyDown:l,onKeyUp:u,onClick:c};return(0,y.sY)({ourProps:b,theirProps:m,slot:f,defaultTag:"button",name:"Listbox.Button"})})),W=(0,y.yV)((function(e,t){let[r]=G("Listbox.Label"),n=`headlessui-listbox-label-${(0,v.M)()}`,i=(0,g.T)(r.labelRef,t),a=(0,z.z)((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),o=(0,p.useMemo)((()=>({open:0===r.listboxState,disabled:r.disabled})),[r]);return(0,y.sY)({ourProps:{ref:i,id:n,onClick:a},theirProps:e,slot:o,defaultTag:"label",name:"Listbox.Label"})})),K=y.AN.RenderStrategy|y.AN.Static,X=(0,y.yV)((function(e,t){var r;let[n,i]=G("Listbox.Options"),a=(0,g.T)(n.optionsRef,t),o=`headlessui-listbox-options-${(0,v.M)()}`,s=(0,x.G)(),l=(0,x.G)(),u=(0,I.oJ)(),c=null!==u?u===I.ZM.Open:0===n.listboxState;(0,p.useEffect)((()=>{var e;let t=n.optionsRef.current;!t||0===n.listboxState&&t!==(null==(e=(0,A.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[n.listboxState,n.optionsRef]);let d=(0,z.z)((e=>{switch(l.dispose(),e.key){case S.R.Space:if(""!==n.searchQuery)return e.preventDefault(),e.stopPropagation(),i({type:5,value:e.key});case S.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==n.activeOptionIndex){let{dataRef:e}=n.options[n.activeOptionIndex];n.propsRef.current.onChange(e.current.value)}0===n.propsRef.current.mode&&(i({type:1}),(0,R.k)().nextFrame((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,O.E)(n.orientation,{vertical:S.R.ArrowDown,horizontal:S.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),i({type:4,focus:w.T.Next});case(0,O.E)(n.orientation,{vertical:S.R.ArrowUp,horizontal:S.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),i({type:4,focus:w.T.Previous});case S.R.Home:case S.R.PageUp:return e.preventDefault(),e.stopPropagation(),i({type:4,focus:w.T.First});case S.R.End:case S.R.PageDown:return e.preventDefault(),e.stopPropagation(),i({type:4,focus:w.T.Last});case S.R.Escape:return e.preventDefault(),e.stopPropagation(),i({type:1}),s.nextFrame((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case S.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(i({type:5,value:e.key}),l.setTimeout((()=>i({type:6})),350))}})),f=h((()=>{var e,t,r;return null!=(r=null==(e=n.labelRef.current)?void 0:e.id)?r:null==(t=n.buttonRef.current)?void 0:t.id}),[n.labelRef.current,n.buttonRef.current]),m=(0,p.useMemo)((()=>({open:0===n.listboxState})),[n]),b=e,j={"aria-activedescendant":null===n.activeOptionIndex||null==(r=n.options[n.activeOptionIndex])?void 0:r.id,"aria-multiselectable":1===n.propsRef.current.mode||void 0,"aria-labelledby":f,"aria-orientation":n.orientation,id:o,onKeyDown:d,role:"listbox",tabIndex:0,ref:a};return(0,y.sY)({ourProps:j,theirProps:b,slot:m,defaultTag:"ul",features:K,visible:c,name:"Listbox.Options"})})),q=(0,y.yV)((function(e,t){let{disabled:r=!1,value:n,...i}=e,[a,o]=G("Listbox.Option"),s=`headlessui-listbox-option-${(0,v.M)()}`,l=null!==a.activeOptionIndex&&a.options[a.activeOptionIndex].id===s,{value:u,compare:c}=a.propsRef.current,d=(0,O.E)(a.propsRef.current.mode,{1:()=>u.some((e=>c(e,n))),0:()=>c(u,n)}),f=(0,p.useRef)(null),x=(0,g.T)(t,f);(0,m.e)((()=>{if(0!==a.listboxState||!l||0===a.activationTrigger)return;let e=(0,R.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=f.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[f,l,a.listboxState,a.activationTrigger,a.activeOptionIndex]);let b=(0,p.useRef)({disabled:r,value:n,domRef:f});(0,m.e)((()=>{b.current.disabled=r}),[b,r]),(0,m.e)((()=>{b.current.value=n}),[b,n]),(0,m.e)((()=>{var e,t;b.current.textValue=null==(t=null==(e=f.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[b,f]);let h=(0,z.z)((()=>a.propsRef.current.onChange(n)));(0,m.e)((()=>(o({type:7,id:s,dataRef:b}),()=>o({type:8,id:s}))),[b,s]);let S=(0,z.z)((e=>{if(r)return e.preventDefault();h(),0===a.propsRef.current.mode&&(o({type:1}),(0,R.k)().nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),j=(0,z.z)((()=>{if(r)return o({type:4,focus:w.T.Nothing});o({type:4,focus:w.T.Specific,id:s})})),T=(0,z.z)((()=>{r||l||o({type:4,focus:w.T.Specific,id:s,trigger:0})})),I=(0,z.z)((()=>{r||!l||o({type:4,focus:w.T.Nothing})})),N=(0,p.useMemo)((()=>({active:l,selected:d,disabled:r})),[l,d,r]);return(0,y.sY)({ourProps:{id:s,ref:x,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":d,disabled:void 0,onClick:S,onFocus:j,onPointerMove:T,onMouseMove:T,onPointerLeave:I,onMouseLeave:I},theirProps:i,slot:N,defaultTag:"li",name:"Listbox.Option"})})),ee=Object.assign(J,{Button:B,Label:W,Options:X,Option:q});var te,re=r(662),ne=r(4184),ie=r.n(ne),ae=function(e){var t=e.className,r=e.filter,n=e.options,i=(0,p.useState)(n[0]),a=i[0],o=i[1];return(0,s.jsx)("div",{className:t,children:(0,s.jsx)(ee,{value:a,onChange:function(e){o(e),r(e)},children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)(ee.Button,{className:ie()("w-52 p-2 flex justify-between items-center rounded border border-gray-200","text-xs sm:text-sm md:text-base lg:text-lg","bg-white hover:bg-gray-100 focus:bg-gray-100"),children:[(0,s.jsx)("span",{children:a}),(0,s.jsx)(re.Z,{className:"w-4 h-4 text-gray-500 shrink-0 md:w-5 md:h-5"})]}),(0,s.jsx)(ee.Options,{className:"absolute z-10 w-52 mt-1 rounded border border-gray-200 bg-white",children:n.map((function(e){return(0,s.jsx)(ee.Option,{value:e,children:function(t){var r=t.active;return(0,s.jsx)("div",{className:ie()("p-2 cursor-pointer",r&&"bg-gray-100","text-xs sm:text-xs md:text-sm lg:text-base"),children:e})}},e)}))})]})})})},oe=r(1163),se=!0;!function(e){e.COSTS_ASC="N\xe1klady vzestupn\u011b",e.COSTS_DESC="N\xe1klady sestupn\u011b",e.DATE_ASC="Datum vzestupn\u011b",e.DATE_DESC="Datum sestupn\u011b",e.PRIORITY_ASC="Priorita vzestupn\u011b",e.PRIORITY_DESC="Priorita sestupn\u011b"}(te||(te={}));var le=function(e){var t=e.navOp,r=function(e){switch(e){case c.O.CRITICAL:return 3;case c.O.HIGH:return 2;case c.O.MEDIUM:return 1;default:return 0}},a=function(e){var t=e.split("/").map((function(e){return Number(e)}));return new Date(t[1],t[0]-1).getTime()},x=function(e){var t=e.split(" ");return t.includes("MD")?7e3*Number(t[0]):t.includes("tis.")?1e3*Number(t[0]):t.includes("mil.")?1e6*Number(t[0]):Number(t[0])},v=(0,oe.useRouter)().query.analyza,m=(0,p.useState)(),b=m[0],h=m[1],g=(0,p.useMemo)((function(){return t.map((function(e){return(0,i.Z)((0,n.Z)({},e),{priorityNum:r(e.priority),dateTimestamp:a(e.date),unifiedCost:x(e.costs)})}))}),[t]),y=["--Vybrat filtr--",te.PRIORITY_ASC,te.PRIORITY_DESC,te.COSTS_ASC,te.COSTS_DESC,te.DATE_ASC,te.DATE_DESC],O=[{name:"\xdavod",href:"/"}].concat(o(v?[{name:"P\u0159ehled rizik ".concat(v.split("-").join("/")),href:"/".concat(v)}]:[]));return(0,s.jsxs)(l.Z,{title:"Pl\xe1n zvl\xe1d\xe1n\xed rizik",children:[(0,s.jsx)(f.Z,{links:O}),(0,s.jsx)(u.Z,{className:"text-lg font-bold mb-5 md:text-xl lg:text-2xl xl:text-3xl",children:"Pl\xe1n zvl\xe1d\xe1n\xed rizik:"}),(0,s.jsx)(ae,{className:"ml-auto mr-3 mb-4 w-fit",options:y,filter:function(e){var t=o(g);switch(e){case te.COSTS_ASC:h(t.sort((function(e,t){return e.unifiedCost-t.unifiedCost})));break;case te.COSTS_DESC:h(t.sort((function(e,t){return t.unifiedCost-e.unifiedCost})));break;case te.DATE_ASC:h(t.sort((function(e,t){return e.dateTimestamp-t.dateTimestamp})));break;case te.DATE_DESC:h(t.sort((function(e,t){return t.dateTimestamp-e.dateTimestamp})));break;case te.PRIORITY_ASC:h(t.sort((function(e,t){return e.priorityNum-t.priorityNum})));break;case te.PRIORITY_DESC:h(t.sort((function(e,t){return t.priorityNum-e.priorityNum})));break;default:h(void 0)}}}),(0,s.jsx)(d.Z,{navOp:b||g})]})}},8059:function(e,t,r){"use strict";var n=r(5893),i=r(4414),a=r(1664),o=r.n(a);r(7294);t.Z=function(e){var t=e.links;return(0,n.jsx)("div",{className:"w-full py-5 flex text-base font-bold bg-gray-50 lg:text-lg xl:text-xl",children:t.map((function(e,t){return(0,n.jsxs)("span",{className:"flex items-center ml-2 first:ml-0",children:[(0,n.jsx)(i.Z,{className:"w-4 h-4 mr-2 text-gray-500"}),(0,n.jsx)(o(),{href:e.href,children:(0,n.jsx)("a",{className:"hover:underline",children:e.name})})]},t)}))})}},1405:function(e,t,r){"use strict";var n=r(5893),i=r(4184),a=r.n(i);r(7294);t.Z=function(e){var t=e.children,r=e.className,i=e.wrap;return(0,n.jsx)("div",{className:a()("w-full flex",i?"flex-col gap-y-2.5 sm:gap-4 md:flex-row md:justify-between":"justify-between",r),children:t})}},9835:function(e,t,r){"use strict";var n=r(5893),i=r(4184),a=r.n(i),o=(r(7294),r(9049));t.Z=function(e){var t=e.children,r=e.threeTiers;return(0,n.jsx)("div",{className:a()("w-14 h-5 flex justify-center items-center text-2xs text-white font-semibold rounded-full shrink-0","md:w-16 md:h-7 md:text-xs","lg:w-20 lg:h-8 lg:text-sm","xl:w-24 xl:h-9 xl:text-sm",function(){switch(t){case o.O.CRITICAL:return"bg-red-600";case o.O.HIGH:return r?"bg-red-600":"bg-orange-400";case o.O.MEDIUM:return"bg-yellow-400";default:return"bg-green-600"}}()),children:t})}},3367:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.head,r=e.body;return(0,n.jsxs)("div",{className:"table w-ful border-separate border-spacing-0 border-t border-gray-200",children:[(0,n.jsx)("div",{className:"table-header-group",children:t}),(0,n.jsx)("div",{className:"table-row-group",children:r})]})}},6761:function(e,t,r){"use strict";var n=r(5893),i=r(4184),a=r.n(i);r(7294);t.Z=function(e){var t=e.children,r=e.isFullWidth,i=e.isHeader;return(0,n.jsx)("div",{className:a()("table-cell align-middle h-8 px-2.5 border-b border-gray-200 first:border-l last:border-r","sm:h-10 md:h-12 md:px-3 lg:h-14 xl:h-16",i?"max-w-1 w-full break-words":r?"max-w-1 w-full text-left truncate":"whitespace-nowrap text-center shrink-0"),children:(0,n.jsx)("span",{className:a()(!r&&"flex justify-center"),children:t})})}},9938:function(e,t,r){"use strict";var n=r(5893),i=r(4184),a=r.n(i);r(7294);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:a()("table-row font-bold text-sm bg-white text-gray-800 sticky top-0","sm:text-base md:text-lg lg:text-xl xl:text-2xl"),children:t})}},3536:function(e,t,r){"use strict";var n=r(1799),i=r(9396),a=r(5893),o=r(6515),s=r(1407),l=r(4184),u=r.n(l),c=r(7294),d=r(5237);t.Z=function(e){var t=e.children,r=e.popupInfo,l=(0,c.useState)(),p=l[0],f=l[1],x=(0,c.useState)(),v=x[0],m=x[1],b=(0,d.D)(p,v,{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,5]}},{name:"preventOverflow",options:{padding:10}}]}),h=b.styles,g=b.attributes;return(0,a.jsxs)(o.J,{as:c.Fragment,children:[(0,a.jsx)(o.J.Button,{as:"div",tabIndex:0,ref:f,className:u()("table-row group text-xs bg-white text-gray-800 border-none border-gray-200 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:z-10","sm:text-sm md:text-base lg:text-lg xl:text-xl"),children:t}),(0,a.jsx)(o.J.Overlay,{className:"fixed z-10 inset-0 bg-black opacity-30"}),(0,a.jsx)(s.u,(0,i.Z)((0,n.Z)({enter:"transition duration-200 ease-out",enterFrom:"transform scale-0 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-0 opacity-0",className:"absolute z-10 bg-white border border-gray-200 p-2.5 rounded",ref:m,style:h.popper},g.popper),{children:(0,a.jsx)(o.J.Panel,{className:"text-2xs sm:text-xs lg:text-sm",children:r})}))]})}},8834:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),i=r(1664),a=r.n(i),o=(r(7294),function(){return(0,n.jsx)("nav",{className:"w-full bg-blue-900 px-5 py-4 sm:px-10 md:px-16 lg:px-32 xl:px-60",children:(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("a",{className:"text-lg text-white md:text-xl lg:text-2xl xl:text-3xl",children:"Anal\xfdza rizik"})})})}),s=r(9008),l=r.n(s),u=function(e){var t=e.children,r=e.title,i=void 0===r?"Anal\xfdza rizik":r;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)(o,{})}),(0,n.jsx)("main",{className:"relative w-full flex-1 px-5 pb-5 bg-gray-50 sm:px-10 md:px-16 lg:px-32 xl:px-60 text-gray-800",children:t})]})}},978:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),i=r(2313),a=r(4184),o=r.n(a),s=(r(7294),function(e){var t=e.navOp;return(0,n.jsxs)("div",{className:"flex flex-col divide-y divide-gray-200",children:[(0,n.jsx)("div",{className:"pb-1 font-bold text-sm sm:text-base lg:text-lg w-64 sm:w-80 lg:w-96",children:t.name}),(0,n.jsxs)("div",{className:o()("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm w-64 sm:w-80 lg:w-96"),children:[(0,n.jsx)("b",{children:"Popis:"}),t.description.split("\n").map((function(e,t){return(0,n.jsx)("p",{children:e})}))]}),(0,n.jsxs)("div",{className:o()("py-1 first:pt-0 last:pb-0 text-2xs sm:text-xs lg:text-sm w-64 sm:w-80 lg:w-96"),children:[(0,n.jsx)("b",{children:"C\xedl:"}),t.goal.split("\n").filter((function(e){return"\r"!==e})).map((function(e){return(0,n.jsxs)("p",{children:["- ",e]})}))]})]})}),l=r(9835),u=r(3367),c=r(6761),d=r(9938),p=r(3536),f=function(e){var t=e.navOp;return(0,n.jsx)(u.Z,{head:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(c.Z,{isFullWidth:!0,isHeader:!0,children:"Navrhovan\xe1 opat\u0159en\xed"}),(0,n.jsx)(c.Z,{children:"Priorita"}),(0,n.jsx)(c.Z,{children:"N\xe1klady"}),(0,n.jsx)(c.Z,{children:"Datum"}),(0,n.jsx)(c.Z,{})]}),body:t.map((function(e){return(0,n.jsxs)(p.Z,{popupInfo:(0,n.jsx)(s,{navOp:e}),children:[(0,n.jsx)(c.Z,{isFullWidth:!0,children:e.name}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(l.Z,{threeTiers:!0,children:e.priority})}),(0,n.jsx)(c.Z,{children:e.costs}),(0,n.jsx)(c.Z,{children:e.date}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(i.Z,{className:"w-4 h-4 shrink-0 text-gray-300 group-hover:text-gray-500 group-focus:text-gray-500 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"})})]},e.id)}))})}},9049:function(e,t,r){"use strict";var n,i;r.d(t,{O:function(){return n}}),function(e){e.LOW="n\xedzk\xe1",e.MEDIUM="st\u0159edn\xed",e.HIGH="vysok\xe1",e.CRITICAL="kritick\xe1"}(n||(n={})),function(e){e.POPINFO="popInfo",e.AKTIVA="aktiva",e.EXOP="exOp",e.NAVOP="navOp"}(i||(i={}))},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[664,946,22,774,888,179],(function(){return t=9988,e(e.s=t);var t}));var t=e.O();_N_E=t}]);