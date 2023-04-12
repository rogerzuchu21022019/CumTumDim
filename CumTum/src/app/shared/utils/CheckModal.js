import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import SafeKeyComponent from "../../components/safe_area/SafeKeyComponent";
import { constants } from "../constants";

const  CheckModal =(props)=> {
    const {
        isModalVisible,
        setModalVisible
      } = props;
    
  const toggleModal = () => {
    setModalVisible(!isModalVisible);

  };

  return (
    <SafeKeyComponent>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',width:"100%"}}>

        {/* <Button title="Show modal" onPress={toggleModal} /> */}
        
        <Modal
            isVisible={isModalVisible}
            animationType="slide"
            transparent={true}
            animationIn	= {"slideInUp"}
            animationOut={"slideOutDown"}
        >
        
            <View style={styles.body}>
                <View >
                    <Text style={styles.title}>Thông báo!</Text>

                </View>
                <View style={styles.modal}>
                    <Text style={styles.content}>Bạn chưa chọn phương thức thanh toán!</Text>
                    
                </View>
            <TouchableOpacity onPress={toggleModal} >
                <View style={styles.btn}>
                    <Text style={styles.textBTN} >
                        Xác nhận
                    </Text>

                </View>
           
            </TouchableOpacity>
         

            </View>
        </Modal>
        </View>
    </SafeKeyComponent>

  );
}



export default CheckModal;

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
    body:{
        width:"100%",
        height:100
        ,backgroundColor:"white",
        alignItems:"center",
        borderRadius:15,},
    title:{
        fontSize:18,
        fontWeight:'700',
        color:"black",
    },
    content:{
        fontSize:16,
        color:"black",
    },
    btn:{
        backgroundColor:constants.COLOR.ORANGE,
        width:100,
        height:30,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    textBTN:{
        color:constants.COLOR.WHITE,
        fontSize:16,fontWeight:"600",
    },
    modal:{
        marginBottom:10,
    },


})
