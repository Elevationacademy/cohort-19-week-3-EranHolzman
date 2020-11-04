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