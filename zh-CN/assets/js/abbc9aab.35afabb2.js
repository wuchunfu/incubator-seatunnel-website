"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8848],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return m}});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var u=r.createContext({}),s=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=s(t.components);return r.createElement(u.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=s(e),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return e?r.createElement(k,i(i({ref:n},p),{},{components:e})):r.createElement(k,i({ref:n},p))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,i=new Array(l);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},1193:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=e(7462),a=e(3366),l=(e(7294),e(3905)),i=["components"],o={},u="Jdbc",s={unversionedId:"flink/configuration/sink-plugins/Jdbc",id:"flink/configuration/sink-plugins/Jdbc",title:"Jdbc",description:"Sink plugin : Jdbc [Flink]",source:"@site/docs/flink/configuration/sink-plugins/Jdbc.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/Jdbc",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/sink-plugins/Jdbc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InfluxDB",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/InfluxDb"},next:{title:"Kafka",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Kafka"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"driver string",id:"driver-string",children:[],level:3},{value:"url string",id:"url-string",children:[],level:3},{value:"username string",id:"username-string",children:[],level:3},{value:"password string",id:"password-string",children:[],level:3},{value:"query string",id:"query-string",children:[],level:3},{value:"batch_size int",id:"batch_size-int",children:[],level:3},{value:"parallelism int",id:"parallelism-int",children:[],level:3},{value:"common options string",id:"common-options-string",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:p};function c(t){var n=t.components,e=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jdbc"},"Jdbc"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sink plugin : Jdbc ","[Flink]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data through jdbc"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,l.kt)("p",null,"Driver name, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.jdbc.Driver")),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"The URL of the JDBC connection. Such as: ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/test")),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"username"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"password"),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Insert statement"),(0,l.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.kt)("p",null,"Number of writes per batch"),(0,l.kt)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,l.kt)("p",null,"The parallelism of an individual operator, for JdbcSink."),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/flink/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   JdbcSink {\n     source_table_name = fake\n     driver = com.mysql.jdbc.Driver\n     url = "jdbc:mysql://localhost/test"\n     username = root\n     query = "insert into test(name,age) values(?,?)"\n     batch_size = 2\n   }\n')))}c.isMDXComponent=!0}}]);