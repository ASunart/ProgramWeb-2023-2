import { useState, useEffect } from "react";
import { fetchFact, fetchImg } from "../services";

export const useCats = () => {
    const [fact, setFact] = useState('');
    const [img, setImg] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getFact = () => {
      fetchFact().then(setFact)
      .catch(() =>
          setError('Sorry we had some cat issues over here, try again')
        )
    }

    useEffect(() => {
      getFact()
    }, [])

    useEffect(() => {
      setIsLoading(true)
      fetchImg({fact})
      .then(setImg)
      .catch(() =>
        setError('Sorry we had some cat issues over here, try again')
      )
      .finally(() => setIsLoading(false))
    }, [fact])

    return {
        img,
        fact,
        isLoading,
        error,
        getFact
    }
}
