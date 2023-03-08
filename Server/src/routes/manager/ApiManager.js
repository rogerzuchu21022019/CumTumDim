/* Check import lại mấy cái router này khi import */
const ApiUser = require("../api/ApiUser");
// const ApiProduct = require(`../api/Api.Product`);

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
  /* Users */
  app.use(MAIN, ApiUser.login, fixPublic);
//   app.use(MAIN, ApiUser.logoutRouter, fixPublic);
//   app.use(SUB_USERS, ApiUser.registerRouter, fixPublic);

//   /* Products */
//   app.use(MAIN, ApiProduct.homeRouter, fixPublic);
//   app.use(SUB_PRODUCTS, ApiProduct.analysticRouter, fixPublic);
//   app.use(SUB_PRODUCTS, ApiProduct.chartRouter, fixPublic);
//   app.use(SUB_PRODUCTS, ApiProduct.dataTableRouter, fixPublic);
};

module.exports = ManagerRouter;
