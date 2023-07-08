'use client'
import Image from "next/image"
import logo from '@/public/images/logo.png';
import { useRouter } from "next/navigation";

type Props = {}

const Nav = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" p-3 shadow-lg mb-8">
    <div className="flex justify-between items-center w-5/6 mx-auto">
        {/* image */}
        <div className="cursor-pointer" onClick = {() => router.push('/')}>
       <Image
        src={logo}
        alt="logo"
        height={70}
        width={70}
        className="object-cover"
        />
      </div>
      {/* links */}
      <div className="flex gap-4">
        <p className="transition duration-300 text-base hover:text-accent-orange cursor-pointer" onClick = {() => router.push("/")}>Home</p>
        <p className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Design</p>
        <p className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Properties</p>
      </div>
    </div>
    </div>
  )
}

export default Nav