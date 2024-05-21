import React from 'react';
import { View } from 'react-native';
import ProductRender from '../components/ProductRender';




const DataScreen: React.FC = () => {

  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ProductRender />
    </View>
  );
};

export default DataScreen;
