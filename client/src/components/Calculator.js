import React from 'react'
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Zero,
  C,
  Backspace,
  Multiply,
  Subtract,
  Summarize,
  Divide,
  Calculate,
  OpenBracket,
  CloseBracket,
  Negate,
  Point
} from './Buttons'
import { BTN_VALS } from '../consts/btn_values'

const signs = [
  BTN_VALS.summarize,
  BTN_VALS.subtract,
  BTN_VALS.divide,
  BTN_VALS.multiply
]

function Calculator(props) {
  const btnClick = (value) => {
    let finalString, expArr
    const {displayValue} = props 

    switch(value) {
      case BTN_VALS.subtract:
      case BTN_VALS.summarize:
      case BTN_VALS.multiply:
      case BTN_VALS.divide:
        expArr = displayValue.split(' ')
        if( signs.includes(expArr[expArr.length - 2]) ) return 
      case BTN_VALS.openBracket:
      case BTN_VALS.closeBracket:
        finalString = `${displayValue} ${value} `
        break
      case BTN_VALS.backspace:
        let offset = displayValue[displayValue.length - 1] === ' ' ? 2 : 1 
        finalString = displayValue.slice(0, displayValue.length - offset)
        break
      case BTN_VALS.C:
        finalString = ''
        break
      case BTN_VALS.calculate:
        props.saveCalculation(displayValue)
        finalString = eval(displayValue)
        break
      case BTN_VALS.negate:
        expArr = displayValue.split(' ')
        expArr.push( -parseInt( expArr.pop() ) )
        finalString = expArr.join(' ')
        break
      default:
        finalString = `${displayValue}${value}`
    }

    props.setDisplayValue(finalString + '')
  }

  return (
    <div className="calculator">
      <div className="display">
        <p>{props.displayValue || 0}</p>
      </div>
      <div className="buttons">
        <Seven onClick={btnClick} /> <Eight onClick={btnClick} /> <Nine onClick={btnClick} /> <Summarize onClick={btnClick} /> <OpenBracket onClick={btnClick} />
        <Four onClick={btnClick} /> <Five onClick={btnClick} /> <Six onClick={btnClick} /> <Subtract onClick={btnClick} /> <CloseBracket onClick={btnClick} />
        <One onClick={btnClick} /> <Two onClick={btnClick} /> <Three onClick={btnClick} /> <Multiply onClick={btnClick} /> <C onClick={btnClick} />
        <Negate onClick={btnClick} /> <Zero onClick={btnClick} /> <Point onClick={btnClick} /> <Divide onClick={btnClick} /> <Backspace onClick={btnClick} />
        <Calculate onClick={btnClick} />
      </div>
    </div>
  )
}

export default Calculator