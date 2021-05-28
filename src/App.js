import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'Dr. Mahfuz',
    job: "Singer"
  };

  var styles = {
    color: 'red',
    backgroundColor: 'yellow'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={styles}>My heading: {person.name + " Job: "+person.job}</h1>
        <h1 style={{color: 'white', backgroundColor: 'black'}}>My heading: {person.name + " Job: "+person.job}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
