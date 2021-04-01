import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {
  const {docs} = useFirestore('images')

  const clickHandler = (e) => {
    setSelectedImg(e.target.src)
  }

  return (
    <div className='img-grid'>
      {docs && docs.map(doc => 
        <motion.div 
        key={doc.id} 
        className="img-wrap" 
        onClick={clickHandler} 
        whileHover={{opacity: 1}}
        layout
        >
        
        <motion.img 
          alt={doc.url} 
          src={doc.url}
          initial={{opacity: 0}}
          animate={{opacity: 1}}  
          transition={{delay: 1}}  
        />
        </motion.div>
        )}
    </div>
  )
}

export default ImageGrid
