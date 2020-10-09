const numberBills = document.querySelector('#number')
const numberPeople = document.querySelector('#number-people')
const displayTotal = document.querySelector("#display-total")

numberBills.addEventListener('input', calculate)
numberPeople.addEventListener('input', calculate)
// isBirthday.addEventListener('input', calculate)

function calculate() {
    const billValue = numberBills.value
    const peopleValue = parseInt(numberPeople.value)
    // const monthValue = isBirthday.value
    const coins = 5
    const totalCoins = billValue * coins
    const peopleCoins = totalCoins / peopleValue
    var x = document.getElementById("is-birthday").value;
    if(x== "0"){
        displayTotal.innerHTML= parseInt(peopleCoins)
    }else if(x == "1"){
       const birthdayTotal = peopleCoins + 5
       displayTotal.innerHTML = parseInt(birthdayTotal)
    }
    if(x== "2"){
        displayTotal.innerHTML= parseInt(peopleCoins)
    }
}
calculate()

