"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43924],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>c});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),g=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=g(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=g(t),u=r,c=d["".concat(o,".").concat(u)]||d[u]||y[u]||l;return t?a.createElement(c,i(i({ref:n},m),{},{components:t})):a.createElement(c,i({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var g=2;g<l;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const l={},i="FieldMapper",p={unversionedId:"transform-v2/field-mapper",id:"version-2.3.7/transform-v2/field-mapper",title:"FieldMapper",description:"FieldMapper transform plugin",source:"@site/versioned_docs/version-2.3.7/transform-v2/field-mapper.md",sourceDirName:"transform-v2",slug:"/transform-v2/field-mapper",permalink:"/docs/2.3.7/transform-v2/field-mapper",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.7/transform-v2/field-mapper.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"DynamicCompile",permalink:"/docs/2.3.7/transform-v2/dynamic-compile"},next:{title:"FilterRowKind",permalink:"/docs/2.3.7/transform-v2/filter-rowkind"}},o={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"field_mapper config",id:"field_mapper-config",level:3},{value:"common options config",id:"common-options-config",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],m={toc:g},d="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"fieldmapper"},"FieldMapper"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"FieldMapper transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Add input schema and output schema mapping."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_mapper"),(0,r.yg)("td",{parentName:"tr",align:null},"Object"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"field_mapper-config"},"field_mapper ","[config]"),(0,r.yg)("p",null,"Specify the field mapping relationship between input and output"),(0,r.yg)("h3",{id:"common-options-config"},"common options ","[config]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.7/transform-v2/common-options"},"Transform Plugin")," for details."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"id"),(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")))),(0,r.yg)("p",null,"We want to delete ",(0,r.yg)("inlineCode",{parentName:"p"},"age")," field and update the filed order to ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"card"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," and rename ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"new_name"),". We can add ",(0,r.yg)("inlineCode",{parentName:"p"},"FieldMapper")," transform like this"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'transform {\n  FieldMapper {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    field_mapper = {\n        id = id\n        card = card\n        name = new_name\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Then the data in result table ",(0,r.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"id"),(0,r.yg)("th",{parentName:"tr",align:null},"card"),(0,r.yg)("th",{parentName:"tr",align:null},"new_name"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"May Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom")))),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Copy Transform Connector")))}y.isMDXComponent=!0}}]);