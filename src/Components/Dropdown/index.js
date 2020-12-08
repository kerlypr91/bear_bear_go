import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

export default function Dropdown (props) {
  const { placeholder, options, className, onChange, value } = props

  const handleChange = (event, data) => {
    const { value } = data

    event.preventDefault()

    if (!onChange) {
      return
    }

    onChange(value)
  }

  return (
    <SemanticDropdown
      placeholder={placeholder}
      selection
      options={options.map(item => {
        return {
          key: item.toLowerCase(),
          text: item,
          value: item.toLowerCase()
        }
      })}
      onChange={handleChange}
      value={value}
      className={className || ''}
    />
  )
}