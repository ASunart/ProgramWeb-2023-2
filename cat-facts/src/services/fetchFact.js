const BASE_API_FACT = 'https://catfact.ninja/fact'
export const fetchFact = async () => {
    return fetch(BASE_API_FACT)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching data from API')
        }
        return res.json()
      })
      .then(({ fact }) => {
        return fact
      })
      .catch((e) => {
        throw new Error(e)
      })
  }