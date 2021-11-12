(this.webpackJsonpdietmaster=this.webpackJsonpdietmaster||[]).push([[0],{35:function(e,n,t){"use strict";t.r(n);var i,c,r,a,s,o,l,d,u,j,b,h,x,p,m,f,g,O,v,y,w,k=t(2),F=t.n(k),C=t(19),S=t.n(C),N=t(9),M=t(3),z=t(4),P=t(5),B=Object(z.b)(i||(i=Object(P.a)(["\n  html {\n    box-sizing: border-box;\n  }\n  \n  *, *::after, *::before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    margin: 0;\n    padding: 0;\n    overflow-y: hidden;\n  }\n  \n  a, button {\n    font-family: 'Montserrat', sans-serif;\n  }\n"]))),R={colors:{white:"#FFFFFF",black:"#111111",lightBlack:"#343434",grey1:"#E5E5E5",grey2:"#C1C1C1",grey3:"#9D9D9D",grey4:"#505050",blue1:"#50D4FF",blue2:"#16C6FF",blue3:"#00BEFC",blue4:"#00A3D9",red:"#FF4343"},fontSizes:{xxl:"34px",xl:"24px",l:"17px",m:"12px",s:"11px"}},I=z.c.div(c||(c=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n"]))),L=t(7),D=t(1),E=z.c.button(r||(r=Object(P.a)(["\n  cursor: pointer;\n  margin-left: ",";\n  padding: ",";\n  background-color: ",";\n  border-radius: ",";\n  border: none;\n  font-size: ",";\n  color: ",";\n\n  &:hover {\n    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n  }\n"])),(function(e){var n=e.marginLeft;return n||"none"}),(function(e){var n=e.padding;return n||"8px 20px"}),(function(e){var n=e.backgroundColor,t=e.theme.colors;return n||t.blue3}),(function(e){var n=e.borderRadius;return n||"6px"}),(function(e){var n=e.fontSize,t=e.theme.fontSizes;return n||t.l}),(function(e){return e.theme.colors.white})),A=function(e){var n=Object.assign({},e);return Object(D.jsx)(E,Object(L.a)(Object(L.a)({},n),{},{children:n.children}))},T=t(13),H=t(8),V=[{id:0x94d7ebcc7ba0,name:"Nathan",surname:"Wood",age:"29",sex:"Male",email:"nathan@nathan.com",telephone:"983 634 821",bodymass:"84",height:"188",notes:"Too fat",activity:"1.3"},{id:0xee264d23167,name:"Ffion",surname:"Russell",age:"36",sex:"Female",email:"ffion@ffion.com",telephone:"834 683 460",bodymass:"60",height:"170",notes:"Too skinny",activity:"2.1"},{id:1636552953391,name:"Kane",surname:"Sandoval",age:"18",sex:"Male",email:"kane@kane.com",telephone:"531 361 765",bodymass:"96",height:"194",notes:"Too fat",activity:"1.9"},{id:1636551908165,name:"Lara",surname:"Hughes",age:"41",sex:"Female",email:"lara@lara.com",telephone:"734 643 233",bodymass:"71",height:"168",notes:"Too skinny",activity:"1.6"}],W={id:0,name:"",surname:"",age:"",sex:"Male",email:"",telephone:"",bodymass:"",height:"",notes:"",activity:"1.2"},K=Object(k.createContext)({patientsList:V,deletePatient:function(){},managePatient:function(){},setPatient:function(){},setPatientsList:function(){},sortPatientsList:function(){},searchByInputValue:function(){},calculateBMI:function(){return""},BMIdescription:function(){return""},calculateRisk:function(){return""},calculateIdealWeight:function(){return""},patient:W}),J=function(e){var n=e.children,t=Object(k.useState)(V),i=Object(H.a)(t,2),c=i[0],r=i[1],a=Object(k.useState)(W),s=Object(H.a)(a,2),o=s[0],l=s[1];return Object(D.jsx)(K.Provider,{value:{managePatient:function(e){var n=c.filter((function(n){return n.id===e}));l(n[0])},deletePatient:function(e){var n=c.filter((function(n){return n.id!==e}));r(n)},setPatientsList:r,patientsList:c,patient:o,setPatient:l,sortPatientsList:function(e){var n=V;"female"===e?n=c.sort((function(e,n){return e.sex>n.sex?1:n.sex>e.sex?-1:0})):"male"===e?n=c.sort((function(e,n){return e.sex>n.sex?-1:n.sex>e.sex?1:0})):"off"===e&&(n=c.sort((function(e,n){return e.id>n.id?-1:n.id>e.id?1:0}))),r(Object(T.a)(n))},searchByInputValue:function(e){var n=c.filter((function(n){return n.name.includes(e)||n.surname.includes(e)}));r(n)},calculateBMI:function(){var e=Number(o.height)/100;return(Number(o.bodymass)/Math.pow(e,2)).toFixed(2).toString()},BMIdescription:function(){var e=Number(o.height)/100,n=Number((Number(o.bodymass)/Math.pow(e,2)).toFixed(2));return n<25&&n>18.5?"Normal":n>=25?"Obesity":n<=18.5?"Underweight":"OK"},calculateRisk:function(){var e=Number(o.height)/100,n=Number((Number(o.bodymass)/Math.pow(e,2)).toFixed(2));return n<25&&n>18.5?"Lowest":n>=25&&n<=35?"High":n>=35?"Very high":n<=18.5?"High":"OK"},calculateIdealWeight:function(){var e=Number(o.height),n="",t="";return"Male"===o.sex?(n=(e-100-(e-138)/4).toString(),t=(e-100-(e-162)/4).toString()):(n=(e-100-(e-138)/2).toString(),t=(e-100-(e-162)/2).toString()),"".concat(n," - ").concat(t," kg")}},children:n})},U=z.c.div(a||(a=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 60px;\n  background-color: ",";\n  padding: 0 20px 2px;\n\n  p {\n    font-size: 0.7rem;\n    color: ",";\n  }\n\n  .filterSex {\n    display: flex;\n    flex-direction: column;\n\n    .buttons {\n      display: flex;\n      gap: 2px;\n    }\n  }\n"])),(function(e){return e.theme.colors.grey4}),(function(e){return e.theme.colors.white})),q=function(){var e=Object(k.useContext)(K).sortPatientsList;return Object(D.jsx)(U,{children:Object(D.jsxs)("div",{className:"filterSex",children:[Object(D.jsx)("p",{children:"Sort"}),Object(D.jsxs)("div",{className:"buttons",children:[Object(D.jsx)(A,{onClick:function(){return e("off")},padding:"6px 20px",borderRadius:"6px 0 0 6px",children:"off"}),Object(D.jsx)(A,{onClick:function(){return e("female")},padding:"6px 20px",borderRadius:"0",children:"female"}),Object(D.jsx)(A,{onClick:function(){return e("male")},padding:"6px 20px",borderRadius:"0 6px 6px 0",children:"male"})]})]})})},G=z.c.li(s||(s=Object(P.a)(["\n  display: grid;\n  grid-template-columns: 5% 20% 20% 10% 15% 30%;\n  align-items: center;\n  gap: 2px;\n  width: 100%;\n  height: 50px;\n  background-color: ",";\n  padding: 5px;\n  color: ",";\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 1px;\n  }\n  .buttons {\n    grid-column: 6/7;\n    display: flex;\n    align-content: center;\n    justify-content: space-evenly;\n    height: 100%;\n  }\n"])),(function(e){return e.theme.colors.grey1}),(function(e){return e.theme.colors.black})),Q=function(e){var n=e.name,t=e.surname,i=e.age,c=e.id,r=e.index,a=Object(k.useContext)(K),s=a.deletePatient,o=a.managePatient,l=Object(M.f)();return Object(D.jsxs)(G,{children:[Object(D.jsx)("div",{children:r+1}),Object(D.jsx)("div",{children:n}),Object(D.jsx)("div",{children:t}),Object(D.jsx)("div",{children:i}),Object(D.jsxs)("div",{className:"buttons",children:[Object(D.jsx)(A,{onClick:function(){return function(e){o(e),l("/patient/about/".concat(e))}(c)},children:"Manage"}),Object(D.jsx)(A,{backgroundColor:"#FF4343",onClick:function(){return s(c)},children:"Delete"})]})]})},X=z.c.input(o||(o=Object(P.a)(["\n  padding: 8px;\n  border: 1px solid ",";\n  border-radius: 6px;\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.colors.grey4}),(function(e){return e.theme.colors.white})),Y=function(e){var n=Object.assign({},e);return Object(D.jsx)(X,Object(L.a)({},n))},Z=z.c.div(l||(l=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 60px;\n  padding: 10px;\n  background-color: ",";\n\n  h2 {\n    color: ",";\n    font-weight: 400;\n    font-size: 1rem;\n  }\n"])),(function(e){return e.theme.colors.lightBlack}),(function(e){return e.theme.colors.white})),$=function(){var e=Object(k.useContext)(K),n=e.searchByInputValue,t=e.setPatient,i=e.patient,c=Object(M.f)();return Object(D.jsxs)(Z,{children:[Object(D.jsx)("div",{children:Object(D.jsx)("h2",{children:"Patients record"})}),Object(D.jsx)(Y,{placeholder:"Search patient",onChange:function(e){var t;n((t=e.currentTarget.value).charAt(0).toUpperCase()+t.slice(1))}}),Object(D.jsx)(A,{onClick:function(){t({id:(new Date).getTime(),name:"",surname:"",age:"",sex:"Male",email:"",telephone:"",bodymass:"",height:"",notes:"",activity:"1.2"}),c("/patient/about/".concat(i.id))},children:"New patient"}),Object(D.jsx)(A,{backgroundColor:"#505050",marginLeft:"auto",children:"Log Out"})]})},_=z.c.ul(d||(d=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 2px;\n  width: 100%;\n  margin: 60px 0;\n  list-style: none;\n  color: ",";\n"])),(function(e){return e.theme.colors.black})),ee=function(){var e=Object(k.useContext)(K).patientsList;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($,{}),Object(D.jsx)(q,{}),Object(D.jsx)(_,{children:e.map((function(e,n){return Object(D.jsx)(Q,Object(L.a)({index:n},e),e.id)}))})]})},ne=Object(z.c)(N.b)(u||(u=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  height: 30px;\n  cursor: pointer;\n  background-color: ",";\n  border: none;\n  font-size: ",";\n  color: ",";\n  text-decoration: none;\n\n  &:hover {\n    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\n  }\n\n  &.active {\n    background-color: ",";\n  }\n"])),(function(e){var n=e.color,t=e.theme.colors;return n||t.grey4}),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.blue3})),te=function(e){var n=e.children,t=e.to;return Object(D.jsx)(ne,{to:t,children:n})},ie=t(17),ce=t(23),re=t(24),ae=t(25),se=z.c.div(j||(j=Object(P.a)(["\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(5, 1fr);\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.red})),oe=function(){var e=Object(k.useContext)(K).patient;return Object(D.jsxs)(se,{children:[Object(D.jsxs)(te,{to:"/patient/about/".concat(e.id),children:[Object(D.jsx)(ie.b,{}),"About"]}),Object(D.jsxs)(te,{to:"/patient/diet/".concat(e.id),children:[Object(D.jsx)(ce.a,{}),"Diet"]}),Object(D.jsxs)(te,{to:"/patient/allergens/".concat(e.id),children:[Object(D.jsx)(ie.a,{}),"Allergens"]}),Object(D.jsxs)(te,{to:"/patient/blood-tests/".concat(e.id),children:[Object(D.jsx)(re.a,{}),"Blood tests"]}),Object(D.jsxs)(te,{to:"/patient/appointments/".concat(e.id),children:[Object(D.jsx)(ae.a,{}),"Appointments"]})]})},le=z.c.div(b||(b=Object(P.a)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: flex-end;\n  height: 35px;\n  padding: 0 30px;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.blue3})),de=function(){var e=Object(M.g)().id,n=Object(M.f)(),t=Object(k.useContext)(K),i=t.patientsList,c=t.setPatientsList,r=t.patient,a=t.setPatient;return Object(D.jsxs)(le,{children:[Object(D.jsx)(A,{onClick:function(){if(e){var t=i.filter((function(n){return n.id!==Number(e)}));c([r].concat(Object(T.a)(t))),a(W),n("/")}},backgroundColor:"#00A3D9",padding:"6px 18px",fontSize:"12px",children:"Save changes"}),Object(D.jsx)(A,{onClick:function(){n("/")},backgroundColor:"#505050",padding:"6px 28px",fontSize:"12px",children:"Discard / Exit"})]})},ue=z.c.div(h||(h=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1100px;\n  min-width: 600px;\n  margin: 0 auto;\n  color: ",";\n"])),(function(e){return e.theme.colors.black})),je=z.c.div(x||(x=Object(P.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.grey3})),be=function(e){var n=e.children;return Object(D.jsx)(je,{children:n})},he=z.c.div(p||(p=Object(P.a)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  width: 100%;\n  height: 100px;\n  padding: 20px 20px 20px 5px;\n  background-color: ",";\n  color: ",";\n\n  .text {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n"])),(function(e){return e.theme.colors.grey4}),(function(e){return e.theme.colors.white})),xe=z.c.div(m||(m=Object(P.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr 2fr;\n  gap: 10px;\n"]))),pe=z.c.div(f||(f=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  p {\n    font-size: 0.8rem;\n  }\n"]))),me=function(){var e=Object(k.useContext)(K),n=e.BMIdescription,t=e.calculateBMI,i=e.calculateRisk,c=e.patient,r=e.calculateIdealWeight;return Object(D.jsxs)(he,{children:[Object(D.jsx)("div",{className:"text",children:"Body weight assessment"}),Object(D.jsxs)(xe,{children:[Object(D.jsxs)(pe,{children:[Object(D.jsx)("p",{children:"BMI"}),Object(D.jsx)(be,{children:c.bodymass&&c.height?t():""})]}),Object(D.jsxs)(pe,{children:[Object(D.jsx)("p",{children:"Description"}),Object(D.jsx)(be,{children:c.bodymass&&c.height?n():""})]}),Object(D.jsxs)(pe,{children:[Object(D.jsx)("p",{children:"Risk of cardiovascular disease"}),Object(D.jsx)(be,{children:c.bodymass&&c.height?i():""})]}),Object(D.jsxs)(pe,{children:[Object(D.jsx)("p",{children:"Ideal body weight"}),Object(D.jsx)(be,{children:c.bodymass&&c.height?r():""})]})]})]})},fe=t(12),ge=z.c.div(g||(g=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  .sex {\n    font-size: 0.8rem;\n    padding: 5px 0;\n  }\n  div {\n    display: flex;\n    width: 100%;\n    height: 35px;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 5%;\n\n    label {\n      input {\n        margin: 0 5px;\n      }\n    }\n  }\n"]))),Oe=function(){return Object(D.jsxs)(ge,{children:[Object(D.jsx)("label",{className:"sex",children:"Sex"}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("label",{children:[Object(D.jsx)("input",{type:"radio",name:"sex",value:"Male"}),"Male"]}),Object(D.jsxs)("label",{children:[Object(D.jsx)("input",{type:"radio",name:"sex",value:"Female"}),"Female"]})]})]})},ve=z.c.form(O||(O=Object(P.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  align-items: center;\n  gap: 10px;\n  padding: 15px;\n  width: 100%;\n  height: calc(100vh - 165px);\n  background-color: ",";\n\n  div:nth-child(1) {\n    grid-area: 1/1/2/3;\n  }\n  div:nth-child(2) {\n    grid-area: 1/3/2/5;\n  }\n  div:nth-child(3) {\n    grid-area: 1/5/2/6;\n  }\n  div:nth-child(4) {\n    grid-area: 1/6/2/7;\n  }\n  div:nth-child(5) {\n    grid-area: 2/1/3/2;\n  }\n  div:nth-child(6) {\n    grid-area: 2/2/3/3;\n  }\n  div:nth-child(7) {\n    grid-area: 2/3/3/5;\n  }\n  div:nth-child(8) {\n    grid-area: 2/5/3/7;\n  }\n"])),(function(e){return e.theme.colors.grey1})),ye=z.c.div(v||(v=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n\n  label {\n    font-size: 0.8rem;\n    padding: 5px 0;\n  }\n\n  input {\n    width: 100%;\n    height: 35px;\n    border: none;\n    border-radius: 6px;\n    background-color: ",";\n    padding: 0 10px;\n  }\n"])),(function(e){return e.theme.colors.white})),we=z.c.div(y||(y=Object(P.a)(["\n  width: 100%;\n  grid-area: 3/1/4/5;\n\n  label {\n    font-size: 0.8rem;\n    padding: 5px 0;\n  }\n  textarea {\n    width: 100%;\n    border: none;\n    border-radius: 6px;\n    background-color: ",";\n    padding: 10px;\n    height: 100px;\n    font-family: 'Montserrat', sans-serif;\n  }\n"])),(function(e){return e.theme.colors.white})),ke=z.c.div(w||(w=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  grid-area: 4/1/5/7;\n\n  p {\n    font-size: 0.8rem;\n    padding: 5px 0;\n  }\n  input {\n    width: 100%;\n  }\n  .minmax {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n  }\n"]))),Fe=function(){var e=Object(M.g)().id,n=Object(k.useContext)(K),t=n.patient,i=n.setPatient,c=Object(k.useRef)(null),r=Object(k.useRef)(null),a=Object(k.useRef)(null),s=Object(k.useRef)(null),o=Object(k.useRef)(null),l=Object(k.useRef)(null),d=Object(k.useRef)(null),u=Object(k.useRef)(null),j=Object(k.useRef)(null);Object(k.useEffect)((function(){e&&(c.current&&(c.current.value=t.name),r.current&&(r.current.value=t.surname),a.current&&(a.current.value=t.age),s.current&&(s.current.value=t.telephone),o.current&&(o.current.value=t.email),l.current&&(l.current.value=t.bodymass),d.current&&(d.current.value=t.height),u.current&&(u.current.value=t.notes),j.current&&(j.current.value=t.activity))}),[]);return Object(D.jsxs)(ve,{onChange:function(e){i(Object(L.a)(Object(L.a)({},t),{},Object(fe.a)({},e.target.name,e.target.value)))},children:[Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(D.jsx)("input",{ref:c,id:"name",name:"name",type:"text"})]}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"Surname",children:"Surname"}),Object(D.jsx)("input",{ref:r,id:"surname",name:"surname",type:"text"})]}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"Age",children:"Age"}),Object(D.jsx)("input",{ref:a,id:"age",name:"age",type:"number"})]}),Object(D.jsx)(Oe,{}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"Body mass (kg)",children:"Body mass (kg)"}),Object(D.jsx)("input",{ref:l,id:"bodymass",name:"bodymass",type:"number"})]}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"Height (cm)",children:"Height (cm)"}),Object(D.jsx)("input",{ref:d,id:"height",name:"height",type:"number"})]}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"Telephone",children:"Telephone"}),Object(D.jsx)("input",{ref:s,id:"telephone",name:"telephone",type:"tel"})]}),Object(D.jsxs)(ye,{children:[Object(D.jsx)("label",{htmlFor:"E-mail",children:"E-mail"}),Object(D.jsx)("input",{ref:o,id:"email",name:"email",type:"email"})]}),Object(D.jsxs)(we,{children:[Object(D.jsx)("label",{htmlFor:"Notes",children:"Notes"}),Object(D.jsx)("textarea",{ref:u,id:"notes",name:"notes"})]}),Object(D.jsxs)(ke,{children:[Object(D.jsx)("p",{children:"Physical activity"}),Object(D.jsx)("input",{ref:j,id:"activity",name:"activity",type:"range",min:"1.2",max:"2.4",step:"0.1"}),Object(D.jsxs)("div",{className:"minmax",children:[Object(D.jsx)("p",{children:"1.2"}),Object(D.jsx)("p",{children:"2.4"})]})]})]})},Ce=function(){return Object(D.jsxs)(ue,{children:[Object(D.jsx)(de,{}),Object(D.jsx)(oe,{}),Object(D.jsx)(Fe,{}),Object(D.jsx)(me,{})]})},Se=function(){return Object(D.jsxs)(ue,{children:[Object(D.jsx)(de,{}),Object(D.jsx)(oe,{})]})},Ne=function(){return Object(D.jsx)(N.a,{children:Object(D.jsxs)(z.a,{theme:R,children:[Object(D.jsx)(B,{}),Object(D.jsx)(M.c,{children:Object(D.jsxs)(I,{children:[Object(D.jsx)(M.a,{path:"/patient/appointments/:id",element:Object(D.jsx)(Se,{})}),Object(D.jsx)(M.a,{path:"/patient/blood-tests/:id",element:Object(D.jsx)(Se,{})}),Object(D.jsx)(M.a,{path:"/patient/allergens/:id",element:Object(D.jsx)(Se,{})}),Object(D.jsx)(M.a,{path:"/patient/diet/:id",element:Object(D.jsx)(Se,{})}),Object(D.jsx)(M.a,{path:"/patient/about/:id",element:Object(D.jsx)(Ce,{})}),Object(D.jsx)(M.a,{path:"/",element:Object(D.jsx)(ee,{})})]})})]})})};S.a.render(Object(D.jsx)(F.a.StrictMode,{children:Object(D.jsx)(J,{children:Object(D.jsx)(Ne,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.019bcd41.chunk.js.map