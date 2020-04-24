import React, { useState } from 'react'


function Journal(props) {
  const {journal} = props

  const journalElements = journal.map(el => (
    <li>{el.calculation}</li>
  ))

  return (
    <div className="journal">
      <h1>Last calculations:</h1>
      <ul>
        {journalElements}
      </ul>
    </div>
  )
}

export default Journal