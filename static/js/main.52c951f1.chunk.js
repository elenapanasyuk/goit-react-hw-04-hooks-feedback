(this["webpackJsonpgoit-react-hw-03-template"]=this["webpackJsonpgoit-react-hw-03-template"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(t,e,n){t.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},,function(t,e,n){t.exports={button:"FeedbackOptions_button__3n-hy"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),s=n(6),r=n.n(s),o=(n(13),n(14),n(3)),l=n(5),u=n.n(l);var b=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("div",{className:u.a.section,children:[e&&Object(c.jsx)("h2",{className:u.a.title,children:e}),n]})},j=n(7),d=n.n(j);var f=function(t){var e=t.options,n=t.onLeaveFeedback;return e.map((function(t){return Object(c.jsx)("button",{type:"button",className:d.a.button,onClick:function(){return n(t)},children:t},t)}))},h=n(2),O=n.n(h);var m=function(t){var e=t.good,n=t.bad,a=t.neutral,i=t.total,s=t.positivePercentage;return Object(c.jsxs)("ul",{className:O.a.list,children:[Object(c.jsxs)("li",{className:O.a.item,children:["Good: ",e]}),Object(c.jsxs)("li",{className:O.a.item,children:["Neutral: ",a]}),Object(c.jsxs)("li",{className:O.a.item,children:["Bad: ",n]}),Object(c.jsxs)("li",{className:O.a.item,children:["Total: ",i]}),Object(c.jsxs)("li",{className:O.a.item,children:["Positive feedback: ",s,"%"]})]})};var v=function(t){var e=t.infoMessage;return Object(c.jsx)("p",{children:e})};var x=function(){var t=Object(a.useState)(0),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(a.useState)(0),d=Object(o.a)(j,2),h=d[0],O=d[1],x=function(){return n+h+l};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{title:"Please leave feedback",children:Object(c.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t){case"good":i((function(t){return t+1}));break;case"neutral":u((function(t){return t+1}));break;case"bad":O((function(t){return t+1}));break;default:return}}})}),Object(c.jsxs)(b,{title:"Statistics",children:[x()>0&&Object(c.jsx)(m,{good:n,neutral:l,bad:h,total:x(),positivePercentage:function(){var t=x();return t?Math.round(n/t*100):0}()}),0===x()&&Object(c.jsx)(v,{infoMessage:"No feedback given:("})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),p()}],[[15,1,2]]]);
//# sourceMappingURL=main.52c951f1.chunk.js.map