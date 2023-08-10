"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1051],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20444:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return s},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},c="JDBC",p={unversionedId:"connector-v2/source/Jdbc",id:"connector-v2/source/Jdbc",title:"JDBC",description:"JDBC source connector",source:"@site/docs/connector-v2/source/Jdbc.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Jdbc",permalink:"/docs/connector-v2/source/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Jdbc.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/connector-v2/source/IoTDB"},next:{title:"Jira",permalink:"/docs/connector-v2/source/Jira"}},m={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"compatible_mode string",id:"compatible_mode-string",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"partition_column string",id:"partition_column-string",level:3},{value:"partition_upper_bound BigDecimal",id:"partition_upper_bound-bigdecimal",level:3},{value:"partition_lower_bound BigDecimal",id:"partition_lower_bound-bigdecimal",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],u={toc:s};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jdbc"},"JDBC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDBC source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read external data source data through JDBC."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Warn: for license compliance, you have to provide database driver yourself, copy to ",(0,l.kt)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/lib/")," directory in order to make them work."),(0,l.kt)("p",{parentName:"div"},"e.g. If you use MySQL, should download and copy ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/lib/"),". For Spark/Flink, you should also copy it to ",(0,l.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/jars/")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib/"),"."))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection"))),(0,l.kt)("p",null,"supports query SQL and can achieve projection effect."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compatible_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_column"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_num"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"job parallelism")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,l.kt)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is ",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,l.kt)("h3",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"userName"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"password"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Query statement"),(0,l.kt)("h3",{id:"compatible_mode-string"},"compatible_mode ","[string]"),(0,l.kt)("p",null,"The compatible mode of database, required when the database supports multiple compatible modes. For example, when using OceanBase database, you need to set it to 'mysql' or 'oracle'."),(0,l.kt)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,l.kt)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,l.kt)("h3",{id:"partition_column-string"},"partition_column ","[string]"),(0,l.kt)("p",null,"The column name for parallelism's partition, only support numeric type."),(0,l.kt)("h3",{id:"partition_upper_bound-bigdecimal"},"partition_upper_bound ","[BigDecimal]"),(0,l.kt)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,l.kt)("h3",{id:"partition_lower_bound-bigdecimal"},"partition_lower_bound ","[BigDecimal]"),(0,l.kt)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."),(0,l.kt)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,l.kt)("p",null,"The number of partition count, only support positive integer. default value is job parallelism"),(0,l.kt)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,l.kt)("p",null,"For queries that return a large number of objects, you can configure the row fetch size used in the query to\nimprove performance by reducing the number database hits required to satisfy the selection criteria. Zero means use jdbc default value."),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"tips"},"tips"),(0,l.kt)("p",null,"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed\nin parallel according to the concurrency of tasks."),(0,l.kt)("h2",{id:"appendix"},"appendix"),(0,l.kt)("p",null,"there are some reference value for params above."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"driver"),(0,l.kt)("th",{parentName:"tr",align:null},"url"),(0,l.kt)("th",{parentName:"tr",align:null},"maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgresql"),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dm"),(0,l.kt)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phoenix"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.phoenix.queryserver.client.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"},"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqlserver"),(0,l.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oracle"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@localhost:1521/xepdb1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqlite"),(0,l.kt)("td",{parentName:"tr",align:null},"org.sqlite.JDBC"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sqlite:test.db"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"},"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gbase8a"),(0,l.kt)("td",{parentName:"tr",align:null},"com.gbase.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:gbase://e2e_gbase8aDb:5258/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"},"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"starrocks"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db2"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:db2://localhost:50000/testdb"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"},"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tablestore"),(0,l.kt)("td",{parentName:"tr",align:null},"com.alicloud.openservices.tablestore.jdbc.OTSDriver"),(0,l.kt)("td",{parentName:"tr",align:null},'"jdbc:ots:http s://myinstance.cn-hangzhou.ots.aliyuncs.com/myinstance"'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.openservices/tablestore-jdbc"},"https://mvnrepository.com/artifact/com.aliyun.openservices/tablestore-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saphana"),(0,l.kt)("td",{parentName:"tr",align:null},"com.sap.db.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sap://localhost:39015"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"},"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doris"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"teradata"),(0,l.kt)("td",{parentName:"tr",align:null},"com.teradata.jdbc.TeraDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:teradata://localhost/DBS_PORT=1025,DATABASE=test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"},"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,l.kt)("td",{parentName:"tr",align:null},"net.snowflake.client.jdbc.SnowflakeDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc\u2744\ufe0f//<account_name>.snowflakecomputing.com"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"},"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,l.kt)("td",{parentName:"tr",align:null},"com.amazon.redshift.jdbc42.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:redshift://localhost:5439/testdb?defaultRowFetchSize=1000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vertica"),(0,l.kt)("td",{parentName:"tr",align:null},"com.vertica.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:vertica://localhost:5433"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/vertica/jdbc/vertica-jdbc/12.0.3-0/vertica-jdbc-12.0.3-0.jar"},"https://repo1.maven.org/maven2/com/vertica/jdbc/vertica-jdbc/12.0.3-0/vertica-jdbc-12.0.3-0.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OceanBase"),(0,l.kt)("td",{parentName:"tr",align:null},"com.oceanbase.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:oceanbase://localhost:2881"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/oceanbase/oceanbase-client/2.4.3/oceanbase-client-2.4.3.jar"},"https://repo1.maven.org/maven2/com/oceanbase/oceanbase-client/2.4.3/oceanbase-client-2.4.3.jar"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"simple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Jdbc {\n    url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n    driver = "com.mysql.cj.jdbc.Driver"\n    connection_check_timeout_sec = 100\n    user = "root"\n    password = "123456"\n    query = "select * from type_bin"\n}\n')),(0,l.kt)("p",null,"parallel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Jdbc {\n    url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n    driver = "com.mysql.cj.jdbc.Driver"\n    connection_check_timeout_sec = 100\n    user = "root"\n    password = "123456"\n    query = "select * from type_bin"\n    partition_column = "id"\n    partition_num = 10\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ClickHouse Source Connector")),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Phoenix JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2499"},"2499"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support SQL Server JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2646"},"2646"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Oracle JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2550"},"2550"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support StarRocks JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3060"},"3060"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support GBase8a JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3026"},"3026"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support DB2 JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2410"},"2410"),")")),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix jdbc split bug (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3220"},"3220"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Sqlite JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3089"},"3089"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Tablestore Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3309"},"3309"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Teradata JDBC\u3000Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3362"},"3362"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support JDBC Fetch Size Config (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3478"},"3478"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Doris JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3586"},"3586"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Redshift JDBC Sink(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3615"},"#3615"),")"),(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix jdbc connection reset bug (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3670"},"3670"),")"),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Add Vertica connector(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4303"},"#4303"),")")))}d.isMDXComponent=!0}}]);