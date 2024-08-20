"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[48733],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=g(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const l={},o="Neo4j",i={unversionedId:"connector-v2/source/Neo4j",id:"version-2.3.7/connector-v2/source/Neo4j",title:"Neo4j",description:"Neo4j source connector",source:"@site/versioned_docs/version-2.3.7/connector-v2/source/Neo4j.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Neo4j",permalink:"/docs/2.3.7/connector-v2/source/Neo4j",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.7/connector-v2/source/Neo4j.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"MySQL",permalink:"/docs/2.3.7/connector-v2/source/Mysql"},next:{title:"Notion",permalink:"/docs/2.3.7/connector-v2/source/Notion"}},s={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"schema.fields string",id:"schemafields-string",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],c={toc:g},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"neo4j"},"Neo4j"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Neo4j source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from Neo4j."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"batch")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"stream")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"column projection")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"parallelism")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"support user-defined split"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"uri"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bearer_token"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"schema"),(0,a.yg)("td",{parentName:"tr",align:null},"Object"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,a.yg)("td",{parentName:"tr",align:null},"Long"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"30")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Long"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"30")))),(0,a.yg)("h3",{id:"uri-string"},"uri ","[string]"),(0,a.yg)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,a.yg)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"username of the Neo4j"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"password of the Neo4j. required if ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," is provided"),(0,a.yg)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,a.yg)("p",null,"base64 encoded bearer token of the Neo4j. for Auth."),(0,a.yg)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,a.yg)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,a.yg)("h3",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,"database name."),(0,a.yg)("h3",{id:"query-string"},"query ","[string]"),(0,a.yg)("p",null,"Query statement."),(0,a.yg)("h3",{id:"schemafields-string"},"schema.fields ","[string]"),(0,a.yg)("p",null,"returned fields of ",(0,a.yg)("inlineCode",{parentName:"p"},"query")),(0,a.yg)("p",null,"see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.7/concept/connector-v2-features"},"column projection")),(0,a.yg)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,a.yg)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,a.yg)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,a.yg)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'source {\n    Neo4j {\n        uri = "neo4j://localhost:7687"\n        username = "neo4j"\n        password = "1234"\n        database = "neo4j"\n    \n        max_transaction_retry_time = 1\n        max_connection_timeout = 1\n    \n        query = "MATCH (a:Person) RETURN a.name, a.age"\n    \n        schema {\n            fields {\n                a.age=INT\n                a.name=STRING\n            }\n        }\n    }\n}\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"next-version"},"next version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Neo4j Source Connector")))}p.isMDXComponent=!0}}]);