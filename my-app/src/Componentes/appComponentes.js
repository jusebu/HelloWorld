import { LoginButton } from './Componentes/login';
import { LogoutButton } from './Componentes/logout';
import { Profile } from './Componentes/profile';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
     
     
            <Profile />
            <LogoutButton />
      
          <LoginButton />
  
      
      </header>
    </div>
  );
}

export default App;
