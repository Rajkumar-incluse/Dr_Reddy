import cn from 'classnames';

export function CCDRBtn({ status = '', onClick = () => { } }) {
  return (
    <button
      className={
        cn("w-24 h-6 p-0 text-sm text-center rounded-full", {
          "bg-slate-300 text-slate-800": status === "not-started",
          "bg-yellow-200 text-yellow-900": status === "in-progress",
          "bg-green-200 text-green-800": status === "approved",
          "bg-red-200 text-red-900": status === "rejected",
        })
      }
      onClick={onClick}
    >
      {status}
    </button>
  )
}

export function DocBtn({ documents = [], docType = '', onClk = () => { } }) {
  const isUploaded = documents.find(d => d.documentType === docType) || {}

  return (
    <button
      className={
        cn("w-24 py-0.5 text-sm rounded-full text-white", {
          "bg-green-400 hover:bg-green-600": !isUploaded?.id,
          "bg-[#6e5bc5] hover:bg-[#4b3a92]": isUploaded?.id,
        }
        )
      }
      onClick={() => onClk(isUploaded)}
    >
      {isUploaded?.id ? "View" : "Upload"}
    </button>
  )
}

export function DocStatusBtn({ documents = [], docType = '' }) {
  const isUploaded = documents.find(d => d.documentType === docType) || {}

  return (
    <button
      className={
        cn("w-24 h-6 p-0 text-sm text-center rounded-full", {
          "bg-slate-300 text-slate-800": isUploaded?.documentStatus?.status === "not-started" || !isUploaded?.documentStatus?.status,
          "bg-yellow-200 text-yellow-900": isUploaded?.documentStatus?.status === "in-progress",
          "bg-green-200 text-green-800": isUploaded?.documentStatus?.status === "completed",
          "bg-red-200 text-red-900": isUploaded?.documentStatus?.status === "rejected",
        })
      }
    >
      {isUploaded?.documentStatus?.status || "not-started"}
    </button>
  )
}
