(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),o=n.n(c),u=n(10),i=n(11),l=n(13),s=n(12),p=n(14),h=n(23),m=n(162),d=n(165),f=n(166),v=n(167),b=n(164),g=n(21),j=n(73),O="LOAD_ALL_USERS",E="http://dev.frevend.com/",y="https://cors-anywhere.herokuapp.com/",P=Object(g.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.response;switch(n){case O+"_SUCCESS":return Object(j.a)(a.users);default:return e}}}),k=Object(g.a)(function(e){return function(e){return function(t){var n=t.callAPI,a=t.type;if(!n)return e(t);fetch(n).then(function(e){return e.json()}).then(function(t){return e({type:a+"_SUCCESS",response:t})})}}}),w=Object(g.d)(P,{},k),C=n(29),x=n(161),S=n(65),R=n.n(S);var A=n(159),U=n(163),I=n(158),_=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=e.id,n=e.name,a=e.surname,c=e.desc;return r.a.createElement(U.a,null,r.a.createElement(U.a.Heading,null,r.a.createElement(U.a.Title,{componentClass:"h3"},"".concat(n," ").concat(a))),r.a.createElement(U.a.Body,null,r.a.createElement(I.a,{src:"http://dev.frevend.com/json/images/u_{{id}}.png".replace("{{id}}",t),rounded:!0})),r.a.createElement(U.a.Body,null,c))}}]),t}(a.Component),B=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.users;return r.a.createElement(A.a,{xs:12},e.map(function(e){return r.a.createElement(_,{key:e.id,user:e})}))}}]),t}(a.Component),D=Object(h.b)(function(e,t){return{users:e.users.filter(function(e,n){return n<5*t.activePage&&n>=5*t.activePage-5})}})(B),L=n(36),J=n(37);function M(){var e=Object(L.a)(["\n    display: inline-block;\n    border: 1px #888 solid;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;    \n    margin-right: -1px;\n    background-color: ",";\n"]);return M=function(){return e},e}function W(){var e=Object(L.a)(["\n    display: block;\n"]);return W=function(){return e},e}function H(){var e=Object(L.a)(["\n    position: absolute;\n    top: calc(50% - 40px);\n    right: calc(50% - 40px);\n"]);return H=function(){return e},e}var T=J.a.div(H()),$=J.a.div(W()),q=J.a.div(M(),function(e){return e.active&&"#888"}),z=function(){return r.a.createElement("h1",null,"Page not found 404")},F=n(160),G=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.routePage!==this.props.routePage&&this.props.handleRoute(this.props.routePage)}},{key:"buildPages",value:function(){var e,t=this.props,n=t.itemsCountPerPage,a=t.totalItemsCount,c=t.activePage;e=a%n>0?Math.ceil(a/n):a/n;for(var o=[],u=1;u<=e;u++)o.push(r.a.createElement(F.a,{to:"/".concat(u),key:u},r.a.createElement(q,{active:c===u.toString()},"".concat(u))));return o}},{key:"render",value:function(){var e=this.buildPages();return r.a.createElement(A.a,{xs:12},r.a.createElement($,null,e.map(function(e){return e})))}}]),t}(a.Component),K=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={activePage:n.props.match.params.currentPage},n.handleRoute=n.handleRoute.bind(Object(C.a)(Object(C.a)(n))),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadAllUsers()}},{key:"handleRoute",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.match,a=this.state.activePage;return t.length?t.length&&n.params.currentPage>t.length/5?r.a.createElement(z,null):r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement(D,{activePage:a})),r.a.createElement(x.a,null,r.a.createElement(G,{activePage:a,itemsCountPerPage:5,totalItemsCount:t.length,routePage:this.props.match.params.currentPage,handleRoute:this.handleRoute}))):r.a.createElement(T,null,r.a.createElement(R.a,{type:"Puff",color:"#000",height:"100px"}))}}]),t}(a.Component),N=Object(h.b)(function(e){return{users:e.users}},{loadAllUsers:function(){return{type:O,callAPI:"".concat(y).concat(E,"json/users.json")}}})(K),Q=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:w},r.a.createElement(d.a,null,r.a.createElement(m.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{path:"/:currentPage",render:function(e){var t=e.match;return r.a.createElement(N,{match:t})}}),r.a.createElement(b.a,{from:"/",to:"/1"})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,n){e.exports=n(157)}},[[76,2,1]]]);
//# sourceMappingURL=main.b7ea94e8.chunk.js.map