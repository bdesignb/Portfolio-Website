(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{14:function(e,a,t){},50:function(e,a,t){e.exports=t(82)},55:function(e,a,t){},74:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(22),r=t.n(c),s=(t(55),t(40)),i=t(5),m=t(6),o=t(8),d=t(7),u=t(9),E=t(25),p=t(46),v=(t(74),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={photoIndex:0,isOpen:!1,images:t.props.data},t.renderImages=function(){var e=-1;return t.state.images.map((function(a){var n=++e;return l.a.createElement(E.d,{md:"4",key:e},l.a.createElement("figure",null,l.a.createElement("img",{src:a,alt:"Portfolio",className:"img-fluid",onClick:function(){return t.setState({photoIndex:n,isOpen:!0})}})))}))},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.photoIndex,n=a.isOpen,c=a.images;return l.a.createElement(E.e,{className:"section",id:"portfolio"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h4",{className:"text-center"},"Some of"),l.a.createElement("h2",{className:"text-center"},"My Completed Projects")),l.a.createElement("div",{className:"mdb-lightbox"},l.a.createElement(E.i,null,this.renderImages())),n&&l.a.createElement(p.a,{mainSrc:c[t],nextSrc:c[(t+1)%c.length],prevSrc:c[(t+c.length-1)%c.length],imageTitle:t+1+"/"+c.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(t+c.length-1)%c.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(t+1)%c.length})}}))}}]),a}(l.a.Component)),h=(t(14),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).handleType=function(){var e=t.props.dataText,a=t.state,n=a.isDeleting,l=a.loopNum,c=a.text,r=a.typingSpeed,s=e[l%e.length];t.setState({text:n?s.substring(0,c.length-1):s.substring(0,c.length+1),typingSpeed:n?30:150}),n||c!==s?n&&""===c&&t.setState({isDeleting:!1,loopNum:l+1}):setTimeout((function(){return t.setState({isDeleting:!0})}),500),setTimeout(t.handleType,r)},t.state={text:"",isDeleting:!1,loopNum:0,typingSpeed:150},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.heading,l.a.createElement("span",null,this.state.text),l.a.createElement("span",{id:"cursor"}))}}]),a}(n.Component));h.defaultProps={heading:"",dataText:[]};var f=h,g=t(24),N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).toggleNavbar=t.toggleNavbar.bind(Object(g.a)(t)),t.state={isTop:!0,collapsed:!0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){var a=window.scrollY<100;a!==e.state.isTop&&e.setState({isTop:a})}))}},{key:"render",value:function(){var e=this.state.collapsed,a=e?"collapse navbar-collapse":"collapse navbar-collapse show",t=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return l.a.createElement("nav",{className:this.state.isTop?"navbar navbar-expand-md fixed-top top-nav scrolling-navbar indigo":"navbar navbar-expand-md fixed-top top-nav light-header","data-target":".navbar","data-offset":"50"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#home"},l.a.createElement("img",{className:"navbar-brand"})),l.a.createElement("button",{onClick:this.toggleNavbar,className:t,type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"#navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"},l.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}))),l.a.createElement("div",{className:a,id:"navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#service"},"Service")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#portfolio"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#testimonial"},"Testimonials")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact"))))))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"header-content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-left"},l.a.createElement("h4",null,l.a.createElement("span",null,"GRAPHIC DESIGN / "),l.a.createElement("span",null,"WEB DESIGN / "),l.a.createElement("span",null," Development")),l.a.createElement("h2",null,"I AM",l.a.createElement("span",null,l.a.createElement(f,{dataText:[" DESIGNER"," DEVELOPER"," CREATIVE"]})))),l.a.createElement("div",{className:"col-md-12 text-left"},l.a.createElement("a",{className:"btn header_btn",href:"#portfolio"},"Portfolio"),l.a.createElement("a",{className:"btn header_btn",href:"#contact"},"Contact"))))))))}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map((function(e){return l.a.createElement("div",{className:"col-lg-3 col-md-6"},l.a.createElement("div",{className:"text-center service"},l.a.createElement("div",{className:"service-icon mb-4"},l.a.createElement("i",{className:e.className})),l.a.createElement("h4",{className:"mb-3"},e.name),l.a.createElement("p",null,e.description)))}));return l.a.createElement("section",{className:"section",id:"service"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h4",null,"Service I Provide"),l.a.createElement("h2",null,"About Me"))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justy-content-center"},e)))}}]),a}(n.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"facts fixed-bg",id:"facts"},l.a.createElement("div",{className:"overlay black-overlay"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("div",{className:"single-fact"},l.a.createElement("i",{className:"far fa-heart"}),l.a.createElement("h2",null,"400"),l.a.createElement("p",null,"Icon Downloads"))),l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("div",{className:"single-fact"},l.a.createElement("i",{className:"fas fa-pencil-alt"}),l.a.createElement("h2",null,"20"),l.a.createElement("p",null,"Projects Completed"))),l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("div",{className:"single-fact"},l.a.createElement("i",{className:"fas fa-percent"}),l.a.createElement("h2",null,"100%"),l.a.createElement("p",null,"Job Success"))),l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("div",{className:"single-fact"},l.a.createElement("i",{className:"far fa-star"}),l.a.createElement("h2",null,"8"),l.a.createElement("p",null,"Contest Won")))))))}}]),a}(n.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"contact-section",id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"contact-inner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 text-center"},l.a.createElement("h2",null,l.a.createElement("span",null,"CONTACT ME")," FOR MORE INFORMATION"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("form",{action:"mailto:bozana.bundalo@gmail.com"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"ENTER YOUR EMAIL",name:"EMAIL"}),l.a.createElement("textarea",{type:"textarea",className:"form-control",placeholder:"ENTER YOUR MESSAGE",name:"EMAIL"}),l.a.createElement("button",{type:"submit",className:"btn btn-contact"},"SEND MESSAGE"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"single-contact"},l.a.createElement("i",{className:"fas fa-map-marker-alt fa-3x"}),l.a.createElement("h5",null,"Address"),l.a.createElement("p",null,"Novi Sad, Serbia")),l.a.createElement("div",{className:"single-contact"},l.a.createElement("i",{className:"fas fa-phone fa-2x"}),l.a.createElement("h5",null,"Phone"),l.a.createElement("p",null,"(+381) 64 273 xxx")),l.a.createElement("div",{className:"single-contact"},l.a.createElement("i",{className:"fas fa-envelope fa-3x"}),l.a.createElement("h5",null,"Email"),l.a.createElement("p",null,"@gmail.com")))))))}}]),a}(n.Component),x=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",title:e.title},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("div",{className:"inner-footer"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"./img/logo.png",alt:""})),l.a.createElement("p",null,"B.DESIGN ",l.a.createElement("br",null)," Graphic Design / Web Design / Development"),l.a.createElement("ul",null,e)))))),l.a.createElement("div",{className:"footer-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("div",{className:"left-menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#service"},"Service")),l.a.createElement("li",null,l.a.createElement("a",{href:"#portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{href:"#testimonial"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact"))))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"\xa9  2019 POWERED BY B.DESIGN")))))))}}]),a}(n.Component),k=t(18),w=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map((function(e){return l.a.createElement(k.a.Item,null,l.a.createElement("div",{className:"testimonial-caption"},l.a.createElement("div",{className:"testimonial-rating text-warning"}),l.a.createElement("p",null,e.text),l.a.createElement("h4",null,l.a.createElement("a",{href:"#"},e.country))))}));return l.a.createElement("section",{className:"testimonial",id:"testimonial"},l.a.createElement("div",{className:"testimonial-bg fixed-bg"},l.a.createElement("div",{className:"testimonial-overlay"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("div",{className:"testimonial-title"},l.a.createElement("h2",null,"CLIENTS ABOUT ME")),l.a.createElement("div",{id:"testimonial-carosel-1","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#testimonial-carosel-1","data-slide-to":"0"}),l.a.createElement("li",{"data-target":"#testimonial-carosel-1","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#testimonial-carosel-1","data-slide-to":"2"}),l.a.createElement("li",{"data-target":"#testimonial-carosel-1","data-slide-to":"3"})),l.a.createElement(k.a,{controls:!1},e))))))))}}]),a}(n.Component),S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}));return l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h4",null,"\u201dThere are three responses to a piece of design \u2013 yes, no, and wow! Wow is the one to aim for.\u201d"),l.a.createElement("h6",null,"Milton Glaser "),l.a.createElement("p",null,"Work with me! I am creative, persistent person who likes design. I am a detail-oriented, skilled and always trying to use best working practices.")),l.a.createElement("div",{className:"col-md-5 col-md-offset-1"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e))))))}}]),a}(n.Component),C=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-1 col-sm-1"},l.a.createElement("div",{className:"project-text"},l.a.createElement("i",{className:"far fa-heart"}))),l.a.createElement("div",{className:"col-md-6 col-sm-6"},l.a.createElement("h2",null,"If You Like My Work")),l.a.createElement("div",{className:"col-md-5 col-sm-5"},l.a.createElement("div",{className:"h_p_button"},l.a.createElement("a",{href:"#contact",className:"btn btn-project"},"Contact Me"))))))}}]),a}(n.Component),I=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){for(var e=this.props.data,a=[],t=0;t<e.length;t+=4)a.push(l.a.createElement(k.a.Item,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("img",{className:"clients-img",src:e[t].image})),l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("img",{className:"clients-img",src:e[t+1].image})),l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("img",{className:"clients-img",src:e[t+2].image})),l.a.createElement("div",{className:"col-md-3 text-center"},l.a.createElement("img",{className:"clients-img",src:e[t+3].image})))));return l.a.createElement("section",{className:"clients",id:"clients"},l.a.createElement("div",{className:"clients-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h4",null,"CHECK OUT"),l.a.createElement("h2",null,"My Clients")),l.a.createElement("div",{id:"testimonial-carosel-1","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#testimonial-carosel-1","data-slide-to":"0"}),l.a.createElement("li",{"data-target":"#testimonial-carosel-1","data-slide-to":"1"})),l.a.createElement(k.a,null,a)))))))}}]),a}(n.Component),T={skills:[{name:"Illustrator",level:"90%"},{name:"Photoshop",level:"30%"},{name:"CSS",level:"85%"},{name:"HTML5",level:"80%"},{name:"Git",level:"30%"},{name:"SQL",level:"80%"},{name:"ReactJs",level:"30%"}],social:[{name:"linkedin",title:"LinkedIn",url:"https://www.linkedin.com/in/bozana-bundalo",className:"fab fa-linkedin-in"},{name:"github",title:"GitHub",url:"https://github.com/bdesignb",className:"fab fa-github"},{name:"shutterstock",title:"Shutterstock",url:"http://www.shutterstock.com/g/bdesignb",className:"fas fa-expand"}],service:[{name:"Branding",description:"Creating a distinct visual identity for your business",className:"far fa-square"},{name:"Graphic Design",description:"Creating a distinct visual identity for your business",className:"fas fa-expand"},{name:"Web Design",description:"Creating a distinct visual identity for your business",className:"far fa-square"},{name:"Development",description:"Creating a distinct visual identity for your business",className:"fas fa-expand"}],portfolio:["./img/icon-set-3-mockup.png","./img/icon-set-1-mockup.png","./img/icon-set-6-mockup.png","./img/icon-set-5-mockup.png","./img/icon-set-8-mockup.png","./img/icon-set-4-mockup.png"],testimonials:[{text:"Excellent work! She more than exceeded my expectations, the icons that she designed for me are incredible! I would highly recommend to anyone that they work with her.",user:"Two Fish Software",country:"United States",className:"far fa-star"},{text:"Very pleased and will hire again. very knowledgeable and great skill set. Awesome to work with!",country:"United States"},{text:"She provided excellent icons for the job requested. Couldnt ask for a better freelancer.",user:"North Atlantic Industries",country:"United States"},{text:"Quick and reliable. Will hire her again if we will need new pack of icons.",user:"Nevron",country:"Slovenia"}],clients:[{title:"Siemens",image:"./img/siemens-logo.jpg",url:""},{title:"Cesium",image:"./img/cesium-logo.png",url:""},{title:"Nevron",image:"./img/nevron-logo.png",url:""},{title:"Io Geomatics",image:"./img/io-logo.jpg",url:""},{title:"Sokhyte",image:"./img/sokhyte-logo.png",url:""},{title:"Flex",image:"./img/flex-logo.png",url:""},{title:"RightTile",image:"./img/rightp-logo.png",url:""},{title:"North",image:"./img/north-logo.png",url:""}]};function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).state={data:P({},T)},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(O,{data:this.state.data.service}),l.a.createElement(y,null),l.a.createElement(v,{data:this.state.data.portfolio}),l.a.createElement(C,null),l.a.createElement(S,{data:this.state.data.skills}),l.a.createElement(w,{data:this.state.data.testimonials}),l.a.createElement(I,{data:this.state.data.clients}),l.a.createElement(j,null),l.a.createElement(x,{data:this.state.data.social}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.c5c6ca74.chunk.js.map