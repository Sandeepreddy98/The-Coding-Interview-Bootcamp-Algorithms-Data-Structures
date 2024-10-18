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

const stack = new Stack();
stack.push("hey");
stack.push("sandeep");
stack.push("reddy");
stack.pop();
stack.print();
