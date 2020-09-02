let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
// console.log(storyWords);

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word))
// console.log(betterWords.length);

let countReally = countVery = countBasically = countNormal = 0;
const countOverUsed = betterWords.forEach(word => {
  switch(word) {
    case 'really': countReally += 1;
      // console.log(countReally, word);
      break;
    case 'very': countVery += 1;
      // console.log(countVery, word);
      break;
    case 'basically': countBasically += 1;
      // console.log(countBasically, word);
      break;
    default: countNormal += 1;
      // console.log(countNormal, word);
      break;
  }
})
const countedArray = [];
countedArray.push(countReally, countVery, countBasically, countNormal);

// console.log(countedArray);
const total = countedArray.reduce(((acc,cur) => acc + cur), 0) - countedArray[3];

let countSentences = 0;
for(word of betterWords) {
  if(word[word.length - 1] === "." || word[word.length - 1] === "!") {
    countSentences += 1;
  }
}
console.log(`total words are : ${betterWords.length}`);
console.log(`total sentences are : ${countSentences}`);
console.log(`Really used : ${countedArray[0]}\nVery used : ${countedArray[1]}\nBasically used : ${countedArray[2]}\nTotal overused Words are : ${total}`);

const betterWordsInStr = betterWords.join(' ');
console.log(betterWordsInStr);

function countEachWords(array) {
  let obj = {};
  array.forEach(word => {
    if(!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  })
  return obj;
}

/*
more challenges.
Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.
Here are some ideas:
-For the overused words, remove it every other time it appears.
-Write a function that finds the word that appears the greatest number of times.
-Replaced overused words with something else.
*/