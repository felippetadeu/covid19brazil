(this.webpackJsonpcovid19brasil=this.webpackJsonpcovid19brasil||[]).push([[0],{31:function(e,t,n){e.exports=n(63)},36:function(e,t,n){},37:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),u=n.n(c),s=(n(36),n(37),n(1)),o=n.n(s),i=n(4),l=n(5),p=n(10),f=n.n(p),d=(n(40),n(25)),m=n.n(d),v=n(8),b=n.n(v),O=function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://brasil.io/api/dataset/covid19/caso/data/?state=".concat(t,"&city=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(t,"/municipios"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),p=s[0],d=s[1],v=Object(a.useState)([]),b=Object(l.a)(v,2),g=b[0],E=b[1],x=Object(a.useState)(!1),w=Object(l.a)(x,2),y=w[0],S=w[1],k=Object(a.useState)([]),C=Object(l.a)(k,2),D=C[0],A=C[1],B=Object(a.useState)([]),M=Object(l.a)(B,2),Y=M[0],I=M[1],N=Object(a.useState)([]),J=Object(l.a)(N,2),V=J[0],F=J[1];function H(){return(H=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:200===(t=e.sent).status&&I(t.data.sort((function(e,t){return e.sigla<t.sigla?-1:e.sigla>t.sigla?1:0})).map((function(e){return{id:e.sigla,text:e.sigla}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:200===(n=e.sent).status&&F(n.data.sort((function(e,t){return e.nome<t.nome?-1:e.nome>t.nome?1:0})).map((function(e){return{id:e.nome,text:e.nome}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){H.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){p&&function(e){P.apply(this,arguments)}(p)}),[p]),Object(a.useEffect)((function(){g.map((function(e){return e.date=f()(new Date(e.date+"T00:00:00")).format("DD/MM/YYYY - dddd"),e})),A(g)}),[g]);var T=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(p,n);case 2:t=e.sent,S(!0),200===t.status&&(E(t.data.results),S(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("select",{value:p,onChange:function(e){return d(e.target.value)}},Y.map((function(e){return r.a.createElement("option",{value:e.id},e.text)}))),r.a.createElement("select",{value:n,onChange:function(e){return c(e.target.value)}},V.map((function(e){return r.a.createElement("option",{value:e.id},e.text)}))),r.a.createElement("button",{onClick:T},"COVID")),r.a.createElement("div",{className:""},r.a.createElement(m.a,{title:"CASOS COVID-19",columns:[{name:"Cidade",selector:"city"},{name:"Data",selector:"date"},{name:"Confirmados",selector:"confirmed"},{name:"Mortes",selector:"deaths"},{name:"UF",selector:"state"}],data:D,progressPending:y,dense:!0,highlightOnHover:!0,pagination:!0})))}f.a.locale("pt-Br");var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))},x=n(11),w=Object(x.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),y=w.actions,S=(y.increment,y.decrement,y.incrementByAmount,w.reducer),k=Object(x.a)({reducer:{counter:S}}),C=n(30);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,{store:k},r.a.createElement(E,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.15cb335f.chunk.js.map