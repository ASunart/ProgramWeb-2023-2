import { useState } from "react"

export function useFilters(customers) {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        const { target } = e
        const query = target.value
        setQuery(query)
    }

    const filterItems = () => {
        if (query.trim() === '') {
            return customers
        }
        return customers.filter((customer) => Object.values(customer).toString().includes(query))
    }

    return {
        handleInputChange,
        query,
        filterItems
    }
}