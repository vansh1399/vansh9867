import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';

export default function Category() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText}>Category</TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add to cart</Text>
      </Pressable>

      <View style={styles.mainSee}>
        <View style={styles.mainBtn}>
          <Text style={styles.container}>Men</Text>
          <View style={styles.iconMainveiw}>
            <View>
              <TouchableOpacity>
              <FontAwesome name="edit" size={30} color="#2196F3" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <MaterialIcons name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainBtn}>
          <Text style={styles.container}>Women</Text>
          <View style={styles.iconMainveiw}>
            <View>
              <TouchableOpacity>
              <FontAwesome name="edit" size={30} color="#2196F3" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <MaterialIcons name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical:10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    width: 200,
    height: 40,
    borderRadius: 4,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    paddingHorizontal:10
  },
  container: {
    alignSelf: 'center',
    color: 'black',
  },
  mainSee: {
    alignItems:'center',
    justifyContent:'center',
    width: 300,
    height: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 6,
    marginTop: 20,
  },
  mainBtn: {
    flexDirection: 'row',
    width: '90%',
    height: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 10,
    justifyContent: 'space-between',
    paddingLeft: 8,
    marginTop: 10,
  },
  iconMainveiw: {
    flexDirection: 'row',
    alignSelf: 'center',
    columnGap: 20,
    paddingHorizontal: 5,
  },
});
