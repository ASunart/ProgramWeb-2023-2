import { useEffect, useState } from "react"
import getCustomers from "../services/getCustomers"

export function useApp() {
    const [customers, setCustomers] = useState([])
  
    useEffect(()=>{
      getCustomers().then(setCustomers)
    }, [])

    return {
        customers
    }
}