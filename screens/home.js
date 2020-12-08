import * as React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab= createBottomTabNavigator();
import Login from './login'
import { Container,Content,Card,CardItem} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Home({route,navigation}){
    return<Tab.Navigator tabBarOptions={{activeTintColor: '#ff6600', 
    inactiveTintColor: 'grey'}}>
    <Tab.Screen name="Home"  component={render_screen} />
    <Tab.Screen name="Courses" component={render_screen} />
    <Tab.Screen name="Cart" component={render_screen} />
    <Tab.Screen name="Result" component={render_screen} />
    <Tab.Screen name="My" component={render_screen} />
  </Tab.Navigator>
}

function render_screen(){

    const [data,set_data]=React.useState([{
        icon:<Feather size={20} name="layers" />,
        name:"COURSE"
    },{
        icon:<MaterialIcons name="computer" size={20} color="black" />
        ,name:"TEST SERIES"
    },{
        icon:<Entypo name="pencil" size={20} color="black" />
        ,name:"EXAM"
    },{
        icon:<MaterialCommunityIcons name="arrow-top-right" size={20} color="black" />
        ,name:"REPORT"
    },{
        icon:<Entypo name="text-document" size={20} color="black" />
        ,name:"PDF"
    },{
        icon:<MaterialIcons name="video-library" size={20} color="black" />
        ,name:"Video"
    },{
        icon:<Entypo name="menu" size={20} color="black" />
        ,name:"NOTICE"
    },{
        icon:<Feather name="refresh-ccw" size={20} color="black" />
        ,name:"DOUBT"
    }])

    const [ev_data,set_ev_data]=React.useState([
        {title:"New cource iit JEE 2021",time:"13000 hrs",date: "24th Aug 2020"},
        {title:"New cource iit JEE 2021",time:"13000 hrs",date: "24th Aug 2020"},
        {title:"New cource iit JEE 2021",time:"13000 hrs",date: "24th Aug 2020"},
        {title:"New cource iit JEE 2021",time:"13000 hrs",date: "24th Aug 2020"},
        {title:"New cource iit JEE 2021",time:"13000 hrs",date: "24th Aug 2020"},
        {title:"New cource iit JEE 2021",time:"13000 hrs",date: "24th Aug 2020"},
    ])

    const img_data=[{img:require('../assets/book.jpg')},{img:require('../assets/book.jpg')},{img:require('../assets/book.jpg')},{img:require('../assets/book.jpg')},{img:require('../assets/book.jpg')}]
    
    return<Container>
            <Content>

        <View style={style.header}>
            <Card style={style.card_head}>
                <View style={style.back}>
                    <Ionicons color="#ff6600" name="chevron-back-outline" size={20} />
                </View>
                <View style={style.card_body}>
                    <Text style={{fontSize:10,color:"#ff6600"}}>Aug 24th</Text>
                    <Text style={{fontSize:18,color:"#777777"}}>Hello, Abhishek</Text>
                </View>
            </Card>

            <Card style={style.card_head2}>
                <Ionicons name="person-circle-outline" style={{padding:5,left:20}} size={40} />
                <Entypo name="menu" color="grey" style={{left:20,padding:10}} size={30} />

            </Card>
        </View>
        <View style={{flex:1}}>
            <View style={style.search}>
                <TextInput style={{paddingLeft:10,width:280}} placeholder="Search" />
                <Feather name="search" style={{padding:10}} size={20} />
            </View>



            {/* crousel is left */}

    <View style={{top:100}}>
        <FlatList horizontal data={img_data} renderItem={({item,spec,i})=>{
            return<Image source={item.img} style={{width:350,height:200,alignSelf:"center",marginHorizontal:20,borderRadius:20}} />
        }}  />
    </View>



            <View style={{marginHorizontal:20,top:130,width:"100%"}}>
                <FlatList style={{width:"100%",height:200}} data={data} numColumns={2} renderItem={({item,spec,i})=>{
                    return<TouchableOpacity style={style.button}>
                            <Text style={{left:20}}>{item.icon}</Text>
                            <Text style={{textAlign:"center",left:30}}>{item.name}</Text>
                    </TouchableOpacity>
                }} />
            </View>
            <View style={style.event}>
                <Text style={{padding:15,left:25,fontSize:14}}>Recent Events</Text>
                <FlatList data={ev_data} renderItem={({item,spec,i})=>{
                    return<View style={{padding:10,flexDirection:"row",alignItems:"center",borderBottomWidth:1,marginHorizontal:40,borderColor:"grey"}}>
                        <View style={{backgroundColor:"#4caf50",height:30,width:30}}>
                            <Feather name="check-circle" style={{padding:8}} size={15} color="white" />
                        </View>
                        <View style={{left:5}}>
                        <View><Text style={{fontWeight:"bold",color:"#676767"}}>{item.title}</Text></View>
                        <View style={{flexDirection:"row"}}><Text style={{fontSize:10}}>{item.time}</Text><Text style={{left:50,fontSize:10}}>{item.date}</Text></View>
                            </View>
                    </View>
                }} />
            </View>
        </View>
        </Content>
    </Container>
}

const style=StyleSheet.create({
    event:{
        backgroundColor:"#f2f2f2",
        height:300,
        width:350,
        alignSelf:"center",
        top:150,
        borderRadius:50,
        bottom:50
    },  
    header:{
        height:40,
        top:50,
        flexDirection:"row"
    },
    card_head:{
        height:50,
        width:291,
        borderTopEndRadius:50,
        borderBottomEndRadius:50,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        elevation: 9,
        flexDirection:"row"
    },card_body:{
           left:60,
           top:5 
    },
    card_head2:{
        height:50,
        width:110,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        elevation: 9,
        flexDirection:"row",
        left:5,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        backgroundColor:"#f2f2f2"
    },  
    back:{
        height:30,
        width:30, shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        elevation: 9,
        borderWidth:0.4,
        top:10,
        left:50,
        padding:4,
        borderColor:"lightgrey",
        borderRadius:5        
    },
    search:{
        backgroundColor:"white",
        width:325,
        height:40,
        borderRadius:50,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 3,
        shadowOpacity: 0.2,
        elevation: 9,
        flexDirection:"row",
        left:38,
        top:80
    },
    button:{
        backgroundColor:"white",width:150,height:40,borderRadius:50,flexDirection:"row",padding:10,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.6,
        elevation: 9,
        marginHorizontal:18,
        marginVertical:4
    }
})