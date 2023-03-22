import Notiflix from 'notiflix';

let amountCounter = 0;
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let delayValue = Number(refs.delay.value);
  let stepValue = Number(refs.step.value);
  let amountValue = Number(refs.amount.value);

  const intervalId = setInterval(() => {
    amountCounter += 1;
    if (amountCounter > amountValue) {
      clearInterval(intervalId);
      return;
    }
    createPromise(amountCounter, delayValue)
      .then(message => Notiflix.Notify.success(message))
      .catch(message => Notiflix.Notify.failure(message));
    // stepValue += delayValue;
    delayValue += stepValue;
    console.log(delayValue);
    console.log(stepValue);
    console.log(amountValue);
  }, delayValue);

  console.log(delayValue);
  console.log(stepValue);
  console.log(amountValue);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

// let amountCounter = 0;
// const refs = {
//   form: document.querySelector('.form'),
//   delay: document.querySelector('[name=delay]'),
//   step: document.querySelector('[name=step]'),
//   amount: document.querySelector('[name=amount]'),
// };

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   let delayValue = Number(refs.delay.value);
//   let stepValue = Number(refs.step.value);

//   const intervalId = setInterval(() => {
//     amountCounter += 1;

//     if (amountCounter > refs.amount.value) {
//       clearInterval(intervalId);
//       return;
//     } else {
//       createPromise(amountCounter, delayValue)
//         .then(message => Notiflix.Notify.success(message))
//         .catch(message => Notiflix.Notify.failure(message));
//     }
//     delayValue += stepValue;
//   }, delayValue);
//   console.log(delayValue);
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   });
// }
