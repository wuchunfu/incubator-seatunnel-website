"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9870],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},p="Hive",s={unversionedId:"spark/configuration/source-plugins/Hive",id:"version-2.1.0/spark/configuration/source-plugins/Hive",title:"Hive",description:"Source plugin : Hive [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/Hive.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Hive",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Hive",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/Hive.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HBase",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Hbase"},next:{title:"Hudi",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Hudi"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"pre_sql string",id:"pre_sql-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Notes",id:"notes",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hive"},"Hive"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Source plugin : Hive ","[Spark]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Get data from hive"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pre_sql"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"pre_sql-string"},"pre_sql ","[string]"),(0,a.kt)("p",null,"For preprocessed ",(0,a.kt)("inlineCode",{parentName:"p"},"sql")," , if preprocessing is not required, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"select * from hive_db.hive_table")," ."),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Source plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: The following configuration must be done to use hive source\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# In the spark section in the seatunnel configuration file\uff1a\n\nenv {\n  ...\n  spark.sql.catalogImplementation = "hive"\n  ...\n}\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'env {\n  ...\n  spark.sql.catalogImplementation = "hive"\n  ...\n}\n\nsource {\n  hive {\n    pre_sql = "select * from mydb.mytb"\n    result_table_name = "myTable"\n  }\n}\n\n...\n')),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"It must be ensured that the ",(0,a.kt)("inlineCode",{parentName:"p"},"metastore")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"hive")," is in service. Start the command ",(0,a.kt)("inlineCode",{parentName:"p"},"hive --service metastore")," service ",(0,a.kt)("inlineCode",{parentName:"p"},"default port 9083")," ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"local"),"  mode, ",(0,a.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," must be placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$HADOOP_CONF")," directory of the task submission node (or placed under ",(0,a.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf")," ), IDE local Debug put it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," directory"))}d.isMDXComponent=!0}}]);