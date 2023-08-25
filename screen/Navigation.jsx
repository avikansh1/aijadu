import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from './Login'
import Form from './Form'
import AnotherPage from './AnotherPage'
import SignUpPage from './SignUpPage'
import MainPage from './MainPage'
import IcanSell from './IcanSell'
import AiJadu from './AiJadu'


const Navigation = (props) => {
  return (
    <View>

    <Button title='Login Button' onPress={()=>{props.navigation.navigate(Login)}}  />
    <Button title='Form Button' onPress={()=>{props.navigation.navigate(Form)}}  />
    <Button title='DropDown Page Button' onPress={()=>{props.navigation.navigate(AnotherPage)}}  />
    <Button title='SignUp Page Button' onPress={()=>{props.navigation.navigate(SignUpPage)}}  />
    <Button title='Main Page Button' onPress={()=>{props.navigation.navigate(MainPage)}}  />
    <Button title='AiJadu Page Button' onPress={()=>{props.navigation.navigate(AiJadu)}}  />
  
    </View>
  )
}

export default Navigation