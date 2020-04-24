import React from 'react'

function Button(props) {
  return (
    <div className={props.className} onClick={() => props.onClick(props.value)}>
      {props.value || ''}
    </div>
  )
}

export default Button