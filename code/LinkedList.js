// Import any algorithmic dependencies you need for your playground code here.
// import factorial from '../algorithms/math/factorial/factorial';

// Write your playground code inside the playground() function.
// Test your code from __tests__/playground.test.js
// Launch playground tests by running: npm test -- 'playground'
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    add(value) {
      const node = new Node(value);
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
    traverse() {
      var n = this.head;
      while (n != null) {
        console.log(n.value);
        n = n.next;
      }
    }
    sum() {
      var sum = 0
      var n = this.head;
      while (n != null) {
        sum += n.value;
        n = n.next;
      }
      return sum;
    }
    prepend(value) {
      const node = new Node(value);
      if (this.tail == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    }
    reverse() {
      if (this.head == null || this.head == this.tail) {
        return;
      }
      let prev = null;
      let p = this.head;
  
      // flipping the head and the tail
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      while (p != null) {
        temp = p.next;
        p.next = prev;
        prev = p;
        p = temp;
      }
    }
    search(value) {
      var n = this.head;
      while (n != null) {
        if (n.value === value) {
          return true;
        }
        n = n.next;
      }
      return false;
    }
    delete(value) {
      if (this.head == null) {
        return false;
      }
      var n = this.head
      if (n.value == value) {
        if (this.head == this.tail) {
          this.head = null;
          this.tail = null;
          return true;
        } else {
          this.head = this.head.next;
        }
        return true;
      }
      while (n.next != null && n.next.value != value) {
        n = n.next;
      }
      if (n.next != null) {
        if (n.next == this.tail) {
          this.tail = n;
          this.tail.next = null;
        } else {
          n.next = n.next.next;
        }
        return true;
      }
      return false;
    }
    searchFromTail(placement) {
      let y = this.head;
      let x = this.head;
      let i = 0;
      while (i != placement) {
        i++;
        x = x.next;
        if (x == null) {
          return null;
        }
      }
      while (x != this.tail) {
        y = y.next;
        x = x.next;
      }
      return y.value;
    }
    deleteFromMiddle(amount) {
      if (amount < 1 || this.head == null) {
        return;
      }
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
        return;
      }
      if (this.head.next == this.tail) {
        this.tail = this.head;
        return;
      }
  
      // Form a Range to Delete
      let x = this.head;
      let y = this.head;
      let i = 0;
      while (i != amount) {
        y = y.next;
        i++;
        if (y == null) {
          return;
        }
      }
  
      // Find the Number of Steps to the End
      let z = y;
      let count = 0;
      while (z != null) {
        z = z.next;
        count++;
      }
      count -=2;
      // Move the Range to the Middle
      while (count > 0) {
        y = y.next;
        x = x.next;
        count -= 2;
      }
  
      // Delete the Range
      x.next = y.next;
    }
  }
  module.exports.playground = function () {
    // Replace the next line with your playground code.
    const list = new LinkList();
    for (let i = 0; i < 21; i++) {
      list.add(i);
    }
    list.deleteFromMiddle(5);
    list.traverse();
    return 120;
  };
  
  // export default playground;
  