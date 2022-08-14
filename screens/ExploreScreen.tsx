import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExploreStackParams, RootStackParamList } from '../App';
import TopDrawerNavigator from '../components/TopDrawerNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ExploreStack'>;

const ExploreScreen = (props: Props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      {/* <TopDrawerNavigator /> */}
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name='Burger Restaurant'
          // onPress={(name) => navigation.navigate('RestaurantScreen', { name })}
          onPress={() =>
            navigation.navigate('RestaurantsStack', {
              screen: 'RestaurantScreen',
              params: { name: 'Hello from explore' },
            })
          }
        />
        <RestaurantCard
          name='Fine Dining Restaurant'
          onPress={(name) => navigation.navigate('RestaurantScreen', { name })}
        />
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={(name) => navigation.navigate('RestaurantScreen', { name })}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name='Burger Restaurant'
          onPress={(name) => navigation.navigate('RestaurantScreen', { name })}
        />
        <RestaurantCard
          name='Fine Dining Restaurant'
          onPress={(name) => navigation.navigate('RestaurantScreen', { name })}
        />
      </View>
      <Menu />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 5,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
