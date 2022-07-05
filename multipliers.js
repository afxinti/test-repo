//challenge with one number (n) create array from 1 to n and check for 
// multipliers of 3 and 5

function fizzbuzz(n) {
    let fizzray = [];
    for (let i=0; i<n; i++){
      fizzray[i] = i+1;
      if (fizzray[i] % 3 === 0 && fizzray[i] % 5 === 0){
        fizzray[i] = 'FizzBuzz';
      } else if (fizzray[i] % 3 === 0){
        fizzray[i] = 'Fizz';
      } else if (fizzray[i] % 5 === 0){
        fizzray[i] = 'Buzz';
      }
    };
    return fizzray;
  }
  
  console.log(fizzbuzz(18));
  