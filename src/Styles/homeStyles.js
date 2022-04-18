import { StyleSheet } from "react-native";
const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
    //  backgroundColor: "#a3d9cc",
      backgroundColor:"#dae4ed",
      justifyContent:"flex-end",
      padding:"1%"
    },
    uploadBox:{
     // flex:0.6,

      //marginTop:80,
     // backgroundColor: '#fff',
      alignItems:"center",
      justifyContent:"center",
  
    },
    uploadHeader:{
      // marginTop:"40%",
      backgroundColor: "black",
      alignItems:"center",
      justifyContent:"center",
      width:"60%",
      aspectRatio:1,
      borderRadius:"100%",
      borderWidth:3,
      borderColor:"white",

    },
    logo:{
      width:"68%",
      aspectRatio:1,
      //marginLeft:13,
      resizeMode:"stretch",
      //marginTop:50,
     // paddingBottom:9,
      justifyContent:"center",
      alignItems:"center"
  
    },
    button: {
      width:"90%",
      aspectRatio:5,
      borderRadius:40,
      //backgroundColor: "#6413b0",
      //backgroundColor: "#2157b5",
     //backgroundColor: "black",
     backgroundColor:"#4b77c4",
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:"black",
      // borderRadius:10
      marginTop:50,
      borderWidth:2,
      borderColor:"white"
    },
    // button2: {
    //   width:"70%",
    //   height:50,
    //   borderRadius:10,
    //   backgroundColor: "#5fde81",
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderColor:"black",
    //   // borderRadius:10
    //   marginTop:"40%",
    //   borderWidth:2,
    //   borderColor:"white"
    // },
//     inputContainer:{
//     backgroundColor:"white",
//     flexDirection:"row",
//     borderWidth:2,
//     marginTop:"30%"

// },
    btnText: {
      fontWeight:"bold",
      fontSize:27,
      color:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerContainer:{
      flex:0.5,
      position:"relative",
   // marginTop:"90%",
      //marginLeft:6,
      justifyContent:"flex-end",
    //  paddingBottom:"2%",
      padding:"1%",
      textAlign:"center"
    },
    footerTxt:{
      fontSize:20,
      fontWeight:"bold"
    },
    ftrTxt:{
      fontSize:15,
    }
  });
  export default homeStyles