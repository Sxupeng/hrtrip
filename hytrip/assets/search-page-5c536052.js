import{a7 as P,_ as p,a3 as $,Z as t,$ as s,a as l,a8 as m,a2 as n,a4 as y,am as k,a6 as d,al as v,a0 as w,a1 as T,a9 as u,aa as f,af as h}from"./index-2735b714.js";import{S as b}from"./index-4ba5a9fa.js";import{m as x}from"./index-868c3cdd.js";let I=()=>x.get({url:"/search/top"}),B=()=>x.get({url:"/search/result"});const S=P("search",{state:()=>({searchTopList:[],searchResult:[],housePicture:[],searchTopList0:[],isShowHot:!0,indexs:-1}),actions:{async getSearchTop(){let{data:e}=await I();this.searchTopList=e.data.allConditions,console.log(e.data.allConditions)},async getSearchResult(){let{data:e}=await B();this.searchResult=e.data.hotFilters,this.housePicture=e.data.items}}});const L={class:"search-page-bar"},N={__name:"search-01-page-bar",setup(e){const r=$(),o=()=>{r.isShowSearch=!1};return(_,i)=>{const a=b;return t(),s("div",L,[l(a,{shape:"round","show-action":"",placeholder:"请输入搜索关键词",onCancel:o})])}}},R=p(N,[["__scopeId","data-v-2189a968"]]);const C=e=>(w("data-v-cc2078dc"),e=e(),T(),e),H={class:"search-page-title"},j={class:"title"},V=C(()=>n("span",null,"展开",-1)),z={key:0,class:"icon"},A={key:1,class:"icon"},F=C(()=>n("span",{class:v(["icon-more","down"])},null,-1)),M=[F],O={__name:"search-page-title",props:{title:{type:String,default:()=>"默认标题"},idx:{type:Number,default:-1}},setup(e){const r=S(),{isShowHot:o,indexs:_}=m(r),i=a=>{o.value=!o.value,_.value=a};return(a,c)=>(t(),s("div",H,[n("div",j,[n("h2",null,y(e.title),1)]),k(a.$slots,"default",{},()=>[n("div",{class:"expansion",onClick:c[0]||(c[0]=g=>i(e.idx))},[V,d(_)===e.idx?(t(),s("div",z,[n("span",{class:v(["icon-more",d(o)?"down":"up"])},null,2)])):(t(),s("div",A,M))])],!0)]))}},D=p(O,[["__scopeId","data-v-cc2078dc"]]);const E={key:0,class:"search-page-content"},Z={class:"infos"},q={key:0,class:"item"},G={__name:"search-page-content",props:{searchContent:{type:Array,default:()=>[]},idx:{type:Number,default:-1}},setup(e){const r=S(),{isShowHot:o,indexs:_}=m(r);return(i,a)=>e.searchContent?(t(),s("div",E,[n("div",Z,[(t(!0),s(u,null,f(e.searchContent,(c,g)=>(t(),s(u,{key:c.id},[g<7?(t(),s("div",q,y(c.text),1)):h("",!0),g>8?(t(),s(u,{key:1},[d(_)===e.idx?(t(),s("div",{key:0,class:v(["item1",d(o)?"over":"show"])},y(c.text),3)):h("",!0)],64)):h("",!0)],64))),128))])])):h("",!0)}},J=p(G,[["__scopeId","data-v-8304310b"]]);const K={__name:"search-02-page-history",setup(e){const r=S();return(o,_)=>{var i;return t(!0),s(u,null,f((i=d(r))==null?void 0:i.searchTopList0,(a,c)=>(t(),s("div",{key:a,class:"search-page-history"},[l(D,{title:a.text,idx:c},null,8,["title","idx"]),n("div",{class:v(["content",{active:c===0}])},[l(J,{searchContent:a.children,idx:c},null,8,["searchContent","idx"])],2)]))),128)}}};const Q={class:"search-page"},U={class:"search-view"},W={__name:"search-page",setup(e){return(r,o)=>(t(),s("div",Q,[n("div",U,[l(R),l(K)])]))}},X=p(W,[["__scopeId","data-v-a76c9fe5"]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{X as S,se as s,S as u};