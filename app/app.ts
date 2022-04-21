function startGame() {
    //staring new game
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to the game...';
}

//valid js is valid ts

document.getElementById('startGame')!.addEventListener('click', startGame);

//this is plain js and we will not run through typescript compiler to see how it compiles- will eventually add a dependency that compiles it for us

//to compile code manually you need to navigate to the folder that code is in (in this case app) and then type command tsc <filename>

//now it created a js file compiled from ts to js- outputs readable typescript

//if there is an issue with null and you know it exists you can add ! operator to the end to let it know you know its an object

//after going through all of the ways to see how to bundle this app- from tsc command to creating a seporate js folder- we will use webpack to automatically compile and bundle everything to a file called bundle.js- not seen in folder- that is just the js file sent to the browser