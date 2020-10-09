const numberBills = document.querySelector('#number')
const numberPeople = document.querySelector('#number-people')
const isBirthday = document.getElementById("#is-birthday")
const displayTotal = document.querySelector("#display-total")


numberBills.addEventListener('input', calculate)
numberPeople.addEventListener('input', calculate)

// isBirthday.addEventListener('input', calculate)





function calculate (){
    const billValue = numberBills.value
    const peopleValue = parseInt(numberPeople.value)
    // const monthValue = isBirthday.value
    const coins = 5










    const totalCoins = billValue * coins
    const peopleCoins = totalCoins / peopleValue

    displayTotal.innerHTML= parseInt(peopleCoins)
    


}

calculate()