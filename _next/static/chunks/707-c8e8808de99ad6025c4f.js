(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{39087:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(85893),o=n(67294),c=n(10009),i=n(53281),s=n(80644),a=n(80621),l=n(42817),u=n(12964),f={common:{volume:.25}},d={object:{src:["https://playground.arwes.dev/assets/sounds/object.mp3"]},type:{src:["https://playground.arwes.dev/assets/sounds/type.mp3"],loop:!0}},p={object:{player:"object"},type:{player:"type"}},m={duration:{enter:200,exit:200}},y=function(e){var t=e.className,n=e.children,y=(e.caption,e.title,(0,o.useContext)(u.y1)),b=(0,o.useRef)(null),h=(0,a.Z)(b,{root:null,rootMargin:"0px",threshold:1});(0,o.useEffect)((function(){new IntersectionObserver((function(e){console.log(e)}),{root:null,rootMargin:"0px",threshold:1}).observe((0,l.z)(b.current))}),[]);var v=null===h||void 0===h?void 0:h.isIntersecting;return console.log(v,null===h||void 0===h?void 0:h.isIntersecting,null===h||void 0===h?void 0:h.boundingClientRect.top),(0,r.jsxs)("div",{className:"Arwes "+t,style:{backgroundColor:"#021114",color:"#7efcf6",fontFamily:'"Titillium Web", sans-serif'},children:[(0,r.jsx)(s.ArwesThemeProvider,{children:y?n:(0,r.jsx)(i.BleepsProvider,{audioSettings:f,playersSettings:d,bleepsSettings:p,children:(0,r.jsx)(c.AnimatorGeneralProvider,{animator:m,children:(0,r.jsx)(c.Animator,{animator:{activate:v,manager:"stagger"},children:n})})})}),(0,r.jsx)("div",{ref:b})]})}},48877:function(e,t,n){"use strict";n.d(t,{CC:function(){return u},rf:function(){return f}});var r=n(26265),o=n(85893),c=n(38347),i=n(67294);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return function(t){var r=t.className,s=(0,c.Z)(t,["className"]),l=(0,i.useState)(void 0),u=l[0],f=l[1];return(0,i.useEffect)((function(){n.e(609).then(n.bind(n,5609)).then((function(t){return f((function(){return t[e]}))}))}),[]),(0,o.jsx)("div",{className:r,children:u&&(0,o.jsx)(u,a({},s))})}}var u=l("WiredButton"),f=l("WiredIconButton")},45371:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(85893),o=n(67294),c=n(42817);function i(e){var t=e.className,n=e.code,i=(0,o.useRef)(null);return(0,o.useEffect)((function(){Array.from((0,c.z)(i.current).querySelectorAll("script")).forEach((function(e){var t=document.createElement("script");Array.from(e.attributes).forEach((function(e){return t.setAttribute(e.name,e.value)})),t.appendChild(document.createTextNode(e.innerHTML)),(0,c.z)(e.parentNode).replaceChild(t,e)}))}),[n]),(0,r.jsx)("div",{ref:i,className:t,dangerouslySetInnerHTML:{__html:n}})}},25140:function(e,t,n){"use strict";n.d(t,{Li:function(){return b},DO:function(){return h}});var r=n(809),o=n.n(r),c=n(92447),i=n(38347),s=n(85893),a=n(26265),l=n(67294),u=n(57222),f=n.n(u),d=n(54490);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t,n=e.scroller,r=void 0!==n&&n,o=e.children,c=e.className,i=(0,l.useRef)(null),u=(0,l.useState)(0),p=u[0],m=u[1];(0,l.useEffect)((function(){i.current.scrollTo({left:p,behavior:"smooth"})}),[p]);function y(e){m(p+210*e)}return(0,s.jsxs)("div",{className:"".concat(f().Gallery," ").concat(c),children:[r&&(0,s.jsx)("button",{className:f().ScrollBtn,onClick:function(){return y(-1)},children:"\u2039"}),(0,s.jsx)("div",{className:(0,d.classNames)((t={},(0,a.Z)(t,f().Items,!0),(0,a.Z)(t,f().Items__Scrolling,r),t)),ref:i,children:o}),r&&(0,s.jsx)("button",{className:f().ScrollBtn,onClick:function(){return y(1)},children:"\u203a"})]})}function b(e){var t=e.category,n=(e.count,(0,i.Z)(e,["category","count"])),r=(0,l.useState)(void 0),a=r[0],u=r[1];return(0,l.useEffect)((function(){(0,c.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://graphql.myshopify.com/api/2021-04/graphql.json",{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9","content-type":"application/json","sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',"sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","x-shopify-storefront-access-token":"ecdc7f91ed0970e733268535c828fbbe"},referrer:"https://shopify.dev/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({query:'\nquery Products($first: Int!, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {\n  products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {\n    edges {\n      node {\n        ...ProductFragment\n      }\n    }\n  }\n}\n\nfragment ProductFragment on Product {\n  availableForSale\n  collections(first: 5) {\n    edges {\n      node {\n        handle\n      }\n    }\n  }\n  createdAt\n  description\n  descriptionHtml\n  handle\n  id\n  images(first: 5) {\n    edges {\n      node {\n        id\n        transformedSrc\n        width\n        height\n      }\n    }\n  }\n  metafield(key: "app_key", namespace: "affiliates") {\n    description\n  }\n  metafields(first: 5) {\n    edges {\n      node {\n        key\n        description\n        value\n        valueType\n      }\n    }\n  }\n  onlineStoreUrl\n  options {\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n    }\n    minVariantPrice {\n      amount\n    }\n  }\n  productType\n  publishedAt\n  seo {\n    title\n    description\n  }\n  title\n  updatedAt\n  variants(first: 5) {\n    edges {\n      node {\n        availableForSale\n        currentlyNotInStock\n        id\n        image {\n          id\n          transformedSrc\n          width\n          height\n        }\n        priceV2 {\n          amount\n        }\n        requiresShipping\n        sku\n        title\n        unitPrice {\n          amount\n        }\n      }\n    }\n  }\n}\n    ',variables:{first:10}}),method:"POST",mode:"cors",credentials:"omit"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,s.jsx)(y,m(m({},n),{},{children:null===a||void 0===a?void 0:a.data.products.edges.map((function(e){var n=e.node,r=n.images.edges[0].node;return t&&t!==n.productType?null:(0,s.jsxs)("div",{className:f().Item,children:[(0,s.jsx)("img",{alt:n.title,src:r.transformedSrc,width:r.width,height:r.height,loading:"lazy",className:f().Thumb}),(0,s.jsx)("div",{className:f().Title,children:n.title}),(0,s.jsxs)("div",{className:f().Price,children:["$",n.priceRange.maxVariantPrice.amount]})]},n.id)}))}))}function h(e){var t=e.count,n=(0,i.Z)(e,["count"]),r=(0,l.useState)(void 0),a=r[0],u=r[1];return(0,l.useEffect)((function(){(0,c.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.contentful.com/spaces/fbr4i5aajb0w/entries?content_type=7leLzv8hW06amGmke86y8G",{headers:{authorization:"Bearer 8c6d9bb62a89a05e4f88af2784a0a3f8bcacc7b401084d50f577dfc5f6df0c61","x-contentful-user-agent":"contentful.js/3.5.0"},method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,s.jsx)(y,m(m({},n),{},{children:null===a||void 0===a?void 0:a.items[1].fields.images.slice(0,t).map((function(e){var t=a.includes.Entry.find((function(t){return t.sys.id===e.sys.id})),n=t.fields.photo,r=a.includes.Asset.find((function(e){return e.sys.id===n.sys.id}));return(0,s.jsxs)("div",{className:f().Item,style:{height:"180px"},children:[(0,s.jsx)("img",{src:r.fields.file.url+"?w=300",loading:"lazy",className:f().Thumb}),(0,s.jsx)("div",{className:f().Caption,children:t.fields.title})]},e.sys.id)}))}))}},4030:function(e,t,n){"use strict";n.d(t,{R:function(){return m}});var r=n(85893),o=n(26265),c=n(38347),i=n(67294),s=n(64436),a=n(43700),l=n(35686),u=n(46479),f=n(12964);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.options,n=e.defaultValue,o=e.label,d=e.className,m=(0,c.Z)(e,["options","defaultValue","label","className"]),y=(0,i.useContext)(f.y1);return(0,r.jsxs)(s.Z,{className:d,children:[(0,r.jsx)(a.Z,{id:"demo-simple-select-placeholder-label-label",children:o}),(0,r.jsx)(l.Z,p(p({labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",defaultValue:y?void 0:n,value:y?n:void 0},m),{},{children:t.map((function(e){return(0,r.jsx)(u.Z,{value:e.value,children:e.label})}))}))]})}},88935:function(e,t,n){"use strict";n.d(t,{m:function(){return u}});var r=n(26265),o=n(85893),c=n(67294),i=n(77776),s=n(12964);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=(0,c.useContext)(s.y1);return(0,o.jsx)(i.VS,l(l({},e),t?{disabled:!0}:{}))}},21988:function(e,t,n){"use strict";n.d(t,{U:function(){return u}});var r=n(26265),o=n(85893),c=n(38347),i=n(35853);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a={bounce:i.sm,fade:i.pT,flip:i.BW,hinge:i.yl,jackinthebox:i.z0,roll:i.mb,rotate:i.EA,slide:i.Mi,zoom:i.LG},l=Object.keys(a);function u(e){var t=e.effect,n=void 0===t?"fade":t,i=(e.className,(0,c.Z)(e,["effect","className"])),u=a[n];if(!u)throw new Error("Please specify a valid effect: ".concat(l.join(", ")));return(0,o.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i))}},59662:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(85893),o=n(26265),c=n(4416);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){var t;return(0,r.jsx)(c.Z,s(s({},e),{},{style:s({transformStyle:"preserve-3d"},null!==(t=e.style)&&void 0!==t?t:{})}))}},42817:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(null===e||void 0===e)throw new Error("Value must not be undefined or null".concat(t?"- ".concat(t):""));return e}n.d(t,{z:function(){return r}})},57222:function(e){e.exports={Gallery:"ItemGallery_Gallery__2V4JI",Items:"ItemGallery_Items__-nefS",Items__Scrolling:"ItemGallery_Items__Scrolling__Yyyr9",Title:"ItemGallery_Title__2tebH",Price:"ItemGallery_Price__2Ihpt",Thumb:"ItemGallery_Thumb__U8K5a",Item:"ItemGallery_Item__2BDij",ScrollBtn:"ItemGallery_ScrollBtn__2oyWW",Caption:"ItemGallery_Caption__1jQfz"}},98374:function(){}}]);