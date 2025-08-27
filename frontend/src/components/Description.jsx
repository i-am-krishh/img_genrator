import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create an AI Images</h1>
        <p className='text-gray-500 mb-8'> Turn your imagination into visuals</p>

        <div className='flex gap-10'>
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />
            <div>
              <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI powered text to image Generator</h2>
              <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our AI Image Generator. Whether you need stunning visuals or unique images, our tool transforms your text prompts into stunning visuals with just a few clicks.</p>
              <p className='text-gray-600 mb-4'>Simply type in a text prompt, and our AI will generate a high-quality image based on your description. Whether you're a creative professional, a student, or just someone who loves to experiment, our tool is the perfect way to bring your ideas to life.</p>
              <p className='text-gray-600'>Our AI Image Generator uses state-of-the-art technology to create high-quality images from simple text prompts. Whether you want to create a visual for a project, a marketing campaign, or just for fun, our tool has got you covered.</p>
            </div>
        </div>
    </div>
  )
}

export default Description