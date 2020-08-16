export const API = "http://127.0.0.1:8080/api"

export const API_URL = {
  login: API + "/login",
  register: API + "/register",

  getAllProductType: API + "/ProductType/GetAll",
  searchProductType: API + "/ProductType/GetByName",

  getAllProduct: API + "/Product/GetAll",
  getListProductByType: API + "/Product/GetByProType",
  getDetailProduct: API + "/Product/GetByID",
  
  getCart: API + "/Cart/GetCart",
  addToCart: API + "/Cart/AddToCart",
  removeFromCart : API + "/Cart/RemoveFromCart",
  editQuanTi: API + "/Cart/EditQuanTi",

  getUserData: API + "/getUserLogin",
  updateUser: API + "/Account/updateData",
  changePass: API + "/Account/changePass",

  newOrder: API + "/Order/NewOrder",
  getListOrder: API + "/Order/ListOrder",
  getOrderDetails: API + "/Order/OrderDetails",
  changeStatusOrder: API + "/Order/ChangeStatus",
}