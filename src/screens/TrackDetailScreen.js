import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import TrackContext from '../contexts/TrackContext';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';

function TrackDetailScreen(props) {
  const {navigation} = props;
  const { state } = useContext(TrackContext.Context);
  const _id = navigation.getParam('_id');
  const track = state.find(track => track._id === _id);
  console.log(track.locations.map(l => l.coords))
  return (
    <>
      <Spacer>
        <MapView 
          initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            latitude: 24.56,
            longitude: 73.72
          }}
          style={styles.mapMain}
        >
          <Polyline coordinates={track.locations.map(l => l.coords)} />
        </MapView>
      </Spacer>
    </>  
  )
};

TrackDetailScreen.navigationOptions = {
  title: "Tracks"
}

const styles = StyleSheet.create({
  mapMain: {
    height: 400,
    width: "100%"
  }
});

export default withNavigation(TrackDetailScreen);
