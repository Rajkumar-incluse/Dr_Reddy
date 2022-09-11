
function filterCheck(documents = [], filterBy = []) {
  let filtered = documents.reduce((prev, current) => {
    let isPresent = filterBy.includes(current.documentType)
    if (isPresent) {
      prev.push(current.documentType)
    }
    return prev
  }, [])

  return filtered.length === filterBy.length
}

export default filterCheck