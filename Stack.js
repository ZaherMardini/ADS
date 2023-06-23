class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class zstack{
  constructor(){
    this.top = null;
    this.size = 0;
  }
  isEmpty(){
    return this.size === 0;
  }
  print(){
    if(this.isEmpty()){
      console.log(`Nothing to show`);
      return;
    }else{
      let current = this.top;
      let values = "";
      while(current){
        values += `${current.value} `;
        current = current.next;
      }
      console.log(values);
    }
  }
  push(value){
    let added = new Node(value);
    if(this.isEmpty()){
      this.top = added;
    }else{
      added.next = this.top;
      this.top = added;
    }
    this.size++;
    this.print();
  }
  pop(){
    if(this.isEmpty()){
      console.log(`Stack is empty`);
      return;
    }
    this.top = this.top.next;
    this.size--;
    this.print();
  }
}

let z = new zstack();