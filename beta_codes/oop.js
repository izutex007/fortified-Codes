function Checking(amount){
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
    
}
//function definitions

function deposit(amount){
    this.balance+=amount;
}

function withdraw(amount){
    if(amount <= this.balance){
        this.balance-=amount;
    }
    if(amount > this.balance){
        console.log('insufficient funds')
    }
}

function toString (){
    return "balance: "+ this.balance;
}

var account = new Checking(500); // a new instance of checking i//created called account...(500) is the new amount (entered).

account.deposit(1000); // 1000 is also"deposited"
console.log(account.toString());// balance: 1500
account.withdraw(750); //we withdrawed 750 from the initial amount
console.log(account.toString());// balance: 750

account.withdraw(800);  // insufficient funds



