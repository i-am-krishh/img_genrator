import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-6">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Testimonials</h1>
      <p className="text-gray-500 mb-8">What our users are saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img src={testimonial.image} className="rounded-full w-14" />
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

{
  /* <div className="bg-white p-6 rounded-lg shadow-md">
  <p className="text-gray-600 mb-4">{testimonial.text}</p>
  <div className="flex items-center">
    <img
      className="w-12 h-12 rounded-full mr-2"
      src={testimonial.image}
      alt=""
    />
    <div>
      <p className="text-gray-800 font-medium">
        {testimonial.name}
      </p>
      <p className="text-gray-500 text-sm">{testimonial.role}</p>
    </div>
  </div>
</div> */
}
