const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/* LET'S ANIMATE THOSE IMAGES IN DIFFERENT METHODS! */

/* METHOD #1: This version isn't the best way to do it because it uses the "callback hell", but it will work just fine */

// let animation1 = alice1.animate(aliceTumbling, aliceTiming).finished;

// animation1.then(() => {
//   let animation2 = alice2.animate(aliceTumbling, aliceTiming).finished;
//   animation2.then(() => {
//     let animation3 = alice3.animate(aliceTumbling, aliceTiming).finished;
//     animation3.then(() => {
//       console.log('Finished!!!');
//     })
//   })
// })


/* METHOD #2: Let's do it with promise chain */

// let animation1 = alice1.animate(aliceTumbling, aliceTiming).finished;

// animation1
//   .then(() => {
//     return alice2.animate(aliceTumbling, aliceTiming).finished;
//   })
//   .then(() => {
//     return alice3.animate(aliceTumbling, aliceTiming).finished;
//   })
//   .then(() => {
//     console.log('Finished!!!')
//   })


/* METHOD #3: Using async and await methods */

async function animateAlice() {
  let animation1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
  let animation2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
  let animation3 = await alice3.animate(aliceTumbling, aliceTiming).finished;
}

animateAlice();