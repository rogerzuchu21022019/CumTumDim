`1 get accountSid and authToken in console Twilio`

`2 Tạo biến env `

```
TWILIO_ACCOUNT_SID= AC1399320e3caa4f6d9753d7c9cb586aa9
TWILIO_AUTH_TOKEN= 2456fe1e46fa348d2b056e6bf8e21773
```

`3 Tạo Otp Model`
```
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const OtpSchema = new Schema(
  {
    otpNumber: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now(),
      index: {
        expires: "20",
      },
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Otp", OtpSchema);

```

`4 Tạo Otp Service`
```
const OTP = require("../model/OTP");

const CreateOtpSv = async (otpNumber) => {
  const otp = await OTP.create({
    otpNumber,
  });
  console.log("🚀 ~ file: CreateOtp.js:7 ~ CreateOtpService ~ otp", otp)
  
  return otp;
};

module.exports = CreateOtpSv;

```

`5 Tạo Otp Controller`
```
const CreateOtpSv = require("../services/CreateOtpSv");



const CreateOtpCon = async (otpNumber) => {
  try {
    const result = await CreateOtpSv(otpNumber);
    console.log(
      "🚀 ~ file: CreateOtp.js:7 ~ CreateOtpController ~ result",
      result
    );
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: CreateOtp.js:5 ~ CreateOtpController ~ error",
      error
    );
  }
};

module.exports = CreateOtpCon;
```

`6 Add library`

```
yarn add twilio
```

`7 Tạo Router CreateOtp`

  `7.1 Add client và biến env`

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const client = require("twilio")(accountSid, authToken);

  `7.2 Create Router`
  
  `7.3 Get phoneNumber từ body gửi lên`
  ```
  const {  phoneNumber } = req.body;
  ```
  `7.4 Random ra code gồm 6 số`
  ```
  let otpNumberGen = Math.floor(Math.random() * 900000) + 100000;
  ```
  `7.5 Tạo message để gửi trong phần tin nhắn`
  ```
      const message = `Mã code xác nhận của bạn là ${otpNumberGen} \n Hãy nhập để xác nhận sđt`;

  ```
  `7.6 Thực hiện việc gửi tin nhắn từ sđt của server gửi tới sđt vừa đăng kí`
  ```
  await client.messages.create({
      body: message,
      from: "+19068222045",
      to: `+84${phoneNumber}`,
    });
  ```


