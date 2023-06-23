class queue{
  constructor(){
    this.size = 3;
    this.count = 0;
    this.f = -1;
    this.r = -1;
    this.storage = new Array(this.size);
  }
isFull(){
  return this.count === this.size;
}
isEmpty(){
  return this.count === 0;
}
display(){
  if(this.isEmpty()){
    console.log(`Nothing to show`);
    return;
  }
  let result = "";
  for(let i = this.f; i <= this.r; i++){
    result+= this.storage[i] + " ";
  }
  console.log(`Values are ${result}`);
  return;
}
enqueue(value){
  if(this.isEmpty()){
    this.r = this.f = 0;
    this.storage[this.r] = value;
    this.count++;
    this.display();
    return;
  }
  this.count++;
  (this.r++) % this.size;
  this.storage[this.r] = value;
  this.display();
}
dequeue(){
  if(this.isEmpty()){
    console.log(`Queue is Empty`);
    return;
  }
  let dlt = this.storage[this.f];
  this.storage[this.f] = null;
  this.count--;
  (this.f++) % this.size; 
  this.display();
  if(this.isEmpty()){
    this.r = this.f = -1;
  }
  return dlt;
}
}

let z = new queue();

z.enqueue(0)
z.enqueue(1)
z.enqueue(2)
z.enqueue(3)
z.enqueue(4)
z.enqueue(5)
z.enqueue(6)