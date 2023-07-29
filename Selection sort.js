let z = [3,2,1,0,70,-9,800];
function selection(array){
  let minIndex;
  let min;
  for(let i = 0; i < array.length; i++){
    min = array[i];
    minIndex = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < min){
        min = array[j];
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}