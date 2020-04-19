import createDataContext from "./createDataContext"
import tracker from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type){
    case 'fetch_tracks':
      return action.payload
    default: 
      return state;
  }
}

const fetchTracks = (dispatch) => async () => {
  try {
    const {data} = await tracker.get('/track');
    dispatch({ type: 'fetch_tracks', payload: data});
  } catch (error) {
    console.log({error})
  }
};

const createTrack = (dispatch) => async (name, locations) => {
  console.log(name, locations);
  await tracker.post('/track/new', { name, locations })
};

export default { Context, Provider } = createDataContext(
  trackReducer, 
  { fetchTracks, createTrack }, 
  []
);