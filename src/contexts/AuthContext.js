import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../NavigationRef";

const authReducer = (state, action) => {
  switch(action.type){
    case 'add_error': 
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return {...state, errorMessage: null};
    case 'signup':
      return { ...state, token: action.payload, errorMessage: null };
    case 'signin':
      return { ...state, token: action.payload, errorMessage: null };
    case 'signout':
      return { ...state, token: null, errorMessage: null };
    default: 
      return state;
  }
};

const signUp = (dispatch) => async ({email, password}) => {
  try {
    const {data} = await trackerApi.post(`/auth/signup`, { email, password });
    await AsyncStorage.setItem('token', data.token);
    dispatch({ type: 'signup', payload: data.token});
    navigate("TrackList");
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong!' })
  }
};

const signIn = (dispatch) => async ({email, password}) => {
  try {
    const {data} = await trackerApi.post(`/auth/login`, { email, password });
    console.log({data})
    await AsyncStorage.setItem('token', data.token);
    dispatch({ type: 'signin', payload: data.token});
    navigate("TrackList");
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong!' })
  }
};

const clearErrorMsg = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' })
}

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({ type: 'signin', payload: token });
    navigate("TrackList");
  } else {
    navigate("SignUp");
  }
}

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  try {
    dispatch({ type: 'signout' });
    navigate("SignIn");
  } catch (error) {
    console.log(error);
  }
}

export const { Provider, Context } = createDataContext(
  authReducer, 
  { signIn, signUp, signOut, clearErrorMsg, tryLocalSignIn },
  { token: null, errorMessage: null }
);