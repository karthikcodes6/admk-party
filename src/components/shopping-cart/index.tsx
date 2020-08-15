import React, {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Button,
  Layout,
  List,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {CartItem} from './extra/cart-item.component';
import {Product} from './extra/data';
import {SELECT_PRODUCT} from '../../store/actionTypes';

export default ({selectedProducts, onOrder}): React.ReactElement => {
  const styles = useStyleSheet(themedStyle);
  const dispatch = useDispatch();

  const totalCost = (): number => {
    return selectedProducts.reduce(
      (acc, product) => acc + product.price * product.qty,
      0,
    );
  };

  const onItemRemove = (product: Product, index: number): void => {
    dispatch({type: 'REMOVE_PRODUCT', payload: product});
  };

  const renderFooter = (): React.ReactElement => (
    <Layout style={styles.footer}>
      <Text category="h5">Total Cost:</Text>
      <Text category="h5">{parseFloat(String(totalCost())).toFixed(2)}</Text>
    </Layout>
  );

  const renderProductItem = (
    info: ListRenderItemInfo<Product>,
  ): React.ReactElement => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
      onRemove={onItemRemove}
    />
  );

  return (
    <Layout style={styles.container} level="2">
      <List
        data={selectedProducts}
        renderItem={renderProductItem}
        ListFooterComponent={renderFooter}
      />
      <Button
        style={styles.checkoutButton}
        size="giant"
        onPress={selectedProducts.length ? onOrder : null}>
        ORDER
      </Button>
    </Layout>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
