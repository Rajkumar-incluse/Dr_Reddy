import { useState } from 'react';

function ApproveOrRejectBtn() {
  const [status, setStatus] = useState("")

  return (
    <>
      <button
        className={`text-sm text-center bg-green-200 text-green-800 rounded-full ${status === 'approved' ? 'outline outline-1 outline-green-800' : ''}`}
        onClick={() => setStatus("approved")}
      >
        Approve
      </button>

      <button
        className={`text-sm text-center bg-red-200 text-red-900 rounded-full ${status === 'rejected' ? 'outline outline-1 outline-red-900' : ''}`}
        onClick={() => setStatus("rejected")}
      >
        Reject
      </button>
    </>
  )
}

export default ApproveOrRejectBtn