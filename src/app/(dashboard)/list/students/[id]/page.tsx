import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"


const SingleStudentViewPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 lg:flex-row">
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
          {/* TOP   */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* USER INFO CARD  */}
            <div className="bg-hopeSky py-6 p-4 rounded-md flex-1 flex gap-4">
              <div className="w-1/3">
                <Image 
                  src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgd&w=1200" 
                  // src="https://www.pexels.com/photo/teacher-standing-in-front-of-a-class-5427870/"
                  alt=""
                  width={144}
                  height={144}
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-between gap-4">
                <h1 className="text-xl font-semibold">Caren Maiyan</h1>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, explicabo!</p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/blood.png" alt="" width={14} height={14}/>
                    <span className="">A-</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/date.png" alt="" width={14} height={14}/>
                    <span className="">March 2026</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/mail.png" alt="" width={14} height={14}/>
                    <span className="">caren@user.com</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/phone.png" alt="" width={14} height={14}/>
                    <span className="">07253562456</span>
                  </div>
                  {/* <div className="">yy</div> */}
                </div>
              </div>
            </div>

            {/* SMALL CARDS */}
             <div className="flex-1 flex gap-4 justify-between flex-wrap">
              {/* CARD */}
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6" />
                <div className="">
                  <h1 className="text-xl font-semibold">1623</h1>
                  <span className="text-sm text-gray-400">Admisssion Number</span>
                </div>
              </div>
              {/* CARD */}
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
                <div className="">
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-400">Attendance</span>
                </div>
              </div>
              {/* CARD */}
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6" />
                <div className="">
                  <h1 className="text-xl font-semibold">7th</h1>
                  <span className="text-sm text-gray-400">Grade</span>
                </div>
              </div>
              {/* CARD */}
              <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6" />
                <div className="">
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-400">Lessons</span>
                </div>
              </div>
            </div> 
          </div>
          {/* BOTTOM */}
          <div className="bg-white rounded-md mt-4 p-6 h-[800px]">
            <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
            <BigCalendar />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-md p-4">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
              <Link className="p-3 rounded-md bg-hopeSkyLight" href="/">Student&apos;s Classes</Link>
              <Link className="p-3 rounded-md bg-hopePurpleLight" href="/">Student&apos;s Students</Link>
              <Link className="p-3 rounded-md bg-hopeYellowLight" href="/">Student&apos;s Lessons</Link>
              <Link className="p-3 rounded-md bg-pink-50" href="/">Student&apos;s Lessons</Link>
              <Link className="p-3 rounded-md bg-hopeSkyLight" href="/">Student&apos;s Assignments</Link>
            </div>
          </div>
          <Performance />
          <Announcements />
        </div>
    </div>
  )
}

export default SingleStudentViewPage