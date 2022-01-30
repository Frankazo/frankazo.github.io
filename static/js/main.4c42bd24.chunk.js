(this.webpackJsonpfrankfolio=this.webpackJsonpfrankfolio||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),a=n(1),i=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: light)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://frankluisravelo.com",j="FL~R",d="Frank",h="Web Developer",b="I'm a Creative Problem Solver who likes challenges!",m="./frankluisravelo.pdf",u={linkedin:"https://linkedin.com/in/franklr",github:"https://github.com/frankazo"},p=[{name:"Come Criollo",company:"General Assembly",description:"App to help connect people with small businesses in third world countries, You as a User can see restaurants around your area, Like, leave reviews, and connect with them.",stack:["React","Node","Express","MongoDB"],sourceCode:"https://github.com/Frankazo/come-criollo-client",livePreview:"https://frankluisravelo.com/come-criollo-client/#/"},{name:"UI Styles system",company:"Center Centre UIE",description:"Developed a responsive landing page to promote and funnel UX profesionals to events, following design patterns and directions from the UX designers.",stack:["CSS","HTML","Responsive"],sourceCode:"https://github.com/uie-com/css-cc",livePreview:"https://www.centercentre.com/ui/"},{name:"Landing Page",company:"Center Centre UIE",description:"Developed a responsive landing page to promote and funnel UX profesionals to events, following design patterns and directions from the UX designers.",stack:["HTML","CSS","Responsive"],sourceCode:"https://github.com/uie-admin/intensiveAATUR",livePreview:"https://aatur.uie.com/"},{name:"Web App",company:"Just One Penny",description:"Shaped and supported Just One Penny\u2019s app by delivering and documenting reusable components, coded using TypeScript, React, and Node, ensuring cross-browser functionality and responsiveness.",stack:["React","Node","Express","MongoDB"],livePreview:"https://justonepenny.org/"},{name:"Medieval Tactics",company:"Hackathon",description:'This is a "game" developed over a weekend Hackathon, in a team of 3, the goal was to implement socket.io to create the game.',stack:["React","Node","Express","Socket.io"],sourceCode:"https://github.com/Frankazo/medieval-tactics-client",livePreview:"https://frankluisravelo.com/medieval-tactics-client/#/"},{name:"InvApp",company:"General Assembly",description:"A visual workspace that allows you to create, and edit visual tables.",stack:["JS","HTML/CSS","Ruby on Rails","PostgreSQL"],sourceCode:"https://github.com/Frankazo/inventory-app",livePreview:"https://frankazo.github.io/inventory-app/"}],k=["HTML","CSS","JavaScript","React","Redux","Node","Express","Git","PHP","MongoDB","MAMP"],O="frankluisravlo@mail.com",v=n(15),x=n.n(v),f=n(13),g=n.n(f),N=n(17),_=n.n(N),w=n(16),y=n.n(w),C=(n(27),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),o=Object(s.a)(r,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,k.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,O?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/franklr",onClick:h,className:"link link--nav",target:"_blank",children:"Let's Connect"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(g.a,{}):Object(i.jsx)(x.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(y.a,{}):Object(i.jsx)(_.a,{})})]})}),S=(n(31),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),P=n(11),R=n.n(P),L=n(18),M=n.n(L),A=(n(32),function(){var e=d,t=h,n=b,c=m,s=u;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,target:"_blank",children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",target:"_blank",children:Object(i.jsx)(R.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",children:Object(i.jsx)(M.a,{})})]})]})]})}),E=n(7),T=n.n(E),U=n(19),H=n.n(U),I=(n(34),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"company",children:t.company}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",children:Object(i.jsx)(R.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",children:Object(i.jsx)(H.a,{})})]})}),z=(n(35),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(I,{project:e},T()())}))})]}):null}),D=(n(36),function(){return k.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:k.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),F=(n(37),function(){return O?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(O),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),J=(n(38),function(){return Object(i.jsxs)("footer",{className:"footer",children:[Object(i.jsx)("a",{href:"https://github.com/frankazo",className:"link footer__link",target:"_blank",children:"Github"}),Object(i.jsx)("a",{href:"https://linkedin.com/in/franklr",className:"link footer__link",target:"_blank",children:"Linkedin"})]})}),B=(n(39),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(S,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(A,{}),Object(i.jsx)(z,{}),Object(i.jsx)(D,{}),Object(i.jsx)(F,{})]}),Object(i.jsx)(J,{})]})});n(40);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(B,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4c42bd24.chunk.js.map