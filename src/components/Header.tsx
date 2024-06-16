import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Store: {userId: string; headerTitle: string};
};

interface HeaderProps {
  title?: string;
  icon?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({title, icon}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const goBack = () => {
    navigation.goBack();
  };



  return (
    <TouchableOpacity onPress={openDrawer} style={styles.headerContainer}>
      <View style={styles.headerIconWrapper}>
           {icon && (
          <TouchableOpacity onPress={goBack}>
            {icon}
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  headerIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  headerTitle: {
    fontSize: 12,
  },
});

export default Header;
