import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch} from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Coffee {
    name: string;
    description: string;
    roasted: string;
    ingredients: string;
    special_ingredient: string;
    prices: { size: string; currency: string }[];
    type: string;
    favourite: boolean;
  }

  const CoffeeForm = ({ onSubmit }: { onSubmit: (data: Coffee) => void }) => {

  const [coffee, setCoffee] = useState({
    name: '',
    description: '',
    roasted: '',
    ingredients: '',
    special_ingredient: '',
    prices: [
      { size: 'S', currency: '$' },
      { size: 'M', currency: '$' },
      { size: 'L', currency: '$' },
    ],
    type: '',
    favourite: false,
  });

  const handleChange = (name: string, value: any, ) => {
    setCoffee((prevCoffee) => ({
      ...prevCoffee,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(coffee);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
        placeholder="Name"
        value={coffee.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
        placeholder="Description"
        multiline
        numberOfLines={4}
        value={coffee.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
        placeholder="Roasted"
        value={coffee.roasted}
        onChangeText={(text) => handleChange('roasted', text)}
      />
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
        placeholder="Ingredients"
        value={coffee.ingredients}
        onChangeText={(text) => handleChange('ingredients', text)}
      />
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
        placeholder="Special Ingredient"
        value={coffee.special_ingredient}
        onChangeText={(text) => handleChange('special_ingredient', text)}
      />
      {coffee.prices.map((price, index) => (
        <TextInput
          key={index}
          style={{ width: '100%', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
          placeholder={`Price (${price.size})`}
          value={price.price}
          onChangeText={(text) => handleChange(`price-${index}`, text)}
        />
      ))}
      <Picker
        selectedValue={coffee.type}
        style={{ height: 50, width: '100%', marginBottom: 10 }}
        onValueChange={(itemValue, itemIndex) =>
          handleChange('type', itemValue)
        }>
        <Picker.Item label="Coffee" value="Coffee" />
        <Picker.Item label="Tea" value="Tea" />
      </Picker>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Favourite</Text>
        <Switch
          value={coffee.favourite}
          onValueChange={(value) => handleChange('favourite', value)}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default CoffeeForm;
