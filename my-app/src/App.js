import logo from './logo.svg';
import './App.css';
import { LoginButton } from './Components/Login';
import { LogoutButton } from './Components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <LogoutButton />


      </header>
    </div>
  );
}

export default App;
