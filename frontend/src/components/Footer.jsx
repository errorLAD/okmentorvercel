import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src='https://iili.io/3urcY0l.md.png' alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>OkMentor is a 1:1 mentorship and advisory platform designed to connect individuals with expert mentors across various industries. </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
             <NavLink to='/contact' >
                      <li className='py-1'>Terms and Conditions </li>
               </NavLink>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>7004197301</li>
            <li></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ okmentor.in - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
