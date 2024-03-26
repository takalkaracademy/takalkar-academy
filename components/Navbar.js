"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light p-2" id="ftco-navbar">
   <motion.div 
   className="container"
   initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
   >
     <a className="" href="/">
        <Image src={`/logo.png`} width={200} height={39} style={{maxWidth: "200px"}} alt="not working" />
     </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="oi oi-menu"></span> Menu
   </button>
   <div className="collapse navbar-collapse" id="ftco-nav">
       <ul className="navbar-nav ml-auto">
         <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
         <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
         <li className="nav-item"><a href="course.html" className="nav-link">Course</a></li>
         <li className="nav-item"><a href="instructor.html" className="nav-link">Instructor</a></li>
         <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
         <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
     </ul>
 </div>
</motion.div>
</nav>
  )
}

export default Navbar