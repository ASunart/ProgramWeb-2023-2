import { useContext } from "react"
import { ApiContext } from "../context/ApiContext"


export function useCharacter() {
    const apiContext = useContext(ApiContext)

    if (!apiContext) {
        throw new Error('useCharacter hook component use should be within its context Provider <ApiContextProvider>')
    }

    const {
        filteredResults,
        filtrado,
        handleFilterChange
    } = apiContext

    return {
        filteredResults,
        filtrado,
        handleFilterChange
    }

}