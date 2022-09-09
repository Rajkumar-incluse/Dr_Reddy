function DocBtn({ documents = [], docType = '', onClk = () => { } }) {
  const isUploaded = documents.find(d => d.documentType === docType) || {}

  return (
    <button
      className={`w-24 py-0.5 text-sm rounded-full text-white ${!isUploaded?.id ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
      onClick={() => onClk(isUploaded)}
    >
      {isUploaded?.id ? "View" : "Upload"}
    </button>
  )
}

export default DocBtn