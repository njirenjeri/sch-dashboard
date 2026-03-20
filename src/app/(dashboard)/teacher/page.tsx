import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const TeacherPage = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row flex-1">
      {/* LEFT */}
      <div className="w-full xl:2/3">
        <div className="w-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
        </div>
        <BigCalendar />
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3">
        {/* <EventCalendar /> */}
        <Announcements />
      </div>
    </div>
  )
}

export default TeacherPage