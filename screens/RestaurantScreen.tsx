import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RestaurantsStackParams, RootStackParamList } from '../App';
import RestaurantCard from '../components/RestaurantCard';
import TopBackNavigation from '../components/TopBackNavigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'RestaurantScreen'>;
type Props = NativeStackScreenProps<RestaurantsStackParams, 'RestaurantScreen'>;

const RestaurantScreen = (props: Props): JSX.Element => {
  const nameFromRoute = props.route.params.name ?? 'No name';
  const navigation = props.navigation;
  console.log(nameFromRoute);

  return (
    <View style={styles.container}>
      <TopBackNavigation />
      <Text style={styles.screenTitle}>{nameFromRoute}</Text>
      <RestaurantCard
        name='Sushi1'
        onPress={() => navigation.push('RestaurantScreen', { name: 'Sushi1' })}
      />
      <RestaurantCard
        name='Sushi2'
        onPress={() => navigation.push('RestaurantScreen', { name: 'Sushi2' })}
      />
      <RestaurantCard
        name='Sushi3'
        onPress={() => navigation.push('RestaurantScreen', { name: 'Sushi3' })}
      />
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
