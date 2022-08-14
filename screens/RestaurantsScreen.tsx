import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RestaurantsStackParams, RootStackParamList } from '../App';
import TopDrawerNavigator from '../components/TopDrawerNavigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'RestaurantsScreen'>;
// type Props = NativeStackScreenProps<
//   RestaurantsStackParams,
//   'RestaurantsScreen'
// >;

type Props = NativeStackScreenProps<RootStackParamList>;

const RestaurantsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* <TopDrawerNavigator /> */}
      <Text style={styles.screenTitle}>RestaurantsScreen</Text>
      <ScrollView>
        <RestaurantCard
          name='Burger Restaurant'
          onPress={(name) => {
            navigation.navigate('RestaurantScreen', {
              name,
            });
          }}
        />
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={(name) =>
            navigation.navigate('ExploreStack', { screen: 'ExploreScreen' })
          }
        />
        <RestaurantCard
          name='Burger Restaurant'
          onPress={(name) =>
            navigation.navigate('RestaurantScreen', {
              name,
            })
          }
        />
        <RestaurantCard
          name='Fine Dining Restaurant'
          onPress={(name) =>
            navigation.navigate('RestaurantScreen', {
              name,
            })
          }
        />
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={(name) =>
            navigation.navigate('RestaurantScreen', {
              name,
            })
          }
        />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default RestaurantsScreen;

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
