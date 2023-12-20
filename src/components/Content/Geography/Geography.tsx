import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from 'react'

const Geography = () => {
    const ref = React.useRef<HTMLDivElement>(null);
const [map, setMap] = React.useState<google.maps.Map>();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

  return (
    <div ref={ref}></div>
  )
}

export default Geography