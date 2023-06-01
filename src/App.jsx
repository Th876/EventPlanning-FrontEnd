import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CreateEvent from './components/CreateEvent';
import ShowEvents from './pages/ShowEvents';
import ShowEventDetails from './components/ShowEventDetails';
import UpdateEvent from './components/UpdateEvent';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
        <Route exact path='/' element={<HomePage />} />
          <Route exact path='/dashboard' element={<ShowEvents />} />
          <Route path='/create-event' element={<CreateEvent />} />
          <Route path='/edit-event/:id' element={<UpdateEvent />} />
          <Route path='/show-event/:id' element={<ShowEventDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;