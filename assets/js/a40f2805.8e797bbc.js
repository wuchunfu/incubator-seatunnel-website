"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[59708],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||i;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38805:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={},p="General configuration",u={unversionedId:"configuration/base",id:"version-1.x/configuration/base",title:"General configuration",description:"Core idea",source:"@site/versioned_docs/version-1.x/configuration/base.md",sourceDirName:"configuration",slug:"/configuration/base",permalink:"/docs/1.x/configuration/base",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/base.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Quick start",permalink:"/docs/1.x/quick-start"},next:{title:"Filter-Plugin",permalink:"/docs/1.x/category/filter"}},s={},c=[{value:"Core idea",id:"core-idea",level:2},{value:"config file",id:"config-file",level:2},{value:"Configuration file example",id:"configuration-file-example",level:2}],f={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-configuration"},"General configuration"),(0,i.kt)("h2",{id:"core-idea"},"Core idea"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Row is a piece of data in the logical sense of seatunnel, and is the basic unit of data processing. When Filter processes data, all data will be mapped to Row.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field is a field of Row. Row can contain nested levels of fields.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"raw_message refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"raw_message")," field in the Row for the data entered from the input.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"root")," refers to the same field level as the top-level field of Row, and is often used to specify the storage location (top level field) of new fields generated during data processing in Row."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"config-file"},"config file"),(0,i.kt)("p",null,"A complete seatunnel configuration includes ",(0,i.kt)("inlineCode",{parentName:"p"},"spark"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"output"),", namely:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"spark {\n    ...\n}\n\ninput {\n    ...\n}\n\nfilter {\n    ...\n}\n\noutput {\n    ...\n}\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spark")," is spark related configuration,")),(0,i.kt)("p",null,"Configurable spark parameters see:\n",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#available-properties"},"Spark Configuration"),",\nAmong them, the two parameters of master and deploy-mode cannot be configured here and need to be specified in the seatunnel startup script."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"input")," can configure any input plugin and its parameters, and the specific parameters vary with different input plugins.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"filter")," can configure any filter plugin and its parameters, and the specific parameters vary with different filter plugins."))),(0,i.kt)("p",null,"Multiple plugins in the filter form a data processing pipeline in the configuration order, and the output of the previous filter is the input of the next filter."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output")," can configure any output plugin and its parameters, and the specific parameters vary with different output plugins.")),(0,i.kt)("p",null,"The data processed by ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," will be sent to each plugin configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"output"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration-file-example"},"Configuration file example"),(0,i.kt)("p",null,"An example is as follows:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In configuration, behavior comments beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'spark {\n  # You can set spark configuration here\n  # seatunnel defined streaming batch duration in seconds\n  spark.streaming.batchDuration = 5\n\n  # see available properties defined by spark: https://spark.apache.org/docs/latest/configuration.html#available-properties\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n\ninput {\n  # This is an example input plugin **only for test and demonstrate the feature input plugin**\n  fakestream {\n    content = ["Hello World, InterestingLab"]\n    rate = 1\n  }\n\n\n  # If you would like to get more information about how to configure seatunnel and see full list of input plugins,\n  # please go to https://interestinglab.github.io/seatunnel-docs/#/en-us/v1/configuration/base\n}\n\nfilter {\n  split {\n    fields = ["msg", "name"]\n    delimiter = ","\n  }\n\n  # If you would like to get more information about how to configure seatunnel and see full list of filter plugins,\n  # please go to https://interestinglab.github.io/seatunnel-docs/#/en-us/v1/configuration/base\n}\n\noutput {\n  stdout {}\n\n\n  # If you would like to get more information about how to configure seatunnel and see full list of output plugins,\n  # please go to https://interestinglab.github.io/seatunnel-docs/#/en-us/v1/configuration/base\n}\n')),(0,i.kt)("p",null,"For other configurations, please refer to:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/config/streaming.conf.template"},"Configuration Example 1: Streaming Streaming Computing")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/config/batch.conf.template"},"Configuration example 2: Batch offline batch")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/config/complex.conf.template"},"Configuration example 3: A flexible multi-data process processing")))}m.isMDXComponent=!0}}]);