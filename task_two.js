class Phone {
    constructor(brand, model, price, screenSize, batterySize, processor, camera) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.screenSize = screenSize;
      this.batterySize = batterySize;
      this.processor = processor;
      this.camera = camera;
    }
  
    getBrand() {
      return this.brand;
    }
  
    getModel() {
      return this.model;
    }
  
    getPrice() {
      return this.price;
    }
  
    getScreenSize() {
      return this.screenSize;
    }
  
    getBatterySize() {
      return this.batterySize;
    }
  
    getProcessor() {
      return this.processor;
    }
  
    getCamera() {
      return this.camera;
    }
  
    toString() {
      return `${this.brand} ${this.model} (${this.price})`;
    }
  }
  
  const infint4Pro = new Phone("Apple", "iPhone 14 Pro", 1099, 6.1, 3095, "A16 Bionic", "12MP TrueDepth");

  const samsungGalaxyS23Ultra = new Phone("Samsung", "Galaxy S23 Ultra", 1299, 6.8, 5000, "Snapdragon 8 Gen 2", "108MP Quad");

  const googlePixel7Pro = new Phone("Google", "Pixel 7 Pro", 999, 6.7, 5000, "Google Tensor", "50MP Dual");
  
  console.log(iphone14Pro);
  console.log(samsungGalaxyS23Ultra);
  console.log(googlePixel7Pro);