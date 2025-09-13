// PRACTICE - KYLE SIMPSON JS BOOK PAGE 38
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;
var amount = 0;

function formatAmountToDollar(amt) {
    return '$' + amt.toFixed(2);
}

function calculateTax() {
    while (bank_balance > amount) {
        if (amount < SPENDING_THRESHOLD) {
            amount += ACCESSORY_PRICE;
        }
        amount = amount * TAX_RATE;
        console.log(formatAmountToDollar(amount));
    }
    if (amount <= bank_balance) {
       console.log("YOU CAN PURCHASE");
       return;
    }
    console.log("YOU CAN NOT PURCHASE");
}

calculateTax();