"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{8220:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i,o,s,d,c,p,l,x,h,u,f=t(168),m=t(7402),g=t(1087),w=m.Z.div(r||(r=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 30px;\n\n  @media screen and (min-width: 1200px) {\n    flex-direction: row;\n  }\n"]))),y=m.Z.h1(a||(a=(0,f.Z)(["\n  width: 300px;\n  text-align: justify;\n\n  @media screen and (min-width: 768px) {\n    width: 700px;\n  }\n"]))),b=(0,m.Z)(g.OL)(i||(i=(0,f.Z)(["\n  color: #214242;\n  border-bottom: 1px solid black;\n\n  transition: all 0.5s ease;\n\n  &:hover {\n    color: #3d8f8f;\n    border-bottom: 1px solid #3d8f8f;\n  }\n"]))),j=t(6800),Z=t(1413),v=t(5861),k=t(9439),z=t(4687),S=t.n(z),C=t(2791),D=t(1243),M=m.Z.h1(o||(o=(0,f.Z)(["\n  font-size: 2rem;\n"]))),F=m.Z.div(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 270px;\n  background-color: rgba(226, 226, 226, 0.2);\n  text-align: center;\n  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;\n  padding: 20px;\n  border-radius: 3px;\n\n  @media screen and (max-width: 768px) {\n    padding: 15px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 450px;\n  }\n"]))),_=m.Z.input(d||(d=(0,f.Z)(["\n  width: 200px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  outline: none;\n  border-radius: 20px;\n  font-size: 16px;\n  margin-bottom: 10px;\n  background-color: white;\n  background-position: 10px 10px;\n  padding: 12px 20px 12px 20px;\n  transition: width 0.4s ease-in-out;\n  &:focus {\n    width: 60%;\n  }\n"]))),J=m.Z.div(c||(c=(0,f.Z)(["\n  margin-top: 10px;\n  font-size: 1.25em;\n"]))),W=m.Z.div(p||(p=(0,f.Z)(["\n  font-size: 1.25em;\n  font-weight: 600;\n"]))),q=m.Z.div(l||(l=(0,f.Z)(["\n  font-size: 4rem;\n  font-weight: 700;\n  color: #1e2432;\n  text-align: center;\n  @media screen and (max-width: 750px) {\n    font-size: 3rem;\n  }\n"]))),A=m.Z.span(x||(x=(0,f.Z)(["\n  font-size: 3rem;\n  @media screen and (max-width: 750px) {\n    font-size: 2.5rem;\n  }\n"]))),L=m.Z.div(h||(h=(0,f.Z)(["\n  font-weight: 600;\n"]))),O=m.Z.span(u||(u=(0,f.Z)(["\n  display: block;\n  text-align: center;\n  color: rgb(20, 2, 2);\n  font-size: 30px;\n"]))),T=t(184);var E=function(){var n=(0,C.useState)(""),e=(0,k.Z)(n,2),t=e[0],r=e[1],a=(0,C.useState)({data:{},error:!1}),i=(0,k.Z)(a,2),o=i[0],s=i[1],d=function(){var n=(0,v.Z)(S().mark((function n(e){return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==e.key){n.next=8;break}return e.preventDefault(),r(""),s((0,Z.Z)({},o)),"https://api.openweathermap.org/data/2.5/weather","f00c38e0279b7bc85480c3fe775d518c",n.next=8,D.Z.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",appid:"f00c38e0279b7bc85480c3fe775d518c"}}).then((function(n){s({data:n.data,error:!1})})).catch((function(n){s((0,Z.Z)((0,Z.Z)({},o),{},{data:{},error:!0})),r(""),console.log(n.message)}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,T.jsxs)(F,{children:[(0,T.jsxs)(M,{children:["Weather ",(0,T.jsx)("span",{children:" \ud83c\udf24 "})]}),(0,T.jsx)("div",{children:(0,T.jsx)(_,{autoFocus:!0,type:"text",placeholder:"Search City..",name:"query",value:t,onChange:function(n){return r(n.target.value)},onKeyPress:d})}),o.error&&(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(O,{children:(0,T.jsx)("span",{style:{fontSize:"26px"},children:" Sorry, City not found"})})}),o&&o.data&&o.data.main&&(0,T.jsxs)("div",{children:[(0,T.jsx)(J,{children:(0,T.jsxs)("h2",{children:[o.data.name,", ",(0,T.jsx)("span",{children:o.data.sys.country})]})}),(0,T.jsx)(W,{children:(0,T.jsx)("span",{children:function(){var n=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],", ").concat(n.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()])}()})}),(0,T.jsxs)(q,{children:[(0,T.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(o.data.weather[0].icon,"@2x.png"),alt:o.data.weather[0].description}),Math.round(o.data.main.temp),(0,T.jsx)(A,{children:" \xb0C "})]}),(0,T.jsxs)(L,{children:[(0,T.jsx)("p",{children:o.data.weather[0].description.toUpperCase()}),(0,T.jsxs)("p",{children:["Wind Speed: ",o.data.wind.speed,"m/s"]})]})]})]})},G=t(29),H=function(){var n=(0,G.a)().isLoggedIn;return(0,T.jsxs)(w,{children:[(0,T.jsx)(j.Z,{}),n?(0,T.jsx)(y,{children:"Greetings, thank you for registering and showing confidence in us, use the contact book with pleasure =)"}):(0,T.jsxs)(y,{children:["Hello, this web application will allow you to store your contacts in your personal account after",(0,T.jsx)(b,{to:"/register",children:" registration"}),", and if you are already registered, you can"," ",(0,T.jsx)(b,{to:"/login",children:" log in"}),".",(0,T.jsx)("br",{})," Come and enjoy =)"]}),(0,T.jsx)(E,{})]})}}}]);
//# sourceMappingURL=220.ccd43e00.chunk.js.map