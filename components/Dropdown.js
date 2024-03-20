import React from 'react'

const Dropdown = () => {
  return (
    <select className="form-select form-select-lg form-control " name="interest" id='dropdown' aria-label="Large select example" style={{borderRadius: "40px"}} required>
  <option value="jee">JEE</option>
  <option value="neet">NEET</option>
  <option value="mht-cet">MHT-CET</option>
  <option value="11-12">11th & 12th Board</option>
</select>
  )
}

export default Dropdown