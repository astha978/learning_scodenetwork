
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';



export default function App() {
 // const [pdf, setPdf] = ("");
  const DATA = [
     {id:'1', name:"pdf1"},
     {id:'2', name:"pdf2"},
     {id:'3', name:"pdf3"},
     {id:'4', name:"pdf4"},
     {id:'5', name:"pdf5"},
     {id:'6', name:"pdf6"},
     {id:'7', name:"pdf7"},


  ]
  return (
    <View >
    <View style={styles.container}>
       <Image
        style={styles.logo}
        source={require('./assets/image/logo.jpg')}
      />
      <Text style={styles.headerText}>PDF Viewer</Text>
    
    </View>
    <FlatList style={styles.pdfList}
    data= {DATA}
    keyExtractor={ (item) => {item.key}}
    renderItem={({item})=> <Text style={styles.pdfText}>{item.name}</Text> }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#f5e7d0",
  
  },
  logo:{
   height:60,
   width:80,
   // aspectRatio:1,
    marginLeft:10,
    marginVertical:10,
    resizeMode:"stretch"
  },
  headerText:{
    fontSize:20,
    color:"#3e6ac2",
    borderColor:"white",
    fontWeight:"bold",
     marginLeft:10,
     marginTop:25,
  //   borderWidth:"1px",
  //   borderColor:"black"
     
   },
  
   pdfList:{
     marginTop:50,
     marginLeft:200,
    // justifyContent:"center",
   // alignItems:"center"
   },
   pdfText:{
     marginTop:20,
     fontSize:20,
     fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center"
     
   }
})
