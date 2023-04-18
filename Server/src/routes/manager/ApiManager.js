/* Check import lại mấy cái router này khi import */
const ApiProducts = require("../api/ApiProducts");
const ApiUser = require("../api/ApiUser");

/* Được gọi từ app.js */
const ManagerRouter = (app, fixPublic) => {
  // https://congtydacap.club/api/users/auth-login
  //                      domain/ MAIN  /  SUB  /  ENDPOINT  /  parameter
  // api sẽ được ghép từ 4 thằng trên
  // api sẽ được ghép từ MAIN và nhiều SUB khác nhau, thêm endpoint và parameter . Dòng 27,28 là chia subDirectory

  // liên quan cấu trúc thư mục nên phải tổ chức giống vậy
  // routes
  //  .api => MAIN  //=> folder
  //    -users => SUB //=>folder con của api
  //      -auth => next //=> folder con của users
  //         -ENDPOINT // => tên file cũng là tên end_point
  //            -parameter // => là string, được đặt khi query, có giá trị theo key:value , getByID,

  //    -products => sub // folder bằng cấp users

  // auth-login là biểu thị cho login nằm trong sub auth,auth nằm trong sub users
  // nhưng do phân cấp lv api bị giới hạn nên chuyển auth/login thành auth-login

  const MAIN = "/api";
  const USERS = "users";
  const PRODUCTS = "products";
  const SUB_USERS = `${MAIN}/${USERS}`; //=> xoá bớt 1{} đi vì dư
  const SUB_PRODUCTS = `${MAIN}/${PRODUCTS}`; //=> xoá bớt 1{} đi vì dư
  //=> Check lại hết theo project theo project

  /* Media */
  app.use(MAIN, ApiProducts.uploadImage, fixPublic);

  /* Users */
  app.use(MAIN, ApiUser.login, fixPublic);
  app.use(MAIN, ApiUser.updateUserById, fixPublic);
  app.use(SUB_USERS, ApiUser.createOtp, fixPublic);
  app.use(SUB_USERS, ApiUser.verifyOtp, fixPublic);
  app.use(SUB_USERS, ApiUser.findUserById, fixPublic);
  app.use(SUB_USERS, ApiUser.pushNotification, fixPublic);
  app.use(SUB_USERS, ApiUser.updateNotification, fixPublic);

  //   app.use(MAIN, ApiUser.logoutRouter, fixPublic);
  //   app.use(SUB_USERS, ApiUser.registerRouter, fixPublic);

  //   /* Products */
  app.use(SUB_PRODUCTS, ApiProducts.createCategory, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.updateCategoryById, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.deleteCategory, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.findCategories, fixPublic);

  app.use(SUB_PRODUCTS, ApiProducts.addDish, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.updateDishById, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.deleteDishById, fixPublic);

  app.use(SUB_PRODUCTS, ApiProducts.findDishes, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.createOrder, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.updateOrder, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.findOrders, fixPublic);
  app.use(SUB_PRODUCTS, ApiProducts.getRabbit, fixPublic);

  //   app.use(SUB_PRODUCTS, ApiProduct.chartRouter, fixPublic);
  //   app.use(SUB_PRODUCTS, ApiProduct.dataTableRouter, fixPublic);
};

module.exports = ManagerRouter;
