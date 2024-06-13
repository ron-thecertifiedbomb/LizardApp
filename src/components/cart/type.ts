export interface RootObject {
  CartItems: any[];
  _id:       string;
  email:     string;
  firtname:  string;
  lastname:  string;
  ownerId:   string;
 }

export interface  CartData {
  _id?: string;
  ownerId: string;
  orderId: string;
  cartId?: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  quantityOrdered: number;
  totalOrderPrice: number;
  dateAdded: string; 
  timeAdded: string;
  isSelected: boolean;
}



