// firebase-auth.js

const admin = require("firebase-admin");
const serviceAccount = require("../firebase_sevice/cumtum-35a73-603682cdc4b6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const getFCMToken = async (idToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    console.log("🚀 ~ file: FirebaseVerify.js:13 ~ getFCMToken ~ uid:", uid);
    const userRecord = await admin.auth().getUser(uid);
    console.log(
      "🚀 ~ file: FirebaseVerify.js:10 ~ getFCMToken ~ userRecord:",
      userRecord
    );
    return userRecord.toJSON().uid;
  } catch (error) {
    console.error("Error retrieving FCM token:", error);
    return null;
  }
};

module.exports = { getFCMToken };
