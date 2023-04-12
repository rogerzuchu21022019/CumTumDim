module.exports = {
    login: require('./users/Login'),
    createOtp:require(`./users/CreateOTP`),
    verifyOtp:require(`./users/VerifyOtp`),
    updateUserById:require(`./users/UpdateUserById`),
    findUserById:require(`./users/FindUserById`),
    updateNotification: require(`../api/users/UpdateNotification`),
    
}