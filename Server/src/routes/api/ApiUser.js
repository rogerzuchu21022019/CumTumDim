module.exports = {
  login: require("./users/Login"),
  createOtp: require(`./users/CreateOTP`),
  verifyOtp: require(`./users/VerifyOtp`),
  updateUserById: require(`./users/UpdateUserById`),
  findUserById: require(`./users/FindUserById`),
  pushNotification: require(`./users/PushNotification`),
  updateNotification: require(`./users/UpdateNotification`),

  addAddress: require(`./users/AddAddress`),
  updateAddress: require(`./users/UpdateAddress`),

};
