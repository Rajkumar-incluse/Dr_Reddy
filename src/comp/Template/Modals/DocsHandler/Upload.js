import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { documentUpload } from '../../../../action-reducers/dpr/dprAction';

function Upload({ data, onUpload, closeModal }) {
  const [isLoading, setIsLoading] = useState(false)
  const [fileData, setFileData] = useState({})
  const [file, setFile] = useState("")
  const dispatch = useDispatch()

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setFileData(file)
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (e) => {
        setFile(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/*': []
    },
  })

  const onSuccess = d => {
    onUpload(data.dprId, d)
    closeModal()
  }

  const onSubmit = () => {
    setIsLoading(true)
    const formData = new FormData()

    formData.append("document", fileData)
    formData.append("dprNo", data.dprNo)
    formData.append("documentType", data.documentType)
    formData.append("dprId", data.dprId)

    dispatch(documentUpload(formData, onSuccess))
  }

  return (
    <>
      <div
        className='dc w-full h-10 my-4 p-8 border rounded-xl shadow-sm'
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Drag and drop image file here, or click to select image</p>
      </div>

      <div className='h-80 border rounded'>
        {
          file &&
          <img className='h-80 mx-auto object-cover rounded' src={file} alt="uploaded" />
        }
      </div>

      <textarea className='my-4' rows="2" placeholder='Remarks'></textarea>

      <button
        className={`block w-40 py-1.5 mx-auto text-sm rounded-full text-white bg-[#6e5bc5] ${isLoading ? "disabled:opacity-80 disabled:cursor-default" : "hover:bg-[#4b3a92]"}`}
        onClick={onSubmit}
        disabled={isLoading}
      >
        Submit
      </button>
    </>
  )
}

export default Upload