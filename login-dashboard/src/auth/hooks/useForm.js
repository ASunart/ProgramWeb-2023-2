import { useState } from "react"
import { useAuth } from "./useAuth"

export const useForm = () => {
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData)
  }


  // useEffect(() => {
  //   window.localStorage.setItem('user', JSON.stringify(user))
  // }, [user])

  return {
    handleInputChange,
    formData,
    handleSubmit
  }
}