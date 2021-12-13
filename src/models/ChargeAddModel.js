export default class ChargeAddModel {
  constructor() {
    this.totalCharge;
  }

  setLocalCharge(charge) {
    const localCharge = JSON.parse(localStorage.getItem("CHARGE"));  
    localCharge 
    ? this.totalCharge = Number(localCharge) + Number(charge)
    : this.totalCharge = Number(charge);
    localStorage.setItem("CHARGE", JSON.stringify(this.totalCharge));
  }

  getLocalCharge () {
    const localTotalCharge = localStorage.getItem("CHARGE");
    const parseLocalTotalCharge = JSON.parse(localTotalCharge);
    
    return parseLocalTotalCharge;
  }
}