"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,s(s({ref:t},l),{},{components:n})):a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5},s="Debug a Snap",i={unversionedId:"how-to/debug-a-snap/index",id:"how-to/debug-a-snap/index",title:"Debug a Snap",description:"To debug your Snap, use console.log and inspect the MetaMask background process.",source:"@site/snaps/how-to/debug-a-snap/index.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/",permalink:"/update-snaps-tutorial/snaps/how-to/debug-a-snap/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Test a Snap",permalink:"/update-snaps-tutorial/snaps/how-to/test-a-snap"},next:{title:"Troubleshoot common issues",permalink:"/update-snaps-tutorial/snaps/how-to/debug-a-snap/common-issues"}},p={},u=[],l={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-a-snap"},"Debug a Snap"),(0,o.kt)("p",null,"To debug your Snap, use ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also see the ",(0,o.kt)("a",{parentName:"p",href:"/update-snaps-tutorial/snaps/how-to/debug-a-snap/common-issues"},"common issues")," encountered by Snap developers.")),(0,o.kt)("p",null,"You can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,o.kt)("a",{parentName:"p",href:"/update-snaps-tutorial/snaps/reference/cli/subcommands#m-manifest"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nto update the ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,o.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,o.kt)("li",{parentName:"ol"},"Toggle ",(0,o.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,o.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,o.kt)("strong",{parentName:"li"},"Details"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,o.kt)("p",null,"The log output displays in the console that pops up."))}d.isMDXComponent=!0}}]);