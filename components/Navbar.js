"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = (props) => {

    const [selectedLink, newSelectedLink] = useState(props.active)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light p-2" id="ftco-navbar">
   <motion.div 
   className="container"
   initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
   >
     <Link className="" href="/">
        <Image src={`/logo.png`} width={200} height={39} style={{maxWidth: "200px"}} alt="not working" />
     </Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="oi oi-menu"></span> Menu
   </button>
   <div className="collapse navbar-collapse" id="ftco-nav">
       <ul className="navbar-nav ml-auto">

         <li className={selectedLink == "home" ? "nav-item active" : "nav-item"}>
            <Link href="/" className="nav-link">Home</Link>
        </li>

         <li className={selectedLink == "results" ? "nav-item active" : "nav-item"} >
            <Link href="/results" className="nav-link">Results</Link>
        </li>

        <li className={selectedLink == "curiculum" ? "nav-item active" 
        :
            <Link href="/curiculum" className="nav-link">Curriculum</Link>
        }>

        </li>

        <li className={selectedLink == "contact" ? "nav-item active" : "nav-item"} >
            <Link href="/contact" className="nav-link">Contact Us</Link>
        </li>
        
     </ul>
 </div>
</motion.div>
</nav>
  )
}

export default Navbar