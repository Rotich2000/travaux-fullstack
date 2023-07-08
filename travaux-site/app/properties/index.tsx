'use client';
import React from 'react'
import { MyObject } from '../types/types';
import Card from '../components/Card';

type Props = {
    properties: Array<MyObject>;
}

const Property = ({properties}: Props) => {
  return (
   <div className='mx-auto w-5/6'>
     {/* Heading */}
     <div className="flex flex-col justify-center mb-4 w-3/4 md:w-1/4">
        <p className="font-bold text-accent-black text-lg">What we do</p>
        <h1 className="text-3xl font-bold text-accent-orange">
         Our Properties
        </h1>
        <p className="text-accent-black">
          I&apos;m a paragraph. Click here to add your own text and edit me.
          I&apos;m a great place for you to tell a story and let your users know
          a little more about you.
        </p>
      </div>
      {/* end */}
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {properties.map(({id, attributes}) => (
            <div key={id}>
                <Card attribute={attributes}/>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Property