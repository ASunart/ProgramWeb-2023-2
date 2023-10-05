import { Button, CatContainer, Header } from './components';
import { CatContextProvider } from './context/CatContextProvider';

function App() {
  return (
    <main className='grid place-items-center h-1/2'>
      <CatContextProvider>
      <Header />
      <CatContainer />
      <Button />
      </CatContextProvider>
    </main>
  )
}

export default App
