import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/core';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeDrawer} from '../screens/home/home-drawer.component';
import {HomeBottomNavigation} from '../screens/home/home-bottom-navigation.component';
import Dashboard from '../screens/dashboard/dashboard.screen';
import Account from '../screens/account/account.screen';

import {HomeTabsParamList, HomeDrawerParamList} from './navigation.types';
import Cart from '../screens/cart/cart.screen';
import Checkout from '../screens/checkout/checkout.screen';

const BottomTab = createBottomTabNavigator<HomeTabsParamList>();
const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const ROOT_ROUTES: string[] = ['Dashboard', 'Account'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find((route) => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({
  route,
}: any): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

export const HomeTabsNavigator: React.FC = () => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    tabBar={(props) => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name={'Dashboard'} component={Dashboard} />
    <BottomTab.Screen name={'Account'} component={Account} />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator drawerContent={(props) => <HomeDrawer {...props} />}>
    <Drawer.Screen name={'Home'} component={HomeTabsNavigator} />
  </Drawer.Navigator>
);
