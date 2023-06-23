let z = [4,3,2,1,0];

function quickSort(array){
  let left = [];
  let right = [];
  let pivot = array[array.length - 1];
  if(array.length < 2){
    return array;
  }
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    }else{
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}