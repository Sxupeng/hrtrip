import{a7 as a}from"./index-2735b714.js";import{m as e}from"./index-868c3cdd.js";let l=()=>e.get({url:"/city/all"});const s=a("city",{state:()=>({searchValue:null,allCity:{},currentCity:{cityName:"广州"}}),actions:{async getCityAll(){let{data:t}=await l();this.allCity=t}}});export{s as u};
