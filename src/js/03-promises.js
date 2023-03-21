const refs = {
  form : document.querySelector('.form')
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
    
refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = Number(refs.form.elements.delay.value);
  const step = Number(refs.form.elements.step.value);
  const amount = Number(refs.form.elements.amount.value); 
  
  let position = 1;
  let subDelay = delay;
  
  for (let i = 0; i <= amount -1; i += 1) {
    position += i;
    subDelay += step * i;

    createPromise( position, subDelay)
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
event.currentTarget.reset();
}
)



