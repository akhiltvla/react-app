
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States';
import { Container } from 'react-bootstrap';
import Main from './components/Conditional/Main'


function App() {

    
  return (
     
    <div className="App">
      <Main isLoggedin={false} />
    </div>
  )
}

export default App;