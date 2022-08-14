import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams, RootStackParamList } from '../App';

type Props = NativeStackScreenProps<AuthStackParams>;

const Login = (props: Props) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text>GO REGISTer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
