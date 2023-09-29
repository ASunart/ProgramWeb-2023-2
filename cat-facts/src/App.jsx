import { Button, CatContainer, Header } from './components';
import { useCats } from './hooks/useCats';

function App() {
  const {
    img,
    fact,
    isLoading,
    error,
    getFact
  } = useCats()

  return (
    <main className='grid place-items-center h-1/2'>
      <Header />
      <CatContainer image={img} text={fact} isLoading={isLoading} error={error} />
      <Button handleClick={getFact} isLoading={isLoading} />
    </main>
  )
}

export default App
