import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
        
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src='https://iili.io/3urm9MN.md.png' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
          At OkMentor, we believe that the right guidance at the right time can transform lives. Our platform connects individuals with experienced mentors and advisors across diverse fields, offering personalized 1:1 mentorship to help you navigate challenges, make informed decisions, and achieve your goals.

Whether you're a student seeking career advice, an entrepreneur needing business guidance, or a professional looking to upskill, OkMentor provides access to industry experts who offer real insights and actionable strategies.
          </p>
          
         <b class="text-gray-800">   Why Choose OkMentor?</b>
✅ Expert Mentors: Connect with professionals from various industries.<br></br>
✅ Tailored Guidance: Get advice specific to your needs and goals.<br></br>
✅ Flexible Sessions: Learn at your pace, anytime, anywhere.<br></br>
✅ Real-World Insights: Practical solutions from experienced <br></br> <br></br>
At OkMentor, your growth is our mission. Join us today and take the next step towards success with the guidance of the best mentors in the industry!
          <b className='text-gray-800'>Our Vision</b>
          <p>To build a world where knowledge, experience, and guidance are easily accessible to everyone, empowering individuals to make smarter decisions, accelerate their growth, and achieve their dreams through expert mentorship.
</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Expert Mentors :</b>
          <p>Connect with top professionals across industries, offering real-world insights and actionable guidance.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalized 1:1 Sessions : </b>
          <p></p>Get tailored advice that meets your specific needs, whether for career growth, business success, or personal development.
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Flexible & Convenient :</b>
          <p > Schedule mentorship sessions at your convenience, anytime, anywhere, for a seamless learning experience.</p>
        </div>
      </div>

    </div>
  )
}

export default About
