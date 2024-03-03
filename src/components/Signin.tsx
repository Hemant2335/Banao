import facebook from "../assets/Logo/facebook.png";
import google from "../assets/Logo/Google.png";
import SigninImg from "../assets/Banner/SignIn.svg";
import { FiX } from "react-icons/fi";
import { useState } from "react";

type SigninProps = {
  setisloggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setissignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Signin = ({ setisloggedin, setissignin }: SigninProps) => {
  const [isSignup, setisSignup] = useState(false);
  return (
    <div className="z-10 w-screen fixed h-screen justify-center items-center flex">
      <div className="h-full w-full absolute bg-black opacity-40"></div>

      <div className="fixed md:w-[52vw] rounded-lg bg-white h-fit shadow-2xl">
        <div
          onClick={() => setissignin(false)}
          className="bg-white md:flex hidden hover:cursor-pointer p-2 rounded-[50%] top-[5vh] right-[20vw] fixed font-bold text-gray-700"
        >
          <FiX />
        </div>
        <div className="px-[2vw] hidden h-[7vh] text-green-600 font-medium rounded-lg items-center md:flex bg-green-100">
          <h1 className="text-sm">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h1>
        </div>
        
        <div className="p-[5vh] flex">
          {/* // Signin form */}
          <div
          onClick={() => setissignin(false)}
          className="md:hidden flex hover:cursor-pointer text-white p-2 rounded-[50%] right-[10vw] bg-gray-500 absolute font-bold "
        >
          <FiX /> 
        </div>
          <div>
            <div>
              {isSignup && <h1 className="text-2xl font-bold">Sign In</h1>}
              {!isSignup && (
                <h1 className="text-2xl font-bold">Create Account</h1>
              )}
              <div className="mt-[2vh] h-fit md:w-[25vw] border-2 rounded-md">
                {!isSignup && (
                  <div className="flex border-b-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border-r-2"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 "
                    />
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 border-b-2"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full p-3 border-b-2"
                />
                {!isSignup && (
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full p-3 "
                  />
                )}
              </div>
            </div>
            <div className="mt-[3vh]">
              {!isSignup && (
                <button
                  onClick={() => {
                    setisloggedin(true);
                    setissignin(false);
                  }}
                  className="bg-[#2F6CE5] text-sm  text-white p-3  md:w-[25vw] rounded-[5vh]"
                >
                  Create Account
                </button>
              )}
              {isSignup && (
                <button
                  onClick={() => {
                    setisloggedin(true);
                    setissignin(false);
                  }}
                  className="bg-[#2F6CE5] text-sm  text-white p-3  md:w-[25vw] rounded-[5vh]"
                >
                  Sign In{" "}
                </button>
              )}
            </div>
            <div className="mt-[5vh]">
              <button className=" text-sm flex items-center justify-center w-full gap-2 p-2 border-2 md:w-[25vw] rounded-lg">
                <img src={facebook} alt="logo" className="h-[2vh]" /> {isSignup ? `Sign in ` : `Sign up `}
                with Facebook
              </button>
            </div>
            <div className="mt-[1vh]">
              <button className=" text-sm p-2 border-2 flex items-center w-full justify-center gap-2 md:w-[25vw] rounded-lg">
                <img src={google} alt="logo" className="h-[2vh]" /> {isSignup ? `Sign in ` : `Sign up `}  with
                Google
              </button>
            </div>
          </div>
          {/* //Image */}
          <div className="w-full hidden md:flex flex-col items-end">
            {!isSignup && (
              <h1 className="text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => setisSignup(true)}
                  className="text-blue-600"
                >
                  Sign In
                </button>
              </h1>
            )}
            {isSignup && (
              <h1 className="text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => setisSignup(false)}
                  className="text-blue-600"
                >
                  Create Account
                </button>
              </h1>
            )}
            <img src={SigninImg} alt="" className="mt-[5vh]" />
            <p className="text-[1.5vh] max-w-[20vw] text-gray-500">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
