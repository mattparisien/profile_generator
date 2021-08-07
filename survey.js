//The readline module provides an interface for reading
//data from a readable stream (such as process.stdin),
//one line at a time.

//First require the module
//Then create an inerface using the createInterface method (assign input & output)
//From the interface variable, call the question method, which takes in the question as the first argument, and a callback as the second
//This callback takes the "answer" as a parameter, which is then used in the return message. 
//Once the question is successfully answered, the callback is "called back";


//First access the module
const readline = require('readline'); //readline is a node module 

const rl = readline.createInterface({ //readline's createInterface method takes in an object as an arg
  input: process.stdin, //process object provides info about the current node.js process
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What do you like to listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('Which meal is your favourite? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('What\'s your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

