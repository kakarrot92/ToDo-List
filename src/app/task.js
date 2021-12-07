class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

export default Task;