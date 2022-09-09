import React, { useEffect } from 'react'
import MojoAuth from "mojoauth-web-sdk"

const UseOtp = (props) => {

  
  useEffect(() => {
    const mojoauth = new MojoAuth(process.env.NEXT_PUBLIC_MOJO_AUTH_API_KEY,
    { source: [{ type: 'email', feature: 'otp' }] });

    mojoauth.signIn()
      .then((payload) => {
        props.setPayload(payload);
        document.getElementById("mojoauth-passwordless-form").remove();
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])
  
  return (

    <div className='flex justify-center align-middle'>
      <div id="mojoauth-passwordless-form" className='absolute z-50' />
      {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
    </div>
  )
}

export default UseOtp;