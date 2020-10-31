class CreditCard {
  constructor(number, issuer, expire_month, expire_year, cvv) {
    this.number = number;
    this.issuer = issuer;
    this.expire_month = expire_month;
    this.expire_year = expire_year;
    this.cvv = cvv;
  }
}

module.exports = CreditCard;