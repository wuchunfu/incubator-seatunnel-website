"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1250],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20302:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],i={},u="Set Up Environment and Run Simple Example",s={unversionedId:"developement/setup",id:"version-2.1.0/developement/setup",title:"Set Up Environment and Run Simple Example",description:"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple",source:"@site/versioned_docs/version-2.1.0/developement/setup.md",sourceDirName:"developement",slug:"/developement/setup",permalink:"/docs/2.1.0/developement/setup",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/developement/setup.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to add a new License Guide",permalink:"/docs/2.1.0/developement/NewLicenseGuide"},next:{title:"Deployment and run",permalink:"/docs/2.1.0/flink/deployment"}},p={},c=[{value:"Prepare",id:"prepare",level:2},{value:"Set Up",id:"set-up",level:2},{value:"Clone the Source Code",id:"clone-the-source-code",level:3},{value:"Install Subproject Locally",id:"install-subproject-locally",level:3},{value:"Install JetBrains IDEA Scala Plugin",id:"install-jetbrains-idea-scala-plugin",level:3},{value:"Run Simple Example",id:"run-simple-example",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-up-environment-and-run-simple-example"},"Set Up Environment and Run Simple Example"),(0,l.kt)("p",null,"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple\nexample in your JetBrains IntelliJ IDEA."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can develop or test SeaTunnel code in any development environment that you like, but here we use\n",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," as an example to teach you to step by step environment.")),(0,l.kt)("h2",{id:"prepare"},"Prepare"),(0,l.kt)("p",null,"Before we start talking about how to set up the environment, we need to do some preparation work. Make sure you already\nhave installed the following software:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git")," installed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (only JDK 8 supported by now) installed and ",(0,l.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.scala-lang.org/download/2.11.8.html"},"Scala")," (only scala 2.11.8 supported by now) installed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven")," installed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," installed.")),(0,l.kt)("h2",{id:"set-up"},"Set Up"),(0,l.kt)("h3",{id:"clone-the-source-code"},"Clone the Source Code"),(0,l.kt)("p",null,"First of all, you need to clone the SeaTunnel source code from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"GitHub"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/incubator-seatunnel.git\n")),(0,l.kt)("h3",{id:"install-subproject-locally"},"Install Subproject Locally"),(0,l.kt)("p",null,"After cloning the source code, you should run the ",(0,l.kt)("inlineCode",{parentName:"p"},"maven")," command to install the subproject to the maven local repository.\nOtherwise, your code could not start in JetBrains IntelliJ IDEA correctly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mvn install\n")),(0,l.kt)("h3",{id:"install-jetbrains-idea-scala-plugin"},"Install JetBrains IDEA Scala Plugin"),(0,l.kt)("p",null,"Now, you can open your JetBrains IntelliJ IDEA and explore the source code, but allow building Scala code in IDEA,\nyou should also install JetBrains IntelliJ IDEA's ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1347-scala"},"Scala plugin"),".\nSee ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,l.kt)("h2",{id:"run-simple-example"},"Run Simple Example"),(0,l.kt)("p",null,"After all the above things are done, you just finish the environment setup and can run an example we provide to you out\nof box. All examples are in module ",(0,l.kt)("inlineCode",{parentName:"p"},"seatunnel-examples"),", you could pick one you are interested in, ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configuration.html"},"running or debugging\nit in IDEA")," as you wish."),(0,l.kt)("p",null,"Here we use ",(0,l.kt)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-flink-examples/src/main/java/org/apache/seatunnel/example/flink/LocalFlinkExample.java"),"\nas an example, when you run it successfully you could see the output as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"+I[Gary, 1647423592505]\n+I[Kid Xiong, 1647423593510]\n+I[Ricky Huo, 1647423598537]\n...\n...\n+I[Gary, 1647423597533]\n")),(0,l.kt)("h2",{id:"whats-more"},"What's More"),(0,l.kt)("p",null,"All our examples use simple source and sink to make it less dependent and easy to run. You can change the example configuration\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"resources/examples"),". You could change your configuration as below, if you want to use PostgreSQL as the source and\nsink to console. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'env {\n  execution.parallelism = 1\n}\n\nsource {\n  JdbcSource {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://host:port/database"\n    username = postgres\n    query = "select * from test"\n  }\n}\n\nsink {\n  ConsoleSink {}\n}\n')))}d.isMDXComponent=!0}}]);