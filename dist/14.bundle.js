(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{828:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"contents"},[t("div",{staticClass:"form-wrapper form-wrapper-sm"},[t("form",{staticClass:"form",on:{submit:function(s){return s.preventDefault(),e.submitForm(s)}}},[t("div",[t("label",{attrs:{for:"username"}},[e._v("id:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username",type:"text"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),e._v(" "),t("p",{staticClass:"validation-text"},[!e.isFormValid&&e.username?t("span",{staticClass:"warning"},[e._v("Please enter an email address")]):e._e()])]),e._v(" "),t("div",[t("label",{attrs:{for:"password"}},[e._v("pw:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"text"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),e._v(" "),t("button",{staticClass:"btn disabled",class:e.isFormValid&&e.password?"null":"disabled",attrs:{disabled:!e.isFormValid||!e.password,type:"submit"}},[e._v("\n        로그인\n      ")])]),e._v(" "),t("p",{staticClass:"log"},[e._v(e._s(e.logMessage))])])])};a._withStripped=!0;t(121);function r(e,s,t,a,r,n,i){try{var o=e[n](i),u=o.value}catch(e){return void t(e)}o.done?s(u):Promise.resolve(u).then(a,r)}var n,i,o={data:function(){return{username:"",password:"",logMessage:""}},components:{},computed:{isFormValid:function(){return e=this.username,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());var e}},methods:{submitForm:(n=regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(1),e.prev=1,s={username:this.username,password:this.password},e.next=5,this.$store.dispatch("login/LOGIN",s);case 5:this.initForm(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(2),this.logMessage=e.t0.message,this.initForm();case 13:case"end":return e.stop()}}),e,this,[[1,8]])})),i=function(){var e=this,s=arguments;return new Promise((function(t,a){var i=n.apply(e,s);function o(e){r(i,t,a,o,u,"next",e)}function u(e){r(i,t,a,o,u,"throw",e)}o(void 0)}))},function(){return i.apply(this,arguments)}),initForm:function(){this.username="",this.password="",this.nickname=""}}},u=t(25),l=Object(u.a)(o,a,[],!1,null,null,null);l.options.__file="views/Login.vue";s.default=l.exports}}]);
//# sourceMappingURL=14.bundle.js.map