import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { Context as AuthContext} from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

function SignInScreen(props) {
  const {navigation} = props;
  const { state, signIn, clearErrorMsg } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMsg}
      />
      <AuthForm 
        headerText="Sign In for Tracker" 
        errorMessage={state.errorMessage} 
        buttonText="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        navText={["Don't have an account?", "Sign Up instead."]}
        toRoute="SignUp"
      />
    </View>  
  )
};

SignInScreen.navigationOptions = () => {
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

export default withNavigation(SignInScreen);
