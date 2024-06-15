// Interface for a single cart item
export interface CartItem {
  dateAdded: string;           // Date when the item was added to the cart
  name: string;                // Name of the product
  orderId: string;             // Unique identifier for the order
  price: number;               // Price of the product
  productId: string;           // Unique identifier for the product
  quantity: number;            // Quantity of the product in the cart
  quantityOrdered: number;     // Quantity of the product ordered
  totalOrderPrice: number;     // Total price for the ordered quantity
  isSelected: boolean;         // Whether the item is selected in the cart
  timeAdded: string;           // Time when the item was added to the cart
}

// Interface for the root object containing cart items and other details
export interface RootObject {
  _id: string;                 // Unique identifier for the root object
  userId: string;              // User ID to which the cart belongs
  cartItems: CartItem[];       // Array of cart items
  length: number;              // Total number of items in the cart
  email?: string;              // Optional email of the user
  firstname?: string;          // Optional first name of the user
  lastname?: string;           // Optional last name of the user
  ownerId?: string;            // Optional owner ID
  productId: string;           // Unique identifier for the product
  orderId: string;             // Unique identifier for the order
  name: string;                // Name of the product
  price: number;               // Price of the product
  quantityOrdered: number;     // Quantity of the product ordered
}
