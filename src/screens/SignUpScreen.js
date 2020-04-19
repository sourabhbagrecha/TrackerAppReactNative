import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { Context as AuthContext} from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignUpScreen(props) {
  const {navigation} = props;
  const { state, signUp, clearErrorMsg } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMsg}
      />
      <AuthForm 
        headerText="Sign Up for Tracker" 
        errorMessage={state.errorMessage} 
        buttonText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        navText={["Already have an account?", "Sign In instead."]}
        toRoute="SignIn"
      />
    </View>  
  )
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150
  },
})

export default withNavigation(SignUpScreen);
