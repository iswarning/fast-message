import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

function Logo() {
  return (
    <Link href='/' prefetch={false} className='overflow-hidden'>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio
            ratio={16/9}
            className='flex items-center justify-center'>
                <div className='font-bold dark:text-white'>
                    Chat with anyone
                </div>
            </AspectRatio>
        </div>
        
    </Link>
  )
}

export default Logo