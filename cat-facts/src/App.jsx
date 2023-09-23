import { useState, useEffect } from 'react'
import { Button, CatContainer, Header } from './components';

const BASE_API_FACT = 'https://catfact.ninja/fact'
const BASE_API_IMG = 'https://cataas.com/cat/says/'
function App() {
  const [fact, setFact] = useState('');
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const getFact = () => {
    fetch(BASE_API_FACT)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching data from API')
        }
        return res.json()
      })
      .then(({ fact }) => {
        setFact(fact)
      })
      .catch((e) => {
        throw new Error(e)
      })
  }

  useEffect(() => {
    if (!fact) return
    const splitFact = fact.split(' ', 4).join(' ')
    setIsLoading(true)
    fetch(`${BASE_API_IMG}${splitFact}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching image from API')
        }
        return res.blob()
      })
      .then(image => {
        const imageURL = URL.createObjectURL(image)
        setImg(imageURL)
      })
      .catch(e => {
        throw new Error(e)
      })
      .finally(() => setIsLoading(false))
  }, [fact])

  return (
    <main className='grid place-items-center h-1/2'>
      <Header />
      <CatContainer image={img} text={fact} isLoading={isLoading} />
      <Button handleClick={getFact} />
    </main>
  )
}

export default App
