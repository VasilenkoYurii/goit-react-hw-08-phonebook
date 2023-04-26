"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{4257:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,o,i,s=t(9434),c=t(2504),l=t(2791),d=t(9439),u=t(5705),p=t(168),x=t(4934),f=(0,x.Z)(u.l0)(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 10px;\n  border-radius: 10px;\n"]))),b=x.Z.label(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),h=(0,x.Z)(u.gN)(o||(o=(0,p.Z)(["\n  margin-left: 40px;\n  font-size: 16px;\n\n  background: #d7d1c9;\n"]))),m=x.Z.button(i||(i=(0,p.Z)(["\n  width: 300px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #aa9a8e;\n  color: black;\n\n  transition: all 0.5s ease;\n\n  &:hover {\n    background-color: #988270;\n    color: #262626;\n  }\n"]))),g=t(184);var Z,j,v,y,w,k,C,z,A=function(){var n=(0,l.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,d.Z)(a,2),i=o[0],p=o[1],x=(0,s.I0)(),Z=function(n){"name"===n.currentTarget.name?r(n.currentTarget.value):p(n.currentTarget.value)};return(0,g.jsx)(u.J9,{initialValues:i,onSubmit:function(n,e){(0,e.resetForm)();var a={name:t,number:i};x((0,c.uK)(a)),r(""),p("")},children:(0,g.jsxs)(f,{autoComplete:"off",children:[(0,g.jsxs)(b,{children:["Name",(0,g.jsx)(h,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:Z,value:t})]}),(0,g.jsxs)(b,{children:["Number",(0,g.jsx)(h,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:Z,value:i})]}),(0,g.jsx)(m,{type:"submit",children:"Add contact"})]})})},F=x.Z.label(Z||(Z=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding-bottom: 15px;\n  width: 300px;\n"]))),I=x.Z.input(j||(j=(0,p.Z)(["\n  font-size: 16px;\n  width: 100%;\n\n  font-size: 16px;\n\n  background: #d7d1c9;\n"]))),N=t(8268),_=function(){var n=(0,s.I0)();return(0,g.jsxs)(F,{children:["Find contscts by name",(0,g.jsx)(I,{type:"text",onChange:function(e){n((0,N.M6)(e.target.value))}})]})},q=x.Z.ol(v||(v=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  font-size: 20px;\n\n  width: 90%;\n\n  padding: 20px;\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 15px; /* \u0448\u0438\u0440\u0438\u043d\u0430 \u0434\u043b\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u043b\u0430 */\n    background-color: #b7a99f;\n    border-radius: 9em;\n  }\n\n  /* \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n  &::-webkit-scrollbar-thumb {\n    background-color: #5d534b8a;\n    border-radius: 9em;\n    box-shadow: inset 1px 1px 10px #f3faf7;\n    transition: 0.5s ease;\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: #715b4b;\n  }\n"]))),L=function(n){return n.contacts.items},S=function(n){return n.contacts.isLoading},T=x.Z.button(y||(y=(0,p.Z)(["\n  width: 75px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #aa9a8e;\n  color: black;\n\n  transition: all 0.5s ease;\n\n  &:hover {\n    background-color: #988270;\n    color: #262626;\n  }\n"]))),J=x.Z.li(w||(w=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  border-bottom: 2px solid #b7a99f;\n"]))),K=x.Z.div(k||(k=(0,p.Z)(["\n  display: flex;\n"]))),M=x.Z.p(C||(C=(0,p.Z)(["\n  width: 300px;\n  height: 30px;\n"]))),U=function(){var n=(0,s.I0)();return function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){var t=n.name.toUpperCase(),r=e.name.toUpperCase();return t<r?-1:t>r?1:0}))}((0,s.v9)(L),(0,s.v9)(N.o8)).map((function(e){var t=e.id,r=e.name,a=e.number;return(0,g.jsxs)(J,{children:[(0,g.jsxs)(K,{children:[(0,g.jsxs)(M,{children:[r,":"]}),(0,g.jsx)("p",{children:a})]}),(0,g.jsx)(T,{type:"button",onClick:function(){n((0,c.GK)(t))},children:"Delete"})]},t)}))},B=function(){return(0,g.jsx)(q,{children:(0,g.jsx)(U,{})})},D=x.Z.div(z||(z=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n\n  gap: 100px;\n"]))),E=function(){var n=(0,s.I0)(),e=(0,s.v9)(S);return(0,l.useEffect)((function(){n((0,c.yF)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(A,{}),(0,g.jsx)(_,{})]}),(0,g.jsx)("div",{children:e&&"Request in progress..."}),(0,g.jsx)(B,{})]})}}}]);
//# sourceMappingURL=257.552134dc.chunk.js.map