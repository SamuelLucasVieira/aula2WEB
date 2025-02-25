import { Component } from 'react';
import logo from "../assets/adaptive-icon.png"
import { View, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.pai}>
      <View style={styles.filho1}>
        <View style={styles.lime}><Image style = {[styles.tinyLogo,{resizeMode:"contain"}]} source = {logo}></Image></View>
        <View style={styles.aquamarine}>
          <View style={styles.teal}><Image style = {[styles.tinyLogo,{resizeMode:"contain"}]} source = {logo}></Image></View>
          <View style={styles.skyblue}><Image style = {[styles.tinyLogo,{resizeMode:"contain"}]} source = {logo}></Image></View>
        </View>
      </View>
      <View style={styles.filho2}>
        <Image 
      style = {[styles.tinyLogo,{resizeMode:"contain"}]}
      source = {logo}
      ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pai: {
    flex: 0.5,
    flexDirection: "column"
  },
  filho1:{
    flex:0.5,
    flexDirection:"row",
    backgroundColor: "crimson"
  },
  filho2:{
    flexDirection: "column",
    flex:0.5,
    backgroundColor:'salmon'
  },  
  lime:{
      flex: 0.5,
      backgroundColor:'lime'
  },
  aquamarine:{
      flex: 0.5,
      backgroundColor:'aquamarine'
  },
  teal:{
    flex: 0.5,
    backgroundColor: "teal"
  },
  skyblue:{
    flex: 0.5,
    backgroundColor: "skyblue"
  },
  tinyLogo: {
    flex: 1,
    alignSelf:'center'
  },
});
