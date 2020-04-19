// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import LocationContext from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';

function TrackCreateScreen(props) {
  const { isFocused } = props;
  const { state, addLocation, startRecording, stopRecording, changeName } = useContext(LocationContext.Context);
  const callback = useCallback((location) => { 
    addLocation(location, state.recording); 
  }, [state.recording]);
  console.log(state.locations.length);
  const [err] = useLocation(isFocused, callback);
  return (
    <SafeAreaView forceInset={{top: "always"}}>
      <Spacer>
        <Text h2>Create a Track</Text>
        <Spacer/>
        <Map/>
        {err && <Text>Please enable location service.</Text>}
        <Spacer>
          <Input 
            placeholder="Enter Name:"
            onChangeText={changeName}
          />
          <Spacer/>
          <Button
            title={state.recording ? "Stop Recording" : "Record"}
            onPress={state.recording ? stopRecording : startRecording }
          />
        </Spacer>
      </Spacer>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);
