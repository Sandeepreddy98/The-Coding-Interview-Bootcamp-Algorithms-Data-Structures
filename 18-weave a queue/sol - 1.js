class Queue {
  constructor() {
    this.data = [];
  }
  // adding elements to the queue
  enqueue(record) {
    this.data.push(record);
  }
  // checking queue is empty or not
  isEmpty() {
    return this.data.length === 0;
  }
  //check quque is empty or not. If not remove from the front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.data.shift();
  }
  // return first element in the queue
  peek() {
    if (this.isEmpty()) {
        return "Queue is empty";
    }
    return this.data[0];
  }

  // return last element in the queue
  rear() {
    if (this.isEmpty()) {
        return "Queue is empty";
    }
    return this.data[this.data.length - 1];
  }
  //return size of the queue
  size() {
    return this.data.length;
  }
}

function weaveQueue(queue1, queue2) {
  let wovenQueue = new Queue();
  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    if (!queue1.isEmpty()) {
      wovenQueue.enqueue(queue1.dequeue());
    }

    if (!queue2.isEmpty()) {
      wovenQueue.enqueue(queue2.dequeue());
    }
  }

  return wovenQueue;
}

const queue1 = new Queue();
const queue2 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);

queue2.enqueue("A");
queue2.enqueue("B");

const wovenQueue = weaveQueue(queue1, queue2);

while (!wovenQueue.isEmpty()) {
  console.log(wovenQueue.dequeue());
}
