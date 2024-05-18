import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FilterTabsProps {
  onPress: (name: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ onPress }) => {
  const tabs = ['All', 'Espresso', 'Latte', 'Macchiato', 'Black Coffee'];

  return (
    <View style={styles.container}>
      {tabs.map((item: string, index: number) => (
        <TouchableOpacity
          key={index}
          style={styles.navigationWrapper}
          onPress={() => onPress(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  navigationWrapper: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 10,
  },
});

export default FilterTabs;
