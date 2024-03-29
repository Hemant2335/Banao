import { FiMoreHorizontal , FiCalendar , FiEye ,FiShare2 , FiMapPin } from "react-icons/fi"
import AuthImg1 from "../assets/AuthImages/Img4.jpeg";
import { useState } from "react";

const JobCard = () => {

    const [isdrop, setisdrop] = useState(false)

    const data = {
        cat: "Job",
        topic: "Software Developer",
        comp: "Innovaccer Analytics Private Ltd.",
        place : "Noida, India",
        Author : "Joshep Gray",
        Authorimg : AuthImg1,
        view : 1.4
    }
    return (
        <div className="md:w-[40vw] h-fit rounded-lg border-2">
          <div className="p-[2vh] ">
            <h1 className="text-sm font-medium">{data.cat}</h1>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-bold">{data.topic}</h1>
              <button className="text-xl relative">
                <FiMoreHorizontal onClick={()=>setisdrop(!isdrop)}/>
                {isdrop && ( <div className="w-fit   bg-white absolute right-0 h-fit border-2 rounded-md">
                    <ul className="text-sm gap">
                        <li className="p-2 px-4 hover:bg-gray-200">Edit</li>
                        <li className="p-2 px-4 hover:bg-gray-200">Report</li>
                    </ul>
                </div>)}
               
              </button>
            </div>
            <div className="flex gap-[2vw] font-medium">
            <p className="text-sm mt-[2vh] flex items-center gap-2"><FiCalendar /> {data.comp}</p>
            <p className="text-sm mt-[2vh] flex items-center gap-2"> <FiMapPin />{data.place}</p>
            </div>
            <button className="mt-[2vh] text-green-400 border-2 py-1 text-sm rounded-md w-full">Apply on Timesjobs</button>
            <div className="flex justify-between items-center">
              <div className="mt-[2vh] flex items-center gap-2">
                <div className="w-[6vh] h-[6vh] rounded-[50%] ">
                  <img src={data.Authorimg} className="rounded-[50%] w-full h-full object-cover" alt="" />
                </div>
                <h3 className="text-[2vh]">{data.Author}</h3>
              </div>
              <div className="mt-[2vh] flex gap-2 items-center">
                <p className="text-sm flex items-center gap-2"><FiEye />{data.view}k views</p>
                <button className="bg-gray-200 p-2 rounded-lg"><FiShare2 /></button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default JobCard