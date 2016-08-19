var numbers = [23, 45, 12, 76, 12, 34];
var count = 0;

function sillySum (arr){
  for(var i =0; i<arr.length; i++){
    count += arr[i]*i
  }
  console.log(count)
}

sillySum(numbers);
