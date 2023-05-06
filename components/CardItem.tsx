import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NewsData } from '../utils/type'
import { Card, useTheme } from 'react-native-paper'
import { NavigationProp } from '@react-navigation/native'
import {Route} from "react-native"
type Props={
  title: string
  image_url:string
  content:string
  description:string
  navigation:NavigationProp<Route>
}


const CardItem = (props:NewsData) => {

  const theme=useTheme()
  return (
    <Pressable onPress={handlePress}>
        <Card style={{marginVertical:10, backgroundColor:"#ccc"}}>

<Card.Cover borderRadius={10} source={{uri:props.image_url}} />
<Card.Title title={props.title} subtitle={props.description.split("\n")[0]}
titleNumberOfLines={1}/>

        </Card>
    </Pressable>
  
  )
}

export default CardItem

const styles = StyleSheet.create({
  
})