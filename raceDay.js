let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 16;
if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
  console.log(`The time for your race is 9:30 am. and your race number is ${raceNumber} `);
}
else if (runnerAge > 18 && !registeredEarly){
  console.log(`The time for your race is 11:00 am. and your race number is ${raceNumber} `);
}
else if (runnerAge < 18){
  console.log(`The time for your race is 12:30 pm. and your race number is ${raceNumber}`);
}
else{
  console.log('Please see the registration desk');
}