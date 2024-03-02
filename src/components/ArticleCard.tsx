import { FiMoreHorizontal , FiEye ,FiShare2 } from "react-icons/fi";
import { useState } from "react";

type ArticleCardProps = {


  data: {
    Img: string;
    cat: string;
    topic: string;
    desc: string;
    Author: string;
    Authorimg: string;
    view: number;
  };
};

const ArticleCard = ({ data }: ArticleCardProps) => {

  const [isdrop, setisdrop] = useState(false)

  return (
    <div className="md:w-[40vw] h-fit rounded-lg border-2">
      {/* Image */}
      <div className="w-full h-[25vh]">
        <img
          src={data.Img}
          className="w-full rounded-lg object-cover h-full"
          alt="Image"
        />
      </div>
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
        <p className="text-sm mt-[2vh]">{data.desc}</p>
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
};

export default ArticleCard;
