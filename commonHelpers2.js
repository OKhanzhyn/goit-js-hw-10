import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const s=document.querySelector(".form");document.querySelector('button[type="submit"]');const m=document.querySelector('input[type="number"]');s.addEventListener("submit",c);function c(i){i.preventDefault();const e=m.value;console.log(e),new Promise((t,n)=>{setTimeout(()=>{const o=s.state.value;o==="fulfilled"&&t(e),o==="rejected"&&n(e),console.log(o)},e)}).then(t=>{r.success({title:"OK",message:`Fulfilled promise in ${e}ms`})}).catch(t=>{r.error({title:"",message:`Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map