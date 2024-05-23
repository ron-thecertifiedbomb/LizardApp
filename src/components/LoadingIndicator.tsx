import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center' 
    }
})