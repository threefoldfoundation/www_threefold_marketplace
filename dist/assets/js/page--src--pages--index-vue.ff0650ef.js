(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IGkE:function(t,e,a){"use strict";var s={props:["header"]},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("span",{staticClass:"text-sm font-semibold"},[t._v(t._s(t.header.title))]),a("h2",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-heading"},[t._v("\n      "+t._s(t.header.subtitle)+"\n    ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.header.content)}}),a("div",[t.header.btn1?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.header.link1}},[t._v(t._s(t.header.btn1))]):t._e(),t.header.btn2?a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.header.link2}},[t._v(t._s(t.header.btn2))]):t._e()],1)])])}),[],!1,null,null,null);e.a=l.exports},MtIX:function(t,e,a){"use strict";var s={props:["title","excerpt","altImg","image","button","link"],computed:{img:function(){return this.image?this.image.src?this.image.src:this.image:""}}},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"},[a("h2",{staticClass:"text-6xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.excerpt)}}),t.button?a("div",[t.link.includes("http")?a("a",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full",attrs:{target:"_blank",href:t.link}},[t._v(t._s(t.button))]):a("a",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full",attrs:{href:t.link}},[t._v(t._s(t.button))])]):t._e()]),a("div",{staticClass:"lg:w-1/2 px-2"},[a("g-image",{attrs:{src:t.img,alt:t.altImg}})],1)])])}),[],!1,null,null,null);e.a=l.exports},RRjm:function(t,e,a){"use strict";var s={props:["cta"]},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("h2",{staticClass:"text-4xl leading-tight font-semibold font-heading"},[t._v("\n      "+t._s(t.cta.title)+"\n    ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-6 mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.cta.content)}}),t.cta.button?a("g-link",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full",attrs:{to:t.cta.link}},[t._v(t._s(t.cta.button))]):t._e()],1)])}),[],!1,null,null,null);e.a=l.exports},akyF:function(t,e,a){"use strict";var s={computed:{img:function(){return this.card.image.src?"background-image:url("+this.card.image.src+")":this.card.image}},props:["card"]},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"lg:py-12 lg:flex lg:justify-center flex flex-col"},[a("div",{staticClass:"bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"},[a("div",{staticClass:"lg:w-1/2"},[a("div",{staticClass:"h-64 bg-cover lg:rounded-lg lg:h-full",style:t.img})]),a("div",{staticClass:"py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2"},[a("h2",{staticClass:"text-3xl text-gray-700 font-bold"},[t._v(t._s(t.card.title))]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-4 text-gray-700",domProps:{innerHTML:t._s(t.card.content)}}),t.card.button?a("div",{staticClass:"mt-8"},[t.card.link.includes("http")?a("a",{staticClass:"inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full",attrs:{target:"_blank",href:t.card.link}},[t._v(t._s(t.card.button))]):a("a",{staticClass:"inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full",attrs:{href:t.card.link}},[t._v(t._s(t.card.button))])]):t._e()])])])])}),[],!1,null,null,null);e.a=l.exports},fuxi:function(t,e,a){"use strict";var s={props:["logos"],methods:{img:function(t){return t?t.src?t.src:t:""}}},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"pt-8 px-4 text-center"},[t._m(0),a("div",{staticClass:"flex flex-wrap -mx-8"},t._l(t.logos,(function(e,s){return a("g-link",{key:s,staticClass:"w-1/2 md:w-1/6 px-8 mb-8",attrs:{to:e.url}},[a("g-image",{attrs:{src:t.img(e.image)}})],1)})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-2xl mx-auto mb-8"},[e("h2",{staticClass:"text-4xl leading-tight mb-6 font-semibold font-heading"},[this._v("\n      Meet some of our partners\n    ")]),e("p",{staticClass:"text-gray-400 leading-relaxed"})])}],!1,null,null,null);e.a=l.exports},iyQ6:function(t,e,a){"use strict";a.r(e);var s=a("MtIX"),n=a("IGkE"),l=a("qaXD"),i=a("akyF"),r=a("RRjm"),o=a("fuxi"),c={props:["news"]},g=a("KHd+"),d=Object(g.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white"},[e("div",{staticClass:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},[e("p",{staticClass:"text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider"},[this._v("\n      "+this._s(this.news.excerpt)+"\n    ")]),e("div",{staticClass:"mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8"},this._l(this.news.partners,(function(t){return e("g-link",{key:t.id,staticClass:"col-span-1 flex justify-center py-8 px-8 m-1 bg-gray-100",attrs:{to:t.path,target:"_blank"}},[e("img",{staticClass:"max-h-12",attrs:{src:t.logo}})])})),1)])])}),[],!1,null,null,null).exports,m=a("phRe"),u={components:{Header:s.a,SolutionsHeader:n.a,Comparison:l.a,NewCard:i.a,CallToAction:r.a,logoShowcase:o.a,InTheNews:d,SignUp:m.a},metaInfo:{title:"",titleTemplate:"ThreeFold Marketplace"},mounted:function(){console.log(this.$page.markdownPage.comparisonSecs)}},p=null,x=Object(g.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("Header",{attrs:{title:t.$page.markdownPage.header_title,image:t.$page.markdownPage.header_image,altImg:t.$page.markdownPage.header_altImg,excerpt:t.$page.markdownPage.header_excerpt,button:t.$page.markdownPage.button,link:t.$page.markdownPage.link}}),t.$page.markdownPage.comparisonSecs&&t.$page.markdownPage.comparisonSecs.length>0?a("Comparison",{attrs:{main:t.$page.markdownPage.comparisonMain,sections:t.$page.markdownPage.comparisonSecs}}):t._e(),t._l(t.$page.markdownPage.cards,(function(t){return a("NewCard",{key:t.id,attrs:{card:t}})})),t.$page.markdownPage.cta?a("CallToAction",{attrs:{cta:t.$page.markdownPage.cta}}):t._e()],2)}),[],!1,null,null,null);"function"==typeof p&&p(x);e.default=x.exports},phRe:function(t,e,a){"use strict";var s={props:["signup"]},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-8 px-4"},[a("div",{staticClass:"flex flex-wrap items-center -mx-4"},[a("div",{staticClass:"w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left"},[a("h2",{staticClass:"text-xl font-semibold font-heading"},[t._v("\n        "+t._s(t.signup.title)+"\n      ")])]),a("div",{staticClass:"w-full lg:w-2/6 px-4 text-right"},[a("g-link",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full",attrs:{to:t.signup.link1}},[t._v(t._s(t.signup.button1))]),a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.signup.link2}},[t._v(t._s(t.signup.button2))])],1)])])}),[],!1,null,null,null);e.a=l.exports},qaXD:function(t,e,a){"use strict";var s={props:["main","sections"],methods:{img:function(t){return t?t.src?t.src:t:""},appPath:function(t){return"apps/"+t}}},n=a("KHd+"),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("h2",{staticClass:"text-4xl mb-2 leading-tight font-semibold font-heading"},[t._v("\n    "+t._s(t.main.title)+"\n  ")]),a("p",{staticClass:"text-gray-600"},[t._v(t._s(t.main.description))]),a("div",{staticClass:"flex flex-wrap items-center mx-8 mt-12 mb-16"},t._l(t.sections,(function(e,s){return a("div",{key:s,staticClass:"lg:w-1/3 px-6 mb-2"},[e.app_id?a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.appPath(e.app_id)}},[a("g-image",{staticClass:"mx-auto mb-8",attrs:{src:t.img(e.img),alt:e.title}})],1):t._e(),a("h3",{staticClass:"text-2xl mb-4 font-semibold font-heading"},[a("span",[t._v(t._s(e.title))])]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700",domProps:{innerHTML:t._s(e.content)}})],1)})),0),a("div",[t.main.button?a("g-link",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full",attrs:{to:t.main.link}},[t._v(t._s(t.main.button))]):t._e()],1)])}),[],!1,null,null,null);e.a=l.exports}}]);