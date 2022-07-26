import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function Upload() {
  const [file, setFile] = useState("")

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
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
        className="block w-40 py-1.5 mx-auto text-sm rounded-full text-white bg-[#6e5bc5] hover:bg-[#4b3a92]"
      >
        Submit
      </button>
    </>
  )
}

export default Upload