"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[312],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},p="LocalFile",c={unversionedId:"connector-v2/source/LocalFile",id:"connector-v2/source/LocalFile",title:"LocalFile",description:"Local file source connector",source:"@site/docs/connector-v2/source/LocalFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/LocalFile",permalink:"/docs/connector-v2/source/LocalFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/LocalFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/docs/connector-v2/source/Kudu"},next:{title:"OssFile",permalink:"/docs/connector-v2/source/OssFile"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"type string",id:"type-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"Example",id:"example",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"localfile"},"LocalFile"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Local file source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read data from local file system."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"The source file path."),(0,l.kt)("h3",{id:"type-string"},"type ","[string]"),(0,l.kt)("p",null,"File type, supported as the following file types:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"text")," ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,l.kt)("inlineCode",{parentName:"p"},"json")),(0,l.kt)("p",null,"If you assign file type to ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("p",null,"upstream data is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.kt)("p",null,"you should assign schema as the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.kt)("p",null,"connector will generate data as the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"data"),(0,l.kt)("th",{parentName:"tr",align:null},"success"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"get success"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"If you assign file type to ",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.kt)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,l.kt)("p",null,"If you assign file type to ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," ",(0,l.kt)("inlineCode",{parentName:"p"},"csv"),", schema option not supported temporarily, but the subsequent features will support."),(0,l.kt)("p",null,"Now connector will treat the upstream data as the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"lines"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"The content of every line in file")))),(0,l.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.kt)("p",null,"The schema information of upstream data."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  path = "/apps/hive/demo/student"\n  type = "parquet"\n}\n\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  schema {\n    fields {\n      name = string\n      age = int\n    }\n  }\n  path = "/apps/hive/demo/student"\n  type = "json"\n}\n\n')))}d.isMDXComponent=!0}}]);