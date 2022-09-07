import React from 'react'
import { Toaster } from "react-hot-toast";

const GlobalToaster = () => {
  return (
    <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "#8358ff",
              color: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "#ffffff",
            },
          },
        }}
      />
  )
}

export default GlobalToaster
