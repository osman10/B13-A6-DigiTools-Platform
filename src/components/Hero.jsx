import { CiPlay1 } from "react-icons/ci";

import banner from '../assets/banner.png';
import circle from "../assets/circle.png"

const Hero = () => {

    return (
        <div className='flex justify-between items-center  gap-8 section mt-[80px] md:mt-[60px]'>
            <div className="max-w-[640px]">
                <button className='px-2 md:px-4 py-2 bg-violet-300 rounded-full font-bold flex justify-between items-center gap-2'>
                    <img src={circle} alt="" className="h-[16px] w-[16px]"/>
                    <span className="font-bold bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">New: Al-Powered Tools Available</span>
                </button>
                <h1 className="text-5xl md:text-7xl text-[#101727] font-bold mt-6 leading-15 md:leading-20 text-center md:text-left">Supercharge Your Digital Workflow</h1>
                <p className=" text-[#627382] leading-10 text-[18px] mt-4 text-center md:text-left">Access premium AI tools, design assets, templates, and productivity <br/> software—all in one place. Start creating faster today. <br/>Explore Products Explore Products </p>
                <div className="flex gap-3 items-center mt-6">
                    <button className="px-5 py-4 font-bold rounded-full gradient text-white ">Explore Products</button>
                    <button className="px-5 py-4 font-bold rounded-full border border-violet-500 hover:bg-violet-500 hover:text-white"><span className="flex items-center justify-between gap-1 bg-gradient-to-r from-[#6f5fed] to-[#9514fa] bg-clip-text"><CiPlay1 /> Watch Demo</span></button>
                </div>
            </div>
            <div><img src={banner} alt="Banner" /></div>
        </div>
    );
};

export default Hero;