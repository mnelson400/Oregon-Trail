// Traveler Class
// The Traveler class (blueprint) should set the following properties for each instance:
//  1. a name, which must be provided as a parameter to the constructor.
//  2. an amount of food, with an initial value of 1.
//  3. an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.
class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

//  1. hunt() - Increases the traveler's food by 2.
    hunt () {
        this.food += 2;
    }

//  2. eat() - Consumes 1 unit of the traveler's food. If the traveler doesn't 
//      have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    eat () {
        if (this.food === 0) {
            this.isHealthy = false;

        } else {
            this.food -= 1;
        }
    }
}

// Wagon Class
// The Wagon class should set the following properties for each instance:
//  1. a capacity, which must be provided to the constructor: this is the 
//      maximum number of passengers a wagon can hold.
//  2. a passenger list, which is initially an empty array.
class Wagon {
    constructor (capacity) {
        this.capacity = capacity;
        this.passengerList = [];
    }
    
//  1. getAvailableSeatCount() - Returns the number of empty seats, determined by the capacity 
//      set when the wagon was created, subtracted by the number of passengers currently on board.
    getAvailableSeatCount () {
        return (this.capacity - this.passengerList.length);
    }

//  2. join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is 
//      already at maximum capacity, don't add them.
    join (traveler) {
        if (this.getAvailableSeatCount () > 0) {
            this.passengerList.push (traveler);
        } 
    }

//  3. shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. 
//      Return false if not.
    shouldQuarantine () {
        for (let index = 0; index < this.passengerList.length; index += 1) {
            let passengersHealth = this.passengerList [index];
            if (passengersHealth.isHealthy === false) {
                return true;
            }
        }
        return false;
    }

//  4. totalFood() - Returns the total amount of food among all passengers in the wagon.
    totalFood () {
        let totalAmountOfFood = 0
        for (let index = 0; index < this.passengerList.length; index += 1) {
            let eachPassengerFood = this.passengerList [index];
            totalAmountOfFood += eachPassengerFood.food;
        }
        return totalAmountOfFood;
    }
}