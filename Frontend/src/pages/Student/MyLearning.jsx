import React from 'react'
import Course from './Course';
export const MyLearning = () => {
  const isLoading=false;
  const myLearning=[1,2]
  return (
    <div className='max-w-4xl mx-auto my-10 px-4 md:px-0'>
        <h1 className='font-bold text-2xl'>My Learning</h1>
        <div className='my-5'>
          {
            isLoading?(
              <MyLearningSkeleton/>
            ) : myLearning.length===0 ?(<p>You are not enrolled in any courses</p>) : 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols -3 gap-4'>
              {
                ([1,2].map((index,course)=><Course key={course}/>))
              }

            </div>
          

          }


        </div>

    </div>
  )
}
const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
      ></div>
    ))}
  </div>
);