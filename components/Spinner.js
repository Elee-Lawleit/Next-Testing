import React from 'react'
import Image from 'next/image'
import spinner from "public/spinner.gif"
import { usePromiseTracker } from 'react-promise-tracker'

const Spinner = () => {
  const promiseInProgress = usePromiseTracker(); 
  console.log("Promise value: ", promiseInProgress)
  return (
      <div className='flex justify-center align-middle absolute z-50'>
        {
          (promiseInProgress.promiseInProgress === true)?
          <Image src={spinner} height={100} width={100}/> : null
        }
      </div>
)}

export default Spinner;