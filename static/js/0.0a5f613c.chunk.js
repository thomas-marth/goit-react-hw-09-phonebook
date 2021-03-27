(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{114:function(e,a,t){"use strict";var r=t(0),s=t.n(r).a.createContext({controlId:void 0});a.a=s},115:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=t(0),n=t.n(o),c=t(17),d=t(30),m=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.variant,o=e.size,m=e.active,f=e.className,u=e.block,b=e.type,v=e.as,p=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(t,"btn"),O=l()(f,y,m&&"active",i&&y+"-"+i,u&&y+"-block",o&&y+"-"+o);if(p.href)return n.a.createElement(d.a,Object(r.a)({},p,{as:v,ref:a,className:l()(O,p.disabled&&"disabled")}));a&&(p.ref=a),b?p.type=b:v||(p.type="button");var x=v||"button";return n.a.createElement(x,Object(r.a)({},p,{className:O}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=m},116:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=t(0),n=t.n(o),c=t(21),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},f=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,f=void 0!==m&&m,u=Object(s.a)(e,["as","className","type","tooltip"]);return n.a.createElement(i,Object(r.a)({},u,{ref:a,className:l()(o,d+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m,a.a=f},117:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(69);function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,s=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(t.push(l.value),!a||t.length!==a);r=!0);}catch(n){s=!0,i=n}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},118:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=t(0),n=t.n(o),c=t(17),d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,o=e.as,d=void 0===o?"div":o,m=e.className,f=Object(s.a)(e,["bsPrefix","fluid","as","className"]),u=Object(c.a)(t,"container"),b="string"===typeof i?"-"+i:"-fluid";return n.a.createElement(d,Object(r.a)({ref:a},f,{className:l()(m,i?""+u+b:u)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},121:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=t(0),n=t.n(o),c=t(17),d=["xl","lg","md","sm","xs"],m=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,m=void 0===o?"div":o,f=Object(s.a)(e,["bsPrefix","className","as"]),u=Object(c.a)(t,"col"),b=[],v=[];return d.forEach((function(e){var a,t,r,s=f[e];if(delete f[e],"object"===typeof s&&null!=s){var i=s.span;a=void 0===i||i,t=s.offset,r=s.order}else a=s;var l="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+u+l:""+u+l+"-"+a),null!=r&&v.push("order"+l+"-"+r),null!=t&&v.push("offset"+l+"-"+t)})),b.length||b.push(u),n.a.createElement(m,Object(r.a)({},f,{ref:a,className:l.a.apply(void 0,[i].concat(b,v))}))}));m.displayName="Col",a.a=m},122:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=(t(73),t(0)),n=t.n(o),c=(t(74),t(116)),d=t(114),m=t(17),f=n.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,f=e.bsCustomPrefix,u=e.type,b=e.size,v=e.htmlSize,p=e.id,y=e.className,O=e.isValid,x=void 0!==O&&O,j=e.isInvalid,N=void 0!==j&&j,h=e.plaintext,P=e.readOnly,w=e.custom,E=e.as,I=void 0===E?"input":E,C=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(o.useContext)(d.a).controlId,k=w?[f,"custom"]:[c,"form-control"],g=k[0],R=k[1];if(c=Object(m.a)(g,R),h)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===u){var V;(V={})[c+"-file"]=!0,t=V}else if("range"===u){var S;(S={})[c+"-range"]=!0,t=S}else if("select"===I&&w){var T;(T={})[c+"-select"]=!0,T[c+"-select-"+b]=b,t=T}else{var L;(L={})[c]=!0,L[c+"-"+b]=b,t=L}return n.a.createElement(I,Object(r.a)({},C,{type:u,size:v,ref:a,readOnly:P,id:p||F,className:l()(y,t,x&&"is-valid",N&&"is-invalid")}))}));f.displayName="FormControl",a.a=Object.assign(f,{Feedback:c.a})},127:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=t(0),n=t.n(o),c=t(17),d=["xl","lg","md","sm","xs"],m=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,u=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(c.a)(t,"row"),v=b+"-cols",p=[];return d.forEach((function(e){var a,t=u[e];delete u[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+v+r+"-"+a)})),n.a.createElement(f,Object(r.a)({ref:a},u,{className:l.a.apply(void 0,[i,b,o&&"no-gutters"].concat(p))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},131:function(e,a,t){"use strict";var r=t(2),s=t(4),i=t(10),l=t.n(i),o=t(0),n=t.n(o),c=(t(73),t(116)),d=t(114),m=t(17),f=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,f=e.className,u=e.type,b=void 0===u?"checkbox":u,v=e.isValid,p=void 0!==v&&v,y=e.isInvalid,O=void 0!==y&&y,x=e.isStatic,j=e.as,N=void 0===j?"input":j,h=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(d.a),w=P.controlId,E=P.custom?[c,"custom-control-input"]:[i,"form-check-input"],I=E[0],C=E[1];return i=Object(m.a)(I,C),n.a.createElement(N,Object(r.a)({},h,{ref:a,type:b,id:t||w,className:l()(f,i,p&&"is-valid",O&&"is-invalid",x&&"position-static")}))}));f.displayName="FormCheckInput";var u=f,b=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,f=e.htmlFor,u=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(d.a),v=b.controlId,p=b.custom?[i,"custom-control-label"]:[t,"form-check-label"],y=p[0],O=p[1];return t=Object(m.a)(y,O),n.a.createElement("label",Object(r.a)({},u,{ref:a,htmlFor:f||v,className:l()(c,t)}))}));b.displayName="FormCheckLabel";var v=b,p=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,f=e.bsCustomPrefix,b=e.inline,p=void 0!==b&&b,y=e.disabled,O=void 0!==y&&y,x=e.isValid,j=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,P=e.feedbackTooltip,w=void 0!==P&&P,E=e.feedback,I=e.className,C=e.style,F=e.title,k=void 0===F?"":F,g=e.type,R=void 0===g?"checkbox":g,V=e.label,S=e.children,T=e.custom,L=e.as,z=void 0===L?"input":L,G=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||T,M=A?[f,"custom-control"]:[i,"form-check"],J=M[0],B=M[1];i=Object(m.a)(J,B);var q=Object(o.useContext)(d.a).controlId,D=Object(o.useMemo)((function(){return{controlId:t||q,custom:A}}),[q,A,t]),H=A||null!=V&&!1!==V&&!S,K=n.a.createElement(u,Object(r.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:j,isInvalid:h,isStatic:!H,disabled:O,as:z}));return n.a.createElement(d.a.Provider,{value:D},n.a.createElement("div",{style:C,className:l()(I,i,A&&"custom-"+R,p&&i+"-inline")},S||n.a.createElement(n.a.Fragment,null,K,H&&n.a.createElement(v,{title:k},V),(j||h)&&n.a.createElement(c.a,{type:j?"valid":"invalid",tooltip:w},E))))}));p.displayName="FormCheck",p.Input=u,p.Label=v;var y=p,O=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,f=e.className,u=e.isValid,b=e.isInvalid,v=e.lang,p=e.as,y=void 0===p?"input":p,O=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(o.useContext)(d.a),j=x.controlId,N=x.custom?[c,"custom-file-input"]:[i,"form-control-file"],h=N[0],P=N[1];return i=Object(m.a)(h,P),n.a.createElement(y,Object(r.a)({},O,{ref:a,id:t||j,type:"file",lang:v,className:l()(f,i,u&&"is-valid",b&&"is-invalid")}))}));O.displayName="FormFileInput";var x=O,j=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,f=e.htmlFor,u=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(d.a),v=b.controlId,p=b.custom?[i,"custom-file-label"]:[t,"form-file-label"],y=p[0],O=p[1];return t=Object(m.a)(y,O),n.a.createElement("label",Object(r.a)({},u,{ref:a,htmlFor:f||v,className:l()(c,t),"data-browse":u["data-browse"]}))}));j.displayName="FormFileLabel";var N=j,h=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,f=e.bsCustomPrefix,u=e.disabled,b=void 0!==u&&u,v=e.isValid,p=void 0!==v&&v,y=e.isInvalid,O=void 0!==y&&y,j=e.feedbackTooltip,h=void 0!==j&&j,P=e.feedback,w=e.className,E=e.style,I=e.label,C=e.children,F=e.custom,k=e.lang,g=e["data-browse"],R=e.as,V=void 0===R?"div":R,S=e.inputAs,T=void 0===S?"input":S,L=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=F?[f,"custom"]:[i,"form-file"],G=z[0],A=z[1];i=Object(m.a)(G,A);var M=Object(o.useContext)(d.a).controlId,J=Object(o.useMemo)((function(){return{controlId:t||M,custom:F}}),[M,F,t]),B=null!=I&&!1!==I&&!C,q=n.a.createElement(x,Object(r.a)({},L,{ref:a,isValid:p,isInvalid:O,disabled:b,as:T,lang:k}));return n.a.createElement(d.a.Provider,{value:J},n.a.createElement(V,{style:E,className:l()(w,i,F&&"custom-file")},C||n.a.createElement(n.a.Fragment,null,F?n.a.createElement(n.a.Fragment,null,q,B&&n.a.createElement(N,{"data-browse":g},I)):n.a.createElement(n.a.Fragment,null,B&&n.a.createElement(N,null,I),q),(p||O)&&n.a.createElement(c.a,{type:p?"valid":"invalid",tooltip:h},P))))}));h.displayName="FormFile",h.Input=x,h.Label=N;var P=h,w=t(122),E=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,f=e.controlId,u=e.as,b=void 0===u?"div":u,v=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:f}}),[f]);return n.a.createElement(d.a.Provider,{value:p},n.a.createElement(b,Object(r.a)({},v,{ref:a,className:l()(i,t)}),c))}));E.displayName="FormGroup";var I=E,C=(t(74),t(121)),F=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,f=e.column,u=e.srOnly,b=e.className,v=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),y=Object(o.useContext)(d.a).controlId;c=Object(m.a)(c,"form-label");var O="col-form-label";"string"===typeof f&&(O=O+" "+O+"-"+f);var x=l()(b,c,u&&"sr-only",f&&O);return v=v||y,f?n.a.createElement(C.a,Object(r.a)({as:"label",className:x,htmlFor:v},p)):n.a.createElement(i,Object(r.a)({ref:a,className:x,htmlFor:v},p))}));F.displayName="FormLabel",F.defaultProps={column:!1,srOnly:!1};var k=F,g=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,f=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),n.a.createElement(c,Object(r.a)({},f,{ref:a,className:l()(i,t,d&&"text-muted")}))}));g.displayName="FormText";var R=g,V=n.a.forwardRef((function(e,a){return n.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=y.Input,V.Label=y.Label;var S=V,T=t(36),L=Object(T.a)("form-row"),z=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,d=e.as,f=void 0===d?"form":d,u=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),n.a.createElement(f,Object(r.a)({},u,{ref:a,className:l()(o,c&&"was-validated",i&&t+"-inline")}))}));z.displayName="Form",z.defaultProps={inline:!1},z.Row=L,z.Group=I,z.Control=w.a,z.Check=y,z.File=P,z.Switch=S,z.Label=k,z.Text=R;a.a=z}}]);
//# sourceMappingURL=0.0a5f613c.chunk.js.map