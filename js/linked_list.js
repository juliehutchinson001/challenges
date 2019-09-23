/**
 * @summary node implementation in Javascript
 * @param {String} data the data that comes with the node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = next;
  }
}

/**
 * @summary singly linkedlist implementation in Javascript
 * @param {Array} items the initial items of the ll to be inserted
 */
class LinkedList {
  constructor(items = []) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    items.forEach(item => this.append(item));
  }

  /**
   * @summary Checks if the linkedlist is empty.
   * @returns {bool} if the linkedlist is empty or not.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * @summary Adds a new data node to the tail of the linkedlist
   * @param {String} data the data to be added
   * @returns {null}
   */
  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.size += 1;
  }

  /**
   * @summary Adds a new data node to the head of the linkedlist
   * @param {String} data the data to be added
   * @returns {null}
   */
  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.size += 1;
  }

  /**
   * @summary remove the head of the linkedList
   * @returns {String} data that was removed
   */
  unshift() {
    if (this.isEmpty()) return null;

    const dataToDelete = this.head.data;

    if (this.size === 1) this.tail = null;

    this.head = this.head.next;
    this.size -= 1;
    return dataToDelete;
  }

  unshift() {
    let dataToDelete = null;

    if (!this.isEmpty()) {
      if (this.size === 1) this.tail = null;

      dataToDelete = this.head.data;
      this.head = this.head.next;
      this.size -= 1;
    }
    return dataToDelete;
  }
}
