"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[757],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=u(n),g=r,k=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1486:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={},o="Neo4j",u={unversionedId:"spark/configuration/source-plugins/neo4j",id:"version-2.1.0/spark/configuration/source-plugins/neo4j",title:"Neo4j",description:"Source plugin: Neo4j [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/neo4j.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/neo4j",permalink:"/docs/2.1.0/spark/configuration/source-plugins/neo4j",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/neo4j.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tidb",permalink:"/docs/2.1.0/spark/configuration/source-plugins/Tidb"},next:{title:"Common Options",permalink:"/docs/2.1.0/spark/configuration/source-plugins/source-plugin"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"result.table.name string",id:"resulttablename-string",level:3},{value:"authentication.type string",id:"authenticationtype-string",level:3},{value:"authentication.basic.username string",id:"authenticationbasicusername-string",level:3},{value:"authentication.basic.password string",id:"authenticationbasicpassword-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"labels string",id:"labels-string",level:3},{value:"relationship string",id:"relationship-string",level:3},{value:"schema.flatten.limit string",id:"schemaflattenlimit-string",level:3},{value:"schema.strategy string",id:"schemastrategy-string",level:3},{value:"pushdown.filters.enabled string",id:"pushdownfiltersenabled-string",level:3},{value:"pushdown.columns.enabled string",id:"pushdowncolumnsenabled-string",level:3},{value:"partitions string",id:"partitions-string",level:3},{value:"query.count string",id:"querycount-string",level:3},{value:"relationship.nodes.map string",id:"relationshipnodesmap-string",level:3},{value:"relationship.source.labels string",id:"relationshipsourcelabels-string",level:3},{value:"relationship.target.labels string",id:"relationshiptargetlabels-string",level:3},{value:"Example",id:"example",level:2}],m={toc:d};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"neo4j"},"Neo4j"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Source plugin: Neo4j ","[Spark]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read data from Neo4j."),(0,l.kt)("p",null,"Neo4j Connector for Apache Spark allows you to read data from Neo4j in 3 different ways: by node labels, by relationship name, and by direct Cypher query."),(0,l.kt)("p",null,"The Options required of yes* means that  you must specify  one way of (query labels relationship)"),(0,l.kt)("p",null,"for detail neo4j config message please visit ",(0,l.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/spark/current/reading/"},"neo4j doc")," "),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#result.table.name-string"},"result_table_name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authentication.type-string"},"authentication.type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authentication.basic.username-string"},"authentication.basic.username")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#authentication.basic.password-string"},"authentication.basic.password")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#url-string"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#query-string"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes*"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#labels-string"},"labels")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes*"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#relationship-string"},"relationship")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes*"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema.flatten.limit-string"},"schema.flatten.limit")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema.strategy-string"},"schema.strategy")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pushdown.filters.enabled-string"},"pushdown.filters.enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pushdown.columns.enabled-string"},"pushdown.columns.enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#partitions-string"},"partitions")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#query.count-string"},"query.count")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#relationship.nodes.map-string"},"relationship.nodes.map")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#relationship.source.labels-string"},"relationship.source.labels")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#relationship.target.labels-string"},"relationship.target.labels")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"resulttablename-string"},"result.table.name ","[string]"),(0,l.kt)("p",null,"result table name"),(0,l.kt)("h3",{id:"authenticationtype-string"},"authentication.type ","[string]"),(0,l.kt)("p",null,"authentication type"),(0,l.kt)("h3",{id:"authenticationbasicusername-string"},"authentication.basic.username ","[string]"),(0,l.kt)("p",null,"username"),(0,l.kt)("h3",{id:"authenticationbasicpassword-string"},"authentication.basic.password ","[string]"),(0,l.kt)("p",null,"password"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"url "),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Cypher query to read the data.You must specify one option from ","[query, labels OR relationship]"),(0,l.kt)("h3",{id:"labels-string"},"labels ","[string]"),(0,l.kt)("p",null,"List of node labels separated by : The first label will be the primary label. You must specify one option from ","[query, labels OR relationship]"),(0,l.kt)("h3",{id:"relationship-string"},"relationship ","[string]"),(0,l.kt)("p",null,"Name of a relationship. You must specify one option from ","[query, labels OR relationship]"),(0,l.kt)("h3",{id:"schemaflattenlimit-string"},"schema.flatten.limit ","[string]"),(0,l.kt)("p",null,"Number of records to be used to create the Schema (only if APOC are not installed)"),(0,l.kt)("h3",{id:"schemastrategy-string"},"schema.strategy ","[string]"),(0,l.kt)("p",null,"Strategy used by the connector in order to compute the Schema definition for the Dataset. Possibile values are string, sample. When string it coerces all the properties to String otherwise it will try to sample the Neo4j\u2019s dataset."),(0,l.kt)("h3",{id:"pushdownfiltersenabled-string"},"pushdown.filters.enabled ","[string]"),(0,l.kt)("p",null,"Enable or disable the Push Down Filters support"),(0,l.kt)("h3",{id:"pushdowncolumnsenabled-string"},"pushdown.columns.enabled ","[string]"),(0,l.kt)("p",null,"Enable or disable the Push Down Column support"),(0,l.kt)("h3",{id:"partitions-string"},"partitions ","[string]"),(0,l.kt)("p",null,"This defines the parallelization level while pulling data from Neo4j."),(0,l.kt)("p",null,"Note: as more parallelization does not mean more performances so please tune wisely in according to your Neo4j installation."),(0,l.kt)("h3",{id:"querycount-string"},"query.count ","[string]"),(0,l.kt)("p",null,"Query count, used only in combination with query option, it\u2019s a query that returns a count field like the following:"),(0,l.kt)("p",null,"MATCH (p:Person)-","[r:BOUGHT]","->(pr:Product)\nWHERE pr.name = 'An Awesome Product'\nRETURN count(p) AS count\nor a simple number that represents the amount of records returned by query. Consider that the number passed by this value represent the volume of the data pulled of Neo4j, so please use it carefully."),(0,l.kt)("h3",{id:"relationshipnodesmap-string"},"relationship.nodes.map ","[string]"),(0,l.kt)("p",null,"If true return source and target nodes as Map<String, String>, otherwise we flatten the properties by returning every single node property as column prefixed by source or target"),(0,l.kt)("h3",{id:"relationshipsourcelabels-string"},"relationship.source.labels ","[string]"),(0,l.kt)("p",null,"List of source node Labels separated by :"),(0,l.kt)("h3",{id:"relationshiptargetlabels-string"},"relationship.target.labels ","[string]"),(0,l.kt)("p",null,"List of target node Labels separated by :"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   Neo4j {\n      result_table_name = "test"\n      authentication.type = "basic"\n      authentication.basic.username = "test"\n      authentication.basic.password = "test"\n      url = "bolt://localhost:7687"\n      labels = "Person"\n      #query = "MATCH (n1)-[r]->(n2) RETURN r, n1, n2 "\n   }\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The returned table is a data table in which both fields are strings")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"<id>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"<labels>")),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"born"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Keanu Reeves"),(0,l.kt)("td",{parentName:"tr",align:null},"1964")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Carrie-Anne Moss"),(0,l.kt)("td",{parentName:"tr",align:null},"1967")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Laurence Fishburne"),(0,l.kt)("td",{parentName:"tr",align:null},"1961")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Hugo Weaving"),(0,l.kt)("td",{parentName:"tr",align:null},"1960")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Andy Wachowski"),(0,l.kt)("td",{parentName:"tr",align:null},"1967")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Lana Wachowski"),(0,l.kt)("td",{parentName:"tr",align:null},"1965")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Joel Silver"),(0,l.kt)("td",{parentName:"tr",align:null},"1952")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"[Person]"),(0,l.kt)("td",{parentName:"tr",align:null},"Emil Eifrem"),(0,l.kt)("td",{parentName:"tr",align:null},"1978")))))}g.isMDXComponent=!0}}]);