"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9959],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={},p=void 0,u={unversionedId:"configuration/filter-plugins/Convert",id:"configuration/filter-plugins/Convert",title:"Convert",description:"Filter plugin : Convert",source:"@site/docs/configuration/filter-plugins/Convert.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Convert",permalink:"/docs/configuration/filter-plugins/Convert",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/filter-plugins/Convert.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checksum",permalink:"/docs/configuration/filter-plugins/Checksum"},next:{title:"Date",permalink:"/docs/configuration/filter-plugins/Date"}},c=[{value:"Filter plugin : Convert",id:"filter-plugin--convert",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"new_type string",id:"new_type-string",children:[],level:5},{value:"source_field string",id:"source_field-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--convert"},"Filter plugin : Convert"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u5bf9\u6307\u5b9a\u5b57\u6bb5\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#new_type-string"},"new_type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"new_type-string"},"new_type ","[string]"),(0,l.kt)("p",null,"\u9700\u8981\u8f6c\u6362\u7684\u7ed3\u679c\u7c7b\u578b\uff0c\u5f53\u524d\u652f\u6301\u7684\u7c7b\u578b\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"integer"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"long"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\u7b49"),(0,l.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"\u6e90\u6570\u636e\u5b57\u6bb5"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/filter-plugin"},"Filter Plugin")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'convert {\n    source_field = "age"\n    new_type = "integer"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u6e90\u6570\u636e\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"age"),"\u5b57\u6bb5\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"integer"),"\u7c7b\u578b")))}d.isMDXComponent=!0}}]);