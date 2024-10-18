function joinNodes(node1,node2){
    node1.next = node2
    return node1
}

const node1 = {data : 123}
const node2 = {data : 456}

console.log(joinNodes(node1,node2));
