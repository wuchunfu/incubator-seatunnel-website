"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25287],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,N=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(N,o(o({ref:t},p),{},{components:a})):n.createElement(N,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83235:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={},s="Oracle CDC",d={unversionedId:"connector-v2/source/Oracle-CDC",id:"connector-v2/source/Oracle-CDC",title:"Oracle CDC",description:"Oracle CDC source connector",source:"@site/docs/connector-v2/source/Oracle-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Oracle-CDC",permalink:"/zh-CN/docs/connector-v2/source/Oracle-CDC",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Oracle-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OpenMldb",permalink:"/zh-CN/docs/connector-v2/source/OpenMldb"},next:{title:"Oracle",permalink:"/zh-CN/docs/connector-v2/source/Oracle"}},p={},u=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Install Jdbc Driver",id:"install-jdbc-driver",level:3},{value:"Enabling Logminer without CDB (Container Database) mode.",id:"enabling-logminer-without-cdb-container-database-mode",level:4},{value:"Oracle 11g is not supported",id:"oracle-11g-is-not-supported",level:5},{value:"Grant privileges only to the tables that need to be collected",id:"grant-privileges-only-to-the-tables-that-need-to-be-collected",level:5},{value:"To enable Logminer in Oracle with CDB (Container Database) + PDB (Pluggable Database) mode, follow the steps below:",id:"to-enable-logminer-in-oracle-with-cdb-container-database--pdb-pluggable-database-mode-follow-the-steps-below",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Support custom primary key for table",id:"support-custom-primary-key-for-table",level:3},{value:"Support debezium-compatible format send to kafka",id:"support-debezium-compatible-format-send-to-kafka",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"oracle-cdc"},"Oracle CDC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Oracle CDC source connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.kt)("br",null),"\nFlink ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The Oracle CDC connector allows for reading snapshot data and incremental data from Oracle database. This document\ndescribes how to set up the Oracle CDC connector to run SQL queries against Oracle databases."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Url"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,l.kt)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,l.kt)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@datasource01:1523:xe"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))))),(0,l.kt)("h2",{id:"database-dependency"},"Database Dependency"),(0,l.kt)("h3",{id:"install-jdbc-driver"},"Install Jdbc Driver"),(0,l.kt)("p",null,"Please download and put oracle driver in ",(0,l.kt)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib/")," dir. For example: cp ojdbc8-xxxxxx.jar ",(0,l.kt)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/lib/")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To enable Oracle CDC (Change Data Capture) using Logminer in Seatunnel, which is a built-in tool provided by Oracle, follow the steps below:")),(0,l.kt)("h4",{id:"enabling-logminer-without-cdb-container-database-mode"},"Enabling Logminer without CDB (Container Database) mode."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The operating system creates an empty file directory to store Oracle archived logs and user tablespaces.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /opt/oracle/oradata/recovery_area\nmkdir -p /opt/oracle/oradata/ORCLCDB\nchown -R oracle /opt/oracle/***\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Login as admin and enable Oracle archived logs.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus /nolog;\nconnect sys as sysdba;\nalter system set db_recovery_file_dest_size = 10G;\nalter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;\nshutdown immediate;\nstartup mount;\nalter database archivelog;\nalter database open;\nALTER DATABASE ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\narchive log list;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'Login as admin and create an account called logminer_user with the password "oracle", and grant it privileges to read tables and logs.')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\nCREATE USER logminer_user IDENTIFIED BY oracle DEFAULT TABLESPACE logminer_tbs QUOTA UNLIMITED ON logminer_tbs;\n\nGRANT CREATE SESSION TO logminer_user;\nGRANT SELECT ON V_$DATABASE to logminer_user;\nGRANT SELECT ON V_$LOG TO logminer_user;\nGRANT SELECT ON V_$LOGFILE TO logminer_user;\nGRANT SELECT ON V_$LOGMNR_LOGS TO logminer_user;\nGRANT SELECT ON V_$LOGMNR_CONTENTS TO logminer_user;\nGRANT SELECT ON V_$ARCHIVED_LOG TO logminer_user;\nGRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO logminer_user;\nGRANT EXECUTE ON DBMS_LOGMNR TO logminer_user;\nGRANT EXECUTE ON DBMS_LOGMNR_D TO logminer_user;\n")),(0,l.kt)("h5",{id:"oracle-11g-is-not-supported"},"Oracle 11g is not supported"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT LOGMINING TO logminer_user;\n")),(0,l.kt)("h5",{id:"grant-privileges-only-to-the-tables-that-need-to-be-collected"},"Grant privileges only to the tables that need to be collected"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ANY TABLE TO logminer_user;\nGRANT ANALYZE ANY TO logminer_user;\n")),(0,l.kt)("h4",{id:"to-enable-logminer-in-oracle-with-cdb-container-database--pdb-pluggable-database-mode-follow-the-steps-below"},"To enable Logminer in Oracle with CDB (Container Database) + PDB (Pluggable Database) mode, follow the steps below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The operating system creates an empty file directory to store Oracle archived logs and user tablespaces.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /opt/oracle/oradata/recovery_area\nmkdir -p /opt/oracle/oradata/ORCLCDB\nmkdir -p /opt/oracle/oradata/ORCLCDB/ORCLPDB1\nchown -R oracle /opt/oracle/***\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Login as admin and enable logging")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus /nolog\nconnect sys as sysdba; # Password: oracle\nalter system set db_recovery_file_dest_size = 10G;\nalter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;\nshutdown immediate\nstartup mount\nalter database archivelog;\nalter database open;\narchive log list;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Executing in CDB")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE TEST.* ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\nALTER TABLE TEST.T2 ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Creating debeziume account")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Operating in CDB")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/top_secret@//localhost:1521/ORCLCDB as sysdba\nCREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf'\n SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\nexit;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Operating in PDB")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/top_secret@//localhost:1521/ORCLPDB1 as sysdba\n CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/ORCLPDB1/logminer_tbs.dbf'\n   SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n exit;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Operating in CDB")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/top_secret@//localhost:1521/ORCLCDB as sysdba\n\nCREATE USER c##dbzuser IDENTIFIED BY dbz\nDEFAULT TABLESPACE logminer_tbs\nQUOTA UNLIMITED ON logminer_tbs\nCONTAINER=ALL;\n\nGRANT CREATE SESSION TO c##dbzuser CONTAINER=ALL;\nGRANT SET CONTAINER TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$DATABASE to c##dbzuser CONTAINER=ALL;\nGRANT FLASHBACK ANY TABLE TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ANY TABLE TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT_CATALOG_ROLE TO c##dbzuser CONTAINER=ALL;\nGRANT EXECUTE_CATALOG_ROLE TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ANY TRANSACTION TO c##dbzuser CONTAINER=ALL;\nGRANT LOGMINING TO c##dbzuser CONTAINER=ALL;\n\nGRANT CREATE TABLE TO c##dbzuser CONTAINER=ALL;\nGRANT LOCK ANY TABLE TO c##dbzuser CONTAINER=ALL;\nGRANT CREATE SEQUENCE TO c##dbzuser CONTAINER=ALL;\n\nGRANT EXECUTE ON DBMS_LOGMNR TO c##dbzuser CONTAINER=ALL;\nGRANT EXECUTE ON DBMS_LOGMNR_D TO c##dbzuser CONTAINER=ALL;\n\nGRANT SELECT ON V_$LOG TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$LOG_HISTORY TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$LOGMNR_LOGS TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$LOGMNR_CONTENTS TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$LOGMNR_PARAMETERS TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$LOGFILE TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$ARCHIVED_LOG TO c##dbzuser CONTAINER=ALL;\nGRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO c##dbzuser CONTAINER=ALL;\nGRANT analyze any TO debeziume_1 CONTAINER=ALL;\n\nexit;\n")),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Oracle Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER(precision <= 9, scale == 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER(9 < precision <= 18, scale == 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER(18 < precision, scale == 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38, 0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER(precision == 0, scale == 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMBER(scale != 0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY_DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY_FLOAT",(0,l.kt)("br",null),"REAL"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR",(0,l.kt)("br",null),"NCHAR",(0,l.kt)("br",null),"NVARCHAR2",(0,l.kt)("br",null),"VARCHAR2",(0,l.kt)("br",null),"LONG",(0,l.kt)("br",null),"ROWID",(0,l.kt)("br",null),"NCLOB",(0,l.kt)("br",null),"CLOB",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,l.kt)("br",null),"TIMESTAMP WITH LOCAL TIME ZONE"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BLOB",(0,l.kt)("br",null),"RAW",(0,l.kt)("br",null),"LONG RAW",(0,l.kt)("br",null),"BFILE"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")))),(0,l.kt)("h2",{id:"source-options"},"Source Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: ",(0,l.kt)("inlineCode",{parentName:"td"},"idbc:oracle:thin:datasource01:1523:xe"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name of the database to monitor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema name of the database to monitor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name of the database to monitor. The table name needs to include the database name, for example: ",(0,l.kt)("inlineCode",{parentName:"td"},"database_name.table_name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names-config"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'Table config list. for example: [{"table": "db1.schema1.table1","primaryKeys":','["key1"]',"}]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"INITIAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional startup mode for Oracle CDC consumer, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"initial"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"latest")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),". ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"initial"),": Synchronize historical data at startup, and then synchronize incremental data.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),": Startup from the earliest offset possible.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),": Startup from the latest offset.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),": Startup from user-supplied specific offsets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified binlog file name. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"startup.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified binlog file position. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"startup.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"NEVER"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional stop mode for Oracle CDC consumer, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"never"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"latest")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),". ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"never"),": Real-time job don't stop the source.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),": Stop from the latest offset.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),": Stop from user-supplied specific offset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified binlog file name. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"stop.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified binlog file position. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"stop.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"8096"),(0,l.kt)("td",{parentName:"tr",align:null},"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot of table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum fetch size for per poll when read table snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-time-zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"UTC"),(0,l.kt)("td",{parentName:"tr",align:null},"The session time zone in database server. If not set, then ZoneId.systemDefault() is used to determine the server time zone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.timeout.ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time that the connector should wait after trying to connect to the database server before timing out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"The max retry times that the connector should retry to build database server connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"The jdbc connection pool size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable exactly once semantic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional output format for Oracle CDC, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULT"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"COMPATIBLE_DEBEZIUM_JSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debezium"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass-through ",(0,l.kt)("a",{parentName:"td",href:"https://debezium.io/documentation/reference/1.6/connectors/oracle.html#oracle-connector-properties"},"Debezium's properties")," to Debezium Embedded Engine which is used to capture data changes from Oracle server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Support multi-table reading")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'source {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    result_table_name = "customers"\n    username = "system"\n    password = "oracle"\n    database-names = ["XE"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["XE.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:system/oracle@oracle-host:1521:xe"\n    source.reader.close.timeout = 120000\n  }\n}\n')),(0,l.kt)("h3",{id:"support-custom-primary-key-for-table"},"Support custom primary key for table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\nsource {\n  Oracle-CDC {\n    result_table_name = "customers"\n    base-url = "jdbc:oracle:thin:system/oracle@oracle-host:1521:xe"\n    source.reader.close.timeout = 120000\n    username = "system"\n    password = "oracle"\n    database-names = ["XE"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["XE.DEBEZIUM.FULL_TYPES"]\n    table-names-config = [\n      {\n        table = "XE.DEBEZIUM.FULL_TYPES"\n        primaryKeys = ["ID"]\n      }\n    ]\n  }\n}\n\n')),(0,l.kt)("h3",{id:"support-debezium-compatible-format-send-to-kafka"},"Support debezium-compatible format send to kafka"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Must be used with kafka connector sink, see ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/formats/cdc-compatible-debezium-json"},"compatible debezium format")," for details")),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Oracle CDC Source Connector")),(0,l.kt)("h3",{id:"next-version"},"next version"))}c.isMDXComponent=!0}}]);