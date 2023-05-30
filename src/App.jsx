import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
// import Create from './components/CreateEvents';
import Event from './components/Event';

import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      {/* <Route exact path='/create' element={<Create/>}/> */}
      <Route exact path='/:id'  element={<Event/>}/>
      </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App;