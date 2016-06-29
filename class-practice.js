class bankAccount {
  constructor(name) {
    this.name = name;
  }

  static balance(sumOfBalance){
    console.log("balance: " + sumOfBalance.name);
  }


  withdrawal() {
    console.log(this.name + ' withdrew from bank account balance.')
  }


  deposit() {
  console.log(this.name + ' makes a deposit.');
  }

}

 class checkingAccount extends bankAccount {
    processCheck() {
  	 super.processCheck();
      console.log(this.name + ' processed a check.');
    }

    withdrawal(withdraw) {
  	 super.withdrawal();
      console.log(this.name + ' withdrew from checking $' + withdraw);
    }

   static insufficientFundsFee(fee){
     console.log("Insufficient funds fee $" + fee);
   }

  }

  class savingsAccount extends bankAccount {

    depositMonthlyInterest() {
      super.depositMonthlyInterest();
        console.log(this.name + ' deposited monthly interest.');
    }

    withdrawal(withdraw) {
  	 super.withdrawal();
      console.log(this.name + ' withdrew from savings $' + withdraw);
    }

  static annualInterestRate(percentage){
    console.log("Annual interest rate " + percentage + "%");
    }

  }

var fee = "";

var percentage = "";

var withdraw = "";

var acc1 = new bankAccount('Jimmy Jonas');
var acc2 = new savingsAccount('Jimmy Jonas');

acc1.withdrawal(222);
acc2.withdrawal(10);
