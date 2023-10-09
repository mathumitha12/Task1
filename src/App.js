
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Content from './Content';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
  <Route path='/' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/home' element={<Home />}/>
  <Route path='/content' element={<Content/>}/>
</Routes>
      </div>
    </Router>
    
  );
}

export default App;
