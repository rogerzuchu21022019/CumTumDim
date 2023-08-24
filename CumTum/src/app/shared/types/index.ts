export interface TypeNotification {
  title: string;
  order: any;
  orderStatus: string;
  moneyToPaid: any;
}

export interface TypeResponseNotificationFirebase {
  title: string;
  body: string;
  data: {};
}
export interface Order {
  mainDishCart: [];
  _id: string;
  extraDishCart: [];
  toppingsCart: [];
  anotherCart: [];
  paymentStatus: 'Đang chờ' | 'Đã thanh toán' | 'Chưa thanh toán';
  orderStatus: 'Chấp nhận' | 'Từ chối' | 'Đang chờ';
  totalMainDish: number;
  totalExtraDish: number;
  totalTopping: number;
  totalAnother: number;
  totalAmount: number;
  moneyToPaid: number;
  userId: string;
  address: {};
  createdAt: string;
  updatedAt: string;
}
