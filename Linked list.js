class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class List{
  constructor(){
    this.size = 0; 
    this.head = null;
  }
  isEmpty(){
    return this.size === 0;
  }
  print(){
    let current = this.head;
    let result = "";
    while(current){
      result += `${current.value} `;
      current = current.next;
    }
    console.log(`List values are ${result}`);
  }
  insert(value, index = 0){
    if(index > this.size || index < 0){
      console.log(`Index is not valid`);
      return;
    }
    let added = new Node(value);
    if(this.isEmpty()){
      this.head = added;
      this.size++;
      this.print();
      return;
    }
    if(index === 0){
      added.next = this.head;
      this.head = added;
      this.size++;
      this.print();
      return;
    }
    // at least there is one element
    let prev = this.head;
    for(let i = 0; i < index - 1; i++){
      prev = prev.next;
    }
    added.next = prev.next;
    prev.next = added;
    this.size++;
    this.print();
  }
  remove(dlt = null){
    if(this.isEmpty()){
      console.log(`Cannot delete from an empty list`);
      return;
    }
    if(dlt === null || dlt === this.head.value){
      this.head = this.head.next;
      this.size--;
      this.print();
      return;
    }
    let prev = this.head;
    while(prev.next.value !== dlt){
      prev = prev.next;
    }
    prev.next = prev.next.next;
    this.size--;
    this.print();
  }
}
let z = new List();

z.insert(1, 0);
z.insert(2, 1);
z.insert(3, 2);