import './App.css';
import 'h8k-components';
import { SearchCustomer } from './components';
import { useApp } from './hooks/useApp';
const title = "Customer Search";

const App = () => {
  const { customers } = useApp()

  return (
    <div className="App">
      <h1>{title}</h1>
      <SearchCustomer customers={customers} />
    </div>
  );
}

export default App;
