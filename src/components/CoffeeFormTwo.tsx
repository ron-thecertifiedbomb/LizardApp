import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface FormData {
  name: string;
  description: string;
  special_ingredient: string;
  prices: { size: string; price: string }[];
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const initialFormData: FormData = {
  name: '',
  description: '',
  special_ingredient: '',
  prices: [
    { size: 'Large', price: '' },
    { size: 'Small', price: '' },
  ],
};

const CoffeeFormTwo: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handlePriceChange = (index: number, key: keyof FormData['prices'][0], value: string) => {
    const newPrices = [...formData.prices];
    newPrices[index] = {
      ...newPrices[index],
      [key]: value,
    };
    if (key === 'size' && value === 'Large') {
      // Remove the price entry when size is 'Large'
      newPrices.splice(index, 1);
    }
    setFormData({
      ...formData,
      prices: newPrices,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form fields after submitting
    setFormData(initialFormData);
  };

  return (
    <View>
      <View>
        <Text>Name:</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>
      <View>
        <Text>Description:</Text>
        <TextInput
          multiline
          style={{ borderColor: 'gray', borderWidth: 1 }}
          value={formData.description}
          onChangeText={(text) => handleChange('description', text)}
        />
      </View>
      <View>
        <Text>Special Ingredient:</Text>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          value={formData.special_ingredient}
          onChangeText={(text) => handleChange('special_ingredient', text)}
        />
      </View>
      <View>
        <Text>Prices:</Text>
        {formData.prices.map((item, index) => (
          <View key={index}>
            <Text>{item.size}</Text>
            <TextInput
              style={{ borderColor: 'gray', borderWidth: 1 }}
              value={item.price}
              onChangeText={(text) => handlePriceChange(index, 'price', text)}
            />
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoffeeFormTwo;
