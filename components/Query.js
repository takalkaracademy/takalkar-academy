"use client"
import Dropdown from "./Dropdown"
import { useState } from "react"
import { processSubmit } from "../server_actions/actions/userActions"
import { motion } from "framer-motion"
import LottieAnimation from "./small_components.js/LottieAnimation"
import { Tilt } from "react-tilt"


const Query = () => {

    const [message, setMessage] = useState("")
    const [submitResult, setSubmitResult] = useState("")
    
    async function handleSubmit(formData){
        const response = await processSubmit(formData)
        if(response.result == true){
            setSubmitResult("success")
        }else{
            setSubmitResult("danger")
        }
        
        setMessage(response.message)
    }

  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
<motion.div
className="container"
initial={{ opacity: 0, scale: 0 }}
whileInView={true}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
>
   <div className="row">
      <div className="col-md-7"></div>
      <div className="col-md-5 order-md-last">
    <Tilt options={{
        max: 10,
        scale: 1,
        speed: 20
    }}>

       <div className="login-wrap p-4  pb-md-4">
           {/* <h3 className="mb-4 fs-4 fw-bold" style={{textAlign: "center", color: "#0d6a90"}}>Contact Us</h3>  */}
           <form action={handleSubmit} className="signup-form">
              <div className="form-group">
                 <label className="label" for="name">Full Name</label>
                 <input type="text" name="name" className="form-control" placeholder="Nisarg Shah" required/>
             </div>
             {/* <div className="form-group">
                 <label className="label" for="email">Email Address</label>
                 <input type="text" className="form-control" placeholder="shah.nisarg39@gmail.com" />
             </div> */}
             <div className="form-group">
              <label className="label" for="mobile">Mobile_No</label>
              <input 
                id="mobile-field" 
                name="mobile_no" 
                type="tel" maxLength={10} 
                minLength={10} 
                className="form-control"
                placeholder="8888812345"  
                required
                />
             </div>
             <div className="form-group">
             <label className="label" for="dropdown">Your Interest</label>
                <Dropdown />
             </div>
             <div className="form-group">
                 <label for="floatingTextarea2">Query</label>
                 <textarea className="form-control pt-3 pb-3" name="query" placeholder="Admissions... Batches... Talk To our Faculty ?" id="floatingTextarea2" style={{height: "100px"}} required></textarea>
                 
            </div>
               

               {/* For password */}
          {/* <div className="form-group">
              <label className="label" for="password">Confirm Password</label>
              <input id="password-field" type="password" className="form-control" placeholder="Confirm Password">
          </div> */}


          {submitResult == "" ? 
          <div className="form-group d-flex justify-content-center">
              <motion.button 
              type="submit" className="btn submit" style={{backgroundColor: "#f77d0a", color: "#FFFFFF", borderRadius: "30px"}}
              whileHover={{ scale: 0.6 }}
                whileInView={{ scale: 0.4 }}
                transition={{
                    duration: 5,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                initial={{scale: 0}}
              >
               <LottieAnimation />
              </motion.button>
          </div>
                :
            null
            }
      </form>

      <p className={`text-center text-${submitResult} fs-7`}>{message}</p> 
     </div>

  </Tilt>
</div>

</div>
</motion.div>
</section>
  )
}

export default Query