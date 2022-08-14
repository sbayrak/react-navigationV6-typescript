import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList>;

const Menu = (): JSX.Element => {
  const navigation = useNavigation<Props['navigation']>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ExploreStack')}>
        {/* push dersek stack eder, infitine push yapabiliyoruz */}
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('RestaurantsScreen')}
      >
        <Text style={styles.link}>Resturants</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});
