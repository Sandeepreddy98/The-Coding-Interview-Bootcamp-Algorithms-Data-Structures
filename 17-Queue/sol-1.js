class Queue {
    constructor() {
        this.data = []
    }
    // adding elements to the queue
    enqueue(record){
        this.data.push(record)
    }
    // checking queue is empty or not
    isEmpty(){
        return this.data.length === 0
    }
    //check quque is empty or not. If not remove from the front
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.data.shift()
    }
    // return first element in the queue
    peek(){
        return this.data[0]
    }

    // return last element in the queue
    rear(){
        return this.data[this.data.length - 1]
    }
    //return size of the queue
    size(){
        return this.data.length
    }
}

const queue = new Queue();

queue.enqueue(1);