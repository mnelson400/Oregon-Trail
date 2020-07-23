const mainElement = document.querySelector ('main');

    let wagon = new Wagon(2)
    // Create three travelers
    let henrietta = new Traveler('Henrietta')
    let juan = new Traveler('Juan')
    let maude = new Traveler('Maude')
    console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } - EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)

const divElement1 = document.createElement ('div');
mainElement.append (divElement1);
divElement1.append (`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } - EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`);
    
    wagon.join(henrietta)
    console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } - EXPECTED: 1. Henrietta just joined.`)

const divElement2 = document.createElement ('div');
mainElement.append (divElement2);
divElement2.append (`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } - EXPECTED: 1. Henrietta just joined.`);
     
    wagon.join(juan)
    wagon.join(maude)  // There is no room for her!
    console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } - EXPECTED: 0 - There is no room for Maude, but Juan was able to join.`)

const divElement3 = document.createElement ('div');
mainElement.append (divElement3);
divElement3.append (`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } - EXPECTED: 0 - There is no room for Maude, but Juan was able to join.`);
    
    henrietta.hunt()   // Henrietta goes in search of food.
    juan.eat()         // Juan eats - as Juan does. 🤣
    juan.eat()         // Juan has run out of food!
    console.log(juan)
    console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } - EXPECTED: true. Juan has run out of food and become unhealthy!`)

const divElement4 = document.createElement ('div');
mainElement.append (divElement4);
divElement4.append (`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } - EXPECTED: true. Juan has run out of food and become unhealthy!`);
     
    console.log(`Wagon's Total Food?: ${ wagon.totalFood() } - EXPECTED: 3.`)
 
const divElement5 = document.createElement ('div');
mainElement.append (divElement5);
divElement5.append (`Wagon's Total Food?: ${ wagon.totalFood() } - EXPECTED: 3.`);
