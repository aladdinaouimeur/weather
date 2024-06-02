import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from './src/screens/SearchScreen';
import {ROUTES} from './src/constants/routes';
import Geolocation from '@react-native-community/geolocation';

const Stack = createNativeStackNavigator();

Geolocation.setRNConfiguration({
  authorizationLevel: 'whenInUse',
  skipPermissionRequests: false,
});

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
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
