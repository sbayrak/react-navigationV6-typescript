import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: (name: string) => void;
};

const RestaurantCard = ({ name, onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
