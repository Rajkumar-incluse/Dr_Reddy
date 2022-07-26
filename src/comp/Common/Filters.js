import { useState } from 'react';
import { DropDownWrapper, Menu } from '../UIComp/DropDown';

function Filters({
  activeStatus, setActiveStatus,
  activeMode, setActiveMode
}) {
  const [offsetProps] = useState({ mainAxis: 15, alignmentAxis: -8 })
  const [data] = useState({
    status: ['completed', 'in-progress', 'rejected'],
    mode: ['Active', 'Passive'],
  })

  const updateStatus = val => setActiveStatus(p => p !== val ? val : '')
  const updateMode = val => setActiveMode(p => p !== val ? val : '')

  return (
    <Menu rootCls='ml-auto py-0' label='Filters'>
      <DropDownWrapper
        preventClose
        offsetProps={offsetProps}
        animeOrigin='origin-top-right'
        activeCls="bg-[#6e5bc5] text-white"
        active={activeMode}
        onClk={updateMode}
        list={data.mode}
      >
        Mode
      </DropDownWrapper>

      <DropDownWrapper
        preventClose
        offsetProps={offsetProps}
        animeOrigin='origin-top-right'
        activeCls="bg-[#6e5bc5] text-white"
        active={activeStatus}
        onClk={updateStatus}
        list={data.status}
      >
        Status
      </DropDownWrapper>
    </Menu>
  )
}

export default Filters