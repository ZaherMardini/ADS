class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class queue{
  constructor(){
    this.head = this.tail = null;
    this.size = 0;
  }
  isEmpty(){
    return this.size === 0;
  }
  print(){
    if(this.isEmpty()){
      console.log(`Nothing to show`);
      return;
    }
    let current = this.head;
    let values = "";
    while(current){
      values += `${current.value} `;
      current = current.next;
    }
    console.log(values);
  }
  enqueue(value){
    let added = new Node(value);
    if(this.isEmpty()){
      this.head = this.tail = added;
    }else{
      this.tail.next = added;
      this.tail = added;
    }
    this.size++;
    this.print();
  }
  dequeue(){
    if(this.isEmpty()){
      console.log(`Queue is empty`);
      return;
    }
    let deleted = this.head.value;
    this.head = this.head.next;
    this.size--;
    console.log(`Deleted value is ${deleted}`);
    this.print();
    return deleted;
  }
}

let z = new queue();

z.enqueue(1);
z.enqueue(2);
z.enqueue(3);