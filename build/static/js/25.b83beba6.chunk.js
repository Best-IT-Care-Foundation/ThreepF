(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[25],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(9),o=n(10),r=n(12),s=n(11),i=n(0),l=n.n(i),c=n(1),u=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSubmit=function(){fetch("http://139.59.81.94:5000/CheckVendor",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){e.setState({id:t._id})})).then(setTimeout((function(){e.props.history.push("/vendor/".concat(e.state.id))}),1e3))},e.state={email:"",password:"",id:""},e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-login"},l.a.createElement("p",{className:"title-login"},"Vendor Login"),l.a.createElement("input",{className:"email-input",required:!0,onChange:this.onEmailChange,type:"email",placeholder:"e.g. example@example.com"}),l.a.createElement("input",{className:"password-input",required:!0,minLength:"6",onChange:this.onPasswordChange,type:"password",placeholder:"Enter Your Password Here"}),l.a.createElement("input",{className:"submit-input",onClick:this.onSubmit,value:"Login"}),l.a.createElement(c.b,{className:"undr-form",to:"/Join"},"Create New Vendor Account"))))}}]),n}(i.Component)}}]);
//# sourceMappingURL=25.b83beba6.chunk.js.map