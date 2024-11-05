(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bda2a87"],{"9d01":function(t,e,i){},da7d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{"justify-space-around":"","fill-height":""}},[i("v-flex",{attrs:{xs11:""}},[i("v-card",{attrs:{hover:""}},[i("v-card-title",[i("h2",[t._v("Info and Setup")])]),i("v-card-text",[i("v-text-field",{attrs:{label:"Available Heap",readonly:"true"},model:{value:t.ws.heap,callback:function(e){t.$set(t.ws,"heap",e)},expression:"ws.heap"}}),i("v-text-field",{attrs:{label:"Uptime",readonly:"true"},model:{value:t.ws.uptime,callback:function(e){t.$set(t.ws,"uptime",e)},expression:"ws.uptime"}}),i("v-text-field",{attrs:{label:"SSID",readonly:"true"},model:{value:t.ws.ssid,callback:function(e){t.$set(t.ws,"ssid",e)},expression:"ws.ssid"}}),i("v-text-field",{attrs:{label:"Current title",readonly:"true"},model:{value:t.stream.title,callback:function(e){t.$set(t.stream,"title",e)},expression:"stream.title"}}),i("v-text-field",{attrs:{label:"Bitrate",readonly:"true"},model:{value:t.stream.bitrate,callback:function(e){t.$set(t.stream,"bitrate",e)},expression:"stream.bitrate"}}),i("v-switch",{attrs:{label:"Announce radio station before playing"},on:{change:function(e){return t.changeAnnounceSettings()}},model:{value:t.settings.announcementEnabled,callback:function(e){t.$set(t.settings,"announcementEnabled",e)},expression:"settings.announcementEnabled"}})],1)],1)],1)],1)],1)},a=[],s=(i("96cf"),i("1da1")),o=i("2034"),r={data:function(){return{ws:{heap:null,uptime:"no data",ssid:"not defined",volume:20,streaming:!1,bluetooth:!1,streaminfochanged:!1},settings:{announcementEnabled:!1},stream:{bitrate:"<no info>",title:"<no info>"},errors:{streaming:null,bluetooth:null,volume:null},timer:""}},methods:{changeAnnounceSettings:function(){(new o["a"]).postAnnouncementSetting(this.settings.announcementEnabled).then((function(t){}))},getSettings:function(){var t=this;(new o["a"]).getSettings().then((function(e){console.log(e),t.settings=e.data})).catch((function(t){console.error(t)}))},updateStreamInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(new o["a"]).updateStreamInfo().then((function(e){console.log(e),t.stream=e.data})).catch((function(t){console.error(t)}));case 1:case"end":return e.stop()}}),e)})))()},changeBT:function(){var t=this;this.$store.commit("setMusicPlayer",0),(new o["a"]).postBluetooth(this.ws.bluetooth).then((function(e){console.log(e),t.ws=e.data,t.errors.bluetooth=""})).catch((function(e){t.ws.bluetooth=!t.ws.bluetooth,console.error(e),t.errors.bluetooth="Bluetooth Service failed"}))},getInfo:function(){var t=this;(new o["a"]).getInfo().then((function(e){console.log(e),t.ws=e.data,t.$store.commit("setLoading",!1)})).catch((function(e){t.$store.commit("setLoading",!1),console.error(e)})).then((function(){"true"===t.ws.streaminfochanged&&t.updateStreamInfo()})).catch((function(t){console.error(t)}))},cancelAutoUpdate:function(){clearInterval(this.timer)}},created:function(){this.getSettings(),this.getInfo(),this.updateStreamInfo(),this.timer=setInterval(this.getInfo,5e3)},beforeDestroy:function(){clearInterval(this.timer)}},l=r,u=i("2877"),c=i("6544"),h=i.n(c),d=i("b0af"),f=i("99d9"),p=i("a523"),v=(i("20f6"),i("e8f2")),m=Object(v["a"])("flex"),g=Object(v["a"])("layout"),b=(i("0481"),i("4069"),i("5530")),w=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),y=i("5607"),S=i("2b0e"),C=S["a"].extend({name:"rippleable",directives:{ripple:y["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),V=i("8547"),x=i("58df"),k=Object(x["a"])(w["a"],C,V["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=w["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),A=i("c3f0"),$=i("0789"),I=i("490a"),E=i("80d2"),j=k.extend({name:"v-switch",directives:{Touch:A["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(b["a"])({},w["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(b["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(b["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(b["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement($["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(I["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===E["r"].left&&this.isActive||t.keyCode===E["r"].right&&!this.isActive)&&this.onChange()}}}),B=i("8654"),D=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=D.exports;h()(D,{VCard:d["a"],VCardText:f["a"],VCardTitle:f["b"],VContainer:p["a"],VFlex:m,VLayout:g,VSwitch:j,VTextField:B["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3bda2a87.61e8b87f.js.map