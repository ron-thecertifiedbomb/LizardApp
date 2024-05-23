import React from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalState } from '../redux/selectors/selectors';
import {  setToClose } from '../redux/reducers/modalReducer'; // Assuming the action creators are defined here
import logger from '../utilities/logger/logger';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import useGetAllProductsHooks from '../hooks/useGetAllProductsHook';




export type RootTabParamList = {
  AllProducts: undefined;
  
};
const CustomModal: React.FC = () => {
  
  const {isLoading, isError, data, error, refetch} = useGetAllProductsHooks();
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  const dispatch = useDispatch();
  const modalState = useSelector(selectModalState);

  const closeModal = () => {
    refetch()
    navigation.goBack();
    dispatch(setToClose());
  };

  logger('modalState')

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalState.isOpen}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
         
          <Button title="Close" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
},
});

export default CustomModal;