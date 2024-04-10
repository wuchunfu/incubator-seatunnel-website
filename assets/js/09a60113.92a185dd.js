"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23964],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||c;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27876:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),c=(t(67294),t(3905)),a=["components"],i={},s="Connector check command usage",l={unversionedId:"command/connector-check",id:"command/connector-check",title:"Connector check command usage",description:"Command Entrypoint",source:"@site/docs/command/connector-check.md",sourceDirName:"command",slug:"/command/connector-check",permalink:"/docs/command/connector-check",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/command/connector-check.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Command usage",permalink:"/docs/command/usage"},next:{title:"about",permalink:"/docs/seatunnel-engine/about"}},u={},p=[{value:"Command Entrypoint",id:"command-entrypoint",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"connector-check-command-usage"},"Connector check command usage"),(0,c.kt)("h2",{id:"command-entrypoint"},"Command Entrypoint"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"bin/seatunnel-connector.sh\n")),(0,c.kt)("h2",{id:"options"},"Options"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"Usage: seatunnel-connector.sh [options]\n  Options:\n    -h, --help         Show the usage message\n    -l, --list         List all supported plugins(sources, sinks, transforms) \n                       (default: false)\n    -o, --option-rule  Get option rule of the plugin by the plugin \n                       identifier(connector name or transform name)\n    -pt, --plugin-type SeaTunnel plugin type, support [source, sink, \n                       transform] \n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"# List all supported connectors(sources and sinks) and transforms\nbin/seatunnel-connector.sh -l\n# List all supported sinks\nbin/seatunnel-connector.sh -l -pt sink\n# Get option rule of the connector or transform by the name\nbin/seatunnel-connector.sh -o Paimon\n# Get option rule of paimon sink\nbin/seatunnel-connector.sh -o Paimon -pt sink\n")))}d.isMDXComponent=!0}}]);