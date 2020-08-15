import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Text,
  TopNavigation,
  TopNavigationAction,
  Input,
  Button,
} from '@ui-kitten/components';
import {TwitterIcon, SearchIcon, FunnelLineIcon} from '../icons.component';
import {widthPercentageToDP} from '../../shared/methods/normalize';

export const DashboardTopNav = ({
  name,
  photoUrl,
  onPressPhoto,
  navigation,
  onSearch,
}: {
  name: string;
  photoUrl: string;
  onPressPhoto?: () => void;
  navigation: object;
}) => {
  let text = '';
  const handleSearch = (e) => {
    text = e;
  };
  const renderTitle = (props: any) => (
    <Input
      placeholder="Search here"
      accessoryRight={SearchIcon}
      onChangeText={handleSearch}
      onSubmitEditing={() => onSearch(text)}
      // value={search}
      style={{marginLeft: 10, width: widthPercentageToDP(50)}}
    />
  );

  const renderLeftIcon = () => (
    <>
      <TopNavigationAction
        icon={TwitterIcon}
        onPress={navigation?.toggleDrawer}
      />
      <Text>ADMK App</Text>
    </>
  );

  const renderRightIcon = () => (
    <TopNavigationAction
      icon={FunnelLineIcon}
      onPress={navigation?.toggleDrawer}
    />
  );

  return (
    <TopNavigation
      //   title={renderTitle}
      accessoryLeft={renderLeftIcon}
      title={renderTitle}
      accessoryRight={renderRightIcon}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  tAlignRight: {
    textAlign: 'right',
  },
});
