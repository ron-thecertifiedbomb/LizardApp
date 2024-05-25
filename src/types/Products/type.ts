// Define the interface for each specification item in the array

interface specifications {
  _id: string;
  processor: string;
  graphics: string;
  storage: string;
  resolution: string;
  maxFrameRate: string;
  
}

interface specificationItem {
  id: string;
  value: string;
}

// Define the interface for the product
export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  quantityOrdered: number;
  totalOrderPrice: number;
  dateAdded: string;
  isSelected: boolean;
  category: string;
  specifications: specifications;
  includedItems: string[];
  availableColors: string[];
}