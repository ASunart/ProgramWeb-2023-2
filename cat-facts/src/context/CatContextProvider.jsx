/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { CatContext } from "./CatContext"
import { fetchFact, fetchImg } from "../services";

export const CatContextProvider = ({ children }) => {
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

    const getImg = useCallback(() => {
        setIsLoading(true)
        fetchImg({ fact })
            .then(setImg)
            .catch(() =>
                setError('Sorry we had some cat issues over here, try again')
            )
            .finally(() => setIsLoading(false))
    }, [fact])

    useEffect(() => {
        getFact()
    }, [])

    useEffect(() => {
        getImg()
    }, [fact])

    return (
        <CatContext.Provider value={{
            fact,
            img,
            isLoading,
            error,
            getFact
        }}>
            {children}
        </CatContext.Provider>
    )
}