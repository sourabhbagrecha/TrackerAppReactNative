import { useState, useEffect } from "react";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

export default (shouldTrack, callback) => {
  const [location, setLocation] = useState();
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      setErr(null)
      try {
        const resp = await requestPermissionsAsync();
        if(!resp.granted){
          const error = new Error("Request denied")
          throw error;
        }
        subscriber = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (error) {
        console.log({error})
        setErr(error);
      }
    };

    if(shouldTrack){
      startWatching();
    } else {
      if(subscriber){
        subscriber.remove();
      }
      subscriber = null;
    }

    return (() => {
      if(subscriber){
        subscriber.remove();
      }
    })
  }, [shouldTrack, callback]);
  
  return [err];
}