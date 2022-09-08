import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCCDR, getCCDRInfo, getDprInfo } from '../../../../../action-reducers/dpr/dprAction';

import Modal, { ModalHeader } from '../../../../UIComp/Modal';
import Loader from '../../../../Common/Loader';
import FinalStep from '../FinalStep';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function Active({ isOpen, id, type, role, closeModal }) {
  const dprInfo = useSelector(({ dpr }) => dpr.list?.find(d => d.id === id) || {})
  const userDetails = useSelector(({ login }) => login?.userDetails || {})
  const dispatch = useDispatch()

  const [isSubmiting, setIsSubmiting] = useState(false)
  const [isLoading1, setIsLoading1] = useState(true)
  const [isLoading2, setIsLoading2] = useState(type === "View")
  const [isFinished, setIsFinished] = useState(false)

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
      list: [{
        id: "id-0",
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
      }],
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
      PreparedBy: {
        name: "",
        status: "",
        Date: "",
      },
      ApprovedBy: {
        name: "",
        status: "",
        Date: "",
      },
    },
  })

  const currentRole = role === "supervisor" ? "ApprovedBy" : "PreparedBy"

  useEffect(() => {
    dispatch(getDprInfo({ id }, () => setIsLoading1(false)))
    if (type === "View") {
      dispatch(getCCDRInfo({ dprId: id }, (newData) => {
        if (newData) {
          let res = JSON.parse(newData.steps)
          let payload = {
            GeneralInstruction: {
              ...res.GeneralInstruction,
              ProperCleaning: res.GeneralInstruction.ProperCleaning ? "Yes" : 'No',
              CratesAvail: res.GeneralInstruction.CratesAvail ? "Yes" : 'No',
              TrolleyAvail: res.GeneralInstruction.TrolleyAvail ? "Yes" : 'No',
              EquipmentValidity: res.GeneralInstruction.EquipmentValidity ? "Yes" : 'No',
            },
            ProductPacking: {
              ...res.ProductPacking,
            },
            CrateShiftingActive: {
              ...res.CrateShiftingActive,
              Compliance: res.CrateShiftingActive.Compliance ? "Compliance" : "Not compliance",
            },
            FinalSignIn: {
              ...res.FinalSignIn,
            },
          }

          setDetails(payload)
          if (payload.FinalSignIn[currentRole].status) {
            setIsFinished(true)
          }
        }
        setIsLoading2(false)
      }))
    }
  }, [dispatch, id, type, currentRole])

  const onChange = (parentKey, currentKey, value) => {
    setDetails(prev => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        [currentKey]: value
      }
    }))
  }

  const onProductPackingListChange = (id, currentKey, value) => {
    setDetails(prev => ({
      ...prev,
      ProductPacking: {
        list: prev.ProductPacking.list.map(pr => {
          if (pr.id === id) {
            return {
              ...pr,
              [currentKey]: value
            }
          }

          return pr
        }),
        MaxTOR: prev.ProductPacking.MaxTOR,
        Remarks: prev.ProductPacking.Remarks,
      }
    }))
  }

  const addProductPackingList = () => {
    setDetails(prev => ({
      ...prev,
      ProductPacking: {
        list: [
          ...prev.ProductPacking.list,
          {
            id: `id-${prev.ProductPacking.list.length}`,
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
          }
        ],
        MaxTOR: prev.ProductPacking.MaxTOR,
        Remarks: prev.ProductPacking.Remarks,
      }
    }))
  }

  const onSubmit = () => {
    const steps = {
      GeneralInstruction: {
        ...details.GeneralInstruction,
        ProperCleaning: details.GeneralInstruction.ProperCleaning === "Yes",
        CratesAvail: details.GeneralInstruction.CratesAvail === "Yes",
        TrolleyAvail: details.GeneralInstruction.TrolleyAvail === "Yes",
        EquipmentValidity: details.GeneralInstruction.EquipmentValidity === "Yes",
      },
      ProductPacking: {
        ...details.ProductPacking,
      },
      CrateShiftingActive: {
        ...details.CrateShiftingActive,
        Compliance: details.CrateShiftingActive.Compliance === "Compliance",
      },
      FinalSignIn: {
        ...details.FinalSignIn,
      },
    }

    setIsSubmiting(true)
    dispatch(
      createCCDR(
        {
          dprNo: dprInfo.dprNo,
          dprId: dprInfo.id,
          transportMode: dprInfo.transportMode,
          steps
        },
        closeModal
      )
    )
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

            {
              step === 1 &&
              <Step1
                type={type}
                details={details}
                onChange={onChange}
              />
            }

            {step === 2 && <Step2 />}

            {
              step === 3 &&
              <Step3
                type={type}
                details={details}
                onChange={onChange}
                addProductPackingList={addProductPackingList}
                onProductPackingListChange={onProductPackingListChange}
              />
            }

            {
              step === 4 &&
              <Step4
                type={type}
                details={details}
                onChange={onChange}
              />
            }

            {
              step === 5 &&
              <FinalStep
                type={type}
                role={role}
                details={details}
                onChange={onChange}
                userName={`${userDetails?.firstName} ${userDetails?.lastName}`}
                isFinished={isFinished}
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
                !isFinished &&
                role !== "manager" &&
                details?.FinalSignIn?.[currentRole]?.status &&
                <button
                  className='ml-auto bg-[#6e5bc5] text-white disabled:opacity-80'
                  disabled={isSubmiting}
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