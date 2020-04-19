// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import LocationContext from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
import useTrackState from '../hooks/useTrackState';
import { FontAwesome } from '@expo/vector-icons';

function TrackCreateScreen(props) {
  const { isFocused } = props;
  const [saveTrack] = useTrackState();
  const { state, addLocation, startRecording, stopRecording, changeName } = useContext(LocationContext.Context);
  const callback = useCallback((location) => { 
    addLocation(location, state.recording); 
  }, [state.recording]);
  // console.log(state.locations.length);
  const [err] = useLocation(isFocused || state.recording, callback);
  return (
    <SafeAreaView forceInset={{top: "always"}} style={styles.container}>
      {/* <ScrollView> */}
        <Spacer>
          <Text h2>Create a Track</Text>
          <Spacer/>
          <Map/>
          {err && <Text>Please enable location service.</Text>}
          <Spacer>
            <Input 
              placeholder="Enter Name:"
              onChangeText={changeName}
              value={state.name}
            />
            <Spacer/>
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
              <Button
                title={state.recording ? "Stop Recording" : "Record"}
                onPress={state.recording ? stopRecording : startRecording }
              />
              {
                (!state.recording && state.locations.length > 0) &&
                <Button
                  title="Save Recording"
                  onPress={saveTrack}
                />
              }
            </View>
          </Spacer>
        </Spacer>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={25} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withNavigationFocus(TrackCreateScreen);
