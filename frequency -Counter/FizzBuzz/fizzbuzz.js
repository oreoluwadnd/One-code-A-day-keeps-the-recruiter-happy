function fizzbuzz(n) {
  for(let i = 1; i <= n ; i++) {
    if(i % 15 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i)
  }
}

fizzbuzz(15)


function fizzbuzz(n) {
for (let i = 1; i <= n;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
}

fizzbuzz(15)
