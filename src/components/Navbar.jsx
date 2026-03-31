import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/digitools.png"
import CartIcon from "./CartIcon";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <li><a className='text-base font-bold text-slate-300'>Products</a></li>
                            <li><a className='text-base font-bold text-slate-300'>Features</a></li>
                            <li><a className='text-base font-bold text-slate-300'>Pricing</a></li>
                            <li><a className='text-base font-bold text-slate-300'>Testimonials</a></li>
                            <li><a className='text-base font-bold text-slate-300'>FAQ</a></li>
                        </ul>
                    </div>
                    <a>
                        <img src={logo} alt="Digitools" className='w-[180px] h-[40px] cursor-pointer' />
                    </a>
                </div>



                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-bold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-4 justify-between items-center'>
                        <CartIcon/>
                        <a href="">Login</a>
                       <button className="gradient py-2 px-3 rounded-full font-bold text-white transition duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;