const express = require(`express`);

const route = express.Router();
const FCM = require("fcm-node");
const serverKey =
  "AAAAAfQ02XY:APA91bGKWFAiDb4ajF1EALU6Iqovst_zu1624wnTLMdwHOZo-zSVPozBEsV4XdqaAQWu0NIL1I91ScYrE1x6OkIWjba6VOBCCaYSo-Vqa31qj5Wux8J7eLz7qTsvPwPLmZMQ-X2buXDn";
const fcm = new FCM(serverKey);

route.post(`/push-notify`, async (req, res) => {
  try {
    var message = {
      to: "foQl6w_wTvi1NVcDfWMDpf:APA91bHDYuaTcO3AwvnoxvW_3K9EMjHv_Y4aDrqegAkz1XleZYdYhmi0T6GcGl43Jv10Sowk8JIW3zt6rUFVa13ENqnVVTcxdj_bQEsLZNWkdz5dO_4ZRKx-NeJwSIt4ZCTLrsJrNKbz",
      notification: {
        title: req.body.title,
        body: req.body.body,
      },
    };

    fcm.send(message, function (err, response) {
      if (err) {
        console.log("🚀 ~ file: PushNotify.js:27 ~ err:", err);
      } else {
        res.json({
          message: "Push notification success",
          error: false,
        });
        console.log("Successfully sent with response: ", response);
      }
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: CraeateOrderCon.js:8 ~ CreateOrderCon ~ error:",
      error
    );
  }
});

module.exports = route;
