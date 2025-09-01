import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 p-6 md:px-10"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create an AI Images
      </h1>
      <p className="text-gray-500 mb-20"> Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center justify-center">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_img_1}
          alt=""
        />
        <div className="max-w-lg md:text-left text-justify">
          <h2 className="text-3xl font-medium mb-4 ">
            Introducing the AI powered text to image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our AI Image Generator. Whether you need stunning visuals or unique images, our tool transforms your text prompts into stunning visuals with just a few clicks.
          </p>
          <p className="text-gray-600">
            Simply type in a text prompt, and our AI will generate a high-quality image based on your description. Whether you're a creative professional, a student, or just someone who loves to experiment, our tool is the perfect way to bring your ideas to life.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
