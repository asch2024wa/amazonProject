import React from 'react'
import {MoonLoader} from "react-spinners"
function Loader() {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        height:"50vh"
    }}>
        
      <MoonLoader />
    </div>
  )
}

export default Loader