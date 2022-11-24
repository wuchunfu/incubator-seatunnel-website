"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7197],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},73504:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={},s="Error Quick Reference Manual",c={unversionedId:"connector-v2/Error-Quick-Reference-Manual",id:"connector-v2/Error-Quick-Reference-Manual",title:"Error Quick Reference Manual",description:"This document records some common error codes and corresponding solutions of SeaTunnel, aiming to quickly solve the problems encountered by users.",source:"@site/docs/connector-v2/Error-Quick-Reference-Manual.md",sourceDirName:"connector-v2",slug:"/connector-v2/Error-Quick-Reference-Manual",permalink:"/docs/connector-v2/Error-Quick-Reference-Manual",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/Error-Quick-Reference-Manual.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/docs/connector-v2/sink/common-options"},next:{title:"Transform",permalink:"/docs/category/transform"}},d={},u=[{value:"SeaTunnel API Error Codes",id:"seatunnel-api-error-codes",level:2},{value:"SeaTunnel Common Error Codes",id:"seatunnel-common-error-codes",level:2},{value:"Assert Connector Error Codes",id:"assert-connector-error-codes",level:2},{value:"Cassandra Connector Error Codes",id:"cassandra-connector-error-codes",level:2},{value:"Slack Connector Error Codes",id:"slack-connector-error-codes",level:2},{value:"Rabbitmq Connector Error Codes",id:"rabbitmq-connector-error-codes",level:2},{value:"Socket Connector Error Codes",id:"socket-connector-error-codes",level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"error-quick-reference-manual"},"Error Quick Reference Manual"),(0,l.kt)("p",null,"This document records some common error codes and corresponding solutions of SeaTunnel, aiming to quickly solve the problems encountered by users."),(0,l.kt)("h2",{id:"seatunnel-api-error-codes"},"SeaTunnel API Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API-01"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration item validate failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually due to a problem with the connector parameters configured by the user, please check the connector documentation and correct the parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API-02"),(0,l.kt)("td",{parentName:"tr",align:null},"Option item validate failed"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API-03"),(0,l.kt)("td",{parentName:"tr",align:null},"Catalog initialize failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually because the connector initialization catalog failed, please check the connector connector options whether are correct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API-04"),(0,l.kt)("td",{parentName:"tr",align:null},"Database not existed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually because the database that you want to access is not existed, please double check the database exists")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API-05"),(0,l.kt)("td",{parentName:"tr",align:null},"Table not existed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually because the table that you want to access is not existed, please double check the table exists")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API-06"),(0,l.kt)("td",{parentName:"tr",align:null},"Factory initialize failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually because there is a problem with the jar package dependency, please check whether your local SeaTunnel installation package is complete")))),(0,l.kt)("h2",{id:"seatunnel-common-error-codes"},"SeaTunnel Common Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-01"),(0,l.kt)("td",{parentName:"tr",align:null},"File operation failed, such as (read,list,write,move,copy,sync) etc..."),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually there are some problems in the file operation, please check if the file is OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-02"),(0,l.kt)("td",{parentName:"tr",align:null},"Json covert/parse operation failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually there are some problems about json converting or parsing, please check if the json format is correct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-03"),(0,l.kt)("td",{parentName:"tr",align:null},"Reflect class operation failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually there are some problems on class reflect operation, please check the jar dependency whether exists in classpath")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-04"),(0,l.kt)("td",{parentName:"tr",align:null},"Serialize class operation failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually there are some problems on class serialize operation, please check java environment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-05"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported operation"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, users may trigger an unsupported operation such as enabled some unsupported features")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-06"),(0,l.kt)("td",{parentName:"tr",align:null},"Illegal argument"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe user-configured parameters are not legal, please correct it according to the tips")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-07"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported data type"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe connectors don't support this data type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-08"),(0,l.kt)("td",{parentName:"tr",align:null},"Sql operation failed, such as (execute,addBatch,close) etc..."),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it is usually there are some problems on sql execute process, please check the sql whether correct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-09"),(0,l.kt)("td",{parentName:"tr",align:null},"Get table schema from upstream data failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe SeaTunnel try to get schema information from connector source data failed, please check your configuration whether correct and connector is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-10"),(0,l.kt)("td",{parentName:"tr",align:null},"Flush data operation that in sink connector failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe SeaTunnel try to flush batch data to sink connector field, please check your configuration whether correct and connector is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-11"),(0,l.kt)("td",{parentName:"tr",align:null},"Sink writer operation failed, such as (open, close) etc..."),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe some operation of writer such as Parquet,Orc,IceBerg failed, you need to check if the corresponding file or resource has read and write permissions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-12"),(0,l.kt)("td",{parentName:"tr",align:null},"Source reader operation failed, such as (open, close) etc..."),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe some operation of reader such as Parquet,Orc,IceBerg failed, you need to check if the corresponding file or resource has read and write permissions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON-13"),(0,l.kt)("td",{parentName:"tr",align:null},"Http operation failed, such as (open, close, response) etc..."),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it maybe some http requests failed, please check your network environment")))),(0,l.kt)("h2",{id:"assert-connector-error-codes"},"Assert Connector Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ASSERT-01"),(0,l.kt)("td",{parentName:"tr",align:null},"Rule validate failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that upstream data does not meet the rules")))),(0,l.kt)("h2",{id:"cassandra-connector-error-codes"},"Cassandra Connector Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CASSANDRA-01"),(0,l.kt)("td",{parentName:"tr",align:null},"Field is not existed in target table"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that the fields of upstream data don't meet with target cassandra table, please check target cassandra table structure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CASSANDRA-02"),(0,l.kt)("td",{parentName:"tr",align:null},"Add batch SeaTunnelRow data into a batch failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that cassandra has some problems, please check it whether is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CASSANDRA-03"),(0,l.kt)("td",{parentName:"tr",align:null},"Close cql session of cassandra failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that cassandra has some problems, please check it whether is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CASSANDRA-04"),(0,l.kt)("td",{parentName:"tr",align:null},"No data in source table"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that source cassandra table has no data, please check it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CASSANDRA-05"),(0,l.kt)("td",{parentName:"tr",align:null},"Parse ip address from string field field"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that upstream data does not match ip address format, please check it")))),(0,l.kt)("h2",{id:"slack-connector-error-codes"},"Slack Connector Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SLACK-01"),(0,l.kt)("td",{parentName:"tr",align:null},"Conversation can not be founded in channels"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that the channel is not existed in slack workspace, please check it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SLACK-02"),(0,l.kt)("td",{parentName:"tr",align:null},"Write to slack channel failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that slack has some problems, please check it whether is work")))),(0,l.kt)("h2",{id:"rabbitmq-connector-error-codes"},"Rabbitmq Connector Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-01"),(0,l.kt)("td",{parentName:"tr",align:null},"handle queue consumer shutdown signal failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that job has some problems, please check it whether is work well")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-02"),(0,l.kt)("td",{parentName:"tr",align:null},"create rabbitmq client failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that rabbitmq has some problems, please check it whether is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-03"),(0,l.kt)("td",{parentName:"tr",align:null},"close connection failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that rabbitmq has some problems, please check it whether is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-04"),(0,l.kt)("td",{parentName:"tr",align:null},"send messages failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that rabbitmq has some problems, please check it whether is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-05"),(0,l.kt)("td",{parentName:"tr",align:null},"messages could not be acknowledged during checkpoint creation"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that job has some problems, please check it whether is work well")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-06"),(0,l.kt)("td",{parentName:"tr",align:null},"messages could not be acknowledged with basicReject"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that job has some problems, please check it whether is work well")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-07"),(0,l.kt)("td",{parentName:"tr",align:null},"parse uri failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that rabbitmq connect uri incorrect, please check it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-08"),(0,l.kt)("td",{parentName:"tr",align:null},"initialize ssl context failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that rabbitmq has some problems, please check it whether is work")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RABBITMQ-09"),(0,l.kt)("td",{parentName:"tr",align:null},"setup ssl factory failed"),(0,l.kt)("td",{parentName:"tr",align:null},"When users encounter this error code, it means that rabbitmq has some problems, please check it whether is work")))),(0,l.kt)("h2",{id:"socket-connector-error-codes"},"Socket Connector Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SOCKET-01"),(0,l.kt)("td",{parentName:"tr",align:null},"Cannot connect to socket server"),(0,l.kt)("td",{parentName:"tr",align:null},"When the user encounters this error code, it means that the connection address may not match, please check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SOCKET-02"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to send message to socket server"),(0,l.kt)("td",{parentName:"tr",align:null},"When the user encounters this error code, it means that there is a problem sending data and retry is not enabled, please check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SOCKET-03"),(0,l.kt)("td",{parentName:"tr",align:null},"Unable to write; interrupted while doing another attempt"),(0,l.kt)("td",{parentName:"tr",align:null},"When the user encounters this error code, it means that the data writing is interrupted abnormally, please check")))))}m.isMDXComponent=!0}}]);