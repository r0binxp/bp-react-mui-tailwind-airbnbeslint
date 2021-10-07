import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-red-700">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eslint <code> Airbnb </code> Boilerplate.
        </p>
        <p>
          Airbnb / React / Material UI / Tailwind / Eslint
        </p>
        <a
          className="App-link"
          href="https://github.com/r0binxp"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Matias Heredia
        </a>
      </header>
    </div>
  );
}

export default App;
