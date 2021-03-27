(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[8],{132:function(e,t,a){"use strict";a.r(t);var c=a(49),r=a(50),n=a(53),s=a(52),o=a(0),i=a.n(o),b=a(36),l=Object(b.a)("card-deck"),j=(a(25),a(2)),d=a(4),u=a(10),O=a.n(u),m=a(17),p=a(51),h=a(55),f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,r=e.variant,n=e.as,s=void 0===n?"img":n,o=Object(d.a)(e,["bsPrefix","className","variant","as"]),b=Object(m.a)(a,"card-img");return i.a.createElement(s,Object(j.a)({ref:t,className:O()(r?b+"-"+r:b,c)},o))}));f.displayName="CardImg",f.defaultProps={variant:null};var x=f,v=Object(p.a)("h5"),g=Object(p.a)("h6"),y=Object(b.a)("card-body"),C=Object(b.a)("card-title",{Component:v}),N=Object(b.a)("card-subtitle",{Component:g}),w=Object(b.a)("card-link",{Component:"a"}),k=Object(b.a)("card-text",{Component:"p"}),P=Object(b.a)("card-header"),E=Object(b.a)("card-footer"),I=Object(b.a)("card-img-overlay"),L=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,r=e.bg,n=e.text,s=e.border,b=e.body,l=e.children,u=e.as,p=void 0===u?"div":u,f=Object(d.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(m.a)(a,"card"),v=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return i.a.createElement(h.a.Provider,{value:v},i.a.createElement(p,Object(j.a)({ref:t},f,{className:O()(c,x,r&&"bg-"+r,n&&"text-"+n,s&&"border-"+s)}),b?i.a.createElement(y,null,l):l))}));L.displayName="Card",L.defaultProps={body:!1},L.Img=x,L.Title=C,L.Subtitle=N,L.Body=y,L.Link=w,L.Text=k,L.Header=P,L.Footer=E,L.ImgOverlay=I;var T=L,G=a(115),R=a(18),B=a(46),F=a(1);function S(e){var t=e.contact,a=Object(R.c)(B.h);return Object(F.jsx)(T,{className:"col mb-5",border:"primary",style:{width:"18rem",margin:"10px",flex:"0 0 80%"},children:Object(F.jsxs)(T.Body,{children:[Object(F.jsx)(T.Title,{children:t.name}),Object(F.jsxs)(T.Text,{children:["\u041d\u043e\u043c\u0435\u0440: ",t.number]}),Object(F.jsx)(G.a,{variant:"primary",type:"button",id:t.id,onClick:function(e){return a(Object(B.h)(e.target.id))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})}var z=a(9),A=a(3),D=a(117),H=a(118),J=a(127),M=a(121),V=a(131);function q(){var e=Object(R.c)(),t=Object(o.useState)({name:"",number:""}),a=Object(D.a)(t,2),c=a[0],r=a[1],n=Object(o.useCallback)((function(e){var t=e.target;r(Object(A.a)(Object(A.a)({},c),{},Object(z.a)({},t.name,t.value)))}),[c]),s=Object(o.useCallback)((function(t){t.preventDefault(),c.name&&c.number?e(Object(B.b)(c)):e(Object(B.a)("\u0412\u044b \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u043e\u0436\u0430\u043b\u0443\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u043b\u0435 \u0424\u0418\u041e \u0438 \u041d\u043e\u043c\u0435\u0440, \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"))}),[e,c]);return Object(F.jsx)(H.a,{children:Object(F.jsx)(J.a,{className:"justify-content-md-center",children:Object(F.jsxs)(M.a,{xs:!0,lg:"5",children:[Object(F.jsx)("h2",{className:"row row-cols-md-5 justify-content-center",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(F.jsxs)(V.a,{onSubmit:s,children:[Object(F.jsxs)(V.a.Group,{as:M.a,controlId:"FirstName",children:[Object(F.jsx)(V.a.Label,{children:"\u0424\u0418\u041e"}),Object(F.jsx)(V.a.Control,{type:"text",placeholder:"\u0424\u0418\u041e",name:"name",value:c.name,onChange:n})]}),Object(F.jsxs)(V.a.Group,{as:M.a,controlId:"formGridNumber",children:[Object(F.jsx)(V.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440"}),Object(F.jsx)(V.a.Control,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",name:"number",value:c.number,onChange:n})]}),Object(F.jsx)(G.a,{variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})]})})})}var K=Object(b.a)("input-group-append"),Q=Object(b.a)("input-group-prepend"),U=Object(b.a)("input-group-text",{Component:"span"}),W=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.size,r=e.hasValidation,n=e.className,s=e.as,o=void 0===s?"div":s,b=Object(d.a)(e,["bsPrefix","size","hasValidation","className","as"]);return a=Object(m.a)(a,"input-group"),i.a.createElement(o,Object(j.a)({ref:t},b,{className:O()(n,a,c&&a+"-"+c,r&&"has-validation")}))}));W.displayName="InputGroup";var X=Object(j.a)({},W,{Text:U,Radio:function(e){return i.a.createElement(U,null,i.a.createElement("input",Object(j.a)({type:"radio"},e)))},Checkbox:function(e){return i.a.createElement(U,null,i.a.createElement("input",Object(j.a)({type:"checkbox"},e)))},Append:K,Prepend:Q}),Y=a(122),Z=a(5);function $(){var e=Object(R.c)(Z.g);return Object(F.jsx)(H.a,{children:Object(F.jsx)(J.a,{className:"justify-content-md-center",children:Object(F.jsxs)(M.a,{xs:!0,lg:"5",children:[Object(F.jsx)("p",{}),Object(F.jsx)("h2",{className:"row row-cols-md-5 justify-content-center",children:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(F.jsx)(X,{className:"mb-3",children:Object(F.jsx)(Y.a,{placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f","aria-label":"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f","aria-describedby":"basic-addon2",onChange:function(t){return e(Object(Z.g)(t.target.value))}})})]})})})}var _=a(26),ee=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).filteredContact=function(e,t){return 0!==t.length?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.getContacts(this.props.token)}},{key:"render",value:function(){var e=this.props,t=e.contacts,a=e.filter,c=this.filteredContact(t,a);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("br",{}),Object(F.jsx)(q,{}),Object(F.jsx)($,{}),Object(F.jsx)("br",{}),Object(F.jsx)("h2",{className:"row row-cols-5 justify-content-center",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),0!==c.length&&Object(F.jsx)(l,{className:"row row-cols-md-5 justify-content-center",children:c.map((function(e){return Object(F.jsx)(S,{contact:e},e.id)}))})]})}}]),a}(o.Component),te={getContacts:B.c};t.default=Object(R.b)((function(e){return{user:Object(_.d)(e),contacts:Object(_.c)(e),token:Object(_.e)(e),filter:Object(_.a)(e)}}),te)(ee)}}]);
//# sourceMappingURL=8.eaef33fa.chunk.js.map