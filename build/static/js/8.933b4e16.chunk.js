(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[8],{132:function(e,t,a){"use strict";a.r(t);var r=a(49),c=a(50),n=a(53),o=a(52),s=a(0),i=a.n(s),l=a(36),b=Object(l.a)("card-deck"),j=(a(25),a(2)),d=a(4),u=a(10),O=a.n(u),m=a(17),p=a(51),h=a(55),f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.variant,n=e.as,o=void 0===n?"img":n,s=Object(d.a)(e,["bsPrefix","className","variant","as"]),l=Object(m.a)(a,"card-img");return i.a.createElement(o,Object(j.a)({ref:t,className:O()(c?l+"-"+c:l,r)},s))}));f.displayName="CardImg",f.defaultProps={variant:null};var x=f,v=Object(p.a)("h5"),g=Object(p.a)("h6"),y=Object(l.a)("card-body"),C=Object(l.a)("card-title",{Component:v}),N=Object(l.a)("card-subtitle",{Component:g}),w=Object(l.a)("card-link",{Component:"a"}),k=Object(l.a)("card-text",{Component:"p"}),P=Object(l.a)("card-header"),E=Object(l.a)("card-footer"),I=Object(l.a)("card-img-overlay"),F=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,c=e.bg,n=e.text,o=e.border,l=e.body,b=e.children,u=e.as,p=void 0===u?"div":u,f=Object(d.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(m.a)(a,"card"),v=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return i.a.createElement(h.a.Provider,{value:v},i.a.createElement(p,Object(j.a)({ref:t},f,{className:O()(r,x,c&&"bg-"+c,n&&"text-"+n,o&&"border-"+o)}),l?i.a.createElement(y,null,b):b))}));F.displayName="Card",F.defaultProps={body:!1},F.Img=x,F.Title=C,F.Subtitle=N,F.Body=y,F.Link=w,F.Text=k,F.Header=P,F.Footer=E,F.ImgOverlay=I;var L=F,T=a(115),G=a(18),R=a(46),V=a(1);var B={removeContact:R.h},S=Object(G.b)(null,B)((function(e){var t=e.contact,a=e.removeContact;return Object(V.jsx)(L,{className:"col mb-5",border:"primary",style:{width:"18rem",margin:"10px",flex:"0 0 80%"},children:Object(V.jsxs)(L.Body,{children:[Object(V.jsx)(L.Title,{children:t.name}),Object(V.jsxs)(L.Text,{children:["\u041d\u043e\u043c\u0435\u0440: ",t.number]}),Object(V.jsx)(T.a,{variant:"primary",type:"button",id:t.id,onClick:function(e){return a(e.target.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})})),z=a(9),A=a(3),D=a(117),H=a(118),J=a(127),M=a(121),q=a(131);function K(){var e=Object(G.c)(),t=Object(s.useState)({name:"",number:""}),a=Object(D.a)(t,2),r=a[0],c=a[1],n=Object(s.useCallback)((function(e){var t=e.target;c(Object(A.a)(Object(A.a)({},r),{},Object(z.a)({},t.name,t.value)))}),[r]),o=Object(s.useCallback)((function(t){t.preventDefault(),r.name&&r.number?e(Object(R.b)(r)):e(Object(R.a)("\u0412\u044b \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0436\u0430\u043b\u0443\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u043b\u0435 \u0424\u0418\u041e \u0438 \u041d\u043e\u043c\u0435\u0440, \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"))}),[e,r]);return Object(V.jsx)(H.a,{children:Object(V.jsx)(J.a,{className:"justify-content-md-center",children:Object(V.jsxs)(M.a,{xs:!0,lg:"5",children:[Object(V.jsx)("h2",{className:"row row-cols-md-5 justify-content-center",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(V.jsxs)(q.a,{onSubmit:o,children:[Object(V.jsxs)(q.a.Group,{as:M.a,controlId:"FirstName",children:[Object(V.jsx)(q.a.Label,{children:"\u0424\u0418\u041e"}),Object(V.jsx)(q.a.Control,{type:"text",placeholder:"\u0424\u0418\u041e",name:"name",value:r.name,onChange:n})]}),Object(V.jsxs)(q.a.Group,{as:M.a,controlId:"formGridNumber",children:[Object(V.jsx)(q.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440"}),Object(V.jsx)(q.a.Control,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",name:"number",value:r.number,onChange:n})]}),Object(V.jsx)(T.a,{variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})]})})})}var Q=Object(l.a)("input-group-append"),U=Object(l.a)("input-group-prepend"),W=Object(l.a)("input-group-text",{Component:"span"}),X=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.size,c=e.hasValidation,n=e.className,o=e.as,s=void 0===o?"div":o,l=Object(d.a)(e,["bsPrefix","size","hasValidation","className","as"]);return a=Object(m.a)(a,"input-group"),i.a.createElement(s,Object(j.a)({ref:t},l,{className:O()(n,a,r&&a+"-"+r,c&&"has-validation")}))}));X.displayName="InputGroup";var Y=Object(j.a)({},X,{Text:W,Radio:function(e){return i.a.createElement(W,null,i.a.createElement("input",Object(j.a)({type:"radio"},e)))},Checkbox:function(e){return i.a.createElement(W,null,i.a.createElement("input",Object(j.a)({type:"checkbox"},e)))},Append:Q,Prepend:U}),Z=a(122);var $={getFilterValue:a(5).g},_=Object(G.b)(null,$)((function(e){var t=e.getFilterValue;return Object(V.jsx)(H.a,{children:Object(V.jsx)(J.a,{className:"justify-content-md-center",children:Object(V.jsxs)(M.a,{xs:!0,lg:"5",children:[Object(V.jsx)("p",{}),Object(V.jsx)("h2",{className:"row row-cols-md-5 justify-content-center",children:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(V.jsx)(Y,{className:"mb-3",children:Object(V.jsx)(Z.a,{placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f","aria-label":"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f","aria-describedby":"basic-addon2",onChange:function(e){return t(e.target.value)}})})]})})})})),ee=a(26),te=function(e){Object(n.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).filteredContact=function(e,t){return 0!==t.length?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getContacts(this.props.token)}},{key:"render",value:function(){var e=this.props,t=e.contacts,a=e.filter,r=this.filteredContact(t,a);return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("br",{}),Object(V.jsx)(K,{}),Object(V.jsx)(_,{}),Object(V.jsx)("br",{}),Object(V.jsx)("h2",{className:"row row-cols-5 justify-content-center",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),0!==r.length&&Object(V.jsx)(b,{className:"row row-cols-md-5 justify-content-center",children:r.map((function(e){return Object(V.jsx)(S,{contact:e},e.id)}))})]})}}]),a}(s.Component),ae={getContacts:R.c};t.default=Object(G.b)((function(e){return{user:Object(ee.d)(e),contacts:Object(ee.c)(e),token:Object(ee.e)(e),filter:Object(ee.a)(e)}}),ae)(te)}}]);
//# sourceMappingURL=8.933b4e16.chunk.js.map