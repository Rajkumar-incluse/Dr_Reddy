import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { getDoc } from '../action-reducers/dpr/dprAction';

function useDoc() {
  const [isLoading, setIsLoading] = useState(true)
  const [modal, setModal] = useState({ state: false, data: {} })
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const onSuccess = newData => {
      setIsLoading(false)
      setData(newData)
    }

    dispatch(getDoc(onSuccess))
  }, [dispatch])

  const closeModal = () => setModal({ state: false, data: {} })
  const openModal = data => setModal({ state: true, data })

  const onUpload = (id, docs) => {
    setData(prev => prev.map(pr => {
      if (pr.id === id) {
        return {
          ...pr,
          documents: [...pr.documents, { ...docs }]
        }
      }
      return pr
    }))
  }

  return {
    data,
    modal,
    isLoading,
    closeModal,
    openModal,
    onUpload,
  }
}

export default useDoc