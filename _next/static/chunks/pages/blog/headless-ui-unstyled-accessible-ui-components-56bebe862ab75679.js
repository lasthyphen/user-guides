(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9903],{50159:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/headless-ui-unstyled-accessible-ui-components",function(){return c(9212)}])},9212:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return o},"default":function(){return p}}),c(67294);var d=c(3905);c(41664);var e,f=c(5679),g=c(85225),h=c(37831),i=c(89153),j=c(95035),k={title:"Headless UI: Unstyled, Accessible UI Components",description:"Headless UI is a set of completely unstyled, fully accessible UI components for React, Vue, and Alpine.js that make it easy to build fully accessible custom UI components, without sacrificing the ability to style them from scratch with simple utility classes.",date:"2020-10-06T18:30:00.000Z",authors:[h.Oq],image:i.Z},l=(e="Footer",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),m={meta:k,slug:"headless-ui-unstyled-accessible-ui-components",tableOfContents:[{title:"Why reinvent the wheel?",slug:"why-reinvent-the-wheel",children:[]},{title:"What's next",slug:"what-s-next",children:[]}]},n=g.B,o=!0;function p(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(n,Object.assign({},m,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"One of the biggest pain points when building modern web applications is building custom components like select menus, dropdowns, toggles, modals, tabs, radio groups — components that are pretty similar from project to project, but never quite the ",(0,d.kt)("em",{parentName:"p"},"same"),"."),(0,d.kt)("p",null,"You could use an off-the-shelf package, but they usually come tightly coupled with their own provided styles. It ends up being very hard to get them to match the look and feel of your own project, and almost always involves writing a bunch of CSS overrides, which feels like a big step backwards when working Tailwind CSS."),(0,d.kt)("p",null,"The other option is building your own components from scratch. At first it seems easy, but then you remember you need to add support for keyboard navigation, managing ARIA attributes, focus trapping, and all of a sudden you’re spending 3-4 weeks trying to build a truly bullet-proof dropdown menu."),(0,d.kt)("p",null,"We think there’s a better option, so we’re building it."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},(0,d.kt)("a",Object.assign({parentName:"strong"},{href:"https://headlessui.dev"}),"Headless UI")," is a set of completely unstyled, fully accessible UI components for React and Vue")," ",(0,d.kt)("em",{parentName:"p"},"(and soon Alpine.js)")," that make it easy to build these sorts of custom components without worrying about any of the complex implementation details yourself, and without sacrificing the ability to style them from scratch with simple utility classes."),(0,d.kt)("img",{src:j.Z,alt:"Headless UI Logo"}),(0,d.kt)("p",null,"Here’s what it looks like to build a custom dropdown ",(0,d.kt)("em",{parentName:"p"},"(one of many components the library includes)")," using ",(0,d.kt)("inlineCode",{parentName:"p"},"@headlessui/react"),", with complete keyboard navigation support and ARIA attribute management, styled with simple Tailwind CSS utilities:"),(0,d.kt)("pre",Object.assign({},{className:"language-jsx"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"import")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token imports"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"Menu")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"from")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@headlessui/react'"),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"MyDropdown")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"return")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu"))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"as"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"div",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"relative",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Button"))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"px-4 py-2 rounded bg-blue-600 text-white ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"Options"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Button")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Items"))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"absolute mt-1 right-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Item")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n          "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token parameter"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," active ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token arrow operator"}),"=>")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n            ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token template-string"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"active ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"&&")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'bg-blue-500 text-white'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"})," ..."),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"/account-settings",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n              Account settings\n            "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Item")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Item")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n          "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token parameter"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," active ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token arrow operator"}),"=>")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n            ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token template-string"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"active ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"&&")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'bg-blue-500 text-white'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"})," ..."),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"/documentation",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n              Documentation\n            "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n          ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Item")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Item"))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"disabled"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n          "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-75 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"Invite a friend (coming soon!)"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Item")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu.Items")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n    "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Menu")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,"Here’s what you’re getting for free in that example, without having to write a single line of code related to it yourself:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"The dropdown panel opens on click, spacebar, enter, or when using the arrow keys"),(0,d.kt)("li",{parentName:"ul"},"The dropdown closes when you press escape, or click outside of it"),(0,d.kt)("li",{parentName:"ul"},"You can navigate the items using the up and down arrow keys"),(0,d.kt)("li",{parentName:"ul"},"You can jump the first item using the ",(0,d.kt)("inlineCode",{parentName:"li"},"Home")," key, and the last item using the ",(0,d.kt)("inlineCode",{parentName:"li"},"End")," key"),(0,d.kt)("li",{parentName:"ul"},"Disabled items are automatically skipped when navigating with the keyboard"),(0,d.kt)("li",{parentName:"ul"},"Hovering over an item with your mouse after navigating with the keyboard will switch to mouse position based focusing"),(0,d.kt)("li",{parentName:"ul"},"Items are announced properly to screen readers while navigating them with the keyboard"),(0,d.kt)("li",{parentName:"ul"},"The dropdown button is properly announced to screenreaders as controlling a menu"),(0,d.kt)("li",{parentName:"ul"},"…and probably tons more that I’m forgetting.")),(0,d.kt)("p",null,"All without writing the letters ",(0,d.kt)("inlineCode",{parentName:"p"},"aria")," anywhere in your own code, and without writing a single event listener. And you still have complete control over the design!"),(0,d.kt)("p",null,"There are ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/headlessui/blob/c7b91dc7315b1f49c1a469f70eb1f6eba6a2e31c/packages/%40headlessui-react/src/components/menu/menu.test.tsx"}),"over 3000 lines of tests for this component"),". Pretty nice that you didn’t have to do that yourself, right?"),(0,d.kt)("p",null,"Here’s a fully-styled live demo ",(0,d.kt)("em",{parentName:"p"},"(taken from ",(0,d.kt)("a",Object.assign({parentName:"em"},{href:"https://tailwindui.com"}),"Tailwind UI"),")")," so you can see it in action:"),(0,d.kt)("iframe",{src:"https://codesandbox.io/embed/headlessuireact-menu-example-b6xje?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark",className:"w-full border-0 rounded overflow-hidden",style:{height:"480px"},title:"@headlessui/react Menu Example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("p",null,"Make sure to try it with the keyboard or a screen reader to really appreciate it!"),(0,d.kt)("p",null,"We just tagged v0.2.0, which currently includes the following components:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"https://codesandbox.io/s/headlessuivue-menu-example-70br3?file=/src/App.vue"}),"Menu Button")," (or dropdown)"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"https://codesandbox.io/s/headlessuivue-listbox-example-mi67g?file=/src/App.vue"}),"Listbox")," (or custom select)"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"https://codesandbox.io/s/headlessuivue-switch-example-8ycp6?file=/src/App.vue"}),"Switch")," (or toggle)"),(0,d.kt)("li",{parentName:"ul"},"…with many more on the way.")),(0,d.kt)("p",null,"To learn more and dive in, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev"}),(0,d.kt)("strong",{parentName:"a"},"head over to the Headless UI website"))," and read the documentation."),(0,d.kt)("hr",null),(0,d.kt)("p",null,"If you’ve followed my work online for the last few years, you might remember my fascination with ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://adamwathan.me/renderless-components-in-vuejs/"}),"renderless UI components")," — something I was really started getting into towards the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://fullstackradio.com/79"}),"end of 2017"),". I’ve wanted a library like this to exist for years, but until we started growing the team we just didn’t have the resources to make it happen."),(0,d.kt)("p",null,"Earlier this year ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://blog.tailwindcss.com/from-900-to-1-how-we-hired-robin-malfait"}),"we hired Robin Malfait"),", and he’s been working on Headless UI full-time ever since."),(0,d.kt)("p",null,"The biggest motivation for this project is that we’d really like to add production-ready JS examples to ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com"}),"Tailwind UI"),", which is currently an HTML-only, bring-your-own-JavaScript sort of project. This is great for lots of our customers who want full control over how everything works, but for many others it’s a point of friction."),(0,d.kt)("p",null,"We didn’t want to add 200 lines of gnarly JS to every component example, so we started working on Headless UI as a way to ",(0,d.kt)("em",{parentName:"p"},"extract")," all of that noise, without giving up any flexibility in the actual UI design."),(0,d.kt)(f.X,{level:2,id:"why-reinvent-the-wheel",nextElement:{type:"paragraph"}},"Why reinvent the wheel?"),(0,d.kt)("p",null,"We’re not the first people to try and tackle this problem. ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/downshift-js/downshift"}),"Downshift")," was the first library I saw that got me excited about this idea back in 2017, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://reach.tech/"}),"Reach UI")," and ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://reakit.io/"}),"Reakit")," started development in 2018, and ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://react-spectrum.adobe.com/react-aria/getting-started.html"}),"React Aria")," was released most recently, just earlier this year."),(0,d.kt)("p",null,"We decided to try our own take on the problem for a few reasons:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"Existing solutions are focused almost entirely on React, and we’d like to bring these ideas to other ecosystems like Vue, Alpine, and hopefully more in the future."),(0,d.kt)("li",{parentName:"ul"},"These libraries are going to be foundational for adding JS support to Tailwind UI, and since that’s what keeps the business running it felt important to have complete decision-making power over how the libraries worked and what they supported."),(0,d.kt)("li",{parentName:"ul"},"We have our own ideas on what the APIs should look like for these components, and want to be able to explore those ideas freely."),(0,d.kt)("li",{parentName:"ul"},"We want to make sure it is always super easy to style these components with Tailwind, rather than having to write custom CSS.")),(0,d.kt)("p",null,"We think what we’ve come up with so far hits a great balance between flexibility and developer experience, and we’re grateful there are other people working on similar problems that we can learn from and share our ideas with."),(0,d.kt)(f.X,{level:2,id:"what-s-next",nextElement:{type:"paragraph"}},"What's next"),(0,d.kt)("p",null,"We’ve got quite a few more components to develop for Headless UI, including:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"Modal"),(0,d.kt)("li",{parentName:"ul"},"Radio group"),(0,d.kt)("li",{parentName:"ul"},"Tabs"),(0,d.kt)("li",{parentName:"ul"},"Accordion"),(0,d.kt)("li",{parentName:"ul"},"Combobox"),(0,d.kt)("li",{parentName:"ul"},"Datepicker")),(0,d.kt)("p",null,"…and likely many more. We’re also about to start on Alpine.js support, and we’re hoping to be able to tag a v1.0 for React, Vue, and Alpine near the end of the year."),(0,d.kt)("p",null,"After that we’ll start exploring other frameworks, with the hope that we can eventually offer the same tools for ecosystems like Svelte, Angular, and Ember, either first-class or with community partners."),(0,d.kt)("p",null,"If you’d like to keep up with what we’re doing, be sure to ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/headlessui"}),"follow the project on GitHub"),"."),(0,d.kt)(l,{mdxType:"Footer"},"Want to talk about this post? ",(0,d.kt)("a",{href:"https://github.com/tailwindcss/tailwindcss/discussions/2508"},"Discuss this on GitHub →")))}p.isMDXComponent=!0,p.layoutProps=m}},function(a){a.O(0,[3430,6401,4756,6259,6852,2474,3942,5225,9774,2888,179],function(){return a(a.s=50159)}),_N_E=a.O()}])