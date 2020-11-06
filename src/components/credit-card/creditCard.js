class CreditCard {
  
  constructor({number, issuer, expire_month, expire_year, cvv}) {
    this._number = number;
    this._issuer = issuer;
    this._expire_month = expire_month;
    this._expire_year = expire_year;
    this._cvv = cvv;
    this.cc_token = this.generateToken();
  }

  generateToken(){
    return "ramdom Token"
  }
}

module.exports = CreditCard;