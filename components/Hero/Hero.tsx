import React from 'react'
import HeroImage from '../../Aessts/Images/Illustration.png'
import { Button } from '../ui/button'
import Image from 'next/image'
import dot from '../../Aessts/Images/Dot.png'

const Hero = () => {
    return (
        <div className='px-12 bg-[#F5F7FA] flex flex-col items-center justify-center '>
            <div className='flex flex-grow justify-evenly'>
            <div className='flex flex-col gap-y-4 justify-center w-1/2 py-20'>
                <div className='text-6xl text-[#717171] font-bold '>
                    Lessons and insights
                </div>
                <div className='text-6xl text-[#4CAF4F] font-bold '>
                    from 8 years
                </div>
                <div className='text-[14px] font-medium text-[#717171] '>
                Where to grow your business as a photographer: site or social media?
                </div>
                <div>
                    <Button className='bg-[#4CAF4F]'>Register</Button>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <Image
                src={HeroImage}
                alt = 'Hero'
                />
            </div>
            </div>
            <div><Image
            src={dot}
            alt=""
            /></div>
        </div>
    )
}

export default Hero
