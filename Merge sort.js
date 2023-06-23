let z = [90,-45,2,1,0];

function mergeSort(array){
  let mid = Math.trunc(array.length / 2);
  let left;
  let right;
  if(array.length < 2){
    return array;
  }
    left = array.slice(0, mid);
    right = array.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
// Time complexity O(nlog(n))
function merge(left, right){
  let temp = [];
  while(0 < left.length && 0 < right.length){
    left[0] <= right[0] ? temp.push(left.shift()) : temp.push(right.shift());
  }
  left.length === 0 ? temp.push(...right) : temp.push(...left);
  return temp;
}