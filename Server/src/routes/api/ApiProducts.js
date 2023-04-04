module.exports = {
  createCategory: require(`../api/products/CreateCate`),
  findCategories: require(`../api/products/FindCategories`),
  addDish: require(`../api/products/AddDish`),
  findDishes: require(`../api/products/FindDishes`),
  uploadImage: require(`../api/media/UploadImage`),
  createOrder: require(`../api/orders/CreateOrder`),
  pushNotification: require(`../api/notifications/PushNotification`),
  pushRabbit: require(`../api/rabbit/Notify`),
  getRabbit: require(`../api/rabbit/NotifyGet`),
  findNotifications: require(`../api/notifications/FindNotifications`),
  findOrders: require(`../api/orders/FindOrders`)
};
