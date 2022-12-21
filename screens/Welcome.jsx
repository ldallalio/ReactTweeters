import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Welcome = ({navigation}) => {
    const image = { uri: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' }
    
    function onPress() {
         navigation.navigate('#React #Cloud Tweets')
    }
  return (
      <View style={styles.container}>
          <ImageBackground source={image} style={styles.image} >
              <Pressable style={styles.button} onPress={onPress}>
                  <Text style={styles.text}>View Tweets</Text>
              </Pressable>
          </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: '100%',
        width: '100%',
        
    },
    image: {
        flex: 1, 
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
    },
    button: {
        display: 'flex',
        justifyContent:'center',
        width: 350,
        height: 100,
        backgroundColor: 'rgba(0, 3, 165, 0.77)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign:'center'
    }
    
})