import React from 'react'
import AppSkeloton from 'components/AppSkeleton'
import { Button } from '@mantine/core'
import Link from 'next/link'

export default function ({ session }) {


  return (
    <AppSkeloton session={session}>
      {session &&
        <div className='flex flex-col min-h-full items-center justify-center gap-3'>
          <div className='flex flex-col text-center gap-3'>
            <h1 className='font-extrabold text-3xl font-Montserrat'>
              Welcome to BIIT Appointment System
            </h1>
          </div>
          <div className="flex flex-col text-center gap-3">
            <p>Feel free to explore. Create meetings with ease.</p>
          </div>
        </div>
      }
      {!session && <div className='flex flex-col min-h-full items-center justify-center gap-3'>
        <div className='flex flex-col text-center gap-3'>
          <h1 className='font-extrabold text-3xl font-Montserrat'>
            Welcome to BIIT Appointment System
          </h1>
          <p>
            Choose one of the options to unlock the website.
          </p>
        </div>

        <div className='flex justify-center gap-2'>
          <Link href="/login">
            <Button className='bg-purple-500 hover:bg-purple-600' component='a'>Log In</Button>
          </Link>

          <Link href="/signup">
            <Button className='bg-purple-500 hover:bg-purple-600' component='a'>Sign Up</Button>
          </Link>
        </div>
      </div>}
    </AppSkeloton>
  )
}
