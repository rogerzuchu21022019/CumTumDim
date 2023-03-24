`1 add library`

```
yarn add multer cloudinary
```

`2 Tạo Multer.js trong ultils`

```
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}_${file.originalname}.jpg`);
  },
});
// ok
const upload = multer({ storage: storage });
module.exports = upload

```

`3 config cloudinary `
```
1 config trong .env

CLOUD_NAME=djwirnhux
API_KEY=341531521271997
API_SECRET=UNCFUHf93ae8rwOlJCgoI62FNFk
```

```
2 Tạo cloudinary.js trong utils

const cloudinary = require("cloudinary").v2;
require(`dotenv`).config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

console.log(`Cloudinary config: `, cloudinary.config());
module.exports = cloudinary;
```

`3 Viết router`
```
const express = require(`express`);
const Cloudirary = require("../../../utils/Cloudirary");

const router = express.Router();

router.post(`/upload-image`, async (req, res) => {
  try {
    const file = req.file;
    console.log("🚀 ~ file: UploadImage.js:8 ~ router.post ~ file:", file);

    const result = await Cloudirary.uploader.upload(file.path, {
      secure: true,
      folder: "cumtum",
      allowed_formats: ["jpg", "png", "jpeg"],
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    });

    res.status(200).json({
      status: `Success`,
      message: `Upload Image success`,
      isLoading: false,
      isLoggedIn: true,
      error: false,
      imageUrl: result.url,
    });
  } catch (error) {
    console.log("🚀 ~ file: UploadImage.js:15 ~ router.post ~ error:", error);
    res.status(500).json({
      status: `Error`,
      message: `Upload Image error`,
      isLoading: false,
      isLoggedIn: true,
      error: true,
      imageUrl: null,
    });
  }
});
module.exports = router;
```

