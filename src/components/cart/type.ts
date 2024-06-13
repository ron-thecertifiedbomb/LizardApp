export interface RootObject {

  cartItems: CartItem[];
  _id:       string;
  email:     string;
  firtname:  string;
  lastname:  string;
  ownerId:   string;
 }

export interface  CartData {
  _id?: string;
  ownerId: string | null;
  orderId: string;
  cartId?: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  quantityOrdered: number;
  dateAdded: string; 
  timeAdded: string;
  isSelected: boolean;
}





export interface CartItem {
  dateAdded:       string;
  name:            string;
  orderId:         string;
  price:           number;
  productId:       string;
  quantityOrdered: number;
  timeAdded:       string;
 }



