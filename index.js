
function scuberGreetingForFeet(feet){
    
  if (feet <= 400) {
    return 'This one is on me!'
  
  } 
  else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks."
    
  }
  else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks."
    
  } else if (feet > 2500) {
      return "No can do."
      
  }
}
scuberGreetingForFeet()
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(20501));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(1500));


function ternaryCheckCity(city){
  // Write your code here
  const destination="NYC"
  let ternaryCheckCity;

  ternaryCheckCity=city===destination ? "Ok, sounds good." : "No go."
  return ternaryCheckCity
}
ternaryCheckCity()
console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburgh"));


function switchOnCharmFromTip(tip) {
  //let tip;
  switch (tip) {
      case "generous":
          return "Thank you so much.";
      case "not as generous":
          return "Thank you.";
      case "thanks for everything":
          return "Bye."
  }
}

switchOnCharmFromTip()

console.log(switchOnCharmFromTip("generous")); //  "Thank you so much."
console.log(switchOnCharmFromTip("not as generous")); //  "Thank you."
console.log(switchOnCharmFromTip("thanks for everything")); // "Bye."

