"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[467],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7550:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u=void 0,p={unversionedId:"configuration/input-plugins/MySQL",id:"configuration/input-plugins/MySQL",title:"MySQL",description:"Input plugin : Mysql",source:"@site/docs/configuration/input-plugins/MySQL.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/MySQL",permalink:"/docs/configuration/input-plugins/MySQL",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/input-plugins/MySQL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/docs/configuration/input-plugins/MongoDB"},next:{title:"Redis",permalink:"/docs/configuration/input-plugins/Redis"}},s=[{value:"Input plugin : Mysql",id:"input-plugin--mysql",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"password string",id:"password-string",children:[],level:5},{value:"jdbc string",id:"jdbc-string",children:[],level:5},{value:"table string",id:"table-string",children:[],level:5},{value:"url string",id:"url-string",children:[],level:5},{value:"user string",id:"user-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],c={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"input-plugin--mysql"},"Input plugin : Mysql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u8bfb\u53d6MySQL\u7684\u6570\u636e"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#password-string"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#jdbc-string"},"jdbc.*")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#url-string"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#user-string"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"\u5bc6\u7801"),(0,l.kt)("h5",{id:"jdbc-string"},"jdbc ","[string]"),(0,l.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5fc5\u987b\u6307\u5b9a\u7684\u53c2\u6570\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u8986\u76d6\u4e86Spark JDBC\u63d0\u4f9b\u7684\u6240\u6709",(0,l.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/2.4.0/sql-programming-guide.html#jdbc-to-other-databases"},"\u53c2\u6570"),"."),(0,l.kt)("p",null,'\u6307\u5b9a\u53c2\u6570\u7684\u65b9\u5f0f\u662f\u5728\u539f\u53c2\u6570\u540d\u79f0\u4e0a\u52a0\u4e0a\u524d\u7f00"jdbc."\uff0c\u5982\u6307\u5b9afetchsize\u7684\u65b9\u5f0f\u662f: jdbc.fetchsize = 50000\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8fd9\u4e9b\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u5b83\u4eec\u5c06\u4f7f\u7528Spark JDBC\u7ed9\u51fa\u7684\u9ed8\u8ba4\u503c\u3002'),(0,l.kt)("h5",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"\u8868\u540d\uff0c\u6216\u8005\u6307\u5b9aSQL\u8bed\u53e5\u7528\u4e8e\u8fc7\u6ee4"),(0,l.kt)("h5",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"JDBC\u8fde\u63a5\u7684URL\u3002\u53c2\u8003\u4e00\u4e2a\u6848\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/info")),(0,l.kt)("h5",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"\u7528\u6237\u540d"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mysql {\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mysql {\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "(select * from access) AS a"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4eceMySQL\u4e2d\u8bfb\u53d6\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mysql {\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n    jdbc.partitionColumn = "item_id"\n    jdbc.numPartitions = "10"\n    jdbc.lowerBound = 0\n    jdbc.upperBound = 100\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u6307\u5b9a\u5b57\u6bb5\u5212\u5206\u5206\u533a")))}d.isMDXComponent=!0}}]);