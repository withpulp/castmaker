webpackJsonp([0xa6cd3c51205b1000],{"./data/templates.js":function(e,t,a){"use strict";var s=a("./data/config.js");s.pathPrefix?s.pathPrefix+"/":"/";e.exports=[{id:"post",prefix:"/updates",hero:{type:"post",figure:!0,headline:{level:2,button:{type:"category link",prefix:"/categories/"}}},content:{type:"post"},cta:{type:"fluid",figure:"container"},heel:{type:"fluid",figure:"container"},affixed:{type:"fluid",figure:"inline bottom right"}},{id:"category",type:"updates",prefix:"/categories/",hero:{figure:!0,headline:{level:1}},listing:{type:"posts",figure:"posts",button:{type:"primary link",label:"View All Updates"},prefix:"/updates"},cta:{type:"centered"},heel:{type:"fluid"}},{id:"tag",type:"updates",prefix:"/tags/",hero:{figure:!0,headline:{level:1}},listing:{type:"posts",figure:"posts",button:{type:"primary link",label:"View All Updates"},prefix:"/updates"},cta:{type:"centered"},heel:{type:"fluid"}}]},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dvz/Projects/gatsby-castmaker/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dvz/Projects/gatsby-castmaker/node_modules/babel-plugin-lodash/lib/index.js","/Users/dvz/Projects/gatsby-castmaker/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dvz/Projects/gatsby-castmaker/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dvz/Projects/gatsby-castmaker/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dvz/Projects/gatsby-castmaker/node_modules/babel-preset-stage-0/lib/index.js","/Users/dvz/Projects/gatsby-castmaker/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tag.jsx':function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var n=a("./node_modules/lodash/capitalize.js"),o=s(n),d=a("./node_modules/react/react.js"),u=s(d),c=a("./node_modules/react-helmet/lib/Helmet.js"),p=s(c),f=a("./src/containers/hero/index.jsx"),b=s(f),g=a("./src/containers/listing/index.jsx"),m=s(g),y=a("./src/containers/cta/index.jsx"),h=s(y),x=a("./src/containers/heel/index.jsx"),j=s(x),v=a("./src/components/mailchimp/index.jsx"),_=s(v),k=a("./src/components/social_links/index.jsx"),w=s(k),E=a("./src/components/counter/index.jsx"),P=s(E),U=a("./data/config.js"),z=s(U),O=a("./data/templates.js"),T=s(O),C=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pathContext,s=(e.location,T.default.filter(function(e){return"tag"===e.id})[0]),l=a.tag,r=t.allMarkdownRemark.edges,i=void 0;i=s.hero.headline.title?s.hero.headline.title:l;var n=void 0;return n=!!s.listing.button&&{type:s.listing.button.type,label:s.listing.button.label},u.default.createElement("div",{className:s.id+" template"},u.default.createElement(p.default,{title:(0,o.default)(s.type)+' tagged as "'+l+'" | '+z.default.siteTitle}),u.default.createElement("div",{className:s.id+" page"},u.default.createElement(b.default,{figure:s.hero.figure,level:s.hero.headline.level,title:i}),u.default.createElement(m.default,{type:s.listing.type,figure:s.listing.figure,prefix:s.listing.prefix,button:n,list:r}),u.default.createElement(h.default,{type:s.cta.type},u.default.createElement(_.default,{figure:!0,title:z.default.subscribeTitle,caption:z.default.subscribeCaption,action:z.default.mailchimpAction,disclaimer:z.default.subscribeDisclaimer}),u.default.createElement(w.default,{links:z.default.userLinks})),u.default.createElement(j.default,{type:s.heel.type},u.default.createElement(P.default,{type:s.heel.type,title:z.default.countdownTitle,date:z.default.countdownDate,message:z.default.counterMessage}))))},t}(u.default.Component);t.default=C;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-3475d7992f7cb7637648.js.map