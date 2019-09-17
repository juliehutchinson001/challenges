class StackLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }
}

class StackArr {
  constructor(items) {
    this.items = [];
    if (items) {
      items.forEach(item => this.push(item));
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }
}

const isValid = text => {};
