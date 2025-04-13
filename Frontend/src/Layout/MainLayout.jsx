// import React from 'react';
import Navbar from '@/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Navbar Always Visible */}
            <Navbar />

            {/* Page Content */}
            <main className="mt-16 flex-grow p-6">
                <Outlet />
            </main>

            {/* Optional Footer
            <footer className="bg-gray-800 text-white text-center py-4">
                © 2025 E-Learning Platform
            </footer> */}
        </div>
    );
};

export default MainLayout;


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Navbar';

// export const MainLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow mt-16 px-4">
//         <Outlet />
//         {children}
//       </main>
//     </div>
//   );
// };
