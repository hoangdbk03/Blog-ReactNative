import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/ass/Login";
import Lab5 from "./src/ass/image/Lab5";
import ItemListNew from "./src/ass/ItemListNew";
import ListNew from "./src/ass/ListNew";
import NewDetail from "./src/ass/NewDetail";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/ass/Register";
import { AppContextProvider } from "./src/ass/ultil/AppContext";
import AppNavigator from "./src/ass/ultil/AppNavigator";




export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
