(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07a554d1"],{"24e2":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t._self._c;return n("error-content",{attrs:{code:"401",desc:"Oh~~您没有浏览这个页面的权限~",src:t.src}})},c=[],o=r("3026"),s=r.n(o),a=r("d7fb"),i={name:"error_401",components:{errorContent:a["a"]},data:function(){return{src:s.a}}},u=i,l=r("2877"),d=Object(l["a"])(u,e,c,!1,null,null,null);n["default"]=d.exports},3026:function(t,n,r){t.exports=r.p+"img/error-401.98bba5b1.svg"},6969:function(t,n,r){},d7fb:function(t,n,r){"use strict";var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"content-con"},[n("img",{attrs:{src:t.src,alt:t.code}}),n("div",{staticClass:"text-con"},[n("h4",[t._v(t._s(t.code))]),n("h5",[t._v(t._s(t.desc))])]),n("back-btn-group",{staticClass:"back-btn-group"})],1)])},c=[],o=(r("6969"),function(){var t=this,n=t._self._c;return n("div",[n("Button",{attrs:{size:"large",type:"text"},on:{click:t.backHome}},[t._v("返回首页")])],1)}),s=[],a={name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:this.$config.homeName})},backPrev:function(){this.$router.go(-1)}},mounted:function(){},beforeDestroy:function(){clearInterval(this.timer)}},i=a,u=r("2877"),l=Object(u["a"])(i,o,s,!1,null,null,null),d=l.exports,f={name:"error_content",components:{backBtnGroup:d},props:{code:String,desc:String,src:String}},p=f,b=Object(u["a"])(p,e,c,!1,null,null,null);n["a"]=b.exports}}]);
//# sourceMappingURL=chunk-07a554d1.1712658965975.js.map