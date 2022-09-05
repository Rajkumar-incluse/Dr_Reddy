function Step7({ details, onChange }) {
  return (
    <div>
      <h1 className="my-6 text-xl font-bold">7. Shipment Tracking: </h1>

      <table className='w-full'>
        <thead>
          <tr className="text-center">
            <td className='px-4 py-1 border'>Tracking mode <br /> (Web/SAP/Phone/mail etc.)</td>
            <td className='px-4 py-1 border'>Shipment Reached to <br /> CFA/Stockiest (D) (Date /time)</td>
            <td className='px-4 py-1 border' colSpan='2'>Total transit hours in HH:MM <br /> (E=D-B)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-1 border'><input type="text" /></td>
            <td className='px-4 py-1 border'><input type="text" /></td>
            <td className='px-4 py-1 border'>Should not exceed Validity period of 68:55 hrs.</td>
            <td className='px-4 py-1 border'><input type="text" /></td>
          </tr>
        </tbody>
      </table>

      <div className="my-6">
        <strong>Note: </strong>
        Shipment tracking details shall be entered after delivery at destination point.
      </div>
    </div>
  )
}

export default Step7