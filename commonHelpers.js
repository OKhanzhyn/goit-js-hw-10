import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l}from"./assets/vendor-992cd48f.js";const m=document.querySelector('button [type="button"]'),d=document.querySelector(".timer"),h=document.querySelector("input#datetime-picker");let f="";const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);const e=Date.now();if(t[0]<=e)return window.alert("Please choose a date in the future");f.push(t)}};l(h,p);function o(t){const u=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),a=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:s,seconds:a}}const c=new Timer({onTick:y});m.addEventListener("click",c.start.bind(c));function y({days:t,hours:e,mins:n,secs:r}){d.textContent=`${t}:${e}:${n}:${r}`}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));
//# sourceMappingURL=commonHelpers.js.map
