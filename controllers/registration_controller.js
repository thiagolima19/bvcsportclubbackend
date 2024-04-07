const Registration = require("../models/registration");

exports.register = (req, res) => {
  const data = req.body;
  const fee = calculateFee(data.userStatus);
  const registration = new Registration(
    data.userID,
    data.userFullName,
    data.userAddress,
    data.userStatus,
    fee
  );
  console.log(registration);
  res.json(registration);
};

function calculateFee(userStatus) {
  if (userStatus == "student") {
    return 10;
  } else if (userStatus == "staff") {
    return 50;
  } else {
    return 0;
  }
}
