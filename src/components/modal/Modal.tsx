import React from 'react';
import { Modal, View, StyleSheet, ActivityIndicator, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { modalObject, modalState } from '../../redux/reducers/modalslice/selectors/modalSelector';
import { setToClose } from '../../redux/reducers/modalslice/reducer/modalReducer';


const CustomModal: React.FC = () => {
  const modalstatus = useSelector(modalState);
  const modal = useSelector(modalObject);
  const dispatch = useDispatch();

  const defaultCloseModal = () => {
    dispatch(setToClose());
  };

  const closeModal = modal?.closeAction || defaultCloseModal;
  const handleConfirm = modal?.confirmAction || closeModal;
  const handleCancel = modal?.cancelAction || closeModal;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalstatus}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        {modal?.type === 'Loading' && <ActivityIndicator size="large" color="white" />}
        {modal?.type === 'Confirmation' && (
          <View style={styles.modalContent}>
            <Text style={styles.text}>{modal?.title}</Text>
            <Text style={styles.text}>{modal?.message}</Text>
            <Button title="Confirm" onPress={handleConfirm} />
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        )}
        {modal?.type === 'Display' && (
          <View style={styles.modalContent}>
            <Text style={styles.text}>{modal?.title}</Text>
            <Text style={styles.text}>{modal?.message}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default CustomModal;
