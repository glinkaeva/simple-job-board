import React from 'react'
import s from './additionalLabel.module.scss'

type TAdditionalLabel = {
  color: string,
  text: string,
}

const BlueButton = {
  color: "#55699E",
  bg: "rgba(161, 177, 219, 0.317343)",
  border: "1px solid rgba(85, 105, 158, 0.3)",
}

const YellowButton = {
  color: "#988B49",
  bg: "rgba(255, 207, 0, 0.15)",
  border: "1px solid #FFCF00",
}

export default function AdditionalLabel(props: TAdditionalLabel) {
  const currentColor = props.color == 'blue' ? BlueButton : YellowButton
  return (
    <div className={s.achievements} 
      style={{
        color: currentColor.color,
        background: currentColor.bg,
        border: currentColor.border,
      }}
    >
      <p>{props.text}</p>
    </div>
  )
}
