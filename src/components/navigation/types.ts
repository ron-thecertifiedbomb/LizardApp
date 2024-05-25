import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  navigate(arg0: string, arg1: { productId: any; }): void;
  Home: undefined;
  AllProducts: undefined;
  ProductPage: { productId: string };
  EditProductPage: { productId: string };
  Settings: undefined;
  CoffeePage: undefined;
  DrawerNavigator: undefined;
  Registration: undefined;
  Model: undefined;
  Login: undefined;
  Edit: undefined;
  Splash: undefined;
  MyCart: undefined
};

export type StackParamList = {
  Fetch: undefined;
  DrawerNavigator: undefined;
};

export type DrawerParamList = {
  MyStore: undefined;
  MyCart: undefined;
  MyOrders: undefined;
};
export type Props = {
    navigation: DrawerNavigationProp<DrawerParamList>; 
  };
  
  export type StackNavigationType = NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
  
  export type DrawerNavigationType = DrawerNavigationProp<DrawerParamList>;
  
  export type CompositeNavigationType = CompositeNavigationProp<StackNavigationType, DrawerNavigationType>;
  
  export type RouteType<T extends keyof (RootStackParamList & DrawerParamList)> = RouteProp<RootStackParamList & DrawerParamList, T>;
  