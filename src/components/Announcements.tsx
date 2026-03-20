import Image from "next/image"


const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400" >View All</span>
            {/* <Image src="/moreDark.png" alt="" width={20} height={20} /> */}
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-hopeSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 rounded-md px-1 py-1 bg-white">2026-01-01</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-hopePurpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 rounded-md px-1 py-1 bg-white">2026-01-01</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-hopeYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
                    <span className="text-xs text-gray-400 rounded-md px-1 py-1 bg-white">2026-01-01</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements