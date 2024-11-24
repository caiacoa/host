(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bda2a87"],{"9d01":function(t,e,n){},da7d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-space-around":"","fill-height":""}},[n("v-flex",{attrs:{xs11:""}},[n("v-card",{attrs:{hover:""}},[n("v-card-title",[n("h2",[t._v("Info")])]),n("v-card-text",[n("v-text-field",{attrs:{label:"Available Heap (bytes)",readonly:"true"},model:{value:t.ws.heap,callback:function(e){t.$set(t.ws,"heap",e)},expression:"ws.heap"}}),n("v-text-field",{attrs:{label:"Uptime",readonly:"true"},model:{value:t.ws.uptime,callback:function(e){t.$set(t.ws,"uptime",e)},expression:"ws.uptime"}}),n("v-text-field",{attrs:{label:"SSID",readonly:"true"},model:{value:t.ws.ssid,callback:function(e){t.$set(t.ws,"ssid",e)},expression:"ws.ssid"}}),n("v-text-field",{attrs:{label:"Signal strength (dBm)",readonly:"true"},model:{value:t.ws.rssi,callback:function(e){t.$set(t.ws,"rssi",e)},expression:"ws.rssi"}}),n("v-text-field",{attrs:{label:"Current title",readonly:"true"},model:{value:t.stream.title,callback:function(e){t.$set(t.stream,"title",e)},expression:"stream.title"}}),n("v-text-field",{attrs:{label:"Bitrate (bps)",readonly:"true"},model:{value:t.stream.bitrate,callback:function(e){t.$set(t.stream,"bitrate",e)},expression:"stream.bitrate"}})],1)],1),n("v-card",{attrs:{hover:""}},[n("v-card-title",[n("h2",[t._v("Setup")])]),n("v-card-text",[n("v-switch",{attrs:{label:"Announce radio station before playing"},on:{change:function(e){return t.changeAnnounceSettings()}},model:{value:t.settings.announcementEnabled,callback:function(e){t.$set(t.settings,"announcementEnabled",e)},expression:"settings.announcementEnabled"}}),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.updateMpdUrl(e)}}},[n("v-row",[n("v-col",{attrs:{cols:"8",md:"5",lg:"3",sm:"10"}},[n("v-text-field",{attrs:{label:"Stream URL of a (local) mpd server"},model:{value:t.settings.mpdstreamurl,callback:function(e){t.$set(t.settings,"mpdstreamurl",e)},expression:"settings.mpdstreamurl"}})],1),n("v-col",{attrs:{cols:"4",md:"3",lg:"3",sm:"2"}},[n("br"),n("v-btn",{attrs:{sstacked:"",type:"submit"}},[t._v("Update")])],1)],1)],1)],1)],1)],1)],1)],1)},s=[],a=(n("96cf"),n("1da1")),o=n("2034"),r={data:function(){return{ws:{heap:null,uptime:"no data",ssid:"not defined",rssi:null,volume:20,streaming:!1,bluetooth:!1,streaminfochanged:!1},settings:{announcementEnabled:!1,mpdstreamurl:"<not configured>"},stream:{bitrate:"<no info>",title:"<no info>"},errors:{streaming:null,bluetooth:null,volume:null},timer:""}},methods:{changeAnnounceSettings:function(){(new o["a"]).postAnnouncementSetting(this.settings.announcementEnabled).then((function(t){}))},getSettings:function(){var t=this;(new o["a"]).getSettings().then((function(e){console.log(e),t.settings=e.data})).catch((function(t){console.error(t)}))},updateStreamInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(new o["a"]).updateStreamInfo().then((function(e){console.log(e),t.stream=e.data})).catch((function(t){console.error(t)}));case 1:case"end":return e.stop()}}),e)})))()},changeBT:function(){var t=this;this.$store.commit("setMusicPlayer",0),(new o["a"]).postBluetooth(this.ws.bluetooth).then((function(e){console.log(e),t.ws=e.data,t.errors.bluetooth=""})).catch((function(e){t.ws.bluetooth=!t.ws.bluetooth,console.error(e),t.errors.bluetooth="Bluetooth Service failed"}))},getInfo:function(){var t=this;(new o["a"]).getInfo().then((function(e){console.log(e),t.ws=e.data,t.$store.commit("setLoading",!1)})).catch((function(e){t.$store.commit("setLoading",!1),console.error(e)})).then((function(){"true"===t.ws.streaminfochanged&&t.updateStreamInfo()})).catch((function(t){console.error(t)}))},updateMpdUrl:function(){(new o["a"]).postMpdStreamUrl(this.settings.mpdstreamurl).then((function(t){console.log(t)})).catch((function(t){console.error(t)}))},cancelAutoUpdate:function(){clearInterval(this.timer)}},created:function(){this.getSettings(),this.getInfo(),this.updateStreamInfo(),this.timer=setInterval(this.getInfo,5e3)},beforeDestroy:function(){clearInterval(this.timer)}},l=r,u=n("2877"),c=n("6544"),h=n.n(c),d=n("8336"),p=n("b0af"),f=n("99d9"),m=n("62ad"),v=n("a523"),g=(n("20f6"),n("e8f2")),b=Object(g["a"])("flex"),w=n("4bd4"),y=Object(g["a"])("layout"),S=n("0fd9"),C=(n("0481"),n("4069"),n("5530")),V=(n("ec29"),n("9d01"),n("4de4"),n("45fc"),n("d3b7"),n("25f0"),n("c37a")),x=n("5607"),k=n("2b0e"),A=k["a"].extend({name:"rippleable",directives:{ripple:x["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),$=n("8547"),I=n("58df"),B=Object(I["a"])(V["a"],A,$["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=V["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),E=n("c3f0"),j=n("0789"),D=n("490a"),_=n("80d2"),O=B.extend({name:"v-switch",directives:{Touch:E["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(C["a"])({},V["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(C["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(C["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(C["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(j["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(D["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===_["r"].left&&this.isActive||t.keyCode===_["r"].right&&!this.isActive)&&this.onChange()}}}),L=n("8654"),R=Object(u["a"])(l,i,s,!1,null,null,null);e["default"]=R.exports;h()(R,{VBtn:d["a"],VCard:p["a"],VCardText:f["a"],VCardTitle:f["b"],VCol:m["a"],VContainer:v["a"],VFlex:b,VForm:w["a"],VLayout:y,VRow:S["a"],VSwitch:O,VTextField:L["a"]})},ec29:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3bda2a87.492d4425.js.map