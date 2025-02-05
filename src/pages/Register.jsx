import React from 'react'

function Register() {
  return (
    <div className='flex items-center justify-center py-16 bb h-screen '>


    <div className='rounded-4xl border bg-blue-400 w-96 py-12 gap-10'>
        <h1 className='text-3xl font-bold text-center text-white'>Register</h1>
                                <div className='px-12  pt-5  '>
                                    <input type="text" placeholder='User name' className='w-72  rounded-4xl h-12 text-center bg-white'   />
                                </div>
                                <div className='px-12  pt-5  '>
                                    <input type="text" placeholder='Email' className='w-72  rounded-4xl h-12 text-center bg-white'   />
                                </div>
                                <div className='px-12  pt-5 '>
                                    <input type="text" placeholder='Password' className='w-72 rounded-4xl h-12 text-center bg-white'  />
                                </div>
                                
                                <div className='px-12  pt-5 '>
                                    <button className='w-72 h-10 rounded-4xl bg-blue-600 text-white'>register</button>
                                    <p>Don't have an acoount?login here</p>
                                </div>
                                
                                
                            </div>
    
        </div>
  )
}

export default Register