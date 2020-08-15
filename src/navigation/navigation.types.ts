import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type AuthParamList = {
  Signin: undefined;
  Signup: undefined;
};

export type HomeTabsParamList = {
  Dashboard: undefined;
  Account: undefined;
  Cart: undefined;
  Checkout: undefined;
};
export type HomeDrawerParamList = {
  Home: undefined;
  Checkout: undefined;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
export type HomeTabsNavProps<T extends keyof HomeTabsParamList> = {
  navigation: BottomTabNavigationProp<HomeTabsParamList, T>;
  route: RouteProp<HomeTabsParamList, T>;
};
export type HomeDrawerNavProps<T extends keyof HomeDrawerParamList> = {
  navigation: DrawerNavigationProp<HomeDrawerParamList, T>;
  route: RouteProp<HomeDrawerParamList, T>;
};
