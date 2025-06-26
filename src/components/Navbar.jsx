import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

function Navbar() {
  const { cartItems } = useCart();
  const { setIsOpen } = useSearch();
 

  return (
      <nav className="bg-white border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
		
        {/* LEFT: Text Logo */}
        <div className="mr-auto">
          <Link to="/" className="text-xl font-bold text-gray-900">
            RetroStep
          </Link>
        </div>

        {/* CENTER: Nav Links */}
        <ul className="hidden lg:flex justify-center gap-6 text-[13px] font-medium text-gray-800 uppercase tracking-wider">
          <li><Link to="/collectibles/labubu">Collectibles/Labubu</Link></li>
          <li><Link to="/new-arrivals">New Arrivals</Link></li>
          <li><Link to="/onitsuka-tiger">Onitsuka Tiger</Link></li>
          <li><Link to="/new-balance">New Balance</Link></li>
          <li><Link to="/on-cloud">On Cloud</Link></li>
          <li><Link to="/nike">Nike</Link></li>
          <li><Link to="/adidas">Adidas</Link></li>
          <li><Link to="/air-jordan">Air Jordan</Link></li>
          <li><Link to="/other-brands">Other Brands</Link></li>
          <li><Link to="/sale">Sale</Link></li>
        </ul>


       <div className="ml-auto flex items-center gap-6 text-gray-700 text-[17px]">
	   
	   
<Link to="/login">
  <FaUser className="cursor-pointer hover:text-black" />
</Link>
  

  <FaSearch
    className="cursor-pointer hover:text-black"
    onClick={() => setIsOpen(true)}
  />
  
  <Link to="/cart" className="relative">
    <FaShoppingBag className="hover:text-black" />
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
        {cartItems.length}
      </span>
    )}
  </Link>
</div>
		
      </div>
    </nav>
  );
}

export default Navbar;
