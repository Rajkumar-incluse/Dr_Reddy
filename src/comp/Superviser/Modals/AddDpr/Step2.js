import { useState } from "react";

function Step2() {
  const [err, setErr] = useState('')
  const [newProduct, setNewProduct] = useState({
    shipperNum: '',
    product: '',
    quantity: '',
  })

  const [tabList, setTabList] = useState([
    {
      product: 'Cresp 40mcg PFS Hospital Supply DOM',
      batchNo: 'N210620A',
      quantity: 180,
      unpacked: 180,
      packed: 0,
    },
    {
      product: 'Grastim 300mcg/ml Vial',
      batchNo: '4420032',
      quantity: 1200,
      unpacked: 1200,
      packed: 0,
    },
  ])

  const [data, setData] = useState([])

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

  return (
    <>
      {/* <div className="df">
        <h2 className="text-xl font-medium -mt-2 mb-2">Packing list</h2>
        <p className="ml-auto font-semibold">Shipper No: 1234</p>
      </div> */}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-lg font-semibold">Shipper No: 89213600</h4>
          <div className="df">
            <h5 className="text-lg font-medium">From : </h5>
            <p>Hydrabad, 500 090, A.P.</p>
          </div>

          <div className="df">
            <h5 className="text-lg font-medium">To : </h5>
            <p>Dr.Reddys Lab Ltd, C\o-Pharmacare Logistics Pvt Ltd, Bhiwandi, Dist Thane, 421 302.</p>
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
                  <option value={t.product}>
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
        disabled={!data.length}
      >
        Submit
      </button>
    </>
  )
}

export default Step2