import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as S,i as q}from"./assets/vendor-651d7991.js";const r=document.querySelector("button[data-start]"),l=document.querySelector("input#datetime-picker");r.disabled=!0;let m=null;const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]);const a=Date.now();e[0]<=a?(r.disabled=!0,q.error({title:"Error",message:"Please choose a date in the future."})):(r.disabled=!1,m=e[0])}};S(l,M);document.querySelector("span[data-days]");document.querySelector("span[data-hours]");document.querySelector("span[data-minutes]");document.querySelector("span[data-seconds]");r.addEventListener("click",T);function T(e){const a=setInterval(function(){r.disabled=!0,l.disabled=!0;const n=m-Date.now(),o=i(n),{days:s,hours:u,minutes:c,seconds:d}=i(n);let y=t(s),p=t(u),f=t(c),h=t(d);document.querySelector("span[data-days]").innerHTML=y,document.querySelector("span[data-hours]").innerHTML=p,document.querySelector("span[data-minutes]").innerHTML=f,document.querySelector("span[data-seconds]").innerHTML=h,o.days<=0&&o.hours<=0&&o.minutes<=0&&o.seconds<=0&&clearInterval(a)},1e3);function t(n){return String(n).padStart(2,"0")}}function i(e){const s=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:u,minutes:c,seconds:d}}
//# sourceMappingURL=commonHelpers.js.map
