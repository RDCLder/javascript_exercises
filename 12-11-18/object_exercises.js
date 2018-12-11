// Object Exercises 2

// -------------------------------------------------------------------------------------------

// Inheritance

var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function() {
        console.log("First Name: " + this.firstName);
        console.log("Last name: " + this.lastName);
        console.log("Eye Color: " + this.eyeColor);
        console.log("Hair Color: " + this.hairColor);
    }
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};

daughter.__proto__ = mom;

// One

// for (property in daughter) {
//     console.log(property + ": " + daughter[property]);
// }

// Two

// console.log(mom.showInfo());
// console.log(daughter.showInfo());

// -------------------------------------------------------------------------------------------

// Person

class Person {
    
    constructor (name) {
        this.name = name;
        this.friends = [];
    }

    addFriend (friend) {
        this.friends.push(friend);
    }

    createGreeting (other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.'; 
    }

    greet (other) {
        return this.createGreeting(other); 
    }

    lazyGreet (other) {
        var name = this.name;
        var otherName = other.name;
        setTimeout(function (name, otherName) {
            return 'Yo ' + otherName + '! from ' + name + '.'; 
        }, 2000);
    }

    createGreetingsForFriends () {
        // console.log(this.friends.map(function(a) {return this.createGreeting(a);}));
        let name = this.name;
        return this.friends.map(function(other) {return "Yo " + other.name + "! from " + name + ".";});
    }

}

aPerson = new Person("Veronica");
aPerson2 = new Person("Paul");
// console.log(aPerson.greet(aPerson2));

// -------------------------------------------------------------------------------------------

// Thesis Thises

// console.log(aPerson.lazyGreet(aPerson2));

// -------------------------------------------------------------------------------------------

// Thesis Thises 2

var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);

// console.log(alfie.createGreetingsForFriends());