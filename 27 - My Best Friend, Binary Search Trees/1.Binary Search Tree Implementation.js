class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return true;
    }
    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if(data > this.data && this.right) {
      return this.right.contains(data);
    }
    return null
  }
}

function validate(params) {
    
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(0);
node.insert(20);
node.insert(-5);
node.insert(3);
node.contains(-5);


