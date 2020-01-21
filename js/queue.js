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

  isAtTheEnd(pointer) {
    return pointer === this.queueLength();
  }

  isEmpty() {
    return this.read === this.write;
  }

  enqueue(item) {
    // moves write pointer
    // check if queue is full - the write pointer is behind the read pointer
    // check if q is empty or less than end of array
    // [A, B(W), C, D(R)]
    // [A(R), [], C, D(W)]

    const isFull = this.write + 1 === this.read;
    const isPointerWrapping = this.isAtTheEnd(this.write) && this.read;

    if (!isPointerWrapping || isFull) {
      throw new Error("Queue is full");
    } else {
      this.items[this.write] = item;
      this.write = isPointerWrapping ? 0 : (this.write += 1);
      this.filled += 1;
    }
  }

  dequeue() {
    // moves read pointer
    // check if q is empty
    // check if queue is full - the write pointer has reached the end of the array
    // e/c what happens with read is at the end

    if (this.isEmpty()) {
      throw new Error("Queue is empty"); // [a, (W), , , ,g(R)]
    } else {
      this.read = this.isAtTheEnd(this.read) ? 0 : (this.read += 1);
      const indexToDequeue = !this.read ? this.queueLength() : this.read - 1;
      const itemDequeued = this.items[indexToDequeue];
      this.items[indexToDequeue] = null;
      this.filled -= 1;

      return itemDequeued;
    }
  }
}

const testingQueue = () {

}
