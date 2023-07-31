import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Dimensions } from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const ItemListNew = (props) => {
  const { dulieu, navigation } = props;

  const ClickItem = () => {
    console.log("ClickItem");
    navigation.navigate("NewDetail", { id: dulieu._id });
  };

  return (
    <View>
      <TouchableOpacity onPress={ClickItem}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.titleUser}>
              <Image source={require('../ass/image/gamer.png')} style={{height: 50, width: 50}}/>
              <View style={styles.textUser}>
                <Text style={styles.textTitle} numberOfLines={1}>{dulieu.title}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 10, fontWeight:'bold', color: '#747476', marginStart: 5}}>1 minute ago</Text>
                  <Entypo name="globe" size={10} color="#747476" style={{marginTop: 2, marginStart: 5}}/>
                  <Entypo name="dots-three-horizontal" size={22} color='#222121' style={{marginStart: 270, marginTop: -20}}/>
                </View>
              </View>
              
            </View>
            <Text style={{marginTop: 5}} numberOfLines={2}>{dulieu.content}</Text>
          </View>
          <Image style={styles.image} source={{ uri: dulieu.image }} />
          <View style={styles.count}>
            <View style={styles.countShow}>
              <Image source={require('../ass/image/like.png')} style={{height: 20, width: 20, marginEnd: 5}}/>
              <Text style={{color: '#747476'}}>529 likes</Text>
            </View>
            <Text style={{color: '#747476'}}>121 commnents</Text>
          </View>
          <Text style={{height: 0.5, backgroundColor: '#E8E2E2'}}></Text>
          <View style={styles.click}>

            <View style={styles.click2}>
              <AntDesign name="like2" size={25} color="#747476"/>
              <Text style={styles.textClick}>Like</Text>
            </View>

            <View style={styles.click2}>
              <MaterialCommunityIcons name="comment-outline" size={25} color="#747476"/>
              <Text style={styles.textClick}>Comment</Text>
            </View>

            <View style={styles.click2}>
              <MaterialCommunityIcons name="share-outline" size={25} color="#747476"/>
              <Text style={styles.textClick}>Share</Text>
            </View>

          </View>
        </View>
        
      </TouchableOpacity>
    </View>
  );
};

export default ItemListNew;

const styles = StyleSheet.create({
  container: {
   
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  image: {
    marginTop: 10,
    height: Dimensions.get('screen').height - 500
  },
  textTitle: {
    marginStart: 5,
    fontSize: 15,
    fontWeight: "bold",
    width: 200
  },
  titleUser:{
    flexDirection: 'row'
  },
  content: {
    marginStart: 10,
    marginTop: 10,
    width: Dimensions.get("window").width - 96 - 10,
  },
  textUser: {
    flexDirection: 'column'
  },
  count: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  countShow: {
    flexDirection: 'row',
  },
  click:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  click2:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textClick:{
    marginStart: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#747476',
    marginTop: 3
  }
});
