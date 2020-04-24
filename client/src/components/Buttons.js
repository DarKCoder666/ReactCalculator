import React from 'react'
import Button from './Button'
import { BTN_VALS } from '../consts/btn_values'

const One = (props) => <Button onClick={props.onClick} className="button one" value={BTN_VALS.one} />
const Two = (props) => <Button onClick={props.onClick} className="button two" value={BTN_VALS.two} />
const Three = (props) => <Button onClick={props.onClick} className="button three" value={BTN_VALS.three} />
const Four = (props) => <Button onClick={props.onClick} className="button four" value={BTN_VALS.four} />
const Five = (props) => <Button onClick={props.onClick} className="button five" value={BTN_VALS.five} />
const Six = (props) => <Button onClick={props.onClick} className="button six" value={BTN_VALS.six} />
const Seven = (props) => <Button onClick={props.onClick} className="button seven" value={BTN_VALS.seven} />
const Eight = (props) => <Button onClick={props.onClick} className="button eight" value={BTN_VALS.eight} />
const Nine = (props) => <Button onClick={props.onClick} className="button nine" value={BTN_VALS.nine} />
const Zero = (props) => <Button onClick={props.onClick} className="button zero" value={BTN_VALS.zero} />
const C = (props) => <Button onClick={props.onClick} className="button C" value={BTN_VALS.C} />
const Backspace = (props) => <Button onClick={props.onClick} className="button backspace" value={BTN_VALS.backspace} />
const Multiply = (props) => <Button onClick={props.onClick} className="button multiply" value={BTN_VALS.multiply} />
const Subtract = (props) => <Button onClick={props.onClick} className="button subtract" value={BTN_VALS.subtract} />
const Summarize = (props) => <Button onClick={props.onClick} className="button summarize" value={BTN_VALS.summarize} />
const Divide = (props) => <Button onClick={props.onClick} className="button divide" value={BTN_VALS.divide} />
const Calculate = (props) => <Button onClick={props.onClick} className="button calculate" value={BTN_VALS.calculate} />
const OpenBracket = (props) => <Button onClick={props.onClick} className="button openBracket" value={BTN_VALS.openBracket} />
const CloseBracket = (props) => <Button onClick={props.onClick} className="button closeBracket" value={BTN_VALS.closeBracket} />
const Point = (props) => <Button onClick={props.onClick} className="button point" value={BTN_VALS.point} />
const Negate = (props) => <Button onClick={props.onClick} className="button negate" value={BTN_VALS.negate} />

export {
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
  Point,
  Negate
}