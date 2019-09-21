/**
 * @summary implementation of a queue as a circular buffer using an array
 * @param {Array} items the initial items that the user wishes to pass.
 */
class CircularQueue {
  constructor(items = []) {
    this.read = 0;
    this.write = 0;
    this.filled = 0;
    this.items = new Array(items.length || 10);

    items.forEach(item => this.enqueue(item));
  }

  queueLength() {
    return this.items.length - 1;
  }

  enqueue(item) {
    // moves  write pointer
    // check if queue is full - the write pointer has reached the end of the array
    // check if q is empty or less than end of array

    if (this.write === this.queueLength()) {
      if (this.read) {
        this.write = 0;

        if (this.write < this.read + 2 /* this.write + 1 === this.read */) {
          items[this.write] = item;
          this.write += 1;
          this.filled += 1;
        } /* this.write + 1 === this.read || this.write === this.read - 1 */ else {
          throw new Error("Queue is full");
        }
      } else {
        throw new Error("Queue is full");
      }
    } else {
      items[this.write] = item;
      this.write += 1;
      this.filled += 1;
    }
  }

  dequeue() {}
}
