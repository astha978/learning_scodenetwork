
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CourseList from './src/screens/CourseList';
import CourseDetails from './src/screens/courseDetails';
import Contact from './src/screens/Contact';

const Stack = createNativeStackNavigator();

export default function App() {
return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Course-details" component={CourseDetails} />
        <Stack.Screen name="Course-List" component={CourseList} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
</NavigationContainer>
)



}



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
