(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7da1be12"],{"11de":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("div",{staticClass:"outer-modal"},[a("div",{staticClass:"inner-modal"},[a("div",{staticClass:"modal-header"},[a("div",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")])]),a("div",{staticClass:"modal-body"},[e._t("default")],2),a("div",{staticClass:"modal-actions"},[a("button",{staticClass:"button delete",on:{click:function(t){e.visible=!1}}},[a("unicon",{attrs:{name:"x",fill:"white"}})],1),a("button",{staticClass:"button add",on:{click:function(t){return e.$emit("submit")}}},[a("unicon",{attrs:{name:"check",fill:"white"}})],1)])])]):e._e()},n=[],s={props:{title:{type:String,default:""}},data:function(){return{visible:!1}},methods:{show:function(){this.visible=!this.visible}}},i=s,o=(a("3879"),a("2877")),u=Object(o["a"])(i,r,n,!1,null,"f1a44f80",null);t["a"]=u.exports},"1cb9":function(e,t,a){},3879:function(e,t,a){"use strict";a("1cb9")},"89c7":function(e,t,a){"use strict";a("fafb")},"8fbe":function(e,t,a){},"9f83":function(e,t,a){"use strict";a("b333")},b0c2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{ref:"employeeModal",attrs:{title:e.userFormData.id?"Update employee":"Create employee"},on:{submit:e.updateEmployee}},[a("div",{staticClass:"user-form"},[a("ImageUploader",{staticClass:"image-uploader",model:{value:e.userFormData.profilePicture,callback:function(t){e.$set(e.userFormData,"profilePicture",t)},expression:"userFormData.profilePicture"}}),a("br"),a("div",{staticClass:"user-field"},[a("span",[e._v("First name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.firstName,expression:"userFormData.firstName"}],attrs:{type:"text"},domProps:{value:e.userFormData.firstName},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"firstName",t.target.value)}}})]),a("div",{staticClass:"user-field"},[a("span",[e._v("Last name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.lastName,expression:"userFormData.lastName"}],attrs:{type:"text"},domProps:{value:e.userFormData.lastName},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"lastName",t.target.value)}}})]),a("div",{staticClass:"user-field"},[a("span",[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.email,expression:"userFormData.email"}],attrs:{type:"text"},domProps:{value:e.userFormData.email},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"email",t.target.value)}}})]),a("div",{staticClass:"user-field"},[a("span",[e._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.address,expression:"userFormData.address"}],attrs:{type:"text"},domProps:{value:e.userFormData.address},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"address",t.target.value)}}})]),a("br"),a("div",{staticClass:"user-field"},[a("span",[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.username,expression:"userFormData.username"}],attrs:{type:"text"},domProps:{value:e.userFormData.username},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"username",t.target.value)}}})]),a("div",{staticClass:"user-field"},[a("span",[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.password,expression:"userFormData.password"}],attrs:{type:"password"},domProps:{value:e.userFormData.password},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"password",t.target.value)}}})]),a("div",{staticClass:"user-field"},[a("span",[e._v("Confirm password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userFormData.confirmPassword,expression:"userFormData.confirmPassword"}],attrs:{type:"password"},domProps:{value:e.userFormData.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.userFormData,"confirmPassword",t.target.value)}}})])],1)]),a("Modal",{ref:"deleteModal",attrs:{title:"Delete employee"},on:{submit:e.deleteCurrentEmployee}},[a("div",[e._v(" Are you sure you want to delete user '"+e._s(e.userFormData.firstName)+" "+e._s(e.userFormData.lastName)+"' ")])]),a("button",{staticClass:"btn add text",on:{click:function(t){return e.createEmployee()}}},[a("unicon",{attrs:{name:"plus",fill:"white"}}),e._v(" New employee ")],1),a("br"),a("br"),a("Table",{scopedSlots:e._u([{key:"head",fn:function(){return[a("tr",[a("th"),a("th",[e._v("Naam")]),a("th",[e._v("Email")]),a("th",[e._v("Address")]),a("th")])]},proxy:!0},{key:"body",fn:function(){return e._l(e.users,(function(t){return a("tr",[a("td",[t.profilePicture?a("img",{staticClass:"profile-picture",attrs:{src:t.profilePicture}}):e._e()]),a("td",[e._v(e._s(t.firstName)+" "+e._s(t.lastName))]),a("td",[e._v(e._s(t.email))]),a("td",[e._v(e._s(t.address))]),a("td",[a("button",{staticClass:"btn delete spacing",on:{click:function(a){return e.deleteEmployee(t)}}},[a("unicon",{attrs:{name:"trash",fill:"white"}})],1),a("button",{staticClass:"btn edit",on:{click:function(a){return e.editEmployee(t)}}},[a("unicon",{attrs:{name:"pen",fill:"white"}})],1)])])}))},proxy:!0}])})],1)},n=[],s=a("1da1"),i=(a("96cf"),a("cf46")),o=a("11de"),u=a("bf2e"),l=a("5ce5"),c={getAllUsers:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].get("users/all");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),updateUser:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].post("users/update",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteUser:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].post("users/delete/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},d={components:{Table:i["a"],Modal:o["a"],ImageUploader:u["a"]},data:function(){return{users:[],userFormData:{id:null,firstName:"",lastName:"",email:"",address:"",profilePicture:"",username:null,password:null,confirmPassword:null}}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.getAllUsers();case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{updateEmployee:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.userFormData.password===e.userFormData.confirmPassword){t.next=3;break}return notifications.add("error","Confirm password is not the same as password"),t.abrupt("return");case 3:return t.next=5,c.updateUser(e.userFormData);case 5:if(a=t.sent,void 0!==a){t.next=8;break}return t.abrupt("return");case 8:return e.$refs.employeeModal.show(),notifications.add("info","Person added successfully"),t.next=12,e.loadEmployees();case 12:case"end":return t.stop()}}),t)})))()},deleteCurrentEmployee:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.deleteUser(e.userFormData.id);case 2:return e.$refs.deleteModal.show(),notifications.add("info","Person deleted successfully"),t.next=6,e.loadEmployees();case 6:case"end":return t.stop()}}),t)})))()},deleteEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.userFormData={id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,address:e.address,profilePicture:e.profilePicture,username:null,password:null,confirmPassword:null},t.$refs.deleteModal.show();case 2:case"end":return a.stop()}}),a)})))()},editEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.userFormData={id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,address:e.address,profilePicture:e.profilePicture,username:null,password:null,confirmPassword:null},t.$refs.employeeModal.show();case 2:case"end":return a.stop()}}),a)})))()},createEmployee:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.userFormData={id:null,firstName:"",lastName:"",email:"",address:"",profilePicture:"",username:null,password:null,confirmPassword:null},e.$refs.employeeModal.show();case 2:case"end":return t.stop()}}),t)})))()},loadEmployees:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.users=[],a=e,e.$nextTick(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.getAllUsers();case 2:a.users=e.sent;case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return t.stop()}}),t)})))()}}},m=d,p=(a("e48a"),a("2877")),f=Object(p["a"])(m,r,n,!1,null,"aa517eb0",null);t["default"]=f.exports},b333:function(e,t,a){},bf2e:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"image-uploader",attrs:{type:"file",id:"actual-btn",hidden:""}}),a("div",{staticClass:"image-picker-overlay box",style:"background: url("+e.value+") no-repeat;",on:{click:e.pickImage}},[a("unicon",{staticClass:"content",attrs:{name:"camera"}})],1)])},n=[];a("96cf");const s=e=>{const t=e.replace(/^data:image\/\w+;base64,/,"").length;return(t-814)/1.37},i=e=>e.split(";")[0].match(/jpeg|png|gif/)[0],o=e=>e.replace(/^data:image\/\w+;base64,/,""),u=e=>`data:${e};base64,`;var l={size:s,mime:i,data:o,prefix:u};const c=(e,t="image/jpeg")=>{const a=window.atob(e),r=[];for(let n=0;n<a.length;n++)r[n]=a.charCodeAt(n);return new window.Blob([new Uint8Array(r)],{type:t})},d=(e,t,a)=>{const r=document.createElement("canvas"),n=r.getContext("2d");return r.width=e,r.height=t,s=>{if(!a||a>8)return n.drawImage(s,0,0,r.width,r.height),r;switch(a>4&&(r.width=t,r.height=e),a){case 2:n.translate(e,0),n.scale(-1,1);break;case 3:n.translate(e,t),n.rotate(Math.PI);break;case 4:n.translate(0,t),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-t);break;case 7:n.rotate(.5*Math.PI),n.translate(e,-t),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-e,0);break}return a>4?n.drawImage(s,0,0,r.height,r.width):n.drawImage(s,0,0,r.width,r.height),r}},m=(e,t=.75)=>{const a=e.toDataURL("image/jpeg",t);return a},p=e=>({KB:e/1e3,MB:e/1e6});var f={base64ToFile:c,imageToCanvas:d,canvasToBase64:m,size:p};const h=e=>new Promise((t,a)=>{const r=new window.FileReader;r.addEventListener("load",e=>t(e.target.result),!1),r.addEventListener("error",a,!1),r.readAsDataURL(e)});var w={load:h};const v=e=>new Promise((t,a)=>{const r=new window.Image;r.addEventListener("load",()=>t(r),!1),r.addEventListener("error",a,!1),r.src=e}),g=(e,t)=>(a,r)=>{if(!e&&!t)return{width:a,height:r};const n=a/r,s=e/t;let i,o;return n>s?(i=Math.min(a,e),o=i/n):(o=Math.min(r,t),i=o*n),{width:i,height:o}};var b={load:v,resize:g};class x{constructor({quality:e=.75,size:t=2,maxWidth:a=1920,maxHeight:r=1920,resize:n=!0,rotate:s=!1}){this.start=window.performance.now(),this.end=null,this.alt=null,this.ext=null,this.startSize=null,this.startWidth=null,this.startHeight=null,this.size=1e3*t*1e3,this.endSize=null,this.endWidth=null,this.endHeight=null,this.iterations=0,this.base64prefix=null,this.quality=e,this.resize=n,this.maxWidth=a,this.maxHeight=r,this.orientation=1,this.rotate=s}}var y=x;const F=e=>new Promise(t=>{const a=new window.FileReader;a.onload=function(e){var a=new DataView(e.target.result);65496!==a.getUint16(0,!1)&&t(-2);const r=a.byteLength;let n=2;while(n<r){const e=a.getUint16(n,!1);if(n+=2,65505===e){1165519206!==a.getUint32(n+=2,!1)&&t(-1);const e=18761===a.getUint16(n+=6,!1);n+=a.getUint32(n+4,e);const r=a.getUint16(n,e);n+=2;for(let s=0;s<r;s++)274===a.getUint16(n+12*s,e)&&t(a.getUint16(n+12*s+8,e))}else{if(65280!==(65280&e))break;n+=a.getUint16(n,!1)}}t(-1)},a.readAsArrayBuffer(e.slice(0,65536))});var D={orientation:F};class P{attach(e,t){return new Promise(a=>{const r=document.querySelector(e);r.setAttribute("accept","image/*"),r.addEventListener("change",e=>{const r=this.compress([...e.target.files],t);a(r)},!1)})}compress(e,t){return Promise.all(e.map(e=>_(e,t)))}static convertBase64ToFile(e,t){return f.base64ToFile(e,t)}}function k(e,t,a=1,r,n=1,s=1){const i=f.canvasToBase64(e,a),o=l.size(i);return o>r||a>n?k(e,o,a-.1,r,n,s+1):i}async function _(e,t){const a=new y(t);return a.start=window.performance.now(),a.alt=e.name,a.ext=e.type,a.startSize=e.size,a.orientation=a.rotate?await D.orientation(e):0,N(a)(await w.load(e))}function N(e){return async t=>{const a=await b.load(t);if(e.startWidth=a.naturalWidth,e.startHeight=a.naturalHeight,e.resize){const{width:t,height:r}=b.resize(e.maxWidth,e.maxHeight)(a.naturalWidth,a.naturalHeight);e.endWidth=t,e.endHeight=r}else e.endWidth=a.naturalWidth,e.endHeight=a.naturalHeight;const r=f.imageToCanvas(e.endWidth,e.endHeight,e.orientation)(a);e.iterations=1,e.base64prefix=l.prefix(e.ext);const n=await k(r,e.startSize,e.quality,e.size,e.minQuality,e.iterations);e.finalSize=l.size(n),e.end=window.performance.now();const s=e.end-e.start;return{data:l.data(n),prefix:e.base64prefix,elapsedTimeInSeconds:s/1e3,alt:e.alt,initialSizeInMb:f.size(e.startSize).MB,endSizeInMb:f.size(e.finalSize).MB,ext:e.ext,quality:e.quality,endWidthInPx:e.endWidth,endHeightInPx:e.endHeight,initialWidthInPx:e.startWidth,initialHeightInPx:e.startHeight,sizeReducedInPercent:(e.startSize-e.finalSize)/e.startSize*100,iterations:e.iterations}}}var C=new P,z={data:function(){return{}},props:["value"],mounted:function(){var e=this;C.attach("#actual-btn",{size:.04,quality:.75}).then((function(t){var a=t[0];e.$emit("input",a.prefix+a.data),console.log(a.data.length)}))},methods:{pickImage:function(){this.$refs["image-uploader"].click()}}},R=z,E=(a("89c7"),a("2877")),U=Object(E["a"])(R,r,n,!1,null,"39802f3a",null);t["a"]=U.exports},cf46:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[e._t("head")],2),a("tbody",[e._t("body")],2)])},n=[],s={name:"Table.vue"},i=s,o=(a("9f83"),a("2877")),u=Object(o["a"])(i,r,n,!1,null,"2108937e",null);t["a"]=u.exports},e48a:function(e,t,a){"use strict";a("8fbe")},fafb:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7da1be12.ee723958.js.map