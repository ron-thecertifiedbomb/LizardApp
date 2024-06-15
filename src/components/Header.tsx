import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Store: {userId: string; headerTitle: string};
};

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <TouchableOpacity onPress={openDrawer} style={styles.headerMainWrapper}>
      <View style={styles.headerIconWrapper}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerMainWrapper: {
    padding: 10,
    backgroundColor: 'white',
  },
  headerIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 12,

  },
});

export default Header;
