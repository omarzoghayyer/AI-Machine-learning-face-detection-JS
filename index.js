function addAll(...numbers){
    let total =0;
    numbers.forEach(num => (total + num))
    return total;
  }
  
  console.log(addAll(1,2,3,4)); 
