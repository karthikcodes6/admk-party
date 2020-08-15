import React from 'react';
import {useDispatch} from 'react-redux';
import {
  Dimensions,
  ImageBackground,
  ListRenderItemInfo,
  View,
} from 'react-native';
import {
  Button,
  Card,
  List,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {CartIcon, CheckIcon} from './extra/icons';
import {Product} from './extra/data';
import {
  INCREASE_QTY,
  SELECT_PRODUCT,
  DECREASE_QTY,
} from '../../store/actionTypes';
import {PlusIcon, MinusIcon, HeartIcon} from '../shopping-cart/extra/icons';

export const ProductListScreen = ({
  navigation,
  route,
  products,
}): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const dispatch = useDispatch();
  const onItemPress = (index: number): void => {
    navigation && navigation.navigate('ProductDetails3');
  };

  const onItemCartPress = (index: number): void => {
    dispatch({type: SELECT_PRODUCT, payload: products[index]});
  };

  const renderItemFooter = (
    info: ListRenderItemInfo<Product>,
  ): React.ReactElement => (
    <>
      <View style={styles.itemFooter}>
        <Text category="s1">{info.item.description}</Text>
      </View>
      <View>
        <Button
          style={styles.iconButton}
          size="tiny"
          accessoryRight={HeartIcon}
          onPress={() => dispatch({type: INCREASE_QTY, payload: info.item})}>
          6 Like
        </Button>
      </View>
    </>
  );

  const renderItemHeader = (
    info: ListRenderItemInfo<Product>,
  ): React.ReactElement => (
    <ImageBackground
      style={styles.itemHeader}
      source={{uri: info.item.image}}
    />
  );

  const renderProductItem = (
    info: ListRenderItemInfo<Product>,
  ): React.ReactElement => (
    <Card
      style={styles.productItem}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}>
      <Text category="s1">{info.item.name}</Text>
      <Text appearance="hint" category="c1">
        {info.item.category}
      </Text>
    </Card>
  );

  return (
    <List
      contentContainerStyle={styles.productList}
      data={(products.length && products) || products}
      numColumns={1}
      renderItem={renderProductItem}
    />
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  productItem: {
    flex: 1,
    margin: 8,
    // maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1',
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  iconButton: {
    paddingHorizontal: 0,
    marginRight: 5,
  },
});
