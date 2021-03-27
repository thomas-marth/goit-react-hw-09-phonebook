(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{110:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(24),o=n.n(r),a=n(49),u=n(50),i=n(53),s=n(52),b=n(7),j=n(16),O=n(14),l=(n(25),n(8)),d=n(18),f=n(112),h=n(26),m=n(1);var g=Object(d.b)((function(t){return{user:Object(h.d)(t)}}),null)((function(t){var e=t.user;return Object(m.jsx)(m.Fragment,{children:e?Object(m.jsxs)(j.a,{variant:"tabs",defaultActiveKey:"/home",className:"justify-content-center",children:[Object(m.jsxs)(j.a.Link,{eventKey:"disabled",disabled:!0,children:["\u041f\u0440\u0438\u0432\u0435\u0442 ",e.name]}),Object(m.jsxs)(j.a.Link,{eventKey:"disabled",disabled:!0,children:["Email: ",e.email]}),Object(m.jsx)(j.a.Item,{children:Object(m.jsx)(O.b,{to:l.a.contacts,className:"nav-link",children:"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(m.jsx)(j.a.Item,{children:Object(m.jsx)(O.b,{to:l.a.logout,className:"nav-link",children:"\u0412\u044b\u0439\u0442\u0438"})})]}):Object(m.jsx)(f.a,{animation:"border"})})})),p=function(t){return t.status.logOn};var k=function(t){return t.user,Object(m.jsxs)(j.a,{variant:"tabs",defaultActiveKey:"/home",className:"justify-content-end",children:[Object(m.jsx)(j.a.Item,{children:Object(m.jsx)(O.b,{to:l.a.register,className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(j.a.Item,{children:Object(m.jsx)(O.b,{to:l.a.login,className:"nav-link",children:"\u0412\u0445\u043e\u0434"})})]})};var x=Object(d.b)((function(t){return{logOn:p(t)}}),null)((function(t){var e=t.logOn;return t.props,Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{variant:"tabs",defaultActiveKey:"/home",className:"justify-content-between",children:[Object(m.jsx)(j.a.Item,{children:Object(m.jsx)(O.b,{to:l.a.home,className:"nav-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),e?Object(m.jsx)(g,{}):Object(m.jsx)(k,{})]})})})),v=function(t){var e=t.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)("main",{children:e})]})},y=n(46),B=n(5),E=n(3),T=n(34),S=Object(d.b)((function(t){return{logOn:p(t)}}),null)((function(t){var e=t.component,n=t.logOn,c=t.redirectTo,r=Object(T.a)(t,["component","logOn","redirectTo"]);return Object(m.jsx)(b.b,Object(E.a)(Object(E.a)({},r),{},{render:function(t){return n&&r.restricted?Object(m.jsx)(b.a,{to:c}):Object(m.jsx)(e,Object(E.a)({},t))}}))})),q=Object(d.b)((function(t){return{logOn:p(t)}}))((function(t){var e=t.component,n=t.logOn,c=t.redirectTo,r=Object(T.a)(t,["component","logOn","redirectTo"]);return Object(m.jsx)(b.b,Object(E.a)(Object(E.a)({},r),{},{render:function(t){return n?Object(m.jsx)(e,Object(E.a)({},t)):Object(m.jsx)(b.a,{to:c})}}))})),N=n(113);var R,z,U=function(t){var e=t.error;return Object(m.jsxs)(N.a,{variant:"danger",children:[Object(m.jsx)(N.a.Heading,{children:"\u0423\u043f\u0441, \u0447\u0442\u043e-\u0442\u043e \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c!"}),Object(m.jsx)("p",{children:e})]})},w=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,124))})),A=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,125))})),I=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,126))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,128))})),K=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,132))})),L=Object(c.lazy)((function(){return Promise.all([n.e(6),n.e(7)]).then(n.bind(null,129))})),_=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.token)}},{key:"componentDidUpdate",value:function(){var t=this;if(this.props.message)return setTimeout((function(){t.props.registrationError(null)}),3e3)}},{key:"render",value:function(){var t=this.props,e=t.logOn,n=t.message;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{children:Object(m.jsx)(c.Suspense,{fallback:Object(m.jsx)("div",{children:Object(m.jsx)(f.a,{animation:"border"})}),children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:l.a.home,exact:!0,component:e?A:w}),Object(m.jsx)(S,{path:l.a.home,exact:!0,restricted:!0,redirectTo:l.a.contacts,component:e?A:w}),Object(m.jsx)(S,{path:l.a.login,restricted:!0,redirectTo:l.a.home,component:I}),Object(m.jsx)(S,{path:l.a.register,restricted:!0,redirectTo:l.a.home,component:F}),Object(m.jsx)(q,{path:l.a.contacts,redirectTo:l.a.login,component:K}),Object(m.jsx)(q,{path:l.a.logout,redirectTo:l.a.login,component:L}),Object(m.jsx)(b.a,{to:l.a.home})]})})}),n&&Object(m.jsx)(U,{error:n})]})}}]),n}(c.Component),C={getUser:y.d,registrationError:B.q},M=Object(d.b)((function(t){return{token:Object(h.e)(t),logOn:p(t),message:Object(h.b)(t)}}),C)(_),P=n(72),G=n(29),H=n(6),D=n(22),J=n(45),Q=n.n(J),V=n(9),W={user:null,token:null,contacts:[],error:null,filter:""},X=Object(H.c)({user:null,token:null,contacts:[],error:null,filter:""},(R={},Object(V.a)(R,B.s,(function(t,e){return Object(E.a)(Object(E.a)({},t),e.payload)})),Object(V.a)(R,B.q,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{error:e.payload})})),Object(V.a)(R,B.m,(function(t,e){return Object(E.a)(Object(E.a)({},t),e.payload)})),Object(V.a)(R,B.k,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{error:e.payload})})),Object(V.a)(R,B.j,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{user:e.payload})})),Object(V.a)(R,B.h,(function(t,e){return Object(E.a)(Object(E.a)({},t),e.payload)})),Object(V.a)(R,B.p,(function(){return Object(E.a)({},W)})),Object(V.a)(R,B.n,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{error:e.payload})})),Object(V.a)(R,B.c,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{contacts:[].concat(Object(G.a)(t.contacts),[e.payload])})})),Object(V.a)(R,B.f,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{contacts:e.payload})})),Object(V.a)(R,B.a,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{error:e.payload})})),Object(V.a)(R,B.d,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{error:e.payload})})),Object(V.a)(R,B.v,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{contacts:Object(G.a)(t.contacts.filter((function(t){return t.id!==e.payload})))})})),Object(V.a)(R,B.t,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{error:e.payload})})),Object(V.a)(R,B.g,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{filter:e.payload})})),R)),Y=n(23),Z=Object(H.c)({logOn:!1,remember:!1},(z={},Object(V.a)(z,Y.a,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{logOn:e.payload})})),Object(V.a)(z,Y.b,(function(t,e){return Object(E.a)(Object(E.a)({},t),{},{remember:e.payload})})),z)),$={key:"userBook",storage:Q.a,whitelist:["token"]},tt={key:"status",storage:Q.a,whitelist:["remember"]},et=Object(H.a)({reducer:{userBook:Object(D.g)($,X),status:Object(D.g)(tt,Z)},middleware:Object(G.a)(Object(H.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}}))}),nt=Object(D.h)(et);o.a.render(Object(m.jsx)(O.a,{children:Object(m.jsx)(d.a,{store:et,children:Object(m.jsx)(P.a,{loading:Object(m.jsx)(f.a,{animation:"border"}),persistor:nt,children:Object(m.jsx)(M,{})})})}),document.getElementById("root"))},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var c=n(6),r=Object(c.b)("CHENGE_STATUS_LOGON"),o=Object(c.b)("CHENGE_STATUS_REMEMBER")},26:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u}));var c=function(t){return t.userBook.token},r=function(t){return t.userBook.user},o=function(t){return t.userBook.contacts},a=function(t){return t.userBook.filter},u=function(t){return t.userBook.error}},46:function(t,e,n){"use strict";n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return j})),n.d(e,"f",(function(){return O})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"h",(function(){return f}));var c=n(3),r=n(5);n.d(e,"a",(function(){return r.a}));var o=n(23),a=n(20),u=n.n(a);u.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=function(t){return u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},s=function(t){return function(e){e(Object(r.r)()),u.a.post("/users/signup",t).then((function(t){i(t.data.token),e(Object(o.a)(!0)),e(Object(r.s)(Object(c.a)({},t.data)))})).catch((function(t){return e(Object(r.q)(t.message))}))}},b=function(t){return function(e){e(Object(r.l)()),u.a.post("/users/login",t).then((function(t){i(t.data.token),e(Object(o.a)(!0)),e(Object(r.m)(Object(c.a)({},t.data)))})).catch((function(t){return e(Object(r.k)(t.message))}))}},j=function(t){return function(e){t?(i(t),e(Object(o.a)(!0)),e(Object(r.i)()),u.a.get("/users/current").then((function(t){e(Object(r.j)(Object(c.a)({},t.data)))})).catch((function(t){return e(Object(r.h)(t.message))}))):e(Object(o.a)(!1))}},O=function(){return function(t){t(Object(r.o)()),u.a.post("/users/logout").then((function(){u.a.defaults.headers.common.Authorization="",t(Object(o.a)(!1)),t(Object(r.p)())})).catch((function(e){return t(Object(r.n)(e.message))}))}},l=function(t){return function(e){e(Object(r.b)()),u.a.post("/contacts",t).then((function(t){var n=t.data;e(Object(r.c)(n))})).catch((function(t){return e(Object(r.a)(t.message))}))}},d=function(t){return function(e){t&&(i(t),e(Object(r.e)()),u.a.get("/contacts").then((function(t){e(Object(r.f)(t.data))})).catch((function(t){return e(Object(r.d)(t.message))})))}},f=function(t){return function(e){e(Object(r.u)()),u.a.delete("/contacts/".concat(t)).then((function(){e(Object(r.v)(t))})).catch((function(t){return e(Object(r.t)(t.message))}))}}},5:function(t,e,n){"use strict";n.d(e,"r",(function(){return r})),n.d(e,"s",(function(){return o})),n.d(e,"q",(function(){return a})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return j})),n.d(e,"h",(function(){return O})),n.d(e,"o",(function(){return l})),n.d(e,"p",(function(){return d})),n.d(e,"n",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return g})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return k})),n.d(e,"d",(function(){return x})),n.d(e,"u",(function(){return v})),n.d(e,"v",(function(){return y})),n.d(e,"t",(function(){return B})),n.d(e,"g",(function(){return E}));var c=n(6),r=Object(c.b)("userBook/registrationRequest"),o=Object(c.b)("userBook/registrationSuccess"),a=Object(c.b)("userBook/registrationError"),u=Object(c.b)("userBook/loginRequest"),i=Object(c.b)("userBook/loginSuccess"),s=Object(c.b)("userBook/loginError"),b=Object(c.b)("userBook/getUserRequest"),j=Object(c.b)("userBook/getUserSuccess"),O=Object(c.b)("userBook/getUserError"),l=Object(c.b)("userBook/logoutRequest"),d=Object(c.b)("userBook/logoutSuccess"),f=Object(c.b)("userBook/logoutError"),h=Object(c.b)("userBook/addRequest"),m=Object(c.b)("userBook/addSuccess"),g=Object(c.b)("userBook/addError"),p=Object(c.b)("contacts/getRequest"),k=Object(c.b)("contacts/getSuccess"),x=Object(c.b)("contacts/getError"),v=Object(c.b)("contacts/removeRequest"),y=Object(c.b)("contacts/removeSuccess"),B=Object(c.b)("contacts/removeError"),E=Object(c.b)("FILTER_ITEM")},8:function(t,e,n){"use strict";e.a={home:"/",login:"/login",register:"/registration",contacts:"/contacts",logout:"/logout"}}},[[110,2,3]]]);
//# sourceMappingURL=main.640f8f86.chunk.js.map