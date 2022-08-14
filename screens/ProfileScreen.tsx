import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TopDrawerNavigator from '../components/TopDrawerNavigation';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* <TopDrawerNavigator /> */}
      <Text style={styles.screenTitle}>Profile Screen</Text>

      <Text>Name: John Doe</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

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
