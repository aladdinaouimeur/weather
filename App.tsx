import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from './src/screens/SearchScreen';
import {ROUTES, RootStackParamList} from './src/constants/routes';
import Geolocation from '@react-native-community/geolocation';
import {HomeScreen} from './src/screens/HomeScreen';
import {NativeModules} from 'react-native';
const Stack = createNativeStackNavigator<RootStackParamList>();

Geolocation.setRNConfiguration({
  authorizationLevel: 'whenInUse',
  skipPermissionRequests: false,
});
NativeModules.DevSettings.setIsDebuggingRemotely(false);
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.HomeScreen}>
          <Stack.Screen
            name={ROUTES.HomeScreen}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ROUTES.SearchScreen}
            component={SearchScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
