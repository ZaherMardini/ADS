class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertix(v){
    if(!this.adjacencyList[v]){
      this.adjacencyList[v] = new Set();
    }
  }
  addEdge(v1,v2){
    if(!this.adjacencyList[v1]){
      this.addVertix(v1);
    }
    if(!this.adjacencyList[v2]){
      this.addVertix(v2);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }
  display(){
    for(let vert in this.adjacencyList){
      console.log(`${vert} -> ${[...this.adjacencyList[vert]]}`);
    }
  }
  hasEdge(v1,v2){
      return this.adjacencyList[v1].has(v2);
  }
  removeEdge(v1,v2){
    if(this.hasEdge(v1,v2)){
      this.adjacencyList[v1].delete(v2);
      this.adjacencyList[v2].delete(v1);
    }
  }
  removeVertex(v){
    if(!this.adjacencyList[v]){
      return null;
    }
    for(let vert in this.adjacencyList){
      this.removeEdge(v, vert);
    }
    delete this.adjacencyList[v];
  }
}
let z = new Graph();
z.addVertix("A");
z.addVertix("B");
z.addVertix("C");
z.addEdge("A", "B");
z.addEdge("C", "B");