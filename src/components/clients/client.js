class Client{
    constructor(first_name, last_name, email){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.createdAt = new Date();
        this.transactions = [];
    }

    addTransactions(transaction){
        this.transactions.push(transaction);
    }
}

module.exports = Client;
