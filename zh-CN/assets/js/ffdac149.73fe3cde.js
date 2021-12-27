"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2247],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8927:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={},p=void 0,u={unversionedId:"configuration/filter-plugins/Split",id:"configuration/filter-plugins/Split",title:"Split",description:"Filter plugin : Split",source:"@site/docs/configuration/filter-plugins/Split.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Split",permalink:"/zh-CN/docs/configuration/filter-plugins/Split",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/filter-plugins/Split.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Script",permalink:"/zh-CN/docs/configuration/filter-plugins/Script"},next:{title:"Sql",permalink:"/zh-CN/docs/configuration/filter-plugins/Sql"}},d=[{value:"Filter plugin : Split",id:"filter-plugin--split",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"delimiter string",id:"delimiter-string",children:[],level:5},{value:"fields list",id:"fields-list",children:[],level:5},{value:"source_field string",id:"source_field-string",children:[],level:5},{value:"target_field string",id:"target_field-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],s={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--split"},"Filter plugin : Split"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u6839\u636edelimiter\u5206\u5272\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#delimiter-string"},"delimiter")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'" "(\u7a7a\u683c)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fields-array"},"fields")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"root"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"delimiter-string"},"delimiter ","[string]"),(0,l.kt)("p",null,'\u5206\u9694\u7b26\uff0c\u6839\u636e\u5206\u9694\u7b26\u5bf9\u8f93\u5165\u5b57\u7b26\u4e32\u8fdb\u884c\u5206\u9694\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u5206\u9694\u7b26\u4e3a\u4e00\u4e2a\u7a7a\u683c(" ")\u3002'),(0,l.kt)("h5",{id:"fields-list"},"fields ","[list]"),(0,l.kt)("p",null,"\u5206\u5272\u540e\u7684\u5b57\u6bb5\u540d\u79f0\u5217\u8868\uff0c\u6309\u7167\u987a\u5e8f\u6307\u5b9a\u88ab\u5206\u5272\u540e\u7684\u5404\u4e2a\u5b57\u7b26\u4e32\u7684\u5b57\u6bb5\u540d\u79f0\u3002\n\u82e5",(0,l.kt)("inlineCode",{parentName:"p"},"fields"),"\u957f\u5ea6\u5927\u4e8e\u5206\u9694\u7ed3\u679c\u957f\u5ea6\uff0c\u5219\u591a\u4f59\u5b57\u6bb5\u8d4b\u503c\u4e3a\u7a7a\u5b57\u7b26\u3002"),(0,l.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"\u88ab\u5206\u5272\u524d\u7684\u5b57\u7b26\u4e32\u6765\u6e90\u5b57\u6bb5\uff0c\u82e5\u4e0d\u914d\u7f6e\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"raw_message")),(0,l.kt)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"target_field")," \u53ef\u4ee5\u6307\u5b9a\u88ab\u5206\u5272\u540e\u7684\u591a\u4e2a\u5b57\u6bb5\u88ab\u6dfb\u52a0\u5230Event\u7684\u4f4d\u7f6e\uff0c\u82e5\u4e0d\u914d\u7f6e\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"_root_"),"\uff0c\u5373\u5c06\u6240\u6709\u5206\u5272\u540e\u7684\u5b57\u6bb5\uff0c\u6dfb\u52a0\u5230Event\u6700\u9876\u7ea7\u3002\n\u5982\u679c\u6307\u5b9a\u4e86\u7279\u5b9a\u7684\u5b57\u6bb5\uff0c\u5219\u88ab\u5206\u5272\u540e\u7684\u5b57\u6bb5\u5c06\u88ab\u6dfb\u52a0\u5230\u8fd9\u4e2a\u5b57\u6bb5\u7684\u4e0b\u9762\u4e00\u7ea7\u3002"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/filter-plugin"},"Filter Plugin")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u6e90\u6570\u636e\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"message"),"\u5b57\u6bb5\u6839\u636e",(0,l.kt)("strong",{parentName:"p"},"&"),"\u8fdb\u884c\u5206\u5272\uff0c\u53ef\u4ee5\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"field1"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"field2"),"\u4e3akey\u83b7\u53d6\u76f8\u5e94value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'split {\n    source_field = "message"\n    target_field = "info"\n    delimiter = ","\n    fields = ["field1", "field2"]\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u6e90\u6570\u636e\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"message"),"\u5b57\u6bb5\u6839\u636e",(0,l.kt)("strong",{parentName:"p"},","),"\u8fdb\u884c\u5206\u5272\uff0c\u5206\u5272\u540e\u7684\u5b57\u6bb5\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"info"),"\uff0c\u53ef\u4ee5\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"info.field1"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"info.field2"),"\u4e3akey\u83b7\u53d6\u76f8\u5e94value")))}c.isMDXComponent=!0}}]);