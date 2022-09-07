import { format } from 'date-fns';

function Step0({ dprInfo }) {
  return (
    <div className="max-w-4xl">
      <h1 className="my-6 text-2xl text-center font-bold">Cold Chain PRODUCT DISPATCH RECORD</h1>

      <div className='grid grid-cols-2 gap-4'>
        <p>
          <strong className="inline-block w-28 font-medium">Document No</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.documentNo}
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Version</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.version},CURRENT
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Reference SOP No.</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.referenceSOPNo}
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Legacy Document No.</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.legacyDocNo}
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Department</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.department}
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Effective Date</strong>
          <strong className=" inline-block w-4">:</strong>
          {format(new Date(dprInfo?.createdOn), "dd-MM-yyyy")}
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Pick list No</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.pickingListNo}
        </p>

        <p>
          <strong className="inline-block w-28 font-medium">Destination</strong>
          <strong className=" inline-block w-4">:</strong>
          {dprInfo?.to}
        </p>
      </div>
    </div>
  )
}

export default Step0