import { homeStylesheet, Text, View, TouchableOpacity,Image  } from 'react-native';

import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homeStyles from '../Styles/homeStyles';

const Stack = createNativeStackNavigator();

const HomeScreen=({navigation})=>{
  // const [category,setSelectedCategory] = useState(null)
  // const [loading,setLoading] = useState(false)
  // const buttonPressed = ()=>{
  //   DocumentPicker.getDocumentAsync({type:"application/pdf"})
  //   .then((value)=>{
  //     const storageRef = ref(storage,`/docs/${value.name}`)
  //       setLoading(true)
  //       uploadBytes(storageRef,value.uri).then(async(snapshot)=>{
  //         const url = await getDownloadURL(storageRef)
  //         const data ={
  //           url:url,
  //           date:serverTimestamp(),
  //           name:value.name
  //         }
  //         const docRef = collection(db,"PdfDocs")
  //         try {
  //             await addDoc(docRef,data)
  //         } catch (error) {
  //             console.log(error)
  //         }
  //         setLoading(false)
        
  //     }).catch((error)=>{
  //       console.log(error)
  //       setLoading(false)
  //     })
  //   })
  
 
  // }
  // if(loading){
  //   return(
  //     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
  //     <ActivityIndicator size="large" color="#00ff00" />
  //   </View>
  //   )
  //     }
  return (
    
    <View style={homeStyles.container}>    
     <View style={homeStyles.uploadBox}>
     <View style={homeStyles.uploadHeader}>
     <Image
       style={homeStyles.logo}
       source={require('../../assets/image/logo4.jpg')}
     />
       </View>
       {/* <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          onSelectItem={setSelectedCategory}
         //  containerStyle={{width:"70%"}}
          inputContainerStyle={homeStyles.inputContainer}
          rightButtonsContainerStyle={{flexDirection:"row",alignItems:"center"}}

          suggestionsListContainerStyle={{maxHeight:50}}
          dataSet={[
            { id: '1', title: 'Default' },
            { id: '2', title: 'Java' },
            { id: '3', title: 'JavaScript' },
            {id:'6', title:"Ethical Hacking"},
            {id:'8', title:"Python"},
            {id:'9', title:"C Programming"},
            {id:'10', title:"C++ Programming"},
            {id:'6', title:"HTML"},
            {id:'7', title:"PHP"},
          ]}
        />
        */}
       {/* <TouchableOpacity style={homeStyles.button}
        onPress={()=>buttonPressed() }      
       >           
       <Text style={homeStyles.btnText}>Upload</Text>
       </TouchableOpacity> */}

       <TouchableOpacity style={homeStyles.button}
        onPress={()=>navigation.navigate('Course-List') }      
       >           
       <Text style={homeStyles.btnText}>Sign IN With Google</Text>
       </TouchableOpacity>
    </View>

    <View style={homeStyles.footerContainer}>
<Text style={homeStyles.footerTxt}>SCODE NETWORK</Text>
<Text style={homeStyles.ftrTxt}>Contact Us-</Text>
<Text style={homeStyles.footerTxt}>9990211148, 9990211149</Text>
<Text style={homeStyles.ftrTxt}>ADDRESS- LG-15 Parsvnath kaushambi Mall, near Kausambi metro station , kaushambi Ghaziabad Uttar Pradesh India 201012</Text>




</View>
</View>
  );
}
export default HomeScreen

//const Styles= StyleSheet.Create
