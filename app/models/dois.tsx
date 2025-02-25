import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.pai}>
      <View style={styles.filho1}>
      <View style={styles.filho12}>
        
        </View>
      </View>
      <View style={styles.filho2}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pai: {
    flex: 0.5,
    flexDirection: "column"
    
  },
//   lime e aquamarine.
  filho1:{
    flex:0.5,
    flexDirection: "row",
    backgroundColor:'aquamarine'
  },
  filho12:{
    flex:0.5,
    backgroundColor:'lime'
  },
  filho2:{
    flex:0.5,
    backgroundColor:'salmon'
  }
});
