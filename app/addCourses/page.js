"use client";
import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/app/config/firebase";

const AddCourses = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDetail, setCourseDetail] = useState("");

  const onSubmitHanlder = async () => {
    let course = {
      name: courseName,
      detail: courseDetail,
    };
    console.log("Courses", course);
    try {
      const courseData = collection(db, "courseData");
      await addDoc(courseData, course);
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg mt-10">
        <div className="text-center sm:my-7">
          <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">
            Add Courses
          </h1>
          <h3 className="text-gray-400 font-bold text-center mt-3 sm:mt-5 text-xs sm:text-[15px]">
            The field with * mark is required
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <input
              onChange={(e) => setCourseName(e.target.value)}
              type="text"
              name="name"
              id="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Course Name *"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => setCourseDetail(e.target.value)}
              type="text"
              name="detail"
              id="detail"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Course Detail *"
              required
            />
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              onClick={onSubmitHanlder}
              className="bg-[#3c6e71] hover:bg-[#3c6e71e0] transition-all w-full sm:w-[50%] py-2 rounded-xl text-white font-bold my-5"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourses;
