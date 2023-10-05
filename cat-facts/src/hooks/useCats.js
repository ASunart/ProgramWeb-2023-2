import { useContext } from "react";
import { CatContext } from "../context/CatContext";

export const useCats = () => {
  const context = useContext(CatContext)
  if (!context) {
    throw new Error('This component should be within CatContextProvider Component')
  }
  const {
    fact,
    img,
    isLoading,
    error,
    getFact
  } = context

  return {
    img,
    fact,
    isLoading,
    error,
    getFact
  }
}
