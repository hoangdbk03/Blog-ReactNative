import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './ultil/AppContext'

const PostNews = () => {
  const {infoUser} = useContext(AppContext);
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.imageUser}>
      {
        infoUser.avatar == ""
        ?
        <Image style={styles.image} source={require('../ass/image/gamer.png')}/>
        :
        <Image style={{}} source={{uri: infoUser.avatar}}/>
      }
      </TouchableOpacity>
      
      <Text>{infoUser.email}</Text>
      <TextInput style={styles.textInput} placeholder='Họ tên' value={infoUser.name}/>
      <TextInput style={styles.textInput}  placeholder='Địa chỉ' value={infoUser.address}/>
      <TextInput style={styles.textInput}  placeholder='Số điện thoại' value={infoUser.phone}/>
      <TextInput style={styles.textInput}  placeholder='Ngày sinh' value={infoUser.dob}/>
      <Button title='Cập nhật'></Button>
    </View>
  )
}

export default PostNews

const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  textInput: {
    height: 51,
    borderRadius: 11,
    borderColor: "#555B57",
    borderWidth: 0.5,
    marginTop: 4, 
    padding: 5,
    backgroundColor: "white",
    marginBottom: 10
  },
  image:{
    height: 100,
    width: 100
  },
  imageUser:{
    
  }
})