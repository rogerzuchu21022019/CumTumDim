export interface Notification {
  title: string;
  content: string;
  data: {};
}

export interface Category {
  _id: string;
  name: string;
}

export interface Order {
  _id: string;
  mainDishCart: [];
  extraDishCart: [];
  toppingsCart: [];
  anotherCart: [];
  paymentStatus: string;
  orderStatus: string;
  totalMainDish: number;
  totalExtraDish: number;
  totalTopping: number;
  totalAnother: number;
  totalAmount: number;
  moneyToPaid: number;
  userId: string;
  address: {};
  captureId: string;
  valueAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Dish {
  _id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
  categoryId: string;
  subCategory: string;
  bestSeller: number;
  imageUrl: string;
}

export declare interface DataResponse<T> {
  error: boolean;
  loading: boolean;
  message: string;
  status: string;
  data: Array<T>;
}

export enum Subcategory {
  SUON = 'Sườn',
  SUON_MO = 'Sườn mỡ',
}

export declare interface ItemPropsHandler {
  item: Dish | any;
  index: number;
  lastIndex: number;
  handleAddDish: (item: Dish) => void;
  handleRemoveDish: (item: Dish) => void;
}
