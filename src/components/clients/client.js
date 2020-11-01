class Client{
    constructor(first_name, last_name, email){
        this._id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.cratedAt = new Date();
    }
}

module.exports = Client;