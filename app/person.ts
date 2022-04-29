interface Person {
    name: string;
    age?: number;
    formatName: () => string;
}

// ? makes property optional- can be number or undefined for age
//formatName will have to provide an implementation method for that function
