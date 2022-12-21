import { StyleSheet, Text, View,ImageBackground, ScrollView, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react'
import Tweet from '../components/Tweet'
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
    }

const TweetDashboard = () => {
    
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(3000).then(() => setRefreshing(false));
  }, []);

      const image = { uri: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' }
  return (
      <SafeAreaView style={styles.container}>
          <ImageBackground source={image} style={styles.image} >
              <ScrollView style={styles.scroll} refreshControl={
                  <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                  />
              }>
                  <Tweet refreshing={refreshing}/>
                 </ScrollView>
          </ImageBackground>
    </SafeAreaView>
  )
}

export default TweetDashboard

const styles = StyleSheet.create({
     container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: '110%',
        width: '100%',
        paddingTop:50,
        
    },
    scroll: {
        backgroundColor: 'rgba(0, 119, 166, 0.88)',
        paddingRight:20,
        paddingLeft: 20,
        width:'100%'
        
        
    },
    image: {
        flex: 1, 
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height:'110%'
    },

    text: {
        color: 'white',
        fontSize: 30,
        textAlign:'center'
    }
})