let z = [6, 5, 4, 3, 2, 1, 0];
function bub(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[j] < array[j - 1]){
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array;
}