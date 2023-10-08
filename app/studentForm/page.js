"use client";
import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/app/config/firebase";

const studentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentCourse, setStudentCourse] = useState("");

  const onSubmitHanlder = async () => {
    let student = {
      name: studentName,
      email: studentEmail,
      course: studentCourse,
      phone: studentPhone,
      address: studentAddress,
    };
    console.log("student", student);
    try {
      const studentsData = collection(db, "StudentsData");
      await addDoc(studentsData, student);
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg">
        <div className="text-center sm:my-7">
          <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">
            Admission Form
          </h1>
          <h3 className="text-gray-400 font-bold text-center mt-3 sm:mt-5 text-xs sm:text-[15px]">
            The field with * mark is required
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <input
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
              name="name"
              id="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Student Name *"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => setStudentEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Email *"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => setStudentPhone(e.target.value)}
              type="text"
              name="Contact"
              id="contact"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Contact Number *"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => setStudentAddress(e.target.value)}
              type="text"
              name="Address"
              id="Address"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Enter Address"
            />
          </div>

          <div>
            <input
              onChange={(e) => setStudentCourse(e.target.value)}
              type="text"
              name="course"
              id="course"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
              placeholder="Enter Course"
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

export default studentForm;
