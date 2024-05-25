import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Import DrawerActions
import { NavigationProp } from '@react-navigation/native';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RootStackParamList } from './navigation/types';


const Header = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
            <FontAwesomeIcon icon={faBars} size={20} color="black" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconButton: {
        padding: 10, // Adjust padding as needed
    },
});

export default Header;