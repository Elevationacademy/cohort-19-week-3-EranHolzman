//Exercise 1

const StringFormatter = function () {

    const capitalizeFirst = function (name) {
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
        console.log(nameCapitalized)

    }

    const skewerCase = function (string) {
        const str = string.replace(/ /g, '-');
        console.log(str)
    }

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box


//Exercise 2

const Bank = function () {
    
    let balance = 500

    const depositCash = function (money){

        balance += money
    }
 
    const checkBalance = function (){
        console.log(balance)

    }
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
