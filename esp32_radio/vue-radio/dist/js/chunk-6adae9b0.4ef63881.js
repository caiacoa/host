(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6adae9b0"],{"0266":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.doSearch(e)}}},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"3",sm:"2"}},[a("v-select",{attrs:{items:t.pageSizes,label:"Sender pro Seite"},on:{change:t.handlePageSizeChange},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}})],1),a("v-col",{attrs:{cols:"5",sm:"5"}},[a("v-text-field",{ref:"searchField",attrs:{label:"Suche nach Sendername"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1),a("v-col",{attrs:{cols:"3",sm:"3"}},[a("v-btn",{attrs:{sstacked:"",type:"submit"}},[t._v(" Suche ")])],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-pagination",{attrs:{length:t.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},on:{input:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),a("v-row",t._l(t.filteredList,(function(e){return a("v-col",{key:e.stationuuid,staticClass:"d-flex"},[a("v-row",{attrs:{justify:"center"}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var s=r.hover;return[a("v-card",{staticClass:"mx-auto",class:t.cardStyle(e),attrs:{outlined:"",tiled:"","min-width":"150px","max-width":"150px",elevation:s?16:2},nativeOn:{click:function(i){return t.play(e)}}},[a("v-img",{attrs:{src:e.favicon,height:"150px",width:"150px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{src:i("1579"),height:"150px",width:"150px"}})],1)]},proxy:!0}],null,!0)}),a("v-card-text",{domProps:{textContent:t._s(e.name)}})],1)]}}],null,!0)})],1)],1)})),1)],1)],1)},r=[],s=(i("4de4"),i("caad"),i("fb6a"),i("b0c0"),i("4fad"),i("c1f9"),i("d3b7"),i("07ac"),i("2532"),i("498a"),i("96cf"),i("1da1")),n=i("2034"),o={data:function(){return{page:1,pageSize:20,radios:[],filteredList:[],radiosUnfiltered:[],searchString:"",pageSizes:[10,20,30,40,50],listSize:0,itemList:[],hover:!1}},computed:{totalPages:function(){return null==this.pageSize||null==this.listSize?0:Math.ceil(this.listSize/this.pageSize)}},methods:{cardStyle:function(t){var e=[];return this.isSelected(t.stationuuid)&&e.push("selected"),this.isPlaying(t.stationuuid)&&e.push("pulsate"),e},play:function(t){var e=this,i=t.stationuuid,a=t.url_resolved,r=this.$store.state.musicPlayer,s=this.$store.state.activeRadio;this.isPlaying(i)?(r.stop(),s.active=!1,s.error=!1,this.$store.commit("setActiveRadio",s)):(s.active=!1,s.id=i,s.url=a,s.name=t.name,s.countrycode=t.countrycode.trim().toLowerCase(),s.error=!1,this.$store.commit("setActiveRadio",s),r.play(s.url,t.name,s.countrycode,s.id).then((function(t){t.url==e.$store.state.activeRadio.url&&(s.active=t.playing,s.error=!t.playing,e.$store.commit("setActiveRadio",s))}),(function(t){s.active=!1,s.error=!0,e.$store.commit("setActiveRadio",s),console.error(t)})).catch((function(t){s.active=!1,s.error=!0,e.$store.commit("setActiveRadio",s),console.log(t)})))},getRadios:function(t,e){var i=this,a=this.$store.state.radios[t+e];if(null!=a)this.radios=a,this.$store.commit("setLoading",!1);else{this.$store.commit("setLoading",!0);var r=new n["a"];r.getRadios(t,e).then((function(a){i.radios=a.data.filter((function(t){return 1==t.lastcheckok&&!i.$store.state.blacklist.includes(t.stationuuid)})).sort((function(t,e){return e.clickcount-t.clickcount})),i.$store.commit("setRadios",{id:t+e,value:i.radios}),i.$store.commit("setLoading",!1)})).catch((function(t){console.error(t),i.$store.commit("setLoading",!1)}))}},waitforData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("Waiting for radio data ... ");case 1:if(0!=this.radios.length){t.next=6;break}return t.next=4,new Promise((function(t){return setTimeout(t,300)}));case 4:t.next=1;break;case 6:this.radiosUnfiltered=this.radios,console.log("Done... "),this.updatePage(this.page);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filterList:function(){if(this.radios=this.radiosUnfiltered,this.$refs.searchField.blur(),""!==this.searchString){var t=this.searchString,e=Object.entries(this.radios).filter((function(e){return String(e[1].name).toLowerCase().includes(t.toLowerCase())}));this.radios=Object.values(Object.fromEntries(e)),console.log("filter ("+t+") applied.")}},updatePage:function(t){this.listSize=this.radios.length;var e=(t-1)*this.pageSize,i=t*this.pageSize;this.filteredList=this.radios.slice(e,i),this.page=t},handlePageChange:function(t){console.log("handlePageChange called! page = "+t),this.updatePage(t)},handlePageSizeChange:function(t){this.pageSize=t,this.page=1,this.updatePage(this.page)},doSearch:function(){this.page=1,this.filterList(),this.updatePage(this.page)},isSelected:function(t){return this.$store.state.activeRadio.id==t},isPlaying:function(t){return this.$store.state.activeRadio.active&&this.$store.state.activeRadio.id==t}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("setLoading",!0),i=void 0===t.$router.currentRoute.params["id"]?"blues":t.$router.currentRoute.params.id,a="Genre"==t.$router.currentRoute.name?"tag":"countrycode",t.getRadios(a,i),e.next=6,t.waitforData();case 6:case"end":return e.stop()}}),e)})))()}},c=o,l=(i("2292"),i("2877")),u=i("6544"),d=i.n(u),h=i("8336"),g=i("b0af"),f=i("99d9"),p=i("62ad"),m=i("a523"),v=i("4bd4"),S=i("ce87"),b=i("adda"),w=i("891e"),x=i("0fd9"),y=i("b974"),$=i("8654"),R=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=R.exports;d()(R,{VBtn:h["a"],VCard:g["a"],VCardText:f["a"],VCol:p["a"],VContainer:m["a"],VForm:v["a"],VHover:S["a"],VImg:b["a"],VPagination:w["a"],VRow:x["a"],VSelect:y["a"],VTextField:$["a"]})},1579:function(t,e,i){t.exports=i.p+"img/radio.4f008661.svg"},2292:function(t,e,i){"use strict";var a=i("4e1c"),r=i.n(a);r.a},"4e1c":function(t,e,i){}}]);
//# sourceMappingURL=chunk-6adae9b0.4ef63881.js.map