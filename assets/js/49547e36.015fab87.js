"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2461],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3073:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"configuration/input-plugins/Hive",id:"configuration/input-plugins/Hive",title:"Hive",description:"Input plugin : Hive",source:"@site/docs/configuration/input-plugins/Hive.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Hive",permalink:"/docs/configuration/input-plugins/Hive",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/input-plugins/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HdfsStream",permalink:"/docs/configuration/input-plugins/HdfsStream"},next:{title:"Jdbc",permalink:"/docs/configuration/input-plugins/Jdbc"}},s=[{value:"Input plugin : Hive",id:"input-plugin--hive",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"pre_sql string",id:"pre_sql-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"input-plugin--hive"},"Input plugin : Hive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.kt)("li",{parentName:"ul"},"Homepage: ",(0,a.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.kt)("li",{parentName:"ul"},"Version: 1.1.2")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u4ecehive\u4e2d\u83b7\u53d6\u6570\u636e\uff0c"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#pre_sql-string"},"pre_sql")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h5",{id:"pre_sql-string"},"pre_sql ","[string]"),(0,a.kt)("p",null,"\u8fdb\u884c\u9884\u5904\u7406\u7684sql, \u5982\u679c\u4e0d\u9700\u8981\u9884\u5904\u7406,\u53ef\u4ee5\u4f7f\u7528select * from hive_db.hive_table"),(0,a.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u4eceseatunnel v1.3.4 \u5f00\u59cb\uff0c\u4f7f\u7528hive input\u5fc5\u987b\u505a\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# seatunnel \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684spark section\u4e2d\uff1a\n\nspark {\n  ...\n  spark.sql.catalogImplementation = "hive"\n  ...\n}\n\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'spark {\n  ...\n  spark.sql.catalogImplementation = "hive"\n  ...\n}\n\ninput {\n  hive {\n    pre_sql = "select * from mydb.mytb"\n    result_table_name = "myTable"\n  }\n}\n\n...\n')),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("p",null,"\u5fc5\u987b\u4fdd\u8bc1hive\u7684metastore\u662f\u5728\u670d\u52a1\u72b6\u6001\u3002\u542f\u52a8\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"hive --service metastore")," \u670d\u52a1\u7684\u9ed8\u8ba4\u7aef\u53e3\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"9083"),"\ncluster\u3001client\u3001local\u6a21\u5f0f\u4e0b\u5fc5\u987b\u628ahive-site.xml\u7f6e\u4e8e\u63d0\u4ea4\u4efb\u52a1\u8282\u70b9\u7684$HADOOP_CONF\u76ee\u5f55\u4e0b(\u6216\u8005\u653e\u5728$SPARK_HOME/conf\u4e0b\u9762),IDE\u672c\u5730\u8c03\u8bd5\u5c06\u5176\u653e\u5728resources\u76ee\u5f55"))}m.isMDXComponent=!0}}]);