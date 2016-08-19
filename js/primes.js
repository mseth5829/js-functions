
function isPrime(num){
  if(num == 2){
    return true
  }else if (num == 3){
    return true
  }else if (num%6 == 0|num%6 == 2|num%6 == 4|num%6 == 3){
    return false
  }else {
    return true
  }
}

primes(60)

function primes(max){
//create array
  var arr = [];
  var prime = [];
  for(var i =0; i< max; i++){
    arr.push(i+1);
  }
//check for non-prime numbers and add to new array
  for(var i = 0; i<arr.length; i++){
    if(isPrime(arr[i]) == true){
        prime.push(arr[i]);
    }
  }
//log new array
  console.log(prime);
}
