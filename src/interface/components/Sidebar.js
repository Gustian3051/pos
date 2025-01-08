import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
     return (
          <aside className='w-64 h-full text-white bg-gray-800'>
               <ul className='p-4'>
                    <li className='mb-4'>
                         <Link to="/dashboard" className='hover:text-blue-300'>Dashboard</Link>
                    </li>
                    <li className='mb-4'>
                         <Link to="/products" className='hover:text-blue-300'>Products</Link>
                    </li>
                    <li className='mb-4'>
                         <Link to="/suppliers" className='hover:text-blue-300'>Suppliers</Link>
                    </li>
                    <li className='mb-4'>
                         <Link to="/transactions" className='hover:text-blue-300'>Transaction</Link>
                    </li>
                    <li className='mb-4'>
                         <Link to="/dashboard" className='hover:text-blue-300'>Laporan</Link>
                    </li>
               </ul>
          </aside>
     )
}

export default Sidebar;