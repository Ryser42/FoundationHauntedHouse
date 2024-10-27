(function(e){function t(t){for(var n,a,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,u=1;u<o.length;u++){var s=o[u];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"02ef":function(e,t,o){"use strict";o("88d7")},1:function(e,t){},"3bd0":function(e,t,o){"use strict";o("dc13")},"3dfd":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-main",[o("router-view")],1)],1)},r=[],i={name:"App",components:{},data:()=>({})},a=i,u=o("2877"),s=o("6544"),c=o.n(s),l=o("7496"),d=o("f6c4"),p=Object(u["a"])(a,n,r,!1,null,null,null);t["a"]=p.exports;c()(p,{VApp:l["a"],VMain:d["a"]})},"402c":function(e,t,o){"use strict";var n=o("2b0e"),r=o("f309");o("5363");n["a"].use(r["a"]),t["a"]=new r["a"]({icons:{iconfont:"mdi"}})},"41cb":function(e,t,o){"use strict";var n=o("2b0e"),r=o("8c4f"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("h1",[e._v("Foundation Haunted House Waitlist")]),o("div",{attrs:{id:"actions"}},[o("div",{attrs:{id:"displayWaitlist"}},[o("router-link",{attrs:{to:"/waitlist",target:"_blank"}},[o("v-icon",[e._v("mdi-monitor")]),o("br"),e._v(" Display Waitlist ")],1)],1),o("v-divider",{attrs:{vertical:""}}),o("div",{attrs:{id:"registerGroups"}},[o("router-link",{attrs:{to:"/registration",target:"_blank"}},[o("v-icon",[e._v("mdi-account-multiple-plus")]),o("br"),e._v(" Register Groups ")],1)],1)],1)])},a=[],u={name:"home.vue"},s=u,c=(o("02ef"),o("2877")),l=o("6544"),d=o.n(l),p=o("a523"),v=o("ce7e"),m=o("132d"),f=Object(c["a"])(s,i,a,!1,null,"bd7ebd66",null),h=f.exports;d()(f,{VContainer:p["a"],VDivider:v["a"],VIcon:m["a"]});var b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-card",{staticClass:"pa-2 mb-4"},[o("v-card-title",[e._v(" Next Group Number: "+e._s(this.$store.state.nextRegistrationNumber)+" ")]),o("v-form",{ref:"form",staticStyle:{margin:"8px"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-text-field",{attrs:{rules:e.nameRules,label:"Group Name"},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}}),o("v-text-field",{attrs:{rules:e.numRules,label:"Number of people",type:"number"},model:{value:e.group.size,callback:function(t){e.$set(e.group,"size",t)},expression:"group.size"}}),o("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone number for group"},model:{value:e.group.phone,callback:function(t){e.$set(e.group,"phone",t)},expression:"group.phone"}}),o("v-checkbox",{attrs:{label:"Send SMS message?"},model:{value:e.group.notifyByText,callback:function(t){e.$set(e.group,"notifyByText",t)},expression:"group.notifyByText"}})],1),o("v-spacer"),o("v-card-actions",[o("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.addGroup}},[e._v("Add Group")]),o("v-spacer"),o("v-btn",{on:{click:e.clear}},[e._v("Clear Form")])],1)],1),o("v-card",{staticClass:"pa-2"},[o("v-card-actions",{attrs:{id:"waitlistActions"}},[o("v-btn",{attrs:{color:"primary"},on:{click:e.sendGroup}},[e._v("Send Group")]),o("v-btn",{attrs:{icon:"",title:"Download"},on:{click:e.downloadHistory}},[o("v-icon",[e._v("mdi-download")])],1),o("v-spacer"),o("v-btn",{attrs:{color:"error"},on:{click:e.showResetQueue}},[e._v("Reset Queue")])],1),o("v-data-table",{attrs:{headers:e.headers,items:this.$store.state.queue,"disable-sort":"","disable-pagination":"","hide-default-footer":""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var n=t.item;return[o("v-btn",{attrs:{icon:""},on:{click:function(t){return e.showEditItem(n)}}},[o("v-icon",[e._v("mdi-pencil")])],1),o("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(t){return e.showCancelDialog(n)}}},[o("v-icon",[e._v("mdi-cancel")])],1)]}},{key:"item.move",fn:function(t){var n=t.item;return[o("v-btn",{attrs:{icon:""},on:{click:function(t){return e.move(n,e.directions.UP)}}},[o("v-icon",[e._v("mdi-arrow-up")])],1),o("v-btn",{attrs:{icon:""},on:{click:function(t){return e.move(n,e.directions.DOWN)}}},[o("v-icon",[e._v("mdi-arrow-down")])],1)]}}])})],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.editDialog,callback:function(t){e.editDialog=t},expression:"editDialog"}},[o("v-card",{staticStyle:{padding:"8px"}},[o("v-form",[o("p",[o("span",{staticStyle:{color:"gray"}},[e._v("Group Number:")]),e._v(" "+e._s(e.editGroup.number))]),o("v-text-field",{attrs:{rules:e.nameRules,label:"Group Name"},model:{value:e.editGroup.name,callback:function(t){e.$set(e.editGroup,"name",t)},expression:"editGroup.name"}}),o("v-text-field",{attrs:{rules:e.numRules,label:"Group Size"},model:{value:e.editGroup.size,callback:function(t){e.$set(e.editGroup,"size",t)},expression:"editGroup.size"}}),o("v-text-field",{attrs:{rules:e.phoneRules,label:"Group Phone"},model:{value:e.editGroup.phone,callback:function(t){e.$set(e.editGroup,"phone",t)},expression:"editGroup.phone"}}),o("v-checkbox",{attrs:{label:"Send an SMS?"},model:{value:e.editGroup.notifyByText,callback:function(t){e.$set(e.editGroup,"notifyByText",t)},expression:"editGroup.notifyByText"}})],1),o("v-card-actions",[o("v-btn",{attrs:{color:"primary"},on:{click:e.saveEdit}},[e._v("Save Changes")]),o("v-spacer"),o("v-btn",{on:{click:e.hideEditItem}},[e._v("Cancel")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.resetDialog,callback:function(t){e.resetDialog=t},expression:"resetDialog"}},[o("v-card",{staticStyle:{padding:"8px"}},[o("v-card-title",[e._v("Are you sure you want to reset the queue?")]),o("v-card-subtitle",[e._v("You cannot undo this action.")]),o("v-card-actions",[o("v-btn",{attrs:{color:"error"},on:{click:e.resetQueue}},[e._v("Reset")]),o("v-spacer"),o("v-btn",{on:{click:e.hideResetQueue}},[e._v("Cancel")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.cancelGroupDialog.active,callback:function(t){e.$set(e.cancelGroupDialog,"active",t)},expression:"cancelGroupDialog.active"}},[o("v-card",{staticClass:"pa-2"},[o("v-card-title",[e._v("Are you sure?")]),o("v-card-subtitle",[e._v("You will not be able to recover this group")]),o("v-card-actions",[o("v-btn",{attrs:{color:"error"},on:{click:function(t){return e.cancel(e.cancelGroupDialog.group)}}},[e._v(" Cancel Group ")]),o("v-spacer"),o("v-btn",{on:{click:function(t){e.cancelGroupDialog.active=!1}}},[e._v("Nevermind")])],1)],1)],1)],1)},g=[],y=o("21a6"),x=o("81c5");const _=/(\+1)?[0-9]{10}/;var w={name:"edit",data(){const e=Object.freeze({number:null,name:"",size:null,phone:"",notifyByText:!0});return{valid:!1,resetDialog:!1,editDialog:!1,cancelGroupDialog:{active:!1,group:void 0},group:{name:"",size:null,phone:"+1",notifyByText:!0},nameRules:[e=>!!e||"Group name is required"],numRules:[e=>!!e||"Group count is required"],editGroup:Object.assign({},e),defaultEditGroupForm:e,directions:x["directions"]}},created(){setInterval(()=>{this.queue=this.updateList()},1e3)},computed:{phoneRules(){return!1===this.group.notifyByText?[!0]:[e=>_.test(e)||"Error: Must be valid US phone number"]},headers(){return[{text:"Group Number",value:"number",width:"1px"},{text:"Group Name",value:"name"},{text:"Group Size",value:"size"},{text:"Phone",value:"phone"},{text:"Send Text",value:"notifyByText",width:"1px"},{text:"Actions",value:"actions",width:"104px",align:"center"},{text:"Move",value:"move",width:"104px",align:"center"}]}},methods:{clear(){this.$refs.form.reset(),this.group.phone="+1",this.group.notifyByText=!1},addGroup(){let e=Object.assign({},this.group);_.test(e.phone)&&!e.phone.startsWith("+1")&&(e.phone="+1"+e.phone),e.notifyByText||_.test(e.phone)||(e.phone=null),this.$store.commit("enqueue",e),this.clear()},sendGroup(){this.$store.commit("dequeue")},showResetQueue(){this.resetDialog=!0},hideResetQueue(){this.resetDialog=!1},resetQueue(){this.$store.commit("reset"),this.resetDialog=!1},showEditItem(e){Object.assign(this.editGroup,e),this.editDialog=!0},hideEditItem(){this.editGroup=Object.assign({},this.defaultEditGroupForm),this.editDialog=!1},saveEdit(){this.$store.commit("edit",this.editGroup),this.hideEditItem()},showCancelDialog(e){this.cancelGroupDialog.group=e,this.cancelGroupDialog.active=!0},cancel(e){this.$store.commit("cancel",{groupNumber:e.number,noShow:!1}),this.cancelGroupDialog.active=!1},move(e,t){this.$store.commit("move",{groupNumber:e.number,direction:t})},updateList(){return localStorage.getItem("vuex")&&Object.assign(this.$store.state,JSON.parse(localStorage.getItem("vuex"))),this.$store.state.queue},testText(){this.$store.commit("send")},downloadHistory(){const e=this.$store.getters.queueHisory,t=new Blob([JSON.stringify(e)],{type:"application/json"});Object(y["saveAs"])(t,"HauntedHouseHistory.json")}}},G=w,q=(o("3bd0"),o("8336")),S=o("b0af"),k=o("99d9"),O=o("ac7c"),D=o("8fea"),N=o("169a"),T=o("4bd4"),E=o("2fa4"),$=o("8654"),j=Object(c["a"])(G,b,g,!1,null,"17c9129b",null),B=j.exports;d()(j,{VBtn:q["a"],VCard:S["a"],VCardActions:k["a"],VCardSubtitle:k["b"],VCardTitle:k["c"],VCheckbox:O["a"],VContainer:p["a"],VDataTable:D["a"],VDialog:N["a"],VForm:T["a"],VIcon:m["a"],VSpacer:E["a"],VTextField:$["a"]});var R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page"},[e._m(0),o("div",{staticClass:"body"},[o("v-card",{staticClass:"rounded-b-0"},[o("h2",[e._v("Next Group")]),o("div",{attrs:{id:"next-group"}},[e._v(" "+e._s(e.nextGroup)+" ")])]),o("v-card",{staticClass:"queue rounded-t-0"},[o("table",[o("tbody",e._l(e.$store.state.queue.slice(1),(function(t,n){return o("tr",{key:t.number},[o("td",[e._v(" "+e._s(t.number)+" ")]),o("td",[e._v(" "+e._s(t.name)+" ")]),o("td",[e._v(" "+e._s(e.millisecondsToHHMMSS(e.timeBetweenGroups*(n+1)))+" ")])])})),0)])])],1)])},C=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"banner"},[o("h1",[e._v("The Circus")]),o("h2",[e._v("A Foundation Open House")])])}];function H(e){if(isNaN(e))return"";let t=e;const o=Math.floor(t/36e5);t%=36e5;const n=Math.floor(t/6e4);t%=6e4;const r=Math.floor(t/1e3);return o.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")}var V={name:"view",data(){return{queue:[],headers:[{text:"Group Number",value:"number",width:"90%"},{text:"Group Name",value:"name"}]}},created(){setInterval(()=>{this.queue=this.updateList()},1e3)},computed:{nextGroup(){var e;return null===(e=this.$store.getters.nextGroup)||void 0===e?void 0:e.name},timeBetweenGroups(){return this.$store.getters.avgTimeBetweenGroups}},methods:{updateList(){return localStorage.getItem("vuex")&&Object.assign(this.$store.state,JSON.parse(localStorage.getItem("vuex"))),this.$store.state.queue},millisecondsToHHMMSS:H}},I=V,P=(o("74a5"),Object(c["a"])(I,R,C,!1,null,"03f21e48",null)),A=P.exports;d()(P,{VCard:S["a"]}),n["a"].use(r["a"]);t["a"]=new r["a"]({mode:"history",base:"/",linkActiveClass:"none",routes:[{name:"home",path:"/",component:h},{name:"registration",path:"/registration",component:B},{name:"waitlist",path:"/waitlist",component:A}]})},"4dca":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t),function(e){var n=o("2b0e"),r=o("3dfd"),i=o("8add"),a=o("41cb"),u=o("402c"),s=o("bc3a"),c=o.n(s);o("ed18").config({path:e+"/../.env"}),t["default"]=c.a.create({baseURL:"http://localhost:3000"}),n["a"].config.productionTip=!1,new n["a"]({render:e=>e(r["a"]),router:a["a"],vuetify:u["a"],store:i["a"]}).$mount("#app")}.call(this,"/")},"74a5":function(e,t,o){"use strict";o("4dca")},"81c5":function(e,t){const o={UP:-1,DOWN:1};e.exports={directions:o}},"88d7":function(e,t,o){},"8add":function(e,t,o){"use strict";var n=o("2b0e"),r=o("2f62"),i=o("0e44"),a=o("81c5");const u=o("bc3a").default,s=o("4328"),c=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TWILIO_SID,l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TWILIO_AUTH_TOKEN,d=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_PHONE_NUMBER;async function p(e,t){const o=s.stringify({Body:t,From:d,To:e}),n={username:c,password:l};await u.post("https://api.twilio.com/2010-04-01/Accounts/"+c+"/Messages.json",o,{auth:n})}n["a"].use(r["a"]);t["a"]=new r["a"].Store({plugins:[Object(i["a"])()],state:{queue:[],queueHistory:[],nextRegistrationNumber:1},getters:{nextGroup(e){return e.queue[0]},queueHisory(e){return e.queueHistory},avgTimeBetweenGroups(e){let t=e.queueHistory.map(e=>e.entryTime);if(t=t.filter(e=>void 0!==e).sort(),t.length<2)return;let o=0;for(let n=1;n<t.length;n++)o+=t[n]-t[n-1];return o/(t.length-1)}},mutations:{async enqueue(e,t){let o=t;if(o.number=e.nextRegistrationNumber,o.registrationTime=Date.now(),e.queue.push(o),e.queueHistory.push(o),e.nextRegistrationNumber++,o.notifyByText&&await p(o.phone,"You are in line for Foundation's open house!\nGroup name: "+o.name+"\nGroup number: "+o.number),2===e.queue.length){let t=e.queue[1];t.notifyByText&&await p(e.queue[1].phone,"You are next in line for Foundation's open house! Please make your way to the Sammy lobby if you're not there already!\n"+t.name+"\nGroup number: "+t.number)}},async dequeue(e){if(e.queue.length>0){let t=Object.assign({entryTime:Date.now()},e.queue[0]);const o=e.queueHistory.findIndex(e=>e.number===t.number);e.queueHistory[o]=t,e.queue.shift()}if(e.queue.length>1){let t=e.queue[1];t.notifyByText&&await p(t.phone,"You are next in line for Foundation's open house! Please make your way to the Sammy lobby if you're not there already!\n"+t.name+"\nGroup number: "+t.number)}},edit(e,t){const o=e.queue.findIndex(e=>e.number===t.number);if(o<0)throw new Error("Group not found in queue");Object.assign(e.queue[o],t)},cancel(e,t){let o=e.queue.findIndex(e=>e.number===t.groupNumber);if(o<0)throw new Error("Group number found in queue");let n=e.queue[o];n.cancelled=!0,t.noShow||(n.cancellationTime=Date.now()),e.queue.splice(o,1),o=e.queueHistory.findIndex(e=>e.number===n.number),e.queueHistory[o]=n},move(e,t){let o=e.queue.findIndex(e=>e.number===t.groupNumber);if(o<0)throw new Error("Group number found in queue");if(0===o&&t.direction===a["directions"].UP)return;if(o===e.queue.length&&t.direction===a["directions"].DOWN)return;const n=o+t.direction;[e.queue[o],e.queue[n]]=[e.queue[n],e.queue[o]]},reset(e){e.queue=[],e.queueHistory=[],e.nextRegistrationNumber=1}}})},dc13:function(e,t,o){}});
//# sourceMappingURL=app.6c9c9c79.js.map