import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from '../screens/auth/intro/Intro';
import Welcome from '../screens/auth/welcome/Welcome';
import SocialLogin from '../screens/auth/social-signin/social-sigin.screen';
import {AuthParamList} from './navigation.types';
import Signin from '../screens/auth/sigin/Signin';
import Signup from '../screens/auth/signup/Signup';

const Stack = createStackNavigator<AuthParamList>();
interface AuthProps {}
export const AuthNavigator = (): React.ReactElement<AuthProps> => (
  <Stack.Navigator headerMode="none" initialRouteName="Signin">
    <Stack.Screen name={'Signin'} component={Signin} />
    <Stack.Screen name={'Signup'} component={Signup} />
  </Stack.Navigator>
);
