import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FetchData from './Components/FetchData/FetchData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <FetchData/>
          <Navigation dark={false}/>
          <span className='ghost-loader'>asdasd</span>
      </header>
    </div>
  );
}


export default App;
