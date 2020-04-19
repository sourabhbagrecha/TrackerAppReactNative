import { useState, useEffect } from "react";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

export default (shouldTrack, callback) => {
  const [location, setLocation] = useState();
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    setErr(null)
    try {
      const resp = await requestPermissionsAsync();
      if(!resp.granted){
        const error = new Error("Request denied")
        throw error;
      }
      const sub = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
      setSubscriber(sub);
    } catch (error) {
      console.log({error})
      setErr(error);
    }
  };

  useEffect(() => {
    if(shouldTrack){
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null)
    }
  }, [shouldTrack, callback]);
  
  return [err];
}