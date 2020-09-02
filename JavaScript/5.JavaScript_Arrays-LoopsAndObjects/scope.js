// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);
// it is better to move within the function
// so that whenever function is called variable random can have different result.
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    let days; 
  if (event === 'Marathon') {
    /*let*/days = 50; 
    // variable should declare before if condition. 
    // and since variable already declared we don;t need to use let again.
  } else if (event === 'Triathlon') {
    /*let*/days = 100;
  } else if (event === 'Pentathlon') {
    /*let*/days = 200;
  }
  return days;
};

// The scope of `name` is too tight 
const name = 'Nala';
// variable name used(declared) in different function 
//so it is better to declared before both functions for using in both.
//and is better to put 2 parameter for using name variable.
const logEvent = (name, event) => {
//   const name = 'Nala';    
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
//   const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(name, event);
logTime(name, days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
