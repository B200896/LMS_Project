import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Course from "./Course";
import { useState,useEffect } from "react";
const courses=[1,2,3,4,5,6]
const Courses=()=>{
  const [isLoading,setIsLoading]=useState(false)
    
    return(
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto p-6">
              <div className="text-center text-black ">
              <h2 className="font-bold text-3xl ">Our Courses</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-20 mb-20 gap-x-10 gap-y-10">
              {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          ) : (
          courses.map((course,index)=>
           <Course/>)
          

          )}
          </div>

              
              
            </div>

        </div>

    )
}
export default Courses;
const CourseSkeleton = () => {
    return (
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
        <Skeleton className="w-full h-48" />
        <div className="px-5 py-4 space-y-3">
          <Skeleton className="h-16 w-30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-14 w-20" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    );
  };
  