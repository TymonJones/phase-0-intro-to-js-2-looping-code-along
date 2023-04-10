// Code your solutions in this file
// for (let i = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

function writeCards(names, event) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
  }
  return messages;
} 

let countDown = function(i) {
  console.log(i);
  i > 0 && countDown(i - 1);
}
  countDown(10);

