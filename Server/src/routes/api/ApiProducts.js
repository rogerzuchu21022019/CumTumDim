module.exports = {
  createCategory: require(`../api/products/CreateCate`),
  findCategories: require(`../api/products/FindCategories`),
  addDish: require(`../api/products/AddDish`),
  findDishes: require(`../api/products/FindDishes`),
  uploadImage: require(`../api/media/UploadImage`),
  createOrder: require(`../api/orders/CreateOrder`),
  updateOrder: require(`../api/orders/FindOrderById`),
  getRabbit: require(`../api/rabbit/NotifyGet`),
  findOrders: require(`../api/orders/FindOrders`)
};
