(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{32:function(n,e,t){},33:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var i,r,o,c,a,s,l,d=t(0),j=t.n(d),b=t(10),x=t.n(b),h=(t(32),t(33),t(3)),g=t(26),p=t(4),u=t(24),O=t.n(u),f=t(25),m=t.n(f),v=t(13),w=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),y=function(n){return n.car.cars},k=w.reducer,I=t(12),B=t(2);var E,M,S,C,T,z,D,A=function(){var n=Object(d.useState)(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],r=Object(I.b)(y);return Object(B.jsx)("div",{children:Object(B.jsxs)(L,{children:[Object(B.jsx)("img",{src:"/images/logo.svg",alt:""}),Object(B.jsx)(X,{children:r&&r.map((function(n,e){return Object(B.jsx)("a",{href:"#",children:n},e)}))}),Object(B.jsxs)(N,{children:[Object(B.jsx)("a",{href:"#",children:"Shop"}),Object(B.jsx)("a",{href:"#",children:"Tesla Account"}),Object(B.jsx)(P,{onClick:function(){return i(!0)}})]}),Object(B.jsxs)(R,{show:t,children:[Object(B.jsx)(W,{children:Object(B.jsx)(J,{onClick:function(){return i(!1)}})}),r&&r.map((function(n,e){return Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:n})},e)})),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory"})})]})]})})},L=p.a.div(i||(i=Object(h.a)(["\n  min-height:30px;\n  position:fixed;\n  display:flex;\n  align-item:center;\n  justify-content:space-between;\n  padding: 5px 20px;\n  top:0;\n  left:0;\n  right:0;\n  z-index:1;\n\n"]))),X=p.a.div(r||(r=Object(h.a)(["\n display:flex;\n padding-top:10px;\n align-items:center;\n justify-content:center;\n flex:1;\n a{\n     font-weight:600;\n     color:black;\n     text-transform:uppercase;\n     padding:0 10px;\n     flex-wrap:nowrap;\n    }\n\n    @media(max-width:786px) {\n        display:none;\n    }\n\n"]))),N=p.a.div(o||(o=Object(h.a)(["\ndisplay:flex;\npadding-top:10px;\nalign-items:center;\na{\n    font-weight:600;\n    color:black;\n    text-transform:uppercase;\n    margin-right:10px;\n    flex-wrap:nowrap;\n   }\n"]))),P=Object(p.a)(O.a)(c||(c=Object(h.a)(["\n cursor:pointer;\n font-weight:600;\n\n"]))),R=p.a.div(a||(a=Object(h.a)(["\n right:0;\n position:fixed;\n top:0;\n bottom:0;\n background:white;\n width:300px;\n list-style:none;\n z-index:16;\n padding:20px;\n display:flex;\n flex-direction:column;\n text-align:start;\n transform: ",";\n transition:transform 0.3s ease-in;\n     li{\n       padding: 15px 0;\n       border-bottom: 1px solid rgba(0,0,0,.2);\n         a{\n             color:black;\n             font-weight:500;\n         }\n     }\n\n  \n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),J=Object(p.a)(m.a)(s||(s=Object(h.a)(["\n cursor:pointer;\n"]))),W=p.a.div(l||(l=Object(h.a)(["\ndisplay:flex;\njustify-content:flex-end;\n"]))),Y=t(15),V=t.n(Y);var $,q=function(n){var e=n.title,t=n.description,i=n.backgroundImg,r=n.leftButton,o=n.rightButton;return Object(B.jsxs)(F,{bgImg:i,children:[Object(B.jsx)(V.a,{bottom:!0,children:Object(B.jsxs)(G,{children:[Object(B.jsx)("h1",{children:e}),Object(B.jsx)("p",{children:t})]})}),Object(B.jsxs)(Z,{children:[Object(B.jsx)(V.a,{bottom:!0,children:Object(B.jsxs)(H,{children:[Object(B.jsx)(K,{children:r}),o&&Object(B.jsx)(Q,{children:o})]})}),Object(B.jsx)(U,{src:"/images/down-arrow.svg"})]})]})},F=p.a.div(E||(E=Object(h.a)(["\n width:100vw;\n height:100vh;\n background-size:cover;\n background-position:center;\n background-repeat:no-repeat;\n background-image:url('/images/model-s.jpg');\n display:flex;\n flex-direction:column;\n justify-content:space-between; //for Vertical\n align-items:center; // for horizontal\n background-image: ","\n \n"])),(function(n){return'url("/images/'.concat(n.bgImg,'")')})),G=p.a.div(M||(M=Object(h.a)(["\npadding-top:15vh;\ntext-align:center;\n"]))),H=p.a.div(S||(S=Object(h.a)(["\n display:flex;\n margin-bottom:30px;\n @media (max-width: 768px){\n     flex-direction:column;\n }\n"]))),K=p.a.div(C||(C=Object(h.a)(["\n    background-color:rgba(23,26,32,0.8);\n    height:40px;\n    width:256px;\n    color:white;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    border-radius:100px;\n    opacity:0.85;\n    text-transform: uppercase;\n    font-size:12px;\n    cursor:pointer;\n    margin:8px;\n"]))),Q=Object(p.a)(K)(T||(T=Object(h.a)(["\n background-color:white;\n opacity:0.65;\n color:black; \n"]))),U=p.a.img(z||(z=Object(h.a)(["\n margin-top:20px;\n height:40px;\n animation:animateDown infinite 1.5s;\n margin-left:250px;\n\n \n \n"]))),Z=p.a.div(D||(D=Object(h.a)([""])));var _=function(){return Object(B.jsxs)(nn,{children:[Object(B.jsx)(q,{title:"Model S",description:"Order Onilne for Touchless Delivery",backgroundImg:"model-s.jpg",leftButton:"Custom order",rightButton:"Existing Inventory"}),Object(B.jsx)(q,{title:"Model-Y",description:"Order Onilne for Touchless Delivery",backgroundImg:"model-y.jpg",leftButton:"Custom order",rightButton:"Existing Inventory"}),Object(B.jsx)(q,{title:"Model-3",description:"Order Onilne for Touchless Delivery",backgroundImg:"model-3.jpg",leftButton:"Custom order",rightButton:"Existing Inventory"}),Object(B.jsx)(q,{title:"Model-X",description:"Order Onilne for Touchless Delivery",backgroundImg:"model-x.jpg",leftButton:"Custom order",rightButton:"Existing Inventory"}),Object(B.jsx)(q,{title:"Lowest Cost Panels in America",description:"Money-back guarentee",backgroundImg:"solar-panel.jpg",leftButton:"order now",rightButton:"Learn more"}),Object(B.jsx)(q,{title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New Roof Plus Panels",backgroundImg:"solar-roof.jpg",leftButton:"order now",rightButton:"Learn more"}),Object(B.jsx)(q,{title:"Accessories",description:"",backgroundImg:"accessories.jpg",leftButton:"Shop now"})]})},nn=p.a.div($||($=Object(h.a)(["\nheight:100vh;\nwidth:100%;\n\n"])));var en=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(A,{}),Object(B.jsx)(_,{})]})},tn=Object(v.a)({reducer:{car:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(I.a,{store:tn,children:Object(B.jsx)(en,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ab2139be.chunk.js.map