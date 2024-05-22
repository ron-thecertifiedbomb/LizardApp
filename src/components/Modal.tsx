import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalState } from '../redux/selectors/selectors';
import { setToOpen, setToClose } from '../redux/reducers/modalReducer'; // Assuming the action creators are defined here

interface Props {
  children: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectModalState);

  const closeModal = () => {
    dispatch(setToClose()); // Dispatch action to close the modal
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalState.isOpen}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {children}
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