import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import Register from './screens/Register';
import RestaurantScreen from './screens/RestaurantScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';

export type RootStackParamList = {
  ProfileScreen: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  ExploreStack: NavigatorScreenParams<ExploreStackParams>;
  RestaurantScreen: { name: string };
  AuthStack: AuthStackParams;
};

// const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootBottomTab = createBottomTabNavigator<RootStackParamList>();

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

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='Register' component={Register} />
    </AuthStack.Navigator>
  );
};

export default function App() {
  const renderContent = () => {
    const isLoggedIn = false;

    if (isLoggedIn) {
      return (
        <RootBottomTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#e67a15',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          }}
        >
          <RootBottomTab.Screen
            name='RestaurantsStack'
            component={RestaurantsScreenStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <RestaurantsIcon color={color} size={size} />
              ),
              tabBarLabel: 'Restaurants',
            }}
          />
          <RootBottomTab.Screen
            name='ExploreStack'
            component={ExploreScreenStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ExploreIcon color={color} size={size} />
              ),
              tabBarLabel: 'Explore',
            }}
          />
          <RootBottomTab.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ProfileIcon color={color} size={size} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
        </RootBottomTab.Navigator>
      );
    }
    return <AuthStackScreen />;
  };

  return (
    <NavigationContainer>
      {renderContent()}
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
