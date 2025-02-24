
import {  faFacebookF, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Home() {

  const [data,setdata] = useState([])
  


useEffect(()=>{
  const naseel = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products?limit=20")
    setdata(res.data)
    console.log(res);
    
  
  }
  naseel()
},[])
 



  return (
   <div className='cb'>
        
    <div className='grid md:grid-cols-2  '>

    <div className='pt-12 bag  md:w-full'>
        <img src="https://i.pinimg.com/originals/fb/bc/15/fbbc15bae2db37016750f001076aa504.png" alt="no image" className='md:h-3/4  ' />
      </div>


      <div className='pt-24 '>
          <h1 className='text-2xl text-black'>Trendey collections</h1>
          <h1 className='text-5xl md:text-7xl pt-3 text-black font-medium '>Highest Quality</h1>
          <h1 className='text-5xl md:text-7xl pt-3 text-black font-medium '>Collection</h1>
          <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit consectetur adipisicing elit..</p>
          <h1 className='pt-14 text-2xl font-bold'>Reviews</h1>

          <div className='pt-2 flex  gap-5 md:gap-5  '>
            <div className='bg-white shadow rounded-br-3xl md:w-12  md:h-12 w-8 flex items-center justify-center hover:transform hover:scale-125 duration-300 color-blue'>
            <FontAwesomeIcon icon={faFacebookF} style={{height:'30px'}} />
              </div> 
              <div className='bg-blue-300 shadow rounded-br-3xl md:w-12  md:h-12 w-8 flex items-center justify-center hover:transform hover:scale-125 duration-300 '>
              <FontAwesomeIcon icon={faSquareInstagram} style={{color: "#fafafa",height:'25px'}} />
              </div>
              <div className='bg-white shadow rounded-br-3xl md:w-12  md:h-12 w-8 flex items-center justify-center hover:transform hover:scale-125 duration-300'>
              <FontAwesomeIcon icon={faTwitter} style={{color: "#080808",height:'25px'}} />
              </div>
              <div className='pt-6' >
            <div className='shadow rounded-4xl h-0.5 md:w-28 w-5  border'></div>
              </div>
              <div className='bg-orange-600 rounded-bl-3xl md:w-20 w-16 h-13 flex items-center justify-center hover:transform hover:scale-125 duration-300'>
           <h1 className='text-3xl font-bold'>50 k</h1>
              </div>
              <div className='bg-orange-600 rounded-bl-3xl md:w-20 w-16 h-13 flex items-center justify-center hover:transform hover:scale-125 duration-300 '>
           <h1 className='text-3xl font-bold'>8 k</h1>
              </div>

          </div>
          
      </div>
    
     

    
    
   </div>



   
<h1 className='text-4xl font-bold md:px-16 pt-16'>Bring your business online</h1>
<p className='pt-3 md:px-16'>Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
<h1 className='text-4xl font-bold pt-14 px-16'>#women</h1>



<div className='md:px-5 ms-5'>
  <div className='grid md:grid-cols-4 gap-5 pt-8' >
 {  data.map((item)=>(
  <div className='pt-5'>
  
  <img src={item.image} alt="no image" className='rounded-2xl w-80 h-80' />

  
    <h1 className='pt-2 text-3xl font-bold'>{item.category}</h1>
    <h1 className='text-2xl font-bold '>Rating :{item.rating.rate}</h1>
  
    <h1 className='text-3xl font-bold '>${item.price}</h1>

</div>)) 
 
 }
  
 
  
  
  
  
  </div>
</div>






</div>



  )
}

export default Home