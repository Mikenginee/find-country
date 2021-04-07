(this["webpackJsonpcountries-info-ts"]=this["webpackJsonpcountries-info-ts"]||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var c,i=n(0),a=n(37),o=n.n(a),r=(n(125),n(59)),s=(n(126),n(48)),l=n(15),u=function(e){var t=e.continent,n=e.name,c=e.code,i=e.emoji;return Object(l.jsxs)("div",{style:{padding:"10px 16px",borderRadius:"1px solid black",boxShadow:"0px 0px 2px 1px black"},children:[Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(l.jsx)("h3",{style:{margin:"0 10px 0 0"},children:n}),Object(l.jsx)("p",{style:{margin:0},children:i})]}),Object(l.jsxs)("div",{style:{marginTop:"10px"},children:[Object(l.jsxs)("p",{style:{margin:0},children:["ISO code: ",c]}),Object(l.jsxs)("p",{style:{margin:0},children:["Continent: ",t]})]})]})},j=n(151),d=n(152),m=n(150),b=n(65),h=n(103),f=Object(s.gql)(c||(c=Object(h.a)(["\n    query {\n        countries {\n            code\n        name\n        emoji\n        emojiU\n        continent {\n            name\n      }\n    }\n  }\n"]))),O=function(){var e=Object(s.useQuery)(f),t=e.loading,n=e.data,c=Object(i.useState)([]),a=Object(r.a)(c,2),o=a[0],h=a[1],O=Object(i.useState)(""),p=Object(r.a)(O,2),x=p[0],v=p[1],g=Object(i.useState)(""),y=Object(r.a)(g,2),C=y[0],w=y[1],L=Object(i.useState)([]),S=Object(r.a)(L,2),A=S[0],I=S[1],k=Object(i.useState)([{value:"All"},{value:"Europe"},{value:"Asia"},{value:"North America"},{value:"South America"},{value:"Oceania"},{value:"Africa"},{value:"Antarctica"}]),N=Object(r.a)(k,1)[0],B=j.a.Search,E=Object(l.jsx)(b.a,{style:{fontSize:48},spin:!0});Object(i.useEffect)((function(){t||(h(n.countries),I(n.countries))}),[n,t]);var q=function(e){if(w(""),"All"===e)I(o);else{var t=o.filter((function(t){return t.continent.name===e}));I(t)}v(e)};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(l.jsx)("h1",{children:"Country Finder"}),Object(l.jsx)(d.a,{defaultValue:"Choose continent",style:{marginBottom:"10px",minWidth:"160px"},onChange:function(e){return q(e)},children:N.map((function(e){return Object(l.jsx)(d.a.Option,{value:e.value,children:e.value},e.value)}))}),Object(l.jsx)(B,{value:C,placeholder:"Find country by name or ISO code...",onSearch:function(e){if(""===e.trim())return!1;if(""!==e.trim()&&""===x||""!==e.trim()&&"All"===x){var t,n=o.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()||t.code.toLowerCase()===e.toLowerCase()}));e.length>2?(t=o.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),I(t)):I(n)}else if(""!==e.trim()){var c,i=A.filter((function(t){return t.continent.name===x&&t.name.toLowerCase()===e.toLowerCase()||t.continent.name===x&&t.code.toLowerCase()===e.toLowerCase()}));e.length>2?(c=o.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())&&t.continent.name===x})),I(c)):I(i)}else I(o)},onChange:function(e){""===e.target.value?(""===x?I(o):q(x),w("")):(A.length,w(e.target.value))},style:{width:300,marginBottom:10}}),t&&Object(l.jsx)(m.a,{indicator:E}),0===A.length&&!t&&Object(l.jsxs)("h2",{children:["No results for ",C," ",""!==x?"in ".concat(x):null]}),Object(l.jsx)("div",{className:"container",children:0!==A.length&&A.map((function(e){return Object(l.jsx)(u,{emoji:e.emoji,code:e.code,name:e.name,continent:e.continent.name},e.name)}))})]})})},p=new s.ApolloClient({cache:new s.InMemoryCache,uri:"https://countries.trevorblades.com/"});o.a.render(Object(l.jsx)(s.ApolloProvider,{client:p,children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.b075cf8a.chunk.js.map