(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{9388:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[analysisId]",function(){return r(2855)}])},2855:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return k},default:function(){return Z}});var n=r(1799),s=r(9396),a=r(5893),l=r(9049),i=r(7294),c=r(8834),d=r(1405),o=r(8059),x=r(9835),u=r(3367),f=r(6761),h=r(9938),m=r(9646),g=function(e){var t=e.analysis;return(0,a.jsx)(u.Z,{head:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(f.Z,{isFullWidth:!0,children:"Rizika"}),(0,a.jsx)(f.Z,{children:"Hodnota"}),(0,a.jsx)(f.Z,{children:"Z\xe1va\u017enost"})]}),body:t.risks.map((function(e){return(0,a.jsxs)(m.Z,{href:"/".concat(t.id,"/").concat(e.id),children:[(0,a.jsx)(f.Z,{isFullWidth:!0,children:e.name}),(0,a.jsx)(f.Z,{children:e.maxR}),(0,a.jsx)(f.Z,{children:(0,a.jsx)(x.Z,{children:e.severity})})]},"risk-table-row-".concat(e.id))}))})},b=r(4184),v=r.n(b),w=r(9217),y=r(6429),p=function(e){var t,r=e.data,n=e.labels,s=e.onCallback,c=function(e,r){o===n[r]?(t.data.datasets[e].borderColor[r]="white",o=null,t.update(),s()):(t.data.datasets[e].borderColor=n.map((function(){return"white"})),t.data.datasets[e].borderColor[r]="black",t.update(),o=n[r],s(n[r])),0===t.data.datasets[e].offset[r]?(t.data.datasets[e].offset=n.map((function(){return 0})),t.data.datasets[e].offset[r]=40,t.update()):(t.data.datasets[e].offset[r]=0,t.update())},d=(0,i.useRef)(null),o=null;return(0,i.useEffect)((function(){var e,s=null===(e=d.current)||void 0===e?void 0:e.getContext("2d");return s&&(w.Z.register(y.Z),t=new w.Z(s,{type:"pie",data:{labels:n,datasets:[{label:"Severity",data:r,backgroundColor:n.map((function(e){return function(e){switch(e){case l.m.CRITICAL:return"#dc2626";case l.m.HIGH:return"#fb923c";case l.m.MEDIUM:return"#facc15";default:return"#16a34a"}}(e)})),borderWidth:2,borderColor:n.map((function(){return"white"})),offset:n.map((function(){return 0}))}]},options:{layout:{padding:20},plugins:{tooltip:{enabled:!1},datalabels:{color:"white",labels:{title:{font:{size:24,weight:"bold"},align:"end"}}},legend:{onClick:function(e,t){t&&"number"===typeof t.index&&c(0,t.index)},onHover:function(e,t){e.native.target.style.cursor=t?"pointer":"default"}}},onClick:function(e,t){if(t.length){var r=t[0];c(r.datasetIndex,r.index)}},onHover:function(e,t){t.length?e.native.target.style.cursor="pointer":e.native.target.style.cursor="default"}}})),function(){t.destroy()}}),[r]),(0,a.jsx)("div",{className:"relative mx-auto my-5 w-[340px] h-[340px] lg:w-[420px] lg:h-[420px]",children:(0,a.jsx)("canvas",{ref:d})})},j=r(6525),k=!0,Z=function(e){var t=e.analysis,r=e.analyses,x=(0,i.useState)(),u=x[0],f=x[1],h=(0,i.useMemo)((function(){return[t.stats.severity[l.m.CRITICAL],t.stats.severity[l.m.HIGH],t.stats.severity[l.m.MEDIUM],t.stats.severity[l.m.LOW]]}),[t]),m=(0,i.useMemo)((function(){return[l.m.CRITICAL,l.m.HIGH,l.m.MEDIUM,l.m.LOW]}),[t]);return(0,i.useEffect)((function(){return function(){f(void 0)}}),[t]),(0,a.jsxs)(c.Z,{title:"P\u0159ehled rizik | ".concat(t.name),children:[(0,a.jsx)(o.Z,{links:[{name:"\xdavod",href:"/"}]}),(0,a.jsxs)(d.Z,{className:v()("text-lg font-bold mb-5","md:text-xl md:mb-6","lg:text-2xl lg:mb-8","xl:text-3xl xl:mb-10"),children:["P\u0159ehled rizik:",(0,a.jsx)(j.Z,{analyses:r,analysis:t})]}),(0,a.jsx)(p,{labels:m,data:h,onCallback:function(e){f(e?(0,s.Z)((0,n.Z)({},t),{risks:t.risks.filter((function(t){return t.severity===e}))}):void 0)}}),(0,a.jsx)(g,{analysis:u||t})]})}},2895:function(e,t,r){"use strict";var n=r(5893),s=r(4184),a=r.n(s),l=r(1664),i=r.n(l);r(7294);t.Z=function(e){var t=e.children,r=e.href;return r?(0,n.jsx)(i(),{href:r,children:(0,n.jsx)("a",{className:a()("w-24 h-9 shrink-0 flex justify-center items-center rounded text-sm font-semibold border border-gray-200","sm:w-28 sm:h-10","md:w-32 md:h-12 md:text-base","lg:w-36 lg:h-14 lg:text-lg","xl:w-40 xl:h-16 xl:text-xl","text-gray-800 bg-white hover:bg-gray-100 focus:bg-gray-100"),children:t})}):(0,n.jsx)("div",{className:a()("w-24 h-9 shrink-0 flex justify-center items-center rounded text-sm font-semibold border border-gray-200","sm:w-28 sm:h-10","md:w-32 md:h-12 md:text-base","lg:w-36 lg:h-14 lg:text-lg","xl:w-40 xl:h-16 xl:text-xl","text-gray-500 bg-transparent"),children:t})}},8059:function(e,t,r){"use strict";var n=r(5893),s=r(4414),a=r(1664),l=r.n(a);r(7294);t.Z=function(e){var t=e.links;return(0,n.jsx)("div",{className:"w-full py-5 flex text-base font-bold bg-gray-50 lg:text-lg xl:text-xl",children:t.map((function(e,t){return(0,n.jsxs)("span",{className:"flex items-center ml-2 first:ml-0",children:[(0,n.jsx)(s.Z,{className:"w-4 h-4 mr-2 text-gray-500"}),(0,n.jsx)(l(),{href:e.href,children:(0,n.jsx)("a",{className:"hover:underline",children:e.name})})]},t)}))})}},1405:function(e,t,r){"use strict";var n=r(5893),s=r(4184),a=r.n(s);r(7294);t.Z=function(e){var t=e.children,r=e.className,s=e.wrap;return(0,n.jsx)("div",{className:a()("w-full flex",s?"flex-col gap-y-2.5 sm:gap-4 md:flex-row md:justify-between":"justify-between",r),children:t})}},9835:function(e,t,r){"use strict";var n=r(5893),s=r(4184),a=r.n(s),l=(r(7294),r(9049));t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:a()("w-14 h-5 flex justify-center items-center text-2xs text-white font-semibold rounded-full shrink-0","md:w-16 md:h-7 md:text-xs","lg:w-20 lg:h-8 lg:text-sm","xl:w-24 xl:h-9 xl:text-sm",function(){switch(t){case l.m.CRITICAL:return"bg-red-600";case l.m.HIGH:return"bg-orange-400";case l.m.MEDIUM:return"bg-yellow-400";default:return"bg-green-600"}}()),children:t})}},3367:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.head,r=e.body;return(0,n.jsxs)("div",{className:"table w-ful border-separate border-spacing-0 border-t border-gray-200",children:[(0,n.jsx)("div",{className:"table-header-group",children:t}),(0,n.jsx)("div",{className:"table-row-group",children:r})]})}},6761:function(e,t,r){"use strict";var n=r(5893),s=r(4184),a=r.n(s);r(7294);t.Z=function(e){var t=e.children,r=e.isFullWidth;return(0,n.jsx)("div",{className:a()("table-cell align-middle h-8 px-2.5 whitespace-nowrap border-b border-gray-200 first:border-l last:border-r","sm:h-10 md:h-12 md:px-3 lg:h-14 xl:h-16",r?"max-w-1 w-full text-left truncate":"text-center shrink-0"),children:(0,n.jsx)("span",{className:a()(!r&&"flex justify-center"),children:t})})}},9938:function(e,t,r){"use strict";var n=r(5893),s=r(4184),a=r.n(s);r(7294);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:a()("table-row font-bold text-sm bg-white text-gray-800 sticky top-0","sm:text-base md:text-lg lg:text-xl xl:text-2xl"),children:t})}},9646:function(e,t,r){"use strict";var n=r(5893),s=r(4184),a=r.n(s),l=r(1664),i=r.n(l);r(7294);t.Z=function(e){var t=e.children,r=e.href;return r?(0,n.jsx)(i(),{href:r,children:(0,n.jsx)("a",{className:a()("table-row text-xs bg-white text-gray-800 border border-gray-200 cursor-pointer hover:bg-gray-100 focus:bg-gray-100","sm:text-sm md:text-base lg:text-lg xl:text-xl"),children:t})}):(0,n.jsx)("div",{className:a()("table-row text-xs bg-white text-gray-800 border border-gray-200","sm:text-sm md:text-base lg:text-lg xl:text-xl"),children:t})}},8834:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),s=r(1664),a=r.n(s),l=(r(7294),function(){return(0,n.jsx)("nav",{className:"w-full bg-blue-900 px-5 py-4 sm:px-10 md:px-16 lg:px-32 xl:px-60",children:(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("a",{className:"text-lg text-white md:text-xl lg:text-2xl xl:text-3xl",children:"Anal\xfdza rizik"})})})}),i=r(9008),c=r.n(i),d=function(e){var t=e.children,r=e.title,s=void 0===r?"Anal\xfdza rizik":r;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)(l,{})}),(0,n.jsx)("main",{className:"relative w-full flex-1 px-5 pb-5 bg-gray-50 sm:px-10 md:px-16 lg:px-32 xl:px-60 text-gray-800",children:t})]})}},6525:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(5893),s=r(8171),a=r(1407),l=r(662),i=r(1799),c=r(9396),d=r(9534),o=r(4184),x=r.n(o),u=r(1664),f=r.n(u),h=(0,r(7294).forwardRef)((function(e,t){var r=e.active,s=e.href,a=e.children,l=(0,d.Z)(e,["active","href","children"]);return(0,n.jsx)(f(),{href:s,children:(0,n.jsx)("a",(0,c.Z)((0,i.Z)({ref:t},l),{className:x()("flex justify-center w-full py-2 text-xs text-gray-800","md:text-sm","lg:text-base","xl:text-lg",r&&"bg-gray-100"),children:a}))})})),m=r(2895),g=function(e){var t=e.analysis,r=e.analyses,i=e.risk,c=r.filter((function(e){return e.id!==t.id}));return i&&(c=c.filter((function(e){return e.risks.filter((function(e){return e.id===i.id})).length}))),c.length?(0,n.jsx)("div",{className:"relative z-10 inline-block text-left",children:(0,n.jsxs)(s.v,{children:[(0,n.jsxs)(s.v.Button,{className:x()("w-24 h-9 shrink-0 px-1.5 flex justify-between items-center rounded text-xs font-semibold border border-gray-200","sm:w-28 sm:h-10 sm:px-2.5","md:w-32 md:h-12 md:text-base","lg:w-36 lg:h-14 lg:text-lg","xl:w-40 xl:h-16 xl:text-xl","text-gray-500 bg-white hover:bg-gray-100 focus:bg-gray-100"),children:[t.name,(0,n.jsx)(l.Z,{className:"w-4 h-4 text-gray-500 shrink-0 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"})]}),(0,n.jsx)(a.u,{enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsx)(s.v.Items,{className:x()("absolute w-24 bg-white border border-gray-200 rounded max-h-40 overflow-y-auto","sm:w-28 md:w-32 md:max-h-48 lg:w-36 lg:max-h-52 xl:w-40 xl:max-h-60"),children:c.map((function(e){return(0,n.jsx)(s.v.Item,{children:function(t){var r=t.active;return(0,n.jsx)(h,{active:r,href:"/".concat(e.id).concat(i?"/".concat(i.id):""),children:e.name})}},e.id)}))})})]})}):(0,n.jsx)(m.Z,{children:t.name})}},9049:function(e,t,r){"use strict";var n,s;r.d(t,{m:function(){return n}}),function(e){e.LOW="n\xedzk\xe1",e.MEDIUM="st\u0159edn\xed",e.HIGH="vysok\xe1",e.CRITICAL="kritick\xe1"}(n||(n={})),function(e){e.POPINFO="popInfo",e.AKTIVA="aktiva",e.EXOP="exOp"}(s||(s={}))}},function(e){e.O(0,[757,664,94,902,774,888,179],(function(){return t=9388,e(e.s=t);var t}));var t=e.O();_N_E=t}]);