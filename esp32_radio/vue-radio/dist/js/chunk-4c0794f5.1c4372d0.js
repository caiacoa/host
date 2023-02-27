(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c0794f5"],{3458:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.doSearch(t)}}},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"3",sm:"2"}},[a("v-select",{attrs:{items:e.pageSizes,label:"Countries per Page"},on:{change:e.handlePageSizeChange},model:{value:e.pageSize,callback:function(t){e.pageSize=t},expression:"pageSize"}})],1),a("v-col",{attrs:{cols:"5",sm:"5"}},[a("v-text-field",{ref:"searchField",attrs:{label:"Search by Country Name"},model:{value:e.searchString,callback:function(t){e.searchString=t},expression:"searchString"}})],1),a("v-col",{attrs:{cols:"3",sm:"3"}},[a("v-btn",{attrs:{stacked:"",type:"submit"}},[e._v(" Search ")])],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-pagination",{attrs:{dense:"",length:e.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},on:{input:e.handlePageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1),a("v-row",e._l(e.filteredList,(function(t){return a("v-col",{key:t.stationuuid,staticClass:"d-flex"},[a("v-row",{attrs:{justify:"center"}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:e._u([{key:"default",fn:function(i){var n=i.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"",tiled:"","max-width":"150px",elevation:n?16:2},nativeOn:{click:function(a){return e.doSelect(t.name)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.iconUrl,height:"150px",width:"150px"}}),a("v-card-text",[e._v(" "+e._s(t.countryCode)+" - "+e._s(t.countryName)+" ("+e._s(t.stationcount)+") ")])],1)]}}],null,!0)})],1)],1)})),1)],1)],1)},n=[],s=(a("4de4"),a("caad"),a("fb6a"),a("4fad"),a("c1f9"),a("d3b7"),a("07ac"),a("2532"),a("96cf"),a("1da1")),r={methods:{waitforData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=this.$store.state.countries.length){e.next=5;break}return e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:e.next=0;break;case 5:this.$store.commit("setLoading",!1),this.countries=this.$store.state.countries,this.updatePage(this.page);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),filterList:function(){if(this.countries=this.$store.state.countries,this.$refs.searchField.blur(),""!==this.searchString){var e=this.searchString,t=Object.entries(this.countries).filter((function(t){return String(t[1].countryName).toLowerCase().includes(e.toLowerCase())||String(t[1].countryCode).toLowerCase().includes(e.toLowerCase())}));this.countries=Object.values(Object.fromEntries(t)),console.log("filter ("+e+") applied.")}},updatePage:function(e){this.listSize=this.countries.length;var t=(e-1)*this.pageSize,a=e*this.pageSize;this.filteredList=this.countries.slice(t,a),this.page=e},handlePageChange:function(e){console.log("handlePageChange called! page = "+e),this.updatePage(e)},handlePageSizeChange:function(e){this.pageSize=e,this.page=1,this.updatePage(this.page)},doSearch:function(){this.page=1,this.filterList(),this.updatePage(this.page)},doSelect:function(e){console.log("doSelect called."),this.$router.push({path:"/countries/"+e.toLowerCase()})}},data:function(){return{page:1,pageSize:20,countries:[],filteredList:[],searchString:"",pageSizes:[10,20,30,40,50],listSize:0,itemList:[]}},computed:{totalPages:function(){return null==this.pageSize||null==this.listSize?0:Math.ceil(this.listSize/this.pageSize)}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setLoading",!0),e.$store.dispatch("setupCountries"),t.next=4,e.waitforData();case 4:case"end":return t.stop()}}),t)})))()}},o=r,c=(a("46bd"),a("2877")),u=a("6544"),l=a.n(u),h=a("8336"),d=a("b0af"),g=a("99d9"),p=a("62ad"),f=a("a523"),m=a("4bd4"),v=a("ce87"),S=a("adda"),b=a("891e"),w=a("0fd9"),x=a("b974"),C=a("8654"),z=Object(c["a"])(o,i,n,!1,null,null,null);t["default"]=z.exports;l()(z,{VBtn:h["a"],VCard:d["a"],VCardText:g["a"],VCol:p["a"],VContainer:f["a"],VForm:m["a"],VHover:v["a"],VImg:S["a"],VPagination:b["a"],VRow:w["a"],VSelect:x["a"],VTextField:C["a"]})},"46bd":function(e,t,a){"use strict";var i=a("6c43"),n=a.n(i);n.a},"6c43":function(e,t,a){}}]);
//# sourceMappingURL=chunk-4c0794f5.1c4372d0.js.map