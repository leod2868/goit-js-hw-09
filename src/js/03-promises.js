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
  const amound = Number(refs.form.elements.amound.value);
  
  let position = 1;
  let subDelay = delay;
  for (let i = 0; i <= amound - 1; i += 1) {
    position += i;
    subDelay += step * i;

    createPromise(position, subDelay)
      .then(({ position, subDelay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${subDelay}ms`);
  })
  .catch(({ position, subDelay }) => {
    console.log(`❌ Rejected promise ${position} in ${subDelay}ms`);
  });
}
event.currentTarget.reset();
}
)



