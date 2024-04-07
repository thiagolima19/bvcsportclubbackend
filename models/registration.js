module.exports = class Registration {
  constructor(userID, userFullName, userAddress, userStatus, fee) {
    this.userID = userID;
    this.userFullName = userFullName;
    this.userAddress = userAddress;
    this.userStatus = userStatus;
    this.fee = fee;
  }
};
