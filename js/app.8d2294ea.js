(function(e){function s(s){for(var a,n,r=s[0],o=s[1],c=s[2],d=0,h=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(s);while(h.length)h.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,s=0;s<l.length;s++){for(var t=l[s],a=!0,r=1;r<t.length;r++){var o=t[r];0!==i[o]&&(a=!1)}a&&(l.splice(s--,1),e=n(n.s=t[0]))}return e}var a={},i={app:0},l=[];function n(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)n.d(t,a,function(s){return e[s]}.bind(null,a));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="/lace-tool-website/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var u=o;l.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0db4":function(e,s,t){},2852:function(e,s,t){"use strict";var a=t("0db4"),i=t.n(a);i.a},3975:function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("HelloWorld")],1),t("Bodypart")],1)},l=[],n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",[t("h1",{attrs:{id:"h1"}},[e._v("Lace Tool")])])},r=[],o={name:"HelloWorld",data:function(){return{}}},c=o,u=(t("2852"),t("2877")),d=t("6544"),h=t.n(d),v=t("a523"),m=Object(u["a"])(c,n,r,!1,null,"3283eae0",null),p=m.exports;h()(m,{VContainer:v["a"]});var f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"body mt-16"},[t("v-container",[t("v-row",{attrs:{app:""}},[t("v-col",{attrs:{cols:"5"}},[t("h3",{staticClass:"my-4"},[e._v("Maximum Number of days stayed")]),t("v-select",{attrs:{label:"Select",items:e.days,rules:[e.rules.required],outlined:"",dense:""},model:{value:e.day,callback:function(s){e.day=s},expression:"day"}},[e._v("Select")]),t("h3",{staticClass:"ml-13"},[e._v('For the following, enter "Yes" if one')]),t("h3",{staticClass:"my-5"},[e._v("Myocardial Infraction, Cerebrovascular Disease, Vascular Disease, Diabetes without complications :")]),t("v-select",{attrs:{items:e.stays,label:"Select",rules:[e.rules.required],outlined:"",dense:""},model:{value:e.disease1,callback:function(s){e.disease1=s},expression:"disease1"}}),t("h3",{staticClass:"my-5"},[e._v("Dementia, Connective Tissue Disease :")]),t("v-select",{attrs:{items:e.stays,label:"Select",rules:[e.rules.required],outlined:"",dense:""},model:{value:e.disease2,callback:function(s){e.disease2=s},expression:"disease2"}}),t("h3",{staticClass:"mb-8 mt-8"},[e._v("Metastatic Solid Tumor:")]),t("v-select",{attrs:{items:e.stays,label:"Select",rules:[e.rules.required],outlined:"",dense:""},model:{value:e.disease3,callback:function(s){e.disease3=s},expression:"disease3"}})],1),t("v-col",{staticClass:"mr-16",attrs:{cols:"6"}},[t("h3",{staticClass:"my-4"},[e._v("Is the patient admitted through Emergency block")]),t("v-select",{attrs:{label:"Select",rules:[e.rules.required],items:e.stays,outlined:"",dense:""},model:{value:e.emergency,callback:function(s){e.emergency=s},expression:"emergency"}}),t("h3",[e._v("of the disorder/disease is applicable :")]),t("h3",{staticClass:"my-5"},[e._v("Cogestive Heartfailure , Diabetes with end organ damage , Chronic Pulmonary Disease , Mid Liver or Renal Disease , Any Tumour :")]),t("v-select",{attrs:{items:e.stays,rules:[e.rules.required],label:"Select",outlined:"",dense:""},model:{value:e.disease4,callback:function(s){e.disease4=s},expression:"disease4"}}),t("h3",{staticClass:"my-5"},[e._v("AIDS, Severe Liver or Renal Disease :")]),t("v-select",{attrs:{items:e.stays,rules:[e.rules.required],label:"Select",outlined:"",dense:""},model:{value:e.disease5,callback:function(s){e.disease5=s},expression:"disease5"}}),t("h3",{staticClass:"mt-5"},[e._v("How many times did the patient visit the emergeny ward")]),t("p",[e._v("Note: Duration is within 6 months and 4 is maximum")]),t("v-text-field",{attrs:{items:e.stays,rules:[e.rules.required,e.rules.min],label:"Enter a number",outlined:"",dense:""},model:{value:e.times,callback:function(s){e.times=s},expression:"times"}})],1)],1)],1),t("v-btn",{attrs:{id:"result"},on:{click:e.calculate}},[e._v("Get Results")]),t("v-snackbar",{attrs:{color:"red",timeout:4e3,top:!0},scopedSlots:e._u([{key:"action",fn:function(s){var a=s.attrs;return[t("v-btn",e._b({attrs:{text:"",id:"snack",color:"white"},on:{click:function(s){e.snackbar=!1}}},"v-btn",a,!1),[e._v("close")])]}}]),model:{value:e.snackbar,callback:function(s){e.snackbar=s},expression:"snackbar"}},[t("h3",{attrs:{id:"hello"}},[e._v("Fill all the required fields")])]),t("v-overlay",{attrs:{absolute:e.absolute,value:e.overlay}},[t("v-card",{staticClass:"white black--text",attrs:{"min-width":"150px",height:"180px"}},[t("div",{staticClass:"pt-4",staticStyle:{"text-align":"center"}},[t("h2",[e._v("Result :")]),t("v-divider"),t("h4",[e._v("Score : "+e._s(e.result))]),t("h4",{class:e.condition},[e._v("Condition : "+e._s(e.condition))]),t("v-btn",{staticClass:"blue",staticStyle:{right:"230px"},on:{click:e.end}},[e._v("Ok")])],1)])],1)],1)},y=[],b={data:function(){return{days:["1","2","3","6","13","more than 14"],dayval:{1:1,2:2,3:3,6:4,13:5,"more than 14":7},stays:["Yes","No"],val:{Yes:1,No:0},day:null,condition:null,disease1:null,disease2:null,disease3:null,disease4:null,disease5:null,emergency:null,times:null,snackbar:!1,result:0,absolute:!0,overlay:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e<=4||"Enter a value below or equal to 4"}}}},methods:{calculate:function(){if(null==this.day||null==this.disease1||null==this.disease2||null==this.disease3||null==this.disease4||null==this.disease5||null==this.emergency||null==this.times||isNaN(this.result))this.snackbar=!0,this.overlay=!1;else{this.disease1=this.val[this.disease1],this.disease2=this.val[this.disease2],this.disease3=this.val[this.disease3],this.disease4=this.val[this.disease4],this.disease5=this.val[this.disease5],this.emergency=this.val[this.emergency],this.times=parseInt(this.times);var e=0;console.log(this.disease1+2*this.disease2+3*this.disease3+4*this.disease4+6*this.disease5),this.disease1+2*this.disease2+3*this.disease3+4*this.disease4+6*this.disease5>4&&(e=4),this.result=this.dayval[this.day]+this.emergency+this.times+e,this.result<5?this.condition="LOW":this.result<10?this.condition="MODERATE":this.condition="HIGH",console.log(this.dayval[this.day]),console.log(this.emergency),console.log(this.times),console.log(e),this.overlay=!0}},end:function(){this.disease1=null,this.disease2=null,this.disease3=null,this.disease4=null,this.disease5=null,this.emergency=null,this.day=null,this.times=null,this.overlay=!1}}},g=b,_=(t("8f52"),t("8336")),k=t("b0af"),x=t("62ad"),w=t("ce7e"),C=t("a797"),S=t("0fd9"),O=t("b974"),V=t("2db4"),D=t("8654"),j=Object(u["a"])(g,f,y,!1,null,"0bd86c80",null),q=j.exports;h()(j,{VBtn:_["a"],VCard:k["a"],VCol:x["a"],VContainer:v["a"],VDivider:w["a"],VOverlay:C["a"],VRow:S["a"],VSelect:O["a"],VSnackbar:V["a"],VTextField:D["a"]});var M={name:"App",components:{HelloWorld:p,Bodypart:q},data:function(){return{}}},T=M,E=t("7496"),P=t("40dc"),H=Object(u["a"])(T,i,l,!1,null,null,null),R=H.exports;h()(H,{VApp:E["a"],VAppBar:P["a"]});var A=t("f309");a["a"].use(A["a"]);var N=new A["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:N,render:function(e){return e(R)}}).$mount("#app")},"8f52":function(e,s,t){"use strict";var a=t("3975"),i=t.n(a);i.a}});
//# sourceMappingURL=app.8d2294ea.js.map