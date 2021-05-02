module.exports = class Stack {
  constructor(...args) {
    this.data = args;
    if (this.data.length == 0) this.top = -1;
    else this.top = this.data.length - 1;
  }

  push(element) {
    this.data.push(element);
    this.top = this.top + 1;
  }

  peek() {
    return this.data[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop();
    }
    return null;
  }

  swap() {
    if (this.data.length > 1) {
      let tmp = this.data[this.top];
      this.data[this.top] = this.data[this.top - 1];
      this.data[this.top - 1] = tmp;
    }
  }

  get size() {
    return this.data.length;
  }
};
