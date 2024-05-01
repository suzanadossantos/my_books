import './App.css'

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Discover } from './pages/discover'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/discover' element={<Discover/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App