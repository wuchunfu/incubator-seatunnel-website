"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3053],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=a,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(c,i(i({ref:e},s),{},{components:n})):r.createElement(c,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},895:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Redis",p={unversionedId:"spark/configuration/source-plugins/Redis",id:"spark/configuration/source-plugins/Redis",title:"Redis",description:"Source plugin: Redis [Spark]",source:"@site/docs/spark/configuration/source-plugins/Redis.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Redis",permalink:"/zh-CN/docs/spark/configuration/source-plugins/Redis",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/source-plugins/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Phoenix",permalink:"/zh-CN/docs/spark/configuration/source-plugins/Phoenix"},next:{title:"SocketStream",permalink:"/zh-CN/docs/spark/configuration/source-plugins/SocketStream"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"auth string",id:"auth-string",level:3},{value:"db_num int",id:"db_num-int",level:3},{value:"keys_or_key_pattern string",id:"keys_or_key_pattern-string",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"timeout int",id:"timeout-int",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redis"},"Redis"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Source plugin: Redis ","[Spark]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read data from Redis."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"6379")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db_num"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keys_or_key_pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_num"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"KV"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"2000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"host-string"},"host ","[string]"),(0,l.kt)("p",null,"Redis server address, default ",(0,l.kt)("inlineCode",{parentName:"p"},'"localhost"')),(0,l.kt)("h3",{id:"port-int"},"port ","[int]"),(0,l.kt)("p",null,"Redis service port, default ",(0,l.kt)("inlineCode",{parentName:"p"},"6379")),(0,l.kt)("h3",{id:"auth-string"},"auth ","[string]"),(0,l.kt)("p",null,"Redis authentication password"),(0,l.kt)("h3",{id:"db_num-int"},"db_num ","[int]"),(0,l.kt)("p",null,"Redis database index ID. It is connected to db ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," by default"),(0,l.kt)("h3",{id:"keys_or_key_pattern-string"},"keys_or_key_pattern ","[string]"),(0,l.kt)("p",null,"Redis Key, support fuzzy matching"),(0,l.kt)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,l.kt)("p",null,"Number of Redis shards. The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"3")),(0,l.kt)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,l.kt)("p",null,"Redis data type eg: ",(0,l.kt)("inlineCode",{parentName:"p"},"KV HASH LIST SET ZSET")),(0,l.kt)("h3",{id:"timeout-int"},"timeout ","[int]"),(0,l.kt)("p",null,"Redis timeout"),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Source Plugin common parameters, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'redis {\n  host = "localhost"\n  port = 6379\n  auth = "myPassword"\n  db_num = 1\n  keys_or_key_pattern = "*"\n  partition_num = 20\n  data_type = "HASH"\n  result_table_name = "hash_result_table"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The returned table is a data table in which both fields are strings")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"raw_key"),(0,l.kt)("th",{parentName:"tr",align:null},"raw_message"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keys"),(0,l.kt)("td",{parentName:"tr",align:null},"xxx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"my_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"xxx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keys_mine"),(0,l.kt)("td",{parentName:"tr",align:null},"xxx")))))}k.isMDXComponent=!0}}]);