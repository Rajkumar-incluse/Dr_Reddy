import { useEffect, useState } from 'react';

function ApproveOrRejectBtn({ type = "Edit", defaultStatus = "", onChange }) {
  const [status, setStatus] = useState(defaultStatus || "")

  useEffect(() => {
    setStatus(defaultStatus)
  }, [defaultStatus])

  const onClk = val => {
    if (type === "View") return;
    setStatus(val)
    onChange?.(val)
  }

  return (
    <>
      <button
        className={`text-sm text-center bg-green-200 text-green-800 rounded-full ${status === 'approved' ? 'outline outline-1 outline-green-800' : ''}`}
        onClick={() => onClk("approved")}
      >
        Approve
      </button>

      <button
        className={`text-sm text-center bg-red-200 text-red-900 rounded-full ${status === 'rejected' ? 'outline outline-1 outline-red-900' : ''}`}
        onClick={() => onClk("rejected")}
      >
        Reject
      </button>
    </>
  )
}

export default ApproveOrRejectBtn