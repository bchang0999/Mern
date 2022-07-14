import logo from './logo.svg';
import PersonCard from './components/Personcard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
