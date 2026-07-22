import React from 'react'
import Link from '@mui/material/Link';


function Header() {
  return (
    <>
    <div>       
            <h1><Link href = '/'>Home</Link></h1>
            <h1><Link href = '/About'>About</Link></h1>
            <h1><Link href = '/Useres'>Useres</Link></h1>           
      
    </div>
    </>
  )
}
export default Header