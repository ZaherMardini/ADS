// import {Qnode,queue} from './Queue.js'
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
// visual representation with a pen and a paper is needed
class bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  searchNode(root, v) {
    if (!root) {
      return false;
    }
    if (root.value === v) {
      return true;
    }
    if (root.value < v) {
      return this.searchNode(root.right, v);
    } else if (root.value > v) {
      return this.searchNode(root.left, v);
    }
  }
  insert(v) {
    let added = new Node(v);
    if (this.isEmpty()) {
      this.root = added;
      return;
    } else {
      this.insertion(this.root, added);
    }
  }
  insertion(root, added) {
    if (added.value > root.value) {
      if (!root.right) {
        //examin !root.right
        root.right = added;
        return;
      } else {
        this.insertion(root.right, added);
      }
    }
    if (added.value < root.value) {
      if (!root.left) {
        //examin !root.left
        root.left = added;
        return;
      } else {
        this.insertion(root.left, added);
      }
    }
  }
  delete(v) {
    this.root = this.deletion(this.root, v);
  }
  deletion(root, v) {
    if (!root) {
      return root;
    }
    // Searching for the desired node
    if (v > root.value) {
      root.right = this.deletion(root.right, v);
    }else if (v < root.value) {
      root.left = this.deletion(root.left, v);
    } // Searching for the desired node
// Reaching this block of code means we have found the desired node(we are standing on it)
    else { 
    //Scenario #1
    if (!root.left && !root.right) { 
      return null;
    }
    //Scenario #2
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    //Scenario #3
    root.value = this.min(root.right);
    root.right = this.deletion(root.right, root.right.value);
  }
  return root;
  }
  pre(root) {
    //pre-order Depth-First-Search (DFS)
    if (root) {
      console.log(root.value);
      this.pre(root.left);
      this.pre(root.right);
    }
  }
  in(root) {
    //in-order Depth-First-Search (DFS)
    if (root) {
      this.in(root.left);
      console.log(root.value);
      this.in(root.right);
    }
  }
  post(root) {
    //post-order Depth-First-Search (DFS)
    if (root) {
      this.post(root.left);
      this.post(root.right);
      console.log(root.value);
    }
  }
  // level(){//Breadth-First-Search (BFS)
  // let q = new queue();
  // q.enqueue(z.root);
  // while(!q.isEmpty()){
  //   let c = q.dequeue();
  //   console.log(c.value);
  //   if(c.left){
  //     q.enqueue(c.left);
  //   }
  //   if(c.right){
  //     q.enqueue(c.right);
  //   }
  // }
  // }
  min(root) {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }
  max(root) {
    while (root.right) {
      root = root.right;
    }
    return root.value;
  }
}

let z = new bst();
z.insert(10);
z.insert(15);
z.insert(5);
z.insert(3);
// z.insert(7);
// z.level();
