import logo from './logo.svg';
import './App.css';

function App() {
  //const arr = ["1234564789456454654564546", "1234564789456454654564546", "1234564789456454654564546"] -> ctrl + s
  const arr = [
    '1234564789456454654564546',
    '1234564789456454654564546',
    '1234564789456454654564546',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
