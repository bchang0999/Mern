import logo from './logo.svg';
import './App.css';
import PersonCard from './components/MyFirstComponent';

function App() {
  return (
    <div className="PersonCard">
      <PersonCard 
      firstname= {"Brandon"}
      lastname = {"Chang"}
      age = {"25"}
      hair = {"black"}


      />
      <PersonCard 
      firstname= {"David"}
      lastname = {"Pierce"}
      age = {"25"}
      hair = {"brown"}
      />
      <PersonCard 
      firstname= {"Sean"}
      lastname = {"McNeil"}
      age = {"25"}
      hair = {"brown"}
      />
    </div>
  );
}

export default App;
