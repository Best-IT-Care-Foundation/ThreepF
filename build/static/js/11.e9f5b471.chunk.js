(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[11],{40:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),c=a(1);function s(e){var t="/Earn/".concat(e.id),a="/profile/".concat(e.id);return r.a.createElement("div",{className:"dsbrd"},r.a.createElement("div",{className:"links-dsbrd"},r.a.createElement(c.b,{className:"dsLnk",to:a},"Profile"),r.a.createElement(c.b,{className:"dsLnk",to:t},"Earn"),r.a.createElement(c.b,{className:"dsLnk",to:"/Login"},"Logout")))}},86:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(9),r=a(10),c=a(12),s=a(11),i=a(0),o=a.n(i),l=a(40),m=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onupdateform=function(){fetch("http://139.59.81.94:5000/updateEarn/".concat(e.props.match.params.id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({earn:0})})},e.state={earn:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://139.59.81.94:5000/getuserdata/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({earn:t[0].earn})}))}}]),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(l.a,{id:this.props.match.params.id}),o.a.createElement("div",{className:"dsbrd-cntnt"},o.a.createElement("p",{className:"title"},"Earn From Affiliate"),o.a.createElement("p",{className:"title-des"},"Current Balance \u09f3 ",this.state.earn),o.a.createElement("form",null,o.a.createElement("p",{className:"desE"},"minimum Wwithdrawl \u09f3500 || Contact with Support then press Wwithdrawl"),o.a.createElement("input",{onClick:this.onupdateform,type:"submit",className:"withdrawform",value:"Withdraw"}))))}}]),a}(i.Component)}}]);
//# sourceMappingURL=11.e9f5b471.chunk.js.map