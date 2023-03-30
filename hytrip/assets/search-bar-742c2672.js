import{n as p,y,L as K,W as se,au as V,av as ce,A as E,aI as le,p as j,l as P,c as G,d as H,s as F,a as r,aJ as U,e as Y,as as ie,i as Z,ai as W,aj as J,w as q,m as T,b as z,D as re,G as de,ah as ue,aE as fe,aK as ve,ao as he,a9 as ye,aL as me,aB as _e,E as Ie,H as Se,I as Q,_ as ke,ac as we,a3 as xe,a8 as Ce,Z as I,$ as S,af as b,a2 as f,a4 as g,ae as L,a6 as R,a0 as Oe,a1 as be}from"./index-2735b714.js";import{u as pe}from"./index-868c3cdd.js";import{u as Pe}from"./index-313c0163.js";import{f as M}from"./format_date-d41629ae.js";const De={show:Boolean,zIndex:p,overlay:y,duration:p,teleport:[String,Object],lockScroll:y,lazyRender:y,beforeClose:Function,overlayStyle:Object,overlayClass:K,transitionAppear:Boolean,closeOnClickOverlay:y};let k=0;const N="van-overflow-hidden";function Be(e,t){const o=Pe(),d="01",n="10",i=l=>{o.move(l);const v=o.deltaY.value>0?n:d,D=le(l.target,e.value),{scrollHeight:_,offsetHeight:x,scrollTop:C}=D;let h="11";C===0?h=x>=_?"00":"01":C+x>=_&&(h="10"),h!=="11"&&o.isVertical()&&!(parseInt(h,2)&parseInt(v,2))&&j(l,!0)},s=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",i,{passive:!1}),k||document.body.classList.add(N),k++},c=()=>{k&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",i),k--,k||document.body.classList.remove(N))},w=()=>t()&&s(),m=()=>t()&&c();se(w),V(m),ce(m),E(t,l=>{l?s():c()})}function X(e){const t=P(!1);return E(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const[Te,ge]=G("overlay"),ze={show:Boolean,zIndex:p,duration:p,className:K,lockScroll:y,lazyRender:y,customStyle:Object};var Ee=H({name:Te,props:ze,setup(e,{slots:t}){const o=P(),d=X(()=>e.show||!e.lazyRender),n=s=>{e.lockScroll&&j(s,!0)},i=d(()=>{var s;const c=Y(ie(e.zIndex),e.customStyle);return Z(e.duration)&&(c.animationDuration=`${e.duration}s`),W(r("div",{ref:o,style:c,class:[ge(),e.className]},[(s=t.default)==null?void 0:s.call(t)]),[[J,e.show]])});return F("touchmove",n,{target:o}),()=>r(U,{name:"van-fade",appear:!0},{default:i})}});const Ae=q(Ee),Le=Y({},De,{round:Boolean,position:T("center"),closeIcon:T("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:T("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Re,$]=G("popup");var Me=H({name:Re,inheritAttrs:!1,props:Le,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:d}){let n,i;const s=P(),c=P(),w=X(()=>e.show||!e.lazyRender),m=z(()=>{const a={zIndex:s.value};if(Z(e.duration)){const u=e.position==="center"?"animationDuration":"transitionDuration";a[u]=`${e.duration}s`}return a}),l=()=>{n||(n=!0,s.value=e.zIndex!==void 0?+e.zIndex:me(),t("open"))},v=()=>{n&&_e(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},D=a=>{t("clickOverlay",a),e.closeOnClickOverlay&&v()},_=()=>{if(e.overlay)return r(Ae,{show:e.show,class:e.overlayClass,zIndex:s.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:D},{default:d["overlay-content"]})},x=a=>{t("clickCloseIcon",a),v()},C=()=>{if(e.closeable)return r(Q,{role:"button",tabindex:0,name:e.closeIcon,class:[$("close-icon",e.closeIconPosition),Se],classPrefix:e.iconPrefix,onClick:x},null)},h=()=>t("opened"),te=()=>t("closed"),oe=a=>t("keydown",a),ae=w(()=>{var a;const{round:u,position:O,safeAreaInsetTop:B,safeAreaInsetBottom:ne}=e;return W(r("div",Ie({ref:c,style:m.value,role:"dialog",tabindex:0,class:[$({round:u,[O]:O}),{"van-safe-area-top":B,"van-safe-area-bottom":ne}],onKeydown:oe},o),[(a=d.default)==null?void 0:a.call(d),C()]),[[J,e.show]])}),A=()=>{const{position:a,transition:u,transitionAppear:O}=e,B=a==="center"?"van-fade":`van-popup-slide-${a}`;return r(U,{name:u||B,appear:O,onAfterEnter:h,onAfterLeave:te},{default:ae})};return E(()=>e.show,a=>{a&&!n&&(l(),o.tabindex===0&&re(()=>{var u;(u=c.value)==null||u.focus()})),!a&&n&&(n=!1,t("close"))}),pe({popupRef:c}),Be(c,()=>e.show&&e.lockScroll),F("popstate",()=>{e.closeOnPopstate&&(v(),i=!1)}),de(()=>{e.show&&l()}),ue(()=>{i&&(t("update:show",!0),i=!1)}),V(()=>{e.show&&e.teleport&&(v(),i=!0)}),fe(ve,()=>e.show),()=>e.teleport?r(he,{to:e.teleport},{default:()=>[_(),A()]}):r(ye,null,[_(),A()])}});const tt=q(Me);const ee=e=>(Oe("data-v-7ce8f8d3"),e=e(),be(),e),Ne={class:"search-city"},$e={class:"search-bar1"},Ke={key:0,class:"city"},Ve={class:"item-inner"},je={class:"item"},Ge=ee(()=>f("span",null,"住",-1)),He={class:"item"},Fe=ee(()=>f("span",null,"离",-1)),Ue={class:"content"},Ye=["placeholder"],Ze={key:1,class:"search"},We={key:1,class:"more"},Je={__name:"search-bar",props:{city:{type:String,default:""},content:{type:String,default:"关键字/位置/民宿"},isShow:{type:Boolean,default:!0},isTab:{type:Boolean,default:!1}},setup(e){const t=we(),o=xe(),{stateDate:d,endDate:n}=Ce(o),i=z(()=>M(d.value,"MM.DD")),s=z(()=>M(n.value,"MM.DD")),c=()=>{t.push("/home"),o.isShowTab=!0};return(w,m)=>{const l=Q;return I(),S("div",Ne,[e.isTab?(I(),S("div",{key:0,class:"catch",onClick:c},[r(l,{name:"arrow-left",size:"20px"})])):b("",!0),f("div",$e,[e.city?(I(),S("div",Ke,g(e.city),1)):b("",!0),f("div",Ve,[f("div",je,[Ge,L(" "+g(R(i)),1)]),f("div",He,[Fe,L(" "+g(R(s)),1)])]),f("div",Ue,[f("input",{type:"text",placeholder:e.content},null,8,Ye)]),e.isShow?(I(),S("div",Ze,[r(l,{name:"search",size:"26",color:"#999999"})])):b("",!0)]),e.isTab?(I(),S("div",We,[r(l,{name:"comment-o",size:"22px"})])):b("",!0)])}}},ot=ke(Je,[["__scopeId","data-v-7ce8f8d3"]]);export{tt as P,ot as S};
