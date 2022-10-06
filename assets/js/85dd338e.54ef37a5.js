"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[952],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43842:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="Common Options",p={unversionedId:"flink/configuration/transform-plugins/transform-plugin",id:"version-2.1.0/flink/configuration/transform-plugins/transform-plugin",title:"Common Options",description:"Transform Common Options [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/transform-plugin.md",sourceDirName:"flink/configuration/transform-plugins",slug:"/flink/configuration/transform-plugins/transform-plugin",permalink:"/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/transform-plugin.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sql",permalink:"/docs/2.1.0/flink/configuration/transform-plugins/Sql"},next:{title:"Console",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Console"}},u={},m=[{value:"Transform Plugin common parameters",id:"transform-plugin-common-parameters",level:2},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"Examples",id:"examples",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-options"},"Common Options"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Transform Common Options ","[Flink]")),(0,i.kt)("h2",{id:"transform-plugin-common-parameters"},"Transform Plugin common parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"field_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin is processing the data set ",(0,i.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," output by the previous plugin in the configuration file;"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter."),(0,i.kt)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set ",(0,i.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table (table);"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,i.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,i.kt)("inlineCode",{parentName:"p"},"(table)")," . The data set ",(0,i.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," registered here can be directly accessed by other plugins by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,i.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,i.kt)("p",null,"When the data is obtained from the upper-level plugin, you can specify the name of the obtained field, which is convenient for use in subsequent sql plugins."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      result_table_name = "fake_1"\n      field_name = "name,age"\n    }\n    FakeSourceStream {\n      result_table_name = "fake_2"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake_1"\n      sql = "select name from fake_1"\n      result_table_name = "fake_name"\n    }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the sql plugin will process the data of ",(0,i.kt)("inlineCode",{parentName:"p"},"fake_2")," , and if it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"fake_1")," , it will process the data of ",(0,i.kt)("inlineCode",{parentName:"p"},"fake_1")," .")))}d.isMDXComponent=!0}}]);