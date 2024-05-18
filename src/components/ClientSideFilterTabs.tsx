import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const tabs = ['All', 'Espresso', 'Late', 'Cappuccino', 'Black Coffee'];

interface ClientSideFilterTabsProps {
  onPress: (category: string) => void; 
}

const ClientSideFilterTabs: React.FC<ClientSideFilterTabsProps> = ({ onPress }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {tabs.map((item: string, index: number) => (
        <TouchableOpacity key={index} style={styles.navigationWrapper} onPress={() => onPress(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
  
  },
  navigationWrapper: {
 gap: 10,
    marginBottom: 20,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});

export default ClientSideFilterTabs;
