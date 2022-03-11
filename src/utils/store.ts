class Store {
  private length: number = 0;
  private index: number = 0;
  private prevIndex: number = 0;

  reset(length: number) {
    this.length = length;
    this.prevIndex = this.index;
    this.index = 0;
    this.updateView();
  }

  increment() {
    this.prevIndex = this.index;
    if (this.index + 1 < this.length) {
      this.index += 1;
    } else {
      this.index = 0;
    }
    this.updateView();
  }

  decrement() {
    this.prevIndex = this.index;
    if (this.index - 1 >= 0) {
      this.index -= 1;
    } else {
      this.index = this.length - 1;
    }
    this.updateView();
  }

  updateView() {
    const prevTarget = document.getElementById(
      "movie-" + this.prevIndex.toString()
    );
    if (prevTarget) {
      prevTarget.style.backgroundColor = "inherit";
    }

    const currentTarget = document.getElementById(
      "movie-" + this.index.toString()
    );
    if (currentTarget) {
      currentTarget.style.backgroundColor = "wheat";
    }
  }
}

export default new Store();
