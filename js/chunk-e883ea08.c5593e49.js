(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e883ea08"],{"1f78":function(e,t,c){"use strict";c("5bb8")},"309c":function(e,t,c){},3191:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"a",(function(){return r})),c.d(t,"e",(function(){return l})),c.d(t,"d",(function(){return a})),c.d(t,"c",(function(){return i})),c.d(t,"f",(function(){return s}));var n=c("b775"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;return Object(n["a"])("/home/brand","get",{limit:e})},r=function(){return Object(n["a"])("/home/banner","get")},l=function(){return Object(n["a"])("home/new","get")},a=function(){return Object(n["a"])("home/hot","get")},i=function(){return Object(n["a"])("home/goods","get")},s=function(){return Object(n["a"])("home/special","get")}},3467:function(e,t,c){},"5bb8":function(e,t,c){},"71a0":function(e,t,c){"use strict";c("3467")},7735:function(e,t,c){"use strict";c("d7b1")},"7abe":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o={class:"home-entry"},r={class:"container"};function l(e,t,c,l,a,i){var s=Object(n["resolveComponent"])("HomeCategory"),b=Object(n["resolveComponent"])("HomeBanner"),u=Object(n["resolveComponent"])("HomeNew"),d=Object(n["resolveComponent"])("HomeHot"),j=Object(n["resolveComponent"])("HomeBrand"),O=Object(n["resolveComponent"])("HomeProduct"),m=Object(n["resolveComponent"])("HomeSpecial");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(s),Object(n["createVNode"])(b)]),Object(n["createVNode"])(u),Object(n["createVNode"])(d),Object(n["createVNode"])(j),Object(n["createVNode"])(O),Object(n["createVNode"])(m)])}c("b0c0");var a=function(e){return Object(n["pushScopeId"])("data-v-52fc7771"),e=e(),Object(n["popScopeId"])(),e},i={class:"menu"},s=["onMouseenter"],b={key:1},u={class:"layer"},d=a((function(){return Object(n["createElementVNode"])("small",null,"根据您的购买或浏览记录推荐",-1)})),j={key:0},O=["src"],m={class:"info"},p={class:"name ellipsis-2"},f={class:"desc ellipsis"},g={class:"price"},v=a((function(){return Object(n["createElementVNode"])("i",null,"¥",-1)})),k={key:1},N=["src"],V={class:"info"},h={class:"place"},E=a((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-dingwei"},null,-1)})),B={class:"name ellipsis"},y={class:"desc ellipsis-2"};function C(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("RouterLink"),C=Object(n["resolveComponent"])("XtxSkeleton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"home-category",onMouseleave:t[0]||(t[0]=function(e){return o.categoryId=null})},[Object(n["createElementVNode"])("ul",i,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.menuList,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id,onMouseenter:function(t){return o.categoryId=e.id},class:Object(n["normalizeClass"])(o.categoryId===e.id?"active":"")},[Object(n["createVNode"])(a,{to:"/category/".concat(e.id,"}")},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"]),e.children?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(e.children,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:e.id,to:"/category/sub/".concat(e.id)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])})),128)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",b,[Object(n["createVNode"])(C,{width:"60px",height:"18px",style:{"margin-right":"5px"},bg:"rgba(255,255,255,0.2)",animated:""}),Object(n["createVNode"])(C,{width:"50px",height:"18px",bg:"rgba(255,255,255,0.2)",animated:""})]))],42,s)})),128))]),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("h4",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.currentCategory&&o.currentCategory.brands?"品牌":"分类")+" ",1),d]),o.currentCategory&&o.currentCategory.goods?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",j,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.currentCategory.goods,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createVNode"])(a,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,O),Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("p",p,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("p",f,Object(n["toDisplayString"])(e.desc),1),Object(n["createElementVNode"])("p",g,[v,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.price),1)])])]})),_:2},1024)])})),128))])):Object(n["createCommentVNode"])("",!0),o.currentCategory&&o.currentCategory.brands?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",k,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.currentCategory.brands,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:"brand",key:e.id},[Object(n["createVNode"])(a,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,N),Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("p",h,[E,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.place),1)]),Object(n["createElementVNode"])("p",B,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("p",y,Object(n["toDisplayString"])(e.desc),1)])]})),_:2},1024)])})),128))])):Object(n["createCommentVNode"])("",!0)])],32)}c("d81d"),c("fb6a"),c("7db0"),c("d3b7");var x=c("5502"),S=c("3191"),w={name:"HomeCategory",setup:function(){var e=Object(x["b"])(),t=Object(n["reactive"])({id:"brand",name:"品牌",children:[{id:"brand",name:"品牌推荐"}],brands:[]}),c=Object(n["computed"])((function(){var c=e.state.category.list.map((function(e){return{id:e.id,name:e.name,children:e.children&&e.children.slice(0,2),goods:e.goods}}));return c.push(t),c})),o=Object(n["ref"])(null),r=Object(n["computed"])((function(){return c.value.find((function(e){return e.id===o.value}))}));return Object(S["b"])().then((function(e){t.brands=e.result})),{menuList:c,categoryId:o,currentCategory:r}}},H=(c("9895"),c("6b0d")),_=c.n(H);const D=_()(w,[["render",C],["__scopeId","data-v-52fc7771"]]);var I=D,L={class:"home-banner"};function P(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("XtxCarousel");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",L,[Object(n["createVNode"])(a,{sliders:o.sliders,autoPlay:""},null,8,["sliders"])])}var T={name:"home-banner",setup:function(e){var t=Object(n["ref"])([]);return Object(S["a"])().then((function(e){t.value=e.result})).catch((function(e){console.log(e)})),{sliders:t}}};c("7735");const F=_()(T,[["render",P],["__scopeId","data-v-93facb0c"]]);var X=F,z={class:"home-new",ref:"target"},R={style:{position:"relative",height:"426px"}},M={key:0,class:"goods-list"},G=["src"],J={class:"name ellipsis"},$={class:"price"};function q(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("XtxMore"),i=Object(n["resolveComponent"])("RouterLink"),s=Object(n["resolveComponent"])("HomeSkeleton"),b=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",z,[Object(n["createVNode"])(b,{title:"新鲜好物","sub-title":"新鲜出炉 品质靠谱"},{right:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(a,{path:"/"})]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",R,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[o.goods.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",M,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.goods,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createVNode"])(i,{to:"/product/".concat(e.id)},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,G),Object(n["createElementVNode"])("p",J,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("p",$,"¥"+Object(n["toDisplayString"])(e.price),1)]})),_:2},1032,["to"])])})),128))])):(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1,bg:"#f0f9f4"}))]})),_:1})])]})),_:1})],512)}var A={class:"home-panel"},K={class:"container"},Q={class:"head"};function U(e,t,c,o,r,l){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",A,[Object(n["createElementVNode"])("div",K,[Object(n["createElementVNode"])("div",Q,[Object(n["createElementVNode"])("h3",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(c.title),1),Object(n["createElementVNode"])("small",null,Object(n["toDisplayString"])(c.subTitle),1)]),Object(n["renderSlot"])(e.$slots,"right",{},void 0,!0)]),Object(n["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var W={name:"HomePanel",props:{title:{type:String,default:""},subTitle:{type:String,default:""}}};c("e397");const Y=_()(W,[["render",U],["__scopeId","data-v-ed5e2e82"]]);var Z=Y,ee={class:"home-skeleton"};function te(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("XtxSkeleton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ee,[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(4,(function(e){return Object(n["createElementVNode"])("div",{class:"item",key:e,style:Object(n["normalizeStyle"])({backgroundColor:c.bg})},[Object(n["createVNode"])(a,{bg:"#e4e4e4",width:"306px",height:"306px",animated:""}),Object(n["createVNode"])(a,{bg:"#e4e4e4",width:"160px",height:"24px",animated:""}),Object(n["createVNode"])(a,{bg:"#e4e4e4",width:"120px",height:"24px",animated:""})],4)})),64))])}var ce={name:"HomeSkeleton",props:{bg:{type:String,default:"#fff"}}};c("ea00");const ne=_()(ce,[["render",te],["__scopeId","data-v-4d09a9f2"]]);var oe=ne,re=c("3835"),le=c("16ce"),ae=function(e){var t=Object(n["ref"])([]),c=Object(n["ref"])(null),o=Object(le["a"])(c,(function(c,n){var o=Object(re["a"])(c,1),l=o[0].isIntersecting;l&&(r(),e().then((function(e){t.value=e.result})))}),{threshold:0}),r=o.stop;return{result:t,target:c}},ie={components:{HomePanel:Z,HomeSkeleton:oe},setup:function(){var e=ae(S["e"]),t=e.result,c=e.target;return{goods:t,target:c}}};c("1f78");const se=_()(ie,[["render",q],["__scopeId","data-v-5be9b385"]]);var be=se,ue={style:{position:"relative",height:"426px"}},de={key:0,ref:"pannel",class:"goods-list"},je=["src"],Oe={class:"name"},me={class:"desc"};function pe(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("RouterLink"),i=Object(n["resolveComponent"])("HomeSkeleton"),s=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{title:"人气推荐","sub-title":"人气爆款 不容错过",ref:"target"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",ue,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[o.list.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",de,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.list,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createVNode"])(a,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,je),Object(n["createElementVNode"])("p",Oe,Object(n["toDisplayString"])(e.title),1),Object(n["createElementVNode"])("p",me,Object(n["toDisplayString"])(e.alt),1)]})),_:2},1024)])})),128))],512)):(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:1}))]})),_:1})])]})),_:1},512)}var fe={components:{HomePanel:Z,HomeSkeleton:oe},setup:function(){var e=ae(S["d"]),t=e.target,c=e.result;return{list:c,target:t}}};c("7be6");const ge=_()(fe,[["render",pe],["__scopeId","data-v-547139c1"]]);var ve=ge,ke={class:"box",ref:"box"},Ne=["src"],Ve={key:1,class:"skeleton"};function he(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("RouterLink"),i=Object(n["resolveComponent"])("XtxSkeleton"),s=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{title:"热门品牌","sub-title":"国际经典 品质保证",ref:"target"},{right:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return o.toggle(-1)}),class:Object(n["normalizeClass"])([{disabled:0==o.index},"iconfont icon-angle-left prev"]),href:"javascript:;"},null,2),Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return o.toggle(1)}),class:Object(n["normalizeClass"])([{disabled:1==o.index},"iconfont icon-angle-right next"]),href:"javascript:;"},null,2)]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",ke,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[o.brands.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",{key:0,class:"list",style:Object(n["normalizeStyle"])({transform:"translateX(".concat(1240*-o.index,"px)")})},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.brands,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createVNode"])(a,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,Ne)]})),_:2},1024)])})),128))],4)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ve,[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(5,(function(e){return Object(n["createVNode"])(i,{key:e,animated:"",bg:"#e4e4e4",width:"240px",height:"305px"})})),64))]))]})),_:1})],512)]})),_:1},512)}var Ee=c("8afd"),Be={name:"HomeBrand",components:{HomePanel:Z},setup:function(){var e=ae((function(){return Object(S["b"])(10)})),t=e.target,c=e.result,n=Object(Ee["ref"])(0),o=function(e){var t=n.value+e;t<0||t>1||(n.value=t)};return{brands:c,target:t,toggle:o,index:n}}};c("bf63");const ye=_()(Be,[["render",he],["__scopeId","data-v-59affe7a"]]);var Ce=ye,xe={class:"home-product",ref:"target"},Se={class:"sub"},we={class:"box"},He={alt:""},_e={class:"label"},De={class:"goods-list"};function Ie(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("RouterLink"),i=Object(n["resolveComponent"])("XtxMore"),s=Object(n["resolveComponent"])("HomeGoods"),b=Object(n["resolveComponent"])("XtxSkeleton"),u=Object(n["resolveComponent"])("HomePanel"),d=Object(n["resolveDirective"])("lazyload");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",xe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.list,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(u,{title:e.name,key:e.id},{right:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",Se,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.children,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:e.id,to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1024)})),128))]),Object(n["createVNode"])(i)]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",we,[Object(n["createVNode"])(a,{class:"cover",to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",He,null,512),[[d,e.picture]]),Object(n["createElementVNode"])("strong",_e,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.saleInfo),1)])]})),_:2},1024),Object(n["createElementVNode"])("ul",De,[e.goods!=[]?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(e.goods,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createVNode"])(s,{goods:e},null,8,["goods"])])})),128)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("template",null,[Object(n["createVNode"])(b,{bg:"#e4e4e4",width:"160px",height:"24px",animated:""})])])])]})),_:2},1032,["title"])})),128))],512)}var Le=function(e){return Object(n["pushScopeId"])("data-v-013790e0"),e=e(),Object(n["popScopeId"])(),e},Pe={class:"goods-item"},Te=["src"],Fe={class:"name ellipsis-2"},Xe={class:"desc"},ze={class:"price"},Re={class:"extra"},Me=Le((function(){return Object(n["createElementVNode"])("span",null,"找相似",-1)})),Ge=Le((function(){return Object(n["createElementVNode"])("span",null,"发现现多宝贝 >",-1)}));function Je(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("RouterLink"),i=Object(n["resolveDirective"])("lazyload");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Pe,[Object(n["createVNode"])(a,{to:"/",class:"image"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",{src:c.goods.picture,alt:""},null,8,Te),[[i,c.goods.picture]])]})),_:1}),Object(n["createElementVNode"])("p",Fe,Object(n["toDisplayString"])(c.goods.name),1),Object(n["createElementVNode"])("p",Xe,Object(n["toDisplayString"])(c.goods.desc),1),Object(n["createElementVNode"])("p",ze,"¥"+Object(n["toDisplayString"])(c.goods.price),1),Object(n["createElementVNode"])("div",Re,[Object(n["createVNode"])(a,{to:"/"},{default:Object(n["withCtx"])((function(){return[Me,Ge]})),_:1})])])}var $e={name:"HomeGoods",props:{goods:{type:Object,default:function(){}}}};c("b1fa");const qe=_()($e,[["render",Je],["__scopeId","data-v-013790e0"]]);var Ae=qe,Ke={name:"HomeProduct",components:{HomePanel:Z,HomeGoods:Ae},setup:function(){var e=ae(S["c"]),t=e.target,c=e.result;return{target:t,list:c}}};c("71a0");const Qe=_()(Ke,[["render",Ie],["__scopeId","data-v-93f1bcac"]]);var Ue=Qe,We=function(e){return Object(n["pushScopeId"])("data-v-5cfb0100"),e=e(),Object(n["popScopeId"])(),e},Ye={class:"special-list",ref:"homeSpecial"},Ze=["src"],et={class:"meta"},tt={class:"title"},ct={class:"top ellipsis"},nt={class:"sub ellipsis"},ot={class:"price"},rt={class:"foot"},lt={class:"like"},at=We((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-hart1"},null,-1)})),it={class:"view"},st=We((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-see"},null,-1)})),bt={class:"reply"},ut=We((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-message"},null,-1)}));function dt(e,t,c,o,r,l){var a=Object(n["resolveComponent"])("XtxMore"),i=Object(n["resolveComponent"])("RouterLink"),s=Object(n["resolveComponent"])("HomePanel");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{title:"最新专题"},{right:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(a)]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",Ye,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.list,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"special-item",key:e.id},[Object(n["createVNode"])(i,{to:"/"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:e.cover,alt:""},null,8,Ze),Object(n["createElementVNode"])("div",et,[Object(n["createElementVNode"])("p",tt,[Object(n["createElementVNode"])("span",ct,Object(n["toDisplayString"])(e.title),1),Object(n["createElementVNode"])("span",nt,Object(n["toDisplayString"])(e.summary),1)]),Object(n["createElementVNode"])("span",ot,"¥"+Object(n["toDisplayString"])(e.lowestPrice)+"起",1)])]})),_:2},1024),Object(n["createElementVNode"])("div",rt,[Object(n["createElementVNode"])("span",lt,[at,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.collectNum),1)]),Object(n["createElementVNode"])("span",it,[st,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.viewNum),1)]),Object(n["createElementVNode"])("span",bt,[ut,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.replyNum),1)])])])})),128))],512)]})),_:1})}var jt={name:"HomeSpecial",components:{HomePanel:Z},setup:function(){var e=ae(S["f"]),t=e.target,c=e.result;return{homeSpecial:t,list:c}}};c("f6a4");const Ot=_()(jt,[["render",dt],["__scopeId","data-v-5cfb0100"]]);var mt=Ot,pt={name:"HomePage",components:{HomeCategory:I,HomeBanner:X,HomeNew:be,HomeHot:ve,HomeBrand:Ce,HomeProduct:Ue,HomeSpecial:mt},setup:function(){}};const ft=_()(pt,[["render",l]]);t["default"]=ft},"7be6":function(e,t,c){"use strict";c("f994")},"91fa":function(e,t,c){},9895:function(e,t,c){"use strict";c("f2d3")},a1fc:function(e,t,c){},b1fa:function(e,t,c){"use strict";c("f46b")},bf63:function(e,t,c){"use strict";c("91fa")},c747:function(e,t,c){},d7b1:function(e,t,c){},e397:function(e,t,c){"use strict";c("309c")},ea00:function(e,t,c){"use strict";c("a1fc")},f2d3:function(e,t,c){},f46b:function(e,t,c){},f6a4:function(e,t,c){"use strict";c("c747")},f994:function(e,t,c){}}]);
//# sourceMappingURL=chunk-e883ea08.c5593e49.js.map