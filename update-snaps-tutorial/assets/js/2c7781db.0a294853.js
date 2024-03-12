"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Detect a user's network and network changes.",sidebar_position:2},l="Detect a user's network",i={unversionedId:"how-to/detect-network",id:"how-to/detect-network",title:"Detect a user's network",description:"Detect a user's network and network changes.",source:"@site/wallet/how-to/detect-network.md",sourceDirName:"how-to",slug:"/how-to/detect-network",permalink:"/update-snaps-tutorial/wallet/how-to/detect-network",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/detect-network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Detect a user's network and network changes.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Detect multiple wallets",permalink:"/update-snaps-tutorial/wallet/how-to/detect-wallet/multiple-wallets"},next:{title:"Access a user's accounts",permalink:"/update-snaps-tutorial/wallet/how-to/access-accounts"}},s={},c=[{value:"Chain IDs",id:"chain-ids",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detect-a-users-network"},"Detect a user's network"),(0,a.kt)("p",null,"It's important to keep track of the user's network chain ID because all RPC requests are submitted\nto the currently connected network."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_chainId"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_chainId")),"\nRPC method to detect the chain ID of the user's current network.\nListen to the ",(0,a.kt)("a",{parentName:"p",href:"/update-snaps-tutorial/wallet/reference/provider-api#chainchanged"},(0,a.kt)("inlineCode",{parentName:"a"},"chainChanged"))," provider event to\ndetect when the user changes networks."),(0,a.kt)("p",null,"For example, the following code detects a user's network and when the user changes networks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const chainId = await window.ethereum.request({ method: "eth_chainId" });\n\nwindow.ethereum.on("chainChanged", handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n    // We recommend reloading the page, unless you must do otherwise.\n    window.location.reload();\n}\n')),(0,a.kt)("h2",{id:"chain-ids"},"Chain IDs"),(0,a.kt)("p",null,"These are the chain IDs of the Ethereum networks that MetaMask supports by default.\nConsult ",(0,a.kt)("a",{parentName:"p",href:"https://chainid.network"},"chainid.network")," for more."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hex"),(0,a.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,a.kt)("th",{parentName:"tr",align:null},"Network"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum main network (Mainnet)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x5"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"Goerli test network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0xaa36a7"),(0,a.kt)("td",{parentName:"tr",align:null},"11155111"),(0,a.kt)("td",{parentName:"tr",align:null},"Sepolia test network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0xe704"),(0,a.kt)("td",{parentName:"tr",align:null},"59140"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.linea.build/"},"Linea Goerli test network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x539"),(0,a.kt)("td",{parentName:"tr",align:null},"1337"),(0,a.kt)("td",{parentName:"tr",align:null},"Localhost test networks")))))}d.isMDXComponent=!0}}]);