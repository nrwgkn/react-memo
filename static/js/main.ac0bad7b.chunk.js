(this["webpackJsonpreact-memo"]=this["webpackJsonpreact-memo"]||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),i=c(12),o=c.n(i),s=(c(51),c(8)),j=c(41),d=c(80),l=c(35),u=c.n(l),b=c(36),O=c.n(b),m=(c(52),function(e){var t=e.onMemoAdd,c=e.onMemoDelete;return Object(n.jsx)("div",{className:"memo-head",children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(d.a,{variant:"contained",color:"primary",startIcon:Object(n.jsx)(u.a,{}),onClick:function(){t()},children:"Add"}),Object(n.jsx)(d.a,{variant:"contained",color:"secondary",startIcon:Object(n.jsx)(O.a,{}),onClick:function(){c()},children:"Delete"})]})})}),x=c(82),f=c(37),h=c.n(f),v=function(){var e=Object(a.useContext)(k),t=Object(s.a)(e,2),c=t[0],r=(t[1],Object(a.useContext)(N)),i=Object(s.a)(r,2),o=i[0],j=i[1],d=Object(a.useState)([]),l=Object(s.a)(d,2),u=l[0],b=l[1],O=Object(a.useState)(!1),m=Object(s.a)(O,2),f=m[0],v=m[1],g=function(e){var t=c.find((function(t){return t.id===e}));j(t)},p=c.map((function(e){return Object(n.jsx)("li",{className:o.id===e.id?"is-current":"",onClick:function(){return g(e.id)},children:Object(n.jsx)("p",{children:e.content})},e.id)})),C=u.map((function(e){return Object(n.jsx)("li",{className:o.id===e.id?"is-current":"",onClick:function(){return g(e.id)},children:Object(n.jsx)("p",{children:e.content})},e.id)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"memo-body_search",children:Object(n.jsxs)("form",{action:"",children:[Object(n.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){var t=c.filter((function(t){return-1!==t.content.toLowerCase().search(e.target.value.toLowerCase())}));b(t),v(!0)}}),Object(n.jsx)(x.a,{"aria-label":"search memo",style:{padding:0},children:Object(n.jsx)(h.a,{})})]})})}),f?u?Object(n.jsx)("ul",{children:C}):void 0:Object(n.jsx)("ul",{children:p})]})},g=c(32),p=function(){var e=Object(a.useContext)(N),t=Object(s.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),j=o[0],d=o[1];return Object(a.useEffect)((function(){d(c.content)}),[c]),Object(n.jsx)("textarea",{value:j,onChange:function(e){d(e.target.value),r(Object(g.a)(Object(g.a)({},c),{},{content:e.target.value}))}})},C=(c(58),function(){return Object(n.jsxs)("div",{className:"memo-body",children:[Object(n.jsx)("div",{className:"memo-body_list",children:Object(n.jsx)(v,{})}),Object(n.jsx)("div",{className:"memo-body_content",children:Object(n.jsx)(p,{})})]})}),S=(c(59),{id:"",content:""}),k=r.a.createContext(),N=r.a.createContext(),y=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("react-memo"))||[]),t=Object(s.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(S),o=Object(s.a)(i,2),d=o[0],l=o[1],u=Object(a.useContext)(J),b=Object(s.a)(u,2),O=b[0];b[1];return Object(a.useEffect)((function(){localStorage.setItem("react-memo",JSON.stringify(c))}),[c]),Object(a.useEffect)((function(){var e=c.map((function(e){return e.id===d.id?d:e}));r(e)}),[d]),Object(n.jsx)("div",{className:O?"memo is-dark":"memo",children:Object(n.jsx)(k.Provider,{value:[c,r],children:Object(n.jsxs)(N.Provider,{value:[d,l],children:[Object(n.jsx)(m,{onMemoAdd:function(){var e={id:Math.random().toString(32).substring(2),content:""},t=[].concat(Object(j.a)(c),[e]);r(t),l(e)},onMemoDelete:function(){var e=c.filter((function(e){return e.id!==d.id}));r(e),l({id:"",content:""})}}),Object(n.jsx)(C,{})]})})})},I=c(40),M=c(83),F=c(30),P=c(84),w=c(38),A=c.n(w),D=c(39),E=c.n(D),J=(c(60),r.a.createContext());var L=function(){var e=Object(a.useState)("on"===localStorage.getItem("darkMode")),t=Object(s.a)(e,2),c=t[0],r=t[1],i=Object(I.a)({palette:{primary:{main:F.a[800]},type:c?"dark":"light"}});return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(M.a,{theme:i,children:[Object(n.jsx)(P.a,{}),Object(n.jsx)("div",{className:"mode",children:c?Object(n.jsx)(x.a,{color:"inherit",onClick:function(){localStorage.setItem("darkMode","off"),r(!1)},children:Object(n.jsx)(A.a,{})}):Object(n.jsx)(x.a,{color:"inherit",onClick:function(){localStorage.setItem("darkMode","on"),r(!0)},children:Object(n.jsx)(E.a,{})})}),Object(n.jsx)(J.Provider,{value:[c,r],children:Object(n.jsx)(y,{})})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),_()}},[[62,1,2]]]);
//# sourceMappingURL=main.ac0bad7b.chunk.js.map