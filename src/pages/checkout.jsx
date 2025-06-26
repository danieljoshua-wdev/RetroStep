import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [cardType, setCardType] = useState("");


  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

const detectCardType = (number) => {
  const cleaned = number.replace(/\s/g, "");

  if (/^4/.test(cleaned)) return "visa";
  if (/^5[1-5]/.test(cleaned)) return "mastercard";
  if (/^3[47]/.test(cleaned)) return "amex";
  if (/^6(?:011|5)/.test(cleaned)) return "discover";

  return "";
};


   const [errors, setErrors] = useState({});

   const total = cartItems.reduce(
    (sum, item) =>
      sum + (item.salePrice ?? item.price) * (item.quantity ?? 1),
    0
  );

	const formatCardNumber = (value) => {
	  const digits = value.replace(/\D/g, "").slice(0, 16); // Max 16 digits
	  return digits.replace(/(.{4})/g, "$1 ").trim();       // Format in groups
	};


  const formatExpiration = (value) => {
  value = value.replace(/\D/g, "").slice(0, 4); // Only 4 digits max (MMYY)

  const month = value.slice(0, 2);
  const year = value.slice(2, 4);

  if (month.length === 1 && Number(month) > 1) {
    return `0${month}/`; // auto add 0
  }

  if (month.length === 2) {
    if (Number(month) < 1 || Number(month) > 12) return "";
    return year ? `${month}/${year}` : `${month}/`;
  }

  return month;
};

const handleChange = (e) => {
  let { name, value } = e.target;

  if (name === "cardNumber") {
    value = formatCardNumber(value);
    const type = detectCardType(value);
    setCardType(type);
  }

  if (name === "expiration") value = formatExpiration(value);
  if (name === "cvv") value = value.replace(/\D/g, "").slice(0, 4); // numeric, max 4 digits

  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.zip.trim() || !/^\d{4,6}$/.test(formData.zip)) newErrors.zip = "ZIP must be 4-6 digits.";
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, "").length !== 16)
      newErrors.cardNumber = "Enter a valid 16-digit card number.";
    if (!/^\d{2}\/\d{2}$/.test(formData.expiration)) newErrors.expiration = "Expiration must be MM/YY.";
    if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 or 4 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Order placed successfully!\nThank you for shopping with RetroStep.");
    clearCart();
    navigate("/order-confirmation");
  };

  const inputClass = (error) =>
    `w-full border p-2 rounded ${error ? "border-red-500 placeholder-red-600" : ""}`;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      {/* Left: Form */}
<form onSubmit={handleSubmit} className="space-y-6">
  <h2 className="text-xl font-bold mb-4">Shipping Information</h2>

  <div>
    <input
      type="text"
      name="fullName"
      placeholder="Full Name"
      value={formData.fullName}
      onChange={handleChange}
      className={`w-full border p-2 rounded ${
        errors.fullName ? "border-red-500 placeholder-red-600" : ""
      }`}
    />
    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
  </div>

  <div>
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={formData.address}
      onChange={handleChange}
      className={`w-full border p-2 rounded ${
        errors.address ? "border-red-500 placeholder-red-600" : ""
      }`}
    />
    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
  </div>

  <div className="flex gap-4">
    <div className="w-full">
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.city ? "border-red-500 placeholder-red-600" : ""
        }`}
      />
      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
    </div>
    <div className="w-full">
      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.zip ? "border-red-500 placeholder-red-600" : ""
        }`}
      />
      {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
    </div>
  </div>

  <h2 className="text-xl font-bold mt-8 mb-4">Payment Information</h2>

  <div>
    <input
      type="text"
      name="cardNumber"
      placeholder="**** **** **** ****"
      value={formData.cardNumber}
      onChange={handleChange}
      className={`w-full border p-2 rounded ${
        errors.cardNumber ? "border-red-500 placeholder-red-600" : ""
      }`}
    />
    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
  </div>

  <div className="flex gap-4">
    <div className="w-full">
      <input
        type="text"
        name="expiration"
        placeholder="MM/YY"
        value={formData.expiration}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.expiration ? "border-red-500 placeholder-red-600" : ""
        }`}
      />
      {errors.expiration && <p className="text-red-500 text-sm mt-1">{errors.expiration}</p>}
    </div>
    <div className="w-full">
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleChange}
        className={`w-full border p-2 rounded ${
          errors.cvv ? "border-red-500 placeholder-red-600" : ""
        }`}
      />
      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
    </div>
  </div>

  <div className="mt-2 mb-4">
    <p className="text-sm text-gray-700 mb-1">We accept the following payment methods:</p>
    <div className="flex items-center gap-4">
      {cardType === "visa" && <img src={visa} alt="Visa" className="h-10" />}
      {cardType === "mastercard" && <img src={mastercard} alt="Mastercard" className="h-10" />}
      {cardType === "paypal" && <img src={paypal} alt="PayPal" className="h-10" />}
      {!cardType && (
        <>
          <img src={visa} alt="Visa" className="h-10 opacity-50" />
          <img src={mastercard} alt="Mastercard" className="h-10 opacity-50" />
          <img src={paypal} alt="PayPal" className="h-10 opacity-50" />
        </>
      )}
    </div>
  </div>

  <button
    type="submit"
    className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition"
  >
    Place Order
  </button>
</form>


      {/* Right: Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  {item.selectedSize && (
                    <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                  )}
                  <p className="text-sm">
                    ${(item.salePrice ?? item.price).toLocaleString()} x {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <div className="text-right font-bold text-lg">
              {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
