// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = {}
  
    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
      appliedJob = JSON.parse(storedJob)
    }
  
    // add quantity
    const quantity = appliedJob[id]
    if (quantity) {
      const newQuantity = quantity + 1
      appliedJob[id] = newQuantity
    } else {
      appliedJob[id] = 1
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob))
  }
  
  const getStoredJob = () => {
    let appliedJob = {}
  
    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
      appliedJob = JSON.parse(storedJob)
    }
    return appliedJob
  }
  
  const removeFromDb = id => {
    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
      const appliedJob = JSON.parse(storedJob)
      if (id in appliedJob) {
        delete appliedJob[id]
        localStorage.setItem('applied-job', JSON.stringify(appliedJob))
      }
    }
  }
  
  
  export { addToDb, getStoredJob, removeFromDb}