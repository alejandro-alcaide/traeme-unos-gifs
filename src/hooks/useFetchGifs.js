import { useEffect, useState } from "react";

import { getAsyncGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
      getAsyncGifs( category ).then(setImages);
      setIsLoading(false);
    }, []);

  return {
    images,
    isLoading,
  };
}
