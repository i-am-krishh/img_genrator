import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion"; 

const Steps = () => {
  return (
    <motion.div className="flex flex-col justify-center items-center"
    initial= {{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: true }}
    >

      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-gray-600 sm:text-xl mb-8">
        Transform Words into Stunning Images
      </p>

      <div className="space-y-4 w-full max-w-4xl text-sm mb-2">
        {stepsData.map((items, index) => (
          <div key={index} className="flex items-center gap-4 px-8 py-2 rounded-lg bg-white/80 shadow-md border border-white cursor-pointer hover:scale-[1.02] duration-300 transition-all">
            <img width={40} src={items.icon} alt={items.title} />
            <div>
              <h2 className="text-2xl font-medium">{items.title}</h2>
              <p className="text-lg text-gray-600">{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
