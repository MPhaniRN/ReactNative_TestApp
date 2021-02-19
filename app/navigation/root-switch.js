import React from 'react';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import {rootSwitch} from './../config/navigator';
import Firstscreen from './../screens/FirstScreen/index';
import Secondscreen from './../screens/Secondscreen/index';
import Thirdscreen from './../screens/Thirdscreen/index';



const Stack = createStackNavigator();
  function RootStack({loading, isGettingStart, isLogin, loginRequired}) {
  /**
   * Hide Splash after fetch data
   */

   
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={rootSwitch.FirstScreen} screenOptions={{ headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
      <Stack.Screen name =  {rootSwitch.FirstScreen} component={Firstscreen}  />
      <Stack.Screen name = {rootSwitch.SecondScreen} component={Secondscreen}/> 
      <Stack.Screen name = {rootSwitch.ThirdScreen} component={Thirdscreen}/> 
    </Stack.Navigator>
  );
}

export default RootStack;
  