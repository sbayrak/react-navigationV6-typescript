import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DrawerMenuIcon from '../icons/DrawerIcon';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../App';

const TopDrawerNavigator = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        onPress={() => navigation.openDrawer()}
        underlayColor='#f0ddcc'
      >
        <DrawerMenuIcon color='#333' size={20} />
      </TouchableHighlight>
    </View>
  );
};

export default TopDrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
