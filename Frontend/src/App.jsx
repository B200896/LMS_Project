import { useState } from 'react'
import './App.css'
import Login from '../src/pages/Login'
import Navbar from './Navbar'
import { HeroSection } from './pages/Student/HeroSection'
import { MainLayout } from './Layout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Courses from './pages/Student/Courses' // Fixed import
import { MyLearning } from './pages/Student/MyLearning'
import Profile from './pages/Student/Profile'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Default child route
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "courses", // Fixed duplicate index issue
        element: <Courses />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path:"my-profile",
        element:<Profile/>
      }

    ],
  },
]);

function App() {
  return (
    <main>
       <RouterProvider router={appRouter}/>
    </main>
  );
}

export default App;
