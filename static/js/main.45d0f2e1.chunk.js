(this.webpackJsonpReact_Portfolio=this.webpackJsonpReact_Portfolio||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":1,"name":"Tech Estore","image":"https://github.com/poly-singh/Professional_Portfolio/raw/master/assets/Images/TechEstore.png","github":"https://github.com/MonsAltus/Tech-EStore ","deploy":"https://lit-crag-72234.herokuapp.com/ ","topics":"JavaScript, Node.js, MySQL2, Express, Handlebars, Sequelize, Dotenv, and Bulma"},{"id":2,"name":"Word Party","image":"https://github.com/poly-singh/Professional_Portfolio/raw/master/assets/Images/word_party.png ","github":"https://github.com/ericrudeen/word-party","deploy":"https://ericrudeen.github.io/word-party/","topics":"Javascript, API, HTML,Tailwind CSS"},{"id":3,"name":"Code Quiz","image":"https://github.com/poly-singh/Professional_Portfolio/raw/master/assets/Images/code-quiz_mainpage.png ","github":" https://github.com/poly-singh/Code_quiz_homework","deploy":"https://poly-singh.github.io/Code_quiz_homework/","topics":"HTML,CSS,Javascript,Local Storage"},{"id":4,"name":"Weather Dashboard","image":"https://github.com/poly-singh/Professional_Portfolio/raw/master/assets/Images/weatherDashboard.png ","github":"https://github.com/poly-singh/weatherDashboard","deploy":"https://poly-singh.github.io/weatherDashboard/","topics":"moment.js, javascript, jQuery, localStorage, API"}]')},36:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);s(31);var c=s(0),i=s.n(c),n=s(11),a=s.n(n),r=(s(36),s(22)),o=s(23),l=s(29),j=s(28),d=s(9),h=s(4),b=s(47),m=s(1);var p=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(b.a,{expand:"lg",bg:"dark",sticky:"top",children:[Object(m.jsx)(d.b,{className:"nav-link",to:"/",children:Object(m.jsx)("div",{class:"text-light",children:Object(m.jsx)("h4",{class:"nav-title-font",children:"Poly Singh"})})}),Object(m.jsxs)("ul",{class:"navbar-nav ml-auto navitem-indent",children:[Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/about",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"About Me"})})}),Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/portfolio",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"Portfolio"})})}),Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/contact",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"Contact"})})}),Object(m.jsx)("li",{class:"nav-item",children:Object(m.jsx)(d.b,{to:"/resume",children:Object(m.jsx)("div",{class:"nav-font text-light",children:"Resume"})})})]})]})})};var u=function(){return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsx)("h2",{class:"top-title",children:"Poly Singh"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{class:"mb-5",id:"avatar",src:"../../../public/assets/image_hs.jpg",alt:"Poly Singh"}),Object(m.jsx)("p",{children:"Full-Stack web developer with previous experience in Build and Release Engineering excited to build more intuitive and user-friendly websites."}),Object(m.jsx)("p",{children:"Earned certificate in Full-stack development from UCSD, with newly developed skills in HTML, JavaScript, CSS. Hardworking and goal-oriented professional with a passion for developing innovative and user-friendly Applications."})]})]})};s(15);var x=function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{alt:e.name,src:e.image})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("p",{className:"card-title",children:e.name}),Object(m.jsxs)("p",{class:"proj-icons-container",children:[Object(m.jsx)("a",{href:e.github,children:Object(m.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"GitHub Repo"})}),Object(m.jsx)("a",{href:e.deploy,children:Object(m.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/ios/50/000000/apple-app-store--v2.png",alt:"Live Application"})})]}),Object(m.jsxs)("p",{class:"topics",children:["(",e.topics,")"]})]})]})},g=s(27);function O(e){return Object(m.jsx)("div",{className:"wrapper",children:e.children})}var v=function(){return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsxs)("div",{className:"project",children:[Object(m.jsx)("h2",{className:"top-title",children:"Bootcamp Portfolio"}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(O,{id:"card-data",children:g.map((function(e){return Object(m.jsx)(x,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})},f=s(12),y=s(19),w=s(20);var S=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(w.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(""),a=Object(w.a)(n,2),r=a[0],o=a[1],l=s.name,j=s.email,d=s.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"please enter a valid email")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));r||i(Object(y.a)(Object(y.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(m.jsxs)("section",{className:"container",children:[Object(m.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Contact Form"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:l,onBlur:h})]}),Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(m.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:j,onBlur:h})]}),Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(m.jsx)("textarea",{class:"form-control",name:"message",defaultValue:d,onBlur:h,rows:"7"})]}),r&&Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"error-text",children:r})}),Object(m.jsx)("div",{class:"mt-5 mb-5",children:Object(m.jsx)("button",{"data-testid":"button",class:"btn btn-outline-dark ",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};var N=function(){return Object(m.jsxs)("section",{class:"container",children:[Object(m.jsx)("h2",{className:"top-title",children:"Resume"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{class:"mt-5",children:[Object(m.jsx)("h2",{className:"top-title",children:"Poly Singh"}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:"Full-Stack web developer with previous experience in Build and Release Engineering excited to build more intuitive and user-friendly websites."})}),Object(m.jsx)("p",{class:"mt-5",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/poly-singh/ ",children:Object(m.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn"})})}),Object(m.jsx)("a",{href:"../../../assets/Poly_Singh_Resume.docx",class:"link",children:"Download Resume"})]})}),Object(m.jsx)("div",{class:"justify-content-center mt-5",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"top-title",children:"Proficiencies"}),Object(m.jsx)("ul",{children:Object(m.jsxs)("li",{children:["HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,",Object(m.jsx)("br",{}),"Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs"]})})]})})]})},P=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(d.a,{children:[Object(m.jsx)("header",{children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(h.a,{to:"/about"})}}),Object(m.jsx)(h.b,{path:"/about",component:u}),Object(m.jsx)(h.b,{path:"/portfolio",component:v}),Object(m.jsx)(h.b,{path:"/contact",component:S}),Object(m.jsx)(h.b,{path:"/resume",component:N})]})]})}}]),s}(c.Component);var k=function(){return Object(m.jsxs)("footer",{className:"footer bg-dark fixed-bottom",children:[Object(m.jsx)("a",{href:"https://github.com/poly-singh",children:Object(m.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/poly-singh/",children:Object(m.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})})]})};s(43);var C=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(P,{}),Object(m.jsx)(k,{})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),_()}},[[44,1,2]]]);
//# sourceMappingURL=main.45d0f2e1.chunk.js.map