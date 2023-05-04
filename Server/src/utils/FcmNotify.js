const FCM = require("fcm-node");
const serverKey =
  "AAAAAfQ02XY:APA91bGKWFAiDb4ajF1EALU6Iqovst_zu1624wnTLMdwHOZo-zSVPozBEsV4XdqaAQWu0NIL1I91ScYrE1x6OkIWjba6VOBCCaYSo-Vqa31qj5Wux8J7eLz7qTsvPwPLmZMQ-X2buXDn";
const fcm = new FCM(serverKey);

const FcmNotify = async (fcmTokenDevice, title, body, orderStatus) => {
  try {
    var message = {
      to: fcmTokenDevice,
      notification: {
        title: title,
        body: `Đơn hàng của bạn có tổng tiền là : ${body}K đã được ${orderStatus}`,
      },
    };

    fcm.send(message, function (err, response) {
      if (err) {
        // console.log("🚀 ~ file: PushNotify.js:27 ~ err:", err);
      } else {
        // console.log("Successfully sent with response: ", response);
      }
    });
  } catch (error) {
    console.log("🚀 ~ file: FcmNotify.js:5 ~ FcmNotify ~ error:", error);
  }
};

module.exports = FcmNotify;
