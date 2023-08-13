class Car {
    constructor(numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe, convertible, numbOfDoors) {
      this.numSeats = numSeats;
      this.numbHeadLamps = numbHeadLamps;
      this.fuelTankMaxLitre = fuelTankMaxLitre;
      this.numbExhaustPipe = numbExhaustPipe;
      this.convertible = convertible;
      this.numbOfDoors = numbOfDoors;
    }
  
    printCarDetails() {
      console.log(`Number of seats: ${this.numSeats}`);
      console.log(`Number of head lamps: ${this.numbHeadLamps}`);
      console.log(`Fuel tank max litre: ${this.fuelTankMaxLitre}`);
      console.log(`Number of exhaust pipes: ${this.numbExhaustPipe}`);
      console.log(`Convertible: ${this.convertible}`);
      console.log(`Number of doors: ${this.numbOfDoors}`);
    }
  }
  
  const car1 = new Car(4, 2, 50, 2, false, 4);
  const car2 = new Car(2, 4, 60, 4, true, 2);
  const car3 = new Car(6, 6, 100, 6, false, 6);
  
  car1.printCarDetails();
  car2.printCarDetails();
  car3.printCarDetails();
