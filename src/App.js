import './App.css';
import data from './navigation.json';
import Navigation from './Navigation';

function App() {
  return (
    <header>
      <Navigation data ={data} />
    </header>
  );
}

export default App;
