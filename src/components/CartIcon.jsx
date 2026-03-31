import { FaShoppingCart } from "react-icons/fa";

export default function CartIcon({ count = 0 }) {
    return (
        <div className="relative inline-block">
            {/* Cart Icon */}
            <FaShoppingCart className="text-2xl text-gray-800" />

            {/* Badge */}
            {count > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center 
                         min-w-[18px] h-[18px] px-1 text-xs font-bold text-white 
                         bg-red-500 rounded-full">
                    {count}
                </span>
            )}
        </div>
    );
}