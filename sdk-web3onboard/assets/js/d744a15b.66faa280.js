"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[106],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(r),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,c(c({ref:e},p),{},{components:r})):n.createElement(y,c({ref:e},p))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77445:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3},c="Contract proxy class",i={unversionedId:"how-to/interact-with-smart-contracts/unity/contract-proxy-class",id:"how-to/interact-with-smart-contracts/unity/contract-proxy-class",title:"Contract proxy class",description:"When interacting with smart contracts in Unity, the contract proxy class is responsible",source:"@site/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class.md",sourceDirName:"how-to/interact-with-smart-contracts/unity",slug:"/how-to/interact-with-smart-contracts/unity/contract-proxy-class",permalink:"/sdk-web3onboard/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Contract factory",permalink:"/sdk-web3onboard/wallet/how-to/interact-with-smart-contracts/unity/contract-factory"},next:{title:"Contract provider",permalink:"/sdk-web3onboard/wallet/how-to/interact-with-smart-contracts/unity/contract-provider"}},s={},l=[],p={toc:l},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contract-proxy-class"},"Contract proxy class"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/sdk-web3onboard/wallet/"},"interacting with smart contracts in Unity"),", the contract proxy class is responsible\nfor performing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction serialization"),(0,o.kt)("li",{parentName:"ul"},"Transaction execution"),(0,o.kt)("li",{parentName:"ul"},"Transaction result deserialization")),(0,o.kt)("p",null,"The contract proxy class is also responsible for invoking the ",(0,o.kt)("a",{parentName:"p",href:"/sdk-web3onboard/wallet/how-to/interact-with-smart-contracts/unity/contract-provider"},"provider")," and attempts\nto support both asynchronous and synchronous provider objects."),(0,o.kt)("p",null,"Since the proxy class is responsible for a lot, some parts of the class may be decoupled into their\nown components.\nFor example, transaction serialization and deserialization is not very customizable and will likely\nbe moved into its own component to allow more extendability."),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The contract proxy class should be considered an internal and unstable API.\nYou should never need to inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," class, unless you're using the\n",(0,o.kt)("a",{parentName:"p",href:"/sdk-web3onboard/wallet/how-to/interact-with-smart-contracts/unity/contract-factory#backed-type-contract-factory"},"backed type contract factory"),".\nHowever, the ",(0,o.kt)("a",{parentName:"p",href:"/sdk-web3onboard/wallet/#generate-contract-code"},"contract code generator")," already generates these\nclasses for you."),(0,o.kt)("p",{parentName:"admonition"},"You only  need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.Attach<T>(string address, IProvider provider)"),".")))}d.isMDXComponent=!0}}]);