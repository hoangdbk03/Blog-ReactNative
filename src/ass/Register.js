import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import AxiosIntance from "./ultil/AxiosIntance";
import { ToastAndroid } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Register = (props) => {
  const { navigation } = props;
  const [emailUser, setemailUser] = useState("");
  const [passwordUser, setpasswordUser] = useState("");

  const dangKyNe = async () => {
    console.log(emailUser, passwordUser);
    try {
      const response = await AxiosIntance().post("/users/register", {
        email: emailUser,
        password: passwordUser,
      });
      console.log(response);
      if (response.error == false) {
        ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
        navigation.navigate("Login");
      } else {
        ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      source={require("../ass/image/backgroundN.jpeg")}
      style={styles.container}
    >
      <View style={styles.container1}>
        <Text style={[styles.text, { marginTop: 130, color: "#555B57" }]}>
          Wellcome
        </Text>
        <Text style={[styles.text, { color: "#88BDA1" }]}>
          Create Your Acount
        </Text>
        <Text style={[styles.userpass, { marginTop: 50 }]}> Email Address</Text>
        <TextInput style={styles.textInput} onChangeText={setemailUser} />
        <Text style={[styles.userpass, { marginTop: 16 }]}> Password</Text>
        <TextInput style={styles.textInput} onChangeText={setpasswordUser} secureTextEntry={true}/>
        <TouchableHighlight style={styles.buttonLogin} onPress={dangKyNe}>
          <Text style={styles.textLogin}>Create Now</Text>
        </TouchableHighlight>
        <Text style={{ color: "#4E4B66", textAlign: "center", marginTop: 20 }}>
          or continue with
        </Text>
        <View style={styles.viewRemember}>
          <Pressable style={styles.buttonSocial}>
            <FontAwesome5 name="facebook" style={styles.imageSocial} />
            <Text style={{ color: "#4E4B66" }}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.buttonSocial}>
            <AntDesign name="google" style={styles.imageSocial} />
            <Text style={{ color: "#4E4B66" }}>Google</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  container1: {
    marginStart: 25,
    marginEnd: 25,
  },
  text: {
    fontSize: 31,
    fontWeight: "bold",
    lineHeight: 37,
  },
  textInput: {
    height: 51,
    borderRadius: 11,
    borderWidth: 0.5,
    marginTop: 4,
    padding: 5,
    backgroundColor: "white",
    borderColor: "#555B57",
  },
  buttonLogin: {
    height: 51,
    backgroundColor: "green",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  textLogin: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 18,
  },
  imageSocial: {
    padding: 5,
    fontSize: 20,
  },
  buttonSocial: {
    flexDirection: "row",
    width: 174,
    height: 48,
    backgroundColor: "#EEF1F4",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  viewRemember: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  userpass: {
    color: "#555B57",
    fontWeight: "bold",
    marginStart: 5,
  },
});
