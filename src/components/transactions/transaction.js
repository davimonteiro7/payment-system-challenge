class Transaction{
    constructor(amount, creditCard){
        this.result = false;
        this.cc_token;
        this.amount = amount;
        this.creditCard = creditCard;
    }
}

module.exports = Transaction;