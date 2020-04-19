import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';
import { Text } from 'react-native-elements';

function NavLink(props) {
  const {navigation, toRoute, navText} = props;
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(toRoute)}>
        {navText.map(t => <Text key={t} style={styles.link}>{t}</Text>)}
      </TouchableOpacity>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 16
  }
});

export default withNavigation(NavLink);
