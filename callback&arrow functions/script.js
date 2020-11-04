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



let capitalize=(str) =>{ return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

 console.log(capitalize("bOb")) // returns Bob
 console.log(capitalize("TAYLOR")) // returns Taylor
 console.log(capitalize("feliSHIA")) // returns Felishia
