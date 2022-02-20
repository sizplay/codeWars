class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // functions to be implemented
  add(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // insertAt(element, location)
  // removeFrom(location)
  // removeElement(element)

  // Helper Methods
  isEmpty() {
    return this.size === 0;
  }
  sizeOfList() {
    return this.size;
  }
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();

list.add(3);
list.add(4);
list.add(5);
console.log("isEmpty", list.isEmpty());
console.log("sizeOfList", list.sizeOfList());
list.printList();
