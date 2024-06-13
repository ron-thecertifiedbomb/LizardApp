import React from 'react';
import { Modal, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { modalTitle, selectModalState } from '../redux/reducers/modalslice/selectors/modalSelector';
import { setToClose } from '../redux/reducers/modalslice/reducer/modalReducer';

const CustomModal: React.FC = () => {
  const modalState = useSelector(selectModalState);
  const title = useSelector(modalTitle);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setToClose());
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalState}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
          {title === 'Loading' && <ActivityIndicator size="large" color="white" />}
          {title !== 'Loading' && <View style={styles.modalContent}>
      <Text style={styles.text}>{title}</Text>
        </View>}
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
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
   
    color: 'white',
  
  },
});

export default CustomModal;
