(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cb71f58"],{"0e8f":function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("flex")},"9d01":function(t,e,i){},a722:function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("layout")},da7d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{"justify-space-around":"","fill-height":""}},[i("v-flex",{attrs:{xs11:""}},[i("v-card",{attrs:{hover:""}},[i("v-card-title",[i("h2",[t._v("Info")])]),i("v-card-text",[i("v-text-field",{attrs:{label:"Available Heap (bytes)",readonly:"true"},model:{value:t.ws.heap,callback:function(e){t.$set(t.ws,"heap",e)},expression:"ws.heap"}}),i("v-text-field",{attrs:{label:"Uptime",readonly:"true"},model:{value:t.ws.uptime,callback:function(e){t.$set(t.ws,"uptime",e)},expression:"ws.uptime"}}),i("v-text-field",{attrs:{label:"SSID",readonly:"true"},model:{value:t.ws.ssid,callback:function(e){t.$set(t.ws,"ssid",e)},expression:"ws.ssid"}}),i("v-text-field",{attrs:{label:"Signalstärke (dBm)",readonly:"true"},model:{value:t.ws.rssi,callback:function(e){t.$set(t.ws,"rssi",e)},expression:"ws.rssi"}}),i("v-text-field",{attrs:{label:"Aktueller Titel",readonly:"true"},model:{value:t.stream.title,callback:function(e){t.$set(t.stream,"title",e)},expression:"stream.title"}}),i("v-text-field",{attrs:{label:"Bitrate (bps)",readonly:"true"},model:{value:t.stream.bitrate,callback:function(e){t.$set(t.stream,"bitrate",e)},expression:"stream.bitrate"}})],1)],1),i("v-card",{attrs:{hover:""}},[i("v-card-title",[i("h2",[t._v("Setup")])]),i("v-card-text",[i("v-switch",{attrs:{label:"Ansage des Radiosenders vor dem Abspielen"},on:{change:function(e){return t.changeAnnounceSettings()}},model:{value:t.settings.announcementEnabled,callback:function(e){t.$set(t.settings,"announcementEnabled",e)},expression:"settings.announcementEnabled"}}),i("v-form",{on:{submit:function(e){return e.preventDefault(),t.updateMpdUrl(e)}}},[i("v-row",[i("v-col",{attrs:{cols:"8",md:"5",lg:"3",sm:"10"}},[i("v-text-field",{attrs:{label:"Stream URL eines(lokalen) mpd-Servers"},model:{value:t.settings.mpdstreamurl,callback:function(e){t.$set(t.settings,"mpdstreamurl",e)},expression:"settings.mpdstreamurl"}})],1),i("v-col",{attrs:{cols:"4",md:"3",lg:"3",sm:"2"}},[i("br"),i("v-btn",{attrs:{sstacked:"",type:"submit"}},[t._v("Aktualisieren")])],1)],1)],1)],1)],1)],1)],1)],1)},s=[],a=(i("96cf"),i("1da1")),o=i("2034"),r={data:function(){return{ws:{heap:null,uptime:"keine Daten",ssid:"nicht definiert",rssi:null,volume:20,streaming:!1,bluetooth:!1,streaminfochanged:!1},settings:{announcementEnabled:!1,mpdstreamurl:"<nicht konfiguriert>"},stream:{bitrate:"<keine Info>",title:"<keine Info>"},errors:{streaming:null,bluetooth:null,volume:null},timer:""}},methods:{changeAnnounceSettings:function(){(new o["a"]).postAnnouncementSetting(this.settings.announcementEnabled).then((function(t){}))},getSettings:function(){var t=this;(new o["a"]).getSettings().then((function(e){console.log(e),t.settings=e.data})).catch((function(t){console.error(t)}))},updateStreamInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(new o["a"]).updateStreamInfo().then((function(e){console.log(e),t.stream=e.data})).catch((function(t){console.error(t)}));case 1:case"end":return e.stop()}}),e)})))()},changeBT:function(){var t=this;this.$store.commit("setMusicPlayer",0),(new o["a"]).postBluetooth(this.ws.bluetooth).then((function(e){console.log(e),t.ws=e.data,t.errors.bluetooth=""})).catch((function(e){t.ws.bluetooth=!t.ws.bluetooth,console.error(e),t.errors.bluetooth="Bluetooth Service failed"}))},getInfo:function(){var t=this;(new o["a"]).getInfo().then((function(e){console.log(e),t.ws=e.data,t.$store.commit("setLoading",!1)})).catch((function(e){t.$store.commit("setLoading",!1),console.error(e)})).then((function(){"true"===t.ws.streaminfochanged&&t.updateStreamInfo()})).catch((function(t){console.error(t)}))},updateMpdUrl:function(){(new o["a"]).postMpdStreamUrl(this.settings.mpdstreamurl).then((function(t){console.log(t)})).catch((function(t){console.error(t)}))},cancelAutoUpdate:function(){clearInterval(this.timer)}},created:function(){this.getSettings(),this.getInfo(),this.updateStreamInfo(),this.timer=setInterval(this.getInfo,5e3)},beforeDestroy:function(){clearInterval(this.timer)}},l=r,u=i("2877"),c=i("6544"),h=i.n(c),d=i("8336"),f=i("b0af"),p=i("99d9"),v=i("62ad"),m=i("a523"),g=i("0e8f"),b=i("4bd4"),w=i("a722"),S=i("0fd9"),y=(i("0481"),i("4069"),i("5530")),C=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),V=i("5607"),k=i("2b0e"),x=k["a"].extend({name:"rippleable",directives:{ripple:V["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),A=i("8547"),$=i("58df"),I=Object($["a"])(C["a"],x,A["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=C["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),B=i("c3f0"),D=i("0789"),E=i("490a"),j=i("80d2"),_=I.extend({name:"v-switch",directives:{Touch:B["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(y["a"])({},C["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(y["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(y["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(y["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(D["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(E["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===j["r"].left&&this.isActive||t.keyCode===j["r"].right&&!this.isActive)&&this.onChange()}}}),O=i("8654"),L=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=L.exports;h()(L,{VBtn:d["a"],VCard:f["a"],VCardText:p["a"],VCardTitle:p["b"],VCol:v["a"],VContainer:m["a"],VFlex:g["a"],VForm:b["a"],VLayout:w["a"],VRow:S["a"],VSwitch:_,VTextField:O["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3cb71f58.7b05cef5.js.map