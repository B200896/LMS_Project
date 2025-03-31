import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './Layout/MainLayout';
import { HeroSection } from './pages/Student/HeroSection';
import Courses from './pages/Student/Courses';
import { MyLearning } from './pages/Student/MyLearning';
import Profile from './pages/Student/Profile';
import Login from './pages/Login';
import AuthPage from './pages/Login';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Default home page
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
      {
        path: "/auth",
        element: <AuthPage/>,
      },
      // {
      //   path: "signup", // Add signup route if needed
      //   element: <Login />, // Replace with actual Signup page
      // },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
