// firebase-auth.js

const admin = require('firebase-admin');

const getFCMToken = async (idToken) => {
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const userRecord = await admin.auth().getUser(uid).then((userRecord) => userRecord.toJSON().uid);;
    console.log("🚀 ~ file: FirebaseVerify.js:10 ~ getFCMToken ~ userRecord:", userRecord)
    return userRecord.toJSON().uid;
  } catch (error) {
    console.error('Error retrieving FCM token:', error);
    return null;
  }
};

module.exports = { getFCMToken };
