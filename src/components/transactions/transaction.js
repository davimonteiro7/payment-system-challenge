class Transaction{
    constructor(amount, creditCard, clientId){
        this._clientId = clientId;
        this._amount = amount;
        this._creditCard = creditCard;
        this.cc_token = creditCard.cc_token;
        this.result = false;
    }
}

module.exports = Transaction;