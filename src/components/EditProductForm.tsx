import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {SingleProductData} from '../redux/selectors/selectors';
import {IProduct, Product} from '../../type';
import {RouteProp, useRoute} from '@react-navigation/native';
import { setToOpen } from '../redux/reducers/modalReducer';

type RootStackParamList = {
  ProductPage: {productId: string};
};

type EditProductScreenRouteProp = RouteProp<RootStackParamList>;


const ProductForm: React.FC = () => {
  const product = useSelector(SingleProductData);

  const [formState, setFormState] = useState<Product>({
    name: product?.name || '',
    brand: product?.brand || '',
    price: product?.price || 0,
    quantity: product?.quantity || 0,
    category: product?.category || '',
    specifications: {
      processor: product?.specifications.processor || '',
      graphics: product?.specifications.graphics || '',
      storage: product?.specifications.storage || '',
      resolution: product?.specifications.resolution || '',
      maxFrameRate: product?.specifications.maxFrameRate || '',
    },
    includedItems: product?.includedItems || [],
    availableColors: product?.availableColors || [],
  });

  const handleInputChange = (field: keyof IProduct, value: string | number) => {
    setFormState({...formState, [field]: value});
  };

  const handlePriceChange = (value: string) => {
    setFormState(prevState => ({
      ...prevState,
      price: parseFloat(value) || 0,
    }));
  };

  const handleQuantityChange = (value: string) => {
    setFormState(prevState => ({
      ...prevState,
      quantity: parseInt(value) || 0,
    }));
  };

  const handleSpecificationChange = (
    key: keyof IProduct['specifications'],
    value: string,
  ) => {
    setFormState(prevState => ({
      ...prevState,
      specifications: {...prevState.specifications, [key]: value},
    }));
  };

  const handleIncludedItemsChange = (index: number, value: string) => {
    setFormState(prevState => {
      const newItems = [...prevState.includedItems];
      newItems[index] = value;
      return {...prevState, includedItems: newItems};
    });
  };

  const handleAvailableColorsChange = (index: number, value: string) => {
    setFormState(prevState => {
      const newColors = [...prevState.availableColors];
      newColors[index] = value;
      return {...prevState, availableColors: newColors};
    });
  };

  const handleAddIncludedItem = () => {
    setFormState(prevState => ({
      ...prevState,
      includedItems: [...prevState.includedItems, ''],
    }));
  };

  const handleAddAvailableColor = () => {
    setFormState(prevState => ({
      ...prevState,
      availableColors: [...prevState.availableColors, ''],
    }));
  };

  const handleUpdateProduct = async () => {
    const productData = {
      name: formState.name,
      brand: formState.brand,
      price: formState.price,
      quantity: formState.quantity,
      category: formState.category,
      specifications: {
        processor: formState.specifications.processor,
        graphics: formState.specifications.graphics,
        storage: formState.specifications.storage,
        resolution: formState.specifications.resolution,
        maxFrameRate: formState.specifications.maxFrameRate,
      },
      includedItems: formState.includedItems,
      availableColors: formState.availableColors,
    };

    const updatedData = JSON.stringify(productData);

    const route = useRoute<EditProductScreenRouteProp>();
    const {productId} = route.params;

    try {
      const response = await fetch(
        `https://nextjs-server-rho.vercel.app/api/products/updateProduct/route?_id=${productId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (!response.ok) {
        let errorMessage: string;
        try {
          const errorResponse = await response.json(); 
          if (typeof errorResponse === 'object') {
            errorMessage = JSON.stringify(errorResponse); 
          } else {
            errorMessage = errorResponse;
          }
        } catch (error) {
          errorMessage = await response.text(); 
        }
        throw new Error(`Failed to update product: ${errorMessage}`);
      }

      dispatch(setToOpen());

      console.log('Product updated successfully');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error updating product:', error.message);
      } else {
        console.error('Unknown error updating product');
      }
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Product Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={formState.name}
          onChangeText={text => handleInputChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          value={formState.brand}
          onChangeText={text => handleInputChange('brand', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={formState.price.toString()}
          onChangeText={handlePriceChange}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={formState.quantity.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
        />

        <Text style={styles.sectionTitle}>Specifications</Text>
        <TextInput
          style={styles.input}
          placeholder="Processor"
          value={formState.specifications.processor}
          onChangeText={text => handleSpecificationChange('processor', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Graphics"
          value={formState.specifications.graphics}
          onChangeText={text => handleSpecificationChange('graphics', text)}
        />

        <Text style={styles.sectionTitle}>Included Items</Text>
        {formState.includedItems.map((item, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Item ${index + 1}`}
            value={item}
            onChangeText={text => handleIncludedItemsChange(index, text)}
          />
        ))}
        <Button title="Add Item" onPress={handleAddIncludedItem} />

        <Text style={styles.sectionTitle}>Available Colors</Text>

        {formState.availableColors.map((color, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Color ${index + 1}`}
            value={color}
            onChangeText={text => handleAvailableColorsChange(index, text)}
          />
        ))}
        <View style={styles.buttonWrapper}>
        <Button title="Add Color" onPress={handleAddAvailableColor} />
        <Button title="Update Product" onPress={handleUpdateProduct} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
  width: '100%'
  },
  formContainer: {
    padding: 20,
  
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonWrapper:{
    display: 'flex',
    gap: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProductForm;
function dispatch(arg0: { payload: undefined; type: "modalProvider/setToOpen"; }) {
  throw new Error('Function not implemented.');
}

