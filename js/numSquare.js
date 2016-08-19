
numSquare(60);

function numSquare(max){
//Create array
  var arr = [];
  for(var i =0; i< max; i++){
    arr.push(i+1);
  }
  var sqrt = [];
//add perfect squares to new array
  for(var i =0; i<arr.length; i++){
    if(Math.sqrt(arr[i])%1 == 0){
      sqrt.push(arr[i]);
    }
  }
//log array
console.log(sqrt);
}
