import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const notifBtn = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('input[type="number"]');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
event.preventDefault();

const delay = delayInput.value;

const promise = new Promise((resolve, reject) => 
{
  setTimeout(() => {
    const radioBtn = form.state.value; 
  if (radioBtn === 'fulfilled') {
   resolve(delay);}
  if (radioBtn === "rejected") {
    reject(delay);}
    
  }, delay);
  });
   promise.then((result) => {
    iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${result}ms`,
      });
  })
   .catch((error) => {
    iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${error}ms`,
    });
});
};
