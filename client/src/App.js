import React, { useState, useEffect } from 'react'
import Calculator from './components/Calculator'
import Journal from './components/Journal'
import journalAPI from './api/journal'

function App() {
  const [displayValue, setDisplayValue] = useState('')
  const [journal, setJournal] = useState([])
  const [isFetched, setIsFetched] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const backupList = await journalAPI.get.list()
      setJournal(backupList)
    }

    if(!isFetched) {
      fetchData()
      setIsFetched(true)
    }
  });

  const saveCalculation = (calc) => {
    const calcObj = {
      calculation: calc,
      date: new Date()
    }

    journalAPI.post.list(calcObj)
    setJournal([calcObj, ...journal])
  }

  return (
    <div className="App">
      <Calculator
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        saveCalculation={saveCalculation}/>
      <Journal journal={journal} />
    </div>
  )
}

export default App
