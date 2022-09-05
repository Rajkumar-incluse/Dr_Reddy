import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDpr } from "../../../../action-reducers/dpr/dprAction";

function Step2({ dprInfo, closeModal }) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [err, setErr] = useState('')
  const dispatch = useDispatch()

  const [newProduct, setNewProduct] = useState({
    shipperNum: '',
    product: '',
    quantity: '',
  })

  const [tabList, setTabList] = useState(
    Object?.entries(dprInfo?.products?.[0])?.map(([key, value], i) => ({
      product: key,
      batchNo: `N210A${value}${i}Z`,
      quantity: Number(value),
      unpacked: Number(value),
      packed: 0,
    })) || []
  )

  const onChange = e => {
    setNewProduct(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
    setErr('')
  }

  const onSubmit = () => {
    const selected = tabList.find(t => t.product === newProduct.product)

    if (newProduct.quantity > selected.quantity || newProduct.quantity > selected.unpacked) {
      return setErr('Please check the selected product quantity with new quantity.')
    }

    setTabList(prev => prev.map(p => {
      if (p.product === newProduct.product) {
        return {
          ...p,
          unpacked: Number(p.unpacked) - Number(newProduct.quantity),
          packed: Number(p.packed) + Number(newProduct.quantity),
        }
      }
      return p
    }))
    setData(prev => [
      ...prev,
      {
        ...newProduct,
        id: `id-${prev.length}`,
        batchNo: tabList.find(t => t.product === newProduct.product)?.batchNo,
      }
    ])
    setNewProduct({
      shipperNum: '',
      product: '',
      quantity: '',
    })
  }

  const onFinalSubmit = () => {
    setIsLoading(true)
    let last = data[data.length - 1]
    let payload = {
      ...dprInfo,
      packingList: data.map(d => ({
        bNo: d.batchNo,
        sNo: `${d.shipperNum} of ${last.shipperNum}`,
        product: d.product,
        quantity: d.quantity
      }))
    }
    dispatch(createDpr(payload, closeModal))
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-lg font-semibold">Shipper No: {dprInfo.shipperNo}</h4>
          <div className="df">
            <h5 className="text-lg font-medium">From : </h5>
            <p>{dprInfo.from}</p>
          </div>

          <div className="df">
            <h5 className="text-lg font-medium">To : </h5>
            <p>{dprInfo.to}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-medium my-2">Tablets List</h4>
          <div className="max-h-32 overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="sticky top-0 bg-white">
                  <td className="px-4 py-1 border">Product</td>
                  <td className="px-4 py-1 border text-center">Total</td>
                  <td className="px-4 py-1 border text-center">Packed</td>
                  <td className="px-4 py-1 border text-center">Unpacked</td>
                </tr>
              </thead>

              <tbody>
                {
                  tabList.map(t => (
                    <tr key={t.product}>
                      <td className="px-4 py-1 border"> {t.product} </td>
                      <td className="px-4 py-1 border text-center"> {t.quantity} </td>
                      <td className="px-4 py-1 border text-center"> {t.packed} </td>
                      <td className="px-4 py-1 border text-center"> {t.unpacked} </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="scroll-y overflow-y-hidden grid grid-cols-5 gap-4 border-b">
        <div className="pr-4 border-r">
          <label htmlFor="adddpr-shipperNum" className="mt-2">S. No.</label>
          <input
            id="adddpr-shipperNum"
            type="number"
            name="shipperNum"
            className="no-number-arrows"
            value={newProduct.shipperNum}
            onChange={onChange}
          />

          <label htmlFor="adddpr-product" className="mt-2">Select product</label>
          <select
            value={newProduct.product}
            onChange={onChange}
            id='adddpr-product'
            name='product'
          >
            <option value="" disabled>Select product</option>
            {
              tabList
                .filter(t => t.unpacked > 0)
                .map(t => (
                  <option key={t.product} value={t.product}>
                    {t.product}
                  </option>
                ))
            }
          </select>

          <label htmlFor="adddpr-quantity" className="mt-2">Quantity</label>
          <input
            id="adddpr-quantity"
            type="number"
            name="quantity"
            className="no-number-arrows"
            value={newProduct.quantity}
            onChange={onChange}
          />

          <button
            className="block mt-4 mx-auto bg-[#6e5bc5] text-white"
            onClick={onSubmit}
          >
            Add
          </button>

          {
            err &&
            <p className="mt-2 text-center text-red-600">{err}</p>
          }
        </div>

        <div className="col-span-4 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="sticky top-0 bg-slate-200">
                <td className="px-4 py-1">S.NO.</td>
                <td className="px-4 py-1">Produt</td>
                <td className="px-4 py-1 text-center">B.NO.</td>
                <td className="px-4 py-1 text-center">Quantity</td>
              </tr>
            </thead>

            <tbody>
              {
                data.map(d => (
                  <tr key={d.key} className='even:bg-slate-200'>
                    <td className="px-4 py-1">{d.shipperNum} of {data[data.length - 1]?.shipperNum}</td>
                    <td className="px-4 py-1">{d.product}</td>
                    <td className="px-4 py-1 text-center">{d.batchNo}</td>
                    <td className="px-4 py-1 text-center">{d.quantity}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <button
        className="block mt-4 ml-auto bg-[#6e5bc5] text-white disabled:opacity-80"
        disabled={!data.length || isLoading}
        onClick={onFinalSubmit}
      >
        Submit
      </button>
    </>
  )
}

export default Step2