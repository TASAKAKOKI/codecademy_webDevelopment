const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let cook = await cookBeanSouffle();
    console.log(`${cook} is served!`);
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
};
hostDinnerParty();




