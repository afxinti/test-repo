// codeacademy challenge find mean and mode in array. if there are values
//repeat equal times then show the first value
function finder(array) {
    let sum = 0;
    let modeArray=[];
    //find duplicates and push to modeArray,create sum of array
    for (let i=0; i<array.length; i++) {
      sum = sum + array[i];
      for (let j= i+1; j<array.length; j++){
        if (array[i] === array[j] ){
          modeArray.push(array[j]);
        };
      };
    }
    //find mean
    let mean = 0
    if(sum>0 && array.length>0){
      mean = sum/array.length;
    }
    let x = 0;
    let k = 0;
    //check how many times the is duplicates
    for (let i=0; i<modeArray.length; i++){
        let y=0
        for (let j=0; j<array.length; j++){
              //find each number how many times exists in array and asign it to y variable
          if (modeArray[i] === array[j]){
            y++
          }
          //x changes only when there is an item in modeArray that repeats more than the one before
          if (y>x){
            x = y;
            k = i;
          }
      }
    }
    return [mean,modeArray[k]];  
  }
  
  console.log(finder([500, 400, 400, 375, 350, 350, 325, 310]))
  