import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ItemListNew from "./ItemListNew";
import AxiosIntance from "./ultil/AxiosIntance";
import { ToastAndroid } from "react-native";
import { ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const ListNew = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const response = await AxiosIntance().get("/articles");
      console.log(response);
      if (response.error == false) {
        setdataNe(response.data);
        setisLoading(false);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    };
    getNews();
    return () => {};
  }, []);

  const [isImage, setisImage] = useState(null);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const getImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const formdata = new FormData();
    formdata.append("image", {
      uri: result.assets[0].uri,
      type: "image/ipeg",
      name: "image.jpg",
    });
    const response = await AxiosIntance("multipart/form-data").post(
      "/media/upload",
      formdata
    );
    console.log(response);
    if (response.error == false) {
      setisImage(response.data.path);
    } else {
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  };
  const post = async () => {
    const response = await AxiosIntance().post("/articles", {
      title: title,
      content: content,
      image: isImage,
    });
    if (response.error == false) {
      ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <View>
        <View style={{height: 100, backgroundColor: 'white', flexDirection: "row"}}>
          <Image source={require('../ass/image/logoPostNew.png')} style={{height: 60, width: 150, marginTop: 30}}/>
          <View  style={{backgroundColor: '#EEEEEE', width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center', marginStart: 180, marginTop: 38}}>
            <AntDesign name="search1" size={29}/>
          </View>
          <View  style={{backgroundColor: '#EEEEEE', width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center',marginTop: 38, marginStart: 10}}>
            <AntDesign name="message1" size={25}/>
          </View>
        </View>
      </View>
      <View style={{padding: 5}}>
      <View style={styles.InputTitle}>
        <View>
          <TextInput style={{backgroundColor:'#EEEEEE', padding: 5, borderRadius: 10}}
            placeholder="Tên"
            onChangeText={settitle}
          />
          <TextInput style={{backgroundColor:'#EEEEEE', padding: 5, borderRadius: 10, marginTop: 5}}
            placeholder="Nội Dung"
            onChangeText={setcontent}
          />
        </View>

        <Image source={{ uri: isImage }} style={styles.loadimage}/>

        <Text style={{height: 0.5, backgroundColor: '#E8E2E2', marginTop: 10}}></Text>

        <View style={styles.buttonSocial}>
          <TouchableOpacity style={styles.textSocial}>
            <Image source={require('../ass/image/camera.png')} style={{height: 20, width: 20}}/>
            <Text style={styles.textPost}>Camera</Text>
          </TouchableOpacity>
          
          <Text style={{height: 30, width: 1, backgroundColor: '#E8E2E2', marginTop: 5}}></Text>


          <TouchableOpacity onPress={getImageLibrary} style={styles.textSocial}>
            <Image source={require('../ass/image/picture.png')} style={{height: 20, width: 20}}/>
            <Text style={styles.textPost}>Photo</Text>
          </TouchableOpacity>

          <Text style={{height: 30, width: 1, backgroundColor: '#E8E2E2', marginTop: 5}}></Text>

          <TouchableOpacity onPress={post} style={styles.textSocial}>
          <Image source={require('../ass/image/post.png')} style={{height: 20, width: 20}}/>
            <Text style={styles.textPost}>Post</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      </View>
      <View>
      {isLoading == true ? (
        <View  style={styles.container}>
          <ActivityIndicator size={"large"} color={"green"} />
        </View>
      ) : (
        <FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={dataNe}
          renderItem={({ item }) => (
            <ItemListNew dulieu={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      )}
    </View>
    </View>
  );
};

export default ListNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  InputTitle:{
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 5
  },
  loadimage:{
    marginTop: 5,
    height: 50,
    width: 50,
  },
  imageLogo: {
    width: 100,
    height: 100
  },
  buttonSocial: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textSocial:{
    flexDirection: 'row',
    padding: 7
  },
  textPost:{
    
    marginStart: 5,
    fontWeight: 'bold',
    color: '#2E3840'
  }
});
