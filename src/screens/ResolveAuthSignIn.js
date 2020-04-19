import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { Context as AuthContext} from '../contexts/AuthContext';

function ResolveAuthSignIn(props) {
  const {} = props;
  const { state, tryLocalSignIn } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null
};

export default withNavigation(ResolveAuthSignIn);
