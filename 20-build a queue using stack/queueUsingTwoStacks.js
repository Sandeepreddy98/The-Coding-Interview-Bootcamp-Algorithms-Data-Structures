class Stack {
  constructor() {
    this.data = [];
  }

  //Add elements to the top of an stack
  push(record) {
    this.data.push(record);
  }
  //check the stack is empty or not
  isEmpty() {
    return this.data.length === 0;
  }
  //Remove elements on the top of stack
  pop() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.data.pop();
  }

  //return first element in the stack

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.data[0];
  }
  // return last element in the stack
  rear() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.data[this.data.length - 1];
  }
  //return the elements in stack
  print() {
    console.log(this.data);
  }
}

class Queue {
    constructor() {
        this.first = new Stack()
        this.second  = new Stack()
    }
    //push elements to first array
    enqueue(record) {
        this.first.push(record)
    }
    //1)push each and every element to second array and pop the element from first array 
    //2)pop the element from second array and store in a variable
    //3)push every element from second array to first and pop the element from second array 
    //4)returned the variable
    dequeue(){
        while(!this.first.isEmpty()){
            this.second.push(this.first.pop())
        }

        const removedElement = this.second.pop()
        while(!this.second.isEmpty()){
            this.first.push(this.second.pop())
        }
        return removedElement
    }

    print(){
        console.log(this.first);
    }
}

const q1 = new Queue()
q1.enqueue('hey')
q1.enqueue('sandeep')
q1.dequeue()
q1.print()
