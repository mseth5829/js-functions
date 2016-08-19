// If a number leaves a remainder of 0, 2 or 4 when divided by 6, then it is even and therefore non-prime
// (unless it is 2). If it leaves a remainder of 3 when divided by 6 then it is divisible by 3 and
// therefore non-prime (unless it is 3). That leaves just the remainders 1 and 5.


function isPrime(num){
  if(num == 2){
    console.log(true)
  }else if (num == 3){
    console.log(true);
  }else if (num%6 == 0|num%6 == 2|num%6 == 4|num%6 == 3){
    console.log(false)
  }else {
    console.log(true)
  }
}
