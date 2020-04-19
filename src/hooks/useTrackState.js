import { useContext } from "react"
import TrackContext from "../contexts/TrackContext"
import LocationContext from "../contexts/LocationContext";
import { navigate } from "../NavigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext.Context);
  const { state: { locations, name }, reset } = useContext(LocationContext.Context); 

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
}