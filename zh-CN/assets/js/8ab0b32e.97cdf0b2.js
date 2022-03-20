"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6714],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return k}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="Console",p={unversionedId:"spark/configuration/sink-plugins/Console",id:"version-2.1.0/spark/configuration/sink-plugins/Console",title:"Console",description:"Sink plugin : Console [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Console.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Console",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Console",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Console.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clickhouse",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Clickhouse"},next:{title:"Doris",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Doris"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"limit number",id:"limit-number",level:3},{value:"serializer string",id:"serializer-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"console"},"Console"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sink plugin : Console ","[Spark]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Output data to standard output/terminal, which is often used for debugging, which makes it easy to observe the data."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"),(0,a.kt)("th",{parentName:"tr",align:null},"engine"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"batch/spark streaming")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serializer"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"plain"),(0,a.kt)("td",{parentName:"tr",align:null},"batch/spark streaming")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"all streaming")))),(0,a.kt)("h3",{id:"limit-number"},"limit ","[number]"),(0,a.kt)("p",null,"Limit the number of ",(0,a.kt)("inlineCode",{parentName:"p"},"rows")," to be output, the legal range is ",(0,a.kt)("inlineCode",{parentName:"p"},"[-1, 2147483647]")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," means that the output is up to ",(0,a.kt)("inlineCode",{parentName:"p"},"2147483647")," rows"),(0,a.kt)("h3",{id:"serializer-string"},"serializer ","[string]"),(0,a.kt)("p",null,"The format of serialization when outputting. Available serializers include: ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"plain")),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'console {\n    limit = 10\n    serializer = "json"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Output 10 pieces of data in Json format")))}k.isMDXComponent=!0}}]);