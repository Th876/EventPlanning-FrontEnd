// import { BrowserRouter as Router, Routes, Route } from 
// 'react-router-dom';
import Events from '../components/Events';
// import Event from '../components/Event';
// import EditEvents from '../components/EditEvents';

export default function Dashboard() {
  return (
    <div className='w-full h-screen'>
       <h1 className="text-3xl font-bold text-purple-200 text-center">This is the dashboard</h1>
      {/* create dashboard table */}
      <Events />
      
    </div>
  )
}
