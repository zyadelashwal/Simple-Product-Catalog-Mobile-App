import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer,DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../pages/Categories/CategoriesScreen';
import FavoriteList from '../pages/FavoriteList';
// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { View,Animated } from 'react-native';
import { connect } from 'react-redux';


 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={FavoriteList} />
      <Stack.Screen name='Categories' component={ProductsList}/>
      <Stack.Screen name='Favorite ' component={FavoriteList}/>
      <Stack.Screen name='Profile' component={FavoriteList}/>
    </Stack.Navigator>
  )
} 
const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    },
  };
  


const Tab = createBottomTabNavigator();

const BottomTabNavigato=(props)=> {
  const {countLike}=props;
  return(
 
          
                    <Tab.Navigator screenOptions={{
                        tabBarShowLabel:false,
                        tabBarStyle: { 
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 20,
                        marginHorizontal: 10,
                        // Max Height...
                        height: 60,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        // Shadow...
                        shadowColor: '#000',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                          width: 10,
                          height: 10
                        },
                        paddingHorizontal: 10,
                     },
                        
                        
                      }}>
                        <Tab.Screen name='Home' component={CategoriesScreen} options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={{
                                    // centring Tab Button...
                                    position: 'absolute',
                                    top: 20
                                    }}>
                                    <FontAwesome5
                                        name="home"
                                        size={20}
                                        color={focused ? 'red' : 'gray'}
                                    ></FontAwesome5>
                                    </View>)}} />
                        <Tab.Screen name='Categories' component={CategoriesScreen}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={{
                                // centring Tab Button...
                                position: 'absolute',
                                top: 20
                                }}>
                                <FontAwesome5
                                    name="list"
                                    size={20}
                                    color={focused ? 'red' : 'gray'}
                                ></FontAwesome5>
                                </View>
                            )
    }}/>
                        <Tab.Screen name='Favorite ' component={FavoriteList} options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={{
                                    // centring Tab Button...
                                    position: 'absolute',
                                    top: 20
                                    }}>
                                    <FontAwesome5
                                        name="heart"
                                        size={20}
                                        color={focused ? 'red' : 'gray'}
                                    ></FontAwesome5>
                                    </View>
                                ),
                                tabBarBadge:countLike==0?false:countLike
        }}/>
                        <Tab.Screen name='Profile' component={FavoriteList}options={{
                                tabBarIcon: ({ focused }) => (
                                    <View style={{
                                    // centring Tab Button...
                                    position: 'absolute',
                                    top: 20
                                    }}>
                                    <FontAwesome5
                                        name="user"
                                        size={20}
                                        color={focused ? 'red' : 'gray'}
                                    ></FontAwesome5>
                                    </View>
                                )
        }}/>
                    </Tab.Navigator>
           
  )
} 



class AppContainer extends React.Component {

  render(){
    return(  <NavigationContainer theme={MyTheme}>
      <BottomTabNavigato countLike={this.props.like}/>
    </NavigationContainer>
    )
  }
  
} 
function mapStateToProps(state) {
  return {
    like: state.likeReducers.count
    
  }
}


export default connect(mapStateToProps)(AppContainer)


console.disableYellowBox = true;