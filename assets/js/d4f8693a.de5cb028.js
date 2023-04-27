"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9322],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={},c="Greenplum",s={unversionedId:"connector-v2/sink/Greenplum",id:"connector-v2/sink/Greenplum",title:"Greenplum",description:"Greenplum sink connector",source:"@site/docs/connector-v2/sink/Greenplum.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Greenplum",permalink:"/docs/connector-v2/sink/Greenplum",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Greenplum.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GoogleFirestore",permalink:"/docs/connector-v2/sink/GoogleFirestore"},next:{title:"Hbase",permalink:"/docs/connector-v2/sink/Hbase"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"greenplum"},"Greenplum"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Greenplum sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Write data to Greenplum using ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/Jdbc"},"Jdbc connector"),"."),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Not support exactly-once semantics (XA transaction is not yet supported in Greenplum database)."))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,i.kt)("p",null,"Optional jdbc drivers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"org.postgresql.Driver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.pivotal.jdbc.GreenplumDriver"))),(0,i.kt)("p",null,"Warn: for license compliance, if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"GreenplumDriver")," the have to provide Greenplum JDBC driver yourself, e.g. copy greenplum-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone."),(0,i.kt)("h3",{id:"url-string"},"url ","[string]"),(0,i.kt)("p",null,"The URL of the JDBC connection. if you use postgresql driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:postgresql://${yous_host}:${yous_port}/${yous_database}"),", or you use greenplum driver the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc:pivotal:greenplum://${yous_host}:${yous_port};DatabaseName=${yous_database}")),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Greenplum Sink Connector")))}d.isMDXComponent=!0}}]);