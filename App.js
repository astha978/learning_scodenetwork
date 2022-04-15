
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';



export default function App() {
 // const [pdf, setPdf] = ("");
  const DATA = [
     {id:'1', name:"Ethical Hacking"},
     {id:'2', name:"Java Script"},
     {id:'3', name:"Python"},
     {id:'4', name:"C Programming"},
     {id:'5', name:"C++ Programming"},
     {id:'6', name:"HTML"},
     {id:'7', name:"PHP"},


  ]
  const renderItem = ({item})=>{
  return(
    <View style={styles.pdfList}>  
    <Text style={styles.pdfText}>{item.name}</Text> 
    </View>
  )}
  return (
    <View style={styles.container}> 
    <View style={styles.container2}>
       <Image
       
        style={styles.logo}
        source={require('./assets/image/logo.jpg')}
      />
      <Text style={styles.headerText}>PDF Viewer</Text>
    
    </View>
   
    
      <FlatList
      data= {DATA}
      keyExtractor={ (item) => {item.id}}
      renderItem={renderItem}
      //contentContainerStyle={{flex:1,backgroundColor:"red"}}
      />

    </View>

  );//
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5e7d0",
  },
  container2:{
    flexDirection:"row",
    backgroundColor:"#f5e7d0",
    marginTop:10
  
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
  
   pdfBox:{
     flex:1,
     marginTop:20,
    // marginLeft:200,
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center",
  //  backgroundColor:"#5abfed"
   },
   pdfList:{
    borderColor:"blue",
    backgroundColor:"#5abfed",
    borderColor:"black",
    marginVertical:2,
    flex:1,
     
   },
   pdfText:{
     marginTop:10,
     marginBottom:10,
     fontSize:20,
     fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:4,
    paddingTop:4
     
   }
})
