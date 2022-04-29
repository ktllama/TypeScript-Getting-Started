//now that our config file only specifies to compile this file and not our other ts files, we can add a triple slash directive up here to tell this file to include our classes and in interfaces files
//us ref snippet to create a single line comment that must appear at the beginning of a file in order to provide additional instructions to the compiler- such as provide a reference to another file
//below you will provide the path to the file you want to reference in this file. 
/// <reference path="player.ts" />
//this tells the compiler that the code in this file is dependent on the file in this path
//now the compiler will compile player.ts whenever it compiles app.ts

function startGame() {
    //staring new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(10, playerName);
    postScore(-5, playerName)

}

//valid js is valid ts

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`this is player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === ' ') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    //giving functions an annotated type 
    let logger: (value: string) => void;
    //logger can now accept any function that accepts a single string param and returns void- just like the message and error functions below, so now we can pass these two functions through this variable function using the if statement below
    if  (score < 0){
        logger= logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScore');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}
//!CLASS USE EXAMPLES

const firstPlayer: Player = new Player()
//assigning firstPlayer to player type, then initializing it to an instance of the Player class using the new keyword followed by the class name and ()
//with a new class instance assigned to the variable i can begin using the class members on the instance
firstPlayer.name='Lanier';
console.log(firstPlayer.formatName());

//when you compile classes it does need to be compiled to javascript and delivered to the browser for your app to work

//!INTERFACE USE EXAMPLES

// let myResult: Result = {
//     playerName: 'Marie',
//     score: 5,
//     problemCount: 5,
//     factor: 7
// };
// //this will make sure that myResult uses the Result interface- now required to use the properties from Result in this object literal

// let player: Person = {
//     name: 'Daniel',
//     formatName: () => 'Dan'
// }
//note you dont need age bc its an optional property

//interfaces are a development time tool- theyre used by the compiler to type check your code but they dont compile down to anythin in js

//!INTRO NOTES
//this is plain js and we will not run through typescript compiler to see how it compiles- will eventually add a dependency that compiles it for us

//to compile code manually you need to navigate to the folder that code is in (in this case app) and then type command tsc <filename>

//now it created a js file compiled from ts to js- outputs readable typescript

//if there is an issue with null and you know it exists you can add ! operator to the end to let it know you know its an object

//after going through all of the ways to see how to bundle this app- from tsc command to creating a seporate js folder- we will use webpack to automatically compile and bundle everything to a file called bundle.js- not seen in folder- that is just the js file sent to the browser