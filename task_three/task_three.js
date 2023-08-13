class Dog {
    constructor(breed, color, size, tail) {
      this.breed = breed;
      this.color = color;
      this.size = size;
      this.tail = tail;
    }
  
    bark() {
      return `${this.breed} dog is barking! Woof woof!`;
    }
  
    walk() {
      return `${this.breed} dog is walking.`
    }
  
    run() {
      return `${this.breed} dog is running at full speed!`
    }
  
    wiggleTail() {
      return `Wiggling tail !`
    }
  
    getAngry() {
      return `${this.breed} dog is getting angry.`
    }
  }
  
  // Create instances of the Dog class
  const dog1 = new Dog("Labrador", "Yellow", "Large", "Long");
  const dog2 = new Dog("German Shepherd", "Black and Tan", "Large", "Long");
  const dog3 = new Dog("Poodle", "White", "Small", "Curly");
  
  // Function to display dog actions in the UI
  function displayMessage(message) {
    const displayArea = document.getElementById("displayArea");
    displayArea.textContent = message;
  }
  
  // Event listeners for dog buttons
  const barkButton = document.getElementById("barkButton");
  barkButton.addEventListener("click", () => {
    const message = dog1.bark(); // Update with the appropriate dog instance
    displayMessage(message);
  });
  
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", () => {
    const message = dog2.run(); // Update with the appropriate dog instance
    displayMessage(message);
  });
  
  const getAngryButton = document.getElementById("getAngryButton");
  getAngryButton.addEventListener("click", () => {
    const message = dog3.getAngry(); // Update with the appropriate dog instance
    displayMessage(message);
  });
  
  const wiggleTailButton = document.getElementById("wiggleTailButton");
  wiggleTailButton.addEventListener("click", () => {
    const message = dog1.wiggleTail(); // Update with the appropriate dog instance
    displayMessage(message);
  });