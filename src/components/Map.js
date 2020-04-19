import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import LocationContext from '../contexts/LocationContext';

function Map(props) {
  const {} = props
  const { state, state: { currentLocation } } = useContext(LocationContext.Context);
  if(!currentLocation){
    return <ActivityIndicator size="large" style={{marginTop: 200}}/>
  }
  return (
    <MapView 
      style={styles.mapView}
      initialRegion={{ 
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{ 
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01  
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  )
};

const styles = StyleSheet.create({
  mapView: {
    height: "70%",
    width: "100%",
    // marginHorizontal: "5%"
  }
})

export default Map;
