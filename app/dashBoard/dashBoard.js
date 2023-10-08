import Link from "next/link";

const DashBoard = () => {
  return (
    <>
    
      <div className="container p-5 mx-auto rounded-lg shadow-lg h-[70vh]">
        <div className="grid grid-cols-2">
          <div className="text-center mt-12">
            <Link
              href="/studentForm"
              className=" bg-[#3c6e71] hover:bg-[#3c6e71e0] text-2xl transition-all px-8 py-8 rounded-xl text-white font-bold"
            >
              Add Students
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/showStudent"
              className=" bg-[#3c6e71] hover:bg-[#3c6e71e0] text-2xl transition-all px-8 py-8 rounded-xl text-white font-bold"
            >
              Show Students
            </Link>
          </div>
          <div className="text-center mt-24">
            <Link
              href="/addCourses"
              className=" bg-[#3c6e71] hover:bg-[#3c6e71e0] text-2xl transition-all px-8 py-8 rounded-xl text-white font-bold"
            >
             Add Courses
            </Link>
          </div>
          <div className="text-center mt-24">
            <Link
              href="/showCourses"
              className=" bg-[#3c6e71] hover:bg-[#3c6e71e0] text-2xl transition-all px-8 py-8 rounded-xl text-white font-bold"
            >
              Show Courses
            </Link>
          </div>
          <div className="text-center mt-24">
            <Link
              href="/studentForm"
              className=" bg-[#3c6e71] hover:bg-[#3c6e71e0] text-2xl transition-all px-8 py-8 rounded-xl text-white font-bold"
            >
              Add Students Attendance
            </Link>
          </div>
          <div className="text-center mt-24">
            <Link
              href="/studentForm"
              className=" bg-[#3c6e71] hover:bg-[#3c6e71e0] text-2xl transition-all px-8 py-8 rounded-xl text-white font-bold"
            >
              Show Student Attendance
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
