"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[232],{232:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(885),a=n(791),u=n(731),i=n(538),o=n(184);var c=function(e){var t=e.onChange,n=(e.onSubmit,e.value),r=(0,i.B)().getMovieByName;return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(e.target.elements.query.value)},children:[(0,o.jsx)("input",{value:n,type:"text",name:"query",onChange:function(e){t(e.target.value)}}),(0,o.jsx)("button",{type:"submit",children:"SEARCH"})]})},l=n(689);var s=function(e){var t=e.data,n=(0,l.TH)();return(0,o.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,a=e.name;return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"".concat(t),state:{from:n},children:r||a})},t)}))})},f=n(349);var h=function(e){var t,n=(0,i.B)(),l=n.searchList,h=n.getMovieByName,v=(0,u.lr)(),m=(0,r.Z)(v,2),d=m[0],x=m[1],j=null!==(t=d.get("query"))&&void 0!==t?t:"";return(0,a.useEffect)((function(){j&&h(j)}),[h]),(0,o.jsx)(f.Z,{children:(0,o.jsxs)("section",{children:[(0,o.jsx)(c,{value:j,onChange:function(e){x(""!==e?{query:e}:{})}}),l.length>0&&(0,o.jsx)(s,{data:l})]})})}}}]);
//# sourceMappingURL=232.4cd0e075.chunk.js.map