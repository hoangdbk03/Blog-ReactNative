import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Login from '../Login'
import Register from '../Register'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListNew from '../ListNew';
import { AppContext } from './AppContext';
import NewDetail from '../NewDetail';
import PostNews from '../PostNews';
import { Entypo } from "@expo/vector-icons";

//quản lý login và register sử dụng stack
const Stack = createNativeStackNavigator();
const Users = () =>{
    return(
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}
//quản lý listNew, profile, newManager sử dụng tab
const Tab = createBottomTabNavigator();
const Main = () =>{
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'News') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'PostNews') {
                iconName = focused ? 'user' : 'user';
              }
  
              // You can return any component that you like here!
              return <Entypo name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })} >
            <Tab.Screen name="News" component={News} options={{title: 'Trang chủ'}}/>
            <Tab.Screen name="PostNews" component={PostNews} options={{title: 'Cá nhân'}}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}
//listNew
const News = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ListNew" component={ListNew}/>
            <Stack.Screen name="NewDetail" component={NewDetail}/>
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
  return (
    <>
    {
        isLogin == false ? <Users/> : <Main/>
    }
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})