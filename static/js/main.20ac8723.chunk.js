(this.webpackJsonphw3=this.webpackJsonphw3||[]).push([[0],{1:function(e,t,n){e.exports={form:"Form_form__1TMK-",label:"Form_label__3p9Sl",inputWrapper:"Form_inputWrapper__kU1aN",buttonForm:"Form_buttonForm__3zKDx",input:"Form_input__1Xltc"}},11:function(e,t,n){e.exports={input:"Filter_input__3KEU_"}},14:function(e,t,n){e.exports=n(20)},2:function(e,t,n){e.exports={wrapper:"App_wrapper__1rLS7",contents:"App_contents__1QEj0",container:"App_container__2sWpK"}},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=n(12),i=n(3),u=n(4),m=n(6),s=n(5),p=n(10),f=n(1),h=n.n(f),v=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:h.a.form},r.a.createElement("div",{className:h.a.inputWrapper},r.a.createElement("label",{htmlFor:this.inputId,className:h.a.label},"Name",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:h.a.input})),r.a.createElement("label",{htmlFor:this.numberId},"Number",r.a.createElement("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,className:h.a.input}))),r.a.createElement("button",{type:"submit",className:h.a.buttonForm},"add contact"))}}]),n}(a.Component),d=n(7),b=n.n(d),E=n(13),_=function(e){var t=e.children,n=e.onClick,a=Object(E.a)(e,["children","onClick"]);return r.a.createElement("button",Object.assign({type:"button",onClick:n},a),t)};_.defaultProps={onClick:function(){return null},children:null};var g=_;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createElement("g",{id:"trash"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001 c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17 c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10 c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002 c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9 c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2 c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2 c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z"})),j=function(e){var t=e.svgRef,n=e.title,a=y(e,["svgRef","title"]);return r.a.createElement("svg",C({id:"Layer_1",x:"0px",y:"0px",width:"13px",height:"13px",viewBox:"0 0 32 32",ref:t},a),n?r.a.createElement("title",null,n):null,O)},S=r.a.forwardRef((function(e,t){return r.a.createElement(j,C({svgRef:t},e))})),w=(n.p,function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{className:b.a.item,key:t},a,": ",c,r.a.createElement(g,{className:b.a.button,type:"button",onClick:function(){return n(t)}},r.a.createElement(S,null)))})))}),x=function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement("ul",null,r.a.createElement(w,{contacts:t,onDeleteContact:n}))},F=(n(19),n(11)),N=n.n(F),k=function(e){var t=e.value,n=e.contacts,a=e.onChange;return n.length>2&&r.a.createElement("label",null,"Contact Filter",r.a.createElement("input",{className:N.a.input,type:"text",value:t,onChange:a}))},M=n(2),R=n.n(M),H=n(22),z=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){e.notifyExistingName(t)},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.notifyExistingName=function(t){var n={id:Object(H.a)(),name:t.name,number:t.number};e.state.contacts.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):e.setState({contacts:[].concat(Object(o.a)(e.state.contacts),[n])})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase(),c=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:R.a.container},r.a.createElement("h1",{className:R.a.contents},"Phonebook"),r.a.createElement("div",{className:R.a.wrapper},r.a.createElement(v,{onSubmit:this.formSubmitHandler}),r.a.createElement(k,{contacts:t,value:n,onChange:this.changeFilter})),r.a.createElement("h2",{className:R.a.contents},"Contacts"),r.a.createElement(x,{contacts:c,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);z.defaultProps={filter:""};var V=z;l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={button:"ContactListItem_button__1SA4D",item:"ContactListItem_item__Mwn3L"}}},[[14,1,2]]]);
//# sourceMappingURL=main.20ac8723.chunk.js.map