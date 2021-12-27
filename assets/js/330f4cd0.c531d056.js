"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2989],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3005:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u=void 0,p={unversionedId:"configuration/output-plugins/Kafka",id:"configuration/output-plugins/Kafka",title:"Kafka",description:"Output plugin : Kafka",source:"@site/docs/configuration/output-plugins/Kafka.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Kafka",permalink:"/docs/configuration/output-plugins/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/output-plugins/Kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jdbc",permalink:"/docs/configuration/output-plugins/Jdbc"},next:{title:"Kudu",permalink:"/docs/configuration/output-plugins/Kudu"}},s=[{value:"Output plugin : Kafka",id:"output-plugin--kafka",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"producer.bootstrap.servers string",id:"producerbootstrapservers-string",children:[],level:5},{value:"topic string",id:"topic-string",children:[],level:5},{value:"producer string",id:"producer-string",children:[{value:"Notes",id:"notes",children:[],level:6}],level:5},{value:"checkpointLocation string",id:"checkpointlocation-string",children:[],level:5},{value:"streaming_output_mode string",id:"streaming_output_mode-string",children:[],level:5},{value:"format string",id:"format-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],c={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"output-plugin--kafka"},"Output plugin : Kafka"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"\u8f93\u51fa\u6570\u636e\u5230Kafka"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"),(0,i.kt)("th",{parentName:"tr",align:null},"engine"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#producerbootstrapservers-string"},"producer.bootstrap.servers")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"all streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#topic-string"},"topic")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"all streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#producer-string"},"producer.*")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"all streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#format-string"},"format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"json"),(0,i.kt)("td",{parentName:"tr",align:null},"all streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#streaming_output_mode-string"},"streaming_output_mode")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"append"),(0,i.kt)("td",{parentName:"tr",align:null},"structured streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#checkpointLocation-string"},"checkpointLocation")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"structured streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"all streaming"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h5",{id:"producerbootstrapservers-string"},"producer.bootstrap.servers ","[string]"),(0,i.kt)("p",null,"Kafka Brokers List"),(0,i.kt)("h5",{id:"topic-string"},"topic ","[string]"),(0,i.kt)("p",null,"Kafka Topic"),(0,i.kt)("h5",{id:"producer-string"},"producer ","[string]"),(0,i.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5fc5\u5907\u7684kafka producer\u5ba2\u6237\u7aef\u5fc5\u987b\u6307\u5b9a\u7684\u53c2\u6570\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2aproducer\u5ba2\u6237\u7aef\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u8986\u76d6\u4e86",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/documentation.html#producerconfigs"},"kafka\u5b98\u65b9\u6587\u6863\u6307\u5b9a\u7684\u6240\u6709producer\u53c2\u6570"),"."),(0,i.kt)("p",null,'\u6307\u5b9a\u53c2\u6570\u7684\u65b9\u5f0f\u662f\u5728\u539f\u53c2\u6570\u540d\u79f0\u4e0a\u52a0\u4e0a\u524d\u7f00"producer."\uff0c\u5982\u6307\u5b9a',(0,i.kt)("inlineCode",{parentName:"p"},"request.timeout.ms"),"\u7684\u65b9\u5f0f\u662f: ",(0,i.kt)("inlineCode",{parentName:"p"},"producer.request.timeout.ms = 60000"),"\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8fd9\u4e9b\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u5b83\u4eec\u5c06\u4f7f\u7528Kafka\u5b98\u65b9\u6587\u6863\u7ed9\u51fa\u7684\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h6",{id:"notes"},"Notes"),(0,i.kt)("p",null,"\u5728\u4f5c\u4e3astructured streaming \u7684output\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u53c2\u6570\uff0c\u6765\u8fbe\u5230\u76f8\u5e94\u7684\u6548\u679c"),(0,i.kt)("h5",{id:"checkpointlocation-string"},"checkpointLocation ","[string]"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a\u662f\u5426\u542f\u7528checkpoint\uff0c\u901a\u8fc7\u914d\u7f6e",(0,i.kt)("strong",{parentName:"p"},"checkpointLocation"),"\u8fd9\u4e2a\u53c2\u6570"),(0,i.kt)("h5",{id:"streaming_output_mode-string"},"streaming_output_mode ","[string]"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a\u8f93\u51fa\u6a21\u5f0f\uff0ccomplete|append|update\u4e09\u79cd\uff0c\u8be6\u89c1Spark\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#output-modes"},"http://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#output-modes")),(0,i.kt)("h5",{id:"format-string"},"format ","[string]"),(0,i.kt)("p",null,"\u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u5f53\u524d\u652f\u6301json\u548ctext\uff0c\u5982\u679c\u9009\u62e9text\u65b9\u5f0f\uff0c\u9700\u4fdd\u8bc1\u6570\u636e\u7ed3\u6784\u4e2d\u4ec5\u6709\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,i.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Output")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/output-plugin"},"Output Plugin")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"spark streaming or batch")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kafka {\n    topic = "seatunnel"\n    producer.bootstrap.servers = "localhost:9092"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"structured streaming")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kafka {\n    topic = "seatunnel"\n    producer.bootstrap.servers = "localhost:9092"\n    streaming_output_mode = "update"\n    checkpointLocation = "/your/path"\n}\n')))}d.isMDXComponent=!0}}]);