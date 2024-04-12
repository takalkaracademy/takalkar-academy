import React from 'react'

const CetMarks = () => {
  return (
    <>
    {/* examination details  */}
    <div className="container d-flex flex-column align-items-center">
      <div className="examination-details d-flex jusitfy-content-center align-items-center flex-column">
        <h2 className='display-4 ps-1 pe-1 fw-lighter'>MARKS DISTRIBUTION</h2>
        <p className='fs-2 text-dark fw-light pt-2 ps-4 pe-4' 
            style={{
             borderBottom: "4px solid black",
             borderBottomLeftRadius: "15px",
             borderBottomRightRadius: "15px",
             boxShadow: "0px 0px 20px rgb(119, 44, 232)"
            }}
                >CET CONSISTS OF <span className='text-danger me-0'>2</span> Categories
        </p>
        <ul className='text-dark fs-5'>
          <li>Physics, Chemistry, Math (<span className='text-danger me-0'>PCM</span>) – 200 Marks</li>
          <li>Physics, Chemistry, Biology (<span className='text-danger me-0'>PCB</span>) – 200 Marks</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default CetMarks