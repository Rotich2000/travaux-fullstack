import React from 'react'
import { Attribute } from '../types/types'
import Image from 'next/image'

type Props = {
    attribute: Attribute;
}

const Card = ({attribute}: Props) => {
    const { name, shortDescription, longDescription, price, createdAt, updatedAt, publishedAt, image} = attribute;
    const imageUrl = image.data.attributes.url;
  return (
    <div className='bg-alice-blue shadow-md p-4 flex items-center justify-center flex-col gap-2 text-center'>
      <div className="relative h-60 w-full">
        <Image
        src={`http://localhost:1337${imageUrl}`}
        alt='name'
        fill
        sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vw,
                  33vw"
        className='object-cover rounded-md transition-transform duration-300 transform hover:scale-105'
        />
      </div>
        <div className="font-bold text-lg text-accent-black">{name}</div>
        <div className="">{shortDescription}</div>
        {/* <p className="border bg-[#dde6f5] border-accent-orange py-1 px-6 rounded-md">${price}</p> */}
    </div>
  )
}

export default Card