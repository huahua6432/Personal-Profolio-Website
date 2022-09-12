import './App.css';
import PortfolioContainer from './PortfoiloContainer/PortfolioContainer';
import Header from './PortfoiloContainer/Home/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="App">
        <ToastContainer />
        <PortfolioContainer />
      </div>
    </div>
  );
}

export default App;
