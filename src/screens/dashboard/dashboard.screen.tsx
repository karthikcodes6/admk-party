import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
  Button,
} from '@ui-kitten/components';

import {DashboardTopNav} from '../../components/top-navigations/dashboard-top.component';
import {AuthSchema} from '../../models/user.models';
import {ArrowForwardIcon} from '../../components/icons.component';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../constants/global-styles';
import {IconList} from '../../components/game-cards/icon-list.component';
import TMStatusBar from '../../components/status-bar.component';
import {HomeDrawerNavProps} from '../../navigation/navigation.types';
import {ProductListScreen} from '../../components/product-list/product-list.component';
import {fetchProducts} from '../../store/actions/productActions';

interface DashboardProps extends HomeDrawerNavProps<'Home'> {
  authData: AuthSchema;
}

const Dashboard = ({
  navigation,
  authData,
  route,
  productsData,
  fetchProducts,
}: DashboardProps) => {
  const styles = useStyleSheet(themedstyles);
  const [currentCategory, setCurrentCategory] = useState('');
  const [search, setSearch] = useState('');
  React.useEffect(() => {
    fetchProducts();
  }, []);
  React.useEffect(() => {
    setCurrentCategory(productsData?.products[0]?.category || '');
  }, [productsData?.products[0]?.category]);
  const categories = [
    ...new Set(productsData?.products.map((obj) => obj.category)),
  ];
  return (
    <>
      <DashboardTopNav
        name={authData.fullName}
        photoUrl={authData.photo}
        navigation={navigation}
        onSearch={setSearch}
      />
      <TMStatusBar />
      <Layout style={styles.container} level="3">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section1}>
            <Text category="h4" style={{padding: 20}}>
              கட்சி செய்திகள்
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={[styles.sectionInner, styles.gutter]}>
                {categories.map((obj) => (
                  <Button
                    style={[styles.button, {marginRight: 15}]}
                    appearance={currentCategory === obj ? 'filled' : 'outline'}
                    onPress={() => setCurrentCategory(obj)}
                    size="small">
                    {obj}
                  </Button>
                ))}
              </View>
            </ScrollView>
            <ProductListScreen
              navigation={navigation}
              route={route}
              products={productsData?.products?.filter(
                (obj) =>
                  obj.category === currentCategory &&
                  (search.length ? obj?.name?.search(search) > -1 : true),
              )}
            />
          </View>
        </ScrollView>
      </Layout>
    </>
  );
};

const themedstyles = StyleService.create({
  container: {flex: 1, paddingBottom: 20},
  gutter: {
    paddingHorizontal: 20,
  },
  section1: {marginBottom: 20, marginTop: 20},
  sectionInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconColor: {
    backgroundColor: 'text-basic-color',
  },
  flexRow: {flexDirection: 'row'},
  skeletonImage: {
    width: 150,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
  },
  skeletonText: {
    height: 20,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  placeholderBG: {
    backgroundColor: 'background-basic-color-1',
  },
  placeholderHighlight: {
    backgroundColor: 'color-basic-transparent-400',
  },
  loadMore: {width: 150, height: 150, justifyContent: 'center'},
  button: {
    borderRadius: 50,
  },
});

const mapStateToProps = (state: any) => {
  return {
    authData: state.auth,
    productsData: state.products,
  };
};

const mapDispatchToProps = {
  //   signupUserState: signupUser,
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
