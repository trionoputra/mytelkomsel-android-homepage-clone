import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    dashboarHvc: {
      width:'100%',
      height:200
    },
    scrollViewContainer: {
      marginTop:-120,
     
    },
    screenContainer: {
      backgroundColor: '#EAEEF1',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    homeHeaderContainer :{
      marginTop:16,
      flexDirection: "row",
      marginLeft:16,
      marginRight:16,
      alignItems: 'center',
      
    }, 
    homeHeaderInnerContainer :{
      flexDirection: "row",
      alignItems: 'center',
      flex:0.5
    }, 
    homeHeaderInnerRightContainer :{
      justifyContent: 'flex-end',
    }, 
    imgLogo : {
      width:45,
      height:45,
      borderRadius:45/2
    },
    imgProfile : {
      width:60,
      height:60,
      borderRadius:60/2,
      backgroundColor:'#ACACAC',
      justifyContent:'center',
      alignItems:'center',
      marginRight:16
    },
    imgProfileText : {
      color:'white'
    },
    profileText : {
      color:'#121212',
      fontWeight:'bold',
      fontSize:12,
      marginBottom:4
    },
    profileText2 : {
      color:'#121212',
      fontWeight:'bold',
      marginBottom:2,
      fontSize:14
    },
    profileText3 : {
      color:'#B1B5B8',
      fontSize:10
    },
    phoneNumber : {
      marginLeft:16,
      color:'white',
      fontSize:12
    },
    iconPlus : {
      marginLeft:8,
      color:'white'
    },
    iconRecent : {
      color:'grey',
    },
    circleView : {
      width:45,
      marginLeft:16,
      height:45,
      borderRadius:45/2,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
    },
    circlePoint : {
      width:100,
    },
    iconInnerCircle : {
      color:'black',
      position:'relative'
    },
    circleGray : {
      backgroundColor:'#F0F1F3',
      width:35,
      height:35,
      borderRadius:35/2,
      marginLeft:8
    },
    pointContainer : {
      justifyContent:'flex-end',
      flex:2,
    },
    boxShadow : {
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    badge:{
      color:'#fff',
      position:'absolute',
      zIndex:10,
      top:6,
      right:6,
      padding:2,
      backgroundColor:'red',
      borderRadius:10,
      fontSize:8,
      textAlign:'center',
    },
    boxContainerTopRadius : {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    boxContainerBottomRadius : {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    boxMargin : {
      padding: 16,
    },
    smallTopMargin : {
      marginTop: 4,
    },
    boxContainer : {
      backgroundColor:'white',
      paddingBottom:16,
      marginBottom:16
    },
    HeaderBoxContainer : {
      margin:16,
      flex:1
    },
    textHeaderContainer: {
      marginLeft:8,
      fontSize:12,
      fontWeight:'bold',
    },
    textSeeAllWrapper: {
      justifyContent:'flex-end',
      flex:1,
      alignItems:'flex-end'
    },
    textSeeAll: {
      color:'#E5131E',
      fontSize:12,
    },
    subTextHeaderContainer: {
      fontSize:12,
    },
    flexRow : {
      flexDirection:'row',
    },
    currentPackageList: {
      flex: 1,
      height:100,
      backgroundColor: '#fff',
      padding: 8,
      alignItems:"center",
      overflow:'hidden',
      marginBottom:16
    },
    shadowWrapper : {
      shadowColor: '#F0F1F3',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 10,
      shadowOpacity: 0.8,
      
    },
    listCurrentPackageItem: {
      elevation: 3,
      borderRadius: 8,
      backgroundColor: '#fff',
      margin:8,
      flex:1,
      padding:8,
      height:70,
      width:160,
    },
    pagerLatestItem: {
      elevation: 3,
      borderRadius: 8,
      backgroundColor: '#4599E1',
      padding:8,
      height:120,
      marginRight:16
    },

    listRecentItem: {
      elevation: 3,
      borderRadius: 8,
      backgroundColor: '#fff',
      margin:8,
      marginLeft:16,
      marginRight:16,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:8,
      height:70,
    },
    labelNormal :{
        fontSize:12,
        color:"#121212"
    },
    labelBoldLarge :{
      fontSize:14,
      color:"#121212",
      fontWeight:"bold"
  },
  labelthin :{
    fontSize:9,
    color:"#121212",    
  },
  btnHome : {
    width:'100%',
    flex:0.5
  },

  btnWhite :{ 
    backgroundColor:'white',
    borderWidth:0.5,
    borderColor:"black",
  },
  btnRed :{ 
    backgroundColor:'#E5131E',
  },
  dotStyle : {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E5131E',
    paddingVertical: 0
  },
  inActiondotStyle :{
    backgroundColor: '#ACACAC'
  },
  dotContainerStyle : {
    height : 10,
    paddingVertical: 0,
    marginTop:24,
    marginBottom:16
  },
  pagerWrapper : {
    alignItems:'flex-start',
     justifyContent:'flex-start'
  }


  });
  export default styles;