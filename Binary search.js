// Time complexity O(log(n));

let z = [0,1,2,3,4,5,6];

function bs(array, key){
  let f = 0; 
  let l = array.length - 1;
  let mid;
  while(f <= l){
    mid = Math.trunc((f+l)/2);
    if(array[mid] === key){
      return mid;
    }
    if(key < array[mid]){
      l = mid - 1;
    }
    if(key > array[mid]){
      f = mid + 1;
    }
  }
  return -1;
}

function recBs(array, key, f = 0, l = array.length - 1){
  let mid = Math.trunc((f+l)/2);
  if(f > l){
    return -1;
  }
  if(array[mid] === key){
    return mid;
  }
  if(key > array[mid]){
    return recBs(array, key, f, mid - 1);
  }
  if(key < array[mid]){
    return recBs(array, key, mid + 1, l);
  }
}