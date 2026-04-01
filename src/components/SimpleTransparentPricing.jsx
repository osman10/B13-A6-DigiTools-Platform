import { IoCheckmarkOutline } from "react-icons/io5";


const SimpleTransparentPricing = () => {
    return (
        <div className='py-[140px]'>

            <div className="section">
                <h1 className='text-center text-5xl font-extrabold my-4'>Simple, Transparent Pricing</h1>
                <p className='text-center text-gray-400 text-base my-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">


                    {/* Cards -1*/}
                    <div className="flex flex-col max-w-[380px] min-h-[448px] bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300 p-6 border border-gray-300">
                        <div className="flex flex-col">
                            <h1 className='text-2xl text-[#101727] font-bold'>Starter</h1>
                            <p className='mt-3 mb-3 text-gray-500'>Perfect for getting started</p>
                            <p className="my-6 font-bold text-[40px]">$0<span className="text-gray-400 text-xl">/Month</span></p>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Access to 10 free tools</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Basic templates</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Community support</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />1 project per month</p>
                            </div>
                            <button className="gradient p-3 w-full rounded-full text-white font-bold text-2xl">Get Started Free</button>
                        </div>
                    </div>


                    {/* Cards -2*/}
                    <div className="gradient relative text-white flex flex-col max-w-[380px] min-h-[448px] rounded-2xl  hover:shadow-md transition duration-300 p-6 border border-gray-300">
                        <div className="absolute -top-[10px] left-[50%] -translate-x-[50%] bg-yellow-200 rounded-full px-2"><p className="text-yellow-600">Best Seller</p></div>
                        <div className="flex flex-col">
                            <h1 className='text-2xl font-bold'>Pro</h1>
                            <p className='mt-3 mb-3'>Best for professionals</p>
                            <p className="my-6 font-bold text-[40px]">$29<span className="text-xl">/Month</span></p>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='font-bold text-xl' />Access to all premium tools</p>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='font-bold text-xl' />Unlimited templates</p>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='font-bold text-xl' />Priorty support</p>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='font-bold text-xl' />Unlimited projects</p>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='font-bold text-xl' />Cloud sync</p>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='font-bold text-xl' />Advanced analytics</p>

                            </div>
                            <button className="bg-white hover:bg-gradient-to-r hover:from-[#4f39f6] hover:to-[#9514fa] hover:text-white p-3 w-full rounded-full text-violet-500 font-bold text-2xl">Start Pro Trial</button>
                        </div>
                    </div>


                    {/* Cards -3*/}
                    <div className="flex flex-col max-w-[380px] min-h-[448px] bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300 p-6 border border-gray-300">
                        <div className="flex flex-col">
                            <h1 className='text-2xl text-[#101727] font-bold'>Starter</h1>
                            <p className='mt-3 mb-3 text-gray-500'>For teams and businesses</p>
                            <p className="my-6 font-bold text-[40px]">$0<span className="text-gray-400 text-xl">/Month</span></p>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Everything in Pro</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Team collaboration</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Custom integrations</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Dedicated support</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />SLA guarntee</p>
                                <p className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />Custom branding</p>
                            </div>
                            <button className="gradient p-3 w-full rounded-full text-white font-bold text-2xl">Get Contact Sales</button>
                        </div>
                    </div>




                </div>
            </div>
        </div>

    );
};

export default SimpleTransparentPricing;