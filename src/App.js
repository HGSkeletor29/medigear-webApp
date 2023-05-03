import Loginform from './components/loginform';
import NewUser from './components/newuser';
import { Routes, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className='Page'>
      <Routes>
        <Route path='/' element={<Loginform />} />
        <Route path='/register' element={<NewUser />} />
      </Routes>
    </div>
  )
}

export default App;
