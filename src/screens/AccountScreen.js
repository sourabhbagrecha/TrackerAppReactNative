import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Context as AuthContext } from '../contexts/AuthContext';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';

function AccountScreen(props) {
  const {} = props;
  const { signOut } = useContext(AuthContext)

  return (
    <>
      <SafeAreaView forceInset={{top: "always"}}>
        <Spacer margin={30}>
          <Text h3>My Account</Text>
          <Spacer/>
          <Button
            title="Sign Out"
            onPress={signOut}
          />
        </Spacer>
      </SafeAreaView>
    </>  
  )
};

const styles = StyleSheet.create({
  signOut: {
    marginHorizontal: 20
  }
})
export default AccountScreen;
