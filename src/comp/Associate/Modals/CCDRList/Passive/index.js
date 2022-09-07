import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCCDRInfo, getDprInfo } from '../../../../../action-reducers/dpr/dprAction';

import Modal, { ModalHeader } from '../../../../UIComp/Modal';
import Loader from '../../../../Common/Loader';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';

function Passive({ isOpen, id, type, closeModal }) {
  const dprInfo = useSelector(({ dpr }) => dpr.list?.find(d => d.id === id) || {})
  const userDetails = useSelector(({ login }) => login?.userDetails || {})
  const dispatch = useDispatch()

  const [isLoading1, setIsLoading1] = useState(true)
  const [isLoading2, setIsLoading2] = useState(type === "View")
  const [step, setStep] = useState(0)

  const [details, setDetails] = useState({
    GeneralInstruction: {
      ProperCleaning: "",
      Callibration: "",
      GelPackPacking: "",
      PackingOperation: "",
      EquipmentValidity: "",
      PicklistAndBoxesCount: "",
      Remarks: "",
    },
    PackingOperation: {
      PolyBox28L: "",
      GelPackFrozen: "",
      GelPackCold2kg: "",
      GelPackCold3kg: "",
      DataLoggerNumInternal: "",
      DataLoggerNumExternal: "",
      CalibrationDueDateInternal: "",
      CalibrationDueDateExternal: "",
      PlacedInShipperNum: "",
      list: [{
        id: 'id-0',
        InHouseBatchNum: "",
        Quantity: "",
        GelPackUnloadingDate: "",
        GelPackUnloadingTime: "",
        GelPackPlacingDate: "",
        GelPackPlacingTime: "",
        TotalConditioning: "",
      }]
    },
    InnerBoxPacking: {
      list: [{
        id: 'id-0',
        Date: "",
        BoxNumFrom: "",
        BoxNumTo: "",
        ProductName: "",
        BatchNum: "",
        PackedQuant: "",
        PackingStartTime: "",
        PackingEndTime: "",
        TOR: "",
        DoneBy: "",
      }],
      MaxTOR: "",
      Remarks: "",
    },
    OuterBoxPacking: {
      list: [{
        id: 'id-0',
        Date: "",
        BoxNumFrom: "",
        BoxNumTo: "",
        StartTime: "",
        EndTIme: "",
        TOR: "",
        LabelPasted: "",
        StrappedBox: "",
      }],
      MaxTOR: "",
      Remarks: "",
    },
    ShipmentTracking: {
      TrackingMode: "",
      ReachingTime: "",
      TransitHours: "",
    },
    DocumentVerification: {
      MinConditioned1: "",
      MinConditioned2: "",
      FrozenGelPack: "",
      ReqMaterial: "",
      Compliance: "",
      Remarks: "",
    },
    FinalSignIn: {
      PreparedBy: {
        name: "",
        status: ""
      },
      ApprovedBy: {
        name: "",
        status: ""
      },
    },
  })

  const currentRole = userDetails?.role === "supervisor" ? "ApprovedBy" : "PreparedBy"

  console.log(details)

  useEffect(() => {
    dispatch(getDprInfo({ id }, () => setIsLoading1(false)))
    if (type === "View") {
      dispatch(getCCDRInfo({ dprId: id }, (newData) => {
        if (newData) {
          console.log(newData)
        }
        setIsLoading2(false)
      }))
    }
  }, [dispatch, id, type])

  const onChange = (parentKey, currentKey, value) => {
    setDetails(prev => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        [currentKey]: value
      }
    }))
  }

  const onListChange = (parentKey, id, currentKey, value) => {
    setDetails(prev => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        list: prev[parentKey].list.map(pr => {
          if (pr.id === id) {
            return {
              ...pr,
              [currentKey]: value
            }
          }

          return pr
        }),
      }
    }))
  }

  const addPackingOperation = () => {
    setDetails(prev => ({
      ...prev,
      PackingOperation: {
        PolyBox28L: prev.PackingOperation.PolyBox28L,
        GelPackFrozen: prev.PackingOperation.GelPackFrozen,
        GelPackCold2kg: prev.PackingOperation.GelPackCold2kg,
        GelPackCold3kg: prev.PackingOperation.GelPackCold3kg,
        DataLoggerNumInternal: prev.PackingOperation.DataLoggerNumInternal,
        DataLoggerNumExternal: prev.PackingOperation.DataLoggerNumExternal,
        CalibrationDueDateInternal: prev.PackingOperation.CalibrationDueDateInternal,
        CalibrationDueDateExternal: prev.PackingOperation.CalibrationDueDateExternal,
        PlacedInShipperNum: prev.PackingOperation.PlacedInShipperNum,
        list: [
          ...prev.PackingOperation.list,
          {
            id: `id-${prev.PackingOperation.list.length}`,
            InHouseBatchNum: "",
            Quantity: "",
            GelPackUnloadingDate: "",
            GelPackUnloadingTime: "",
            GelPackPlacingDate: "",
            GelPackPlacingTime: "",
            TotalConditioning: "",
          }
        ],
      }
    }))
  }

  const addInnerBoxPacking = () => {
    setDetails(prev => ({
      ...prev,
      InnerBoxPacking: {
        list: [
          ...prev.InnerBoxPacking.list,
          {
            id: `id-${prev.InnerBoxPacking.list.length}`,
            Date: "",
            BoxNumFrom: "",
            BoxNumTo: "",
            ProductName: "",
            BatchNum: "",
            PackedQuant: "",
            PackingStartTime: "",
            PackingEndTime: "",
            TOR: "",
            DoneBy: "",
          }
        ],
        MaxTOR: prev.InnerBoxPacking.MaxTOR,
        Remarks: prev.InnerBoxPacking.Remarks,
      }
    }))
  }

  const addOuterBoxPacking = () => {
    setDetails(prev => ({
      ...prev,
      OuterBoxPacking: {
        list: [
          ...prev.OuterBoxPacking.list,
          {
            id: `id-${prev.OuterBoxPacking.list.length}`,
            Date: "",
            BoxNumFrom: "",
            BoxNumTo: "",
            StartTime: "",
            EndTIme: "",
            TOR: "",
            LabelPasted: "",
            StrappedBox: "",
          }
        ],
        MaxTOR: prev.OuterBoxPacking.MaxTOR,
        Remarks: prev.OuterBoxPacking.Remarks,
      }
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader
        title='CCDR'
        closeModal={closeModal}
      />

      {
        (isLoading1 || isLoading2)
          ? <Loader wrapperCls='w-[50vw] h-40' />
          : <>
            {step === 0 && <Step0 dprInfo={dprInfo} />}
            {step === 1 && <Step1 details={details} onChange={onChange} />}
            {step === 2 && <Step2 />}

            {
              step === 3 &&
              <Step3
                type={type}
                details={details}
                onChange={onChange}
                onListChange={onListChange}
                addPackingOperation={addPackingOperation}
              />
            }

            {
              step === 4 &&
              <Step4
                type={type}
                details={details}
                onChange={onChange}
                onListChange={onListChange}
                addInnerBoxPacking={addInnerBoxPacking}
              />
            }

            {step === 5 && <Step5 />}

            {
              step === 6 &&
              <Step6
                type={type}
                details={details}
                onChange={onChange}
                onListChange={onListChange}
                addOuterBoxPacking={addOuterBoxPacking}
              />
            }

            {
              step === 7 &&
              <Step7
                type={type}
                details={details}
                onChange={onChange}
              />
            }

            {
              step === 8 &&
              <Step8
                type={type}
                details={details}
                onChange={onChange}
              />
            }

            {
              step === 9 &&
              <Step9
                type={type}
                details={details}
                onChange={onChange}
                userName={`${userDetails?.firstName} ${userDetails?.lastName}`}
                currentRole={currentRole}
                defaultStatus={details?.FinalSignIn?.[currentRole]?.status || ""}
              />
            }

            <div className='df'>
              {
                step > 0 &&
                <button
                  className='bg-[#6e5bc5] text-white'
                  onClick={() => setStep(p => p - 1)}
                >
                  Previous
                </button>
              }

              {
                step < 9 &&
                <button
                  className='ml-auto bg-[#6e5bc5] text-white'
                  onClick={() => setStep(p => p + 1)}
                >
                  Next
                </button>
              }

              {
                step === 9 &&
                type === "Edit" &&
                details?.FinalSignIn?.[currentRole]?.status &&
                <button
                  className='ml-auto bg-[#6e5bc5] text-white'
                  onClick={() => setStep(p => p + 1)}
                >
                  Submit
                </button>
              }

            </div>
          </>
      }
    </Modal>
  )
}

export default Passive