import React from 'react'

const page = () => {
  return (
<div className='bg-black'>
    
    <h2 className='text-light d-flex justify-content-center pt-5 '>Choose Your Course</h2>
    <div 
        style={{height: '100vh'}} 
        className="container d-flex align-items-center justify-content-center bg-black"
    >
        
         <div className='col-6  d-flex justify-content-center'>
            <div className='col-6 text-white p-5 m-3' style={{border: "4px solid white", borderRadius: "25px"}}>
                JEE
            </div>
            <div className='col-6 text-white p-5 m-3' style={{border: "4px solid white", borderRadius: "25px"}}>
                NEET
            </div>
         </div>
         <div className='col-6 d-flex justify-content-center m-3 ps-5'>
            <div className='col-6 text-white p-5 m-3' style={{border: "4px solid white", borderRadius: "25px"}}>
                CET
            </div>
            <div className='col-6 text-white p-5 m-3' style={{border: "4px solid white", borderRadius: "25px"}}>
                11-12th Boards
            </div>
         </div>
    </div>
        
</div>
  )
}

export default page