
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { Searchbar } from 'react-native-paper';

const HomeScreen=()=> {
 // const [pdf, setPdf] = ("");
 const [search, setSearch] = useState('');

  const DATA = [
     {id:'1', name:"Ethical Hacking"},
     {id:'2', name:"Java Script"},
     {id:'3', name:"Python"},
     {id:'4', name:"C Programming"},
     {id:'5', name:"C++ Programming"},
     {id:'6', name:"Security Analyst"},
     {id:'7', name:"PHP"},
     {id:'8', name:"Digital Marketing"},
     {id:'9', name:"Core Java"},
     {id:'10', name:"Web Development"},

  ]

  const onChangeSearch = (item)=> setSearch(item);
  const renderItem = ({item})=>{
  return(
   // <View style={styles.pdfBox}>  
    <View style={styles.pdfList}>  
    <Text style={styles.pdfText}>{item.name}</Text> 
    </View>
  
  )}
  
  return (
    <View style={styles.container}> 
    <View style={styles.container2}>
       <Image
       
        style={styles.logo}
        source={require('../../assets/image/logo.jpg')}
      />
      <Text style={styles.headerText}>PDF Viewer</Text>
    
    </View>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={search}
     />
 
      <FlatList style={styles.pdfBox}
      data= {DATA}
      keyExtractor={ (item) => {item.id}}
      renderItem={renderItem}
      //contentContainerStyle={{flex:1,backgroundColor:"red"}}
      />
    
    </View>

  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5e7d0",
  },
  container2:{
    flexDirection:"row",
    backgroundColor:"#4e9fd9",
    
  
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
    color:"#white",
   // borderColor:"white",
    fontWeight:"bold",
     marginLeft:10,
     alignItems:"center",
     justifyContent:"center",
     marginTop:20,
  //   borderWidth:"1px",
  //   borderColor:"black"
     
   },
  
   pdfBox:{
     flex:1,
     marginTop:15,
    // marginLeft:200,
  //  borderWidth:1,
   // justifyContent:"center",
   // alignItems:"center",
  //  backgroundColor:"#5abfed"
   },
   pdfList:{
    // height:100,
   //  width:"100%",
    borderColor:"blue",
    backgroundColor:"#ebc68f",
    borderColor:"black",
    marginVertical:4,
    flex:1,
   // marginTop:40
     
   },
   pdfText:{
    // marginTop:10,
     //marginBottom:10,
     fontSize:20,
     fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    //marginLeft:60,
    paddingVertical:6,
    alignSelf:"center",
    color:"#4767d1"
     
   }
})
