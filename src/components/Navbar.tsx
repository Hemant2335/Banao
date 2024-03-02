import {FiSearch , FiChevronDown} from "react-icons/fi"
import logo from "../assets/logo.svg"
import React from "react"
import UserImg from "../assets/AuthImages/Img4.jpeg"

type NavbarProps = {
    setissignin: React.Dispatch<React.SetStateAction<boolean>>
    isloggedin : boolean
}

const Navbar = ({setissignin , isloggedin} : NavbarProps) => {
  return (
    <div className="w-full md:flex  px-[7vw] justify-between hidden ">
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
        {isloggedin && (<div className="flex  justify-between items-center">
          <div className=" flex items-center gap-2">
            <div className="w-[6vh] h-[6vh] rounded-[50%] ">
              <img src={UserImg} className="rounded-[50%] w-full h-full object-cover" alt="" />
            </div>
            <h3 className="text-[2vh] flex items-center gap-2">Siddharth Goyal <FiChevronDown /></h3>

          </div>
        </div>)}
        {!isloggedin && (<div className="flex hover:cursor-pointer text-[2vh] gap-2 justify-center items-center " onClick={()=>setissignin(true)}>
            <p>Create account.</p>
            <button className="rounded-md border-0  bg-white text-[#2F6CE5]">It's free!</button>
            <FiChevronDown /></div>)}
        
    </div>
  )
}

export default Navbar