import { StyleSheet, Text, View,Alert, FlatList,TextInput, TouchableOpacity, Image,Loader, ActivityIndicator } from 'react-native'
import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';


const courseList= ({navigation}) => {
  const [category,setSelectedCategory] = useState(null)
  const [loading,setLoading] = useState(false)
  const [search, setSearch] = useState('');
      if(loading){
        return(
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
        )
          }

          
  const DATA = [
    {id:'1', name:"Ethical Hacking"},
    {id:'2', name:"Java Script"},
    {id:'3', name:"Python"},
    {id:'4', name:"C Programming"},
    {id:'5', name:"C++ Programming"},
    {id:'6', name:"Security Analyst"},
    {id:'7', name:"PHP"},
    {id:'8', name:"Digital Marketing"},
    {id:'9', name:"Java"},
    {id:'10',name:"Web Development"},

 ]
 const [filteredData,setFilteredData] = useState(DATA)
  const handleFilter = (txt)=>{
    setSearch(txt)
    //if search is empty set the orgignal data into flatlist
    if(txt=="")
      setFilteredData(DATA)
    else{
      //if search contains somekeyworkd we need to sort the data 
      const newData = DATA.filter(item=>item.name.toLowerCase().startsWith(txt))
      setFilteredData(newData)
    }
  }

 const renderItem = ({item})=>{
 return(
  <TouchableOpacity style={{paddingHorizontal:2,marginVertical:20}} onPress={()=>navigation.navigate("Course-details",{id:item.id})}>
   <View style={styles.pdfList}> 
   <Text style={styles.pdfText}>{item.name}</Text> 
    </View>
  </TouchableOpacity>
 )}
 return(
   <View style={styles.container}> 
   {/* <View style={styles.container2}>
       <Image     
       style={styles.logo}
       source={require('../../assets/logo.jpg')}
     /> 
     <Text style={styles.headerText}>PDF Viewer</Text>
   
   </View> */}
     
     <View style={{padding: 10}}>
      <TextInput
        data= {search}//t
        style={{height: 50}}
        placeholder="Search Your Course Here..!"
        onChangeText={text=>handleFilter(text)}
        value={search}
      />
      
    </View>
     <FlatList
     data= {filteredData}
     keyExtractor={ (item) => {item.id}}
     renderItem={renderItem}
     //contentContainerStyle={{flex:1,backgroundColor:"red"}}
     />

   </View>

 );
  }
export default courseList


const styles = StyleSheet.create({
  container:{
    flex:1,
   // backgroundColor:"#f5e7d0",
   backgroundColor: "#dae4ed",
   padding:"0.5%"
  
  },
  container2:{
    flexDirection:"row",
   // backgroundColor:"#f5e7d0",
   backgroundColor: "#5fde81",
    marginTop:10
  
  },
  
   pdfBox:{
     flex:1,
    // marxginTop:35,
    // marginLeft:200,
   // borderWidth:1,
    justifyContent:"center",
    alignItems:"center",
  //  backgroundColor:"#5abfed"
   },
   pdfList:{
    borderColor:"blue",
    backgroundColor:"#3b70cc",
  // backgroundColor: "#5fde81",
    borderColor:"black",
   // marginVertical:2,
    flex:1,
   // marginTop:8,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",     
   },
 

   pdfText:{
     color:"white",
     marginTop:10,
     marginBottom:10,
     fontSize:25,
     fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:4,
    paddingTop:4
     
   }
})

