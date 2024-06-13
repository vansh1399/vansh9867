import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Category from '../Category/Category';
import SubCategory from '../SubCategory/SubCategory';
import Product from '../Product/Product';


const Drawer = createDrawerNavigator();

export default function Drawer1() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="SubCategory" component={SubCategory} />
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}
