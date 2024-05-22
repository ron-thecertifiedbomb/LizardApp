import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    navigate(arg0: string, arg1: { productId: any; }): void;
    Home: undefined;
    ProductPage:  { productId: string};
    EditProductPage: { productId: string };
    Settings: undefined;
    CoffeePage: undefined;
    DrawerNavigator: undefined;
    Registration: undefined;
    Login: undefined;
    Edit: undefined
  };

  export type Props = NativeStackScreenProps<RootStackParamList, 'ProductPage', 'EditProductList'>;

  export interface UpdateProductFieldAction {
    type: string;
    payload: {
      field: string;
      nestedField?: string;
      value: any;
    };
  }
  
  // Define state interface
  export interface Product {
    name: string;
    brand: string;
    price: number;
    quantity: number;
    specifications: {
      processor: string;
      graphics: string;
      storage: string;
      resolution: string;
      maxFrameRate: string;
    };
    includedItems: string[];
    availableColors: string[];
    [key: string]: any; // Index signature
  }
  
  
  export interface UpdateProductState {
    product: Product;
    quantity: number;
  }
  
  // Define initial state
  const initialState: UpdateProductState = {
    product: {
      _id: '',
      name: '',
      brand: '',
      price: 0,
      quantity: 0,
      specifications: {
        processor: '',
        graphics: '',
        storage: '',
        resolution: '',
        maxFrameRate: '',
      },
      includedItems: [],
      availableColors: [],
    },
    quantity: 1,
  };
  


  export interface IProduct {
    _id: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    category: string;
    specifications: {
      processor: string;
      graphics: string;
      storage: string;
      resolution: string;
      maxFrameRate: string;
    };
    includedItems: string[];
    availableColors: string[];
  }
  