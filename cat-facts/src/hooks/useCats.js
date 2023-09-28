import { useState, useCallback, useEffect } from "react";
import { fetchFact, fetchImg } from "../services";

export const useCats = () => {
    const [fact, setFact] = useState('');
    const [img, setImg] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  
    const getFact = () => {
      fetchFact()
        .then(data => setFact(data))
        .catch(() =>
          setError('Sorry we had some cat issues over here, try again')
        )
    }
  
    const getImg = useCallback(() => {
      setIsLoading(true)
      fetchImg({fact})
      .then(image => setImg(image))
      .catch(() =>
        setError('Sorry we had some cat issues over here, try again')
      )
      .finally(() => setIsLoading(false))
    }, [fact])
  
    useEffect(() => {
      getImg()
    }, [getImg])

    return {
        img,
        fact,
        isLoading,
        getFact,
        error
    }
}