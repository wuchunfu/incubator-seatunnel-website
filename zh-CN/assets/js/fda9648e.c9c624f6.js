"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31444],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=m(t),u=r,y=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return t?a.createElement(y,i(i({ref:n},g),{},{components:t})):a.createElement(y,i({ref:n},g))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(58168),r=(t(96540),t(15680));const l={},i="LLM",o={unversionedId:"transform-v2/llm",id:"transform-v2/llm",title:"LLM",description:"LLM \u8f6c\u6362\u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/llm.md",sourceDirName:"transform-v2",slug:"/transform-v2/llm",permalink:"/zh-CN/docs/transform-v2/llm",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/transform-v2/llm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JsonPath",permalink:"/zh-CN/docs/transform-v2/jsonpath"},next:{title:"\u66ff\u6362",permalink:"/zh-CN/docs/transform-v2/replace"}},p={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"model_provider",id:"model_provider",level:3},{value:"output_data_type",id:"output_data_type",level:3},{value:"prompt",id:"prompt",level:3},{value:"inference_columns",id:"inference_columns",level:3},{value:"model",id:"model",level:3},{value:"api_key",id:"api_key",level:3},{value:"api_path",id:"api_path",level:3},{value:"custom_config",id:"custom_config",level:3},{value:"custom_response_parse",id:"custom_response_parse",level:3},{value:"custom_request_headers",id:"custom_request_headers",level:3},{value:"custom_request_body",id:"custom_request_body",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"tips",id:"tips",level:2},{value:"\u793a\u4f8b OPENAI",id:"\u793a\u4f8b-openai",level:2},{value:"\u793a\u4f8b KIMIAI",id:"\u793a\u4f8b-kimiai",level:2},{value:"Customize the LLM model",id:"customize-the-llm-model",level:3}],g={toc:m},s="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"llm"},"LLM"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"LLM \u8f6c\u6362\u63d2\u4ef6")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u5229\u7528\u5927\u578b\u8bed\u8a00\u6a21\u578b (LLM) \u7684\u5f3a\u5927\u529f\u80fd\u6765\u5904\u7406\u6570\u636e\uff0c\u65b9\u6cd5\u662f\u5c06\u6570\u636e\u53d1\u9001\u5230 LLM \u5e76\u63a5\u6536\u751f\u6210\u7684\u7ed3\u679c\u3002\u5229\u7528 LLM \u7684\u529f\u80fd\u6765\u6807\u8bb0\u3001\u6e05\u7406\u3001\u4e30\u5bcc\u6570\u636e\u3001\u6267\u884c\u6570\u636e\u63a8\u7406\u7b49\u3002"),(0,r.yg)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model_provider"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_data_type"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prompt"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inference_columns"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_response_parse"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_request_headers"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_request_body"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"model_provider"},"model_provider"),(0,r.yg)("p",null,"\u8981\u4f7f\u7528\u7684\u6a21\u578b\u63d0\u4f9b\u8005\u3002\u53ef\u7528\u9009\u9879\u4e3a:\nOPENAI\u3001DOUBAO\u3001KIMIAI\u3001CUSTOM"),(0,r.yg)("h3",{id:"output_data_type"},"output_data_type"),(0,r.yg)("p",null,"\u8f93\u51fa\u6570\u636e\u7684\u6570\u636e\u7c7b\u578b\u3002\u53ef\u7528\u9009\u9879\u4e3a:\nSTRING,INT,BIGINT,DOUBLE,BOOLEAN.\n\u9ed8\u8ba4\u503c\u4e3a STRING\u3002"),(0,r.yg)("h3",{id:"prompt"},"prompt"),(0,r.yg)("p",null,"\u53d1\u9001\u5230 LLM \u7684\u63d0\u793a\u3002\u6b64\u53c2\u6570\u5b9a\u4e49 LLM \u5c06\u5982\u4f55\u5904\u7406\u548c\u8fd4\u56de\u6570\u636e\uff0c\u4f8b\u5982:"),(0,r.yg)("p",null,"\u4ece\u6e90\u8bfb\u53d6\u7684\u6570\u636e\u662f\u8fd9\u6837\u7684\u8868\u683c:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jia Fan"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hailin Wang"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Eric"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Guangdong Liu"),(0,r.yg)("td",{parentName:"tr",align:null},"20")))),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u63d0\u793a:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Determine whether someone is Chinese or American by their name\n")),(0,r.yg)("p",null,"\u8fd9\u5c06\u8fd4\u56de:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"llm_output"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jia Fan"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hailin Wang"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Eric"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"American")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Guangdong Liu"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")))),(0,r.yg)("h3",{id:"inference_columns"},"inference_columns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"inference_columns"),"\u9009\u9879\u5141\u8bb8\u60a8\u6307\u5b9a\u5e94\u8be5\u5c06\u8f93\u5165\u6570\u636e\u4e2d\u7684\u54ea\u4e9b\u5217\u7528\u4f5cLLM\u7684\u8f93\u5165\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u5217\u90fd\u5c06\u7528\u4f5c\u8f93\u5165\u3002"),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'transform {\n  LLM {\n    model_provider = OPENAI\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    inference_columns = ["name", "age"]\n    prompt = "Determine whether someone is Chinese or American by their name"\n  }\n}\n')),(0,r.yg)("h3",{id:"model"},"model"),(0,r.yg)("p",null,"\u8981\u4f7f\u7528\u7684\u6a21\u578b\u3002\u4e0d\u540c\u7684\u6a21\u578b\u63d0\u4f9b\u8005\u6709\u4e0d\u540c\u7684\u6a21\u578b\u3002\u4f8b\u5982\uff0cOpenAI \u6a21\u578b\u53ef\u4ee5\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"gpt-4o-mini"),"\u3002\n\u5982\u679c\u4f7f\u7528 OpenAI \u6a21\u578b\uff0c\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/model-endpoint-compatibility"},"https://platform.openai.com/docs/models/model-endpoint-compatibility")," \u6587\u6863\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"/v1/chat/completions")," \u7aef\u70b9\u3002"),(0,r.yg)("h3",{id:"api_key"},"api_key"),(0,r.yg)("p",null,"\u7528\u4e8e\u6a21\u578b\u63d0\u4f9b\u8005\u7684 API \u5bc6\u94a5\u3002\n\u5982\u679c\u4f7f\u7528 OpenAI \u6a21\u578b\uff0c\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/api-keys"},"https://platform.openai.com/docs/api-reference/api-keys")," \u6587\u6863\u7684\u5982\u4f55\u83b7\u53d6 API \u5bc6\u94a5\u3002"),(0,r.yg)("h3",{id:"api_path"},"api_path"),(0,r.yg)("p",null,"\u7528\u4e8e\u6a21\u578b\u63d0\u4f9b\u8005\u7684 API \u8def\u5f84\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u4e0d\u9700\u8981\u66f4\u6539\u6b64\u914d\u7f6e\u3002\u5982\u679c\u4f7f\u7528 API \u4ee3\u7406\u7684\u670d\u52a1\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5c06\u5176\u914d\u7f6e\u4e3a\u4ee3\u7406\u7684 API \u5730\u5740\u3002"),(0,r.yg)("h3",{id:"custom_config"},"custom_config"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"custom_config")," \u9009\u9879\u5141\u8bb8\u60a8\u4e3a\u6a21\u578b\u63d0\u4f9b\u989d\u5916\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002\u8fd9\u662f\u4e00\u4e2a Map\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u5b9a\u4e49\u7279\u5b9a\u6a21\u578b\u53ef\u80fd\u9700\u8981\u7684\u5404\u79cd\u8bbe\u7f6e\u3002"),(0,r.yg)("h3",{id:"custom_response_parse"},"custom_response_parse"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"custom_response_parse")," \u9009\u9879\u5141\u8bb8\u60a8\u6307\u5b9a\u5982\u4f55\u89e3\u6790\u6a21\u578b\u7684\u54cd\u5e94\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 JsonPath\n\u4ece\u54cd\u5e94\u4e2d\u63d0\u53d6\u6240\u9700\u7684\u7279\u5b9a\u6570\u636e\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"$.choices[*].message.content")," \u63d0\u53d6\u5982\u4e0bjson\u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"content")," \u5b57\u6bb5\n\u503c\u3002JsonPath \u7684\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/json-path/JsonPath?tab=readme-ov-file#getting-started"},"JsonPath \u5feb\u901f\u5165\u95e8")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "chatcmpl-9s4hoBNGV0d9Mudkhvgzg64DAWPnx",\n  "object": "chat.completion",\n  "created": 1722674828,\n  "model": "gpt-4o-mini",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "[\\"Chinese\\"]"\n      },\n      "logprobs": null,\n      "finish_reason": "stop"\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 107,\n    "completion_tokens": 3,\n    "total_tokens": 110\n  },\n  "system_fingerprint": "fp_0f03d4f0ee",\n  "code": 0,\n  "msg": "ok"\n}\n')),(0,r.yg)("h3",{id:"custom_request_headers"},"custom_request_headers"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"custom_request_headers")," \u9009\u9879\u5141\u8bb8\u60a8\u5b9a\u4e49\u5e94\u5305\u542b\u5728\u53d1\u9001\u5230\u6a21\u578b API \u7684\u8bf7\u6c42\u4e2d\u7684\u81ea\u5b9a\u4e49\u5934\u4fe1\u606f\u3002\u5982\u679c API\n\u9700\u8981\u6807\u51c6\u5934\u4fe1\u606f\u4e4b\u5916\u7684\u989d\u5916\u5934\u4fe1\u606f\uff0c\u4f8b\u5982\u6388\u6743\u4ee4\u724c\u3001\u5185\u5bb9\u7c7b\u578b\u7b49\uff0c\u8fd9\u4e2a\u9009\u9879\u4f1a\u975e\u5e38\u6709\u7528\u3002"),(0,r.yg)("h3",{id:"custom_request_body"},"custom_request_body"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"custom_request_body")," \u9009\u9879\u652f\u6301\u5360\u4f4d\u7b26\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${model}"),"\uff1a\u7528\u4e8e\u6a21\u578b\u540d\u79f0\u7684\u5360\u4f4d\u7b26\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${input}"),"\uff1a\u7528\u4e8e\u786e\u5b9a\u8f93\u5165\u503c\u7684\u5360\u4f4d\u7b26,\u540c\u65f6\u6839\u636e body value \u7684\u7c7b\u578b\u5b9a\u4e49\u8bf7\u6c42\u4f53\u8bf7\u6c42\u7c7b\u578b\u3002\u4f8b\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},'"${input}"'),' -> "input"\u3002'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${prompt}"),"\uff1a\u7528\u4e8e LLM \u6a21\u578b\u63d0\u793a\u7684\u5360\u4f4d\u7b26\u3002")),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570, \u8bf7\u53c2\u8003  ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/transform-v2/common-options"},"Transform Plugin")," \u4e86\u89e3\u8be6\u60c5"),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("p",null,"\u5927\u6a21\u578bAPI\u63a5\u53e3\u901a\u5e38\u4f1a\u6709\u901f\u7387\u9650\u5236\uff0c\u53ef\u4ee5\u914d\u5408Seatunnel\u7684\u9650\u901f\u914d\u7f6e\uff0c\u5df2\u786e\u4fdd\u4efb\u52a1\u987a\u5229\u8fd0\u884c\u3002\nSeatunnel\u9650\u901f\u914d\u7f6e,\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/concept/speed-limit"},"speed-limit"),"\u4e86\u89e3\u8be6\u60c5"),(0,r.yg)("h2",{id:"\u793a\u4f8b-openai"},"\u793a\u4f8b OPENAI"),(0,r.yg)("p",null,"\u901a\u8fc7 LLM \u786e\u5b9a\u7528\u6237\u6240\u5728\u7684\u56fd\u5bb6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  read_limit.rows_per_second = 10\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "Jia Fan"], kind = INSERT}\n      {fields = [2, "Hailin Wang"], kind = INSERT}\n      {fields = [3, "Tomas"], kind = INSERT}\n      {fields = [4, "Eric"], kind = INSERT}\n      {fields = [5, "Guangdong Liu"], kind = INSERT}\n    ]\n  }\n}\n\ntransform {\n  LLM {\n    model_provider = OPENAI\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    prompt = "Determine whether someone is Chinese or American by their name"\n  }\n}\n\nsink {\n  console {\n  }\n}\n')),(0,r.yg)("h2",{id:"\u793a\u4f8b-kimiai"},"\u793a\u4f8b KIMIAI"),(0,r.yg)("p",null,"\u901a\u8fc7 LLM \u5224\u65ad\u4eba\u540d\u662f\u5426\u4e2d\u56fd\u5386\u53f2\u4e0a\u7684\u5e1d\u738b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  read_limit.rows_per_second = 10\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "\u8bf8\u845b\u4eae"], kind = INSERT}\n      {fields = [2, "\u674e\u4e16\u6c11"], kind = INSERT}\n      {fields = [3, "\u5b59\u609f\u7a7a"], kind = INSERT}\n      {fields = [4, "\u6731\u5143\u748b"], kind = INSERT}\n      {fields = [5, "\u4e54\u6cbb\xb7\u534e\u76db\u987f"], kind = INSERT}\n    ]\n  }\n}\n\ntransform {\n  LLM {\n    model_provider = KIMIAI\n    model = moonshot-v1-8k\n    api_key = sk-xxx\n    prompt = "\u5224\u65ad\u662f\u5426\u662f\u4e2d\u56fd\u5386\u53f2\u4e0a\u7684\u5e1d\u738b"\n    output_data_type = boolean\n  }\n}\n\nsink {\n  console {\n  }\n}\n')),(0,r.yg)("h3",{id:"customize-the-llm-model"},"Customize the LLM model"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "Jia Fan"], kind = INSERT}\n      {fields = [2, "Hailin Wang"], kind = INSERT}\n      {fields = [3, "Tomas"], kind = INSERT}\n      {fields = [4, "Eric"], kind = INSERT}\n      {fields = [5, "Guangdong Liu"], kind = INSERT}\n    ]\n    result_table_name = "fake"\n  }\n}\n\ntransform {\n  LLM {\n    source_table_name = "fake"\n    model_provider = CUSTOM\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    prompt = "Determine whether someone is Chinese or American by their name"\n    openai.api_path = "http://mockserver:1080/v1/chat/completions"\n    custom_config={\n            custom_response_parse = "$.choices[*].message.content"\n            custom_request_headers = {\n                Content-Type = "application/json"\n                Authorization = "Bearer xxxxxxxx"            \n            }\n            custom_request_body ={\n                model = "${model}"\n                messages = [\n                {\n                    role = "system"\n                    content = "${prompt}"\n                },\n                {\n                    role = "user"\n                    content = "${input}"\n                }]\n            }\n        }\n    result_table_name = "llm_output"\n  }\n}\n\nsink {\n  Assert {\n    source_table_name = "llm_output"\n    rules =\n      {\n        field_rules = [\n          {\n            field_name = llm_output\n            field_type = string\n            field_value = [\n              {\n                rule_type = NOT_NULL\n              }\n            ]\n          }\n        ]\n      }\n  }\n}\n')))}d.isMDXComponent=!0}}]);