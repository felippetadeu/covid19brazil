(this.webpackJsonpcovid19brasil=this.webpackJsonpcovid19brasil||[]).push([[0],{31:function(e,t,a){e.exports=a(67)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),u=a.n(c);a(36),a(37),a(38);function i(){return r.a.createElement("nav",{className:"fixed"},"nav")}var s=a(1),o=a.n(s),l=a(5),m=a(3),d=a(6),f=(a(45),a(10)),p=a.n(f),v=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(t,"/municipios"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(8),E=Object(O.b)({name:"brasilio",initialState:{uf:"",municipio:""},reducers:{alterarUf:function(e,t){e.uf=t.payload},alterarMunicipio:function(e,t){e.municipio=t.payload}}}),j=E.actions,h=j.alterarUf,g=j.alterarMunicipio,y=function(e){return e.brasilIO.uf},S=function(e){return e.brasilIO.municipio},w=E.reducer;function x(){var e=Object(d.b)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],u=a[1],i=Object(n.useState)([]),s=Object(m.a)(i,2),f=s[0],p=s[1],O=Object(n.useState)(""),E=Object(m.a)(O,2),j=E[0],y=E[1],S=Object(n.useState)([]),w=Object(m.a)(S,2),x=w[0],N=w[1],k=Object(n.useState)(""),C=Object(m.a)(k,2),I=C[0],M=C[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:200===(t=e.sent).status&&p(t.data.sort((function(e,t){return e.sigla<t.sigla?-1:e.sigla>t.sigla?1:0})).map((function(e){return{value:e.sigla,label:e.sigla}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:200===(a=e.sent).status&&N(a.data.sort((function(e,t){return e.nome<t.nome?-1:e.nome>t.nome?1:0})).map((function(e){return{value:e.nome,label:e.nome}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j&&function(t){e.apply(this,arguments)}(j)}),[j]);return r.a.createElement("div",{className:"sidebar fixed"+(c?" opened ":" closed ")},r.a.createElement("div",{className:"sidebar-content"},r.a.createElement("div",{className:"logo",onClick:function(){return u(!c)}}),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"selecao-estado"},r.a.createElement("select",{value:j,onChange:function(t){return a=t.target.value,e(h(a)),void y(a);var a},className:"select"},r.a.createElement("option",{value:""},"Selecione um Estado"),f.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)})))),r.a.createElement("div",{className:"selecao-cidades"},r.a.createElement("select",{value:I,onChange:function(t){return a=t.target.value,e(g(a)),void M(a);var a},className:"select"},r.a.createElement("option",{value:""},"Selecione um Munic\xedpio"),x.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)}))))),r.a.createElement("div",{className:"direitos-autorais"},"Esse \xe9 um site para uso de aprendizado na tecnologia React e os dados apresentados s\xe3o atrav\xe9s da API do ",r.a.createElement("a",{href:"https://brasil.io/home/"},"Brasil.IO"))))}a(62);function N(){return r.a.createElement("header",null,r.a.createElement(x,null),r.a.createElement(i,null))}var k=a(12),C=a.n(k),I=(a(64),a(27)),M=a.n(I),D=function(){var e=Object(l.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://brasil.io/api/dataset/covid19/caso/data/?state=".concat(t,"&city=").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function A(){var e=Object(d.c)(S),t=Object(d.c)(y),a=Object(n.useState)([]),c=Object(m.a)(a,2),u=c[0],i=c[1],s=Object(n.useState)(!1),f=Object(m.a)(s,2),p=f[0],v=f[1],b=Object(n.useState)([]),O=Object(m.a)(b,2),E=O[0],j=O[1],h=Object(n.useState)([]),g=Object(m.a)(h,2),w=(g[0],g[1],Object(n.useState)([])),x=Object(m.a)(w,2);x[0],x[1];Object(n.useEffect)((function(){u.map((function(e){return e.date=C()(new Date(e.date+"T00:00:00")).format("DD/MM/YYYY - dddd"),e})),j(u)}),[u]);var N=function(){var a=Object(l.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D(t,e);case 2:n=a.sent,v(!0),200===n.status&&(i(n.data.results),v(!1));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:""},r.a.createElement("div",null,e,t,r.a.createElement("button",{onClick:N},"COVID")),r.a.createElement("div",{className:""},r.a.createElement(M.a,{title:"CASOS COVID-19",columns:[{name:"Cidade",selector:"city"},{name:"Data",selector:"date"},{name:"Confirmados",selector:"confirmed"},{name:"Mortes",selector:"deaths"},{name:"UF",selector:"state"}],data:E,progressPending:p,dense:!0,highlightOnHover:!0,pagination:!0})))}C.a.locale("pt-Br");a(66);function B(){return r.a.createElement("main",null,r.a.createElement(A,null))}var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(B,null))},U=Object(O.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),J=U.actions,P=(J.increment,J.decrement,J.incrementByAmount,U.reducer),V=Object(O.a)({reducer:{counter:P,brasilIO:w}});u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:V},r.a.createElement(Y,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7db37bc6.chunk.js.map