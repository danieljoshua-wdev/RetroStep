import React from "react";
import { Truck, ShieldCheck, CreditCard, MessageCircleMore } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Same-Day Delivery",
      description: (
        <>
          Unbox your brand new sneakers instantly. <a href="#" className="underline">Contact us</a> to learn more.
        </>
      ),
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "100% Guaranteed Authentic",
      description: "We don't deal with fakes. Legit sneakers only or your money-back.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Secure Payment Options",
      description: "Shop risk-free with credit card and cash on delivery, available nationwide!",
    },
    {
      icon: <MessageCircleMore size={28} />,
      title: "Friendly Customer Service",
      description: (
        <>
          Instantly talk to a Sneaker Specialist daily from 6am onwards. Yes, we’re up early.{" "}
          <a href="#" className="underline">Viber us now!</a>
        </>
      ),
    },
  ];

  return (
    <div className="py-12 px-6 bg-white border-t border-b">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-sm text-gray-700">
        {features.map((feature, idx) => (
          <div key={idx} className="space-y-3">
            <div className="text-black flex justify-center">{feature.icon}</div>
            <h4 className="uppercase text-xs font-semibold tracking-widest">{feature.title}</h4>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
