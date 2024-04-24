import Image from 'next/image'
import React from 'react'
import Logo from '../../Aessts/Images/Logo.png'
import { Button } from '../ui/button'
import Arrow from '../../Aessts/Images/Right.png'

const Navbar = () => {
  return (
    <div className='flex my-8 mx-12 justify between items-center justify-between'>
      <div className=''>
      <Image
        src={Logo}
        alt='Logo'
      />
      </div >
      <div className='flex gap-x-2'>
            <Button variant={'link'}>Home</Button>
            <Button variant={'link'}>Features</Button>
            <Button variant={'link'}>Community</Button>
            <Button variant={'link'}>Blog</Button>
            <Button variant={'link'}>Pricing</Button>
            <Button className='mr-8 bg-[#4CAF4F]' >Register Now <span><Image src={Arrow} alt = 'Arrow image' className='ml-2'/></span></Button>
      </div>
    </div>
  )
}

export default Navbar
