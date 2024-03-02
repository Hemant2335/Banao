import banner from "../assets/BannerImg.jpeg";
import { FiUserPlus, FiArrowLeft } from "react-icons/fi";
const Banner = () => {
  return (
    <div className="w-full md:h-[60vh] relative mb-[2vh]">
      <div className="h-full w-full absolute bg-black opacity-40"></div>
      <img src={banner} className="w-full object-cover h-full" alt="" />
      <button className="md:hidden absolute top-2 left-2 text-[3vh] text-white  p-3 rounded-lg flex gap-2 items-center">
        <FiArrowLeft /> 
      </button>
      <button className="md:hidden absolute top-2 right-2 border-2 text-white text-sm p-3 rounded-lg flex gap-2 items-center">
        <FiUserPlus /> Join Group
      </button>
      <div className="absolute bottom-[5vh] left-[5vw] md:bottom-[10vh] text-white md:left-[20vh]">
        <h1 className="md:text-[4.5vh]  text-[2.5vh] font-bold">
          Computer Engineering
        </h1>
        <p className="text-sm">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
