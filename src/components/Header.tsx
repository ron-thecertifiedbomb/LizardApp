import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  useNavigation,
  DrawerActions,
  useRoute,
  RouteProp,
} from '@react-navigation/native'; // Import DrawerActions
import {NavigationProp} from '@react-navigation/native';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';


type RootStackParamList = {
  Store: {userId: string; headerTitle: string};
};

interface HeaderProps {
  title: string; 
}
const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();



  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableOpacity onPress={openDrawer} style={styles.headerMainWrapper}>
      <View style={styles.headerIconWrapper}>
        {/* <FontAwesomeIcon icon={faBars} size={20} color="black" /> */}
        <Text style={styles.headerTitle}>{title}</Text>
      
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerMainWrapper: {
    padding: 10,
  },
  headerIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
});

export default Header;
