import React from 'react'
import Link from '@mui/material/Link';

function Header() {
  return (
    <div>
        <h2><Link href='/'>Home</Link></h2>
        <h2><Link href='/About'>About</Link></h2>      
    </div>
  )
}
export default Header