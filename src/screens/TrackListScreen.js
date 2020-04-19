import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import TrackContext from '../contexts/TrackContext';
import { Text, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { navigate } from '../NavigationRef';

function TrackListScreen(props) {
  const {} = props
  const { state, fetchTracks } = useContext(TrackContext.Context);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) =>  (
          <TouchableOpacity onPress={() => navigate("TrackDetail", { _id: item._id })}>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </>  
  )
};


TrackListScreen.navigationOptions = {
  title: "Tracks"
}

const styles = StyleSheet.create({

});

export default TrackListScreen;
