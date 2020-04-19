import React from 'react';
import { StyleSheet, View } from 'react-native';


function Spacer(props) {
  const {children, margin} = props

  return (
    <View 
      style={{ margin: margin ? margin : 15 }}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Spacer;