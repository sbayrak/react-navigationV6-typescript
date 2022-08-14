import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExploreIcon from './icons/ExploreIcon';
import ProfileIcon from './icons/ProfileIcon';
import RestaurantsIcon from './icons/RestaurantsIcon';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';

export type RootStackParamList = {
  ProfileScreen: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  ExploreStack: NavigatorScreenParams<ExploreStackParams>;
  RestaurantScreen: { name: string };
};

// const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootBottomTab = createDrawerNavigator<RootStackParamList>();

export type RestaurantsStackParams = {
  RestaurantsScreen: undefined;
  RestaurantScreen: { name: string };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();
const RestaurantsScreenStack = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name='RestaurantsScreen'
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name='RestaurantScreen'
        component={RestaurantScreen}
      />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  ExploreScreen: undefined;
  RestaurantScreen: { name: string };
};
const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name='ExploreScreen' component={ExploreScreen} />
      <ExploreStack.Screen
        name='RestaurantScreen'
        component={RestaurantScreen}
      />
    </ExploreStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootBottomTab.Navigator
        screenOptions={{
          drawerActiveTintColor: '#e67a15',
          drawerInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
        <RootBottomTab.Screen
          name='RestaurantsStack'
          component={RestaurantsScreenStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <RestaurantsIcon color={color} size={size} />
            ),
            drawerLabel: 'Restaurants',
          }}
        />
        <RootBottomTab.Screen
          name='ExploreStack'
          component={ExploreScreenStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <ExploreIcon color={color} size={size} />
            ),
            drawerLabel: 'Explore',
          }}
        />
        <RootBottomTab.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <ProfileIcon color={color} size={size} />
            ),
            drawerLabel: 'Profile',
          }}
        />
      </RootBottomTab.Navigator>
      {/* <RootStack.Navigator>
        <RootStack.Screen
          name='RestaurantsScreen'
          component={RestaurantsScreen}
        />
        <RootStack.Screen name='ExploreScreen' component={ExploreScreen} />
        <RootStack.Screen name='ProfileScreen' component={ProfileScreen} />
        <RootStack.Screen
          name='RestaurantScreen'
          component={RestaurantScreen}
        />
      </RootStack.Navigator> */}

      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});
