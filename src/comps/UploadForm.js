import React, {useState} from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  const changeHandler = (e) => {
    setError('')
    let selected = e.target.files[0]

    selected && selected.type.split('/')[0] === 'image' ? 
    setFile(selected) :
    setError('please only add images')
  }  

  return (
    <form>
    <label>
    <input type="file" onChange={changeHandler} />
    <span>+</span>
  </label>
      {error ? <div>{error}</div> : file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile}/>}
      
    </form>
  )
}

export default UploadForm
