"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[39310],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>v});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,v=s["".concat(p,".").concat(d)]||s[d]||g[d]||i;return t?a.createElement(v,l(l({ref:n},u),{},{components:t})):a.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={},l="Event Listener",o={unversionedId:"concept/event-listener",id:"concept/event-listener",title:"Event Listener",description:"Introduction",source:"@site/docs/concept/event-listener.md",sourceDirName:"concept",slug:"/concept/event-listener",permalink:"/docs/concept/event-listener",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/event-listener.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Speed Control",permalink:"/docs/concept/speed-limit"},next:{title:"Schema evolution",permalink:"/docs/concept/schema-evolution"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"API",id:"api",level:2},{value:"Event Data API",id:"event-data-api",level:3},{value:"Event Listener API",id:"event-listener-api",level:3},{value:"Event Collect API",id:"event-collect-api",level:3},{value:"Configuration Listener",id:"configuration-listener",level:2},{value:"Zeta Engine",id:"zeta-engine",level:3},{value:"Flink Engine",id:"flink-engine",level:3},{value:"Spark Engine",id:"spark-engine",level:3}],u={toc:c},s="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"event-listener"},"Event Listener"),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"The SeaTunnel provides a rich event listening feature that allows you to manage the status at which data is synchronized.\nThis functionality is crucial when you need to listen job running status(",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event"),").\nThis document will guide you through the usage of these parameters and how to leverage them effectively."),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSpark",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"api"},"API"),(0,r.yg)("p",null,"The event API is defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event")," package."),(0,r.yg)("h3",{id:"event-data-api"},"Event Data API"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.event.Event")," - The interface for event data."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.event.EventType")," - The enum for event type.")),(0,r.yg)("h3",{id:"event-listener-api"},"Event Listener API"),(0,r.yg)("p",null,"You can customize event handler, such as sending events to external systems"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.event.EventHandler")," - The interface for event handler, SPI will automatically load subclass from the classpath.")),(0,r.yg)("h3",{id:"event-collect-api"},"Event Collect API"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.source.SourceSplitEnumerator")," - Attached event listener API to report events from ",(0,r.yg)("inlineCode",{parentName:"li"},"SourceSplitEnumerator"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.api.source;\n\npublic interface SourceSplitEnumerator {\n\n    interface Context {\n\n        /**\n         * Get the {@link org.apache.seatunnel.api.event.EventListener} of this enumerator.\n         *\n         * @return\n         */\n        EventListener getEventListener();\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.source.SourceReader")," - Attached event listener API to report events from ",(0,r.yg)("inlineCode",{parentName:"li"},"SourceReader"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.api.source;\n\npublic interface SourceReader {\n\n    interface Context {\n\n        /**\n         * Get the {@link org.apache.seatunnel.api.event.EventListener} of this reader.\n         *\n         * @return\n         */\n        EventListener getEventListener();\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.sink.SinkWriter")," - Attached event listener API to report events from ",(0,r.yg)("inlineCode",{parentName:"li"},"SinkWriter"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.api.sink;\n\npublic interface SinkWriter {\n\n    interface Context {\n\n        /**\n         * Get the {@link org.apache.seatunnel.api.event.EventListener} of this writer.\n         *\n         * @return\n         */\n        EventListener getEventListener();\n    }\n}\n")),(0,r.yg)("h2",{id:"configuration-listener"},"Configuration Listener"),(0,r.yg)("p",null,"To use the event listening feature, you need to configure engine config."),(0,r.yg)("h3",{id:"zeta-engine"},"Zeta Engine"),(0,r.yg)("p",null,"Example config in your config file(seatunnel.yaml):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'seatunnel:\n  engine:\n    event-report-http:\n      url: "http://example.com:1024/event/report"\n      headers:\n        Content-Type: application/json\n')),(0,r.yg)("h3",{id:"flink-engine"},"Flink Engine"),(0,r.yg)("p",null,"You can define the implementation class of ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event.EventHandler")," interface and add to the classpath to automatically load it through SPI."),(0,r.yg)("p",null,"Support flink version: 1.14.0+"),(0,r.yg)("p",null,"Example: ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event.LoggingEventHandler")),(0,r.yg)("h3",{id:"spark-engine"},"Spark Engine"),(0,r.yg)("p",null,"You can define the implementation class of ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event.EventHandler")," interface and add to the classpath to automatically load it through SPI."))}g.isMDXComponent=!0}}]);