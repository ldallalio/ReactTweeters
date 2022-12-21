import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'

const Tweet = ({refreshing}) => {
    console.log(refreshing)
   const  [tweetsLoaded, setTweetsLoaded] = useState(false);
   const   [tweetData, setTweetData] = useState(null);

    async function getTweets() {
        try {
            const response = await fetch('http://localhost:5000/api/tweets')
            const json = await response.json();
            setTweetData(json);
            setTweetsLoaded(true)
        } catch (error) {
            console.log(error)
        }
  }
  React.useEffect(()=>{
      if(refreshing){
          setTweetsLoaded(false);
           console.log('getting tweets')
           getTweets()

      }
  },[refreshing])

    React.useEffect(() => {
      getTweets()
     
  },[])
    if (tweetsLoaded) {
      return  tweetData.map((tweet) => {
          return <Text key={tweet.id } style={styles.tweetText}>{tweet.text}</Text>
        })
    } else {

        return (
          <View>
            <Text>...</Text>
          </View>
        )

    }
}

export default Tweet

const styles = StyleSheet.create({
    tweetText: {
        // color:'white',
        padding:10,
        fontWeight:'600',
        fontSize:16,
        marginTop:20,
        marginBottom:20,
        borderBottomColor:'darkblue',
        border:'solid 1px',
        backgroundColor:'rgba(255, 255, 255, 0.66)'

    }
})