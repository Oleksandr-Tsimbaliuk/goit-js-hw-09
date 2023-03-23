import Notiflix from 'notiflix';

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
  const stepValue = Number(refs.step.value);
  const amountValue = Number(refs.amount.value);
  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay,
        });
      } else {
        reject({
          position,
          delay,
        });
      }
    }, delay);
  });
}

// import Notiflix from 'notiflix';

// const refs = {
//   form: document.querySelector('.form'),
//   delay: document.querySelector('[name=delay]'),
//   step: document.querySelector('[name=step]'),
//   amount: document.querySelector('[name=amount]'),
// };

// let amountCounter = 0;
// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   let delayValue = Number(refs.delay.value);
//   let stepValue = Number(refs.step.value);
//   let amountValue = Number(refs.amount.value);

//   const intervalId = setInterval(() => {
//     amountCounter += 1;
//     if (amountCounter > amountValue) {
//       clearInterval(intervalId);
//       return;
//     }
//     createPromise(amountCounter, delayValue)
//       .then(message => Notiflix.Notify.success(message))
//       .catch(message => Notiflix.Notify.failure(message));
//     delayValue += stepValue;
//   }, stepValue);
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
