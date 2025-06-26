import React from "react";

function Footer() {
  return (
   <footer className="bg-white text-sm text-gray-700 border-t mt-12">
  <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
    
    {/* About Us aligned left */}
    <div className="md:w-1/3">
      <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase mb-4">About Us</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        RetroStep was born in the messy bedroom of a passionate sneakerhead. With a love for kicks, tech, and hustle, RetroStep came to life and never looked back.
      </p>
    </div>

    {/* Right side columns */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 flex-1">
      
      {/* Support */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">FAQ</a></li>
          <li><a href="#" className="hover:underline">Authenticity</a></li>
          <li><a href="#" className="hover:underline">Refund Policy</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      {/* RetroStep */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase mb-4">RetroStep</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-gray-900 uppercase mb-4">No Annoying Emails.</h3>
        <p className="text-sm text-gray-600 mb-4">We won’t spam. You’ll receive discounts, new arrivals & early access.</p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t text-xs text-gray-500 text-center py-6">
    &copy; 2025 - RetroStep Sneaker Specialists
  </div>
</footer>
  );
}

export default Footer;
