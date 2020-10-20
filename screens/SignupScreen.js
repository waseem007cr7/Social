import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormInput from '../components/FormInput';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create An Account</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        autoCapitilize="none"
        autoCorrect={false}
        placeholderText="Email"
        KeyboardType="email-address"
        iconType="user-o"
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
        iconType="lock"
      />

      <FormButton buttonTitle="Sign Up" onPress={() => alert('Clicked')} />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By Registering, You Confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => alert('Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}>and</Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <SocialButton
        buttonTitle="Sign In With Facebook"
        btnType="facebook-f"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <SocialButton
        buttonTitle="Sign In With Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't Have An Account? Creat Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
