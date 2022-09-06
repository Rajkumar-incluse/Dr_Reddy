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

function Active({ isOpen, id, type, closeModal }) {
  const dprInfo = useSelector(({ dpr }) => dpr.list?.find(d => d.id === id) || {})
  const dispatch = useDispatch()

  const [isLoading1, setIsLoading1] = useState(true)
  const [isLoading2, setIsLoading2] = useState(type === "View")
  const [step, setStep] = useState(0)

  const [details, setDetails] = useState({
    GeneralInstruction: {
      ProperCleaning: "",
      Callibration: "",
      CratesAvail: "",
      TrolleyAvail: "",
      EquipmentValidity: "",
      Remarks: "",
    },
    ProductPacking: {
      Date: "",
      BoxNumFrom: "",
      BoxNumTo: "",
      ProductName: "",
      BatchNum: "",
      Quantity: "",
      StartTime: "",
      EndTime: "",
      TOR: "",
      DoneBy: "",
      MaxTOR: "",
      Remarks: "",
    },
    CrateShiftingActive: {
      TruckChamberTemp: "",
      ColdRoomTime: "",
      ContainerTime: "",
      TOR: "",
      DataLoggerUsages: "",
      DataLoggerNum: "",
      CallibrationDueDate: "",
      ShipmentTrackingMode: "",
      CFAReaching: "",
      Compliance: "",
    },
    FinalSignIn: {
      PreparedBy: "",
      ApproveBy: "",
    },
  })

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

  const onSubmit = () => {

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
            {step === 1 && <Step1 type={type} details={details} onChange={onChange} />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 type={type} details={details} onChange={onChange} />}
            {step === 4 && <Step4 type={type} details={details} onChange={onChange} />}
            {step === 5 && <Step5 type={type} details={details} onChange={onChange} />}

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
                step < 5 &&
                <button
                  className='ml-auto bg-[#6e5bc5] text-white'
                  onClick={() => setStep(p => p + 1)}
                >
                  Next
                </button>
              }

              {
                step === 5 &&
                <button
                  className='ml-auto bg-[#6e5bc5] text-white'
                  disabled={!details.FinalSignIn.PreparedBy}
                  onClick={onSubmit}
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

export default Active