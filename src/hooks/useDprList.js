import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDprInfo } from '../action-reducers/dpr/dprAction';

function useDprList() {
  const dprList = useSelector(({ dpr }) => dpr.list || [])
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState({ type: "", id: "", viewType: "" })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDprInfo({}, () => setIsLoading(false)))
  }, [dispatch])

  const updateOpen = (type, id, viewType = '') => setOpen({ type, id, viewType })

  const closeModal = () => setOpen({ type: "", id: "", viewType: "" })

  return {
    open,
    dprList,
    isLoading,
    updateOpen,
    closeModal,
  }
}

export default useDprList