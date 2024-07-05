import React from 'react'
import logo from '@/public/assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <Image src={logo} alt="asd" className='mx-2 w-10'/>
        </div>
        <div className='flex m-8 items-center justify-center gap-4 text-2xl '>
          <Link href="https://github.com/KisalRojitha"> <FaGithub /></Link>
          <Link href="https://www.linkedin.com/in/kisal-thenuwara-018bb220b/"> <FaLinkedin /></Link>

        </div>
    </nav>
  )
}

export default Navbar