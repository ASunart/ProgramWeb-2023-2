/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ApiContext } from "./ApiContext";
import { fetchApi } from "../services/fetchApi";

export function ApiContextProvider({ children }) {
    const [character, setCharacter] = useState([])
    const [filtrado, setFiltrado] = useState('All')

    const handleFilterChange = (e) => {
        setFiltrado(e.target.value)
    }

    const filteredResults = filtrado === 'All'
        ? character
        : character.filter(people => people.status === filtrado)

    useEffect((() => {
        fetchApi()
            .then(character => setCharacter(character))
    }), [])
    return (
        <ApiContext.Provider value={{
            filteredResults,
            filtrado,
            handleFilterChange
        }
        }>
            {children}
        </ApiContext.Provider>
    )
}