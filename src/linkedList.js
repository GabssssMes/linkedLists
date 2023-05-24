import { node } from "./node.js";

class linkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }
  printList() {
    let item = this.headNode,
      i = -1;
    while (item != null) {
      i++;
      console.log(
        "Position:" +
          i +
          "; Value:" +
          item.value +
          "; nextNode:" +
          item.nextNode
      );
      item = item.nextNode;
    }
  }
  append(value) {
    if (this.headNode == null) this.headNode = new node(value);
    else {
      let searchEnd = this.headNode;
      while (searchEnd.nextNode != null) {
        searchEnd = searchEnd.nextNode;
      }
      searchEnd.nextNode = new node(value);
    }
  }
  prepend(value) {
    if (this.headNode == null) this.headNode = new node(value);
    else {
      let oldFirstNode = this.headNode;
      this.headNode = new node(value, oldFirstNode);
    }
  }
  size() {
    let item = this.headNode,
      i = 0;
    while (item != null) {
      i++;
      item = item.nextNode;
    }
    return i;
  }
  head() {
    if (this.headNode != null) return this.headNode.value;
    else return "Empty List";
  }
  tail() {
    if (this.headNode == null) return "Empty List";
    else {
      let item = this.headNode;
      while (item.nextNode != null) item = item.nextNode;
      return item.value;
    }
  }
  at(index) {
    if (index < 0) return "Index has to be >0!";
    if (this.headNode == null) return "Empty List";
    else {
      let i = 0;
      let item = this.headNode;
      while (i < index) {
        item = item.nextNode;
        i++;
        if (item == null) return "No Item with Index [" + index + "]";
      }
      return item.value;
    }
  }
  pop() {
    if (this.headNode == null) return;
    else {
      let lastItem = this.headNode;
      let newLastItem;
      if (lastItem.nextNode == null) {
        this.headNode = null;
        return;
      }
      while (lastItem.nextNode != null) {
        newLastItem = lastItem;
        lastItem = lastItem.nextNode;
      }
      newLastItem.nextNode = null;
    }
  }
  contains(value) {
    let item = this.headNode;
    while (item != null) {
      if (item.value == value) return true;
      item = item.nextNode;
    }
    return false;
  }
  find(value) {
    let item = this.headNode,
      i = 0;
    while (item != null) {
      if (item.value == value) return i;
      item = item.nextNode;
      i++;
    }
    return null;
  }
  toString() {
    let list = "";
    let node = this.headNode;
    while (node != null) {
      list = list + node.value;
      if (node.nextNode != null) {
        list = list + " -> ";
        node = node.nextNode;
      } else return list;
    }
  }
}

export { linkedList };
