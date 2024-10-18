// Create a node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create a linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Inserting the node at first place in a linked list
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  //Returns no.of nodes in linked list
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    if(!this.head){
        return
    }
    this.head = this.head.next
  }

  removeLast(){
    if(!this.head){
        return null
    }
    if(!this.head.next){
        return this.head = null
    }
    let previous = this.head
    let node = this.head.next
    while(node.next){
        previous = node
        node = node.next
    }
    previous.next = null
  }

  insertLast(data){
    let node = this.getLast()
    if(node){
        node.next = new Node(data)
    }else{
        this.head = new Node(data)
    }
  }

  getAt(index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if(counter === index){
            return node
        }
      counter++;
      node = node.next;
    }
    return "out of bound"
  }

  removeAt(index){
    // if(this.size()<)
    if(!this.head){
      return 
    }
    if(!this.head.next){
      this.head = this.head.next
      return
    }
    const previousNode = this.getAt(index - 1)
    if(!previousNode || !previousNode.next){
      return
    }
    previousNode.next = previousNode.next.next
  }

  insertAt(data,index){
    if(!this.head){
      this.head = new Node(data)
      return
    }
    if(!this.head.next){
      this.head.next = new Node(data,this.head)
      return
    }

    const previousNode =this.getAt(index) || this.getLast()
    previousNode.next = new Node(data,previousNode.next)
  }
}

let list = new LinkedList();
list.insertFirst(5);
// list.insertLast(10)
// list.insertFirst(7);
// list.getAt(1)
list.removeAt(0)
console.log(list);
