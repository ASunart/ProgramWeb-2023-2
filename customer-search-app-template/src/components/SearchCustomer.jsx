import { useFilters } from "../hooks/useFilter"
import { Table } from "./Table"

export function SearchCustomer({ customers }) {
  const {
    handleInputChange,
    query,
    filterItems
  } = useFilters(customers)

  return (
    <>
      <div className='layout-row align-items-center justify-content-center mt-30'>
        <input className='large mx-20 w-20'
          placeholder='Enter search term (Eg: Phil)'
          onChange={handleInputChange}
          value={query} />
      </div>
      <Table customers={filterItems()} />
    </>
  )
}
