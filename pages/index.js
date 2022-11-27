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
            <h1 className='font-extrabold text-3xl font-Hack'>
              Welcome to BIIT Appointment System
            </h1>
          </div>
          <div className="flex flex-col text-center gap-3">
            <h1 className='font-extrabold text-3xl font-Hack'>Who we are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veritatis sed quis. Sapiente nulla similique distinctio eligendi. Neque debitis sapiente minima ea! Labore, tempora. Quidem accusamus dolores quam numquam ipsa error assumenda, temporibus fugiat non! Omnis deserunt recusandae illum eaque sit repudiandae earum veritatis placeat? Rerum, cupiditate odio. Obcaecati inventore sapiente blanditiis sequi tempore quasi!</p>
          </div>
        </div>
      }
      {!session && <div className='flex flex-col min-h-full items-center justify-center gap-3'>
        <div className='flex flex-col text-center gap-3'>
          <h1 className='font-extrabold text-3xl font-Hack'>
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
