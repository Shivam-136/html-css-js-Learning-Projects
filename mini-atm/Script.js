let balance = 1000;
let banking = false;

do {
    let userChoice = prompt(`
    Welcome to Mini ATM
    Choose OPTIONS From Below!

    a) Check Balance
    b) Withdraw Money
    c) Deposit Money
    d) exit`)
    switch (userChoice) {
        case "a":
            alert("Your Current Balance Is: ₹" + balance)
            break;
        case "b":
            Withdraw()
            break;
        case "c":
            Deposit()
            break;
        case "d":
            alert("Thankyou For Using Our Service Bye!")
            break;
        default:
            alert("Invalid Input!!!")
            break;
    }
    continueConfirm()

} while (banking)

function Withdraw() {
    let ammount = Number(prompt("Enter Ammount to withdraw :"))
    if (ammount != NaN && ammount <= balance) {
        balance -= ammount // balance = balance - ammount
        alert(ammount + " Deducted From you account! \n \n Remaining Balance is: " + balance)
    } else {
        alert("invalid Input.")
    }
}



function Deposit() {
    let ammount = Number(prompt("Enter Ammount to be deposit:"))
    if (ammount != NaN && ammount > 0) {
        balance += ammount
        alert("ammount credited to your account! \n\n Your current balance is : " + balance)
    } else {
        alert("invalid Input.")
    }
}


function continueConfirm() {
    banking = confirm("Would Like to use again?") //false
    if (!banking) {
        alert("Operation Cancelled!")
    }
}
