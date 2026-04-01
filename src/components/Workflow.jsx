import React from 'react';

const Workflow = () => {
    return (
        <div className='gradient py-[120px]'>
            <div className='section text-white'>
                <h1 className='text-center text-5xl font-extrabold mb-2'>Ready to Transform Your Workflow?</h1>
                <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
                <div className='flex gap-3 items-center justify-center mt-10'>
                    <button className='border border-white p-3 rounded-full cursor-pointer hover:shadow-xl bg-white text-violet-500'>Explore Products</button>
                    <button className='border border-white p-3 rounded-full cursor-pointer hover:shadow-xl text-white hover:bg-white hover:text-violet-500'>View Pricing</button>
                </div>
                <p className='text-center mt-3'>14-day free trial • No credit card required • Cancel anytime.</p>
            </div>
        </div>
    );
};

export default Workflow;