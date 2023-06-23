let z = [4,2,1,0];

function insertion(array){
  let insert;
  for(let i = 1; i < array.length; i++){//unsorted array
    insert = array[i];
    j = i - 1;
    while(j >= 0 && array[j] > insert){//sorted array
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insert;
  }
  return array;
}