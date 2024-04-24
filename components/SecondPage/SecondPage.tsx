import Image from 'next/image'
import React from 'react'
import Logo1 from '../../Aessts/Images/Logo (1).png'
import Logo2 from '../../Aessts/Images/Logo (2).png'
import Logo3 from '../../Aessts/Images/Logo (3).png'
import Logo4 from '../../Aessts/Images/Logo (4).png'
import Logo5 from '../../Aessts/Images/Logo (5).png'
import Logo6 from '../../Aessts/Images/Logo (6).png'

const SecondPage = () => {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center'>
        <div className=' font-[600] text-[#4D4D4D] text-[30px]'>Our Clients</div>
        <div className='text-[12px]'>We have been working with some Fortune 500+ clients</div>
      </div>
      <div>
        <Image
        src={Logo1}
        alt=""
        />
      </div>
    </div>
  )
}

export default SecondPage
