(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,n){e.exports=n.p+"static/media/logo.7dab9996.jpg"},52:function(e,a,n){e.exports=n(79)},57:function(e,a,n){},59:function(e,a,n){},79:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(40),r=n.n(l),s=(n(57),n(10)),m=n(11),u=n(21),o=n(12),i=n(22),h=(n(59),n(50)),p=n(13),d=n(25),E=n(9),g=n.n(E),b=n(26),f=n.n(b),y=n(46),_=n.n(y),N=n(82);function v(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: "," "," ",c.a.createElement("span",{className:f()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(_.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(N.a,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function k(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function j(){var e=Object(d.a)(["\n\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n\n  "]);return j=function(){return e},e}var O=g()(j()),w=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(k,null),c.a.createElement(t.Fragment,null,c.a.createElement(p.Query,{query:O},function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading ..."):(n&&console.log(n),c.a.createElement(t.Fragment,null,l.launches.map(function(e){return c.a.createElement(v,{key:e.flight_number,launch:e})})))})))}}]),a}(t.Component);function x(){var e=Object(d.a)(["\n  query LaunchQuery($flight_number: Int! = 1) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return x=function(){return e},e}var L=g()(x()),D=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(p.Query,{query:L,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;console.log(a,n,t);var l=t.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,u=l.launch_success,o=l.rocket,i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: ")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful: "," "," ",c.a.createElement("span",{className:f()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(N.a,{to:"/",className:"btn btn-secondary"},"Back")))}))}}]),a}(t.Component),Y=n(47),q=n.n(Y),F=n(83),I=n(84),M=new h.a({uri:"/graphql"}),Q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:M},c.a.createElement(F.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:q.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(I.a,{exact:!0,path:"/",component:w}),c.a.createElement(I.a,{exact:!0,path:"/launch/:flight_number",component:D}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.7a4b6d58.chunk.js.map