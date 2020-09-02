const inputArray = ['The quick brown fox jumps over a lazy dog', 'turpentine and turtles', 'Hi, Human', 'a Whale of a deal'];
const random = Math.floor(Math.random() * inputArray.length);
const input = inputArray[random];
const input0 = 'The quick brown fox jumps over a lazy dog';

const input1 = 'turpentine and turtles';
const input2 = 'Hi, Human';
const input3 = 'a Whale of a deal';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for(let i = 0; i < input.length; i++) {
  // console.log(`i is ${i}`);
  for(let j = 0; j < vowels.length; j++) {
    // console.log(`j is ${j}`);
    if(input[i] == vowels[j]) {
      resultArray.push(input[i]);
    };
  };
    if(input[i] == vowels[1] || input[i] == vowels[4]) {
      resultArray.push(input[i]);
    };
};
const human = input;
const whale = resultArray.join('').toUpperCase();
console.log(`human words : ${human}\nwhale words : ${whale}`);