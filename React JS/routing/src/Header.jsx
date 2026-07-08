import Link from '@mui/material/Link';
import React from 'react'

function Header() {
  return (
    <>
    <div className='flex'>
        <h5> <Link href='/'>Home</Link> </h5>
        <h5><Link href = '/about'>About</Link></h5>
        <h5><Link href = '/help'>Help</Link></h5>      
    </div>
    </>
  )
}
export default Header
