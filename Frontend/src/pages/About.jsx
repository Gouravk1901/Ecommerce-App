import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 mx-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='pt-10 flex flex-col md:flex-row gap-16 px-20'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-content gap-6 md:w-2/4 text-gray-600'>
        <p>Vastrakit is a modern clothing e-commerce application designed to provide a seamless and 
          enjoyable online shopping experience. The platform offers a wide collection of fashionable 
          and comfortable clothing for men, women, and everyday wear, catering to different styles, 
          preferences, and occasions. With an easy-to-use interface, users can browse products, 
          view detailed descriptions, and place orders effortlessly from anywhere.</p>
           <p>Vastrakit focuses on combining style, quality, and affordability in one platform. 
            The application ensures secure transactions, smooth navigation, and a reliable 
            ordering process to build trust and convenience for users. By bringing the latest 
            fashion trends together with a user-friendly design, Vastrakit aims to simplify 
            clothing shopping and make fashion accessible to everyone.</p>
            <b className='text-gray-800 text-xl'>Our Mission</b>
            <p>Our mission at Vastrakit is to make fashion easy, affordable, and accessible for everyone. 
              We aim to provide quality clothing through a smooth and user-friendly online shopping experience, 
              helping customers feel confident and comfortable in what they wear.</p>

        </div>

      </div>

      <div className='text-2xl py-10 mx-10'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 mx-20'>
        <div className=' border-2 border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-gray-800 text-xl'>Quality Assurance:</p>
          <p className='text-gray-600'>We ensure every product meets high standards of quality, comfort, 
            and durability before reaching our customers.</p>
        </div>
        <div className='border-2 border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-gray-800 text-xl'>Convenience:</p>
          <p className='text-gray-600'>Vastrakit offers a smooth and easy shopping experience, allowing users to browse, 
            order, and track products effortlessly.</p>
        </div>
        <div className='border-2 border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-gray-800 text-xl'>Exceptional Customer Service:</p>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist customers and ensure a quick, 
            friendly, and satisfying resolution to their needs.</p>
        </div>

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
