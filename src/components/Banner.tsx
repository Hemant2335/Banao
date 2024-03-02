import banner from "../assets/BannerImg.jpeg"


const Banner = () => {
  return (
    <div className="w-full h-[60vh] relative">
        <div className="h-full w-full absolute bg-black opacity-40"></div>
        <img src={banner} className="w-full object-cover h-full" alt="" />
        <div className="absolute bottom-[10vh] text-white left-[20vh]">
        <h1 className="text-[4.5vh] font-bold">Computer Engineering</h1>
        <p className="text-sm">142,765 Computer Engineers follow this</p>
        </div>
    </div>
    
  )
}

export default Banner