import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectisActiveLink} from '../redux/selectors/selectors';
const tabs = [
  'All',
  'Espresso',
  'Latte',
  'Cappuccino',
  'Black Coffee',
  'Macchiato',
];

interface ClientSideFilterTabsProps {
  onPress: (category: string) => void;
}

const ClientSideFilterTabs: React.FC<ClientSideFilterTabsProps> = ({
  onPress,
}) => {
  const activeLink = useSelector(selectisActiveLink);

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}>
      {tabs.map((item: string, index: number) => (
        <TouchableOpacity
          key={index}
          style={
            item === activeLink
              ? styles.activeNavigationWrapper
              : styles.navigationWrapper
          }
          onPress={() => onPress(item)}>
          <Text
            style={
              item === activeLink ? styles.activeTextStyle : styles.textStyle
            }>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-evenly',
    marginBottom: 15,

  },
  navigationWrapper: {
    marginRight: 10, // Add some margin to separate the tabs
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },

  activeNavigationWrapper: {
    marginRight: 10, // Add some margin to separate the tabs
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  activeTextStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ClientSideFilterTabs;
