import React, { Component } from 'react'
import { Text, View } from 'react-native'

const MyText = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.sa}
         </Text>
      </View>
   )
}
export default MyText