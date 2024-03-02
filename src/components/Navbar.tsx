import {FiSearch , FiChevronDown} from "react-icons/fi"
import logo from "../assets/logo.svg"


const Navbar = () => {
  return (
    <div className="w-full flex  px-[7vw] justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center ">
          <img src={logo} className="text-2xl font-bold"/>
        </div>

        {/* Searchbar */}
        <div className="hidden  text-[2.3vh] md:flex items-center  justify-center p-4">
          <div className=" rounded-3xl bg-[#F2F2F2] flex  items-center pl-2 ">
            <h1 className="text-lg">
              <FiSearch />
            </h1>
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className=" text-[2vh] md:min-w-[21vw] focus:border-0 bg-[#F2F2F2] focus:outline-none px-3 py-2 rounded-3xl"
            />
          </div>
        </div>

        {/* Login */}
        <div className="flex text-[2vh] gap-2 justify-center items-center ">
            <p>Create account.</p>
            <button className="rounded-md border-0  bg-white text-[#2F6CE5]">It's free!</button>
            <FiChevronDown />
        </div>
    </div>
  )
}

export default Navbar