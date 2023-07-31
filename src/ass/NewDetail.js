import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AxiosIntance from "./ultil/AxiosIntance";
import { ToastAndroid } from "react-native";
import { ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NewDetail = (props) => {
  const { route } = props;
  const { params } = route;
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getDetail = async () => {
      const response = await AxiosIntance().get(
        "/articles/" + params.id + "/detail"
      );
      console.log(response);
      if (response.error == false) {
        //lấy thành công
        settitle(response.data[0].title);
        setcontent(response.data[0].content);
        setimageUrl(response.data[0].image);
        setisLoading(false);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    };
    getDetail();
    return () => {};
  }, []);

  return (
    <>
      {isLoading == true ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 400,
          }}
        >
          <ActivityIndicator size={"large"} color={"green"} />
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <View
            style={{
              height: 100,
              backgroundColor: "white",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../ass/image/logoPostNew.png")}
              style={{ height: 60, width: 150, marginTop: 30 }}
            />
            <View
              style={{
                backgroundColor: "#EEEEEE",
                width: 42,
                height: 42,
                borderRadius: 21,
                alignItems: "center",
                justifyContent: "center",
                marginStart: 180,
                marginTop: 38,
              }}
            >
              <AntDesign name="search1" size={29} />
            </View>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                width: 42,
                height: 42,
                borderRadius: 21,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 38,
                marginStart: 10,
              }}
            >
              <AntDesign name="message1" size={25} />
            </View>
          </View>
          <View style={{marginTop: 20, backgroundColor: 'white'}}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.name}>{title}</Text>
            <Text>{content}</Text>
          </View>
          
        </ScrollView>
      )}
    </>
  );
};

export default NewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 450,
    height: 200,
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  
});
