(function(e){function n(n){for(var a,i,u=n[0],l=n[1],c=n[2],p=0,d=[];p<u.length;p++)i=u[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,u=1;u<t.length;u++){var l=t[u];0!==r[l]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},o=[];function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/parkGenerator/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("64a9"),r=t.n(a);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Park")],1)},o=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("dbd park作成ジェネレータ")]),e._m(0),t("div",[t("input",{ref:"input",staticClass:"image_file",attrs:{type:"file"},on:{change:e.handleInput}}),t("img",{attrs:{id:"image01"}})]),t("CanvasArea",{attrs:{src:e.src,backgroundColor:e.backgroundColor,inputX:e.inputX,inputY:e.inputY,inputScale:e.inputScale},on:{loaded:e.onloaded}}),t("div",e._l(e.rareTypes,function(n){return t("label",{key:n.value},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.backgroundColor,expression:"backgroundColor"}],attrs:{type:"radio",name:"rareType"},domProps:{value:n.value,checked:e._q(e.backgroundColor,n.value)},on:{change:function(t){e.backgroundColor=n.value}}}),e._v("\n      "+e._s(n.label)+"\n    ")])}),0),t("div",[e._v("\n    x軸\n    "),t("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:e.inputX,expression:"inputX",modifiers:{lazy:!0,number:!0}}],attrs:{type:"range",max:"500",min:"-500",step:"10"},domProps:{value:e.inputX},on:{change:function(n){e.inputX=e._n(n.target.value)},blur:function(n){e.$forceUpdate()}}}),e._v("\n    "+e._s(e.inputX)+"\n  ")]),t("div",[e._v("\n    y軸\n    "),t("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:e.inputY,expression:"inputY",modifiers:{lazy:!0,number:!0}}],attrs:{type:"range",max:"500",min:"-500",step:"10"},domProps:{value:e.inputY},on:{change:function(n){e.inputY=e._n(n.target.value)},blur:function(n){e.$forceUpdate()}}}),e._v("\n    "+e._s(e.inputY)+"\n  ")]),t("div",[e._v("\n    scale\n    "),t("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:e.inputScale,expression:"inputScale",modifiers:{lazy:!0,number:!0}}],attrs:{type:"range",max:"5.0",min:"0",step:"0.1"},domProps:{value:e.inputScale},on:{change:function(n){e.inputScale=e._n(n.target.value)},blur:function(n){e.$forceUpdate()}}}),e._v("\n    "+e._s(e.inputScale)+"\n  ")]),e.fileName?t("div",[t("a",{attrs:{href:e.downloadUrl,download:e.downloadName}},[e._v("ダウンロードする")])]):e._e()],1)},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("オリジナルのパークをつくろう！\n    "),t("br"),e._v("※透過画像推奨、gif非対応\n  ")])}],l=(t("7f7f"),t("28a5"),t("4917"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("canvas",{ref:"canvas",attrs:{width:"500",height:"500","data-x":e.inputX,"data-y":e.inputY,"data-bg":e.backgroundColor,inputScale:e.inputScale}})}),c=[],s=(t("ac6a"),t("5df3"),t("96cf"),t("1da1")),p=(t("c5f6"),{name:"CanvasArea",props:{src:{default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",type:String},backgroundColor:String,inputX:Number,inputY:Number,inputScale:Number},data:function(){return{backgroundImage:null,frameImage:null}},computed:{test:function(){return"".concat(this.inputX,":").concat(this.inputY)}},watch:{src:function(){this.renderCanvas(),this.$forceUpdate()}},methods:{renderCanvas:function(){var e=this,n=this.$el,t=n.getContext("2d"),a=new Image,r=500,o=500;a.addEventListener("load",function(){var i=a.width>a.height?a.width/(r-50):a.height/(o-50),u=a.width/i*e.inputScale,l=a.height/i*e.inputScale,c=(r-u)/2+e.inputX,s=(o-l)/2+e.inputY;t.clearRect(0,0,r,o),t.globalCompositeOperation="source-over",t.fillStyle=e.backgroundColor,t.strokeRect(0,0,r,o),t.fillRect(0,0,r,o),t.drawImage(a,c,s,u,l),t.drawImage(e.frameImage,0,0,r,o),t.globalCompositeOperation="destination-in",t.drawImage(e.backgroundImage,0,0,r,o);var p=n.toDataURL("image/png");e.$emit("loaded",p)}),a.src=this.src}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var n,t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new Image,t=new Image,n.src="./static/background.png",t.src="./static/frame.png",e.next=6,Promise.all([new Promise(function(e,t){n.addEventListener("load",function(){a.backgroundImage=n,e()},!1)}),new Promise(function(e,n){t.addEventListener("load",function(){a.frameImage=t,e()},!1)})]);case 6:this.renderCanvas();case 7:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),updated:function(){this.renderCanvas()}}),d=p,f=t("2877"),v=Object(f["a"])(d,l,c,!1,null,null,null);v.options.__file="canvas.vue";var m=v.exports,g={name:"Park",data:function(){return{src:void 0,downloadUrl:null,fileName:null,backgroundColor:"#3a6613",inputX:0,inputY:0,inputScale:1,rareTypes:[{label:"uncommon",value:"#bda84b"},{label:"rare",value:"#3a6613"},{label:"very rare",value:"#4c216a"},{label:"ultra rare",value:"#94033e"},{label:"teachable",value:"#c03f06"}]}},components:{CanvasArea:m},computed:{downloadName:function(){return"park_".concat(this.fileName,".png")}},methods:{handleInput:function(e){var n=this,t=e.target.files[0];if(!t.type.match("image.*"))return alert("画像を選択してください"),void(this.$refs.input.value="");var a=new FileReader;a.onload=function(){n.$refs.input.value="",n.src=a.result,n.fileName=t.name.split(".")[0]},a.readAsDataURL(t)},onloaded:function(e){this.downloadUrl=e},changeColor:function(e){var n=this.color[e.target.value];this.backgroundColor=n}}},h=g,b=Object(f["a"])(h,i,u,!1,null,null,null);b.options.__file="Park.vue";var _=b.exports,w={name:"app",components:{Park:_}},A=w,y=(t("034f"),Object(f["a"])(A,r,o,!1,null,null,null));y.options.__file="App.vue";var k=y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(k)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.e02172b0.js.map