module.exports = {
  createCategory: require(`../api/products/CreateCate`),
  updateCategoryById: require(`../api/products/UpdateCategoryByID`),
  deleteCategory: require(`../api/products/DeleteCategory`),
  findCategories: require(`../api/products/FindCategories`),

  findBanners: require(`../api/banners/FindBanners`),
  addBanner: require(`../api/banners/AddBanner`),
  updateBannerById: require(`../api/banners/UpdateBannerByID`),
  deleteBannerById: require(`../api/banners/DeleteBannerById`),

  addDish: require(`../api/products/AddDish`),
  updateDishById: require(`../api/products/UpdateDishByID`),
  deleteDishById: require(`../api/products/DeleteDish`),
  findDishes: require(`../api/products/FindDishes`),
  uploadImage: require(`../api/media/UploadImage`),
  createOrder: require(`../api/orders/CreateOrder`),
  updateOrder: require(`../api/orders/FindOrderById`),
  getRabbit: require(`../api/rabbit/NotifyGet`),
  findOrders: require(`../api/orders/FindOrders`),
  // search:require(`../api/products/Search`)
};
