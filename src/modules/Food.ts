// Food class
class Food {
  element: HTMLElement;

  constructor() {
    // Get food element and assign it to element
    this.element = document.getElementById("food")!;
  }

  // Define a method to get the X-axis coordinate of food
  get X() {
    return this.element.offsetLeft;
  }

  // Define a method to get the X-axis coordinate of food
  get Y() {
    return this.element.offsetTop;
  }

  // Modify the position of the food
  change() {
    // Generate a random position
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;
