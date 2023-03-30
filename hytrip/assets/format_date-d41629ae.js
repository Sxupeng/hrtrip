var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J={},R={get exports(){return J},set exports(D){J=D}};(function(D,L){(function(k,T){D.exports=T()})(K,function(){var k=1e3,T=6e4,Z=36e5,I="millisecond",S="second",w="minute",O="hour",M="day",W="week",$="month",z="quarter",y="year",_="date",V="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var e=["th","st","nd","rd"],t=r%100;return"["+r+(e[(t-20)%10]||e[t]||e[0])+"]"}},N=function(r,e,t){var i=String(r);return!i||i.length>=e?r:""+Array(e+1-i.length).join(t)+r},Q={s:N,z:function(r){var e=-r.utcOffset(),t=Math.abs(e),i=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+N(i,2,"0")+":"+N(n,2,"0")},m:function r(e,t){if(e.date()<t.date())return-r(t,e);var i=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(i,$),u=t-n<0,s=e.clone().add(i+(u?-1:1),$);return+(-(i+(t-n)/(u?n-s:s-n))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:$,y,w:W,d:M,D:_,h:O,m:w,s:S,ms:I,Q:z}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},x="en",p={};p[x]=P;var U=function(r){return r instanceof j},C=function r(e,t,i){var n;if(!e)return x;if(typeof e=="string"){var u=e.toLowerCase();p[u]&&(n=u),t&&(p[u]=t,n=u);var s=e.split("-");if(!n&&s.length>1)return r(s[0])}else{var a=e.name;p[a]=e,n=a}return!i&&n&&(x=n),n||!i&&x},c=function(r,e){if(U(r))return r.clone();var t=typeof e=="object"?e:{};return t.date=r,t.args=arguments,new j(t)},o=Q;o.l=C,o.i=U,o.w=function(r,e){return c(r,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function r(t){this.$L=C(t.locale,null,!0),this.parse(t)}var e=r.prototype;return e.parse=function(t){this.$d=function(i){var n=i.date,u=i.utc;if(n===null)return new Date(NaN);if(o.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var s=n.match(B);if(s){var a=s[2]-1||0,h=(s[7]||"0").substring(0,3);return u?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,h)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,h)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return o},e.isValid=function(){return this.$d.toString()!==V},e.isSame=function(t,i){var n=c(t);return this.startOf(i)<=n&&n<=this.endOf(i)},e.isAfter=function(t,i){return c(t)<this.startOf(i)},e.isBefore=function(t,i){return this.endOf(i)<c(t)},e.$g=function(t,i,n){return o.u(t)?this[i]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,i){var n=this,u=!!o.u(i)||i,s=o.p(t),a=function(b,l){var v=o.w(n.$u?Date.UTC(n.$y,l,b):new Date(n.$y,l,b),n);return u?v:v.endOf(M)},h=function(b,l){return o.w(n.toDate()[b].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(l)),n)},f=this.$W,d=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(s){case y:return u?a(1,0):a(31,11);case $:return u?a(1,d):a(0,d+1);case W:var Y=this.$locale().weekStart||0,H=(f<Y?f+7:f)-Y;return a(u?g-H:g+(6-H),d);case M:case _:return h(m+"Hours",0);case O:return h(m+"Minutes",1);case w:return h(m+"Seconds",2);case S:return h(m+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,i){var n,u=o.p(t),s="set"+(this.$u?"UTC":""),a=(n={},n[M]=s+"Date",n[_]=s+"Date",n[$]=s+"Month",n[y]=s+"FullYear",n[O]=s+"Hours",n[w]=s+"Minutes",n[S]=s+"Seconds",n[I]=s+"Milliseconds",n)[u],h=u===M?this.$D+(i-this.$W):i;if(u===$||u===y){var f=this.clone().set(_,1);f.$d[a](h),f.init(),this.$d=f.set(_,Math.min(this.$D,f.daysInMonth())).$d}else a&&this.$d[a](h);return this.init(),this},e.set=function(t,i){return this.clone().$set(t,i)},e.get=function(t){return this[o.p(t)]()},e.add=function(t,i){var n,u=this;t=Number(t);var s=o.p(i),a=function(d){var g=c(u);return o.w(g.date(g.date()+Math.round(d*t)),u)};if(s===$)return this.set($,this.$M+t);if(s===y)return this.set(y,this.$y+t);if(s===M)return a(1);if(s===W)return a(7);var h=(n={},n[w]=T,n[O]=Z,n[S]=k,n)[s]||1,f=this.$d.getTime()+t*h;return o.w(f,this)},e.subtract=function(t,i){return this.add(-1*t,i)},e.format=function(t){var i=this,n=this.$locale();if(!this.isValid())return n.invalidDate||V;var u=t||"YYYY-MM-DDTHH:mm:ssZ",s=o.z(this),a=this.$H,h=this.$m,f=this.$M,d=n.weekdays,g=n.months,m=function(l,v,F,A){return l&&(l[v]||l(i,u))||F[v].slice(0,A)},Y=function(l){return o.s(a%12||12,l,"0")},H=n.meridiem||function(l,v,F){var A=l<12?"AM":"PM";return F?A.toLowerCase():A},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:f+1,MM:o.s(f+1,2,"0"),MMM:m(n.monthsShort,f,g,3),MMMM:m(g,f),D:this.$D,DD:o.s(this.$D,2,"0"),d:String(this.$W),dd:m(n.weekdaysMin,this.$W,d,2),ddd:m(n.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(a),HH:o.s(a,2,"0"),h:Y(1),hh:Y(2),a:H(a,h,!0),A:H(a,h,!1),m:String(h),mm:o.s(h,2,"0"),s:String(this.$s),ss:o.s(this.$s,2,"0"),SSS:o.s(this.$ms,3,"0"),Z:s};return u.replace(G,function(l,v){return v||b[l]||s.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,i,n){var u,s=o.p(i),a=c(t),h=(a.utcOffset()-this.utcOffset())*T,f=this-a,d=o.m(this,a);return d=(u={},u[y]=d/12,u[$]=d,u[z]=d/3,u[W]=(f-h)/6048e5,u[M]=(f-h)/864e5,u[O]=f/Z,u[w]=f/T,u[S]=f/k,u)[s]||f,n?d:o.a(d)},e.daysInMonth=function(){return this.endOf($).$D},e.$locale=function(){return p[this.$L]},e.locale=function(t,i){if(!t)return this.$L;var n=this.clone(),u=C(t,i,!0);return u&&(n.$L=u),n},e.clone=function(){return o.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},r}(),E=j.prototype;return c.prototype=E,[["$ms",I],["$s",S],["$m",w],["$H",O],["$W",M],["$M",$],["$y",y],["$D",_]].forEach(function(r){E[r[1]]=function(e){return this.$g(e,r[0],r[1])}}),c.extend=function(r,e){return r.$i||(r(e,j,c),r.$i=!0),c},c.locale=C,c.isDayjs=U,c.unix=function(r){return c(1e3*r)},c.en=p[x],c.Ls=p,c.p={},c})})(R);const q=J;function X(D,L="MM月DD日"){return q(D).format(L)}function tt(D,L){return q(L).diff(D,"day")}export{X as f,tt as g};
