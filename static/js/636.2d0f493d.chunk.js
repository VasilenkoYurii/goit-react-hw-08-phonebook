"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[636],{4636:function(n,e,t){t.r(e),t.d(e,{default:function(){return Sn}});var i,o,r,a,d,s,p,c=t(9439),l=t(9434),x=t(2504),u=t(2791),f=t(8617),h=t(5705),b=t(2007),m=t.n(b),g=t(168),w=t(7402),Z=t(6053),j=w.Z.div(i||(i=(0,g.Z)(["\n  position: fixed;\n  inset: 0%;\n  background-color: rgba(44, 39, 50, 0.68);\n  z-index: 1;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),y=(0,w.Z)(h.l0)(o||(o=(0,g.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  width: 270px;\n\n  background-color: #fffffff2;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),v=(0,w.Z)(Z.nfZ)(r||(r=(0,g.Z)(["\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 22px;\n\n  position: absolute;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n  }\n"]))),C=w.Z.h2(a||(a=(0,g.Z)(["\n  padding-top: 30px;\n"]))),k=w.Z.label(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 5px;\n\n  font-size: 20px;\n  font-weight: 600;\n\n  width: 100%;\n"]))),z=(0,w.Z)(h.gN)(s||(s=(0,g.Z)(["\n  font-size: 18px;\n  background: #66999963;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #000;\n"]))),M=w.Z.button(p||(p=(0,g.Z)(["\n  background-color: #fff;\n  border: 1px solid #000;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Caveat', sans-serif;\n  font-size: 20px;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  width: 200px;\n  transition-duration: 150ms;\n  transition-property: all;\n\n  &:hover {\n    background-color: #008296;\n    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;\n    color: white;\n    border: 1px solid #d5d9d9;\n  }\n"]))),S=t(184);function E(n){var e=n.closeModal,t=(0,u.useState)(""),i=(0,c.Z)(t,2),o=i[0],r=i[1],a=(0,u.useState)(""),d=(0,c.Z)(a,2),s=d[0],p=d[1],f=(0,l.I0)(),b=function(n){"name"===n.currentTarget.name?r(n.currentTarget.value):p(n.currentTarget.value)};return(0,S.jsx)(j,{children:(0,S.jsx)(h.J9,{initialValues:s,onSubmit:function(n,t){(0,t.resetForm)();var i={name:o,number:s};f((0,x.uK)(i)),r(""),p(""),e()},children:(0,S.jsxs)(y,{autoComplete:"off",children:[(0,S.jsx)(v,{onClick:function(){return e()}}),(0,S.jsx)(C,{children:"Add contact form"}),(0,S.jsxs)(k,{children:["Name",(0,S.jsx)(z,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,value:o})]}),(0,S.jsxs)(k,{children:["Number",(0,S.jsx)(z,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"[\\d ()+]*",required:!0,onChange:b,value:s})]}),(0,S.jsx)(M,{type:"submit",children:"Add contact"})]})})})}E.prototype={closeModal:m().func.isRequired};var q,N,A,F,T,I,J,R,_,L,P=E,B=w.Z.label(q||(q=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding-bottom: 15px;\n  width: 200px;\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]))),K=w.Z.h2(N||(N=(0,g.Z)(["\n  color: white;\n  font-size: 20px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 25px;\n  }\n"]))),U=w.Z.input(A||(A=(0,g.Z)(["\n  background-color: #f5f5f53b;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid white;\n  font-size: 18px;\n  color: white;\n  border-radius: 3px;\n"]))),V=t(8268),D=function(){var n=(0,l.I0)();return(0,S.jsxs)(B,{children:[(0,S.jsx)(K,{children:"Find contsct by name"}),(0,S.jsx)(U,{type:"text",onChange:function(e){n((0,V.M6)(e.target.value))}})]})},G=w.Z.ol(F||(F=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  font-size: 20px;\n\n  width: 90%;\n\n  padding: 20px;\n"]))),H=function(n){return n.contacts.items},O=function(n){return n.contacts.isLoading},Q=w.Z.button(T||(T=(0,g.Z)(["\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Caveat', sans-serif;\n  font-size: 20px;\n  line-height: 20px;\n\n  padding: 0 5px 0 5px;\n  margin-bottom: 2px;\n\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  width: 80px;\n  transition-duration: 150ms;\n  transition-property: all;\n\n  &:hover {\n    background-color: #008296;\n    box-shadow: 0 0 10px #008296, 0 0 10px #00b2b2, 0 0 15px #008296;\n    color: white;\n  }\n"]))),W=w.Z.li(I||(I=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n\n  border-bottom: 1px solid #fff;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),X=w.Z.div(J||(J=(0,g.Z)(["\n  display: flex;\n"]))),Y=w.Z.div(R||(R=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),$=w.Z.p(_||(_=(0,g.Z)(["\n  width: 300px;\n  height: 30px;\n  color: white;\n"]))),nn=w.Z.p(L||(L=(0,g.Z)(["\n  color: white;\n"]))),en=function(n){var e=n.selectedContact,t=n.openEditModal,i=(0,l.I0)(),o=(0,l.v9)(H),r=(0,l.v9)(V.o8);return function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){var t=n.name.toUpperCase(),i=e.name.toUpperCase();return t<i?-1:t>i?1:0}))}(o,r).map((function(n){var o=n.id,r=n.name,a=n.number;return(0,S.jsxs)(W,{children:[(0,S.jsxs)(X,{children:[(0,S.jsx)($,{children:r}),(0,S.jsx)(nn,{children:a})]}),(0,S.jsxs)(Y,{children:[(0,S.jsx)(Q,{type:"button",onClick:function(){!function(n,i,o){e({id:n,name:i,number:o}),t()}(o,r,a)},children:"Edit"}),(0,S.jsx)(Q,{type:"button",onClick:function(){i((0,x.GK)(o))},children:"Delete"})]})]},o)}))};en.prototype={selectedContact:m().func.isRequired,showEditModal:m().func.isRequired};var tn,on,rn,an,dn,sn,pn,cn,ln,xn,un,fn=en,hn=w.Z.div(tn||(tn=(0,g.Z)(["\n  position: fixed;\n  inset: 0%;\n  background-color: rgba(44, 39, 50, 0.68);\n  z-index: 1;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),bn=(0,w.Z)(h.l0)(on||(on=(0,g.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  width: 270px;\n\n  background-color: #fffffff2;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),mn=(0,w.Z)(Z.nfZ)(rn||(rn=(0,g.Z)(["\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 22px;\n\n  position: absolute;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n  }\n"]))),gn=w.Z.h2(an||(an=(0,g.Z)(["\n  padding-top: 30px;\n"]))),wn=w.Z.label(dn||(dn=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 5px;\n\n  font-size: 20px;\n  font-weight: 600;\n\n  width: 100%;\n"]))),Zn=(0,w.Z)(h.gN)(sn||(sn=(0,g.Z)(["\n  font-size: 18px;\n  background: #66999963;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #000;\n"]))),jn=w.Z.button(pn||(pn=(0,g.Z)(["\n  background-color: #fff;\n  border: 1px solid #000;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Caveat', sans-serif;\n  font-size: 20px;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  width: 200px;\n  transition-duration: 150ms;\n  transition-property: all;\n\n  &:hover {\n    background-color: #008296;\n    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;\n    color: white;\n    border: 1px solid #d5d9d9;\n  }\n"]))),yn=function(n){var e=n.selectedContact,t=n.closeEditModal,i=(0,u.useState)(e.id),o=(0,c.Z)(i,1)[0],r=(0,u.useState)(e.name),a=(0,c.Z)(r,2),d=a[0],s=a[1],p=(0,u.useState)(e.number),f=(0,c.Z)(p,2),b=f[0],m=f[1],g=(0,l.I0)(),w=function(n){"name"===n.currentTarget.name?s(n.currentTarget.value):m(n.currentTarget.value)};return(0,S.jsx)(hn,{children:(0,S.jsx)(h.J9,{initialValues:b,onSubmit:function(){var n={id:o,name:d,number:b};g((0,x.mP)(n)),t()},children:(0,S.jsxs)(bn,{autoComplete:"off",children:[(0,S.jsx)(mn,{onClick:function(){t()}}),(0,S.jsx)(gn,{children:"Edit contact form"}),(0,S.jsxs)(wn,{children:["Name",(0,S.jsx)(Zn,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:w,value:d})]}),(0,S.jsxs)(wn,{children:["Number",(0,S.jsx)(Zn,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:w,value:b})]}),(0,S.jsx)(jn,{type:"submit",children:"Edit contact"})]})})})},vn=function(){var n=(0,u.useState)(!1),e=(0,c.Z)(n,2),t=e[0],i=e[1],o=(0,u.useState)(null),r=(0,c.Z)(o,2),a=r[0],d=r[1];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(G,{children:(0,S.jsx)(fn,{selectedContact:d,openEditModal:function(){i((function(){return!0}))}})}),t&&(0,S.jsx)(yn,{selectedContact:a,closeEditModal:function(){i((function(){return!1}))}})]})},Cn=w.Z.div(cn||(cn=(0,g.Z)(["\n  width: 300px;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    width: 700px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1100px;\n  }\n"]))),kn=w.Z.button(ln||(ln=(0,g.Z)(["\n  position: absolute;\n  top: 140px;\n  right: 50px;\n  width: 200px;\n  height: 30px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n\n  font-family: 'Caveat', sans-serif;\n  font-size: 20px;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  transition-duration: 150ms;\n  transition-property: all;\n\n  &:hover {\n    background-color: #008296;\n    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;\n    color: white;\n  }\n\n  @media screen and (min-width: 768px) {\n    top: 20px;\n    right: 55px;\n    width: 100px;\n    height: 100px;\n  }\n"]))),zn=w.Z.div(xn||(xn=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding-top: 20px;\n\n  border-radius: 5px;\n\n  box-shadow: rgb(255 255 255) 0px 2px 10px 1px;\n  background-image: linear-gradient(90deg, #0cffff1c, #00152926);\n"]))),Mn=w.Z.div(un||(un=(0,g.Z)(["\n  padding-top: 20px;\n  color: white;\n\n  font-size: 20px;\n  height: 30px;\n"]))),Sn=function(){var n=(0,u.useState)(!1),e=(0,c.Z)(n,2),t=e[0],i=e[1],o=(0,l.I0)(),r=(0,l.v9)(O);(0,u.useEffect)((function(){o((0,x.yF)())}),[o]);return(0,S.jsx)(Cn,{children:(0,S.jsxs)(zn,{children:[(0,S.jsxs)(kn,{onClick:function(){i((function(){return!0}))},children:[(0,S.jsx)(f.J6z,{}),"Add contact"]}),t&&(0,S.jsx)(P,{closeModal:function(){i((function(){return!1}))}}),(0,S.jsx)(D,{}),(0,S.jsx)(Mn,{children:r&&"Request in progress..."}),(0,S.jsx)(vn,{})]})})}}}]);
//# sourceMappingURL=636.2d0f493d.chunk.js.map