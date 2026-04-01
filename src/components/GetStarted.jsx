import user from "../assets/user.png";
import pack from '../assets/package.png';
import rocket from '../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className='bg-[#f9fafc] py-0 md:py-[140px]'>
            {/* Card */}
            <div className="section">
                <h1 className='text-center text-5xl font-extrabold my-4'>Get Started in 3 Steps</h1>
                <p className='text-center text-gray-400 text-base my-10'>Start using premium digital tools in minutes, not hours.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">

                    {/* Cards -1*/}
                    <div className="flex flex-col max-w-[380px] min-h-[380px] bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300 p-6 border border-gray-300">

                        <div className='flex justify-end'>
                            <div className="h-10 w-10 gradient rounded-full flex items-center justify-center">
                                <p className='font-bold  text-sm text-white  text-center'>01</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-7">
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-violet-200'>
                                <img src={user} alt="user" />
                            </div>
                            <h1 className='text-2xl text-[#101727] mt-4 font-bold'>Create Account</h1>
                            <p className='mt-3 mb-3 text-gray-500 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    {/* Cards -2*/}
                    <div className="flex flex-col max-w-[380px] min-h-[380px] bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300 p-6 border border-gray-300">

                        <div className='flex justify-end'>
                            <div className="h-10 w-10 gradient rounded-full flex items-center justify-center">
                                <p className='font-bold  text-sm text-white  text-center'>02</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-7">
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-violet-200'>
                                <img src={pack} alt="user" />
                            </div>
                            <h1 className='text-2xl text-[#101727] mt-4 font-bold'>Choose Products</h1>
                            <p className='mt-3 mb-3 text-gray-500 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    {/* Cards -3*/}
                    <div className="flex flex-col max-w-[380px] min-h-[380px] bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300 p-6 border border-gray-300">

                        <div className='flex justify-end'>
                            <div className="h-10 w-10 gradient rounded-full flex items-center justify-center">
                                <p className='font-bold  text-sm text-white  text-center'>03</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-7">
                            <div className='w-[100px] h-[100px] flex justify-center items-center rounded-full bg-violet-200'>
                                <img src={rocket} alt="user" />
                            </div>
                            <h1 className='text-2xl text-[#101727] mt-4 font-bold'>Start Creating</h1>
                            <p className='mt-3 mb-3 text-gray-500 text-center'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;