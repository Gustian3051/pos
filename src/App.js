import './App.css';
import 'flowbite';
import Dashboard from './interface/components/Dashboard';
import { Route, Router, Routes } from 'react-router-dom';
import Sidebar from './interface/components/Sidebar';
import Navbar from './interface/components/Navbar';
import ProductManagement from './interface/components/ProductManagement';

const App = () => {
  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar />
      </div>

      <div className='flex flex-col flex-1'>
        <Navbar />

        <div className='flex-1 p-4 overflow-auto'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductManagement />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;