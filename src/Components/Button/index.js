import React from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

export default function Button (props) {
  const { onClick, label } = props

  const handleClick = (event) => {
    event.preventDefault()

    if (!onClick) {
      return
    }

    onClick()
  }

  return (
    <SemanticButton
      inverted
      onClick={handleClick}
    >
      {label}
    </SemanticButton>
  )
}