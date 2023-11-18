import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native'
import Home from './screen/Home';
import Surah from './screen/Surah';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quran from './screen/Quran';
import Languages from './screen/Languages';
import Audio from './screen/Audio';

//import {RNNDrawer} from 'react-native-navigation-drawer-extension';

// import CustomDrawer from './component/CustomDrawer';
// import AnotherPage from './pages/AnotherPage';
// import HomePage from './pages/HomePage';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';


const Stack = createNativeStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Surah' component={Surah}/>
        <Stack.Screen name='Languages' component={Languages}/>
        <Stack.Screen name='Quran' component={Quran}/>
       
        <Stack.Screen name='Audio' component={Audio}/>

        {/* <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='Page1' component={Page1}/>
        <Stack.Screen name='AnotherPage' component={AnotherPage}/>
        <Stack.Screen name='Page2' component={Page2}/> */}

      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;