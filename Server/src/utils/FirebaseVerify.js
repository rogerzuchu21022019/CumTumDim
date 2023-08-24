// firebase-auth.js

const admin = require("firebase-admin");
const serviceAccount = require("../firebase_sevice/firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendMessage = async (fcmDeviceToken, title, body, data) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    data: data,
    token: fcmDeviceToken,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Tin nhắn đã được gửi:", response);
  } catch (error) {
    console.log("Lỗi khi gửi tin nhắn:", error);
  }
};
module.exports = { sendMessage };
