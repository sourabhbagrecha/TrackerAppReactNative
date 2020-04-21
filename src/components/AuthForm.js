import React from 'react'
import PropTypes from 'prop-types'
import useInputState from '../hooks/useInputState';
import Spacer from './Spacer';
import { Input, Text, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

function AuthForm(props) {
  const { headerText, errorMessage, onSubmit, buttonText } = props;
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  
  return (
    <>
      <Spacer margin={20}>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input 
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleEmailChange} 
        label="Email" 
      />
      <Spacer/>
      <Input 
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={handlePasswordChange} 
        label="Password"
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Spacer>
        <Button
          title={buttonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginHorizontal: 15
  },
})

export default AuthForm
