const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});
// ok
const upload = multer({ storage: storage });
module.exports = upload
