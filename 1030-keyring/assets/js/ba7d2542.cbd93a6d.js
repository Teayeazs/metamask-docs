"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||k[u]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1,sidebar_label:"SDK connections"},s="MetaMask SDK connections",r={unversionedId:"concepts/sdk/connections",id:"concepts/sdk/connections",title:"MetaMask SDK connections",description:"This page provides details on how a dapp with MetaMask SDK installed connects to a",source:"@site/wallet/concepts/sdk/connections.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/connections",permalink:"/1030-keyring/wallet/concepts/sdk/connections",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/connections.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"SDK connections"},sidebar:"walletSidebar",previous:{title:"About MetaMask SDK",permalink:"/1030-keyring/wallet/concepts/sdk/"},next:{title:"Android SDK architecture",permalink:"/1030-keyring/wallet/concepts/sdk/android"}},l={},c=[{value:"Initial connection flow",id:"initial-connection-flow",level:2},{value:"MetaMask Mobile connection",id:"metamask-mobile-connection",level:2},{value:"Connection status",id:"connection-status",level:2},{value:"Paused connections",id:"paused-connections",level:3},{value:"Cleared connections",id:"cleared-connections",level:3},{value:"Close connections manually",id:"close-connections-manually",level:3}],p={toc:c},d="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metamask-sdk-connections"},"MetaMask SDK connections"),(0,o.kt)("p",null,"This page provides details on how a dapp with ",(0,o.kt)("a",{parentName:"p",href:"/1030-keyring/wallet/"},"MetaMask SDK")," installed connects to a\nuser's MetaMask wallet."),(0,o.kt)("h2",{id:"initial-connection-flow"},"Initial connection flow"),(0,o.kt)("p",null,"The following flowchart outlines the initial connection flow between a dapp and MetaMask:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("mermaid",{value:"flowchart TD\n    A{{Dapp platform?}}\n    A --\x3e|Desktop| C(Show modal) --\x3e D{{Connect via?}}\n    D --\x3e|Extension| E{{Extension installed?}}\n    E --\x3e|No| F(Chrome store) --\x3e G(Connect via extension)\n    E --\x3e|Yes| G\n    D --\x3e|MM Mobile| H{{MM Mobile installed?}}\n    H --\x3e|Yes| J\n    H --\x3e|No| I(App store) --\x3e J(Connect via MM Mobile)\n    A --\x3e|Mobile| K(Deeplink to MM Mobile) --\x3e H"})),(0,o.kt)("p",null,"The path first depends on whether the dapp is on a desktop or mobile platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the dapp is on a desktop platform (for example, a desktop web dapp), the dapp shows a modal\nasking the user to select if they want to connect to MetaMask using the browser extension or\nMetaMask Mobile."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the user selects extension:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the extension is not installed, the user is taken to the Chrome extension store to\ninstall it."),(0,o.kt)("li",{parentName:"ul"},"If the extension is installed, the user connects to their MetaMask extension."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the user selects MetaMask Mobile:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If MetaMask Mobile is not installed, the user is taken to the app store to install it."),(0,o.kt)("li",{parentName:"ul"},"If MetaMask Mobile is installed, ",(0,o.kt)("a",{parentName:"li",href:"#metamask-mobile-connection"},"an encrypted connection from the dapp to MetaMask\nMobile")," is established.")))),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The choice between the extension and MetaMask Mobile persists until the user or dapp disconnects.\nAt that point, the dapp displays the modal again."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the dapp is on a mobile platform (for example, a mobile web dapp or mobile dapp), the dapp\ndeeplinks to MetaMask Mobile."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If MetaMask Mobile is not installed, the user is taken to the app store to install it."),(0,o.kt)("li",{parentName:"ul"},"If MetaMask Mobile is installed, ",(0,o.kt)("a",{parentName:"li",href:"#metamask-mobile-connection"},"an encrypted connection from the dapp to MetaMask\nMobile")," is established.")))),(0,o.kt)("h2",{id:"metamask-mobile-connection"},"MetaMask Mobile connection"),(0,o.kt)("p",null,"The SDK uses elliptic curve integrated encryption scheme (ECIES) to communicate with MetaMask Mobile.\nThe following sequence diagram outlines how a dapp establishes an encrypted connection with MetaMask Mobile:"),(0,o.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 100,\n      'width': 250,\n      'noteMargin': 15\n    }\n  }\n}%%\n\nsequenceDiagram\n    autonumber\n    participant Dapp as Dapp (MetaMask SDK)\n    participant Socket as Socket.io server\n    participant MMM as MetaMask Mobile\n\n    Dapp->>Dapp: Generate a Socket.io room ID and ECIES key pair\n    Dapp->>Socket: Connect using Socket.io room ID\n    Dapp->>MMM: Send deeplink containing Socket.io room ID and ECIES public key\n    MMM->>Socket: Connect using Socket.io room ID\n    MMM->>MMM: Generate an ECIES key pair\n    MMM->>Dapp: Send ECIES public key using the Socket.io channel\n\n    note over Dapp, MMM: The dapp and MetaMask Mobile generate a shared secret using their own private key and the other party's public key. All further communication is encrypted and decrypted using the shared secret.\n    loop\n    Dapp->>MMM: Send encrypted message\n    MMM->>Dapp: Send encrypted message\n    end"}),(0,o.kt)("p",null,"The flow is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The dapp generates a UUID v4 (",(0,o.kt)("a",{parentName:"li",href:"https://socket.io/"},"Socket.io")," room ID) and ECIES key pair."),(0,o.kt)("li",{parentName:"ol"},"The dapp connects to the Socket.io server using the room ID."),(0,o.kt)("li",{parentName:"ol"},"The dapp sends a deeplink to MetaMask Mobile (either directly, if on mobile, or through a QR\ncode, if on desktop) containing its ECIES public key and the Socket.io room ID."),(0,o.kt)("li",{parentName:"ol"},"MetaMask Mobile opens the QR code or deeplink and connects to the Socket.io server using the room ID."),(0,o.kt)("li",{parentName:"ol"},"MetaMask Mobile generates an ECIES key pair."),(0,o.kt)("li",{parentName:"ol"},"MetaMask Mobile sends its ECIES public key to the dapp using the Socket.io channel, and the two\nparties generate a shared secret."),(0,o.kt)("li",{parentName:"ol"},"The dapp and MetaMask Mobile establish an encrypted connection to send JSON-RPC API methods.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For all platforms except Android, the SDK uses a Socket.io server to help establish the encrypted connection.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/1030-keyring/wallet/concepts/sdk/android"},"Android SDK")," uses direct local communication.")),(0,o.kt)("h2",{id:"connection-status"},"Connection status"),(0,o.kt)("p",null,"The connection between the SDK and MetaMask Mobile can ",(0,o.kt)("a",{parentName:"p",href:"#paused-connections"},"pause")," and\n",(0,o.kt)("a",{parentName:"p",href:"#cleared-connections"},"clear"),".\nYou can also ",(0,o.kt)("a",{parentName:"p",href:"#close-connections-manually"},"close connections manually"),"."),(0,o.kt)("h3",{id:"paused-connections"},"Paused connections"),(0,o.kt)("p",null,"Connections pause after MetaMask Mobile is in background (minimized) for 20 seconds.\nThis is to accommodate OS restrictions."),(0,o.kt)("p",null,"When a connection pauses, all traffic to MetaMask Mobile pauses, and the SDK doesn't produce any\nresponse until the user opens MetaMask Mobile again.\nThe SDK automatically deeplinks to MetaMask Mobile, so connections resume automatically.\nIf MetaMask Mobile is paused and the user completely closes MetaMask Mobile, the connection remains\npaused and resumes when the user opens it again."),(0,o.kt)("p",null,"Because of this, polling data from MetaMask Mobile may not work for long periods of time."),(0,o.kt)("admonition",{title:"known issue",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When MetaMask Mobile is running in the background, the connection may pause and fail to resume properly when the user reopens MetaMask.\nThe user must return to your dapp so the request is re-sent.\nThe SDK team is working on this issue, and is researching decentralized communication solutions that\nhold state such as ",(0,o.kt)("a",{parentName:"p",href:"https://waku.org/"},"Waku"),".")),(0,o.kt)("h3",{id:"cleared-connections"},"Cleared connections"),(0,o.kt)("p",null,"Connections clear if the user closes or refreshes your dapp, since MetaMask doesn't persist\nconnections on the dapp side.\nThis is for simplicity and security purposes."),(0,o.kt)("p",null,"If the user completely closes MetaMask Mobile without ",(0,o.kt)("a",{parentName:"p",href:"#paused-connections"},"pausing the connection"),"\nfirst, MetaMask infers that the user isn't using the wallet and closes the connection."),(0,o.kt)("h3",{id:"close-connections-manually"},"Close connections manually"),(0,o.kt)("p",null,"To close connections manually from MetaMask Mobile, go to ",(0,o.kt)("strong",{parentName:"p"},"Settings > Experimental"),", and select\n",(0,o.kt)("strong",{parentName:"p"},"Clear MetaMask SDK connections"),"."))}k.isMDXComponent=!0}}]);