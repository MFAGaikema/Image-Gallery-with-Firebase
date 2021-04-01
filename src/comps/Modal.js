import React from 'react'
import {motion} from 'framer-motion'

const Modal = ({selectedImg, setSelectedImg}) => {
  const handleClick = (e) => {
    e.target.classList.contains('backdrop') && setSelectedImg(null)
  }

  return (
    <motion.div className='backdrop' onClick={handleClick} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
      <motion.img src={selectedImg} alt={selectedImg} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.8}}/>
    </motion.div>
  )
}

export default Modal
