/*
Instructions
- Create a function called calculator that has 3 arguments: value1, operator and value2
- By using a switch statement, ask for each case to find out what's the operator being passed to the function, then set the result of that operation by using value1 and value2
*/
//Add you code here
function calculator(value1,operator,value2){
  switch(operator){
    case '+':
      let first =(value1+value2);
      return first;
      break;
      case '-':
        let second = (value1-value2);
        return second;
        break;
        case '*':
          let third = (value1*value2);
          return third;
          break;
          case '/':
            let fourth = (value1/value2);
            return fourth;
            break;
            case '/':
              let fifth = (value1/value2);
              return fifth;
              break;
              default:
                console.log("Calculater Error");
}
}
  //uncomment next lines one by one, then check the console for results
   console.log(calculator(1, '+', 1))
   console.log(calculator(3, '-', 2))
   console.log(calculator(3, '*', 2))
   console.log(calculator(30, '/', 2))
   console.log(calculator(5, '/', 0))
  
  //don't change this line
  if (typeof module !== "undefined") {
    module.exports = {
      calculator,
    };
  }
  