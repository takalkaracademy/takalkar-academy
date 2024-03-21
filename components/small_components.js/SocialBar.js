import {motion} from 'framer-motion'

const SocialBar = () => {
  return (
<ul className="ftco-footer-social list-unstyled float-md-left float-lft p-2 " style={{width: "100%", display: "flex", justifyContent: "center", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "30px"}}>

<motion.div 
initial={{ opacity: 0, scale: 0 }}
whileHover={{scale: 1.2,}}
whileInView={true}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
>
    <li className="mr-4"><a href=" https://wa.me/8888215802?text=Hi, I want to know about course">
        {/* <span className="fa fa-twitter"></span> */}
        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" style={{maxWidth: "40px"}}/>
    </a></li>
</motion.div>

<motion.div 
initial={{ opacity: 0, scale: 0 }}
whileHover={{scale: 1.2}}
whileInView={true}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
>
    <li className="mr-4"><a href="#">
        {/* <span className="fa fa-facebook"></span> */}
        <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" style={{maxWidth: "40px"}}/>
    </a></li>
</motion.div>

<motion.div 
initial={{ opacity: 0, scale: 0 }}
whileHover={{scale: 1.2, }}
whileInView={true}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
>
    <li className="mr-4"><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" style={{maxWidth: "40px"}}/>
    </a></li>

</motion.div>

<motion.div 
initial={{ opacity: 0, scale: 0 }}
whileHover={{scale: 1.2, }}
whileInView={true}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 2.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
>
    <li className="mr-4"><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/3938/3938037.png" style={{maxWidth: "40px"}}/>
    </a></li>

</motion.div>

</ul>


  )
}

export default SocialBar