"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3849],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6986:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"configuration/input-plugins/File",id:"configuration/input-plugins/File",title:"File",description:"Input plugin : File [Static]",source:"@site/docs/configuration/input-plugins/File.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/File",permalink:"/docs/configuration/input-plugins/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/input-plugins/File.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FakeStream",permalink:"/docs/configuration/input-plugins/FakeStream"},next:{title:"FileStream",permalink:"/docs/configuration/input-plugins/FileStream"}},s=[{value:"Input plugin : File Static",id:"input-plugin--file-static",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"format string",id:"format-string",children:[],level:5},{value:"options.* object",id:"options-object",children:[],level:5},{value:"options.rowTag string",id:"optionsrowtag-string",children:[],level:5},{value:"path string",id:"path-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],c={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"input-plugin--file-static"},"Input plugin : File ","[Static]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.1.1")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"\u4ece\u672c\u5730\u6587\u4ef6\u4e2d\u8bfb\u53d6\u539f\u59cb\u6570\u636e\u3002"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#format-string"},"format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#options-object"},"options.*")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#optionsrowTag-string"},"options.rowTag")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#path-string"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"format-string"},"format ","[string]"),(0,i.kt)("p",null,"\u6587\u4ef6\u7684\u683c\u5f0f\uff0c\u76ee\u524d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"csv"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"json"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"xml"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"orc"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,i.kt)("h5",{id:"options-object"},"options.* ","[object]"),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," \u4e3a ",(0,i.kt)("strong",{parentName:"p"},"xml")," \u65f6\u5fc5\u987b\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"optionss.rowTag"),"\uff0c\u914d\u7f6eXML\u683c\u5f0f\u6570\u636e\u7684Tag\uff0c\u5176\u4ed6\u53c2\u6570\u4e0d\u662f\u5fc5\u586b\u53c2\u6570\u3002"),(0,i.kt)("h5",{id:"optionsrowtag-string"},"options.rowTag ","[string]"),(0,i.kt)("p",null,"\u5f53format\u4e3axml\u5fc5\u987b\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"optionss.rowTag"),"\uff0c\u914d\u7f6eXML\u683c\u5f0f\u6570\u636e\u7684Tag"),(0,i.kt)("h5",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"\u6587\u4ef6\u8def\u5f84\uff0c\u4ee5file://\u5f00\u5934"),(0,i.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file {\n    path = "file:///var/log/access.log"\n    result_table_name = "accesslog"\n    format = "text"\n}\n')),(0,i.kt)("p",null,"\u8bfb\u53d6XML\u683c\u5f0f\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file {\n    path = "file:///data0/src/books.xml"\n    options.rowTag = "book"\n    format = "xml"\n    result_table_name = "books"\n}\n')),(0,i.kt)("p",null,"\u8bfb\u53d6CSV\u683c\u5f0f\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file {\n    path = "file:///data0/src/books.csv"\n    format = "csv"\n    # \u5c06\u7b2c\u4e00\u5217\u7684header\u4f5c\u4e3a\u5217\u540d\n    # \u5426\u5219\u5c06\u4ee5 _c0,_c1,_c2...\u4f9d\u6b21\u547d\u540d\n    options.header = "true"\n    result_table_name = "books"\n}\n')))}m.isMDXComponent=!0}}]);