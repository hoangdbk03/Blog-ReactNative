import {
  TouchableHighlight,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useContext, useState } from "react";
import AxiosIntance from "./ultil/AxiosIntance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "./ultil/AppContext";
import { ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Login = (props) => {
  const { navigation } = props;
  const [emailUser, setemailUser] = useState("");
  const [passwordUser, setpasswordUser] = useState("");
  const { setisLogin, setinfoUser } = useContext(AppContext);

  //chuyển qua màn hình đăng ký
  const dangKy = () => {
    navigation.navigate("Register");
  };

  const dangnhapNe = async () => {
    try {
      const response = await AxiosIntance().post("/auth/login", {
        email: emailUser,
        password: passwordUser,
      });
      if (response.error == false) {
        console.log(response);
        await AsyncStorage.setItem("token", response.data.token);
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
        setinfoUser(response.data.user);
        setisLogin(true);
      } else {
        ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../ass/image/backgroundN.jpeg")}
    >
      <View style={styles.container1}>
        <Text style={[styles.text, { marginTop: 150, color: "#555B57" }]}>
          Welcome
        </Text>

        <Text style={[styles.text, { color: "#88BDA1" }]}>
          Login Your Acount
        </Text>

        <Text style={[styles.userpass, { marginTop: 50 }]}>
          Username <Text style={{ color: "red" }}>*</Text>
        </Text>

        <TextInput style={styles.textInput} onChangeText={setemailUser} />

        <Text style={[styles.userpass, { marginTop: 16 }]}>
          Password <Text style={{ color: "red" }}>*</Text>
        </Text>

        <TextInput
          style={styles.textInput}
          onChangeText={setpasswordUser}
          secureTextEntry={true}
        />

        <Text style={styles.forgotPass}>Forgot Password ?</Text>

        <TouchableHighlight style={styles.buttonLogin} onPress={dangnhapNe}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableHighlight>

        <Text style={{ color: "#4E4B66", textAlign: "center", marginTop: 5 }}>
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

        <View style={styles.createAccount}>

          <Text style={{ color: "#4E4B66" }}>don't have an account?</Text>

          <Pressable onPress={dangKy}>
            <Text style={{ color: "#1877F2" }}>{"\t"}Create account</Text>
          </Pressable>
          
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: "#555B57",
    borderWidth: 0.5,
    marginTop: 4,
    padding: 5,
    backgroundColor: "white",
  },
  forgotPass: {
    marginTop: 10,
    fontSize: 13,
    marginStart: 10,
    color: "#4E4B66",
    textDecorationLine: "underline",
  },
  buttonLogin: {
    height: 51,
    backgroundColor: "#88BDA1",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textLogin: {
    color: "white",
    fontSize: 16,
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
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  viewRemember: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  createAccount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  imageBackground: {
    flex: 1,
  },
  userpass: {
    color: "#555B57",
    fontWeight: "bold",
    marginStart: 5,
  },
});
