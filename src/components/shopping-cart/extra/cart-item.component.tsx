import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, ListItem, ListItemProps, Text} from '@ui-kitten/components';
import {CloseIcon, MinusIcon, PlusIcon} from './icons';
import {Product} from './data';
import {DECREASE_QTY, INCREASE_QTY} from '../../../store/actionTypes';

export type CartItemProps = ListItemProps & {
  index: number;
  product: Product;
  onRemove: (product: Product, index: number) => void;
};

export const CartItem = (props: CartItemProps): React.ReactElement => {
  const {style, product, index, onRemove, ...listItemProps} = props;
  const dispatch = useDispatch();

  const decrementButtonEnabled = (): boolean => {
    return product.qty > 1;
  };

  const onRemoveButtonPress = (): void => {
    onRemove(product, index);
  };

  const onMinusButtonPress = (): void => {
    dispatch({type: DECREASE_QTY, payload: product});
  };

  const onPlusButtonPress = (): void => {
    dispatch({type: INCREASE_QTY, payload: product});
  };

  return (
    <ListItem {...listItemProps} style={[styles.container, style]}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.detailsContainer}>
        <Text category="s1">{product.name}</Text>
        <Text appearance="hint" category="p2">
          {product.category}
        </Text>
        <Text category="s2">{product.price}</Text>
        <View style={styles.amountContainer}>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size="tiny"
            accessoryRight={MinusIcon}
            onPress={onMinusButtonPress}
            disabled={!decrementButtonEnabled()}
          />
          <Text style={styles.amount} category="s2">
            {`${product.qty}`}
          </Text>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size="tiny"
            accessoryRight={PlusIcon}
            onPress={onPlusButtonPress}
          />
        </View>
        <Text
          style={[{position: 'absolute', bottom: 0, right: 0, padding: 15}]}
          category="h6">
          {`${parseFloat(String(product.qty * product.price)).toFixed(2)}`}
        </Text>
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance="ghost"
        status="basic"
        accessoryRight={CloseIcon}
        onPress={onRemoveButtonPress}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    width: 120,
    height: 144,
  },
  detailsContainer: {
    flex: 1,
    height: '100%',
    padding: 16,
  },
  amountContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 16,
    bottom: 16,
  },
  amountButton: {
    borderRadius: 16,
  },
  amount: {
    textAlign: 'center',
    width: 40,
  },
  removeButton: {
    position: 'absolute',
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
