

  
  
  export interface RootObject {
    _id:       string;
    cartItems: CartItem[];
    length: number;
    email?:     string;
    firtname?:  string;
    lastname?:  string;
    ownerId?:   string;
    productId:       string;
    orderId: string;
    name:         string;
    price:           number;
    quantityOrdered: number
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



