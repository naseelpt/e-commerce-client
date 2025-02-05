import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
    return (
        < >
        <div className='cb h-screen'>
            
                 <h1 className='text-3xl font-bold  text-center pt-16'>Contact us</h1>
                <h1 className='text-center md:px-52 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum eaque labore nobis placeat aspernatur recusandae, eveniet iste quibusdam consectetur enim? Nostrum, dolore? Velit autem cum ea blanditiis voluptate vel!</h1>
    
                <div className='grid md:grid-cols-2 pt-10  '>
    
                    <div className='flex flex-col justify-between px-32'>
    

                     <div>
                            <h1 className='font-bold text-4xl '><FontAwesomeIcon icon={faHouse} style={{ color: "#050505", }} /></h1>
                            <h1 className='text-3xl font-bold'>Address</h1>
                            <p className=' text-2xl '>678583 nattukal <br /> mannarkkad palakkad</p>
        
                     </div>
                     <div>
                            <h1 className='font-bold text-4xl '><FontAwesomeIcon icon={faPhone} style={{color: "#080808",}} /></h1>
                            <h1 className='text-3xl font-bold'>Phone</h1>
                            <p className=' text-2xl '>91+ 6235639468</p>
        
                     </div>
                     <div>
                            <h1 className='font-bold text-4xl '><FontAwesomeIcon icon={faEnvelope} style={{color: "#121212",}} /></h1>
                            <h1 className='text-3xl font-bold'>Email</h1>
                            <p className=' text-2xl '>ptnaseel@gmail.com</p>
        
                     </div>
                    </div>
    
    
    
                        <div className='rounded-4xl border bg-gray-700 w-96'>
                            <div className='ps-16  pt-5  '>
                                <input type="text" placeholder='user' className='w-64 rounded-4xl h-12 text-center bg-white'   />
                            </div>
                            <div className='px-16  pt-5 '>
                                <input type="text" placeholder='email' className='w-64 rounded-4xl h-12 text-center bg-white'  />
                            </div>
                            <div className='px-16  pt-5 '>
                                <input type="text" placeholder='type your message' className='w-64 rounded-2xl h-24 text-center bg-white'  />
                            </div>
                            <div className='px-16  pt-5 '>
                                <button className='w-64 h-10 rounded-4xl bg-blue-600 text-black'>Send</button>
                            </div>
                            
                            
                        </div>
                  
    
    
    
    
    
    
    
                </div>
    
    
    
        </div>
        </>
    )
}

export default Contact