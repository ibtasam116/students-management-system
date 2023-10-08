"use client";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";

const showStudent = () => {
  const [students, setStudents] = useState([]);

  const [id, setId] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchStudent = async () => {
    try {
      const studentsCollection = collection(db, "StudentsData");
      const getStudents = await getDocs(studentsCollection);
      const students = [];
      getStudents.forEach((student) => {
        students.push({
          id: student.id,
          ...student.data(),
        });
      });
      setStudents(students);
      console.log("Students", students);
    } catch (e) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const onDeletHandler = async (id) => {
    const docRef = doc(db, "StudentsData", id);
    try {
      setId(id);
      setLoading(true);
      await deleteDoc(docRef);

      const newStudents = students.filter((student) => id !== student.id);
      setLoading(false);
      setStudents(newStudents);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg mt-10">
        <div className="text-center sm:my-7">
          <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">
            Students Data
          </h1>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Student ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Student Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Student Contact
                </th>
                <th scope="col" class="px-6 py-3">
                  Student Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Student Course
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {students.map((student) => {
              return (
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {student.id}
                    </th>
                    <td class="px-6 py-4">{student.name}</td>
                    <td class="px-6 py-4">{student.email}</td>
                    <td class="px-6 py-4">{student.phone}</td>
                    <td class="px-6 py-4">{student.address}</td>
                    <td class="px-6 py-4">{student.course}</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => onDeletHandler(student.id)}
                        class="ms-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {student.id == id && loading ? "loading..." : "delete"}
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default showStudent;
