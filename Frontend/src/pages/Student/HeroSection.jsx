import React from 'react'
import { Button } from '@/components/ui/button'
export const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center '>
        <div className='max-w-3xl mx-auto'>
            <h1 className='text-white text-4xl font-bold mb-4 mt-5'>Find the Best Courses for You</h1>
            <p className='text-gray-200 dark'>Discover,learn,and Upskill with our wide range of Courses</p>
            <form action="" className='flex items-center bg-white rounded-full shadow-lg overflow-hidden mt-6 w-full max-w-xl mx-auto'>
            <input 
  type="text" 
  placeholder='Search Courses'
  className="bg-white flex-grow border-none outline-none focus:ring-0 focus:outline-none px-6 py-1 text-black dark:text-gray-100 rounded-full shadow-lg max-w-xl mx-auto"
/>

            <Button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:bg-blue-800 border-none shadow-lg">Search</Button>
            </form>
            <Button className="bg-white rounded-full dark:bg-gray-800 text-blue-800 mt-4 hover:bg-gray-200">
                Explore Courses
            </Button>
</div>

    </div>
    
  )
}
