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
  

  
  for (let i = 0; i <= (amount -1); i += 1) {
    let subDelay = step * i + delay;
    

    createPromise( i, subDelay)
      .then(({ i, subDelay }) => {
    console.log(`✅ Fulfilled promise ${i} in ${subDelay}ms`);
  })
  .catch(({ position, subDelay }) => {
    console.log(`❌ Rejected promise ${i} in ${subDelay}ms`);
  });
}
event.currentTarget.reset();
}
)



