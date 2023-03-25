(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5404],{57874:function(a,b){"use strict";b.Z="/_next/static/media/social-square.44d3de1f33eb31bb78c5d9aabe6c25e1.jpg"},8310:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/public-api-server",function(){return c(28947)}])},31911:function(a,b,c){"use strict";c.r(b),b.default={title:"Virtual Machine"}},596:function(a,b,c){"use strict";c.r(b),b.default={title:"Admin API"}},21498:function(a,b,c){"use strict";c.r(b),b.default={}},39617:function(a,b,c){"use strict";c.r(b),b.default={}},24894:function(a,b,c){"use strict";c.r(b),b.default={}},54010:function(a,b,c){"use strict";c.r(b),b.default={title:"Configuration"}},18024:function(a,b,c){"use strict";c.r(b),b.default={title:"Create Wallet"}},2801:function(a,b,c){"use strict";c.r(b),b.default={title:"Decentralised Applications"}},51704:function(a,b,c){"use strict";c.r(b),b.default={title:"Decypher - Getting Started"}},7426:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate using The Vault"}},50462:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate with Dijets Vault"}},25119:function(a,b,c){"use strict";c.r(b),b.default={title:"How to Delegate & Earn DJTX"}},17170:function(a,b,c){"use strict";c.r(b),b.default={title:"Accounts"}},43962:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets Consensus"}},17960:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets Council"}},65819:function(a,b,c){"use strict";c.r(b),b.default={title:"Dijets"}},3071:function(a,b,c){"use strict";c.r(b),b.default={title:"Mint a Fixed Cap Digital Asset"}},37728:function(a,b,c){"use strict";c.r(b),b.default={title:"Full Node"}},70152:function(a,b,c){"use strict";c.r(b),b.default={title:"Functions & Directives"}},53291:function(a,b,c){"use strict";c.r(b),b.default={}},86041:function(a,b,c){"use strict";c.r(b),b.default={}},55480:function(a,b,c){"use strict";c.r(b),b.default={}},4707:function(a,b,c){"use strict";c.r(b),b.default={}},78339:function(a,b,c){"use strict";c.r(b),b.default={title:"How to install Decypher"}},64862:function(a,b,c){"use strict";c.r(b),b.default={title:"Intra-Chain Transfer"}},35847:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Keystore"}},33275:function(a,b,c){"use strict";c.r(b),b.default={title:"How to open a Dijets Account"}},13756:function(a,b,c){"use strict";c.r(b),b.default={title:"How to open a Dijets Account"}},84485:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Mnemonic"}},45900:function(a,b,c){"use strict";c.r(b),b.default={title:"Order"}},63590:function(a,b,c){"use strict";c.r(b),b.default={title:"Encode Wallet with a Password"}},72812:function(a,b,c){"use strict";c.r(b),b.default={title:"Access Wallet with Private Key"}},28947:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return j}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(53339),g=c(74296),h={Layout:f.L,meta:{title:"Public API Server",description:"There is a public API server that allows developers to access the Avalanche platform without having to run a node themselves."},slug:"public-api-server",tableOfContents:[{title:"Using the Public API nodes",slug:"using-the-public-api-nodes",children:[{title:"HTTP",slug:"http",children:[]},{title:"WebSocket",slug:"web-socket",children:[]}]},{title:"Supported APIs",slug:"supported-ap-is",children:[]},{title:"Sticky sessions",slug:"sticky-sessions",children:[]},{title:"Availability",slug:"availability",children:[]},{title:"Support",slug:"support",children:[]}]},i=g.X_;function j(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(i,Object.assign({},h,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("h1",null,"Public API Server"),(0,d.kt)("p",null,"There is a public API server that allows developers to access the Avalanche network without having to run a node themselves. The public API server is actually several ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/ava-labs/avalanchego"}),"AvalancheGo")," nodes behind a load balancer to ensure high availability and high request throughput."),(0,d.kt)(e.X,{level:2,id:"using-the-public-api-nodes",nextElement:{type:"paragraph"}},"Using the Public API nodes"),(0,d.kt)("p",null,"The public API server is at ",(0,d.kt)("inlineCode",{parentName:"p"},"api.avax.network")," for Avalanche Mainnet and ",(0,d.kt)("inlineCode",{parentName:"p"},"api.avax-test.network")," for Avalanche Fuji Testnet. To access a particular API, just append the relevant API endpoint, as documented ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"./apis/issuing-api-calls.md"}),"here"),". Namely, use the following end points for each chain respectively:"),(0,d.kt)(e.X,{level:3,id:"http",nextElement:{type:"list",ordered:!1,start:null,spread:!1}},"HTTP"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"For C-Chain API, the URL is ",(0,d.kt)("inlineCode",{parentName:"li"},"https://api.avax.network/ext/bc/C/rpc"),"."),(0,d.kt)("li",{parentName:"ul"},"For X-Chain API, the URL is ",(0,d.kt)("inlineCode",{parentName:"li"},"https://api.avax.network/ext/bc/X"),"."),(0,d.kt)("li",{parentName:"ul"},"For P-Chain API, the URL is ",(0,d.kt)("inlineCode",{parentName:"li"},"https://api.avax.network/ext/bc/P"),".")),(0,d.kt)("p",null,"Note: on Fuji Testnet, use ",(0,d.kt)("inlineCode",{parentName:"p"},"https://api.avax-test.network/")," instead of ",(0,d.kt)("inlineCode",{parentName:"p"},"https://api.avax.network/"),"."),(0,d.kt)(e.X,{level:3,id:"web-socket",nextElement:{type:"list",ordered:!1,start:null,spread:!1}},"WebSocket"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"For C-Chain API, the URL is ",(0,d.kt)("inlineCode",{parentName:"li"},"wss://api.avax.network/ext/bc/C/ws"),".")),(0,d.kt)("p",null,"Note: on Fuji Testnet, the URL is ",(0,d.kt)("inlineCode",{parentName:"p"},"wss://api.avax-test.network/ext/bc/C/ws"),"."),(0,d.kt)(e.X,{level:2,id:"supported-ap-is",nextElement:{type:"paragraph"}},"Supported APIs"),(0,d.kt)("p",null,"The public API server supports all the API endpoints that make sense to be available on a public-facing service, including APIs for the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"./apis/x-chain.md"}),"X-Chain"),", ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"./apis/p-chain.md"}),"P-Chain")," and ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"./apis/c-chain.md"}),"C-Chain"),". For a full list of available APIs see ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"./apis/README.md"}),"here"),"."),(0,d.kt)("p",null,":::info\nThe public API only supports C-Chain websocket API calls for API methods that don’t exist on the C-Chain’s HTTP API."),(0,d.kt)("p",null,"For batched C-Chain requests on the public api node, the maximum number of items is 40. We are working on to support a larger batch size.\n:::"),(0,d.kt)(e.X,{level:2,id:"sticky-sessions",nextElement:{type:"paragraph"}},"Sticky sessions"),(0,d.kt)("p",null,"Requests to the public API server API are distributed by a load balancer to an individual node. As a result, consecutive requests may go to different nodes. That can cause issues for some use cases. For example, one node may think a given transaction is accepted, while for another node the transaction is still processing. To work around this, you can use ‘sticky sessions’, as documented ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"}),"here"),". This allows consecutive API calls to be routed to the same node."),(0,d.kt)("p",null,"If you’re using ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"../avalanchejs/README.md"}),"AvalancheJS")," to access the public API, simply set the following in your code:"),(0,d.kt)("pre",Object.assign({},{className:"language-javascript"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"avalanche",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"setRequestConfig"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"\"withCredentials\""),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"))),(0,d.kt)(e.X,{level:2,id:"availability",nextElement:{type:"paragraph"}},"Availability"),(0,d.kt)("p",null,"Usage of public API nodes is free and available to everyone without any authentication or authorization. Rate limiting is present, but many of the API calls are cached, and the rate limits are quite high. If your application is running up against the limits, please ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://chat.avalabs.org"}),"contact us"),"."),(0,d.kt)(e.X,{level:2,id:"support",nextElement:{type:"paragraph"}},"Support"),(0,d.kt)("p",null,"If you have questions, problems or suggestions, come ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://chat.avalabs.org/"}),"talk to us"),"."))}j.isMDXComponent=!0,j.layoutProps=h},69631:function(a,b,c){"use strict";c.r(b),b.default={title:"Public API Server"}},71411:function(a,b,c){"use strict";c.r(b),b.default={title:"Query the Dijets Blockchain"}},91440:function(a,b,c){"use strict";c.r(b),b.default={title:"Read-Only Wallet"}},33472:function(a,b,c){"use strict";c.r(b),b.default={title:"Configure and Run Cacid"}},66887:function(a,b,c){"use strict";c.r(b),b.default={title:"Run a private network with Dijets"}},40497:function(a,b,c){"use strict";c.r(b),b.default={title:"Secret Phrase"}},69675:function(a,b,c){"use strict";c.r(b),b.default={title:"Send DJTX with Dijets Wallet"}},63249:function(a,b,c){"use strict";c.r(b),b.default={title:"Staking"}},96142:function(a,b,c){"use strict";c.r(b),b.default={title:"Stroke Width"}},97140:function(a,b,c){"use strict";c.r(b),b.default={title:"Stroke"}},49087:function(a,b,c){"use strict";c.r(b),b.default={title:"Tailwind CLI"}},86981:function(a,b,c){"use strict";c.r(b),b.default={title:"Ternary Chain Ledgers"}},82486:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Decoration Thickness"}},12364:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Decoration"}},94358:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Indent"}},58058:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Overflow"}},69938:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Transform"}},23692:function(a,b,c){"use strict";c.r(b),b.default={title:"Text Underline Offset"}},98026:function(a,b,c){"use strict";c.r(b),b.default={title:"Theme Configuration",shortTitle:"Theme"}},64090:function(a,b,c){"use strict";c.r(b),b.default={title:"Top / Right / Bottom / Left"}},23844:function(a,b,c){"use strict";c.r(b),b.default={title:"Touch Action"}},32485:function(a,b,c){"use strict";c.r(b),b.default={title:"Transaction Fees"}},80240:function(a,b,c){"use strict";c.r(b),b.default={title:"Transactions and states"}},25643:function(a,b,c){"use strict";c.r(b),b.default={title:"Send DJTX"}},44697:function(a,b,c){"use strict";c.r(b),b.default={title:"Validator Nodes"}},18678:function(a,b,c){"use strict";c.r(b),b.default={title:"Vertical Alignment",shortTitle:"Vertical Align"}},7120:function(a,b,c){"use strict";c.r(b),b.default={title:"Visibility"}},53339:function(a,b,c){"use strict";c.d(b,{L:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(57874),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Dijets User Guide",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u},54713:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{u:function(){return i}});var f,g,h=(f="docs",(g=c(66708)).keys().map(function(a){return{fileName:a,module:g(a)}}).reduce(function(a,b){var c=b.fileName.substr(2).replace(/\.mdx$/,"");return e({},a,d({},c,e({},b.module.default,{href:"/".concat(f,"/").concat(c)})))},{})),i={"Getting Started":[{title:"Installation",href:"/docs/installation",match:/^\/docs\/installation/},h.dijets,h["ternary-chains"],h.VMs,h["dijets-consensus"],h.staking,],"Decypher Extension":[h["installation-chrome"],h["decypher-getting-started"],h["secret-phrase"],h.dapps,],"Wallet Guides":[h.mnemonic,h.privatekey,h.keystore,h.password,h["read-only"],h.transfer,h["intra-chain-transfer"],h["delegator-video"],]}},66708:function(a,b,c){var d={"./VMs.mdx":31911,"./admin.mdx":596,"./api_admin.mdx":21498,"./api_auth.mdx":39617,"./api_avm_basetx.mdx":24894,"./configuration.mdx":54010,"./create-wallet.mdx":18024,"./dapps.mdx":2801,"./decypher-getting-started.mdx":51704,"./delegation-english-temp.mdx":7426,"./delegation-urdu-temp.mdx":50462,"./delegator-video.mdx":25119,"./dijets-accounts.mdx":17170,"./dijets-consensus.mdx":43962,"./dijets-council.mdx":17960,"./dijets.mdx":65819,"./first-transaction.mdx":3071,"./full-public-nodes.mdx":37728,"./functions-and-directives.mdx":70152,"./generate-a-txid-using-dijetsjs.mdx":53291,"./health.mdx":86041,"./index-api.mdx":55480,"./info.mdx":4707,"./installation-chrome.mdx":78339,"./intra-chain-transfer.mdx":64862,"./keystore.mdx":35847,"./makeaccount-english-temp.mdx":33275,"./makeaccount-urdu-temp.mdx":13756,"./mnemonic.mdx":84485,"./order.mdx":45900,"./password.mdx":63590,"./privatekey.mdx":72812,"./public-api-server.mdx":69631,"./query-the-blockchain.mdx":71411,"./read-only.mdx":91440,"./run-fullnode-cacid.mdx":33472,"./run-local-network.mdx":66887,"./secret-phrase.mdx":40497,"./send.mdx":69675,"./staking.mdx":63249,"./stroke-width.mdx":96142,"./stroke.mdx":97140,"./tailwind-cli.mdx":49087,"./ternary-chains.mdx":86981,"./text-decoration-thickness.mdx":82486,"./text-decoration.mdx":12364,"./text-indent.mdx":94358,"./text-overflow.mdx":58058,"./text-transform.mdx":69938,"./text-underline-offset.mdx":23692,"./theme.mdx":98026,"./top-right-bottom-left.mdx":64090,"./touch-action.mdx":23844,"./transaction-fees.mdx":32485,"./transactions-and-states.mdx":80240,"./transfer.mdx":25643,"./validators.mdx":44697,"./vertical-align.mdx":18678,"./visibility.mdx":7120,"src/pages/docs/VMs.mdx":31911,"src/pages/docs/admin.mdx":596,"src/pages/docs/api_admin.mdx":21498,"src/pages/docs/api_auth.mdx":39617,"src/pages/docs/api_avm_basetx.mdx":24894,"src/pages/docs/configuration.mdx":54010,"src/pages/docs/create-wallet.mdx":18024,"src/pages/docs/dapps.mdx":2801,"src/pages/docs/decypher-getting-started.mdx":51704,"src/pages/docs/delegation-english-temp.mdx":7426,"src/pages/docs/delegation-urdu-temp.mdx":50462,"src/pages/docs/delegator-video.mdx":25119,"src/pages/docs/dijets-accounts.mdx":17170,"src/pages/docs/dijets-consensus.mdx":43962,"src/pages/docs/dijets-council.mdx":17960,"src/pages/docs/dijets.mdx":65819,"src/pages/docs/first-transaction.mdx":3071,"src/pages/docs/full-public-nodes.mdx":37728,"src/pages/docs/functions-and-directives.mdx":70152,"src/pages/docs/generate-a-txid-using-dijetsjs.mdx":53291,"src/pages/docs/health.mdx":86041,"src/pages/docs/index-api.mdx":55480,"src/pages/docs/info.mdx":4707,"src/pages/docs/installation-chrome.mdx":78339,"src/pages/docs/intra-chain-transfer.mdx":64862,"src/pages/docs/keystore.mdx":35847,"src/pages/docs/makeaccount-english-temp.mdx":33275,"src/pages/docs/makeaccount-urdu-temp.mdx":13756,"src/pages/docs/mnemonic.mdx":84485,"src/pages/docs/order.mdx":45900,"src/pages/docs/password.mdx":63590,"src/pages/docs/privatekey.mdx":72812,"src/pages/docs/public-api-server.mdx":69631,"src/pages/docs/query-the-blockchain.mdx":71411,"src/pages/docs/read-only.mdx":91440,"src/pages/docs/run-fullnode-cacid.mdx":33472,"src/pages/docs/run-local-network.mdx":66887,"src/pages/docs/secret-phrase.mdx":40497,"src/pages/docs/send.mdx":69675,"src/pages/docs/staking.mdx":63249,"src/pages/docs/stroke-width.mdx":96142,"src/pages/docs/stroke.mdx":97140,"src/pages/docs/tailwind-cli.mdx":49087,"src/pages/docs/ternary-chains.mdx":86981,"src/pages/docs/text-decoration-thickness.mdx":82486,"src/pages/docs/text-decoration.mdx":12364,"src/pages/docs/text-indent.mdx":94358,"src/pages/docs/text-overflow.mdx":58058,"src/pages/docs/text-transform.mdx":69938,"src/pages/docs/text-underline-offset.mdx":23692,"src/pages/docs/theme.mdx":98026,"src/pages/docs/top-right-bottom-left.mdx":64090,"src/pages/docs/touch-action.mdx":23844,"src/pages/docs/transaction-fees.mdx":32485,"src/pages/docs/transactions-and-states.mdx":80240,"src/pages/docs/transfer.mdx":25643,"src/pages/docs/validators.mdx":44697,"src/pages/docs/vertical-align.mdx":18678,"src/pages/docs/visibility.mdx":7120};function e(a){return c(f(a))}function f(a){if(!c.o(d,a)){var b=new Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b}return d[a]}e.keys=function(){return Object.keys(d)},e.resolve=f,a.exports=e,e.id=66708}},function(a){a.O(0,[6401,6852,2474,9774,2888,179],function(){return a(a.s=8310)}),_N_E=a.O()}])