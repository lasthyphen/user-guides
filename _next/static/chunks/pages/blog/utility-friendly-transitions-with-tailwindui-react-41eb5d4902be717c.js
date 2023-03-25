(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3945],{37621:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/utility-friendly-transitions-with-tailwindui-react",function(){return c(44824)}])},44824:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return m},"default":function(){return n}}),c(67294);var d=c(3905);c(41664),c(5679);var e,f=c(85225),g=c(37831),h=c(79855),i={title:"Utility-Friendly Transitions with @tailwindui/react",description:"Announcing the first release of @tailwindui/react, which introduces a <Transition> component for utility-first enter/leave transitions.",date:"2020-08-27T18:30:00.000Z",authors:[g.ff],image:h.Z},j=(e="Footer",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),k={meta:i,slug:"utility-friendly-transitions-with-tailwindui-react",tableOfContents:[]},l=f.B,m=!0;function n(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(l,Object.assign({},k,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Back in February we released ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com"}),"Tailwind UI"),", a directory of HTML component examples designed for you to copy and paste into your Tailwind projects as a starting point for your own designs."),(0,d.kt)("p",null,"We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is unfortunately not always very easy."),(0,d.kt)("p",null,"One example of this is enter/leave transitions, like when you toggle a dropdown menu and see it fade in and out."),(0,d.kt)("p",null,"Vue.js has a really neat ",(0,d.kt)("inlineCode",{parentName:"p"},"<transition>")," component for enter/leave transitions with a very utility-friendly API:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"transition"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"enter-active-class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"transition-opacity duration-75",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"enter-from-class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"enter-to-class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-100",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"leave-active-class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"transition-opacity duration-150",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"leave-from-class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-100",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"leave-to-class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"v-show"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"isShowing",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- Will fade in and out -->"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"transition"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"But replicating this in React turns out to be much more difficult, because until now there hasn’t been a library designed to support utility-driven transition styling."),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"So earlier this week, we released the very first version of ",(0,d.kt)("a",Object.assign({parentName:"strong"},{href:"https://github.com/tailwindlabs/tailwindui-react"}),"@tailwindui/react"),", a library that provides low-level primitives for turning utility-first HTML into fully interactive UIs.")),(0,d.kt)("p",null,"We’ll be adding many more components in the coming months ",(0,d.kt)("em",{parentName:"p"},"(like dropdowns, toggles, modals, and more, and for Vue too!)")," but thought we’d start with a ",(0,d.kt)("inlineCode",{parentName:"p"},"<Transition>")," component to at least get the current Tailwind UI experience for React users up to par with what’s possible in Vue and Alpine.js."),(0,d.kt)("p",null,"Here’s what it looks like to use:"),(0,d.kt)("pre",Object.assign({},{className:"language-jsx"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"import")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token imports"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"Transition")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"from")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@tailwindui/react'"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"import")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token imports"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," useState ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"from")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'react'"),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"MyComponent")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"isOpen",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," setIsOpen",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"useState"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"false"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"return")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"onClick"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token arrow operator"}),"=>")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"setIsOpen"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"!"),"isOpen",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"Toggle"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Transition")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"show"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"isOpen",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"enter"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"transition-opacity duration-75",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"enterFrom"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"enterTo"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-100",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"leave"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"transition-opacity duration-150",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"leaveFrom"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-100",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"leaveTo"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"opacity-0",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n        "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"/* Will fade in and out */"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Transition")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n    "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindui-react"}),"Read the documentation")," to learn more about advanced functionality, like:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"Rendering without an extra DOM element"),(0,d.kt)("li",{parentName:"ul"},"Co-ordinating related transitions"),(0,d.kt)("li",{parentName:"ul"},"Transitioning on initial mount.")),(0,d.kt)("p",null,"Check it out in action in this CodeSandbox demo:"),(0,d.kt)("iframe",{src:"https://codesandbox.io/embed/dreamy-villani-1lz49?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&view=preview",style:{height:500},className:"w-full rounded-md overflow-hidden",title:"dreamy-villani-1lz49",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,d.kt)("p",null,"Try it out on your projects, and if you run into any problems, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindui-react"}),"report an issue on GitHub"),"."),(0,d.kt)(j,{mdxType:"Footer"},"Want to talk about this post? ",(0,d.kt)("a",{href:"https://github.com/tailwindcss/tailwindcss/discussions/2262"},"Discuss this on GitHub →")))}n.isMDXComponent=!0,n.layoutProps=k}},function(a){a.O(0,[3430,6401,4756,6259,6852,2474,3942,5225,9774,2888,179],function(){return a(a.s=37621)}),_N_E=a.O()}])