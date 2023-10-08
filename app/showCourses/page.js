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
import Link from "next/link";

const showCourses = () => {
  const [courses, setCourses] = useState([]);

  const [id, setId] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      const coursesCollection = collection(db, "courseData");
      const getCourses = await getDocs(coursesCollection);
      const courses = [];
      getCourses.forEach((course) => {
        courses.push({
          id: course.id,
          ...course.data(),
        });
      });
      setCourses(courses);
      console.log("Courses", courses);
    } catch (e) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCourses();
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
      <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg mt-4">
        <div className="text-center sm:my-7">
          <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">
            Course Data
          </h1>
        </div>

        {courses.map((course) => {
          return (
            <>
              <div className="mt-3">
                <div className="w-96 mx-auto">
                  <div className=" border-2 rounded-2xl p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {course.name}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {course.detail}
                    </p>
                    <Link
                      href="/studentForm"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3c6e71] rounded-lg"
                    >
                      In Roll Now
                      <svg
                        class="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="grid grid-cols-3 gap-5">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div> */}
            </>
          );
        })}
      </div>
    </>
  );
};
export default showCourses;
