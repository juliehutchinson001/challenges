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

  isPointerWrapping(point, limiter = this.read) {
    return this.isAtTheEnd(point) && !limiter;
  }

  isFull(pter, limit = this.read) {
    return pter < limit - 1;
  }

  enqueue(item) {
    // moves write pointer
    // check if queue is full - the write pointer is behind the read pointer
    // check if q is empty or less than end of array
    // [A, B(W), C, D(R)]
    // [A, [](W), C(R), D]

    if (!this.isPointerWrapping(this.write) || this.isFull(this.write)) {
      throw new Error("Queue is full");
    } else {
      this.items[this.write] = item;
      this.write = this.isPointerWrapping(this.write) ? 0 : (this.write += 1);
      this.filled += 1;
    }

    if (!this.isPointerWrapping(this.write) || this.isEmpty()) {
      this.items[this.write] = item;
      this.write += 1;
      this.filled += 1;
    } else if (this.isFull()) {
      this.items[this.write] = item;
      this.filled += 1;
      this.write = 0;
    } else {
      throw new Error("Queue is full");
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
      const indexToDequeue = !this.read
        ? this.queueLength() - 1
        : this.read - 1;

      this.items[indexToDequeue] = null;
      this.filled -= 1;
    }
  }
}
