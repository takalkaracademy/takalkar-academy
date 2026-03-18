"use client"
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import BlackBirdAnimation from './small_components.js/BlackBirdAnimation'
import jeeStudent from '../public/jeeStudent.JPG'
import neetStudent from '../public/neetStudent.jpeg'
import cetStudent from '../public/cetStudent.jpeg'
import boardsStudent from '../public/boardsStudent.png'

const CoursesSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const getHoverScale = () => {
    if (isMobile) return 1.1
    if (isTablet) return 1.2
    return 1.3
  }

  const courses = [
    {
      id: 'jee',
      title: 'JEE',
      image: jeeStudent.src,
      backgroundSize: 'contain',
      href: '/jee'
    },
    {
      id: 'neet',
      title: 'NEET',
      image: neetStudent.src,
      backgroundSize: 'cover',
      href: '/neet'
    },
    {
      id: 'cet',
      title: 'MHT-CET',
      image: cetStudent.src,
      backgroundSize: 'cover',
      href: '/cet'
    },
    {
      id: 'boards',
      title: '11th-12th Boards',
      image: boardsStudent.src,
      backgroundSize: 'contain',
      href: '/boards'
    }
  ]

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-12 heading-section text-center">
            <span className="subheading">Start Learning Today</span>
            <h2 className={`mb-4 ${isMobile ? 'fs-3' : 'fs-2'}`}>Courses That We Offer</h2>
          </div>
        </div>
        
        <div className="row justify-content-center g-4">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id}
              className={isMobile ? "col-6" : isTablet ? "col-md-4 col-lg-3" : "col-md-3 col-lg-2"}
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: getHoverScale() }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <a 
                  href={course.href} 
                  className="course-category img d-block" 
                  style={{
                    backgroundImage: `url(${course.image})`, 
                    backgroundSize: course.backgroundSize,
                    width: isMobile ? '120px' : isTablet ? '150px' : '180px',
                    height: isMobile ? '120px' : isTablet ? '150px' : '180px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                />
                <div className="text-center mt-3">
                  <h3 className={`fw-normal ${isMobile ? 'fs-6' : isTablet ? 'fs-5' : 'fs-4'}`}>
                    {course.id === 'boards' ? (
                      <>11<sup>th</sup>-12<sup>th</sup> Boards</>
                    ) : (
                      course.title
                    )}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection