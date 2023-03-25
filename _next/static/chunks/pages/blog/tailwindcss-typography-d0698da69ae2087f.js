(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2365],{63773:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tailwindcss-typography",function(){return c(17494)}])},17494:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return m},"default":function(){return n}}),c(67294);var d=c(3905);c(41664),c(5679);var e,f=c(85225),g=c(37831),h=c(31243),i={title:"Introducing Tailwind CSS Typography",description:"Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. That's why today we're excited to release @tailwindcss/typography — a plugin that lets you easily style vanilla HTML content with beautiful typographic defaults.",date:"2020-07-13T16:35:02.037Z",authors:[g.Oq],image:h.Z},j=(e="Footer",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),k={meta:i,slug:"tailwindcss-typography",tableOfContents:[]},l=f.B,m=!0;function n(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(l,Object.assign({},k,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",{className:"lead"},"Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS."),(0,d.kt)("p",null,"By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ",(0,d.kt)("em",{parentName:"p"},"really are")," just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."),(0,d.kt)("p",null,"We get lots of complaints about it actually, with people regularly asking us things like:"),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Why is Tailwind removing the default styles on my ",(0,d.kt)("inlineCode",{parentName:"p"},"h1")," elements? How do I disable this? What do you mean I lose all the other base styles too?")),(0,d.kt)("p",null,"We hear you, but we’re not convinced that simply disabling our base styles is what you really want. You don’t want to have to remove annoying margins every time you use a ",(0,d.kt)("inlineCode",{parentName:"p"},"p")," element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look ",(0,d.kt)("em",{parentName:"p"},"awesome"),", not awful."),(0,d.kt)("p",null,"That’s why today we’re excited to release ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindcss/typography"}),(0,d.kt)("inlineCode",{parentName:"a"},"@tailwindcss/typography"))," — a plugin that gives you what you ",(0,d.kt)("em",{parentName:"p"},"actually")," want, without any of the downside of doing something stupid like disabling our base styles."),(0,d.kt)("p",null,"It adds a new set of ",(0,d.kt)("inlineCode",{parentName:"p"},"prose")," classes that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"article")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"prose lg:prose-xl",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"h1"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Garlic bread with cheese: What the science tells us",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"h1"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    For years parents have espoused the health benefits of eating garlic bread with cheese to their\n    children, with the food earning such an iconic status in our culture that kids will often dress\n    up as warm, cheesy loaf for Halloween.\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n    springing up around the country.\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"article"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"So how does it actually look? Well you’re looking at it right now — we use it to style the content on this very blog!"),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindcss/typography"}),(0,d.kt)("strong",{parentName:"a"},"Check out the documentation"))," to learn more and try it out today."),(0,d.kt)(j,{mdxType:"Footer"},"Want to talk about this post? ",(0,d.kt)("a",{href:"https://github.com/tailwindcss/tailwindcss/discussions/2021"},"Discuss this on GitHub →")))}n.isMDXComponent=!0,n.layoutProps=k}},function(a){a.O(0,[3430,6401,4756,6259,6852,2474,3942,5225,9774,2888,179],function(){return a(a.s=63773)}),_N_E=a.O()}])