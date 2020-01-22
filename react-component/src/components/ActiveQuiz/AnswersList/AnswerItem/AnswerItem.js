import React from 'react'
import classes from './AnswerItem.css'
import AnswersList from '../AnswersList'

const AnswerItem = props => {
  return (
    <li className={classes.AnswerItem}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem