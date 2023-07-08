"use client";
import React from "react";
import { MyObject } from "../types/types";
import Card from "../components/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  designs: Array<MyObject>;
};

const Design = ({ designs }: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="mx-auto w-5/6 mt-4">
      {/* Heading */}
      <div className="flex flex-col justify-center mb-4 w-3/4 md:w-1/4">
        <p className="font-bold text-accent-black text-lg">How we design</p>
        <h1 className="text-3xl font-bold text-accent-orange">
         Our Designs
        </h1>
        <p className="text-accent-black">
          I&apos;m a paragraph. Click here to add your own text and edit me.
          I&apos;m a great place for you to tell a story and let your users know
          a little more about you.
        </p>
      </div>
      {/* end */}
      <Carousel responsive={responsive}>
      {designs.map(({ id, attributes }) => (
          <div key={id} className="ml-4">
            <Card attribute={attributes} />
          </div>
        ))}
</Carousel>
      
    </div>
  );
};

export default Design;
