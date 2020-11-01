class CreditCard {
  constructor(number, issuer, expire_month, expire_year, cvv) {
    this.number = number;
    this.issuer = issuer;
    this.expire_month = expire_month;
    this.expire_year = expire_year;
    this.cvv = cvv;
    this.cc_token;
  }
}

module.exports = CreditCard;