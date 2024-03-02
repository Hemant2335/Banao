import Banner from "../components/Banner";
import {
  FiUserPlus,
  FiChevronDown,
  FiMapPin,
  FiEdit2,
  FiThumbsUp,
} from "react-icons/fi";
import CardImg1 from "../assets/CardImages/Img1.jpeg";
import AuthImg1 from "../assets/AuthImages/Img1.jpeg";
import AuthImg2 from "../assets/AuthImages/Img2.jpeg";
import CardImg2 from "../assets/CardImages/Img2.jpeg";
import GrpImg1 from "../assets/GroupsImages/Img1.jpeg";
import GrpImg2 from "../assets/GroupsImages/Img2.jpeg";
import GrpImg3 from "../assets/GroupsImages/Img3.jpeg";
import GrpImg4 from "../assets/GroupsImages/Img4.jpeg";

import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import MeetupCard from "../components/MeetupCard";
import JobCard from "../components/JobCard";
const Blog = () => {
  const [noofPost, setnoofPost] = useState(32);
  const [Locationvalue, setLocationvalue] = useState("Noida, India");
  const [isloggedin, setisloggedin] = useState(false);
  const Posts = [
    {
      Img: CardImg1,
      cat: "Article",
      topic: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      Author: "Siddharth Goyal",
      Authorimg: AuthImg1,
      view: 1.4,
    },
    {
      Img: CardImg2,
      cat: "Education",
      topic:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      Author: "Sarah West",
      Authorimg: AuthImg2,
      view: 1.4,
    },
  ];

  const Groups = [
    {
      Img: GrpImg1,
      name: "Leisure",
    },
    {
      Img: GrpImg2,
      name: "Activism",
    },
    {
      Img: GrpImg3,
      name: "MBA",
    },
    {
      Img: GrpImg4,
      name: "Philosophy",
    },
  ];

  return (
    <div>
      <Banner />

      <div className="px-[15vw] py-[5vh]">
        {/* Headings */}
        <div className="flex justify-between mb-2">
          <div className="flex gap-[1vw] items-center">
            <h2 className="text-black font-medium hover:cursor-pointer hover:text-black">
              All Posts({noofPost})
            </h2>
            <h2 className="text-gray-500 hover:cursor-pointer hover:text-black">
              Article
            </h2>
            <h2 className="text-gray-500 hover:cursor-pointer hover:text-black">
              Event
            </h2>
            <h2 className="text-gray-500 hover:cursor-pointer hover:text-black">
              Education
            </h2>
            <h2 className="text-gray-500 hover:cursor-pointer hover:text-black">
              Job
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#EDEEF0] text-sm p-2 rounded-sm flex gap-2 items-center">
              Write a Post <FiChevronDown />
            </button>
            <button className="bg-[#2F6CE5] text-white text-sm p-2 rounded-sm flex gap-2 items-center">
              <FiUserPlus /> Join Group
            </button>
          </div>
        </div>
        <hr />

        {/* Posts */}
        <div className="flex mt-[5vh] justify-between">
          <div className="flex flex-col gap-[2vh]">
            {/* Main Content */}
            <ArticleCard data={Posts[0]} />
            <ArticleCard data={Posts[1]} />
            <MeetupCard />
            <JobCard />
          </div>

          {/* Location */}
          <div className="h-full w-full flex-col  flex items-end">
            <div className="w-[18vw] flex justify-between pb-2 mt-[2vh] border-b-2 ">
              <div className="flex items-center gap-2">
                <FiMapPin />
                <input
                  type="text"
                  className="text-sm"
                  value={Locationvalue}
                  onChange={(e) => {
                    setLocationvalue(e.target.value);
                  }}
                />
              </div>
              <FiEdit2 />
            </div>
            <p className="text-[1.6vh] max-w-[18vw] mt-2 text-gray-400">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
            <div className="w-[18vw] mt-[5vh]">
              <h1 className="text-[2vh] font-medium flex items-center gap-2">
                <FiThumbsUp />
                RECOMMENDED GROUPS
              </h1>
              {!isloggedin && Groups.map((data)=>(<div className="flex justify-between items-center">
                <div className="mt-[2vh] flex items-center gap-2">
                  <div className="w-[6vh] h-[6vh] rounded-[50%] ">
                    <img
                      src={data.Img}
                      className="rounded-[50%] w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <h3 className="text-[2vh]">{data.name}</h3>
                </div>
                <div className="mt-[2vh] flex gap-2 items-center">
                  <button className="bg-gray-200 text-[1.7vh] font-medium p-2 rounded-lg">
                    follow
                  </button>
                </div>
              </div>))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
