import { useState } from 'react';
import Modal, { ModalHeader } from '../../../../UIComp/Modal';
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

function Passive({ isOpen, closeModal }) {
  const [step, setStep] = useState(0)
  const [details, setDetails] = useState({
    GeneralInstruction: {
      InstructionIdPassive: "",
      ProperCleaning: "",
      Callibration: "",
      GelPackPacking: "",
      PackingOperation: "",
      EquipmentValidity: "",
      PicklistAndBoxesCount: "",
      Remarks: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    },
    PackingOperation: {
      OperationId: "",
      InstructionIdPassive: "",
      PolyBox28L: "",
      GelPackFrozen: "",
      GelPackCold: "",
      DataLoggerNum: "",
      CalibrationDueDate: "",
      PlacedInShipperNum: "",
      InHouseBatchNum: "",
      Quantity: "",
      GelPackUnloadingDate: "",
      GelPackUnloadingTime: "",
      GelPackPlacingDate: "",
      GelPackPlacingTime: "",
      TotalConditioning: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    },
    InnerBoxPacking: {
      InnerBoxId: "",
      OperationId: "",
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
      MaxTOR: "",
      Remarks: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    },
    OuterBoxPacking: {
      OuterBoxId: "",
      OperationId: "",
      Date: "",
      BoxNumFrom: "",
      BoxNumTo: "",
      StartTime: "",
      EndTIme: "",
      TOR: "",
      LabelPasted: "",
      StrappedBox: "",
      MaxTOR: "",
      Remarks: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    },
    ShipmentTracking: {
      ShipperId: "",
      OperationId: "",
      TrackingMode: "",
      ReachingTime: "",
      TransitHours: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    },
    DocumentVerification: {
      DocumentId: "",
      OperationId: "",
      MinConditioned1: "",
      MinConditioned2: "",
      FrozenGelPack: "",
      ReqMaterial: "",
      Compliance: "",
      Remarks: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    },
    FinalSignIn: {
      FinalSignInId: "",
      PreparedBy: "",
      ApproveBy: "",
      CreatedBy: "",
      CreatedOn: "",
      ModifiedBy: "",
      ModifiedOn: "",
      Notes: "",
    }
  })

  const onChange = (parentKey, currentKey, value) => {
    setDetails(prev => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        [currentKey]: value
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

      {step === 0 && <Step0 />}
      {step === 1 && <Step1 details={details} onChange={onChange} />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 details={details} onChange={onChange} />}
      {step === 4 && <Step4 details={details} onChange={onChange} />}
      {step === 5 && <Step5 details={details} onChange={onChange} />}
      {step === 6 && <Step6 details={details} onChange={onChange} />}
      {step === 7 && <Step7 details={details} onChange={onChange} />}
      {step === 8 && <Step8 details={details} onChange={onChange} />}
      {step === 9 && <Step9 details={details} onChange={onChange} />}

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
          <button
            className='ml-auto bg-[#6e5bc5] text-white'
            onClick={() => setStep(p => p + 1)}
          >
            Submit
          </button>
        }

      </div>
    </Modal>
  )
}

export default Passive