

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setopen] = useState(false)
  return (
    <div className='flex justify-between pr-40 items-center ca  '>
      
   <div className='pt-3 flex items-center  '>
    
  
    <h1 className='text-2xl font-bold ps-96'>Leberel</h1>
    
   
     </div>
    
     <div className=' h-16 items-center gap-16 hidden md:flex'>
   
   <Link to={"/"}><h1 className='text-2xl font-bold gap-11'>Home</h1></Link>
  <Link to={"about"}> <h1 className='text-2xl font-bold'>About</h1></Link>
  <Link to={"contact"}> <h1 className='text-2xl font-bold'>Contact</h1></Link>
   <Link to={"login"}><button className='bg-amber-600 rounded-2xl w-16 h-8'>sign in</button></Link>
  
</div>

    
   

    </div>
  )
}

export default Header



