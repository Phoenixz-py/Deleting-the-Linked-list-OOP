import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true})
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor(head = null) {
    this.head = head
  }

  getFirst() {
    return this.head;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let last_node = this.head;

      while (last_node.next !== null) {
        last_node = last_node.next;
      }

      last_node.next = node;
    }

    return this;
  }

  *[Symbol.iterator]() {
    let current = this.head

    while (current !== null) {
      yield current.data

      current = current.next;
    }
  }
}

let askerString = "Enter value you want to make it present in the linked list: ";

  let list = new List().append(+prompt(askerString)).append(+prompt(askerString)).append(+prompt(askerString)).append(+prompt(askerString));
// let list = new List().append(3).append(4).append(6).append(8);

console.log(list)
console.log([...list])

const askerDel = 'Enter 1 to delete first node data' + '\nEnter 2 to delete the next node' + '\nEnter 3 to delete the 3rd node' + '\nEnter 4 to delete the 4th node: '
const del = +prompt(askerDel)

if(del === 1){
  list.head.next.data = 0
}
else if(del === 2){
  list.head.data = 0
}
else if(del == 3){
  list.head.next.data.next.data = 0
}
else if(del === 4){
  list.head.next.data.next.data.next.node = 0
}
console.log([...list])


