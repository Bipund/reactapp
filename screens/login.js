import * as React from 'react';
import {Text,View,Image,ImageBackground,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
const book = require("../assets/book.jpg")
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export default function Login ({route,navigation}){


    const [username,set_username]=React.useState("")
    const [Password,set_password]=React.useState("")

    const submit=()=>{
        if(username==""){
            alert("please enter username")
        }else{
            if(Password==""){
                alert("please enter password")
            }else{
                if(username.toLocaleLowerCase()=="demo" && Password.toLocaleLowerCase()=="demo"){   
                    navigation.navigate("Home")
                }else{
                    alert("incorrect username and password")
                }
            }
        }
    }

    return<View style={style.container}>
            <Image source={book} style={style.img} />
            <View style={[style.container,{top:0}]}>
                <Text style={style.login}>{'LOGIN'}</Text>
                <View style={style.login_panel}>
                    <View style={style.input}>
                    <TextInput style={style.input_text} onChangeText={(text)=>{set_username(text)}}  placeholder="Enter You Mobile Number" placeholderTextColor="grey" />
                    <View style={style._btn}><Ionicons style={{padding:10,color:"white"}} name="ios-person-outline" size={20} /></View>
                    </View>
                    <View style={[style.input,{top:60}]}>
                    <TextInput style={style.input_text} onChangeText={(text)=>{set_password(text)}} placeholder="Enter Your Password" placeholderTextColor="grey" />
                    <View style={style._btn}><Feather style={{padding:10,color:"white"}} name="lock" size={20} /></View>
                    </View>

                    
                </View>
                <TouchableOpacity style={style.login_btn} onPress={submit}>
                        <Text style={{fontSize:18,color:"white",padding:10,textAlign:"center"}}>LOGIN</Text>
                    </TouchableOpacity>
            </View>
            <View style={{alignItems:"center",bottom:50}}>
                <Text style={{textAlign:"center",bottom:10,color:"#676767"}}>Dont't have an account</Text>
                <TouchableOpacity style={[style.login_btn,{backgroundColor:"#3dadeb",left:0}]}>
                        <Text style={{fontSize:18,color:"white",padding:10,textAlign:"center"}}>SINGUP</Text>
                    </TouchableOpacity>
            </View>
    </View>
}

const style=StyleSheet.create({
    btn:{

    },
    container:{
        flex:1
    },
    img:{
        width:"100%",
        height:Dimensions.get("screen").width/2
    },
    login:{
        color:"#777777",
        fontSize:30,
        lineHeight:34.5,
        top:80,
        left:43,
        fontWeight:"bold",
        fontFamily:"Helvetica"
    },
    login_panel:{
            top:110,
            backgroundColor:"#dcdcdc",
            height:300,
            width:Dimensions.get("screen").width-100
    },
    input:{
        backgroundColor:"white",
        width:325,
        height:50,
        borderRadius:50,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.6,
        elevation: 9,
        flexDirection:"row",
        left:38,
        top:40
    },
    input_text:{
        padding:20,
        width:275
    },
    _btn:{
        backgroundColor:"#ff6600",
        width:50,
        borderTopEndRadius:50,
        borderBottomEndRadius:50
    },
    login_btn:{
        backgroundColor:"#ff6600",
        width:140,
        height:40,
        borderRadius:50,
        left:40,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        elevation: 9,
    }
})