import React from 'react'
import Image from 'next/image'
import spinner from "public/spinner.gif"


const Spinner = () => {
  return (
        <div className='flex justify-center mt-10'>
            <Image src={spinner} height={100} width={100}/>
        </div>
)}

export default Spinner;