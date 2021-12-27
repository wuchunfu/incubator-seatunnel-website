"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8522],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,u={unversionedId:"configuration/filter-plugins/Script",id:"configuration/filter-plugins/Script",title:"Script",description:"Filter plugin : Script",source:"@site/docs/configuration/filter-plugins/Script.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Script",permalink:"/zh-CN/docs/configuration/filter-plugins/Script",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/filter-plugins/Script.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sample",permalink:"/zh-CN/docs/configuration/filter-plugins/Sample"},next:{title:"Split",permalink:"/zh-CN/docs/configuration/filter-plugins/Split"}},c=[{value:"Filter plugin : Script",id:"filter-plugin--script",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"object_name string",id:"object_name-string",children:[],level:5},{value:"script_name string",id:"script_name-string",children:[],level:5},{value:"errorList boolean",id:"errorlist-boolean",children:[],level:5},{value:"isCache boolean",id:"iscache-boolean",children:[],level:5},{value:"isTrace boolean",id:"istrace-boolean",children:[],level:5},{value:"isPrecise boolean",id:"isprecise-boolean",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--script"},"Filter plugin : Script"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.1.1")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u89e3\u6790\u5e76\u6267\u884c\u81ea\u5b9a\u4e49\u811a\u672c\u4e2d\u903b\u8f91, \u5373\u63a5\u53d7",(0,l.kt)("inlineCode",{parentName:"p"},"object_name"),"(\u9ed8\u8ba4\u662fevent) \u6307\u5b9a\u7684JSONObject,\n\u5b8c\u6210\u81ea\u5b9a\u4e49\u7684\u5904\u7406\u903b\u8f91\uff0c\u518d\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684event."),(0,l.kt)("p",null,"\u811a\u672c\u89e3\u6790\u5f15\u64ce\u7684\u5b9e\u73b0\uff0c\u91c7\u7528\u7684\u662f",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/QLExpress"},"QLExpress"),",\n\u5177\u4f53\u8bed\u6cd5\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/QLExpress#%E4%B8%89%E8%AF%AD%E6%B3%95%E4%BB%8B%E7%BB%8D"},"QLExpress \u8bed\u6cd5"),"."),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#object_name-string"},"object_name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#script_name-string"},"script_name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#errorList-boolean"},"errorList")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isCache-boolean"},"isCache")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isTrace-boolean"},"isTrace")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isPrecise-boolean"},"isPrecise")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"object_name-string"},"object_name ","[string]"),(0,l.kt)("p",null,"\u811a\u672c\u5185\u7f6eJSONObject\u7684\u5f15\u7528\u540d, \u4e0d\u8bbe\u7f6e\u9ed8\u8ba4\u4e3a'event'"),(0,l.kt)("h5",{id:"script_name-string"},"script_name ","[string]"),(0,l.kt)("p",null,"\u9700\u8981\u6267\u884c\u811a\u672c\u7684\u6587\u4ef6\u540d\u79f0, \u6ce8\u610f\u811a\u672c\u6587\u4ef6\u5fc5\u987b\u653e\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"plugins/script/files"),"\u76ee\u5f55\u4e0b\u9762."),(0,l.kt)("h5",{id:"errorlist-boolean"},"errorList ","[boolean]"),(0,l.kt)("p",null,"\u8f93\u51fa\u7684\u9519\u8bef\u4fe1\u606fList"),(0,l.kt)("h5",{id:"iscache-boolean"},"isCache ","[boolean]"),(0,l.kt)("p",null,"\u662f\u5426\u4f7f\u7528Cache\u4e2d\u7684\u6307\u4ee4\u96c6"),(0,l.kt)("h5",{id:"istrace-boolean"},"isTrace ","[boolean]"),(0,l.kt)("p",null,"\u662f\u5426\u8f93\u51fa\u6240\u6709\u7684\u8ddf\u8e2a\u4fe1\u606f\uff0c\u540c\u65f6\u8fd8\u9700\u8981log\u7ea7\u522b\u662fDEBUG\u7ea7"),(0,l.kt)("h5",{id:"isprecise-boolean"},"isPrecise ","[boolean]"),(0,l.kt)("p",null,"\u662f\u5426\u9700\u8981\u9ad8\u7cbe\u5ea6\u7684\u8ba1\u7b97"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/filter-plugin"},"Filter Plugin")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"conf\u6587\u4ef6\u63d2\u4ef6\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  script {\n    script_name = "my_script.ql"\n  }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u811a\u672c(my_script.ql)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'newEvent = new java.util.HashMap();\nyou = event.getString("name");\nage = event.getLong("age");\nif(age > 10){\nnewEvent.put("name",you);\n}\nreturn newEvent;\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679cage\u5927\u4e8e10\uff0c\u5219\u83b7\u53d6name\u653e\u5165map\u4e2d\u5e76\u8fd4\u56de")))}m.isMDXComponent=!0}}]);