// Exercise 1

const pushPull = function (func) {
    return func()

}
const pull = function () {
    console.log("pulling it!")
}

const push = function () {
    console.log("pushing it!")
}

pushPull(push)
pushPull(pull)

// Exercise 2

const currentTime = new Date()
const getTime = function (func) {
    func(currentTime)
    
}

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

getTime(returnTime)

//Exercise 3

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, logData, "I like to party")

  function logData(data){
      console.log(data);
  }
  

//Exercise 4

const sumFunc = (num1,num2,num3) => num1 + num2 + num3
sumFunc(3,5,9);


//Exercise 5

let capitalize=(str) =>{ return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 console.log(capitalize("bOb")) // returns Bob
 console.log(capitalize("TAYLOR")) // returns Taylor
 console.log(capitalize("feliSHIA")) // returns Felishia


// Exercise 6

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = temp => "its" + determineWeather(temp)
  