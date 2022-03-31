"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1686],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Elasticsearch",p={unversionedId:"spark/configuration/source-plugins/Elasticsearch",id:"version-2.1.0/spark/configuration/source-plugins/Elasticsearch",title:"Elasticsearch",description:"Source plugin : Elasticsearch [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/Elasticsearch.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Elasticsearch",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/Elasticsearch.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/sink-plugin"},next:{title:"Fake",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Fake"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"index string",id:"index-string",level:3},{value:"es.* string",id:"es-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source plugin : Elasticsearch ","[Spark]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from Elasticsearch"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hosts"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"es.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,i.kt)("p",null,"ElasticSearch cluster address, the format is host:port, allowing multiple hosts to be specified. Such as ",(0,i.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]')," ."),(0,i.kt)("h3",{id:"index-string"},"index ","[string]"),(0,i.kt)("p",null,"ElasticSearch index name, support * fuzzy matching"),(0,i.kt)("h3",{id:"es-string"},"es.* ","[string]"),(0,i.kt)("p",null,"Users can also specify multiple optional parameters. For a detailed list of parameters, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"},"Parameters Supported by Elasticsearch"),"."),(0,i.kt)("p",null,"For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"es.read.metadata")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"es.read.metadata = true")," . If these non-essential parameters are not specified, they will use the default values given in the official documentation."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Source plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-20190424"\n    result_table_name = "my_dataset"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-*"\n    es.read.field.include = "name, age"\n    resulttable_name = "my_dataset"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Matches all indexes starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-")," , and only reads the two fields ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," .")))}m.isMDXComponent=!0}}]);