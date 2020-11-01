class Transaction{
    constructor(amount, creditCard, clientId){
        this._transactionId;
        this.result = false;
        this.cc_token;
        this.clientId = clientId;
        this.amount = amount;
        this.creditCard = creditCard;
    }
}

module.exports = Transaction;