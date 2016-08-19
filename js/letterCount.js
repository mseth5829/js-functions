var string = "apple"
var letters = {}

function letterCount(str){
  for (var i=0; i<str.length; i++){
    //does undefined here just mean that the object key doesn't have a value yet? --YES
    if(letters[str.charAt(i)] === undefined){
      letters[str.charAt(i)] = 0;
    }
      letters[str.charAt(i)] += 1
  }
  console.log(letters)
}

letterCount(string);
