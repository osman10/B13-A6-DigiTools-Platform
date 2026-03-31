import { CountUp } from "use-count-up";

const Count = () => {
    return (
        <div className='gradient mt-8'>
            <div className='section flex flex-wrap justify-between items-center py-12 px-4'>
            <div className='flex justify-center items-center flex-col md:border-r-2 border-white flex-1'>
                <h1 className='text-6xl text-white font-extrabold'>        
                    <CountUp isCounting end={50} duration={2} />K+
                </h1>
                <p className='text-white font-bold'>Active User</p>
            </div>
            <div className='flex justify-center items-center flex-col md:border-r-2 border-white flex-1'>
                <h1 className='text-6xl text-white font-extrabold'><CountUp isCounting end={200} duration={2} />+</h1>
                <p className='text-white font-bold'>Premium Tool</p>
            </div>
            <div className='flex justify-center items-center flex-col flex-1'>
                <h1 className='text-6xl text-white font-extrabold'>
                    <CountUp isCounting end={4.9} duration={2} />
                </h1>
                <p className='text-white font-bold'>Rating</p>
            </div>
            </div>

        </div>
    );
};

export default Count;