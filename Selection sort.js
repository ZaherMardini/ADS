let z = [3,2,1,0,70,-9,800];
// min=3 i=0 j=1 => [3,2,1,0] => min = 2
// i=0 j=2 => [3,2,1,0] min = 1
// i=0 j=3 => [3,2,1,0] min = 0 index = 3 => [0,2,1,3]
// i=1 j=2 => [0,2,1,3] min = 2 => min = 1
// i=1 j=3 => [0,2,1,3] min = 1 => min = 1 index = 2 => [0,1,2,3]
// i=2 j=3 => [0,1,2,3] min = 2 index = 2 => min = 2 index = 2
// i=3 j=- => [0,1,2,3] min = 3 index = 3 => min = 2
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