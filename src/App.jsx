import './App.css'

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './pages/home/index.jsx'
import { Login } from './pages/login/index.jsx'
import { Discover } from './pages/discover/index.jsx'

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