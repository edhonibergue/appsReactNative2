import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


 function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Sobre')}
        title="Go to Sobre"
      />
    </View>
  );
}
export default function App() {
  return (
  
    <NavigationContainer> 
      <Drawer.Navigator useLegacyImplementation initialRouteName="Sobre">
      <Drawer.Screen name="Home" component={Home} />
     <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
