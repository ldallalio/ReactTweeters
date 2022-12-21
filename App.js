import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer,
  NavigationContext,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import TweetDashboard from './screens/TweetDashboard';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'rgba(0, 3, 165,1)',
            },
            headerTitleStyle: {
              color: 'white',
            }
          }}
          title='Home'

        />
        <Stack.Screen
          name='#React #Cloud Tweets'
          component={TweetDashboard}
          options={{
            headerShown: true,
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: 'rgba(0, 3, 165,1)',
            },
            headerTitleStyle: {
              color: 'white',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
