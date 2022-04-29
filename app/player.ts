//now that config file only uses app.ts you need to reference the person file to be used in this file
/// <reference path="person.ts" />
//begining to create a chain of dependencies
//app > this file > person- with this technique each file can specify the other files that they depend on so you can be much more precise about what you actuall compile



class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}

//match the person interface
// support same ? syntax for optional members
//classes that implement interfaces but implement all of the required members for the interface but may also include additional properties not defined on interface